# Next 15 Proof Pilot

Created: 2026-05-24 Cycle 46

Purpose: decide whether Auris should run the `Your next 15 minutes` portal pilot now, implement the dashboard card, or switch first to Talk Reflection / teacher-prep proof. This is a strategy artifact only; no platform code was changed.

## Primary Question

Should Auris run the `Your next 15 minutes` portal manual pilot now, implement the dashboard card, or focus instead on Talk Reflection/teacher-prep proof?

## Working Answer

Run the concierge/manual `Next 15` proof sprint before building, unless Auris explicitly asks to ship the dashboard card.

The platform already has enough ingredients: assignments, modular work, reviewed feedback, class notes, Talk the Talk, SRS stats, teacher attention items and a homework log. The unresolved risk is not technical feasibility. The unresolved risk is whether current adult students want one suggested next step, whether it feels helpful rather than like more homework, and whether Auris can connect the action back into the next class.

The smallest useful proof is:

1. Auris sends one personal next-step message to 3-5 current students after class.
2. He saves the same message in the existing homework log when convenient.
3. He records anonymous outcomes only: did they know what to do, did they act, did it help the next class?
4. Only then does the card become an implementation default.

## Source Discovery

Before external browsing, the best evidence for this question seemed likely to live in:

| Source Type | Why It Might Reveal The Answer | Chosen? | Quality |
| --- | --- | --- | --- |
| Current-student replies | Only source that can prove whether students want the suggestion. | Missing | Highest, absent |
| Aggregate portal usage data | Shows what students already do between classes. | Yes, via prior safe snapshots | High |
| Student dashboard code | Shows whether the first screen already answers "what now?" | Yes | High |
| SRS API and flashcard UI | Shows if due-card guidance is already technically ready. | Yes | High |
| Teacher overview and homework log | Shows whether manual pilot can use existing workflow. | Yes | High |
| Talk portal code/spec | Tests whether speaking reflection should overtake Next 15. | Yes | Medium-high |
| Live API/portal checks | Confirms current deployed health and auth boundary. | Yes | High |
| Self-regulated language-learning research | Tests whether recommendations/planning/feedback are learning-relevant. | Yes | Medium-high |
| Language app guided-path docs | Shows category expectations for study paths and small actions. | Yes | Medium-high |
| Tutor/LMS product pages | Shows what independent-teacher platforms sell as retention/progress. | Yes | Medium |
| App/community complaints | Reveals forced-path, generic-AI and homework-fatigue risks. | Yes | Medium |
| Pricing/acquisition sources | Could show premium proof value, but not the product decision. | Skipped | Low for this cycle |

Chosen source families: local code and platform strategy, safe live API checks, academic/official learning-product sources, tutor-platform examples, and product/community complaint signals.

## Local Evidence

| Artifact | Signal | Interpretation |
| --- | --- | --- |
| `research-log.md` Cycle 45 | Last cycle says do not repeat unchanged indexing; rotate unless approval/GSC/deploy changes. | Cycle 46 should choose a different strategic thread. |
| `research-roadmap.md` RQ005 | Portal retention remains high-confidence but exact design unproven. | This cycle should sharpen the gate, not create another abstract spec. |
| `hypotheses.md` H006/H011/H016/H017/H018 | Existing hypotheses already prefer Next 15, Talk bridge later, autonomy, SRS measurement and homework-log pilot. | This cycle tests whether that stack still holds. |
| `platform-backlog.md` | The platform principle is "less uncertainty"; Next 15 is the P0 product improvement. | Still strategically aligned. |
| `portal-retention-proof-refresh.md` | Cycle 34 refreshed 7/14/30-day aggregate usage and kept manual pilot as default. | The evidence base is current enough; no need to re-query unless owner asks. |
| `retention-baseline-and-manual-pilot.md` | SRS is the measurable spine; feedback/Talk views are not measurable yet. | Use SRS/modular activity plus anonymous class evidence for first proof. |
| `next-15-pilot-tracker.md` | Paste-ready scripts, anonymous rows and scoring already exist. | Do not create a new tracker or app feature for the pilot. |
| `next-action-implementation-readiness.md` | Frontend card is technically ready, but pilot first unless Auris asks to ship. | Implementation is a choice, not a blocker. |
| `StudentDashboard.tsx` | Loads assignments, custom/modular assignments, profile/classes, reviewed feedback and class notes; no Next 15 selector. | The dashboard has ingredients but no first-step decision. |
| `StudentDashboard.tsx` rendered order | Feedback and class notes appear above a large flashcard hero; status-based tasks appear lower. | A student can still face too many choices. |
| `FlashcardStats.tsx` | Fetches `/api/srs/students/me/flashcards/stats` and already uses `due_today` style guidance. | Due-card recommendation is technically available. |
| `backend/app/api/srs.py` and SRS models | Practice sessions, review logs and stats already exist. | SRS can measure behavior before/after a pilot or card. |
| `ClassHomeworkLog` model and routes | Existing homework log stores WhatsApp-style messages, source, target students and assigned date. | Manual pilot can use existing workflow; no new table needed. |
| `TeacherOverview.tsx` | Teacher dashboard loads/saves/deletes homework-log rows and already computes attention items. | Teacher workflow can absorb a small pilot without a product rebuild. |
| `TalkTheTalk.tsx` and Cycle 40 spec | Talk is useful, but completion/reflection logging is not implemented. | Keep Talk as fallback or later reflection loop, not the first measured retention proof. |

## Data / API Evidence

Live checks on 2026-05-24:

| Check | Result | Interpretation |
| --- | --- | --- |
| `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` | HTTP 200, `{"status":"ok"}`. | Production API is reachable. |
| `GET /api/lms/students/me` without auth | HTTP 401, `Authorization header missing`. | Student profile remains protected; no public student-data leak. |
| `GET /api/srs/students/me/flashcards/stats?class_id=1` without auth | HTTP 401, `Authorization header missing`. | SRS stats are correctly protected. |
| `GET https://english-with-auris-portal.netlify.app/student/dashboard` | HTTP 200 Netlify SPA shell. | Portal route is live, but authenticated state is needed for first-screen observation. |

Prior safe aggregate snapshot from Cycle 34 remains the retention baseline because this cycle did not need new credentialed DB access:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Modular Started | Modular Submitted |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 27 | 42 | 288 | 36 | 5 | 4 |
| 14 days | 39 | 91 | 711 | 85 | 13 | 9 |
| 30 days | 42 | 163 | 1555 | 157 | 25 | 14 |

Scheduled-class refinement from Cycle 34:

- 22 scheduled non-guest classes.
- 50 scheduled-class students.
- 24 scheduled-class active students in 7 days.
- 37 scheduled-class SRS sessions in 7 days.
- 282 scheduled-class cards reviewed in 7 days.
- 2 active homework-log messages in 30 days.
- `student_next_action_events` table missing.

## External Evidence

| Source | URL | Signal | Supports | Weakens |
| --- | --- | --- | --- | --- |
| Duolingo home-screen redesign | https://blog.duolingo.com/new-duolingo-home-screen-design/?lang=en | Duolingo changed the home screen because learners were unsure how to use the app well and wanted a clear path. | H006, clear next step | A locked path for adults/professionals. |
| Quizlet Study Path | https://help.quizlet.com/hc/en-ca/articles/360048314692-Setting-up-a-study-path | Quizlet offers adapted study sequences and syncs path progress across devices. | Small guided study sequence | Flashcard-only model. |
| Busuu Study Plan support | https://help.busuu.com/hc/en-us/articles/16097312171153-What-s-a-Study-Plan-How-do-I-make-one | Study plans include goals, schedule, reminders, daily time and progress tracking. | Small recurring habit | Heavy plan UX for Auris. |
| Frontiers SRL mobile-assisted EFL grammar study | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.624430/full | Personalized recommendations, feedback and an e-portfolio in an SRL system were associated with stronger grammar-test outcomes than assignment submission alone. | Recommendations plus feedback can matter | Does not prove one card changes Auris retention. |
| Tuton independent tutor platform | https://tuton.io/ | Independent-tutor platforms sell lessons, notes, SRS vocabulary, student progress and reminders. | Portal continuity as premium category | Full LMS/AI sprawl. |
| Eluency teacher platform | https://www.eluency.com/ | Teachers see completion, quiz data and weak spots before class, with practice between sessions. | Teacher-usable prep signal | Analytics dashboard before student proof. |
| ZenGengo service page | https://www.zengengo.com/our-service | Language assignments include all four skills, auto-grading and custom teacher feedback. | Speaking/feedback category | Audio/AI complexity now. |
| Preply how-it-works | https://preply.com/en/how-it-works | Preply frames progress as live tutor support plus practice beyond lessons, personalized vocabulary and tools. | Human-plus-portal positioning | Marketplace/AI scale tone. |
| Preply/Leanlab Spanish-speaker workplace PDF | https://avatars.preply.com/inbound/media/20260109/Preply_Efficiency_Research_Platform_Comparison_2025.pdf | Sponsored/non-controlled 2025 comparison claims stronger confidence and recommendations for 1:1 tutor learners than self-learning app users; includes adult Spanish speakers learning for work. | Human feedback premium | Sponsored and not controlled. |
| Reddit Duolingo path reactions | https://www.reddit.com/r/duolingo/comments/vpdat9 | Some users resent fast linear paths and loss of review/control. | Preserve autonomy | Forced single path. |
| Reddit Preply AI/chat complaints | https://www.reddit.com/r/Preply/comments/1lx0pc0/so_many_tutors_use_chatgpt_even_in_chat/ | Learners/tutors complain when AI messages or homework feel generic, unchecked or not truly from the tutor. | Auris's direct human follow-up | Generic AI next-step copy. |
| Reddit Preply lesson insights discussion | https://www.reddit.com/r/Preply/comments/1orjnk2/a_friendly_reminder_yet_again_to_keep_lesson/ | Some learners value vocab banks/talk-time insights, but criticize generic homework and still rely on the tutor to guide between lessons. | Personal guidance between classes | Overbuilt or generic homework engine. |

Source-quality note:

- Official/product sources are good for category patterns, but biased toward the platform's own UX.
- Reddit signals are useful for risk language, but not buying proof.
- Current-student replies remain the missing decision source and should outrank another product-source scan.

## Alternative Comparison

| Option | Evidence Strength | Effort | Student Risk | Premium-Proof Value | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| Manual Concierge Next 15 pilot | High local fit; missing student replies | Low | Low if personal/optional | High if used in next class | Do now |
| Implement dashboard card V0 | Technically ready; unproven student desire | Medium | Medium if it feels like homework | High after click/behavior evidence | Ship only if Auris asks or pilot succeeds |
| Talk Reflection V0 | Strong technical spec; good AI-era bridge | Medium-high | Medium if form friction appears | High for teacher diagnosis | Next after Next 15 or if Talk is chosen as focus |
| Teacher analytics panel | Existing teacher overview already strong | High | Low student risk, high complexity | Low until card/reflection events exist | Do not do yet |
| More portal marketing copy | Easy | Low | Medium overclaim risk | Low without product proof | Do not do yet |

## Implementation-Ready Pilot Packet

Use `next-15-pilot-tracker.md` as the working tracker. Do not create another tracker unless the pilot has real rows.

### Pilot Audience

Pick 3-5 active students:

- One flashcards user.
- One notes-first or WhatsApp-first student.
- One assignment/modular-active student.
- One busy adult/professional if available.
- Optional one student who rarely opens the portal.

### Concierge Message

```text
Tiny experiment before our next class:

Choose just one useful step, not all of them:

- Review up to 8 flashcards if they are due.
- Pick one correction from my feedback and use it in a sentence.
- Open your class notes and say 3 useful phrases out loud.
- If you already have an assignment started, just continue that.

Quick question: when you open the portal, do you normally know what to do first, or is there a bit too much choice?
```

Follow-up:

```text
Would a small "Your next 15 minutes" suggestion in the portal help, or would it feel like extra homework?
```

### Homework Log Use

If convenient, paste the same message into the existing homework log:

- Source: `whatsapp`.
- Target: whole class or selected student IDs.
- Do not build a new pilot-response feature.
- Do not store names/replies in strategy docs.

### Anonymous Outcome Fields

| Field | Allowed Values |
| --- | --- |
| Student Type | flashcards / notes-first / assignment-active / busy adult / low-portal-use |
| Knows What To Do? | yes / no / mixed |
| Helpful Or Homework? | helpful / homework / unsure |
| Action Chosen | cards / feedback / notes / assignment / talk / none |
| Did It Before Next Class? | yes / no / unknown |
| In-Class Evidence | used phrase / remembered word / mentioned portal / asked follow-up / no sign |
| Decision | build / soften / keep manual / pause |

### Go / Change / Stop

Build the student dashboard card if:

- 2 of 3 students say the portal is not always clear and the suggestion would help, or
- 2 of 3 students do one suggested action before the next class, or
- Auris explicitly wants to ship the low-risk card despite incomplete pilot data.

Soften or keep manual if:

- 2 students call it homework.
- Students like the direct WhatsApp reminder more than an in-app card.
- Students act only when Auris personally sends it.

Pause if:

- No one acts.
- Auris cannot refer to the action naturally in the next class.
- The pilot creates admin friction.

## Product Boundary

Safe now:

- `Your vocabulary, materials and practice stay organised between classes.`
- `I can send you one small next step so practice does not disappear after class.`

Safe after a successful pilot:

- `Students get a clear next step between classes when it helps.`
- `The portal supports the same practice loop we use in class.`

Safe after card implementation and behavior evidence:

- `The portal can show your next useful step before class.`

Not safe yet:

- `The portal automatically tracks and guides every part of your progress.`
- `Students always practise more because of the portal.`
- `AI-style feedback replaces direct correction.`

## Hypotheses Tested

### H006: The student platform's next improvement should be clarity of next action.

Status: strengthened, but the action gate is manual proof first.

Evidence:

- Local dashboard has many useful surfaces but no single first-step selector.
- SRS/modular usage exists in the Cycle 34 aggregate baseline.
- External learning products repeatedly use paths, study plans and recommendations.

What weakens a default implementation:

- No current-student replies yet.
- Forced-path and generic-homework complaints are real.

Next test:

- Run the concierge pilot with 3-5 students and use the go/change/stop rules above.

### H016: The Next 15 card must preserve autonomy, not force a locked path.

Status: strengthened.

Evidence:

- Duolingo/Busuu/Quizlet show the value of clear study guidance.
- Duolingo/Preply community evidence warns that adults dislike forced or generic suggestions.
- Auris's brand is personal and adult/professional, so the copy should feel like a helpful nudge.

Next test:

- Keep the wording optional: `Choose just one useful step`, `You can still choose something else`.

### H017: SRS is the current measurable retention spine.

Status: strengthened but kept modest.

Evidence:

- Cycle 34 baseline still shows SRS as the highest-volume between-class behavior.
- Live API checks confirm SRS stats are protected and available through authenticated flows.
- Feedback views, Talk reflections and Next 15 events are still not measurable.

Next test:

- Use SRS sessions/cards reviewed as one before/after signal, but do not treat it as causal proof without student replies or card events.

### H018: The existing homework log is enough for the first manual pilot.

Status: strengthened.

Evidence:

- Model, API and TeacherOverview workflow still exist.
- The pilot needs message storage, not a new student-facing table.

Next test:

- Use the homework log only as a convenience record; anonymous outcomes live in `next-15-pilot-tracker.md`.

Favored idea tested:

`The card is technically ready, so build it now.`

Result:

Refined/weakened. Technical readiness is no longer the main blocker. Student acceptance and teacher-use proof are the missing evidence.

Cheaper alternative that could beat it:

Auris sends one personal WhatsApp next-step after class and uses the portal/homework log as the record. If that works, the product can mirror the human voice later.

## Strategic Synthesis

Strongest next move:

Run the concierge Next 15 proof sprint with 3-5 students. Keep it personal, optional and directly connected to the next class.

What Auris should not do yet:

- Do not build a teacher analytics panel.
- Do not add a `student_next_action_events` table before the card exists.
- Do not build Talk Reflection ahead of Next 15 unless Auris chooses speaking-practice proof as the next product focus.
- Do not market the portal as an automated progress coach.
- Do not make the message sound like school homework or a productivity app.

Evidence that would change the recommendation:

- Auris says he wants to ship the dashboard card now.
- 2-3 pilot students say the portal is already clear and prefer direct WhatsApp reminders.
- Students act on Talk prompts but not SRS/notes/feedback, making Talk Reflection the stronger next product loop.
- The next 14-day aggregate shows SRS/modular activity is too noisy to interpret and student replies become the only useful success layer.

Risk of acting too early:

The card could become another portal feature students glance past, or it could make premium adult learners feel assigned rather than guided.

Risk of waiting:

The portal remains impressive but under-explained; students may keep seeing it as a library rather than Auris's between-class coaching system.

## Next-Cycle Packet AU

Packet AU: Concierge Next 15 Proof Sprint.

If Auris has run any part of the pilot:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-proof-pilot-cycle46.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/retention-baseline-and-manual-pilot.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
2. Record anonymous rows only.
3. Update H006/H016/H017/H018.
4. Decide: build, soften, keep manual or pause.

If no pilot data exists and Auris asks for implementation:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/next-action-implementation-readiness.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/portal-retention-proof-refresh.md`
   - `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
   - `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx`
   - `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts`
2. Patch only a frontend advisory card above the flashcard hero.
3. No backend event table in V0.
4. Run build and authenticated browser QA if credentials/session are available.

If no pilot data and no implementation request:

1. Do not write another Next 15 spec.
2. Rotate to one of:
   - owner Review Truth / GBP Day 0
   - first lead-source proof row
   - Talk Reflection only if speaking-practice proof is the chosen theme
   - price proof implementation if approved

Exact external searches to reuse only if needed:

- `Duolingo new home screen clear path learners unsure`
- `Quizlet study path suggestions smartest sequence`
- `Busuu Study Plan reminders progress`
- `independent language tutor platform homework progress SRS`
- `Preply AI generic homework tutor complaints`

