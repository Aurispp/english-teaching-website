# GBP Calendly Removal Handoff - Cycle 55

Created: 2026-05-24
Theme: Google Business Profile appointment-link removal and verification

## Primary Question

After Auris asked how to remove the Calendly item from Google Business Profile, what is the smallest reliable owner-side sequence that removes or classifies it without turning this into a new funnel project?

## Short Answer

The website does not need another contact-flow change.

Production is already in direct-contact mode: WhatsApp/email are live, Calendly strings are absent from the public bundles, and the reviews endpoint still returns `5.0 / 16`. The remaining risk is owner-side Google Business Profile truth: Google may still show a booking/appointment action supplied by Calendly or another booking provider.

The correct move is a one-time owner action and one follow-up check:

1. In the Business Profile owner panel, open `Booking` or `Edit profile > Booking`.
2. If `calendly.com` appears as an appointment/booking link, remove the link or remove/disconnect the provider.
3. Record the status as `done`, `pending`, `blocked`, `provider_request`, or `kept_intentionally`.
4. Recheck Search/Maps after a few days because third-party/provider links can lag.

Do not replace Calendly with a generic contact page in an appointment-link slot unless Google accepts it as a real booking URL. The normal Website, Phone, Services, and profile description should carry the direct-contact path.

## Source Discovery

Where the best evidence for this question could live:

| Source Type | Why It Might Help | Used This Cycle |
| --- | --- | --- |
| Owner GBP Booking/Appointments screen | Highest-signal truth for whether Calendly is still connected. | Prior owner evidence only; still owner-side. |
| Official GBP local links docs | Defines owner-added links, third-party links and removal/provider behavior. | Yes |
| Official GBP bookings/provider docs | Explains booking links/providers and propagation timing. | Yes |
| Official GBP Performance docs | Shows how bookings/calls/website clicks appear later if owner checks metrics. | Yes |
| Official GBP edit/status docs | Useful for pending/not-approved or delayed profile edits. | Yes |
| GBP third-party policy docs | Tests whether provider-removal obligations exist. | Yes |
| Google Ads promo docs | Separates an owner-dashboard ad prompt from an actual public ad campaign. | Yes |
| Calendly/provider docs | Could explain provider integration, but official Google docs are more relevant here. | Light search only |
| Practitioner/community threads | Reveal friction: generic contact links may be rejected and provider links can be sticky. | Used as medium-confidence caution. |
| Live website bundles/schema/reviews | Confirms the owned site is already direct-contact and no code action is needed. | Yes |
| Local competitor contact pages | Checks whether phone/email/WhatsApp contact without booking is normal. | Carried forward; light use. |
| Teacher-assistant code/README | Tests whether a prospect CRM is needed after direct contact. | Yes, read-only. |

Chosen highest-signal sources: official GBP local-link/booking/performance/edit docs, owner-supplied prior GBP evidence, live production scans, the owner evidence ledger, and community friction reports only as caution.

## Local And Live Evidence

| Evidence | Finding | Interpretation |
| --- | --- | --- |
| Website repo status | `main...origin/main` with uncommitted Cycle 52-55 strategy-memory updates; no public code changes made this cycle. | Research memory only. |
| Teaching platform repo status | Dirty/untracked with many unrelated files; inspected read-only. | Do not touch. |
| `gbp-contact-coherence-gate-cycle53.md` | Already identified `Appointments: calendly.com` as the unresolved owner-side risk. | Cycle 55 should turn that gate into a removal handoff. |
| `public-message-coherence-cycle54.md` | Website public contact path is coherent enough; free-first-class/schema/sitemap are P1 hygiene only. | Do not confuse profile removal with site copy cleanup. |
| `owner-evidence-ledger-template.md` | Has a `GBP Contact Link Truth Row`, but lacks post-removal status granularity. | Add removal/status labels. |
| `measurement-plan.md` | Direct-contact mode needs manual rows; GBP profile link truth is a caveat. | Add a post-removal interpretation layer. |
| `automation-research-loop.md` | Cycle 53 says profile action links are separate from website code. | Strengthen with a post-owner-instruction rule. |
| `hypotheses.md` | H002/H015/H019/H026 already point to GBP profile truth, manual rows and capacity-state consistency. | Update with removal-handback evidence. |
| `src/components/ContactSection.jsx` | Only WhatsApp/email cards; emits `contact_click`. | Site contact path is already aligned. |
| `src/components/PricingSection.jsx` | Pricing CTA goes to `#contact`, no booking provider. | No Calendly dependency. |
| `src/components/SeoLandingPage.jsx` | Local page still says free first class; business page is first-conversation oriented. | Separate Packet BC hygiene, not GBP removal. |
| `src/translations.js` | Direct-contact and future-availability copy live; FAQ still says free trial/free first class. | Expectation tracking remains useful. |
| `index.html` JSON-LD | Phone/email present; private offer still `InStock`; FAQ still says first class free. | Code hygiene later if approved. |
| `public/sitemap.xml` | All `lastmod` values remain `2026-05-21`. | Still Packet BC/AT hygiene. |
| Live homepage headers | HTTP/2 200 from Netlify, serving `assets/main-c144a168.js`. | Production direct-contact build remains live. |
| Live main bundle scan | No `Calendly`, `calendly`, `trial_booked`, `Book now`; yes WhatsApp/email, `usually close`, `contact_click`. | Owned site is not the Calendly source. |
| Live route checks | `/`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, `/talkthetalk`, `/sitemap.xml`, `/robots.txt` all returned 200. | Destinations are healthy. |
| Live reviews endpoint | `places-new`, `rating=5`, `reviewCount=16`. | Public proof remains healthy. |
| GSC API attempt | `403 PERMISSION_DENIED`, insufficient authentication scopes. | No fresh Search Console claim. |
| GBP Business Information API attempt | `403 PERMISSION_DENIED`, insufficient authentication scopes. | Owner screen remains the truth source. |
| Teacher-assistant README | WhatsApp handoffs exist for current classes/students, not prospects. | Manual row beats new CRM. |

## External Evidence

| Source | Signal | Strategic Meaning |
| --- | --- | --- |
| GBP local business links docs: https://support.google.com/business/answer/6218037 | Business Profiles can show action links, including appointment links; third-party links may require provider removal, and provider changes can take days. | Removing Calendly from website code does not remove GBP action links. |
| GBP bookings docs: https://support.google.com/business/answer/7475773 | Owners can use supported providers or add links; provider-supplied links may appear after setup and need owner/provider handling. | Treat Calendly as a profile/provider surface, not a normal page link. |
| GBP Performance docs: https://support.google.com/business/answer/9918094 | Owners can see interactions such as website clicks, calls, messages and bookings where available. | After removal, judge by owner-side interactions plus inquiry rows, not public scraping. |
| GBP edits/status docs: https://support.google.com/business/answer/3039617 | Profile edits can be pending, accepted, not approved or need review. | A removed link may need a follow-up status rather than instant certainty. |
| GBP third-party policy docs: https://support.google.com/business/answer/7353908 | Third parties working with GBP must allow a business to discontinue service and respond to requests in defined time windows. | If a provider link is sticky, classify as `provider_request` rather than assuming owner error. |
| Google Ads promotional offer docs: https://support.google.com/google-ads/answer/6388096 | Ad credits require creating/running ads and meeting spend/eligibility conditions. | The owner-panel ad-credit box is not a live public ad unless Auris starts a campaign. |
| Google Business Profile ad creation docs: https://support.google.com/business/answer/6105375 | Ads from a Business Profile require campaign setup and verified business context. | Ignore the promo box while full; it is not the Calendly problem. |
| Google local ranking docs: https://support.google.com/business/answer/7091 | Complete, accurate profile information and reviews help users choose and help prominence. | Removing stale booking info is profile-quality work. |
| Community local SEO appointment-link thread: https://www.reddit.com/r/localseo/comments/1s4ef0i/google_business_profile_removing_appointment/ | Practitioners report generic contact pages may be rejected as appointment links. | Do not force `englishwithauris.com/#contact` into an appointment slot. Medium confidence. |
| Community GBP appointment-link thread: https://www.reddit.com/r/GoogleMyBusiness/comments/1ffp0i7 | Operators report appointment links/provider links can be difficult to remove and may require support/provider action. | Add `blocked` / `provider_request` statuses. Medium confidence. |
| Janet's contact page: https://janets.es/contacto/ | Local academy contact flow uses direct contact/level-test style rather than requiring a booking widget. | Direct contact is normal locally; Auris can stay non-academy. |
| Live English contact page: https://live-english.net/contact-us/ | Larger online school combines WhatsApp/contact routes with free trial and fast-response language. | Auris should keep direct contact warmer and quieter, not a scale-school funnel. |

## Falsification

### H002: GBP Beats Broad SEO For Near-Term Trust

Status: strengthened, but the action link must be coherent before judging GBP.

Evidence: live website checks show direct-contact is active; official GBP docs show appointment links are independent profile actions. If GBP still shows Calendly, a future high-intent searcher may be sent into a stale booking path even though the website is coherent.

Next practical test: fill one post-removal `gbp_contact_link_truth` row.

### H015: Manual Rows Are Required

Status: strengthened.

Evidence: even after a successful Calendly removal, neither `contact_click` nor GBP Performance can tell whether a user saw the old appointment link, the website, the phone button or WhatsApp. The owner row needs `appointment_link_visible_after` and `first_contact_surface`.

Next practical test: if any inquiry arrives, classify whether it came from `gbp_booking_link`, `gbp_website`, `gbp_call`, `website_whatsapp`, `website_email`, `referral`, `marketplace` or `unknown`.

### H019: Owner-Side GBP Baseline Is Required

Status: strengthened with a removal-status gate.

Evidence: GSC and GBP Business Information API attempts both returned 403. The current automation cannot inspect owner profile links. Official docs and prior owner screenshot make this a one-row owner truth issue.

Next practical test: owner logs the link state and status: `not_found`, `removed`, `pending`, `blocked`, `provider_request`, or `kept_intentionally`.

### H026: Capacity State Decides CTA Intensity

Status: strengthened.

Evidence: Auris is close to full and building future demand slowly. Calendly can be useful in `measured_acquisition` mode, but in `direct_contact_future_availability` it creates a stronger immediate-booking signal than the site intends.

Stop/change evidence: if Auris opens a slot and wants bookings within 30 days, a booking link can return deliberately. Until then, default to direct-contact.

## Owner Runbook

Use this only in the owner UI. Do not ask for credentials.

### Remove Or Classify

1. Search Google for `English with Auris` while logged into the owner account, or open Google Maps and manage the Business Profile.
2. Open `Booking`, `Appointments`, or `Edit profile > Booking`.
3. If a `calendly.com` link is listed:
   - choose Remove/Delete if it is an owner-added link,
   - choose Remove Provider / disconnect provider if it is provider-managed,
   - save, and record the status.
4. If there is only a Google Ads credit/promo box, ignore it. That is not a public booking link.
5. Do not add a generic contact-page URL as an appointment link unless Google accepts it as a booking URL.

### Verification Row

| Field | Value |
| --- | --- |
| `date` | 2026-__-__ |
| `profile_surface_checked` | Google Search owner panel / Google Maps / Business Profile manager |
| `appointment_link_visible_before` | yes / no / unknown |
| `appointment_link_domain_before` | calendly.com / other / none / unknown |
| `action_taken` | removed_link / removed_provider / requested_provider_removal / kept_intentionally / not_found |
| `profile_edit_status` | live / pending / not_approved / blocked / unknown |
| `appointment_link_visible_after` | yes / no / unknown |
| `appointment_link_domain_after` | calendly.com / englishwithauris.com / other / none / unknown |
| `ad_promo_visible` | yes / no / ignored |
| `next_check_date` | 2026-__-__ |
| `notes` |  |

### Decision Rules

| If | Then |
| --- | --- |
| Calendly removed and no appointment link remains | Mark Packet BB as resolved; move to monthly GBP snapshot or first inquiry row. |
| Calendly still appears but removal is pending | Wait a few days; log `pending`; do not make more public changes. |
| Calendly is provider-managed and cannot be removed in UI | Log `provider_request`; contact/disconnect provider only if Auris wants. |
| Google rejects a generic contact-page replacement | Leave appointment link empty; use Website, Phone, Services and profile description. |
| Auris intentionally keeps Calendly | Log `kept_intentionally`; interpret future GBP bookings as a deliberate exception to direct-contact mode. |
| Only Google Ads credit is visible | Ignore while close to full; no action required. |

## What Not To Do

- Do not restore Calendly on the website for consistency.
- Do not run Google Ads while Auris is close to full and the profile-link state is unresolved.
- Do not create a waitlist or form because of one profile-link cleanup.
- Do not keep scraping personalized Google search results for proof.
- Do not treat a disappeared link as lead-generation progress; it is profile hygiene.
- Do not publish a GBP post until review replies/profile links are clean or intentionally classified.

## Implementation-Ready Artifact

This file is the implementation-ready artifact for Cycle 55:

- owner runbook
- verification row
- decision rules
- updated ledger fields
- process rule for post-owner-instruction cycles

The next actual public/code work, if approved later, remains Packet BC.

## Next-Cycle Packet BD

Theme: GBP Calendly removal verification and profile freshness.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-calendly-removal-handoff-cycle55.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-contact-coherence-gate-cycle53.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`

If Auris confirms Calendly removal:

1. Fill the verification row.
2. Update Packet BB status to resolved or pending.
3. If no appointment link remains, do not notify again; rotate to monthly GBP snapshot, first inquiry row, or Packet BC if code work is requested.

If removal is blocked or pending:

1. Log `blocked` or `provider_request`.
2. Do not recommend ads/posts yet.
3. Use official GBP/provider docs before asking Auris to contact support.

If no owner update arrives:

1. Do not repeat the removal instructions.
2. Keep GBP Calendly truth as open risk.
3. Rotate to first direct-contact inquiry rows, monthly GBP owner snapshot, or public-message cleanup only with approval.
