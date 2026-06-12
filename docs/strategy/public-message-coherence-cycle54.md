# Public Message Coherence Gate - Cycle 54

Created: 2026-05-24
Theme: capacity-aware public messaging after the direct-contact deploy

## Primary Question

Now that production is WhatsApp/email-first, what residual public signals still feel booking-first or too immediate, and which should be cleaned before the next acquisition push?

## Short Answer

The core public contact path is coherent enough to leave alone.

The next useful public-code pass, if Auris asks for one, should not restore booking pressure. It should clean three small mismatches:

1. The local landing page and FAQ/schema still frame the entry point as a `free first class` / `clase de prueba gratuita`.
2. JSON-LD offers still say private classes are `InStock` and group classes are `PreOrder`, while the visible site says Auris is usually close to full.
3. `sitemap.xml` still has `2026-05-21` for every route after a May 24 contact/copy deploy.

None of these is an urgent public-site issue. They are coherence/hygiene items for the next approved site edit.

## Source Discovery

Where the most useful evidence for this question could live:

| Source Type | Why It Might Help | Used This Cycle |
| --- | --- | --- |
| Live production HTML and bundles | Shows what visitors and crawlers can actually receive now. | Yes |
| Local React components/translations | Shows exact source of residual copy. | Yes |
| Sitemap and JSON-LD | Finds machine-readable mismatches after copy changes. | Yes |
| Prior strategy artifacts | Prevents reopening settled Calendly/availability decisions. | Yes |
| Google sitemap docs | Defines whether stale `lastmod` matters. | Yes |
| Google structured-data docs | Defines LocalBusiness/contact/price fields and limits of rich results. | Yes |
| Schema.org availability docs | Tests whether `LimitedAvailability` is a valid availability state. | Yes |
| GBP services docs | Shows a lower-friction place to clarify services/prices than a booking link. | Yes |
| Local competitor pages | Tests whether free trial/level-test language is common and what it signals. | Yes |
| Marketplace tutor pages | Tests whether "free first class" creates a lower-price marketplace anchor. | Yes |
| UX/CTA guidance | Tests whether softer CTA text still needs a clear next step. | Yes |

Chosen highest-signal sources: live website/schema/sitemap, local copy source, Google sitemap/structured-data docs, Schema.org availability, GBP services docs, and local/marketplace free-trial examples.

## Local And Live Evidence

| Evidence | Finding | Interpretation |
| --- | --- | --- |
| Website repo status | Strategy docs are dirty; no public code changes made in this cycle. | Keep this as research memory only. |
| Teaching platform repo status | Dirty/untracked and unrelated; inspected read-only only. | Do not touch. |
| Live homepage headers | HTTP/2 200, Netlify cache hit, serving current direct-contact build. | Production is stable. |
| Live main bundle | No `Calendly`, `calendly`, `trial_booked` or `Book now`; yes for WhatsApp, email, quiet availability and `contact_click`. | The core booking-pressure removal is live. |
| Live Talk chunk | No Calendly; yes for `Message Auris`, `wa.me`, mailto and `talk_contact_click`. | Talk completion is direct-contact. |
| `src/translations.js` | Contact and pricing copy are capacity-aware, but FAQ still says free trial/free first class in EN/ES. | Softer mismatch, not an emergency. |
| `src/components/SeoLandingPage.jsx` | Local landing final section says `Start with a free first class` / `Empieza con una primera clase gratuita`. Business landing says practical first conversation. | Local page is the strongest visible mismatch. |
| `index.html` JSON-LD | FAQ asks about `primera clase gratuita`; private offer availability is `InStock`, group offer `PreOrder`. | Machine-readable state lags behind current capacity posture. |
| `public/sitemap.xml` | All route `lastmod` values remain `2026-05-21`. | Stale after a meaningful May 24 copy/contact deploy. |
| Static route text check | Initial HTML has only 12-47 body words per route and no future-availability text before JS. | This remains the Packet AT static-route issue; do not reopen unless code work is approved. |
| Reviews endpoint | Places New returns `5.0 / 16`. | Trust proof remains stable. |
| GBP/contact truth | Owner evidence of `Appointments: calendly.com` remains unresolved. | Packet BB still stands; do not re-scrape public Google. |

## External Evidence

| Source | Signal | Strategic Meaning |
| --- | --- | --- |
| Google sitemap docs: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | `lastmod` should reflect the last significant page update, including main content, structured data or links. | The May 24 contact/copy deploy qualifies for a sitemap hygiene update when the next code pass happens. |
| Google sitemap blog: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping | Google says `lastmod` must match reality and should be used for significant modifications, not tiny sidebar/footer changes. | Do not churn sitemap dates for tiny tweaks, but do update after meaningful offer/contact/schema changes. |
| Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business | `priceRange`, `telephone`, `url` and local business details are recognized, but Google does not guarantee rich-result display. | Schema is a coherence layer, not a conversion lever. |
| Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization | For LocalBusiness, put primary email/phone at business level before using `contactPoint` for multiple contacts. | Current `telephone` and `email` are acceptable; adding `contactPoint` is optional, not urgent. |
| Schema.org `InStock`: https://schema.org/InStock | `InStock` is an ItemAvailability member commonly used in offers. | Current private-class schema says available/open, which may be too strong for near-full mode. |
| Schema.org `LimitedAvailability`: https://schema.org/LimitedAvailability | `LimitedAvailability` is a valid ItemAvailability member indicating limited availability. | If code is changed, private class offer can move from `InStock` to `LimitedAvailability` if Auris wants schema to match visible copy. |
| Google GBP services docs: https://support.google.com/business/answer/9455399 | Service businesses can add services, descriptions and prices; services may be highlighted in profile. | GBP services are a better place to explain offer/prices than an old booking link. |
| Janet's contact page: https://janets.es/contacto/ | Local academy uses a free oral level test as the first step. | Free first/level-test language is normal locally but academy-coded. Auris should keep it personal if used. |
| Live English contact page: https://live-english.net/contact-us/ | Larger online school uses phone/email/form/WhatsApp plus free trial, fast reply and scale proof. | Free-trial language often sits inside a scale/enrolment funnel; Auris should avoid sounding like that while near full. |
| Superprof local tutor page: https://www.superprof.es/business-english-aeronautico-logistica-adquiere-fluidez-confianza-speaking-necesitas-para-crecer-laboralmente.html | Marketplace tutor pages repeat low hourly prices and `1a clase gratis`. | A visible free-first-class promise can pull prospects into marketplace expectations if not framed as a fit conversation. |
| Coidal English search result: https://www.coidalenglish.com/ | Search result shows free trial sessions, WhatsApp number and `Book Now`. | Free-trial plus booking is a common acquisition pattern; not the posture Auris wanted. |
| HarvardSites CTA guidance: https://designsystem.harvardsites.harvard.edu/keep-cta-link-text-clear-and-actionable | CTA text should make the next step clear and action-oriented. | `Send me a message` is clear; `free first class` may imply immediate booking rather than future availability. |

## Falsification

### H003 / H020: Search Hygiene Is Not The Acquisition Lever

Status: strengthened, not escalated.

Evidence: sitemap dates are stale, and static fallbacks remain thin. But all routes return 200 and Search Console access remains blocked, so this does not justify a broad SEO project.

Next practical test: update sitemap `lastmod` only during the next approved public-code pass, then inspect changed URLs once if GSC access returns.

### H015: Manual Rows Still Beat Click Data

Status: strengthened and refined.

Evidence: the live site can track clicks, but it cannot tell whether a person expected a free class, thought Auris was closed, or wanted immediate booking. The first inquiry row should capture `free_first_class_expectation`.

Next practical test: if someone writes after seeing the site, record whether they ask for a free class, future slot, price, trial, reviews or portal/follow-up.

### H026: Capacity State Should Decide CTA Intensity

Status: strengthened with a copy-specific refinement.

Evidence: the website now has calm future-availability copy, but some old `free first class` language remains. If the free class is still genuinely offered, it can stay, but it should be reframed as a first conversation/fit check rather than an acquisition-style free trial.

Stop/change evidence: if Auris wants to fill a slot within 30 days, clearer immediate trial language can return. If he remains nearly full, keep direct contact and make the free-class line quieter.

## Implementation-Ready Patch Spec

Use only if Auris asks for a small public hygiene patch.

| Priority | Surface | Current State | Suggested Direction | Why |
| --- | --- | --- | --- | --- |
| P0 | Do nothing urgent | Site is live, direct-contact, and not broken. | Keep stable. | No emergency. |
| P1 | Local landing final block | `Start with a free first class` / `Empieza con una primera clase gratuita`. | Change to `Start with a first conversation` / `Empieza con una primera conversacion`. | Keeps the fit-check truth without academy/free-trial pressure. |
| P1 | Homepage FAQ visible copy | `Do you offer a free trial class?` / `clase de prueba gratuita`. | Reframe to `Can I message you before starting?` or `Is there a first conversation?`. | Matches WhatsApp/email-first flow. |
| P1 | Static FAQ JSON-LD | Spanish FAQ says first class is free. | Keep schema aligned with visible FAQ copy. | Avoid machine-readable mismatch. |
| P1 | Private offer JSON-LD | Private class availability is `InStock`. | If still near full, consider `https://schema.org/LimitedAvailability`. | More honest machine-readable offer state. |
| P1 | Private offer description | Generic `tailored to your specific needs`. | Use Cycle 44 proof: speaking practice, correction, Spanish-speaker patterns, saved vocabulary and portal review. | Price proof, not scarcity, should support 40 EUR/h. |
| P1 | Sitemap | All lastmod values are `2026-05-21`. | Update changed route dates to the public deploy date for meaningful content/schema changes. | Google docs say `lastmod` should match significant changes. |
| P2 | Static route fallbacks | 12-47 static words; no future-availability copy before JS. | Use Packet AT only if SEO/site work is approved. | Bigger SEO quality experiment, not urgent. |

Suggested copy:

English local final title:

```text
Start with a first conversation
```

English local final text:

```text
Send me a message with your goals and timing. If I can help, we can arrange a first class or keep it in mind for a future slot.
```

Spanish local final title:

```text
Empieza con una primera conversacion
```

Spanish local final text:

```text
Escribeme con tus objetivos y disponibilidad. Si puedo ayudarte, organizamos una primera clase o lo dejamos encaminado para una plaza futura.
```

FAQ direction:

```text
Question: Can I message you before starting?
Answer: Yes. Send me your goals and timing, and I will tell you honestly whether I can help now or whether a future slot would make more sense.
```

## Measurement Add-On

Add these fields to the first direct-contact row:

| Field | Values |
| --- | --- |
| `free_first_class_expectation` | asked_for_free_class / expected_free_trial / not_mentioned / unknown |
| `message_copy_seen` | future_availability / free_first_class / reviews / pricing / local_page / unknown |
| `schema_or_search_surface_seen` | website / GBP / Google_result / marketplace / unknown |

Interpretation:

- If two high-fit prospects ask mainly for a free trial, reframe the FAQ/local page before adding traffic.
- If high-fit prospects understand the path and mention reviews/portal/follow-up, leave the calmer site alone.
- If nobody contacts while Auris remains full and no public push runs, do not call the copy a failure.

## Strategic Synthesis

Strongest next move:

Do not make a public change automatically. Keep the current direct-contact site stable. The next approved code pass should be a small coherence patch, not a new funnel.

What not to do yet:

- Do not restore Calendly for measurement.
- Do not add a waitlist/form/CRM because of wording mismatches.
- Do not publish a broad SEO patch unless Auris asks for site work.
- Do not use `free first class` as the headline while Auris is nearly full.

Risk of acting too early:

Over-cleaning every old phrase could hide a genuine offer and make the site colder than Auris wants.

Risk of waiting:

If GBP/LinkedIn traffic resumes, prospects may see future availability in one place and free-trial/immediate availability in another.

## Next-Cycle Packet BC

Theme: capacity-aware public-message cleanup.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/public-message-coherence-cycle54.md`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/index.html`
- `/Users/aurisp/repos/teacher-website/public/sitemap.xml`
- `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`

If Auris asks for a public hygiene patch:

1. Replace local landing `free first class` headline with first-conversation/future-slot language.
2. Reframe homepage FAQ and JSON-LD FAQ away from `free trial` as the main hook.
3. Update private offer schema description and consider `LimitedAvailability`.
4. Update sitemap `lastmod` only for changed routes.
5. Run build and live/static scans after deployment.

If no code approval arrives:

1. Do not repeat this copy audit.
2. Keep Packet BB open for GBP Calendly truth.
3. Rotate to first direct-contact inquiry rows, monthly GBP owner snapshot, or retention proof.
