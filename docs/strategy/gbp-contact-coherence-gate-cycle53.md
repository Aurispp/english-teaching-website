# GBP Contact Coherence Gate - Cycle 53

Created: 2026-05-24
Theme: Google Business Profile contact and booking-link coherence after direct-contact deploy

## Primary Question

Now that the live website uses WhatsApp/email instead of Calendly, do the public profile and owned-site contact surfaces still tell one coherent story?

## Short Answer

The website is coherent, but the wider public profile stack may not be.

The strongest unresolved mismatch is owner-provided Google Search / Business Profile evidence from 2026-05-24 showing `Appointments: calendly.com`. That was useful when the site was booking-first. It is now potentially stale because the website no longer uses Calendly and the current public mode is `direct_contact_future_availability`.

This is not an emergency, and the automation should not edit the profile. It is an owner-side check: if Auris wants direct-contact mode everywhere, the Google Business Profile booking/appointment link should either be removed, disconnected from Calendly, or deliberately kept as an exception.

## Source Discovery

Where the best evidence for this exact question could live:

| Source Type | Why It Might Help | Used This Cycle |
| --- | --- | --- |
| Owner-provided GBP/Search screenshot | Highest-signal public profile truth; showed appointment/provider UI. | Yes, from prior owner evidence. |
| Google Business Profile local business links docs | Defines appointment links, preferred links and third-party link removal. | Yes |
| Google Business Profile bookings docs | Defines booking providers, owner-added links and expected propagation. | Yes |
| GBP place action links API docs | Shows that appointment/action links are first-class GBP resources. | Yes |
| GBP chat/call-history docs | Shows direct messaging from GBP is constrained and not always available. | Yes |
| GBP Performance docs | Shows whether bookings/calls/website clicks can be watched later. | Yes |
| Website live bundle and schema | Tests whether the owned site is direct-contact or still booking-first. | Yes |
| Public sitemap/metadata | Finds stale public technical signals after the deploy. | Yes |
| Local competitor contact/profile pages | Tests whether direct contact looks normal locally. | Carried forward from Cycle 52; light refresh. |
| GBP practitioner/community threads | Useful to learn link-removal friction and validation issues. | Used lightly as medium-confidence caution. |
| Teacher platform code | Tests whether there is already a lightweight follow-up path before building CRM. | Yes |

Chosen highest-signal sources: owner-provided GBP evidence, official GBP link/booking/chat/performance docs, live website/schema checks, and teacher-platform WhatsApp/follow-up capability.

## Local And Live Evidence

| Evidence | Finding | Interpretation |
| --- | --- | --- |
| Website repo status | `main...origin/main` with Cycle 52 strategy docs uncommitted; no code changes made in this cycle. | Research-memory updates are local; public code is unchanged. |
| Teaching platform repo status | Dirty/untracked and unrelated; inspected only. | Do not touch. |
| Live homepage | HTTP/2 200, Netlify cache hit, still serving `main-c144a168.js`. | Production remains on direct-contact build. |
| Live main bundle scan | Contains WhatsApp/email, `contact_click`, direct availability copy; no active Calendly matches. | Owned website is direct-contact. |
| Live Talk bundle | Contains `talk_contact_click` and WhatsApp. | Talk no longer schedules via Calendly. |
| Owner GBP/Search evidence | Earlier 2026-05-24 screenshot showed `Appointments: calendly.com`. | Likely public-profile mismatch if still live. Needs owner check. |
| Live JSON-LD | `telephone` and `email` are present; no `contactPoint`; offers still say `InStock` / `PreOrder`. | Contact facts are present, but schema does not describe direct-contact mode. Not urgent. |
| Live/app copy | FAQ and local landing still mention free first class / trial class in some places. | This is a softer mismatch: okay if true, but less aligned with "usually close to full." |
| Sitemap | `lastmod` remains `2026-05-21`. | Minor SEO hygiene issue carried forward. |
| Reviews endpoint | Public proof remains `5.0 / 16`. | Trust surface is intact. |
| GBP Business Information API | Current token returned `403 PERMISSION_DENIED`. | Automation cannot inspect owner profile links directly. |
| Teacher platform README/code | Current platform has WhatsApp handoff support for active classes/students, not prospect tracking. | Do not build prospect CRM yet; use a manual row. |

## External Evidence

| Source | Signal | Strategic Meaning |
| --- | --- | --- |
| Google Business Profile local links docs: https://support.google.com/business/answer/6218037 | Profiles can include action links, including appointment links; owners can set preferred links; third-party booking links may need provider removal and providers are expected to remove them after a request. | GBP appointment links are a separate public surface; website Calendly removal does not automatically remove GBP booking links. |
| Google Business Profile bookings docs: https://support.google.com/business/answer/7475773 | Owners can use booking providers or add their own link; providers may appear on the profile within about a week. | Calendly-style booking can remain profile-level even after site code changes. |
| Google GBP place action links API docs: https://developers.google.com/my-business/reference/placeactions/rest/v1/locations.placeActionLinks | GBP action links represent profile actions such as appointments and can be managed as resources when access exists. | This is structurally different from normal website links. |
| GBP chat/call-history change docs: https://support.google.com/business/answer/14919062 | Business Profile chat and call history ended July 31, 2024; customers still contact businesses through Search/Maps via profile info, websites and other shared details, with text/WhatsApp options only for eligible accounts. | Do not rely on GBP chat as the direct-contact layer; website/phone/WhatsApp/email remain clearer. |
| GBP Performance docs: https://support.google.com/business/answer/9918094 | Owners can see views, searches, website clicks, calls, messages and bookings where available. | A profile-link cleanup can be measured later only with owner-side Performance. |
| Google local ranking docs: https://support.google.com/business/answer/7091 | Complete, accurate profile information, reviews and prominence help the business stand out. | Contact consistency is profile-quality work, not just attribution work. |
| GBP services docs: https://support.google.com/business/answer/9455399 | Service businesses can add service descriptions/prices where available, with policy constraints. | Services may be a better place than appointment links to explain classes while full. |
| WhatsApp click-to-chat docs: https://faq.whatsapp.com/5913398998672934 | `wa.me` links are the official direct-contact mechanic. | If a WhatsApp link is added anywhere, use the simple official pattern. |
| Reddit/local SEO appointment-link thread: https://www.reddit.com/r/localseo/comments/1s4ef0i/google_business_profile_removing_appointment/ | Practitioners report Google may reject generic contact pages as appointment links if they do not allow direct booking. | Do not replace Calendly with a generic contact page inside a booking slot unless Google accepts it. Medium confidence. |
| Reddit GoogleMyBusiness appointment-link thread: https://www.reddit.com/r/GoogleMyBusiness/comments/1ffp0i7 | Some operators report appointment links can be hard to remove or require support/provider action. | Owner should log status as `removed`, `pending`, `blocked`, or `provider_request`. Medium confidence. |

## Falsification

### H002: GBP Beats Broad SEO For Near-Term Leads

Status: strengthened as a trust/profile path, refined away from lead volume.

Evidence: GBP owner evidence previously showed 520 views and only 2 interactions over the visible six-month chart. This cycle adds a profile-coherence risk: if GBP still has a Calendly appointment link while the site has moved to WhatsApp/email, GBP could be sending high-intent searchers into the wrong action.

Practical test: owner checks `Booking` / local business links and records whether `calendly.com` is still present.

### H015: Manual Lead-Source Notes Are Required

Status: strengthened.

Evidence: even if GBP shows website clicks, calls or bookings, the automation cannot tell whether the buyer used the old appointment link, the new site contact section, phone, WhatsApp, email or a referral unless a simple owner row records the first contact path.

Practical test: add `first_contact_surface`: `gbp_appointment_link`, `gbp_website`, `gbp_call`, `website_whatsapp`, `website_email`, `referral`, `unknown`.

### H019: GBP Owner-Side Baseline Is Required Before Judging Posts

Status: broadened from performance baseline to profile-link baseline.

Evidence: the current token returned `403 PERMISSION_DENIED` for GBP Business Information. Official docs show appointment/action links live in the owner/profile layer. Public route checks cannot prove which links Google is showing or whether a provider removal is pending.

Practical test: one owner-side `gbp_contact_link_truth` row before interpreting future GBP traffic.

### H026: Capacity State Should Decide The Acquisition Metric

Status: strengthened.

Evidence: a remaining Calendly appointment link would reintroduce immediate-booking behavior while the website and business strategy have moved to future-availability direct contact.

Stop/change evidence: if Auris wants open booking again, keeping Calendly on GBP can be intentional. If he wants direct-contact mode everywhere, remove/disconnect it.

## Strategic Synthesis

Strongest next move:

Run a GBP contact-link coherence check. This is smaller than another content plan and more important than a new GBP post while the public profile may still expose an old scheduling path.

What Auris should not do yet:

- Do not publish GBP posts or ads before contact/profile coherence is known.
- Do not replace a booking link with a generic contact page inside a Google appointment slot if Google expects a real booking URL.
- Do not build a waitlist or prospect CRM because of one old GBP link.
- Do not infer lead source from website clicks alone.

Smallest practical test:

Owner checks Google Business Profile:

| Field | Value |
| --- | --- |
| `date` |  |
| `profile_surface` | Google Search / Google Maps / GBP manager |
| `appointment_link_visible` | yes / no / unknown |
| `appointment_link_domain` | calendly.com / englishwithauris.com / other / none |
| `action_taken` | keep / remove / remove_provider / replace / no_action |
| `status` | live / pending / blocked / not_found |
| `reason` | direct_contact_mode / measured_acquisition / unclear |
| `next_check_date` |  |

Decision rule:

- If `calendly.com` is visible and Auris wants direct-contact mode everywhere, remove it or request provider removal, then check again after a few days.
- If `calendly.com` is visible and Auris wants a back-pocket booking exception, document it as intentional and keep website copy calm.
- If no appointment link is visible, update the owner ledger and move back to monthly GBP snapshot / first direct-contact row.

## Owner Micro-Ask

English:

```text
One tiny profile check: in your Google Business Profile, under Booking/Appointments, is there still a calendly.com link showing? If yes, do you want it removed now that the site is WhatsApp/email only?
```

Spanish:

```text
Una comprobacion rapida: en tu Google Business Profile, en Reservas/Citas, sigue apareciendo un enlace de calendly.com? Si aparece, quieres quitarlo ahora que la web va por WhatsApp/email?
```

## Next-Cycle Packet BB

Theme: GBP contact-link truth and first direct-contact row.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-contact-coherence-gate-cycle53.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-production-gate-cycle52.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If owner evidence arrives:

1. Fill `gbp_contact_link_truth`.
2. If Calendly is still present and direct-contact mode is desired, log the removal status as `planned`, `pending`, `blocked`, or `done`.
3. Do not change website code unless Auris asks.

If no owner evidence arrives:

1. Do not keep re-checking public Google search snippets.
2. Rotate to sitemap/static route hygiene, premium proof near price, or retention evidence.
3. Preserve the risk note: GBP appointment link may still be stale.
