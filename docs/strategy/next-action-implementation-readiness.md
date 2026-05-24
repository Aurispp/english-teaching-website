# Next Action Implementation Readiness

Created: 2026-05-22 Cycle 13

Purpose: turn the Cycle 12 `Your next 15 minutes` concept into an exact low-risk implementation and validation plan for the teaching platform, without touching the app until Auris asks.

Cycle 34 refresh:

- Read `/Users/aurisp/repos/teacher-website/docs/strategy/portal-retention-proof-refresh.md` before implementing.
- The implementation path is still technically ready, but the decision gate is unchanged: pilot first unless Auris explicitly asks to ship.
- If shipping, use the Cycle 34 V0 priority: urgent/started work, due flashcards, recent feedback, class notes, Talk fallback.
- Do not add `student_next_action_events` or a teacher analytics panel in V0; the table is currently missing and should come only after the card is useful.

Primary question: should the Next 15 card be implemented now, and what exact low-risk patch should be made if Auris asks?

## Decision

Implementing the card is technically ready, but the safest first test is a small advisory card plus a manual validation script.

Key refinement from Cycle 12:

- A single recommendation is useful, but it must not feel like the app is forcing the student down a path.
- The card should show one primary action and two quieter alternatives.
- Truly urgent assignments should beat feedback; otherwise recent feedback is the best premium-proof action.
- Talk the Talk should stay the fallback until it has reflection/logging.

## Source Discovery

Best evidence sources for this cycle:

1. Current dashboard implementation path.
2. Existing SRS stats/due-card implementation.
3. Existing assignment/feedback models and timestamps.
4. Teacher overview/prep surfaces.
5. Local dev/browser access and API health.
6. Product examples with clear next-action flows.
7. Product backlash where users lost autonomy.
8. Learning-app research on gamification, structure and usability.
9. Current-student validation, because public evidence cannot prove Auris's students will like it.

Sources chosen:

- Local code: `StudentDashboard.tsx`, `FlashcardStats.tsx`, `StudentSettings.tsx`, `api.ts`, SRS API/service, DB models.
- Browser/API: local dashboard route, remote API health and protected endpoints.
- External: Duolingo home path, Quizlet Learn, Busuu Study Plan, Khan teacher report, Memrise App Store reviews, Frontiers 2025 app-review study, gamification misuse paper, Duolingo path community reactions.

## Local Evidence

| Artifact | Evidence | Implementation Meaning |
| --- | --- | --- |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` | Uses `assignmentsAPI`, `attemptsAPI`, `writingAPI`, `customExercisesAPI`, `modularAPI`; combines standard/custom/modular assignments into one list. | Next-action selector can use existing `combinedAssignments`. |
| `StudentDashboard.tsx` | Fetches student profile manually from `/api/lms/students/me` with bearer token. | It can derive `activeClassId` and `classNotesUrl` without a new endpoint. |
| `StudentDashboard.tsx` | Has `getDaysUntilDue`, feedback opening, assignment start/resume, class notes link, Talk route, flashcard route. | Most CTA handlers already exist. |
| `StudentDashboard.tsx` | `todoAssignments` is status-only and rendered lower on page; flashcards are the large hero above task detail. | Card should sit above flashcard hero to choose the first step. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentSettings.tsx` | Fetches `/api/srs/students/me/flashcards/stats` and `/flashcards/due` with `activeClassId`. | Reuse this API pattern for dashboard SRS data. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx` | Top CTA switches based on `stats.due_today`. | Reuse its "do this now" pattern without copying the whole flashcard page. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` | Axios interceptor already attaches auth tokens and handles refresh. | Prefer `api.get(...)` over manual `fetch` for new dashboard SRS call. |
| `/Users/aurisp/repos/teacher-assistant/backend/app/api/srs.py` | Student stats, due cards, practice-session start/end and teacher recent-student endpoints exist. | V0 card does not need a new backend endpoint. |
| `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py` | `StudentPracticeSession`, `FlashcardReviewLog`, `StudentAttempt`, `WritingSubmission`, `ModularExerciseAttempt` already store practice and completion signals. | Baseline metrics can be computed later from existing tables, but feedback-view and card-click events do not exist yet. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx` | Completion screen has no API call/reflection state. | Talk cannot be a measured retention signal yet; use as low-stakes fallback. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` | Teacher overview already aggregates SRS, submissions, games/trivia and attention items. | Teacher companion should wait until card click/completion data exists. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/context/AuthContext.tsx` | Local dev auto-login exists in code but is not enabled by current visible env config. | Browser inspection stopped at login; do not fake authenticated dashboard evidence. |

## Data / API Evidence

| Check | Result | Interpretation |
| --- | --- | --- |
| Local app route | `http://localhost:5174/student/dashboard` serves the Vite app, then browser redirects to `/login`. | Local frontend is alive, but no authenticated student session is available in this browser. |
| Browser snapshot | Current local page is the login screen. | No safe live student first-screen inspection this cycle. |
| Remote API health | `GET /api/health` returned OK. | Backend is reachable. |
| Protected student endpoints | Unauthenticated SRS stats and LMS profile calls returned 401. | Expected; do not infer usage metrics from protected endpoints without auth. |
| Local SQLite DB files | Existing local `.db` files are 0 bytes/no usable tables. | No local usage baseline available from SQLite. |
| Local logs | Available logs are old or mostly dev-server/backend request traces. | Not enough for a real retention baseline. |

## External Evidence

| Source | Evidence Point | Supports | Caveat |
| --- | --- | --- | --- |
| Duolingo home-screen redesign, https://blog.duolingo.com/new-duolingo-home-screen-design/?lang=en | Duolingo redesigned the home screen because learners were unsure whether they were using the app the right way; the new path gives clearer sequencing and builds practice into progress. | Clear next step is a major learning-product pattern. | A forced path can annoy returning learners. |
| Quizlet Learn, https://help.quizlet.com/hc/en-us/articles/360030986971-Studying-with-Learn | Learn creates a personalized study path based on goals and familiarity with content. | A small "what to study now" system is normal in study products. | Quizlet is flashcard-first; Auris needs teacher-feedback logic too. |
| Busuu Study Plan support, https://help.busuu.com/hc/en-us/articles/16097312171153-What-s-a-Study-Plan-How-do-I-make-one | Study Plan sets schedule, goal, reminders and progress tracking. | Students need structure and accountability outside lessons. | Study Plans are premium and general; Auris's version should be lighter and personal. |
| Busuu Study Plan blog, https://blog.busuu.com/new-feature-study-plan-achieve-language-learning-goals/ | Busuu frames planning as a way to break learning into smaller steps and avoid feeling no progress. | Strong support for 5-15 minute actions and progress visibility. | Blog is marketing; validate with students. |
| Khan Academy individual student report, https://support.khanacademy.org/hc/en-us/articles/7263187791373-How-do-I-use-the-Individual-Student-Report | Teacher reports show exact activity, time, mastery and skills by date/content/activity. | Teacher companion should show usable evidence, not vague dashboards. | Khan is school/math-heavy, not a private English teacher. |
| Frontiers 2025 app-review study, https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1569058/pdf | User feedback matters for learner-centered app design; Duolingo users like simplicity/gamification, Babbel users emphasize structured methodology/context. | The Next 15 card should be simple but connected to meaningful learning structure. | Review dataset is app-store/global, not Auris's students. |
| Gamification misuse paper, https://arxiv.org/abs/2203.16175 | Gamification can distract learners from actual learning when points/badges become the goal. | Do not lead with streaks, badges or XP for Auris's premium portal. | It studies Duolingo-like use, not teacher-led portals. |
| Memrise App Store reviews, https://apps.apple.com/us/app/memrise-easy-language-learning/id635966718?see-all=reviews | Some users dislike being forced into new content when they want review/control. | The card must preserve autonomy: one recommendation, plus alternatives. | App Store reviews skew negative and self-study oriented. |
| Duolingo path Reddit reactions | Community reactions show the tradeoff: a clear path helps some learners but others resent loss of control and difficulty revisiting content. | Avoid a locked linear path; make the recommendation advisory. | Reddit is not local buying evidence. |

## Implementation Checklist If Auris Asks

### Files

- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- Optional later: `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/types.ts`
- Optional later: backend migration/API only if event logging is added.

### Dashboard Data Changes

Add imports:

```ts
import { api, assignmentsAPI, attemptsAPI, writingAPI, customExercisesAPI, modularAPI } from '../lib/api';
import type { StudentFlashcardStats } from '../types';
```

Add state:

```ts
const [flashcardStats, setFlashcardStats] = useState<StudentFlashcardStats | null>(null);
const [flashcardStatsLoading, setFlashcardStatsLoading] = useState(false);
```

Add derived class:

```ts
const activeClassId = studentProfile?.classes?.[0]?.class_id ?? null;
```

Fetch SRS stats after profile load:

```ts
useEffect(() => {
  let cancelled = false;
  if (!activeClassId) {
    setFlashcardStats(null);
    return;
  }

  const loadFlashcardStats = async () => {
    setFlashcardStatsLoading(true);
    try {
      const response = await api.get('/api/srs/students/me/flashcards/stats', {
        params: { class_id: activeClassId },
      });
      if (!cancelled) setFlashcardStats(response.data as StudentFlashcardStats);
    } catch (error) {
      if (!cancelled) setFlashcardStats(null);
    } finally {
      if (!cancelled) setFlashcardStatsLoading(false);
    }
  };

  loadFlashcardStats();
  return () => {
    cancelled = true;
  };
}, [activeClassId]);
```

### Selector Rules

Use this priority order for V0:

1. **Urgent assignment**: required and overdue/due today/in progress.
2. **Recent reviewed feedback**: reviewed in last 10 days, newest first.
3. **Due-soon assignment**: required or in progress, due within 7 days.
4. **Due flashcards**: `flashcardStats.due_today > 0`.
5. **Class notes**: notes URL exists.
6. **Talk the Talk**: fallback.

Why this differs from Cycle 12:

- Feedback is still the strongest teacher-value loop.
- But overdue required work must not be hidden behind a nicer-sounding premium proof item.
- This is the falsification correction: "feedback first" is good for proof, not always good for the student.

### Card UX

Place above the flashcard hero.

Primary copy:

- Eyebrow: `Before next class`
- Title: `Your next 15 minutes`
- Subtitle: `One useful step now. You can still choose something else.`

Action copy:

| Type | Title | Reason | CTA |
| --- | --- | --- | --- |
| urgent assignment | `Finish the work due now` | `This is the one thing that should not wait.` | `Continue` |
| feedback | `Use your latest feedback` | `Turn Auris's correction into one speaking habit.` | `View feedback` |
| due-soon assignment | `Keep this assignment moving` | `A small step now is easier than catching up later.` | `Start` / `Continue` |
| flashcards | `Review 8 cards` | `Keep class vocabulary alive for next time.` | `Review cards` |
| notes | `Say 3 phrases from class notes` | `Bring useful language back into conversation.` | `Open notes` |
| talk | `Speak for 90 seconds` | `A short answer is enough. Keep the speaking muscle warm.` | `Start speaking` |

Secondary options:

- Always show 2 small links under the main CTA when available: `Review cards`, `Open notes`, or `Talk the Talk`.
- This preserves autonomy and reduces the "forced path" risk seen in app-review/community evidence.

### Measurement V0

No backend needed for first visual prototype.

If measuring inside the app, add a tiny event table later:

`student_next_action_events`

- `student_id`
- `class_id`
- `recommendation_type`
- `source_id`
- `shown_at`
- `clicked_at`
- `dismissed_at`
- `context_json`

Do not track `completed_at` until completion can be derived accurately from existing objects:

- Flashcards: `StudentPracticeSession.completed`.
- Standard assignment: `StudentAttempt.submitted_at`.
- Writing feedback: needs `feedback_viewed_at` or event.
- Notes: click/open only unless Google Docs data is available.
- Talk: needs future Talk completion/reflection logging.

### Baseline Queries To Add Later

If read-only database access is available, collect aggregate counts only:

- Weekly active students.
- `student_practice_session` count and cards reviewed in last 7/14 days.
- `student_attempts` started/submitted in last 7/14 days.
- `writing_submissions` reviewed in last 7/14 days.
- `modular_exercise_attempts` started/submitted in last 7/14 days.

Do not export student names/emails into strategy notes.

## Manual Pilot Before Coding

For 3 current students, send one message after class:

```text
Before our next class, do just one thing:

1. Open your class notes and say 3 useful phrases out loud.
2. If you have flashcards due, review up to 8.
3. If I sent feedback, choose one correction and use it in a sentence.

Quick question: when you open the portal, do you usually know what to do first?
```

After they reply, ask one follow-up:

```text
Would a small "Your next 15 minutes" card in the portal help, or would it feel like extra homework?
```

Interpretation:

- If 2/3 say they do not know what to do first, implement the card.
- If 2/3 say it feels like homework, change the copy to "one suggestion" and keep alternatives visible.
- If students already rely on WhatsApp/direct reminders, the card should mirror Auris's personal voice, not feel like an app assignment.

## Falsification Rules

Implement only as a small patch, then judge after two weeks:

- Strengthen if at least 30% of weekly active students click the card and at least 25% complete a recommended action.
- Refine if clicks happen but completion is low.
- Weaken if students ignore it or ask where the old dashboard went.
- Stop expanding if Auris cannot use the signal in class.

## What Not To Implement First

- Audio recording.
- AI pronunciation scoring.
- Streaks/XP/badges.
- A locked learning path.
- A teacher panel with no student event data.
- Backend event logging before the card has a useful UX.

## Final Readiness

Technical readiness: high.

Student-readiness confidence: medium, because authenticated usage data and current-student validation are missing.

Recommendation: ready for Auris to approve a small implementation, but the best next research/validation step is a manual pilot plus aggregate baseline plan.
