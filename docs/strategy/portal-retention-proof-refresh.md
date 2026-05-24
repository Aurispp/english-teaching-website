# Portal Retention Proof Refresh

Created: 2026-05-23 Cycle 34

Purpose: refresh the student-platform retention evidence after rotating away from unanswered owner-side channel evidence. This artifact decides whether the `Your next 15 minutes` portal loop should remain a manual pilot, become a small frontend implementation, or be used as public premium proof.

## Working Answer

The portal is still one of Auris's best premium differentiators, but the next move is not a bigger dashboard or a public product claim. It is a small, measurable between-class loop.

Best next product move:

1. Run the 3-5 student manual pilot if Auris wants validation first.
2. If Auris wants to ship, implement only the student dashboard `Your next 15 minutes` card.
3. Keep the card advisory, not forced.
4. Keep SRS as the first measured retention spine.
5. Keep feedback and Talk the Talk as premium learning loops, but do not judge them quantitatively until feedback views and Talk completion/reflection are logged.

Public positioning boundary:

- Safe now: `Your vocabulary, materials and practice stay organised between classes.`
- Safe after the card ships: `You always have one clear next step between classes.`
- Not safe yet: `The portal automatically tracks and guides every part of your progress.`

## Refreshed Aggregate Baseline

Read-only aggregate database query on 2026-05-23. No names, emails, content, answers, feedback text or secrets were exported.

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Flashcard Reviews | Standard Started | Standard Submitted | Writing Submitted | Writing Reviewed | Modular Started | Modular Submitted | Modular Reviewed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 27 | 42 | 288 | 36 | 275 | 0 | 0 | 0 | 0 | 5 | 4 | 1 |
| 14 days | 39 | 91 | 711 | 85 | 644 | 1 | 1 | 0 | 0 | 13 | 9 | 1 |
| 30 days | 42 | 163 | 1555 | 157 | 1247 | 2 | 2 | 0 | 0 | 25 | 14 | 2 |

Scheduled non-guest class filter:

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

- SRS remains the strongest measurable between-class behaviour.
- The 7-day SRS snapshot is lower than Cycle 14/15, which is a useful warning against overclaiming retention.
- Modular work remains active enough to stay in the selector.
- Standard/writing activity is still too sparse to be a first success metric.
- Homework log is still underused but available for the manual pilot.
- There is no card event table, so any implemented card should first be judged by manual notes and existing SRS/modular counts unless Auris approves event logging later.

## Source Discovery

For this question, the best evidence should live in:

| Source Type | Why It Matters | Cycle 34 Use |
| --- | --- | --- |
| Aggregate product data | Shows what students already do between classes. | Highest signal: SRS real, modular secondary, writing/standard sparse. |
| Student dashboard code | Reveals current first-screen experience and route handlers. | High: class notes, feedback, tasks and flashcards exist, but no next action. |
| SRS stats/service code | Reveals whether due-card recommendations are technically ready. | High: `due_today` and session completion are already modelled. |
| Teacher overview code | Reveals whether Auris can use the signal before class. | High: attention items and homework log already exist. |
| Homework-log code/data | Tests manual pilot path without new product work. | High: API/UI exist; usage low but enough for pilot storage. |
| Talk the Talk portal code | Tests whether speaking practice can be measured now. | Medium: useful fallback, but completion/reflection missing. |
| Human-teacher platform examples | Shows market category for homework/progress/teacher prep. | Medium-high: validates loop, but can become academy-style if overbuilt. |
| Learning-product structure examples | Shows learner need for a clear next action. | Medium-high: supports card clarity and autonomy. |
| Self-regulated learning research | Tests whether planning/feedback/recommendations matter. | Medium-high: supports design principle, not exact business impact. |
| Current-student replies | The missing source. | Required before saying students want it. |

Chosen source types: aggregate product data, local implementation path, teacher workflow, homework log, Talk fallback, teacher-platform examples and learning-product/research sources.

Skipped source types: broad competitor acquisition scans, because this cycle is about retention proof and platform workflow.

## Local Evidence

| Artifact | Signal | Strategic Meaning |
| --- | --- | --- |
| `StudentDashboard.tsx` | Loads assignments, custom/modular assignments, profile/classes, feedback and class notes; flashcards dominate the hero. | The dashboard has ingredients, but not a first-step selector. |
| `StudentDashboard.tsx` `todoAssignments` | Current task list is status-based. | It does not yet decide urgency or best next action. |
| `StudentDashboard.tsx` feedback block | Reviewed feedback is visible with `View feedback`. | Strong premium proof, but no feedback-view metric. |
| `StudentDashboard.tsx` class notes link | Notes are linked before the flashcard hero. | `Say 3 phrases from class notes` can be a no-backend fallback. |
| `FlashcardStats.tsx` | Top CTA changes around `stats.due_today`. | Existing UX already knows how to say "do this now" for SRS. |
| `StudentSettings.tsx` | Fetches and displays `StudentFlashcardStats`, including due cards. | Dashboard can reuse existing stats pattern. |
| `types.ts` | `StudentFlashcardStats` includes `due_today`, review counts, score and challenge. | No new type is needed for V0 SRS awareness. |
| `flashcard_srs.py` | Computes due counts, session metrics and review quality. | SRS is implementation-ready and measurable. |
| `TeacherOverview.tsx` | Has attention items for submissions, SRS due/quiet students, class structures and class schedule. | Teacher side already has signals; avoid another dashboard first. |
| `TeacherOverview.tsx` homework log | Loads/saves/deletes class homework messages and selected-student targets. | Manual pilot can use existing workflow. |
| `routes.py` homework endpoints | `GET/POST/DELETE /api/classes/{class_id}/homework-log` exists. | No new pilot-response table needed. |
| `ClassHomeworkLog` model | Stores message, source, status, target student ids and assigned date. | Manual pilot can be archived in the live system, while strategy notes stay anonymous. |
| `TalkTheTalk.tsx` | Completion screen offers practice again/change settings, but no API logging/reflection. | Keep Talk as fallback until reflection exists. |
| `measurement-plan.md` | Platform measurement already warns feedback/Talk are under-instrumented. | Cycle 34 strengthens the warning. |
| `next-15-pilot-tracker.md` | Anonymous pilot/scoring is already executable. | Do not build a new validation structure. |

## External Evidence

| Source | URL | Signal | Supports | Weakens |
| --- | --- | --- | --- | --- |
| Duolingo learning path | https://blog.duolingo.com/new-duolingo-home-screen-design/?lang=en | Duolingo redesigned sequencing because learners need a clearer path through practice. | H006 | A locked path for adults. |
| Quizlet Learn help | https://help.quizlet.com/hc/en-us/articles/360030986971-Studying-with-Learn | Learn-style products create guided study paths from goals/content familiarity. | H006, H017 | Copying a flashcard-only model. |
| Busuu Study Plan help | https://help.busuu.com/hc/en-us/articles/16097312171153-What-s-a-Study-Plan-How-do-I-make-one | Study plans create goal/schedule/accountability structure. | H006, H016 | Heavy study-plan UX for Auris. |
| Busuu Study Plan launch | https://blog.busuu.com/new-feature-study-plan-achieve-language-learning-goals/ | Busuu frames language progress as smaller planned steps. | Next 15 size | Over-marketing progress. |
| Khan Academy student report | https://support.khanacademy.org/hc/en-us/articles/7263187791373-How-do-I-use-the-Individual-Student-Report | Teacher reports can show activity, mastery and student-specific dates. | Future teacher companion | A broad analytics panel before card events. |
| Tuton platform | https://tuton.io/ | Independent language tutor platform centred on students, homework and progress. | Personal tutor workflow category | Academy/LMS style sprawl. |
| Tuton progress article | https://tuton.io/blog/how-to-track-student-progress-online-tutoring/ | Progress tracking works best when lesson notes, vocabulary and practice connect. | Portal continuity proof | Tracking without next-class use. |
| Eluency | https://www.eluency.com/ | Teacher-created practice and completion/weak-spot visibility are market-normal. | Human-created practice loop | Full platform rebuild. |
| ZenGengo | https://www.zengengo.com/ | Language homework can include speaking/writing/media tasks and teacher feedback. | Speaking/feedback loop later | Audio/storage complexity now. |
| Language Homework | https://languagehomework.com/ | Quizzes, flashcards and drills for language tutors are a visible product category. | SRS/modular loop | Making portal sound generic. |
| Tutor.com reports | https://www.tutor.com/higher-education/why-tutor | Reporting can identify usage and learners needing help. | Teacher prep signal later | Institutional dashboard tone. |
| Frontiers SRL/mobile learning | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.624430/full | Personalized mobile-assisted grammar learning with SRL mechanisms supports planning/monitoring/feedback. | Why line and reflection | Overstating causal retention from one card. |
| Preply human-plus-AI features | https://preply.com/en/blog/preply-announces-new-ai-powered-features-to-guide-the-future-of-personalized-learning-in-a-human-ai-world/ | Larger platforms package live teaching plus between-lesson guidance. | Auris's lean human-plus-portal model | Building AI first. |
| Busuu community corrections | https://www.busuu.com/en/how-to/corrections | Feedback after language production is a known learning loop. | Feedback as premium proof | Feedback as first metric without view logging. |

Source-quality note:

- Product pages validate the category but are biased toward feature breadth.
- Aggregate Auris platform data is higher-signal for what to build now.
- Current-student replies remain the missing decision source.

## Falsification

### H006: The student platform's next improvement should be clarity of next action.

Status: strengthened and refreshed.

Evidence:

- Student dashboard has many useful routes but no single recommendation.
- Refreshed data still shows enough active SRS/modular use to justify a next-action card.
- External products repeatedly solve "what should I do now?" with paths, study plans or teacher-created tasks.

What weakens an immediate build:

- No owner approval to edit the platform.
- No current-student replies yet.
- Weekly activity is lower than the earlier snapshot, so the card should be tested modestly, not treated as a guaranteed retention unlock.

Next test:

- Run the manual pilot or implement the frontend-only card if Auris asks.

### H017: SRS is the current measurable retention spine.

Status: strengthened but bounded.

Evidence:

- 30-day SRS remains high: 163 sessions, 1555 cards reviewed and 157 completed sessions.
- Scheduled-class filter still shows 37 SRS sessions and 282 cards reviewed in 7 days.
- No `student_next_action_events` table exists, so SRS remains the cleanest measurable baseline.

What this does not prove:

- That SRS is the whole learning method.
- That SRS use comes from current paid students.
- That a future card caused behaviour.

Next test:

- Compare 14 days before/after a card or manual pilot using SRS sessions/cards reviewed plus anonymous in-class evidence.

### H016: The Next 15 card must preserve autonomy.

Status: strengthened.

Evidence:

- App/product examples support clear next steps, but public reactions to forced paths in prior cycles warned against removing learner control.
- Auris teaches adults/professionals; the tone should feel like personal guidance, not a school app assigning homework.

Next test:

- Card subtitle stays: `One useful step now. You can still choose something else.`
- If 2 of 3 pilot students call it homework, soften or keep the WhatsApp route.

### H018: The existing homework log is enough for the first manual pilot.

Status: strengthened.

Evidence:

- Homework-log API/UI/model still exist.
- 2 active homework-log messages in 30 days show the workflow is available but not heavily used.

Next test:

- Use the homework log for the 3-5 student pilot instead of adding a pilot table.

Favored idea tested: `Build the card now because the spec is ready.`

Result: refined. The card is technically ready, but no new owner/student evidence arrived. A manual pilot remains the cleanest default unless Auris explicitly asks to implement.

Cheaper alternative that could beat the card:

- Auris sends one WhatsApp next-step after class and records it in the homework log. If students respond and act, the product can mirror that voice later.

## Implementation-Ready Decision

### If Auris Chooses Manual Pilot

Use `next-15-pilot-tracker.md`. Do not create a new tracker.

Best message variant to use first:

```text
Tiny experiment before our next class:

Choose just one thing, not all three:

- Review up to 8 flashcards if they are due.
- Pick one correction from my feedback and use it in a sentence.
- Open your class notes and say 3 useful phrases out loud.

When you open the portal, is it clear what to do first, or is it a bit too much choice?
```

Record only anonymous rows:

- student type
- knows what to do first: yes/no/mixed
- helpful/homework/unsure
- action chosen
- did it before next class
- in-class evidence
- decision

### If Auris Chooses Implementation

Patch only `StudentDashboard.tsx`.

V0 selector:

1. Urgent overdue/due-today assignment.
2. Started modular or standard assignment.
3. Due flashcards.
4. Recent reviewed feedback.
5. Class notes phrase practice.
6. Talk the Talk fallback.

Card copy:

- Eyebrow: `Before next class`
- Title: `Your next 15 minutes`
- Subtitle: `One useful step now. You can still choose something else.`

Reason lines:

| Action | Reason |
| --- | --- |
| Urgent assignment | `This is the one thing that should not wait.` |
| Started assignment | `A small step now is easier than catching up later.` |
| Flashcards | `Keep class vocabulary alive for next time.` |
| Feedback | `Turn Auris's correction into one speaking habit.` |
| Notes | `Bring useful language back into conversation.` |
| Talk | `A short answer is enough. Keep the speaking muscle warm.` |

Do not add yet:

- new backend event table
- teacher analytics panel
- AI/pronunciation scoring
- Talk audio/reflection storage
- streaks, XP or badges

### Two-Week Measurement If Implemented

Minimum private comparison:

| Window | SRS Sessions | Cards Reviewed | Completed SRS Sessions | Modular Started | Modular Submitted | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| 14 days before | 91 | 711 | 85 | 13 | 9 | Cycle 34 rolling baseline. |
| 14 days after |  |  |  |  |  | Fill after implementation. |

Interpretation:

- Strengthen if SRS/modular activity rises or stays stable and students mention the card helped.
- Refine if clicks happen but actions are too large or stale.
- Weaken if students ignore it or call it extra homework.
- Stop expanding if Auris cannot use the signal in class.

## What Not To Do Yet

- Do not use portal proof as the first public headline.
- Do not build a teacher analytics dashboard before student action events exist.
- Do not make the offer sound like a SaaS or academy.
- Do not overfit the method to flashcards just because SRS is measurable.
- Do not add public claims about automatic guidance until the card ships.

## Next-Cycle Packet

If Auris gives a product decision:

- `pilot`: use `next-15-pilot-tracker.md`, then update this artifact with anonymous results.
- `implement`: patch only `StudentDashboard.tsx`; verify with local browser if credentials/session are available, otherwise code review plus build/test.

If no product decision arrives:

- Do not create more Next 15 specs.
- Inspect pricing/profile coherence or Search Console/indexing next.
- Keep the portal proof line modest in marketing artifacts.
