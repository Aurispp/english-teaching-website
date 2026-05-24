# Work-English Pain Language Scan

Created: 2026-05-22 Cycle 24

Purpose: test whether the Work-English Confidence Loop language from Cycle 23 matches how Spanish-speaking adults and professionals publicly describe the problem, and turn the strongest signals into a first-post/message ladder.

## Primary Decision

The pain language is real, but the public wording should be softened for Auris's premium personal brand.

Use:

`your English gets smaller`

or:

`you know what you want to say, but the moment is too fast`

More carefully than:

`panic`, `I freeze`, or `I block`, unless it appears in a personal story or student/review language.

The strongest pattern is:

- they can read/listen/write better than they can speak spontaneously
- they may have B2/C1 or years of study
- the problem appears in live situations: interviews, meetings, client calls, presentations, native speakers, accents and Q&A
- they want useful practice, specific feedback and a safer place to rehearse
- lower-priced tutors and academy/corporate offers exist, so Auris must pair the pain with personal diagnosis, Spanish-speaker correction and portal follow-up

## Source Discovery

Possible evidence locations considered before browsing:

| Source Type | Why It Might Matter | Decision |
| --- | --- | --- |
| Spain/LatAm Reddit career threads | Direct learner language around interviews, work and blocking. | Keep; high-signal pain language, medium buying intent. |
| Spanish adult anxiety research | Tests whether "blocking" is backed by anxiety/WTC evidence, not just marketing copy. | Keep; high-signal falsification. |
| Spanish/Barcelona professional coach pages | Shows what paid alternatives promise and how testimonials describe progress. | Keep; high signal for competitive positioning. |
| Marketplace professional-English profiles | Reveals price anchors and offer claims near Barcelona/Madrid. | Keep selectively; useful falsification. |
| Academy business-English pages | Shows generic/corporate framing to avoid. | Keep as contrast. |
| Corporate language-training platforms | Shows market trend around workplace performance and AI/self-paced practice. | Keep as outside-in trend, not positioning model. |
| Local Google reviews for competitors | Useful later for proof language, but hard to access fully. | Defer. |
| LinkedIn comments | Useful but often gated/noisy. | Defer unless direct public thread appears. |
| YouTube/TikTok comments | Could reveal anxiety language, but low source stability. | Defer this cycle. |
| Current-student lead notes | Highest buyer proof, but owner-side only. | Await owner input. |

Highest-signal source types used:

- public career/community threads
- Spanish adult language-anxiety research
- one-to-one/professional coach pages with testimonials
- marketplace profiles with visible price anchors
- corporate/product pages as trend contrast

## Local Evidence

Local artifacts inspected this cycle included:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `professional-english-job-demand-scan.md`
- `content-strategy.md`
- `measurement-plan.md`
- `market-intelligence.md`
- `review-proof-library.md`
- `linkedin-profile-readiness-and-first-post-plan.md`
- `pricing-positioning.md`
- `automation-research-loop.md`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/App.jsx`
- `teacher-assistant/frontend/src/pages/TeacherOverview.tsx`
- `teacher-assistant/backend/app/db/models.py`
- platform code references around company classes, class context, flashcard/style context, class notes and homework logs

Local interpretation:

- Auris's existing review themes already match the pain-language scan: confidence, meetings, comfort speaking, adaptation and follow-up.
- The LinkedIn/About plan already uses the right first hook: `when someone asks for your opinion, your English gets smaller`.
- The platform can support this promise with stored vocabulary, class notes, flashcards, homework logs and class context.
- The website review endpoint path to use is `/.netlify/functions/google-reviews?language=...`; `/api/google-reviews` falls back to the SPA and should not be used in future checks.

## Data / API Evidence

Live checks on 2026-05-22:

| Check | Result | Interpretation |
| --- | --- | --- |
| Homepage | 200, canonical present, title and description aligned with Spanish speakers, Ireland-raised teacher and English for work. | Safe GBP/referral destination. |
| LinkedIn Post 1 Talk UTM | 200, final URL preserves UTM, canonical remains `/talkthetalk`. | Safe first LinkedIn destination. |
| GBP Work-English homepage UTM | 200, final URL preserves UTM, canonical homepage. | Safe GBP post destination. |
| `/ingles-empresas-castelldefels` | 200, title/description name professionals, autonomos, small teams and NIF. | Exists, but still should not be primary destination until stronger proof/index signal. |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews. | Review proof still available. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews. | Bilingual proof still available. |
| `/api/google-reviews?language=es` | 200 SPA HTML fallback, not JSON. | Avoid this path in future automation checks. |

## External Evidence

| Source | Signal | Supports | Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Reddit r/askspain interview thread, https://www.reddit.com/r/askspain/comments/1j7tpt0/refrescar_ingl%C3%A9s_entrevista_de_trabajo/ | Spain-based poster has B2 but needs an English job interview soon; comments say speaking spontaneously is harder than writing and certificates matter less at interview time. | Interview-specific practice, not generic study. | Certificate-only positioning. | Medium-high |
| Reddit tech worker thread, https://www.reddit.com/r/taquerosprogramadores/comments/1qm2jn8/no_se_ingles_y_me_contrataron_en_usa/ | Worker passed English interviews but struggles with accents, client calls and speaking under pressure after starting the job. | Client-call and first-month-at-work English. | Assuming "passed interview" means confidence is solved. | Medium |
| Reddit Colombia interview thread, https://www.reddit.com/r/Colombia/comments/16fyucd/primera_entrevista_en_ingles/ | Spanish speaker with B2 says reading/writing are manageable but speaking in an English interview is frightening. | Output gap and interview practice. | Reading/writing-led offer. | Medium |
| University of Alicante thesis, https://rua.ua.es/entities/publication/e5f0422e-d2ca-42ad-b738-5df9e375b918 | Spanish adult B2 learners were studied with FLCAS; teacher anxiety-reducing strategies and learner self-concept matter. | Auris's low-shame corrective feedback and confidence framing. | "Just practise more" as complete answer. | High |
| Barrios & Acosta-Manzano, adult learners in Spain, https://journals.sagepub.com/doi/10.1177/13621688211054046 | In adult Spanish FL learners, anxiety is strongly associated with willingness to communicate in English; work/certificate pressure is also present. | Confidence/WTC as strategic core. | Pure proficiency-level framing. | High |
| Springer online oral task feedback study, https://link.springer.com/article/10.1186/s41239-017-0056-z | Higher-anxiety oral learners rated teacher feedback especially useful; feedback can reduce anxiety and increase confidence. | Human feedback bridge and portal follow-up. | AI/self-practice alone as enough. | High |
| Cambridge accent anxiety article, https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/assessing-accent-anxiety-a-measure-of-foreign-english-speakers-concerns-about-their-accents/A394529A8E5405E0C2DDF60E4A591EC3 | Accent concerns outside the classroom can reduce confidence; fear of negative evaluation is central. | Pronunciation for clarity, not accent erasure. | Native-like accent as the promise. | High |
| Marina Portero Coach, https://www.marinaportero.com/ | Testimonials mention blocking in work meetings, fear of foreign calls, weekly client-update meetings and resolving conflicts in English. | Work moments and confidence language. | "Business English" as abstract category. | High |
| Mery School of English, https://www.meryschoolofenglish.com.es/sobre-nosotros/ | Uses a common Spanish phrase pattern: understanding English but blocking when it is time to speak; connects work/travel with old school methods. | Spanish-school output-gap language. | Overly corporate framing. | Medium-high |
| Vane Business English, https://vanebusinessenglish.com/ | Native Spanish-speaking professional audience; pain includes hesitating with colleagues/clients/managers, meetings/presentations, better jobs/promotions and platform/support. | Work-English ladder and portal proof. | Auris pretending the angle is unique. | High |
| Beyond Grammar, https://www.beyondgrammar.net/ | Professionals use English daily but feel less natural/effective in meetings/presentations; testimonials value tailored feedback and confidence in business meetings. | "Clarity and control" professional wording. | Overusing the word "freeze" for high-status buyers. | Medium-high |
| Superprof Ana profile, https://www.superprof.es/comunicacion-oratoria-ingles-entrena-voz-presencia-claridad-para-hablar-con-naturalidad-confianza-liderar-equipos.html | 65 EUR/h professional communication coach uses voice, presence, clarity, interviews, meetings and blockage; premium price is possible with strong positioning. | Premium professional-English angle. | 40 EUR/h as too high by default. | Medium-high |
| Superprof Ava Barcelona, https://www.superprof.es/experienced-business-english-coach-for-professional-writing-confident-speaking-and-real-world-communication-skills.html | Barcelona marketplace profile offers similar professional writing/speaking/meetings/interviews at 25 EUR/h. | Marketplace price-anchor risk. | Standalone "business English" value without personal proof. | High |
| English Anywhere Barcelona, https://anywhere.es/ingles-empresarial-barcelona/ | Academy-style business English page names meetings, clients, interviews, presentations, calls, emails, negotiation and corporate courses. | Confirms common work-moment list. | Academy/corporate positioning for Auris. | High |
| Talaera, https://www.talaera.com/ | Corporate platform combines instructor coaching, self-paced learning and AI conversation practice around real workplace communication. | Human-plus-practice/portal logic. | Small personal teacher copying enterprise L&D framing. | Medium-high |

## Pain-Language Matrix

| Public Pain Pattern | Better Auris Wording | Proof/Practice Angle | Best Channel |
| --- | --- | --- | --- |
| `I understand, but speaking is harder` | `You know more English than you can access in the moment.` | Conversation practice with correction of Spanish transfer patterns. | LinkedIn, GBP |
| `I have B2/C1, but interviews scare me` | `The certificate is not the interview.` | Rehearse career story, examples and follow-up questions. | LinkedIn, Talk prompt |
| `Client calls make me nervous` | `Prepare the phrases before the call, then practise the messy part.` | Client update/incident role-play, pronunciation for clarity. | GBP, referral |
| `I sound less professional in English` | `Feel as clear in English as you are in Spanish.` | Meeting voice, structure, rhythm, useful phrases saved in portal. | LinkedIn |
| `Accents and speed make me lose confidence` | `You can ask for clarification without sounding lost.` | Clarification phrases, listening-to-reply practice. | Talk prompt, class material |
| `I freeze when people are listening` | `Your answer gets smaller when the pressure rises.` | Low-shame speaking reps plus targeted feedback. | LinkedIn, referral |
| `I need English for promotion/better work` | `Practise the English moments attached to the role you want.` | Meetings, interviews, presentations, proposals. | LinkedIn, private ask |

## First Message Ladder

Use one message at a time, not a campaign dump.

### Message 1: Meeting Voice

Hook:

`You know the answer, but in the meeting your English gets smaller.`

Body:

`That is not just a grammar problem. It is speed, pressure, translation from Spanish, pronunciation habits and not having enough real practice with someone listening.`

`In class, we can take the kind of meeting you actually have, practise the answer, fix the patterns and save useful phrases for review between classes.`

CTA:

`Try a Talk the Talk prompt or message me about a free first class.`

### Message 2: Interview

Hook:

`A certificate does not answer the interview question for you.`

Body:

`Many people have a B2 or C1 and still feel nervous when the interview changes to English. The useful practice is not memorising random phrases. It is explaining your own work clearly, answering follow-up questions and sounding like yourself.`

CTA:

`If you have an interview coming up, we can practise your real examples in a free first class.`

### Message 3: Client Call

Hook:

`Client calls are where English gets real very quickly.`

Body:

`You may understand the topic, but then the accent, speed, problem and pressure arrive together. We can practise the calls you actually have: asking for clarification, explaining the issue, giving an update and keeping the conversation calm.`

CTA:

`Message me if this is the kind of English you need for work.`

### Message 4: Clarity, Not Accent Erasure

Hook:

`You do not need to erase your accent. You need people to understand you clearly.`

Body:

`For Spanish speakers, small pronunciation habits can make good English sound less clear than it really is. I focus on clarity, rhythm and the sounds that matter most, so your ideas land better in meetings, interviews and conversations.`

CTA:

`Try a short speaking prompt or ask me about a free first class.`

## Falsification

Favored idea tested:

`Freeze/block pain language is the right public hook for the Work-English Confidence Loop.`

Result:

Strengthened, but refined.

What changed:

- The pain is real and repeated across community threads, testimonials, coach pages and research.
- For premium professional buyers, `freeze/block` can feel a little exposed or low-status if used too bluntly.
- The more Auris-shaped public phrase is `your English gets smaller`, with `freeze/block` reserved for relatable examples, not the headline every time.

Cheaper/simpler alternative that might beat it:

- Keep the existing LinkedIn meeting hook and publish only one post before building new assets.

Stop/change evidence:

- If the hook gets sympathy but no clicks/DMs/inquiries, test the interview or client-call hook before creating more content.
- If leads respond with certificate/exam needs, route them to exam support instead of forcing Work-English.
- If leads mention price or marketplace comparisons first, improve price/proof framing before more professional-English posts.

## Recommendation

The next public test should be the `Meeting Voice` message, not a new page.

Best destination:

- LinkedIn: `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`
- GBP: homepage UTM if posted there first.

Measure:

- profile/post views
- link clicks if visible
- DMs/messages
- Talk starts/completions/trial clicks if available
- manual lead notes: `role_context`, `work_moment`, `price_anchor_seen`, `booked_trial`, `lead_quality`

## What Not To Do Yet

- Do not create a `business English Barcelona` SEO page from this alone.
- Do not make `panic/fear` the entire brand voice.
- Do not compete with academies on corporate breadth, FUNDAE or courses for companies.
- Do not compete with marketplaces on price.
- Do not treat corporate platforms as models for Auris's tone.

## Next Evidence Needed

1. Owner-side confirmation whether LinkedIn About/Open-to-Work/primary role were cleaned up.
2. One Work-English post or private referral sentence used in the real world.
3. Manual inquiry notes from any professional lead.
4. If no owner-side signal arrives, inspect local competitor Google reviews for work-English wording and one Spanish-speaking professional community outside Reddit.
