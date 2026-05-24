# Review Count 16 Reply Gate

Created: 2026-05-23 Cycle 35

Purpose: convert the public `5.0 / 16` Google review signal into a practical next action without overclaiming, changing public copy, or treating public endpoint data as owner-side truth.

## Working Answer

Cycle 48 update: owner/search-view evidence now confirms `5.0 / 16`. That resolves the count truth question. The remaining practical gate is reply status and capacity mode: replies come before new GBP posts, and while Auris is nearly fully booked the profile should be treated as a future-demand trust asset rather than an urgent lead engine.

The next action remains tiny:

1. Reply to the newest unreplied reviews.
2. Log reply status as live, pending, rejected or unknown.
3. Keep public copy count-neutral unless Auris deliberately wants to update a static count.
4. Ask for another GBP Performance snapshot only if a slot is opening or a measured action is planned.

Do not request credentials. Screenshots or one-line owner notes are enough.

## Current Public Evidence

Live checks on 2026-05-23:

| Check | Result | Interpretation |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | HTTP 200, `places-new`, rating `5`, reviewCount `16`, 5 visible reviews | Public proof has strengthened from earlier `15` snapshots. |
| `/.netlify/functions/google-reviews?language=en` | HTTP 200, `places-new`, rating `5`, reviewCount `16`, 5 visible reviews; one visible review has `relativeTimeDescription` of `in the last week` and publish time `2026-05-22T17:12:49Z` | The count is consistent across language views, and public freshness appears improved. |
| Review function code | Places New field mask includes `rating,userRatingCount,reviews,googleMapsUri`; response is cached. | Good for public proof QA, not owner reply status. |
| Website review component | Displays the live `reviewCount` when endpoint data loads. | The site may already show 16 dynamically. |
| Google review URL | Links to Google reviews from the component/fallback. | Buyers can inspect source proof. |
| LinkedIn profile fetch | HTTP 999. | LinkedIn remains owner-screenshot based, not public-scrape based. |
| LinkedIn homepage/Talk UTMs | HTTP 200 with correct canonical routes. | Route readiness remains fine; not performance proof. |

Cycle 47 correction on 2026-05-24:

| Check | Result | Interpretation |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | HTTP 200, `places-new`, rating `5`, reviewCount `16`, 5 visible reviews; first visible review in this check had a November 2025 publish time. | Public count remains strong, but visible order is not newest-review truth. |
| `/.netlify/functions/google-reviews?language=en` | HTTP 200, `places-new`, rating `5`, reviewCount `16`, 5 visible reviews; first visible review in this check had a November 2025 publish time. | Public count remains strong, but the previously seen May 22, 2026 review did not appear first in this check. |

Practical correction:

- Keep the `5.0 / 16` public proof signal.
- Do not claim the endpoint currently proves the newest review or reply status.
- The owner-view Review Truth row is now more important, not less.
- If no owner evidence arrives, rotate instead of creating another review-count or reply-gate artifact.

## Source Discovery

For this exact question, the best evidence should live in:

| Source Type | Why It Matters | Cycle 35 Use |
| --- | --- | --- |
| Live review endpoint | Confirms public rating/count and visible-review count. | Used; public count is 16. |
| GBP owner reviews screen | Confirms owner truth and reply status. | Missing; highest next source. |
| GBP owner Performance | Needed before interpreting any GBP post/reply effect. | Missing; second next source. |
| Review function code | Shows what the endpoint can and cannot know. | Used; endpoint cannot know reply status. |
| Website review component | Shows whether count-heavy public UI is dynamic. | Used; live count can display automatically. |
| Official Google review docs | Defines safe replies, review links, public replies and reply review delays. | Used as rules. |
| Official Google local ranking docs | Confirms review count/score and replies matter for local trust/ranking. | Used as strategic support. |
| Official Google review-snippet docs | Prevents adding self-serving LocalBusiness review markup as an SEO shortcut. | Used as guardrail. |
| Marketplace/competitor proof | Tests whether review count alone differentiates. | Used; Superprof and business-English competitors have strong proof/lower anchors. |
| Owner inquiry notes | Highest proof of whether reviews produce trust. | Missing; do not infer from count. |

Skipped:

- More generic local SEO posts, because official Google docs already define the safe action gate.
- Another LinkedIn docs audit, because this cycle is about review truth and reply status.

## External Evidence Ledger

| Source | URL | Signal | Supports | Weakens |
| --- | --- | --- | --- | --- |
| Google manage customer reviews | https://support.google.com/business/answer/3474050 | Verified businesses can reply to reviews; replies are public; customers may be notified; replies should be positive, relevant, short, simple and not salesy. | Reply gate before more posts. | Treating replies as private or promotional. |
| Google local ranking docs | https://support.google.com/business/answer/7091/improve-your-local-ranking-on-google | Complete information plus more reviews/positive ratings can help local ranking; local results use relevance, distance and prominence. | Review count/replies are worth caring about. | Treating posts alone as the local lever. |
| Google posts docs | https://support.google.com/business/answer/7342169 | Updates can show on Search/Maps, include action buttons, and can be pending/not approved. | Action log must track status. | Assuming a GBP post is live because it was drafted. |
| Google Business Profile review API resource | https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews | Review resources include star rating, text, timestamps and owner replies. | Owner/API-level review truth has reply metadata. | Public Places endpoint as reply-status source. |
| Google review snippet docs | https://developers.google.com/search/docs/appearance/structured-data/review-snippet | LocalBusiness review markup is eligible only for sites capturing reviews about other local businesses, with self-serving-review guidelines. | Avoid SEO shortcut markup. | Adding aggregate rating schema to Auris's own review block. |
| Google self-serving review rich-results update | https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful | Google will not show review rich results for self-serving LocalBusiness/Organization reviews; Business Profile is not affected. | Keep Google reviews as visible proof, not review schema play. | Chasing stars in organic results via own-site markup. |
| Auris Superprof listing | https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html | Marketplace proof shows 5.0 / 7, 35 EUR/h, 20 students and warm comments. | Reviews are useful proof. | Marketplace reviews as premium-site CTA, because price anchor is lower. |
| Superprof Castelldefels category | https://www.superprof.es/clases/ingles/castelldefels/ | Local category repeats private-class, conversation, business English and lower-price comparisons. | Track price anchor in lead notes. | Raw review count as enough. |
| English for Business Spain LinkedIn | https://es.linkedin.com/company/english-for-business-spain | Corporate provider foregrounds 30+ years, companies, e-learning and FUNDAE. | Auris should stay personal/direct. | Academy/corporate tone in review replies. |
| Executive Business English LinkedIn | https://www.linkedin.com/company/executive-business-english | Professional-English market uses confidence, meetings, negotiations, presentations and global professionals. | Work-confidence review themes are market-relevant. | Confidence as unique by itself. |
| The English Training Company | https://www.englishtco.com/ | Professional speaking confidence and ultra-practical programmes are category language. | Pair reviews with specific method proof. | Generic confidence claim. |
| Meetup business-English event | https://www.meetup.com/es-ES/barcelona-wisdom-business-network-meetup-group/ | Local/professional events frame business English around meetings, introductions, opinions and assertive language. | Work-situation proof can be useful. | Treating reviews as only generic social proof. |

## Falsification

### Favored Idea 1

`Because the public count is now 16, update all public proof copy to 16.`

Result: weakened.

Evidence:

- The public endpoint is consistent in ES/EN, but prior cycles already warned that public count and owner-view truth can drift.
- The site review component may display 16 dynamically, but durable marketing copy should wait for owner confirmation.
- Google review score updates can lag, and owner reply status is not exposed by the public Places endpoint.

Practical rule:

- Use count-neutral proof in manually written copy until owner-view count confirms 16.
- If using the dynamic component, let it show the live count, but do not write static `16 reviews` copy elsewhere without owner truth.

### Favored Idea 2

`Review count itself is the acquisition lever.`

Result: refined.

Evidence:

- Reviews matter for trust and local prominence, but marketplace and competitor evidence shows many providers use strong reviews/confidence language.
- Auris's advantage is not just count. It is the specific proof chain: confidence in real situations, Spanish-speaker correction, direct teacher relationship, and continuity between classes.

Practical rule:

- The first GBP/review action should mention the outcome and mechanism, not just `16 reviews`.

### Cheaper Alternative

A single timely, personal reply to the newest review plus a small owner baseline may beat creating another GBP post draft. It keeps the profile alive, protects trust, and creates an action-log row with almost no overhead.

## Implementation-Ready Gate

### Ask Auris For This One Row

```text
Quick one: Google is publicly showing 5.0 / 16 reviews. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

Spanish version:

```text
Una cosa rapida: publicamente Google muestra 5.0 / 16 resenas. En tu Google Business Profile ves 16 resenas, y la resena mas nueva tiene respuesta?
```

### Owner Answer Received - 2026-05-24

Owner/search-view evidence confirms:

- Google Business Profile shows `5.0 / 16`.
- Two newest visible reviews are very recent.
- Auris has not replied to them yet.
- GBP Performance is small but real: 520 profile views, `<50` searches and 2 website clicks/customer interactions across the visible Dec 2025-May 2026 chart.

Decision:

- Count truth is confirmed.
- Reply gate is active.
- Reply before publishing another GBP post.
- Do not treat the lack of leads as a problem by itself while Auris is nearly fully booked; this profile is currently a future-demand trust asset.

### If Owner Confirms 16 And Newest Review Is Replied

- Fill the Review Truth row in `owner-evidence-ledger-template.md`.
- Ask for one GBP Performance screenshot/note before any measured GBP post.
- Keep static copy count-neutral unless Auris explicitly asks to update copy.

### If Owner Confirms 16 And Newest Review Is Unreplied

- Reply before publishing a new post.
- Log an Action Log row: `review_reply`, GBP, proof theme, status.
- Ask for Day 0 Performance only if Auris wants a measured sprint.

### If Owner Shows 15 Or Count Is Unclear

- Keep static public copy count-neutral:
  - `Students repeatedly mention confidence, practical conversation and follow-up.`
  - `Real Google reviews from students I have worked with.`
- Record public/owner count drift.
- Do not call the proof asset weaker; call the count unconfirmed.

## Reply Draft Patterns

Use the review's real theme. Do not add claims the student did not make.

### Confidence / Speaking

```text
Thank you so much, [Name]. I am really happy the classes have helped you feel more confident using English in real situations. That is always the goal: useful speaking practice, clear correction, and enough repetition for English to feel easier when it matters.
```

### Work English

```text
Thank you, [Name]. I am glad the classes have helped with English in real work situations. Practising the exact moments you need, and then reviewing the useful phrases afterwards, is where a lot of the confidence starts to grow.
```

### General Progress

```text
Thank you so much, [Name]. I am really glad you are seeing progress. I always try to keep the classes practical, personal and useful between sessions, so it means a lot to read this.
```

Spanish confidence version:

```text
Muchas gracias, [Name]. Me alegra mucho que las clases te hayan ayudado a sentirte con mas confianza al hablar ingles. Esa es una de las ideas principales: practica real, correccion util y suficiente repeticion para que el ingles sea mas comodo en situaciones reales.
```

## What Not To Do Yet

- Do not ask for Google credentials.
- Do not ask for a full private dashboard export.
- Do not publish a new GBP post before reply status is known if there is a fresh unreplied review.
- Do not ask students for 5 stars, keywords, city names or exact phrases.
- Do not add self-serving LocalBusiness aggregate rating markup for the Google review block.
- Do not use marketplace review badges as the first premium proof.
- Do not move LinkedIn above GBP because the LinkedIn Talk route works.

## Next-Cycle Packet

If Auris sends owner review truth:

1. Fill `owner-evidence-ledger-template.md` Review Truth row.
2. Update `review-proof-library.md` count decision.
3. If unreplied, draft exactly one reply and log status.
4. Ask for GBP Day 0 only after reply/count truth is recorded.

If Auris sends GBP Performance instead:

1. Fill the GBP Performance Day 0 row.
2. Pair it with current public count and any review truth available.
3. Allow one measured GBP action if Auris wants.

If no owner evidence arrives:

1. Do not create another owner ask artifact.
2. Rotate to Search Console/indexing, pricing/profile coherence, or current-student retention evidence.
3. Keep using count-neutral proof in any manual copy.
