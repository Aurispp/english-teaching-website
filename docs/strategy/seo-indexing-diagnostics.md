# SEO Indexing Diagnostics

Created: 2026-05-22 Cycle 17
Last updated: 2026-05-23 Cycle 45

Purpose: diagnose why `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, and `/talkthetalk` are not indexed yet, without turning the site into keyword-stuffed academy copy.

## Primary Decision

The new routes look discoverable and technically crawlable. The gap is more likely indexing priority, uniqueness, and proof depth than a sitemap/robots failure.

Do not create more local pages yet. The next useful site change, if Auris asks for implementation, is a small uniqueness/proof pass on the existing local, business, and Talk pages plus stronger static HTML fallback content. Keep GBP as the near-term acquisition test because the homepage is indexed and Search Console is still tiny.

## Source Discovery

For this question, the best evidence should live in:

| Source Type | Why It Matters | Signal This Cycle |
| --- | --- | --- |
| URL Inspection and Search Console | Separates discovery/crawl/indexing from ranking and demand. | Fresh Cycle 16 data: homepage indexed; Talk/local crawled not indexed; business discovered not crawled. |
| Live static HTML and metadata | Shows what a crawler sees before React renders. | High: route metadata exists, but body fallback is thin. |
| Sitemap, robots, and redirects | Tests whether Google can discover the URLs. | High: clean sitemap, open robots, exact Netlify redirects. |
| React route implementation | Checks whether rendered pages are actually distinct and useful. | Medium-high: rendered content is useful and personal, but local/business share a template. |
| Official Google Search docs | Prevents fake SEO fixes like resubmitting or schema-only changes. | High: useful content, crawlable links, JS rendering, URL Inspection caveats. |
| Local academy competitors | Shows the local comparison set and what unique proof Auris needs. | High: academies sell scale, native teams, Cambridge, kids, groups and companies. |
| Marketplace pages | Shows price anchors and profile proof norms. | High: private/business English demand exists but lower anchors are common. |
| Professional/business-English competitors | Tests if "meetings and presentations" is distinctive enough. | Medium-high: it is real demand but crowded. |
| Community/professional pain language | Tests whether Talk/business copy should emphasize confidence at work. | Medium: useful pain language, not local buying proof. |

## Data And Local Evidence

Search Console and URL Inspection were not rerun this cycle because Cycle 16 checked them within the same day and the process rule says not to rerun broad Search Console/Inspection hourly unless a public change happened.

Fresh Cycle 16 index snapshot:

| URL | Status | Last Crawl | Interpretation |
| --- | --- | --- | --- |
| `/` | Submitted and indexed | 2026-05-22 | Use homepage as the first GBP destination. |
| `/talkthetalk` | Crawled - currently not indexed | 2026-03-01 | Treat as a tool/social asset, not as SEO proof yet. |
| `/clases-ingles-castelldefels` | Crawled - currently not indexed | 2026-05-21 | Discovery works; page needs stronger unique value/proof or more prominence. |
| `/ingles-empresas-castelldefels` | Discovered - currently not indexed | none | Google knows it exists but has not prioritized a crawl yet. |

Search Console performance ending 2026-05-21:

| Window | Pages With Rows | Clicks | Impressions | Avg Position |
| --- | ---: | ---: | ---: | ---: |
| 28 days | homepage only | 1 | 169 | 10.25 |
| 90 days | homepage only | 6 | 306 | 8.83 |
| 180 days | homepage only | 18 | 651 | 8.14 |

Live/static route checks on 2026-05-22:

| Route | HTTP | Canonical | Schema Count | Static Body Words | Main Finding |
| --- | ---: | --- | ---: | ---: | --- |
| `/` | 200 | `/` | 2 | 0 | Homepage metadata is good, but live static body is empty before React. |
| `/talkthetalk` | 200 | `/talkthetalk` | 1 | 29 | Tool has metadata/schema, but static body is very thin. |
| `/clases-ingles-castelldefels` | 200 | `/clases-ingles-castelldefels` | 1 | 38 | Static fallback says the basics but not enough proof or unique usefulness. |
| `/ingles-empresas-castelldefels` | 200 | `/ingles-empresas-castelldefels` | 1 | 36 | Static fallback is thin and business specificity is still broad. |

Local artifacts inspected:

- `docs/strategy/research-log.md`
- `docs/strategy/research-roadmap.md`
- `docs/strategy/hypotheses.md`
- `docs/strategy/market-intelligence.md`
- `docs/strategy/gbp-week-one-execution-pack.md`
- `docs/strategy/measurement-plan.md`
- `docs/strategy/automation-research-loop.md`
- `src/App.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `index.html`
- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `public/sitemap.xml`
- `public/robots.txt`
- `public/_redirects`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py`

Technical interpretation:

- The exact static routes exist and return 200 through Netlify redirects.
- Robots allows crawling and the sitemap includes all four public routes.
- The navbar and footer contain normal `<a href>` links to local, business and Talk routes once React renders.
- The route HTML has canonical tags, alternate links, descriptions, robots index/follow, and basic schema.
- React sets route-specific titles/descriptions/canonicals and renders useful page content.
- The local and business rendered pages share a component and structure; their visible content is true and personal, but they may not yet look important/unique enough relative to the homepage and local competitors.
- Static body content is the weak technical-quality layer. Google can render JavaScript, but the initial HTML fallback is too thin to be reassuring if rendering is delayed or if another crawler/social system evaluates the page without React.

## External Evidence

| Source | URL | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Google JavaScript SEO basics | https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics | Google can render JS and use rendered HTML for indexing, but pre-rendering/static HTML is still recommended for speed and crawler robustness. | Treating the React app shell as automatically ideal. | High |
| Google link best practices | https://developers.google.com/search/docs/crawling-indexing/links-crawlable | Links should be real `<a href>` links; Auris's rendered nav/footer links pass this, but static fallbacks do not expose much internal navigation. | Discovery panic; the rendered links are not broken. | High |
| Google SEO starter guide | https://developers.google.com/search/docs/fundamentals/seo-starter-guide | Unique, useful, people-first content and clear titles/snippets matter more than mechanical SEO tweaks. | Keyword stuffing and page multiplication. | High |
| Google helpful content guide | https://developers.google.com/search/docs/fundamentals/creating-helpful-content | SEO is useful when applied to people-first content, not search-first content. | Rewriting Auris as an academy or stuffing `clases particulares` everywhere. | High |
| Search Console page indexing help | https://support.google.com/webmasters/answer/7440203?hl=en-uk | URL Inspection and crawl dates matter; live tests do not cover every canonical/duplicate condition. | Assuming "live URL is fine" means "it should already be indexed." | High |
| Castle Languages | https://castlelanguages.cat/ | Local academy pages have lots of breadth: Cambridge, companies, groups, school support, 14 years, hundreds of students. | Auris competing by sounding bigger or more academy-like. | High |
| Kilkenny Learning Centre | https://kilkennylc.com/ | Local competitors emphasize native teachers, adults, companies, private classes and 2,000+ students. | Generic "native teacher/private classes" as enough differentiation. | High |
| Janet's classes page | https://janets.es/clases-de-ingles/ | Competitors use specific business situations: meetings, emails, presentations, level tests and follow-up. | A thin business page that only says "business English." | High |
| Superprof business English Castelldefels | https://www.superprof.es/clases/business-english/castelldefels/ | There is marketplace demand for business English locally, but price anchors around 18 EUR/h and many 10-30 EUR/h options are visible. | Using marketplace positioning as the premium north star. | High |
| Superprof profile example | https://www.superprof.es/business-english-aeronautico-logistica-adquiere-fluidez-confianza-speaking-necesitas-para-crecer-laboralmente.html | Strong reviews praise preparation, follow-up, goals and business/technical specificity. | Generic professional-English copy without proof. | Medium-high |
| GO Ingles | https://www.go-ingles.com/ | Business-English proof often comes from testimonials naming roles, adaptation, organisation and next-class preparation. | Corporate page as only about FUNDAE or native-teacher claims. | Medium-high |
| English for Business | https://www.englishforbusiness.es/ | Corporate providers lead with in-company, specialized teachers, FUNDAE and multi-language breadth. | Auris trying to win procurement-heavy corporate training first. | Medium |
| Reddit TEFL freelancing Spain thread | https://www.reddit.com/r/TEFL/comments/12w5xhj/freelancing_aut%C3%B3nomo_in_spain_tips_for_finding/ | Marketplaces can help find private classes but may not produce consistent, well-paid demand alone. | Marketplace-first growth strategy. | Medium |
| Reddit Barcelona work-confidence thread | https://www.reddit.com/r/Barcelona/comments/153pz43/advanced_spanish_while_working/ | Work-language anxiety often sounds like "I can get by, but I am not confident in meetings." | Accent/perfection as the main hook. | Medium |

## Diagnosis

### What Is Not Broken

- Not a robots issue: `public/robots.txt` allows all.
- Not a sitemap issue: sitemap was submitted/downloaded with 0 errors/warnings in Cycle 16.
- Not a missing-route issue: all public routes return 200.
- Not a missing-canonical issue: each route has a self-canonical.
- Not a missing-metadata issue: each route has a relevant title and description.
- Not a total internal-link issue: rendered navbar/footer expose crawlable links.

### What Is Probably Weak

1. Static HTML is thin.
   - Homepage has no visible static body in the live HTML.
   - Talk/local/business route fallbacks have only 29-38 words.
   - Google can render JS, but the static fallback is not a strong content signal.

2. Local and business pages need more route-specific proof.
   - The rendered pages are true and on-brand, but still share a generic structure.
   - The local page should answer "why Auris instead of an academy/private marketplace tutor?"
   - The business page should answer "which work situations and what follow-up system?"

3. Talk the Talk is currently a tool overlay more than a standalone indexed document.
   - It is useful, but its current static and rendered framing does not yet teach Google or a skeptical visitor enough about why this tool exists, who it is for, and how it connects to Auris's method.

4. Off-page/profile priority is still low.
   - The homepage has all GSC rows.
   - GBP/reviews are stronger public proof than the new pages right now.
   - A single internal page with little external/profile activity may stay crawled or discovered but not indexed.

## Implementation-Ready Patch Plan

Do not implement automatically. This is the ready plan if Auris asks for site changes.

### P0: Static Fallback Upgrade

Goal: make each static route useful even before React renders.

Add 150-250 words of concise fallback copy to:

- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `talkthetalk/index.html`

Each fallback should include:

- A real H1.
- 2-3 short paragraphs.
- 3-5 scannable bullets.
- Internal links to homepage, contact, and one related route.
- No heavy keyword repetition.

Suggested local fallback copy direction:

- "Private English classes around Castelldefels with one teacher, not a rotating academy team."
- "Online as the main rhythm, local/in-person only when it genuinely fits."
- "For Spanish speakers who understand more than they can use confidently."
- "Conversation, pronunciation, Cambridge/interview/work support, and organised review in the portal."

Suggested business fallback copy direction:

- "English for meetings, presentations, interviews, client calls and day-to-day work."
- "For professionals, autonomos and small teams who want direct teacher support."
- "Invoice with NIF available."
- "The value is not a corporate training machine; it is practical preparation, correction and follow-up."

Suggested Talk fallback copy direction:

- "A free speaking prompt tool for practising out loud when you know English but freeze in real situations."
- "Include 3 example prompts: meeting update, interview story, client problem."
- "Explain that it is not a replacement for feedback; it is a low-pressure practice bridge."
- "CTA to book if the user wants personal correction."

### P1: Rendered Page Uniqueness Blocks

Add one focused block to the local page:

Title: `Why choose a private teacher instead of another academy?`

Bullets:

- You work directly with me, not a rotating team.
- I understand the Spanish-speaker blocks: translating too much, freezing, pronunciation rhythm, and overthinking grammar.
- The class can stay practical: conversation, work situations, Cambridge/interview prep when needed.
- The portal keeps useful vocabulary and review organised between sessions.
- Local is available when it fits, but online keeps the rhythm consistent.

Add one focused block to the business page:

Title: `The Work-English Confidence Loop`

Bullets:

- Bring a real situation: meeting, presentation, interview, client call, email thread, sales/demo conversation.
- Practise the language and rhythm in class.
- Get correction on the patterns that make you hesitate.
- Save useful phrases/vocabulary for review.
- Reuse it in the next real situation and bring the result back to class.

Add one focused block to Talk:

Title: `Practise the moment before it happens`

Content:

- 3 prompt examples.
- A one-line method bridge: "Use the tool for reps; use class for diagnosis and feedback."
- A CTA after completion that says "Bring what felt difficult to class" or "Book a trial if you want feedback."

### P2: Internal Link And Destination Rules

- Keep homepage as first GBP destination while only it is indexed.
- Use Talk as a LinkedIn/short-form action only if the post is about practice/freezing.
- Use `/clases-ingles-castelldefels` only after the static/uniqueness pass or once it starts showing impressions.
- Use `/ingles-empresas-castelldefels` only after it is crawled or after the business page has a stronger proof block.

### P3: Reinspection And Waiting Window

After any public deploy:

1. Submit sitemap only if sitemap content changed.
2. Use URL Inspection once for each changed route.
3. Record the deploy date in this file and `research-log.md`.
4. Wait at least 7-14 days before drawing conclusions, unless a route becomes indexed sooner.
5. Judge by page-level impressions and URL Inspection status, not by manual Google searches.

## Falsification

Favored idea tested: "If we make the pages discoverable, Google should index them quickly."

Weakened:

- The local page is already crawled and still not indexed.
- The sitemap is clean.
- Routes return 200 and have basic metadata/canonicals.
- Therefore discovery alone is not the full answer.

Alternative explanation strengthened:

- Google may be deprioritizing pages that look thin or not sufficiently distinct from the homepage/competitor content.
- Business page has lower priority because it is only discovered, likely needing more internal/profile prominence or time.
- Talk is useful as a tool but not yet a strong standalone search document.

Second hypothesis tested: "Business English should get its own SEO page now."

Refined:

- The page is strategically valid, but it should not be the first campaign destination while it is discovered/not indexed and still broad.
- Business-English demand is real but crowded; the page needs the Work-English Confidence Loop and proof before more traffic is pushed to it.

## What Not To Do Yet

- Do not create pages for every nearby town.
- Do not stuff `clases particulares`, `academia`, `business English`, or city names into every section.
- Do not treat schema as the fix.
- Do not resubmit or reinspect hourly.
- Do not route first GBP traffic to non-indexed pages.
- Do not turn Auris into academy-style messaging just because academy terms get impressions.
- Do not expect Talk SEO traffic before the tool has a stronger standalone page and measured social/GBP use.

## Strongest Next Move

Keep the acquisition sprint GBP-first, using the indexed homepage. If Auris asks for site work, implement the P0/P1 uniqueness patch before creating any new pages.

## Decision Rules

Strengthen the indexing-improvement path if, after the patch and a fresh crawl:

- `/clases-ingles-castelldefels` or `/ingles-empresas-castelldefels` gains impressions in GSC.
- URL Inspection moves from not indexed to indexed.
- Leads mention local/private/business page content specifically.

Weaken it if:

- GBP/profile actions create leads faster.
- The pages remain not indexed after a stronger uniqueness pass and no external/profile signals point to them.
- Leads continue to come through brand/homepage/referrals rather than route-specific search.

## Next-Cycle Packet

Recommended next theme if no owner GBP metrics arrive: LinkedIn/profile audit or marketplace price alignment. Do not repeat this indexing diagnostic until one of these changes happens:

- public page changes are deployed,
- Google recrawls one of the non-indexed routes,
- Auris publishes GBP/LinkedIn content pointing to a route,
- GSC page rows appear for Talk/local/business.

If site implementation is approved, inspect:

- `src/components/SeoLandingPage.jsx`
- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `src/components/TalkTheTalk.jsx`
- `src/App.jsx`
- rendered mobile/desktop pages after build

Then run:

- build verification,
- live/static metadata check,
- browser screenshot QA if visual blocks change,
- URL Inspection after deploy only if Auris asks to deploy.

## Cycle 36 Refresh

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/search-indexing-refresh-cycle36.md`

Decision:

- The indexing recommendation is unchanged: do not create more local pages yet.
- Search Console could not be refreshed in Cycle 36 because the current local Google token does not expose Search Console sites and cannot mint a `webmasters.readonly` scoped token. The last trusted API-backed GSC baseline remains Cycle 16.
- Live routes still return 200 with self-canonicals and `index,follow`.
- The strongest route weakness is now more precise: static fallback content is still thin, and the dedicated route fallbacks expose zero internal links before React renders.
- Public Google review proof remains stronger than route-specific SEO proof: the review endpoint still returns `5.0 / 16`.

Refined patch rule:

If Auris asks for SEO/site implementation, patch existing pages only:

1. Add 180-260 words of useful static fallback copy to Talk, local, and business pages.
2. Add 2-3 static internal links per fallback.
3. Add one rendered uniqueness block per route:
   - local: private teacher vs academy,
   - business: Work-English Confidence Loop,
   - Talk: practice bridge before personal feedback.
4. Restore or use owner-side Search Console before judging the result.

Do not interpret the patch as guaranteed indexing. It is a low-risk quality experiment that should be judged after URL Inspection and 14-28 days of page-level GSC data.

## Cycle 45 Refresh

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/static-route-trust-experiment-cycle45.md`

Decision:

- The diagnosis is now stable enough to stop re-running it every cycle.
- Live route plumbing still looks healthy: homepage, Talk, local and business routes return 200 with self-canonicals and `index,follow`; sitemap and robots are reachable.
- The current local Search Console token still returns `siteCount: 0`, so preserve the Cycle 16 GSC baseline rather than treating the empty response as search-data truth.
- Static fallback weakness is unchanged: homepage has 0 static body words, while Talk/local/business have only 29/38/36 words and no static internal links.
- The useful next move, if Auris approves site work, is P0 static fallback copy plus links on the three existing route HTML files. It is not a new town-page set, sitemap resubmission, schema shortcut, or academy-style SEO rewrite.

Cycle 45 do-or-rotate rule:

1. If website/SEO implementation is approved, apply only the P0 static fallback patch from `static-route-trust-experiment-cycle45.md`.
2. If GSC access is restored first, pull 28/90/180 day page/query rows and URL Inspection for homepage, Talk, local and business before editing.
3. If neither happens, do not repeat this indexing diagnostic in the next cycle. Rotate to owner/lead evidence, review/GBP proof, or student-platform retention.
