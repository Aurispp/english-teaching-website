# Current Student Continuity Proof

Created: 2026-05-24 Cycle 57

Purpose: decide how the student portal should compound retention, referrals and future proof while Auris is close to full, without building another feature or turning current students into a marketing project.

## Primary Question

While Auris is nearly full and acquisition is in Trust Maintenance Mode, what is the smallest current-student continuity proof system that can show whether the portal is creating real between-class progress?

## Working Answer

Run a 2-row continuity proof sprint with current students before building more portal UI.

The portal already has the important pieces: reviewed feedback, Google Docs/class notes links, assignments, modular work, flashcards, Talk the Talk, and teacher-side homework logs. The unproven part is whether students experience these as a helpful continuation of class, and whether Auris can naturally bring that between-class work back into the next lesson.

This cycle weakens the idea that the next useful action is another `Next 15` spec. The next proof should be two anonymous real-student rows:

1. One student who already uses the portal or flashcards.
2. One student who is more WhatsApp/notes-first or lower-portal-use.

For each, Auris gives one small optional step after class, then observes whether it shows up in the next class. No code, no public claims, no new table.

## Source Discovery

Before browsing, the highest-signal evidence for this question seemed likely to live in:

| Source Type | Why It Might Help | Chosen? |
| --- | --- | --- |
| Current-student replies | Only source that proves whether the idea feels helpful or like homework. | Missing, highest priority |
| Student dashboard code | Shows whether the current first screen already creates continuity. | Yes |
| Teacher overview code | Shows whether Auris has an existing place to record follow-up. | Yes |
| Homework-log model/routes | Tests whether a no-code proof sprint can use existing workflow. | Yes |
| SRS stats routes/UI | Shows whether measurable between-class practice exists. | Yes |
| Website portal/pricing copy | Shows what is already being promised publicly. | Yes |
| Prior platform artifacts | Prevents writing another duplicate spec. | Yes |
| Live API/portal checks | Confirms current production health and auth boundary. | Yes |
| Official learning-app docs | Shows category expectation for guided next steps. | Yes |
| Tutor-platform product pages | Shows how independent tutors/package platforms frame between-session practice. | Yes |
| Academic language-learning research | Tests whether recommendations/feedback/portfolios matter educationally. | Yes |
| Community complaint threads | Finds the risk language around homework, forced paths and AI/generic practice. | Yes |

Chosen source families: local strategy memory, platform code, live production/API checks, official/product documentation, one research source, and community complaint signals.

## Local Evidence

| Artifact | Signal | Interpretation |
| --- | --- | --- |
| `research-log.md` Cycle 56 | Last packet says stop repeating review-reply theory if no owner evidence arrives. | Rotate to another compounding proof thread. |
| `research-roadmap.md` RQ005 | Next evidence for platform retention is anonymous pilot rows, not another spec. | Use current-student proof. |
| `platform-backlog.md` | `Your next 15 minutes` is already the P0 concept and should not be re-specified. | The artifact should be a proof bridge. |
| `next-15-proof-pilot-cycle46.md` | Manual pilot was already preferred over implementation. | Preserve this gate. |
| `next-15-pilot-tracker.md` | Existing anonymous tracker can handle rows. | Do not create an app table. |
| `retention-baseline-and-manual-pilot.md` | Prior safe baseline shows meaningful SRS usage and low homework-log usage. | Use SRS as context, not causal proof. |
| `StudentDashboard.tsx` | Student surface has feedback, class notes, flashcards, tasks and practice routes. | The ingredients exist; the best next step is still not obvious. |
| `FlashcardStats.tsx` | Shows due cards, recall score, total cards and assigned decks. | SRS can make progress visible. |
| `TeacherOverview.tsx` | Teacher command center shows pending feedback, SRS recall, practice metrics and attention items. | Auris already has teacher-side continuity cues. |
| `ClassHomeworkLog` model | Stores message, source, target students and assigned date. | Existing workflow can record the suggestion. |
| Homework-log routes | GET/POST/DELETE exist for `/api/classes/{class_id}/homework-log`. | No new backend needed for first proof. |
| `src/components/PlatformShowcase.jsx` | Public site already shows platform screenshots and features. | Claims should stay modest until current-student proof exists. |
| `src/components/TeachingPillars.jsx` and `translations.js` | Public copy says learning continues between classes via portal, materials, flashcards and progress. | This is safe, but stronger next-step claims need proof. |
| `PricingSection.jsx` | Pricing now has quieter future-availability posture and portal inclusion. | Retention proof should support premium value without pushing bookings. |

## Data And API Evidence

Live checks on 2026-05-24:

| Check | Result | Interpretation |
| --- | --- | --- |
| `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` | HTTP 200, `{"status":"ok"}`. | Production teaching API is reachable. |
| `GET /api/lms/students/me` without auth | HTTP 401, `Authorization header missing`. | Student profile data remains protected. |
| `GET /api/srs/students/me/flashcards/stats?class_id=1` without auth | HTTP 401, `Authorization header missing`. | SRS stats remain protected. |
| `HEAD https://english-with-auris-portal.netlify.app/student/dashboard` | HTTP 200 Netlify SPA shell. | Portal route is live; real dashboard needs auth. |
| `HEAD https://englishwithauris.com/` | HTTP 200 Netlify. | Public site is reachable. |
| Homepage HTML scan | Found public business email in JSON-LD; no visible Calendly/booking-pressure matches in HTML. | Direct-contact mode remains public; bundle scan was covered in earlier cycles. |

Prior safe aggregate baseline from Cycle 34 still matters, because this cycle did not use credentialed DB access:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Modular Started | Modular Submitted |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 27 | 42 | 288 | 36 | 5 | 4 |
| 14 days | 39 | 91 | 711 | 85 | 13 | 9 |
| 30 days | 42 | 163 | 1555 | 157 | 25 | 14 |

Interpretation: the portal has real usage, especially SRS, but no current evidence yet proves that a suggested next step makes students feel progress, stay longer, refer, or value the premium.

## External Evidence

| Source | URL | Signal | Supports | Weakens |
| --- | --- | --- | --- | --- |
| Duolingo home-screen redesign | https://blog.duolingo.com/new-duolingo-home-screen-design/?lang=en | Duolingo redesigned the home screen because learners were unsure how to use the app well and needed a clearer path. | Clear next step | Locked-path risk |
| Quizlet Study Path | https://help.quizlet.com/hc/en-au/articles/360048314692-Setting-up-a-study-path | Study paths adapt suggested sequence and sync progress across devices. | Small guided study sequence | Flashcard-only proof |
| Busuu Study Plan | https://help.busuu.com/hc/en-us/articles/16097312171153-What-s-a-Study-Plan-How-do-I-make-one | Plans include goals, study schedule, reminders, daily time and progress tracking. | Habit and accountability | Too much planning UX for Auris |
| Eluency | https://www.eluency.com/ | Teacher platforms sell completion data, quiz data and knowing what to review before class. | Teacher-usable prep signal | Analytics before proof |
| Tuton | https://tuton.io/ | Independent tutor platform bundles lessons, notes, exercises, games and SRS vocabulary. | Portal continuity as premium category | LMS sprawl |
| Preply how-it-works | https://preply.com/en/how-it-works | Preply frames progress as live tutor plus practice beyond lessons, vocabulary, feedback and tools. | Human plus between-class practice | Marketplace tone |
| Preply Lesson Insights | https://help.preply.com/en/articles/10385861-lesson-insights | AI summaries give vocabulary, grammar, speaking feedback and suggested exercises; optional and data-sensitive. | Progress memory category | Privacy/AI trust risk |
| DOAJ/Frontiers SRL study | https://doaj.org/article/94ea92ac1533464fa565cfc16d3ea51b | EFL grammar learners with recommendations, feedback and e-portfolio outperformed assignment-only control in a quasi-experimental study. | Recommendations and feedback can matter | Not Auris-specific |
| Reddit Preply homework thread | https://www.reddit.com/r/Preply/comments/1pc8z8n/homework/ | Learners can resent homework if it wastes class time or feels disconnected. | Keep next step tiny and useful | Heavy homework |
| Reddit Preply AI homework thread | https://www.reddit.com/r/Preply/comments/1s3js7f/preply_suggesting_i_assign_ai_avatar_speaking/ | Some learners/tutors reject AI-assigned speaking homework and ask what the real teacher is for. | Auris-owned human follow-up | Generic AI practice |
| Reddit Duolingo path threads | https://www.reddit.com/r/duolingo/comments/vpdat9 | Forced linear paths can create backlash among established learners who want review/control. | Preserve choice | Locked recommendation |

Source-quality note:

- Official/product sources are strong for category patterns but biased toward their own products.
- Community threads are good risk language, not hard buying proof.
- The missing highest-signal source remains current-student rows.

## Falsification

### H006: The platform's next improvement should be clarity of next action.

Status: strengthened, but narrowed.

Evidence: local dashboard and product sources still support one clear next step. The falsification is that the technical idea is already proven enough; the unproven piece is student acceptance and teacher-use proof.

Next test: two anonymous continuity rows before another spec or implementation cycle.

### H016: The Next 15 card must preserve autonomy.

Status: strengthened.

Evidence: Duolingo/Busuu/Quizlet validate guidance, while Reddit/Preply signals show adults resist forced paths, generic homework or AI-ish assignments.

Next test: classify each row as `helpful`, `homework`, `neutral` or `ignored`.

### H017: SRS is the current measurable retention spine.

Status: strengthened but bounded.

Evidence: SRS routes/UI are healthy and the baseline shows strong relative usage. But SRS counts alone cannot prove premium value unless Auris sees it carry into conversation.

Next test: pair `cards reviewed / due cards` context with an in-class evidence note.

### H018: The existing homework log is enough for the first manual pilot.

Status: strengthened.

Evidence: model, routes and teacher UI already exist. A new table or analytics layer would be premature.

Next test: if convenient, paste the same tiny next-step message into the homework log and record only the anonymized outcome row in strategy memory.

Favored idea weakened: `Because the portal is deep, Auris should market or build it harder now.`

Why weakened: product depth is real, but public proof and retention decisions need student-visible progress evidence. Without two rows, more copy or a new dashboard card would mostly be confidence theater.

## Implementation-Ready Artifact: 2-Row Continuity Proof Sprint

Goal: prove whether one small between-class suggestion creates a student-visible progress moment.

### Pick Two Students

| Row | Student Type | Why |
| --- | --- | --- |
| Student A | portal/SRS-active | Tests whether active users want clearer next steps or already know what to do. |
| Student B | notes-first, WhatsApp-first, busy adult, or lower-portal-use | Tests whether personal guidance beats in-app guidance. |

No names in strategy docs.

### Send One Optional Step

English:

```text
Tiny step before our next class, only if you have a moment:

Choose one thing:
- review up to 8 flashcards if any are due,
- open your notes and say 3 useful phrases out loud,
- or use one correction from last class in a sentence.

No need to do everything. I just want to see whether one small step helps us start the next class with something useful.
```

Spanish:

```text
Pequeno paso antes de nuestra proxima clase, solo si tienes un momento:

Elige una cosa:
- repasa hasta 8 flashcards si tienes alguna pendiente,
- abre tus notas y di 3 frases utiles en voz alta,
- o usa una correccion de la ultima clase en una frase.

No hace falta hacerlo todo. Solo quiero ver si un paso pequeno nos ayuda a empezar la siguiente clase con algo util.
```

Follow-up question, only if it feels natural:

```text
When you open the portal, do you normally know what to do first, or would one small suggestion help?
```

### Optional Homework Log Use

If convenient, paste the same message into the existing homework log:

- source: `whatsapp`
- target: class or selected student
- assigned date: message date

Do not create a new table, form, automation, or public tracker.

### Anonymous Row Fields

| Field | Allowed Values / Notes |
| --- | --- |
| `student_type` | srs_active / notes_first / whatsapp_first / busy_adult / lower_portal_use |
| `suggested_step` | flashcards / notes_phrase / correction_sentence / assignment / talk |
| `portal_surface` | flashcards / class_notes / reviewed_feedback / modular_assignment / talk / none |
| `sent_channel` | whatsapp / email / in_class / homework_log |
| `did_action` | yes / no / unknown |
| `student_reaction` | helpful / homework / neutral / ignored |
| `in_class_evidence` | used_phrase / remembered_word / mentioned_portal / asked_followup / no_sign |
| `teacher_effort` | under_2_min / 2_to_5_min / too_much |
| `decision` | build_next15 / keep_manual / soften_copy / pause |

### Decision Gates

Build or implement the dashboard card only if:

- both students say a suggestion would help, or
- at least one student acts and Auris can use that action naturally in class, with no homework-friction signal, or
- Auris explicitly asks to ship the low-risk card despite incomplete rows.

Keep manual if:

- students act only because Auris sends a personal WhatsApp note,
- the suggestion helps but the portal itself is not the main surface,
- or teacher effort stays under 2 minutes and no build is needed.

Soften or pause if:

- either student says it feels like homework,
- no one acts,
- or Auris cannot connect the action to the next class.

## Strategic Interpretation

Strongest next move:

Use the current student base as the future-growth asset. While there is no urgency to fill slots, the portal should earn its place by making current classes feel more continuous, more remembered and more personal. That can later become retention, referral and proof.

What not to do yet:

- Do not build another Next 15 spec.
- Do not add AI speaking homework.
- Do not turn portal proof into louder public copy.
- Do not create a CRM, waitlist or new platform analytics table.
- Do not judge this by click volume or SRS counts alone.

Evidence that would change the recommendation:

- If students say the portal is already clear, deprioritize Next 15.
- If students prefer WhatsApp and never open the portal, keep guidance manual and use the portal as supporting material.
- If two students use a small suggestion and it improves the next class, implementation becomes low-risk.

## Next-Cycle Packet BF

Start with this file plus:

- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/retention-baseline-and-manual-pilot.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If Auris provides rows:

1. Record only anonymized row fields.
2. Update H006/H016/H017/H018.
3. Decide `build_next15`, `keep_manual`, `soften_copy`, or `pause`.

If no rows arrive:

1. Do not write another platform spec.
2. Rotate to monthly GBP snapshot, first direct-contact inquiry row, GBP Calendly removal status, or approved public-code hygiene.
