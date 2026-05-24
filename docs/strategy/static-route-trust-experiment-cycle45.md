# Static Route Trust Experiment - Cycle 45

Date: 2026-05-23

Purpose: turn the repeated indexing/static-fallback finding into a sharper implementation-ready experiment, while keeping the site personal, useful and non-academy.

## Primary Question

If no owner/lead evidence and no price-patch approval has arrived, should Auris invest in public route/indexing cleanup now, and what is the smallest safe patch that could make `/talkthetalk`, `/clases-ingles-castelldefels` and `/ingles-empresas-castelldefels` more useful without turning them into SEO-stuffed pages?

## Short Answer

Yes, but only as a bounded site-quality experiment if Auris asks for website work. It should not outrank GBP/reviews as the near-term acquisition engine.

The route plumbing is not the problem:

- all checked routes return HTTP 200,
- canonicals are correct,
- robots meta is `index,follow`,
- sitemap and robots are reachable,
- rendered nav/footer links exist,
- dedicated route HTML files exist.

The weakness is still that the static route fallback content is too thin and link-isolated:

| Route | Static Words | Static Internal Links | Current Read |
| --- | ---: | ---: | --- |
| `/` | 0 | 0 | Homepage remains indexed from prior GSC baseline, but static body is empty. |
| `/talkthetalk` | 29 | 0 | Tool route is live, but the fallback does not explain the practice-to-feedback bridge. |
| `/clases-ingles-castelldefels` | 38 | 0 | Local route is live, but fallback barely answers why Auris vs academy/marketplace. |
| `/ingles-empresas-castelldefels` | 36 | 0 | Business route is live, but fallback barely explains practical work-English moments or NIF. |

## Source Discovery

Possible source types:

| Source Type | Why It Matters |
| --- | --- |
| Prior GSC/URL Inspection baseline | Confirms whether pages are crawled/indexed and whether homepage still owns the search evidence. |
| Current Search Console API access | Tests whether fresh page/query evidence can be pulled safely. |
| Live route headers | Confirms no deployment, redirect, canonical or noindex regression. |
| Live static HTML | Shows what non-JS/static consumers see before hydration. |
| Source route HTML | Confirms whether the repo already contains fallback content not visible live. |
| React route implementation | Tests rendered uniqueness and internal links. |
| Sitemap/robots/netlify redirects | Tests discovery plumbing. |
| Official Google Search docs | Keeps the experiment away from sitemap/schema myths and keyword stuffing. |
| Local academy pages | Shows the local proof density Auris is being compared against. |
| Marketplace pages | Shows price/proof pressure and why generic route copy is weak. |
| Work-English competitor pages | Tests whether business route copy has enough specific moments. |
| Community/professional pain language | Checks whether route copy should focus on freezing/confidence rather than broad grammar. |

Chosen sources:

- live route/header/static audit
- local GSC access check
- route/source code inspection
- official Google Search docs
- local academy/marketplace proof examples

## Local Evidence

| Artifact | Signal | Supports | Weakens / Caveat |
| --- | --- | --- | --- |
| `seo-indexing-diagnostics.md` | Cycle 17 already diagnosed discovery as clean and usefulness/static fallback as weak. | H003, H020 | Needs a sharper "do it or stop revisiting" packet. |
| `search-indexing-refresh-cycle36.md` | Cycle 36 added static internal-link count and GSC access caveat. | H020 | No public change has happened since, so repeating GSC would be low-value. |
| `research-roadmap.md` | Packet B and Packet AL already point to static fallback/uniqueness, not new pages. | RQ002 | Roadmap needed a current Cycle 45 packet. |
| `hypotheses.md` | H003, H007 and H020 already say route quality/uniqueness/priority is the issue. | No new landing pages. | Needs Cycle 45 confirmation and stop condition. |
| `src/App.jsx` | Route-aware SEO title/description/canonical are set for Talk/local/business. | No basic metadata gap. | SPA page view still fires, but not the indexing question. |
| `src/components/SeoLandingPage.jsx` | Rendered local/business pages are useful, visual and on-brand, with reviews and CTAs. | P1 can be small. | Local/business share a structure and could use one route-specific comparison block each. |
| `src/components/TalkTheTalk.jsx` | Tool completion has CTA for personal feedback and trial booking. | Talk works as lead magnet. | Public route still does not have standalone explanatory content. |
| `Navbar.jsx` and `Footer.jsx` | Rendered links to route pages exist through normal `<a href>`. | Discovery via rendered DOM is okay. | Static route fallbacks expose no internal links. |
| `talkthetalk/index.html` | Static fallback is 29 words, no links. | Dedicated route exists. | Too thin for standalone value. |
| `clases-ingles-castelldefels/index.html` | Static fallback is 38 words, no links. | Dedicated local page exists. | Does not answer personal-vs-academy/marketplace proof. |
| `ingles-empresas-castelldefels/index.html` | Static fallback is 36 words, no links. | Dedicated business page exists. | Does not explain work moments or follow-up enough. |
| `public/sitemap.xml`, `public/robots.txt`, `netlify.toml` | Sitemap lists four routes; robots allows all; exact redirects exist. | Not a discovery plumbing problem. | Re-submission alone is not a fix. |
| Live homepage/static routes | Live route output matches the thin/static-isolated diagnosis. | Finding is still current. | Does not prove Google will index after patch. |
| Teacher platform docs/source from prior cycles | Portal/follow-up claims are real enough for local/business copy. | Use continuity proof. | Do not mention unbuilt Talk reflection or Next 15. |

## Data / API Pass

Live route checks on 2026-05-23:

| URL | HTTP | Content Type | Canonical | Robots | Schema Count |
| --- | ---: | --- | --- | --- | ---: |
| `/` | 200 | HTML | `https://englishwithauris.com/` | `index,follow` | 2 |
| `/talkthetalk` | 200 | HTML | `https://englishwithauris.com/talkthetalk` | `index,follow` | 1 |
| `/clases-ingles-castelldefels` | 200 | HTML | `https://englishwithauris.com/clases-ingles-castelldefels` | `index,follow` | 1 |
| `/ingles-empresas-castelldefels` | 200 | HTML | `https://englishwithauris.com/ingles-empresas-castelldefels` | `index,follow` | 1 |
| `/sitemap.xml` | 200 | XML | n/a | n/a | n/a |
| `/robots.txt` | 200 | text/plain | n/a | n/a | n/a |

Search Console access attempt:

- Current local `gcloud` token could call the webmasters endpoint, but `webmasters/v3/sites` returned `siteCount: 0`.
- This matches Cycle 36: do not treat the empty response as zero search data.
- Last trusted API-backed GSC baseline remains Cycle 16:
  - 28 days: 1 click / 169 impressions, homepage only
  - 90 days: 6 clicks / 306 impressions, homepage only
  - 180 days: 18 clicks / 651 impressions, homepage only
  - homepage indexed; Talk/local crawled not indexed; business discovered not indexed

## External Evidence

| Source | Signal | Supports | Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Google JavaScript SEO basics, https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics | Google can render JavaScript and index rendered HTML, but app-shell pages may need rendering before content is visible; pre-rendering/static content remains useful for users and crawlers. | Static fallback patch as robustness. | Panic that React pages cannot index. | High |
| Google crawlable links docs, https://developers.google.com/search/docs/crawling-indexing/links-crawlable | Links should be real anchors with meaningful text. Rendered links pass this; static route fallbacks do not expose links. | Add static internal links. | Discovery-only panic. | High |
| Google sitemap docs, https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap | Sitemaps help Google discover URLs but do not guarantee crawling/indexing. | Do not resubmit sitemap as the main fix. | Sitemap-as-solution. | High |
| Google canonical docs, https://developers.google.com/search/docs/crawling-indexing/canonicalization | Canonical signals help identify preferred URLs, but Google can choose differently and canonicals do not prove uniqueness. | Self-canonical is not enough. | Canonical-only fixes. | High |
| Google URL Inspection docs, https://support.google.com/webmasters/answer/9012289?hl=en | URL Inspection gives indexed-version and live-test details, but live success does not check all conditions. | Use URL Inspection after any patch. | Manual `site:` checks as full truth. | High |
| Google Page indexing report help, https://support.google.com/webmasters/answer/7440203?hl=en | Indexing status reflects crawl/process/index stages; not every live URL is in the index. | Preserve GSC as truth layer. | `200` as index proof. | High |
| Google SEO Starter Guide, https://developers.google.com/search/docs/fundamentals/seo-starter-guide | Helpful, reliable, people-first content and unique titles matter more than mechanical SEO. | Write for buyers first. | Keyword stuffing. | High |
| Google helpful content guidance, https://developers.google.com/search/docs/fundamentals/creating-helpful-content | Search systems prioritize content made for people, not search-first manipulation. | Keep non-academy tone. | Giant SEO pages. | High |
| Kilkenny Learning Centre, https://kilkennylc.com/ | Local academy proof is dense: native qualified teachers, speaking focus, 2,000+ students, Business English, small groups. | Auris must answer the personal alternative clearly. | Generic local class page. | High |
| Castle Languages, https://castlelanguages.cat/ | Competitor shows 14+ years, Cambridge official prep, multiple languages, group/private/company courses. | Auris should not mimic scale; he needs direct personal proof. | Academy-style positioning. | High |
| Kilkenny courses page, https://kilkennylc.com/cursos-de-ingles-clases-de-ingles-academia-de-ingles-castelldefels/ | Course page lists native teachers, very small groups, 500+ students and company/private classes. | Route-specific proof density matters. | A 38-word local fallback. | High |
| Superprof Castelldefels English category, https://www.superprof.es/clases/ingles/castelldefels/ | Local private-class search context includes many lower-price tutor alternatives. | Local page must differentiate before price comparison. | Marketplace copy as brand model. | High |
| Superprof Business English Barcelona, https://www.superprof.es/clases/business-english/barcelona/ | Business-English demand exists, but category averages are much lower and claims are crowded. | Business route needs specific work-moment proof. | Broad business-English SEO page. | High |

## Falsification

### H003: More Landing Pages Alone Will Not Solve Acquisition

Result: strengthened.

Evidence:

- The three non-homepage route fallbacks are still thin and static-isolated.
- Local competitors expose denser proof than a generic local/business route.
- Prior GSC rows are homepage-only.

What would weaken it:

- A route-specific page starts getting non-brand impressions/clicks after a patch.
- One organic inquiry says they found the local/business/Talk route and booked.

### H020: The Indexing Gap Is Quality/Uniqueness/Priority, Not Discovery

Result: strengthened.

Evidence:

- Routes, sitemap, robots, redirects, canonicals and metadata are all healthy.
- Search Console access is still blocked, but live checks do not reveal a technical noindex/canonical failure.
- Static fallback content/link quality is the same stable weakness as Cycle 36.

What would weaken it:

- Restored URL Inspection reports a specific technical/canonical issue.
- A static/uniqueness patch fails after 14-28 days while off-page/profile links create impressions without content changes, making off-page priority the bigger factor.

### H007: Talk Is A Lead Magnet, Not SEO-First

Result: strengthened.

Evidence:

- Talk has useful interactive product value and completion CTA, but only 29 fallback words and no internal links.
- The public route still explains the tool less than it lets users use it.

What would weaken it:

- Talk gets organic query rows around speaking practice after a fallback/method bridge patch.
- Users complete Talk from organic search and then book, with `source_confidence` and `talk_trial_click` tied to a real lead.

### Favored Idea Weakened

Favored idea: `If we add richer static fallback copy, Google will index the pages.`

Refinement: the patch is a sensible quality experiment, not a guarantee. Google can render JavaScript, and page inclusion may still depend on prominence, external/profile links, site history and query demand.

Cheaper alternative that could beat it:

Run the owner-measured GBP review-confidence action to the already indexed homepage once Review Truth and Day 0 are captured. That is still likely faster for leads than waiting for new page indexation.

## Implementation-Ready Experiment

Do not implement without explicit approval. If Auris asks for SEO/site work, do this small patch only.

### P0: Static Fallback Patch

Patch:

- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`

Rules:

- 170-260 words each.
- One H1.
- Two short paragraphs.
- 3-5 bullets.
- 2-3 static links.
- No more town pages.
- No keyword repetition.
- No static review-count copy.
- No self-serving review schema.

Local page fallback copy direction:

```text
Clases particulares de ingles en Castelldefels, Gava y Viladecans

I am Auris, a bilingual English teacher raised in Ireland. I work mainly online, with in-person classes around Castelldefels when the schedule and location genuinely fit. The class is direct and personal: one teacher, practical conversation, useful correction and a steady rhythm between lessons.

This is for Spanish speakers who understand more English than they can comfortably use. We work on the moments that actually block you: translating too much, freezing when you speak, pronunciation rhythm, practical grammar and confidence in real situations.

- Private and small-group classes
- Online first, local when it fits
- Conversation, pronunciation, Cambridge, interviews or English for work
- Vocabulary and materials organised in the student portal

Start from the homepage, try Talk the Talk, or book a free trial class.
```

Business page fallback copy direction:

```text
Ingles para profesionales, autonomos y pequenos equipos

I help professionals use English more clearly in real work moments: meetings, presentations, interviews, client calls, demos, updates and day-to-day international communication. The offer is personal and practical, not a corporate training machine.

In class we can take a real situation, practise the language and rhythm, correct the Spanish-to-English patterns that slow you down, and save useful phrases for review between sessions. I am a registered autonomo in Spain and can issue invoices with NIF when needed.

- Practical English for work situations
- Private classes or small-team support
- Online first, local near Castelldefels when useful
- Correction, saved phrases and portal review between sessions

See private classes, try Talk the Talk, or ask about professional English.
```

Talk fallback copy direction:

```text
Talk the Talk: free English speaking practice

Talk the Talk gives you short prompts so you can practise speaking out loud before the real moment arrives. It is useful when you know English in your head but freeze, translate too much or lose confidence when you have to speak.

Use it for repetitions. Use class for feedback, correction and diagnosis. If a prompt feels difficult, that is useful information: it shows what we can practise together.

Try prompts such as:

- explain a work problem clearly
- answer an interview question
- describe a recent decision
- tell a short story naturally

Return to English with Auris, see private classes, or book a free trial if you want personal feedback.
```

### P1: Rendered Route-Specific Blocks

Only after P0 or if editing React anyway:

| Route | Block | Purpose |
| --- | --- | --- |
| Local | `Why choose a private teacher instead of another academy?` | Answer direct teacher vs academy/marketplace comparison. |
| Business | `The Work-English Confidence Loop` | Make work English concrete without launching a separate product. |
| Talk | `Use the tool for reps; use class for diagnosis` | Position AI/tool-era practice as bridge to Auris. |

### P2: Measurement

Before deploy:

- record static word/link counts,
- preserve Cycle 16 as last trusted GSC baseline,
- note current GSC access status.

After deploy:

1. Verify route 200/canonical/robots/schema/static links.
2. Run build and visual QA if React changed.
3. Use URL Inspection once for each changed route if GSC access exists.
4. Wait 14-28 days before judging indexing unless GSC updates sooner.
5. Judge by page-level GSC rows, not manual Google searches.

## Decision Rule

| Situation | Recommendation |
| --- | --- |
| Auris asks for website/SEO work | Do P0 static fallback patch first. |
| Auris asks for public acquisition now | Use GBP/reviews/homepage before SEO routes. |
| Price patch is approved | Apply Cycle 44 price-proof patch first if sending paid/premium traffic to pricing. |
| GSC access is restored | Pull 28/90/180 page/query rows before editing. |
| No approval and no data arrives | Do not keep re-diagnosing the same SEO issue next cycle. Rotate to student-platform retention proof or first lead-source row. |

## Next-Cycle Packet

Packet AT: Static Route Trust Patch.

If implementation is approved:

1. Open this file, `seo-indexing-diagnostics.md`, and:
   - `talkthetalk/index.html`
   - `clases-ingles-castelldefels/index.html`
   - `ingles-empresas-castelldefels/index.html`
2. Apply P0 only.
3. Run build.
4. Recount static words/links.
5. If deployed later, inspect URLs once and update H003/H007/H020.

If GSC access is restored before implementation:

1. Pull 28/90/180 page/query windows.
2. Run URL Inspection for homepage, Talk, local and business.
3. Update `seo-indexing-diagnostics.md`, H002/H003/H020 and the roadmap.

If no implementation approval and no GSC access arrives:

1. Do not repeat this route diagnosis.
2. Rotate to student-platform retention proof or owner/lead evidence.
3. Keep Packet AT ready.

