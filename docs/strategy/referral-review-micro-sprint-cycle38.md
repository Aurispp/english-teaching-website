# Referral Review Micro-Sprint - Cycle 38

Created: 2026-05-23 Cycle 38

Purpose: turn the existing review/referral strategy into a tiny, relationship-safe acquisition test while GBP, LinkedIn, Search Console and marketplace decisions are still owner/API gated.

## Primary Question

Can a current-student review/referral micro-sprint become the strongest near-term acquisition test while GBP, LinkedIn and GSC are owner/API-gated, and what exact ask/ledger should Auris use without making relationships feel transactional?

## Working Answer

Yes, but as a quiet parallel sprint, not as a replacement for GBP.

The strongest next acquisition move is:

1. Keep Review Truth as the first owner-side gate if Auris can check GBP.
2. If owner metrics do not arrive, run one very small current-student warm-proof sprint.
3. Use only pressure-free review asks and referral prompts after genuine outcomes.
4. Track anonymous outcomes manually because GA4/Search Console cannot see WhatsApp, Google review UI, or private introductions.

This fits Auris better than another public-content draft because it uses the highest-trust asset already visible in the business: students who can describe confidence, adaptation, practical class work and follow-up in natural language.

## Why This Cycle

The open gates are unchanged:

- GBP owner review truth and reply status are still missing.
- GBP Performance Day 0 is still missing.
- LinkedIn owner/profile cleanup evidence is still missing.
- Search Console access is still unavailable locally because the current token lacks `webmasters.readonly`.
- Marketplace price-policy decisions are still owner-side.

The referral/review lane is the one useful move that does not require new credentials, public publishing, a website change, or a profile edit.

## Source Discovery

Best possible source types for this exact question:

| Source Type | What It Could Reveal | Decision |
| --- | --- | --- |
| Existing review/referral loop docs | Current scripts, policy rules and ledger. | Used. |
| Live Google review endpoint | Fresh proof, review count, referral language in reviews. | Used. |
| Owner evidence ledger and action gates | How to classify actions without over-measuring. | Used. |
| Website analytics/contact implementation | Whether referral URLs can be tagged and measured. | Used. |
| Official Google review docs | What review requests/replies can safely do. | Used. |
| Google Maps content policy | What must be avoided: incentives, pressure, requested wording. | Used. |
| FTC review/testimonial guidance | Truth-in-review guardrail around incentives and selective proof. | Used. |
| BrightLocal review research | Whether review recency/replies matter to local trust. | Used. |
| Tutor/referral acquisition guides | How tutoring businesses use word of mouth. | Used, lower confidence. |
| Tutor practitioner communities | Practical discomfort/wording/referral patterns. | Used, anecdotal. |
| English-learning communities | Current pain language around workplace speaking anxiety. | Used as demand language, not buying proof. |
| Local professional/community sources | Later expansion/referral map. | Deferred. |

Chosen evidence layers: local strategy memory, live review/data checks, official review policy, tutoring/referral sources, and recent learner/community pain signals.

## Local Evidence

| Local Artifact | Finding | Strategic Meaning |
| --- | --- | --- |
| `research-log.md` | Cycle 37 left owner review truth, GBP Day 0, GSC access and marketplace policy unfinished. | Do not repeat the same owner-gated channel theory. |
| `research-roadmap.md` | Packet W and Packet AC already point toward referral/review asks if owner-side results appear. | This cycle should operationalize the sprint rather than invent a new lane. |
| `hypotheses.md` H002 | GBP still beats broad SEO near term, but owner-side metrics are gated. | Referral can run in parallel, not replace GBP. |
| `hypotheses.md` H009 | Reviews remain the central proof asset. | The review ask must be policy-safe and outcome-specific. |
| `hypotheses.md` H023 | Referral/review loop is the best near-term trust test while owner metrics are missing. | Strengthened. |
| `referral-review-request-loop.md` | Current scripts are useful but the long version risks sounding like requested content. | Prefer shorter, less directive wording. |
| `review-proof-sprint-measurement-plan.md` | Review/referral asks need manual rows because they happen outside GA4. | Use the ledger, not attribution fantasies. |
| `owner-evidence-ledger-template.md` | Evidence levels already separate public proof, review truth, actions and inquiry rows. | Add only the smallest action fields. |
| `gbp-week-one-execution-pack.md` | GBP is ready in draft but owner baseline is still the gate. | Keep GBP ready; do not make it the only next action. |
| `proof-sprint-action-gates.md` | Real inquiry/referral evidence can outrank planned sequence. | A warm referral can become Level 4 evidence immediately. |
| `review-proof-library.md` | Confidence, adaptation, professional situations and continuity are repeat proof themes. | Referral prompt should describe the person helped, not the channel. |
| `GoogleReviewsSection.jsx` | The website already links to Google reviews and displays live review count. | No new public review page is needed. |
| `src/App.jsx` / analytics | Site can track route/contact events but not private referral context. | Manual notes remain necessary. |
| Live referral UTM | `student_referral/private_message/referral_review_micro_sprint` URL returns 200. | A private referral link can be used if needed. |

## Data/API Evidence

Live checks on 2026-05-23:

| Check | Result | Meaning |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=en` | `places-new`, rating `5`, reviewCount `16`, 5 visible reviews. | Public review proof is live. |
| English visible review set | Includes a 2026-05-22 review with a former-student-to-family recommendation pattern. | This is direct evidence that referral trust already exists. |
| `/.netlify/functions/google-reviews?language=es` | `places-new`, rating `5`, reviewCount `16`, 5 visible reviews. | Bilingual proof remains live. |
| Referral UTM homepage URL | HTTP 200 from Netlify. | Private referral links can be tagged without creating a new page. |

The important new observation is the May 22 review:

`former student -> confident recommendation -> children/family trust`

For the adult/professional lane, do not foreground the children angle. Use the pattern: someone who experienced Auris's method trusted him enough to recommend him to people close to them.

## External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Google GBP review tips, https://support.google.com/business/answer/3474122 | Reviews appear in Maps/Search; businesses can ask via link/QR; incentives are prohibited; honest balanced reviews matter. | One or two pressure-free review asks. | Incentives or star/keyword requests. |
| Google Maps UGC policy, https://support.google.com/contributionpolicy/answer/7400114 | Reviews must reflect genuine experiences; merchants must not offer incentives, selectively solicit positive reviews, pressure users or request specific content. | Short honest request after real experience. | Long prompt that tells students exactly what to mention. |
| Google manage reviews, https://support.google.com/business/answer/3474050 | Verified businesses can reply publicly; replies are reviewed and may take time; review links can be shared. | Reply status remains an owner-side gate. | Treating replies as instant/private. |
| FTC Consumer Reviews and Testimonials Rule Q&A, https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers | Incentives and review suppression can distort consumer understanding; selective/non-representative review use can be risky. | Keep asks non-incentivized and representative. | Discount, raffle or positive-only review programs. |
| BrightLocal Local Consumer Review Survey 2026, https://www.brightlocal.com/research/local-consumer-review-survey/ | Consistent review sentiment, recency, star rating and owner responses influence trust; 47% in the survey would not use a business with fewer than 20 reviews. | Review recency/replies are worth improving. | Assuming 16 reviews alone closes premium leads. |
| Tutors.com tutoring clients guide, https://tutors.com/articles/how-to-get-tutoring-clients | Recommends clear audience, market research, GBP, reviews, retention and source tracking for tutors. | GBP + reviews + source notes fit tutoring acquisition. | Random social posting without clear ideal student. |
| Adviita private tutoring clients guide, https://adviita.com/guides/get-tutoring-clients | Says word of mouth from satisfied parents is reliable long-term growth and recommends asking directly with a specific subject/person. | Referral sentence should be specific and direct. | Vague "send me anyone" ask. |
| Teachworks word-of-mouth tutoring post, https://blog.teachworks.com/2015/09/tutoring-business-word-of-mouth/ | Tutor word-of-mouth works when clients can tell similar people and have a simple way to pass details. | Make Auris easy to describe. | Formal referral rewards as the first move. |
| Reddit tutor thread, https://www.reddit.com/r/TutorsHelpingTutors/comments/1shqz1b/how_do_you_get_clients/ | Practitioner comments say word of mouth was slow until a few regular families, then direct asks helped, despite initial awkwardness. | Tiny direct ask is realistic. | Expecting instant referral scale. |
| Reddit LearningEnglish work anxiety thread, https://www.reddit.com/r/LearningEnglish/comments/1qhn9gd/feel_anxious_to_speak_english_at_work/ | Learners describe anxiety, comparing themselves to other non-native speakers, freezing and feeling better with one-on-one practice than real people. | Referral target should be confidence in human conversation. | Positioning only as grammar/content. |
| Reddit EnglishLearning meetings thread, https://www.reddit.com/r/EnglishLearning/comments/1t5wnsg/non_natives_hows_everyone_surviving_english/ | Recent pain language around meetings: missed keywords, stalling phrases, prepared openers and the first sentence being hardest. | Work-English referral prompt should name concrete meeting moments. | Broad "business English" wording. |

## Falsification

### Hypothesis Tested: H002

`GBP will beat broad SEO for near-term leads.`

Result: refined, not weakened.

GBP/reviews remain the strongest public acquisition path, but GBP cannot be interpreted without owner review truth and Performance. A warm referral could create qualified evidence sooner than a GBP post if Auris logs the source and outcome. The correct frame is:

`GBP first public channel; referrals first private trust test.`

Next practical test:

- If owner GBP data arrives, fill Review Truth and Day 0 rows.
- If no owner data arrives, run one referral/review ask pair and log outcome.

### Hypothesis Tested: H009

`Reviews should become the central proof asset.`

Result: strengthened and constrained.

Official Google policy strengthens review requests only when they are genuine, non-incentivized and not wording-directed. BrightLocal strengthens the importance of review recency and owner response. The May 22 review strengthens the referral pattern. The constraint is that the ask must not sound like a script for the review.

Next practical test:

- Replace long review ask with the shorter Cycle 38 version.
- Track whether the new review/referral language includes confidence, real situations, adaptation or follow-up without requesting those exact terms.

### Hypothesis Tested: H023

`A personal referral/review loop can produce stronger near-term trust evidence than more social posting theory.`

Result: strengthened.

The live review set now includes a concrete referral pattern. Tutor acquisition sources and practitioner comments support direct but simple referral asks. The risk remains awkwardness or low-fit referrals, so the first sprint should be deliberately small.

Next practical test:

- 1 no-ask observation.
- 1 review ask.
- 1 referral prompt.
- Expand to 2 and 2 only if the first pair feels natural.

### Favored Idea We Tried To Weaken

`The referral/review loop can replace GBP as the next acquisition engine.`

Result: weakened.

Referrals are high-trust but hard to scale or measure. GBP remains the better public discovery asset because it can show reviews, services, posts, photos and local actions. The referral loop should run while GBP is gated, then be compared against GBP once owner metrics arrive.

### Cheaper Alternative

A single timely reply to the newest Google review may beat any student ask if owner UI shows it is unreplied. It is lower-friction, public, and safe. That remains the first action if Auris can check owner view.

## Opportunity Scorecard

Score: 5 = strongest. Risk: 5 = highest risk.

| Lane | Fit | Evidence Strength | Effort | Risk | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| Current-student review/referral loop | 5 | 4 | 2 | 2 | Run quietly while owner metrics are missing. |
| GBP review/reply/post sprint | 5 | 4 public / owner-gated | 3 | 2 | Still first public channel once Review Truth/Day 0 arrive. |
| LinkedIn Meeting Voice post | 3 | 3 | 3 | 3 | Hold until profile cleanup/source proof. |
| More local SEO/page work | 3 | 2 | 4 | 2 | Do only if approved; not the fastest proof path. |
| Local professional/coworking outreach | 3 | 2 | 4 | 4 | Keep mapped; do not activate yet. |
| Tutor marketplaces | 3 | 3 demand / 4 price risk | 2 | 4 | Use as intent source, not premium destination. |

## Implementation-Ready Sprint

### Day 0 Setup

- Confirm Google review link from owner UI if possible.
- Use homepage private referral UTM only when a link is useful:
  `https://englishwithauris.com/?utm_source=student_referral&utm_medium=private_message&utm_campaign=referral_review_micro_sprint&utm_content=confidence_work_situation`
- Choose 3-5 possible students/recent students by segment only. Do not store names in strategy docs.
- Select only people with a genuine outcome or natural referral context.

### Day 1 No-Ask Observation

Use this before sending anything:

| Student Segment | Recent Outcome | Natural Trigger? | Ask Type That Would Fit | Felt Natural? | Decision |
| --- | --- | --- | --- | --- | --- |
| professional/confidence/local/portal/former |  | confidence/work/portal/referral mention | review/referral/none | yes/no | send/hold |

If there is no natural trigger, do nothing.

### Day 2 First Review Ask

Use after a real progress moment. Do not ask for keywords, city names, five stars or exact content.

English:

`Hi [Name], I was thinking about the progress you mentioned with [situation]. If you ever feel comfortable leaving an honest Google review, it would really help future students understand what classes with me are like. No pressure at all, and only write what feels true to your experience.`

Spanish:

`Hola [Name], estaba pensando en el progreso que comentaste con [situacion]. Si algun dia te apetece dejar una resena honesta en Google, me ayudaria mucho para que futuros estudiantes entiendan como son las clases conmigo. Sin ninguna presion, y escribe solo lo que sea verdad para ti.`

### Day 4 First Referral Prompt

Use only when it fits the relationship.

English:

`By the way, if you know someone who already has some English but loses confidence when they need to use it, especially in conversation or work situations, feel free to put us in touch. No pressure. I will just have a normal first chat and see whether I can help.`

Spanish:

`Por cierto, si conoces a alguien que ya tiene algo de ingles pero pierde confianza cuando tiene que usarlo, sobre todo en conversacion o situaciones de trabajo, puedes ponernos en contacto. Sin presion. Hablare con esa persona con calma para ver si realmente puedo ayudar.`

### Day 7 Second Ask Only If Natural

Send one second review or referral prompt only if there is another genuine trigger. Otherwise, hold.

### Day 12 Interpretation

Continue if one of these happens:

- one honest review appears
- one warm intro appears
- one reply gives useful proof language
- one inquiry mentions referral, reviews, confidence, work situation, correction or follow-up

Pause if:

- the ask feels awkward
- the student does not reply and there was no strong trigger
- the review is filtered/removed
- referred leads are low-fit or price-anchor first

## Ledger Fields

Action row:

| Field | Values |
| --- | --- |
| `date` | yyyy-mm-dd |
| `ask_type` | no_ask_observation / review_ask / referral_prompt / thank_you |
| `student_segment` | professional / local / confidence / portal / long_term / former / parent |
| `trigger_outcome` | confidence / work_situation / portal_continuity / conversation / exam / family_trust / general_progress |
| `felt_natural` | yes / no / unsure |
| `channel` | after_class / WhatsApp / email / LinkedIn DM / other |
| `sent_status` | held / sent / replied / review_left / intro_made / awkward / complaint |
| `result` | review / referral_lead / booked_trial / proof_language / none |
| `proof_mentioned` | reviews / confidence / work_situation / spanish_speaker_patterns / portal_follow_up / personal_teacher / unknown |
| `lead_quality` | high / medium / low / unknown |

Inquiry row additions:

- `referral_context`: current_student / former_student / parent / colleague / friend / unknown
- `source_specific`: private label only, no names
- `price_anchor_seen`: 40 / 35 / 30 / 18 / none / unknown
- `quoted_price_expected`: 40 / 30 / other / unknown

## Strategic Interpretation

Strongest next move:

- If owner can check GBP, confirm Review Truth and newest-review reply first.
- If not, run the tiny warm-proof sprint above.

What Auris should not do yet:

- Do not launch a public referral program.
- Do not offer discounts or free classes for reviews.
- Do not ask students to mention exact words.
- Do not bulk-message students.
- Do not use marketplace links as referral destinations.
- Do not make a public website referral page.

Evidence that would change the recommendation:

- A warm referral books a trial: referral loop moves above LinkedIn for near-term acquisition.
- GBP Day 0/Day 7 shows action after review reply/post: GBP remains primary.
- Students feel awkward or replies are silent: pause and redesign the ask.
- Leads mention 30/18 EUR marketplace anchors first: strengthen price-proof before more referrals.

## Process Notes

Highest-signal source this cycle:

- Live Google review endpoint, because the May 22 review contained a real referral pattern.

Most useful external source:

- Google Maps UGC policy, because it forced the ask to become shorter and less directive.

Useful outside-in source:

- Recent Reddit work-English anxiety threads, because they sharpen the referral target: people who can function on paper but freeze, prepare openers, miss meeting details or feel smaller around fluent colleagues.

Noisy/biased source:

- Generic tutor referral marketing guides. Useful for patterns, but many recommend incentives; for Auris, incentives are wrong for Google reviews and too transactional for the personal premium brand.

Process improvement:

- When owner/API gates block the public sprint for more than one cycle, rotate to a relationship-safe private action that can create Level 4 evidence, instead of creating another owner ask or another content draft.

## Next-Cycle Packet

If Auris sends owner Review Truth:

1. Fill `owner-evidence-ledger-template.md` Review Truth row.
2. Update `review-proof-library.md` count/reply decision.
3. If newest review is unreplied, draft one reply.
4. Ask for GBP Day 0 only after reply/count truth.

If Auris sends a review/referral outcome:

1. Record only anonymous fields from this artifact.
2. Update H023 and `measurement-plan.md`.
3. Compare result against GBP/LinkedIn readiness.
4. If a referral books a trial, create the next 2-week referral cadence.

If no owner/outcome evidence arrives:

1. Do not create another owner ask artifact.
2. Inspect one of:
   - current-student retention/product proof,
   - local professional job-demand evidence,
   - GBP service/profile basics if owner data appears,
   - pricing implementation only if Auris asks for code.
3. Keep referral loop as ready, not repeated.
