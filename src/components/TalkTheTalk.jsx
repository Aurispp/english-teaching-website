import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Play,
    RotateCcw,
    Shuffle,
    Check,
    Mail,
    GraduationCap,
    HelpCircle,
    LogIn,
    Timer,
    X,
    Zap,
} from 'lucide-react';
import { themes, difficulties, getRandomTopic } from '../data/speakingTopics';
import { getThemeIcon, getDifficultyIcon } from './ThemeIcons';
import { useLanguage } from '../context/LanguageContext';
import Hourglass from './Hourglass';
import whatsappIcon from '../whatsapp.webp';
import { trackEvent } from '../utils/analytics';

const formatSeconds = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * 4/3/2 ladders (Nation). Same topic retold with less time each round: once the
 * content stops being new, the freed attention goes into the language itself,
 * and the shrinking clock is what stops the learner padding instead of speeding
 * up. The ratio between rounds matters more than the absolute lengths, hence
 * the shorter ladders for learners who can't sustain four minutes of content.
 */
const DRILL_LADDERS = [
    { id: 'short', name: 'Short', rounds: [120, 90, 60] },
    { id: 'standard', name: 'Standard', rounds: [180, 120, 90] },
    { id: 'classic', name: 'Classic', rounds: [240, 180, 120] },
];

const PRACTICE_MODES = [
    { id: 'free', name: 'Free Practice', Icon: Timer },
    { id: 'drill', name: 'Same topic, three times', Icon: Zap },
];

const SLIDE_EASING = 'transform 320ms cubic-bezier(0.34, 1.45, 0.64, 1)';

/**
 * The round rail. Each capsule grows in proportion to its own duration, so the
 * squeeze is visible before it is felt.
 */
const RoundRail = ({ rounds, activeIndex, className = '' }) => (
    <div className={`flex items-stretch gap-2 ${className}`}>
        {rounds.map((secs, index) => {
            const state = index < activeIndex ? 'done' : index === activeIndex ? 'active' : 'upcoming';
            return (
                <div
                    key={index}
                    style={{ flexGrow: secs }}
                    className={`basis-0 min-w-0 rounded-xl border px-2 py-2 text-center transition-all duration-500 ease-out ${state === 'active'
                        ? 'border-transparent bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-200'
                        : state === 'done'
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 bg-white text-gray-500'
                        }`}
                >
                    <div className="flex items-center justify-center gap-1 text-[10px] font-semibold uppercase tracking-wider opacity-80">
                        {state === 'done' && <Check className="w-3 h-3 flex-shrink-0" />}
                        <span className="truncate">Round {index + 1}</span>
                    </div>
                    <div className="font-mono font-bold text-sm sm:text-base tabular-nums">{formatSeconds(secs)}</div>
                </div>
            );
        })}
    </div>
);

/**
 * Talk the Talk - Free Speech Practice Tool
 * Full-page speaking practice experience, ported from the student portal so
 * the public tool and the portal share one UI, one prompt bank and one drill.
 */
const TalkTheTalk = ({ isOpen, onClose }) => {
    const { language, setLanguage } = useLanguage();
    const [screen, setScreen] = useState('select');
    const [showHelp, setShowHelp] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('relatable');
    const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
    const [mode, setMode] = useState('drill');
    const [ladderId, setLadderId] = useState('standard');
    const [roundIndex, setRoundIndex] = useState(0);
    const [freeDuration, setFreeDuration] = useState(60);
    const [duration, setDuration] = useState(60);
    const [topic, setTopic] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [readyHidden, setReadyHidden] = useState(false);
    const [showDone, setShowDone] = useState(false);
    const [customMinutes, setCustomMinutes] = useState('01');
    const [customSeconds, setCustomSeconds] = useState('00');
    const [transitionMs, setTransitionMs] = useState(200);

    const timerRef = useRef(null);
    const transitionTimeoutRef = useRef(null);
    const completionTimeoutRef = useRef(null);
    const doneDelayRef = useRef(null);

    const transitionDurationDefault = 200; // ms crossfade
    const readyToDoneDelay = 2400; // ms delay before showing "I'm Done"
    const completionHoldMs = 5000; // ms hold on finished view before showing results

    const isDrill = mode === 'drill';
    const ladder = DRILL_LADDERS.find(l => l.id === ladderId) || DRILL_LADDERS[1];
    const totalRounds = ladder.rounds.length;
    const isLastRound = roundIndex >= totalRounds - 1;

    const trackTalkEvent = useCallback((eventName, params = {}) => {
        trackEvent(eventName, {
            event_category: 'talk_the_talk',
            theme: selectedTheme,
            difficulty: selectedDifficulty,
            mode,
            ladder: isDrill ? ladderId : undefined,
            round: isDrill ? roundIndex + 1 : undefined,
            duration_seconds: duration,
            ...params,
        });
    }, [duration, isDrill, ladderId, mode, roundIndex, selectedDifficulty, selectedTheme]);

    // The timer effect must not restart its interval every time the tracker
    // identity changes, so it reads the latest tracker through a ref.
    const trackRef = useRef(trackTalkEvent);
    useEffect(() => { trackRef.current = trackTalkEvent; }, [trackTalkEvent]);

    /** Esc closes the help dialog - expected of any modal. */
    useEffect(() => {
        if (!showHelp) return undefined;
        const onKey = (e) => { if (e.key === 'Escape') setShowHelp(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [showHelp]);

    const getProgress = useCallback(() => {
        if (duration === 0) return 0;
        return Math.min(1, Math.max(0, (duration - timeRemaining) / duration));
    }, [duration, timeRemaining]);

    const generateTopic = useCallback(() => {
        const newTopic = getRandomTopic(selectedTheme, selectedDifficulty);
        setTopic(newTopic);
        return newTopic;
    }, [selectedTheme, selectedDifficulty]);

    const clampDuration = useCallback((secs) => Math.max(30, Math.min(900, secs)), []);

    const formatTime = useCallback((seconds) => formatSeconds(seconds), []);

    const syncCustomInputs = useCallback((secs) => {
        const [mm, ss] = formatTime(secs).split(':');
        setCustomMinutes(mm);
        setCustomSeconds(ss);
    }, [formatTime]);

    const applyCustomTime = useCallback((minsStr, secsStr) => {
        const m = parseInt(minsStr || '0', 10);
        const sRaw = parseInt(secsStr || '0', 10);
        const s = isNaN(sRaw) ? 0 : Math.min(59, sRaw);
        const total = clampDuration((isNaN(m) ? 0 : m) * 60 + s);
        syncCustomInputs(total);
        setFreeDuration(total);
    }, [clampDuration, syncCustomInputs]);

    const handleMinutesChange = useCallback((value) => {
        const digits = value.replace(/\D/g, '').slice(0, 2);
        setCustomMinutes(digits);
        if (digits.length === 2 && customSeconds.length === 2) {
            applyCustomTime(digits, customSeconds);
        }
    }, [applyCustomTime, customSeconds]);

    const handleSecondsChange = useCallback((value) => {
        const digits = value.replace(/\D/g, '').slice(0, 2);
        setCustomSeconds(digits);
        if (digits.length === 2 && customMinutes.length === 2) {
            applyCustomTime(customMinutes, digits);
        }
    }, [applyCustomTime, customMinutes]);

    const handleCustomBlur = useCallback(() => {
        const mins = customMinutes.padStart(2, '0');
        const secs = customSeconds.padStart(2, '0');
        trackTalkEvent('talk_setting_changed', {
            setting_name: 'custom_duration',
            setting_value: `${mins}:${secs}`,
        });
        applyCustomTime(mins, secs);
    }, [applyCustomTime, customMinutes, customSeconds, trackTalkEvent]);

    /**
     * `onSwitch` runs at the moment the screen actually changes, not when the
     * transition starts - otherwise the outgoing screen visibly rewrites itself
     * (new topic, next round) while it is still fading out.
     */
    const goToScreen = useCallback((target, dur = transitionDurationDefault, onSwitch) => {
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        setTransitionMs(dur);
        setIsTransitioning(true);
        transitionTimeoutRef.current = setTimeout(() => {
            onSwitch?.();
            setScreen(target);
            requestAnimationFrame(() => setIsTransitioning(false));
        }, dur);
    }, []);

    const clearPendingTimers = useCallback(() => {
        if (completionTimeoutRef.current) {
            clearTimeout(completionTimeoutRef.current);
            completionTimeoutRef.current = null;
        }
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
            doneDelayRef.current = null;
        }
    }, []);

    /** Put a round on the clock without starting it - the learner hits Ready. */
    const armRound = useCallback((seconds) => {
        setDuration(seconds);
        setTimeRemaining(seconds);
        setIsTimerRunning(false);
        setHasStarted(false);
        setReadyHidden(false);
        setShowDone(false);
    }, []);

    const startPractice = useCallback(() => {
        clearPendingTimers();
        trackTalkEvent('talk_started');
        goToScreen('practice', 1200, () => {
            generateTopic();
            setRoundIndex(0);
            armRound(isDrill ? ladder.rounds[0] : freeDuration);
        });
    }, [armRound, clearPendingTimers, freeDuration, generateTopic, goToScreen, isDrill, ladder, trackTalkEvent]);

    /** Next rung of the ladder: same topic, less time. */
    const startDrillRound = useCallback((index) => {
        clearPendingTimers();
        const next = Math.max(0, Math.min(index, ladder.rounds.length - 1));
        trackTalkEvent('talk_round_started', { round: next + 1 });
        goToScreen('practice', 1200, () => {
            setRoundIndex(next);
            armRound(ladder.rounds[next]);
        });
    }, [armRound, clearPendingTimers, goToScreen, ladder, trackTalkEvent]);

    const readyToSpeak = useCallback(() => {
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
        }
        setIsTimerRunning(true);
        setHasStarted(true);
        setReadyHidden(true);
        setShowDone(false);
        trackTalkEvent('talk_ready_clicked');
        doneDelayRef.current = setTimeout(() => {
            setShowDone(true);
        }, readyToDoneDelay);
    }, [trackTalkEvent]);

    const skipTopic = useCallback(() => {
        clearPendingTimers();
        generateTopic();
        // A new topic means a new drill - back to the widest rung of the ladder.
        setRoundIndex(0);
        armRound(isDrill ? ladder.rounds[0] : duration);
        trackTalkEvent('talk_topic_skipped');
    }, [armRound, clearPendingTimers, duration, generateTopic, isDrill, ladder, trackTalkEvent]);

    const finishEarly = useCallback(() => {
        setIsTimerRunning(false);
        trackTalkEvent('talk_completed', {
            completion_type: 'manual',
            practiced_seconds: duration - timeRemaining,
        });
        clearPendingTimers();
        goToScreen('complete');
    }, [clearPendingTimers, duration, goToScreen, timeRemaining, trackTalkEvent]);

    const repeatSameTopic = useCallback(() => {
        clearPendingTimers();
        trackTalkEvent('talk_same_topic_repeated', {
            practiced_seconds: duration - timeRemaining,
        });
        goToScreen('practice', 1200, () => {
            if (!topic) {
                generateTopic();
            }
            setRoundIndex(0);
            armRound(isDrill ? ladder.rounds[0] : duration);
        });
    }, [armRound, clearPendingTimers, duration, generateTopic, goToScreen, isDrill, ladder, timeRemaining, topic, trackTalkEvent]);

    useEffect(() => {
        if (isTimerRunning && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        setIsTimerRunning(false);
                        if (!completionTimeoutRef.current) {
                            trackRef.current('talk_completed', {
                                completion_type: 'timer',
                                practiced_seconds: duration,
                            });
                            completionTimeoutRef.current = setTimeout(() => {
                                goToScreen('complete');
                                completionTimeoutRef.current = null;
                            }, completionHoldMs);
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
        // timeRemaining is deliberately not a dependency: the interval must not
        // be torn down and rebuilt on every tick.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTimerRunning, goToScreen, duration]);

    useEffect(() => {
        if (!isOpen) {
            setScreen('select');
            setShowHelp(false);
            setIsTimerRunning(false);
            setRoundIndex(0);
            setDuration(freeDuration);
            setTimeRemaining(freeDuration);
            setHasStarted(false);
            setIsTransitioning(false);
            syncCustomInputs(freeDuration);
            setReadyHidden(false);
            setShowDone(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
                transitionTimeoutRef.current = null;
            }
            if (completionTimeoutRef.current) {
                clearTimeout(completionTimeoutRef.current);
                completionTimeoutRef.current = null;
            }
            if (doneDelayRef.current) {
                clearTimeout(doneDelayRef.current);
                doneDelayRef.current = null;
            }
        }

        // Prevent body scroll when Talk the Talk is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, freeDuration, syncCustomInputs]);

    useEffect(() => {
        return () => {
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
            if (completionTimeoutRef.current) clearTimeout(completionTimeoutRef.current);
            if (doneDelayRef.current) clearTimeout(doneDelayRef.current);
        };
    }, []);

    const currentTheme = themes.find(t => t.id === selectedTheme) || themes[0];
    const ThemeIcon = getThemeIcon(selectedTheme);

    // Complete-screen state: is there another rung left on the ladder?
    const awaitingNextRound = isDrill && !isLastRound;
    const nextRoundSeconds = ladder.rounds[Math.min(roundIndex + 1, totalRounds - 1)];
    const compressionPct = Math.round((1 - ladder.rounds[totalRounds - 1] / ladder.rounds[0]) * 100);

    if (!isOpen) return null;

    const whatsappMessage = language === 'es'
        ? 'Hola Auris, he probado Talk the Talk y me interesan las clases de inglés.'
        : "Hi Auris, I tried Talk the Talk and I'm interested in English classes.";

    const contactLinks = [
        {
            icon: <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />,
            href: `https://wa.me/34684082221?text=${encodeURIComponent(whatsappMessage)}`,
            label: "WhatsApp"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:aurienglish@gmail.com",
            label: "Email"
        }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-y-auto">
            {/* Full Navbar */}
            <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                    <div className="flex justify-between items-center h-16 gap-2">
                        {/* Logo and Language Selection */}
                        <div className="flex items-center gap-2 sm:gap-8">
                            {/* Logo */}
                            <a href="/" className="flex-shrink-0">
                                <div className="bg-[#FF914D] px-2.5 sm:px-4 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2">
                                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                                    <span className="text-black flex items-center text-sm sm:text-lg font-['Cabinet_Grotesk']">
                                        <span className="font-bold">English</span>
                                        <span className="mx-0.5 sm:mx-1 text-xs sm:text-base font-normal">with</span>
                                        <span className="font-bold">Auris</span>
                                    </span>
                                </div>
                            </a>

                            {/* Language Toggle */}
                            <div className="flex items-center gap-1 sm:gap-2 text-sm">
                                <button
                                    onClick={() => {
                                        trackEvent('language_selected', {
                                            event_category: 'engagement',
                                            language: 'en',
                                            location: 'talk_the_talk',
                                        });
                                        setLanguage('en');
                                    }}
                                    aria-label="Switch to English"
                                    aria-pressed={language === 'en'}
                                    className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'en'
                                        ? 'bg-[#FF914D] text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => {
                                        trackEvent('language_selected', {
                                            event_category: 'engagement',
                                            language: 'es',
                                            location: 'talk_the_talk',
                                        });
                                        setLanguage('es');
                                    }}
                                    aria-label="Cambiar a español"
                                    aria-pressed={language === 'es'}
                                    className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'es'
                                        ? 'bg-[#FF914D] text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    ES
                                </button>
                            </div>
                        </div>

                        {/* Help, Close, Student Login, Contact */}
                        <div className="flex items-center gap-1 sm:gap-3">
                            <button
                                onClick={() => setShowHelp(true)}
                                aria-label="How this works"
                                title="How this works"
                                className="flex items-center justify-center w-9 h-9 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <HelpCircle className="w-5 h-5" />
                            </button>

                            {/* Close Talk the Talk */}
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                                aria-label="Close Talk the Talk"
                            >
                                <X className="w-4 h-4" />
                                <span className="hidden sm:inline">Close</span>
                            </button>

                            <div className="hidden sm:block w-px h-6 bg-gray-200" />

                            {/* Student Login - subtle link */}
                            <a
                                href="https://english-with-auris-portal.netlify.app/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-2 text-sm text-gray-600 hover:text-[#FF914D] hover:bg-orange-50 rounded-lg transition-colors"
                                aria-label="Student Login"
                            >
                                <LogIn className="w-4 h-4" />
                                <span className="hidden md:inline">Student Login</span>
                            </a>

                            <div className="hidden sm:block w-px h-6 bg-gray-200" />

                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="hidden sm:inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label={link.label}
                                    onClick={() => trackEvent('contact_click', {
                                        event_category: 'lead',
                                        contact_method: link.label.toLowerCase(),
                                        location: 'talk_the_talk_nav',
                                    })}
                                >
                                    {link.icon}
                                    <span className="hidden sm:inline">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Talk the Talk Title */}
            <div className="text-center py-2.5 sm:py-4 border-b border-gray-100 bg-white/50">
                <h1 className="text-xl sm:text-3xl font-display font-bold">
                    <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                        Talk the Talk
                    </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 hidden sm:block">Free English speaking practice</p>
            </div>

            {/* Help. Short on purpose: a visitor who wanted to read would not be here. */}
            {showHelp && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
                    onClick={() => setShowHelp(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="How this works"
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-7 sm:p-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowHelp(false)}
                            aria-label="Close"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-7 sm:mb-9">How this works</h2>

                        <ol className="space-y-5 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                            {[
                                'Pick a theme and a level.',
                                'Talk once, or tell the same topic three times with less time each round.',
                                'Read your topic, take a breath, then speak until the timer runs out.',
                            ].map((step, index) => (
                                <li key={step} className="flex gap-4 sm:gap-5">
                                    <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 mt-0.5 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 text-white text-sm sm:text-base font-bold flex items-center justify-center">{index + 1}</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>

                        <p className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200 text-base sm:text-lg text-gray-700 leading-relaxed">
                            Don&apos;t stop to hunt for the perfect word. Keep going. Getting through it
                            is the practice.
                        </p>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main
                className={`max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 ${screen === 'select' ? 'pb-32 sm:pb-40' : 'pb-4 sm:pb-6'} transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                style={{ transitionDuration: `${transitionMs}ms` }}
            >
                {/* Selection Screen */}
                {screen === 'select' && (
                    <div className="space-y-8 animate-fade-in">
                        {/* Theme Selection */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {themes.map((theme) => {
                                    const Icon = getThemeIcon(theme.id);
                                    const isSelected = selectedTheme === theme.id;
                                    return (
                                        <button
                                            key={theme.id}
                                            onClick={() => {
                                                trackTalkEvent('talk_setting_changed', {
                                                    setting_name: 'theme',
                                                    setting_value: theme.id,
                                                });
                                                setSelectedTheme(theme.id);
                                            }}
                                            className={`relative flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left group ${isSelected
                                                ? 'border-orange-400 bg-orange-50 shadow-lg shadow-orange-100'
                                                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                                }`}
                                        >
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isSelected
                                                ? 'bg-gradient-to-br from-orange-400 to-rose-400 text-white'
                                                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                                                }`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className={`font-medium transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-700'
                                                }`}>
                                                {theme.name}
                                            </span>
                                            {isSelected && (
                                                <div className="absolute top-2 right-2">
                                                    <Check className="w-4 h-4 text-orange-500" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Difficulty Selection - Slider Style */}
                        <div className="flex flex-col items-center">
                            <div className="relative inline-grid grid-cols-3 bg-gray-100 border border-gray-200 rounded-xl p-1.5 shadow-inner">
                                {/*
                                 * Same slide as the practice-mode switch: `transform` rather than
                                 * `left` so it runs on the compositor, and the easing overshoots on
                                 * arrival so changing level feels like flicking a control.
                                 *
                                 * Three slots, and the indicator is exactly one slot wide, so each
                                 * stop is a whole multiple of its own width - 0%, 100%, 200%.
                                 *
                                 * The colour still changes per level (unlike the mode switch, where
                                 * one colour was the point): here green/orange/purple IS the meaning.
                                 */}
                                <div
                                    className={`absolute top-1.5 bottom-1.5 rounded-lg shadow-md ${selectedDifficulty === 'easy'
                                        ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                                        : selectedDifficulty === 'medium'
                                            ? 'bg-gradient-to-r from-orange-400 to-rose-500'
                                            : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                                        }`}
                                    style={{
                                        width: 'calc(33.333% - 4px)',
                                        left: '6px',
                                        transform: selectedDifficulty === 'easy'
                                            ? 'translateX(0)'
                                            : selectedDifficulty === 'medium'
                                                ? 'translateX(100%)'
                                                : 'translateX(200%)',
                                        transition: SLIDE_EASING,
                                        willChange: 'transform',
                                    }}
                                />
                                {/* Difficulty options */}
                                {difficulties.map((diff) => {
                                    const DiffIcon = getDifficultyIcon(diff.id);
                                    const isSelected = selectedDifficulty === diff.id;
                                    return (
                                        <button
                                            key={diff.id}
                                            onClick={() => {
                                                trackTalkEvent('talk_setting_changed', {
                                                    setting_name: 'difficulty',
                                                    setting_value: diff.id,
                                                });
                                                setSelectedDifficulty(diff.id);
                                            }}
                                            className={`relative z-10 flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-colors duration-200 w-[110px] sm:w-[130px] ${isSelected
                                                ? 'text-white'
                                                : 'text-gray-700 hover:text-gray-900'
                                                }`}
                                        >
                                            <DiffIcon className="w-5 h-5" />
                                            <span className="font-semibold text-sm whitespace-nowrap">{diff.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Practice Mode - Slider Style */}
                        <div className="flex flex-col items-center">
                            <div className="relative inline-grid grid-cols-2 bg-gray-100 border border-gray-200 rounded-xl p-1.5 shadow-inner">
                                {/*
                                 * Sliding indicator. One colour on both sides: the point of a switch
                                 * is that it is the same thing in two positions, and two different
                                 * gradients made it read as two unrelated buttons instead.
                                 */}
                                <div
                                    className="absolute top-1.5 bottom-1.5 rounded-lg shadow-md bg-gradient-to-r from-orange-400 to-rose-500"
                                    style={{
                                        width: 'calc(50% - 8px)',
                                        left: '6px',
                                        transform: isDrill ? 'translateX(calc(100% + 4px))' : 'translateX(0)',
                                        transition: SLIDE_EASING,
                                        willChange: 'transform',
                                    }}
                                />
                                {PRACTICE_MODES.map(({ id, name, Icon }) => {
                                    const isSelected = mode === id;
                                    return (
                                        <button
                                            key={id}
                                            onClick={() => {
                                                trackTalkEvent('talk_setting_changed', {
                                                    setting_name: 'mode',
                                                    setting_value: id,
                                                });
                                                setMode(id);
                                                setRoundIndex(0);
                                            }}
                                            className={`relative z-10 flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-colors duration-200 w-[150px] sm:w-[190px] ${isSelected
                                                ? 'text-white'
                                                : 'text-gray-700 hover:text-gray-900'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="font-semibold text-sm leading-tight text-center px-1">{name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Duration (free) / Ladder (drill) */}
                        <div key={mode} className="flex flex-col items-center animate-fade-in">
                            {/*
                             * Drill: segmented ladder selector, same mechanics as the mode and
                             * level switches - one track, one indicator sliding on `transform`
                             * with a slight overshoot. Three equal slots, so each stop is a
                             * whole multiple of the indicator's own width.
                             * Free practice: plain duration chips.
                             */}
                            {isDrill ? (
                                <div className="relative inline-grid grid-cols-3 bg-gray-100 border border-gray-200 rounded-xl p-1.5 shadow-inner">
                                    <div
                                        className="absolute top-1.5 bottom-1.5 rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-indigo-500"
                                        style={{
                                            width: 'calc(33.333% - 4px)',
                                            left: '6px',
                                            transform: ladderId === 'short'
                                                ? 'translateX(0)'
                                                : ladderId === 'standard'
                                                    ? 'translateX(100%)'
                                                    : 'translateX(200%)',
                                            transition: SLIDE_EASING,
                                            willChange: 'transform',
                                        }}
                                    />
                                    {DRILL_LADDERS.map((option) => {
                                        const isSelected = ladderId === option.id;
                                        return (
                                            <button
                                                key={option.id}
                                                onClick={() => {
                                                    trackTalkEvent('talk_setting_changed', {
                                                        setting_name: 'ladder',
                                                        setting_value: option.id,
                                                    });
                                                    setLadderId(option.id);
                                                }}
                                                className={`relative z-10 px-3 sm:px-5 py-2.5 rounded-lg transition-colors duration-200 ${isSelected
                                                    ? 'text-white'
                                                    : 'text-gray-700 hover:text-gray-900'
                                                    }`}
                                            >
                                                <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
                                                    {option.name}
                                                </div>
                                                <div className="font-mono font-bold text-[11px] sm:text-sm tabular-nums mt-0.5 whitespace-nowrap">
                                                    {option.rounds.map(formatSeconds).join(' · ')}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-wrap items-center justify-center gap-3">
                                    {[60, 90, 120, 180, 300].map((secs) => (
                                        <button
                                            key={secs}
                                            onClick={() => {
                                                trackTalkEvent('talk_setting_changed', {
                                                    setting_name: 'duration',
                                                    setting_value: secs,
                                                });
                                                setFreeDuration(secs);
                                                syncCustomInputs(secs);
                                            }}
                                            className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${freeDuration === secs
                                                ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-200'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'
                                                }`}
                                        >
                                            {formatTime(secs)}
                                        </button>
                                    ))}
                                    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={customMinutes}
                                            onChange={(e) => handleMinutesChange(e.target.value)}
                                            onBlur={handleCustomBlur}
                                            placeholder="MM"
                                            aria-label="Minutes"
                                            className="w-12 px-2 py-2 text-sm text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-gray-900"
                                        />
                                        <span className="text-gray-500 font-semibold">:</span>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={customSeconds}
                                            onChange={(e) => handleSecondsChange(e.target.value)}
                                            onBlur={handleCustomBlur}
                                            placeholder="SS"
                                            aria-label="Seconds"
                                            className="w-12 px-2 py-2 text-sm text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white text-gray-900"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Practice Screen */}
                {screen === 'practice' && (
                    <div className="space-y-4 sm:space-y-6 animate-fade-in">
                        {/* Round Rail - the ladder, drawn to scale */}
                        {isDrill && (
                            <div>
                                <RoundRail rounds={ladder.rounds} activeIndex={roundIndex} />
                                <p className="text-xs text-center text-gray-500 mt-2">
                                    {roundIndex === 0
                                        ? 'Tell it once, properly. You will tell it twice more.'
                                        : 'Same story, just faster this time.'}
                                </p>
                            </div>
                        )}

                        {/* Topic Display */}
                        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-white">
                                    <ThemeIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-500">{currentTheme.name}</span>
                            </div>
                            <p className="text-xl sm:text-2xl text-gray-900 leading-relaxed whitespace-pre-line">
                                {topic}
                            </p>
                        </div>

                        {/* Hourglass and Timer */}
                        <div className="flex flex-col items-center py-2 sm:py-4">
                            <div className="w-32 h-40 sm:w-36 sm:h-48 mb-1 sm:mb-4">
                                <Hourglass
                                    getProgress={getProgress}
                                    isRunning={isTimerRunning}
                                />
                            </div>
                            <div className="text-4xl sm:text-5xl font-mono font-bold text-gray-900 tabular-nums">
                                {formatTime(timeRemaining)}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                                {isTimerRunning ? 'Keep talking!' : 'Review your topic, then hit Ready to start.'}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3 max-w-xl mx-auto">
                            <button
                                onClick={skipTopic}
                                className="col-start-1 flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-orange-50 hover:border-gray-300 transition-all text-sm sm:text-base"
                            >
                                <Shuffle className="w-4 h-4" />
                                New Topic
                            </button>

                            {/* Overlapping Ready/Done Buttons Wrapper */}
                            <div className="col-start-2 sm:flex-1 grid grid-cols-1 grid-rows-1">
                                <button
                                    onClick={readyToSpeak}
                                    className={`col-start-1 row-start-1 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-opacity duration-700 text-sm sm:text-base ${readyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
                                        }`}
                                >
                                    <Play className="w-4 h-4" />
                                    Ready
                                </button>
                                <button
                                    onClick={finishEarly}
                                    className={`col-start-1 row-start-1 w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-orange-50 hover:border-gray-300 transition-all text-sm sm:text-base ${hasStarted && showDone ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <Check className="w-4 h-4" />
                                    I&apos;m Done
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Complete Screen */}
                {screen === 'complete' && (
                    <div className="text-center space-y-8 py-8 animate-fade-in">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full shadow-lg transition-colors ${awaitingNextRound
                            ? 'bg-gradient-to-br from-purple-500 to-indigo-500 shadow-purple-200'
                            : 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-green-200'
                            }`}>
                            {awaitingNextRound
                                ? <Zap className="w-10 h-10 text-white" />
                                : <Check className="w-10 h-10 text-white" />}
                        </div>

                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                                {awaitingNextRound
                                    ? `Round ${roundIndex + 1} done`
                                    : isDrill ? 'Drill complete!' : 'Great job!'}
                            </h2>
                            <p className="text-lg text-gray-600">
                                You practised speaking for <span className="font-semibold text-gray-900">{formatTime(duration - timeRemaining)}</span>
                            </p>
                            <p className="text-gray-500 mt-1">
                                {awaitingNextRound
                                    ? `Next up: the same story in ${formatSeconds(nextRoundSeconds)}.`
                                    : isDrill
                                        ? `${formatSeconds(ladder.rounds[0])} to ${formatSeconds(ladder.rounds[totalRounds - 1])}: same story, ${compressionPct}% less time.`
                                        : 'Regular practice builds confidence!'}
                            </p>
                        </div>

                        {/* Ladder progress */}
                        {isDrill && (
                            <RoundRail
                                rounds={ladder.rounds}
                                activeIndex={awaitingNextRound ? roundIndex + 1 : totalRounds}
                                className="max-w-lg mx-auto"
                            />
                        )}

                        {/* Topic recap */}
                        <div className="max-w-lg mx-auto p-5 bg-white rounded-xl border border-gray-200 text-left">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                                {awaitingNextRound ? 'Tell this one again' : 'Your topic was'}
                            </p>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{topic}</p>
                        </div>

                        {/* Action Buttons */}
                        {awaitingNextRound ? (
                            <div className="max-w-md mx-auto space-y-3">
                                <button
                                    onClick={() => startDrillRound(roundIndex + 1)}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                    Round {roundIndex + 2} · {formatSeconds(nextRoundSeconds)}
                                </button>
                                <button
                                    onClick={() => {
                                        trackTalkEvent('talk_drill_ended', { rounds_completed: roundIndex + 1 });
                                        goToScreen('select');
                                    }}
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    End drill
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                                    <button
                                        onClick={repeatSameTopic}
                                        className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-orange-50 hover:border-gray-300 transition-all"
                                    >
                                        <RotateCcw className="w-4 h-4" />
                                        {isDrill ? 'Run It Again' : 'Same Topic'}
                                    </button>
                                    <button
                                        onClick={startPractice}
                                        className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-all"
                                    >
                                        <Shuffle className="w-4 h-4" />
                                        {isDrill ? 'New Drill' : 'New Topic'}
                                    </button>
                                </div>

                                {/* Change Settings - subtle link */}
                                <button
                                    onClick={() => {
                                        trackTalkEvent('talk_settings_returned');
                                        goToScreen('select');
                                        setTimeRemaining(duration);
                                    }}
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    Change settings
                                </button>
                            </>
                        )}
                    </div>
                )}
            </main>

            {/* Sticky Footer - Start Button (only on select screen) */}
            {screen === 'select' && (
                <div
                    className={`fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 sm:p-6 transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    style={{ transitionDuration: `${transitionMs}ms` }}
                >
                    <div className="max-w-md mx-auto">
                        <button
                            onClick={startPractice}
                            className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white font-semibold text-lg rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                        >
                            {isDrill ? <Zap className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            Start
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TalkTheTalk;
