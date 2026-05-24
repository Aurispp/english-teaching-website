# Retention Baseline And Manual Pilot

Created: 2026-05-22 Cycle 14

Purpose: define the measurement baseline and manual evidence needed before judging the `Your next 15 minutes` card. This is a strategy artifact only; no platform code was changed.

Cycle 34 refresh: `/Users/aurisp/repos/teacher-website/docs/strategy/portal-retention-proof-refresh.md`

Primary question: what baseline and manual evidence should be collected before the Next 15 card is judged?

## Decision

The Next 15 card is more justified than it was in Cycle 13 because read-only aggregate database evidence shows real student activity already exists, especially in flashcards.

But the first measurable version should be SRS/modular-assignment aware, not feedback-first by default:

- Flashcards are the strongest live retention signal right now.
- Modular work has some current usage.
- Standard assignments and writing submissions are nearly inactive in the last 30 days.
- Feedback views, card clicks, class-note opens and Talk completions are not currently measurable.

Therefore:

1. Run the manual pilot with 3-5 students.
2. If Auris approves implementation, build the small advisory card.
3. Judge it against the baseline below for two weeks.
4. Add event logging only after the card has visible student value.

## Safe Data Pass

Read-only aggregate database access succeeded through the backend environment. The query used a read-only transaction and exported no names, emails, assignment titles, student text, or secrets.

Important process note: several local files contain live-looking database credential patterns. They were not copied into this strategy folder and should not be used in future cycles except through sanitized environment loading and read-only aggregate queries.

## Baseline Snapshot

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Flashcard Reviews | Standard Started | Standard Submitted | Writing Submitted | Writing Reviewed | Modular Started | Modular Submitted | Modular Reviewed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 31 | 59 | 330 | 53 | 317 | 0 | 0 | 0 | 0 | 5 | 4 | 1 |
| 14 days | 39 | 98 | 860 | 92 | 750 | 1 | 1 | 0 | 0 | 15 | 10 | 1 |
| 30 days | 42 | 161 | 1524 | 155 | 1212 | 2 | 2 | 0 | 0 | 27 | 15 | 2 |

Database totals at query time:

- Students: 139.
- Classes: 26.
- Class memberships: 55.

Cycle 15 refinement:

- Scheduled non-guest classes: 22.
- Scheduled-class students: 50.
- Scheduled-class active students in the last 7 days: 28.
- Scheduled-class SRS in the last 7 days: 53 sessions, 324 cards reviewed, 48 completed sessions.
- Homework log activity in the last 30 days: 2 active pasted homework messages across 2 classes.

Cycle 34 refreshed read-only aggregate snapshot:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Flashcard Reviews | Standard Started | Standard Submitted | Writing Submitted | Writing Reviewed | Modular Started | Modular Submitted | Modular Reviewed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 27 | 42 | 288 | 36 | 275 | 0 | 0 | 0 | 0 | 5 | 4 | 1 |
| 14 days | 39 | 91 | 711 | 85 | 644 | 1 | 1 | 0 | 0 | 13 | 9 | 1 |
| 30 days | 42 | 163 | 1555 | 157 | 1247 | 2 | 2 | 0 | 0 | 25 | 14 | 2 |

Cycle 34 scheduled-class refinement:

| Metric | Value |
| --- | ---: |
| Scheduled non-guest classes | 22 |
| Scheduled-class students | 50 |
| Scheduled-class active students, 7 days | 24 |
| Scheduled-class SRS sessions, 7 days | 37 |
| Scheduled-class SRS cards reviewed, 7 days | 282 |
| Scheduled-class completed SRS sessions, 7 days | 32 |
| Active homework-log messages, 30 days | 2 |
| Classes with active homework-log messages, 30 days | 2 |
| `student_next_action_events` table | missing |

Interpretation:

- There is enough real activity to baseline the portal, especially SRS.
- Weekly active student count is less inflated after filtering to scheduled non-guest classes, but still needs a paid/current-student owner filter before public claims.
- Flashcards are the only high-volume between-class behavior.
- Cycle 34 shows weekly SRS can move down in a rolling window, so do not overstate the card before a before/after comparison.
- Writing feedback cannot be a core metric yet because recent writing submissions are zero.
- Standard assignments are too sparse to judge the first Next 15 version.
- Modular assignments are active enough to remain in the selector, but not enough to dominate the card.
- The existing homework log is underused but useful for the manual pilot because it stores the exact WhatsApp homework message without requiring a new feature.
- No event table exists for card shown/clicked/dismissed, so keep V0 measurement simple unless Auris approves instrumentation.

## What Can Be Measured Now

| Metric | Current Source | Confidence | Use For Next 15? | Caveat |
| --- | --- | --- | --- | --- |
| Student opened/completed flashcard practice | `student_practice_session.started_at`, `completed`, `cards_reviewed` | High | Yes | Does not prove the card caused the session unless a click event exists. |
| Individual flashcard reviews | `flashcard_review_log.reviewed_at` | High | Yes | Includes review volume, not class-level learning quality by itself. |
| Standard assignment started/submitted | `student_attempts.started_at`, `submitted_at`, `status` | Medium | Yes, but low volume | Too sparse in the current window. |
| Writing submitted/reviewed | `writing_submissions.submitted_at`, `reviewed_at`, `status` | High | Not as V0 success metric | Recent volume is zero. |
| Modular started/submitted/reviewed | `modular_exercise_attempts.started_at`, `submitted_at`, `reviewed_at`, `status` | High | Yes | Useful secondary signal. |
| Teacher sees pending submissions | `/api/lms/submissions/all?limit=100` and TeacherOverview | Medium-high | Later | Teacher view already exists; do not build a new panel yet. |
| Student saw/clicked/dismissed card | Missing | None | Must add later | Add only after Auris approves card. |
| Feedback viewed by student | Missing | None | Not yet | Needed before feedback can be a measured retention loop. |
| Talk completed/reflected | Missing | None | Not yet | Keep Talk as fallback until logging/reflection exists. |

## Query Templates

Use aggregate-only queries. Do not export names, emails, text answers, feedback bodies, or assignment titles into strategy notes.

```sql
-- Run inside a read-only transaction.
SET TRANSACTION READ ONLY;

-- Active students over a window.
WITH activity AS (
  SELECT student_id FROM student_practice_session
  WHERE started_at >= now() - interval '7 days'
  UNION
  SELECT student_id FROM student_attempts
  WHERE started_at >= now() - interval '7 days'
     OR submitted_at >= now() - interval '7 days'
  UNION
  SELECT student_id FROM writing_submissions
  WHERE submitted_at >= now() - interval '7 days'
     OR reviewed_at >= now() - interval '7 days'
  UNION
  SELECT student_id FROM modular_exercise_attempts
  WHERE started_at >= now() - interval '7 days'
     OR submitted_at >= now() - interval '7 days'
     OR reviewed_at >= now() - interval '7 days'
)
SELECT count(DISTINCT student_id) AS active_students
FROM activity;

-- Flashcard sessions.
SELECT
  count(*) AS sessions,
  coalesce(sum(cards_reviewed), 0) AS cards_reviewed,
  count(*) FILTER (WHERE completed = true) AS completed_sessions
FROM student_practice_session
WHERE started_at >= now() - interval '7 days';

-- Assignments and feedback-like work.
SELECT
  count(*) FILTER (WHERE started_at >= now() - interval '7 days') AS standard_started,
  count(*) FILTER (WHERE submitted_at >= now() - interval '7 days') AS standard_submitted,
  count(*) FILTER (WHERE graded_at >= now() - interval '7 days') AS standard_graded
FROM student_attempts;

SELECT
  count(*) FILTER (WHERE submitted_at >= now() - interval '7 days') AS writing_submitted,
  count(*) FILTER (WHERE reviewed_at >= now() - interval '7 days') AS writing_reviewed
FROM writing_submissions;

SELECT
  count(*) FILTER (WHERE started_at >= now() - interval '7 days') AS modular_started,
  count(*) FILTER (WHERE submitted_at >= now() - interval '7 days') AS modular_submitted,
  count(*) FILTER (WHERE reviewed_at >= now() - interval '7 days') AS modular_reviewed
FROM modular_exercise_attempts;
```

Later improvement: filter to active paid/current classes if there is a reliable class status, billing status, or owner-maintained class list.

## Manual Pilot Script

Send after class to 3-5 current students. Keep it personal and optional.

Cycle 15 created `next-15-pilot-tracker.md` with a paste-ready anonymous tracker, three message variants and scoring rules. Use that file for the live pilot.

### English

```text
Small experiment for this week:

Before our next class, do just one useful thing:

1. If you have flashcards due, review up to 8.
2. If I gave you feedback, choose one correction and use it in a sentence.
3. Open your class notes and say 3 useful phrases out loud.

Quick question: when you open the portal, do you usually know what to do first?
```

Follow-up:

```text
Would a small "Your next 15 minutes" suggestion in the portal help, or would it feel like extra homework?
```

### Spanish

```text
Pequeno experimento para esta semana:

Antes de la proxima clase, haz solo una cosa util:

1. Si tienes flashcards pendientes, repasa hasta 8.
2. Si te deje feedback, elige una correccion y usala en una frase.
3. Abre tus notas de clase y di 3 frases utiles en voz alta.

Pregunta rapida: cuando entras en el portal, normalmente sabes que hacer primero?
```

Follow-up:

```text
Te ayudaria una pequena sugerencia tipo "tus proximos 15 minutos" en el portal, o te sonaria a mas deberes?
```

Note: Spanish accents were intentionally avoided here so Auris can paste the text anywhere without encoding surprises. He can add accents manually if desired.

## Go / Change / Stop Rules

Manual pilot:

- Go: at least 2 of 3 students say they do not always know what to do first, and the card sounds helpful.
- Change copy: at least 2 students like the idea but worry it feels like homework.
- Defer: students already know what to do first and prefer direct WhatsApp reminders.
- Investigate: students say the portal is useful but they forget to open it.

Two-week product test if implemented:

- Strengthen: at least 30% of weekly active students click the card, and weekly flashcard/modular activity does not fall.
- Stronger signal: card clicks are followed by a same-day flashcard session, modular submit, assignment submit, notes click, or Talk reflection.
- Refine: clicks happen but completion is low; fix action size, target, or stale recommendations.
- Weaken: card impressions are high but clicks are under 10%, or students report that it feels like homework.
- Stop expanding: Auris cannot use the signal in the next class, or the card competes with real human follow-up.

## Selector Implication

Cycle 13 had feedback as the strongest premium-proof loop when no urgent work exists. Cycle 14 data refines this:

1. Urgent assignment still wins if due now or in progress.
2. Due flashcards should move above recent feedback when there is no active feedback-view metric.
3. Modular assignments stay above generic notes/Talk when already started.
4. Feedback should remain visible, but judged manually until `feedback_viewed_at` or a feedback-click event exists.
5. Talk remains fallback until completion/reflection exists.

V0 priority after Cycle 14:

1. Urgent overdue/due-today assignment.
2. Started modular or standard assignment.
3. Due flashcards.
4. Recent reviewed feedback.
5. Class notes phrase practice.
6. Talk the Talk.

## External Signals

High-signal external patterns:

- Tuton sells independent-tutor workflow around classroom, vocabulary tracking, homework submitted, active students and tutor prep.
- Eluency's strongest promise is teacher-created practice plus completion and quiz data before class.
- ZenGengo shows language homework can include speaking/audio tasks and downloadable results.
- Tutor.com teacher dashboard filters students who have not used the service and those who may need help.
- TutorTrack points toward lightweight session logging and progress reports, but this is better for teacher prep than the first student card.
- 2025 EFL app-agency research supports reminders, to-do lists and smaller tasks, but Auris should keep them human and optional.
- Tutor/community threads repeatedly ask for simple progress tracking, homework visibility and "where did we leave off" rather than complex analytics.

The pattern supports a focused retention loop: give students one clear next action, then let Auris see just enough to make the next live class more personal.

Source URLs used:

- Tuton independent language tutor platform: https://tuton.io/
- Tuton progress-tracking article: https://tuton.io/blog/how-to-track-student-progress-online-tutoring/
- Eluency language practice platform: https://www.eluency.com/
- ZenGengo language assignment platform: https://www.zengengo.com/
- ZenGengo service page: https://www.zengengo.com/our-service
- Language Homework platform: https://languagehomework.com/
- Tutor.com higher-education reports: https://www.tutor.com/higher-education/why-tutor
- Tutor.com teacher dashboard PDF: https://www.tutor.com/cmspublicfiles/WWW/Tutor-teacher_dashboard.pdf
- Cross-cultural SRL language app study: https://www.sciencedirect.com/science/article/pii/S221503902500030X
- Gamified SRL EFL study: https://www.sciencedirect.com/science/article/pii/S109675162500051X

## Strongest Next Move

Ask Auris whether he wants to run the manual pilot or implement the V0 card now.

If he says "pilot", use the script above and log responses in this file.

If he says "implement", patch only the student dashboard frontend first, with no backend event table yet.

## What Not To Do Yet

- Do not build a full analytics dashboard.
- Do not add AI practice or audio.
- Do not make feedback the measured success metric until feedback views can be tracked.
- Do not export student names or text from the database.
- Do not use hardcoded credential-bearing scripts for research.
