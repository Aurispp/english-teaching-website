# AI Speaking Tools And Human Feedback Strategy

Created: 2026-05-23 Cycle 39

Purpose: decide whether AI speaking tools threaten Auris's private teaching lane, and what Talk the Talk / the portal should do next.

## Primary Question

Are AI speaking tools now a substitute threat for Auris, or do they create a stronger opportunity for human diagnostic feedback?

Short answer: AI speaking apps are commoditizing generic speaking reps, but they are also training learners to expect frequent low-shame practice. Auris should not compete by building AI scoring now. The stronger move is to frame Talk the Talk and the portal as the bridge from practice reps to human diagnosis: `Use AI or Talk to get the words out. Use Auris to understand what breaks, fix the Spanish-speaker pattern, and bring it back next class.`

## Source Discovery

Before browsing, the likely source types were:

| Source Type | Why It Might Reveal Strategy | Chosen? | Quality |
| --- | --- | --- | --- |
| Auris Talk the Talk website component | Shows the current public product and CTA. | Yes | High |
| Auris portal Talk implementation | Shows whether practice can feed teacher feedback. | Yes | High |
| Portal dashboard / teacher overview code | Shows implementation path and existing feedback surfaces. | Yes | High |
| Live `/talkthetalk` metadata and review endpoint | Data/API layer for current public proof and route readiness. | Yes | High |
| AI speaking app official pages | Reveals what the market now promises. | Yes | High |
| App-store / Trustpilot / product reviews | Reveals user delight and distrust. | Yes | High |
| Reddit / learner communities | Reveals pain language around AI, humans, feedback and anxiety. | Yes | Medium |
| Hybrid tutor-platform pages | Tests whether bigger platforms combine human + AI rather than replace tutors. | Yes | High |
| Academic / industry AI-in-language research | Tests whether AI feedback has known learning limits. | Yes | Medium-high |
| Local competitors | Less relevant to this question; already covered in prior cycles. | No | Medium |
| Tutor marketplaces | Useful for price, less for AI product strategy. | No | Medium |
| YouTube/TikTok comments | Potentially useful, but slower/noisier than app reviews for this cycle. | No | Medium-low |

Chosen source families: local product/code, live route/API, official AI app pages, user reviews/community threads, hybrid tutor-platform sources and recent AI-speaking research.

## Local Evidence

| Artifact | What It Shows | Strategic Meaning |
| --- | --- | --- |
| `docs/strategy/talk-the-talk-lead-magnet.md` | Talk is already defined as trust/practice/retention, not SEO-first. | Keep this; do not make Talk a generic app competitor. |
| `docs/strategy/platform-backlog.md` | The P1 Speaking Confidence Loop already proposes no-audio self-rating and teacher note. | Cycle 39 strengthens that spec. |
| `docs/strategy/next-15-minutes-platform-spec.md` | Next 15 comes before AI/audio; Talk reflection is later and must feed teacher value. | Keep the product order. |
| `docs/strategy/portal-retention-proof-refresh.md` | SRS is measurable; Talk/feedback are under-instrumented. | Do not claim Talk retention yet. |
| `docs/strategy/measurement-plan.md` | Public Talk can measure `talk_trial_click`, but not booked trial from new-tab Calendly. | Use Talk as lead-intent, not proven booking attribution. |
| `docs/strategy/outside-in-opportunity-radar.md` | Existing radar already names `AI is practice, not diagnosis`. | Cycle 39 provides stronger current evidence. |
| `docs/strategy/content-strategy.md` | Current content pillars include "speaking more is not enough if nobody corrects you." | Add an AI-era version of that message. |
| `docs/strategy/pricing-positioning.md` | Premium value is direct diagnosis, Spanish-speaker pattern correction and portal follow-up. | AI makes generic reps cheaper; premium must be more diagnostic. |
| `docs/strategy/review-proof-library.md` | Reviews support confidence, practice, personal adaptation and follow-up. | Use reviews to prove human value after practice. |
| `src/components/TalkTheTalk.jsx` | Public Talk tracks start/ready/complete/trial click and ends with personal feedback CTA. | The bridge exists, but should be sharpened. |
| `src/components/TalkTheTalk.jsx` how-it-works copy | Mentions record/listenback, but inspected component does not implement recording/listenback. | Fix copy before promotion or implementation. |
| `talkthetalk/index.html` | Live/static metadata is good and route returns 200. | Route is safe as CTA destination, not sufficient as organic proof. |
| `src/App.jsx` | SPA page_view is manual while HTML `gtag config` sends default pageview. | Measurement still has duplicate-risk from Cycle 05. |
| `teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx` | Portal Talk ends with practice again/change settings; no logging/reflection. | Missing layer is reflection, not AI. |
| `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` | Talk is available from desktop/mobile nav; dashboard hero still prioritizes flashcards. | Talk is visible but not recommended/contextual. |
| `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` feedback block | Reviewed feedback is already surfaced. | Human feedback is a real product surface. |
| `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` | Teacher attention items already prioritize reviews, SRS and class prep. | A later Talk reflection line can fit this model. |
| `teacher-assistant/backend/app/core/config.py` | `auto_import_speech_practice` exists, but no Talk reflection table/route was found. | Speech-practice imports exist separately; portal Talk reflection needs a small new layer. |

## Data/API Evidence

- Live `/talkthetalk` returned HTTP 200 from Netlify with canonical `https://englishwithauris.com/talkthetalk`, `index,follow` metadata, WebApplication schema and direct `gtag` config.
- Live `/talkthetalk` HTML still sends the default GA4 config pageview, supporting the existing measurement warning about possible duplicate pageviews.
- Live English Google reviews endpoint returned `rating: 5` with five visible texts. The current payload did not expose `totalReviews` in this call, but visible reviews still included dynamic/fun/practical teaching and family/former-student trust patterns.
- Search Console was not retried because Cycle 36 established the current local token lacks the needed Search Console scope; this question did not require fresh GSC.

## External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| ELSA official site, https://elsaspeak.com/en | ELSA claims 90M+ learners, AI role-plays, instant feedback, personalized paths and speech analyzer. | AI speaking practice is mainstream. | Auris competing on AI scoring. |
| ELSA Trustpilot, https://www.trustpilot.com/review/elsaspeak.com | Recent reviews include both strong pronunciation benefits and complaints about subscriptions, loss of structured correction and generic AI chat. | Users value correction quality and trust. | "AI feedback is automatically better." |
| Praktika official site, https://praktika-ai.com/ | Praktika promises AI avatars, real-time feedback, free conversation and "no judgement." | Low-shame speaking reps are a market expectation. | Human-only anti-AI positioning. |
| Praktika Trustpilot, https://www.trustpilot.com/review/praktika.ai | 786 reviews, 3.8 TrustScore, company claims real-time feedback; reviews mix ease/speaking value with accent/subscription/support concerns. | AI apps solve practice friction but create trust gaps. | Building a generic app layer. |
| Speak official site, https://www.speak.com/?lang=en | Speak markets speaking-first curriculum, 15M+ downloads and anxiety-free AI tutoring. | "Speak without anxiety" is a proven app promise. | Talking about confidence as unique without mechanism. |
| SmallTalk2Me official site, https://smalltalk2.me/ | Claims 2.5M+ learners, instant feedback, CEFR scoring, IELTS, job interview and business English practice. | Professional/exam speaking practice is already appified. | A generic "free speaking practice" SEO play. |
| Speakerly official site, https://www.speakerly.ai/ | Promises real-time pronunciation/accent feedback, drills, business English, meetings, presentations and interviews. | Work-English practice is part of AI-app competition. | Business-English labels without human proof. |
| Preply official AI post, https://preply.com/en/blog/what-s-next-for-personalized-learning-the-power-of-human-tutoring-assisted-by-ai/ | Preply frames AI as lesson insights, daily exercises and scenario practice that enhance the tutor-learner relationship. | Human + between-lesson practice is the right direction. | Auris needing to build full AI first. |
| Axios/Preply sponsored post, https://www.axios.com/sponsored/preply-is-building-the-worlds-best-ai-for-language-learning-powered-by-real-tutors | Preply explicitly frames AI as supporting the tutor bond, speaking confidence, real-life context and progress monitoring. | Human-led, AI-enabled positioning is market-normal. | AI as pure replacement narrative. |
| Reddit IELTS AI-speaking thread, https://www.reddit.com/r/IELTS/comments/1ptzmzg/has_anyone_used_ai_for_speaking_practice/ | Learners worry AI scoring conflicts; expert comment says AI helps spontaneous speaking but human rating is needed for accuracy/nuance. | Use AI/Talk for reps, human for judgment. | Trusting AI scores in high-stakes contexts. |
| Reddit AI vs human tutor thread, https://www.reddit.com/r/artificial/comments/1s4by8l/do_you_think_ai_can_replace_human_tutors_in/ | User reports AI excellent for volume and frictionless practice, human tutor better for cultural context, naturalness and emotional adjustment. | Human diagnosis has a premium lane. | Human tutor as the only practice source. |
| Reddit languagehub conversation-app thread, https://www.reddit.com/r/languagehub/comments/1szqr88/do_ai_conversation_features_in_language_apps_actually_work/ | Users distinguish unstructured ChatGPT from app feedback loops; they value weak-zone memory and progress reports. | Feedback loops matter more than novelty. | A stateless Talk prompt as enough. |
| Reddit speaking-app review thread, https://www.reddit.com/r/SpanishLearning/comments/1rtbi85/i_tried_every_speaking_app_so_you_dont_have_to/ | Complaints include lenient correction, weird prompts, delays and "agrees with everything." | Human judgment/natural prompts can differentiate. | Overtrusting automatic correction. |
| 2026 ELSA study, https://www.ijirss.com/index.php/ijirss/article/download/11309/2727/19146 | Finds AI pronunciation tools can help but identifies accent bias, inconsistent speech recognition, over-reliance risk and need for complementary human instruction. | Human instruction + self-regulation should frame AI use. | Automated feedback as replacement. |
| 2026 AI Twin paper, https://arxiv.org/abs/2601.11103 | Explores emotionally supportive AI speaking practice and implicit rephrasing for adult ESL learners. | AI will improve the emotional/practice layer. | Complacency about AI competition. |

## Interpretation

The threat is real, but not in the obvious way. AI apps are not mainly stealing Auris's best premium student tomorrow; they are making generic practice cheap and abundant. That means Auris should stop selling "more speaking practice" as if practice volume alone were premium. The premium is:

- choosing the right correction,
- noticing Spanish-speaker transfer,
- making the phrase natural for the student's real context,
- helping confidence survive a real human conversation,
- turning a mistake from class/practice into the next useful step.

AI can make a learner speak more. Auris should own what happens after the learner notices: "I got stuck here."

## Strategic Decision

Do not build AI pronunciation scoring, voice avatars or automated speech evaluation now.

Do build the smallest human-feedback bridge:

1. Public Talk: keep the completion CTA, but sharpen the message around personal feedback and fix the record/listenback copy mismatch before heavy promotion.
2. Portal Talk: add no-audio reflection before any recording/audio/AI:
   - `I answered comfortably`
   - `I translated too much`
   - `I got stuck`
   - `I missed the phrase`
   - `I want to practise this in class`
3. Teacher view later: show one compact class-prep line:
   - `Speaking practice since last class: 2 prompts. Latest: Work / Medium / "I translated too much". Wants class practice: yes.`
4. Content: use AI as a friendly comparison, not an enemy.

## Direct Alternatives Compared

| Alternative | Upside | Problem | Verdict |
| --- | --- | --- | --- |
| Build AI scoring now | Feels modern; competes with app category. | Crowded, expensive, trust-sensitive, privacy-heavy and not needed before reflection exists. | No. |
| Leave Talk as a simple free prompt tool | Low effort; still useful. | Does not create teacher insight or distinct premium value. | Keep only as fallback/CTA. |
| Add no-audio reflection + teacher follow-up | Small, personal, aligned with reviews and platform. | Needs one new data layer and careful UX copy. | Best next product step after Next 15. |
| Recommend external AI apps as homework | Gives students more reps without building. | Sends value away unless Auris frames what to bring back. | Use lightly: "practise anywhere, bring the stuck point to class." |

## Implementation-Ready Talk Reflection V0

### Product Scope

No audio storage. No AI scoring. No transcript. No automatic correction.

Collect:

- `student_id`
- `theme`
- `difficulty`
- `prompt`
- `duration_seconds`
- `completed_seconds`
- `reflection_choice`
- `optional_phrase_or_note`
- `wants_class_practice`
- `created_at`

### Student Completion Copy

```text
Nice. What happened while you were speaking?
```

Choices:

- `I answered comfortably`
- `I translated too much`
- `I got stuck`
- `I missed a phrase`
- `I want to practise this in class`

Optional field:

```text
Write the word, phrase or moment that blocked you.
```

Confirmation:

```text
Saved. This gives us something useful to bring back into class.
```

### Teacher Prep Copy

```text
Speaking since last class: 2 prompts
Latest block: I translated too much
Student note: "how to explain a delay"
Bring back in class: yes
```

### Success Metrics

Treat as promising if:

- 25%+ of active portal students complete one Talk prompt after it appears in Next 15 or a homework message.
- 50%+ of completions include a reflection choice.
- Auris can name one useful next-class follow-up from the reflection in under 30 seconds.
- At least one student says the reflection helped them know what to ask/practise.

Stop or soften if:

- Students call it homework/admin.
- Reflection completion is below 15% after visible usage.
- Auris does not use the teacher note in class.
- Students want free speaking only and do not value follow-up.

## Content And Positioning Copy Bank

Use this message family:

```text
AI can help you speak more often. A teacher helps you know what to fix.
```

```text
Use any app you like for extra practice. In class, we work on the moment where your English breaks.
```

```text
Speaking more helps, but only if you notice the pattern: the phrase you avoid, the structure from Spanish, the sound that makes you less clear, or the moment where pressure makes your English smaller.
```

```text
Talk the Talk is not a test. It is a way to find the useful question: where did you get stuck?
```

Spanish private/referral version:

```text
Las apps de IA pueden ayudarte a practicar mas. En clase vemos exactamente donde te bloqueas y como decirlo de una forma mas natural.
```

LinkedIn post seed:

```text
AI speaking apps are useful because they remove friction: you can practise at any time, make mistakes privately and repeat as much as you want.

But speaking more is not always the same as improving.

The useful question is: where did your English get smaller?

Was it translation from Spanish, missing phrases, pronunciation, speed, nerves, or not knowing how formal to sound?

That is where a teacher helps. In my classes, we use short speaking prompts to find the block, then we correct the pattern and bring it back in a real conversation.
```

GBP post seed:

```text
Short speaking practice is useful, whether you use an app, a prompt timer or your own notes.

The important part is what happens next: noticing where you stopped, what you translated from Spanish, and what phrase would sound more natural.

That is the kind of practical correction we work on in class.
```

## Hypotheses Tested

### H012: AI speaking tools increase the value of human diagnostic feedback.

Strengthened, confidence moves from medium to medium-high.

Evidence:

- Official app pages show AI speaking practice is mainstream, not niche.
- Trustpilot/community signals show scoring, subscriptions, naturalness and accuracy remain trust gaps.
- Preply's human + AI direction validates live teaching plus between-lesson practice.
- 2026 ELSA research explicitly supports blended human instruction and warns about over-reliance.

Refinement:

AI is not just a threat; it raises the baseline expectation for practice. Auris should sell diagnosis, context and follow-up, not practice volume alone.

Next test:

Ask 3 current students: `Do you use ChatGPT, ELSA, Speak, Praktika or another app for English speaking? If yes, what still feels missing?`

### H011: Talk the Talk's strongest role is the feedback bridge.

Strengthened, confidence moves from medium-high to high for strategic role, medium for behaviour until tested.

Evidence:

- Public Talk already has personal-feedback CTA and measurable completion/trial-click events.
- Portal Talk has practice loop but no reflection or teacher signal.
- External app/user evidence says practice without a feedback loop becomes generic.

Refinement:

Talk is useful as a free/public prompt tool, but its durable advantage is `practice -> reflection -> Auris follows up`, not the prompt generator.

Next test:

Add or manually pilot one no-audio reflection after a Talk prompt. Judge whether the reflection produces one next-class correction.

### Favored Idea Weakened: Build AI Now

We want "modern AI speaking feedback" to be true because it sounds impressive. This cycle weakens it as a first build.

Evidence:

- The category is crowded by ELSA, Praktika, Speak, SmallTalk2Me, Speakerly and general ChatGPT voice use.
- Users complain about over-lenient correction, rigid paths, weird prompts, delays, subscription stress and trust.
- Auris's portal lacks the simpler reflection/event layer; jumping to AI would skip the actual teacher-value bridge.

Cheaper alternative:

Talk Reflection V0 plus one content post: `AI for reps, Auris for diagnosis`.

## Strongest Next Move

Keep the public acquisition recommendation unchanged: GBP/reviews remain the first public trust channel. But for product/content, the next AI-era move is:

1. Do not present Auris as anti-AI.
2. Do not build AI scoring now.
3. Position Auris as the teacher who turns speaking practice into useful correction.
4. Put Talk Reflection V0 behind the Next 15 card or manual homework message.
5. Use content to invite students to bring app/Talk blocks into class.

## What Not To Do Yet

- Do not add audio recording/storage.
- Do not add AI pronunciation scoring.
- Do not claim Talk gives feedback when it does not.
- Do not market against AI with fear.
- Do not use "free English speaking app" as the brand north star.
- Do not make a broad AI language-learning blog page.
- Do not overpromise that Auris reviews every portal action before every class.

## Evidence That Would Change This

Strengthen AI-build direction if:

- 5+ current students independently ask for AI scoring or pronunciation feedback inside the portal.
- Talk completion/reflection usage becomes meaningful and students then ask for recordings/transcripts.
- A low-risk API/library can provide reliable speech feedback with clear privacy controls and minimal maintenance.

Weaken human-feedback bridge if:

- Current students already use AI apps and say human follow-up is not needed.
- Talk posts create starts but no completions/reflections/trial clicks.
- Reflection feels like homework/admin rather than useful self-awareness.

## Next-Cycle Packet

If owner/student evidence arrives:

- Ask or inspect anonymous answers to: `Which AI speaking tools are students actually using? What still feels missing?`
- Update H012 and `platform-backlog.md` with real student wording.

If implementation is requested:

- First patch public Talk copy mismatch if promoting public route.
- Then implement only no-audio portal reflection after Talk completion.
- Do not build audio/AI before reflection is used.

If no owner evidence arrives:

- Rotate to either:
  - a Talk Reflection technical spec (schema/API/UI only, no code change),
  - a 2-week content test around `AI for reps, Auris for diagnosis`,
  - or a student-platform Next 15 implementation path if Auris asks.

Files to inspect:

- `src/components/TalkTheTalk.jsx`
- `talkthetalk/index.html`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts`
- `/Users/aurisp/repos/teacher-assistant/backend/app/api/routes.py`
- `docs/strategy/platform-backlog.md`
- `docs/strategy/next-15-minutes-platform-spec.md`
- `docs/strategy/measurement-plan.md`

