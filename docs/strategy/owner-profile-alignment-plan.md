# Owner Profile Alignment Plan

Created: 2026-05-22 Cycle 10

Purpose: decide what Auris should fix first in the owner-controlled profile layer before publishing the GBP/LinkedIn proof sprint.

## Primary Research Question

What should be fixed first: GBP profile assets, LinkedIn profile copy, marketplace price/copy, or website proof near price?

Working answer: fix the owned proof and profile consistency before expanding cadence. The first public sprint can still happen, but only as one GBP post and one LinkedIn post, both routed to owned pages and measured with a manual lead-source ledger.

## Source Discovery

For this question, the best evidence lives where a buyer compares trust and price:

| Source Type | Why It Matters | Signal Quality This Cycle |
| --- | --- | --- |
| Own website pricing/copy | Shows whether 40 EUR/h is justified before a visitor decides. | High |
| Google reviews endpoint | Gives real proof themes and bilingual review coverage. | High |
| Search Console and URL Inspection | Decides which URLs are safe to use in posts. | High |
| GBP official docs | Defines what can be measured and edited: services, photos, reviews, performance. | High |
| Auris Superprof/Tusclases profiles | Shows actual marketplace comparison and price anchors. | High |
| Premium marketplace profiles | Tests whether 35-50 EUR/h is plausible and what proof is required. | High |
| Local academy pages/reviews | Shows what academies win on: scale, native teachers, reviews, exam structure. | Medium-high |
| Public LinkedIn business-English posts/profiles | Shows professional pain language and positioning patterns. | Medium-high |
| Owner-side GBP/GA4 APIs | Needed for performance baseline. | Blocked by scope |
| Short-form handle search | Could prove social proof, but reliable handles were not found. | Low |

## Evidence Summary

| Evidence | What It Supports | What It Weakens | Action |
| --- | --- | --- | --- |
| GSC 180d still homepage-only: 18 clicks / 651 impressions; 90d 6 clicks / 306 impressions; 28d 1 click / 169 impressions. | GBP/profile proof and direct outreach can teach faster than waiting for SEO. | SEO-only sprint. | Use search as baseline; do not wait for pages to mature. |
| URL Inspection: homepage indexed; Talk and local pages crawled/not indexed; business page now discovered/not indexed. | Homepage and Talk are safest campaign destinations. | Sending first LinkedIn post to business page. | Route Week 1 to homepage and Talk only. |
| Live reviews endpoint returns 5.0/15 in es and en, with different visible review sets. | Review library can use 10 visible review texts/themes, not only the first 5. | Generic proof blocks. | Mine review themes by language and outcome. |
| Superprof Auris now shows 40 EUR/h main price, 30 EUR/h online, 5.0/7, 20 students, verified profile/contact. | 40 EUR/h is not out of place for Auris if proof is clear. | Earlier conclusion that all marketplaces show 30 EUR/h. | Treat mismatch as narrower: Tusclases and online-channel price. |
| Tusclases still shows 30 EUR/h in search/public snippet with 4.9/15 and verified profile. | Public comparison can still create a price-anchor issue. | Ignoring marketplace consistency. | Decide whether Tusclases is legacy/channel pricing or align it. |
| Premium profiles at 35-40 EUR/h use narrow professional outcomes, many reviews, sector context, structured materials, or strong credentials. | Auris can defend premium with his personal system and 11+ years with Spanish speakers. | "Private conversation class" as enough. | Put proof next to price and in profile summaries. |
| Janet's local pages/reviews show academy strengths: 181 reviews, official Cambridge, native team, kids/adults, company courses, review replies. | Auris should not try to look like a smaller academy. | Academy-style positioning. | Win on direct teacher relationship, adaptation, portal continuity and reviews. |
| LinkedIn business-English examples repeat meetings, presentations, confidence, overthinking, leadership voice, real workplace tasks. | LinkedIn content can fit Auris if personal/professional and concrete. | LinkedIn as a generic posting channel. | Use one work-confidence post as credibility test. |
| GBP/GA4 APIs still return permission denied with available tokens. | Manual owner-side metrics are required. | Automated attribution confidence. | Record baseline and ask every lead where they found Auris. |

## Fix Before Posting

1. Decide marketplace price policy.
   - Short-term: keep website at 40 EUR/h and do not lower it.
   - Superprof is mostly aligned now: 40 EUR/h main, 30 EUR/h online.
   - Tusclases remains the main mismatch at 30 EUR/h.
   - If 30 EUR/h stays, document it internally as marketplace/channel pricing and avoid sending premium GBP/LinkedIn traffic to marketplace pages.

2. Make the website price proof sharper.
   - The site already has portal/NIF/included copy, but the private-card headline is still generic.
   - The price card should say what the hour includes: live speaking, useful correction, materials, vocabulary captured for review, portal/flashcards/progress.

3. Prepare GBP owner-side proof.
   - Add or confirm a real face/class/online setup photo.
   - Confirm services include private English, local Castelldefels/Gava, online classes, professional English, meetings/presentations/interviews, and small groups where true.
   - Reply to visible reviews with short human responses that mention the student's actual outcome.

4. Prepare LinkedIn owner-side credibility.
   - Confirm whether Auris posts from personal LinkedIn or a page.
   - Align headline/about with English with Auris and the professional-confidence lane.
   - Do not rely on LinkedIn alone until profile views, DMs, link clicks, and inquiry quality are tracked.

5. Open a lead-source ledger before publishing.
   - Current API access can read GSC/URL Inspection but not GBP performance or GA4.
   - Every inquiry should get a manual note: source, channel, first thing they mention, need, budget fit, and next step.

## Nice Later

- Add confirmed social/profile links to the website footer once Auris chooses the public profiles.
- Add a small "what students often notice" proof block near pricing/homepage if implementation is requested later.
- Add one screenshot of the portal/Talk tool to GBP or LinkedIn, with all private data hidden.
- Reinspect `/clases-ingles-castelldefels` and `/ingles-empresas-castelldefels` before using them as primary post destinations.
- Request GA4 or GBP performance read access only when manual measurement becomes too slow.

## Ignore For Now

- Daily GBP posting as an attempted ranking hack.
- TikTok/Instagram-first growth.
- More local SEO pages before the current pages are indexed and differentiated.
- Sending high-trust leads to marketplace pages.
- Rebuilding the whole homepage before a smaller proof/pricing edit is tested.

## Marketplace Price Decision Memo

| Option | Upside | Risk | Verdict |
| --- | --- | --- | --- |
| Align every public price to 40 EUR/h | Clean premium story; less comparison friction. | Could reduce marketplace leads from price-sensitive students. | Best long-term if Auris wants premium-only positioning. |
| Keep 40 EUR/h website, 30 EUR/h selected marketplace/online channel | Preserves lower-friction marketplace demand. | Leads may compare and ask why prices differ. | Acceptable short-term only if intentional and not routed from premium channels. |
| Lower website price to match 30 EUR/h | Removes mismatch. | Gives away premium positioning and underprices portal/follow-up. | Not recommended. |
| Hide pricing on website | More inquiry flexibility. | Weakens trust and transparency. | Not recommended. |

Recommendation: keep website private classes at 40 EUR/h. Treat Superprof as mostly aligned but review the 30 EUR/h online detail. Decide whether Tusclases 30 EUR/h is legacy/channel pricing or should be raised. The stronger next implementation is not a discount; it is clearer proof beside the 40 EUR/h offer.

## Website Proof Copy Ready For Implementation

English:

`Private classes include more than the live hour: speaking practice with Auris, useful correction, materials adapted to your goals, vocabulary saved for review, and access to the student portal with flashcards and progress tracking.`

Spanish:

`Las clases particulares incluyen mas que la hora en directo: practica oral con Auris, correccion util, materiales adaptados a tus objetivos, vocabulario guardado para repasar y acceso al portal con tarjetas y seguimiento de progreso.`

Short price-card bullets:

- Real speaking practice and correction.
- Materials adapted to your goals.
- Vocabulary saved from class for review.
- Portal, flashcards and progress tracking.
- Invoice with NIF available for professionals/companies.

## LinkedIn Headline Options

1. `English coach for Spanish-speaking professionals | Meetings, presentations and confidence | English with Auris`
2. `Bilingual English teacher in Castelldefels and online | Practical English for work, confidence and real conversation`
3. `English with Auris | Personal English classes for Spanish speakers, adults and professionals`

## LinkedIn About Draft

`I help Spanish-speaking adults and professionals use English with more confidence in real situations: meetings, presentations, client calls, interviews, travel and everyday conversation.`

`I grew up in Ireland and have spent more than 11 years teaching English to Spanish speakers in Barcelona and online. My classes are practical and personal: we work on conversation, pronunciation, useful grammar, vocabulary and the moments where you hesitate or translate too much.`

`Between classes, I use the student portal I built to keep vocabulary, materials, flashcards and progress organised, so the work does not disappear after the hour ends.`

`I teach privately and in small groups, and I can issue invoices with NIF for professionals, freelancers and companies.`

## GBP Services Checklist

Suggested service entries or descriptions, using only what is true in the owner UI:

- Private English classes.
- Online English classes.
- English classes in Castelldefels / Gava / Baix Llobregat.
- English for professionals.
- Business English for meetings, presentations and interviews.
- Conversation and pronunciation practice.
- Small-group English classes.
- Cambridge/exam support only as secondary if still actively offered.

Google allows service businesses to add services, custom services, descriptions and prices where the editor is available, but custom services can be rejected for personal info, phone numbers, prices in the wrong field, rude words or gibberish.

## GBP Photo Checklist

Use real trust signals before graphics:

1. Clear friendly photo of Auris.
2. Online teaching setup, no private student data.
3. In-person/local class moment.
4. Portal screenshot with all names/details hidden.
5. Talk the Talk screenshot.
6. Material/class-note photo with no student-identifiable data.

Google's photo guidance favours JPG/PNG, 10 KB to 5 MB and a recommended 720 x 720 px resolution. Photos and videos must follow Google's content policies.

## Review Reply Pattern

Keep replies short and outcome-specific:

`Thank you, [Name]. I am really happy the classes helped with [specific outcome]. That is exactly what I want the lessons to do: give you practical speaking time, useful correction and enough follow-up for the confidence to keep growing between classes.`

Spanish:

`Muchas gracias, [Name]. Me alegra mucho saber que las clases te han ayudado con [resultado concreto]. La idea es justo esa: practicar ingles de forma real, corregir lo que te bloquea y mantener el repaso organizado entre clases.`

## Final Week 1 Publish Package

Only after the owner-side checklist is acceptable:

| Channel | Asset | Destination | Manual Ledger Row |
| --- | --- | --- | --- |
| GBP | Review/confidence post | `https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_confidence_review` | `Date / GBP / review-confidence / homepage / views / website clicks / calls / messages / inquiries / source notes / lead quality` |
| LinkedIn | Meeting answer gets smaller post | `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller` | `Date / LinkedIn / meeting-answer-smaller / Talk / impressions / profile views / link clicks / DMs / Talk events visible / inquiries / lead quality` |

Decision after two weeks:

- Continue GBP/LinkedIn if at least one qualified inquiry or clear profile action appears.
- Refine copy if there are clicks but no inquiries.
- Shift effort to GBP profile/reviews/referrals if LinkedIn creates attention but no qualified action.
- Do not judge the sprint by likes alone.

## Falsification

Favored idea tested: publish GBP + LinkedIn now as the first acquisition sprint.

Refined:

- Channel choice still looks right, but the owner-controlled proof layer matters more than posting volume.
- GBP/reviews are stronger than broad SEO, but owner-side metrics are not available through current API scopes.
- LinkedIn is a credibility test, not yet a proven acquisition engine.
- Marketplace price risk is narrower than Cycle 09 suggested because Superprof now shows 40 EUR/h main price, but Tusclases and Superprof online still create a lower anchor.

Stop/change evidence:

- If inquiries compare Tusclases/Superprof and object to price, fix marketplace pricing/copy before more posts.
- If GBP has no current photos/services/review replies, profile cleanup should beat posting.
- If LinkedIn produces profile views but no DMs/clicks/inquiries after two weeks, keep LinkedIn as credibility-only and prioritise GBP/reviews/referrals.
- If Talk completions happen without trial clicks, improve the bridge before making more Talk-led posts.

## Strongest Next Move

If Auris asks for implementation next, make a small website proof/pricing edit first, then publish the Week 1 GBP/LinkedIn pair with manual measurement. This is smaller and more trustworthy than launching a broad content cadence.

## Next Research Packet

Recommended next theme: website proof/pricing implementation readiness.

Exact work:

- Inspect `src/components/PricingSection.jsx`, `src/translations.js`, `GoogleReviewsSection.jsx`, `PlatformShowcase.jsx`, and live homepage.
- Decide the smallest copy/layout edit that makes 40 EUR/h feel included and personal without sounding salesy.
- Compare against `owner-profile-alignment-plan.md`, `pricing-positioning.md`, and `review-proof-library.md`.
- If still read-only, write an implementation checklist; if Auris asks to edit, patch the website and QA.
