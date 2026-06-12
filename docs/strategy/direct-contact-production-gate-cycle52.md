# Direct Contact Production Gate - Cycle 52

Created: 2026-05-24
Theme: production verification after the direct-contact push

## Primary Question

Now that `main` was committed and pushed, is the public website actually in calm direct-contact mode, and what should be measured before changing the funnel again?

## Short Answer

Yes. Production is serving the new direct-contact bundle. The public site now has the quiet future-availability line, WhatsApp/email routes, `contact_click`, and `talk_contact_click`. Live assets no longer contain active Calendly strings, the highlighted `Disponibilidad limitada` language, or `trial_booked`.

The strategic answer is not "the acquisition engine is working." It is: the production surface is coherent enough to begin a low-pressure evidence gate. The next proof is a real private contact row or a monthly GBP owner snapshot, not another CTA rewrite.

## Source Discovery

Where the best evidence for this exact question could live:

| Source Type | Why It Might Help | Used This Cycle |
| --- | --- | --- |
| Git and production deploy state | Proves whether the pushed change reached the public domain. | Yes |
| Live HTML/assets/string scans | Separates local code from production behavior. | Yes |
| Rendered mobile/desktop page checks | Finds missing copy, stale widgets or visual overlap that bundle grep misses. | Yes |
| Live review endpoint | Confirms public proof count/rating after deployment. | Yes |
| Search Console and sitemap | Shows crawl/indexing path and whether changed URLs can be inspected. | Attempted |
| Google tag / GA4 event inventory | Confirms which click-intent events exist after Calendly removal. | Yes |
| Netlify official docs | Defines what a production deploy from `main` means. | Yes |
| Google Search official docs | Defines sitemap `lastmod`, URL Inspection and recrawl behavior. | Yes |
| Google Business Profile official docs | Defines owner Performance metrics and profile contact/trust surfaces. | Yes |
| WhatsApp official docs | Validates the direct `wa.me` contact mechanic. | Yes |
| Local competitor contact pages | Tests whether direct contact is category-normal. | Yes |
| Community/operator threads | Warns whether direct conversations can get lost without a next action. | Carried forward from Cycle 51; not repeated deeply |

Highest-signal sources chosen: live production assets, rendered production page, Search/GBP/GA official docs, Netlify deploy docs, and local competitor contact pages.

## Local And Live Evidence

| Evidence | Finding | Interpretation |
| --- | --- | --- |
| Website repo status | `main...origin/main`, clean before this strategy-note update. Latest commit: `a304f9c Simplify contact flow and add strategy memory`. | The requested code change was committed and pushed. |
| Teaching platform repo status | Dirty/untracked, unrelated, untouched. | Keep respecting read-mostly boundary. |
| Production headers | `https://englishwithauris.com/?cycle52=verify` returns HTTP/2 200 from Netlify, cache hit, `content-length: 12618`. | The public domain is reachable and serving a stable production response. |
| Production assets | Homepage references `assets/main-c144a168.js` and `assets/main-82577177.css`. | Matches the local build hash from the direct-contact commit. |
| Live main bundle scan | Contains `I’m usually close` twice, `Send me a message` three times, `WhatsApp me`, `contact_click`, `wa.me/34684082221` and `mailto:aurienglish@gmail.com`. | The public homepage bundle has the new copy and contact paths. |
| Live main bundle negative scan | No matches for `Calendly`, `calendly`, `trial_booked`, `Disponibilidad limitada` or `Limited availability`. | The removed scheduling/scarcity surface is not active in production. |
| Live Talk bundle scan | Contains `Message Auris`, `talk_contact_click` and the WhatsApp URL. No Calendly matches. | Talk the Talk completion now routes to direct contact. |
| Rendered public page | Mobile rendered contact section shows WhatsApp/email copy and the softer availability note. | The production page is not only bundle-correct; users can see the intended contact surface. |
| `sitemap.xml` | Routes are listed, but all `<lastmod>` values are still `2026-05-21`. | Not urgent, but stale for the May 24 content change. Next SEO/code pass should update it if these routes changed significantly. |
| `robots.txt` | Allows crawling and points to `https://englishwithauris.com/sitemap.xml`. | No crawl block found. |
| Live reviews endpoint | Places New endpoint returns `source: places-new`, `rating: 5`, `reviewCount: 16`. | Public proof remains strong; endpoint still cannot prove owner reply/newest review truth. |
| Search Console API attempt | Current token returned `403 PERMISSION_DENIED` for the sites list. | Current automation cannot inspect page/query/URL Inspection state. Preserve older tiny Search Console baseline until access is restored. |
| Analytics event inventory | Live app bundle includes `contact_click`; Talk bundle includes `talk_contact_click`; direct HTML uses GA tag `G-VDW7H0VQBC`. | Intent events exist, but GA4 reporting/API access remains the limiting layer. |

## External Evidence

| Source | What It Supports | What It Weakens |
| --- | --- | --- |
| Netlify production deploy docs: https://docs.netlify.com/deploy/deploy-types/production-deploy/ | A Git push to the production branch such as `main` normally creates a production deploy served at the primary domain. | Treating the pushed commit as merely local. |
| Netlify deploy overview: https://docs.netlify.com/deploy/deploy-overview/ | Netlify deploys are atomic, so the site should not go live with mismatched uploaded files during a completed deploy. | Worrying about partial HTML/JS mismatch after the observed live asset hash. |
| Google sitemap docs: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | Google may use `<lastmod>` when it is accurate and verifiable; it should reflect significant content, structured-data or link changes. | Leaving stale `2026-05-21` forever if we care about changed routes being understood. |
| Google URL Inspection docs: https://support.google.com/webmasters/answer/9012289 | URL Inspection can test live URLs, view rendered pages and request indexing, but indexing is not guaranteed and can take time. | Treating a live deploy as immediate Google search impact. |
| Google Business Profile Performance docs: https://support.google.com/business/answer/9918094 | Owner Performance can show views, searches, website clicks, calls, messages and bookings where available. | Public route checks as a substitute for owner-side profile evidence. |
| Google Business Profile public docs: https://business.google.com/us/business-profile/ | Google frames phone/hours, photos/logos, posts, FAQs and review replies as trust/contact surfaces. | Thinking the site CTA alone should carry local trust. |
| Google Search business details docs: https://developers.google.com/search/docs/appearance/establish-business-details | Verified profile owners can edit address, contact info, business type and photos shown in Google Search/Maps. | Treating logo/avatar/profile inconsistency as something the public endpoint can fix. |
| Google Business Profile services docs: https://support.google.com/business/answer/9455399 | Service businesses can add custom services and descriptions/prices where the feature is available. | New website pages as the only way to clarify offers. |
| GA4 outbound-click docs: https://support.google.com/analytics/answer/13566436 | Outbound links can be measured as click events, but they are still just clicks away from the domain. | Calling WhatsApp/email clicks leads. |
| GA4 recommended-events docs: https://support.google.com/analytics/answer/9267735 | `generate_lead` is for a form/request or offline lead status, not every click. | Firing lead conversions on raw direct-contact clicks. |
| WhatsApp click-to-chat docs: https://faq.whatsapp.com/5913398998672934 | The `wa.me` pattern is the official low-friction contact mechanic. | Building a custom form before direct contact creates volume/noise. |
| Idealog contact page: https://www.idealog.es/contacto/ | Local academy contact paths include phone, email and form, plus budget/level-test language. | Direct contact being abnormal in the category. |
| Janet's contact page: https://janets.es/contacto/ | Local English school exposes phone, form and WhatsApp, with a level-test CTA. | Needing Calendly to look credible locally. |
| Herpa English page: https://www.academiaherpa.es/servicio/ingles | Another local provider exposes form, phone, WhatsApp-style prompt and email. | Email/WhatsApp being too informal for local education. |

## Falsification

### H015: Manual Lead-Source Notes Are Required

Status: strengthened.

Production now has measurable click-intent events, but the stronger evidence still sits in private replies. A WhatsApp click can mean curiosity, accidental tap, wrong-fit student, or a future high-fit lead. The next practical test is not more event naming. It is the first direct-contact row with method, likely source, first thing mentioned, proof mentioned, need, future timing, availability confusion, response, follow-up and outcome.

Confidence: high.

### H026: Capacity State Should Decide The Acquisition Metric

Status: strengthened.

The public site now matches Auris's nearly-full long-game posture: no booking push, no scarcity badge, clear message path. That supports `direct_contact_future_availability`. It also falsifies a favored idea: making the site calmer does not create acquisition proof by itself.

Stop/change evidence: if Auris wants a student within 30 days, restore measured acquisition language or a scheduling path. If good prospects think "full" means "closed," make the message path clearer before changing price or channel strategy.

Confidence: high.

### H003/H020: Search Is Not Solved By Deployment Alone

Status: refined.

The deployment fixed the public-state mismatch, but it did not change the long-running SEO diagnosis: Search Console access is currently blocked, route static fallbacks remain an older issue, and sitemap `lastmod` is stale for a meaningful May 24 site copy/contact change. This does not require urgent action today, but it should be part of the next SEO pass.

Confidence: high for "not a discovery-only issue"; medium for exact next search impact until GSC access is restored.

## Strategic Synthesis

Strongest next move:

Keep the public site in direct-contact future-availability mode and measure only two things for now:

1. A real WhatsApp/email inquiry row when one appears.
2. A monthly GBP owner Performance snapshot while Auris is close to full.

What Auris should not do yet:

- Do not restore Calendly only for attribution.
- Do not add a waitlist form, CRM, or public "fully booked" badge.
- Do not judge the change by zero leads while Auris is nearly full and not running an acquisition push.
- Do not run Google Ads against a nearly-full, low-proof measurement setup.

Smallest practical test:

For the next serious direct contact, record one row:

| Field | Value |
| --- | --- |
| `date` |  |
| `contact_method` | `whatsapp` / `email` / `phone` / `gbp_message` / `dm` |
| `likely_source` |  |
| `source_confidence` | `high` / `medium` / `low` |
| `first_thing_mentioned` |  |
| `proof_mentioned` | reviews / Ireland / Spanish-speaker help / portal / price / location / other / unknown |
| `need_type` | adult / professional / teen / exam / company / parent / other |
| `future_timing` | now / 1-4 weeks / 1-3 months / later / unknown |
| `availability_confusion` | yes / no / unclear |
| `price_anchor_seen` | none / 30 / 40 / marketplace / academy / unknown |
| `lead_quality` | high / medium / low |
| `response_sent` | yes / no |
| `next_follow_up_date` |  |
| `outcome` | replied / waiting / declined / future slot / booked / other |

Evidence that would change the recommendation:

- Two high-fit prospects ask whether Auris is closed: keep honesty but strengthen "message me" clarity.
- Two high-fit prospects mention 30 EUR marketplace anchors before accepting: prioritize premium-proof copy over channel growth.
- A slot opens within 30 days: switch from trust maintenance to measured acquisition.
- Five direct-contact rows arrive and source/reason repeats: build the smallest follow-up tracker or offer page around that pattern.
- GSC access returns and changed pages show fresh impressions: run a bounded SEO quality pass.

## Production Gate Status

| Gate | Status | Notes |
| --- | --- | --- |
| Public deploy reached domain | Pass | Netlify production HTML references the new asset hash. |
| Calendly removed from production | Pass | No live bundle matches for Calendly, `trial_booked`, or old scarcity text. |
| WhatsApp/email visible | Pass | Live bundle and rendered contact section confirm it. |
| Talk completion contact path | Pass | Talk chunk contains `Message Auris`, `talk_contact_click`, and WhatsApp URL. |
| Public proof intact | Pass | Reviews endpoint still returns `5.0 / 16`. |
| Owner performance available to automation | Blocked | GSC API returned 403; GBP owner metrics remain owner-side. |
| Search freshness fully clean | Minor caveat | Sitemap `lastmod` still says `2026-05-21`. |
| Lead truth available | Waiting | No real inquiry row yet, which is expected while nearly full. |

## Next-Cycle Packet BA

Theme: post-deploy direct-contact measurement and GBP/profile coherence.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-production-gate-cycle52.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- live `https://englishwithauris.com/`
- live `https://englishwithauris.com/talkthetalk`
- live `https://englishwithauris.com/sitemap.xml`

If a new inquiry exists:

1. Fill only one direct-contact row.
2. Classify source, proof, timing, availability confusion and follow-up.
3. Do not build a CRM unless follow-up risk appears more than once.

If no inquiry exists:

1. Do not treat that as failure while Auris is close to full.
2. Inspect GBP service/contact/profile coherence with owner-visible evidence if available.
3. Consider a small sitemap `lastmod`/static route freshness patch only if Auris asks for SEO/public changes.
