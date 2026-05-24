# Owner Proof Decision Gate - Cycle 47

Created: 2026-05-24 Cycle 47

Purpose: collapse the repeated GBP/review/lead-source owner-data blocker into one decision gate. The goal is not another ledger. The goal is to make the existing ledgers useful only when a real owner note, action row or lead note arrives.

## Primary Question

What is the smallest owner-proof packet that can unlock GBP/review/lead-source action without creating more admin?

## Working Answer

The owner-proof system is now mature enough. The risk is not missing structure; the risk is creating more structure while the first rows stay blank.

Use four evidence rows only:

1. `review_truth`: owner-view review count/rating and newest-review reply status.
2. `gbp_day0`: one GBP Performance screenshot/note for last 7 or 28 days.
3. `action_log`: one action and its status: review reply, GBP post, review ask, referral ask, LinkedIn post or profile edit.
4. `lead_source_note`: one anonymized inquiry note with source, first thing mentioned, proof, price anchor, work moment, booked trial and lead quality.

If none of these arrives, do not create another owner ask, content draft, source ledger or dashboard. Rotate to another strategic question until owner evidence exists.

## Source Discovery

Best possible source types for this exact question:

| Source Type | Why It Might Help | Use This Cycle? |
| --- | --- | --- |
| GBP owner review screen | Highest-signal count, newest review and reply status. | Missing; named as the next gate. |
| GBP owner Performance | Highest-signal profile movement: views, searches, website clicks, calls, messages, bookings. | Missing; named as Day 0 gate. |
| Existing owner evidence ledger/playbook | Shows whether the process already has enough capture structure. | Used. |
| Live public reviews endpoint | Checks public proof readiness and drift. | Used. |
| Review function/component code | Shows what public endpoint can and cannot know. | Used. |
| Website UTM destination checks | Confirms campaign links are safe before any owner action. | Used. |
| Official Google GBP docs | Defines owner metrics, review reply behavior, posts and local trust constraints. | Used. |
| Official Google Places/GBP API docs | Tests whether public API can replace owner truth. | Used. |
| Official GA/Calendly/LinkedIn docs | Defines what site/tool/channel attribution can capture later. | Used lightly. |
| Small-business attribution communities | Tests whether one-row source notes are practical or too naive. | Used. |
| GBP practitioner/community discussions | Tests whether review replies/posts are overvalued as ranking hacks. | Used, lower confidence. |
| More competitor pages | Could refine copy, but not the bottleneck. | Skipped. |

Chosen evidence layers: existing local ledgers, live public proof endpoint, implementation code, official docs, and small-business/community attribution signals.

## Local Evidence

| Local Artifact | Finding | Implication |
| --- | --- | --- |
| `research-log.md` Cycle 46 | Said to rotate if no Next 15 pilot rows or implementation request existed. | Cycle 47 should not make another retention spec. |
| `research-roadmap.md` RQ001/RQ009/RQ012 | Channel decisions need Level 4/5 evidence, not clicks or route readiness. | First lead row outranks another content plan. |
| `lead-source-proof-ledger-cycle43.md` | Human buyer signal outranks channel-visible and site/tool signals; `talk_trial_click` is not booked-trial proof. | Keep ledger ready, but do not expand it. |
| `owner-evidence-ledger-template.md` | Already has rows for Public Proof, Review Truth, GBP Performance, Action Log, Inquiry and Decision Output. | Enough structure exists. |
| `owner-evidence-micro-intake-playbook.md` | Already shrank the ask to one row: review count and newest-review reply status. | The ask cannot be made much smaller. |
| `review-count-16-reply-gate.md` | Public endpoint count is 16, but owner truth and reply status are still missing. | Static copy stays count-neutral. |
| `proof-sprint-action-gates.md` | Public-only evidence cannot judge GBP/LinkedIn; owner baseline and inquiry notes decide. | Use gates, not more drafts. |
| `gbp-week-one-execution-pack.md` | The first GBP post, replies and ledger row are already implementation-ready. | Copy is not the blocker. |
| `review-proof-sprint-measurement-plan.md` | Review sprint is interpretable only with owner-side notes. | Measurement is still the gate. |
| `review-proof-library.md` | Review themes are ready: confidence, adaptation, professional situations and continuity. | Use mechanism-specific proof once action happens. |
| `content-strategy.md` | Already contains GBP-first execution rule and review-led GBP sprint. | Do not create another calendar. |
| `measurement-plan.md` | Site events exist, but cannot capture private WhatsApp, review replies or why a lead trusted Auris. | Manual notes remain necessary. |
| `GoogleReviewsSection.jsx` | Site dynamically displays rating/count from Netlify function and links to Google. | Dynamic proof can show count; manual static copy should stay neutral. |
| `netlify/functions/google-reviews.js` | Places New field mask returns rating, userRatingCount, reviews and googleMapsUri, not owner reply state. | Endpoint is public proof QA, not owner truth. |
| `src/App.jsx` | Calendly scheduled listener exists, but Talk new-tab flow limits source attribution. | Booking proof still needs owner/Calendly note. |
| `TalkTheTalk.jsx` / `analytics.js` | Talk starts, ready clicks, completions and trial clicks are tracked; CTA opens Calendly with UTMs. | Good intent layer; not a lead-source conclusion. |

## Data / API Evidence

Live checks on 2026-05-24:

| Check | Result | Meaning |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=en` | `places-new`, rating `5`, `reviewCount` `16`, 5 visible reviews. First visible review in this check had `publishTime` `2025-11-19T18:09:16.384146210Z`. | Public count remains 16, but visible review order is not reliable as newest-review truth. |
| `/.netlify/functions/google-reviews?language=es` | `places-new`, rating `5`, `reviewCount` `16`, 5 visible reviews. First visible review in this check had `publishTime` `2025-11-18T09:01:53.854288226Z`. | Same count; still not owner reply status. |
| GBP homepage UTM | HTTP 200, homepage title, clean canonical `https://englishwithauris.com/`, `index,follow`. | Destination is safe for a measured GBP action. |
| LinkedIn Talk UTM | HTTP 200, Talk title, clean canonical `https://englishwithauris.com/talkthetalk`, `index,follow`. | Destination is safe if LinkedIn is used later. |
| Git status | Website strategy docs are untracked; `teacher-assistant` has many unrelated untracked artifacts. | Strategy docs can be updated; do not touch dirty app files. |

Important correction:

- Earlier cycles saw a public May 22, 2026 review in the English visible set.
- Today the public endpoint still shows `5.0 / 16`, but the first visible English/Spanish reviews are from November 2025.
- Therefore: public review endpoint count is useful; visible review ordering is not enough to decide newest-review reply status.
- Owner Review Truth is now even more necessary, not less.

## External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Google Business Profile Performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Performance is owner/manager-side and includes date ranges, interactions, searches, views, calls, website clicks, messages and bookings where available. | `gbp_day0` row before interpretation. | Public route checks as performance proof. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Complete info, review responses, photos/videos, review count and positive ratings support visibility/trust; local ranking is relevance, distance and prominence. | Reviews/replies matter, but as part of profile completeness. | Treating one post as a ranking hack. |
| Google posts docs, `https://support.google.com/business/answer/7342169?hl=en` | Posts can include text, media and action buttons; phone numbers in descriptions may be rejected; posts can be archived. | Action log must include status and URL. | Assuming a draft is a live asset. |
| Google manage reviews docs, `https://support.google.com/business/answer/3474050` | Verified businesses can reply publicly; replies are reviewed, usually within 10 minutes but sometimes up to 30 days; customers may be notified. | Reply status belongs in owner evidence. | Treating replies as instant/private. |
| Google review tips, `https://support.google.com/business/answer/3474122?hl=en` | Google supports review links/QR codes and useful personalized replies. | Pressure-free review ask and owner reply gate. | Long promotional replies. |
| Google Maps/Business Profile content policy, `https://support.google.com/business/answer/7400114?hl=en` | Personal information and policy-violating content can be removed or restricted. | Redaction and no-private-message rule. | Saving raw private data in strategy docs. |
| Places API Legacy docs, `https://developers.google.com/maps/documentation/places/web-service/legacy/details` | Place Details returns up to five reviews; default sorting is relevance, with `newest` only available in legacy request parameter. | Public endpoint is limited proof QA. | Public endpoint as complete review history. |
| Places API New docs/reference, `https://developers.google.com/maps/documentation/places/web-service/place-details` and `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places` | Places New review fields include text, rating, author, publishTime and Google Maps URI, but not owner reply state. | Public review proof cannot replace GBP owner screen. | Inferring reply status from public endpoint. |
| Business Profile Reviews API resource, `https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews` | Owner/API Review resource contains `reviewReply`, reply state and timestamps. | Reply truth exists only in owner/API layer. | Places endpoint as reply-status source. |
| Google Analytics campaign URL docs, `https://support.google.com/analytics/answer/10917952?hl=en` | UTMs identify campaign/source/medium/content in traffic acquisition; source/medium/campaign should be set. | Exact campaign URLs are useful. | UTMs as buyer-intent proof. |
| Calendly tracking docs, `https://calendly.com/help/tracking-and-reporting` | Calendly can record UTM data when links are tagged and can export meeting data. | Booking source can be checked after a booking. | Guessing booking source from last clicked page. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Post analytics are owner-visible and include discovery, profile activity, social and link engagement. | Owner metric row for LinkedIn. | Public scraping as LinkedIn performance proof. |
| BrightLocal Local Consumer Review Survey 2026, `https://www.brightlocal.com/research/local-consumer-review-survey/` | Reviews remain central, but consumers often continue to websites/social channels; recency and owner responses matter. | Review replies and fresh proof are worth caring about. | Raw review count as enough to close premium buyers. |
| Reddit small-business lead-source thread, `https://www.reddit.com/r/smallbusiness/comments/1nvv5bc/how_do_local_businesses_track_where_new_customers/` | Practitioners combine simple source questions, dropdowns and UTMs because no one method is perfect. | One-row source note with source confidence. | Perfect attribution before action. |
| Reddit cold-email attribution thread, `https://www.reddit.com/r/coldemail/comments/1re4pqf/are_you_able_to_see_exactly_where_your_best_leads/` | Operators report attribution is rough; asking source plus tagging at first contact and judging quality/close value is more useful than raw reply counts. | Human buyer signal > vanity metrics. | Big dashboard at tiny volume. |
| Reddit GBP practitioner thread, `https://www.reddit.com/r/GoogleMyBusiness/comments/1tk9k5g/whats_the_one_change_you_made_to_a_google/` | Recent practitioners emphasize reviews, complete profile, services/photos and relevance; posts are secondary and should not be location-stuffed. | Profile basics/reviews before content volume. | Another generic GBP content calendar. |

## Falsification

### H015: Manual lead-source notes are required before channel conclusions are trustworthy.

Status: strengthened, with an admin constraint.

Evidence:

- Official GA/Calendly/LinkedIn docs support UTMs and owner-side analytics, but none capture private WhatsApp/referral reasons or why a prospect trusted Auris.
- Small-business attribution discussions reinforce that self-reported source is imperfect but still useful when paired with first-contact tagging and lead quality.
- Local code already has intent events, but not enough to infer lead proof, price anchor or work moment.

Refinement:

- Do not add fields. Use the existing `lead-source-proof-ledger-cycle43.md` only when a real inquiry arrives.
- A lead note is valuable if it captures `source_confidence`, `first_thing_mentioned`, `proof_specificity`, `price_anchor_seen`, `booked_trial` and `lead_quality`.

Next practical test:

- Fill one `lead_source_note` if an inquiry arrives. If no inquiry arrives, rotate.

### H019: GBP owner-side baseline is required before judging posts.

Status: strengthened.

Evidence:

- Google says GBP Performance is available only to verified/signed-in owners/managers and includes the metrics needed for Day 0/Day 7.
- Live UTM destinations are healthy, but that only proves route readiness.
- Public review endpoint cannot reveal profile interactions, reply approval state or newest-review truth.

Refinement:

- `review_truth` comes before `gbp_day0` if the question is newest review reply.
- `gbp_day0` comes before any measured post if the question is channel performance.

Next practical test:

- Owner sends one Review Truth row or one GBP Performance screenshot/note. Fill only that row.

### H009: Reviews should become the central proof asset.

Status: strengthened but corrected.

Evidence:

- Public endpoint still shows `5.0 / 16`.
- BrightLocal 2026 strengthens the importance of review recency and owner responses.
- Official Google docs support public owner replies and review request links.

Correction:

- Today's live endpoint did not expose the previously seen May 22 review as first visible review. Visible review ordering should not be treated as newest-review truth.

Next practical test:

- Keep static proof count-neutral and ask owner Review Truth only when Auris is ready to act.

### Favored Idea We Tried To Weaken

`The next helpful output is an even smaller owner ask.`

Result: weakened.

The one-row ask already exists in multiple artifacts. Repeating it with slightly different wording is not progress. The useful new artifact is the stop rule:

> If the one-row owner ask has been made and no answer exists, wait for owner evidence or rotate.

### Cheaper Alternative

A real lead note can beat every planned GBP sequence. If a lead appears, classify the lead first; do not force it through the Review Truth -> Day 0 -> Action -> Day 7 sequence.

## Decision Gate

| Evidence Received | Fill This Row | Do Next | Do Not Do |
| --- | --- | --- | --- |
| Owner confirms count/rating and newest-review reply status | `review_truth` | If unreplied, reply and log one action; if replied, ask Day 0 only if running measured GBP. | Do not change static public count copy from endpoint alone. |
| Owner sends Performance screenshot/note | `gbp_day0` | Run one measured action only if Auris wants the sprint. | Do not publish several posts. |
| Auris replies/posts/sends review/referral ask | `action_log` | Record status: live, pending, rejected, sent, not sent, awkward, intro made. | Do not interpret without Day 0 or lead note. |
| Inquiry arrives | `lead_source_note` | Classify source/proof/price/work moment/booked trial/quality. | Do not wait for a perfect GBP packet before learning from the lead. |
| No owner evidence or lead evidence | none | Rotate to another theme; keep existing packets ready. | Do not make another ledger, calendar, GBP draft or owner prompt artifact. |

## Owner Evidence Received - 2026-05-24

Auris supplied owner/search-view GBP evidence after this artifact was created.

Rows unlocked:

- `review_truth`: owner view confirms `5.0 / 16` reviews.
- `gbp_day0`: owner Performance view shows 520 profile views, `<50` searches, and 2 website clicks/customer interactions over the visible Dec 2025-May 2026 chart.
- `action_log`: two newest reviews are currently unreplied.

Interpretation:

- This is enough to stop treating owner proof as missing.
- The next action is not a bigger acquisition sprint; it is two thoughtful review replies.
- Profile discovery is still small and partly branded/broad. That fits Auris's current capacity situation: long-game trust building, not urgent lead generation.
- No lead-source row exists yet because no one is contacting Auris from GBP/website.

Practical next move:

1. Reply to the two newest reviews.
2. Log reply status as `live` or `pending`.
3. If Auris wants one small future-growth action after replies, update one profile/post surface around long-term learner trust and practical online classes, but avoid a heavy lead push while nearly fully booked.

## One-Message Owner Prompt

Use only when Auris is ready to check GBP. Do not keep re-sending it as a heartbeat notification.

```text
Quick one: Google is publicly showing 5.0 / 16 reviews. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

Spanish:

```text
Una cosa rapida: publicamente Google muestra 5.0 / 16 resenas. En tu Google Business Profile ves 16 resenas, y la resena mas nueva tiene respuesta?
```

## What To Ignore For Now

- Another GBP/LinkedIn content calendar.
- Another owner evidence ledger.
- Another review-count artifact.
- Static `16 reviews` copy.
- Self-serving review schema.
- A CRM or dashboard in `teacher-assistant`.
- Another broad competitor scan unless it tests a new proof type.

## Next-Cycle Packet

Packet AV: Owner Proof Action Gate.

If owner Review Truth arrives:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/owner-proof-decision-gate-cycle47.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/review-count-16-reply-gate.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
2. Fill only the Review Truth row.
3. If newest review is unreplied, draft exactly one reply and log the action status.
4. Ask for GBP Day 0 only if Auris wants a measured public action.

If GBP Performance arrives:

1. Fill only the GBP Performance row.
2. Compare the range/date to any action row.
3. Do not interpret without action date/status or lead note.

If a lead/inquiry arrives:

1. Open `lead-source-proof-ledger-cycle43.md`.
2. Fill one `lead_source_note`.
3. Let the lead note outrank the planned sequence.

If no owner/lead evidence arrives:

1. Do not repeat owner-proof research.
2. Rotate to Packet AS pricing implementation, Packet AT static route implementation, Packet AU Next 15 pilot rows, or Talk Reflection only if new evidence/approval appears.
3. Preserve count-neutral manual proof copy.
