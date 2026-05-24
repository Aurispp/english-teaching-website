# Pricing Profile Coherence - Cycle 37

Created: 2026-05-23 Cycle 37

Purpose: refresh the public price-anchor evidence before the GBP/LinkedIn proof sprint, and turn the recurring "40 EUR/h vs marketplace anchors" question into an implementation-ready policy.

## Primary Question

Is pricing/profile coherence now the bottleneck before the GBP/LinkedIn proof sprint, and what exact price-anchor policy should Auris use across the website, LinkedIn, Superprof, Tusclases and lead notes?

## Working Answer

The website price should stay at 40 EUR/h for private classes.

The public mismatch is narrower than earlier cycles feared, but it is still real:

- Owned website: 40 EUR/h private classes, 20 EUR/h group classes.
- Superprof direct profile: 40 EUR/h main rate, 30 EUR/h online, 5.0 from 7 opinions, verified profile/contact, 20 students.
- Superprof Castelldefels category: Auris appears at 40 EUR/h, but beside a 14 EUR/h category average and many 10-25 EUR/h alternatives.
- Tusclases direct profile/search evidence: still 30 EUR/h, Profesor Plus, fast response, strong profile text.
- Superprof Business English Barcelona: category average is 18 EUR/h, but visible professional alternatives include 35-40 EUR/h when they show specificity, reviews and professional outcomes.

The decision is not "lower the website price." It is:

1. Keep owned channels anchored at 40 EUR/h.
2. Do not send premium GBP/LinkedIn traffic to marketplaces.
3. Treat Superprof/Tusclases as discovery channels and price-pressure sources.
4. If Auris edits marketplaces, align public prices to 40 EUR/h unless he deliberately wants a channel price.
5. Before any measured sprint, make the website pricing proof clearer: the 40 EUR/h is for the live class plus personal follow-up, correction, adapted materials, saved vocabulary, portal review and progress tracking.

## Source Discovery

Possible high-signal source types for this question:

1. Website pricing code and translation strings.
2. Live owned site headers/static HTML.
3. Google reviews endpoint.
4. Auris Superprof direct profile.
5. Auris Tusclases direct profile.
6. Superprof Castelldefels English category.
7. Superprof Spain English category.
8. Superprof Business English Barcelona category.
9. Premium/private professional English coach pages.
10. Official Google Business Profile service/price docs.
11. Local buyer/community pricing threads.
12. Teaching-platform code that proves what "portal follow-up" actually means.

Chosen source types:

- Owned website and pricing implementation.
- Auris direct marketplace profiles.
- Marketplace category pages for price-anchor pressure.
- Professional-English competitor/coach positioning.
- Official GBP services docs, because services can expose price/description.
- Platform code, because the premium claim depends on real between-class continuity.

## Local Evidence

Inspected local artifacts:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `pricing-positioning.md`
- `market-intelligence.md`
- `content-strategy.md`
- `measurement-plan.md`
- `owner-evidence-ledger-template.md`
- `review-proof-library.md`
- `platform-backlog.md`
- `src/translations.js`
- `src/components/PricingSection.jsx`
- `src/App.jsx`
- `src/components/Footer.jsx`
- live homepage headers/static HTML
- live Google reviews endpoint in English and Spanish
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardPractice.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx`

What this supports:

- The website pricing structure is already transparent: 40 EUR/h private, 20 EUR/h group, billing/NIF block, and included-with-every-class strip.
- The private price-card copy is still weaker than the strategy: `1-on-1 lessons tailored to you` and generic goal/flexibility bullets do not fully explain why 40 EUR/h is different from a 15-25 EUR/h tutor.
- The Cycle 11 copy patch remains the right smallest implementation: describe the class as personal follow-up, then name correction, adapted materials, saved vocabulary, portal, flashcards and progress.
- The platform genuinely supports the claim. The student dashboard, teacher overview, flashcard practice and stats surfaces show assignments, reviewed feedback, class notes context, SRS, deck practice, progress, teacher prep and follow-up paths.
- Live static homepage HTML is still not a useful source for rendered price proof; the React implementation and translation strings are the trustworthy local source.

## Data/API Evidence

Live Google reviews endpoint:

| Endpoint | Source | Rating | Count | Visible Reviews | Notable |
| --- | --- | ---: | ---: | ---: | --- |
| `/.netlify/functions/google-reviews?language=en` | `places-new` | 5.0 | 16 | 5 | Includes a visible 2026-05-22 review. |
| `/.netlify/functions/google-reviews?language=es` | `places-new` | 5.0 | 16 | 5 | Spanish visible set remains different from English. |

Live homepage header:

- `https://englishwithauris.com/` returns HTTP 200 from Netlify.
- Static HTML contains schema/FAQ/NIF evidence but not the rendered pricing cards, so route health does not prove price proof quality.

## External Evidence

| Source | Signal | Supports | Weakens / Risk |
| --- | --- | --- | --- |
| Superprof Auris direct profile, `https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html` | Shows 40 EUR/h main rate, 30 EUR/h online, verified profile/contact, 5.0/7, 20 students, and profile copy around Ireland, 11 years, Spanish speakers, portal and NIF. | 40 EUR/h is publicly defensible for Auris. | Online 30 EUR/h can still create comparison friction. |
| Superprof Castelldefels English, `https://www.superprof.es/clases/ingles/castelldefels/` | Auris appears at 40 EUR/h, but the page frames average local price around 14 EUR/h and lists many 10-25 EUR/h alternatives. | Marketplace demand exists. | Marketplace context pushes buyers into price comparison. |
| Tusclases Auris profile, `https://www.tusclasesparticulares.com/profesores/auris-1795413.htm` | Public search evidence still shows 30 EUR/h, Profesor Plus, quick response and strong copy. | Tusclases can remain a discovery channel. | Direct price mismatch remains the clearest public inconsistency. |
| Superprof Spain English, `https://www.superprof.es/clases/ingles/espana/` | Spain category says common prices vary by profile, with certified/native/exam teachers around 20-35 EUR/h; visible premium-ish examples appear around 35-39 EUR/h. | 40 EUR/h is just above marketplace upper norm, not absurd. | The average marketplace frame is far below 40. |
| Superprof Business English Barcelona, `https://www.superprof.es/clases/business-english/barcelona/` | Business-English average is 18 EUR/h, but visible profiles include 35, 38 and 40 EUR/h when tied to professional outcomes, reviews or credentials. | Professional specificity can lift the anchor. | Generic "business English" is common and cheap. |
| LUVEnglish, `https://luvenglish.com/` | Positions English coaching around real-world confidence, professionals, teams, meetings, client calls and presentations. | Adult/professional confidence is a valid premium lane. | Similar language is not unique. |
| Madeleine Cooke, `https://madeleine-cooke.com/` | Positions premium coaching for leaders/high-performing professionals with meetings, presentations, interviews and focused practical support. | There is a higher-end coach category beyond marketplace tutoring. | Auris should not imitate corporate/executive tone too heavily. |
| Reddit Barcelona pricing thread, `https://www.reddit.com/r/Barcelona/comments/onbmar/going_rate_for_private_english_lessons/` | Local teacher comments mention 20 EUR/h as standard and 25-30 EUR/h for a prepared/good teacher; also warns private students can be price-sensitive and cancellation-prone. | Marketplace/local price sensitivity is real. | Reinforces why 40 EUR/h needs visible proof and policies. |
| Google Business Profile services docs, `https://support.google.com/business/answer/9455399?hl=en` | GBP services can include descriptions and prices; service details may be highlighted in Maps/Search. | If GBP services are used, price and description must be coherent with website. | Vague or mismatched service prices can set wrong expectations before contact. |
| Google Business Profile overview, `https://business.google.com/us/business-profile/` | Google frames profile as first impression with photos, posts, reviews, services, bookings/quotes and customer connection. | GBP is still a trust/profile surface, not just a posting feed. | Publishing before price/profile coherence risks amplifying confusion. |

## Falsification

Hypothesis tested: H004, "40 EUR/h is viable only if the premium is visible in the first minute."

- Result: strengthened.
- Evidence: Superprof has Auris at 40 EUR/h directly, and professional marketplace examples can reach 35-40 EUR/h. But local/category averages are much lower, and the website card still uses generic tailored-class language.
- What would weaken it: if direct leads accept 40 EUR/h without mentioning proof, portal or reviews, then the website proof patch is less urgent.
- Next test: patch or at least use the price-proof wording in GBP/LinkedIn/owner profiles; log `proof_mentioned` and `price_anchor_seen`.

Hypothesis tested: H021, "Marketplaces are useful proof/intent sources but dangerous brand anchors."

- Result: strengthened and refined.
- Evidence: Superprof direct profile now supports the premium story better than before, but the category context still pulls toward 14-18 EUR/h averages and Tusclases remains 30 EUR/h.
- What would weaken it: if marketplace leads consistently book at 40 EUR/h with good quality and no comparison objections.
- Next test: add `profile_seen`, `price_anchor_seen`, and `quoted_price_expected` to inquiry notes.

Favored idea tested against weakness: "A small website pricing copy patch is enough before GBP/LinkedIn."

- Result: refined.
- The patch is still the smallest useful owned-site edit, but it is not enough if Auris routes people to marketplace pages or lists inconsistent GBP service prices. Price coherence must include channel policy.

Cheaper/simpler alternative:

- Do not edit all marketplaces immediately. Keep owned traffic routed to the website and measure whether any direct leads mention 30 EUR marketplace anchors. If none do, marketplace cleanup can stay secondary.

Stop/change rule:

- If two qualified direct leads mention 30 EUR marketplace pricing before booking, marketplace price alignment becomes a fix-before-more-content task.
- If two marketplace leads book at 40 EUR/h or become good students despite seeing 30 EUR/online/channel pricing, keep marketplace price cleanup as lower priority.

## Price-Anchor Policy

| Surface | Policy | Exact Action |
| --- | --- | --- |
| Website | Keep 40 EUR/h and make the inclusion concrete. | Use personal-follow-up copy and include portal/vocabulary/progress language beside price. |
| GBP | Use owned-site 40 EUR/h anchor if services/prices are listed. | Service description should say private English classes with personal follow-up; do not list a lower online price unless it is truly available to GBP leads. |
| LinkedIn | Route to owned website/Talk only. | Do not mention marketplaces or lower channel prices in profile/post CTAs. |
| Superprof | Acceptable as discovery; main rate should remain 40. | If editing, consider removing/raising 30 EUR online unless deliberately channel-specific. |
| Tusclases | Main mismatch. | Decide whether 30 EUR is legacy/channel price or align to 40. Do not link from website while mismatch remains. |
| Lead notes | Mandatory during sprint. | Record `profile_seen`, `price_anchor_seen`, `quoted_price_expected`, `proof_mentioned`, `booked_trial`, `lead_quality`. |

## Implementation-Ready Website Copy

Private card:

- EN description: `1-on-1 classes with personal follow-up`
- EN bullets:
  - `Real conversation, correction and pronunciation work`
  - `Materials adapted to your goals`
  - `Vocabulary from class saved for review`
  - `Portal access, flashcards and progress tracking`

- ES description: `Clases 1-a-1 con seguimiento personal`
- ES bullets:
  - `Conversacion real, correccion y pronunciacion`
  - `Materiales adaptados a tus objetivos`
  - `Vocabulario de clase guardado para repasar`
  - `Portal, tarjetas y seguimiento de progreso`

Included strip support line:

- EN: `The live hour is only part of the work. I keep your materials, vocabulary and review organised between classes so the language comes back next time.`
- ES: `La hora en directo es solo una parte. Mantengo tus materiales, vocabulario y repaso organizados entre clases para que el ingles vuelva a aparecer la siguiente vez.`

GBP service description:

`Private English classes for Spanish speakers who want more confidence in real conversation. The class includes practical speaking, correction, tailored materials, saved vocabulary, portal review and progress tracking between sessions.`

Spanish version:

`Clases particulares de ingles para hispanohablantes que quieren ganar confianza en conversaciones reales. La clase incluye speaking practico, correccion, materiales adaptados, vocabulario guardado, repaso en el portal y seguimiento entre sesiones.`

## Strategic Synthesis

Strongest next move:

- Before more public content, make the 40 EUR/h value story coherent across the first trust surfaces: website pricing proof, GBP service price/descriptions if present, LinkedIn route-to-owned-site, and marketplace channel policy.

What not to do yet:

- Do not lower the website price.
- Do not hide website pricing.
- Do not add marketplace links to the website footer.
- Do not send GBP/LinkedIn traffic to Superprof/Tusclases.
- Do not create a new "business English package" just to justify price.
- Do not make GBP service prices lower than the website unless Auris truly wants a GBP-specific offer.

Risk of acting too early:

- Publishing a GBP/LinkedIn sprint before price coherence could create attention that enters a lower-price comparison path.

Risk of waiting:

- The current price proof gap is small and fixable. Over-waiting for perfect marketplace cleanup could delay useful GBP/review/referral evidence.

Decision:

- If implementation is approved, patch the website pricing copy first.
- If implementation is not approved, still apply the policy in owner-side profile edits and lead notes.

## Next Evidence Needed

1. Owner decision: align Tusclases/Superprof online to 40 EUR/h or keep as channel pricing.
2. If GBP services show prices, record exact owner-side service names/prices/descriptions.
3. If a lead appears, fill inquiry row with `price_anchor_seen`.
4. If site work is approved, implement the pricing copy patch and measure contact clicks/inquiry language.
5. If no owner/profile action arrives, next cycle should inspect GBP service-description readiness or current-student referral/price tolerance signals rather than reopening the same marketplace evidence.
