# Website Proof And Pricing Implementation Plan

Created: 2026-05-22 Cycle 11

Purpose: define the smallest non-public implementation plan that makes the website's 40 EUR/h private-class price feel fair, personal and concrete without changing Auris's core message or turning the page into SEO copy.

## Primary Research Question

What is the smallest website copy/layout edit that makes 40 EUR/h feel fair without changing Auris's warm non-academy messaging?

Working answer: keep the price visible, do not discount, and make the included follow-up system clearer inside the pricing section. The site already has reviews immediately after pricing and a strong portal showcase later, so the smallest useful edit is a copy-only pricing proof patch plus one short included-with-every-class explanation.

## Source Discovery

For pricing proof, the highest-signal evidence is not generic conversion advice. It is the set of things a buyer sees around price, plus competitors' price/proof pairings.

| Source Type | Why It Matters | Signal Quality |
| --- | --- | --- |
| Rendered homepage pricing section | Shows what a visitor actually sees near 40 EUR/h. | High |
| `PricingSection.jsx` and translations | Shows the smallest implementation path. | High |
| Reviews endpoint in `es` and `en` | Shows which proof themes can support price. | High |
| Student platform code | Verifies the portal/follow-up claim is real. | High |
| Search Console / sitemap / live metadata | Confirms current organic scale and crawlability. | Medium-high |
| Premium tutor/coach pages | Shows what makes 35-55 EUR/h credible. | High |
| Local academy/marketplace price pages | Shows the cheaper alternatives a buyer may compare against. | High |
| Adult L2 vocabulary / spaced retrieval research | Supports the learning logic behind between-class review. | Medium-high |
| Reddit/community buying language | Useful for pain and willingness-to-pay language, but lower confidence. | Medium |

## Local Evidence

| Surface | Evidence | Interpretation |
| --- | --- | --- |
| Rendered pricing section | Private card says `Clases 1-a-1 adaptadas a ti`, 40 EUR/h, goals, flexibility, feedback/progress, portal. Included strip lists portal, flashcards, tailored materials, progress/reviews. | The ingredients are good, but the first price card still reads generic before the included strip explains the system. |
| `src/components/PricingSection.jsx` | `PriceCard` already accepts description/features and renders an included strip. | A small copy/translations change is enough; no layout rebuild needed. |
| `src/translations.js` | EN/ES pricing strings are centralized. | Implementation can be tightly scoped to translations plus optional included-strip description. |
| `src/components/GoogleReviewsSection.jsx` | Reviews follow pricing and show rating/count plus 3 cards. | Do not cram reviews into the price card; they are already the next section. |
| `src/components/PlatformShowcase.jsx` | Portal screenshots and feature tabs exist below About. | Portal proof exists visually, but pricing needs one clearer bridge to it. |
| `src/components/SeoLandingPage.jsx` | Local/business pages already mention personal review and portal continuity. | The same proof can be mirrored subtly on homepage pricing. |
| `src/components/TeachingPillars.jsx` | Method explains speaking, steady progress and modern tools. | Pricing copy should echo this, not introduce a new message. |
| `src/App.jsx` / analytics | Contact clicks and Calendly bookings are tracked, but GA4 reporting API is not accessible. | Use manual price-objection notes plus click signals after implementation. |
| Student dashboard | Dashboard loads assignments, custom/modular exercises, reviewed feedback, class notes, Talk the Talk, games and flashcards. | The portal claim is real and richer than the website currently conveys near price. |
| Platform backlog | Existing P0 "Next 15 minutes" concept frames platform as premium continuity. | Pricing proof should prepare visitors to value this system. |

## Data / API Evidence

- Live reviews endpoint, 2026-05-22:
  - `language=es`: 5.0 / 15, visible themes around confidence, progress, comfort speaking, adaptation and class continuity.
  - `language=en`: 5.0 / 15, visible themes around dynamic classes, family trust, progress and teacher reliability.
- Live `robots.txt` allows crawling and points to the sitemap.
- Live sitemap includes homepage, Talk the Talk, local private classes and business English pages with 2026-05-21 lastmod.
- Live static homepage schema currently exposes 40 EUR price in JSON-LD, but the rendered user-facing value proof is more important than schema for conversion.
- Search Console from Cycle 10 remains the working baseline: homepage-only search data, 18 clicks / 651 impressions over 180 days. This means the change should be judged by trial/WhatsApp/contact quality, not SEO lift.

## External Evidence

| Source | Signal | What It Means For Auris |
| --- | --- | --- |
| FunTalk private English classes | Private classes are framed around personalization, teacher/student decision, business/travel/exam goals and flexibility. Source: https://funtalk.es/en/private-english-classes/ | Personalization is table stakes, not enough by itself to justify premium. |
| Bravo Academy business English | Business/private classes list native teachers, free trial with feedback, reduced groups, weekly feedback and 36 EUR/h adult private classes. Source: https://bravoacademy.es/corporate-barcelona | Auris's 40 EUR/h is close to academy private price, so proof must show why the personal route is better. |
| Superprof Tim | 35 EUR/h is justified through professional communication, meetings, presentations, pronunciation/tone, structured materials, ongoing support and 74 reviews. Source: https://www.superprof.es/english-for-real-professional-communication-speak-the-way-you-think-clearly-confidently-effortlessly-results-guaranteed.html | The credible premium formula is specific outcomes plus support, not "tailored lessons." |
| Word Power BCN | Bespoke one-to-one presentation/interview skills training is 55 EUR/h. Source: https://www.wordpowerbcn.com/word-power-english-pricing | A work-situation-specific lane can exceed 40 EUR/h. Auris can borrow specificity without becoming corporate. |
| Superprof business English Barcelona | Marketplace list includes 25-40 EUR/h business-English/professional profiles with reviews and credentials. Source: https://www.superprof.es/clases/business-english/barcelona/ | 40 EUR/h sits at the upper end but is not absurd when proof is visible. |
| Superprof Castelldefels English | Local average is around 14 EUR/h and buyers compare qualifications, format, frequency and free trials. Source: https://www.superprof.es/clases/ingles/castelldefels/ | The website should not compete as a marketplace listing; it must explain the system and fit. |
| Superprof Castelldefels business English | Business English local average is around 18 EUR/h; profiles are sparse and often generic. Source: https://www.superprof.es/clases/business-english/castelldefels/ | The local marketplace is cheaper but weaker; Auris can win if he looks clearly more serious and personal. |
| Tusclases Castelldefels list | Local list shows many low-price tutors and academies at 12-21 EUR/h, often children/exam oriented. Source: https://www.tusclasesparticulares.com/profesores-ingles/castelldefels.aspx | Avoid sending premium leads into comparison mode. Keep the website as the premium source of truth. |
| Callan private courses | One-to-one courses are sold as intensive packages with native teacher, conversational method, structure, resources and payment plan. Source: https://www.callanschool.info/en/english-courses-private | Structured path and resources are part of premium perception. |
| Adult L2 vocabulary review | Retrieval practice plus spacing supports adult vocabulary learning. Source: https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/review-of-laboratory-studies-of-adult-second-language-vocabulary-training/18F0A5D1FFC829CE05931B2EEE83124A/share/9612bae4e131a6e3d9d0b0aacac044f5587eb6e0 | Portal flashcards/review are not decoration; they support learning retention. |
| ERIC spaced retrieval meta-analysis | Spaced retrieval practice showed a strong benefit over massed retrieval in the reviewed evidence. Source: https://eric.ed.gov/?id=EJ1310148 | "Review between classes" is a defensible premium proof point. |
| Reddit r/ingles buyer thread | A recent buyer explicitly preferred a serious small provider with a cared-for website and was willing to pay a fair price for commitment. Source: https://www.reddit.com/r/ingles/comments/1tflo0h/busco_academia_de_ingl%C3%A9s/ | Some buyers do value serious presentation and small-provider care; not everyone wants the cheapest tutor. |

## Decision: Portal Proof Near Price, Reviews Immediately After

Best implementation:

- Put portal/follow-up proof inside pricing.
- Leave reviews immediately after pricing.
- Do not add a big testimonial block inside the price card.

Why:

- Portal/follow-up explains what 40 EUR/h includes.
- Reviews prove the outcome without cluttering the pricing cards.
- The current page already flows from pricing to Google reviews, then About, then portal. We only need a stronger bridge.

## Smallest Copy Patch

### English

Private card description:

`1-on-1 classes with personal follow-up`

Private card bullets:

- `Real conversation, correction and pronunciation`
- `Materials adapted to your goals`
- `Vocabulary from class saved for review`
- `Portal, flashcards and progress tracking`

Included strip title:

`Included with every class`

Included strip support line:

`The live hour is only part of the work. I keep your materials, vocabulary and review organised between classes so the language comes back next time.`

Included items:

- `Student portal access`
- `Personal flashcards from class`
- `Tailored materials prepared for you`
- `Progress notes and review`

### Spanish

Private card description:

`Clases 1-a-1 con seguimiento personal`

Private card bullets:

- `Conversación real, corrección y pronunciación`
- `Materiales adaptados a tus objetivos`
- `Vocabulario de clase guardado para repasar`
- `Portal, tarjetas y seguimiento de progreso`

Included strip title:

`Incluido en cada clase`

Included strip support line:

`La hora en directo es solo una parte. Mantengo tus materiales, vocabulario y repaso organizados entre clases para que el inglés vuelva a aparecer la siguiente vez.`

Included items:

- `Acceso al portal de estudiante`
- `Tarjetas personalizadas de clase`
- `Materiales adaptados para ti`
- `Notas de progreso y repaso`

## Component Change List If Auris Asks To Implement

Do not implement from the automation alone. If Auris explicitly asks:

1. Update `src/translations.js`.
   - Change `pricing.private.description`.
   - Replace `pricing.private.features`.
   - Add `pricing.included.description`.
   - Tighten `pricing.included.items`.

2. Update `src/components/PricingSection.jsx`.
   - Under the included title, render `pricing.included.description` as a short centered paragraph.
   - Keep the existing cards and included strip structure.
   - Do not add a new section or move reviews.

3. Optional microcopy after the 40 EUR/h price, if layout allows without crowding:
   - EN: `Includes class preparation and review tools.`
   - ES: `Incluye preparación y herramientas de repaso.`
   - Use only if it fits cleanly on mobile.

4. QA:
   - Check desktop and mobile pricing section.
   - Check EN and ES.
   - Confirm no text overflows in cards or included strip.
   - Confirm review cards still load after pricing.
   - Confirm contact CTA still jumps to `#contact`.

## What Not To Change

- Do not lower the 40 EUR/h price.
- Do not hide the price.
- Do not use "freelance English teacher" as a headline.
- Do not add long SEO copy to the pricing section.
- Do not make the pricing page sound like an academy or corporate training provider.
- Do not lead with children/family reviews for this adult/professional premium route.
- Do not move the whole portal showcase above pricing; that is a bigger layout test.

## Measurement After Implementation

Use a simple before/after note rather than pretending GA4 is complete:

| Signal | How To Track | Decision Use |
| --- | --- | --- |
| Trial CTA clicks | Existing contact/Calendly events if visible; manual observation if not. | Did pricing proof hurt or help intent? |
| WhatsApp/email clicks | Existing `contact_click` events if visible; manual notes. | Does stronger proof create more direct questions? |
| Price objections | Manual lead-source ledger. | If objections drop, proof helped. If they rise, copy may be attracting comparison shoppers. |
| Lead quality | Manual notes: adult/professional/local/budget fit. | More important than click count. |
| Marketplace comparison mentions | Ask "Where did you find me?" | If Tusclases/Superprof is mentioned, align channel pricing sooner. |

## Falsification

Favored idea tested: website proof near price is the smallest next improvement.

Strengthened:

- Pricing section already has the structure to carry this proof.
- External premium examples show price is accepted when outcomes/support are specific.
- Learning research supports the portal/review claim.

Weakened:

- The site already has an included strip, reviews and portal showcase, so a copy patch may be incremental rather than transformative.
- If leads are coming from marketplaces, website pricing proof will not fix profile-level price anchoring.

Stop/change evidence:

- If no one reaches pricing or contact, fix acquisition/GBP first.
- If price objections continue after the proof patch, align marketplace prices and add stronger outcome proof near the CTA.
- If students do not actually use the portal, avoid overemphasising it publicly until "Next 15 minutes" improves usage.

## Next Research Packet

Recommended next theme: student-platform retention and premium proof.

Exact work:

- Inspect `platform-backlog.md`, `StudentDashboard.tsx`, flashcard routes, Talk the Talk portal route, teacher overview/prep surfaces, and any usage/progress endpoints.
- Decide whether "Next 15 minutes" should be the first platform implementation after website proof.
- Produce a small product spec that connects marketing proof to real student behaviour: what students should do between classes, what Auris sees before class, and what metric proves retention value.
