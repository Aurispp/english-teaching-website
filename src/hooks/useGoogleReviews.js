import { useEffect, useState } from 'react';

let cache = {};

export const useGoogleReviews = (language) => {
  const [state, setState] = useState(() => ({
    loading: !cache[language],
    error: null,
    data: cache[language] || null,
  }));

  useEffect(() => {
    if (cache[language]) {
      setState({ loading: false, error: null, data: cache[language] });
      return undefined;
    }

    const controller = new AbortController();

    const loadReviews = async () => {
      try {
        const response = await fetch(`/.netlify/functions/google-reviews?language=${language}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Google reviews endpoint returned ${response.status}`);
        }

        const data = await response.json();
        cache[language] = data;
        setState({ loading: false, error: null, data });
      } catch (error) {
        if (error.name === 'AbortError') return;
        setState({ loading: false, error, data: null });
      }
    };

    setState({ loading: true, error: null, data: null });
    loadReviews();

    return () => controller.abort();
  }, [language]);

  return state;
};
