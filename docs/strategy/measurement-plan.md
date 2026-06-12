# Measurement Plan

Created: 2026-05-21 Cycle 05
Last updated: 2026-05-25 Cycle 61

## Primary Question

Can we measure the direct WhatsApp/email path well enough to decide whether content, GBP, SEO, referrals or Talk the Talk are producing qualified future-demand leads?

Current answer: partially, with production now verified in direct-contact mode.

Cycle 51 supersedes the earlier Calendly-first funnel. Calendly has been intentionally removed from the current local website. The site can now measure `contact_click` and `talk_contact_click`, but it cannot prove that a WhatsApp/email click became a real qualified lead. The truth layer is the private reply plus a tiny owner-side row.

Cycle 52 verifies that this is no longer local-only: production now serves the direct-contact bundle from commit `a304f9c`, with no active Calendly strings found in the live homepage or Talk bundles.

Cycle 53 adds one owner-side caveat: the website can be direct-contact while Google Business Profile still has a separate appointment/booking link. Owner-provided Google Search evidence from 2026-05-24 showed `Appointments: calendly.com`; this needs a `gbp_contact_link_truth` row before interpreting GBP contact behavior.

Cycle 54 added one message-coherence caveat: at the time, the site was direct-contact but some live/source surfaces still mentioned `free first class` / `clase de prueba gratuita`. Cycle 61 source checks now show the current public bundle has no `free first`, `free trial` or `primera clase gratuita` strings; keep the expectation field only to catch residual external/profile/marketplace expectations.

Cycle 55 adds one GBP cleanup caveat: removing or ignoring Calendly in Google Business Profile is profile hygiene, not lead generation. Record the removal state before interpreting future GBP calls, website clicks, bookings or direct inquiries.

Cycle 56 adds one review-reply caveat: a review reply is trust maintenance, not conversion proof. Record reply status only when useful, and judge acquisition only when owner GBP Performance or a real inquiry row exists.

Cycle 57 adds one retention-proof caveat: while Auris is close to full, current-student continuity evidence can be a valid success signal. A portal/SRS/homework action is not proof by itself; the proof row needs next-class evidence such as a remembered word, used phrase, student reaction, or a useful follow-up in class.

Cycle 59 adds an evidence-router caveat: future screenshots, owner notes, lead notes, capacity changes and student observations should be classified before they are measured. Use `evidence-trigger-router-cycle59.md` to decide whether the evidence is a lead row, owner snapshot, review-reply status, profile-link truth, current-student row, capacity change, channel-visible signal, public readiness check or no new evidence.

Cycle 60 adds a no-new-evidence caveat: stable public checks are not measurement progress. If homepage headers, reviews endpoint, sitemap/robots and teaching API health are stable and no owner/student/prospect/capacity/access row exists, the correct measurement state is `no_new_evidence`. Do not reinterpret stable checks as acquisition, retention or pricing proof.

Cycle 61 adds a public Talk calibration caveat: the owner-approved public code path now removes free-first-class language, keeps direct WhatsApp/email contact, and sets public Talk the Talk to a 60-second default. This is a `public_readiness` plus `approval_arrived` signal, not conversion evidence. Measure Talk as low-pressure intent (`talk_started`, `talk_completed`, `talk_contact_click`) until a real reply row proves qualified demand.

## Cycle 51 Direct-Contact Supersession

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-simplification-gate-cycle51.md`

Current production mode: `direct_contact_future_availability`.

Cycle 52 production artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-production-gate-cycle52.md`

Deprecated for the current local site:

- `trial_booked`
- `calendly_badge_click`
- Calendly widget events
- Calendly UTM/source reports
- `booking_type_selected`
- contact form submission events

Current lead-intent signals:

| Signal | Meaning | Do Not Over-Interpret As |
| --- | --- | --- |
| `contact_click` with `contact_method` and `location` | Visitor clicked WhatsApp, email or contact link. | A sent message, booked class or qualified lead. |
| `talk_contact_click` | Talk the Talk user clicked the WhatsApp follow-up CTA. | A trial booking or proof that Talk converted. |
| GBP website click/call/message where owner-visible | Profile visitor took an action. | Buyer trust reason, fit or availability timing. |
| Manual direct-contact row | The real lead truth: source, need, fit, timing, proof, reply and outcome. | Perfect attribution; self-report can still be incomplete. |

Cycle 61 Talk defaults:

| Field | Current Public Value | Measurement Meaning |
| --- | --- | --- |
| `default_duration_seconds` | `60` | Start/completion rates should be compared only after 2026-05-25 against the one-minute default. |
| `talk_contact_click` CTA destination | WhatsApp direct contact | Intent to ask Auris personally; not a lead until a reply arrives. |
| `free_first_class_expectation` | Still keep as an inquiry field | Source copy has been cleaned locally, but external/profile/old-memory surfaces may still create that expectation. |
| Portal Talk default | `90` seconds in `teacher-assistant` | Separate current-student product decision; do not merge with public lead measurement unless Auris asks to align it. |

## Cycle 52 Production Verification

| Check | Result | Measurement Meaning |
| --- | --- | --- |
| Public deploy | `englishwithauris.com` serves `assets/main-c144a168.js`, matching the local direct-contact build. | The measurement mode is live, not hypothetical. |
| Live Calendly scan | No live matches for `Calendly`, `calendly`, `trial_booked`, `Disponibilidad limitada`, or `Limited availability`. | Calendly booking/source data is inactive unless restored later. |
| Live contact scan | Main bundle contains `contact_click`, WhatsApp, email and quiet availability copy. | Website can measure click intent. |
| Live Talk scan | Talk chunk contains `talk_contact_click`, `Message Auris` and WhatsApp. | Talk completion can measure follow-up click intent. |
| Review endpoint | Places New returns `5.0 / 16`. | Public proof intact, but owner reply/newest-review truth still owner-side. |
| Search Console API | Current token returned `403 PERMISSION_DENIED`. | Do not promise query/page/API verification until access is restored. |
| Sitemap | All route `lastmod` values remain `2026-05-21`. | Minor SEO hygiene caveat for a future public-code pass. |

Minimum row for a real inquiry:

| Field | Why It Exists |
| --- | --- |
| `contact_method` | Separates WhatsApp/email/phone/DM. |
| `likely_source` and `source_confidence` | Prevents over-reading last-click data. |
| `first_thing_mentioned` | Reveals whether the buyer noticed reviews, price, location, availability or a tool. |
| `proof_mentioned` | Tests whether reviews/portal/personal method are creating trust. |
| `need_type` | Keeps adult/professional/teen/company demand distinct. |
| `future_timing` | Tests whether the nearly-full posture captures future demand. |
| `first_contact_surface` | Separates `gbp_appointment_link`, `gbp_website`, `gbp_call`, `website_whatsapp`, `website_email`, `referral`, `marketplace`, and `unknown`. |
| `availability_confusion` | Detects whether softer copy makes people think Auris is closed. |
| `free_first_class_expectation` | Separates `asked_for_free_class`, `expected_free_trial`, `not_mentioned`, and `unknown`. |
| `message_copy_seen` | Records whether the person mentions future availability, free first class, reviews, pricing, local page, Talk, or unknown. |
| `price_anchor_seen` and `quoted_price_expected` | Captures marketplace/category price pressure. |
| `lead_quality` and `outcome` | Stops clicks from masquerading as growth. |

## Cycle 54 Public-Message Coherence Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/public-message-coherence-cycle54.md`

Production state:

- Direct contact is live.
- Old immediate-booking strings are absent: `Calendly`, `trial_booked`, `Book now`.
- Free-first-class language remains on FAQ/schema/local landing surfaces.
- Private-class offer schema still uses `InStock`; sitemap dates still show `2026-05-21`.

Interpretation:

- Do not treat free-first-class mentions as bad by default. They are a possible expectation signal.
- If high-fit prospects ask mainly for the free/trial class, reframe the copy before driving more traffic.
- If prospects message calmly about future slots, leave the direct-contact posture stable.
- If no inquiries arrive while Auris is full and no public push is running, do not call the copy a failure.

## Cycle 55 GBP Calendly Removal Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-calendly-removal-handoff-cycle55.md`

Owner-side fields:

| Field | Values |
| --- | --- |
| `appointment_link_visible_before` | yes / no / unknown |
| `appointment_link_domain_before` | calendly.com / englishwithauris.com / other / none / unknown |
| `action_taken` | removed_link / removed_provider / requested_provider_removal / kept_intentionally / not_found |
| `profile_edit_status` | live / pending / not_approved / blocked / unknown |
| `appointment_link_visible_after` | yes / no / unknown |
| `appointment_link_domain_after` | calendly.com / englishwithauris.com / other / none / unknown |
| `ad_promo_visible` | yes / no / ignored |

Interpretation:

- `appointment_link_visible_after=no` means the profile-contact mismatch is resolved, not that GBP is producing leads.
- `pending` or `blocked` means hold profile/content experiments until the contact path is clear or intentionally classified.
- `kept_intentionally` means future GBP bookings should be interpreted as a deliberate booking exception.
- A Google Ads credit box is owner-dashboard noise unless Auris creates a campaign.
- If an inquiry arrives after removal, still use the direct-contact inquiry row. The cleanup row only explains the available surface, not the buyer's trust reason.

## Cycle 56 Review Reply Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/review-reply-trust-maintenance-cycle56.md`

Review replies are public trust signals, but they are not a standalone acquisition metric.

Owner-side fields:

| Field | Values |
| --- | --- |
| `review_theme` | confidence / work_moment / long_term / referral / child_progress / resources / general |
| `reply_status` | live / owner_visible_live / pending / edited / rejected / unknown |
| `publicly_seen` | yes / no / owner_only / unknown |
| `reply_age_bucket` | same_day / under_7d / older |
| `next_action` | none / recheck / edit / ask_owner_snapshot |

Interpretation:

- `reply_status=live` means a maintenance action is complete, not that leads increased.
- `owner_visible_live` should not be overread; it only proves Auris posted the reply in the owner surface.
- If no slot is opening, do not chase weekly metrics after a reply.
- If a slot opens, pair one review-led GBP/LinkedIn action with a Day 0/Day 7 or Day 28 owner snapshot and a lead-source row.
- If a prospect mentions a review/reply, record it under `proof_specificity` and `first_thing_mentioned`.

## Cycle 57 Current-Student Continuity Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/current-student-continuity-proof-cycle57.md`

Use this only for current students and only anonymously.

Continuity rows are not lead rows. They measure whether the existing class-plus-portal system is creating visible value between classes.

Minimum row:

| Field | Why It Exists |
| --- | --- |
| `student_type` | Separates SRS-active students from notes-first, WhatsApp-first, busy adult or lower-portal-use students. |
| `suggested_step` | Shows which action was offered: flashcards, notes phrase, correction sentence, assignment or Talk. |
| `portal_surface` | Tests whether the portal itself mattered or the step was mostly manual/WhatsApp. |
| `sent_channel` | Separates WhatsApp, email, in-class mention and homework log. |
| `did_action` | Separates polite agreement from behavior. |
| `student_reaction` | Detects whether the step felt helpful, like homework, neutral or ignored. |
| `in_class_evidence` | The real proof: used phrase, remembered word, mentioned portal, asked follow-up or no sign. |
| `teacher_effort` | Prevents a useful idea from becoming hidden admin. |
| `decision` | Build Next 15, keep manual, soften copy or pause. |

Interpretation:

- `did_action=yes` plus `in_class_evidence` is stronger than SRS totals alone.
- `helpful` without behavior is permission, not proof.
- `homework` from one student means soften before any dashboard build.
- `keep_manual` is a valid success if WhatsApp/personal prompting beats app UI.
- Do not put names, private replies, phone numbers, homework answers or sensitive student notes in strategy files.

## Cycle 59 Evidence Router Measurement Layer

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`

Measurement priority:

| Priority | Trigger | Measurement Meaning | Primary Row |
| --- | --- | --- | --- |
| 1 | `capacity_changed` | The success metric changes: trust maintenance, soft future availability, measured acquisition or capacity expansion. | Roadmap / strategic ignore list / measurement plan |
| 2 | `first_inquiry_arrived` | Buyer truth: source, proof, need, price/availability friction and outcome. | Owner evidence ledger Inquiry Row |
| 3 | `student_row_arrived` | Retention/proof truth: whether a tiny step helped before the next class. | Next 15 pilot tracker |
| 4 | `owner_snapshot_arrived` | Owner-side profile movement: views, searches and interactions by range. | Owner evidence ledger GBP Performance Row |
| 5 | `gbp_contact_link_truth` | Contact-path coherence between GBP and the website. | Owner evidence ledger GBP Contact Link Truth Row |
| 6 | `review_reply_status` | Trust-maintenance action status. | Owner evidence ledger Action Log |
| 7 | `channel_visible_signal` | Attention or click intent, not lead truth. | Action Log or measurement note |
| 8 | `public_readiness` | Destination/system health only. | Research log / Public Proof Row |
| 9 | `no_new_evidence` | No new decision evidence. | Research log only if a cycle is run |

Privacy rule:

- Do not save private names, emails, phone numbers, company names, full private messages, screenshots with identifiable data, cookies, credentials or private account URLs.
- Save only aggregate numbers, source/status labels and anonymized short phrases.

GA4 event rule:

- Keep `contact_click` and `talk_contact_click` as intent events.
- Do not send `generate_lead` for a raw WhatsApp/email click.
- If a future form/request or deliberate offline lead capture exists, `generate_lead` can be used for that stronger lead event, with no personally identifiable information in event parameters.

Interpretation:

- A click can trigger a follow-up question, but it cannot prove a lead.
- A review reply can prove maintenance, but not acquisition.
- A public endpoint can prove readiness, but not owner performance.
- One or two student rows can reveal whether the next tiny step is worth continuing, but they do not prove market demand.

## Cycle 60 Quiet Cycle Measurement Boundary

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`

When the router returns `no_new_evidence`, measure only whether a state changed.

| Stable Signal | Measurement Meaning | Do Not Interpret As |
| --- | --- | --- |
| Homepage 200 from Netlify | Destination is reachable. | Demand, trust, conversion or SEO improvement. |
| Reviews endpoint still `5.0 / 16` | Public proof remains available. | Newest review truth, reply status or GBP performance. |
| Sitemap/robots unchanged | Crawl plumbing remains stable. | Indexing improvement or buyer intent. |
| Teaching API health 200 | Platform is reachable. | Student retention or portal adoption. |
| No Search Console/GBP owner access change | Owner/API layer remains gated. | Channel failure. |
| No inquiry/current-student/capacity row | Decision evidence has not arrived. | A reason to create another system. |

Interpretation:

- Quiet cycles should check for public/system regressions, not chase proof that cannot exist without owner/student/prospect rows.
- A stable quiet cycle should normally end with `DONT_NOTIFY`.
- Repeated quiet cycles should not update the measurement plan again unless a stable signal becomes misleading or a new evidence type appears.

## Current Measurement Stack

### Installed / Available

- Direct `gtag.js` installed in:
  - `/Users/aurisp/repos/teacher-website/index.html`
  - `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
  - built local landing pages in `dist/`
- Measurement ID: `G-VDW7H0VQBC`
- Google tag / Tag Manager read-only API:
  - Container `englishwithauris.com`
  - Public ID `G-VDW7H0VQBC`
  - Tag IDs: `G-VDW7H0VQBC`, `GT-TXZ4FPK3`
  - Default workspace has 0 tags, 0 triggers, 0 variables.
- Search Console API worked in earlier cycles for performance and URL Inspection, but Cycle 52's current token returned `403 PERMISSION_DENIED` on the sites list. Treat Search Console as currently unavailable until access is restored, and preserve older Search Console baselines as historical evidence only.
- GA4 Admin/Data API is not currently accessible from local tokens. Existing tokens only have Search Console, Tag Manager read-only, or Docs scopes.

GTM access is not the same as GA4 reporting access. I can inspect the Google tag container, but I cannot currently read GA4 events, key events, or reports through the API.

## Current Event Inventory

| Event | Source | Purpose | Current Risk |
| --- | --- | --- | --- |
| `page_view` | `/Users/aurisp/repos/teacher-website/src/App.jsx` | SPA route measurement | Possible duplicate initial pageview because `gtag('config')` sends pageview by default. |
| `contact_click` | Navbar, Talk nav, Contact section | Email/WhatsApp/contact intent | Good lead-intent event; keep `location` and `contact_method` consistent. |
| `talk_opened` | `src/App.jsx` navigation click | Tool entry from site nav | Does not fire when landing directly on `/talkthetalk`. |
| `talk_started` | `src/components/TalkTheTalk.jsx` | User starts a prompt | Strong core activation event. |
| `talk_ready_clicked` | `TalkTheTalk.jsx` | User starts speaking timer | Better than `talk_started` for actual practice intent. |
| `talk_completed` | `TalkTheTalk.jsx` | User finishes manually or timer ends | Strong conversion-step event. |
| `talk_contact_click` | `TalkTheTalk.jsx` | Click to WhatsApp from completion | Good lead-intent event, but not a sent message or qualified lead. |

## Findings

### F001: Initial Pageviews May Be Duplicated

Evidence:

- `index.html` and `talkthetalk/index.html` call `gtag('config', 'G-VDW7H0VQBC', { anonymize_ip: true })`.
- `src/App.jsx` also manually fires `gtag('event', 'page_view', ...)` on route state.
- Google's pageview docs say the config command sends a pageview by default and warn that manual pageviews without disabling default measurement can create duplicates.
- Source: https://developers.google.com/analytics/devguides/collection/ga4/views

Recommendation:

- Use one pageview strategy.
- For this SPA, likely set `send_page_view: false` in every HTML entry point's config and keep manual `page_view` in React route logic.

Confidence: high.

### F002: Historical Calendly Booking Attribution Finding

Cycle 51 status: superseded for the current local site because Calendly has been removed.

Historical evidence:

- `TalkTheTalk.jsx` uses a normal anchor with `target="_blank"` to Calendly and Talk-specific UTMs.
- `trial_booked` only fires when the current page receives `calendly.event_scheduled`.
- Calendly docs say embed events are sent with `window.postMessage()` to the parent page; this supports embedded tracking, not a separate Calendly tab controlled by Calendly.
- Source: https://calendly.com/help/advanced-calendly-embed-for-developers

Current recommendation:

1. Treat `talk_contact_click` as lead intent only.
2. Treat a real WhatsApp/email reply plus direct-contact row as the lead truth.
3. Revisit Calendly only if Auris enters a deliberate scheduling/acquisition mode again.

Confidence: high.

### F003: GA4 Lead Event Naming Could Be More Useful

Evidence:

- Historical code sent custom events like `trial_booked` and `contact_form_submit_success`; the current direct-contact path sends click-intent events.
- Google recommends `generate_lead` for lead generation.
- Google developer docs say if an event with `value` is marked as a key event, `currency` should be set.
- Sources:
  - https://support.google.com/analytics/answer/9267735
  - https://developers.google.com/analytics/devguides/collection/ga4/reference/events

Recommendation:

- Keep existing custom events for human readability.
- Do not send `generate_lead` on a raw WhatsApp/email click.
- If a future form/request capture or deliberate offline lead logging flow is added, use `generate_lead` for that stronger lead event.
- Add `currency: 'EUR'` whenever `value` is sent.

Confidence: medium-high.

### F004: Consent Mode Limits Test Visibility

Evidence:

- Consent defaults to denied in HTML and is updated to granted only after banner acceptance.
- Google consent-mode docs say tags adapt based on consent and denied mode uses cookieless pings.
- Google's DebugView docs say events may not be visible if consent mode is implemented and users have not granted Analytics cookies.
- Sources:
  - https://support.google.com/analytics/answer/10000067
  - https://support.google.com/analytics/answer/7201382

Recommendation:

- For debug tests, explicitly accept the banner or set `localStorage.ewa_consent = 'granted'` in the test browser before testing.
- Use `debug_mode: true` only during local/manual QA.

Confidence: high.

### F005: UTM Discipline Is Good For Talk, Weaker Elsewhere

Evidence:

- Talk completion CTA has source/medium/campaign.
- Local SEO page has a Talk link with UTMs in `SeoLandingPage.jsx`.
- Main Calendly badge and ContactSection Calendly URLs do not include explicit campaign values.
- Google says UTM parameters are visible in traffic acquisition reports and recommends `utm_source`, `utm_medium`, and `utm_campaign`; missing UTM parameters can create `(not set)` values.
- Sources:
  - https://support.google.com/analytics/answer/10917952
  - https://support.google.com/analytics/answer/11242870

Recommendation:

- Use a small UTM registry for intentional external campaigns.
- Do not add UTMs to every internal link. For internal links, prefer event parameters like `location`.
- Add UTMs for GBP, Instagram, TikTok, LinkedIn, marketplace profile links, or broadcast links.

Confidence: medium-high.

## Recommended Funnel Model

| Funnel Step | Event | Success Meaning | Key Parameters |
| --- | --- | --- | --- |
| Landing | `page_view` | User saw `/talkthetalk` | `page_path`, `page_location`, `page_title` |
| Tool activation | `talk_started` | User chose to try a prompt | `theme`, `difficulty`, `duration_seconds`, source UTM |
| Actual speaking | `talk_ready_clicked` | User started the timer | same as above |
| Completion | `talk_completed` | User completed or manually finished | `completion_type`, `practiced_seconds` |
| Lead intent | `talk_contact_click` | User clicked to message after completing | `practiced_seconds`, `lead_source: talkthetalk`, `contact_method` |
| Contact intent | `contact_click` | User clicked WhatsApp/email/call elsewhere | `contact_method`, `location` |
| Lead generated | Manual direct-contact row | A real reply arrived and was qualified or followed up | `source_confidence`, `proof_mentioned`, `future_timing`, `lead_quality`, `outcome` |

In direct-contact mode, judge Talk and site CTAs by real replies and lead quality, not by booking counts.

## P0 Implementation Checklist

Do not implement without Auris asking, but this is ready when he does.

1. Pageview cleanup:
   - Add `send_page_view: false` to all `gtag('config')` snippets.
   - Keep the manual SPA `page_view`.
   - Ensure `page_path` and `page_location` include `/talkthetalk` correctly.

2. Direct-contact event consistency:
   - Keep `contact_method` values stable: `whatsapp`, `email`, `phone`, `linkedin_dm`, `gbp_message`, `other`.
   - Keep `location` values stable: `navbar`, `mobile_nav`, `contact_section`, `talk_nav`, `talk_completion`, `seo_landing`, `pricing`.

3. Lead event hardening:
   - Do not mark raw outbound clicks as `generate_lead`.
   - If a future form/request capture is added, send both the readable event and GA4 `generate_lead`.
   - Include `currency: 'EUR'` only if a `value` is included.

4. Talk completion attribution:
   - Treat `talk_contact_click` as the measurable intent endpoint.
   - Treat the private WhatsApp/email reply as the lead endpoint.
   - Add a prefilled message where helpful, but do not send private message text to GA4.

5. GA4 access:
   - Add Analytics read-only/API access if future automations should verify event counts directly.
   - Needed: GA4 Admin/Data read access, not only Tag Manager.

## 4-Week Measurement Test

Run one Talk prompt post per week from GBP, Instagram/TikTok, and LinkedIn.

Each external link gets:

- `utm_source`: `google_business_profile`, `instagram`, `tiktok`, or `linkedin`
- `utm_medium`: `organic`
- `utm_campaign`: `talk_prompt_week_01`, etc.
- `utm_content`: prompt category, e.g. `meeting_problem`, `interview_story`, `confidence_freeze`

Keep and improve the loop if:

- 20%+ of landing visitors start a prompt.
- 30%+ of starters complete or manually finish.
- 3-5%+ of completers click the direct-contact CTA.
- At least one real WhatsApp/email inquiry mentions the prompt/tool.

Stop or downgrade the loop if:

- People click posts but do not start prompts.
- Starters do not complete.
- Completers do not click the direct-contact CTA after 4 weeks.
- The tool distracts from higher-performing GBP/review/contact routes.

## What Not To Do Yet

- Do not treat Talk the Talk as proven acquisition until `talk_contact_click` plus real direct replies validate it.
- Do not add email gating yet.
- Do not add audio recording/storage yet.
- Do not rebuild the stack around GTM unless there is a clear need; direct `gtag.js` is enough for the current scale.
- Do not mark every micro-event as a key event.
- Do not restore Calendly just for attribution while Auris is close to full and intentionally using direct contact.
- Do not fire `generate_lead` on a WhatsApp/email click alone; reserve it for an actual form/request capture or a deliberately logged offline/direct lead.
- Do not restore Calendly only because it was easier to measure. Restore it only if Auris changes from `direct_contact_future_availability` into a deliberate scheduling/acquisition mode.
- Do not assume Calendly is gone from Google Business Profile just because it is gone from the website; GBP appointment/action links are owner-side profile surfaces.

## Cycle 49 Availability-Copy Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/availability-copy-deploy-gate-cycle49.md`

The local site now has an owner-requested candidate direction in code: direct WhatsApp/email contact plus the pricing line `I’m usually close to full, but you can message me about future availability.`

This should not be judged by lead volume alone.

Cycle 51 supersession: Calendly/form-specific fields below are historical context unless those tools are restored. The active current path is direct contact plus manual reply rows.

If the patch is deployed, record one deploy row:

| Field | Values / Notes |
| --- | --- |
| `deploy_date` | Date/time the live site changed. |
| `capacity_state` | `full`, `limited`, `opening_soon`, `actively_filling`. |
| `cta_state` | `availability`, `booking`, `waitlist`, `mixed`. |
| `pricing_note_live` | yes / no. |
| `gbp_views` | Owner GBP Performance range if available. |
| `gbp_searches` | Owner GBP Performance range if available. |
| `gbp_website_clicks` | Owner GBP Performance range if available. |
| `direct_contact_clicks` | Site event count split by method/location if GA4 access exists. |
| `talk_contact_clicks` | Talk completion direct-contact click count if GA4 access exists. |
| `direct_messages` | Manual count only; no private text in strategy docs. |
| `future_demand_notes` | Count and one anonymized row if any. |

Use these existing site events as support signals:

| Event | Meaning | Interpretation Limit |
| --- | --- | --- |
| `contact_click` | Email/WhatsApp/contact intent. | Private messages still need manual source/fit notes. |
| `talk_contact_click` | Talk user clicked to message Auris. | Intent only; may not become a sent message. |

For the first inquiry after deploy, add:

| Field | Values |
| --- | --- |
| `availability_copy_seen` | yes / no / unknown |
| `capacity_state_at_inquiry` | full / limited / opening_soon / actively_filling |
| `future_timing` | now / 1-2 months / flexible / unknown |
| `availability_confusion` | none / thought closed / thought instant booking / asked for clarification |
| `proof_mentioned` | reviews / portal / personal teacher / Ireland-bilingual / price / unknown |
| `lead_quality` | high / medium / low |

Decision threshold:

- Keep the softer copy if it reduces urgency/wrong-fit pressure and high-fit future inquiries still understand they can message Auris.
- Tighten the copy if high-fit people ask whether Auris is closed.
- Switch back to a clearer booking CTA if Auris enters `actively_filling` mode.
- Do not build a waitlist form or Calendly Routing until several future-demand notes prove that capacity leakage exists.

## Cycle 50 Availability Plus Premium Proof Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/premium-proof-pairing-gate-cycle50.md`

If the local availability patch is deployed with the premium proof stack, the measurement row should not split those changes apart. Treat it as one `availability_plus_proof` state.

Add these fields to the deploy row:

| Field | Values / Notes |
| --- | --- |
| `proof_state` | `generic`, `premium_follow_up`, `mixed`, `unknown`. |
| `private_card_description_live` | exact visible description after deploy. |
| `offer_schema_description_live` | exact JSON-LD private offer description after deploy. |
| `included_support_sentence_live` | yes / no. |

For the first 5-10 qualified inquiries after any availability/proof change, capture:

| Field | Values | Why |
| --- | --- | --- |
| `proof_mentioned` | reviews / portal_follow_up / correction / spanish_speaker_patterns / ireland_background / invoice_nif / price / none / unknown | Shows whether the value mechanism was noticed. |
| `price_anchor_seen` | website_40 / superprof_40 / marketplace_30 / category_18 / competitor / none / unknown | Separates owned premium from marketplace comparison. |
| `quoted_price_expected` | 40 / 35 / 30 / 18 / unclear / not_discussed | Reveals hidden price mismatch before the trial. |
| `availability_confusion` | none / thought_closed / thought_instant_booking / asked_clarification / unknown | Tests whether the softer CTA is too soft. |
| `future_timing` | now / 1-3_months / flexible / unknown | Tells whether the lead can wait. |
| `lead_quality` | high / medium / low / unknown | Prevents optimizing for low-fit volume. |
| `booked_trial` | yes / no / later / not_offered | Connects trust to action without needing a dashboard. |

Interpretation:

- If leads mention `portal_follow_up`, `correction`, `spanish_speaker_patterns` or reviews and accept 40 EUR/h, keep price and proof steady.
- If leads mention lower marketplace/category anchors twice before booking, return to marketplace price policy before more public traffic.
- If leads think Auris is closed, keep the availability truth but make the contact path clearer.
- If no leads arrive while Auris remains full and no public push is running, do not call the copy a failure.

## Cycle 39 Portal Talk Reflection Measurement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/ai-speaking-human-feedback-cycle39.md`

Cycle 39 adds a product-measurement rule: do not add AI scoring or audio storage before the no-audio reflection loop proves useful.

If portal Talk Reflection V0 is built, track only small student-action events first:

| Event | Surface | Meaning | Suggested Parameters |
| --- | --- | --- | --- |
| `portal_talk_completed` | Portal Talk completion | Student finished or manually ended a speaking prompt. | `theme`, `difficulty`, `duration_seconds`, `completed_seconds`, `completion_type` |
| `portal_talk_reflection_saved` | Portal Talk reflection | Student selected a self-rating/block. | `reflection_choice`, `wants_class_practice`, `theme`, `difficulty` |
| `portal_talk_reflection_skipped` | Portal Talk reflection | Student completed practice but skipped reflection. | `theme`, `difficulty`, `completed_seconds` |
| `teacher_talk_signal_viewed` | Teacher overview later | Auris saw a between-class speaking signal. | `class_id`, `has_wants_class_practice` |

Do not track in V0:

- audio recordings
- transcripts
- AI pronunciation scores
- full prompt notes in analytics events
- student names or private content in analytics parameters

Decision threshold:

- If students complete Talk but reflection save rate stays under 15%, keep Talk as practice only.
- If reflection save rate reaches 50%+ and Auris uses at least one reflection in class, add the teacher prep line before considering any richer feedback features.

## Cycle 25 Work-English Proof Attribution

The first proof-paired Work-English test has more than one possible trust trigger. Do not judge it by clicks alone.

Add this manual field for any inquiry connected to the `Meeting Voice` message:

| Field | Values | Why |
| --- | --- | --- |
| `proof_mentioned` | `reviews`, `portal`, `spanish_speaker_patterns`, `ireland_background`, `invoice_nif`, `price`, `unknown` | Identifies which proof made the message credible enough to contact Auris. |

Use with the existing Work-English fields:

- `role_context`
- `work_moment`
- `pain_language`
- `price_anchor_seen`
- `booked_trial`
- `lead_quality`

Decision rule:

- If inquiries mention reviews/confidence or portal/follow-up, strengthen the proof-paired content direction.
- If they mention only price or marketplace comparisons, strengthen premium proof before posting more Work-English content.
- If they mention only exams/certificates, keep Work-English as occasional content and route offer work back toward exam/support positioning.

## Platform Retention Baseline

Added: 2026-05-22 Cycle 14.

The public-site measurement plan is not enough for the student portal. Cycle 14 collected a safe aggregate product baseline:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Modular Started | Modular Submitted | Standard Submitted | Writing Submitted |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 31 | 59 | 330 | 5 | 4 | 0 | 0 |
| 14 days | 39 | 98 | 860 | 15 | 10 | 1 | 0 |
| 30 days | 42 | 161 | 1524 | 27 | 15 | 2 | 0 |

Cycle 15 scheduled-class refinement:

| Metric | Value |
| --- | ---: |
| Scheduled non-guest classes | 22 |
| Scheduled-class students | 50 |
| Scheduled-class active students, 7 days | 28 |
| Scheduled-class SRS sessions, 7 days | 53 |
| Scheduled-class SRS cards reviewed, 7 days | 324 |
| Scheduled-class completed SRS sessions, 7 days | 48 |
| Active homework-log messages, 30 days | 2 |

Cycle 34 refreshed baseline:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Modular Started | Modular Submitted | Standard Submitted | Writing Submitted |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 27 | 42 | 288 | 5 | 4 | 0 | 0 |
| 14 days | 39 | 91 | 711 | 13 | 9 | 1 | 0 |
| 30 days | 42 | 163 | 1555 | 25 | 14 | 2 | 0 |

Cycle 34 scheduled-class refresh:

| Metric | Value |
| --- | ---: |
| Scheduled-class active students, 7 days | 24 |
| Scheduled-class SRS sessions, 7 days | 37 |
| Scheduled-class SRS cards reviewed, 7 days | 282 |
| Scheduled-class completed SRS sessions, 7 days | 32 |
| Active homework-log messages, 30 days | 2 |
| `student_next_action_events` table | missing |

Use the scheduled-class filter for internal measurement. Do not make public retention claims until Auris identifies which classes/students are current paid students.

Measurement implication:

- The first Next 15 card should be judged primarily by SRS sessions/cards reviewed and modular completion.
- Feedback is strategically important but cannot be judged from current data until feedback-view events exist.
- Talk the Talk cannot be a retention metric until portal completion/reflection is logged.
- Existing homework-log messages can track the manual pilot without adding a new database table.

Minimal future event:

`student_next_action_events`

- `student_id`
- `class_id`
- `recommendation_type`
- `source_id`
- `shown_at`
- `clicked_at`
- `dismissed_at`
- `context_json`

Do not add `completed_at` until completion is derived reliably from the relevant feature table.

## Referral And Review Manual Measurement

Added: 2026-05-22 Cycle 21.
Updated: 2026-05-23 Cycle 38.

Review and referral asks cannot be fully measured through GA4 or Search Console because the important action often happens in WhatsApp, email, class conversation, Google review UI, or a private intro.

Use a private manual ledger with anonymous strategy notes.

Minimum fields:

- `date`
- `ask_type`: review / referral / thank-you
- `student_segment`: professional / local / confidence / portal / long-term / former
- `trigger_outcome`: confidence / work situation / portal continuity / exam / general progress
- `channel`: WhatsApp / email / after-class / LinkedIn DM / other
- `sent`: yes / no
- `response`: none / positive reply / review left / intro made / awkward / complaint
- `result`: review / referral lead / booked trial / no action
- `lead_quality`: high / medium / low
- `price_anchor_seen`: 40 / 35 / 30 / none / unknown
- `booked_trial`: yes / no / pending

Cycle 38 warm-proof sprint additions:

- `felt_natural`: yes / no / unsure
- `sent_status`: held / sent / replied / review_left / intro_made / awkward / complaint
- `proof_mentioned`: reviews / confidence / work_situation / spanish_speaker_patterns / portal_follow_up / personal_teacher / unknown
- `referral_context`: current_student / former_student / parent / colleague / friend / unknown
- `source_specific`: private label only; do not store names in strategy docs
- `quoted_price_expected`: 40 / 30 / other / unknown

Decision metric:

- Do not judge by number of asks alone.
- Continue if one honest review, one warm intro, one booked trial, or two useful proof-language replies appear within the first two weeks.
- Pause if the ask feels awkward, students do not reply, or review requests seem to create filtered/removed reviews.

Cycle 38 interpretation rule:

- If a warm referral books a trial, classify it as higher evidence than public channel readiness.
- If a referral lead mentions marketplace prices before fit/proof, update `price_anchor_seen` and return to pricing proof before expanding asks.
- If the first ask feels unnatural, hold the second ask. The sprint is designed to protect trust, not maximize ask count.

Keep this separate from product homework metrics. Do not use the homework log for acquisition requests unless the message is genuinely part of class follow-up.

## Local Professional Referral Measurement

Added: 2026-05-22 Cycle 22.

Local/professional community evidence is mostly offline or semi-private, so it must be measured with manual source notes before it is treated as a real channel.

Add these fields for any lead that may come from a partnership, event, coworking space, professional community, business association or warm professional intro:

- `source_type`: student referral / coworking / business association / event / LinkedIn / GBP / marketplace / unknown
- `source_specific`: private label only, e.g. `former_student`, `local_event`, `coworking_intro`
- `relationship_strength`: warm intro / met in person / cold / unknown
- `need_context`: meeting / interview / client calls / presentation / relocation / conversation / exam / team
- `buyer_type`: private adult / autonomo / small team / company / parent / unknown
- `price_anchor_seen`: 40 / 35 / 30 / none / unknown
- `fit`: high / medium / low
- `next_action`: trial / call / follow-up / not fit

Decision metric:

- Do not judge a community by attendance, event size or positive conversation alone.
- Continue only if the source creates a warm intro, a specific work-English need, a trial conversation, or repeated language that improves content/offer copy.
- Pause if leads expect free practice, low marketplace pricing, institutional procurement, or generic language exchange.

## Work-English Confidence Measurement

Added: 2026-05-22 Cycle 23.

The Work-English Confidence Loop is only a test until owner-side evidence shows that professionals both feel the pain and are willing to book with Auris at the premium private-class anchor.

Add these fields for any LinkedIn, GBP, referral or website inquiry that mentions professional English:

- `role_context`: sales / account management / customer success / customer service / hospitality / tech / admin / autonomo / job seeker / other
- `work_moment`: meeting / interview / client call / presentation / proposal / customer incident / email / international team / promotion / other
- `pain_language`: exact short phrase, anonymized
- `current_level`: beginner / pre-intermediate / intermediate / upper-intermediate / advanced / unknown
- `buyer_type`: private adult / autonomo / small team / company / unknown
- `source_type`: LinkedIn / GBP / referral / website / marketplace / other
- `price_anchor_seen`: 40 / 35 / 30 / none / unknown
- `invoice_needed`: yes / no / unknown
- `booked_trial`: yes / no / pending
- `lead_quality`: high / medium / low

Decision metric:

- Continue if one post/referral angle produces a qualified professional inquiry, a booked trial, or repeated high-fit pain language.
- Strengthen if two professional inquiries accept the 40 EUR/h anchor or explicitly value personal correction/follow-up over a course.
- Pause standalone-offer work if inquiries mainly seek certificates, free/public courses, low marketplace prices or generic company training.

## Review Proof Sprint Measurement

Added: 2026-05-22 Cycle 27.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-sprint-measurement-plan.md`

The review proof sprint should be judged with owner-side GBP metrics plus manual notes. Search Console, GA4 and site events cannot see review replies, Google review asks, WhatsApp replies or private referrals.

Day 0 owner-side baseline:

- Business Profile views.
- Searches.
- Website clicks.
- Calls.
- Messages.
- Bookings if shown.
- Top search terms if shown.
- Current review count and rating.
- Whether existing review replies are visible.

Day 7 comparison:

- Same GBP metrics.
- New review count/rating.
- Whether replies were approved, edited or delayed.
- Any messages, WhatsApps, emails or direct inquiries.
- Any review/referral ask response.

Manual inquiry fields:

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

Decision metric:

- Continue if one new honest review, warm intro, qualified inquiry mentioning proof, or owner-side GBP action increase appears.
- Adjust if people click/view but do not contact, or if review replies feel generic.
- Pause if review asks feel awkward, reviews are filtered/removed, or leads mainly mention low prices/certificates/groups.

## Owner-Side Proof Capture Packet

Added: 2026-05-22 Cycle 28.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-proof-capture-packet.md`

The current measurement bottleneck is not knowing which metrics exist. It is making the owner-side capture light enough that Auris can actually collect it before and after the sprint.

Minimum viable packet:

- Day 0 GBP Performance screenshot or note.
- Exact action log: review replies, one GBP post, review/referral asks.
- Manual lead notes for every inquiry during the sprint.
- Day 7 GBP Performance screenshot or note using the same range.
- Any new review/referral result, anonymized.

Owner-side GBP fields:

| Field | Required? | Why |
| --- | --- | --- |
| `date` | yes | Needed for before/after comparison. |
| `range` | yes | 7d vs 28d changes interpretation. |
| `views` | yes if shown | Profile attention. |
| `searches` | yes if shown | Discovery demand. |
| `website_clicks` | yes if shown | Owned-site movement. |
| `calls` | yes if shown | High-intent action. |
| `messages` | yes if shown | High-intent action. |
| `bookings` | yes if shown | Only meaningful if configured through a booking provider. |
| `top_search_terms` | optional | Useful for local/query fit. |
| `rating_review_count` | yes | Review proof baseline. |
| `reply_status` | yes | Shows whether replies became public. |

Data quality levels:

| Level | Evidence | Can Decide? |
| --- | --- | --- |
| Thin | One screenshot and no lead notes. | No, only baseline. |
| Usable | Day 0/Day 7 GBP metrics plus action log. | Yes for profile movement. |
| Strong | Day 0/Day 7 metrics, action log, lead notes and Calendly/WhatsApp/LinkedIn source notes. | Yes for next channel priority. |

Interpretation rule:

- If there is no Day 0 baseline, do not call the sprint a success or failure.
- If GBP movement exists but no qualified inquiries appear, inspect proof/CTA/contact path before adding more posts.
- If one qualified inquiry mentions reviews, confidence, Spanish-speaker correction or follow-up, strengthen the review-led proof direction.
- If price anchors dominate, strengthen premium proof beside price and avoid routing warm leads to marketplace pages.

## Owner-Side Five-Minute Capture Prompt

Added: 2026-05-23 Cycle 29.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`

Use the five-minute prompt before asking for the full packet. The full packet is still the measurement standard, but the first practical blocker is friction: Auris needs to send enough to create Day 0 without feeling like he has to run a reporting department.

Minimum ask:

| Item | Required? | Use |
| --- | --- | --- |
| GBP owner-view rating and review count | yes | Confirms whether proof copy should use 15 or 16 reviews. |
| One GBP Performance screenshot or note | yes | Creates Day 0. |
| Any inquiry in the last 7 days | yes if present | Identifies source/proof/price language. |
| LinkedIn profile/post metrics | only if used | Interprets LinkedIn as credibility or acquisition. |
| Calendly source/UTM | only if booked | Connects booking to campaign/source. |

Cycle 29 data note:

- On 2026-05-23, the live Spanish and English review endpoints both returned 5.0 / 16, while earlier cycles recorded 5.0 / 15.
- Use owner-side GBP as the final review-count truth before any public copy update.
- If no owner-side confirmation arrives, avoid count-heavy copy and use theme-heavy proof: `students mention confidence, practical conversation and follow-up`.

## Proof Sprint Action Gates

Added: 2026-05-23 Cycle 30.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/proof-sprint-action-gates.md`

Use this gate when deciding whether to act, wait or interpret:

| Level | Evidence | Allowed Decision |
| --- | --- | --- |
| 0 | Public endpoint and route checks only | Public destinations are ready; channel performance unknown. |
| 1 | Owner-view review count/rating | Proof count can be confirmed; channel performance unknown. |
| 2 | Owner-view count plus Day 0 GBP Performance | One measured GBP action can start. |
| 3 | Day 0, action log, Day 7 same-range metrics | GBP movement can be interpreted. |
| 4 | Day 0/Day 7 plus anonymous lead notes | Channel priority can change. |

Cycle 30 data note:

- Live public data is stable enough to prepare: both review endpoints returned 5.0 / 16 and the campaign destinations are live.
- Live public data is not enough to interpret: profile views, searches, calls, messages, bookings, reply visibility, LinkedIn metrics and lead language are still owner-side/private.
- If the only new data is public, keep asking for Level 1 or Level 2 instead of creating more copy variants.

## LinkedIn Profile UTM Registry

Added: 2026-05-22 Cycle 20.

Use placement-specific links so LinkedIn Contact info, Featured, About and organic posts do not collapse into one vague source.

| Placement | URL | Primary Metric | Manual Note |
| --- | --- | --- | --- |
| LinkedIn Contact info | `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_contact_info&utm_content=website_link` | Website sessions, contact clicks | `linkedin_contact_info` |
| LinkedIn Featured Talk | `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_featured&utm_content=talk_the_talk` | `talk_started`, `talk_completed`, `talk_contact_click` | `linkedin_featured` |
| LinkedIn About CTA | `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_about_cta&utm_content=profile_about` | Website sessions, contact clicks | `linkedin_about` |
| LinkedIn Post 1 | `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller` | post link clicks, Talk events | `linkedin_post_01` |
| LinkedIn custom button, optional | `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_custom_button&utm_content=book_or_website` | website sessions, bookings/contact | `linkedin_custom_button` |

Interpretation:

- Contact info clicks are trust/navigation signals.
- Featured Talk clicks are practice-intent signals.
- Organic post clicks are content-message signals.
- Custom-button clicks are high-intent profile signals, but only if Auris already has access to the Premium/select feature.

Do not add UTMs to internal links. Do not use one generic LinkedIn URL for every placement.

## LinkedIn Pre-Post Handoff Layer

Added: 2026-05-23 Cycle 33.

Artifact:

`/Users/aurisp/repos/teacher-website/docs/strategy/linkedin-profile-post-cleanup-handoff.md`

Use this layer before interpreting any LinkedIn post. A live destination URL proves only that the route is ready; it does not prove the profile is credible or that the post worked.

| Row | Required Before | Fields |
| --- | --- | --- |
| Profile cleanup status | LinkedIn Post 1 | About EN, About ES, Open to Work visibility, primary intro role, Contact info link, Featured link |
| Baseline metrics | LinkedIn Post 1 | profile views 7d, search appearances 7d, post impressions 7d, followers, connections |
| Post result 24h/72h/7d | Interpreting Post 1 | impressions, reactions, comments, link clicks, profile views, DMs, Talk starts/completions, trial clicks |
| Inquiry note | Any LinkedIn DM, WhatsApp, email or booking | first thing mentioned, proof mentioned, work moment, price anchor, booked trial, lead quality |

Interpretation rule:

- If profile cleanup is incomplete, do not publish Post 1 as an acquisition test.
- If profile cleanup is complete but baseline is missing, the post may be used as a casual credibility action, but not as a measured sprint.
- If the post creates profile views but no link clicks, Talk events, DMs or lead notes after two posts, keep LinkedIn credibility-only.
- If a LinkedIn-origin lead appears, fill an Inquiry row immediately; lead language outranks impressions.

## Open Questions

- Can Auris grant GA4 read-only/API access so automations can verify event counts?
- Does Calendly preserve or expose UTM parameters from the Talk CTA in booking records?
- Would an in-page Calendly flow from Talk completion hurt or help conversion compared with a new tab?
- Should `talk_ready_clicked` become the real activation metric instead of `talk_started`?
- Can current students' portal Talk completions be measured separately from public marketing usage?
- Can portal metrics be filtered to current paid students/classes, not all historical accounts?

## Owner Evidence Ledger Layer

Added: 2026-05-23 Cycle 31.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`

The measurement system now has two jobs:

1. Public/site analytics show readiness and some intent.
2. Owner evidence rows show review truth, profile movement, action status and lead language.

Use these rows before interpreting the proof sprint:

| Row | Required When | Fields |
| --- | --- | --- |
| Public proof | Every public-only check | date, source, public rating/reviews, visible reviews, URL/UTM, title/canonical status |
| Review truth | Owner checks GBP reviews | owner rating/reviews, public count ES/EN, newest review theme, reply status, count decision |
| GBP Performance | Before and after any GBP action | date, range, views, searches, website clicks, calls, messages, bookings, top search terms |
| Action log | Any reply/post/ask/edit happens | action type, channel, hook, URL/UTM, live/pending/rejected/sent status, proof theme |
| Inquiry | Any WhatsApp/email/Calendly/DM/referral appears | source, first thing mentioned, proof mentioned, work moment, price anchor, buyer type, booked trial, lead quality |
| Decision output | Before changing channel priority | evidence level, continue/adjust/pause, strongest next action, stop condition |

Interpretation rule:

- Level 0 public proof can only confirm public readiness.
- Level 1 review truth can settle 15 vs 16 and reply status.
- Level 2 Day 0 can start one measured action.
- Level 3 can interpret profile movement.
- Level 4 can change channel priority because it includes lead proof.

This avoids treating UTM route readiness, public review count or website event tracking as a substitute for owner-side GBP/LinkedIn/Calendly and private lead evidence.

## Owner Evidence Micro-Intake Layer

Added: 2026-05-23 Cycle 32.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-micro-intake-playbook.md`

The ledger is correct, but a blank ledger is not measurement. Use the micro-intake layer when no owner-side row exists yet.

Ask for one row at a time:

| Ask | Measurement Level | Resulting Row |
| --- | --- | --- |
| Owner-view rating/review count and newest-review reply status | Level 1 | Review Truth |
| One GBP Performance screenshot/note | Level 2 | GBP Performance Day 0 |
| One action status | Level 3 support | Action Log |
| One anonymized inquiry/source/proof note | Level 4 | Inquiry |
| Same-range Performance after one action | Level 3 | GBP Performance Day 7 |

Interpretation rule:

- The first owner-side response is more valuable than a complete but unanswered packet.
- If a real inquiry appears, classify it immediately and let it outrank the planned sequence.
- If no one-row response arrives after two cycles, stop reducing the request. The measurement issue has become an owner-action dependency, not a wording problem.

## Review Count 16 Reply Gate

Added: 2026-05-23 Cycle 35.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/review-count-16-reply-gate.md`

Cycle 35 live public check:

| Endpoint | Rating | Review Count | Visible Reviews | Source |
| --- | ---: | ---: | ---: | --- |
| `/.netlify/functions/google-reviews?language=es` | 5.0 | 16 | 5 | `places-new` |
| `/.netlify/functions/google-reviews?language=en` | 5.0 | 16 | 5 | `places-new` |

Measurement decision:

- Treat this as Level 0 public proof unless owner-view count and reply status arrive.
- The English visible set includes one review from May 22, 2026, so reply status is the practical first check.
- If the owner dashboard confirms 16, update the private baseline to `5.0 / 16`.
- If the newest review is unreplied, the first Action Log row should be `review_reply`, not another GBP post.
- If owner count differs from public count, keep static proof count-neutral and record count drift.
- Do not use self-serving LocalBusiness review schema as a measurement or SEO shortcut.

Smallest next owner ask:

```text
Quick one: Google is publicly showing 5.0 / 16 reviews. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

## Cycle 36 Search Console Access Note

Added: 2026-05-23 Cycle 36.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/search-indexing-refresh-cycle36.md`

The current local `gcloud` token no longer works for Search Console refreshes:

| Check | Result | Measurement Impact |
| --- | --- | --- |
| Search Console sites endpoint | Returned an empty `siteEntry` list. | Cannot refresh page/query rows from this token. |
| Scoped `webmasters.readonly` token request | Rejected because the scope is not locally authorized. | Need restored GSC credential or owner-side manual export. |
| Live route/metadata/review checks | Still work. | Good for readiness, not search performance. |

Process rule:

- Do not overwrite the last trusted Search Console baseline with an empty-site response from a token that lacks GSC scope.
- Record the access failure separately as `gsc_access_unavailable`.
- Use Cycle 16 as the last trusted API-backed GSC baseline until access is restored.
- If Auris can provide a screenshot/export, log it as `source=owner_gsc_manual` with date range, pages, queries, clicks, impressions and average position.

## Cycle 37 Price-Anchor Coherence Layer

Added: 2026-05-23 Cycle 37.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-profile-coherence-cycle37.md`

The proof sprint must separate "someone contacted Auris" from "the price anchor they expected."

Add these fields to every inquiry note during GBP/LinkedIn/referral/marketplace tests:

| Field | Allowed Values / Format | Why |
| --- | --- | --- |
| `profile_seen` | website / GBP / LinkedIn / Superprof / Tusclases / referral / unknown | Shows which public surface shaped trust before contact. |
| `price_anchor_seen` | 40 / 35 / 30 / 18 / none / unknown | Captures whether the lead saw owned-site premium, marketplace/channel price, category average, or no price. |
| `quoted_price_expected` | 40 / 35 / 30 / 18 / unclear / not_discussed | Reveals hidden mismatch before the trial. |
| `proof_mentioned` | reviews / confidence / spanish_speaker_patterns / portal_follow_up / ireland_background / invoice_nif / price / unknown | Shows which proof made 40 EUR/h credible or which objection dominated. |
| `lead_quality` | high / medium / low / unknown | Prevents low-price inquiries from being mistaken for good demand. |

Interpretation rule:

- If direct GBP/LinkedIn leads mention 30 EUR marketplace pricing before booking twice, fix marketplace pricing/copy before publishing more campaign content.
- If marketplace-origin leads accept 40 EUR/h or become good students without friction, keep marketplace cleanup secondary.
- If leads mention reviews, portal follow-up or Spanish-speaker correction before price, the premium proof stack is working.
- If leads mention only price or free first class, strengthen owned-site proof and keep campaign links away from marketplaces.

## Cycle 40 Portal Talk Reflection Measurement Layer

Added: 2026-05-23 Cycle 40.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/talk-reflection-v0-technical-spec-cycle40.md`

Measurement decision:

- Treat portal Talk reflection as first-party product evidence, not public acquisition analytics.
- Store reflection outcomes in the app database.
- Use GA4 only for non-text, non-identifying aggregate events if tracking is added.

Event plan:

| Event | Preferred Store | Allowed Fields | Forbidden Fields |
| --- | --- | --- | --- |
| `portal_talk_completed` | Product DB or future event table | theme, difficulty, duration_seconds, completed_seconds, completion_type | student name, email, free-text note |
| `portal_talk_reflection_saved` | Product DB | theme, difficulty, reflection_choice, wants_class_practice | optional note in GA4, student id in GA4 |
| `portal_talk_reflection_skipped` | Product DB | theme, difficulty, completion_type | reason text unless explicitly collected later |
| `portal_talk_reflection_teacher_used` | Manual pilot row first | anonymous class/student segment, used yes/no, follow-up type | raw student note in public analytics |

Success thresholds:

- 25%+ of active portal students complete one Talk prompt when surfaced through Next 15 or a homework message.
- 50%+ of completions save a reflection choice.
- Auris uses at least one saved reflection in a next-class correction or warmup.

Stop thresholds:

- Reflection save below 15% after visible Talk use.
- 2 of 3 students call it homework/admin.
- Auris does not use the teacher note after two weeks.

Interpretation rule:

- A saved reflection is not a lead. It is retention/product evidence.
- A teacher-used reflection is stronger than a raw completion count.
- Do not claim "speaking feedback in the portal" publicly until at least one real feedback loop has happened.

## Cycle 42 Proof Specificity Layer

Added: 2026-05-23 Cycle 42.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/professional-review-proof-specificity-cycle42.md`

The first Meeting Voice test should not only ask whether someone contacted Auris. It should record which proof made the message credible.

Add this lightweight field to professional-English inquiry notes:

| Field | Allowed Values | Why |
| --- | --- | --- |
| `proof_specificity` | `generic_review` / `meeting_confidence` / `method_correction` / `portal_follow_up` / `personal_teacher` / `ireland_bilingual` / `invoice_nif` / `price` / `unknown` | Separates vague trust from the specific proof that justifies a premium personal teacher. |

Interpretation:

- If leads mention `method_correction`, `meeting_confidence` or `portal_follow_up`, the proof-specific Meeting Voice direction is working.
- If leads mention only `generic_review`, make the next post more concrete about the mechanism.
- If leads mention `price`, inspect `price_anchor_seen` before posting more Work-English content.
- If no proof is mentioned, ask one simple intake question after the inquiry: `What made you think this might be a good fit?`

Do not store private student stories or review text in the ledger. Keep notes anonymous and categorical.

## Cycle 43 Lead-Source Proof Layer

Added: 2026-05-23 Cycle 43.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md`

The next acquisition test should separate three evidence layers:

| Layer | Examples | Interpretation |
| --- | --- | --- |
| Human buyer signal | Source/proof/price/work-moment inquiry note, booked trial, lead quality | Highest-signal layer for channel decisions. |
| Channel-visible signal | GBP Performance, LinkedIn post/profile analytics, Calendly source fields | Useful baseline/result layer, usually owner-side. |
| Site/tool signal | UTMs, `talk_started`, `talk_completed`, `talk_contact_click`, contact click and any future form success | Useful intent layer, but not proof of buyer quality. |

Add these fields to any serious lead note:

| Field | Allowed Values | Why |
| --- | --- | --- |
| `source_confidence` | `confirmed_utm` / `owner_metric` / `self_reported` / `platform_message` / `inferred` / `unknown` | Avoids false precision about attribution. |
| `human_signal_strength` | `none` / `weak` / `medium` / `strong` | Makes a real buyer note outrank raw impressions or clicks. |
| `source_specific` | `review_post` / `profile` / `direct_search` / `talk_completion` / `contact_form` / `whatsapp_nav` / `private_referral` / `superprof` / `tusclases` / `unknown` | Connects lead quality to a placement or action. |

Interpretation:

- Treat `talk_contact_click` as lead intent, not a booked trial.
- Treat GBP/LinkedIn metrics as channel-visible signal until an inquiry row exists.
- Treat UTMs as useful support, not full attribution.
- Do not build CRM/product tracking until 5-10 manual rows show repeated fields.
- Do not send private inquiry notes or free-text buyer language to GA4.

## Cycle 58 Evidence Waiting Measurement Rule

Added: 2026-05-24 Cycle 58.

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/strategic-ignore-list-cycle58.md`

When Auris is close to full and no new lead/student row exists, do not invent new measurement systems. Classify the cycle first:

| State | What To Measure | What Not To Measure |
| --- | --- | --- |
| `no_new_evidence` | Light live health: reviews count/rating, site 200, API health if relevant. | No dashboards, no new CRM, no social scrape, no extra ledgers. |
| `owner_snapshot_arrived` | GBP views, searches, interactions, website clicks, calls/messages/bookings, top terms and range. | Do not infer buyer quality from profile metrics alone. |
| `first_inquiry_arrived` | One anonymized row: source, proof, need, timing, fit, price anchor, response, follow-up and outcome. | Do not overfit channel strategy from one weak row. |
| `student_row_arrived` | One continuity row: suggested step, reaction, behavior, in-class evidence and decision. | Do not send private content or names to analytics. |
| `capacity_changed` | Capacity state, CTA state, one measured public action and same-range owner metrics. | Do not judge old Trust Maintenance data as an acquisition sprint. |

Interpretation:

- Public health checks are readiness evidence only.
- Owner/platform analytics are channel-visible signal.
- Inquiry and current-student rows are the human truth layer.
- If there is no human truth layer, the correct measurement action can be "wait."
