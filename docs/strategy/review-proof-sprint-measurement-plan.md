# Review Proof Sprint Measurement Plan

Created: 2026-05-22 Cycle 27

Purpose: turn the review-language proof strategy into a measurable owner-side sprint, so GBP review replies, one GBP post, and personal review/referral asks can be interpreted without guessing.

## Primary Decision

Run the review proof sprint only if it can be measured with owner-side notes.

The strongest move is still:

1. Reply to existing Google reviews with short, outcome-specific replies.
2. Publish one review-confidence GBP post.
3. Ask for honest reviews only after genuine student outcomes.
4. Track whether inquiries mention reviews, confidence, correction, follow-up, work situations, or price anchors.

The sprint should not become a public content calendar until at least one of these happens:

- one qualified inquiry mentions reviews/confidence/follow-up
- one honest new review appears
- one warm referral appears
- one owner-side GBP action changes meaningfully after the post

## Source Discovery

Primary question: how should Auris measure the review proof sprint, and do fresh solo/private/professional proof surfaces weaken the recommendation?

Possible source types:

| Source Type | Why It Might Help | Used |
| --- | --- | --- |
| Auris live Google review endpoint | Confirms owned review proof and freshness | Yes |
| Live destination URLs | Confirms sprint links are safe before owner action | Yes |
| Website review/contact implementation | Shows what can be measured automatically | Yes |
| Measurement plan and ledgers | Prevents repeating channel guesses | Yes |
| Google official review/reply docs | Defines safe owner actions | Yes |
| Google review policy | Prevents unsafe review asks | Yes |
| Solo/professional English coach sites | Tests whether confidence/proof language is unique | Yes |
| Marketplace business-English pages | Tests price-anchor pressure | Yes |
| Academy/local proof pages | Tests what personal positioning should avoid | Yes |
| Podcast/content-led professional-English sites | Tests whether confidence is now category media language | Yes |
| Current-student notes | Best source, unavailable | No |
| Owner-side GBP performance | Best source, unavailable | No |

Selected sources:

- Owned review endpoint and live UTM destinations.
- Google Business Profile Help and Maps UGC policy.
- Professional/solo coach pages: LUVEnglish, Madeleine Cooke, Meg Language Coach, Confident Business English, Sankofa, Eddy English Coach.
- Marketplace/academy pressure sources: Superprof business English Barcelona, Elite Formacion, Language Services listing.
- Product/platform signal: Preptoace AI/speaking-app proof.

## Local Evidence

| Local Artifact | Finding | Meaning |
| --- | --- | --- |
| `research-log.md` Cycle 26 | Last packet said to inspect fresh solo/private teacher review surfaces if no owner-side signal arrived. | This cycle should not restart broad market research. |
| `research-roadmap.md` Packet AB | Next useful work is owner-side review proof results or fresh solo/private review surfaces. | Primary theme selected from roadmap. |
| `local-review-proof-language-scan.md` | Review proof is strong but must include mechanism: real practice, correction and review between classes. | This sprint needs proof language and measurement language. |
| `review-proof-library.md` | Contains reply structures and safe review asks. | Ready to execute without writing new public copy. |
| `content-strategy.md` | Contains GBP review-confidence post and LinkedIn proof-line variant. | One post is enough; no calendar needed yet. |
| `measurement-plan.md` | Already tracks `proof_mentioned`, review/referral asks and Work-English fields. | Needs a compact sprint table so owner notes are easy. |
| `market-intelligence.md` | O030 says review-language proof sprint is ready. | This cycle tests O030 against fresh proof/price pressure. |
| `hypotheses.md` | H009/H019/H021/H023/H025 all depend on owner-side notes. | The strongest hypothesis test is measurement, not more copy. |
| `automation-research-loop.md` | Cycle 26 says separate review-content, review-count and review-policy signals. | This plan follows that structure. |
| `src/components/GoogleReviewsSection.jsx` | Public site pulls live review endpoint and links to Google reviews. | Owned proof is technically visible. |
| `src/components/SeoLandingPage.jsx` | Business/local landing pages include reviews after core proof sections. | Review proof already supports site trust. |
| `src/components/ContactSection.jsx` and `TalkTheTalk.jsx` scan | Contact and Talk events exist, but booking attribution is incomplete because external flows may happen outside the site. | Manual source/proof notes remain necessary. |
| Teacher-assistant platform scan | Homework, assignments, materials, flashcards, SRS and writing review surfaces support between-class continuity. | Portal/follow-up proof is real if framed personally. |

## Data / API Evidence

Live checks on 2026-05-22:

| Check | Result | Meaning |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, rating 5.0, 15 total reviews, 5 visible reviews. | Owned Spanish-visible proof is live. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, rating 5.0, 15 total reviews, 5 visible reviews. | Owned English-visible proof is live. |
| GBP review-confidence UTM homepage URL | 200, UTM preserved, canonical homepage. | Safe GBP destination. |
| LinkedIn Meeting Voice Talk UTM URL | 200, UTM preserved, canonical `/talkthetalk`. | Safe LinkedIn destination if used later. |
| `/ingles-empresas-castelldefels` | 200, canonical present. | Business route is live but still not the first sprint destination. |

Visible review proof:

- Spanish endpoint has longer, richer review text for confidence, adaptation, class atmosphere, practice and tools.
- English endpoint has more family/kids proof plus practical/fun/reliability proof.
- For the current adult/professional acquisition test, use Spanish endpoint themes first and English endpoint themes as secondary trust.

## External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Google Business Profile Help: tips to get more reviews, `https://support.google.com/business/answer/3474122?hl=en` | Google frames reviews as helpful public information, allows review links/QR codes, recommends replying, and says replies should be short, relevant and non-promotional. | Outcome-specific replies and pressure-free asks. | Long promotional review replies. |
| Google Business Profile Help: manage reviews, `https://support.google.com/business/answer/3474050?hl=en` | Verified businesses can reply; replies are public; customers may be notified and may update reviews. | Owner-side review reply sprint. | Treating replies as private notes. |
| Google Maps UGC policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en` | Genuine, unbiased reviews are allowed; incentives, selective solicitation, pressure and requested wording are prohibited. | Honest review ask after real outcomes. | Keyword/5-star review request tactics. |
| LUVEnglish, `https://luvenglish.com/` | Professional English coaching in Barcelona uses real-world confidence, client calls, meetings, internal communication and small groups. | Work-confidence lane demand. | Confidence/work situations as unique claims. |
| Madeleine Cooke, `https://madeleine-cooke.com/` | Executive/business English positioning uses tailored sessions, interviews, presentations, meetings, measurable results and confidence. | Premium professional lane exists. | Generic executive English copy for Auris. |
| Meg Language Coach testimonials, `https://megalanguagecoach.com/testimonials/` | Testimonials mention confidence speaking, professional expression, safe/supportive practice, preparation and enjoyment. | Review proof themes. | Confidence as distinctive by itself. |
| Confident Business English, `https://confidentbusinessenglish.com/` | Content-led professional English can build a large audience around senior managers lacking confidence speaking English. | Confidence is a strong media/content hook. | Assuming confidence content alone means buyer intent. |
| Sankofa English, `https://sankofa.es/` | Barcelona business-English copy names the same gap: knowing English versus using it in negotiations, presentations and meetings under pressure. | `real situation` work-English hook. | Broad business-English positioning for Auris. |
| Eddy English Coach, `https://www.eddyenglishcoach.com/` | Testimonials show senior professionals value adaptation to their field, presentations, legal/work vocabulary, long-term coaching and the human role beyond apps. | Personal coach + real work context. | Portal/app proof as enough by itself. |
| Superprof Business English Barcelona, `https://www.superprof.es/clases/business-english/barcelona/` | Business-English marketplace listings show 5/5 average, 220+ reviews and an 18 EUR/h average, with confidence/professional promises at many prices. | Price-anchor tracking. | Sending premium leads to marketplace proof. |
| Preptoace, `https://preptoace.com/` | Professional language coaching combines confidence metrics, interviews/presentations/careers, ongoing feedback and an AI-powered speaking app. | Human-plus-practice market direction. | Platform/AI feature uniqueness. |
| Elite Formacion, `https://www.elitelc.com/` | Local academy proof includes 30 years, Fundae, follow-up, extra review resources and Spanish-to-English error framing. | Follow-up and Spanish-pattern language are market-normal. | Auris copying academy scale/Fundae tone. |

## Fresh Falsification

Favored idea tested:

`The review proof sprint should lead with confidence because Auris's reviews say confidence.`

Result: refined, not rejected.

Why:

- Fresh coach/testimonial sources repeat confidence constantly.
- The word still matters because buyers use it, but it no longer differentiates on its own.
- The differentiator is a tighter chain: confidence -> real situation -> Spanish-speaker pattern correction -> review/follow-up.

Second idea tested:

`A good public review count is enough to reduce premium-price risk.`

Result: weakened.

Why:

- Superprof has high review volume and lower price anchors in the same business-English category.
- A review count can create trust, but it can also trigger comparison shopping.
- Auris needs review specificity and personal method proof more than raw count.

Cheaper/simpler alternative that could beat the sprint:

- One warm referral after a real student win could beat a GBP post if the student can describe the right person: a Spanish speaker who knows some English but loses confidence in real situations.

## Strategic Synthesis

Strongest next move:

- Run a 7-day owner-side review proof sprint:
  - reply to 3-5 existing reviews
  - publish 1 GBP review-confidence post
  - send 1-2 pressure-free review asks only after genuine outcomes
  - record owner-side metrics and manual proof notes

Cycle 28 execution note:

- Before starting, use `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-proof-capture-packet.md`.
- The sprint is not interpretable unless Day 0 and Day 7 owner-side metrics or equivalent notes exist.
- If Auris cannot capture everything, capture only Day 0 GBP metrics, action log, inquiry notes, Day 7 GBP metrics and anonymized outcomes.

What not to do yet:

- Do not build another Work-English page.
- Do not publish multiple variants.
- Do not ask for review keywords.
- Do not use marketplace reviews as campaign proof.
- Do not interpret GBP results without baseline/action notes.

Evidence that would change the recommendation:

- Leads mention only price/marketplaces and not reviews/confidence/follow-up.
- New reviews are mostly children/exams and do not support adult/professional proof.
- GBP owner-side actions do not move and no inquiry mentions review proof after the sprint.
- A warm referral produces a booked trial faster than GBP.

Risk of acting too early:

- Reply/post language sounds generic if it does not name the method.

Risk of waiting:

- Existing review proof remains passive while competitors with fresher/larger proof occupy local search trust.

## 7-Day Review Proof Sprint Ledger

Use this as a private note. Strategy docs should store anonymous summaries only.

| Date | Action | Channel | Baseline Metric | Proof Language Used | Response / Result | Manual Fields To Fill |
| --- | --- | --- | --- | --- | --- | --- |
| Day 0 | Record GBP baseline | GBP owner dashboard | views, searches, website clicks, calls, messages, bookings, top search terms | none | baseline recorded / blocked | `gbp_baseline_status` |
| Day 1 | Reply to review 1 | GBP reviews | current review count and visible themes | confidence / practice / correction / follow-up | reply approved / edited / blocked | `reply_theme`, `reply_language` |
| Day 1 | Reply to review 2 | GBP reviews | same | confidence / adaptation / work situation | reply approved / edited / blocked | `reply_theme`, `reply_language` |
| Day 2 | Reply to review 3 | GBP reviews | same | continuity / practical class / comfort speaking | reply approved / edited / blocked | `reply_theme`, `reply_language` |
| Day 3 | Publish GBP post | GBP post | baseline actions | confidence in real situations + Spanish-speaker patterns + review between classes | posted / not posted | `utm_used`, `post_theme` |
| Day 4-7 | Review ask after real outcome | WhatsApp/email/after class | no public metric | honest review, no requested details or keywords | no reply / positive / review left / awkward | `ask_type`, `trigger_outcome`, `response`, `result` |
| Day 7 | Interpret sprint | Owner notes + site/contact data | before/after owner metrics | proof mentioned by leads | continue / adjust / pause | `proof_mentioned`, `price_anchor_seen`, `lead_quality` |

## Owner-Side Metrics To Capture

Before the GBP post:

- Business Profile views.
- Searches.
- Website clicks.
- Calls.
- Messages.
- Bookings if visible.
- Top search terms if shown.
- Current review count and rating.
- Whether review replies are already visible.

After 7 days:

- Same metrics.
- Any new review.
- Any review reply approval delay/edit request.
- Any messages/WhatsApps/emails.
- Any direct student/referral response.

## Inquiry Classification

Use these fields for any lead during the sprint:

| Field | Values |
| --- | --- |
| `source_type` | GBP / LinkedIn / website / referral / marketplace / unknown |
| `source_specific` | review_post / review_reply / profile / direct_search / private_referral / unknown |
| `proof_mentioned` | reviews / confidence / spanish_speaker_patterns / portal_follow_up / ireland_background / invoice_nif / price / unknown |
| `work_moment` | meeting / interview / client_call / presentation / conversation / exam / unknown |
| `price_anchor_seen` | 40 / 35 / 30 / 18 / none / unknown |
| `buyer_type` | private_adult / professional / autonomo / small_team / company / parent / unknown |
| `booked_trial` | yes / no / pending |
| `lead_quality` | high / medium / low |

## Continue / Pause Rules

Continue review proof sprint if:

- one new honest review appears
- one warm intro appears
- one qualified inquiry mentions reviews/confidence/follow-up
- GBP owner-side website clicks/messages/calls move from baseline
- one student reply gives new proof language

Adjust if:

- leads mention price/marketplaces first
- the post gets views/clicks but no qualified action
- review replies are approved but feel generic

Pause if:

- review asks feel awkward
- no one replies to asks
- a review is filtered/removed
- inquiries mainly ask for low-price classes, certificates or academy-style groups

## Next Evidence Needed

- Owner-side GBP baseline and 7-day results.
- Which review replies were made and approved.
- Whether any student review/referral ask felt natural.
- Whether new inquiries mention proof or only price.
- Whether LinkedIn profile cleanup is complete enough to run the Meeting Voice post.

## Cycle 29 Five-Minute Gate

Before using the full sprint ledger, ask for the compressed packet in `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`.

Required before interpreting or publishing a GBP proof post:

- owner-view GBP rating and review count
- one GBP Performance screenshot or note for the last 7 or 28 days
- whether any inquiry arrived in the last 7 days and what proof/price/source language appeared

Live check on 2026-05-23:

- Spanish review endpoint: 5.0 / 16, 5 visible reviews.
- English review endpoint: 5.0 / 16, 5 visible reviews.
- Earlier cycles recorded 5.0 / 15.

Decision rule:

- If owner view confirms 16 reviews, update the sprint baseline to `5.0 / 16`.
- If owner view still shows 15 reviews, keep public copy count-neutral or at `15 reviews` and treat endpoint count drift as noise.
- If no owner view is available, do not use the count change as proof copy. Use theme proof instead: confidence, practical conversation, Spanish-speaker correction and follow-up.

## Cycle 30 Action-Gate Rule

Use `/Users/aurisp/repos/teacher-website/docs/strategy/proof-sprint-action-gates.md` before interpreting the sprint.

Evidence levels:

| Level | Meaning For This Sprint |
| --- | --- |
| Level 0 | Public proof/route checks only. Prepare, but do not interpret. |
| Level 1 | Owner-view review count/rating. Confirm proof truth. |
| Level 2 | Day 0 GBP Performance. One measured action can start. |
| Level 3 | Day 0, action log and Day 7 same-range metrics. Interpret profile movement. |
| Level 4 | Lead notes. Decide channel priority and proof/price quality. |

Do not call the review proof sprint a success or failure below Level 3. Do not change channel priority without Level 4 unless the owner metrics are unusually clear and the action log is complete.
