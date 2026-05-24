# Search Indexing Refresh - Cycle 36

Created: 2026-05-23 Cycle 36

Purpose: refresh the SEO/Search Console/indexing evidence after the review-count gate, without turning the site into more thin local pages or academy-style copy.

## Primary Question

After no owner Review Truth arrived, has the search/indexing picture changed enough to justify SEO or site work now, and what is the smallest useful experiment?

Short answer: no new public search evidence justifies more pages. The best SEO experiment is still a bounded existing-page quality pass: richer static fallback copy, internal fallback links, and route-specific proof blocks for Talk, local private classes, and business/professional English. The near-term acquisition recommendation remains GBP-first because only the homepage has trusted GSC performance evidence and reviews are still the strongest public proof.

## Source Discovery

Possible source types for this question:

| Source Type | Why It Might Reveal The Truth | Use This Cycle |
| --- | --- | --- |
| Search Console performance API | Shows whether non-homepage pages have rows. | Attempted, but current local token did not expose GSC sites. |
| URL Inspection API | Separates crawl, discovery, canonical and indexing state. | Attempted indirectly through Search Console scope check; could not refresh. |
| Live route headers | Confirms public reachability and no accidental `noindex` header. | Used. |
| Live static HTML audit | Shows what crawlers and non-JS consumers see before hydration. | Used; highest-signal local layer. |
| Sitemap and robots | Tests discovery plumbing. | Used; still clean. |
| Route/component code | Confirms rendered content, links, CTAs and tracking path. | Used. |
| Review endpoint | Tests whether proof has strengthened while SEO waits. | Used; still `5.0 / 16`. |
| Google official Search docs | Guardrails against fake fixes such as resubmitting, schema tricks or keyword stuffing. | Used. |
| Local SERPs and academy pages | Shows buyer comparison set and proof density. | Used. |
| Tutor marketplaces | Tests price/proof pressure and specific search-intent language. | Used. |
| Professional-English pages | Tests business-English specificity. | Lightly reused from prior cycles. |
| Community threads | Reveals pain language, but lower SEO-specific value. | Used lightly. |

Chosen sources: live site route audit, sitemap/robots, route code, review endpoint, official Google Search docs, local academy/search-result pages, Superprof/Tusclases-style marketplace evidence, and prior professional-English/community pain sources.

## Local Evidence Inspected

Strategy and prior artifacts:

- `docs/strategy/research-log.md`
- `docs/strategy/research-roadmap.md`
- `docs/strategy/hypotheses.md`
- `docs/strategy/seo-indexing-diagnostics.md`
- `docs/strategy/measurement-plan.md`
- `docs/strategy/content-strategy.md`
- `docs/strategy/channel-fit-and-content-scan.md`
- `docs/strategy/gbp-week-one-execution-pack.md`
- `docs/strategy/review-proof-library.md`
- `docs/strategy/talk-the-talk-lead-magnet.md`
- `docs/strategy/profile-publishing-readiness-audit.md`
- `docs/strategy/website-proof-pricing-implementation-plan.md`
- `docs/strategy/automation-research-loop.md`
- `docs/strategy/market-intelligence.md`

Website and live outputs:

- `public/sitemap.xml`
- `public/robots.txt`
- `netlify.toml`
- `index.html`
- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `src/App.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/utils/analytics.js`
- live `https://englishwithauris.com/`
- live `/talkthetalk`
- live `/clases-ingles-castelldefels`
- live `/ingles-empresas-castelldefels`
- live `/.netlify/functions/google-reviews?language=es`
- live `/.netlify/functions/google-reviews?language=en`

Teaching-platform support context:

- `teacher-assistant/frontend/src/pages/StudentDashboard.tsx`
- `teacher-assistant/frontend/src/pages/TeacherOverview.tsx`

## Data/API Pass

### Search Console Attempt

Current local `gcloud` auth is active as `aurienglish@gmail.com`, but the token available to this shell only has cloud/platform-style scopes, not `webmasters` or `webmasters.readonly`.

Observed safely, without printing tokens:

| Check | Result | Interpretation |
| --- | --- | --- |
| `webmasters/v3/sites` with current access token | Empty `siteEntry` list. | Current token cannot be trusted for GSC refresh. |
| Requested scoped token with `webmasters.readonly` | Rejected because that scope is not among locally authorized scopes. | Search Console access needs a webmasters-scoped local credential restored. |
| Previous trusted GSC data | Cycle 16 remains latest API-backed baseline. | Use prior GSC rows until access is restored or a known GSC token is available. |

This is a credential/data-layer break for future Search Console refresh cycles. It does not indicate a public site issue.

### Live Route Audit

| Route | HTTP | Canonical | Robots Meta | Schema Count | Static Body Words | Static Internal Links | Current Read |
| --- | ---: | --- | --- | ---: | ---: | ---: | --- |
| `/` | 200 | `/` | `index,follow` | 2 | 0 | 0 | Indexed homepage remains safest campaign destination, but static body is empty. |
| `/talkthetalk` | 200 | `/talkthetalk` | `index,follow` | 1 | 29 | 0 | Tool metadata is good; fallback is still too thin and isolated. |
| `/clases-ingles-castelldefels` | 200 | self | `index,follow` | 1 | 38 | 0 | Discoverable local page, but fallback has little proof and no static links. |
| `/ingles-empresas-castelldefels` | 200 | self | `index,follow` | 1 | 36 | 0 | Business page is live, but fallback is too broad and static-isolated. |
| `/sitemap.xml` | 200 | n/a | n/a | n/a | n/a | n/a | Sitemap is reachable. |
| `/robots.txt` | 200 | n/a | n/a | n/a | n/a | n/a | Robots allows crawling and lists sitemap. |

New nuance: earlier cycles focused on static word count. Cycle 36 also checked static anchors. The dedicated route fallbacks currently have zero internal links before React renders. Rendered nav/footer links are crawlable, but a static fallback upgrade should include a few useful internal links as robustness and visitor value.

### Campaign Destination Audit

All planned proof-sprint URLs still return 200 and preserve the expected canonical:

| URL Purpose | HTTP | Canonical |
| --- | ---: | --- |
| GBP Week 1 homepage UTM | 200 | `https://englishwithauris.com/` |
| LinkedIn Week 1 Talk UTM | 200 | `https://englishwithauris.com/talkthetalk` |
| GBP Week 2 local UTM | 200 | `https://englishwithauris.com/clases-ingles-castelldefels` |
| LinkedIn Week 2 business UTM | 200 | `https://englishwithauris.com/ingles-empresas-castelldefels` |

Interpretation: route readiness is not the blocker. Measurement and indexing quality remain the blocker.

### Review Proof Check

Both live review endpoints still return `source=places-new`, `rating=5.0`, `reviewCount=16`, and 5 visible reviews.

The English visible set includes a 2026-05-22 review, but the API array is not sorted newest-first. Treat the newest-review reply status as owner-side only. Do not infer reply status from the public function.

## External Evidence

| Source | URL | Supports | Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Google JavaScript SEO basics | https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics | Google can render JS, but important page identity should not depend only on a hydrated app shell. | "React will solve it automatically." | High |
| Google page indexing report help | https://support.google.com/webmasters/answer/7440203?hl=en | Crawled/indexed states are diagnostic; live URL success is not the same as index inclusion. | "Live 200 means should rank." | High |
| Google URL Inspection tool help | https://support.google.com/webmasters/answer/9012289?hl=en | Inspection is the right source for URL-level crawl/index evidence, but it needs proper Search Console access. | Manual SERP checking as proof. | High |
| Google link best practices | https://developers.google.com/search/docs/crawling-indexing/links-crawlable | Real links and meaningful anchor text help Google and users understand pages. | Static fallbacks with no links. | High |
| Google sitemap docs | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=en | Sitemaps help discovery; they do not guarantee indexing. | Repeated sitemap submission as a fix. | High |
| Google canonicalization docs | https://developers.google.com/search/docs/crawling-indexing/canonicalization | Canonicals are hints; Google may choose differently when pages overlap. | Assuming self-canonical alone solves thin/duplicate concerns. | High |
| Google SEO starter guide | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | Useful, unique content and sensible titles matter; keyword stuffing is a bad path. | City-page multiplication. | High |
| Google helpful content guidance | https://developers.google.com/search/docs/fundamentals/creating-helpful-content | SEO should support people-first content, not content made only for search engines. | Academy-style SEO copy. | High |
| Castle Languages | https://castlelanguages.cat/ | Local competitors have dense proof: 14+ years, groups, companies, Cambridge, native qualified teachers. | Generic "classes in Castelldefels" as enough. | High |
| Janet's School | https://janets.es/ | Academy competitors show 21 years, native team, Cambridge, adults/kids/company training and FUNDAE. | Auris trying to imitate academy scale. | High |
| Kilkenny Learning Centre | https://kilkennylc.com/ | Business English and native-teacher proof are standard in local academy positioning. | "Business English" as distinctive alone. | High |
| Academia Moliere | https://academia-moliere.com/ | Local SERP competition includes broad academies with many languages and group/private offers. | More generic local-service copy. | Medium-high |
| Superprof business English Castelldefels | https://www.superprof.es/clases/business-english/castelldefels/ | Local business-English demand exists, but average price shown is around 17 EUR/h and proof is marketplace-style. | Marketplace-first premium positioning. | High |
| Superprof English Castelldefels | https://www.superprof.es/clases/ingles/castelldefels/ | Local private-class SERP has many profiles, lower anchors and confidence/business wording. | Price alone as qualification. | High |
| Superprof Fred profile | https://www.superprof.es/business-english-aeronautico-logistica-adquiere-fluidez-confianza-speaking-necesitas-para-crecer-laboralmente.html | A lower-price competitor can show 18 reviews, 50+ students and work/technical specificity. | Thin business page or generic premium claim. | High |
| Reddit Barcelona work-confidence thread | https://www.reddit.com/r/Barcelona/comments/153pz43 | Work-language pain often sounds like needing confidence in meetings, not grammar-first learning. | Broad SEO pages without pain language. | Medium |

## Falsification

### Hypothesis Tested: H002 GBP Beats Broad SEO Near Term

Result: strengthened, but with a measurement caveat.

Why:

- Live site routes are healthy but unchanged.
- Previous trusted GSC data remains homepage-only.
- Current local token cannot refresh GSC, so SEO has become less measurable this cycle, not more actionable.
- Reviews remain publicly stronger than page-level search proof.

What would weaken H002:

- Restored GSC access shows non-homepage impressions/clicks for local/business/Talk pages.
- URL Inspection shows the local or business route indexed.
- One organic inquiry mentions the local/business route specifically.

### Hypothesis Tested: H020 Indexing Gap Is Quality/Uniqueness/Priority, Not Discovery

Result: strengthened and refined.

Why:

- Routes still return 200 with canonical and `index,follow`.
- Sitemap/robots/redirects remain clean.
- Static body counts are unchanged and static internal links are zero on the dedicated fallback pages.
- Competitor pages continue to show much denser route-specific proof.

What would weaken H020:

- URL Inspection reports a specific technical/canonical problem after access is restored.
- A static/uniqueness patch plus recrawl still leaves pages unindexed with no impressions.
- GBP/profile links create page impressions without content changes, pointing to off-page priority as the bigger driver.

### Favored Idea To Challenge

Favored idea: "A static fallback patch will help indexing."

The cycle supports it, but does not prove it. Google can render JS, and indexing may still depend on site prominence, freshness, external/profile links, and Google choosing the homepage as the better representative page. The patch should be treated as a low-risk experiment, not an SEO guarantee.

Cheaper alternative that could beat it: publish one owner-measured GBP review-confidence post to the indexed homepage after Review Truth and Day 0 are captured. That may create qualified action before any SEO page starts indexing.

## Implementation-Ready Experiment

Do not implement automatically. This is ready if Auris asks for site work.

### P0: Existing-Page Static Fallback Patch

Scope:

- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`

Each fallback gets:

- one useful H1,
- 180-260 words of page-specific copy,
- 3-5 short bullets,
- 2-3 static internal links,
- one direct contact or homepage link,
- no keyword repetition for its own sake.

Local fallback direction:

- Direct private teacher, not a rotating academy team.
- Main rhythm online; local/in-person only when it genuinely fits.
- Spanish-speaker confidence, pronunciation rhythm, mental translation.
- Portal/review continuity after class.
- Links: `/`, `/talkthetalk`, `#contact` or homepage contact section.

Business fallback direction:

- Meetings, presentations, interviews, client calls and small-team practice.
- For professionals, autonomos and small teams.
- Invoice with NIF available.
- Personal correction plus saved phrases/review in the portal.
- Links: `/`, `/talkthetalk`, `/clases-ingles-castelldefels`.

Talk fallback direction:

- Free practice bridge for people who understand English but freeze when speaking.
- Three examples: explain a work problem, answer an interview question, tell a short story.
- "Use the tool for repetitions; use class for feedback and diagnosis."
- Links: `/`, `/clases-ingles-castelldefels`, contact/trial section.

### P1: Rendered Uniqueness Blocks

Add or improve three rendered blocks in `src/components/SeoLandingPage.jsx` and `src/components/TalkTheTalk.jsx`:

| Page | Block | Purpose |
| --- | --- | --- |
| Local | `Why a private teacher instead of another academy?` | Answer local comparison with direct teacher relationship, Spanish-speaker insight, review/follow-up proof. |
| Business | `The Work-English Confidence Loop` | Make business English concrete: real situation, practise language, correct hesitation patterns, save phrases, reuse at work. |
| Talk | `Practise the moment before it happens` | Make Talk a practice bridge, not a standalone app promise. |

### P2: Measurement Gate

Before changes:

- Record current static words/link counts.
- Preserve Cycle 16 GSC baseline as last trusted API-backed baseline.
- Note Search Console access status.

After public deploy, if Auris asks to deploy:

1. Verify route 200/canonical/metadata.
2. Run browser screenshot QA only if visual layout changes.
3. Restore Search Console API or inspect manually in owner GSC.
4. Use URL Inspection once for each changed URL.
5. Wait 14-28 days before judging.
6. Judge by URL Inspection state and page-level GSC rows, not manual Google search alone.

## Strategic Synthesis

Strongest next move:

- Keep Week 1 acquisition GBP-first and homepage-led, but only after owner Review Truth and Day 0 Performance.
- If Auris wants site work, patch existing route quality/fallbacks before adding pages.

What not to do yet:

- Do not create more town/city pages.
- Do not create a separate Work-English product page.
- Do not use self-serving review schema.
- Do not resubmit or inspect repeatedly without public changes.
- Do not point first GBP/LinkedIn traffic at local/business pages as if they have search proof.
- Do not ignore the Search Console credential break if future cycles need fresh GSC evidence.

Decision-changing evidence:

- Restored GSC access showing local/business/Talk impressions.
- URL Inspection change from not indexed to indexed.
- Owner-side GBP action data showing search/profile movement after a post.
- An inquiry mentioning the local/business/Talk page as the reason for contact.

## Next-Cycle Packet

Recommended next theme: Search Console credential restoration only if Auris wants API-backed SEO refresh, otherwise pricing/profile coherence or owner-side Review Truth.

Exact next work if continuing SEO:

- Restore or locate a `webmasters.readonly` token without printing credentials.
- Rerun Search Console 28/90/180 page/query windows ending with the latest complete day.
- Rerun URL Inspection for `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`.
- If access remains blocked, use owner GSC screenshots/manual rows and record `source=owner_gsc_manual`.
- If site work is approved, patch only the three static fallback files plus the smallest rendered uniqueness blocks.

Exact next work if rotating:

- Pricing/profile coherence: compare homepage price, Superprof/Tusclases visible price anchors, LinkedIn identity and lead-source ledger fields.
- Owner evidence: fill one Review Truth row and, if replied, ask for GBP Performance Day 0.

