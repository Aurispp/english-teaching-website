# Premium Proof Pairing Gate - Cycle 50

Created: 2026-05-24
Theme: pricing and offer architecture

## Primary Question

How should the local future-availability copy be paired with premium mechanism proof before any deploy, so the site stays honest about limited availability without weakening the 40 EUR/h value story?

## Short Answer

The local availability patch is a useful capacity-truth patch, but it should not be treated as price proof. If Auris deploys it, the safest small improvement is to pair it with the Cycle 44 premium proof stack in the same release or the next immediately adjacent patch.

The phrase `I'm usually close to full, but you can message me about future availability.` answers "can I start now?" It does not answer "why is this 40 EUR/h instead of a marketplace tutor?" That second answer needs to sit beside the price: real conversation, correction, Spanish-speaker patterns, class vocabulary saved for review, and portal continuity.

## Source Discovery

Where the best evidence should live for this question:

| Source Type | Expected Signal | Use This Cycle |
| --- | --- | --- |
| Local pricing implementation | Whether the local patch changed CTA tone without changing price proof. | Used, highest-signal local source. |
| Live production HTML/schema | Whether the public site already exposes the new availability/proof story. | Used. Production is still pre-patch and schema remains generic. |
| Google review endpoint and owner screenshot context | Whether public proof has strengthened since earlier cycles. | Used. Public endpoint returns 5.0/16; owner screenshot showed fresh visible reviews. |
| Auris marketplace profiles | Whether the 40 EUR/h anchor is coherent outside the owned site. | Used. Superprof direct supports 40 EUR/h. |
| Marketplace category pages | What cheaper alternatives a buyer may see. | Used. Strong price-pressure context. |
| Premium/private competitor pricing pages | Whether 38-55 EUR/h is locally credible when proof is specific. | Used. Strong support. |
| Official structured-data docs | Whether visible price/proof and machine-readable offer descriptions should align. | Used. Strong constraint source. |
| Adult learning/retrieval research | Whether portal/review proof is pedagogically real. | Used. Medium-high support. |
| Language-learning community/product review signals | Whether learners distinguish memorisation from usable speaking. | Used. Useful falsification. |
| CTA/waitlist sources | Whether availability wording can accidentally imply "closed." | Inherited from Cycle 49, not repeated deeply. |

Chosen source families: local implementation, live data/schema, marketplace/competitor pricing, official schema/search docs, adult learning evidence, and one community/product signal.

## Local Evidence

| Artifact | What It Shows | Supports / Weakens |
| --- | --- | --- |
| `docs/strategy/research-log.md` Cycle 49 | Local availability patch is ready but not deployed; premium proof remains unfinished. | Supports pairing gate. |
| `docs/strategy/research-roadmap.md` Packet AX | If not deployed, rotate to premium price proof rather than repeat availability analysis. | Supports Cycle 50 theme. |
| `docs/strategy/availability-copy-deploy-gate-cycle49.md` | Deploy gate exists for Soft Future-Availability Mode. | Supports "do not re-open same gate." |
| `docs/strategy/pricing-positioning.md` | Longstanding diagnosis: 40 EUR/h needs included-with-class proof. | Supports proof patch. |
| `docs/strategy/premium-price-proof-stack-cycle44.md` | Exact small copy/schema patch already exists. | Supports implementation-ready pairing. |
| `docs/strategy/review-proof-library.md` | Reviews repeatedly mention confidence, adaptation, meetings, comfort, tools and continuity. | Supports proof themes. |
| `src/components/PricingSection.jsx` | Availability notice now appears before pricing cards; CTA styling is softer. | Supports capacity truth; leaves proof gap. |
| `src/translations.js` | The requested availability line exists; private card still says `1-on-1 lessons tailored to you`. | Weakens price proof. |
| `index.html` | Local JSON-LD private `Offer.description` is still generic. | Weakens machine-readable proof coherence. |
| Production homepage HTML | Public site still exposes the older schema/copy; local patch is not deployed. | Supports no-public-change assumption. |
| `src/components/SeoLandingPage.jsx` | CTAs now use availability language in local code. | Supports consistent softer path. |
| `src/components/TalkTheTalk.jsx` | Completion CTA now points to availability rather than direct booking. | Supports softer acquisition posture. |
| `src/components/PlatformShowcase.jsx` | Portal proof is already a visible website asset, but not inside pricing. | Supports small relocation/echo, not bigger feature build. |
| `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` | Real student portal surfaces assignments, feedback, notes and practice. | Supports that follow-up proof is real. |
| `teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx` | Student SRS stats are real and class-specific. | Supports flashcard/review mechanism. |
| `teacher-assistant/backend/app/services/flashcard_srs.py` | Spaced-review logic exists server-side. | Supports "review between classes" claim. |
| `teacher-assistant/backend/app/api/srs.py` | Due-card and practice endpoints exist. | Supports portal continuity proof. |

Local interpretation:

- The local code now says "message me about future availability" consistently enough to ship if Auris wants that public posture.
- The private price card still relies on generic personalization. That is the weakest visible surface after the availability patch.
- The portal claim is not empty marketing; the teaching platform has real SRS, assignments, notes and feedback pathways.
- The implementation path does not require a redesign. It is a copy/schema pairing decision.

## Data And API Evidence

| Data Layer | Result | Interpretation |
| --- | --- | --- |
| Production headers | `https://englishwithauris.com/` returns HTTP 200 from Netlify. | No urgent site outage. |
| Production sitemap | Homepage, Talk, local and business routes remain listed. | Discovery plumbing still healthy. |
| Production robots | `Allow: /` with sitemap reference. | No crawl blocker. |
| Production JSON-LD | Private offer is still 40 EUR/h with generic `One-on-one online English lessons tailored to your specific needs`. | Public machine-readable proof is not yet aligned with premium mechanism. |
| Live reviews endpoint EN | `places-new`, rating 5, `reviewCount` 16. | Public proof count is stronger than earlier 15-review baseline. |
| Live reviews endpoint ES | `places-new`, rating 5, `reviewCount` 16; visible themes include confidence, meetings, adaptation, resources/tools and comfort. | Review language supports premium mechanism. |
| Public review endpoint limitation | Endpoint did not reliably show newest owner-screenshot reviews first. | Do not infer newest/reply truth without owner-side data. |

## External Evidence

| Source | Evidence Point | Supports | Weakens / Caveat |
| --- | --- | --- | --- |
| Google Search Central LocalBusiness docs | LocalBusiness structured data can tell Google business details such as hours, reviews and price range. | Keep site/business facts consistent and structured. | Does not make schema a ranking shortcut. |
| Schema.org `Offer` docs | Offer examples include price, currency, availability and descriptions in structured data. | Human-visible offer and JSON-LD should tell the same story. | Generic schema descriptions are weak proof, not a crisis. |
| Superprof Auris direct profile | Direct profile shows 40 EUR/h, 5.0/7, 20 students, verified contact/profile, Ireland/11 years, Spanish-speaker, portal and NIF copy. | Owned-site 40 EUR/h is coherent with at least one public profile. | Marketplace context still exposes cheaper anchors and free first class expectations. |
| Superprof Castelldefels category | Local list places Auris beside lower-cost tutors, including business/confidence offers around 20 EUR/h. | Buyers may compare down on price if proof is generic. | Marketplace category is not the brand north star. |
| Tusclases English category | Public category copy says private English teachers can range from 7 to 30 EUR/h depending on experience/training. | Strong lower-anchor pressure for comparison shoppers. | Category range does not define premium private coaching value. |
| FunTalk private English classes | Individual private classes are listed at 38 EUR/h and framed around personalisation, goals, flexibility and follow-up. | 40 EUR/h is locally credible when support is specific. | Academy proof still sounds institutional; Auris should stay personal. |
| Callan School Barcelona private courses | One-to-one packages imply roughly 59 EUR/h for 30 hours and around 50 EUR/h for 60 hours before discounts. | Private/native teacher support can sit above 40 EUR/h locally. | Method/academy package, not direct substitute. |
| Word Power BCN | Bespoke one-to-one presentation/interview coaching is 55 EUR/h and tied to specific professional outcomes. | Premium price is strongest when tied to specific outcome and support. | More business/professional than general English. |
| Cambridge/Cambridge Core spacing research | Spacing enhanced delayed L2 vocabulary retention in the cited study; adult learning evidence supports review over time. | Portal flashcards/review are real learning value. | Do not overclaim fluency from flashcards alone. |
| Language-learning community signal | Learners distinguish memorising words from being able to use them in context. | Pricing proof should frame portal review as supporting live speaking, not replacing it. | Community signal is not direct buyer intent. |

## Hypotheses Tested

### H004: 40 EUR/h is viable only if the premium is visible in the first minute.

Result: strengthened and refined.

Evidence:

- Local `PricingSection.jsx` now puts limited availability before the price cards, but `translations.js` still says `1-on-1 lessons tailored to you`.
- Local and external comparables show 38-55 EUR/h is viable when the buyer sees specific support, not generic personalisation.
- Superprof direct profile now supports 40 EUR/h, but marketplace categories and Tusclases-style anchors still pull lower.
- The teaching platform has real SRS and portal mechanisms, so the proof can be truthful.

Updated confidence: high.

Next practical test: if the availability patch is deployed, pair it with the Cycle 44 proof stack or record a deliberate reason for shipping availability-only. Track the first 5-10 inquiries for `proof_mentioned`, `price_anchor_seen`, `quoted_price_expected`, `availability_confusion` and `lead_quality`.

### H021: Marketplace price policy needs to be intentional.

Result: strengthened.

Evidence:

- Superprof direct profile is coherent at 40 EUR/h, but category pages still place Auris beside lower-priced tutors.
- Tusclases/category evidence keeps a 7-30 EUR/h expectation in the broader private-tutor market.
- Owned-site traffic should not be routed to marketplaces until price policy is intentional.

Updated confidence: high.

Next practical test: one qualified direct lead mentioning a lower marketplace anchor is a note; two qualified direct leads mentioning it before booking triggers a marketplace-price alignment decision.

### H026: Capacity state should control public CTA intensity.

Result: strengthened but limited.

Evidence:

- Cycle 49 local patch now aligns CTAs with Auris's nearly-full reality.
- Cycle 50 shows that capacity truth should not be asked to carry price proof.

Updated confidence: high.

Next practical test: if deployed, classify the site as `Soft Future-Availability Mode` and do not judge it as an active acquisition campaign.

### H015: Manual lead-source notes matter more than dashboard perfection at low volume.

Result: strengthened.

Evidence:

- Public GBP and review data can show profile visibility and count/rating, but cannot explain what a prospect believed about price, availability or proof.
- The strongest post-deploy evidence will be one human row, not another broad analytics dashboard.

Updated confidence: high.

Next practical test: add `proof_mentioned` and `availability_confusion` to the first post-deploy inquiry note.

## Falsification

Favored idea tested:

`Limited availability will make the offer feel more premium by itself.`

Result: weakened.

Availability can reduce desperation and make the site more honest, but scarcity without mechanism proof may make 40 EUR/h feel less justified or make good prospects think the door is closed. The premium feeling should come from trust, fit, reviews and the personal follow-up system.

Evidence that would make us stop pairing proof with availability:

- Multiple qualified inquiries after availability-only deployment accept 40 EUR/h and mention reviews/portal/correction without confusion.
- No one mentions price or lower marketplace anchors over 5-10 qualified direct inquiries.
- Auris decides the site should remain a low-touch placeholder while fully booked, not an active future-demand engine.

Cheaper alternative that could beat this:

- Deploy the availability patch only, make no extra site edits, and rely on review replies plus one monthly GBP freshness action while full.
- This is acceptable if Auris is deliberately not opening capacity soon. It is weaker if he wants future high-fit leads to understand the 40 EUR/h offer.

## Implementation-Ready Pairing Gate

Recommended if Auris approves deployment:

1. Ship the local availability patch only with explicit deploy approval.
2. Pair or immediately follow it with the Cycle 44 premium proof stack.
3. Do not add a large new section, waitlist app, ads campaign or pricing redesign.
4. Keep the CTA calm, but make the value mechanism sharper.

Exact proof patch to pair:

| Surface | Current / Local State | Recommended Pairing |
| --- | --- | --- |
| Private card description | `1-on-1 lessons tailored to you` | `1-on-1 classes with personal follow-up` |
| Private card bullets | Goals, flexibility, feedback, portal | `Real conversation and correction`, `Materials adapted to your goals`, `Vocabulary from class saved for review`, `Portal access, flashcards and progress tracking` |
| Included strip | Four items, no support sentence | Add one support sentence: `The live hour is only part of the work. I keep materials, vocabulary and review organised between classes so the language comes back next time.` |
| JSON-LD private `Offer.description` | Generic one-on-one description | `One-to-one English classes for Spanish speakers with live speaking practice, useful correction, saved class vocabulary and portal review between lessons.` |
| Measurement | Availability fields from Cycle 49 | Add `proof_mentioned`, `price_anchor_seen`, `quoted_price_expected` and `availability_confusion`. |

Spanish version:

- Description: `Clases 1-a-1 con seguimiento personal`
- Support sentence: `La hora en directo es solo una parte. Mantengo tus materiales, vocabulario y repaso organizados entre clases para que el ingles vuelva a aparecer la siguiente vez.`
- JSON-LD can remain English or bilingual later; visible Spanish copy matters more for immediate UX.

## Decision Options

| Option | When To Choose | Risk |
| --- | --- | --- |
| A. Deploy availability plus proof stack | Auris wants the live site to signal limited availability while still preparing future leads. | Slightly more copy change than the original request. |
| B. Deploy availability only | Auris wants only the requested softer CTA/capacity truth right now. | Price proof remains generic. |
| C. Hold all public changes | Auris wants no deployment until capacity opens or proof patch is reviewed. | Production keeps implying a more direct booking posture. |

Recommended: Option A if there is any public push or if GBP/LinkedIn content resumes. Option B is fine for a quiet placeholder. Option C is safest if Auris wants to review wording first.

## Strategic Synthesis

Strongest next move:

Make the deploy decision capacity-aware. If public traffic will stay quiet while Auris is full, the current local patch can wait. If the site is deployed or used as the destination from GBP/LinkedIn, pair limited availability with the small proof patch.

What Auris should not do yet:

- Do not discount the 40 EUR/h price.
- Do not hide the price.
- Do not build a waitlist app.
- Do not make a giant premium sales page.
- Do not claim the portal replaces human feedback.
- Do not send owned-site visitors to Superprof/Tusclases.
- Do not run ads into a nearly-full calendar.

Smallest practical test:

After any deploy, record one row for each qualified inquiry:

| Field | Values / Notes |
| --- | --- |
| `capacity_state` | full / limited / opening soon |
| `cta_state_seen` | availability / booking / unknown |
| `proof_mentioned` | reviews / portal / correction / Ireland / Spanish-speaker / none |
| `price_anchor_seen` | website 40 / marketplace 30 / competitor / none / unknown |
| `quoted_price_expected` | exact phrase or amount |
| `availability_confusion` | yes / no / maybe |
| `future_timing` | now / 1-3 months / flexible / unknown |
| `lead_quality` | high / medium / low |
| `booked_trial` | yes / no / later |

Risk of acting too early:

The site may become too gentle before there is a real future-demand capture habit, and the proof patch may over-emphasize the portal if it is not framed as a support to live speaking.

Risk of waiting:

Production may keep inviting immediate booking while Auris is almost full, and the visible 40 EUR/h proof gap remains in place before any future traffic push.

## Process Critique

Highest-signal source:

- The actual local pricing code plus live production schema. It revealed the precise mismatch: capacity copy changed; premium proof did not.

Useful external source:

- Direct price comparables with specific outcomes: FunTalk, Callan and Word Power were better than generic tutor averages because they show when 38-55 EUR/h makes sense.

Noisy or lower-value source:

- Broad marketplace category ranges are useful as price-pressure evidence but bad as a strategic north star.
- Community language-learning threads are useful for framing "review supports use," but not for direct buying intent.

Next source type to try:

- Owner-visible Google Business Profile services/products/pricing screenshots, because public profile evidence cannot confirm whether GBP service descriptions match the owned-site price story.

Protocol improvement:

- After an owner-requested public-copy patch, the next cycle should inspect the adjacent proof risk. Do not repeat the same deploy gate unless a deploy, owner decision or new inquiry row exists.

## Next-Cycle Packet AY

Theme: proof-paired deploy or owner GBP service coherence.

Start with:

- `docs/strategy/premium-proof-pairing-gate-cycle50.md`
- `docs/strategy/availability-copy-deploy-gate-cycle49.md`
- `docs/strategy/premium-price-proof-stack-cycle44.md`
- `docs/strategy/pricing-positioning.md`
- `docs/strategy/measurement-plan.md`
- `src/translations.js`
- `src/components/PricingSection.jsx`
- `index.html`

If Auris approves deployment:

1. Decide Option A or B above.
2. If Option A, patch only the private card description/bullets, included support sentence and JSON-LD `Offer.description`.
3. Run `npm run build`.
4. Verify production after deploy only if explicitly asked to deploy.
5. Record deploy date, capacity state and CTA/proof state.

If Auris does not approve deployment:

1. Do not repeat availability-copy or proof-pairing analysis.
2. Rotate to owner GBP services/profile coherence, `Next 15` pilot evidence, or marketplace price-policy confirmation.

Exact external checks for next cycle:

- Superprof Auris direct profile only if price may have changed.
- Owner GBP services/products/pricing screenshot if Auris provides access.
- Google Business Profile service/product docs if editing profile later.
- One premium solo-tutor/coach profile with 40+ EUR/h and explicit follow-up proof.

Unfinished threads:

- No explicit deploy approval.
- Production does not yet show local availability copy.
- First post-availability inquiry row is missing.
- Search Console read scope is still unresolved.
- Owner GBP services/prices/review replies remain owner-side unknowns.
