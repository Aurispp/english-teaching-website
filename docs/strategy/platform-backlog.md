# Teaching Platform Strategy Backlog

Last updated: 2026-05-24 Cycle 46
Source repo inspected: `/Users/aurisp/repos/teacher-assistant/`

Cycle 46 artifact:

`/Users/aurisp/repos/teacher-website/docs/strategy/next-15-proof-pilot-cycle46.md`

Cycle 46 decision:

- Keep `Your next 15 minutes` as the first platform-retention idea, but do not create another spec.
- The unresolved question is student acceptance and teacher-use proof, not technical feasibility.
- Run a 3-5 student concierge/manual pilot first unless Auris explicitly asks to ship the card.
- Use the existing WhatsApp homework log as the pilot record when convenient; do not add a pilot-response table.
- If the pilot succeeds or Auris wants implementation, patch only the student dashboard advisory card before adding analytics or a teacher companion panel.
- Talk Reflection remains a strong next loop, but it should not jump ahead of Next 15 unless the chosen proof question becomes speaking-practice feedback specifically.

Cycle 34 artifact:

`/Users/aurisp/repos/teacher-website/docs/strategy/portal-retention-proof-refresh.md`

Cycle 34 decision:

- The `Your next 15 minutes` direction remains the best first platform improvement, but it should still be a manual pilot unless Auris explicitly asks to implement.
- SRS remains the measurable retention spine: refreshed 30-day data showed 163 flashcard sessions, 1555 cards reviewed and 157 completed sessions.
- The 7-day scheduled-class SRS snapshot is lower than Cycle 15: 37 sessions and 282 cards reviewed, so use the card as a modest retention aid, not a dramatic public claim.
- No `student_next_action_events` table exists, so do not build a teacher analytics layer before student action events exist.
- Marketing copy may keep saying that vocabulary, materials and practice stay organised between classes; stronger claims about a clear next step should wait until the card ships.

## Current Platform Strengths

The platform is already unusually deep for a personal English teacher:

- Student dashboard with assignments, custom assignments, modular assignments, reviewed feedback, class profile, and Google Docs links.
- Flashcard practice with queues, recall ratings, TTS/audio, examples, session scoring, and SRS concepts.
- Teacher overview with classes, submissions, homework logs, notes overview, flashcard stats, trivia/game stats, grammar/connectors, and progress views.
- Practice surfaces: Talk the Talk, Language Runner, Trivia, scenarios, modular exercises, exam practice, writing review.
- Backend architecture connects calendar, docs notes, transcription, class notes, vocabulary, SRS, and teacher workflow.

## Product Principle

The next platform advantage should not be "more features." It should be "less uncertainty."

Every student should be able to open the portal and know:

1. What should I do today?
2. Why does it matter for my speaking?
3. What did I improve recently?
4. What will we use in the next class?

## P0: Student "Next 15 Minutes" Card

Problem:

Students may see assignments, flashcards, games, exercises, notes, and feedback, but still not know the best use of their limited time.

Idea:

Add a dashboard card that chooses the next best action:

- Review 8 due flashcards.
- Practise 3 phrases from last class out loud.
- Do one speaking prompt.
- Replay one pronunciation item.
- Finish one assigned modular exercise.

Why it fits Auris:

It turns the platform into a personal coach between classes, not a library.

Small test:

Mock the card using existing assignment/SRS/review data before building a full recommendation engine.

### Draft Decision Rules

Start simple and deterministic:

1. If there is overdue required work, show that first.
2. Else if there is reviewed feedback from the last 7 days, show "Read your feedback and fix one thing."
3. Else if flashcards are due, show "Review 8 cards."
4. Else if there is a recent class note, show "Practise 3 phrases from last class out loud."
5. Else show a 2-minute Talk the Talk prompt.

### Draft UI Copy

Title: `Your next 15 minutes`

Subtitle: `The best small step before our next class.`

Action examples:

- `Review 8 cards from last class`
- `Read your latest feedback`
- `Practise one speaking prompt`
- `Open class notes and say 3 phrases out loud`

Why line:

- `This helps you bring the same language back into conversation next time.`

### Why This Matters Commercially

This is also a premium-proof feature. A prospective student can understand: classes do not end when the call ends; the system keeps the next step clear.

### Cycle 12 Decision: Next 15 Minutes First

Cycle 12 produced the implementation-ready spec: `next-15-minutes-platform-spec.md`.

Decision:

- Build a first-screen `Your next 15 minutes` dashboard card before audio recording, AI speaking feedback or a larger progress dashboard.
- Use deterministic rules and existing data first.
- Place it above the current flashcard hero, because the present dashboard already has many useful routes but does not answer "what should I do first?"

Revised priority order:

1. Recent reviewed feedback: `Read your feedback and fix one thing.`
2. Overdue or required assignment: `Continue the work that needs attention.`
3. Due flashcards: `Review up to 8 cards.`
4. Class notes: `Open notes and say 3 phrases out loud.`
5. Talk the Talk: `Do one 90-second speaking prompt.`

Why feedback moves high:

It is the clearest proof of personal teacher value. If Auris has corrected something, the portal should help the student use that correction before it goes cold.

What not to build yet:

- Audio recording.
- Automated pronunciation scoring.
- AI feedback.
- A teacher companion panel without student click/completion events.

Small validation before implementation:

- Ask 3 current students whether they know what to do first when they open the portal.
- Ask whether a single next-action card would feel helpful or like extra homework.
- If implemented, track clicks and completion for 2 weeks before expanding.

### Cycle 13 Implementation Readiness

Cycle 13 created `next-action-implementation-readiness.md`.

Implementation decision:

- The card is technically ready as a frontend-first patch in `StudentDashboard.tsx`.
- Reuse existing SRS stats from `/api/srs/students/me/flashcards/stats`.
- Do not add backend event logging until the visual card is useful.
- Do not add a teacher companion panel until there are real student click/completion events to show.

Priority refinement:

1. Urgent assignment due now or already in progress.
2. Recent reviewed feedback.
3. Due-soon assignment.
4. Due flashcards.
5. Class notes phrase practice.
6. Talk the Talk fallback.

UX refinement:

- The card should say `One useful step now. You can still choose something else.`
- Show two smaller alternative links when available.
- Avoid streaks/XP/badges in V0.

Manual pilot:

Before coding, Auris can test the idea with 3 students by sending one personal message after class and asking whether a portal "next 15 minutes" card would help or feel like homework.

### Cycle 14 Retention Baseline

Cycle 14 created `retention-baseline-and-manual-pilot.md`.

Read-only aggregate database evidence changed the implementation priority:

- 7-day baseline: 31 active students, 59 flashcard sessions, 330 cards reviewed, 53 completed flashcard sessions.
- 14-day baseline: 39 active students, 98 flashcard sessions, 860 cards reviewed.
- 30-day baseline: 42 active students, 161 flashcard sessions, 1524 cards reviewed.
- Standard and writing submissions are too sparse right now to use as the primary success metric.
- Modular work has some current activity and should stay in the selector.
- Feedback remains a premium-proof loop, but feedback views are not measurable yet.

Priority refinement after Cycle 14:

1. Urgent overdue/due-today assignment.
2. Started modular or standard assignment.
3. Due flashcards.
4. Recent reviewed feedback.
5. Class notes phrase practice.
6. Talk the Talk fallback.

Measurement rule:

- Use SRS sessions/cards reviewed and modular starts/submits as the first baseline.
- Add card `shown/clicked/dismissed` events only after Auris approves the student-facing card.
- Do not add a teacher analytics panel until the card produces real event data.

Manual pilot:

Run the 3-5 student script in `retention-baseline-and-manual-pilot.md` before coding unless Auris explicitly asks to implement now.

### Cycle 15 Manual Pilot Execution Plan

Cycle 15 created `next-15-pilot-tracker.md`.

New local evidence:

- The platform already has a teacher-side WhatsApp homework log in `ClassHomeworkLog`.
- `TeacherOverview.tsx` can save exact homework messages for a class or selected students.
- Read-only aggregate data found 2 active homework-log entries in the last 30 days across 2 classes.
- Scheduled non-guest class filter gives a cleaner 7-day baseline: 28 active students, 53 SRS sessions, 324 cards reviewed, 48 completed sessions.

Product implication:

- Do not build a new pilot-response feature.
- Use WhatsApp plus the existing homework log for the first manual test.
- Keep strategy notes anonymous; the live system can hold class-specific messages.

Implementation gate:

- If Auris runs the pilot and gets enough positive need/behaviour signals, implement only the student dashboard card.
- If students prefer WhatsApp/direct reminders, use the portal as the record of the suggestion rather than the source of the suggestion.

## P0: Weekly Progress Recap

Problem:

Premium pricing needs visible progress. Students often feel they are improving slowly unless progress is named for them.

Idea:

Generate a weekly recap:

- New words/phrases used.
- One speaking improvement.
- One recurring mistake to watch.
- One next focus for the coming week.
- Practice streak or portal activity.

Why it fits Auris:

It reinforces the promise: confidence through guided practice and review.

Small test:

Teacher-facing generated recap first, copied into WhatsApp/email manually.

## P1: Speaking Confidence Loop

Problem:

Flashcards help memory, but the offer is confidence speaking. The platform should make speech practice visible.

Idea:

After class, assign a 2-minute Talk the Talk or scenario prompt based on class vocabulary. Student records or self-rates:

- I could answer.
- I needed translation.
- I got stuck.
- I want to practise this in class.

Small test:

No audio storage required at first; use self-rating plus prompt completion.

### Cycle 04 Talk the Talk Spec

Source inspection:

- Public tool: `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- Portal tool: `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- Portal route: `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/App.tsx`

The portal version is a strong candidate for the first speaking-confidence loop because it already has the prompt/timer UX and does not need a public lead CTA. The missing product layer is reflection and teacher usefulness.

#### Student Completion UI

After `Great job!`, ask:

`How did that feel?`

Options:

- `I could answer without stopping`
- `I translated too much`
- `I got stuck`
- `I want feedback on this`

Optional note:

`One phrase I needed: ______`

#### Minimal Data Model

Fields:

- `student_id`
- `theme`
- `difficulty`
- `prompt_text`
- `duration_seconds`
- `completed_seconds`
- `self_rating`
- `wants_feedback`
- `student_note`
- `created_at`

Privacy default:

- Do not store audio in the first version.
- Do not ask for microphone permission.
- Store only completion and self-rating.

#### Teacher Prep Surface

Show in teacher overview/class prep:

`Speaking practice since last class: 2 prompts. Latest: Interview / Medium / "I translated too much". Wants feedback: yes.`

Teacher action:

- `Use this prompt next class`
- `Create follow-up prompt`
- `Mark discussed`

#### Success Metrics

- At least 25% of active students complete one Talk the Talk prompt between classes after it appears in "Next 15 minutes."
- At least 50% of completions include a self-rating.
- Auris can identify one useful class follow-up from the teacher overview in under 30 seconds.

#### Decision Rules For Next 15 Minutes

Use Talk the Talk only when it is the best next action:

1. If required assignment overdue, show assignment.
2. Else if reviewed feedback exists from last 7 days, show feedback.
3. Else if flashcards due, show 8-card review.
4. Else if there is a recent class note with useful phrases, show phrase practice.
5. Else show a 90-second Talk the Talk prompt.

This keeps speaking practice useful without making the dashboard feel random.

### Cycle 06 Outside-In Refinement: Speaking Block Log

External research strengthened the idea that students do not only need "more speaking." They need help noticing why they stop, simplify, translate, or lose confidence with real people.

Add a no-audio reflection after portal Talk the Talk completion:

Question:

`Where did you get stuck?`

Options:

- `I translated too much`
- `I did not know the phrase`
- `Pronunciation felt unclear`
- `I spoke too slowly`
- `I could answer, but it felt stressful`
- `I want to practise this in class`

Optional note:

`The phrase I wanted was...`

Teacher prep display:

`Speaking practice: 1 prompt since last class. Block: "I did not know the phrase." Student note: "how to say ponerse al dia." Wants class practice: yes.`

Why this matters:

- It turns AI/app-style practice into human teacher value.
- It gives Auris a concrete correction target in the next class.
- It makes premium follow-up visible without storing audio or adding privacy complexity.

Small implementation test:

1. Store only theme, difficulty, prompt, duration, selected block, optional phrase, wants-practice boolean, and timestamp.
2. Show one latest item on the student dashboard and teacher overview.
3. Ask 3 current students whether the reflection feels useful or like homework.

## P1: Review-to-Class Bridge

Problem:

Students review items, but may not see how those items return in the next lesson.

Idea:

Teacher dashboard shows "bring back next class":

- 5 weak flashcards.
- 2 structures introduced but not mastered.
- 1 phrase from last notes.
- 1 speaking prompt tied to those items.

Small test:

Use existing TeacherOverview stats and notes overview to create a copyable prep block.

### Draft Teacher Prep Block

For each class/student:

- Last class: 2-3 topics from notes.
- Bring back: 5 weak words/phrases.
- Speaking target: one prompt using those words.
- Correction target: one grammar/pronunciation pattern.
- Confidence prompt: one question that starts easy and becomes more natural.

This would directly support the public promise of "conversation with useful correction and progress between classes."


## P1: Premium Proof Dashboard

Problem:

The website says there is a portal, but leads cannot feel why it matters.

Idea:

Create anonymized screenshots or demo snippets:

- "Vocabulary from your class becomes review."
- "Your materials stay organised."
- "Your progress is tracked."
- "Practice does not disappear after class."

Small test:

Add a tasteful website section or short content post before building a public demo.

## P2: Review Snippet Library

Problem:

Reviews are spread across Google, Superprof, Tusclases, and the site.

Idea:

Maintain a private tagged library of review snippets by outcome:

- confidence
- speaking
- progress
- enjoyable classes
- tools/platform
- professionalism
- exam/school support

Small test:

Create the library manually from existing public reviews; later use it in GBP/social/website updates.

## P2: Student Onboarding Flow

Problem:

The first class sets the tone, but the portal can make the premium feel real earlier.

Idea:

After trial, send a short onboarding path:

- Set goal.
- Choose main pain point.
- Try 5 sample flashcards.
- Do one speaking self-check.
- See how progress will be tracked.

Small test:

Manual onboarding checklist before building full UI.

## P2: Content Reuse from Platform

Problem:

Social content takes time.

Idea:

Turn anonymized class patterns into content:

- "This came up in class this week..."
- "A student asked how to say..."
- "Three ways to make this phrase more natural..."

Small test:

Teacher dashboard button: "Turn this note into 3 content ideas."

## Cycle 11 Marketing-To-Platform Proof Bridge

Cycle 11 used the platform as evidence for the website pricing proof patch. The public promise should stay outcome-led:

`The class does not disappear when the call ends. Vocabulary, materials and review stay organised between classes.`

Local inspection supports this promise:

- Student dashboard surfaces assignments, reviewed feedback, class notes, games, flashcards and practice links.
- Talk the Talk exists as a portal speaking-practice surface.
- Teacher-side concepts already point toward prep, notes, feedback and class follow-up.

Risk:

If a student opens the portal and does not immediately know the next useful action, the premium claim becomes weaker. This strengthens the P0 "Next 15 Minutes" card rather than another broad feature build.

Public promise rule:

- Say what the portal helps the student do: review, reuse, remember, bring language back next class.
- Avoid listing every feature in marketing copy.
- Do not overpromise AI/audio feedback until the no-audio speaking-confidence loop exists.

Next product research packet:

Decide whether "Next 15 Minutes" should be the first platform implementation after the website proof patch. The spec should connect three things:

1. What the student should do between classes.
2. What Auris can see before the next class.
3. What metric proves the portal is improving retention or premium value.

## Cycle 39 AI Speaking Tool Guardrail

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/ai-speaking-human-feedback-cycle39.md`

Cycle 39 tested whether AI speaking tools should change the platform roadmap.

Decision:

- Keep `Your next 15 minutes` before AI/audio work.
- Keep Talk the Talk as a speaking-practice surface.
- Add no-audio Talk reflection before any AI speaking feedback, recording, transcription or scoring.

Why:

- AI apps already cover generic speaking reps, pronunciation scoring, role-play, interviews and business-English practice.
- User/community/research evidence shows persistent gaps around trust, naturalness, nuance, accent bias, over-reliance and what to do next.
- Auris's premium value is human diagnosis and follow-up, not unlimited app-like reps.
- The portal currently has feedback, class notes, SRS, assignments and Talk, but Talk does not yet produce a teacher-usable signal.

Talk Reflection V0 should store only:

- theme
- difficulty
- prompt
- duration
- completed seconds
- reflection choice
- optional stuck phrase/note
- wants class practice
- timestamp

Do not store in V0:

- audio
- transcript
- AI score
- pronunciation diagnosis
- automatic correction

Teacher-side target:

`Speaking practice since last class: 2 prompts. Latest: Work / Medium / "I translated too much". Wants class practice: yes.`

Product order remains:

1. Manual or frontend `Your next 15 minutes` card.
2. Talk reflection after completion.
3. Teacher prep line once reflection events exist.
4. Only then consider audio/transcript/AI if students explicitly want richer feedback.

## Cycle 40 Talk Reflection V0 Technical Spec

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/talk-reflection-v0-technical-spec-cycle40.md`

Cycle 40 converted the Cycle 39 product decision into an implementation-ready platform spec.

Decision:

- Build a no-audio, no-transcript, no-AI reflection layer only when platform work is approved.
- Start with a lightweight `talk_practice_reflections` table and `/api/talk-reflections` router.
- Add one optional reflection card to the portal Talk completion screen.
- Keep the teacher surface as prep context, not a review queue.

Recommended V0 sequence:

1. Add `TalkPracticeReflection` model and migration.
2. Add student `POST /api/talk-reflections/me` and `GET /api/talk-reflections/me`.
3. Add teacher `GET /api/talk-reflections/teacher/recent`.
4. Add `talkReflectionAPI` wrapper in the classroom hub.
5. Add completion-card UI with `Save reflection` and `Just practise today`.
6. Add teacher summary only after real reflections exist.

Key guardrails:

- Derive `student_id` from auth, never from client payload.
- Require class membership if `class_id` is supplied.
- Limit optional notes to 240 characters.
- Do not send optional notes or student identifiers to GA4.
- Do not store audio, transcript, AI score or full spoken answers.

Stop condition:

- If active students use Talk but reflection saves stay below 15%, or if Auris cannot use reflections in class, keep Talk as a practice CTA and do not expand the speaking loop.
