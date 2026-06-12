# Talk the Talk Lead Magnet Strategy

Created: 2026-05-21 Cycle 04
Last updated: 2026-05-25 Cycle 61

## Executive Read

Talk the Talk should be treated first as a trust, practice, and retention asset, not as the main SEO growth bet.

The tool is valuable because it lets a potential student feel Auris's method before contacting him: speak out loud, face the blank-mind moment, repeat, then see that personal feedback would help. The weaker idea is expecting `/talkthetalk` to bring meaningful organic search traffic by itself. Search Console currently shows no Talk the Talk queries, the URL is crawled but not indexed, and the global "free speaking practice" market is much broader than Auris's premium local/private teaching market.

## Cycle 61 Current Supersession

Current public mode: direct-contact, one-minute first rep, no Calendly, no free-first-class funnel.

This supersedes older references below to "book a trial", Calendly links, `talk_trial_click`, and a default 90-second first round. Those references are historical evidence of the previous funnel, not the current recommendation.

Current public source evidence:

| Surface | Current State | Strategic Meaning |
| --- | --- | --- |
| Public Talk default | `src/components/TalkTheTalk.jsx` initializes `duration` and `timeRemaining` to `DEFAULT_DURATION_SECONDS = 60`; custom inputs open at `01:00`. | The first rep now feels lower-pressure and better matched to a hesitant adult/professional. |
| Public Talk CTA | Completion card links to WhatsApp and tracks `talk_contact_click`; live chunk contains `Message Auris` and no Calendly/free-first-class strings. | Talk is now a personal feedback bridge, not a booking widget. |
| Public Talk options | 60, 90, 120, 180 and 300 seconds remain available. | 90 seconds remains useful for confident users, but should not be the default first ask. |
| Student portal Talk | `teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx` still defaults to 90 seconds / `01:30`. | Leave this as a separate pedagogical decision unless Auris explicitly wants current students to mirror the public one-minute start. |
| Live route | `/talkthetalk` returns HTTP 200 with the correct canonical; live bundle is `TalkTheTalk-b73dc496.js`. | Public route is healthy enough for GBP/LinkedIn/referral use, but still not a clean SEO asset. |
| Sitemap | Live sitemap lists `/talkthetalk` with `lastmod` `2026-05-21` even though public Talk changed on 2026-05-25. | Minor future hygiene item; not urgent enough to reopen SEO work by itself. |
| Copy mismatch | How-it-works still says recording/listenback are optional, but no actual recording flow is implemented. | Fix before using Talk as a bigger public campaign, because it promises a feature the tool does not provide. |

Current measurement loop:

1. Visitor reaches `/talkthetalk` from GBP, LinkedIn, referral, a post, or direct site browsing.
2. Visitor chooses a prompt and does a one-minute first rep.
3. Events can show `talk_started`, `talk_ready_clicked`, `talk_completed` and `talk_contact_click`.
4. The only real lead proof is a private WhatsApp/email reply plus a redacted owner row.
5. Do not use `trial_booked` or `generate_lead` for raw Talk clicks in the current mode.

Keep Talk if:

- Several users start/complete prompts without support burden.
- At least one high-fit reply mentions the Talk prompt, getting stuck while speaking, confidence, meetings/interviews, or wanting human feedback.
- Auris can answer the follow-up personally without it feeling like a campaign funnel.

Do not scale Talk yet if:

- `talk_contact_click` appears but no real replies arrive.
- Visitors ask for a free trial/free class because old external/profile copy primed that expectation.
- The recording/listenback mismatch creates confusion.
- AI speaking apps continue to own the generic "free speaking practice" category without evidence that Auris's personal feedback bridge is being noticed.

## Evidence Snapshot

### Local Product Evidence

- Public site tool: `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
  - Strong core loop: choose theme, difficulty, timer; get random prompt; speak; complete; repeat or book a trial.
  - Tracks events: `talk_started`, `talk_ready_clicked`, `talk_topic_skipped`, `talk_completed`, `talk_same_topic_repeated`, `talk_trial_click`, setting changes, open/close.
  - Completion CTA already asks `Want personal feedback?` and links to Calendly with Talk the Talk UTM parameters.
  - The "Listen to your recording" instruction is present in the how-it-works list, but the inspected component does not appear to implement recording/listenback. That mismatch should be fixed before promoting heavily.

- Public route structure: `/Users/aurisp/repos/teacher-website/src/App.jsx`
  - `/talkthetalk` opens the tool as a fixed overlay while the normal homepage still renders underneath.
  - SEO title/description/canonical are updated for `/talkthetalk`.
  - This is usable for humans but less clean as a standalone SEO document.

- Static fallback: `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
  - Good title, description, canonical, Open Graph, and `WebApplication` schema.
  - HTML fallback says the interactive tool will load there.

- Topic bank: `/Users/aurisp/repos/teacher-website/src/data/speakingTopics.js`
  - Strong breadth: everyday life, deep questions, debate, explain, compare, story, role play, business-style themes like interviews, presentations, and sales pitch.
  - This gives enough raw material for weekly social/GBP prompts without inventing content from scratch.

- Student portal tool: `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
  - Same practice loop exists privately for students.
  - No lead CTA, which is correct for the portal.
  - It currently ends at "Practice Again" / "Change Settings"; it does not log completion, collect self-rating, or connect the practice to teacher feedback.

- Portal routing: `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/App.tsx`
  - Protected route exists at `/student/talk-the-talk`.

- Sitemap/robots: `/Users/aurisp/repos/teacher-website/public/sitemap.xml`, `/Users/aurisp/repos/teacher-website/public/robots.txt`
  - `/talkthetalk`, `/clases-ingles-castelldefels`, and `/ingles-empresas-castelldefels` are in the sitemap.
  - Robots allow crawling and reference the sitemap.

- Analytics helper: `/Users/aurisp/repos/teacher-website/src/utils/analytics.js`
  - Events are sent through `window.gtag` if available.

### Search Console / Live Data

Run date: 2026-05-21. Search Console final data through 2026-05-19.

- Last 30 days: only the homepage has performance data: 1 click, 187 impressions, 0.53% CTR, average position 9.99.
- Last 180 days: only the homepage has performance data: 18 clicks, 659 impressions, 2.73% CTR, average position 8.13.
- `/talkthetalk`: no query rows in the last 30 or 180 days.
- `/talkthetalk` URL inspection: `Crawled - currently not indexed`, last crawled 2026-03-01, robots allowed, fetch successful, included in sitemap.
- `/clases-ingles-castelldefels`: `Crawled - currently not indexed`, last crawled 2026-05-21, robots allowed, fetch successful, included in sitemap.
- `/ingles-empresas-castelldefels`: `Discovered - currently not indexed`, included in sitemap, not crawled yet.
- Sitemap API currently reports 4 submitted URLs and 0 indexed. Treat with caution because the homepage clearly has search performance; this may be a timing/reporting artifact after recent sitemap submission.
- Live `/talkthetalk` returns HTTP 200 with `index,follow`, correct canonical, metadata, schema, and built assets.
- Tag Manager read-only check: container `englishwithauris.com` / public ID `G-VDW7H0VQBC` exists, default workspace has 0 tags and 0 triggers. Current measurement appears to rely on direct `gtag.js`, not a populated GTM setup.

### External Evidence

- Google Search Central JavaScript SEO docs say Google processes JavaScript in phases and queues pages for rendering when needed. This supports making important page identity and content available clearly, not relying only on a hydrated overlay. Source: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google Search Central helpful-content guidance says useful pages should be created for people first and demonstrate clear value. This weakens a thin "free tool page only for indexing" plan. Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central crawling/indexing docs emphasize that being crawlable does not guarantee indexing. This matches the current `Crawled - currently not indexed` state. Source: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
- British Council LearnEnglish has structured speaking practice by level with activities and guidance, showing that established free resources frame speaking practice as levelled support, not only random prompts. Source: https://learnenglish.britishcouncil.org/skills/speaking
- Cambridge English provides learner activities with skill, level, and time filters, reinforcing that a practice asset becomes more useful when learners can choose the right difficulty and context quickly. Source: https://www.cambridgeenglish.org/learning-english/activities-for-learners/
- ELSA positions itself around AI speech feedback and pronunciation improvement. This is not Auris's lane unless adding feedback; Auris's advantage is human correction and Spanish-speaker-specific guidance. Source: https://elsaspeak.com/
- SmallTalk2Me positions around AI speaking practice, IELTS/job interview/business English, and automated feedback. This suggests the generic global "speaking practice tool" category is crowded; Auris should use Talk the Talk as a bridge to personal feedback rather than compete as a standalone app. Source: https://smalltalk2.me/

## Strategic Interpretation

### What Talk the Talk Should Do

1. Show the method before the student books.
2. Give social/GBP posts a practical CTA beyond "book a class."
3. Create an easy practice habit for current students.
4. Provide data or self-reflection that Auris can use in class.
5. Make premium pricing feel more concrete: students are buying a guided system, not only an hour.

### What It Should Not Try To Do First

- Compete with global AI speaking apps on automated scoring.
- Rank broadly for "free English speaking practice" before the local/private offer is stronger.
- Gate the tool behind email before proving people want to use it.
- Add recording/audio storage before there is a clear student benefit and privacy workflow.

## Acquisition Loop

Low-friction public flow:

1. Social/GBP/LinkedIn post gives one speaking prompt.
2. CTA: `Try a 90-second version here`.
3. User lands on `/talkthetalk` with source UTM.
4. First screen lets them choose `Everyday`, `Work`, or `Interview` quickly.
5. Completion screen says: `Want feedback on how you answered?`
6. CTA: `Book a free trial with Auris`.

Measurement:

- `talk_opened`
- `talk_started`
- `talk_completed`
- `talk_trial_click`
- `trial_booked`
- Source/medium/campaign UTM from the referring content.

Success threshold for keeping this as a lead magnet:

- At least 20% of tool users start a prompt.
- At least 30% of starters complete or manually finish.
- At least 3-5% of completers click the trial CTA.
- At least one qualified booking can be traced to Talk the Talk after 4 weeks of promotion.

## Student Retention Loop

Portal flow:

1. Student opens dashboard.
2. "Your next 15 minutes" chooses a speaking prompt when no higher-priority assignment/flashcards exist.
3. Student completes a 90- or 120-second prompt.
4. Completion screen asks for a fast self-rating:
   - `I could answer without stopping`
   - `I translated too much`
   - `I got stuck`
   - `I want feedback on this`
5. Portal logs theme, difficulty, duration, self-rating, timestamp.
6. Teacher overview shows a small "Speaking practice since last class" note.
7. Auris uses one student-selected weak prompt in the next class.

Success threshold:

- Students complete at least one prompt between classes without being chased.
- Auris can use the self-rating in class prep in under 30 seconds.
- Student feels the portal helps them speak, not just do homework.

## Implementation-Ready Improvements

### Public Site P0

- Fix the how-it-works mismatch:
  - Either add recording/listenback properly, or remove `Listen to your recording (optional)` from the public instructions.
  - Confidence: high.

- Make `/talkthetalk` a cleaner standalone document:
  - Avoid rendering the full homepage underneath the overlay on this route.
  - Keep the tool as the first screen, not a marketing landing page.
  - Keep the existing static fallback and schema.
  - Confidence: medium-high.

- Add one short Spanish-speaker line without changing the tone too much:
  - Example: `If you usually understand English but freeze when it is your turn to speak, start with a short prompt.`
  - Confidence: medium.

- Track `talk_trial_click` as a conversion-style event in GA4 once GA4 access/conversion setup is available.
  - Confidence: medium.

### Public Site P1

- Add quick-start chips:
  - `Work`
  - `Travel`
  - `Interview`
  - `Everyday`
  - `Deep questions`
  - Confidence: medium.

- Add shareable prompt URLs later:
  - `/talkthetalk?theme=interview&difficulty=medium&time=90`
  - Useful for GBP/social "prompt of the week."
  - Confidence: medium.

### Student Portal P0

- Add completion self-rating with no audio storage.
- Store a minimal practice log:
  - student_id
  - theme
  - difficulty
  - duration_seconds
  - completed_seconds
  - self_rating
  - wants_feedback boolean
  - created_at
- Show "You practised speaking X times this week" on the dashboard.
- Show teacher a compact class-prep line.

### Student Portal P1

- Let Auris assign a Talk the Talk prompt after class.
- Allow prompts based on class vocabulary or custom teacher prompt.
- Add a "bring this back next class" flag when student asks for feedback.

## Content Uses

### Weekly GBP Post Template

`Quick English speaking practice for this week: set a timer for 90 seconds and answer this question out loud: [prompt]. If you get stuck, notice where it happens. That is usually the part we can fix in class with better phrases, pronunciation, or structure.`

CTA: `Try Talk the Talk`

### Instagram/TikTok/Reels Format

Hook:

`If you understand English but freeze when you have to speak, try this for 90 seconds.`

Prompt:

`Describe a meeting where you had to explain a problem clearly.`

Teacher line:

`Do not aim for perfect. Aim for finishing the answer. Then we improve the phrases.`

CTA:

`I built a free prompt timer called Talk the Talk. Try one prompt and see where you get stuck.`

### LinkedIn Format

Hook:

`A lot of professionals do not need more grammar first. They need more safe repetitions of real work situations.`

Body:

`One small exercise: set 90 seconds and explain a recent work problem in English. If you stop, translate in your head, or avoid details, that is useful information. It shows what to practise next.`

CTA:

`I use this kind of prompt work in private and small-group classes.`

## Open Questions

- Do actual visitors use Talk the Talk if it is promoted from social/GBP?
- Does completion predict trial booking better than ordinary page visits?
- Should the tool stay fully free or eventually have an optional email follow-up?
- Which prompt category produces the best qualified leads: everyday confidence, interview, meetings, presentations, or role play?
- Are current students willing to self-rate after speaking practice, or does that feel like homework?

## Cycle 05 Measurement Update

Added: 2026-05-21 Cycle 05

The Talk funnel is measurable through `talk_trial_click`, but not fully through booked trial yet.

Current reliable public funnel:

1. `/talkthetalk` page view.
2. `talk_started`.
3. `talk_ready_clicked`.
4. `talk_completed`.
5. `talk_trial_click`.

Current weak point:

- The completion CTA opens Calendly in a new tab.
- The site's `trial_booked` event depends on receiving `calendly.event_scheduled` from an embedded Calendly widget in the parent page.
- Therefore a Talk completion can become a real booking without the site recording `trial_booked`.

For the first 4-week Talk test, judge the tool by:

- `talk_started`
- `talk_ready_clicked`
- `talk_completed`
- `talk_trial_click`
- manual source notes from actual inquiries/bookings

Do not judge it by `trial_booked` until booking attribution is fixed with an in-page Calendly flow, a redirect/thank-you flow, or a Calendly webhook/API integration.

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

## Cycle 39 AI Speaking Tool Refinement

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/ai-speaking-human-feedback-cycle39.md`

Cycle 39 strengthens the original decision: Talk the Talk should not compete with ELSA, Praktika, Speak, SmallTalk2Me or ChatGPT Voice as a full AI speaking tutor. Those tools have made low-shame daily speaking reps normal. Auris's stronger role is the human layer after practice.

Updated Talk role:

1. Public Talk helps a prospect feel the blank-mind moment in a safe way.
2. Portal Talk helps a student keep speaking between classes.
3. The missing value is not AI scoring; it is reflection and teacher follow-up.
4. The bridge message is: `Practise anywhere. Bring the stuck point to class.`

Priority changes:

- Keep the public completion CTA around personal feedback.
- Fix the public "record/listenback" instruction mismatch before promoting Talk heavily.
- Do not add audio recording/storage before students prove they will use reflection.
- Do not add AI pronunciation scoring before Talk has a no-audio completion log.
- When Talk appears in `Your next 15 minutes`, end with a quick self-rating:
  - `I answered comfortably`
  - `I translated too much`
  - `I got stuck`
  - `I missed a phrase`
  - `I want to practise this in class`

Public content line:

```text
AI can help you speak more often. A teacher helps you know what to fix.
```

Portal confirmation line:

```text
Saved. This gives us something useful to bring back into class.
```

Teacher overview target:

```text
Speaking since last class: 2 prompts. Latest block: I translated too much. Bring back in class: yes.
```

New stop rule:

- If Talk users complete prompts but do not want reflection or feedback, keep Talk as a free CTA and do not build a larger portal speaking loop.
- If students like reflection but want richer feedback, then consider audio/transcript/AI later with explicit privacy and usefulness tests.

## Cycle 40 Portal Reflection Implementation Boundary

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/talk-reflection-v0-technical-spec-cycle40.md`

The portal version of Talk should now be treated as a two-step loop:

1. Speak for the timer.
2. Save one optional reflection about what happened.

Completion-card copy:

```text
What happened while you were speaking?
```

Use choices:

- `I answered comfortably`
- `I translated too much`
- `I got stuck`
- `I missed a phrase`
- `I felt nervous`
- `Bring this back in class`

Keep visible:

```text
Just practise today
```

Why:

- It preserves Talk as low-pressure speaking practice.
- It gives Auris a next-class signal without creating an AI/audio product.
- It avoids claiming automatic feedback before a human follow-up happens.

Do not add to public copy yet:

- `Your teacher sees your speaking progress`, unless the portal reflection and teacher prep line exist.
- `Get feedback on your speaking`, unless a real follow-up loop is operating.
- `AI score`, `pronunciation score`, `recording`, or `transcript`.
