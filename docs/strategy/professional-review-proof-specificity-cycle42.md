# Professional Review Proof Specificity Scan

Created: 2026-05-23 Cycle 42

Purpose: test the Cycle 41 recommendation by asking whether competitor review/proof surfaces actually make `Meeting Voice` believable, and what proof Auris should use so the message stays personal, premium and non-academy.

## Primary Question

Which proof should sit beside the first `Meeting Voice` Work-English message, now that competitor reviews and pages show similar confidence/business-English language?

Short answer:

Use review proof, but make it mechanism-specific. The public line should not be `I have good reviews` or `business English for meetings`. It should be:

`Students often mention confidence because we practise the real moment, correct the Spanish-to-English patterns, and keep useful phrases ready to review between classes.`

## Source Discovery

Possible source types considered before browsing:

| Source Type | Why It Might Reveal Proof Quality | Decision |
| --- | --- | --- |
| Auris live review endpoint | Direct proof baseline and freshest public count. | Use first. |
| Website review component/code | Shows whether public proof can be displayed safely. | Use. |
| Competitor testimonial pages | Reveal unprompted proof language from buyers/students. | Use. |
| Tutor marketplace profiles | Reveal proof plus price anchors and crowded claims. | Use as falsification. |
| Academy/business-English pages | Reveal table-stakes work moments and corporate language to avoid. | Use as contrast. |
| Google/GBP review snippets | Useful, but direct Google review scraping is unstable. | Use search-visible snippets/pages only; note limits. |
| Official Google review docs/policies | Required for safe review asks/replies. | Use. |
| Trust/review mirrors | Useful when they expose review themes, but source quality varies. | Use cautiously. |
| LinkedIn public comments | Could show professional proof language; access is unstable. | Defer unless owner-side evidence arrives. |
| Current-student outcomes | Highest-signal proof, unavailable to automation. | Await owner notes. |
| Search Console/GA4 | Measures traffic, not proof language. | Defer; not primary for this question. |

Highest-signal sources used:

- Auris live review endpoint.
- Website proof/review code.
- Competitor review/testimonial pages.
- Marketplace tutor profiles with price and review context.
- Official Google review/reply/policy docs.

## Local Evidence

| Local Artifact | Finding | Interpretation |
| --- | --- | --- |
| `research-log.md` Cycle 41 | Next packet said to inspect competitor/professional review snippets if no owner-side Meeting Voice signal arrived. | This cycle followed the handoff. |
| `work-english-signal-refresh-cycle41.md` | Meeting Voice is first; proof must prevent generic business-English drift. | Proof specificity is the next bottleneck. |
| `review-proof-library.md` | Auris proof already clusters around confidence, adaptation, professional situations, enjoyable practice and continuity. | Strong, but should be grouped by mechanism. |
| `local-review-proof-language-scan.md` | Earlier scan found confidence/adaptation are common in competitor reviews. | Cycle 42 tests whether the pattern still holds. |
| `work-english-proof-pairing-scorecard.md` | Prior decision: Google review confidence + portal follow-up + Spanish-speaker correction. | Strengthened, but wording must be sharper. |
| `content-strategy.md` | Meeting Voice post already includes review proof and Talk UTM. | Needs a more specific proof sentence. |
| `measurement-plan.md` | Manual fields already include `proof_mentioned`, `price_anchor_seen` and `lead_quality`. | Add proof-specificity interpretation, not more tracking clutter. |
| `pricing-positioning.md` | 40 EUR/h requires visible inclusion proof before price pressure. | Competitor marketplace evidence increases this need. |
| `market-intelligence.md` | Existing market map warns that confidence and platform/follow-up are crowded. | Use mechanism proof as differentiation. |
| `src/components/GoogleReviewsSection.jsx` | Public site fetches `/.netlify/functions/google-reviews?language=...`, shows rating/count and first three reviews, and links to Google. | Public proof is live, but static copy should stay count-neutral until owner truth. |
| `src/components/SeoLandingPage.jsx` | Landing pages include the Google reviews component after proof content. | Reviews already support route trust. |
| `src/translations.js` | Homepage copy already names real conversation, confidence, client presentations/interviews and portal review. | The brand language is aligned. |
| `teacher-assistant` Talk/dashboard/model scan | Portal code supports review/practice continuity through SRS, dashboard and Talk surfaces; no public claims were edited. | Portal follow-up is credible as support proof, not the lead claim. |

## Data / API Evidence

| Check | Result | Meaning |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | `source=places-new`, rating 5.0, reviewCount 16, five visible reviews. Visible themes include confidence, progress, adaptation, tools and practice. | Owned review proof remains strong and current enough for theme use. |
| `/.netlify/functions/google-reviews?language=en` | `source=places-new`, rating 5.0, reviewCount 16, five visible reviews, including a May 22, 2026 former-student/family recommendation pattern. | Public endpoint is stronger than older 15-review baseline, but owner truth still required before count-heavy copy. |
| `GoogleReviewsSection.jsx` code | Displays count dynamically from endpoint and falls back to Google reviews URL if endpoint fails. | Public site can display live count, but strategy docs should stay count-neutral until owner review truth. |
| Search Console | Not attempted this cycle because proof language, not search traffic, was the primary question and prior GSC access is scoped out. | Use last trusted GSC baseline. |

## External Evidence

| Source | Proof Signal | Supports | Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Google Business Profile Help, https://support.google.com/business/answer/3474050?hl=en | Businesses can read/reply to reviews, share review links/QR codes, and replies are public after review. | Review replies and owner review-truth gate. | Treating public endpoint alone as owner action proof. | High |
| Google Maps contributed-content policy, https://support.google.com/contributionpolicy/answer/7400114?hl=en-NZ | Reviews must reflect genuine experience; incentives, selective positive solicitation and requested specific content are disallowed. | Honest, pressure-free asks only. | Asking for keywords/themes. | High |
| English Anywhere, https://anywhere.es/ | Reviews stress personalised teaching, adaptation, professional teachers, flexible schedules and FUNDAE/company courses. | Adaptation/professionalism are table stakes. | Auris differentiating by "personalised" alone. | Medium-high |
| Hania on Superprof, https://www.superprof.es/native-english-speaker-would-love-transfer-knowledge-new-learners-and-make-sure-give-them-all-the-necessary.html | 20 EUR/h business-English tutor; profile/reviews emphasize self-confidence, comfort, day-to-day needs, patience and custom goals. | Confidence/comfort are common buyer proof. | Premium proof without specificity; marketplace price pressure. | High |
| Alex on Superprof, https://www.superprof.com.mt/english-teacher-native-british-with-years-experience-teaching-online-barcelona.html | 20 EUR/h profile combines 14 years, business meetings/negotiations/interviews, shared correction docs, confidence and career/CV review proof. | The exact Auris proof stack has lower-price competitors. | Generic meetings + follow-up as unique. | High |
| Aston School, https://astonschool.es/empresas/ | Company English page names confidence in meetings, negotiations, presentations, emails, video calls, pronunciation, native/bilingual teachers and FUNDAE. | Work moments are buyer language. | Corporate/FUNDAE framing for Auris. | High |
| Speak&Live Business English Barcelona, https://www.speakandlive.com/business-english-barcelona/ | Immersion day for professionals/directors promises real business situations, speaking/listening and confidence through native teachers and group/one-to-one formats. | Pressure-situation practice matters. | Event/academy style for Auris. | Medium-high |
| Callan review mirror, https://trustburn.com/reviews/callan-school-of-english-barcelona | Describes confidence/fluency through rapid questioning and business topics like presentations/negotiations/correspondence, while noting business transparency gaps. | Confidence through speaking pressure is familiar. | Review mirrors as definitive evidence. | Medium |
| Callan Business English course, https://www.callanschool.info/es/cursos-ingles-online/curso-de-ingles-online-business-english-callan-60-h | 60h group course for B2+ professionals emphasizes fluency, emails, vocabulary, practical method, reduced prices and weekly starts. | Academies own structured business-course language. | Auris trying to sound like a course catalogue. | High |
| OnEnglish Streaming, https://onenglishstreaming.com/ | Reviews mention private online classes, teacher care, platform materials, losing fear/shame and feeling more secure; page also offers professionals/companies. | Fear-to-confidence proof is powerful. | Portal/platform/friendly proof as unique. | Medium-high |
| Freeda Language Space, https://freedaspace.com/es/course/group-4h-en/ | Recent course page targets working/studying adults with communicative practical classes and confidence speaking from day one. | Adult confidence demand. | Group-course price/schedule alternatives. | Medium |

## Proof Pattern Comparison

| Proof Pattern | Appears In Market? | Distinctive For Auris? | Use In Meeting Voice? | Notes |
| --- | --- | --- | --- | --- |
| Confidence speaking | Very common | Medium if tied to actual meeting/native-speaker review theme. | Yes, but not alone. | It is the emotional proof, not the full argument. |
| Personal adaptation | Very common | Medium; stronger because Auris is solo/direct. | Yes, as secondary. | Avoid generic "tailored classes" without an example. |
| Real work situations | Very common in sales copy, thinner in reviews. | High if tied to student proof. | Yes. | This is where Auris can be more concrete than academies. |
| Spanish-speaker correction | Less visible in competitor reviews. | High. | Yes. | Name translation, phrasing, pronunciation and speed. |
| Follow-up/review between classes | Common in stronger tutors/platforms. | Medium-high because Auris built the portal. | Yes, as support. | Say `phrases ready to review`, not software-first. |
| Native/bilingual/experience | Common. | Medium. | Footer/profile proof. | Do not make it the hook. |
| Review count/rating | Common and price-compressing on marketplaces. | Medium. | Avoid count-heavy copy. | Count must be owner-confirmed. |
| FUNDAE/company training | Common among academies. | Low fit. | No. | Deliberately ignore unless warm team lead appears. |

## Three Alternative Proof Strategies Tested

| Strategy | Why It Is Tempting | Why It Is Weaker | Decision |
| --- | --- | --- | --- |
| Lead with `5.0 / 16 reviews` | It is concrete and public. | Owner truth/reply status still missing, and review count alone does not explain why 40 EUR/h is worth it. | Use dynamic component, but keep copy count-neutral. |
| Lead with generic `business English for meetings` | It matches search/category demand. | Competitors, academies and marketplaces all say it, often cheaper. | Avoid as headline. |
| Lead with marketplace-style tutor proof | It shows demand and recommendations. | It drags the buyer into 12-30 EUR/h comparison frames. | Use for research, not campaign destination. |
| Lead with mechanism-specific review proof | It connects outcome to Auris's method. | Requires discipline and manual lead notes to validate. | Best current option. |

## Implementation-Ready Proof Stack

Use this order in the first `Meeting Voice` post or private message:

1. Pain/moment:
   `You know the answer, but in the meeting your English gets smaller.`

2. Mechanism:
   `In class, we practise the exact kind of moment you face, correct the Spanish-to-English patterns that slow you down, and keep useful phrases ready to review between classes.`

3. Proof:
   `That is the kind of confidence students often mention: not perfect English, but feeling more able to use it when the real moment arrives.`

4. CTA:
   `Try one Talk the Talk prompt, or message me if this is the kind of English you need for work.`

Short GBP proof line:

`Students often mention confidence, but the work behind it is practical: real speaking practice, useful correction and review between classes.`

Short website/pricing proof line:

`The live hour is only part of the work: we practise, correct, and keep the useful language ready to come back to.`

## Safer Review Ask

Policy-safe version after a real outcome:

```text
If the classes have helped and you ever feel like leaving an honest Google review, it would help me a lot. No pressure at all, and only write what feels true to your experience.
```

Spanish:

```text
Si las clases te han ayudado y algun dia te apetece dejar una resena honesta en Google, me ayudaria mucho. Sin ninguna presion, y escribe solo lo que sea verdad para ti.
```

Avoid:

- Asking for a 5-star review.
- Asking only happy students.
- Asking for words like `meetings`, `confidence`, `Spanish speakers` or `Castelldefels`.
- Asking the student to mention private work details.
- Offering any incentive.

## Falsification

Favored idea tested:

`Reviews are the strongest proof asset for the first Meeting Voice post.`

Result:

Strengthened, but with a sharper rule: reviews should lead only when they are tied to the mechanism. Confidence and adaptation alone are too common.

What strengthened it:

- Auris's live reviews still show confidence, adaptation and continuity themes.
- Competitor reviews repeatedly prove that learners respond to confidence, comfort and adaptation.
- Official Google docs support replies and honest review links.

What weakened the broad version:

- Marketplace profiles combine similar proof with lower prices.
- Academies and business-English pages already own structured meetings/presentations/FUNDAE language.
- Several competitor review/testimonial pages use platform/follow-up language, so portal proof alone is not unique.

Stop/change evidence:

- If new inquiries do not mention reviews, confidence, work situations, correction or follow-up after 3-5 relevant contacts, stop using review-confidence as the first proof and test a more direct free-trial CTA.
- If leads mention marketplace price first, strengthen pricing proof before more Work-English posts.
- If owner review truth shows count/reply mismatch, fix review reply/truth before any count-heavy proof.

## Strategic Synthesis

Strongest next move:

Use the proof-specific Meeting Voice version once, then log what people mention first. The strategic win is not that Auris has reviews; it is that the reviews make a specific method credible.

What Auris should not do yet:

- Do not say `16 reviews` in static copy until owner truth confirms count/reply status.
- Do not ask students to include exact themes in reviews.
- Do not route professional posts to Superprof/Tusclases.
- Do not make the portal the emotional hook.
- Do not use FUNDAE/company-course language.

Evidence that would change the recommendation:

- A real inquiry mentions a different proof first, such as price, Ireland background, NIF, or interview prep.
- A review/referral ask produces awkwardness, no reply or low-fit leads.
- A competitor proof source shows a better solo-teacher pattern around Spanish-speaker correction and premium price without marketplace compression.

## Next Evidence Needed

1. Owner Review Truth: confirm public 5.0 / 16 and newest-review reply status.
2. One Meeting Voice proof-specific post/private message result.
3. Any inquiry row with `first_thing_mentioned`, `proof_mentioned`, `proof_specificity`, `work_moment`, `price_anchor_seen`, `booked_trial` and `lead_quality`.
4. If no owner-side action arrives, inspect actual local GBP profile screenshots/snippets from search results for 3-5 solo tutors, not more academy course pages.
