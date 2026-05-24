# Owner Evidence Ledger Template

Created: 2026-05-23 Cycle 31
Last updated: 2026-05-24 Cycle 48

Purpose: make any owner-side screenshot or short note immediately usable. This template turns GBP, LinkedIn, Calendly and inquiry evidence into evidence levels without asking Auris for credentials or private message exports.

## Working Answer

The strategy is no longer blocked by not knowing what to do. It is blocked by not having owner-side evidence in a consistent shape.

Use this ledger whenever Auris sends:

- a Google Business Profile review count or review screenshot
- a GBP Performance screenshot or note
- a review reply/post/action note
- a LinkedIn analytics screenshot
- a Calendly booking/source note
- an anonymized inquiry note

Do not store private names, emails, phone numbers, company names, full WhatsApp messages, login details or screenshots with identifiable student data.

## Evidence Levels

| Level | Evidence | Ledger Rows Needed | What It Can Decide |
| --- | --- | --- | --- |
| 0 | Public endpoint and route checks only | Public proof row | Destination readiness, not performance |
| 1 | Owner-view review count/rating | Review truth row | Review count baseline and reply need |
| 2 | Owner-view count plus GBP Performance | Review truth + GBP baseline row | Whether one measured GBP action can start |
| 3 | Day 0, one action, Day 7 same-range metrics | Baseline + action log + Day 7 row | Whether profile actions moved |
| 4 | Level 3 plus lead/inquiry proof | Inquiry row + decision output | Whether to continue, adjust or switch channels |

## Public Proof Row

Use this only for live endpoint and destination checks.

| Date | Source | Public Rating/Reviews | Visible Reviews | URL / UTM | Title/Canonical OK? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-05-23 | reviews endpoint ES/EN | 5.0 / 16 | 5 each | `/.netlify/functions/google-reviews` | yes | Public proof only; owner truth still needed. EN view now shows a very recent visible review. |
| 2026-05-23 Cycle 35 | reviews endpoint ES/EN repeat check | 5.0 / 16 | 5 each | `/.netlify/functions/google-reviews` | yes | Count remains consistent across language views; reply status still owner-only. |
| 2026-05-24 owner note | Google Search/Business Profile owner view | 5.0 / 16 | Search result shows 2 very recent public reviews plus older reviews | Google Search owner view | n/a | Owner manages the profile; review count is confirmed at 16. Newest recent reviews are not replied to yet. |

## Review Truth Row

Use this when Auris checks the GBP owner dashboard or review screen.

| Date | Evidence Level | Owner Rating/Reviews | Public Count ES | Public Count EN | Newest Review Date/Theme | Reply Status | Count Decision | Next Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | 1 | 5.0 / __ | 16 | 16 |  | visible / missing / pending / unknown | 15 / 16 / count-neutral | reply / ask GBP baseline / hold |
| 2026-05-24 | 1 | 5.0 / 16 | 16 | 16 | 2026-05-23-ish; long-term adult learner praises productive online 90-minute classes, resources, care for learning; another edited review says former student confidently recommends Auris for children | missing | 16 confirmed; static copy may mention 16 only if deliberately updated, but count-neutral still safer for flexible copy | reply to the two newest reviews before any new GBP post |

Interpretation:

- If owner count is 16, private baseline can move to `5.0 / 16`.
- If owner count is 15 while public endpoint says 16, public copy stays count-neutral or uses 15 until confirmed.
- If newest review is unreplied, reply comes before publishing more posts.

## GBP Performance Row

Use for Day 0 and Day 7. Keep the same date range in both rows.

| Date | Evidence Level | Snapshot Type | Range | Views | Searches | Website Clicks | Calls | Messages | Bookings | Top Search Terms | Rating/Reviews | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | 2 | Day 0 | 7d / 28d |  |  |  |  |  |  |  |  | baseline |
| 2026-__-__ | 3 | Day 7 | same as Day 0 |  |  |  |  |  |  |  |  | compare to Day 0 |
| 2026-05-24 | 2 | Day 0 owner note | visible 6-month chart Dec 2025-May 2026 | 520 profile views | `<50` searches | 2 website clicks | unknown | unknown | unknown | `auris`, `clases de ingles castelldefels`, `english`, `ingles`, ` auris`, all `<15` | 5.0 / 16 | Interactions shown: Dec 0, Jan 0, Feb 1, Mar 0, Apr 1, May 0. Discovery is low and mostly branded/broad; profile is a trust asset, not yet a lead engine. |

Interpretation:

- If there is no Day 0 row, do not judge the sprint.
- If Day 7 has more website clicks/messages/calls but no inquiry note, inspect proof/CTA/contact path before adding more posts.
- If searches/views move but actions do not, do not call it acquisition.

## Action Log Row

Use for review replies, GBP posts, review asks, referral asks, LinkedIn posts or profile edits.

| Date | Evidence Level | Action Type | Channel | Asset / Hook | URL / UTM | Status | Proof Theme | Owner Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | 3 | review_reply / GBP_post / review_ask / referral_ask / LinkedIn_post / profile_edit |  |  |  | planned / live / pending / edited / rejected / sent / no_reply | confidence / work_moment / correction / portal / review |  |
| 2026-05-24 | 3 | review_reply | GBP | replies to 2 newest reviews | Google Business Profile reviews | planned | long-term learner trust / care / productive online classes / former-student referral | Auris confirmed he has not responded yet. Reply before posting more content. |

Required status detail:

- GBP post: planned, live, pending, rejected or edited.
- Review reply: live, pending, edited, rejected or unknown.
- Review/referral ask: sent, not sent, no reply, positive reply, review left, referral made or awkward.
- LinkedIn post/profile edit: published/edited plus 24h, 72h and 7d analytics if available.

## Inquiry Row

Use this for every WhatsApp, email, Calendly, LinkedIn DM, GBP message, referral or marketplace lead. Store only anonymized fragments.

| Date | Evidence Level | Source Type | Source Specific | Source Confidence | Profile Seen | First Thing Mentioned | Proof Specificity | Work Moment | Price Anchor Seen | Quoted Price Expected | Buyer Type | Booked Trial | Lead Quality | Human Signal Strength | Next Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | 4 | GBP / LinkedIn / website / Talk / referral / marketplace / Instagram / TikTok / local_event / unknown | review_post / profile / direct_search / talk_completion / contact_form / whatsapp_nav / private_referral / superprof / tusclases / unknown | confirmed_utm / owner_metric / self_reported / platform_message / inferred / unknown | website / GBP / LinkedIn / Superprof / Tusclases / referral / unknown |  | generic_review / meeting_confidence / method_correction / portal_follow_up / personal_teacher / ireland_bilingual / invoice_nif / price / unknown | meeting / interview / client_call / presentation / conversation / exam / unknown | 40 / 35 / 30 / 20 / 18 / none / unknown | 40 / 35 / 30 / 20 / 18 / unclear / not_discussed | private_adult / professional / autonomo / small_team / company / parent / unknown | yes / no / pending | high / medium / low | none / weak / medium / strong |  |

Interpretation:

- A real lead note beats channel theory.
- `source_confidence` keeps a self-reported lead source useful without pretending it is perfect attribution.
- `human_signal_strength=strong` can justify continuing a low-volume channel when the buyer repeats the exact proof/moment.
- If a lead mentions reviews, confidence, correction, portal/follow-up or a work moment, strengthen the review/proof-led direction.
- If the first thing mentioned is price or marketplace comparison, strengthen premium proof near price and keep marketplace links away from premium campaigns.
- If two qualified direct leads mention a 30 EUR marketplace anchor before booking, marketplace price alignment becomes a fix-before-more-content task.
- If marketplace-origin leads accept 40 EUR/h or become good students without friction, keep marketplace cleanup secondary.
- If leads ask mainly for exams, children, low-price groups or certificates, do not overfit the adult/professional message to them.

## Decision Output Row

Fill this after evidence reaches Level 2, 3 or 4.

| Date | Evidence Level Reached | Continue / Adjust / Pause | Strongest Next Action | Stop Condition | Open Question |
| --- | --- | --- | --- | --- | --- |
| 2026-__-__ |  | continue / adjust / pause | reply / GBP post / review ask / referral ask / LinkedIn post / profile cleanup / pricing cleanup |  |  |
| 2026-05-24 | 2/3 | continue quietly | reply to 2 newest Google reviews, then make one small profile freshness action only if desired | pause acquisition push if replies are done and no capacity is opening soon | Should GBP description/category be tuned later toward premium personal adult/professional future demand without losing current student reality? |
| 2026-05-24 Cycle 48 | 2/3 | continue quietly | Trust Maintenance Mode: reply freshness plus monthly GBP owner snapshot | do not run acquisition push while nearly full and no slot is opening | When should future-availability copy replace immediate booking CTAs? |

## Redaction Rules

Do not save:

- full screenshots containing names or private messages
- names, surnames, emails, phone numbers or company names
- full WhatsApp/email/LinkedIn messages
- private profile viewer identities
- credentials, cookies or account URLs that expose private access

Save:

- aggregate numbers
- status labels
- anonymized short phrases, such as `asked about meetings`, `mentioned reviews`, `compared with 30 EUR`, `wanted free trial`
- source labels and UTM/content labels

## Owner Ask Order

Use the smallest ask that advances the level:

1. Level 1: `Can you check your Google Business Profile and tell me the rating/review count it shows?`
2. Level 2: `Can you send one GBP Performance screenshot for last 7 or 28 days?`
3. Level 3: `After one action, can you send the same Performance view again in 7 days?`
4. Level 4: `Did any inquiry come in, and what did they mention first? Please anonymize.`

## Cycle 32 Micro-Intake Labels

Use `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-micro-intake-playbook.md` when the ledger is still blank.

| Label | Ledger Row | One-Row Ask |
| --- | --- | --- |
| `review_truth` | Review Truth | Owner-view rating/review count plus newest-review reply status if visible. |
| `gbp_day0` | GBP Performance | One owner Performance screenshot/note for 7d or 28d. |
| `action_log` | Action Log | Whether the reply/post/ask/edit is live, pending, edited, rejected, sent or not done. |
| `lead_note` | Inquiry | Source plus first thing mentioned, anonymized. |
| `day7_compare` | GBP Performance | Same Performance view and range after one action. |
| `decision_output` | Decision Output | Continue, adjust or pause after evidence reaches Level 2+. |

If no owner evidence arrives after two micro-asks, do not make the ledger larger. Stop shrinking the request, wait for owner-side data, or rotate the next cycle to another strategic question.

## Cycle 43 Lead-Source Proof Labels

Use `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md` when the question is channel comparison, not only GBP review proof.

| Label | Ledger Row | Minimum Data |
| --- | --- | --- |
| `channel_action` | Action Log | Channel, action type, asset/hook, URL/UTM and status. |
| `site_tool_intent` | Action Log or Inquiry note | Event/action count such as `talk_started`, `talk_completed`, `talk_trial_click`, `contact_click` or form success. |
| `lead_source_note` | Inquiry | Source type, source confidence, first thing mentioned and lead quality. |
| `proof_price_note` | Inquiry | `proof_specificity`, `work_moment`, `price_anchor_seen`, `quoted_price_expected`. |
| `source_decision` | Decision Output | Continue, adjust or pause based on Level 4/5 evidence. |

Cycle 43 rule:

- Human buyer signal outranks raw clicks and impressions.
- `talk_trial_click` is intent, not a booked trial.
- Do not build prospect tracking into the teaching platform until 5-10 anonymized manual rows show repeated fields.

## Cycle 47 Owner Proof Decision Gate

Use `/Users/aurisp/repos/teacher-website/docs/strategy/owner-proof-decision-gate-cycle47.md` when the ledger is still blank.

Only four row labels matter now:

| Label | Ledger Row | Unlocks |
| --- | --- | --- |
| `review_truth` | Review Truth | Count/reply decision and one possible reply action. |
| `gbp_day0` | GBP Performance | One measured GBP action if Auris wants the sprint. |
| `action_log` | Action Log | Status of one reply, post, ask or profile edit. |
| `lead_source_note` | Inquiry | Channel/proof/price/work-moment learning that outranks planned sequences. |

Cycle 47 rule:

- If no owner row, action row or lead row arrives, do not expand this ledger, rewrite the owner ask, or create another GBP/LinkedIn content draft.
- Public review endpoint count/rating can be logged as public proof, but visible public review order is not reliable enough to decide newest-review reply status.
- A real lead note can bypass the Review Truth -> GBP Day 0 sequence; classify the lead first.

## External Evidence Basis

- Google Business Profile performance docs: `https://support.google.com/business/answer/9918094?hl=en`
- Google local ranking docs: `https://support.google.com/business/answer/7091?hl=en`
- Google posts docs: `https://support.google.com/business/answer/7342169?hl=en`
- Google review tips: `https://support.google.com/business/answer/3474122?hl=en`
- Google manage reviews docs: `https://support.google.com/business/answer/3474050?hl=en`
- Google Maps UGC policy: `https://support.google.com/contributionpolicy/answer/7400114?hl=en`
- Google Places API Place resource: `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places`
- Google Analytics campaign URL docs: `https://support.google.com/analytics/answer/10917952?hl=en`
- Calendly UTM tracking docs: `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters`
- LinkedIn post analytics docs: `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content`
- LinkedIn profile view docs: `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature`

## Do Not Do Yet

- Do not ask for account credentials.
- Do not collect full private messages.
- Do not publish multiple GBP/LinkedIn variants without Day 0.
- Do not change public proof copy to `16 reviews` until owner-view count is confirmed.
- Do not use this ledger as a reason to delay a real warm referral or review reply. If a real lead arrives, classify it first.
