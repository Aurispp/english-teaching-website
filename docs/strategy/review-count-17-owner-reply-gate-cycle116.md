# Review Count 17 Owner Reply Gate

Created: 2026-06-02 Cycle 116

Purpose: handle the public review-count delta from 16 to 17 without turning it into a broad GBP/content campaign or guessing from limited public Places data.

## Classification

`review_reply_status` by public `reviewCount` delta.

This is a real evidence trigger because Pulse Gate 05 explicitly reopened the review lane when the public count changed.

## Evidence

Read-only checks on 2026-06-02:

- Homepage returned HTTP 200.
- Talk returned HTTP 200.
- Sitemap returned HTTP 200.
- Teaching API `/api/health` returned HTTP 200.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=17`, and 5 visible review objects.
- English and Spanish review endpoint variants both returned `reviewCount=17`.
- The public endpoint requests Places New fields `rating,userRatingCount,reviews,googleMapsUri`; it does not return owner reply metadata.
- The live review component displays endpoint `rating` and `reviewCount`, so the public count surface can update dynamically without a website code edit.

## Working Decision

The count delta should trigger owner-side review maintenance, not public-copy work.

Do now:

1. Ask for one owner-side Review Truth row:

```text
Google is now showing 17 public reviews from the website endpoint. Can you check your Google Business Profile owner view and tell me: does it also show 17 reviews, what is the newest review about, and is it replied to?
```

2. If the newest review is unreplied, reply in the review's language with a short, specific thank-you.
3. Record only the operational row: count, newest review theme/date if safe to summarize, reply status, and any pending/hidden state.

Do not do now:

- Do not publish a GBP post just because the count changed.
- Do not change static website copy to `17 reviews` until owner-view truth confirms the count.
- Do not infer newest-review or reply truth from the public endpoint's visible five reviews.
- Do not ask the reviewer to change wording, add keywords, mention a city, or adjust the star rating.

## Reply Template

Use the review's language and keep it warm, specific and non-salesy.

```text
Thank you so much, [Name]. I am really happy to hear that [specific thing they mentioned] has helped. It means a lot to know the classes feel useful in real practice.
```

If the review is about confidence:

```text
Thank you so much, [Name]. I am really happy the classes have helped you feel more confident using English. That steady, practical confidence is exactly what I want the lessons to build.
```

If the review is about a child or family member:

```text
Thank you so much, [Name]. I am really happy to hear that the classes have been useful and enjoyable. It means a lot that you trusted me with someone close to you.
```

## Hypothesis Check

H009 strengthened: reviews remain the clearest public proof layer, and the count has increased while the rating stayed 5.0.

H019 strengthened: public endpoint truth and owner GBP truth are separate. The public endpoint can confirm count/rating drift, but not reply status.

Falsification attempt:

Could the count delta justify static public copy changes now? No. The dynamic review component already handles the public count, while static copy would create maintenance churn and still lacks owner-view confirmation.

## Next-Cycle Packet

If Auris provides the owner row, update `review-proof-library.md` with the confirmed `17` truth and reply status, then return to Packet BH. If no owner row arrives, keep quiet checks bounded and do not repeat this gate unless the count changes again, the rating changes, the endpoint fails, or Auris asks for review/reply help.
