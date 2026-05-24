# Next 15 Minutes Platform Spec

Created: 2026-05-22 Cycle 12

Purpose: turn the student portal from "lots of useful things" into a clear between-class coach that supports retention and premium proof.

Cycle 34 refresh: `/Users/aurisp/repos/teacher-website/docs/strategy/portal-retention-proof-refresh.md`

Cycle 34 decision:

- Keep the implementation path small: a frontend advisory card on `StudentDashboard.tsx`, no teacher analytics panel first.
- Use SRS/modular activity as the first measurable retention baseline.
- Keep feedback and Talk as visible learning loops, but do not make them the first quantitative success metrics until feedback-view and Talk completion/reflection events exist.
- If Auris has not approved implementation, run the manual pilot in `next-15-pilot-tracker.md` instead of creating another spec.

Primary research question: what platform improvement best makes "learning continues between classes" true and visible?

## Decision

Build a `Your next 15 minutes` card on the student dashboard before adding new AI/audio features or a larger Talk the Talk logging system.

Why:

- The existing student dashboard already has assignments, reviewed feedback, class notes and route access to flashcards, games and Talk the Talk, but it does not choose one best action.
- The flashcard area already has strong SRS stats and due-card APIs. The best "next action" pattern exists one route deeper in `FlashcardStats.tsx`.
- Talk the Talk is useful, but the current portal version ends at "Great job!" without completion logging, self-rating, teacher follow-up or a practice record.
- The lowest-risk premium proof is not another feature. It is a first-screen action that says: "here is the small thing to do before class."

Cycle 13 refinement:

- Make the card advisory, not restrictive.
- Show one primary next action plus two quieter alternatives when available.
- Put truly urgent assignments before feedback. Recent feedback remains the best premium-proof action when there is no urgent work.
- Do not add streaks or points in V0; product evidence suggests gamification can distract from learning when it becomes the goal.

## Local Evidence

| Artifact | Evidence | What It Means |
| --- | --- | --- |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` | Dashboard loads assignments, custom/modular assignments, reviewed feedback, student profile/class notes and renders flashcards, tasks, class notes and feedback. | The raw ingredients for a next-action selector already exist. |
| `StudentDashboard.tsx` to-do logic | `todoAssignments` is status-based and does not currently choose by urgency, feedback freshness or flashcard due state. | "On Deck" is useful, but not yet a recommendation. |
| `StudentDashboard.tsx` header/hero | The primary hero is `Master Your Vocabulary`, with flashcards as the main CTA. | The first screen may push flashcards even when feedback or required work matters more. |
| `StudentDashboard.tsx` reviewed feedback | Reviewed writing feedback appears in a visible notification block with direct "View feedback" routing. | Feedback should be high priority because it turns Auris's correction into the next student habit. |
| `StudentDashboard.tsx` class notes link | Class notes URL is already available from the student profile/classes. | A lightweight "practice 3 phrases from notes" action can exist before any notes-parsing work. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx` | Top CTA changes by `stats.due_today`, learning/new cards and all-caught-up states. | This is the strongest existing UX pattern to reuse on the dashboard. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardPractice.tsx` | Practice sessions start/end, fetch next card and submit review quality. | Flashcards already have measurable completion behavior. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentSettings.tsx` | Fetches active class flashcard stats and due cards for student-facing display. | Dashboard can likely fetch the same data without new backend work. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx` | Select theme/difficulty/duration, practice, complete screen, "Practice Again." No API logging or reflection. | Talk is good as a fallback action, but weak as the first retention proof until it records a reflection. |
| `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` | Teacher overview already aggregates submissions, SRS recent students, games/trivia, class progress and attention items. | Teacher-side companion can be small: surface one between-class signal rather than a new dashboard. |
| `/Users/aurisp/repos/teacher-assistant/backend/app/api/srs.py` | Student endpoints include due cards, stats, practice session start/end/next-card; teacher endpoints include recent students and practice sessions. | SRS is implementation-ready for next-action logic and teacher proof. |
| `/Users/aurisp/repos/teacher-assistant/backend/app/services/flashcard_srs.py` | Due cards are prioritized and stats compute `due_today`, review/new/learning counts and review history. | Recommendation logic should use existing SRS priorities rather than inventing a separate memory system. |
| `/Users/aurisp/repos/teacher-website/docs/strategy/website-proof-pricing-implementation-plan.md` | Cycle 11 made portal continuity part of premium proof, but warned not to overpromise practice habits yet. | This card is the product step that makes the public claim stronger later. |

## Data / API Evidence

| Check | Result | Interpretation |
| --- | --- | --- |
| Live backend health | Remote API returned `{"status":"ok"}`. | Platform API is reachable. |
| Protected student endpoints | Unauthenticated `/api/srs/students/me/flashcards/stats` and `/api/lms/students/me` returned 401. | Expected. Future checks need an authenticated student session or safe local test token. |
| Local code/API inspection | SRS stats/due endpoints and teacher recent-student endpoints exist. | The first version can be frontend-led with existing APIs once authenticated. |
| Env/config inspection | Frontend code defaults to the remote production API, with local development overrides. Secrets were not recorded. | Future implementation should use existing `api.ts` helpers and not hard-code URLs. |

## Source Discovery

Best source types for this question:

- Student first-screen code and route structure: reveals what students actually see.
- SRS API and service code: reveals whether "review 8 cards" can be accurate without new backend work.
- Teacher overview/prep surfaces: reveals whether between-class practice can feed the next lesson.
- Mobile-assisted language learning research: tests whether recommendation/feedback/self-regulation matter.
- Spaced retrieval research: tests whether flashcard priority is educationally justified.
- Habit-product examples: tests whether a tiny daily action beats bigger homework.
- Language app product reviews: reveals what learners like and distrust in AI practice apps.
- Human-tutor-plus-platform examples: shows how larger platforms are packaging between-lesson value.
- Current-student validation prompts: needed because public app/research evidence cannot prove Auris's students will use it.

## External Evidence

| Source | Evidence Point | Supports | Weakens / Caveat |
| --- | --- | --- | --- |
| Duolingo habit/streak blog, https://blog.duolingo.com/how-duolingo-streak-builds-habit/ | Duolingo frames streaks as a habit mechanism and tests mechanics to keep daily active learners engaged. | Small repeatable actions can matter more than large homework plans. | Streaks can optimize app return, not necessarily speaking progress. |
| Duolingo streak iteration blog, https://blog.duolingo.com/improving-the-streak/ | Their experiment conclusion emphasized lowering the barrier to daily habit early. | A 15-minute recommendation is directionally right; make it easy and specific. | Auris should avoid making streaks the main progress metric. |
| Frontiers SRL/mobile learning, https://www.frontiersin.org/articles/10.3389/fpsyg.2021.624430/full | Mobile language learning depends heavily on self-regulation, and useful systems often use recommendation, portfolio and feedback. | "Next 15 Minutes" is not cosmetic; it scaffolds student self-regulation. | The paper is not about Auris's exact adult private-class context. |
| Frontiers MALL vocabulary/SRL, https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.872922/pdf | Self-regulation includes planning, monitoring, evaluating, motivation and self-efficacy; some mobile vocabulary studies improve learning and motivation with SRL mechanisms. | The card should show why the action matters and later ask lightweight reflection. | Longitudinal vocabulary outcomes can vary, so do not claim guaranteed retention. |
| Frontiers Education Spanish-speaking adult EFL case, https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1715111/pdf | A February 2026 paper, with a 2025 DOI, highlights structured spaced retrieval as a vocabulary retention strategy for Spanish-speaking adult EFL learners. | Due flashcards deserve an early recommendation slot. | Small case study; use as support, not proof of business impact. |
| Busuu community corrections, https://www.busuu.com/en/how-to/corrections | Busuu makes speaking/writing practice concrete by asking learners to submit work and receive community feedback. | Human or near-human feedback is a valuable bridge after practice. | Busuu uses a huge community; Auris has a teacher relationship instead. |
| ELSA Google Play listing/reviews, https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_US&gl=US | ELSA positions real-time pronunciation feedback and career scenarios, while reviews also surface accuracy/technical friction and advanced-feature paywalls. | AI speaking apps normalize practice and feedback expectations. | Accuracy friction strengthens "human diagnosis later," but does not justify building AI first. |
| Praktika Trustpilot, https://www.trustpilot.com/review/praktika.ai | Praktika emphasizes gamified, low-shame AI speaking with real-time feedback, while review themes include mixed AI/subscription/customer-service sentiment. | Learners value pressure-free speaking practice. | Subscription/AI reliability issues suggest trust and teacher context are still differentiators. |
| Preply AI features, https://preply.com/en/blog/preply-announces-new-ai-powered-features-to-guide-the-future-of-personalized-learning-in-a-human-ai-world/ | Preply is packaging lesson insights, daily exercises and scenario practice as human-led, AI-supported between-lesson value. | The strategic direction is validated: live teaching plus guided between-class practice. | Preply has scale and AI budget; Auris should implement a lean deterministic version first. |
| Preply/Leanlab Spanish-speaker study, https://avatars.preply.com/inbound/media/20250902/preply-research-leanlab-education.pdf | Spanish-speaking adults aged 25-55 reported confidence and progress after a 12-week tutor-led program; most said a real person was key. | Auris's human-plus-portal model fits Spanish-speaking adults/professionals. | Preply-branded research; use cautiously and validate with Auris's own students. |

## Recommended V0

### Placement

Place the card above the flashcard hero on `/student/dashboard`.

### Title

`Your next 15 minutes`

### Subtitle

`One useful step before our next class.`

### Priority Rules

| Priority | Condition | Recommended Action | CTA | Reason Copy |
| --- | --- | --- | --- | --- |
| 1 | Required work is overdue/due today or already in progress | Continue or start the most urgent assignment | `Continue` / `Start` | `This is the one thing that should not wait.` |
| 2 | Started modular/standard assignment exists | Keep the assignment moving | `Continue` | `A small step now is easier than catching up later.` |
| 3 | Flashcard stats show `due_today > 0` | Review up to 8 due cards | `Review cards` | `Keep class vocabulary alive for next time.` |
| 4 | Reviewed feedback exists from recent work | Read feedback and fix one thing | `View feedback` | `Turn Auris's correction into one speaking habit.` |
| 5 | Class notes URL exists and no higher priority | Open notes and say 3 useful phrases out loud | `Open notes` | `Bring useful language back into conversation.` |
| 6 | No higher priority | Do one 90-second Talk the Talk prompt | `Start speaking` | `A short answer is enough. Keep the speaking muscle warm.` |

Rule adjustment from Cycle 13: feedback is the strongest teacher-value loop, but not always the best student-first action. Urgent work should win. The card should also preserve autonomy by showing secondary links such as `Review cards`, `Open notes`, or `Talk the Talk`.

Cycle 14 baseline adjustment: live aggregate usage is SRS-heavy, while recent standard and writing submissions are sparse. Due flashcards should therefore sit above feedback until feedback views are measurable. Started assignments still outrank flashcards because abandoned work is a stronger "finish this" signal than a general review habit.

Cycle 34 baseline refresh keeps this priority. The rolling 14-day snapshot is 91 flashcard sessions, 711 cards reviewed, 13 modular starts and 9 modular submits, with writing still at zero and no card event table. This strengthens an SRS/modular-aware V0 and weakens any feedback-first measured claim.

### Data Inputs

Use existing data first:

- `combinedAssignments`
- `reviewedFeedback`
- `studentProfile.classes[0].class_id`
- `studentProfile.classes[0].google_doc_url` / `studentProfile.google_doc_url`
- SRS stats: `/api/srs/students/me/flashcards/stats?class_id={activeClassId}`

Optional later:

- Due-card preview: `/api/srs/students/me/flashcards/due?class_id={activeClassId}&limit=8`
- Talk reflection completions
- Feedback acknowledgement/read state
- Last class date and next class date

## Teacher Companion

V0 can be read-only and small. Add a `Between-class signal` to teacher overview later:

- Latest recommended action clicked/completed.
- Flashcards due/reviewed since last class.
- Latest reviewed feedback opened.
- Latest Talk reflection once implemented.

Teacher copy:

`Before next class: Ana reviewed 8 words, opened feedback, and marked "I translated too much" on a speaking prompt.`

Do not add this until student-side action tracking exists; otherwise it becomes another empty teacher panel.

## Event Model

V0 can ship without backend events if the goal is UX clarity. For measurement, use a small event table or analytics event later:

`student_next_action_events`

- `student_id`
- `class_id`
- `recommendation_type`
- `source_id`
- `shown_at`
- `clicked_at`
- `completed_at`
- `dismissed_at`
- `context_json`

Site/product analytics names:

- `student_next_action_shown`
- `student_next_action_clicked`
- `student_next_action_completed`

## Public-Proof Boundary

Safe to say now:

- `Each class includes access to a student portal for materials, vocabulary and review.`
- `Your vocabulary, feedback and practice stay organised between classes.`

Safe after the Next 15 card ships:

- `You always have one clear next step between classes.`
- `The portal helps you know what to review before our next lesson.`

Safe after Talk reflection + teacher signal ships:

- `Auris can see where you got stuck and bring it back into class.`

Do not promise yet:

- Automated speaking feedback.
- Guaranteed daily habits.
- AI pronunciation correction.
- That Auris reviews every portal action before every class.

## Success Metrics

| Metric | Target | Why |
| --- | --- | --- |
| Next-action click-through | 30%+ of weekly active students | Shows the card is useful enough to act on. |
| Recommended action completion | 25%+ of active students weekly | Stronger than clicks; points toward retention. |
| Flashcard sessions from dashboard | Increase after card launch | Proves the dashboard helps SRS use. |
| Feedback views after review | Increase after card launch | Proves corrections are being used. |
| Teacher prep usefulness | Auris can find one useful between-class signal in under 30 seconds | Keeps the product tied to the live lesson. |

## Falsification

Favored idea: "Next 15 Minutes" is the best first platform improvement.

What would weaken it:

- Students ignore the card for two weeks.
- Students click but do not complete the action.
- Students say it feels like extra homework rather than helpful guidance.
- Auris does not use any of the resulting signals in class.
- The card keeps recommending the wrong thing because available data is stale.

Cheaper alternative that could beat it:

- Auris manually sends a WhatsApp/portal note after each class: `Before next class, do this one thing.`

Practical test:

- Before building, ask 3 current students: "When you open the portal, do you usually know what to do next?"
- After building, compare 2 weeks of next-action clicks and flashcard/feedback use against the prior baseline.

## Implementation Path If Auris Asks

1. Add a pure selector function in `StudentDashboard.tsx`, or a small helper module if tests are desired.
2. Fetch SRS stats for the active class on dashboard load.
3. Build `NextActionCard` above the existing flashcard hero.
4. Route each CTA to existing destinations: feedback state, assignment route, `/flashcards?class_id=...`, class notes URL, `/student/talk-the-talk`.
5. Add analytics/data events only after the card is visually useful.
6. Add teacher companion after there is real student action data.

## Current-Student Validation Prompts

Auris can ask these manually:

- `When you open the portal, do you know what to do first?`
- `Would a single "next 15 minutes" suggestion help, or would it feel like homework?`
- `Which is most useful before class: feedback, vocabulary, class notes, assignments or speaking prompts?`
- `After feedback, do you usually know how to use it in speaking?`
- `What would make you practise for 5-15 minutes without needing motivation?`

## Recommendation

Do the Next 15 card before Talk audio, AI feedback or a larger student-progress dashboard. It is the smallest step that improves student experience, strengthens premium proof, and gives Auris better teacher-side leverage later.
