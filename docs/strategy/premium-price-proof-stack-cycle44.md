# Premium Price Proof Stack - Cycle 44

Date: 2026-05-23

Purpose: protect the owned-site 40 EUR/h private-class anchor by making the value concrete beside the price, while avoiding academy-style messaging or public profile changes before Auris approves them.

## Primary Question

How should Auris protect and explain the 40 EUR/h premium now that the lead-source ledger says price anchors must be captured, and what proof should sit beside the price before more GBP/LinkedIn traffic is pushed?

## Working Answer

Keep 40 EUR/h on owned channels. Do not lower it, hide it, or route premium traffic to marketplaces.

The gap is not the price. The gap is that the first owned-site price proof still relies too much on generic personalization:

- rendered pricing copy: `1-on-1 lessons tailored to you`
- static JSON-LD private offer description: `One-on-one online English lessons tailored to your specific needs`

Those phrases are true, but they are also table stakes. Marketplace and academy competitors use similar language at lower or comparable prices. The 40 EUR/h anchor needs a visible mechanism:

1. Real speaking practice and useful correction.
2. Spanish-speaker pattern diagnosis.
3. Materials and vocabulary saved between classes.
4. Portal, flashcards and progress tracking as continuity, not as a software headline.
5. Review proof immediately nearby, but not stuffed into the price card.

## Source Discovery

Possible source types for this exact question:

| Source Type | Why It Might Reveal Price-Proof Insight |
| --- | --- |
| Owned website pricing code | Shows what buyers see before deciding whether 40 EUR/h feels fair. |
| Static JSON-LD/schema | Shows machine-readable offer language that may appear or be interpreted apart from rendered copy. |
| Live homepage headers/body | Confirms current deployed price proof and structured data. |
| Live review endpoint | Confirms current public proof level and themes. |
| Teaching-platform code | Tests whether portal/follow-up claims are true today. |
| Direct Superprof profile | Shows Auris's public third-party promise and price. |
| Superprof category pages | Shows nearby price comparison frames, not just Auris's profile. |
| Tusclases direct profile/search result | Shows the most visible lower public Auris price anchor. |
| Premium professional-English providers | Tests whether 40 EUR/h is outlandish or defensible with specificity. |
| Local academy private-class pages | Tests whether private classes around 38-40 EUR exist but are framed generically. |
| Official Google Business Profile docs | Shows whether GBP service descriptions/prices can create or solve price coherence. |
| Official structured-data docs | Shows whether price/offer schema should be treated as part of the price-proof surface. |
| Learning research on retrieval/spacing | Tests whether between-class review is pedagogically meaningful, not just a feature claim. |

Chosen source types:

- owned website/schema/code and live endpoints
- direct profile plus marketplace category pages
- premium/provider local pricing examples
- official GBP/Google/schema docs
- learning research for the portal/review mechanism

## Local Evidence

| Artifact | Signal | Supports | Weakens / Caveat |
| --- | --- | --- | --- |
| `pricing-positioning.md` | Existing policy already says keep 40 EUR/h and add concrete included proof. | H004, H021 | The policy has not been applied to the live pricing card yet. |
| `pricing-profile-coherence-cycle37.md` | Direct Superprof mostly aligned at 40, but online/Tusclases/category anchors still lower. | Keep owned price; track anchor seen. | Price coherence is still an owner/profile decision. |
| `website-proof-pricing-implementation-plan.md` | The smallest patch is copy and one support line, not a layout rebuild. | Implementation path is low risk if approved. | No public code change made in this cycle. |
| `src/translations.js` | Private card still says `1-on-1 lessons tailored to you` / `Clases 1-a-1 adaptadas a ti`. | Current proof exists but is generic. | Needs stronger mechanism if implemented. |
| `src/components/PricingSection.jsx` | Existing structure supports price card, feature list, included strip and NIF block. | No new design needed. | Included strip has no support sentence yet. |
| `index.html` JSON-LD | Private `Offer` says 40 EUR/h but uses generic `tailored to your specific needs` description. | Price is transparent. | Schema has the same proof weakness as visible copy. |
| Live homepage | HTTP 200; static HTML contains `priceRange`, 40/20 EUR offers and NIF FAQ. | Deployed price is stable. | Static body does not include richer pricing-card proof. |
| Live Google reviews endpoint ES/EN | Public endpoint returned `5.0 / 16`, five visible reviews per language. | Review proof remains strong. | Public endpoint is not owner Review Truth or reply status. |
| `review-proof-library.md` | Review themes include confidence, adaptation, speaking comfort and continuity. | Outcome proof should stay near price. | Do not hard-code review count until owner truth. |
| `lead-source-proof-ledger-cycle43.md` | Lead notes must capture `price_anchor_seen`, `quoted_price_expected` and `proof_mentioned`. | Price proof must be measured by lead language. | No inquiry rows exist yet. |
| `teacher-assistant` SRS/flashcard code | SRS, class-level SRS, progress and review surfaces exist. | Between-class review is real. | Do not claim future features like Next 15 unless built. |
| `teacher-assistant` dashboard/source scans | Teacher/student workflow has assignments, feedback, notes, practice and review. | Portal continuity is credible. | Not yet direct prospect conversion evidence. |

## API / Data Checks

- `https://englishwithauris.com/` returned HTTP 200 from Netlify with cache hit and HTML content.
- Live JSON-LD parse found `ProfessionalService`, `priceRange: "€€"`, private offer price `40`, group offer price `20`.
- Live JSON-LD private offer description remains generic: `One-on-one online English lessons tailored to your specific needs`.
- `/.netlify/functions/google-reviews?language=es` returned `source=places-new`, rating 5.0, reviewCount 16, five visible reviews.
- `/.netlify/functions/google-reviews?language=en` returned `source=places-new`, rating 5.0, reviewCount 16, five visible reviews.

## External Evidence

| Source | Signal | Supports | Weakens / Caution | Confidence |
| --- | --- | --- | --- | --- |
| Google Business Profile services docs, https://support.google.com/business/answer/9455399?hl=en-en | Service businesses can add service descriptions and prices; services can be highlighted in Search/Maps. | GBP service prices/descriptions must match the owned 40 EUR/h proof stack. | GBP may expose any inconsistency quickly. | High |
| Google LocalBusiness structured data docs, https://developers.google.com/search/docs/appearance/structured-data/local-business | LocalBusiness structured data can communicate business info; `priceRange` is a recognized field. | Static schema is part of the price-proof surface. | Google does not guarantee rich-result display. | High |
| Schema.org `Offer`, https://schema.org/Offer | Offers are used for services/products and can carry price and item/service context. | Offer descriptions should not lag behind visible premium proof. | Schema alone is not a conversion lever. | Medium-high |
| Superprof Auris direct profile, https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html | Shows 40 EUR/h main rate, 5.0/7, 20 students, Ireland/11 years/Spanish-speaker/platform/NIF copy. Also shows 30 EUR/h online. | 40 EUR/h is publicly defensible for Auris. | Same direct profile still creates a 30 EUR/h comparison path. | High |
| Superprof Castelldefels English category, https://www.superprof.es/clases/ingles/castelldefels/ | Shows Auris at 40 EUR/h near many 10-25 EUR/h alternatives and a 14 EUR/h category average. | Category pages are strong price-pressure evidence. | Category average should not dictate owned pricing. | High |
| Superprof Business English Barcelona, https://www.superprof.es/clases/business-english/barcelona/ | Category average around 18 EUR/h; visible professional/confidence profiles can reach 38 EUR/h. | Professional-English demand exists. | Generic business/confidence language is price-compressed. | High |
| Tusclases Auris profile, https://www.tusclasesparticulares.com/profesores/auris-1795413.htm | Search/open evidence shows 30 EUR/h, 4.9/15, strong progress/speaking review language. | Lower anchor is real and attached to Auris. | Direct scraping may vary; owner should verify before editing. | High |
| FunTalk private classes, https://funtalk.es/en/private-english-classes/ | Individual private class listed at 38 EUR; page stresses personalization, active learning, confidence and follow-up. | 38-40 EUR private English is not outlandish locally. | Academy language makes personalization less distinctive. | Medium-high |
| Word Power pricing, https://www.wordpowerbcn.com/word-power-english-pricing | Bespoke one-to-one presentation/interview training listed at 55 EUR/h, with support after training. | Premium can be justified by specific professional outcome and coaching. | It is a different provider/category and more formal. | Medium-high |
| Cambridge review of adult L2 vocabulary training, https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/review-of-laboratory-studies-of-adult-second-language-vocabulary-training/18F0A5D1FFC829CE05931B2EEE83124A/share/9612bae4e131a6e3d9d0b0aacac044f5587eb6e0 | Review describes spaced repetition/retrieval as relevant for L2 vocabulary learning. | Saved vocabulary and review are real learning mechanisms. | Research supports mechanism, not willingness to pay. | Medium-high |
| ERIC spacing/retrieval meta-analysis, https://eric.ed.gov/?id=EJ1310148 | Meta-analysis found spaced retrieval stronger than massed retrieval for retention. | Portal flashcards/review can credibly support retention. | Must not overclaim automatic outcomes. | Medium-high |

## Falsification

### Hypothesis Tested: H004, 40 EUR/h Is Viable If The Premium Is Visible

Result: strengthened, but refined.

Evidence for:

- Direct Superprof shows Auris at 40 EUR/h with strong profile proof.
- FunTalk and Word Power show local or professional one-to-one pricing around 38-55 EUR when framed with support or outcomes.
- Live reviews and platform code give Auris real mechanisms beyond the live hour.

Evidence against or pressure:

- Superprof category frames buyers around 14-18 EUR/h averages.
- Tusclases and Superprof online still expose 30 EUR/h anchors.
- Competitors also say personalized, confidence, business English and follow-up.

Refinement:

40 EUR/h is not the problem. Generic proof is the problem. The first price view must make the mechanism visible before the buyer compares anchors.

### Hypothesis Tested: H021, Marketplace Profiles Are Useful Only With Intentional Price Policy

Result: strengthened.

Evidence:

- Direct Superprof is useful because it tells a fuller Auris story.
- The same profile and category context still create lower anchors.
- Tusclases remains lower and strong enough to make comparison plausible.

Next practical test:

Keep `price_anchor_seen` and `quoted_price_expected` in every serious inquiry row. If two qualified direct leads mention 30 EUR marketplace pricing before booking, align marketplace prices before more GBP/LinkedIn traffic.

### Favored Idea Weakened

Favored idea: `Just add portal proof and the 40 EUR/h price will feel fair.`

Refinement: portal proof helps only if it is framed as personal follow-up and learning continuity. A software-first portal claim is too easy to ignore or compare with cheaper tool-heavy competitors.

Cheaper alternative to code:

Use the same proof stack manually in private replies and trial-call framing before editing the site:

```text
The class is 40 EUR/h. That includes the live class, preparation, useful correction, saved vocabulary and review tools between sessions, so we are not starting from zero each week.
```

## Implementation-Ready Proof Stack

### Website Pricing Card

Private description:

```text
1-on-1 classes with personal follow-up
```

Private features:

```text
Real conversation, correction and pronunciation work
Materials adapted to your goals
Vocabulary from class saved for review
Portal access, flashcards and progress tracking
```

Spanish private description:

```text
Clases 1-a-1 con seguimiento personal
```

Spanish private features:

```text
Conversacion real, correccion y pronunciacion
Materiales adaptados a tus objetivos
Vocabulario de clase guardado para repasar
Portal, tarjetas y seguimiento de progreso
```

### Included Strip Support Line

English:

```text
The live hour is only part of the work. I keep your materials, vocabulary and review organised between classes so the language comes back next time.
```

Spanish:

```text
La hora en directo es solo una parte. Mantengo tus materiales, vocabulario y repaso organizados entre clases para que el ingles vuelva a aparecer la siguiente vez.
```

### Static JSON-LD Private Offer Description

```text
One-to-one English classes with Auris for Spanish speakers: real speaking practice, correction, tailored materials, saved vocabulary and portal review between sessions.
```

### GBP Service Description

Use only if Auris edits GBP services later:

```text
Private English classes for Spanish speakers who want more confidence in real conversation. Includes speaking practice, correction, tailored materials, saved vocabulary, portal review and progress tracking between sessions.
```

GBP service price:

```text
40 EUR/h
```

Do not list a lower GBP price unless that lower GBP offer genuinely exists.

## What Not To Say Yet

- Do not lead with `premium` as a self-description.
- Do not rely on `tailored to you` alone.
- Do not say `portal tracks your speaking and gives feedback`; Talk reflection is not shipped.
- Do not create a separate `Business English` price/package yet.
- Do not publish static `5.0 / 16 reviews` copy until owner Review Truth confirms count and reply state.
- Do not link Superprof/Tusclases from the homepage as proof while price anchors are mixed.
- Do not discount the owned-site price to match Tusclases without first checking real direct-lead friction.

## Price-Policy Decision Table

| Evidence | Decision |
| --- | --- |
| No direct leads mention price mismatch | Keep 40 EUR/h; marketplace cleanup remains secondary. |
| One qualified direct lead mentions 30 EUR marketplace anchor | Record it; do not panic. Use proof stack in reply. |
| Two qualified direct leads mention 30 EUR anchor before booking | Align Tusclases/Superprof online to 40 or deliberately document channel pricing before more public traffic. |
| Marketplace-origin leads book at 40 EUR/h without friction | Keep marketplace cleanup lower priority. |
| Leads accept 40 but mention wanting business/team/company training | Keep Work-English inside personal private classes until two inquiries repeat the same moment. |
| Leads mainly ask for low-cost groups/certificates | Do not expand premium campaign; keep referrals/reviews and local trust first. |

## Smallest Test

No public change was made in this cycle. If Auris approves implementation later:

1. Patch only `src/translations.js`, `src/components/PricingSection.jsx` and `index.html` JSON-LD.
2. QA EN/ES desktop and mobile for pricing text fit.
3. Parse live/static JSON-LD after deployment.
4. Track the next 5-10 serious inquiries with:
   - `price_anchor_seen`
   - `quoted_price_expected`
   - `proof_mentioned`
   - `lead_quality`
   - `booked_trial`

## Strategic Synthesis

Strongest next move:

Prepare the owned-site pricing proof patch, but do not publish it automatically. The research now says the copy should change before a bigger GBP/LinkedIn push, because the current price card and schema use generic personalization while lower anchors remain visible in marketplaces.

What not to do yet:

- Do not build a new offer.
- Do not lower the owned price.
- Do not route premium traffic to marketplaces.
- Do not make portal/software the hero.
- Do not keep researching marketplaces unless prices change or a lead mentions them.

Evidence that would change this:

- If real direct leads accept 40 EUR/h and mention reviews/portal/follow-up without price friction, marketplace cleanup can stay secondary.
- If two qualified direct leads mention Tusclases/Superprof 30 EUR before booking, price-profile alignment becomes urgent.
- If leads object to price without having seen the proof stack, patch owned-site proof before more channel work.

## Next-Cycle Packet

Packet AS: Premium Price Proof Patch.

If Auris approves website copy implementation:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`
   - `/Users/aurisp/repos/teacher-website/src/translations.js`
   - `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
   - `/Users/aurisp/repos/teacher-website/index.html`
2. Implement only the proof stack copy and optional included-strip support line.
3. Run local build.
4. Use browser/mobile QA if a dev server is started.
5. Re-parse JSON-LD.

If no implementation approval arrives:

1. Do not keep enlarging the pricing artifact.
2. Use the proof stack as private reply/trial-call language.
3. Return to Packet AR if any lead/source evidence arrives.
4. Otherwise rotate to either indexing/static fallback cleanup or student-platform retention proof.

