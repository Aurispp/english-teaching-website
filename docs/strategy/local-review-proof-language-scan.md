# Local Review Proof Language Scan

Created: 2026-05-22 Cycle 26

Purpose: compare Auris's strongest review proof against public review language from nearby/business-English competitors and marketplace tutors, then turn the pattern into practical GBP, LinkedIn and review-request guidance.

## Primary Decision

Keep reviews as the first proof layer, but make the proof more specific:

1. **Confidence in live speaking** is the strongest recurring review language across Auris and competitors.
2. **Adaptation to the learner's real needs** is the second strongest proof language.
3. **Correction without killing fluency or comfort** is the most Auris-shaped bridge from confidence to method.
4. **Follow-up/materials/platform** is valuable, but only as support for the teacher relationship.

The first Work-English proof line should therefore stay:

`Students often mention the same result: they feel more confident using English when the real moment arrives.`

But GBP/review replies should increasingly name the mechanism:

`real speaking practice, useful correction, and review between classes.`

## Source Discovery

Primary question: what proof do buyers/students mention unprompted in local/professional English reviews, and does that strengthen or weaken Auris's review-led proof stack?

Possible source types:

| Source Type | Why It Might Help | Used |
| --- | --- | --- |
| Auris live Google reviews endpoint | Baseline owned proof | Yes |
| Local academy Google review mirror pages | Direct local review language and GBP-like snippets | Yes |
| Business-English academy review pages | Work-specific review proof | Yes |
| Marketplace tutor review pages | Price and proof pressure for private teachers | Yes |
| Solo professional-English coaches | Closest positioning alternatives | Yes |
| Official Google review/reply docs | Policy and review-use constraints | Yes |
| Google Maps review policy | Prevents unsafe review-generation advice | Yes |
| Meetup/local professional events | Outside-in community signal for professional confidence demand | Yes |
| YouTube/TikTok comments | Good for attention, weak for premium trust | No |
| LinkedIn owner analytics | Best channel signal, unavailable | No |
| Current student notes | Best buyer signal, unavailable | No |

Selected sources:

- Local review pages from EscuelasDeIdiomas for Idix, Callan, Yolk and English for Business.
- Marketplace/private tutor profiles for Tim and Avantika.
- My Language Coach professional page.
- Google official review help and Maps policy.
- Meetup Business English topic/event page as a community signal.

## Local Evidence

| Local Artifact | Finding | Meaning |
| --- | --- | --- |
| `review-proof-library.md` | Auris reviews already contain confidence, meetings, adaptation, comfort speaking and continuity. | Auris's proof stack matches the strongest market pattern. |
| Live Google reviews endpoint | Spanish and English review endpoints still return 5.0/15, 5 visible reviews each. | Owned review proof is current. |
| `work-english-proof-pairing-scorecard.md` | Cycle 25 chose review confidence plus portal follow-up as the first proof pairing. | This cycle tests that choice against competitor review language. |
| `content-strategy.md` | First Meeting Voice draft already includes review proof and portal follow-up. | Ready, but can be sharpened by this review-language scan. |
| `measurement-plan.md` | `proof_mentioned` was added for Work-English inquiries. | Keep tracking which proof actually matters. |
| `market-intelligence.md` | Cycle 25 warned that competitors also claim meetings/confidence/platforms. | Review language must show Auris's method, not only the category. |
| `hypotheses.md` | H009/H013/H021/H025 need owner-side tests but have enough evidence for one message. | No need for another broad strategy pass before testing. |
| `src/components/GoogleReviewsSection.jsx` | The site fetches the Netlify Google reviews endpoint and has a Google fallback link. | The public site can show current review proof. |
| `src/components/SeoLandingPage.jsx` | Landing pages place Google reviews after core proof content. | Reviews are already a route-level trust surface. |
| Teaching-platform code scan | Homework logs, assignments, materials, flashcards and SRS support between-class proof. | Portal continuity can be credible if worded as follow-up, not software. |
| Website git status | Strategy docs are untracked; no public files changed. | Research only; no public-facing change. |
| Teacher-assistant git status | Repo remains dirty with unrelated temp/screenshot artifacts. | Inspected only; no edits made. |

## Data/API Evidence

Live checks on 2026-05-22:

| Check | Result | Meaning |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews. | Spanish endpoint works. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews. | English endpoint works. |
| Talk UTM for Meeting Voice | 200, UTM preserved, canonical `/talkthetalk`. | LinkedIn destination still safe. |
| GBP Work-English homepage UTM | 200, UTM preserved, canonical homepage. | GBP destination still safe. |

The visible Google review snippets currently available through the endpoint include:

- Spanish endpoint: friendliness, adaptation, confidence/progress, dynamic classes, comfort speaking, tools/recommendations and family trust.
- English endpoint: family trust, dynamic classes, practical/fun classes, learning confidence and teacher reliability.

## External Evidence

| Source | Review/Market Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Google Business Profile Help, `https://support.google.com/business/answer/3474050?hl=en` | Businesses can reply to reviews; helpful replies show responsiveness; review links/QR codes can be shared. | Replying and asking safely. | Passive review proof. |
| Google Maps policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en-NZ` | Reviews must be genuine/unbiased; incentives, selective positive solicitation, pressure and requested wording are disallowed. | Honest specific review asks. | Asking students for exact keyword reviews. |
| Idix Lingua, `https://escuelasdeidiomas.com.es/es-es/i/15225-idix-lingua-idiomas-para-empresas/` | Reviews repeatedly mention professional needs, adaptation, motivation, confidence in conversations, safe correction and online/blended support. | Auris's review/confidence/follow-up stack. | Treating portal as unique. |
| Callan School, `https://escuelasdeidiomas.com.es/es-es/i/4760-callan-school-of-english-academia-de-ingles-en-barcelona/` | Review and summary language stresses speaking from day one, confidence, fluency, flexible schedules and native/accent exposure. | Confidence/speaking proof. | Generic confidence alone as distinctive. |
| Yolk Academy, `https://escuelasdeidiomas.com.es/es-es/i/16369-yolk-academy/` | Business-English reviews mention daily speaking practice, prepared thematic content and varied resources. | Work-context + prepared materials proof. | Work-English topic alone as unique. |
| English for Business, `https://escuelasdeidiomas.com.es/es-es/i/16747-english-for-business/` | Reviews mention team needs being understood, progress from beginner to work-use ability, native teachers and adaptation. | Work-use and team proof. | Corporate-style positioning for Auris. |
| Tim on Superprof, `https://www.superprof.es/english-for-real-professional-communication-speak-the-way-you-think-clearly-confidently-effortlessly-results-guaranteed.html` | Premium-ish tutor proof combines clarity/confidence/control, professional communication, 74 reviews, outside-class work and specific feedback/materials. | Premium proof must be dense and specific. | 40 EUR/h feeling premium if proof is thin; Tim appears at 35 EUR/h. |
| Avantika on Superprof, `https://www.superprof.es/quieres-superar-entrevistas-ingles-brillar-reuniones-dar-presentaciones-espectaculares-con-confianza-soy-avantika-con.html` | Reviews and copy mention interviews, meetings, confidence, role play, comfort speaking, tailored lessons and Spanish explanations. | Spanish-speaker support and role-play method. | Assuming Spanish/bilingual explanation is unique by itself. |
| My Language Coach, `https://mylanguagecoach.net/en/language-training-for-professionals/` | Professional training page stresses sector-specific English, practical work situations, flexibility, continuous assessment and progress monitoring. | Professional need for tailored work-context learning. | Academy/training-plan language for Auris. |
| Meetup Business English, `https://www.meetup.com/topics/business-english/es/` | Spain topic page shows groups/events around Business English, elevator pitches, women speaking confidently and meetings/professional opinions. | Outside-in professional-confidence demand. | Free/low-cost group events as premium buyer proof. |

## Proof Pattern Map

| Proof Pattern | Sources Where It Appears | Use For Auris | Risk |
| --- | --- | --- | --- |
| Confidence speaking live | Auris, Idix, Callan, Tim, Avantika, Meetup | Lead proof across GBP/LinkedIn/referrals. | Too generic unless tied to method. |
| Adaptation to personal/professional needs | Auris, Idix, Yolk, English for Business, Tim, My Language Coach | Core premium/private-teacher proof. | Academies also claim it. |
| Correction while preserving fluency/comfort | Auris, Idix, Avantika, Tim | Strong method bridge for Spanish speakers. | Needs concrete examples over vague reassurance. |
| Real work situations | Idix, Yolk, English for Business, Tim, Avantika, My Language Coach, Meetup | Validates Meeting Voice, Interview, Client Call variants. | Crowded category language. |
| Follow-up/materials/platform | Auris, Idix, Tim, My Language Coach | Use as continuity proof. | Not unique if separated from Auris's teaching. |
| Native/background credentials | Callan, English for Business, Tim, My Language Coach | Secondary credibility only. | Can sound like an academy/native-teacher commodity. |
| Large review volume | Callan, Yolk, Tim, Idix | Shows review count itself matters. | Auris has fewer reviews; needs specificity and freshness. |
| Price/value proof | Idix, Superprof pages | Track price anchors carefully. | Marketplace pages compress perceived price. |

## Strategic Interpretation

Cycle 25's proof stack is strengthened, but with one refinement:

- Reviews should lead.
- Portal follow-up should support.
- Spanish-speaker correction should explain the mechanism.
- Review replies and future review asks should try to surface exact outcomes from real student experience, without asking for keywords.

The idea to weaken:

`Auris can win work-English proof simply by saying he teaches meetings/interviews and has a portal.`

Result:

- Weakened. Competitors and marketplaces already say versions of this. The winning proof needs to say what students feel changed and how Auris helped it change.

Cheaper/simpler alternative that could beat the first post:

- One honest review/referral ask after a real student win may create stronger proof than a new public post. If a current student recently used English successfully in a meeting/interview/client call, that review/referral signal should outrank more content drafting.

## Implementation-Ready Output

### Review Reply Language Bank

Use when replying to relevant Google reviews. Keep it short and specific.

Confidence/speaking:

```text
Thank you so much, [Name]. I am really happy the classes have helped you feel more confident speaking English. That is always one of the main goals: useful practice, clear correction, and enough repetition for English to feel easier in real situations.
```

Professional situation:

```text
Thank you, [Name]. I am really glad the classes have helped with English in real work situations. Practising the exact moments you need, and then reviewing the useful phrases afterwards, is where a lot of the confidence starts to grow.
```

Spanish-speaker correction:

```text
Thank you so much, [Name]. It has been great working on the patterns that make English feel harder than it needs to be: direct translation, pronunciation, phrasing and confidence when speaking. I am delighted the classes have helped.
```

Continuity/follow-up:

```text
Thank you, [Name]. I am really happy the follow-up between classes has been useful. A good class should not disappear when the call ends; the phrases, corrections and practice should be easy to come back to.
```

Spanish equivalents:

```text
Muchas gracias, [Name]. Me alegra mucho que las clases te hayan ayudado a sentirte con mas confianza al hablar ingles. Esa es una de las ideas principales: practica real, correccion util y suficiente repeticion para que el ingles sea mas comodo en situaciones reales.
```

```text
Gracias, [Name]. Me alegra mucho que las clases te hayan ayudado con situaciones reales de trabajo. Practicar momentos concretos y despues repasar frases utiles es una parte importante de como crece la confianza.
```

### Safe Review Ask After A Work-English Win

Use only after a genuine student outcome, without pressure or requested wording:

```text
If the classes have helped you with English at work and you ever feel like leaving an honest Google review, it would help me a lot. No pressure at all, and only write what feels true to your experience.
```

Spanish:

```text
Si las clases te han ayudado con el ingles en el trabajo y algun dia te apetece dejar una resena honesta en Google, me ayudaria mucho. Sin ninguna presion, y escribe solo lo que sea verdad para ti.
```

### GBP Post Refinement

Use the review-language pattern from the scan:

```text
Students often tell me the biggest change is not just knowing more English. It is feeling more confident when they actually have to speak.

In class, we practise real situations, fix the Spanish-to-English patterns that slow you down, and keep useful phrases ready to review between classes.

Private English classes online, with local options around Castelldefels when the schedule fits.
```

Destination:

`https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=review_confidence_sprint&utm_content=confidence_real_situations`

### LinkedIn Proof Line Variant

If the Meeting Voice post feels too abstract, replace the proof paragraph with:

```text
The change students often mention in reviews is confidence: not perfect English, but feeling more able to use it when the real moment arrives.
```

## Stop / Change Rules

Stop using review confidence as the first proof if:

- New inquiries do not mention confidence, reviews, speaking, work situations or follow-up after 3-5 relevant contacts.
- Leads repeatedly mention price marketplaces before any proof.
- New reviews drift toward children/exams only, making the professional proof less fresh.

If that happens:

- Use a current-student referral ask before more public posts.
- Strengthen price/proof architecture before scaling LinkedIn.
- Use exam/Cambridge proof if the market signal shifts toward certification.

## Next Evidence Needed

- Owner-side GBP review reply/review freshness status.
- Any new review/referral outcomes from the micro-sprint.
- If no owner-side signal, inspect five more solo tutor/private teacher review pages, not only academies.
- Compare one high-proof private teacher profile against Auris's public LinkedIn/About surfaces after Auris finishes profile changes.
