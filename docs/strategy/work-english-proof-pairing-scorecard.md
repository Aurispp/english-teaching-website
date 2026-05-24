# Work-English Proof Pairing Scorecard

Created: 2026-05-22 Cycle 25

Purpose: decide which proof should sit beside the first `Meeting Voice` message so the work-English test feels credible, personal, premium and Auris-shaped.

## Primary Decision

Pair the first Work-English message with **Google review confidence proof plus portal follow-up proof**.

Use this as the first proof stack:

1. Students often mention feeling more confident using English when the real moment arrives.
2. The class fixes the patterns Spanish speakers bring into meetings: speed, translation, pronunciation and phrasing.
3. Useful phrases and weak points are saved for review between classes.

Secondary proof:

- Ireland-raised bilingual background.
- 11+ years teaching Spanish speakers.
- Direct personal teacher relationship, not a rotating academy system.

Use invoice/NIF only as a practical footer detail for professionals, autonomos and small teams. Do not make it the emotional hook.

## Source Discovery

Primary question: Which proof element should be paired with the first Work-English `Meeting Voice` message: reviews, portal continuity, Spanish-speaker correction, Ireland-raised bilingual background, invoice/NIF, or professional-specific proof?

Possible evidence locations:

| Source Type | Why It Might Help | Used This Cycle |
| --- | --- | --- |
| Auris review library and live Google reviews endpoint | Direct proof of what students already praise | Yes |
| Live page metadata and campaign URLs | Shows whether the planned destinations are usable | Yes |
| Website component/code audit | Shows what proof is already public and where it appears | Yes |
| Teaching-platform code | Tests whether portal follow-up is real, not marketing fluff | Yes |
| Local/business-English competitors | Shows what category proof is table stakes | Yes |
| Competitor review snippets | Shows which proof buyers see around Barcelona | Yes |
| Professional-English coaches on LinkedIn/search | Shows how professionals talk about fear, meetings and confidence | Yes |
| Marketplace/professional tutor profiles | Shows price-anchor and proof pressure | Yes |
| General speaking-anxiety research | Useful context, but Cycle 24 already covered it | No, reused prior finding |
| YouTube/TikTok comments | Could show attention language, but weak for premium buyer intent | No |
| Current-student owner notes | Highest buyer relevance, but not available to the automation | Not available |

Highest-signal sources this cycle:

- Auris's own Google reviews endpoint and review-proof library.
- Competitor/professional pages that combine work moments with proof.
- Public LinkedIn professional-coach posts that show the same meeting/confidence language.

## Local Evidence

| Local Artifact | Finding | Strategic Meaning |
| --- | --- | --- |
| `review-proof-library.md` | The strongest review themes are confidence, meetings, adaptation, comfort speaking and continuity. | Review proof should lead the first work-English message. |
| Live Google reviews endpoint | `/.netlify/functions/google-reviews?language=es` and `language=en` return 5.0 rating, 15 reviews and 5 visible reviews each. | The review claim is live and current. |
| `work-english-pain-language-scan.md` | The first message should be dignified: `your English gets smaller`. | Proof should reduce risk without making the pain feel dramatic. |
| `professional-english-job-demand-scan.md` | Work moments are meetings, interviews, client calls, customer problems, presentations and international teams. | The content angle is real, but still not a product. |
| `content-strategy.md` | Current first test routes LinkedIn to Talk the Talk and GBP to homepage. | Proof and destination are already defined enough for one test. |
| `measurement-plan.md` | Manual notes remain necessary for inquiries and price anchors. | Do not infer channel success from clicks alone. |
| `linkedin-profile-readiness-and-first-post-plan.md` | LinkedIn needs profile/profile-link coherence before it can be a strong channel. | Keep the first post measured and modest. |
| `pricing-positioning.md` | Premium price needs proof before price resistance. | Avoid generic `business English` claims. |
| `src/components/GoogleReviewsSection.jsx` | The site already has a live review component. | Reviews are not hypothetical. |
| `src/components/SeoLandingPage.jsx` and `src/App.jsx` | Business and Talk routes exist with canonical/metadata handling. | Campaign destinations are usable, but not the first SEO bet. |
| `index.html` and `src/utils/analytics.js` | Direct `gtag` is present; full attribution still depends on consent and manual notes. | Use UTMs plus manual ledger. |
| Teaching-platform models/components | Class context, materials, homework logs, flashcards, SRS and assignments support between-class continuity. | Portal follow-up is a credible proof point. |

## Data/API Evidence

Live checks on 2026-05-22:

| URL | Result | Meaning |
| --- | --- | --- |
| `https://englishwithauris.com/` | 200, canonical homepage, metadata mentions Spanish speakers, Ireland-raised teacher and English for work. | Safe GBP destination. |
| `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller` | 200, UTM preserved, canonical `/talkthetalk`. | Safe LinkedIn post destination. |
| `https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=work_english_confidence&utm_content=profile_post` | 200, UTM preserved, canonical homepage. | Safe GBP post destination. |
| `https://englishwithauris.com/ingles-empresas-castelldefels` | 200, metadata mentions professionals, autonomos, small teams and NIF. | Usable proof page, but not the first traffic destination. |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, `places-new`, 5.0, 15 reviews, 5 visible. | Spanish proof endpoint works. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, `places-new`, 5.0, 15 reviews, 5 visible. | English proof endpoint works. |

No credentials were printed. No owner-side profile, Google or LinkedIn settings were changed.

## External Evidence

| Source | Evidence Point | Supports | Weakens |
| --- | --- | --- | --- |
| NELC New Executive Language Centre, `https://escuelasdeidiomas.com.es/es-es/i/16822-nelc-new-executive-language-centre/` | Local review snippets stress motivational, flexible and personalised classes adapted to needs. | Personal adaptation as buyer proof. | Work-specific proof is often thin in review snippets. |
| Callan School Barcelona, `https://www.callanschool.info/en/english-course` | Academy copy uses practical courses, fluency, confidence, work and small/flexible classes. | Confidence/work language is mainstream. | Generic confidence is not distinctive. |
| ThanksEnglish, `https://thanksenglish.com/` | Online academy sells Personal English Coach, live classes, platform, feedback after class and company courses. | Coach plus platform plus follow-up is a market-normal proof bundle. | Portal alone is not unique. |
| English Anywhere, `https://anywhere.es/ingles-empresarial-barcelona/` | Business English is framed around meetings, videoconferences, presentations, emails, negotiations, professionals and adapted methodology. | Work situations are real buyer language. | Auris should avoid broad academy-style business-English copy. |
| Business English Barcelona search result | Uses in-company courses, personalised programmes, native teachers and e-learning portal. | Portal/follow-up is valued in business-English category. | Corporate training language would blur Auris's personal position. |
| BCN English, `https://www.bcnenglish.com/en/home/` | In-company provider says professionals are busy, goal-driven and use English for business; offers personalised 1-1 executive classes and blended learning. | Professionals need practical, tailored support. | Corporate/HR framing is not Auris's near-term lane. |
| O'Sullivan's Learning Academy, `https://www.osullivansla.com/business-english` | Business English is sold as native teacher plus business professional, with SME/company/individual options. | Experience/teacher credibility matters. | Native-teacher proof is common and not enough. |
| David Cabezas LinkedIn post, `https://es.linkedin.com/posts/davidcabezaslanguagecoach_ingl%C3%A9sparaprofesionales-hablaringl%C3%A9sconconfianza-activity-7285626853397020674-7FJc` | A professional coach describes a client who knew English but blocked when speaking, then worked on meetings, confidence and communication style. | Meeting/confidence pain is visible in professional LinkedIn language. | The angle is crowded among coaches. |
| David Cabezas LinkedIn post, `https://es.linkedin.com/posts/davidcabezaslanguagecoach_aprenderdeloserrores-crecimientopersonal-activity-7199723252670185472-doAk` | Uses review/social proof around meetings, shame, comparison, confidence and labor-life vocabulary. | Reviews plus work-context proof is powerful. | Auris should not copy coaching-heavy transformation tone. |
| Cristina Business English, search result | Positions around speaking English with security/ease at work for Spanish-speaking professionals in 1:1 format. | Solo-professional competitor validates the lane. | `Business English` alone is not differentiating. |
| Premium English article, `https://premiumenglish.cl/como-vencer-miedo-hablar-ingles-en-publico/` | Fear of public speaking in English is treated as a serious confidence/preparation problem. | Speaking pressure is not just grammar. | Public-speaking content can drift away from English teaching. |
| What'S Up Barcelona / ThanksEnglish ecosystem | Large academy breadth includes business classes, speaking, fear reduction, exams and platform support. | Category buyers already see broad solutions. | Auris should stay narrower and personal. |
| Preply business-English profile result, `https://preply.com/es/profesor/4261588` | Marketplace profile promises meetings, interviews, confidence, clarity and better results. | Work-English demand exists in high-intent marketplaces. | Marketplace proof creates lower-price/comparison pressure. |

## Proof Pairing Scorecard

| Proof Element | Trust Value | Risk | Pairing Rank | Use In First Message |
| --- | --- | --- | --- | --- |
| Google review confidence and meeting proof | Very high | Can feel generic if not tied to method | 1 | Lead proof: `Students often mention the same result: they feel more confident using English when the real moment arrives.` |
| Portal/follow-up continuity | High | Competitors also claim platforms | 2 | Pair with method: `We save useful phrases and patterns so you can review them between classes.` |
| Spanish-speaker correction | High | Needs concrete examples over abstract claims | 3 | Explain why the class helps: translation habits, pronunciation, phrasing and speed. |
| 11+ years teaching Spanish speakers | High | Overused if repeated without outcome | 4 | Credibility line, not the headline. |
| Ireland-raised bilingual background | Medium-high | Can distract if over-explained | 5 | Profile/About proof; optional footer in post. |
| Invoice/NIF | Medium | Practical, not emotional | 6 | Add only for GBP/business-page context, not LinkedIn first post. |
| Company-class experience | Medium | May make the brand feel less personal | 7 | Use later for small teams, not first individual-professional post. |
| Marketplace/review proof | Medium | Lower-price anchors and comparison risk | 8 | Treat as research/proof source, not first destination. |

## Implementation-Ready First Post

Channel: LinkedIn first, reusable for private referral. Destination:

`https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`

Draft:

```text
You know the answer, but in the meeting your English gets smaller.

That is not just a grammar problem. It is speed, pressure, translation from Spanish, pronunciation habits and not having enough real practice with someone listening.

In class, we take the kind of meeting you actually have, practise the answer, fix the patterns and save useful phrases for review between classes.

Students often mention the same result: they feel more confident using English when the real moment arrives.

Try a short Talk the Talk prompt or message me about a free first class.
```

Optional softer version:

```text
You know what you want to say, but the meeting moves faster than your English.

That does not mean your English is bad. It usually means you need safer practice with the exact kind of moment you face at work.

In class, we practise the answer, fix the Spanish-to-English patterns and keep useful phrases ready for review between classes.

That is the confidence students often mention in reviews: not just learning more English, but being able to use it when it matters.
```

## Spanish Private/Referral Version

Use for a private message or referral explanation, not necessarily as a public LinkedIn post yet:

```text
Sabes lo que quieres decir, pero en la reunion tu ingles se hace mas pequeno.

No es solo gramatica. Es velocidad, presion, traduccion directa del espanol, pronunciacion y falta de practica real con alguien escuchando.

En clase podemos practicar situaciones reales de tu trabajo, corregir patrones y guardar frases utiles para repasarlas despues.

Si conoces a alguien a quien le pasa esto, ese es justo el tipo de ingles que trabajo.
```

## Stop / Change Rules

Stop or adjust the first-message test if:

- The post gets sympathy but no DMs, link clicks, Talk starts or trial interest after the first measured window.
- Inquiries mention only low-price comparisons or marketplace rates.
- Leads ask mainly for certificates/exams, not meetings, interviews, client calls or work confidence.
- The hook feels too exposed or anxiety-heavy in owner-side comments.

If that happens:

1. Keep the proof stack but test the `Interview` or `Client Call` variant.
2. Move the proof earlier in the message.
3. Use the homepage/GBP review route instead of Talk if people seem ready to book rather than practise.

## What Not To Do Yet

- Do not build a standalone `Business English Barcelona` SEO page from this evidence.
- Do not lead with invoice/NIF.
- Do not route the first post to marketplaces.
- Do not make portal/software the main promise.
- Do not use corporate training language such as audits, HR reports or FUNDAE unless a small-team lead explicitly asks.

## Next Evidence Needed

- Owner-side 24h/72h/7d LinkedIn metrics if this post is published.
- Talk events if visible: `talk_started`, `talk_completed`, `talk_trial_click`.
- Manual inquiry notes: `role_context`, `work_moment`, `pain_language`, `proof_mentioned`, `price_anchor_seen`, `booked_trial`, `lead_quality`.
- If no owner-side signal appears, inspect direct Google Business Profile review language for 5 solo/professional English tutors in Barcelona/Castelldefels and compare which proof buyers mention unprompted.
