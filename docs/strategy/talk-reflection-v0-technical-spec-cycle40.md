# Talk Reflection V0 Technical Spec

Created: 2026-05-23 Cycle 40

Purpose: turn the Cycle 39 AI-speaking conclusion into a concrete, minimal platform spec. The goal is not to build an AI tutor. The goal is to let portal Talk practice create one small, teacher-usable signal without storing audio, transcripts or automated scores.

## Primary Question

What is the smallest Talk Reflection V0 that connects student speaking practice to Auris's next-class feedback without creating a heavy homework feeling or a privacy-heavy audio product?

Short answer: add a small `talk_practice_reflections` record, a student create/list API, and a teacher recent-summary API. Place one optional reflection card on the Talk completion screen. Show the result later as a compact teacher prep line, not a new inbox.

## Source Discovery

Before browsing, the best evidence for this question seemed likely to live in these source types:

| Source Type | Why It Might Reveal Strategy | Chosen? | Quality |
| --- | --- | --- | --- |
| Portal Talk implementation | Shows what can be captured at completion. | Yes | High |
| Existing backend models | Shows table conventions, timestamps, relationships and indexes. | Yes | High |
| Existing student-auth endpoints | Shows how `student_id` is derived and protected. | Yes | High |
| Existing teacher endpoints and overview queues | Shows how teacher prep signals are already surfaced. | Yes | High |
| Frontend API wrapper | Shows where a new API client belongs. | Yes | High |
| Live backend auth/health checks | Confirms deployed API behavior without credentials. | Yes | High |
| GDPR/data-minimization sources | Tests whether no-audio/no-transcript is the safer product shape. | Yes | High |
| Supabase/RLS docs | Useful because the platform uses Supabase/Postgres patterns. | Yes | High |
| FastAPI docs | Confirms dependency-auth pattern is the native route style. | Yes | High |
| GA4/analytics privacy docs | Prevents sending student notes or identifiers to analytics. | Yes | High |
| Accessibility/form UX sources | Helps keep reflection optional, labelled and low-friction. | Yes | Medium-high |
| Language-learning product/community sources | Tests whether reflection + feedback is a real category pattern. | Yes | Medium-high |

Chosen source families: local code and live API checks first, then official privacy/security/API/analytics/accessibility docs, then language-learning product and community signals.

## Local Excavation

| Artifact | What It Shows | Spec Implication |
| --- | --- | --- |
| `docs/strategy/ai-speaking-human-feedback-cycle39.md` | Cycle 39 already chose no-audio reflection over AI scoring. | Cycle 40 should make that implementable, not re-argue AI. |
| `docs/strategy/talk-the-talk-lead-magnet.md` | Talk's role is practice, confidence and a feedback bridge. | Completion reflection should ask where speaking broke, not grade the student. |
| `docs/strategy/platform-backlog.md` | Existing P1 speaking loop names self-rating and teacher note. | Promote the no-audio reflection path to the next concrete implementation candidate. |
| `docs/strategy/measurement-plan.md` | Public Talk has event tracking; portal student behavior must not leak PII to GA4. | Store reflection in app DB; send only aggregate/non-text events if analytics is added. |
| `docs/strategy/hypotheses.md` | H011 and H016 are the key product risks: feedback bridge and autonomy. | Reflection must be optional, short and teacher-useful. |
| `teacher-assistant/backend/app/db/models.py` Student/Class/ClassMembership | Student/class membership is already explicit. | Use `student_id` plus optional `class_id`; teacher views should filter by class membership. |
| `teacher-assistant/backend/app/db/models.py` ClassHomeworkLog | Existing lightweight class follow-up records use `class_id`, optional `teacher_id`, JSON target students and timestamps. | Talk reflections can be similarly lightweight; no assignment engine needed for V0. |
| `teacher-assistant/backend/app/db/models.py` StudentPracticeSession/ClassPracticeSession | Practice sessions already capture duration, completion and indexes. | Mirror simple duration/completion fields instead of inventing complex analytics. |
| `teacher-assistant/backend/app/db/models.py` CustomExerciseSubmission/WritingSubmission | Submissions store student-owned work, status and teacher feedback separately. | Do not put Talk reflection in the formal submission/review queue in V0. |
| `teacher-assistant/backend/app/api/custom_exercises.py` | Student endpoints use `get_current_user`, derive `student_id`, check membership, commit and refresh. | New Talk API should follow this route style. |
| `teacher-assistant/backend/app/api/modular_exercises.py` | Modular attempts use student auth, progress JSON replacement and submit events. | Talk reflection can be simpler: one create endpoint, no progress autosave. |
| `teacher-assistant/backend/app/api/modular_exercises.py` class practice endpoint | Teacher-only practice records update class progress but are not student submissions. | Teacher-side Talk summary should be a prep signal, not an obligation to review. |
| `teacher-assistant/backend/app/main.py` | Routers are mounted explicitly. | Add a dedicated `talk_reflections_router` under `/api/talk-reflections`. |
| `teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx` | Completion screen currently only shows topic recap, Change Settings and Practice Again. | Reflection card has a natural insertion point after topic recap. |
| `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` | Talk is available from desktop/mobile nav; reviewed feedback is already surfaced. | Dashboard can later show "speaking practice this week", but not P0. |
| `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` | Teacher overview already fetches submissions, SRS, trivia, game and assignments; attention items are compact. | Add a recent Talk reflection fetch later as a small panel/attention item. |
| `teacher-assistant/classroom-hub/src/lib/api.ts` | Central axios client and modular API wrappers exist. | Add a `talkReflectionAPI` wrapper beside modular/student APIs. |
| `teacher-assistant/backend/migrations/` and `app/db/database.py` | Migrations exist, while `init_db` also has idempotent schema guard patterns. | Prefer a numbered SQL migration plus SQLModel table; add init guard only if repo pattern requires it. |

## Data/API Evidence

| Check | Result | Meaning |
| --- | --- | --- |
| Live portal route `https://english-with-auris-portal.netlify.app/student/talk-the-talk` | HTTP 200 from Netlify. | Portal route is deployed as SPA fallback and safe to link internally. |
| Live public Talk route `https://englishwithauris.com/talk-the-talk` | HTTP 200 from Netlify. | Public spelling variant exists, but public copy mismatch remains a separate issue. |
| Live backend `/api/health` | HTTP 200 with `{"status":"ok"}`. | API is alive at the expected production base. |
| Live protected backend `/api/lms/students/me` without auth | HTTP 401 with `Authorization header missing`. | Auth boundary works; Talk reflection should use the same authenticated API pattern. |
| Live backend `/healthz` | HTTP 404 on the deployed base, while local `main.py` defines `/healthz`. | Deployed routing/version can differ from local expectations; use `/api/health` as the reliable external health check in future cycles. |

## External Evidence

| Source | Signal | Spec Consequence |
| --- | --- | --- |
| EUR-Lex GDPR Article 5, https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1558202292114&uri=CELEX%3A32016R0679 | Personal data should be adequate, relevant and limited to what is necessary. | No audio, no transcript and no full speech answer in V0. |
| Supabase RLS docs, https://supabase.com/docs/guides/database/postgres/row-level-security | Supabase says RLS should be enabled on exposed public-schema tables and policies should govern access. | If this table is exposed through Supabase client paths later, it needs RLS; backend service access alone is not a reason to ignore table ownership. |
| FastAPI dependencies docs, https://fastapi.tiangolo.com/tutorial/dependencies/ | FastAPI dependencies inject shared logic into route operations. | Reuse `get_current_user`, `require_teacher` and `get_session` rather than custom auth plumbing. |
| FastAPI current-user docs, https://fastapi.tiangolo.com/tutorial/security/get-current-user/ | Current-user dependencies are the documented pattern for authenticated user context. | Student endpoints should derive `student_id` from the token context, never from client-submitted `student_id`. |
| Google Analytics PII policy, https://support.google.com/analytics/answer/6366371 | GA policies prohibit sending data Google could recognize as personally identifiable. | Do not send optional stuck notes, student IDs, prompt text tied to a student, or names to GA4. |
| GA4 event parameters docs, https://support.google.com/analytics/answer/13675006 | Custom event parameters are allowed for event context. | If events are added, use non-text parameters such as `theme`, `difficulty`, `completion_type` and `reflection_choice`. |
| W3C WAI forms tutorial, https://www.w3.org/WAI/tutorials/forms/ | Labels, instructions and feedback improve form clarity, including for cognitive accessibility. | The reflection card needs clear labels, visible skip, concise choices and no ambiguous required field. |
| W3C labels/instructions criterion, https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html | Labels and instructions help prevent incorrect/incomplete submissions. | Optional note needs a short instruction like "No need to write a full answer." |
| Busuu corrections page, https://www.busuu.com/en/how-to/corrections | Busuu has learners speak/write on a topic and get feedback; mistakes and feedback are central to progress. | Reflection + human follow-up is category-normal, but Auris can make it more personal and reliable. |
| Khan Academy teacher reports page, https://support.khanacademy.org/hc/en-us/articles/360031129891-What-reporting-options-are-available-on-Khan-Academy-for-teachers-to-track-student-performance | Teacher reporting emphasizes learning time, skills worked on and student needs. | Teacher view should summarize action and need, not expose a raw activity firehose. |
| Preply AI announcement, https://preply.com/en/blog/preply-announces-new-ai-powered-features-to-guide-the-future-of-personalized-learning-in-a-human-ai-world/ | Preply frames AI tools as supplementing human instruction and helping tutors/learners track progress. | Auris should keep human-first positioning; platform data should save teacher time. |
| Preply "why Preply works", https://preply.com/en/why-preply-works | Preply explicitly sells human-led lessons, reflection and turning feedback into progress. | The premium proof is the feedback loop, not the existence of practice prompts alone. |
| Reddit Busuu/Preply community signals surfaced in Cycle 40 searches | Learners complain when corrections are inconsistent, delayed, too automated or detached from serious learning. | Avoid anonymous/community-style correction and avoid AI score claims; make the note go to Auris's next class. |

## Product Scope

### V0 Goal

After a student completes a portal Talk prompt, they can save one lightweight reflection:

```text
What happened while you were speaking?
```

The saved reflection lets Auris see a compact next-class prep line:

```text
Speaking practice: 2 prompts since last class. Latest: Work / Medium / I translated too much. Wants class practice: yes.
```

### Non-Goals

- No audio recording.
- No transcript.
- No AI feedback.
- No pronunciation score.
- No formal assignment/review queue.
- No public website change.
- No leaderboard or streak pressure.
- No requirement that every Talk completion is saved.

## Data Model

Proposed table: `talk_practice_reflections`

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | integer PK | yes | Standard SQLModel primary key. |
| `student_id` | FK `students.id`, indexed | yes | Derived from auth context. |
| `class_id` | FK `classes.id`, indexed, nullable | no | Optional if current class context is known. |
| `theme` | string, indexed | yes | Use existing Talk theme key/name. |
| `difficulty` | string, indexed | yes | `easy`, `medium`, `hard` or current Talk enum. |
| `prompt` | text | yes | Store the prompt shown; it is not the student's spoken answer. |
| `duration_seconds` | integer | yes | Planned timer length. |
| `completed_seconds` | integer | yes | Actual speaking time. |
| `completion_type` | string, indexed | yes | `timer_finished` or `finished_early`. |
| `reflection_choice` | string, indexed | yes | One allowed value from the button set. |
| `optional_note` | text, nullable | no | Max 240 chars; prompt users not to write private details. |
| `wants_class_practice` | boolean, indexed | yes | Defaults false. |
| `source` | string, indexed | yes | Default `portal_talk`. |
| `created_at` | datetime, indexed | yes | `datetime.utcnow`. |
| `updated_at` | datetime | yes | `datetime.utcnow`. |

Suggested indexes:

- `(student_id, created_at)`
- `(class_id, created_at)`
- `(wants_class_practice, created_at)`
- `(reflection_choice, created_at)`

Allowed `reflection_choice` values:

- `comfortable`
- `translated_too_much`
- `got_stuck`
- `missed_phrase`
- `too_nervous`
- `want_class_practice`

Implementation note: `want_class_practice` can set both `reflection_choice` and `wants_class_practice=true`, but keep the boolean separate so any choice can also request follow-up.

## API Spec

Recommended router: `/api/talk-reflections`

### `POST /api/talk-reflections/me`

Auth: `get_current_user`.

Creates one reflection for the logged-in student.

Request:

```json
{
  "class_id": 12,
  "theme": "Work",
  "difficulty": "medium",
  "prompt": "Describe a meeting where you had to explain a problem clearly.",
  "duration_seconds": 90,
  "completed_seconds": 82,
  "completion_type": "finished_early",
  "reflection_choice": "translated_too_much",
  "optional_note": "I needed a phrase for delay",
  "wants_class_practice": true
}
```

Validation:

- Ignore any client-submitted `student_id`.
- Require logged-in user to have `student_id`.
- If `class_id` is present, require membership in that class.
- Clamp `completed_seconds` between 0 and `duration_seconds`.
- Limit `prompt` to 500 chars.
- Limit `optional_note` to 240 chars.
- Accept only known `reflection_choice` and `completion_type`.

Response: created reflection.

### `GET /api/talk-reflections/me?limit=10`

Auth: `get_current_user`.

Returns the student's own recent reflections, newest first. This is useful later for a dashboard "speaking this week" card, but the Talk completion save does not need it immediately.

### `GET /api/talk-reflections/teacher/recent?class_id=12&since_days=14&limit=20`

Auth: `require_teacher`.

Returns recent reflections with student names for teacher prep. If `class_id` is supplied, filter to students in that class. If omitted, return only recent reflections for known students, capped.

Recommended response shape:

```json
[
  {
    "id": 123,
    "student_id": 7,
    "student_name": "Example Student",
    "class_id": 12,
    "theme": "Work",
    "difficulty": "medium",
    "reflection_choice": "translated_too_much",
    "optional_note": "I needed a phrase for delay",
    "wants_class_practice": true,
    "completed_seconds": 82,
    "created_at": "2026-05-23T16:00:00Z"
  }
]
```

### `GET /api/talk-reflections/teacher/summary?class_id=12&since_days=14`

Optional P0.5 endpoint.

Returns compact counts for teacher overview:

```json
{
  "class_id": 12,
  "since_days": 14,
  "total_reflections": 6,
  "students_active": 3,
  "wants_class_practice": 2,
  "latest": {
    "student_name": "Example Student",
    "theme": "Work",
    "difficulty": "medium",
    "reflection_choice": "translated_too_much",
    "created_at": "2026-05-23T16:00:00Z"
  }
}
```

## Frontend Spec

### Talk Completion Card

Insert after topic recap, before `Change Settings` / `Practice Again`.

Heading:

```text
What happened while you were speaking?
```

Choice buttons:

- `I answered comfortably`
- `I translated too much`
- `I got stuck`
- `I missed a phrase`
- `I felt nervous`
- `Bring this back in class`

Optional note label:

```text
Optional: write the phrase or moment that blocked you
```

Helper:

```text
No need to write a full answer.
```

Primary button:

```text
Save reflection
```

Skip:

```text
Just practise today
```

Confirmation:

```text
Saved. This gives us something useful to bring back into class.
```

Error fallback:

```text
Reflection was not saved. Your speaking practice still counts.
```

### State Rules

- Default to no selected choice; user can skip.
- Disable save while saving.
- If save succeeds, collapse the card to confirmation and keep Practice Again visible.
- If save fails, keep the user's selected choice/note so they can retry or skip.
- Do not block Practice Again if reflection is skipped or fails.

### API Wrapper

Add to `classroom-hub/src/lib/api.ts`:

```ts
export const talkReflectionAPI = {
  createMine: (data: TalkReflectionCreate) => api.post('/api/talk-reflections/me', data),
  listMine: (limit = 10) => api.get('/api/talk-reflections/me', { params: { limit } }),
  listRecentForTeacher: (params: { class_id?: number; since_days?: number; limit?: number }) =>
    api.get('/api/talk-reflections/teacher/recent', { params }),
  getTeacherSummary: (params: { class_id?: number; since_days?: number }) =>
    api.get('/api/talk-reflections/teacher/summary', { params }),
};
```

## Teacher Overview Integration

P0 can stop at the API and Talk completion save.

P0.5 adds a compact teacher overview item:

```text
Speaking practice
2 students practised since last class. 1 wants to bring it back.
```

For a selected class:

```text
Latest: Work / Medium / translated too much
```

Do not add this to the feedback queue. It should appear as preparation context, because forcing every reflection into a review task would make the feature feel heavy for Auris and the student.

## Measurement

Store first-party product events in the app database:

| Event | Where | Data |
| --- | --- | --- |
| `portal_talk_completed` | local/app event or future DB event table | theme, difficulty, duration, completed_seconds, completion_type |
| `portal_talk_reflection_saved` | after POST success | theme, difficulty, reflection_choice, wants_class_practice |
| `portal_talk_reflection_skipped` | skip click | theme, difficulty, completion_type |
| `portal_talk_reflection_teacher_used` | manual pilot note, not automatic V0 | class_id/student anonymous note, follow-up happened yes/no |

GA4 rule:

- If GA4 is used at all, send only non-text aggregate context.
- Never send `optional_note`, student name, email, student ID or raw prompt tied to a user.
- Prefer product DB counts over GA4 for current-student retention.

Success thresholds:

- 25%+ of active portal students complete one Talk prompt when it appears in `Your next 15 minutes` or a homework message.
- 50%+ of Talk completions save a reflection choice.
- At least one next-class correction or speaking warmup uses a saved reflection.
- Auris can understand the teacher prep line in under 30 seconds.

Stop/soften thresholds:

- Reflection save rate below 15% after students visibly use Talk.
- 2 of 3 students say it feels like homework/admin.
- Auris does not use reflections in class after two weeks.
- Students mainly want private free speaking reps and do not value follow-up.

## Privacy And Security Guardrails

- Do not store audio, transcripts or full spoken answers in V0.
- Do not ask for sensitive personal content.
- Keep optional note short and clearly optional.
- Derive `student_id` from auth.
- Require class membership when writing `class_id`.
- Teacher endpoints must use `require_teacher`.
- If Supabase direct access ever exposes this table, enable RLS and policies before exposure.
- Do not send notes or identifiers to GA4.
- Keep teacher summary short to avoid turning student reflection into surveillance.

## Implementation Path

1. Add SQLModel `TalkPracticeReflection` to `backend/app/db/models.py`.
2. Add a numbered SQL migration such as `backend/migrations/032_add_talk_practice_reflections.sql`.
3. Add optional `init_db` schema guard only if the repo's deployment path depends on idempotent schema patching.
4. Add `backend/app/api/talk_reflections.py` router.
5. Mount router in `backend/app/main.py`.
6. Add API wrapper and types in `classroom-hub/src/lib/api.ts`.
7. Add completion reflection card to `classroom-hub/src/pages/TalkTheTalk.tsx`.
8. Add backend tests:
   - unauthenticated request rejected,
   - logged student can create own reflection,
   - `student_id` from payload ignored,
   - student cannot attach reflection to class they are not in,
   - note length enforced,
   - teacher recent endpoint requires teacher auth,
   - teacher class filter returns only class members.
9. Add frontend/manual QA:
   - save success,
   - skip,
   - API failure,
   - Practice Again still works,
   - mobile completion card fits.

## Falsification

### H011: Talk becomes a feedback bridge

Status: strengthened and made implementable.

Evidence: local Talk has a completion screen but no persistence; backend has clear auth/model patterns; product category evidence supports practice plus feedback. The spec identifies the smallest missing bridge.

Next practical test: implement or manually simulate the card for 3 students, then ask whether it helped them bring a useful speaking problem back to class.

### H016: Next 15 / Talk guidance must preserve autonomy

Status: strengthened as a design constraint.

Evidence: reflection can easily feel like homework or surveillance. W3C form guidance and prior app-community complaints both support clear, optional, low-friction input.

Next practical test: keep `Just practise today` visible and measure skip rate without punishing the student.

### Favored Idea To Weaken

Idea we might want to be true: adding a reflection card will automatically create teacher value.

Evidence against: current students may not use Talk, may skip reflection, or may write notes that are too vague to use. The teacher overview could also become noise.

Stop condition: if active students complete Talk but reflection save remains below 15%, or if Auris cannot use the notes in class, keep Talk as a free practice CTA and do not expand the speaking loop.

Cheaper alternative that could beat this: no backend build yet. Auris can send a WhatsApp/homework prompt after class: "Try one Talk prompt. Reply with one phrase you missed or write 'got stuck'." If that produces useful next-class corrections, implement the portal version.

## Recommendation

Build only when Auris is ready to touch the platform repo. Until then, treat this as the implementation spec and run a manual pilot through existing class follow-up channels.

Strongest next move:

1. Fix public Talk copy mismatch if promoting Talk publicly.
2. Run or approve a no-audio reflection pilot with current students.
3. Implement Talk Reflection V0 only if the reflection produces usable class follow-up.

What not to do yet:

- Do not add AI scoring.
- Do not record audio.
- Do not add a teacher review inbox.
- Do not publish claims that the portal gives speaking feedback before this loop exists.
