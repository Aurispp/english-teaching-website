# Lead Source Proof Ledger

Created: 2026-05-23 Cycle 43

Purpose: make the GBP, LinkedIn, Talk the Talk, referral, marketplace and pricing/proof tests comparable without pretending that GA4 can see every serious buying conversation.

## Primary Question

How should Auris capture enough evidence to compare near-term channels without overbuilding analytics or waiting for perfect GA4 access?

## Working Answer

Use three evidence layers, in this order:

1. Human buyer signal: anonymized inquiry notes about source, first thing mentioned, proof, work moment, price anchor and booking outcome.
2. Channel-visible signal: GBP Performance, LinkedIn post/profile analytics, Calendly source fields, marketplace/referral context.
3. Site/tool signal: UTM landing pages, `talk_started`, `talk_completed`, `talk_trial_click`, contact clicks, form submissions and Calendly embed events.

The first layer outranks the other two. A single serious inquiry that says `I saw your reviews and need help speaking in meetings` is more strategic than 200 impressions with no proof, source or price note.

## Source Discovery

Where the best evidence for this question might live:

| Source Type | Why It Might Help | Cycle 43 Decision |
| --- | --- | --- |
| GBP Performance owner UI | Shows views, calls, website clicks, messages and bookings where configured. | Keep as channel-visible signal. |
| Google local ranking docs | Defines why reviews/profile completeness matter locally. | Keep as constraint, not conversion proof. |
| GA4 campaign URL docs | Defines UTM source/medium/campaign/content structure. | Keep for link hygiene. |
| GA4 recommended event docs | Defines `generate_lead` and lead-source parameters. | Keep for future code cleanup, not manual ledger replacement. |
| Calendly UTM docs | Shows how scheduling links/embeds can carry source fields. | Keep for booking-source notes. |
| Calendly embed developer docs | Explains when `event_scheduled` can be tracked by parent page. | Keep for Talk attribution limit. |
| LinkedIn analytics docs | Confirms post analytics are owner-visible and include link/profile activity. | Keep only if Auris posts/edits profile. |
| WhatsApp click-to-chat docs/community examples | Prefilled messages can carry source clues, but send still happens in WhatsApp. | Keep as optional friction reducer, not attribution truth. |
| Small-business attribution communities | Reveals practical pattern: UTMs plus a simple source question. | Keep as outside-in process evidence. |
| Live website code | Reveals actual events and blind spots. | High-signal local evidence. |
| Teacher-assistant code | Could later become CRM, but no prospect workflow exists now. | Defer implementation. |
| Search Console | Useful for SEO trend, not enough for private lead source/proof. | Secondary for this cycle. |

Chosen sources: official Google/Calendly/LinkedIn docs, live site/code checks, live review endpoint, small-business attribution threads, teacher-assistant read-only scan.

## External Evidence Summary

| Source | Signal | What It Supports | What It Weakens |
| --- | --- | --- | --- |
| Google Business Profile performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Owners/managers can check profile views, clicks and interactions; calls, website clicks, messages and bookings are available depending on setup. | GBP needs owner-side Day 0/Day 7 rows. | Judging GBP from public route checks. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Local ranking depends on relevance, distance and prominence; reviews/positive ratings can help prominence. | Review-led GBP remains strategically plausible. | Treating one post as a local ranking lever by itself. |
| Google Analytics campaign URL docs, `https://support.google.com/analytics/answer/10917952?hl=en` | External links should include source, medium and campaign; content differentiates placements. | Placement-specific UTMs for GBP/LinkedIn/Talk. | One generic campaign URL. |
| GA4 recommended events docs, `https://support.google.com/analytics/answer/9267735?hl=en-EN` | `generate_lead` is recommended when a user submits a form or request. | Future code cleanup should add `generate_lead` to strong lead events. | Custom events as the whole lead model. |
| GA4 developer event docs, `https://developers.google.com/analytics/devguides/collection/ga4/reference/events` | `generate_lead` can carry `lead_source`; value needs currency if used. | Event naming can improve reporting later. | Sending private lead notes into GA4. |
| Calendly UTM docs, `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters` | Calendly supports source, medium, campaign, content and term in embed/direct flows. | Booking-source notes can be partly automated if links are tagged. | Untagged Calendly bookings as source truth. |
| Calendly embed developer docs, `https://calendly.com/help/advanced-calendly-embed-for-developers` | `calendly.event_scheduled` is emitted via postMessage to the parent window for supported embeds. | Current embedded contact Calendly can track more than a new-tab Talk CTA. | Treating `talk_trial_click` as a booked trial. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Only the member can view post analytics; analytics include discovery, profile activity, link engagement and demographics. | Owner rows are normal for LinkedIn measurement. | Public scraping for LinkedIn performance. |
| Reddit small-business lead-source thread, `https://www.reddit.com/r/smallbusiness/comments/1ncaxum/how_do_you_track_where_your_leads_come_from/` | Small service owners report that UTMs help, but adding a source field in onboarding/contact records is practical. | A spreadsheet/ledger is enough at this stage. | Overbuilding a CRM before volume exists. |
| Reddit small-business attribution thread, `https://www.reddit.com/r/smallbusiness/comments/1oehvyu/how_do_service_businesses_track_which_ads/` | Practitioners warn self-reported source can be imperfect, but small volumes make statistical attribution unrealistic; cohorts and lead value matter. | Use source confidence and lead quality, not source absolutism. | Treating `How did you hear about me?` as perfect truth. |
| Reddit attribution discussion, `https://www.reddit.com/r/aiToolForBusiness/comments/1tfr6fz/how_are_you_actually_tracking_where_customers/` | Recent small-business discussion points to UTMs plus a simple source question because discovery is fragmented. | Human source/proof notes are not a workaround; they are the missing layer. | Click-only attribution. |

## Local Evidence

Cycle 43 inspected the following local artifacts:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `measurement-plan.md`
- `owner-evidence-ledger-template.md`
- `owner-evidence-micro-intake-playbook.md`
- `gbp-week-one-execution-pack.md`
- `gbp-linkedin-proof-sprint.md`
- `channel-fit-and-content-scan.md`
- `content-strategy.md`
- `work-english-proof-pairing-scorecard.md`
- `professional-review-proof-specificity-cycle42.md`
- `pricing-positioning.md`
- `review-proof-library.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/utils/analytics.js`
- `src/App.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/ContactSection.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/Navbar.jsx`
- `src/components/CalendlyBadge.jsx`
- `index.html`
- `talkthetalk/index.html`
- `teacher-assistant` teacher overview and prospect/source search results

Local interpretation:

- The website already tracks enough intent events to support a sprint: contact clicks, form success, Talk actions and some Calendly schedule events.
- `TalkTheTalk.jsx` correctly tags the completion CTA to Calendly with Talk UTMs, but the new-tab flow means `talk_trial_click` is not a booked trial.
- `App.jsx` listens for `calendly.event_scheduled`; this is useful for embedded/popup contexts, not for every external Calendly tab.
- Contact/WhatsApp/email/Calendly paths can create real leads while hiding the reason the buyer trusted Auris.
- The live reviews endpoint still provides strong public proof, but visible review order/count is not the owner truth layer.
- The teaching platform has rich class/student workflows but no dedicated prospect or lead-source CRM. Building one before 5-10 manual rows would be premature.

## Data Checks

| Check | Result | Interpretation |
| --- | --- | --- |
| Homepage GBP UTM | `https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_confidence_review` returned HTTP 200. | Route is campaign-ready. |
| Talk LinkedIn UTM | `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller` returned HTTP 200. | Talk route is campaign-ready. |
| Review endpoint ES | `source=places-new`, rating 5, reviewCount 16, 5 visible reviews. | Public proof remains strong; not owner reply truth. |
| Review endpoint EN | `source=places-new`, rating 5, reviewCount 16, 5 visible reviews. | Public proof remains strong; visible review order can differ. |
| HTML/static checks | Canonicals and descriptions exist; GA4 config is present in both entry points. | Measurement plumbing exists, but not full attribution. |
| GA/GTM script check | Direct `gtag` is used; no `send_page_view:false` yet. | Prior pageview duplication risk remains. |
| Teacher-assistant source search | No prospect/lead-source workflow found. | Keep manual ledger external to app for now. |

## Evidence Levels

Use these levels for channel decisions:

| Level | Name | Evidence | What It Can Decide |
| --- | --- | --- | --- |
| 0 | Route/proof readiness | URL 200, metadata, review endpoint, static code | Destination is safe to use, not performance. |
| 1 | Channel-visible baseline | GBP/LinkedIn/Calendly owner metric before action | Whether an action can be compared later. |
| 2 | Action logged | Exact post/link/reply/referral/Talk placement with UTM | What changed and when. |
| 3 | Site/tool intent | `talk_started`, `talk_completed`, `talk_trial_click`, contact click, form submit, Calendly schedule event where visible | Attention or intent, not lead quality by itself. |
| 4 | Human buyer signal | Anonymized inquiry row with source, proof, price and outcome | Whether to continue, adjust or pause the channel. |
| 5 | Fit/retention signal | Booked/paid fit, trial quality, retained student or referral chain | Which channel creates valuable students. |

Decision rule: do not declare a channel strong from Level 0-3 alone. Level 4 or Level 5 is required for a confident channel recommendation.

## Lead Source Fields

Use one inquiry row per serious WhatsApp, email, form, Calendly, LinkedIn DM, GBP message, referral or marketplace lead.

| Field | Allowed Values / Format | Why |
| --- | --- | --- |
| `date` | `YYYY-MM-DD` | Cohort and sequence. |
| `source_type` | `GBP` / `LinkedIn` / `website` / `Talk` / `referral` / `marketplace` / `Instagram` / `TikTok` / `local_event` / `unknown` | Top-level channel. |
| `source_specific` | `review_post` / `profile` / `direct_search` / `talk_completion` / `contact_form` / `whatsapp_nav` / `private_referral` / `superprof` / `tusclases` / `unknown` | Placement/action. |
| `source_confidence` | `confirmed_utm` / `owner_metric` / `self_reported` / `platform_message` / `inferred` / `unknown` | Prevents false precision. |
| `profile_seen` | `website` / `GBP` / `LinkedIn` / `Superprof` / `Tusclases` / `referral` / `unknown` | Tells which proof/price surface shaped expectations. |
| `first_thing_mentioned` | short anonymized category | Buyer language before Auris explains. |
| `proof_specificity` | `generic_review` / `meeting_confidence` / `method_correction` / `portal_follow_up` / `personal_teacher` / `ireland_bilingual` / `invoice_nif` / `price` / `unknown` | Cycle 42 proof test. |
| `work_moment` | `meeting` / `interview` / `client_call` / `presentation` / `conversation` / `exam` / `unknown` | Work-English moment ladder. |
| `price_anchor_seen` | `40` / `35` / `30` / `20` / `18` / `none` / `unknown` | Premium/pricing pressure. |
| `quoted_price_expected` | `40` / `35` / `30` / `20` / `18` / `unclear` / `not_discussed` | Whether public pricing is coherent. |
| `buyer_type` | `private_adult` / `professional` / `autonomo` / `small_team` / `company` / `parent` / `unknown` | Fit with core positioning. |
| `booked_trial` | `yes` / `no` / `pending` | Stronger than clicks. |
| `lead_quality` | `high` / `medium` / `low` | Strategic fit, not just volume. |
| `human_signal_strength` | `none` / `weak` / `medium` / `strong` | Overall signal score. |
| `next_action` | `reply` / `trial` / `price_explain` / `refer` / `hold` / `none` | Keeps notes actionable. |

Redaction rule: never store names, emails, phone numbers, company names, full messages, full screenshots or private review text. Save anonymous categories only.

## Channel Action Fields

Use one action row per public/private channel action.

| Field | Allowed Values / Format | Why |
| --- | --- | --- |
| `date` | `YYYY-MM-DD` | Sequence. |
| `channel` | `GBP` / `LinkedIn` / `Talk` / `referral` / `review` / `marketplace` / `website` | Channel comparison. |
| `action_type` | `GBP_post` / `review_reply` / `LinkedIn_post` / `profile_edit` / `Talk_link` / `review_ask` / `referral_prompt` / `price_cleanup` | What changed. |
| `asset_or_hook` | e.g. `Meeting Voice`, `review_reply_newest`, `Talk prompt 01` | Connects to content. |
| `url_or_utm` | exact URL if public | Enables QA. |
| `baseline_metric` | owner metric if available | Day 0. |
| `result_metric` | owner metric after same range | Day 7/24h/72h. |
| `proof_theme` | `confidence` / `work_moment` / `method` / `portal` / `personal` / `price` | Connects to Cycle 42. |
| `source_confidence` | `owner_metric` / `confirmed_utm` / `self_reported` / `inferred` / `unknown` | Prevents overclaiming. |
| `notes` | anonymous categories only | Context. |

## Seven-Day Sprint Sheet

Use this for the next measured action.

| Day | Row | Required Data | Optional Data |
| --- | --- | --- | --- |
| 0 | Baseline | Channel, owner metric if available, URL/UTM, proof theme | Screenshot/note from owner dashboard. |
| 1 | Action | Exact asset/hook, placement, CTA, URL/UTM | Rejection/pending/edit status. |
| 3 | Interim | Site events or owner metric if already available | LinkedIn 24h/72h post analytics. |
| 7 | Compare | Same metric/range as Day 0 | Notes on any private replies. |
| Anytime | Inquiry | Full anonymized inquiry row | Trial quality/retention note if later available. |

## Example Rows

### Example 1: GBP Meeting Voice Lead

| Field | Example |
| --- | --- |
| `source_type` | `GBP` |
| `source_specific` | `review_post` |
| `source_confidence` | `self_reported` plus `owner_metric` if GBP message/click exists |
| `first_thing_mentioned` | `saw reviews, freezes in meetings` |
| `proof_specificity` | `meeting_confidence` |
| `work_moment` | `meeting` |
| `price_anchor_seen` | `none` |
| `booked_trial` | `pending` |
| `lead_quality` | `high` |
| `human_signal_strength` | `strong` |

Interpretation: continue GBP proof direction even if click volume is low, because the buyer repeated the exact proof/moment.

### Example 2: LinkedIn Talk Clicks, No Lead

| Field | Example |
| --- | --- |
| `action_type` | `LinkedIn_post` |
| `asset_or_hook` | `Meeting Voice + Talk prompt` |
| `site/tool signal` | `talk_started=5`, `talk_trial_click=0` |
| `human_signal_strength` | `none` |

Interpretation: do not scale. Either the hook created curiosity without buying intent, or the profile/CTA/proof path is weak.

### Example 3: Referral Without UTM

| Field | Example |
| --- | --- |
| `source_type` | `referral` |
| `source_specific` | `private_referral` |
| `source_confidence` | `self_reported` |
| `first_thing_mentioned` | `former student recommended Auris for speaking confidence` |
| `proof_specificity` | `personal_teacher` or `meeting_confidence` |
| `lead_quality` | `high` |

Interpretation: strong human signal, low channel-volume signal. Do not try to force it into GA4.

## Continue / Adjust / Pause Rules

Continue a channel when:

- It creates at least one Level 4 high/medium lead, or
- It produces repeated Level 3 intent plus one plausible source/proof note, or
- It strengthens a high-fit referral/review loop without discomfort.

Adjust a channel when:

- Clicks or Talk starts happen but no lead mentions proof, work moment or price fit.
- Leads mention only `generic_review`, not method or work situation.
- Price or marketplace comparison appears before trust.
- LinkedIn impressions happen without profile visits, link engagement, DMs or owned-site actions.

Pause a channel when:

- It produces low-fit leads: children, certificates, low-price groups, marketplace bargain-seeking, or generic app/free-practice users.
- Two qualified direct leads mention a lower marketplace anchor before booking.
- Owner evidence remains unavailable and another cycle would only create more measurement templates.
- Public actions create no Level 3 or Level 4 signal after one small test.

## What Not To Build Yet

- Do not build a lead CRM in `teacher-assistant` before 5-10 manual rows reveal repeated fields.
- Do not ask for GA4, GBP, LinkedIn or Calendly exports as the first move.
- Do not treat `talk_trial_click` as booked trial.
- Do not send private notes, names or free-text buyer language to GA4.
- Do not publish more GBP/LinkedIn variants to compensate for a blank ledger.
- Do not lower price based on marketplace anchors until real high-fit leads mention those anchors.

## Hypotheses Tested

H015 strengthened: manual lead-source notes are required, but the fields must now distinguish source confidence, proof specificity, price anchor, work moment and human signal strength.

H002 refined: GBP remains the best near-term public channel, but GBP Performance alone is not enough. A GBP click/call/message becomes decision-grade only when paired with source/proof/lead-quality notes.

H005 refined and falsified in part: social/Talk can be measured by link and Talk events, but those are curiosity signals. Without Level 4 buyer notes, LinkedIn/Talk should stay a trust/learning test rather than a scale channel.

H025 refined: Meeting Voice is still the first Work-English test, but its success criterion is not impressions. It needs `proof_specificity`, `work_moment`, `price_anchor_seen`, `booked_trial` and `lead_quality`.

## Next-Cycle Packet

If any owner or inquiry evidence arrives:

1. Open this file, `owner-evidence-ledger-template.md`, `measurement-plan.md`, `hypotheses.md` and `research-log.md`.
2. Fill only the matching row:
   - `action_log`
   - `gbp_day0`
   - `linkedin_post_metric`
   - `talk_event_note`
   - `lead_note`
   - `day7_compare`
3. Update H015 first.
4. If the row is a lead, also update H002/H005/H025 depending on source.

If no owner or inquiry evidence arrives:

1. Do not make a larger ledger.
2. Rotate to either:
   - pricing proof near 40 EUR/h, or
   - public route/indexing cleanup, or
   - student-platform retention proof.
3. Keep Packet AR alive, but only as a ready capture system.

Search/API checks for next evidence:

- Live review endpoints: `/.netlify/functions/google-reviews?language=es` and `/.netlify/functions/google-reviews?language=en`
- Homepage GBP UTM and Talk LinkedIn UTM destination checks.
- Search: `"English tutor Barcelona" "how did you hear about us" "reviews"` only if a fresh market scan is needed.
- Official docs only if Google/Calendly/LinkedIn changes UI or available metrics.
