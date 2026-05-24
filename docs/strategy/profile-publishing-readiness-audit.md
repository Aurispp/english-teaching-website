# Profile And Publishing Readiness Audit

Created: 2026-05-22 Cycle 09

Purpose: decide what must be checked or adjusted before Auris publishes the GBP/LinkedIn proof sprint from `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-linkedin-proof-sprint.md`.

## Primary Research Question

Before publishing the proof sprint, what do people actually see on Auris's Google Business Profile, LinkedIn, marketplaces, and website destinations?

Working answer: publish the first sprint only after a light readiness pass. The drafts are usable, but the public profile layer has three weak spots: no visible social-profile links on the website, marketplace prices below the website price, and limited read access to GBP performance/GA4 event data.

## Source Discovery

The best evidence for this question lives in profile surfaces, not abstract marketing articles.

| Source Type | What It Can Prove | Result This Cycle |
| --- | --- | --- |
| Live website links and metadata | Whether visitors can find social/proof routes and whether UTM URLs work. | High-signal. |
| Search Console and URL Inspection | Whether destination pages are indexed/crawlable. | High-signal. |
| GTM/GA4 attempts | Whether the sprint can be measured automatically. | High-signal: GTM empty, GA4 still inaccessible. |
| Live Google reviews endpoint | Whether proof is fresh and available. | High-signal: 5.0/15, 5 returned review texts. |
| Superprof/Tusclases Auris profiles | Marketplace price/proof mismatch and buyer comparison context. | High-signal. |
| Auris LinkedIn public result | Profile discoverability and professional-channel baseline. | Medium-signal; direct page access blocked, search snippet visible. |
| Premium marketplace profiles | Whether 40 EUR/h can work and what proof is required. | High-signal for positioning. |
| Local directories/academy pages | What non-marketplace local competitors show. | Medium-high signal. |
| Instagram/TikTok/YouTube search | Whether public handles are discoverable. | Low-signal; no reliable Auris handle found. |
| GBP UI/export | Needed for true baseline. | Not accessible through current API layer. |

## Local And Live Readiness

| Surface | Evidence | Readiness Judgment | Action Before Publishing |
| --- | --- | --- | --- |
| Website external profile links | Live homepage HTML exposed no LinkedIn, Instagram, TikTok, Superprof or Tusclases links; only internal/site, fonts, schema and gtag links appeared in static HTML. | Weak for social/profile discovery. | Add social/profile links only after Auris confirms preferred public profiles; do not guess. |
| Sprint UTM URLs | All tested sprint URLs returned HTTP 200: homepage, `/talkthetalk`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`. | Ready. | Use the UTM registry as written. |
| Local page indexing | URL Inspection: `/clases-ingles-castelldefels` is crawled but not indexed; last crawl 2026-05-21. | Not ideal as first GBP destination. | Week 1 GBP should point to homepage or Talk; Week 2 can test the local page after indexing is rechecked. |
| Business page indexing | Cycle 10 URL Inspection: `/ingles-empresas-castelldefels` is discovered but currently not indexed. | Not ready as primary LinkedIn destination. | Use Talk or homepage for first LinkedIn post; use business page as secondary after discovery improves. |
| Google reviews endpoint | Live endpoint returned 5.0 rating, 15 reviews, 5 review texts. | Strong proof surface. | Use review-led GBP post first. |
| Website photos | Existing assets include teacher photo, class moments, online class screenshots, portal screenshots and Google Business Profile logo assets. | Enough for GBP/LinkedIn visuals. | Build a small shot list; prefer real face/class/portal images over stock-like graphics. |
| Contact/booking | Calendly, WhatsApp, email and form exist; contact clicks/forms are tracked. | Ready for inquiry capture. | Ask leads manually where they found Auris until attribution improves. |
| Measurement | GTM has 0 tags/triggers/variables; GA4 Admin API attempts failed due missing scopes. | Not enough for automatic channel truth. | Use manual ledger plus direct `gtag.js` events. |

## Data And API Baseline

Search Console through 2026-05-20:

- 28 days: homepage only, 1 click, 176 impressions, CTR 0.6%, average position 10.07.
- 90 days: homepage only, 6 clicks, 308 impressions, CTR 1.9%, average position 8.80.
- 180 days: homepage only, 18 clicks, 658 impressions, CTR 2.7%, average position 8.11.
- Lead-intent filters in the 180-day window:
  - `particulares`: one row, `clases de ingles particulares`, 1 impression, position 1.
  - `private`, `empresas`, `business`, `linkedin`, `talkthetalk`, `trial`, `reunion`, `meetings`: no rows.

URL Inspection:

- Homepage: submitted and indexed; last crawled 2026-05-21; canonical matches.
- `/talkthetalk`: crawled, currently not indexed; last crawled 2026-03-01.
- `/clases-ingles-castelldefels`: crawled, currently not indexed; last crawled 2026-05-21.
- `/ingles-empresas-castelldefels`: Cycle 10 update says discovered, currently not indexed.

Measurement access:

- Search Console read-only works.
- Tag Manager read-only works; container exists and default workspace has 0 tags, 0 triggers, 0 variables.
- URL Inspection works.
- GA4 Admin/Data read access is not available through current tokens; attempts returned insufficient-scope errors.
- GBP performance metrics were not accessible through the available API layer.

## Public Profile Evidence

| Profile/Surface | Evidence | Risk | Recommendation |
| --- | --- | --- | --- |
| Google Business Profile | Live reviews endpoint shows 5.0/15. Direct GBP performance metrics unavailable. | Strong public proof, weak performance baseline. | Use review-led post first; after publishing, manually record GBP views/searches/website clicks/calls/messages from the UI if possible. |
| LinkedIn personal profile | Public search result shows `Aurimas Purlys`, Castelldefels, 268 followers / 264 contacts, `English for Business Spain`, personal website, and recent activity/recommended posts. Direct page access returned LinkedIn blocking status. Source: https://es.linkedin.com/in/aurimas-purlys-534a1a27b | LinkedIn is viable as credibility, but actual distribution is unproven. | Treat first LinkedIn posts as professional credibility tests, not lead guarantees. |
| Superprof Auris | Cycle 10 recheck: profile lists Auris in Castelldefels, 5.0/7 reviews, 20 students, verified profile/contact, online/in-person/domicile options, 40 EUR/h main rate, 30 EUR/h online rate, first class free, and the headline "Master your English whilst having fun..." Source: https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html | Main price now aligns with website; online price is lower and headline is warm but less premium/professional than current strategy. | Treat Superprof as mostly aligned, but decide whether the 30 EUR/h online rate is intentional. Add proof-first profile copy if editing later. |
| Superprof Castelldefels list | Auris appears beside local teachers at lower rates in the surrounding list, while the profile itself now shows 40 EUR/h main and 30 EUR/h online. Source: https://www.superprof.es/clases/ingles/castelldefels/ | Price shoppers may still anchor below website 40 EUR/h. | Do not send premium website leads to marketplace unless price strategy is intentional. |
| Tusclases Auris | Profile/listing evidence shows Auris at 30 EUR/h, first class free, 4.9/15, verified, adults/companies among audiences, 11 years Barcelona/Ireland story and Spanish-speaker challenges. Sources: https://www.tusclasesparticulares.com/profesores/barcelona/master-your-english-whilst-having-fun-1629639 and https://www.tusclasesparticulares.com/domicilio/ingles-en-castelldefels.aspx | Strong proof and story, but public price mismatch repeats. | Profile can support trust, but not as the central premium destination. |
| Instagram/TikTok/YouTube | Search for `aurienglish`, `English with Auris`, and `englishwithauris` did not reveal a reliable public social handle. | Cannot tailor final channel plan to existing social proof yet. | Ask Auris or inspect logged-in/browser context later; do not assume handles. |

## Market And Competitor Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| Kilkenny directory profile | Local academies show many reviews, review replies, online adaptation, native teachers and children/adult/exam proof. Source: https://escuelasdeidiomas.com.es/es-es/i/1453-kilkenny-learning-centre-els-canyars-castelldefels/ | Any attempt by Auris to look like a small academy. | High |
| Apprentus Castelldefels | Local private marketplace includes 16-64 EUR listings; high prices exist but need a specific promise. Source: https://www.apprentus.es/ingles-lecciones/castelldefels/ | The idea that all local private lessons are cheap. | Medium-high |
| AmazingTalker Castelldefels | Large online marketplace profiles push huge review counts, customisation, confidence and bilingual claims. Source: https://www.amazingtalker.es/tutors/english?city=es_spain_l_hospitalet_de_llobregat_castelldefels | Generic "personalised/confidence" without proof. | Medium |
| Superprof AR | A 40 EUR/h business-English profile justifies price through tech-sector experience, interviews, meetings, presentations, structured ideas, presence and professional context. Source: https://www.superprof.es/preparacion-entrevistas-comunicacion-profesional-ingles-para-perfiles-tecnologicos-internacionales.html | 40 EUR/h as impossible in marketplaces. | High |
| Superprof Tim | A 35 EUR/h Barcelona profile with 74 reviews sells professional communication, clarity, confidence, company experience, executive language coaching and structured materials. Source: https://www.superprof.es/english-for-real-professional-communication-speak-the-way-you-think-clearly-confidently-effortlessly-results-guaranteed.html | Generic conversation classes at premium price. | High |
| Tusclases Julia | A 40 EUR/h profile justifies price with 20+ years, Michigan diplomas, US experience, personalised style and certificate support. Source: https://www.tusclasesparticulares.com/profesores/barcelona/clases-ingles-todos-niveles-edades-barcelona-centro-1326664 | Pricing only by local average. | Medium-high |
| Superprof Barcelona comprehension list | Many Barcelona English profiles are lower, but some 38-40 EUR/h profiles use confidence/native/proof framing. Source: https://www.superprof.es/clases/comprension-oral-ingles/barcelona/ | Hiding the premium price. | Medium |
| Superprof business-English pages | Business-English pages show 40-50 EUR/h examples when the offer is professional, executive, presentation/interview or sector-specific. Sources include search/opened Superprof business-English profiles. | Broad "business English" as enough. | High |

## Publishing Readiness Checklist

Complete before Post 1:

- Confirm which profile Auris wants LinkedIn posts to come from: personal profile or a page.
- Confirm whether the public LinkedIn headline/about section should mention `English with Auris`, `English for Business Spain`, or both.
- Decide whether Tusclases 30 EUR/h and Superprof 30 EUR/h online are legacy/channel prices or should be aligned to website 40 EUR/h.
- Reply to visible Google reviews if not already done.
- Choose one real teacher/class photo for GBP post 1.
- Choose one Talk the Talk or portal screenshot for LinkedIn/GBP post 2, with private data hidden.
- Use homepage or Talk UTM for Week 1; do not make the unknown business page the first LinkedIn destination.
- Keep a manual lead-source ledger open before publishing.
- If testing from the browser, accept analytics consent so events are more visible.

Do not block Post 1 on:

- Full GA4 API access.
- A perfect Instagram/TikTok plan.
- New landing page builds.
- More SEO pages.

## Final Week 1 Assets

### GBP Post 1: Confidence In Real Situations

Button: Learn more

Destination:

`https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_confidence_review`

Photo: friendly photo of Auris, real online-class setup, or class-material photo. Avoid using only a logo.

Draft:

`A lot of students come to class with the same feeling: they know more English than they can use when the moment arrives.`

`That is why confidence is such a central part of my classes. We work with real speaking practice, useful correction, pronunciation, and the patterns that often make Spanish speakers hesitate or translate too much.`

`The class is personal, and the follow-up is organised too, so useful vocabulary and practice do not disappear after the hour ends.`

Measurement:

- GBP website clicks/calls/messages.
- Contact clicks/forms on the website.
- Manual note: ask new inquiries if they came from Google/profile/reviews.

### LinkedIn Post 1: Meeting Answer Gets Smaller

Destination:

`https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`

Draft:

`You understand the meeting, but when someone asks for your opinion, your English gets smaller.`

`This happens to many Spanish-speaking professionals I work with. It does not always mean your level is low. Very often, you are translating, checking grammar, searching for the perfect word, and trying to sound professional all at the same time.`

`A useful exercise before a meeting: choose one real topic and answer out loud for 90 seconds. Do not aim for perfect English. Notice where you stop, simplify too much, or avoid the detail.`

`That pause is not a failure. It is class material.`

`I built Talk the Talk for short speaking prompts like this. Try one prompt, then bring the difficult part to class if you want personal feedback.`

Measurement:

- LinkedIn profile views, comments, DMs, link clicks.
- `talk_started`, `talk_completed`, `talk_trial_click` if visible later.
- Manual note: professional/local/budget-fit inquiry quality.

## Final Week 2 Assets

### GBP Post 2: Personal Alternative To An Academy

Button: Book or Learn more

Destination:

`https://englishwithauris.com/clases-ingles-castelldefels?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_02&utm_content=personal_private_classes`

Use only if URL inspection has improved or Auris accepts testing a crawled/not-indexed destination. Otherwise use homepage with the same UTM content.

Photo: in-person/local class moment, not stock classroom imagery.

Draft:

`If you are looking for clases particulares de ingles around Castelldefels, Gava or online, the important question is not only "academy or private teacher?"`

`The better question is: will the class adapt to how you actually speak, hesitate, translate and practise?`

`I work directly with students on practical conversation, pronunciation, useful grammar and confidence. The class is personal, but the follow-up is organised so what we practise comes back next time.`

Measurement:

- GBP website clicks/calls/messages.
- Search Console page impressions/crawl state later.
- Manual source and lead-quality note.

### LinkedIn Post 2: Business English Is Too Generic

Destination:

Use Talk first:

`https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_02&utm_content=business_english_too_generic`

Do not use the business page as the primary destination until discovery improves.

Draft:

`"Business English" is often too broad to be useful.`

`For one person it means client calls. For another, interviews. For another, presentations, clearer emails, or speaking up in meetings without sounding unsure.`

`That is why I prefer to start with the real situation, not the label. What do you need to say? Who are you speaking to? What happens when you hesitate? Which phrases are missing?`

`In a personal class or small group, those details matter. We can work on the exact moments where English costs you confidence, then keep the useful phrases and corrections organised for review between classes.`

Measurement:

- LinkedIn profile actions and DMs.
- Talk prompt engagement.
- Manual note: did the inquiry mention work, meetings, interviews, presentations, or price first?

## Photo And Screenshot Shot List

Priority:

1. Friendly, well-lit Auris face photo, landscape crop for GBP.
2. Real online teaching setup with no private student data visible.
3. In-person class moment already used on the site, cropped naturally.
4. Portal screenshot showing dashboard/flashcards/class notes, with names and student details hidden.
5. Talk the Talk prompt screenshot.
6. Simple review-theme graphic only if real photos are unavailable.

Avoid:

- Stock-looking classroom photos.
- Screenshots with student names, emails, faces or identifiable notes unless explicitly permitted.
- Text-heavy graphics that look like ads.
- Google review stars as fake schema/SEO bait.

## Measurement Setup Before Post 1

| Check | Status | Action |
| --- | --- | --- |
| UTM URLs return 200 | Ready | Use exact URLs above. |
| `talk_trial_click` measurable | Implemented, not verified in GA4 | Use manual ledger until GA4 read access exists. |
| Completed Calendly booking attribution from Talk | Not reliable | Treat Talk CTA click as endpoint. |
| GBP performance | UI/export needed | Manually record baseline before posting if possible. |
| LinkedIn metrics | Platform UI needed | Record profile views, DMs and link clicks manually. |
| Lead source | Manual | Ask each new lead: "Where did you find me?" |

## Falsification And Decision Rules

This cycle strengthens GBP/reviews, but weakens the idea that the sprint should be published blindly.

Evidence that would stop or change the sprint:

- Auris's LinkedIn profile headline/about does not match the teaching offer and he does not want to post from it.
- Public marketplace price mismatch creates confusion in inquiries.
- GBP has no photos/review replies/services visible enough to support the first post.
- Week 1 gets only price-shopping leads from marketplace-style buyers.

Cheaper alternative that could beat posting:

- Update GBP photos, services, review replies and profile fields first, then post once the profile is stronger.

Smallest practical test:

- Publish one GBP review-led post and one LinkedIn meeting-confidence post only, with ledger notes. Do not expand cadence until those two have evidence.

## Strongest Next Move

Do a profile-alignment pass before public posting:

1. Confirm LinkedIn profile/page and update headline/about if needed.
2. Decide marketplace price alignment.
3. Add or confirm GBP photos/replies/services.
4. Publish only the Week 1 GBP and LinkedIn assets.
5. Track every inquiry manually for two weeks.
