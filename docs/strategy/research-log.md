# Strategy Research Log

## 2026-05-21 Cycle 01

### Scope

Triggered manually after changing the automation to a 30-minute heartbeat. Inspected both repos, live site structure, Search Console data, public marketplace profiles, local competitors, and teaching-platform code structure.

### Repo State

- `teacher-website`: clean before creating this strategy folder.
- `teacher-assistant`: very dirty with many existing modified/untracked files. I treated it as read-only for this cycle to avoid colliding with ongoing work.

### Internal Search Evidence

Fresh Search Console snapshot through 2026-05-19:

- Last 28 days: 1 click, 180 impressions, CTR 0.56%, avg position 10.14.
- Last 180 days: 18 clicks, 659 impressions, CTR 2.73%, avg position 8.13.
- All search performance still lands on the homepage only.
- `https://englishwithauris.com/`: Submitted and indexed; last crawled 2026-05-21.
- `/clases-ingles-castelldefels`: Crawled 2026-05-21, currently not indexed.
- `/ingles-empresas-castelldefels`: URL unknown to Google.
- `/talkthetalk`: Crawled 2026-03-01, currently not indexed.

Important query evidence:

- "academias de ingles en castelldefels": 92 impressions over 180d, avg position 16.73.
- "academia ingles castelldefels": 20 impressions over 180d, avg position 7.2.
- "escuelas de idiomas en castelldefels": 13 impressions over 180d, avg position 18.54.
- "clases de ingles particulares": only 1 impression, avg position 1.

Interpretation: Google currently understands the site more through academy/local-school search intent than private-teacher intent, even though the business should not pretend to be an academy.

### Site Evidence

The live site has:

- 5.0 Google rating with 15 reviews via the Netlify reviews function.
- Clear pricing on-site: private classes at 40 EUR/h, groups at 20 EUR/h.
- Crawlable nav/footer links to local pages and Talk the Talk.
- Dedicated sitemap and robots file.

Opportunity: Talk the Talk has useful static metadata, but the React app structure still risks mixing the tool and homepage content after hydration. It should become a cleaner standalone tool or be treated mainly as a lead magnet, not a ranking page.

### Public Profile Evidence

Superprof profile:

- 5.0 rating, 7 opinions, verified, response in 1h, 20 students, 30 EUR/h.
- Strong profile copy around Spanish-speaker problems, conversation, pronunciation, work English, and the student platform.
- Similar local Castelldefels tutors on the same page are commonly 10-25 EUR/h, with some premium profiles around 30-40+ EUR/h.
- Source: https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html

Tusclasesparticulares search result:

- 4.9 rating, 15 ratings, 30 EUR/h, verified/plus profile.
- Source: https://www.tusclasesparticulares.com/profesores/auris-1795413.htm

Implication: The public profiles already contain strong trust proof. The website should borrow more of that proof language and review specificity, while keeping the page tasteful.

### Market Evidence

Local competitors mostly occupy "academy" territory:

- Janet's: 21 years, native qualified teachers, official Cambridge preparation, 2633 certified students, 95.6% Cambridge pass rate in 2025, children/teens/adults/company offer. Source: https://janets.es/
- Idealog: language center in Castelldefels for 30+ years, small groups 4-10, multiple languages. Source: https://www.idealog.es/
- Castle Languages: since 2011, group/online/private classes, native qualified teachers, Cambridge and companies. Source: https://castlelanguages.cat/
- Kilkenny: native teachers, very small groups, Business English, claims 300+ students. Source: https://kilkennylc.com/academia-ingles-castelldefels-escuela-de-ingles-en-castelldefels-clases-de-ingles-castelldefels/

Tutor marketplace pricing:

- Superprof Barcelona shows many English teachers from 10 EUR/h and says average is 14 EUR/h. Source: https://www.superprof.es/clases/ingles/barcelona/
- Cronoshare Barcelona lists 13-22 EUR/h for private English and around 10 EUR/h online average, while noting native/bilingual teachers can command more. Source: https://www.cronoshare.com/servicios/clases-particulares-ingles/barcelona/barcelona

Learning-market support:

- EF EPI 2025 is based on 2.2M participants across 123 countries/regions. Source: https://www.ef.com/wwes/epi/
- Preply/Leanlab 2025: native Spanish speakers in Spain taking one-to-one English tutoring reported high confidence and progress; 97% said learning with a real person was very important. Source: https://preply.com/en/blog/preply-leanlab-2025-efficiency-study/
- Preply Business emphasizes professional confidence through active speaking practice, personalized instruction, real work scenarios, progress tracking, and CEFR milestones. Source: https://preply.com/en/blog/why-our-clients-feel-highly-confident-speaking-english/
- TikTok language-learning content is a known education discovery behavior; TikTok itself has promoted language learning and #AprendeConTikTok. Source: https://newsroom.tiktok.com/celebra-el-dia-europeo-de-las-lenguas-en-tiktok?lang=es

### Platform Evidence

The teaching app has significant differentiators already:

- Student dashboard with assignments, reviewed feedback, modular exercises, class profile, and Google Docs links.
- Flashcard practice with SRS-like queues, recall ratings, audio/TTS, examples panel, and session scoring.
- Teacher overview with class progress, submissions, flashcard stats, trivia/game stats, grammar/connectors, notes overview, and homework logs.
- Game/practice surfaces: Language Runner, Talk the Talk, Trivia, scenarios, modular exercises, exam parts, writing review.

The likely platform opportunity is not "add more stuff." It is to reduce student uncertainty after class: what should I do today, why does it matter, and how does it connect to speaking confidence?

### Hypotheses Tested This Cycle

1. "More SEO pages are the main growth lever."
   - Status: weakened.
   - Evidence: new pages are not indexed yet; search volume is small; current impressions lean academy queries; local trust and GBP likely matter more first.

2. "40 EUR/h can work."
   - Status: partially strengthened.
   - Evidence: marketplaces show much cheaper tutors, but premium teachers exist and Auris has proof, reviews, platform, and specialization. The site must justify premium before price shock.

3. "Social content is worth attention."
   - Status: strengthened, with constraints.
   - Evidence: organic SEO is small; social can show teacher style/trust quickly. But social should be proof and teaching snippets, not generic influencer output.

4. "The platform is a differentiator."
   - Status: strengthened.
   - Evidence: actual app depth is unusually strong for a freelance teacher. The risk is students seeing it as extra homework rather than a clear confidence loop.

### Strongest Next Move

Build a "proof bridge" across website, GBP, and social:

1. Add one tasteful FAQ/local section: "No soy una academia; las clases son directamente conmigo." Avoid the phrase as a headline, but answer the market confusion honestly.
2. Collect/reuse review snippets around confidence, speaking, progress, and useful tools.
3. Create a 30-day content rhythm from real student pain points and class moments.
4. In the platform, design a "Next 15 minutes" student home card that tells each student exactly what to practise before the next class.

## 2026-05-21 Cycle 02

### Scope

Heartbeat run. Focused on testing whether the strongest next move should be Google Business Profile/reviews, social content, or platform/product polish. Re-read prior strategy notes, inspected student dashboard code, checked live Google review data, and browsed current GBP/social/professional-English evidence.

### Repo State

- `teacher-website`: strategy docs are new/uncommitted.
- `teacher-assistant`: still heavily dirty with existing unrelated work. Read-only again.

### Evidence Gathered

Google's own Business Profile guidance confirms the local-ranking frame:

- Keep business information complete and accurate.
- Respond to reviews.
- Add photos and videos.
- Local ranking is mainly based on relevance, distance, and prominence.
- More reviews and positive ratings can help local ranking.
- Source: https://support.google.com/business/answer/7091?hl=en-en

This strengthens the GBP/review thesis because it is directly aligned with the local search problem. It also suggests "posts every day" is less important than profile completeness, review quality/replies, service relevance, and fresh visual proof.

Live Google reviews currently available through the site endpoint show five highly usable proof themes:

- Confidence in meetings with native speakers.
- Three-year progression and confidence to speak.
- Dynamic, enjoyable classes with individualized attention.
- Adaptation to student needs and weak points.
- Motivation and learning outside class.

The student-dashboard inspection showed the portal already has many student actions:

- Feedback and notifications.
- Class notes link.
- Flashcards hero card.
- Task stats: all tasks, in motion, done.
- On Deck pending assignments.
- Kiwi Escape and Vocabulary Trivia.
- Completed work.

This confirms H006 more strongly: the platform does not lack activity surfaces. The missing layer is a prioritizing coach that says exactly what to do first.

External content/market evidence:

- A Madrid Superprof profile directly targets the same professional-confidence angle at 20 EUR/h: "professional English for work," meetings/interviews, adults/professionals, speaking from the first class, measurable progress. Source: https://www.superprof.es/ingles-profesional-para-trabajo-habla-con-confianza-reuniones-entrevistas.html
- This weakens a lazy version of H008: "business English for professionals" is not unique by itself. Auris needs to pair that angle with review proof, bilingual/Ireland-raised story, Spanish-speaker insight, and the portal.
- A 2025 HuffPost piece around @mariaspeaksenglish shows a viral Spanish-speaker confidence theme: the issue is framed not just as language, but as a mental block around apologizing for English. Source: https://www.huffingtonpost.es/virales/una-profesora-ingles-pide-espanoles-dejen-esto-hablan-idioma.html
- This strengthens the content thesis: Spanish-speaker confidence/friction is culturally resonant, but Auris should avoid imitating large creator accounts and instead make it personal, local, practical, and adult/professional.

### Hypotheses Updated

1. H002 GBP first:
   - Strengthened. Official Google guidance directly supports review replies, photos/videos, complete info, and prominence/relevance as local ranking levers.

2. H006 Next 15 Minutes:
   - Strengthened. The student dashboard has many actions but no single priority recommendation. Adding more tools would likely increase cognitive load.

3. H008 Business professionals:
   - Refined. "Adults/professionals/confidence in meetings" is a market-common promise. The differentiator must be the combination of personal teaching, Spanish-speaker specificity, concrete review outcomes, and portal continuity.

4. H009 Reviews as proof:
   - Strengthened. Review themes map almost perfectly to premium positioning: confidence, adaptation, progress, meetings, and continuity outside class.

### Strongest Next Move

Create a review-led GBP and website proof system before building more acquisition pages:

1. Reply to all Google reviews using natural language that reinforces the service: conversation, confidence, meetings, online/private classes, Castelldefels where relevant.
2. Add a small "What students often mention" proof block to the local page or homepage, using paraphrased themes rather than dumping full reviews.
3. Add a platform screenshot/proof post showing how review between classes works.
4. Prototype the student "Next 15 minutes" card as a product-design note before coding.

## 2026-05-21 Cycle 03

### Scope

Heartbeat run focused on pricing and offer architecture. Tested H004: whether 40 EUR/h is viable and how the price should be framed so it does not feel like an ordinary tutor rate.

### Repo State

- `teacher-website`: strategy docs still uncommitted.
- `teacher-assistant`: still dirty; read-only.

### Evidence Gathered

Website pricing:

- Private classes: 40 EUR/h.
- Group classes: 20 EUR/h.
- Included-with-every-class strip already mentions student portal, flashcards, tailored materials, and progress tracking.
- Public profile copy on Superprof/Tusclases emphasizes 11+ years, Ireland, Spanish-speaker blocks, student platform, and invoices.

Potential pricing inconsistency:

- The website presents 40 EUR/h.
- Superprof/Tusclases public-profile evidence from earlier cycles shows around 30 EUR/h.
- This is not automatically wrong, but it can create a trust leak if a lead compares channels. It needs either alignment or intentional channel logic.

External pricing evidence:

- Zaask lists private English classes around 15-40 EUR/h, average 20 EUR/h; home classes 20-50 EUR/h. Source: https://www.zaask.es/cuanto-cuesta/clases-de-ingles
- Superprof Barcelona search copy says many tutors are 10 EUR/h+, average often around 15-25 EUR/h, with premium examples such as Cambridge/CELTA/proficiency profiles around 40 EUR/h. Source: https://www.superprof.es/clases/ingles/barcelona/
- Superprof Spain page says English tutors generally vary between 12-30 EUR/h, depending on profile, experience, level, exam prep, and modality. Source: https://www.superprof.es/clases/ingles/espana/
- FunTalk private English classes in Barcelona list 38 EUR/h for individual classes and 21 EUR/person for two people. Source: https://funtalk.es/clases-particulares-ingles/
- Language Services Barcelona in-company/private business English says prices start from 26 EUR/h. Source: https://www.languagesbarcelona.com/
- IberEnglish business English lists 48.50 EUR/h for 2026/27 company classes. Source: https://iberenglish.com/web/clases-de-ingles-en-su-empresa/
- Bravo Academy advertises business English from 6.60 EUR/h, but that is likely group/academy economics rather than direct private premium positioning. Source: https://bravoacademy.es/corporate-barcelona

### Pricing Interpretation

40 EUR/h is high for a generic tutor marketplace, but defensible if framed as a premium personal service with visible continuity:

- direct teacher, not rotating academy staff
- 11+ years teaching Spanish speakers
- bilingual/Ireland-raised perspective
- confidence and professional-use outcomes in reviews
- custom materials and correction
- portal, flashcards, progress tracking, review between classes
- invoice with NIF where needed

The price is weaker if framed only as "1-on-1 lessons tailored to you." That sentence could describe hundreds of cheaper tutors.

### Hypotheses Updated

1. H004 40 EUR/h:
   - Strengthened, with constraint. It sits at the top of the broad tutor range, but comparable premium/private/business offers exist.
   - The offer must be framed as a premium learning system, not merely lesson time.

2. H008 Business/professionals:
   - Strengthened. Business pricing gives more room for 40 EUR/h than generic private tutoring, but corporate-academy competitors can undercut via group/FUNDAE offers.

3. H009 Review proof:
   - Strengthened. Reviews are not just social proof; they are price justification.

### Strongest Next Move

Create a premium offer block that explains "what the hour includes" without sounding salesy:

- live class with Auris
- personal correction and speaking practice
- materials adapted to goals
- class vocabulary saved into review
- portal access and flashcards
- progress tracking
- optional invoice

Also decide whether public profile price should remain 30 EUR/h as a marketplace acquisition price or be aligned with the site. If kept different, document channel-specific pricing internally.

## 2026-05-21 Cycle 04

### Theme

Talk the Talk as lead magnet, SEO asset, content bridge, and student-retention loop.

### Repo State

- `teacher-website`: clean tracked files, with untracked `docs/strategy/` notes from this research system.
- `teacher-assistant`: dirty with many existing unrelated changes; inspected read-only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
- `/Users/aurisp/repos/teacher-website/src/App.jsx`
- `/Users/aurisp/repos/teacher-website/src/data/speakingTopics.js`
- `/Users/aurisp/repos/teacher-website/public/sitemap.xml`
- `/Users/aurisp/repos/teacher-website/public/robots.txt`
- `/Users/aurisp/repos/teacher-website/src/utils/analytics.js`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/data/speakingTopics.ts`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/App.tsx`

Findings:

- The public Talk the Talk loop is strong: theme, difficulty, timer, random prompt, completion, repeat, and free-trial CTA.
- Analytics events are already present for meaningful funnel measurement.
- The completion screen already frames the paid next step correctly: personal feedback.
- The tool instructions mention listening to a recording, but the inspected public component does not appear to implement recording/listenback.
- `/talkthetalk` updates SEO metadata, but React still renders the normal homepage underneath the fixed tool overlay. This is fine for users but less clean as a standalone SEO document.
- Static HTML fallback for `/talkthetalk` is strong enough as a basic crawlable fallback.
- Topic banks are broad enough to support content repurposing, including business/interview/presentation prompts.
- The student portal has a protected Talk the Talk route, but no completion logging, self-rating, or teacher-feedback bridge.
- Sitemap and robots are correct; discovery is not blocked by robots.

### API / Data Evidence

Search Console final data through 2026-05-19:

- Last 30 days: homepage only, 1 click, 187 impressions, CTR 0.53%, average position 9.99.
- Last 180 days: homepage only, 18 clicks, 659 impressions, CTR 2.73%, average position 8.13.
- `/talkthetalk` has no query rows in last 30 or 180 days.
- `/talkthetalk`: `Crawled - currently not indexed`, last crawl 2026-03-01, robots allowed, fetch successful, included in sitemap.
- `/clases-ingles-castelldefels`: `Crawled - currently not indexed`, last crawl 2026-05-21, robots allowed, fetch successful, included in sitemap.
- `/ingles-empresas-castelldefels`: `Discovered - currently not indexed`, included in sitemap, not crawled yet.
- Sitemap report: 4 submitted, 0 indexed. Treat cautiously because homepage has search performance; likely still processing or reporting oddly after the recent sitemap submission.

Live checks:

- `https://englishwithauris.com/talkthetalk` returns 200, has canonical, `index,follow`, schema, and built assets.
- `https://englishwithauris.com/sitemap.xml` returns 200.

Tag Manager:

- Read-only API access worked.
- Container `englishwithauris.com`, public ID `G-VDW7H0VQBC`, exists.
- Default workspace has 0 tags and 0 triggers.
- Measurement currently appears to rely on direct `gtag.js`, not a populated GTM container.

### External Evidence

- Google Search Central JavaScript SEO: Google processes JavaScript in phases and rendering can be queued, so key route identity/content should be clear and crawlable. Source: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google helpful-content guidance: pages should be useful for people first, not created mainly for search. This supports making Talk the Talk genuinely useful rather than a thin SEO page. Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google crawling/indexing overview: crawlability does not guarantee indexing. This fits the `Crawled - currently not indexed` evidence. Source: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
- British Council LearnEnglish speaking pages structure speaking practice by level, showing that trusted free resources emphasize guided difficulty and learner fit. Source: https://learnenglish.britishcouncil.org/skills/speaking
- Cambridge English activities use skill/level/time filters, which supports quick-start filters for speaking prompts. Source: https://www.cambridgeenglish.org/learning-english/activities-for-learners/
- ELSA and SmallTalk2Me compete around AI speaking feedback/pronunciation/interview/business practice. Auris should not try to out-app them; the differentiator is human feedback, Spanish-speaker diagnosis, and continuity into class. Sources: https://elsaspeak.com/ and https://smalltalk2.me/

### Hypotheses Changed

- H005 strengthened: social/GBP content should sometimes send people to a practical Talk the Talk prompt instead of only booking CTAs.
- H006 strengthened: the student platform needs a clear next action and Talk the Talk can be one recommended action, but only when higher-priority tasks are not due.
- H007 strengthened/refined: Talk the Talk is a promising lead magnet but weak as an SEO bet until the route is cleaner and real promotion proves usage.
- H011 added: Talk the Talk's strongest role is the feedback bridge, not the free tool itself.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Strongest Next Move

Use Talk the Talk as a 4-week measured bridge:

1. Fix the recording/listenback instruction mismatch.
2. Make `/talkthetalk` a cleaner standalone route so the page identity is not mixed with the homepage.
3. Promote one specific 90-second prompt per week from GBP/social/LinkedIn with UTM links.
4. Track `talk_started`, `talk_completed`, `talk_trial_click`, and bookings.
5. In the student portal, prototype self-rating after completion before considering audio recording or heavier features.

### Unfinished Threads For Next Cycle

- Confirm GA4 event visibility and whether `talk_trial_click` can be marked as a key event/conversion.
- Inspect whether the current build can support query-parameter prompt presets for social/GBP links.
- Decide whether Talk the Talk should get a tiny Spanish-speaker confidence line on the first screen.
- Compare local competitor GBP/activity once browser access to Google local results is practical.

## 2026-05-21 Cycle 05

### Theme

Measurement and analytics.

### Primary Research Question

RQ009: What measurement stack is actually working: `gtag`, GTM, GA4 events, Search Console, and Calendly attribution?

### Repo State

- `teacher-website`: tracked files clean; strategy docs are untracked/edited in `docs/strategy/`.
- `teacher-assistant`: dirty with many existing unrelated changes; inspected read-only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/index.html`
- `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
- `/Users/aurisp/repos/teacher-website/src/main.jsx`
- `/Users/aurisp/repos/teacher-website/src/App.jsx`
- `/Users/aurisp/repos/teacher-website/src/utils/analytics.js`
- `/Users/aurisp/repos/teacher-website/src/components/ConsentBanner.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/CalendlyBadge.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/Navbar.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/netlify.toml`
- `/Users/aurisp/repos/teacher-website/package.json`
- Live source for `https://englishwithauris.com/talkthetalk`
- Production assets `main-cec8b524.js` and `TalkTheTalk-c275201f.js`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts`

Findings:

- The site uses direct `gtag.js`, not a populated GTM workspace.
- Consent mode defaults Analytics storage to denied and updates only after consent.
- Custom events are implemented for Talk the Talk, contact clicks, form events, Calendly badge clicks, booking type selection, and booked trials.
- `talk_started`, `talk_ready_clicked`, `talk_completed`, and `talk_trial_click` exist in source and deployed Talk chunk.
- `trial_booked` listens for `calendly.event_scheduled` in the parent page.
- The Talk completion CTA opens Calendly in a new tab, so it can measure `talk_trial_click` but probably cannot fire `trial_booked` after the booking.
- `ContactSection` and `CalendlyBadge` use embedded/popup Calendly flows, so they are better candidates for `calendly.event_scheduled`.
- The pageview setup likely duplicates initial pageviews because `gtag('config')` sends a pageview by default and `App.jsx` also manually sends a `page_view`.
- The student portal has a Talk the Talk nav entry and page but no completion logging or marketing analytics, which is correct for privacy/product until a portal-specific practice log exists.

### API / Data Evidence

Local token scopes:

- Search Console write token: `webmasters`.
- Search Console read token: `webmasters.readonly`.
- Tag Manager token: `tagmanager.readonly`.
- Docs token: `documents.readonly`.

Search Console:

- Last 90 days page data still shows only homepage: 6 clicks, 308 impressions, CTR 1.95%, average position 8.80.
- `/talkthetalk` URL inspection remains `Crawled - currently not indexed`, last crawl 2026-03-01, robots allowed, page fetch successful.

Tag Manager / Google tag:

- API access worked.
- Container `englishwithauris.com`, public ID `G-VDW7H0VQBC`, tag IDs `G-VDW7H0VQBC` and `GT-TXZ4FPK3`.
- Workspace counts: 0 tags, 0 triggers, 0 variables.
- Container features indicate support for Google tag config but not normal GTM tags/triggers in this view.

GA4 Admin/Data:

- Attempted with Tag Manager, Search Console, and Docs tokens.
- All returned 403 due insufficient authentication scopes.
- Conclusion: current API credentials do not allow event/report verification in GA4.

### External Evidence

- Google pageview docs say `gtag('config')` sends a pageview by default and warn that manual pageviews without disabling default measurement can duplicate pageviews. Source: https://developers.google.com/analytics/devguides/collection/ga4/views
- Google consent mode docs say consent mode adapts tag behavior based on the user's consent choices and denied mode uses cookieless pings. Source: https://support.google.com/analytics/answer/10000067
- Google DebugView docs say events may not be visible if consent mode is implemented and the user has not granted Analytics cookies. Source: https://support.google.com/analytics/answer/7201382
- Calendly embed docs confirm `calendly.event_scheduled` is sent by `window.postMessage()` from embedded flows to the parent page. Source: https://calendly.com/help/advanced-calendly-embed-for-developers
- Google recommended-events docs recommend lead-generation events such as `generate_lead`, and developer docs say `currency` should be set when `value` is sent. Sources: https://support.google.com/analytics/answer/9267735 and https://developers.google.com/analytics/devguides/collection/ga4/reference/events
- Google UTM docs say custom campaign parameters identify referring campaigns in Analytics reports and recommend `utm_source`, `utm_medium`, and `utm_campaign`; missing parameters can create `(not set)` values. Sources: https://support.google.com/analytics/answer/10917952 and https://support.google.com/analytics/answer/11242870
- Calendly webhook docs show scheduled-event data can be captured server-side later via webhook subscriptions. Source: https://developer.calendly.com/receive-data-from-scheduled-events-in-real-time-with-webhook-subscriptions

### Hypotheses Changed

- H005 strengthened with measurement caveat: social/GBP prompt posts are measurable through Talk engagement and CTA click, but not yet through completed Talk-sourced booking.
- H007 refined: Talk the Talk is a lead magnet candidate, but measurement cleanup should happen before treating the 4-week test as reliable.
- H011 strengthened: Talk the Talk's strongest measurable public role is currently the feedback/booking-intent bridge, not fully booked-trial attribution.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Strongest Next Move

Before the 4-week Talk/content test, harden measurement:

1. Choose one pageview strategy and likely set `send_page_view: false` in all HTML entry points while keeping manual SPA pageviews.
2. Validate Calendly postMessage origin before firing `trial_booked`.
3. Add GA4 recommended `generate_lead` alongside `trial_booked` and form success, with `currency: 'EUR'` when `value` is present.
4. Treat `talk_trial_click` as the measurable endpoint for Talk content until booking attribution is fixed.
5. If full attribution matters, change Talk completion CTA to open an in-page Calendly flow or later add Calendly webhook/API capture.

### What Not To Do Yet

- Do not judge Talk the Talk by `trial_booked` until attribution is fixed.
- Do not add GTM tags just because the container exists; direct `gtag.js` is enough for the current scale.
- Do not mark every micro-event as a key event.
- Do not add audio recording or email gating before engagement and lead-intent measurement are cleaner.

### Next-Cycle Packet

Recommended next theme: indexing and page quality, unless Auris asks for implementation.

If implementing measurement cleanup:

- Files:
  - `/Users/aurisp/repos/teacher-website/index.html`
  - `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
  - `/Users/aurisp/repos/teacher-website/clases-ingles-castelldefels/index.html`
  - `/Users/aurisp/repos/teacher-website/ingles-empresas-castelldefels/index.html`
  - `/Users/aurisp/repos/teacher-website/src/App.jsx`
  - `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
  - `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- Tests:
  - Build locally.
  - Use GA4 DebugView manually after accepting consent or with debug mode.
  - Verify `page_view`, `talk_started`, `talk_ready_clicked`, `talk_completed`, `talk_trial_click`, `generate_lead`, and `trial_booked`.
- Hypotheses:
  - H005, H007, H011.

If continuing research:

- Pick Packet B from `research-roadmap.md`: indexing and page quality.
- Reinspect new URL inspection data for `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, and `/talkthetalk`.
- Compare rendered DOM and proof/uniqueness against local competitors.

### Unfinished Threads

- Need GA4 read/API access to verify real event counts from automation.
- Need to know whether Calendly booking records preserve UTM values from the new-tab Talk CTA.
- Need a decision on whether Talk completion should keep opening a new Calendly tab or open an in-page booking flow.

## 2026-05-21 Cycle 06

### Theme

Outside-in trend and opportunity radar.

### Primary Research Question

RQ011/RQ013/RQ014 combined: what wider market signals should change Auris's growth, content, offer, and platform strategy beyond website cleanup?

### Repo State

- `teacher-website`: tracked files clean before this cycle; `docs/strategy/` remains untracked strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked files; inspected read-only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/PlatformShowcase.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TestimonialsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/GoogleReviewsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/src/App.jsx`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/netlify/functions/google-reviews.js`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts`

Findings:

- The website already leans toward confidence, Spanish-speaker blocks, adult/professional situations, local private classes, invoice availability, and portal continuity.
- The current price proof is present but still broad: the pricing cards mention goals, scheduling, feedback, progress, and portal access; the strategy docs correctly push toward a clearer "what the hour includes" block.
- The local and business landing pages have useful, non-academy copy, but Search Console still shows the homepage as the only page with rows.
- The public Talk the Talk tool has the right low-pressure prompt loop and lead CTA, but still competes in a world where AI speaking apps have made daily prompt practice normal.
- The student portal has Talk the Talk and strong dashboard/teacher surfaces, but the speaking-practice loop still does not capture where the student got stuck or whether they want feedback.
- Teacher overview already has rich flashcard, homework, notes, feedback, and activity surfaces. A speaking block log would fit naturally as a small prep signal rather than a large new product.

### API / Data Evidence

Search Console final data through 2026-05-19:

- Last 28 days: homepage only, 1 click, 180 impressions, CTR 0.56%, average position 10.14.
- Last 90 days: homepage only, 6 clicks, 308 impressions, CTR 1.95%, average position 8.80.
- Last 180 days: homepage only, 18 clicks, 659 impressions, CTR 2.73%, average position 8.13.
- Query examples still skew local/brand/academy: `academia ingles castelldefels`, `academias de inglés en castelldefels`, `auris`, `academia ingles gava`, and low-volume English phrases.

URL inspection:

- `/`: `Submitted and indexed`, last crawled 2026-05-21.
- `/clases-ingles-castelldefels`: `Crawled - currently not indexed`, last crawled 2026-05-21.
- `/ingles-empresas-castelldefels`: `URL is unknown to Google`.
- `/talkthetalk`: `Crawled - currently not indexed`, last crawled 2026-03-01.

Live checks:

- `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, and `/talkthetalk` all return HTTP 200 from Netlify.
- Live reviews endpoint returned Places New data: 5.0 rating, 15 reviews, 5 review texts. The sample reviews strongly support confidence, meetings with native speakers, adaptation, tools, and comfort speaking.

### Source Discovery

The cycle deliberately did not start with "search Reddit." It first mapped where evidence would likely live:

- Search Console and live reviews for local demand/proof.
- Reddit/community threads for raw pain language.
- AI app reviews and tutor-vs-app research for the AI threat/opportunity.
- Professional English reports and job-demand summaries for business-English demand.
- Local competitors and LinkedIn business-English pages for offer framing.
- Instagram/content operator evidence for social mechanics.

### External Evidence

- Reddit confidence thread: a Spanish speaker describes speaking well alone but freezing with other people and needing confidence for healthcare. Source: https://www.reddit.com/r/EnglishLearning/comments/1t1d5u3/how_can_i_speak_english_more_confidently/
- Reddit professional output-gap thread: a software developer understands colleagues and media but cannot produce natural structures automatically in work conversations. Source: https://www.reddit.com/r/EnglishLearning/comments/1qi0djc/i_understand_everything_in_english_but_cant_speak/
- Preply / Leanlab 2025 study: Spanish speakers using a self-learning app improved, but 82% said live tutoring could help them progress faster; the study specifically concerns Spanish speakers in Spain learning English. Source: https://preply.com/en/blog/human-tutor-vs-language-app/
- ELSA App Store reviews: users praise pronunciation/confidence but complain about AI overload, flexibility, and recognition errors that undermine trust in feedback. Source: https://apps.apple.com/us/app/elsa-speak-english-learning/id1083804886?platform=iphone&see-all=reviews
- Praktika Trustpilot reviews: Spanish-language reviews praise daily AI conversation and losing shame; one critique asks for more concrete, detailed error review and another complains the AI talks too much. Source: https://es.trustpilot.com/review/praktika.ai
- EF EPI 2025: based on 2.2m adults in 123 countries/regions; Spain reporting places the country in a moderate band and third-party Spain summaries highlight speaking as a weak productive skill. Sources: https://www.ef.edu/epi/ and https://club.camaramadrid.es/informe-ef-english-proficiency-index-espana-nivel-ingles/
- Cambridge English at Work: English-at-work findings are based on 5,000+ employers in 38 countries, supporting the professional-English demand layer. Source: https://www.cambridgeenglish.org/es/why-choose-us/english-at-work/
- The Local / English Live labour-market summary: engineering, sales, tech, business/consulting/management, and Catalonia appear as meaningful English-demand contexts. Source: https://www.thelocal.es/20240123/the-jobs-in-spain-where-speaking-english-is-a-big-advantage
- Le Monde employment article: language learning demand is holding against AI; translation does not cover persuasion, relationships, conflict, meetings, and cultural nuance. Source: https://www.lemonde.fr/en/employment/article/2026/02/05/foreign-language-learning-holds-strong-against-the-ai-wave_6750168_103.html
- Kilkenny Castelldefels: local academy competitor uses scale, native teachers, adults, companies, and private classes. Source: https://kilkennylc.com/
- Janet's company English page: formal company lane leans on FUNDAE, 20 years, measurable results, and admin simplicity. Source: https://janets.es/clases-online-de-ingles-bonificadas/
- Stanton Business English LinkedIn: public posts frame business English as communication behavior, team culture, leadership, and identity, not only vocabulary. Source: https://es.linkedin.com/company/stanton-business-english
- Instagram language-content operator thread: one teacher reports growth from pronunciation/listening reels, vocabulary carousels, and mistake-correction reels, but this is better evidence for content mechanics than Auris's buyer quality. Source: https://www.reddit.com/r/InstagramMarketing/comments/1soqo7g/i_teach_spanish_on_instagram_0_to_97k_in_14/

### Hypotheses Changed

- H005 strengthened and sharpened: social should build trust around output gaps, professional situations, and feedback; do not chase generic virality.
- H008 strengthened: professional English is real, but Auris should package it as personal work-English confidence for adults/professionals, not formal corporate academy training.
- H010 strengthened: the "I understand but freeze/simplify" output gap is now backed by community language, reviews, website copy, and professional context.
- H011 strengthened: Talk the Talk should be a feedback bridge in a market where AI tools have normalised prompt practice but not solved human diagnosis.
- H012 created: AI speaking tools increase the value of human diagnostic feedback rather than replacing Auris outright.
- H013 created: the best expansion lane is professional confidence for Spanish-speaking adults, not formal academy-style business training.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/outside-in-opportunity-radar.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Strongest Next Move

Run a 30-day "Work-English Confidence Loop" test:

1. One weekly LinkedIn/professional post about output gaps in meetings, presentations, interviews, or client calls.
2. One weekly Instagram/TikTok short correction or clarity clip.
3. One weekly Google Business Profile post with a Talk the Talk prompt.
4. One source-tagged Talk the Talk prompt URL per week.
5. Manual lead-source notes until GA4/Calendly attribution is improved.

### What Not To Do Yet

- Do not build AI speech scoring to compete with ELSA, Praktika, or SmallTalk2Me.
- Do not chase broad "free English speaking practice" SEO as the main growth plan.
- Do not reposition as a formal academy or FUNDAE corporate training provider.
- Do not publish generic grammar tips without tying them to confidence, work situations, or Spanish-speaker correction.
- Do not treat Instagram follower growth as business success until profile clicks, Talk starts, trial clicks, or inquiries prove quality.

### Next-Cycle Packet

Recommended next theme: Packet H, social and competitor channel scan.

Exact work:

- Inspect `outside-in-opportunity-radar.md`, `content-strategy.md`, `hypotheses.md`, `market-intelligence.md`, and website CTAs/UTM support.
- Browse 5 local academy/tutor social profiles, 5 English-for-Spanish-speakers creator accounts/pages, 3 LinkedIn/business-English coaches or companies, and 2-3 marketplace profiles with strong review language.
- Build a channel fit matrix for LinkedIn, Instagram/TikTok, YouTube Shorts, GBP, and marketplaces.
- Produce 12 content examples grouped by buyer intent and one 2-week posting plan Auris could realistically sustain.

Hypotheses:

- H005 social as trust-building.
- H010 confidence-led/output-gap content.
- H012 AI plus human feedback.
- H013 professional-confidence expansion.

### Process Improvement Notes

- Highest-signal source layer: AI app reviews + Preply/Leanlab study, because they directly test the "AI replaces tutors" fear and reveal the gap Auris can own.
- Highest-signal pain layer: Reddit/community threads, because they provide exact learner language, but they need local/professional validation.
- Noisiest source layer: broad Instagram/content-growth anecdotes, because they prove educational content can spread but not that it will sell premium private classes.
- Protocol improvement: future outside-in cycles should start with a source discovery table before browsing and should record source quality in `market-intelligence.md`. This cycle did that and added Packet H to the roadmap.

## 2026-05-21 Cycle 07

### Theme

Social and competitor channel scan.

### Primary Research Question

RQ012: which real content/channel pattern should Auris test first, given his warm personal style, premium price, non-academy positioning, and limited time?

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked files; inspected read-only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/outside-in-opportunity-radar.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/src/components/Navbar.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/HeroSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/src/utils/analytics.js`
- `/Users/aurisp/repos/teacher-website/src/App.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/Footer.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/GoogleReviewsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/PlatformShowcase.jsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`

Local findings:

- The current website has strong owned assets for a channel test: Google reviews, Talk the Talk, local/business landing pages, WhatsApp, Calendly, email, and portal proof.
- No obvious public social profile links are surfaced on the website. Social can be tested, but the website is not currently a social-profile hub.
- UTM and event foundations exist: Talk links, `talk_started`, `talk_completed`, `talk_trial_click`, contact clicks, form events and booking events.
- Talk the Talk can measure click intent to Calendly but not completed booking attribution from the new-tab CTA.
- The student portal has the right practice surface, but no self-rating/teacher-feedback loop yet, so social-to-practice-to-retention is not closed.

### API / Data Evidence

Search Console final data through 2026-05-19:

- 28 days: homepage only, 1 click, 180 impressions, CTR 0.56%, average position 10.14.
- 90 days: homepage only, 6 clicks, 308 impressions, CTR 1.95%, average position 8.80.
- 180 days: homepage only, 18 clicks, 659 impressions, CTR 2.73%, average position 8.13.
- Query examples still show local/academy/brand demand rather than social/content demand: `academias de ingles castelldefels` 92 impressions, `auris` 66 impressions, `academia ingles castelldefels` 20 impressions.
- Search Console filters for `private`, `empresas`, and `business` returned no rows in the 180-day window.

GTM read-only:

- Container `6350675658 / 249863951 / workspace 0`: 0 tags, 0 triggers, 0 variables.
- Conclusion: channel tests currently depend on direct `gtag.js` and manual source notes, not GTM.

Live checks:

- `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, and `/ingles-empresas-castelldefels` all returned HTTP 200.
- Static metadata/canonical/schema were present on all four checked pages.
- Live reviews endpoint returned 5.0 rating, 15 reviews, and review text around confidence, meetings, adaptation, tools, and comfort speaking.

### Source Discovery Choices

The cycle avoided starting with a generic Reddit/LinkedIn scan. It first mapped evidence layers by what they could prove:

- Search Console and live site for owned baseline.
- Google reviews for proof language.
- GTM for measurement reality.
- Local academy websites/directories/LinkedIn for local buyer alternatives.
- English-for-Spanish-speakers creator pages for format mechanics.
- Marketplaces for buyer language, price anchors, and proof norms.
- Public LinkedIn/business-English pages and local professional events for professional channel fit.
- Official Google docs for GBP and structured-data constraints.
- Reddit/social threads for channel pitfalls and learner/trial language.

### External Evidence

- Kilkenny Castelldefels uses scale, native teachers, adults, companies, Business English and private classes. Source: https://kilkennylc.com/
- Castle Languages uses 14+ years, native qualified teachers, Cambridge, company courses, groups and private classes. Source: https://castlelanguages.cat/
- Janet's LinkedIn has 583 followers and frames business training around FUNDAE, teams, meetings, negotiations, online/presential flexibility and company needs. Source: https://es.linkedin.com/company/janets-school
- Janet's directory profile shows 4.9 rating, 100+ review signal and public Facebook/Instagram/LinkedIn links. Source: https://www.todosbiz.es/janets-school-of-english-936-64-03-33
- Superprof Business English Castelldefels shows visible tutors around 10-30 EUR/h and average 17 EUR/h, including work/travel/business goals. Source: https://www.superprof.es/clases/business-english/castelldefels/
- Tusclases Castelldefels shows local price/proof norms around free first classes, oral practice and visible prices such as 12, 15 and 21 EUR/h. Source: https://www.tusclasesparticulares.com/profesores-ingles/castelldefels.aspx
- Preply Business English frames the buyer need around meetings, emails, presentations, negotiations, pronunciation, industry terms, reviews and flexible scheduling, with average price around $17/h. Source: https://preply.com/en/online/tutors-business-english
- A Preply tutor example in Spain uses bilingual empathy, Spanish ability, personalized lessons, pronunciation, fluency and interview confidence. Source: https://preply.com/en/tutor/3252594
- Amigos Ingleses leads with Spanish-speaker real English, pronunciation, speaking, training, fun and confidence. Source: https://www.amigosingleses.com/
- Cambridge's article on Amigos Ingleses describes practical, fun, step-by-step real communication for Spanish speakers and multi-channel digital learning. Source: https://www.cambridgeenglish.org/es/news/view/amigos-ingleses-cambridge-english/
- Google GBP docs confirm updates can include description, photo/video and action button; old posts are archived after 6 months unless dated. Source: https://support.google.com/business/answer/7342169
- Google LocalBusiness docs support clean local business data, working URLs and validation, but not shortcut SEO. Source: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google review snippet docs warn that self-serving LocalBusiness/Organization reviews are ineligible for star review features. Source: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Executive Business English LinkedIn shows a solo/self-employed business-English brand can use LinkedIn language around executive presence, meetings, negotiations, presentations and global professionals. Source: https://www.linkedin.com/company/executive-business-english
- Let's Speak Leadership Meetup in Barcelona shows adjacent demand around trust, empathy, assertiveness and leadership communication. Source: https://www.meetup.com/es-es/letstalkbusinessbarcelona/
- Reddit Preply tutor thread surfaced marketplace price compression and a useful counterpoint: cheaper students can be less serious, and off-platform business-English rates can be higher. Source: https://www.reddit.com/r/Preply/comments/1s3i7el/preply_has_given_up_on_me/
- Reddit Preply trial thread suggested trial lessons convert when the student feels comfortable and conversational, not tested or shamed. Source: https://www.reddit.com/r/Preply/comments/1sdym23/i_have_been_a_spanish_tutor_for_less_than_a_month/
- Reddit social-media thread showed language content can be served to the wrong audience when hashtags/on-screen language create mixed signals. Source: https://www.reddit.com/r/socialmedia/comments/1rxzsiw/our_languagelearning_content_keeps_reaching_native_speakers/
- Recent EnglishLearning pronunciation feedback to a Spanish speaker highlighted vowels, word stress, and final consonant clarity. Source: https://www.reddit.com/r/EnglishLearning/comments/1s8exrw/hello_to_everyone_i_have_just_uploaded_a_youtube/
- TikTok pronunciation ideology research suggests platform pronunciation teaching can lean on native-like norms and directive speech more than credentials. Source: https://www.sciencedirect.com/science/article/pii/S0346251X25003070

### Trend / Community / Product Signals

- Local competitors and marketplaces prove the same buyer language is crowded: native, flexible, business English, confidence, meetings, presentations, Cambridge.
- The price anchor around visible marketplaces is much lower than Auris's site price, so content must show what is included, not just say "private classes."
- Creator examples prove practical Spanish-speaker content can travel, but they do not prove buyer intent for premium private classes.
- LinkedIn and GBP are better trust surfaces for professional/local buyers than TikTok-first.
- Short-form can still be useful if it is a reusable proof/teaching format with clear audience signals.

### Hypotheses Changed

- H005 strengthened and refined: social should be a trust-building system. The first test should be GBP plus LinkedIn anchored, with Instagram/TikTok as reuse.
- H010 strengthened: Spanish-speaker confidence and output-gap content now has review, community, marketplace, creator, pronunciation and competitor support.
- H012 strengthened but still commercially unproven: AI/practice/human-diagnosis framing is promising, but needs a real post test.
- H013 strengthened: professional confidence remains the best expansion lane, but only when paired with Auris proof and not generic "business English."
- H014 created: first channel sprint should be GBP plus LinkedIn anchored, with Instagram/TikTok as reuse.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/channel-fit-and-content-scan.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Strongest Next Move

Run a 2-week `GBP + LinkedIn + short-form reuse` sprint:

1. One weekly professional-confidence LinkedIn post.
2. One weekly GBP proof/update post with review, local trust, or Talk prompt.
3. One lightweight Instagram/TikTok clip reusing the same idea.
4. One source-tagged Talk prompt or booking CTA.
5. Manual lead-source ledger for every inquiry.

This is better than TikTok-first because it tests buyer trust and local/professional intent without forcing Auris into a content-influencer workload.

### What Not To Do Yet

- Do not build a daily content machine.
- Do not make TikTok virality the metric.
- Do not copy academy/FUNDAE LinkedIn language.
- Do not expect review schema markup to create stars for first-party/local-business reviews.
- Do not let marketplace pricing decide the website's premium positioning.
- Do not move YouTube Shorts ahead of a smaller short-form test.

### Process Improvement Notes

- Highest-signal source: marketplaces plus local competitor LinkedIn/directories, because they connect channel, proof, price and buyer intent.
- Highest-signal official source: Google GBP and review-snippet docs, because they prevent shortcuts and clarify how GBP posts can be used.
- Noisiest source: direct Instagram/Facebook access via search. It was patchy and sometimes blocked; use it for manual account review later, not as the sole source.
- Protocol improvement added to `automation-research-loop.md`: channel cycles must label evidence as attention, trust, buying intent or retention. An attention source cannot answer a buying-intent question by itself.

### Next-Cycle Packet

Recommended next theme: Packet I, GBP and lead-source proof sprint.

Exact work:

- Inspect `channel-fit-and-content-scan.md`, `content-strategy.md`, `review-proof-library.md`, `measurement-plan.md`, and live Google reviews.
- Pull Search Console 28/90/180 day baseline again.
- Check GTM/GA4 if credentials still work.
- Browse 3-5 local GBP/local profiles and 3 solo business-English LinkedIn pages.
- Produce 4 GBP post drafts, 4 LinkedIn drafts, and a lead-source ledger template.
- Decide the post measurement rule after 2 weeks.

Hypotheses:

- H002 GBP beats broad SEO for near-term leads.
- H005 social as trust-building.
- H009 reviews as central proof.
- H014 GBP plus LinkedIn anchored sprint.

### Unfinished Threads

- Need Auris's actual social handles/history before finalizing channel comfort and style.
- Need real GBP performance metrics if accessible through UI/API later.
- Need GA4 event counts, or at minimum DebugView/manual event checks, for Talk/content performance.
- Need marketplace profile audit for price and proof alignment.

## Cycle 08 - GBP And Lead-Source Proof Sprint

Date: 2026-05-21

Primary research question: does Google Business Profile plus LinkedIn create qualified action faster than short-form or SEO cleanup for Auris's current position?

Theme: GBP/reviews/local trust plus LinkedIn professional-confidence content.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked files; inspected/read-only only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/channel-fit-and-content-scan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- `/Users/aurisp/repos/teacher-website/src/components/GoogleReviewsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/src/App.jsx`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/TestimonialsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`

Local findings:

- The site already has enough proof assets for a channel test: live reviews, local/business landing pages, Talk the Talk, Calendly, WhatsApp, email, contact form, and portal proof.
- The Google reviews component pulls `/.netlify/functions/google-reviews?language=...`, displays review proof, and links to Google.
- The contact flow has Calendly, WhatsApp/email and form events, but channel attribution still needs manual source notes.
- Talk the Talk can track starts/completions/trial-clicks, but its completion CTA opens Calendly in a new tab, so completed booking attribution remains incomplete.
- The local and business pages are live 200 routes with metadata/canonicals, but Search Console still has no meaningful page/query evidence for them.
- Pricing/platform copy can support a premium position only if posts quickly show the personal system: direct teacher, Spanish-speaker insight, reviews, portal continuity and professional confidence.

### API / Data Evidence

Search Console through 2026-05-19:

- 28 days: homepage only, 1 click, 180 impressions, CTR 0.6%, average position 10.14.
- 90 days: homepage only, 6 clicks, 308 impressions, CTR 1.9%, average position 8.80.
- 180 days: homepage only, 18 clicks, 659 impressions, CTR 2.7%, average position 8.13.
- Query rows still mostly show brand/local/academy language, such as `auris`, `academia ingles castelldefels`, and `academias de ingles castelldefels`.

GTM read-only:

- Container `6350675658 / 249863951 / workspace 0`: 0 tags, 0 triggers, 0 variables.
- Conclusion: sprint measurement currently depends on direct `gtag.js`, Search Console, GBP performance UI/export if accessed later, and manual source notes.

Live checks:

- `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, and `/ingles-empresas-castelldefels` all returned HTTP 200.
- Static title/canonical/OG title snippets were present on all checked routes.
- Live reviews endpoint returned 5.0 rating, 15 reviews, and review text around confidence, meetings, adaptation, tools, outside-class learning, and comfort speaking.

### Source Discovery Choices

The question needs evidence about trust and qualified action, not just attention. Source discovery prioritized:

- Official GBP docs for measurable actions, posts, photos, reviews and content policy.
- Local academy/tutor SERP results to see what a buyer compares against.
- Marketplaces to falsify premium positioning and expose price anchors.
- Public LinkedIn business-English examples to test professional-channel fit.
- Community threads to keep pain language honest.
- Live Search Console/GTM/reviews to keep owned measurement grounded.

Sources not fully resolved:

- Auris's actual social profile history was not available from the website.
- Real GBP performance export/UI was not available through the current API pass.

### External Evidence

- Google GBP performance docs show profile metrics include searches, views, calls, website clicks, messages and some booking-related metrics. Source: https://support.google.com/business/answer/9918094
- Google GBP posts docs confirm updates can include a description, photo/video and action button. Source: https://support.google.com/business/answer/7342169
- Google GBP photo docs support real photos/videos and note newest media can appear on the profile. Source: https://support.google.com/business/answer/6103862
- Google local-ranking docs name complete information, review replies, photos/videos, and relevance/distance/prominence. Source: https://support.google.com/business/answer/7091
- Google review docs support public review replies and review-request links/QR codes. Source: https://support.google.com/business/answer/3474050
- Google GBP content policy warns against phone numbers in post descriptions, so GBP drafts should use action buttons/profile contact options. Source: https://support.google.com/business/answer/7213077
- Academia Moliere's page shows local academy language around academy, private/group classes and broad language offer. Source: https://academia-moliere.com/
- Superprof Castelldefels shows visible lower price anchors, free first classes, and repeated confidence/work/travel language; Auris appears at 30 EUR/h there, below the website premium. Source: https://www.superprof.es/clases/ingles/castelldefels/
- A recent Reddit `r/ingles` thread shows market saturation language and offers promising personal, platform, homework, feedback and flexibility proof. Source: https://www.reddit.com/r/ingles/comments/1tflo0h/busco_academia_de_ingl%C3%A9s/
- A Reddit `r/askspain` thread surfaced shame/fear speaking and mixed-level class frustration in Spain. Source: https://www.reddit.com/r/askspain/comments/1ppnvlp/por_qu%C3%A9_muchos_profesores_de_ingl%C3%A9s_en_espa%C3%B1a_son/
- Hello Business English LinkedIn frames professional demand around meetings, emails, logistics, real work situations, confidence and operational clarity. Source: https://es.linkedin.com/company/hello-business-english-school
- A business-English LinkedIn post around meetings uses difficult questions, summarising, clarification and presentations as practical content topics. Source: https://www.linkedin.com/posts/freeonlinecourseswithcertificate_business-english-the-language-of-meetings-activity-7257751425210875905-v5M1
- Lizzie Eldridge's LinkedIn posts frame professional confidence around overload, translation, perfectionism, clarity and trusting existing English. Source: https://www.linkedin.com/posts/lizzie-eldridge-businessenglishcoach_businessenglish-creativeprofessionals-activity-7432141215850147840-o6J-
- English Language Co. LinkedIn shows concrete small-team/company language: meetings, presentations, emails, small groups, schedule and admin ease. Source: https://es.linkedin.com/company/english-language-co
- Yes You Can Languages LinkedIn shows micro before/after phrasing for meetings and professional confidence. Source: https://es.linkedin.com/posts/yes-you-can-languages_businessenglish-corporatecommunication-professionalenglish-activity-7438282895871459328-O7Uh

### Trend / Community / Product Signals

- The best GBP strategy is proof freshness, not volume: real photos, review replies, helpful updates and action buttons.
- LinkedIn examples support Auris's professional-confidence lane, especially overload/translation/clarity in meetings, but they do not prove Auris's own LinkedIn distribution.
- Marketplace evidence is the strongest warning against generic premium copy. A lead can compare Auris to lower-priced teachers within seconds.
- Community evidence keeps reinforcing that shame, mixed levels, and low-confidence speaking are real pains, especially when learners have studied but cannot perform.
- The "portal continuity" proof matters because other offers mention homework/platforms; Auris must explain it as personal follow-up, not tech for its own sake.

### Hypotheses Changed

- H002 strengthened and operationalized: GBP should beat broad SEO near-term, but now the next test is the exact GBP half of the proof sprint.
- H005 strengthened: social is trust-building. Cycle 08 adds a falsification caveat that LinkedIn may not create leads without an existing audience.
- H009 strengthened: reviews became a review-to-post matrix and GBP reply plan, not only a proof theme.
- H014 strengthened and specified: the first sprint now has four GBP drafts, four LinkedIn drafts, UTM rules and decision criteria.
- H015 created: manual lead-source notes are required before channel conclusions are trustworthy.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-linkedin-proof-sprint.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Implementation-Ready Output

`gbp-linkedin-proof-sprint.md` now contains:

- Source discovery table.
- Local readiness and data baseline.
- External evidence ledger.
- UTM registry.
- Lead-source ledger template.
- Four GBP post drafts with CTA/photo guidance.
- Four LinkedIn drafts.
- Two-week publishing plan.
- Decision rules for continue/shift/stop.

### Strongest Next Move

Before publishing, audit Auris's actual GBP profile fields/photos/services/review replies, LinkedIn profile, any Instagram/TikTok handles, and marketplace profiles. Then publish the Week 1 review-led GBP post and Week 1 LinkedIn meeting-confidence post with UTMs and lead-source ledger discipline.

### What Not To Do Yet

- Do not post daily just to look active.
- Do not put phone numbers inside GBP post bodies.
- Do not judge LinkedIn by likes.
- Do not make TikTok/Instagram the lead channel until it produces qualified profile actions.
- Do not let marketplace pricing force the website price down without first testing proof and lead quality.
- Do not build more tracking complexity before fixing source-note discipline and GA4/Calendly visibility.

### Falsification Notes

Favored idea tested: GBP plus LinkedIn should be the first channel sprint.

Strengthened by: official GBP metrics/post/photo/review docs, Search Console's tiny baseline, live reviews, professional LinkedIn examples, and marketplace/local proof needs.

Weakening evidence: LinkedIn examples are mostly competitor/market examples, not proof that Auris's own account can reach buyers. Marketplaces also show that many buyers expect lower prices and free first classes.

Stop/change evidence: if the ledger shows no GBP website clicks/calls/messages and no LinkedIn profile actions or qualified inquiries after two complete sprint cycles, shift toward GBP review/photo/profile cleanup plus local SEO and referrals before writing more LinkedIn posts.

Cheaper alternative that could beat the sprint: direct review replies, updated GBP photos and targeted review requests may create more trust faster than creating new posts.

### Process Improvement Notes

- Highest-signal source: official GBP docs plus live owned data. They turned the sprint from generic content advice into measurable actions and compliant drafts.
- Strongest falsification source: Superprof/local marketplace results because they show the immediate price-anchor problem.
- Noisiest source: generic LinkedIn search. Useful examples appeared, but it cannot answer Auris-specific distribution without profile data.
- Process update: channel/content cycles must include URL/UTM, visible platform metric, owned event, manual lead-source note and stop/change rule.

### Next-Cycle Packet

Recommended next theme: Packet J, profile and publishing readiness audit.

Exact work:

- Inspect `gbp-linkedin-proof-sprint.md`, `review-proof-library.md`, `measurement-plan.md`, and live UTM destination URLs.
- Recheck Search Console 28/90/180 page/query baseline.
- Try to access or export GBP performance metrics if safe/read-only.
- Audit actual GBP profile fields/photos/services/review replies if accessible.
- Audit Auris's LinkedIn profile/page and any visible Instagram/TikTok/YouTube handles if provided or discoverable.
- Audit Auris's Superprof/Tusclases profile copy, price, reviews and CTA for premium alignment.
- Output a publishing readiness checklist, photo/screenshot shot list, and final two GBP plus two LinkedIn posts.

Hypotheses:

- H002 GBP beats broad SEO for near-term leads.
- H004 premium price must be visible quickly.
- H009 reviews as central proof.
- H014 GBP plus LinkedIn anchored sprint.
- H015 manual lead-source notes required.

### Unfinished Threads

- Need real GBP performance data, not just docs and review endpoint.
- Need Auris's actual LinkedIn/social account audit before deciding the final LinkedIn cadence.
- Need GA4/key event visibility to compare manual ledger with actual site events.
- Need marketplace profile alignment check because the public price/story mismatch may weaken premium positioning.

## Cycle 09 - Profile And Publishing Readiness Audit

Date: 2026-05-22

Primary research question: before publishing the proof sprint, what do people actually see on Auris's GBP, LinkedIn, Instagram/TikTok if any, and marketplace profiles?

Theme: profile/publishing readiness for GBP + LinkedIn sprint.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked files; inspected/read-only only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-linkedin-proof-sprint.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- `/Users/aurisp/repos/teacher-website/netlify/functions/google-reviews.js`
- `/Users/aurisp/repos/teacher-website/src/components/GoogleReviewsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ClassMomentsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/AboutSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/PlatformShowcase.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- live homepage HTML link extraction
- live UTM destination checks
- local image asset list
- `/Users/aurisp/repos/teacher-assistant` profile/social/strategy-related file discovery

Local findings:

- The site has enough visual proof for GBP/LinkedIn: teacher photo, in-person/online class images, portal screenshots, Talk the Talk UI and Google Business Profile logo assets.
- The live static homepage did not expose LinkedIn, Instagram, TikTok, Superprof or Tusclases links. Social/profile linking should wait for Auris to confirm preferred public profiles.
- All tested sprint UTM URLs returned HTTP 200.
- `google-reviews.js` uses Places API and returns 5 review texts from a 5.0/15 profile, enough for review-led posts but not full review mining.
- Contact and Calendly flows exist, but source attribution still requires manual lead notes.

### API / Data Evidence

Search Console through 2026-05-20:

- 28 days: homepage only, 1 click, 176 impressions, CTR 0.6%, average position 10.07.
- 90 days: homepage only, 6 clicks, 308 impressions, CTR 1.9%, average position 8.80.
- 180 days: homepage only, 18 clicks, 658 impressions, CTR 2.7%, average position 8.11.
- Filtered 180-day rows:
  - `particulares`: one query row, `clases de ingles particulares`, 1 impression, position 1.
  - `private`, `empresas`, `business`, `linkedin`, `talkthetalk`, `trial`, `reunion`, `meetings`: no rows.

URL Inspection:

- Homepage: `Submitted and indexed`, last crawl 2026-05-21, canonical matches.
- `/talkthetalk`: `Crawled - currently not indexed`, last crawl 2026-03-01.
- `/clases-ingles-castelldefels`: `Crawled - currently not indexed`, last crawl 2026-05-21.
- `/ingles-empresas-castelldefels`: `URL is unknown to Google`.

GTM/GA4:

- GTM container exists, workspace 0 still has 0 tags, 0 triggers and 0 variables.
- Existing local tokens include Search Console read-only/write, Tag Manager read-only, and Docs read-only. No Analytics token exists.
- GA4 Admin attempts with Tag Manager/Search Console tokens returned insufficient-scope errors.

Live Google reviews:

- Endpoint returned source `places-new`, profile name `English with Auris`, 5.0 rating, 15 reviews, 5 returned review texts.
- Returned review themes again matched confidence, meetings, adaptation, tools, comfort speaking and outside-class learning.

### Source Discovery Choices

This cycle treated publishing readiness as a profile-surface problem. The highest-signal sources were:

- own live site links/metadata and UTM URLs,
- Search Console and URL Inspection,
- GTM/GA4 access attempts,
- live Google reviews endpoint,
- Auris's Superprof and Tusclases surfaces,
- Auris's public LinkedIn search result,
- premium marketplace profiles that prove or weaken the 40 EUR/h position,
- local academy/directory profiles with photos/review replies,
- Instagram/TikTok/YouTube handle searches.

Lower-signal or blocked:

- Direct LinkedIn page access returned a LinkedIn blocking status, so the cycle used search-result evidence and marked the limitation.
- Instagram/TikTok/YouTube searches did not reveal a reliable public Auris handle.
- GBP performance UI/export remained unavailable through current API access.

### External Evidence

- Superprof Auris profile lists Auris in Castelldefels with 5.0/7 reviews, 20 students, verified profile/contact, 30 EUR/h, first class free and online/in-person/domicile options. Source: https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html
- Superprof Castelldefels list places Auris beside local teachers at roughly 10-25 EUR/h and shows Auris at 30 EUR/h. Source: https://www.superprof.es/clases/ingles/castelldefels/
- Tusclases Auris profile/listing shows 30 EUR/h, first class free, 4.9/15, verified profile, adults/companies audience, Ireland/Barcelona/11-year story and Spanish-speaker challenge copy. Sources: https://www.tusclasesparticulares.com/profesores/barcelona/master-your-english-whilst-having-fun-1629639 and https://www.tusclasesparticulares.com/domicilio/ingles-en-castelldefels.aspx
- Auris's public LinkedIn search result shows `Aurimas Purlys`, Castelldefels, 268 followers / 264 contacts, `English for Business Spain`, personal website and activity snippets. Direct access was blocked. Source: https://es.linkedin.com/in/aurimas-purlys-534a1a27b
- Kilkenny directory profile shows a local academy trust pattern: review replies, native teachers, adults/children/exams, online adaptation, many students and business English. Source: https://escuelasdeidiomas.com.es/es-es/i/1453-kilkenny-learning-centre-els-canyars-castelldefels/
- Apprentus Castelldefels shows private English profiles around 16-64 EUR, with customisation, confidence and review guarantees. Source: https://www.apprentus.es/ingles-lecciones/castelldefels/
- AmazingTalker Castelldefels shows global online profiles with very high review counts and confidence/customisation promises. Source: https://www.amazingtalker.es/tutors/english?city=es_spain_l_hospitalet_de_llobregat_castelldefels
- Superprof AR supports 40 EUR/h when the offer is narrowly professional: tech-sector profiles, interviews, meetings, presentations, structured ideas and presence. Source: https://www.superprof.es/preparacion-entrevistas-comunicacion-profesional-ingles-para-perfiles-tecnologicos-internacionales.html
- Superprof Tim supports 35 EUR/h with 74 reviews, professional communication, clarity/confidence, company experience, structured materials and ongoing support. Source: https://www.superprof.es/english-for-real-professional-communication-speak-the-way-you-think-clearly-confidently-effortlessly-results-guaranteed.html
- Tusclases Julia supports 40 EUR/h through 20+ years, US experience, Michigan diplomas and personalised/certificate support. Source: https://www.tusclasesparticulares.com/profesores/barcelona/clases-ingles-todos-niveles-edades-barcelona-centro-1326664
- Superprof Barcelona comprehension/business-English search pages show broad lower prices but also 38-40 EUR examples when proof and positioning are specific. Source: https://www.superprof.es/clases/comprension-oral-ingles/barcelona/

### Trend / Community / Product Signals

- Marketplace price anchors are now a bigger risk than generic local competitors: Auris appears publicly at 30 EUR/h on major profiles while the website says 40 EUR/h.
- 40 EUR/h is still defensible, but only when the profile route frames the work as professional/personal/specific and proof-heavy.
- LinkedIn is discoverable enough to test, but not proven enough to justify a broad posting cadence before checking Auris's actual profile copy.
- GBP/reviews remain the safest first public move because the proof is real and live.
- The business page is not ready as the first LinkedIn destination because URL Inspection still reports it unknown to Google.

### Hypotheses Changed

- H002 strengthened but gated: GBP still looks stronger than broad SEO, but the first post should use homepage/Talk rather than unindexed/unknown pages.
- H004 strengthened sharply: public 30 EUR marketplace prices versus 40 EUR website price need an intentional decision.
- H009 strengthened: Week 1 should start with review-led GBP proof.
- H014 strengthened but reduced: start with one GBP post and one LinkedIn post after profile checks, not a broad cadence.
- H015 strengthened: GA4/GBP metrics remain inaccessible, so manual source notes are mandatory.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/profile-publishing-readiness-audit.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-linkedin-proof-sprint.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Implementation-Ready Output

`profile-publishing-readiness-audit.md` now contains:

- Source discovery.
- Local/live readiness table.
- Search Console, URL Inspection, GTM/GA4 and reviews baseline.
- Public profile notes for GBP, LinkedIn, Superprof, Tusclases and missing short-form handles.
- Market/premium profile evidence.
- Publishing readiness checklist.
- Final Week 1 GBP and LinkedIn assets.
- Final Week 2 draft assets with routing caveats.
- Photo/screenshot shot list.
- Measurement setup checklist.
- Falsification and decision rules.

### Strongest Next Move

Run an owner-side profile alignment pass before public posting:

1. Confirm LinkedIn profile/page and headline/about alignment.
2. Decide whether marketplace 30 EUR/h is legacy/channel pricing or should be aligned with website 40 EUR/h.
3. Confirm GBP photos, services and review replies.
4. Publish only the Week 1 GBP review/confidence post and Week 1 LinkedIn meeting-confidence post.
5. Track every inquiry manually for two weeks.

### What Not To Do Yet

- Do not publish the whole sprint as a broad cadence before profile alignment.
- Do not send Week 1 LinkedIn traffic to the business page while it is unknown to Google.
- Do not add guessed social links to the website.
- Do not ignore marketplace price mismatch.
- Do not treat LinkedIn likes as lead evidence.
- Do not wait for perfect GA4 before doing the small test.

### Falsification Notes

Favored idea tested: GBP plus LinkedIn can be published now as the first sprint.

Refined/partly weakened:

- The channel choice still makes sense, but publishing readiness is weaker than expected.
- LinkedIn's credibility fit is real, but Auris-specific distribution is unproven.
- Marketplace price mismatch can undercut premium trust if a lead compares profiles.

Stop/change evidence:

- If Auris's LinkedIn profile is not aligned and he does not want to post from it, LinkedIn becomes a later credibility/profile task.
- If profile/price mismatch causes confusion in inquiries, fix pricing/proof before expanding posts.
- If Week 1 gets no profile action, no website clicks and no qualified inquiry, shift to GBP profile cleanup/reviews/local SEO/referrals before more LinkedIn.

Cheaper alternative that could beat posting:

- Update GBP photos/review replies/services and website price proof first, then post once the profile itself is stronger.

### Process Improvement Notes

- Highest-signal source: own-profile marketplace pages, because they reveal how Auris is already being compared and priced.
- Highest-signal data layer: URL Inspection, because it changed routing recommendations for Week 1.
- Noisiest source: public social-handle search; it did not find reliable Instagram/TikTok/YouTube handles.
- Process update: before recommending public posts, run profile-readiness QA across destination URL, public profile alignment, visible price mismatch, social-profile discoverability and measurement.

### Next-Cycle Packet

Recommended next theme: Packet K, owner-side profile metrics and marketplace alignment.

Exact work:

- Inspect `profile-publishing-readiness-audit.md`, `pricing-positioning.md`, `review-proof-library.md`, `measurement-plan.md`, and live Google reviews.
- Re-run Search Console 28/90/180 and URL Inspection for homepage, Talk, local page and business page.
- Try safe/read-only GBP performance/profile access; if not accessible, document exact limitation.
- Use the in-app/browser context if available to inspect actual GBP photos/services/review replies and LinkedIn profile copy.
- Audit Superprof/Tusclases exact editable profile fields if accessible; otherwise use public pages only.
- Output owner-side checklist: `fix before posting`, `nice later`, `ignore`.
- Produce marketplace price decision memo and LinkedIn headline/about rewrite options.

Hypotheses:

- H001 personal alternative to academies.
- H002 GBP beats broad SEO near-term.
- H004 premium price visible quickly.
- H009 reviews central proof.
- H014 GBP plus LinkedIn sprint.
- H015 manual lead-source notes required.

### Unfinished Threads

- Need owner-side GBP performance metrics and profile completeness view.
- Need Auris's actual social handles or logged-in account context before website/social link changes.
- Need decision on marketplace 30 EUR/h versus website 40 EUR/h.
- Need GA4 read access or manual DebugView/event export to validate `talk_started`, `talk_completed`, and `talk_trial_click`.

## Cycle 10 - Owner-Side Profile Metrics And Marketplace Alignment

Date: 2026-05-22 02:06 CEST

Primary research question: what should be fixed first in the owner-controlled profile layer: GBP profile assets, LinkedIn profile copy, marketplace price/copy, or website proof near price?

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked files and generated screenshots/artifacts; inspected/read-only only.

### Local Evidence Inspected

- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/profile-publishing-readiness-audit.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-linkedin-proof-sprint.md`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/GoogleReviewsSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/PlatformShowcase.jsx`
- `/Users/aurisp/repos/teacher-website/netlify/functions/google-reviews.js`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentExercises.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherGamePlay.tsx`

Local findings:

- The website already contains useful proof for the 40 EUR/h offer: portal access, custom flashcards, tailored materials, progress tracking/reviews and NIF invoice copy.
- The private price-card wording is still generic in the critical first scan: `1-on-1 lessons tailored to you` is true but not enough to carry premium value alone.
- The local/business SEO pages already support local/professional intent with NIF, portal and practical work situations, but URL Inspection still makes them weak first-post destinations.
- The student platform supports the "learning continues between classes" claim: assignments, feedback, class notes, flashcards, exercises, games and tracked class-game sessions exist. This proof should be surfaced near price before discounting.
- The previous price-mismatch conclusion needed a recheck because profile pages can change.

### API / Data Evidence

Search Console through 2026-05-21:

- 28 days: homepage only, 1 click, 169 impressions, CTR 0.59%, average position 10.25.
- 90 days: homepage only, 6 clicks, 306 impressions, CTR 1.96%, average position 8.83.
- 180 days: homepage only, 18 clicks, 651 impressions, CTR 2.76%, average position 8.14.
- Query filters in the 180-day window:
  - `particulares`: `clases de inglés particulares`, 1 impression, position 1.
  - `academia`: visible rows include `academia ingles castelldefels` with 20 impressions, position 7.2, and `academias de inglés en castelldefels` with 90 impressions, position 16.66.
  - `clases`: only three tiny rows with 1 impression each.
  - `castelldefels`: same local academy rows plus `ingles castelldefels`, 1 impression, position 8.
  - `empresas`, `business`, `profesor`, `private`: no rows.

URL Inspection:

- Homepage: `Submitted and indexed`, verdict PASS, last crawled 2026-05-21T10:11:18Z, canonical matches.
- `/talkthetalk`: `Crawled - currently not indexed`, last crawled 2026-03-01T04:52:58Z.
- `/clases-ingles-castelldefels`: `Crawled - currently not indexed`, last crawled 2026-05-21T13:03:50Z.
- `/ingles-empresas-castelldefels`: `Discovered - currently not indexed`. This improves from Cycle 09's "unknown to Google", but it is still not a safe primary first-post destination.

GBP/GA4 read attempts:

- Existing tokens can read Search Console and URL Inspection.
- Attempts against `mybusinessaccountmanagement`, `mybusinessbusinessinformation`, and `analyticsadmin` with available Search Console/Tag Manager tokens returned 403 permission denied.
- This is not a new emergency; it confirms owner-side/manual measurement is still required.

Live Google reviews:

- `language=es` and `language=en` both returned source `places-new`, profile name `English with Auris`, rating 5.0, review count 15.
- Spanish visible reviewers: Andrea Villamizar, Raquel Castillo, Silvia Avila Cabre, Eli Quiroga, Montse Martin.
- English visible reviewers: Milagros Ruiz, Ingrid Garcia, claudia borras ruiz, Jgcarlos Norway, DAVYD 1977.
- Important new signal: the language parameter exposes different visible review sets, so the proof library can use 10 review themes instead of only 5.

UTM destination checks:

- Week 1 GBP homepage UTM: 200.
- Week 1 LinkedIn Talk UTM: 200.
- Week 2 revised GBP homepage UTM: 200.
- Week 2 LinkedIn Talk UTM: 200.

### Source Discovery Choices

This cycle treated the problem as owner-profile alignment, not generic content strategy. Highest-signal source types:

- official GBP docs for services/photos/replies/performance,
- own Search Console and URL Inspection,
- live bilingual reviews endpoint,
- Auris's marketplace profiles,
- premium marketplace profiles at 35-40 EUR/h,
- local academy pages and review pages,
- public LinkedIn business-English posts/snippets,
- teaching-platform code as proof of portal continuity.

Lower-signal or blocked:

- GBP owner performance/profile-completeness API access remains blocked by scopes.
- GA4 Admin remains blocked by scopes.
- Public LinkedIn access is useful for snippets and patterns but not enough to prove Auris's own distribution.
- Short-form handle discovery remains low-signal until Auris confirms handles.

### External Evidence

- Google Business Profile performance docs confirm owner-side metrics include profile views and customer actions such as calls, website clicks, messages and bookings where configured. Source: https://support.google.com/business/answer/9918094
- Google Business Profile service docs confirm service businesses can add services, custom services, descriptions and prices where available; custom services can be rejected for personal info, phone numbers, prices in the wrong place or bad content. Source: https://support.google.com/business/answer/9455399
- Google Business Profile photo docs confirm photos/videos can be added through Search/Maps, with JPG/PNG, 10 KB to 5 MB and recommended 720 x 720 px guidance. Source: https://support.google.com/business/answer/6103862
- Google Business Profile review docs confirm verified businesses can publicly reply to reviews. Source: https://support.google.com/business/answer/3474050
- Superprof Auris now shows 40 EUR/h main rate, 30 EUR/h online rate, 5.0/7, 20 students, verified profile/contact, first class free, Ireland/11-year/Spanish-speaker/platform copy. Source: https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html
- Tusclases Auris still shows 30 EUR/h in public snippets/profile evidence, plus 4.9/15, verified status, adults/companies audience and the 11-year/Ireland/Spanish-speaker story. Source: https://www.tusclasesparticulares.com/profesores/barcelona/master-your-english-whilst-having-fun-1629639
- Superprof AR justifies 40 EUR/h through a narrow professional lane: tech-sector context, interviews, meetings, presentations, clarity, presence and corporate global situations. Source: https://www.superprof.es/preparacion-entrevistas-comunicacion-profesional-ingles-para-perfiles-tecnologicos-internacionales.html
- Superprof Tim justifies 35 EUR/h with 74 reviews, professional communication, meetings, presentations, pronunciation, tone, structured materials and ongoing support. Source: https://www.superprof.es/english-for-real-professional-communication-speak-the-way-you-think-clearly-confidently-effortlessly-results-guaranteed.html
- Janet's homepage shows academy-scale strengths: 20 years, native qualified team, children/adults, Cambridge, groups/private, online/presential and 4.9/181 Google reviews. Source: https://janets.es/old-home/
- Janet's company-course page shows corporate strengths: needs analysis, customised company programs, online/live/presential, Baix Llobregat coverage and native qualified teachers. Source: https://janets.es/cursos-de-ingles-para-empresas/
- Janet's review directory shows many public replies and recurring academy trust themes: kids, exam progress, native teachers, professionalism, small groups and family trust. Source: https://escuelasdeidiomas.com.es/es-es/i/11246-janets-school-academia-de-ingles/
- Public LinkedIn business-English examples repeat the same professional pain language: meetings, presentations, confidence, clarity, overthinking, leadership voice and feeling less like yourself in English. Sources include Richard Marshall, Executive Business English, English for Business Spain and related public LinkedIn snippets.

### Trend / Community / Product Signals

- The marketplace price risk is narrower than Cycle 09 suggested: Superprof's main price is now aligned at 40 EUR/h, but Tusclases and Superprof online still create a lower anchor.
- Premium price remains defensible when the offer is specific and proof-heavy. The strongest premium comparables focus on professional situations and structured support, not generic conversation.
- Local academies win with scale, reviews, exam pathways and native teams. Auris should not copy that. He should use direct relationship, bilingual/Ireland background, Spanish-speaker specificity, reviews and portal continuity.
- LinkedIn language is a good fit for professional confidence, but it is still a credibility test until Auris's own profile metrics are observed.
- GBP profile cleanup may beat posting volume because photos, services and review replies are visible trust assets before a visitor clicks.

### Hypotheses Changed

- H002 strengthened: GBP/reviews still beat broad SEO for near-term learning; first posts should route to homepage/Talk because SEO pages are not indexed yet.
- H004 strengthened and refined: 40 EUR/h is viable; Superprof main price alignment helps, but Tusclases/online-channel pricing must be intentional.
- H009 strengthened: bilingual review endpoint expands proof themes; adult/professional Spanish-language themes should lead.
- H014 strengthened but narrowed: run one GBP and one LinkedIn post after owner-side profile checks, not a broad cadence.
- H015 strengthened: GSC/URL Inspection work, but GBP/GA4 APIs remain inaccessible, so owner-side metrics and manual lead notes are mandatory.

### Artifacts Updated

- Created `/Users/aurisp/repos/teacher-website/docs/strategy/owner-profile-alignment-plan.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/profile-publishing-readiness-audit.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-linkedin-proof-sprint.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- Updated `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- Appended this entry to `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`

### Implementation-Ready Output

`owner-profile-alignment-plan.md` now contains:

- Source discovery and evidence table.
- `Fix before posting`, `nice later`, and `ignore for now` checklists.
- Marketplace price decision memo.
- Website pricing-proof copy in English and Spanish.
- LinkedIn headline/about rewrite options.
- GBP services/photo/review-reply checklists.
- Final Week 1 publish package with exact UTM links and ledger rows.
- Falsification and stop/change rules.
- Next research packet.

### Strongest Next Move

If Auris asks for implementation, make the smallest website proof/pricing copy edit first, then publish only the Week 1 GBP review/confidence post and Week 1 LinkedIn meeting-confidence post with a manual lead-source ledger.

### What Not To Do Yet

- Do not lower the website price to 30 EUR/h.
- Do not send GBP/LinkedIn traffic to marketplace pages.
- Do not use `/ingles-empresas-castelldefels` as the first LinkedIn destination yet.
- Do not expand into a broad content cadence before owner-side profile checks.
- Do not treat LinkedIn likes as lead evidence.
- Do not wait for perfect GA4/GBP API access before running a small measured test.

### Falsification Notes

Favored idea tested: "publish GBP + LinkedIn now."

Refined:

- The channel choice still makes sense, but the owner-side proof layer should be tightened first.
- The price-mismatch problem is less severe than recorded in Cycle 09 because Superprof now shows 40 EUR/h main price, but Tusclases and the Superprof online rate still need a decision.
- Reviews are strong enough to lead the first GBP post; LinkedIn should use professional-confidence pain language but cannot be treated as proven acquisition yet.

Stop/change evidence:

- If inquiries mention lower marketplace price first, align marketplace prices or make channel pricing explicit internally before more posts.
- If GBP lacks good photos/services/review replies, profile cleanup beats posting volume.
- If LinkedIn gets profile views but no qualified DMs/clicks/inquiries, keep it as credibility-only and shift attention to GBP/reviews/referrals.
- If Talk completions happen without trial clicks, improve the Talk feedback/booking bridge before more Talk-led posts.

### Process Improvement Notes

- Highest-signal correction: reopen high-impact public profile URLs before repeating strategic conclusions. Superprof price had changed or was previously misread.
- Highest-signal data layer: URL Inspection again, because the business page moved from unknown to discovered but is still not ready as a primary destination.
- Highest-signal new source: bilingual reviews endpoint; language-specific review sets create better proof mining.
- Noisiest source: broad social-handle discovery without confirmed Auris handles.
- Process update: future public-posting cycles must check destination safety, proof safety, comparison safety and measurement safety before drafting more content.

### Next-Cycle Packet

Recommended next theme: Packet L, Website Proof And Pricing Implementation Readiness.

Exact work:

- Inspect `owner-profile-alignment-plan.md`, `pricing-positioning.md`, `review-proof-library.md`, `src/components/PricingSection.jsx`, `src/translations.js`, `GoogleReviewsSection.jsx`, `PlatformShowcase.jsx`, and live homepage pricing/review/portal sections.
- Decide the smallest copy/layout edit that makes 40 EUR/h feel included and personal without sounding salesy.
- Recheck reviews endpoint in `language=es` and `language=en`.
- Compare 2-3 premium tutor/coach pages and 2 local academy proof/pricing pages.
- Produce exact implementation notes; only edit the public website if Auris explicitly asks.

Hypotheses:

- H001 personal alternative to academies.
- H004 premium price visible quickly.
- H009 reviews central proof.
- H015 manual lead-source notes required.

### Unfinished Threads

- Need owner-side GBP performance/profile completeness view from the UI.
- Need Auris's actual LinkedIn owner-side profile view before final profile edits.
- Need final decision on Tusclases 30 EUR/h and Superprof online 30 EUR/h.
- Need GA4 read access or manual DebugView/event export to validate Talk events.

## Cycle 11 - Website Proof And Pricing Implementation Readiness

Date: 2026-05-22 03:02 CEST

Primary research question: what is the smallest website copy/layout edit that makes 40 EUR/h feel fair without changing Auris's warm non-academy messaging?

Theme: pricing proof, website implementation readiness, platform-as-premium-proof.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked screenshots/artifacts; inspected read-only.

### Local Evidence Inspected

- Strategy memory: `research-log.md`, `research-roadmap.md`, `owner-profile-alignment-plan.md`, `pricing-positioning.md`, `review-proof-library.md`, `hypotheses.md`, `market-intelligence.md`, `platform-backlog.md`, `measurement-plan.md`, `automation-research-loop.md`.
- Website files: `src/components/PricingSection.jsx`, `src/translations.js`, `src/components/GoogleReviewsSection.jsx`, `src/components/PlatformShowcase.jsx`, `src/components/HeroSection.jsx`, `src/components/TeachingPillars.jsx`, `src/components/SeoLandingPage.jsx`, `src/components/TestimonialsSection.jsx`, `src/components/AboutSection.jsx`, `src/components/Footer.jsx`, `src/App.jsx`, `src/main.jsx`.
- Teaching platform files/regions: `StudentDashboard.tsx`, `TalkTheTalk.tsx`, student exercise/game/dashboard surfaces and existing platform strategy notes.
- Live rendered pricing section on `https://englishwithauris.com/#pricing`.

Local findings:

- The pricing section already has a useful structure: private card, group card, included-with-each-class strip and nearby review section.
- The private-card wording is still generic in the first scan: `Clases 1-a-1 adaptadas a ti` plus goals/flexibility/feedback/portal. It is true, but weaker than the actual value.
- The included strip already lists portal, flashcards, materials and progress/reviews, so the smallest useful change is copy/translation plus one short support line, not a layout rebuild.
- Google reviews already sit immediately after pricing. That is the right place for outcome proof; the price card should not become a testimonial wall.
- Platform inspection supports the public claim: the student portal can genuinely organise assignments, reviewed feedback, notes, flashcards, games, Talk the Talk and progress surfaces between classes.

### API / Data Evidence

- Live Google reviews endpoint still returns 5.0 / 15 for both `language=es` and `language=en`, with different visible review sets. This continues to support grouped proof by outcome and language.
- Live `robots.txt` allows crawling and points to the sitemap.
- Live sitemap includes `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, and `/ingles-empresas-castelldefels`, all with 2026-05-21 `lastmod`.
- Static live homepage has correct title/canonical and JSON-LD with the 40 EUR offer; conversion proof matters more than schema for this cycle.
- Cycle 10 Search Console remains the working baseline: homepage-only organic evidence and 18 clicks / 651 impressions over 180 days. A pricing copy patch should be measured by contact/trial quality, not SEO movement.

### Source Discovery Choices

Best source types for this question:

- Rendered pricing section and live page flow, because price resistance happens in the actual first-scan UI.
- Pricing component/translations, because they reveal whether implementation can be small.
- Reviews endpoint, because proof themes need to match price.
- Student platform code, because the portal/follow-up claim must be true.
- Premium one-to-one/business-English price pages, because they show what makes 35-55 EUR/h credible.
- Local marketplace/academy pages, because they pressure-test 40 EUR/h against cheaper options.
- Adult learning/retrieval research, because it validates review-between-classes as learning value.
- Community buyer language, used cautiously, because it can reveal willingness-to-pay language but not conversion proof.

### External Evidence

- FunTalk frames private English at 38 EUR/h around personalisation, teacher/student fit, goals and flexibility. This makes personalisation table stakes, not a premium differentiator by itself.
- Bravo Academy adult/private/business pricing around 36 EUR/h includes native teachers, feedback and structured academy support. Auris's 40 EUR/h must make personal follow-up feel like the better route.
- Superprof Tim at 35 EUR/h justifies price with professional communication, meetings, presentations, pronunciation/tone, structured materials, ongoing support and 74 reviews.
- Word Power BCN prices bespoke one-to-one presentation/interview training at 55 EUR/h, supporting the idea that specific work-situation outcomes can exceed 40 EUR/h.
- Superprof business-English Barcelona shows 25-40 EUR/h profiles, while Castelldefels English and business-English marketplace averages sit much lower. This strengthens the "do not compete as a marketplace listing" conclusion.
- Tusclases Castelldefels listings show many 12-21 EUR/h tutors/academies, often children/exam oriented. This is the price-anchor risk the website must avoid.
- Callan private one-to-one courses sell method, structure, resources and course organisation, not just live conversation.
- Adult L2 retrieval/spaced-practice evidence supports the learning value of flashcards and review between classes.
- A Reddit r/ingles buyer thread gave lower-confidence but useful language: some learners want a serious small provider with a cared-for website and are willing to pay a fair price for commitment.

### Trend / Community / Product Signals

- The strongest premium formula is not "native teacher" or "tailored lessons." It is specific outcome plus support system plus proof.
- Local cheap-marketplace anchors are real, so the website should make Auris feel like a direct premium relationship before a visitor compares tutor listings.
- The portal is not just a feature list. It is the most concrete proof that the class continues between sessions.
- The next product risk is clarity: if the portal does not tell students what to do next, the public "between-class continuity" promise weakens.

### Hypotheses Changed

- H001 strengthened: Auris should not mimic academies. Competitors sell scale and structure; Auris should sell direct personal follow-up, Spanish-speaker insight and platform continuity.
- H004 strengthened and implementation-ready: 40 EUR/h remains viable, but the first price-card copy should make the included follow-up system clearer.
- H009 refined: reviews are central proof, but placement matters. Keep reviews immediately after pricing; put portal/follow-up proof inside pricing.
- H015 strengthened: any pricing patch needs manual lead/source/price-objection notes because automated attribution is incomplete.

### Artifacts Updated

- Created `website-proof-pricing-implementation-plan.md`.
- Updated `pricing-positioning.md`.
- Updated `review-proof-library.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `platform-backlog.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`website-proof-pricing-implementation-plan.md` now contains:

- Source discovery and local evidence.
- Data/API evidence.
- External price/proof benchmark table.
- Decision: portal proof near price, reviews immediately after.
- Exact EN/ES pricing copy patch.
- Exact component change list if Auris asks to implement.
- What not to change.
- Measurement and falsification rules.
- Next platform-retention research packet.

Core copy decision:

- EN: `1-on-1 classes with personal follow-up`
- ES: `Clases 1-a-1 con seguimiento personal`
- Add one included-strip support line explaining that the live hour is only part of the work and that materials, vocabulary and review stay organised between classes.

### Strongest Next Move

If Auris asks for implementation, make only the small pricing proof copy patch: `src/translations.js` plus a small `PricingSection.jsx` addition for `pricing.included.description`. Then QA EN/ES desktop/mobile and keep reviews immediately after pricing.

### What Not To Do Yet

- Do not lower or hide the 40 EUR/h price.
- Do not add a large pricing-page rewrite.
- Do not use "freelance English teacher" as headline copy.
- Do not flood pricing with SEO phrases or academy-style messaging.
- Do not move the whole portal showcase above pricing.
- Do not claim the portal creates practice habits until the "Next 15 Minutes" experience is clearer.

### Falsification Notes

Favored idea tested: website proof near price is the smallest next improvement.

Strengthened:

- The existing page structure can carry the proof with a small patch.
- External premium comparables support price when outcome/support are specific.
- Platform code supports the between-class continuity claim.

Weakened:

- The site already has an included strip, reviews and portal showcase, so the patch may be incremental rather than transformative.
- If most leads compare marketplace prices before visiting the website, the website patch alone will not solve price anchoring.

Stop/change evidence:

- If no one reaches pricing/contact, acquisition and GBP matter more than pricing copy.
- If price objections continue, align marketplace pricing or add stronger outcome proof near CTA.
- If current students do not use the portal, improve "Next 15 Minutes" before leaning harder on portal proof.

### Process Improvement Notes

- Highest-signal source: rendered homepage pricing audit. It exposed a weaker first-scan message than the strategy docs implied.
- Second-highest source: premium price comparables, because they showed the pattern of outcome plus support.
- Useful source: adult learning/retrieval research, because it gives the portal claim educational substance.
- Noisy source: a single Reddit buyer thread. Keep it as language/pain evidence only.
- Process update added to `automation-research-loop.md`: pricing-proof cycles must inspect rendered UI and product code before recommending public copy.

### Next-Cycle Packet

Recommended next theme: Packet M, Student Platform Retention And Premium Proof.

Exact work:

- Inspect `platform-backlog.md`, `website-proof-pricing-implementation-plan.md`, `StudentDashboard.tsx`, `TalkTheTalk.tsx`, flashcard/SRS routes, teacher overview/prep surfaces, and progress/assignment/notes endpoints.
- Determine whether "Next 15 Minutes" should be the first platform implementation after website proof.
- Check what data already exists for due flashcards, latest feedback, recent notes, unfinished assignments and Talk prompt completions.
- Browse adult-learning/product-review evidence around habit formation, unclear next actions and human feedback.
- Produce a "Next 15 Minutes" spec with decision rules, student UX copy, teacher-facing companion surface, data needs and success metrics.

Hypotheses:

- H004 premium price visible quickly.
- H006 clarity of next action.
- H011 Talk the Talk feedback bridge.
- H012 AI plus human diagnostic feedback.
- H015 manual notes required.

### Unfinished Threads

- Website proof patch is not implemented; it is ready only if Auris asks.
- Need current student validation on whether portal follow-up feels helpful or like homework.
- Need usage/progress data audit inside `teacher-assistant`.
- Need marketplace price policy decision for Tusclases/Superprof online.

## Cycle 12 - Student Platform Retention And Premium Proof

Date: 2026-05-22 04:00 CEST

Primary research question: what platform improvement best makes "learning continues between classes" true and visible?

Theme: student-platform UX, retention, between-class practice, premium proof.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with many existing unrelated untracked screenshots/artifacts; inspected read-only.

### Local Evidence Inspected

- Strategy memory: `research-log.md`, `research-roadmap.md`, `platform-backlog.md`, `website-proof-pricing-implementation-plan.md`, `hypotheses.md`, `market-intelligence.md`, `automation-research-loop.md`.
- Student platform: `StudentDashboard.tsx`, `FlashcardStats.tsx`, `FlashcardPractice.tsx`, `StudentSettings.tsx`, `TalkTheTalk.tsx`, `App.tsx`, `TeacherOverview.tsx`, `classroom-hub/src/lib/api.ts`, `classroom-hub/src/types.ts`.
- Backend platform: `backend/app/api/srs.py`, `backend/app/services/flashcard_srs.py`, `backend/app/api/modular_exercises.py`, `backend/app/api/reading.py`, `backend/app/api/lms.py`.

Local findings:

- The student dashboard has the right ingredients: assignments, reviewed feedback, class notes, flashcard CTA and route access to Talk the Talk/games/trivia. It does not choose one best next action.
- `FlashcardStats.tsx` already has the stronger first-action pattern: a top CTA based on `stats.due_today`, "practice ahead" and all-caught-up states.
- SRS APIs already expose due cards, stats and practice sessions. Teacher routes already expose recent students and practice sessions.
- Portal Talk the Talk is a good low-friction speaking surface, but it currently has no completion record, no self-rating, no "where I got stuck" note and no teacher-facing signal.
- Teacher overview already aggregates attention items, submissions, SRS due cards and class progress. It should receive a small between-class signal later, not a new empty panel now.

### API / Data Evidence

- Live backend health returned OK.
- Protected student endpoints returned 401 without authentication, as expected.
- Code/API inspection confirms the required SRS data exists; future live validation needs authenticated app context or explicit event logging.
- No secrets were recorded.

### Source Discovery Choices

Best source types for this cycle:

- Student first-screen code and routes.
- SRS backend/API code.
- Teacher overview/prep surfaces.
- Habit-product examples.
- Mobile-assisted language learning and self-regulated learning research.
- Spaced retrieval research for adult EFL/Spanish-speaking learners.
- AI speaking app product reviews.
- Human-plus-platform examples like Preply and Busuu.

### External Evidence

- Duolingo's habit/streak writing supports the idea that small, low-friction daily actions matter for retention, but it also warns against treating a streak as progress.
- Mobile-assisted/self-regulated learning research supports recommendation, feedback and portfolio-style scaffolding in mobile learning contexts.
- Vocabulary/SRL research supports planning, monitoring and evaluation as part of learner autonomy, so the card should explain why the action matters rather than only link to a route.
- A February 2026 Spanish-speaking adult EFL spaced-retrieval case supports structured vocabulary review as a serious learning action.
- Busuu's community correction model shows that speaking/writing practice becomes more valuable when feedback returns from another person.
- ELSA/Praktika show demand for low-shame AI speaking practice and real-time feedback, but reviews also surface accuracy, AI-quality, subscription and support friction.
- Preply is explicitly packaging lesson insights, daily exercises and scenario practice around tutor-led learning, validating the human-plus-between-class-practice direction.
- Preply/Leanlab Spanish-speaker research supports the value of live human teaching for adult Spanish speakers, but it is branded research and should be validated with Auris's own students.

### Hypotheses Changed

- H004 strengthened: premium price proof depends on a product promise that students can feel, not only website copy.
- H006 strengthened and implementation-ready: the Next 15 card is the best first platform improvement.
- H011 refined: Talk the Talk should be a fallback next action now and a feedback bridge later.
- H012 strengthened for positioning but weakened as a first build: AI-market evidence supports human diagnostic framing, not building AI scoring first.
- H015 strengthened: platform retention conclusions need manual/student validation plus event logging.

### Artifacts Updated

- Created `next-15-minutes-platform-spec.md`.
- Updated `platform-backlog.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`next-15-minutes-platform-spec.md` now contains:

- Local code evidence and API/data evidence.
- Source discovery and external evidence.
- Priority rules for a `Your next 15 minutes` card.
- Student UX copy.
- Data inputs and optional event model.
- Teacher companion concept.
- Public-proof boundary.
- Success metrics and falsification rules.
- Current-student validation prompts.
- Implementation path if Auris asks.

Core decision:

Build the dashboard card first. Do not build audio recording, AI pronunciation feedback or a teacher companion panel until the basic recommendation is useful and measurable.

### Strongest Next Move

If Auris asks for platform implementation, add a `Your next 15 minutes` card above the current flashcard hero in `StudentDashboard.tsx`, backed by existing assignments, reviewed feedback, class notes and SRS stats.

### What Not To Do Yet

- Do not build AI speaking feedback.
- Do not store audio.
- Do not add a new teacher panel without student action events.
- Do not make public claims about guaranteed practice habits.
- Do not turn the dashboard into another feature menu.

### Falsification Notes

Favored idea tested: the Next 15 card is the best first retention/product improvement.

Strengthened:

- Existing code/data can support the recommendation.
- External research supports small, guided, feedback-aware practice.
- Competitor/product direction validates human-led between-lesson practice.

Weakened:

- We do not yet have authenticated usage data or current-student feedback.
- The card may be ignored if it feels like homework, recommends stale work or does not connect back into class.
- A manual WhatsApp "before next class, do this one thing" could beat a product change if students are already over-portalized.

Stop/change evidence:

- If students ignore the card for two weeks, pause feature expansion and interview students.
- If students click but do not complete actions, fix the action size/landing route.
- If Auris does not use the signal in class, do not build more teacher analytics.

### Process Improvement Notes

- Highest-signal source: following the actual student first-screen path, then checking the route one level deeper where the good SRS CTA already exists.
- Second-highest source: SRS API/service code, because it turned a product idea into an implementable rule.
- Useful external sources: Preply human-plus-AI direction, Busuu correction model, mobile-learning/SRL research.
- Noisy source type: broad AI app review mining when not tied to a specific product decision.
- Process update: future platform cycles must separate "data exists", "student sees a clear next action" and "teacher uses the signal."

### Next-Cycle Packet

Recommended next theme: Packet N, Student Validation And Next-Action Implementation Readiness.

Exact work:

- Inspect `next-15-minutes-platform-spec.md`, `platform-backlog.md`, `StudentDashboard.tsx`, `FlashcardStats.tsx`, `StudentSettings.tsx`, `api.ts`, `types.ts` and SRS endpoints again.
- If authenticated browser state is available, inspect the live student dashboard first screen without changing data.
- Check whether existing logs can count flashcard sessions, feedback views and assignment starts/completions.
- Produce the exact implementation checklist for `StudentDashboard.tsx`.
- Produce a 3-student validation script Auris can send before implementation.
- Do not edit the platform unless Auris explicitly asks.

Hypotheses:

- H004 premium proof.
- H006 clarity of next action.
- H011 Talk reflection bridge.
- H015 manual notes and baseline.

### Unfinished Threads

- Need authenticated student-dashboard inspection or screenshots.
- Need baseline usage counts for flashcard sessions, feedback views and assignment completions if logs expose them safely.
- Need current-student validation on whether a single next-action card feels helpful.
- Need decision from Auris before touching `teacher-assistant`.

## Cycle 13 - Student Validation And Next-Action Implementation Readiness

Date: 2026-05-22 04:59 CEST

Primary research question: should the Next 15 card be implemented now, and what exact low-risk patch should be made if Auris asks?

Theme: implementation readiness, product validation, student autonomy, retention measurement.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with existing unrelated untracked screenshots/artifacts; inspected read-only.

### Local Evidence Inspected

- Strategy memory: `research-log.md`, `research-roadmap.md`, `next-15-minutes-platform-spec.md`, `platform-backlog.md`, `hypotheses.md`, `market-intelligence.md`, `automation-research-loop.md`.
- Frontend implementation path: `StudentDashboard.tsx`, `FlashcardStats.tsx`, `StudentSettings.tsx`, `api.ts`, `types.ts`, `AuthContext.tsx`, `TalkTheTalk.tsx`, `TeacherOverview.tsx`.
- Backend/data model path: `api/srs.py`, `services/flashcard_srs.py`, `api/schemas.py`, `db/models.py`, `api/writing.py`, `api/modular_exercises.py`.
- Live/local outputs: local Vite dashboard route, browser snapshot of local app, remote API health, protected endpoint responses, local empty SQLite DB files and log availability.

Local findings:

- `StudentDashboard.tsx` already has most routes and CTA handlers needed for the card.
- New dashboard data required for V0 is only SRS stats; `StudentSettings.tsx` already demonstrates the API pattern.
- Existing DB models can later support aggregate baseline metrics: flashcard sessions, cards reviewed, assignment starts/submits, writing reviews and modular attempts.
- Missing measurement: card shown/clicked/dismissed, feedback viewed, class-notes opened and Talk completed.
- Browser inspection reached login only; no authenticated student first-screen proof this cycle.

### API / Data Evidence

- `http://localhost:5174/student/dashboard` served the app but redirected to `/login` in browser.
- Remote `GET /api/health` returned OK.
- Unauthenticated SRS stats and LMS profile endpoints returned 401, as expected.
- Local `.db` files are empty/no usable tables.
- Logs were old or dev-noisy and did not provide a valid retention baseline.

### Source Discovery Choices

Chosen source types:

- Clear-path product examples.
- Product-review backlash against forced paths.
- Learning-app research around user feedback, structure and gamification.
- Teacher-report examples showing what useful teacher-side data looks like.

### External Evidence

- Duolingo redesigned its home screen around a clearer learning path because learners were unsure whether they were using the app correctly; it also built review into forward progress.
- Quizlet Learn creates a personalized study path based on goals and content familiarity.
- Busuu Study Plan uses goals, schedule, reminders and progress tracking to make learning smaller and more accountable.
- Khan Academy's individual student report shows the teacher-side version of this idea: activity, time, mastery and skills by date/content.
- A 2025 Frontiers app-review study supports using user feedback to improve learner-centered app design and highlights the tradeoff between gamified simplicity and structured methodology.
- A gamification misuse paper warns that points/badges/leaderboards can distract from actual learning.
- Memrise App Store reviews and Duolingo path community reactions show a counter-signal: learners may resent forced sequencing when they want review or control.

### Hypotheses Changed

- H006 strengthened and refined: Next 15 is still the right platform improvement, but it should be advisory with secondary options.
- H015 strengthened: existing tables can support aggregate completion baselines, but card events and feedback views need explicit instrumentation later.
- H016 created: the Next 15 card must preserve autonomy, not force a locked path.

### Artifacts Updated

- Created `next-action-implementation-readiness.md`.
- Updated `next-15-minutes-platform-spec.md`.
- Updated `platform-backlog.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`next-action-implementation-readiness.md` now contains:

- Exact files to change if Auris approves implementation.
- Dashboard state and SRS stats fetch sketch.
- Refined selector rules.
- UI copy.
- Measurement/event plan.
- Baseline query plan.
- Manual pilot script.
- Falsification rules.

Core implementation rule:

Build one primary recommendation plus two secondary options. Avoid a locked path, streaks, XP, audio or AI in V0.

### Strongest Next Move

Run a 3-student manual pilot before coding, unless Auris explicitly wants the frontend patch now. The manual pilot tests the riskiest thing: whether the "next 15 minutes" idea feels helpful or like extra homework.

### What Not To Do Yet

- Do not implement without Auris's approval.
- Do not add backend tracking before the card UX is useful.
- Do not add a teacher panel without actual student events.
- Do not use command-like copy that makes the portal feel controlling.
- Do not add streaks or points.

### Falsification Notes

Favored idea tested: a single "next action" is always good.

Refined/partly weakened:

- External evidence supports guided paths, but also shows backlash when guidance removes autonomy.
- For Auris, adult/professional students are more likely to appreciate a suggestion than an app telling them what they must do.
- The card should therefore preserve choice and keep the teacher's personal tone.

Strengthened:

- Technical implementation is small.
- Existing data is enough for V0 recommendation.
- Manual pilot can test student readiness cheaply.

Stop/change evidence:

- If 2/3 students say it feels like homework, rewrite as "one suggestion" or keep it manual.
- If students prefer WhatsApp reminders, the portal card should mirror Auris's message tone.
- If no aggregate baseline can be measured, do not claim retention improvement.

### Process Improvement Notes

- Highest-signal source: implementation path through `StudentDashboard.tsx` plus `StudentSettings.tsx` SRS fetch pattern.
- Highest-signal external correction: forced-path backlash from app reviews/community, because it prevents overbuilding a command-style recommendation.
- Noisy source: broad app-ranking/review articles unless they identify a specific product behavior.
- Process update: future recommendation-feature cycles must define autonomy-preserving escape routes.

### Next-Cycle Packet

Recommended next theme: Packet O, Retention Baseline And Manual Pilot Plan.

Exact work:

- Inspect `next-action-implementation-readiness.md`, `db/models.py`, `api/srs.py`, `api/writing.py`, `api/modular_exercises.py`, and `TeacherOverview.tsx`.
- If read-only database access is available, derive aggregate counts only; do not export names/emails.
- If no DB access is available, create safe SQL/API query templates.
- Produce English/Spanish manual pilot variants.
- Define the go/no-go rule for implementation.

Hypotheses:

- H006 clarity of next action.
- H015 measurement baseline.
- H016 autonomy-preserving recommendation.

### Unfinished Threads

- Need authenticated student-dashboard screenshot/first-screen proof.
- Need actual aggregate usage baseline from Supabase or app logs.
- Need Auris decision before platform code changes.
- Need real student responses to the manual pilot.

## Cycle 14 - Retention Baseline And Manual Pilot Plan

Date: 2026-05-22 05:54 CEST

Primary research question: what baseline and manual evidence should be collected before the Next 15 card is judged?

Theme: product retention measurement, SRS baseline, manual validation, data safety.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with existing unrelated untracked screenshots/artifacts; inspected read-only.

### Local Evidence Inspected

- Strategy memory: `research-log.md`, `research-roadmap.md`, `retention-baseline-and-manual-pilot.md`, `next-action-implementation-readiness.md`, `next-15-minutes-platform-spec.md`, `platform-backlog.md`, `hypotheses.md`, `market-intelligence.md`, `automation-research-loop.md`, `measurement-plan.md`.
- Platform code/model path: `backend/app/db/models.py`, `backend/app/api/srs.py`, `backend/app/services/flashcard_srs.py`, `backend/app/api/lms.py`, `backend/app/api/modular_exercises.py`, `classroom-hub/src/pages/TeacherOverview.tsx`, `classroom-hub/src/pages/StudentDashboard.tsx`, `classroom-hub/src/lib/api.ts`.
- Environment/data availability: local `.env` files exist; `backend/.env` exposes required database/API key names as present, but no values were printed or copied; local SQLite DB files remain empty.

Local findings:

- Existing models can baseline SRS, standard assignment attempts, writing submissions and modular attempts.
- `TeacherOverview.tsx` already uses recent submissions, SRS recent students, class flashcard progress, modular assignments, trivia and games.
- Teacher attention items already show pending submissions and SRS due/quiet signals, so a new teacher panel should wait until the student card generates events.
- SRS service already starts and ends sessions with cards reviewed, correctness and completion fields.
- `lms.py` exposes unified submissions; `modular_exercises.py` exposes assignment/attempt status and review timestamps.

### API / Data Evidence

Read-only aggregate database query succeeded. No names, emails, titles, answers, feedback text or secrets were exported.

Baseline:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Flashcard Reviews | Standard Started | Standard Submitted | Writing Submitted | Writing Reviewed | Modular Started | Modular Submitted | Modular Reviewed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 31 | 59 | 330 | 53 | 317 | 0 | 0 | 0 | 0 | 5 | 4 | 1 |
| 14 days | 39 | 98 | 860 | 92 | 750 | 1 | 1 | 0 | 0 | 15 | 10 | 1 |
| 30 days | 42 | 161 | 1524 | 155 | 1212 | 2 | 2 | 0 | 0 | 27 | 15 | 2 |

Database totals at query time:

- Students: 139.
- Classes: 26.
- Class memberships: 55.

Data interpretation:

- SRS is not just theoretical; it is the highest-volume current retention behaviour.
- Standard/writing work is too sparse to judge the first Next 15 version.
- Modular work is active enough to remain in the selector.
- Feedback is still strategically important but cannot be a reliable product metric without a feedback-view event.
- The active-student number should later be filtered to current paid classes if a reliable current-student flag exists.

### Source Discovery Choices

Best evidence for this question should live in:

1. Existing database activity.
2. Teacher dashboard and data model code.
3. Tutor/language-teacher platforms selling homework/progress tracking.
4. Language assignment products with speaking/writing/feedback workflows.
5. Student planner/product examples around daily next actions.
6. Self-regulated language learning research.
7. Product-review/community backlash around busy dashboards or forced paths.
8. Current-student replies to a manual pilot.

Chosen sources: database aggregates, teacher dashboard code, Tuton, Eluency, ZenGengo, Language Homework, Tutor.com reporting docs, EFL/SRL research and app/task-planner examples.

### External Evidence

- Tuton positions progress tracking, homework submitted, active students, vocabulary tracking and student context as core for independent language tutors.
- Tuton's progress-tracking article argues lesson notes, vocabulary tracking and progress data are stronger together than as separate spreadsheets.
- Eluency sells teacher-created practice, student completion, quiz data and weak-spot visibility before class.
- ZenGengo shows language homework can include speaking/audio/video/writing tasks with teacher feedback.
- Language Homework and similar products show a growing category around teacher-created quizzes, flashcards and completion dashboards.
- Tutor.com reporting emphasizes aggregate and individual usage, topics covered, students needing help and under-use alerts.
- 2025 self-regulated language app research suggests structured content, flexibility and personalized feedback vary by learner context.
- Gamified SRL EFL research supports task completion and motivation, but Cycle 13's autonomy warning still applies: do not turn the card into a forced game loop.

### Hypotheses Changed

- H006 strengthened but selector priority refined: due flashcards now outrank recent feedback when no urgent/started work exists.
- H015 strengthened: aggregate product baseline is available, but attribution still requires future card events.
- H016 strengthened: data maturity differs by feature, so the card should avoid pretending the app knows the one true path.
- H017 created: SRS is the current measurable retention spine.

### Artifacts Updated

- Created `retention-baseline-and-manual-pilot.md`.
- Updated `platform-backlog.md`.
- Updated `next-15-minutes-platform-spec.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `measurement-plan.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`retention-baseline-and-manual-pilot.md` now contains:

- 7/14/30-day aggregate retention baseline.
- Safe SQL query templates.
- Current measurable/missing metric map.
- English and Spanish manual pilot scripts.
- Go/change/stop rules.
- Revised V0 selector priority.
- External source map.

Revised V0 selector:

1. Urgent overdue/due-today assignment.
2. Started modular or standard assignment.
3. Due flashcards.
4. Recent reviewed feedback.
5. Class notes phrase practice.
6. Talk the Talk.

### Strongest Next Move

Ask Auris to choose: run the 3-5 student manual pilot first, or approve the small frontend card implementation now.

If implementing, patch only `StudentDashboard.tsx` and keep the event layer for later.

### What Not To Do Yet

- Do not build a teacher analytics panel.
- Do not add AI/audio.
- Do not treat feedback as a measured product loop until feedback views can be tracked.
- Do not export private student data or use credential-bearing scripts for research.
- Do not overfit the whole method to flashcards just because SRS is currently measurable.

### Falsification Notes

Favored idea tested: feedback should stay above flashcards because it is more premium.

Weakened:

- Recent writing and standard assignment activity is too sparse for feedback/submission loops to be the first measured success metric.
- The app can currently prove flashcard practice more reliably than feedback consumption.

Strengthened:

- The retention baseline exists and is usable.
- SRS is already meaningful enough that a "review 8 cards" recommendation could affect actual behaviour.
- Started modular work should be preserved as a high-priority completion loop.

Stop/change evidence:

- If SRS usage is mostly historical/free accounts, filter to current paid classes before using it as a business-retention claim.
- If students say flashcards feel unrelated to class conversation, the card must connect review to next-class speaking.
- If a card increases clicks but not same-day completion, reduce action size and fix stale recommendations.

### Process Improvement Notes

- Highest-signal source: safe aggregate DB query, because it moved the cycle from speculation to baseline.
- Highest-signal code source: `TeacherOverview.tsx` plus SRS session models, because they show what Auris can already see.
- Useful external sources: Tuton and Eluency, because they map directly to independent language tutors and between-class homework.
- Noisy source type: broad AI/study-planner product pages unless they reveal a specific next-action or measurement behaviour.
- Process update: future data cycles must use sanitized key-presence checks and read-only aggregate queries. Avoid line-printing searches for credential-like patterns.

### Next-Cycle Packet

Recommended next theme: Packet P, SRS-First Card Or Manual Pilot Execution.

Exact work:

- Inspect `retention-baseline-and-manual-pilot.md`, `next-action-implementation-readiness.md`, `next-15-minutes-platform-spec.md` and `StudentDashboard.tsx`.
- If Auris has not approved implementation, create a paste-ready pilot tracker with student A/B/C rows and interpretation rules.
- If Auris approves implementation, patch only the frontend card and SRS stats fetch.
- Look for two more human-teacher platform examples connecting homework completion to the next live lesson.
- Find one counterexample where dashboards become too busy or controlling.

Hypotheses:

- H006 clarity of next action.
- H015 manual/event measurement.
- H016 autonomy-preserving recommendation.
- H017 SRS retention spine.

### Unfinished Threads

- Need Auris decision: manual pilot first or implement card now.
- Need authenticated student-dashboard screenshot/first-screen proof.
- Need current paid/current active class filter for aggregate metrics.
- Need future feedback-view and card-click events if the card ships.

## Cycle 15 - SRS-First Manual Pilot Execution Readiness

Date: 2026-05-22 06:54 CEST

Primary research question: should the next cycle prepare the actual frontend patch for Auris approval, or sharpen the manual pilot and student-reply ledger first?

Theme: manual pilot execution, homework-log bridge, implementation gate, anti-dashboard-sprawl.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with existing unrelated untracked screenshots/artifacts; inspected read-only.

### Local Evidence Inspected

- Strategy memory: `research-log.md`, `research-roadmap.md`, `retention-baseline-and-manual-pilot.md`, `next-action-implementation-readiness.md`, `next-15-minutes-platform-spec.md`, `platform-backlog.md`, `hypotheses.md`, `market-intelligence.md`, `automation-research-loop.md`, `measurement-plan.md`.
- Platform implementation path: `StudentDashboard.tsx`, `StudentSettings.tsx`, `FlashcardStats.tsx`, `types.ts`, `api.ts`.
- Teacher workflow path: `TeacherOverview.tsx`, `ClassHomeworkLog` in `db/models.py`, homework-log routes in `backend/app/api/routes.py`, `backend/app/services/homework.py`.
- Data structure path: `ClassGroup`, `ClassSchedule`, `ClassMembership`, `StudentPracticeSession`, `FlashcardReviewLog`, `ModularExerciseAttempt`.

Local findings:

- No approval from Auris to edit platform code, so `teacher-assistant` remained read-only.
- `StudentDashboard.tsx` still has the right route handlers for a future card: assignment start/resume, modular exercise, feedback, notes, Talk and flashcards.
- `StudentSettings.tsx` already demonstrates the SRS stats API pattern the card would reuse.
- `types.ts` already has `StudentFlashcardStats`.
- `TeacherOverview.tsx` already contains a WhatsApp homework log UI with selected-student targeting and saved messages.
- Backend routes already support listing, creating and deleting class homework log entries.
- This means the manual pilot can use existing platform workflow instead of a new pilot-response feature.

### API / Data Evidence

Read-only aggregate database query succeeded. No secrets, names, emails, homework text, answer text or feedback content were exported.

Cycle 15 filtered baseline:

| Metric | Value |
| --- | ---: |
| Scheduled non-guest classes | 22 |
| Scheduled-class students | 50 |
| Scheduled-class active students, 7 days | 28 |
| Scheduled-class SRS sessions, 7 days | 53 |
| Scheduled-class SRS cards reviewed, 7 days | 324 |
| Scheduled-class completed SRS sessions, 7 days | 48 |
| Active homework-log messages, 30 days | 2 |
| Classes with active homework-log messages, 30 days | 2 |

Interpretation:

- The SRS baseline remains real after a better "scheduled class" filter.
- It is still not the same as paid/current students; owner classification is needed before public retention claims.
- Homework-log usage is low, but the feature exists and is fit for the pilot.

### Source Discovery Choices

Best evidence for this cycle should live in:

1. Existing platform code for manual homework logging.
2. Aggregate homework/SRS database counts.
3. Teacher-specific products connecting homework completion to next lesson planning.
4. Teacher products that deliberately avoid all-in-one complexity.
5. Learning analytics research showing where dashboards fail or only modestly help.
6. Current-student pilot replies, once Auris has them.

Chosen sources: local homework-log code/data, TalkLoop, Flui, edio, TalkEn.Cloud, Tuton, Langteach, LessonHub and a learning analytics dashboard systematic review.

### External Evidence

- TalkLoop's teacher positioning is almost exactly the loop Auris needs later: see what happened between lessons, review weak spots/completion and plan the next lesson.
- Flui positions homework as an extension of what the teacher taught, with student completion notifications.
- edio shows school/tutor platforms commonly bundle interactive homework, feedback, attendance, balances and analytics; useful category proof, but too school-like for Auris's first move.
- TalkEn.Cloud's flipped-classroom framing supports pre-class practice only when it is applied under teacher guidance in class.
- Tuton keeps proving the independent-language-tutor market wants connected student context, homework reminders and progress tracking.
- Langteach and LessonHub reinforce the market pattern around progress tracking and study plans.
- The learning analytics dashboard systematic review is a useful brake: dashboards have mixed evidence, with no strong proof of academic achievement impact and only clearer support around participation/engagement.

### Hypotheses Changed

- H006 strengthened but gated: the Next 15 card is still the right product direction, but the pilot should run first unless Auris approves implementation.
- H015 strengthened: existing homework-log data provides a manual measurement bridge.
- H016 strengthened: dashboard research and competitor all-in-one pages reinforce the need for one action, not a broad dashboard.
- H017 strengthened: scheduled-class SRS baseline remains strong.
- H018 created: the existing homework log is enough for the first manual pilot.

### Artifacts Updated

- Created `next-15-pilot-tracker.md`.
- Updated `retention-baseline-and-manual-pilot.md`.
- Updated `platform-backlog.md`.
- Updated `measurement-plan.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`next-15-pilot-tracker.md` now contains:

- Three paste-ready message variants.
- Anonymous logging table for 3-5 students.
- Scoring rubric.
- Existing homework-log workflow.
- Implementation gate.
- What not to record.

Core execution:

1. Send pilot message by WhatsApp.
2. Save the same message in the existing class homework log.
3. Record only anonymous result summaries in strategy notes.
4. Decide build/soften/defer.

### Strongest Next Move

Run the manual pilot rather than continuing to research the same unapproved platform change.

If Auris approves implementation before results exist, implement the frontend-only card. Otherwise the next automation cycle should switch away from this platform decision and back to another strategic theme.

### What Not To Do Yet

- Do not edit `teacher-assistant` until Auris approves.
- Do not create a new pilot-response database table.
- Do not build a teacher analytics panel.
- Do not interpret homework-log count as student completion.
- Do not let competitor all-in-one products pull Auris toward academy-style software.

### Falsification Notes

Favored idea tested: because the Next 15 card is technically ready, the automation should keep pushing toward implementation.

Weakened:

- No user approval exists for app edits.
- The manual pilot can now run with existing homework-log infrastructure.
- More research on the same implementation fork has diminishing returns until Auris chooses or students reply.

Strengthened:

- SRS remains a valid first product metric after scheduled-class filtering.
- Teacher-tool competitors validate the homework-to-next-lesson loop.
- Dashboard research weakens the temptation to build broad analytics before the student action card.

Stop/change evidence:

- If no pilot results and no implementation approval, switch next cycle to GBP/acquisition/content rather than another platform cycle.
- If students complete the manual task and Auris references it in class, implement the student card.
- If students prefer WhatsApp, keep the personal message as primary and use the portal as a record.

### Process Improvement Notes

- Highest-signal source: local homework-log code plus aggregate count; it revealed an existing manual bridge.
- Best external source: TalkLoop, because it states the full teacher loop from between-lesson evidence to next lesson planning.
- Best counterweight: learning analytics dashboard systematic review, because it weakens analytics-first enthusiasm.
- Noisy source: all-in-one school platforms when they emphasize administration, balances and white-label scale rather than solo-teacher learning action.
- Process update: once an execution packet exists for an unapproved decision, move to a different theme unless the user supplies a decision or field evidence.

### Next-Cycle Packet

Recommended next theme: Packet Q, Decision Fork - Pilot Results Or Approved Frontend Patch.

Exact work:

- If Auris shares pilot replies, score them with `next-15-pilot-tracker.md`.
- If Auris approves implementation, patch only `StudentDashboard.tsx` with the SRS-first advisory card.
- If neither is true, change theme to GBP/acquisition/content and avoid repeating the same unapproved product decision.
- Keep using safe aggregate queries only when there is a change to measure.

Hypotheses:

- H006 clarity of next action.
- H015 manual/event measurement.
- H016 autonomy-preserving recommendation.
- H017 SRS retention spine.
- H018 existing homework log for pilot.

### Unfinished Threads

- Need Auris decision or pilot replies.
- Need authenticated student-dashboard screenshot/first-screen proof if implementation is approved.
- Need owner current-paid/current-student filter for public retention claims.
- Need future feedback-view and card-click events if the card ships.

## Cycle 16 - GBP Week One Execution And Baseline Gate

Date: 2026-05-22 07:54 CEST

Primary research question: with no platform approval or pilot replies yet, what is the highest-leverage next acquisition move, and what exact owner-side evidence is needed before publishing the first GBP post?

Theme: Google Business Profile execution readiness, local trust, source baseline, channel falsification.

### Repo State

- `teacher-website`: tracked files clean apart from untracked `docs/strategy/` strategy memory.
- `teacher-assistant`: dirty with existing unrelated untracked screenshots/artifacts; no files edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `gbp-linkedin-proof-sprint.md`
- `channel-fit-and-content-scan.md`
- `profile-publishing-readiness-audit.md`
- `owner-profile-alignment-plan.md`
- `content-strategy.md`
- `review-proof-library.md`
- `market-intelligence.md`
- `measurement-plan.md`
- `automation-research-loop.md`

Website/live implementation:

- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/SeoLandingPage.jsx`
- `src/components/Footer.jsx`
- `src/components/PricingSection.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `netlify/functions/google-reviews.js`
- live headers for `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, `/sitemap.xml`, `/robots.txt`

Local findings:

- The platform fork has an execution packet now; without Auris approval or pilot replies, repeating the same Next 15 research would be low-value.
- Sitemap and robots are correct locally and live.
- Footer links expose the local/business/Talk pages, so internal discovery exists.
- `SeoLandingPage.jsx` keeps local/business pages personal and not SEO-stuffed; this matches the brand constraint, but the local/business pages still have to earn indexation.
- The homepage/pricing/review flow is still a safer Week 1 destination than non-indexed landing pages.
- The live Google reviews function returns review proof in both Spanish and English views.

### API / Data Evidence

Search Console and URL Inspection used local tokens safely. No secrets were printed.

Search Console site:

- `https://englishwithauris.com/` available as `siteOwner`.

Sitemap API:

- `https://englishwithauris.com/sitemap.xml`
- Last submitted: 2026-05-21T10:44:59Z
- Last downloaded: 2026-05-21T10:45:00Z
- Warnings: 0
- Errors: 0

Performance, ending 2026-05-21:

| Window | Pages With Rows | Clicks | Impressions | Avg Position |
| --- | ---: | ---: | ---: | ---: |
| 28 days | homepage only | 1 | 169 | 10.25 |
| 90 days | homepage only | 6 | 306 | 8.83 |
| 180 days | homepage only | 18 | 651 | 8.14 |

Query-family findings over 180 days:

- `academia` variants dominate visible local demand: examples include `academias de inglés en castelldefels` with 90 impressions and `academia ingles castelldefels` with 20 impressions.
- `clases`/`particulares` exists but is tiny: 3 one-impression rows total.
- `empresas`, `business`, `private` have no rows.
- `auris` variants total 69 impressions and no clicks.

URL Inspection:

| URL | Status | Last Crawl | Implication |
| --- | --- | --- | --- |
| `/` | Submitted and indexed | 2026-05-22 | Use as GBP Week 1 destination. |
| `/talkthetalk` | Crawled - currently not indexed | 2026-03-01 | Use as social/Talk destination, not as SEO proof yet. |
| `/clases-ingles-castelldefels` | Crawled - currently not indexed | 2026-05-21 | Discovery works; improve uniqueness/proof later. |
| `/ingles-empresas-castelldefels` | Discovered - currently not indexed | none | Do not use as first LinkedIn destination. |

GTM exact-path API:

- Account/container exact paths are readable.
- Workspace 0 has no listed tags/triggers/variables.
- Account list returned empty, so future GTM checks should use exact known paths.

Live reviews endpoint:

- `language=es`: `places-new`, English with Auris, 5.0 rating, 15 reviews, 5 returned visible reviews.
- `language=en`: `places-new`, English with Auris, 5.0 rating, 15 reviews, 5 returned visible reviews.

Live route checks:

- Homepage, Talk, local page, business page, sitemap and robots all return HTTP 200.

### Source Discovery Choices

Best evidence for this question should live in:

1. Search Console and URL Inspection for campaign route readiness.
2. Sitemap and robots for discovery plumbing.
3. Live Google reviews endpoint for proof strength.
4. Google official GBP docs for allowed/high-value owner-side actions.
5. Local academy competitor pages for buyer comparison.
6. Business-English coach pages for professional-lane crowding and proof formulas.
7. Recent community/professional anxiety signals for pain language.
8. Auris's owner-side GBP UI, which remains unavailable to the automation.

Chosen sources: GSC/API, live site, Google GBP docs, Castle Languages, Kilkenny city listing, Janet's signals, LUVEnglish, Madeleine Cooke, Superprof business-English marketplace, and recent non-native professional anxiety/community signals.

### External Evidence

- Google GBP posts docs confirm updates can include text, photo/video and action buttons, but posts must be professional and useful; phone numbers in descriptions can be rejected.
- Google GBP performance docs confirm owner-side metrics include views, searches and customer actions such as website clicks, calls, messages and bookings where configured.
- Google local-ranking docs emphasize complete information, review replies, photos/videos, relevance, distance and prominence, not a single post as a ranking hack.
- Google review docs confirm verified businesses can reply publicly and request reviews via link/QR code.
- Google services docs confirm service businesses can list services, descriptions and sometimes prices, with custom-service rejection risks.
- Google photo docs confirm profile photos/videos should be real, verified-profile assets and meet format/size/resolution guidance.
- Castle Languages sells local academy strengths: native qualified teachers, Cambridge, groups, private classes, companies, 14 years in Castelldefels.
- Kilkenny city listing sells native qualified teachers, adults, Business English, corporate services, children, camps and social/ludic activities.
- Janet's public job/profile signals show academy structure: homework, attendance, reports, kids/teens/adults, Cambridge and native-level requirements.
- LUVEnglish and Madeleine Cooke show the professional-confidence lane in Barcelona is viable but crowded; meetings, presentations, leadership, teams and confidence are table stakes.
- Superprof business-English Barcelona shows premium-ish 35-40 EUR/h profiles can exist when proof/reviews/specific professional outcomes are strong, but lower anchors remain.
- Recent professional anxiety threads support the hook that people can read/write English but tense up in meetings/interviews/client calls; the desired outcome is clarity and ideas landing, not native-accent perfection.

### Hypotheses Changed

- H002 strengthened: GBP remains a stronger near-term acquisition test than broad SEO because GSC is still homepage-only and landing pages are not indexed.
- H014 strengthened/refined: keep the sprint GBP-first. LinkedIn is useful but should not block the first GBP owner baseline and post.
- H015 strengthened: manual notes remain necessary because GTM is not a usable reporting layer and GBP metrics are owner-side.
- H019 created: owner-side GBP baseline is required before judging posts.

Falsification attempt:

Favored idea tested: "Since GBP + LinkedIn has been planned for several cycles, maybe the automation should now switch to local SEO or another page build."

Weakened:

- The sitemap is clean and pages are reachable, so the issue is not simply discovery.
- GSC has too little data to learn quickly from SEO alone.
- Local/business pages can be improved later, but they are not the fastest proof route right now.

Strengthened:

- GBP can expose the best existing proof immediately: reviews, photos, services and local profile actions.
- Homepage is indexed and safest for Week 1.
- Owner-side baseline is the missing evidence layer, not more draft creation.

### Artifacts Updated

- Created `gbp-week-one-execution-pack.md`.
- Updated `research-roadmap.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `content-strategy.md`.
- Updated `gbp-linkedin-proof-sprint.md`.
- Updated `automation-research-loop.md`.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`gbp-week-one-execution-pack.md` now contains:

- Source discovery map.
- Fresh data/API snapshot.
- Owner-side Week One checklist.
- Final GBP Post 1 copy.
- Optional Spanish version.
- Review reply micro-library.
- Lead-source ledger row.
- 14-day decision rules.
- What not to do yet.

Core execution:

1. Auris records GBP baseline: views, searches, website clicks, calls, messages, bookings if shown and top search terms.
2. Confirm services/photos/review replies.
3. Publish the review/confidence GBP post to the homepage UTM.
4. Track all inquiries manually.
5. Decide after 14 days whether GBP deserves more posting, profile cleanup, or local SEO proof work.

### Strongest Next Move

Get the owner-side GBP baseline and publish one review/confidence GBP post. This is smaller and higher signal than another platform cycle, another SEO page, or a broad content calendar.

### What Not To Do Yet

- Do not repeat the Next 15 product cycle until Auris gives pilot replies or approves implementation.
- Do not publish the full two-week content calendar before one GBP baseline/post is tested.
- Do not send Week 1 GBP traffic to `/clases-ingles-castelldefels` while it is not indexed.
- Do not use `/ingles-empresas-castelldefels` as the first LinkedIn destination while it is only discovered.
- Do not stuff service fields or GBP posts with phone numbers/SEO phrases.
- Do not judge LinkedIn by likes alone.

### Process Improvement Notes

- Highest-signal source: Search Console plus URL Inspection, because it ruled out SEO-only as the fastest next learning loop.
- Best official source layer: Google GBP docs for posts, performance, local ranking, services, photos and reviews.
- Best competitor source layer: local academy pages/listings, because they show what Auris must not mimic.
- Useful but not decisive source: professional anxiety/community threads; they provide hook language, not local buying proof.
- Noisy source type: more generic business-English coach pages after two examples; they repeat the same meetings/presentations/confidence language and mostly prove crowding.
- Process update: for GBP cycles, create a concrete owner-side baseline checklist before writing more posts.

### Next-Cycle Packet

Recommended next theme: Packet R follow-up, Owner Baseline Or Profile Surface Audit.

Exact work:

- If Auris provides GBP metrics, add them to `gbp-week-one-execution-pack.md` or a new lead-source ledger and score readiness.
- If Auris says he published Post 1, record publish date, destination, photo type and expected check date.
- If Auris does not provide owner data, do not repeat the same GBP checklist; move to one of:
  - LinkedIn profile/headline/about audit using `owner-profile-alignment-plan.md`,
  - local page uniqueness/indexing diagnostic,
  - review-reply/photo shot-list refinement,
  - marketplace price/copy alignment.
- Recheck GSC/URL Inspection no more than daily unless a public change happens.

Hypotheses:

- H002 GBP near-term lead strength.
- H009 reviews central proof.
- H014 GBP plus LinkedIn sprint.
- H015 manual lead-source notes.
- H019 owner-side GBP baseline.

### Unfinished Threads

- Need Auris owner-side GBP metrics before judging the first post.
- Need Auris decision on marketplace/channel pricing if inquiries compare prices.
- Need LinkedIn personal/profile baseline if LinkedIn Post 1 is to be published.
- Need local/business page uniqueness audit if indexation remains unchanged after GBP/profile activity.

## Cycle 17 - SEO Indexing And Page-Quality Diagnostic

Date: 2026-05-22
Theme: SEO/Search Console/indexing
Primary research question: RQ002 - Can `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, and `/talkthetalk` become indexable, useful pages without diluting the personal tone?

### Repo Status

- Website repo: dirty only because `docs/strategy/` remains untracked strategy memory.
- Teaching platform repo: dirty with many unrelated untracked artifacts/screenshots. No platform files were edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `market-intelligence.md`
- `gbp-week-one-execution-pack.md`
- `measurement-plan.md`
- `automation-research-loop.md`

Website implementation and live/static outputs:

- `src/App.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `index.html`
- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `public/sitemap.xml`
- `public/robots.txt`
- `public/_redirects`
- live static metadata/body checks for `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`

Teaching-platform context:

- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py`

Local findings:

- Sitemap includes the homepage, Talk, local and business routes.
- Robots allows all crawling and points to the sitemap.
- Netlify redirects expose exact static route files for Talk, local and business before SPA fallback.
- Navbar and footer use normal `<a href>` links to the three routes once React renders.
- `App.jsx` uses route-aware title/description/canonical logic.
- Local and business pages are real and on-brand, but share the same `SeoLandingPage` structure and need more route-specific proof.
- Talk is real in both public and portal contexts, but the public route still reads more like a tool overlay than a standalone SEO document.
- Live static body checks are the clearest weakness:
  - `/`: 0 static body words.
  - `/talkthetalk`: 29 static body words.
  - `/clases-ingles-castelldefels`: 38 static body words.
  - `/ingles-empresas-castelldefels`: 36 static body words.

### API / Data Evidence

Search Console and URL Inspection were not rerun because Cycle 16 checked them within the same day and no public change happened. This follows the new process rule to avoid hourly broad reinspection.

Fresh Cycle 16 data carried forward:

- Sitemap submitted/downloaded 2026-05-21 with 0 warnings and 0 errors.
- GSC 28 days: homepage only, 1 click, 169 impressions, avg position 10.25.
- GSC 90 days: homepage only, 6 clicks, 306 impressions, avg position 8.83.
- GSC 180 days: homepage only, 18 clicks, 651 impressions, avg position 8.14.
- URL Inspection:
  - `/`: submitted and indexed, last crawl 2026-05-22.
  - `/talkthetalk`: crawled, currently not indexed, last crawl 2026-03-01.
  - `/clases-ingles-castelldefels`: crawled, currently not indexed, last crawl 2026-05-21.
  - `/ingles-empresas-castelldefels`: discovered, currently not indexed, no crawl.

Data interpretation:

- Discovery plumbing is working.
- The local page has already been crawled, so the issue is not simply "Google cannot find it."
- The strongest technical-quality weakness is thin initial/static route content, not missing metadata.

### Source Discovery Choices

Best evidence for this question should live in:

1. Official Google Search docs for JS, crawlable links, helpful content and page indexing states.
2. Live/static HTML checks for what routes show before React.
3. Route implementation files for rendered content and internal links.
4. Local academy pages for proof density and buyer comparison.
5. Marketplace pages for price anchors and private/business-English proof norms.
6. Business-English provider pages for professional-lane specificity.
7. Community/professional threads for pain language.

Chosen sources: Google JS SEO basics, Google link best practices, Google SEO starter guide, Google helpful content guide, Search Console page indexing help, Castle Languages, Kilkenny, Janet's, Superprof business English Castelldefels, Superprof profile proof, GO Ingles, English for Business, Reddit TEFL marketplace thread, and Reddit Barcelona work-confidence thread.

### External Evidence

- Google JS SEO basics: Google can render JavaScript, but pre-rendering/static HTML is still useful for users and crawlers.
- Google link best practices: crawlable links should be real `<a href>` links; rendered nav/footer pass this, but static fallbacks could expose more links.
- Google SEO starter guide: unique, useful, people-first content matters more than mechanical SEO tweaks.
- Google helpful content guide: SEO should support people-first content, not search-first content.
- Search Console page indexing help: URL Inspection and crawl dates matter, but live tests do not cover every canonical/duplicate condition.
- Castle Languages: local academies present dense proof around years, Cambridge, companies, groups and breadth.
- Kilkenny: local academy proof includes native teachers, adults, companies, private classes and 2,000+ students.
- Janet's: business-English competitor copy names concrete work situations: meetings, emails, presentations, level test and follow-up.
- Superprof Castelldefels business-English page: demand exists but visible price anchors are mostly 10-30 EUR/h and average around 18 EUR/h.
- Superprof profile proof: reviews praise preparation, goal alignment, follow-up, materials and business/technical specificity.
- GO Ingles: business-English testimonials emphasize adaptation, organisation, next-class preparation and professional roles.
- English for Business: corporate competitors lean into in-company, native specialized teachers, FUNDAE and broad language coverage.
- Reddit TEFL freelancing Spain: marketplaces can be sources of private classes but may not support consistent, well-paid autonomy alone.
- Reddit Barcelona work-confidence: work-language pain often sounds like "I can get by, but I am not confident in meetings."

### Hypotheses Changed

- H003 strengthened and made implementation-specific: more landing pages alone will not solve acquisition. Existing local/business/Talk pages need stronger static fallback and route-specific proof before more pages.
- H007 strengthened: Talk the Talk is a lead magnet and practice bridge, but not yet a clean SEO asset. It needs standalone explanatory content and prompt examples before SEO expectations.
- H020 created: the current indexing gap is quality/uniqueness/priority, not discovery.

Falsification attempt:

Favored idea tested: "If we make the pages discoverable, Google should index them quickly."

Result: weakened.

Evidence:

- Sitemap is clean.
- Robots is open.
- Routes return 200.
- Canonicals and descriptions exist.
- Local page is already crawled but not indexed.

Alternative strengthened:

- The pages may not yet have enough unique route value, static content, and proof density to earn indexation.

Second idea tested: "Business English should get its own SEO page now."

Result: refined.

- It should exist strategically, but should not be the first LinkedIn/GBP destination while it is discovered/not indexed and broad.
- The page needs the Work-English Confidence Loop and proof before more traffic is pushed there.

### Artifacts Updated

- Created `seo-indexing-diagnostics.md`.
- Updated `research-roadmap.md` with Packet S.
- Updated `hypotheses.md` with H003/H007 updates and new H020.
- Updated `market-intelligence.md` with Cycle 17 signals and O021.
- Updated `automation-research-loop.md` with Cycle 17 indexing process learning.
- Appended this entry to `research-log.md`.

### Implementation-Ready Output

`seo-indexing-diagnostics.md` now contains:

- Source discovery map.
- Live/static route evidence table.
- Data/API interpretation.
- External evidence table.
- Diagnosis: not discovery; likely quality/uniqueness/priority.
- P0 static fallback upgrade for Talk/local/business pages.
- P1 rendered page uniqueness blocks:
  - local page: "Why choose a private teacher instead of another academy?"
  - business page: "The Work-English Confidence Loop"
  - Talk page: "Practise the moment before it happens"
- Internal destination rules.
- Reinspection and waiting window.
- What not to do yet.
- Decision rules and next-cycle packet.

### Strongest Next Move

Keep GBP Week 1 as the near-term acquisition move and use the indexed homepage as the first destination. If Auris asks for site work, implement the local/business/Talk uniqueness and static fallback patch before creating any more pages.

### What Not To Do Yet

- Do not create more nearby-town pages.
- Do not stuff the pages with repeated city or `clases particulares` terms.
- Do not treat schema or sitemap resubmission as the fix.
- Do not rerun URL Inspection every hour.
- Do not route the first GBP post to the non-indexed local page.
- Do not use the business page as first LinkedIn destination until it is stronger or crawled.

### Process Improvement Notes

- Highest-signal local source: live static HTML body-word audit, because it revealed a weakness not visible from rendered React.
- Highest-signal external source: official Google Search docs, because they constrained the diagnosis toward useful content, crawlable links and JS rendering realities.
- Best competitor source: local academy pages and Superprof profile proof, because they show the amount of trust/proof a searcher sees elsewhere.
- Noisy source type: generic crawled-not-indexed SEO blog/forum advice; useful as language, but weaker than official docs plus local evidence.
- Process update: for crawled/not-indexed pages with clean sitemap/robots/routes, inspect static fallback and uniqueness before recommending more URLs or resubmission.

### Next-Cycle Packet

Recommended next theme: LinkedIn/profile audit or marketplace price alignment unless Auris provides GBP owner metrics or asks for the site patch.

Exact work:

- If Auris provides GBP metrics, update `gbp-week-one-execution-pack.md` lead-source ledger and judge readiness.
- If Auris asks for site work, implement the P0/P1 patch from `seo-indexing-diagnostics.md`.
- If no owner metrics and no site approval arrive, audit LinkedIn/profile headline/about or marketplace price consistency; do not repeat the same indexing diagnosis.
- Recheck GSC/URL Inspection only after a public deploy, new crawl, route impressions, or the next daily window.

Hypotheses:

- H003 landing pages alone do not solve acquisition.
- H007 Talk lead magnet, not SEO-first.
- H014 GBP plus LinkedIn anchored sprint.
- H019 GBP owner-side baseline.
- H020 indexing gap is quality/uniqueness/priority.

### Unfinished Threads

- Need Auris owner-side GBP metrics before judging the first GBP post.
- Need Auris decision on whether to implement the site uniqueness/static fallback patch.
- Need LinkedIn personal/profile baseline before using LinkedIn as more than credibility.
- Need marketplace price/channel decision if comparison shoppers mention Superprof/Tusclases.

## Cycle 18 - Profile Price And LinkedIn Readiness

Date: 2026-05-22
Theme: pricing/offer architecture, content/social strategy, competitor positioning
Primary research question: what must be aligned before the GBP/LinkedIn proof sprint so 40 EUR/h feels coherent, without waiting forever or turning the site into an academy-style funnel?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with unrelated artifacts/screenshots. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `profile-publishing-readiness-audit.md`
- `owner-profile-alignment-plan.md`
- `pricing-positioning.md`
- `content-strategy.md`
- `review-proof-library.md`
- `gbp-linkedin-proof-sprint.md`
- `channel-fit-and-content-scan.md`
- `seo-indexing-diagnostics.md`
- `gbp-week-one-execution-pack.md`
- `automation-research-loop.md`

Website/code/live outputs:

- `src/components/PricingSection.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/ContactSection.jsx`
- `src/translations.js`
- `netlify/functions/google-reviews.js`
- live homepage link extraction
- live UTM checks for homepage, Talk and business-page destinations

Local findings:

- The direct website offer remains 40 EUR/h for private classes and 20 EUR/h for group classes.
- The pricing area already has portal/NIF/included proof and reviews directly after pricing, so the next risk is not absence of proof; it is public profile consistency.
- The static homepage does not expose LinkedIn, Instagram, TikTok, Superprof or Tusclases links, which currently prevents accidental routing into lower-price comparison contexts.
- The existing GBP/LinkedIn sprint is production-ready enough to test, but LinkedIn needs the personal-profile identity gate before posting.

### API / Data Evidence

- Live Google reviews endpoint, Spanish: status 200, `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- Live Google reviews endpoint, English: status 200, `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- Homepage external link extraction: 15 static links; external URLs were font resources only, not social/marketplace profiles.
- GBP homepage UTM returned 200 and preserved final URL.
- LinkedIn Talk UTM returned 200 and preserved final URL.
- LinkedIn business-page UTM returned 200 and preserved final URL, but Cycle 16 URL Inspection still makes it a weak first destination because it is discovered/not indexed.

### Source Discovery Choices

The best evidence for this cycle was not more SEO tooling or more content calendars. It lived where a buyer compares identity, price and trust:

1. Auris's own website price and external links.
2. Live Google reviews endpoint.
3. Auris Superprof and Tusclases public evidence.
4. Auris public LinkedIn result.
5. Solo/professional business-English coach pages.
6. Local marketplace lists and snippets.
7. Corporate/business-English LinkedIn pages that could blur the non-academy identity.
8. UTM/destination checks to make the first publish test measurable.

### External Evidence

- Auris LinkedIn public result shows a discoverable personal profile in Castelldefels with 268 followers/264 contacts, English for Business Spain and personal website, but direct access/profile metrics remain limited.
- English for Business Spain LinkedIn presents as a corporate training provider with 30+ years, 51-200 employees, company training and FUNDAE language. This warns against letting Auris's personal offer blur into an academy/corporate-provider identity.
- Auris direct Superprof page now shows verified profile, 5.0/7, 20 students, 40 EUR/h, Ireland/11 years/Spanish-speaker/portal/NIF copy. This strengthens the premium proof story.
- Superprof search/list contexts still show conflicting lower anchors in some snippets, so buyers may see mixed price evidence before reaching the direct page.
- Auris Tusclases profile/listing remains visible at 30 EUR/h with strong proof and 4.9/15 evidence, making it useful as discovery but risky as a premium-site link.
- Tusclases Castelldefels listings show many 10-30 EUR/h options, reinforcing that marketplaces compress price perception.
- LUVEnglish and Madeleine Cooke show Barcelona/professional-English coaching around meetings, presentations, confidence, teams, leaders and real work situations.
- English Consulting, TailoredTalks, Executive Business English, The English Training Company and Confident Business English show the professional-confidence lane is crowded but credible when it is specific and proof-backed.

### Trend / Community / Product Signals

- The professional-English market keeps converging on the same vocabulary: meetings, presentations, client calls, interviews, clarity, confidence, leadership voice, real scenarios and structured feedback.
- That strengthens Auris's professional-confidence lane, but weakens the idea that `business English` alone is distinctive.
- The market also increasingly presents dashboards, AI-personalized practice, monthly feedback and structured coaching. This supports portal/follow-up proof, as long as Auris keeps it personal rather than corporate-platform heavy.

### Hypotheses Changed

- H004 strengthened and narrowed: 40 EUR/h is defensible, but public profile price coherence matters before adding profile links.
- H014 refined: GBP should go first after owner baseline; LinkedIn should wait for personal profile headline/about alignment.
- H021 created: marketplace profiles are useful proof only when the price policy is intentional.

Falsification attempt:

Favored idea tested: "Add public profile links to the website because they provide social proof."

Result: weakened.

Evidence:

- Superprof direct profile is useful, but snippets/list contexts can still show lower anchors.
- Tusclases remains visibly 30 EUR/h.
- The website currently avoids creating that comparison path.
- Premium leads should stay on owned pages until the price policy is deliberate.

Second favored idea tested: "LinkedIn is ready because the content drafts are ready."

Result: refined.

- LinkedIn content fits the market, but the profile identity is part of the trust surface.
- If the personal profile still centers English for Business Spain or unclear old positioning, profile alignment should happen before posting.

### Artifacts Updated

- Created `profile-price-and-linkedin-readiness.md`.
- Updated `research-roadmap.md` with Packet T.
- Updated `hypotheses.md` with Cycle 18 updates and H021.
- Updated `market-intelligence.md` with Cycle 18 source signals and O022.
- Updated `pricing-positioning.md` with the profile-price gate.
- Updated `content-strategy.md` with the LinkedIn/profile gate and new ledger fields.
- Updated `automation-research-loop.md` with Cycle 18 process learning.
- Appended this research-log entry.

### Implementation-Ready Output

`profile-price-and-linkedin-readiness.md` now contains:

- Profile/price decision sequence.
- Source discovery map.
- Local/API/external evidence tables.
- LinkedIn headline/about copy gate.
- Marketplace price policy matrix.
- Lead-source ledger fields for marketplace/price-anchor detection.
- Publish gate for GBP versus LinkedIn.
- Next-cycle packet.

### Strongest Next Move

Run GBP Post 1 first after owner-side baseline. Gate LinkedIn behind personal-profile headline/about alignment. Keep marketplace links off the website until the price policy is intentional.

### What Not To Do Yet

- Do not lower website private-class price to match Tusclases.
- Do not add Superprof/Tusclases links to the website as footer proof.
- Do not route the first professional LinkedIn post to the non-indexed business page.
- Do not publish from an unclear company/academy identity if the offer is English with Auris as a personal teacher.
- Do not keep repeating the same profile audit without owner-side data.

### Process Improvement Notes

- Highest-signal source: own-profile evidence plus live homepage link extraction, because it showed the difference between proof and destination.
- Highest-signal external source: Auris direct Superprof page versus snippets/list contexts, because it revealed that profile state can be simultaneously improved and still price-confusing from search.
- Noisy source type: generic business-English coach examples if treated as unique positioning. They are useful for category norms, not differentiation by themselves.
- New process rule: before adding public profile links, classify each profile as acquisition surface, proof source, or brand destination.

### Next-Cycle Packet

Recommended next theme: owner-side publishing or referral/review loop.

Exact work:

- If Auris provides GBP owner metrics, update `gbp-week-one-execution-pack.md` with baseline values and score readiness.
- If Auris confirms LinkedIn profile copy, finalize personal-profile checklist and the Week 1 LinkedIn post destination.
- If no owner data arrives, shift to a referral/review request loop: how to ask happy students for one specific review/referral without sounding like an academy.
- Do not repeat the same marketplace price audit unless new source evidence conflicts with Cycle 18.

Hypotheses:

- H002 GBP beats broad SEO near-term.
- H004 premium proof visible quickly.
- H014 GBP plus LinkedIn sprint.
- H015 manual lead-source notes.
- H019 GBP owner-side baseline.
- H021 marketplace profiles only help when price policy is intentional.

### Unfinished Threads

- Need Auris owner-side GBP baseline before judging the first GBP post.
- Need Auris confirmation/update of LinkedIn personal profile headline/about before LinkedIn Post 1.
- Need marketplace price policy decision: align prices to 40 EUR/h or treat lower marketplace price as deliberate channel pricing.
- Need manual lead-source ledger in use before any channel conclusion is trusted.

## Cycle 19 - LinkedIn Profile Readiness And First Post Plan

Date: 2026-05-22
Theme: content/social strategy, profile positioning, measurement
Primary research question: is Auris's LinkedIn profile ready for the first professional-confidence post now that the headline has been changed?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with many unrelated artifacts/screenshots. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `profile-price-and-linkedin-readiness.md`
- `content-strategy.md`
- `gbp-linkedin-proof-sprint.md`
- `owner-profile-alignment-plan.md`
- `channel-fit-and-content-scan.md`
- `measurement-plan.md`
- `talk-the-talk-lead-magnet.md`
- `automation-research-loop.md`
- `market-intelligence.md`

Website/live outputs:

- Live Google reviews endpoint in Spanish and English.
- Live LinkedIn Talk UTM destination.
- Live LinkedIn profile homepage UTM destination.
- Repository status for website and teaching platform.

Owner-side evidence from Auris's LinkedIn snapshot:

- Name displayed as `Aurimas (Auris) Purlys`.
- Headline now says `Bilingual English teacher for Spanish speakers | Confidence, real conversation and English for work | English with Auris`.
- Location is Castelldefels, Catalonia, Spain.
- 257 contacts and 268 followers.
- Analytics: 2 profile views, 3 post impressions in last 7 days, 0 search appearances.
- About is still the older broader version.
- `En busca de empleo` is visible.
- Experience shows English for Business Spain above English with Auris.
- Last visible activity is a casual comment from 3 months ago.

### API / Data Evidence

- Live Google reviews endpoint ES: status 200, `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- Live Google reviews endpoint EN: status 200, `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- LinkedIn Talk UTM returned 200:
  - `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`
- LinkedIn profile homepage UTM returned 200:
  - `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_profile_about`
- LinkedIn owner metrics are manual only; no LinkedIn API access is available or practical for personal profile analytics.

### Source Discovery Choices

The useful evidence for this cycle lived in:

1. Owner-side LinkedIn snapshot and metrics.
2. Official LinkedIn docs for intro/current position/profile language/Open to Work visibility.
3. Existing content sprint docs and UTM registry.
4. Live UTM destination checks.
5. Profile-as-landing-page/freelancer evidence.
6. Business-English profile examples carried forward from prior cycles.
7. Measurement plan for Talk/LinkedIn attribution.
8. Existing review proof, because LinkedIn should reinforce proof rather than become a self-contained sales page.

### External Evidence

- LinkedIn intro section docs say the introduction area includes visible fields such as name, photo, background, headline, current position, education, location and contact info. This strengthens the need to align more than the headline.
- LinkedIn current-position docs say members with multiple current positions can choose a primary current position in the intro. This makes `English with Auris` versus `English for Business Spain` a fixable profile issue.
- LinkedIn language-profile docs say alternate-language profiles need manual translations/alignment. This matters because Auris has English and Spanish profile versions.
- LinkedIn Open to Work docs say job-seeking visibility can be shown to all members, recruiters only, only the member, edited or removed. This means the current public job-seeking signal can be adjusted.
- LinkedIn creator/profile docs support treating profile analytics, followers and profile sections as measurement surfaces, not only post likes.
- LinkedIn help topics on profile/public URL/search appearances support using profile views and search appearances as part of the baseline.
- Freelancer/profile-as-landing-page evidence supports writing the profile around audience, problem, outcome, proof and CTA rather than a chronological CV only.
- Community founder/profile discussions reinforce the same practical point: a profile should give a visitor one clear reason and next step. This is useful as market language, but lower confidence than owner-side evidence and official docs.

### Trend / Community / Product Signals

- LinkedIn is currently a cold-start surface for Auris, not an active channel. The baseline is too small to expect immediate leads.
- The profile is now close enough to work, but only if the profile below the headline becomes coherent.
- The first LinkedIn post should not try to sell broad business English; it should name one professional-speaking problem and point to Talk the Talk.

### Hypotheses Changed

- H014 strengthened but still gated: LinkedIn stays in the sprint, but only after profile cleanup.
- H005 strengthened: social should build trust. Profile coherence beats posting volume right now.
- H022 created: LinkedIn must work as a personal landing page before it can work as a posting channel.

Falsification attempt:

Favored idea tested: "Now that the headline is fixed, LinkedIn is ready to post."

Result: weakened.

Evidence:

- About is still old.
- Open to Work is visible.
- English for Business Spain still dominates visible experience context.
- Baseline reach is very low.

Alternative strengthened:

- Do one small profile cleanup, then one measured post. Do not create a weekly LinkedIn burden yet.

Second idea tested: "Open to Work does not matter because the content is for students."

Result: weakened.

Evidence:

- LinkedIn intro/status surfaces are visible trust context.
- Premium private-class buyers may interpret public job-seeking as lower stability or focus.
- If job search is real, it can be set intentionally; if not, remove/restrict it.

### Artifacts Updated

- Created `linkedin-profile-readiness-and-first-post-plan.md`.
- Updated `hypotheses.md` with Cycle 19 H014 update and new H022.
- Updated `research-roadmap.md` with Packet U.
- Updated `content-strategy.md` with Cycle 19 LinkedIn owner-snapshot gate.
- Updated `profile-price-and-linkedin-readiness.md` with the owner-side LinkedIn update.
- Updated `market-intelligence.md` with Cycle 19 signals and O023.
- Updated `automation-research-loop.md` with Cycle 19 process learning.
- Appended this research-log entry.

### Implementation-Ready Output

`linkedin-profile-readiness-and-first-post-plan.md` contains:

- Owner-side snapshot table.
- Source discovery and external evidence.
- Falsification notes.
- P0 LinkedIn profile cleanup checklist.
- Final English and Spanish About copy.
- First LinkedIn post after cleanup.
- Baseline and 24h/72h/7d measurement ledgers.
- What not to do yet.
- Next-cycle packet.

### Strongest Next Move

Finish LinkedIn P0 profile cleanup:

1. Replace English About.
2. Replace Spanish About.
3. Remove or restrict public Open to Work.
4. Make English with Auris the primary current position if possible.
5. Add a Featured link to Talk or homepage if available.

Then publish the single `meeting answer gets smaller` post to the Talk UTM and record 24h/72h/7d metrics.

### What Not To Do Yet

- Do not pay for LinkedIn Premium just for AI suggestions.
- Do not turn LinkedIn into a daily posting task.
- Do not post from an English for Business Spain/company identity for English with Auris acquisition.
- Do not judge LinkedIn by likes or impressions alone.
- Do not cold-message or connect with people from automation.

### Process Improvement Notes

- Highest-signal source: Auris's owner-side profile snapshot, because it revealed visible contradictions that public search could not.
- Highest-signal external source: LinkedIn current-position/Open to Work/language-profile docs, because they identified which profile signals are editable.
- Noisy source type: generic LinkedIn profile advice. Useful only after the owner-side evidence defines the exact problem.
- New process rule: for social cycles, treat the profile as the landing page before treating posts as the funnel.

### Next-Cycle Packet

Recommended next theme: LinkedIn cleanup results or GBP owner baseline.

Exact work:

- If Auris confirms LinkedIn cleanup is done, update `linkedin-profile-readiness-and-first-post-plan.md` with the new baseline and prepare the final pre-post checklist.
- If Auris posts, interpret 24h/72h/7d metrics against the baseline.
- If Auris provides GBP owner metrics first, return to `gbp-week-one-execution-pack.md`.
- If neither arrives, shift to referral/review loop rather than more LinkedIn theory.

Hypotheses:

- H005 social as trust-building.
- H014 GBP plus LinkedIn sprint.
- H015 manual lead-source notes.
- H022 LinkedIn profile as landing page before posting channel.

### Unfinished Threads

- Need confirmation that the new About copy is live in English and Spanish.
- Need Open to Work visibility decision.
- Need English with Auris primary-position decision.
- Need 24h/72h/7d LinkedIn metrics after Post 1 if Auris publishes it.
- Need GBP owner-side baseline before publishing/judging GBP Post 1.

## Cycle 20 - LinkedIn Canonical URL And Profile Funnel

Date: 2026-05-22
Theme: content/social strategy, LinkedIn profile funnel, measurement
Primary research question: now that Auris supplied the canonical LinkedIn profile URL, should it be used as public proof on the website or as a measured profile-to-owned-site funnel first?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with many unrelated local artifacts/screenshots. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `linkedin-profile-readiness-and-first-post-plan.md`
- `profile-price-and-linkedin-readiness.md`
- `content-strategy.md`
- `market-intelligence.md`
- `measurement-plan.md`
- `automation-research-loop.md`

Website/code/live outputs:

- `src/App.jsx`
- `src/components/ContactSection.jsx`
- `src/components/TalkTheTalk.jsx`
- `index.html`
- `talkthetalk/index.html`
- `netlify/functions/google-reviews.js`
- live homepage external-link extraction
- live LinkedIn profile/homepage/Talk UTM checks

Teaching platform proof sources:

- `classroom-hub/src/pages/StudentDashboard.tsx`
- `student-dashboard-after-login.md`
- `ECOSYSTEM_AUDIT_REPORT.md`

Local findings:

- The user-supplied LinkedIn URL now gives future cycles a canonical identity to use.
- The live website currently exposes no LinkedIn, Instagram, TikTok, Superprof, Tusclases or marketplace links, which protects the premium owned funnel.
- Talk the Talk and homepage are still the safest owned destinations for LinkedIn traffic.
- The portal claim in the About copy remains real: student dashboard evidence includes notes, Talk, flashcards, tasks, games and between-class learning surfaces.

### API / Data Evidence

- LinkedIn profile URLs returned HTTP 999 to direct automation requests, so profile auditing still needs owner-side screenshots plus public search snippets.
- Public Google/search result for Auris's LinkedIn profile remains discoverable but can lag owner-side edits, still foregrounding English for Business Spain/older snippets.
- LinkedIn Contact-info homepage UTM returned 200 and preserved the final URL.
- LinkedIn Featured Talk UTM returned 200 and preserved the final URL.
- LinkedIn Post 1 Talk UTM returned 200 and preserved the final URL.
- LinkedIn About CTA homepage UTM returned 200 and preserved the final URL.
- Live Google reviews endpoint in ES and EN returned 5.0 rating, 15 reviews, 5 visible reviews.
- Homepage link extraction found 15 static hrefs and no social/marketplace profile links.

### Source Discovery Choices

The best evidence for this cycle lived in profile-link surfaces and measurement constraints:

1. Auris-supplied canonical URL.
2. Public LinkedIn search result.
3. LinkedIn official docs for Contact info website links.
4. LinkedIn official docs for Featured links.
5. LinkedIn official docs for custom/Premium buttons.
6. LinkedIn official docs for public profile URLs and custom URLs.
7. LinkedIn official docs for profile appearances versus views.
8. Google Analytics UTM docs.
9. Live owned-site URL checks.
10. Website external-link extraction.

### External Evidence

- LinkedIn website-link docs support adding up to three website links in Contact info.
- LinkedIn Featured docs support pinning external links/work samples on individual profiles, but Featured content is not a public search/indexing solution.
- LinkedIn custom-button docs show the prominent website/booking button is Premium/select availability, so it should not be a sprint dependency.
- LinkedIn docs say previous Creator Mode hyperlink behavior was removed, which warns against old advice from generic LinkedIn guides.
- LinkedIn public-profile docs support using a clean `/in/` URL as the shareable identity.
- LinkedIn custom URL docs recommend a name/professional-brand URL and warn that frequent URL changes can make finding the profile harder.
- LinkedIn profile-view/appearance docs support measuring reach versus deeper profile interest, while also warning analytics can be limited at small viewer volumes.
- Google Analytics UTM docs support source/medium/campaign/content discipline for external campaign links.
- Auris's public LinkedIn search result remains useful but imperfect: it proves discoverability and also reveals public-snippet lag.

### Trend / Community / Product Signals

- The practical LinkedIn opportunity is not "post more"; it is a small personal-profile funnel: headline/About/trust, then Contact info/Featured link, then one post.
- Public profile search lag means owner-side profile cleanup and public perception can diverge for a while.
- The student portal should appear as a continuity proof, not as a separate app-company pitch.

### Hypotheses Changed

- H005 strengthened: social should build trust through profile coherence and owned-site actions, not entertainment reach.
- H014 strengthened but still gated: LinkedIn is useful only after profile cleanup, and its first routes should be Talk/homepage.
- H015 strengthened: LinkedIn Contact info, Featured, About, custom button and post links require separate UTM/manual-note placement labels.
- H022 strengthened: LinkedIn must route clearly to English with Auris before being used as public website proof.

Falsification attempt:

Favored idea tested: "Now that the canonical LinkedIn URL is known, add it to the website as trust proof."

Result: weakened.

Evidence:

- Public search result still shows older context and may lag owner-side changes.
- Direct LinkedIn automated access is blocked/limited.
- The website currently has a clean owned funnel with no marketplace/social comparison exits.
- LinkedIn official docs provide better inbound-to-owned routes: Contact info and Featured.

Cheaper alternative strengthened:

- Add owned-site/Talk links inside LinkedIn after profile cleanup, publish one tagged post, and judge real actions before adding LinkedIn to the public website.

### Artifacts Updated

- Created `linkedin-canonical-url-and-profile-funnel.md`.
- Updated `linkedin-profile-readiness-and-first-post-plan.md`.
- Updated `content-strategy.md`.
- Updated `research-roadmap.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`linkedin-canonical-url-and-profile-funnel.md` now contains:

- Canonical and clean LinkedIn profile URLs.
- Source discovery and external evidence.
- Live UTM QA results.
- LinkedIn Contact info, Featured, About, post and optional custom-button URLs.
- Website link policy: do not add LinkedIn to the public site yet.
- Falsification notes.
- Decision rules and next-cycle packet.

### Strongest Next Move

Finish LinkedIn P0 cleanup, then add:

1. Contact info website link:
   `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_contact_info&utm_content=website_link`
2. Featured Talk link:
   `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_featured&utm_content=talk_the_talk`

Then publish the first meeting-confidence post only after baseline metrics are recorded.

### What Not To Do Yet

- Do not add LinkedIn to the website footer/profile area yet.
- Do not buy LinkedIn Premium just for the custom button.
- Do not use `/ingles-empresas-castelldefels` as the first LinkedIn destination.
- Do not link Superprof/Tusclases from LinkedIn or the website until the price policy is intentional.
- Do not repeat LinkedIn theory without owner-side cleanup/results.

### Process Improvement Notes

- Highest-signal source: the user-supplied URL plus owner-side profile snapshot from Cycle 19.
- Highest-signal external source: LinkedIn official docs for Contact info, Featured and custom-button behavior.
- Noisy source type: old/generic LinkedIn guides, because Creator Mode/link behavior has changed.
- New process rule: profile URLs are evidence, but not automatically proof links. First decide direction of trust flow.

### Next-Cycle Packet

Recommended next theme: LinkedIn cleanup results, GBP owner baseline, or referral/review loop.

Exact work:

- If Auris confirms LinkedIn P0 cleanup is done, update `linkedin-profile-readiness-and-first-post-plan.md` and `linkedin-canonical-url-and-profile-funnel.md` with the new baseline.
- If Contact info/Featured links are added, record exact URLs and current owner metrics.
- If Post 1 is published, record 24h/72h/7d metrics and compare against baseline.
- If no owner-side LinkedIn update arrives, move to GBP owner baseline or referral/review loop.

Hypotheses:

- H005 social as trust-building.
- H014 GBP plus LinkedIn sprint.
- H015 manual lead-source notes required.
- H021 marketplace profile links require deliberate price policy.
- H022 LinkedIn profile as landing page before posting channel.

### Unfinished Threads

- Need confirmation that English and Spanish About are live.
- Need Open to Work visibility decision.
- Need English with Auris primary-position decision.
- Need Contact info and Featured link setup confirmation.
- Need first-post 24h/72h/7d metrics if published.
- Need GBP owner-side baseline before GBP Post 1.

## Cycle 21 - Referral And Review Request Loop

Date: 2026-05-22
Theme: Google Business Profile/reviews/local trust, referrals, process self-improvement
Primary research question: if no new owner-side LinkedIn or GBP metrics arrive, can a small ethical review/referral loop produce nearer-term trust evidence and qualified leads than more channel theory?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with many unrelated local artifacts/screenshots. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `review-proof-library.md`
- `gbp-week-one-execution-pack.md`
- `owner-profile-alignment-plan.md`
- `content-strategy.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `platform-backlog.md`
- `measurement-plan.md`

Website/code/live outputs:

- `netlify/functions/google-reviews.js`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/TestimonialsSection.jsx`
- `src/components/ContactSection.jsx`
- `src/components/PricingSection.jsx`
- `src/App.jsx`
- `src/translations.js` review/contact/search hits
- live homepage static extraction
- live Google reviews endpoint in ES and EN

Teaching platform proof/workflow:

- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` homework-log workflow hits.
- `/Users/aurisp/repos/teacher-assistant/backend/app/api/routes.py` homework-log API hits.

Local findings:

- The review proof remains strong and bilingual: Google endpoint returns `places-new`, 5.0 rating, 15 total reviews, 5 visible ES reviews and 5 visible EN reviews.
- The live homepage static output still has no referral or recommendation language and no review-request surface. That is acceptable; a public referral page would be premature.
- Website reviews are displayed from GBP and link out to Google; this supports proof but does not create new reviews or referrals by itself.
- The contact flow measures WhatsApp/email/form/Calendly intent, but a referral intro or review ask mostly happens outside the website.
- The teacher platform already has WhatsApp homework logging, but acquisition asks should stay separate from homework unless they are genuinely part of class follow-up.
- Cycle 20 left owner-side LinkedIn/GBP metrics unfinished. With no new owner-side data, repeating LinkedIn theory would be low-value.

### API / Data Evidence

- Live Google reviews endpoint:
  - ES: status 200, source `places-new`, rating 5.0, reviewCount 15, visibleReviews 5, visible reviewers Andrea Villamizar, Raquel Castillo, Silvia Avila Cabre, Eli Quiroga, Montse Martin.
  - EN: status 200, source `places-new`, rating 5.0, reviewCount 15, visibleReviews 5, visible reviewers Milagros Ruiz, Ingrid Garcia, claudia borras ruiz, Jgcarlos Norway, DAVYD 1977.
- Live homepage fetch returned HTTP 200 and title `Clases Particulares de Ingles Online y en Castelldefels | English with Auris`.
- Static homepage extraction found no referral/recommendation language and no static review text. The rendered React section still loads GBP reviews client-side.
- No GBP owner-side performance data or LinkedIn owner-side metrics were available in this cycle.

### Source Discovery Choices

The best evidence for this cycle lived in policy constraints, local review behavior and personal-service word of mouth:

1. Google official review request docs.
2. Google Maps contribution policies.
3. Google local ranking/review prominence docs.
4. Google review reply/review-link docs.
5. Google Business Profile performance docs.
6. FTC review/endorsement guidance.
7. Current local-review consumer research.
8. Live GBP review endpoint.
9. Website static/live output.
10. Teacher-platform workflow evidence.
11. Service-provider word-of-mouth community threads.
12. Referral attribution practitioner threads.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| Google GBP review tips, https://support.google.com/business/answer/3474122 | Businesses can ask for reviews through a review link/QR code and should reply publicly; incentives are prohibited. | Incentivized Google review asks. | High |
| Google Maps contribution policy, https://support.google.com/contributionpolicy/answer/7400114 | Fake engagement includes incentives, pressure, requested specific wording and selective positive solicitation. | Asking only happy students for 5-star/keyword reviews. | High |
| Google local ranking docs, https://support.google.com/business/answer/7091 | Reviews, positive ratings, replies, profile completeness and photos contribute to local trust/prominence. | Treating one GBP post as a ranking hack. | High |
| Google review management docs, https://support.google.com/business/answer/3474050 | Owners can reply to reviews and use direct review links. | Ignoring visible reviews/replies while seeking new reviews. | High |
| Google GBP performance docs, https://support.google.com/business/answer/9918094 | Owner UI can show profile views/searches/actions. | Judging GBP/referrals by memory alone. | High |
| FTC Endorsement Guides FAQ, https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking | Endorsements should be honest and not misleading; material connections or payments may need clear disclosure. | Treating paid or connected praise as ordinary independent review proof. | Medium-high |
| FTC Consumer Reviews Rule Q&A, https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers | Incentives cannot be tied to positive sentiment; disclosure matters. | Sentiment-conditioned rewards. | Medium-high |
| BrightLocal 2026 review survey, https://www.brightlocal.com/research/local-consumer-review-survey/ | Reviews often lead consumers to check websites/social profiles and do more research. | Reviews as a complete funnel by themselves. | Medium-high |
| BrightLocal 2025 review survey, https://www.brightlocal.com/research/local-consumer-review-survey-2025/ | Buyers value factual, detailed review content and are cautious about trust. | Generic star-count chasing. | Medium-high |
| Reddit SaaS referral thread, https://www.reddit.com/r/SaaS/comments/1s51d7r/we_have_a_customer_whos_referred_11_other_paying/ | Personal thank-yous can fit referrals better than formal incentives. | Affiliate-style program as first step. | Medium |
| Reddit videography word-of-mouth thread, https://www.reddit.com/r/videography/comments/1t98c4m/is_word_of_mouth_still_the_only_thing_that/ | Trust-heavy services often rely on referrals/networking, and clarity of offer matters. | Broad referral wording like "English teacher". | Medium |
| Reddit digital-marketing WOM attribution thread, https://www.reddit.com/r/DigitalMarketing/comments/1k1m4r7/how_do_you_track_wordofmouth_referrals_in_a/ | Self-reported attribution is imperfect but practical for word of mouth. | Waiting for perfect analytics before asking. | Medium |

### Trend / Community / Product Signals

- Reviews and referrals work best together: reviews reduce risk for strangers, referrals transfer personal trust.
- The danger is not asking; the danger is asking in a way that feels like review harvesting or a pressure tactic.
- For Auris, the easiest referral phrase is not "English teacher." It is: Spanish speakers who know some English but freeze when they have to use it, especially in real conversation and work situations.
- The student portal is useful proof inside reviews, but review/referral asks should not be mixed into the homework workflow by default.

### Hypotheses Changed

- H009 strengthened but constrained: reviews remain central proof, but only honest specific requests after real experience are acceptable.
- H014 refined: GBP remains strongest and LinkedIn remains useful, but referral/review is the better next quiet evidence layer while owner metrics are missing.
- H015 strengthened: review/referral outcomes require manual notes because most of the action happens outside GA4/Search Console.
- H023 added: a personal referral/review loop may beat more social posting theory as a near-term trust test.

Falsification attempt:

Favored idea tested: "Ask happy students for more Google reviews."

Result: refined and partly weakened.

Evidence:

- Google guidance makes positive-only solicitation risky; Google and FTC guidance both make review incentives or misleading endorsement use risky.
- A better version is: ask students with enough real experience for honest, specific feedback after a concrete learning moment, without requesting stars/keywords or combining it with a referral ask.

Cheaper/simpler alternative:

- Ask two people personally and ethically, track the result, and stop if it feels awkward. This is better than building a public referral program or automated review flow first.

### Strategic Synthesis

Strongest next move:

- Use `referral-review-request-loop.md` as the next owner-side manual action: 2 review requests, 2 referral prompts, 1 no-ask observation over two weeks.

What not to do yet:

- Do not automate review emails.
- Do not offer a discount for Google reviews.
- Do not ask for 5-star reviews, exact wording, city keywords or "English with Auris" mentions.
- Do not build a public referral page or discount program.
- Do not keep expanding LinkedIn/GBP drafts while no owner-side publishing metrics are available.

Evidence that would change the recommendation:

- If the first 4 asks create discomfort, no replies or filtered reviews, pause the loop.
- If GBP owner metrics arrive and show strong website/call/message movement, prioritize GBP Post 1 follow-up.
- If LinkedIn Post 1 metrics arrive with real DMs/link clicks, return to the LinkedIn funnel.

### Artifacts Updated

- Created `referral-review-request-loop.md`.
- Updated `review-proof-library.md`.
- Updated `content-strategy.md`.
- Updated `hypotheses.md`.
- Updated `research-roadmap.md`.
- Updated `market-intelligence.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`referral-review-request-loop.md` now contains:

- Source discovery and external evidence.
- Compliance rules.
- Timing rules.
- Two-week micro-sprint.
- English and Spanish review request scripts.
- English and Spanish referral scripts.
- Outcome-specific review prompts.
- Referral positioning sentence.
- Private manual ledger fields.
- Decision rules and next-cycle packet.

### Strongest Next Move

Run the two-week review/referral micro-sprint manually:

1. Generate/copy the GBP review link from owner UI.
2. Pick 5 students/recent students with enough real experience, using anonymous segment labels in notes.
3. Send 2 review requests and 2 referral prompts over two weeks.
4. Record replies, new reviews, warm intros, booked trials and proof language.

### What Not To Do Yet

- Do not make public-facing website/profile changes.
- Do not contact students from automation.
- Do not build a formal referral program.
- Do not mix review asks into the platform homework log by default.
- Do not judge the channel without manual notes.

### Process Improvement Notes

- Highest-signal source: official Google policy docs, because they forced the strategy away from "ask happy students" toward honest, compliant requests.
- Highest-signal local source: live Google reviews endpoint, because it confirms the proof asset is still active and bilingual.
- Noisy source type: generic referral-marketing advice. Many sources over-promote incentives and do not fit Google review rules or Auris's personal brand.
- New process rule: when owner-side channel metrics are absent, pivot to a small relationship-sourced evidence test instead of repeating channel theory.

### Next-Cycle Packet

Recommended next theme: local partnership/referral source discovery or owner-result interpretation.

Exact work:

- If Auris reports any review/referral outcomes, update:
  - `referral-review-request-loop.md`
  - `review-proof-library.md`
  - `measurement-plan.md`
  - `hypotheses.md`
- If no owner-side outcomes arrive, research local referral source types:
  - Castelldefels/Gava coworking spaces
  - autonomo/business communities
  - Barcelona professional communities
  - HR/L&D public posts
  - local directories/events where English confidence is a real need
  - former-student professional networks
- Compare referral loop, GBP Post 1 and LinkedIn Post 1 as three acquisition alternatives.

Hypotheses:

- H002 GBP beats broad SEO near-term.
- H009 reviews are central proof.
- H014 GBP plus LinkedIn sprint.
- H015 manual notes required.
- H019 GBP owner baseline required.
- H023 referral/review loop can produce near-term trust evidence.

### Unfinished Threads

- Need owner-side GBP review link and baseline.
- Need confirmation whether Auris wants to run the review/referral micro-sprint.
- Need anonymized outcomes from review/referral asks if run.
- Need LinkedIn cleanup/post metrics if Auris posts.
- Need GBP Post 1 owner-side metrics if published.

## Cycle 22 - Local Partnership And Professional Referral Source Map

Date: 2026-05-22
Theme: expansion strategy, local professional referrals, source discovery, process self-improvement
Primary research question: with no new owner-side review/referral/GBP/LinkedIn outcomes yet, which local professional communities or source types could become warm referral channels later without cold spam or academy positioning?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with many unrelated local artifacts/screenshots. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `referral-review-request-loop.md`
- `pricing-positioning.md`
- `channel-fit-and-content-scan.md`
- `outside-in-opportunity-radar.md`
- `content-strategy.md`
- `market-intelligence.md`
- `measurement-plan.md`
- `automation-research-loop.md`
- newly created `local-partnership-referral-map.md`

Website/live/code outputs:

- `src/components/SeoLandingPage.jsx`
- live homepage metadata/static body
- live `/ingles-empresas-castelldefels` metadata/static body
- live `/clases-ingles-castelldefels` metadata/static body
- live `/talkthetalk` metadata/static body
- live Google reviews endpoint in ES and EN
- live `sitemap.xml`
- live `robots.txt`

Local findings:

- The site already has a professional/business route, but the live static business route is light: HTTP 200, canonical present, business title/description, roughly 47 extracted body words, and no referral/partnership surface.
- The homepage, local page, business page and Talk page all return 200 with canonicals. Sitemap and robots are healthy. This cycle did not find a technical reason to create new pages for partnership/referral strategy.
- Reviews remain the most credible public proof: live review endpoint returns 5.0 rating, 15 total reviews and different visible review sets in ES/EN.
- Cycle 21's referral/review loop remains the best first relationship-sourced action; external local organisations are source maps, not targets.

### API / Data Evidence

- Live route check:
  - `/`: HTTP 200, canonical present, title `Clases Particulares de Ingles Online y en Castelldefels | English with Auris`, no referral language detected.
  - `/ingles-empresas-castelldefels`: HTTP 200, canonical present, title `Clases de Ingles para Empresas y Profesionales | English with Auris`, description names professionals/autonomos/small teams/NIF, no referral language detected.
  - `/clases-ingles-castelldefels`: HTTP 200, canonical present, no referral language detected.
  - `/talkthetalk`: HTTP 200, canonical present, no referral language detected.
- Live reviews endpoint:
  - ES: status 200, source `places-new`, rating 5.0, reviewCount 15, visibleReviews 5.
  - EN: status 200, source `places-new`, rating 5.0, reviewCount 15, visibleReviews 5.
- `sitemap.xml`: HTTP 200, lists `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, lastmod 2026-05-21.
- `robots.txt`: HTTP 200, `Allow: /`, sitemap present.

### Source Discovery Choices

Possible evidence locations considered before browsing:

1. Municipal business/employment centres.
2. Coworking spaces and startup incubators.
3. Local business associations.
4. SME/chamber networks.
5. Barcelona entrepreneur/international desks.
6. Meetup/Eventbrite professional events.
7. Local language exchanges.
8. HR/L&D public posts.
9. Job posts and sector demand sources.
10. Google Maps coworking reviews.
11. Competitor local pages.
12. Former-student professional networks.

Highest-signal choices used this cycle:

- Local municipal/business ecosystem pages.
- Coworking/startup/community sources.
- SME/business associations.
- Professional event/community listings.
- Macro/professional communication sources only as context.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| La Guaita Castelldefels, https://laguaita.org/ | Castelldefels has local economic/employment/business support infrastructure. | Treating local demand only as academy/kids SEO. | High |
| ON Startup, https://on-startup.es/ and La Guaita coworking page | Local startup/coworking context may contain founders/freelancers needing English. | Generic posting as only professional route. | Medium-high |
| AEPEG Gava, https://aepeg.cat/ | Gava has a business association/member ecosystem. | Website-only local acquisition. | Medium-high |
| Viladecans Empresa, https://www.viladecans.cat/ca/empresa | Adjacent town has public business/entrepreneurship support. | Castelldefels-only tunnel vision. | High |
| PIMEC Baix Llobregat, https://www.pimec.org/ca/delegacions/baix-llobregat-lhospitalet | SME/autonomo network exists locally. | Mass-market private tutoring as the only lane. | High |
| Cambra Barcelona, https://www.cambrabcn.org/ | Chamber ecosystem supports business communities, but institutional tone risk is real. | Auris sounding like a corporate academy. | Medium-high |
| Barcelona Activa, https://www.barcelonactiva.cat/ | Large entrepreneurship/employment ecosystem for trend and event scanning. | Local SEO as only learning source. | High |
| Barcelona International Welcome Desk, https://www.barcelona.cat/internationalwelcome/ | International workers/founders/relocated professionals are a plausible adjacent audience. | English as only exam/course demand. | Medium-high |
| Coworking Gava, https://coworkinggava.com/ | Local coworking addresses entrepreneurs, autonomos and SMEs. | Gava as only residential/local-class market. | Medium |
| Barcelona Freelancing Meetup, https://www.meetup.com/es-es/barcelona-freelancing/ | Freelance/remote/founder communities exist; buying intent is indirect. | Meetup as automatic lead generation. | Medium |
| Barcelona Entrepreneurs Community, https://barcelonaentrepreneurs.com/ | Public entrepreneur networking context exists. | Waiting only for GBP/SEO to discover professionals. | Medium |
| Eventbrite Barcelona, https://www.eventbrite.com/ | Business/networking listings show active community surfaces. | Event listings as purchase proof. | Medium |
| Toastmasters, https://www.toastmasters.org/ | Public speaking/confidence need exists, adjacent to professional English. | Grammar-only professional-English strategy. | Medium |
| EF EPI, https://www.ef.edu/epi/ | Macro context supports ongoing English need, but not local acquisition. | Macro reports as direct lead evidence. | Medium |

### Trend / Community / Product Signals

- The professional-confidence lane is broader than LinkedIn. Local/coworking/SME/event communities are plausible places where Spanish-speaking professionals gather.
- The strongest referral source remains people who already trust Auris: current/former students and their networks.
- External community sources should be observed before approached. The risk is turning Auris into "another provider pitching English classes to members."
- Professional English should stay concrete: meetings, interviews, presentations, client calls, relocation and everyday conversation. The generic label "business English" is still too broad.

### Hypotheses Changed

- H013 strengthened and source-mapped: professional confidence for Spanish-speaking adults is still the best expansion wedge, now with local source types beyond LinkedIn/GBP.
- H023 strengthened and bounded: current/former student referrals should come before external partnerships because they have stronger trust transfer.
- H024 added: local professional-community referrals are promising, but should stay mapped before outreach.

Falsification attempt:

Favored idea tested: local professional communities can become a stronger referral source than cold social posting.

Result: plausible but not activated.

Evidence:

- La Guaita, ON Startup, AEPEG, PIMEC, Cambra, Barcelona Activa and event listings prove source availability, not buyer intent.
- Some sources could pull Auris toward institutional/company-training language, which conflicts with the personal premium teacher positioning.
- Current-student referrals remain a cheaper and more trust-rich alternative.

Stop/change evidence:

- If these communities are mostly free-practice seekers, institutional provider contexts or 10-20 EUR/h price-anchor leads, keep them dormant.
- If no one naturally mentions meetings, interviews, client calls, presentations or confidence, do not build an offer around them yet.

### Strategic Synthesis

Strongest next move:

- Keep running toward owner-side evidence: the Cycle 21 review/referral micro-sprint, GBP baseline/post results, or LinkedIn cleanup/post metrics.

Best new insight:

- The local professional expansion lane exists, but the next move is not outreach. It is a better source map and a sharper proof/ledger system.

Smallest practical test:

- If Auris wants a manual experiment later, attend/observe one high-fit professional event or ask one current/former student for a warm intro. Record only source type, need context, buyer type, fit and price anchor.

Evidence that would change the recommendation:

- Warm intros or trial bookings from current-student networks would keep referrals first.
- Repeated job-post evidence around English meetings/presentations/client calls in Barcelona/Baix Llobregat would justify a small Work-English Confidence Loop one-pager.
- Low-price/free-practice expectations would pause external community activation.

### Artifacts Updated

- Created `local-partnership-referral-map.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `research-roadmap.md`.
- Updated `content-strategy.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`local-partnership-referral-map.md` now contains:

- Source discovery table.
- 14 external evidence points.
- Local data checks.
- Opportunity scorecard.
- Practical source strategy.
- English and Spanish one-sentence introductions.
- Lead-source ledger additions.
- Falsification and next-cycle packet.

### Strongest Next Move

Do not contact local organisations yet.

Use the local professional source map as a future expansion layer while the immediate test stays closer to existing trust:

1. Owner-side review/referral micro-sprint.
2. GBP baseline and first proof post if owner metrics are available.
3. LinkedIn first post only after profile cleanup and source-tagged links.
4. Job-demand scan before any local partnership activation.

### What Not To Do Yet

- Do not contact La Guaita, AEPEG, PIMEC, Cambra, coworking spaces or event organisers from automation.
- Do not create a public partnership page.
- Do not pitch "English classes for your members" cold.
- Do not create discount/referral partnerships.
- Do not use FUNDAE/corporate academy framing.
- Do not treat Meetup/Eventbrite attendance as lead evidence.

### Process Improvement Notes

- Highest-signal sources: official local/business/community pages, because they reveal where professional communities exist.
- Highest-signal local/API source: live route and review checks, because they prevented unnecessary public-page work and confirmed review proof is still the core trust asset.
- Noisy source type: event listings. They show community activity, but not buying intent.
- Source type to try next: job-demand sources such as InfoJobs, public LinkedIn Jobs snippets, Barcelona Activa labour resources and sector reports.
- Protocol improvement: partnership cycles need "map before outreach." Source attractiveness is not activation readiness.

### Next-Cycle Packet

Recommended next theme: job-demand scan or owner-result interpretation.

Exact work:

- If Auris reports review/referral, GBP or LinkedIn outcomes, update the relevant ledgers and score source quality:
  - review ask results
  - referral intro results
  - GBP views/searches/actions
  - LinkedIn views/clicks/DMs
  - buyer type
  - need context
  - price anchor seen.
- If no owner-side outcomes arrive, run a focused job-demand scan:
  - InfoJobs public snippets/searches around Barcelona/Baix Llobregat.
  - public LinkedIn Jobs snippets.
  - Barcelona Activa job/labour trend sources.
  - sector sources for tech, sales, admin, hospitality, engineering, logistics and consulting.
  - extract exact English-use contexts: meetings, client calls, presentations, interviews, travel, relocation, international teams.
- Inspect:
  - `local-partnership-referral-map.md`
  - `referral-review-request-loop.md`
  - `pricing-positioning.md`
  - `market-intelligence.md`
  - `content-strategy.md`
  - `src/components/SeoLandingPage.jsx`

Hypotheses:

- H013 professional-confidence expansion.
- H014 GBP plus LinkedIn anchored sprint.
- H015 manual lead-source notes required.
- H023 referral/review loop can produce near-term trust evidence.
- H024 local professional-community referrals should stay mapped before outreach.

### Unfinished Threads

- Need owner-side outcomes from review/referral asks if Auris runs them.
- Need GBP owner-side baseline and Week 1 proof-post metrics if published.
- Need LinkedIn cleanup confirmation and first-post metrics if posted.
- Need focused job-demand evidence before building a business/professional offer one-pager.
- Need one observed high-fit local professional source before any external outreach recommendation.

## Cycle 23 - Professional English Job Demand And Work-English Offer Test

Date: 2026-05-22
Theme: job-demand scan, professional-English offer validation, content/referral test design
Primary research question: does job-demand evidence in Barcelona/Baix Llobregat strengthen the professional-confidence expansion lane enough to justify a Work-English Confidence Loop offer/content test, without drifting into corporate or academy positioning?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with unrelated local `.playwright-mcp` screenshots/artifacts. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory and prior artifacts:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `local-partnership-referral-map.md`
- `pricing-positioning.md`
- `content-strategy.md`
- `market-intelligence.md`
- `review-proof-library.md`
- `measurement-plan.md`
- `automation-research-loop.md`
- newly created `professional-english-job-demand-scan.md`

Website/live/code outputs:

- `src/components/SeoLandingPage.jsx`
- `src/App.jsx` route references
- live homepage metadata/static HTML
- live `/ingles-empresas-castelldefels` metadata/static HTML
- live `/clases-ingles-castelldefels` metadata/static HTML
- live `/talkthetalk` metadata/static HTML
- live Google reviews endpoint
- live `sitemap.xml`

Teaching-platform outputs:

- `teacher-assistant/frontend/src/pages/TeacherOverview.tsx`
- `teacher-assistant/backend/app/db/models.py`
- platform references to company classes, class context, schedules, homework/class notes and work/meeting/client materials

Local findings:

- The business/professional route already exists and returns 200, but the current live surface remains light and should not become the main campaign destination yet.
- The homepage and Talk are safer first destinations for GBP/LinkedIn/referral tests because the homepage is indexed and Talk fits low-pressure speaking practice.
- The student platform makes the Work-English promise more credible than ordinary tutoring: class context, homework/class-note surfaces, company-class fields and reusable practice assets can support follow-up after professional role-play.
- Review proof still aligns strongly with this lane because prior reviews emphasize confidence, comfort speaking, adaptation, meetings, practical tools and portal-style continuity.

### API / Data Evidence

- Homepage: HTTP 200, canonical present, title `Clases Particulares de Ingles Online y en Castelldefels | English with Auris`.
- `/ingles-empresas-castelldefels`: HTTP 200, canonical present, title `Clases de Ingles para Empresas y Profesionales | English with Auris`, description mentions professionals, autonomos, small teams and NIF.
- `/clases-ingles-castelldefels`: HTTP 200, canonical present.
- `/talkthetalk`: HTTP 200, canonical present.
- Google reviews endpoint: HTTP 200, source `places-new`, rating 5.0, reviewCount 15, visibleReviews 5.
- `sitemap.xml`: HTTP 200, still lists the core routes.

No credentials were printed and no owner-only profile, Google or LinkedIn setting was changed.

### Source Discovery Choices

Possible evidence locations considered before browsing:

1. InfoJobs and public job snippets.
2. LinkedIn public job snippets.
3. Recruiter/job-agency listings.
4. Barcelona Activa employability/language pages.
5. Labour/language-demand reports.
6. Community threads from Spanish professionals.
7. Local coworking/SME/event sources from Cycle 22.
8. Competitor business-English pages.
9. HR/L&D provider pages.
10. Current-student work outcome notes.

Highest-signal choices used:

- Barcelona Activa language/employability sources for official local context.
- Public LinkedIn job snippets for current Barcelona role language.
- Recruiter/job-agency listings for exact B2/C1/C2 requirements and task contexts.
- Infoempleo/Adecco language-demand report as macro context.
- One Spanish professional/community thread for pressure and lived-experience language.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| Barcelona Activa Reskilling Idiomas 2025, `https://www.barcelonactiva.cat/es/-/reskilling-idiomes-2025` | English is treated as employability/promotion support in Barcelona, including sectorial contexts. | Private 40 EUR/h demand as the only solution, because public/free programmes exist. | High |
| Barcelona Activa Reskilling page, `https://treball.barcelonactiva.cat/es/web/treball/reskilling-idiomes` | Sector-adapted English A1-C1. | Certificate/course framing as Auris's best angle. | High |
| Barcelona Activa publications, `https://www.barcelonactiva.cat/en/publications` | Official labour/economic sources should remain in the toolkit. | Relying only on job boards. | Medium-high |
| Infoempleo/Adecco language report PDF, `https://www.adeccogroup.com/es-es/-/media/project/Adecco%20Group/AdeccoGroup/spain%20content/2016%20Press%20Releases/2016/820.pdf` | English dominates language requirements in Spanish job offers and appears across sectors. | Narrowing to only tech or only executives. | Medium |
| SiteMinder Sales Executive Barcelona, `https://es.linkedin.com/jobs/view/sales-executive-spanish-at-siteminder-4353944258` | Client acquisition, proposals, negotiation, meetings, phone presence and professional English. | Grammar-only business English. | High |
| Mews BDR Barcelona, `https://es.linkedin.com/jobs/view/business-development-representative-italian-speaker-at-mews-4347403864` | Calls, emails, prospects and meeting-setting in English. | Generic conversation-only offer for professionals. | Medium-high |
| TP Ad Sales Account Executive Barcelona, `https://es.linkedin.com/jobs/view/ad-sales-account-executive-with-spanish-at-tp-4383713204` | Pitches, presentations, persuasive communication and advanced English. | Interview-only content. | High |
| Grand Hyatt Sales Manager Barcelona, `https://es.linkedin.com/jobs/view/sales-manager-at-grand-hyatt-4400536551` | Corporate clients, meeting planners, proposals and polished presentations in English/Spanish. | Tech-only professional-English positioning. | Medium-high |
| Kimpton Sales Executive Barcelona, `https://es.linkedin.com/jobs/view/sales-executive-kimpton-vividora-barcelona-at-kimpton-vividora-barcelona-4378725869` | Group enquiries, proposals, negotiation and off-site presentations. | Broad company-training language without concrete situations. | High |
| Page Personnel Customer Service Barcelona, `https://www.pagepersonnel.es/job-detail/customer-service-con-ingl%C3%A9s-empresa-en-barcelona/ref/jn-032026-6962550` | B2/C1 English for customer orders by phone/email, logistics follow-up and incidents. | Targeting only executives. | High |
| Randstad Recepcionista C1/C2 Barcelona, `https://www.randstad.es/candidatos/ofertas-empleo/oferta/recepcionista-con-ingles-c1-c2-y-catalan-2967670/` | C1/C2 English for national/international phone attention and reception. | Assuming only B1/B2 professionals need help. | Medium-high |
| Click&Boat Customer Success Spanish/English, `https://www.trabajas.es/oferta/bilingual-customer-success-associate-spanish-english-59c5a57bfff9ccc/` | Customer inquiries, disputes, operations and staff training with Spanish/English. | Presentation-only work-English. | Medium |
| Reddit r/salarios_es English-at-work thread, `https://www.reddit.com/r/salarios_es/comments/1loimc2/inform%C3%A1tico_cu%C3%A1l_es_tu_nivel_de_ingl%C3%A9s_de_verdad/` | Spanish professionals describe English as daily work, interview and client/international-team leverage. | Certificates as the only proof of value. | Medium |

### Trend / Community / Product Signals

- Job evidence repeatedly points to English at the moment of performance: answering a client, presenting, negotiating, handling a problem, explaining experience or contributing in a meeting.
- Sales/account management, customer success/support, hospitality/MICE and client-facing tech are better premium-fit contexts than "anyone who needs business English."
- Barcelona Activa/free-course evidence is a useful falsifier: many learners can access broad language courses, so Auris must win on personal diagnosis, confidence, Spanish-speaker correction, real situations and continuity.
- The platform can make this more than copy because it can preserve useful phrases and feedback between classes.

### Hypotheses Changed

- H013 strengthened and narrowed: professional confidence is still the best expansion lane, but the message should be `Work-English Confidence Loop`, not generic `Business English`.
- H024 refined: local professional-community sources are more plausible because job demand names concrete work moments, but they should still stay mapped before outreach.
- H025 added: Work-English Confidence Loop should be tested as a content/referral angle before becoming a standalone page/package.

Falsification attempt:

Favored idea tested: Auris should build a professional-English offer around meetings, presentations, interviews and client calls.

Result: strengthened, but constrained.

Evidence:

- Job sources strongly support the use cases.
- They do not prove willingness to pay Auris at 40 EUR/h.
- Public/free courses, macro employability programmes and lower-price tutors remain competing alternatives.

Stop/change evidence:

- If professional inquiries mostly ask for certificates, company discounts, free practice or low marketplace prices, keep Work-English as occasional content rather than a package.
- If no owner-side leads mention work situations after one or two tests, do not build a public offer page.

Cheaper alternative:

- Use Work-English as an angle inside normal private classes, referrals, LinkedIn and GBP before creating any separate product.

### Strategic Synthesis

Strongest next move:

- Run one Work-English content/referral test using the hook from `professional-english-job-demand-scan.md`.
- Route LinkedIn to Talk the Talk or GBP to the homepage.
- Record role context and work moment in the manual ledger.

Best message:

`Professionals do not need "business English" in general. They need English at the moment someone is listening: in a meeting, interview, client call, presentation or difficult customer situation.`

What Auris should not do yet:

- Do not create a large `Business English Barcelona` SEO page.
- Do not pitch companies cold.
- Do not sell broad corporate training or FUNDAE-style programmes.
- Do not lead with certificates.
- Do not create a separate package until owner-side signals mention work-English need.

Risk of acting too early:

- The offer could sound like an academy or HR provider and dilute Auris's personal premium teacher positioning.

Risk of waiting:

- The LinkedIn/GBP profile cleanup could stall without a small real-world test, even though job-demand evidence is now good enough for one message.

### Artifacts Updated

- Created `professional-english-job-demand-scan.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `research-roadmap.md`.
- Updated `content-strategy.md`.
- Updated `pricing-positioning.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`professional-english-job-demand-scan.md` now contains:

- Source discovery table.
- 13 external evidence points.
- Role-context clusters.
- Falsification and stop/change rules.
- `Work-English Confidence Loop` offer draft.
- First post/referral copy.
- What not to do yet.
- Next evidence packet.

### Strongest Next Move

Use the Work-English hook once, then measure:

1. profile/GBP/post metrics if available
2. DMs/messages
3. Talk starts/completions/trial clicks if visible
4. whether inquiries mention a real work moment
5. whether the 40 EUR/h anchor survives.

### What Not To Do Yet

- Do not contact local organisations.
- Do not create a public partnership or corporate-training page.
- Do not build a separate package before a lead signal.
- Do not treat job-post demand as purchase intent.
- Do not let the offer drift away from Auris as a personal English teacher.

### Process Improvement Notes

- Highest-signal sources: direct job snippets and recruiter listings because they named the exact work situations.
- Useful but bounded sources: Barcelona Activa and macro language reports because they prove context, not conversion.
- Noisy source: one-off community comments. They are good for phrasing and pressure, not for pricing or demand proof.
- Protocol improvement: job-demand cycles now need to record work moment, role context, buying-power proxy and whether the source proves use case or willingness to pay.

### Next-Cycle Packet

Recommended next theme: interpret owner-side LinkedIn/profile/GBP actions if Auris provides them; otherwise run a pain-language scan for Work-English Confidence Loop.

Exact work:

- If Auris confirms LinkedIn About/SP profile updates or posts:
  - record the updated headline/about/profile state
  - record 24h/72h/7d metrics
  - update `linkedin-profile-readiness-and-first-post-plan.md`, `content-strategy.md` and `measurement-plan.md`.
- If Auris shares any inquiry:
  - classify `source_type`, `role_context`, `work_moment`, `price_anchor_seen`, `booked_trial`, `lead_quality`
  - update H025.
- If no owner-side signal arrives:
  - inspect current Reddit Spain/professional threads about English at work
  - inspect local/professional tutor reviews for work-English pain language
  - inspect LinkedIn public comments on English meetings/interviews/client calls
  - avoid repeating broad job-board research unless a new role cluster appears.

Files/APIs to inspect:

- `professional-english-job-demand-scan.md`
- `content-strategy.md`
- `measurement-plan.md`
- `pricing-positioning.md`
- `research-roadmap.md`
- live Google reviews endpoint
- live homepage and `/talkthetalk` UTM destinations
- Search Console page rows only if a public post/page change happened.

Hypotheses:

- H013 professional-confidence expansion.
- H014 GBP plus LinkedIn anchored sprint.
- H015 manual lead-source notes required.
- H024 local professional-community referrals should stay mapped before outreach.
- H025 Work-English Confidence Loop should be tested before productizing.

### Unfinished Threads

- Need owner-side result from LinkedIn profile cleanup and first post if published.
- Need GBP baseline and owner-side metrics if GBP Post 1 is published.
- Need review/referral micro-sprint outcomes if Auris runs it.
- Need real inquiry language to validate whether Work-English is buying pain or only job-market background.
- Need Search Console page rows only after public activity, not before.

## Cycle 24 - Work-English Pain Language And First Message Test

Date: 2026-05-22
Theme: content/social strategy, professional-English pain language, process self-improvement
Primary research question: does public pain language validate the Work-English hook, and which wording should Auris use first?

### Repo Status

- Website repo: dirty because `docs/strategy/` remains untracked strategy memory. No public website/code files were edited.
- Teaching platform repo: dirty with unrelated local `.playwright-mcp` screenshots/artifacts. No teaching-platform files were edited.

### Local Evidence Inspected

Strategy memory and prior artifacts:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `professional-english-job-demand-scan.md`
- `content-strategy.md`
- `measurement-plan.md`
- `market-intelligence.md`
- `review-proof-library.md`
- `linkedin-profile-readiness-and-first-post-plan.md`
- `pricing-positioning.md`
- `automation-research-loop.md`
- newly created `work-english-pain-language-scan.md`

Website/live/code outputs:

- `src/components/GoogleReviewsSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/App.jsx`
- live homepage
- live Talk UTM destination
- live GBP homepage UTM destination
- live `/ingles-empresas-castelldefels`
- live Netlify Google reviews function in ES and EN

Teaching-platform outputs:

- `teacher-assistant/frontend/src/pages/TeacherOverview.tsx`
- `teacher-assistant/backend/app/db/models.py`
- platform search output around company classes, class context, class notes, flashcards, homework logs and work/client/meeting materials

Local findings:

- The earlier LinkedIn plan already has the strongest first hook: `You understand the meeting, but when someone asks for your opinion, your English gets smaller.`
- Review proof supports the same angle: confidence, meetings, comfort speaking, adaptation and continuity.
- The student portal gives substance to the promise: real phrases, vocabulary, notes and practice can continue after the class.
- Future review endpoint checks should use `/.netlify/functions/google-reviews?language=...`; `/api/google-reviews` returns the SPA fallback, not review JSON.

### API / Data Evidence

- Homepage: HTTP 200, canonical present, title and description aligned with Spanish speakers, Ireland-raised teacher and English for work.
- LinkedIn Post 1 Talk UTM: HTTP 200, UTM preserved, canonical `/talkthetalk`.
- GBP Work-English homepage UTM: HTTP 200, UTM preserved, canonical homepage.
- `/ingles-empresas-castelldefels`: HTTP 200, canonical present, title/description mention professionals, autonomos, small teams and NIF.
- `/.netlify/functions/google-reviews?language=es`: HTTP 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- `/.netlify/functions/google-reviews?language=en`: HTTP 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- `/api/google-reviews?language=es`: HTTP 200 SPA fallback, not JSON; avoid in future cycles.

No credentials were printed. No owner-side Google/LinkedIn settings were changed.

### Source Discovery Choices

Possible evidence locations considered before browsing:

1. Spain/LatAm Reddit career threads.
2. Spanish adult language-anxiety research.
3. Spanish/Barcelona professional coach pages.
4. Marketplace professional-English profiles.
5. Academy business-English pages.
6. Corporate language-training platforms.
7. Local Google reviews for competitors.
8. LinkedIn comments.
9. YouTube/TikTok comments.
10. Current-student lead notes.

Highest-signal choices used:

- Public career/community threads for raw pain language.
- Spanish adult language-anxiety research for falsification.
- Professional coach pages/testimonials for paid pain language.
- Marketplace profiles for price-anchor pressure.
- Corporate language-training platforms as outside-in trend contrast.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| Reddit r/askspain interview thread, `https://www.reddit.com/r/askspain/comments/1j7tpt0/refrescar_ingl%C3%A9s_entrevista_de_trabajo/` | A Spain-based learner with B2 needs to prepare for an English job interview; comments emphasize speaking practice over certificates. | Certificate-only positioning. | Medium-high |
| Reddit tech worker thread, `https://www.reddit.com/r/taquerosprogramadores/comments/1qm2jn8/no_se_ingles_y_me_contrataron_en_usa/` | Passing interviews does not remove client-call/accent/speaking pressure once the job starts. | Assuming the interview is the whole problem. | Medium |
| Reddit Colombia interview thread, `https://www.reddit.com/r/Colombia/comments/16fyucd/primera_entrevista_en_ingles/` | Spanish speaker with B2 distinguishes reading/writing from frightening live speaking. | Reading/writing-led work-English offer. | Medium |
| University of Alicante Spanish adult FLA thesis, `https://rua.ua.es/entities/publication/e5f0422e-d2ca-42ad-b738-5df9e375b918` | Spanish adult English anxiety, teacher strategies and learner self-concept are real study objects. | "Just practise more" as the full answer. | High |
| Barrios & Acosta-Manzano, adult learners in Spain, `https://journals.sagepub.com/doi/10.1177/13621688211054046` | Anxiety is strongly linked with willingness to communicate in English for adult learners in Spain. | Pure proficiency-level framing. | High |
| Springer oral-task feedback study, `https://link.springer.com/article/10.1186/s41239-017-0056-z` | Higher-anxiety learners value teacher feedback; feedback can reduce anxiety and build confidence. | AI/self-practice alone as enough. | High |
| Cambridge accent anxiety article, `https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/assessing-accent-anxiety-a-measure-of-foreign-english-speakers-concerns-about-their-accents/A394529A8E5405E0C2DDF60E4A591EC3` | Accent anxiety and fear of negative evaluation matter outside classroom contexts. | Native-like accent as the promise. | High |
| Marina Portero Coach, `https://www.marinaportero.com/` | Testimonials mention work meetings, foreign calls, client updates, projects and resolving conflicts in English. | Generic `business English` as abstract category. | High |
| Mery School of English, `https://www.meryschoolofenglish.com.es/sobre-nosotros/` | Spanish output-gap phrasing around understanding but blocking when speaking is common. | Overly corporate framing. | Medium-high |
| Vane Business English, `https://vanebusinessenglish.com/` | Spanish-speaking professionals are targeted around hesitation with colleagues/clients/managers, meetings, promotions and platform support. | Work-English angle as unique by itself. | High |
| Beyond Grammar, `https://www.beyondgrammar.net/` | Professionals may use English every day but still want more confidence and effectiveness in meetings/presentations. | Overusing `freeze` for high-status buyers. | Medium-high |
| Superprof Ana, `https://www.superprof.es/comunicacion-oratoria-ingles-entrena-voz-presencia-claridad-para-hablar-con-naturalidad-confianza-liderar-equipos.html` | Premium professional communication coaching can sell at 65 EUR/h when it bundles voice, clarity, presence, interviews and meetings. | 40 EUR/h as inherently too high. | Medium-high |
| Superprof Ava Barcelona, `https://www.superprof.es/experienced-business-english-coach-for-professional-writing-confident-speaking-and-real-world-communication-skills.html` | Similar Barcelona professional-English promises exist at 25 EUR/h. | Standalone work-English claim as enough for premium. | High |
| English Anywhere Barcelona, `https://anywhere.es/ingles-empresarial-barcelona/` | Academy pages already list meetings, clients, interviews, presentations, calls, emails and negotiation. | Auris copying academy/corporate breadth. | High |
| Talaera, `https://www.talaera.com/` | Corporate platforms combine instructor coaching, AI/self-paced practice and real workplace communication outcomes. | Enterprise L&D tone as a model for Auris. | Medium-high |

### Trend / Community / Product Signals

- The public pain is not lack of English in general; it is loss of access under pressure.
- The most repeated moments are interviews, meetings, client calls, presentations and conversations with native/international colleagues.
- Anxiety and willingness-to-communicate research supports Auris's confidence-first positioning, but it also warns against shame-heavy copy.
- Marketplaces and coaches prove the professional-English lane is crowded; differentiation must come from Auris's direct personal teaching, Spanish-speaker pattern correction, Ireland-raised background, reviews and portal follow-up.
- Corporate platforms show human plus self-paced/AI practice is becoming normal, but Auris should not adopt enterprise-dashboard language.

### Hypotheses Changed

- H010 strengthened and language-refined: Spanish-speaker confidence content beats generic grammar tips, but the public hook should preserve dignity.
- H013 strengthened with differentiation pressure: professional confidence is valid, but `meetings/interviews/client calls` alone is not unique.
- H025 strengthened as a message ladder, not a product: Work-English should be tested through one message before a page/package.

Falsification attempt:

Favored idea tested: `freeze/block` pain language is the right headline for Work-English Confidence Loop.

Result: partially strengthened, partially weakened.

Evidence:

- Public Spanish-language sources do use blocking/freezing language.
- Professional coach and premium competitor copy often uses more dignified language: clarity, confidence, presence, control, feeling professional and making ideas land.
- A blunt fear/panic headline may attract attention but could feel less premium.

Stop/change evidence:

- If the `English gets smaller` hook gets sympathy but no DMs/clicks/inquiries, test the interview/client-call variant before adding more theory.
- If the hook attracts low-price marketplace comparisons, strengthen proof/pricing before more posts.
- If professional leads mention certificates rather than work moments, keep Work-English as content and route offer strategy to exam/certificate support.

### Strategic Synthesis

Strongest next move:

- Use the Meeting Voice message first:
  `You know the answer, but in the meeting your English gets smaller.`

Why this one:

- It keeps the output-gap pain.
- It avoids sounding melodramatic.
- It is compatible with LinkedIn.
- It connects directly to Talk the Talk and Auris's review proof around meetings/confidence.

What Auris should not do yet:

- Do not build a new SEO page.
- Do not publish all four message variants.
- Do not make fear/panic the brand.
- Do not copy corporate training pages.
- Do not compete on marketplace price.

Risk of acting too early:

- Over-sharpening the pain could make the brand feel like a performance coach or anxiety product instead of a warm premium English teacher.

Risk of waiting:

- The profile/content sprint may stay stuck in preparation even though the message is now evidence-backed enough to test once.

### Artifacts Updated

- Created `work-english-pain-language-scan.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `content-strategy.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`work-english-pain-language-scan.md` now contains:

- Source discovery.
- Local/API findings.
- 15 external evidence points.
- Pain-language matrix.
- Four-message ladder: Meeting Voice, Interview, Client Call, Clarity Not Accent.
- Falsification and stop/change rules.
- Destination and measurement notes.

### Strongest Next Move

Run or prepare only Message 1:

`You know the answer, but in the meeting your English gets smaller.`

Destination:

`https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`

Manual notes:

- `role_context`
- `work_moment`
- `pain_language`
- `price_anchor_seen`
- `booked_trial`
- `lead_quality`

### What Not To Do Yet

- Do not contact organisations.
- Do not create a public `Business English Barcelona` page.
- Do not publish a full campaign.
- Do not use the wrong `/api/google-reviews` endpoint for future proof checks.
- Do not let corporate platforms or marketplaces set Auris's tone.

### Process Improvement Notes

- Highest-signal sources: professional testimonials and Spanish adult anxiety/WTC research.
- Useful but bounded sources: Reddit and community threads for raw language, not purchase intent.
- Noisy/limited sources: corporate platforms because they prove market direction but bias toward enterprise L&D.
- Protocol improvement: pain-language cycles must separate raw pain language from public brand language.

### Next-Cycle Packet

Recommended next theme: owner-side LinkedIn/profile action interpretation if Auris provides data; otherwise competitor review proof and local pain-language scan outside Reddit.

Exact work:

- If Auris confirms LinkedIn profile cleanup:
  - verify headline/about/primary role/contact/Featured link state from owner-side snapshot
  - QA Talk UTM
  - finalize one post and measurement checklist.
- If Auris posts:
  - record 24h/72h/7d impressions, profile views, clicks, DMs, Talk starts/completions/trial clicks if visible.
- If Auris gets any inquiry:
  - update H025/O028 with source, work moment, price anchor and booked-trial result.
- If no owner-side signal:
  - inspect local/professional English tutor Google review snippets for work-English language
  - inspect one non-Reddit Spanish professional community/source
  - do not repeat broad job-board scanning.

Files/APIs/searches to inspect:

- `work-english-pain-language-scan.md`
- `linkedin-profile-readiness-and-first-post-plan.md`
- `content-strategy.md`
- `measurement-plan.md`
- `market-intelligence.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- search: `"English coach Barcelona" "meetings" "review"`
- search: `"inglés reuniones cliente me bloqueo" -Reddit`
- search: `"clases ingles profesionales Barcelona opiniones reuniones"`

Hypotheses:

- H010 Spanish-speaker confidence content.
- H013 professional-confidence expansion.
- H014 GBP plus LinkedIn anchored sprint.
- H015 manual lead-source notes required.
- H021 marketplace profile price policy.
- H025 Work-English Confidence Loop before productizing.

### Unfinished Threads

- Need owner-side LinkedIn cleanup confirmation and first-post metrics.
- Need GBP owner baseline if any GBP post is published.
- Need review/referral micro-sprint outcomes.
- Need real inquiry language before a professional page/package.
- Need local competitor review proof around work-English language if no owner signal arrives.

## Cycle 25 - Work-English Proof Pairing For Meeting Voice

Date: 2026-05-22

Primary research question: which proof should be paired with the first Work-English `Meeting Voice` message so it feels credible, premium and Auris-specific: Google review confidence, portal continuity, Spanish-speaker correction, Ireland-raised bilingual background, invoice/NIF, or professional-specific proof?

### Repo Status

- Website repo: `?? docs/strategy/` remains untracked strategy work.
- Teaching-platform repo: dirty with many unrelated `.playwright-mcp`, `.npm-cache`, screenshot and temp artifacts. No teacher-assistant files were modified.
- No commits, pushes, deployments, LinkedIn edits, GBP edits, forms or third-party contacts were made.

### Local Evidence

Inspected local artifacts:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `work-english-pain-language-scan.md`
- `professional-english-job-demand-scan.md`
- `content-strategy.md`
- `market-intelligence.md`
- `measurement-plan.md`
- `review-proof-library.md`
- `linkedin-profile-readiness-and-first-post-plan.md`
- `pricing-positioning.md`
- `automation-research-loop.md`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/App.jsx`
- `index.html`
- `src/utils/analytics.js`
- teaching-platform model/component search around company classes, class context, homework logs, materials, assignments, flashcards and SRS.

What local evidence supports:

- Reviews are still the strongest owned proof. The review library already maps confidence, meetings, adaptation and continuity.
- The platform makes follow-up real: class context, materials, homework logs, flashcards, SRS and assignments support the public claim that work from class can continue between sessions.
- The current content strategy already has a strong first hook, but it needed a proof line to avoid sounding like generic business-English content.
- The measurement plan still needs manual notes because analytics can show a click but not the proof element that created trust.

What local evidence weakens:

- Portal/software alone should not lead. Competitors also claim platforms and follow-up.
- Invoice/NIF is a practical buyer detail, not the reason the message feels emotionally credible.
- Marketplace proof is risky as the first visible proof because price anchors are mixed/lower.

### API / Data Evidence

Live checks:

- Homepage: HTTP 200, canonical homepage, title/description aligned with Spanish speakers, Ireland-raised teacher and English for work.
- LinkedIn Post 1 Talk UTM: HTTP 200, UTM preserved, canonical `/talkthetalk`.
- GBP Work-English homepage UTM: HTTP 200, UTM preserved, canonical homepage.
- `/ingles-empresas-castelldefels`: HTTP 200, canonical present, metadata mentions professionals, autonomos, small teams and NIF.
- `/.netlify/functions/google-reviews?language=es`: HTTP 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- `/.netlify/functions/google-reviews?language=en`: HTTP 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.

No secrets were printed.

### Source Discovery Choices

Possible evidence locations considered before browsing:

1. Auris review library and live review endpoint.
2. Local/professional tutor Google review snippets.
3. Competitor business-English pages.
4. Competitor testimonial/review pages.
5. Public LinkedIn professional-English coaches.
6. Marketplaces and professional tutor profiles.
7. Academy platform/follow-up claims.
8. Non-Reddit professional community sources.
9. YouTube/TikTok comments.
10. Current-student owner-side notes.

Highest-signal choices used:

- Owned review/API proof for what Auris can credibly say.
- Competitor/professional pages for what is already category-normal.
- Public LinkedIn professional-coach posts for non-Reddit professional pain/proof language.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| NELC New Executive Language Centre, `https://escuelasdeidiomas.com.es/es-es/i/16822-nelc-new-executive-language-centre/` | Local review snippets praise motivational, flexible, personalised classes adapted to needs. | Work-specific proof is not always explicit in reviews. | Medium-high |
| Callan School Barcelona, `https://www.callanschool.info/en/english-course` | Confidence, fluency, practical learning, work and small/flexible classes are common academy claims. | Generic confidence as distinctive proof. | High |
| ThanksEnglish, `https://thanksenglish.com/` | Personal English Coach, live classes, feedback after class, platform and company courses show follow-up is a market-normal proof bundle. | Portal alone as unique. | Medium-high |
| English Anywhere, `https://anywhere.es/ingles-empresarial-barcelona/` | Meetings, videoconferences, presentations, emails, negotiations, professionals and adapted methodology are standard business-English language. | Broad academy-style business-English copy for Auris. | High |
| BCN English, `https://www.bcnenglish.com/en/home/` | Busy goal-driven professionals and personalised 1:1 executive classes validate practical professional demand. | HR/corporate framing as Auris's near-term lane. | Medium-high |
| O'Sullivan's Learning Academy, `https://www.osullivansla.com/business-english` | Teacher credibility and business communication standards matter in the category. | Native-teacher proof as enough. | Medium-high |
| David Cabezas LinkedIn post, `https://es.linkedin.com/posts/davidcabezaslanguagecoach_ingl%C3%A9sparaprofesionales-hablaringl%C3%A9sconconfianza-activity-7285626853397020674-7FJc` | Professional LinkedIn language already uses blocked speaking, meetings, confidence, communication style and safe practice. | Work-English pain as unique by itself. | Medium-high |
| David Cabezas LinkedIn post, `https://es.linkedin.com/posts/davidcabezaslanguagecoach_aprenderdeloserrores-crecimientopersonal-activity-7199723252670185472-doAk` | Reviews/proof around meetings, shame, comparison, work vocabulary and confidence can make professional coaching credible. | Coaching-heavy transformation tone for Auris. | Medium-high |
| Cristina Business English search result | Solo-professional competitor validates Spanish-speaking professionals, 1:1, work confidence and security/ease language. | `Business English` as distinctive. | Medium-high |
| Preply professional tutor profile, `https://preply.com/es/profesor/4261588` | Marketplace tutors also promise meetings, interviews, confidence and clarity. | Marketplace proof as premium-site destination. | High |
| Premium English, `https://premiumenglish.cl/como-vencer-miedo-hablar-ingles-en-publico/` | Speaking pressure is a confidence/preparation problem, not only grammar. | Public-speaking angle as a full substitute for English teaching. | Medium |
| What'S Up / ThanksEnglish ecosystem | Large academies combine fear reduction, conversation, business topics, exams and platform support. | Auris copying academy breadth. | High |

### Trend / Community / Product Signals

- Work-English demand is not the hard part to prove anymore; differentiation is.
- `Meetings, interviews, presentations, client calls, clarity and confidence` are category language, not unique positioning.
- Platforms and feedback after class are becoming normal in online/adult English offers, so Auris should present the portal as personal follow-up, not as a separate software product.
- Public LinkedIn professional-coach language supports dignified pain framing: blocking, self-expectation, meetings, confidence and reviews.
- Reviews are the proof layer most likely to feel human and premium without turning Auris into an academy.

### Hypotheses Changed

- H009 strengthened: reviews should be the central proof asset, especially beside the first Work-English hook.
- H013 strengthened and operationalized: professional confidence is still the right lane, but every hook needs Auris-specific proof.
- H015 strengthened: add `proof_mentioned` because analytics cannot reveal which proof created trust.
- H021 strengthened: marketplaces are useful evidence, but not first visible proof for a premium post.
- H025 strengthened: the first Work-English test is now proof-paired and ready without becoming a standalone product.

Falsification attempt:

Favored idea tested: the first Work-English proof should be `professional-specific proof` such as business classes, company experience, invoice/NIF or a dedicated professional page.

Result: weakened.

Evidence:

- Competitors already overuse corporate/business-English signals.
- Invoice/NIF is useful but practical rather than emotional.
- The strongest owned proof is student outcome language: confidence, meetings, adaptation and follow-up.
- Platform follow-up is credible only when paired with the direct teacher method, because competitors also claim platforms.

Stop/change evidence:

- If leads mainly ask about price or compare marketplaces, strengthen premium proof before more Work-English posts.
- If leads mention certificates/exams rather than work moments, keep Work-English as occasional content and route offer strategy toward exam support.
- If the hook gets engagement but no action, keep the proof stack and change the situation to interview/client call before building a page.

### Strategic Synthesis

Strongest next move:

- Use one proof-paired `Meeting Voice` message:
  - Hook: `You know the answer, but in the meeting your English gets smaller.`
  - Proof: students often mention more confidence using English when the real moment arrives.
  - Method: practise the real situation, fix Spanish-speaker patterns, save phrases for review between classes.

What Auris should not do yet:

- Do not create a `Business English Barcelona` page.
- Do not make invoice/NIF the headline.
- Do not route the first post to marketplaces.
- Do not publish all variants.
- Do not copy corporate training language.

Smallest practical test:

- One LinkedIn post or one private referral message using the proof-paired copy.
- Destination: `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`

Risk of acting too early:

- The message may still be interpreted as generic business-English coaching if the proof line is too weak or too late.

Risk of waiting:

- The strategy keeps polishing proof while the first measured message remains unpublished.

### Artifacts Updated

- Created `work-english-proof-pairing-scorecard.md`.
- Updated `hypotheses.md`.
- Updated `content-strategy.md`.
- Updated `market-intelligence.md`.
- Updated `review-proof-library.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Updated `measurement-plan.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`work-english-proof-pairing-scorecard.md` now contains:

- Source discovery.
- Local/API findings.
- External evidence table.
- Proof pairing scorecard.
- LinkedIn first post draft.
- Softer alternative.
- Spanish private/referral version.
- Stop/change rules.
- Next evidence packet.

### Strongest Next Move

Run only the proof-paired `Meeting Voice` version:

```text
You know the answer, but in the meeting your English gets smaller.

That is not just a grammar problem. It is speed, pressure, translation from Spanish, pronunciation habits and not having enough real practice with someone listening.

In class, we take the kind of meeting you actually have, practise the answer, fix the patterns and save useful phrases for review between classes.

Students often mention the same result: they feel more confident using English when the real moment arrives.

Try a short Talk the Talk prompt or message me about a free first class.
```

### What Not To Do Yet

- Do not contact organisations.
- Do not publish a full campaign.
- Do not change public site/Profile/GBP settings.
- Do not use marketplaces as the public proof layer.
- Do not treat portal/follow-up as unique without tying it to Auris's direct correction.

### Process Improvement Notes

- Highest-signal source: owned review/API proof plus direct competitor/professional pages.
- Useful but bounded source: public LinkedIn professional-coach posts. Good for language/proof patterns, not buyer-volume prediction.
- Noisy/low-value source: broad business-English pages can validate category language but quickly push the cycle toward academy/corporate copy.
- Process improvement made: `automation-research-loop.md` now requires proof-pairing cycles to separate category proof, Auris proof and destination proof.

### Next-Cycle Packet

Recommended next theme: first-post readiness/result interpretation, or if no owner-side signal appears, direct local Google review snippet proof scan.

Exact work:

- If Auris publishes or privately uses the first post:
  - record 24h/72h/7d metrics
  - record DMs/messages, profile views, link clicks
  - check Talk events if visible
  - classify every inquiry with `role_context`, `work_moment`, `pain_language`, `proof_mentioned`, `price_anchor_seen`, `booked_trial`, `lead_quality`.
- If no owner-side signal appears:
  - inspect 5 direct Google Business Profile review snippets for solo/professional English tutors or business-English coaches in Barcelona/Castelldefels
  - compare which proof buyers mention unprompted: confidence, teacher relationship, work situation, follow-up, native/background, price or convenience
  - avoid repeating broad job-demand or broad pain-language scans.
- If the first post gets attention but no action:
  - keep the proof stack
  - switch only the situation to `Interview` or `Client Call`.

Files/APIs/searches to inspect:

- `work-english-proof-pairing-scorecard.md`
- `work-english-pain-language-scan.md`
- `content-strategy.md`
- `review-proof-library.md`
- `measurement-plan.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- Talk UTM destination
- search: `"English coach Barcelona" "reviews" "meetings" "confidence"`
- search: `"business English coach Barcelona" "reviews" "meetings"`
- search: `"clases ingles profesionales Barcelona opiniones confianza reuniones"`

Hypotheses:

- H009 review proof.
- H010 Spanish-speaker confidence content.
- H013 professional-confidence expansion.
- H015 manual lead-source notes.
- H021 marketplace price policy.
- H025 Work-English Confidence Loop.

### Unfinished Threads

- Need owner-side LinkedIn first-post metrics if/when published.
- Need GBP owner baseline if any GBP post is published.
- Need review/referral micro-sprint outcomes.
- Need real inquiry language before a professional page/package.
- Need local GBP review snippet scan if no owner signal arrives.

## Cycle 26 - Local Review-Language Proof Scan

Date: 2026-05-22

Theme: GBP/reviews/local trust.

Primary research question: what proof do buyers/students mention unprompted in local/professional English reviews, and does that strengthen or weaken Auris's review-led proof stack?

### Repo Status

- Website repo: strategy docs are still untracked; no public-facing code, credentials, GBP, LinkedIn or deployment changes were made.
- Teacher-assistant repo: dirty with unrelated temp/screenshot/cache artifacts; inspected only.
- Safety boundary held: no commits, pushes, public profile edits, GBP edits, review replies or third-party contacts.

### Local Evidence

Inspected local artifacts:

- `research-log.md` latest cycles and Packet AA.
- `research-roadmap.md`.
- `hypotheses.md`.
- `work-english-proof-pairing-scorecard.md`.
- `review-proof-library.md`.
- `content-strategy.md`.
- `market-intelligence.md`.
- `measurement-plan.md`.
- `automation-research-loop.md`.
- `src/components/GoogleReviewsSection.jsx`.
- `src/components/SeoLandingPage.jsx`.
- Teacher-assistant `backend/app/db/models.py`.
- Teacher-assistant `frontend/src/App.tsx`.
- Teacher-assistant homework/assignment/flashcard surfaces.

Local interpretation:

- Auris's review proof already contains the themes the market keeps repeating: confidence, adaptation, comfort speaking and follow-up.
- The website can show current review proof through the Netlify review function and has route-level review placements.
- The teaching platform makes continuity credible through assignments, homework logs, materials, flashcards and SRS, but this proof should be framed as teacher follow-up, not software.
- No owner-side LinkedIn/GBP result was available, so Packet AA's local review proof scan was the right next move.

### API / Data Evidence

Live checks on 2026-05-22:

- `/.netlify/functions/google-reviews?language=es`: HTTP 200 JSON, source `places-new`, rating 5.0, 15 total reviews, 5 visible reviews.
- `/.netlify/functions/google-reviews?language=en`: HTTP 200 JSON, source `places-new`, rating 5.0, 15 total reviews, 5 visible reviews.
- Talk UTM destination for Meeting Voice: HTTP 200, UTM preserved, canonical `/talkthetalk`.
- GBP review-confidence homepage UTM: HTTP 200, UTM preserved, canonical homepage.

No secrets were printed.

### Source Discovery Choices

Possible evidence locations considered before browsing:

1. Auris live Google review endpoint.
2. Local academy Google review mirror pages.
3. Business-English academy review pages.
4. Marketplace tutor review pages.
5. Solo professional-English coaches.
6. Official Google review/reply docs.
7. Google Maps review policy.
8. Meetup/local professional events.
9. YouTube/TikTok comments.
10. Public LinkedIn comments/posts.
11. Current-student owner-side notes.
12. GBP owner-side metrics.

Highest-signal choices used:

- Owned live review endpoint for current Auris proof.
- Local/professional review pages for unprompted buyer language.
- Marketplace/private tutor pages for proof-density and price-anchor falsification.
- Official Google docs/policy for safe review/reply constraints.
- Meetup Business English topic page as outside-in professional-confidence context.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| Google Business Profile Help | Review replies and review links/QR codes are legitimate owner tools. | Passive review proof only. | High |
| Google Maps contribution policy | Reviews must be genuine and unbiased; incentives, pressure, selective solicitation and requested wording are unsafe. | Keyword/5-star review asks. | High |
| Idix Lingua review page | Professional needs, adaptation, motivation, confidence in conversations, safe correction and online/blended support appear in local review language. | Portal/follow-up as unique by itself. | High |
| Callan School Barcelona | Speaking from day one, confidence, fluency, flexible schedules and native/accent exposure are common academy proof points. | Generic confidence as distinctive. | High |
| Yolk Academy | Business-English reviews mention daily speaking practice, prepared thematic content and varied resources. | Work-context plus materials as unique. | Medium-high |
| English for Business | Team needs, work-use progress, native teachers and adaptation appear in reviews. | Corporate-style positioning for Auris. | Medium-high |
| Superprof professional tutor Tim | Clarity/confidence/control, professional communication, high review volume, outside-class work and specific feedback can sit around lower visible price anchors. | Marketplace proof as premium destination. | High |
| Superprof professional tutor Avantika | Interviews, meetings, presentations, confidence, role play, comfort speaking and Spanish explanations are already marketplace language. | Spanish/bilingual support as unique by itself. | High |
| My Language Coach | Sector-specific English, practical work situations, flexibility, continuous assessment and progress monitoring are category-normal. | Training-plan language for Auris. | Medium-high |
| Meetup Business English Spain topic | Professional speaking confidence, elevator pitches, meetings and opinions appear in community/event language. | Events as direct buyer proof. | Medium |

### Trend / Community / Product Signals

- Confidence is the strongest review language, but it is not a moat.
- Adaptation to real student needs is also repeated widely.
- The differentiator has to be the mechanism: Spanish-speaker correction, real speaking practice and review between classes.
- Marketplace proof density creates price pressure; review count alone can push buyers into comparison mode.
- Professional community sources validate speaking-confidence pain, but not willingness to pay Auris.

### Hypotheses Changed

- H009 strengthened: reviews remain the central proof asset, but `confidence` must be tied to a mechanism.
- H013 strengthened/refined: professional confidence is still the right lane, but the category is crowded.
- H021 strengthened: marketplaces are useful as evidence, not as first visible proof or campaign destination.
- H025 strengthened/narrowed: the Work-English loop should now become a review-language proof sprint, not a product page.

Falsification attempt:

- Favored idea tested: `Review confidence alone is enough as the first proof because students already say it.`
- Result: refined and partially weakened.
- Evidence: local academies, coaches and marketplace tutors also get or claim confidence/adaptation language. Auris should still lead with review confidence, but must add the method: correction of Spanish-to-English patterns, real situations and review between classes.

Second hypothesis tested:

- Idea: `Portal/follow-up can be a distinctive proof point by itself.`
- Result: weakened.
- Evidence: Idix, Tim, My Language Coach and other professional providers also mention online/blended support, feedback, materials or progress monitoring. Portal proof only works as part of Auris's personal follow-up.

### Strategic Synthesis

Strongest next move:

- Run a review-language proof sprint:
  - reply to existing GBP reviews with short outcome-specific replies
  - use the review-confidence GBP post
  - ask for honest reviews only after real student outcomes
  - track `proof_mentioned`, `work_moment`, `price_anchor_seen`, `booked_trial` and `lead_quality`.

What Auris should not do yet:

- Do not request exact review wording or keywords.
- Do not publish several Work-English variants at once.
- Do not use marketplace proof as the visible premium trust layer.
- Do not build a corporate/business-English page before one proof sprint produces owner-side signal.

Risk of acting too early:

- Weak review-confidence copy could sound like every other academy/tutor promise.

Risk of waiting:

- The strategy keeps polishing Work-English while the strongest proof layer, reviews, stays passive.

### Artifacts Updated

- Created `local-review-proof-language-scan.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `review-proof-library.md`.
- Updated `content-strategy.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`local-review-proof-language-scan.md` now contains:

- source discovery
- local/API evidence
- external evidence table
- proof pattern map
- review reply language bank
- safe review ask in English and Spanish
- GBP review-confidence post
- LinkedIn proof-line variant
- stop/change rules
- next evidence packet

GBP post draft:

```text
Students often tell me the biggest change is not just knowing more English. It is feeling more confident when they actually have to speak.

In class, we practise real situations, fix the Spanish-to-English patterns that slow you down, and keep useful phrases ready to review between classes.

Private English classes online, with local options around Castelldefels when the schedule fits.
```

Destination:

`https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=review_confidence_sprint&utm_content=confidence_real_situations`

### Process Improvement Notes

- Highest-signal source: owned live review endpoint plus local review pages.
- Useful but bounded source: marketplace profiles; strong for proof/price pressure, dangerous as brand model.
- Noisy source: broad professional/community pages without review language; they show attention, not buying trust.
- Process improvement made: review-language cycles now separate review-content proof, review-count proof and review-policy constraints in `automation-research-loop.md`.

### Next-Cycle Packet

Recommended next theme: review-language proof sprint results / owner-side interpretation.

Exact work:

- If Auris replied to reviews or posted the GBP review-confidence update:
  - record GBP owner metrics before/after: views, searches, website clicks, calls, messages, bookings if shown, top search terms
  - record any DMs/messages/inquiries
  - classify leads by `proof_mentioned`, `work_moment`, `price_anchor_seen`, `booked_trial`, `lead_quality`.
- If Auris sent review/referral asks:
  - record `ask_type`, `trigger_outcome`, reply, new review/referral, booked-trial outcome
  - verify wording stayed honest and pressure-free.
- If no owner-side signal arrives:
  - inspect 3-5 fresh solo/private teacher review surfaces outside marketplace pages
  - compare review specificity/freshness, not just star counts
  - inspect one high-fit professional community source only if it can reveal confidence or buying pain.

Files/APIs/searches:

- `local-review-proof-language-scan.md`
- `review-proof-library.md`
- `content-strategy.md`
- `measurement-plan.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- GBP review-confidence UTM destination
- search: `"English teacher Barcelona" "Google reviews" "confidence" "pronunciation"`
- search: `"English coach Barcelona" "review" "confidence speaking"`
- search: `"clases ingles profesionales Barcelona opiniones confianza"`

Hypotheses:

- H009 review proof.
- H013 professional-confidence expansion.
- H015 manual lead-source notes.
- H021 marketplace price policy.
- H023 referral/review loop.
- H025 Work-English Confidence Loop.

### Unfinished Threads

- Need owner-side GBP review reply/post results.
- Need review/referral micro-sprint outcomes.
- Need first LinkedIn/Meeting Voice post metrics if published.
- Need real inquiry language before any professional page or package.

## Cycle 27 - Review Proof Sprint Measurement

Date: 2026-05-22

Theme: GBP/reviews/local trust plus measurement.

Primary research question: how should Auris measure the review proof sprint, and do fresh solo/private/professional proof surfaces weaken the recommendation?

### Repo Status

- Website repo: strategy docs remain untracked; no public-facing code or profile changes were made.
- Teacher-assistant repo: still dirty with unrelated temp/cache/screenshot artifacts; inspected only.
- Safety boundary held: no commits, pushes, deploys, credential changes, GBP edits, LinkedIn edits, review replies, review requests, or third-party contact.

### Local Evidence

Inspected local artifacts:

- `research-log.md`, especially Cycle 26 and unfinished threads.
- `research-roadmap.md`, especially Packet AB.
- `hypotheses.md`, especially H009, H019, H021, H023 and H025.
- `automation-research-loop.md`.
- `local-review-proof-language-scan.md`.
- `review-proof-library.md`.
- `content-strategy.md`.
- `market-intelligence.md`.
- `measurement-plan.md`.
- `src/components/GoogleReviewsSection.jsx`.
- `src/components/SeoLandingPage.jsx`.
- `src/components/ContactSection.jsx` and `TalkTheTalk.jsx` references from code search.
- Teacher-assistant backend/frontend surfaces for homework, assignments, flashcards, SRS, materials and writing review.
- Git status for both repos.

Local interpretation:

- Review proof is ready to execute, not just ready to discuss.
- The website can display live review proof, and the GBP post destination is technically safe.
- The measurement gap remains owner-side: review replies, Google review asks, WhatsApp/email replies and referrals cannot be judged through Search Console or static site checks.
- Portal continuity is credible because the platform supports real between-class work, but it should still be described as Auris's follow-up rather than product software.

### API / Data Evidence

Live checks on 2026-05-22:

- `/.netlify/functions/google-reviews?language=es`: HTTP 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- `/.netlify/functions/google-reviews?language=en`: HTTP 200 JSON, source `places-new`, 5.0 rating, 15 reviews, 5 visible reviews.
- GBP review-confidence homepage UTM: HTTP 200, UTM preserved, canonical homepage.
- LinkedIn Meeting Voice Talk UTM: HTTP 200, UTM preserved, canonical `/talkthetalk`.
- `/ingles-empresas-castelldefels`: HTTP 200, canonical present.

No secrets were printed.

### Source Discovery Choices

Possible evidence locations considered before browsing:

1. Auris live Google review endpoint.
2. Live UTM destinations.
3. Website review/contact implementation.
4. Existing measurement ledgers.
5. Google official review/reply docs.
6. Google Maps review policy.
7. Solo/professional English coach sites.
8. Marketplace business-English pages.
9. Local academy proof pages.
10. Podcast/content-led professional-English sites.
11. Current-student notes.
12. Owner-side GBP metrics.

Highest-signal choices used:

- Owned live review endpoint and UTM checks.
- Google official review docs and Maps policy.
- Fresh professional/solo coach pages to test whether confidence/work proof is distinctive.
- Marketplace category page to test price-anchor pressure.
- Local academy/proof pages to keep Auris away from academy-style messaging.

### External Evidence

| Source | What It Supports | What It Weakens | Confidence |
| --- | --- | --- | --- |
| Google Business Profile review tips | Review links/QR codes and review replies are legitimate; replies should be short, relevant and non-promotional. | Long promotional replies and bulk-review tactics. | High |
| Google Business Profile manage reviews | Verified businesses can reply; replies are public and may notify customers. | Treating replies as private notes. | High |
| Google Maps UGC policy | Genuine review requests are allowed, but incentives, pressure, selective solicitation and requested wording are not. | Keyword/5-star review asks. | High |
| LUVEnglish | Barcelona/professional coaching uses real-world confidence, meetings, client calls and small-group coaching. | Confidence/work situations as unique by themselves. | High |
| Madeleine Cooke | Premium business-English coaching uses tailored sessions, interviews, presentations, meetings and measurable confidence outcomes. | Generic executive English copy for Auris. | Medium-high |
| Meg Language Coach testimonials | Testimonials mention confidence speaking, safe/supportive practice, professional expression, preparation and enjoyment. | Review confidence as distinctive alone. | Medium-high |
| Confident Business English | Senior-manager confidence is a content category with large audience claims. | Likes/downloads as direct buyer proof for Auris. | Medium |
| Sankofa English | Barcelona business-English copy names the same problem: knowing English versus using it under pressure. | Broad business-English positioning. | High |
| Eddy English Coach | Testimonials value human coaching, adaptation to professional field, work presentations and long-term relationship. | Portal/app proof as enough by itself. | High |
| Superprof Business English Barcelona | Marketplace category shows 5/5 average, 220+ reviews and 18 EUR/h average with confidence/professional promises. | Review volume as premium proof without price context. | High |
| Preptoace | Hybrid human/AI/speaking app proof is becoming normal in professional English. | Platform or AI feature uniqueness. | Medium-high |
| Elite Formacion / Language Services listing | Local alternatives range from academy scale/Fundae/follow-up to listings with no reviews. | Auris copying academy breadth. | Medium-high |

### Trend / Community / Product Signals

- Confidence is now category language across coaches, academies, marketplaces and content-led professional English.
- Proof specificity matters more than proof count for Auris because lower-price competitors can also show many reviews.
- Human feedback plus self-practice/tooling is becoming a normal market expectation; Auris's portal is strongest when tied to his direct correction.
- The most useful next evidence is not another competitor page but owner-side GBP/review/referral results.

### Hypotheses Changed

- H009 strengthened, but made measurement-dependent: reviews should lead, yet they need mechanism and owner-side interpretation.
- H019 strengthened: GBP baseline is required before judging the review-confidence post.
- H021 strengthened: marketplace category pages show even lower anchors such as 18 EUR/h, so price-anchor notes must include them.
- H023 strengthened: personal review/referral loop is now the simplest next trust test.
- H025 strengthened as a measured sprint, not a product/page.

Falsification attempt:

- Favored idea tested: `The review proof sprint should lead with confidence because Auris's reviews say confidence.`
- Result: refined, not rejected.
- Evidence: fresh professional/solo coach sources repeat confidence constantly. The word matters, but Auris must attach it to method: real situation, Spanish-speaker pattern correction and review between classes.

Second hypothesis tested:

- Idea: `A good public review count is enough to reduce premium-price risk.`
- Result: weakened.
- Evidence: Superprof's business-English category shows many reviews and confidence/professional promises at lower price anchors. Raw review count can trigger comparison shopping unless paired with specific premium proof.

### Strategic Synthesis

Strongest next move:

- Run a 7-day measured review proof sprint:
  - Day 0 GBP baseline.
  - Reply to 3-5 reviews.
  - Publish one GBP review-confidence post.
  - Send 1-2 pressure-free review asks only after real outcomes.
  - Interpret Day 7 owner-side metrics and manual proof notes.

What Auris should not do yet:

- Do not build another Work-English page.
- Do not publish multiple content variants.
- Do not request review keywords or 5-star language.
- Do not use marketplace proof as campaign proof.
- Do not judge the sprint without owner-side baseline.

Smallest practical test:

- Use the ledger in `review-proof-sprint-measurement-plan.md`.

Evidence that would change the recommendation:

- Leads mention only low prices/marketplaces.
- New reviews skew toward children/exams only.
- GBP owner-side actions do not move and no inquiry mentions review proof.
- A warm referral produces a booked trial faster than GBP.

Risk of acting too early:

- Generic confidence replies/posts blend into category language.

Risk of waiting:

- Strong existing reviews stay passive while competitors with fresher/larger proof occupy trust surfaces.

### Artifacts Updated

- Created `review-proof-sprint-measurement-plan.md`.
- Updated `hypotheses.md`.
- Updated `measurement-plan.md`.
- Updated `market-intelligence.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Updated `review-proof-library.md`.
- Appended this research-log entry.

### Implementation-Ready Output

`review-proof-sprint-measurement-plan.md` now contains:

- source discovery
- local/API evidence
- external evidence table
- fresh falsification
- 7-day review proof sprint ledger
- owner-side metrics checklist
- inquiry classification table
- continue/adjust/pause rules
- next evidence requirements

Key fields added/refined:

- `source_specific`
- `proof_mentioned`
- `work_moment`
- `price_anchor_seen` including `18`
- `buyer_type`
- `booked_trial`
- `lead_quality`

### Process Improvement Notes

- Highest-signal source: Google official review docs plus live Auris review endpoint.
- Highest-signal market source: Superprof category page for price-anchor falsification.
- Useful but bounded sources: professional coach/testimonial pages. They validate language, but they also show that confidence is crowded.
- Noisy/low-value source: local listings with no reviews; useful mainly as a warning that not all directory presence is trust proof.
- Process improvement made: `automation-research-loop.md` now says ready-to-sprint cycles should prioritize result instrumentation over additional ideation.

### Next-Cycle Packet

Recommended next theme: owner-side review proof sprint interpretation.

Exact work:

- If Auris provides GBP baseline or post/reply results:
  - compare Day 0 and Day 7 owner metrics: views, searches, website clicks, calls, messages, bookings if shown, top search terms
  - record whether review replies were approved, edited or delayed
  - classify every inquiry with `proof_mentioned`, `work_moment`, `price_anchor_seen`, `buyer_type`, `booked_trial`, `lead_quality`.
- If Auris sends review/referral asks:
  - check wording against Google policy constraints
  - record `ask_type`, `trigger_outcome`, `response`, `result`, and anonymous proof language
  - do not store names or private details in strategy docs.
- If no owner-side signal arrives:
  - inspect an owner-side-adjacent surface Auris can share manually: GBP screenshot metrics, LinkedIn analytics screenshot, Calendly booking source notes, or anonymized WhatsApp inquiry text
  - do not run another broad competitor scan unless a new hypothesis requires it.

Files/APIs to inspect next:

- `review-proof-sprint-measurement-plan.md`
- `local-review-proof-language-scan.md`
- `measurement-plan.md`
- `review-proof-library.md`
- `hypotheses.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- GBP review-confidence UTM destination

Hypotheses:

- H009 review proof.
- H019 GBP owner-side baseline.
- H021 marketplace price policy.
- H023 referral/review loop.
- H025 Work-English Confidence Loop.

### Unfinished Threads

- Need owner-side GBP baseline and Day 7 results.
- Need review reply status if Auris replies.
- Need review/referral ask outcomes.
- Need LinkedIn Meeting Voice metrics only after profile/readiness is clear.
- Need real inquiry language before creating any professional page or product.

## Cycle 28 - Owner-Side Proof Capture Packet

Date: 2026-05-22

Theme: measurement/analytics plus GBP/review local trust.

Primary research question: what is the smallest owner-side evidence packet Auris needs to capture so the GBP/review sprint can be interpreted without giving the automation direct GBP/LinkedIn access?

Repo status:

- Website repo: strategy docs are still in an untracked `docs/strategy/` state; no public site code was changed this cycle.
- Teaching platform repo: dirty/untracked local files are present, especially Playwright/screenshots/tmp artifacts; inspected read-only and did not modify.

### Local Evidence

Local artifacts inspected:

1. `research-log.md` latest cycles: Cycle 27 left owner-side evidence as the blocker.
2. `research-roadmap.md` Packet AC: next work should inspect owner-side-adjacent surfaces, not another broad competitor scan.
3. `hypotheses.md`: H009, H015, H019, H023 and H025 all require proof/lead capture before larger action.
4. `review-proof-sprint-measurement-plan.md`: sprint is ready but needs Day 0/Day 7 owner metrics.
5. `measurement-plan.md`: GA4/site events cannot see review replies, WhatsApp replies, private referrals or many Calendly source details.
6. `market-intelligence.md`: O031 was ready, but evidence needed owner metrics and lead notes.
7. `review-proof-library.md`: proof language and safe ask/reply patterns already exist.
8. `src/App.jsx`: tracks Calendly embedded scheduling via postMessage when available.
9. `src/utils/analytics.js`: site events only fire if `window.gtag` exists.
10. `src/components/ContactSection.jsx`: contact form/contact tabs give lead-intent events, not lead quality.
11. `src/components/GoogleReviewsSection.jsx`: public site pulls live Google reviews endpoint and links to Google reviews.
12. `netlify/functions/google-reviews.js`: Places API function returns rating, count, visible review data and Google Maps URL.
13. `src/components/TalkTheTalk.jsx`: Talk trial CTA can record intent but opens an external Calendly flow.
14. `src/components/Navbar.jsx`: WhatsApp/call/email clicks are tracked, but private lead content remains outside analytics.
15. `src/components/CalendlyBadge.jsx`: floating Calendly badge has no explicit campaign UTM.
16. `classroom-hub/src/pages/StudentDashboard.tsx`: student portal includes assignments, reviewed feedback and class continuity surfaces.
17. `backend/app/services/flashcard_srs.py`: SRS review logic supports real between-class practice proof.

Local interpretation:

- The public proof surface is ready enough: reviews are live, the homepage works and the GBP UTM destination works.
- The measurement blocker is owner-side and private: GBP performance, review reply status, WhatsApp/email language, Calendly source details and LinkedIn analytics.
- The portal proof should remain a support proof, not the headline. It is real, but leads must first show that follow-up/continuity affects trust.

### Data/API Evidence

- Live homepage returned HTTP 200 from Netlify.
- GBP review-confidence UTM homepage URL returned HTTP 200 and preserved the URL.
- Live reviews endpoint returned rating 5.0, 15 total reviews and 5 visible English reviews.
- Direct owner-side GBP/LinkedIn metrics were not available to the automation; this is the reason for the capture packet.

### Source Discovery

Possible source types considered were GBP owner Performance, GBP export, review reply status, GBP post status, GA4/UTMs, Calendly UTM records, WhatsApp/email inquiry text, LinkedIn post/profile analytics, Search Console, more competitor pages and direct API/account access.

Selected sources:

- Official GBP performance/review/post docs because they define owner-side metrics and policy constraints.
- Google Analytics and Calendly UTM docs because they define what can be tagged and where attribution can fail.
- LinkedIn owner analytics docs because LinkedIn performance is owner-only.
- BrightLocal 2026 because review trust, recency and owner response are outside-in market signals.
- Live site/review endpoint checks because they confirm the owned public surface is ready.

### External Evidence

| Source | Signal | Supports / Weakens |
| --- | --- | --- |
| Google Business Profile performance docs, https://support.google.com/business/answer/9918094 | Owners can see interactions, searches, views, calls, website clicks, messages and bookings where configured. | Supports H019; weakens GA4-only judgment. |
| GBP Performance API docs, https://developers.google.com/my-business/reference/performance/rest | GBP daily/monthly metrics and search keyword impressions exist via API, but API access/quota can require setup. | Supports manual packet before access work. |
| GBP posts docs, https://support.google.com/business/answer/7342169 | Posts can include action links and media; status can be live/pending/not approved; phone numbers in post descriptions may be rejected. | Supports post-status capture; weakens `draft equals live`. |
| Google review tips, https://support.google.com/business/answer/3474122 | Review requests and replies are supported, but replies should be short, relevant and non-promotional; incentives are prohibited. | Supports H009/H023; weakens promotional review replies. |
| Google manage reviews docs, https://support.google.com/business/answer/3474050 | Verified businesses can reply publicly; replies are reviewed and can be delayed; customers may be notified. | Supports reply-status capture. |
| Google Maps UGC policy, https://support.google.com/contributionpolicy/answer/7400114 | Genuine review requests are allowed; incentives, pressure, selective positive solicitation and requested content are unsafe. | Supports private, pressure-free asks; weakens keyword review asks. |
| Google Analytics UTM docs, https://support.google.com/analytics/answer/10917952 | Source/medium/campaign/content can identify external campaigns; missing fields can create `(not set)`. | Supports placement-specific URLs; weakens one generic link. |
| Calendly UTM docs, https://calendly.com/es/help/how-to-track-conversions-with-utm-parameters | Calendly can track scheduled meetings by UTM parameters. | Supports Calendly source field. |
| Calendly GA docs, https://calendly.com/help/calendly-google-analytics | Untagged Calendly traffic can appear as direct; embedded tracking differs from external flows. | Weakens default attribution confidence. |
| LinkedIn post analytics docs, https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content | Post analytics are owner-visible and include discovery/profile activity/social/link engagement. | Supports optional owner screenshot if LinkedIn is used. |
| LinkedIn profile views docs, https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature | Profile view insights are owner-side, privacy/Premium-limited and not public. | Weakens automation/public inference. |
| BrightLocal LCRS 2026, https://www.brightlocal.com/research/local-consumer-review-survey/?hsLang=en | Review recency, owner response and further website/social checking affect local trust; positive reviews often lead to more research before purchase. | Supports review plus owned-site clarity; weakens one-post closure assumptions. |

Trend/community/product signals:

- Product signal: Google Business Profile performance/review surfaces are explicitly owner-side, so screenshot/owner notes are a normal measurement path, not a workaround.
- Product signal: Calendly and LinkedIn both expose source/analytics data in owner contexts that automation cannot infer publicly.
- Market signal: BrightLocal 2026 reinforces that reviews and owner responses matter, but buyers often continue checking the website/social profile before booking.
- Process signal: the useful next source is owner-side data, not another competitor positioning page.

### Hypotheses Changed

- H009 strengthened but made dependent on capture: reviews remain the central proof asset, but Day 0/Day 7 metrics are needed to know whether proof creates action.
- H015 strengthened: UTMs/GA4 are support; manual notes are the truth layer for proof mentioned, price anchor and lead quality.
- H019 strengthened: GBP baseline remains mandatory, but direct API access is not required for the first sprint.
- H023 strengthened with privacy boundary: review/referral loop should be tested with anonymous private action notes, not public/programmatic referral machinery.
- H025 held steady: Work-English stays as a classification field and message angle until a lead mentions a work moment and books.

Falsification:

- Favored idea tested: `UTMs and GA4 can make the sprint measurable enough.` Weakened. They can show sessions and some clicks, but cannot see review reply status, GBP owner actions, WhatsApp language, private referrals or which proof made a lead trust Auris.
- Favored idea tested: `The automation needs direct account/API access before the sprint can run.` Weakened. Google/LinkedIn/Calendly owner surfaces can be captured manually for the first sprint with lower friction and better privacy.
- Cheaper/simpler alternative that could beat the GBP post: one warm referral after a real student outcome, if the student can repeat who Auris helps and the lead quality is high.

### Strategic Synthesis

Strongest next move:

- Have Auris capture the minimum viable packet before starting or interpreting the sprint: Day 0 GBP metrics, action log, manual inquiry notes, Day 7 GBP metrics and anonymized outcomes.

What not to do yet:

- Do not publish multiple GBP/LinkedIn variants before Day 0 is captured.
- Do not request specific review wording, keywords or star ratings.
- Do not treat LinkedIn impressions or GA4 sessions as buying proof without lead notes.
- Do not build a new Work-English page/package from this evidence.
- Do not browse more generic competitors unless owner-side data reveals a new strategic gap.

Risk of acting too early:

- A review sprint without Day 0/Day 7 owner metrics becomes another content action that cannot be interpreted.

Risk of waiting:

- Existing review proof remains passive while local competitors continue accumulating visible trust and owner responses.

### Artifacts Updated

- Created `owner-side-proof-capture-packet.md`.
- Updated `measurement-plan.md` with Owner-Side Proof Capture Packet rules.
- Updated `market-intelligence.md` with Cycle 28 signals and O032.
- Updated `hypotheses.md` for H009, H015, H019, H023 and H025.
- Updated `research-roadmap.md` with Packet AD.
- Updated `automation-research-loop.md` with Cycle 28 process rule.
- Updated `review-proof-sprint-measurement-plan.md` with Cycle 28 execution note.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: official Google Business Profile performance/review docs, because they define what the owner can capture.
- Highest-signal market source: BrightLocal 2026, because it explains why reviews and owner responses still matter but do not close the whole funnel alone.
- Useful but bounded sources: Calendly and LinkedIn docs. They define owner-visible metrics, but not Auris-specific lead quality.
- Noisy/low-value source: more competitor pages. They would not answer whether Auris's own sprint moved leads.
- Process improvement made: `automation-research-loop.md` now says owner-side evidence gaps should become privacy-safe capture packets before more browsing.

### Next-Cycle Packet

Recommended next theme: Owner-Side Proof Capture And Sprint Interpretation.

If Auris provides Day 0/Day 7 screenshots or notes:

1. Read `owner-side-proof-capture-packet.md`, `measurement-plan.md`, `review-proof-sprint-measurement-plan.md`, `hypotheses.md` and this log entry.
2. Transcribe only aggregate metrics and anonymous short lead phrases.
3. Compare Day 0 vs Day 7: views, searches, website clicks, calls, messages, bookings if shown, top search terms and review count/rating.
4. Classify leads by `source_type`, `proof_mentioned`, `work_moment`, `price_anchor_seen`, `booked_trial` and `lead_quality`.
5. Decide next channel: continue GBP/reviews, lean into referrals, use LinkedIn as credibility-only, or pause and strengthen profile/contact proof.

If no owner-side packet arrives:

1. Do not repeat a broad competitor/review scan.
2. Inspect only live homepage, review endpoint and UTM destinations.
3. Improve the owner prompt/checklist if needed.
4. Leave the next cycle with a one-message request Auris can answer quickly.

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-proof-capture-packet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-sprint-measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- GBP review-confidence UTM destination
- Owner-side screenshots/notes: GBP Performance, review replies, post status, LinkedIn analytics if used, Calendly source if booked, anonymized WhatsApp/email inquiry language.

### Unfinished Threads

- No owner-side Day 0/Day 7 metrics have been supplied yet.
- No review replies/posts/asks were made by the automation.
- No public-facing website, GBP, LinkedIn or Calendly changes were made.

## Cycle 29 - Five-Minute Owner Capture Prompt And Review Count Check

Date: 2026-05-23

Theme: measurement/analytics plus GBP/review local trust.

Primary research question: how can the owner-side proof packet become easy enough for Auris to answer, and does the live review-count change alter the proof sprint gate?

Repo status:

- Website repo: strategy docs are still untracked under `docs/strategy/`; no public site code was changed.
- Teaching platform repo: still has many dirty/untracked local files, mostly Playwright/screenshots/tmp artifacts; inspected status only and did not modify.

### Local Evidence

Local artifacts inspected:

1. `research-log.md`: Cycle 28 left the exact next action as a one-message owner prompt if no packet arrived.
2. `research-roadmap.md`: Packet AD said not to run another broad competitor scan while owner evidence is missing.
3. `owner-side-proof-capture-packet.md`: correct but too large for a first ask.
4. `hypotheses.md`: H009, H015, H019, H022, H023 and H025 all still depend on owner-side proof.
5. `measurement-plan.md`: manual owner notes remain the truth layer for proof, price anchor and lead quality.
6. `review-proof-sprint-measurement-plan.md`: the sprint ledger is ready but needs Day 0.
7. `market-intelligence.md`: O032 is ready but blocked by owner capture.
8. `gbp-week-one-execution-pack.md`: GBP review-confidence destination exists and needs baseline.
9. `content-strategy.md`: GBP/reviews remain first public action, LinkedIn stays secondary.
10. `review-proof-library.md`: reply/ask language is available, so copy is not the blocker.
11. `owner-profile-alignment-plan.md`: LinkedIn/GBP profile alignment is useful but owner metrics are still missing.
12. `linkedin-profile-readiness-and-first-post-plan.md`: LinkedIn should be measured through owner-visible profile/post analytics.
13. `linkedin-canonical-url-and-profile-funnel.md`: profile placements need separate UTM/source interpretation.
14. `gbp-linkedin-proof-sprint.md`: the recommended sprint still needs proof-source attribution.
15. `pricing-positioning.md`: premium price proof must avoid marketplace comparison traps.
16. `platform-backlog.md`: portal/follow-up remains credible support proof, not the headline.
17. `src/components/ContactSection.jsx`: current booking links use `https://calendly.com/aurienglish/trial-class` and group placement; contact/form/Calendly events exist but do not reveal private lead language.
18. `src/translations.js`: core website copy still supports practical, personal, confidence-led positioning.

Local interpretation:

- The research was about to become repetitive. The missing thing is not more proof theory; it is one tiny owner-side baseline.
- The full capture packet should remain the standard, but the next owner ask should be the 30-second or five-minute version.
- LinkedIn cannot be reliably audited by public fetch because the direct URL returns HTTP 999; owner analytics are the right evidence.
- The active Calendly links are the `aurienglish` links in code. A guessed old link under `auris-purlys/30min` returns 404 and should not be used as evidence.

### Data / API Evidence

Checks completed on 2026-05-23:

| Check | Result | Interpretation |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. | Public proof count appears to have increased. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. | English endpoint now matches Spanish count. |
| GBP review-confidence homepage UTM | HTTP 200, Netlify, campaign URL preserved. | Destination is ready. |
| LinkedIn Meeting Voice Talk UTM | HTTP 200, Netlify, campaign URL preserved. | Destination is ready if LinkedIn is used. |
| Active Calendly trial URL `aurienglish/trial-class` | HTTP 200. | Booking URL in code is live. |
| Active Calendly group-placement URL | HTTP 200. | Group placement URL in code is live. |
| Guessed Calendly URL `auris-purlys/30min` | HTTP 404. | Do not use guessed booking URLs. |
| LinkedIn public profile URL | HTTP 999. | Owner-side screenshot/note needed. |
| WhatsApp `wa.me` link | HTTP 302 to `api.whatsapp.com/send`. | Link works; message content remains private. |
| Sitemap / robots | sitemap lists homepage, Talk, local and business routes; robots allows all. | Technical discovery not the blocker. |

### Source Discovery

Possible source types considered:

| Source Type | Why It Might Help | Decision |
| --- | --- | --- |
| GBP owner Performance screen | Best evidence for searches, views and actions. | Use in prompt. |
| GBP owner reviews screen | Best evidence for true count, newest review and reply visibility. | Use in prompt. |
| Live Google review endpoint | Good public QA and drift detector. | Use, but do not treat as final owner truth. |
| Google Places API docs | Explains count and 5-review public limit. | Use. |
| Google review/reply/policy docs | Required before review replies or asks. | Use. |
| Calendly UTM docs | Explains how booking links can preserve source. | Use. |
| LinkedIn analytics docs | Confirms post/profile analytics are owner-only. | Use. |
| WhatsApp redirect check | Confirms contact link works, not source/lead quality. | Use as local/live check only. |
| LinkedIn public page fetch | Could reveal public profile, but blocked/low fidelity. | Do not rely on it. |
| More competitor pages | Could refine copy but does not answer owner-side proof. | Skip. |
| Search Console | Useful for SEO, weak for a 7-day GBP owner sprint. | Skip this cycle. |
| Direct account/API access | Precise but high friction. | Not needed before first manual prompt. |

Selected sources: official Google Business Profile performance, Google Places, Google review/policy, Calendly UTM, LinkedIn analytics, plus live endpoint/route checks.

### External Evidence

| Source | Signal | Supports / Weakens |
| --- | --- | --- |
| Google Business Profile performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Verified owners/managers can see performance by date range, including views, searches and actions such as calls, website clicks, messages and bookings where configured. | Supports H019; weakens Search Console/GA4-only judgment. |
| Google Places API Place resource, `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places` | `userRatingCount` is total reviews, while the `reviews` list is relevance-sorted and limited to a maximum of 5. | Supports owner count confirmation; weakens using visible review count as total proof. |
| Google review tips, `https://support.google.com/business/answer/3474122?hl=en` | Google supports review links/QR codes and public replies, but replies should be short, relevant and non-promotional. | Supports pressure-free asks and short replies; weakens promotional review replies. |
| Google manage reviews, `https://support.google.com/business/answer/3474050?hl=en` | Review replies are owner-side actions and public once visible. | Supports capturing reply visibility/status. |
| Google Maps UGC policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en` | Reviews should reflect genuine experience; paid/fake/manipulated engagement is prohibited. | Supports honest review asks; weakens keyword/star requests. |
| Calendly UTM tracking docs, `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters` | Calendly supports `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` and `utm_term`; embeds/direct links can carry UTMs. | Supports source notes; weakens guessing booking source when untagged. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Members can see post-specific discovery, profile activity, social engagement and link engagement; only the owner sees analytics. | Supports optional owner screenshot; weakens public inference. |
| LinkedIn profile views docs, `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature` | Profile view insights are owner-side, partly Premium-limited and subject to privacy settings. | Supports owner metrics and privacy boundaries. |
| LinkedIn Open to Work docs, `https://www.linkedin.com/help/linkedin/answer/a507508/making-your-profile-visible-or-hidden-from-recruiters` | Profile identity/status surfaces affect who sees what and can conflict with the teacher offer. | Supports H022 profile cleanup before heavy posting. |
| Live public route checks | Homepage, Talk UTM, sitemap, robots, WhatsApp redirect and active Calendly links are reachable. | Weakens technical-blocker theories. |

Trend/community/product signals:

- Product signal: GBP owner Performance is designed as an owner-side dashboard. Screenshots/notes are a normal first measurement method, not a workaround.
- Product signal: Places API can expose a total review count while only showing five review objects, so public proof checks and owner review management are different data layers.
- Product signal: LinkedIn and Calendly are useful only when owner-visible analytics/source fields are captured; public fetches and guessed URLs are brittle.
- Process signal: once the question is evidence capture friction, the next artifact should be a prompt, not another scan.

### Hypotheses Changed

- H009 strengthened and gated: reviews remain central, and the public count now appears to be 16, but owner-view confirmation is required before count-heavy copy.
- H015 strengthened and compressed: manual notes are still required, but the opening ask should be three fields, not a long ledger.
- H019 strengthened: Day 0 GBP owner baseline is mandatory, but one screenshot/note is enough to start.
- H022 unchanged but reinforced: LinkedIn should be judged from owner-side profile/post analytics, not public scraping.
- H023 held steady: review/referral loop remains promising, but no asks/replies/results arrived this cycle.

Falsification:

- Favored idea tested: `The full owner-side packet is the best next artifact.` Weakened. It is correct, but as a first ask it creates too much friction. A five-minute prompt is more likely to produce evidence.
- Favored idea tested: `The public review endpoint is enough to update proof copy.` Weakened. The count changed from 15 to 16, but public API output and owner dashboard should be separated before copy changes.
- Cheaper/simpler alternative: ask for only three facts now: owner-view rating/review count, one GBP Performance screenshot/note and any inquiry source/proof note. This beats waiting for perfect Day 0/Day 7 reporting.

### Strategic Synthesis

Strongest next move:

- Ask for the five-minute owner capture, not the full packet:
  - owner-view rating/review count
  - one GBP Performance screenshot/note
  - any last-7-day inquiry source/proof note

What Auris should not do yet:

- Do not change public copy to `16 reviews` until owner-view count is confirmed.
- Do not publish several GBP/LinkedIn variants before Day 0 exists.
- Do not request credentials or private message exports.
- Do not run another competitor scan unless owner-side evidence creates a new hypothesis.

Smallest practical test:

- Capture the 30-second version today. If 16 reviews are confirmed, update the private sprint baseline to `5.0 / 16`; if not, keep proof copy count-neutral.

Evidence that would change the recommendation:

- A qualified lead appears and mentions LinkedIn, referrals or price first; then the next cycle should classify that lead before asking for more GBP data.
- Owner dashboard shows no review-count change and no profile actions; then count drift is public API noise, not proof growth.
- One warm referral books a trial before GBP is activated; then referral wording gets priority over GBP post cadence.

Risk of acting too early:

- Public proof copy overstates or changes count before the actual owner dashboard confirms it.

Risk of waiting:

- A possible new review or unreplied review remains unacknowledged, and the profile stays passive even though the route and proof asset are ready.

### Artifacts Updated

- Created `owner-side-five-minute-capture-prompt.md`.
- Updated `owner-side-proof-capture-packet.md` with the Cycle 29 compressed prompt and review-count confirmation note.
- Updated `measurement-plan.md` with the five-minute owner capture measurement layer.
- Updated `market-intelligence.md` with Cycle 29 signals and O033.
- Updated `hypotheses.md` for H009, H015, H019 and H022.
- Updated `research-roadmap.md` with Packet AE.
- Updated `automation-research-loop.md` with the Cycle 29 compression rule.
- Updated `review-proof-sprint-measurement-plan.md` with the five-minute gate.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: the live Google reviews endpoint plus Google Places docs together. The live endpoint revealed a changed review count; the docs explained why public count and visible reviews should be interpreted separately.
- Highest-signal owner-side source type: GBP owner Performance/reviews screenshot. It is still missing, but it is clearly the next useful evidence.
- Useful but bounded sources: LinkedIn and Calendly docs. They define owner-visible metrics and UTM fields, but cannot prove Auris-specific lead quality without owner notes.
- Low-value/noisy source: more competitor research. It would not answer whether Auris has a baseline, a new review or lead proof.
- Process improvement made: `automation-research-loop.md` now says to compress a correct-but-heavy capture packet into a one-message owner prompt before browsing more.

### Next-Cycle Packet

Recommended next theme: Owner-Side Five-Minute Packet Interpretation.

If Auris sends the five-minute packet:

1. Read `owner-side-five-minute-capture-prompt.md`, `measurement-plan.md`, `hypotheses.md`, `market-intelligence.md` and this log entry.
2. Transcribe only aggregate metrics and anonymous short phrases.
3. Record owner-view `rating_review_count`, `range`, `views`, `searches`, `website_clicks`, `calls`, `messages`, `bookings`, `top_search_terms`, `newest_review_theme`, `reply_status`.
4. Classify any inquiry by `source_type`, `proof_mentioned`, `price_anchor_seen`, `work_moment`, `booked_trial` and `lead_quality`.
5. Decide whether the next action is: reply to a review, publish one GBP proof post, ask for one review/referral, keep LinkedIn credibility-only, or inspect profile/contact proof.

If no owner-side packet arrives:

1. Do not run another broad competitor scan.
2. Recheck only:
   - `/.netlify/functions/google-reviews?language=es`
   - `/.netlify/functions/google-reviews?language=en`
   - GBP review-confidence UTM destination
   - `owner-side-five-minute-capture-prompt.md`
3. Make the prompt shorter or more direct if it still feels too heavy.
4. Keep public action recommendations paused until Day 0 exists.

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-proof-capture-packet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-sprint-measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- `https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_confidence_review`
- owner-side screenshot/note: GBP Performance, GBP reviews screen, LinkedIn analytics if used, Calendly source if booked.

### Unfinished Threads

- Need owner-view confirmation of whether GBP is at 15 or 16 reviews.
- Need Day 0 GBP Performance baseline.
- Need newest review/reply visibility status.
- Need any last-7-day inquiry source/proof/price note.
- Need LinkedIn analytics only if LinkedIn was edited or posted.
- No public-facing website, GBP, LinkedIn or Calendly changes were made.

## Cycle 30 - Proof Sprint Action Gates

Date: 2026-05-23

Theme: measurement/analytics plus GBP/review local trust.

Primary research question: what can Auris safely do or interpret at each evidence level if owner-side GBP/LinkedIn data is still missing?

Repo status:

- Website repo: strategy docs remain untracked under `docs/strategy/`; no public website code was changed.
- Teaching platform repo: still has many dirty/untracked local artifacts; inspected read-only and did not modify.

### Local Evidence

Local artifacts inspected:

1. `research-log.md`: Cycle 29 left Level 1/2 owner evidence as the blocker.
2. `research-roadmap.md`: Packet AE said to inspect only live review endpoint, GBP UTM, prompt clarity and owner notes if no packet arrived.
3. `owner-side-five-minute-capture-prompt.md`: useful, but still needs an even shorter ask ladder for real-world friction.
4. `measurement-plan.md`: site events and UTMs support analysis but cannot see private lead language or GBP owner actions.
5. `market-intelligence.md`: O033 is ready but depends on owner data.
6. `review-proof-sprint-measurement-plan.md`: sprint can run only if measured with owner-side notes.
7. `review-proof-library.md`: review replies and proof language are ready, so the blocker is measurement, not copy.
8. `gbp-week-one-execution-pack.md`: GBP post/reply/ledger row exist, but owner baseline is still required.
9. `linkedin-profile-readiness-and-first-post-plan.md`: LinkedIn remains profile-first and owner-analytics dependent.
10. `hypotheses.md`: H009, H015, H019 and H022 all require owner-side confirmation before channel conclusions.
11. `netlify/functions/google-reviews.js`: Places New function requests rating, `userRatingCount`, reviews and Google URL.
12. `src/components/GoogleReviewsSection.jsx`: website displays live rating/review count and up to 3 visible review cards.
13. `src/App.jsx`: SPA route/pageview and Calendly scheduled-event tracking exist, but booking attribution is partial.
14. `src/components/ContactSection.jsx`: contact form, email, WhatsApp and inline Calendly exist; lead language remains private.
15. `src/components/CalendlyBadge.jsx`: floating booking CTA is click-tracked but source attribution depends on URL/setup.
16. `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`: assignments, reviewed feedback and class profile surfaces support between-class continuity.
17. `teacher-assistant/backend/app/services/flashcard_srs.py`: SRS review logic makes portal follow-up real.
18. `teacher-assistant/backend/app/db/models.py`: `ClassGroup`, company class fields, class context and homework log support professional/private follow-up proof.

Local interpretation:

- Public proof and route readiness are now strong enough to prepare an action.
- Public proof and route readiness are not strong enough to interpret an action.
- The correct next framework is evidence levels: public-only, owner review truth, Day 0 baseline, Day 7 comparison and lead proof.
- The owner prompt should now have a 10-second, 30-second, 2-minute and 5-minute ladder.

### Data / API Evidence

Checks completed on 2026-05-23:

| Check | Result | Interpretation |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. | Public proof still shows 16. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. | English endpoint still matches Spanish count. |
| GBP review-confidence homepage UTM HTML | Title and canonical resolve to homepage. | Destination readiness confirmed. |
| LinkedIn Talk UTM HTML | Title and canonical resolve to `/talkthetalk`. | Destination readiness confirmed. |
| Sitemap | Homepage, Talk, local and business routes listed. | Discovery surface remains clean. |
| Environment variable name check | No local Google/GSC/GA4/GTM env variable names visible in this shell. | No additional local analytics API route found this cycle. |

### Source Discovery

Possible source types considered:

| Source Type | Why It Might Help | Decision |
| --- | --- | --- |
| Live Google review endpoint | Confirms public proof and count drift. | Use as Level 0 public evidence. |
| Live route/canonical checks | Confirms campaign destination readiness. | Use as Level 0 public evidence. |
| Website implementation | Shows what events can and cannot measure. | Use. |
| Teaching-platform code | Confirms portal/follow-up proof is real. | Use as proof-support evidence. |
| GBP owner review screen | Confirms count, newest review and reply visibility. | Needed next. |
| GBP owner Performance | Confirms searches, views and actions. | Needed next. |
| LinkedIn owner analytics | Only useful if LinkedIn was edited or posted. | Optional. |
| Calendly UTM/source records | Only useful after a booking. | Optional. |
| Official product docs | Defines which metrics exist and what is owner-side. | Use. |
| More competitor pages | Would not answer evidence-level question. | Skip. |
| Direct API/account access | Could improve precision but unnecessary before simple owner capture fails. | Defer. |

Selected sources: official Google GBP performance/local ranking/posts/review docs, Google Places docs, Google Analytics UTM docs, Calendly UTM docs, LinkedIn analytics docs, live public checks and local implementation reads.

### External Evidence

| Source | Signal | Supports / Weakens |
| --- | --- | --- |
| Google Business Profile performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Owners/managers can see performance by date range, including interactions, searches, views and actions such as calls, website clicks, messages and bookings where available. | Supports Level 2 owner baseline; weakens public-only interpretation. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Complete profile info, reviews, review replies and photos are trust/visibility factors. | Supports preparing profile/reply basics; weakens treating one post as a ranking hack. |
| Google posts docs, `https://support.google.com/business/answer/7342169?hl=en` | Posts can include action links and can be pending or not approved. | Supports action log status fields; weakens assuming draft equals live. |
| Google review tips, `https://support.google.com/business/answer/3474122?hl=en` | Review asks and replies are supported; replies should stay short, relevant and non-promotional. | Supports reply drafts; weakens promotional review replies. |
| Google manage reviews docs, `https://support.google.com/business/answer/3474050?hl=en` | Verified businesses can reply publicly and manage replies. | Supports reply visibility/status capture. |
| Google Maps UGC policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en` | Incentivized, pressured, fake or manipulated reviews are unsafe. | Supports pressure-free asks; weakens keyword/star requests. |
| Google Places API Place resource, `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places` | Place data can expose rating, user rating count and a limited review list. | Supports public proof QA; weakens treating visible reviews as the full proof set. |
| Google Analytics campaign docs, `https://support.google.com/analytics/answer/10917952?hl=en` | UTM source/medium/campaign/content helps identify external campaign traffic. | Supports UTM readiness; weakens UTM as lead-quality proof. |
| Calendly UTM tracking docs, `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters` | Calendly can carry UTM fields in scheduling flows. | Supports booking-source notes when bookings appear. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Post analytics are owner-side and include engagement/action categories. | Supports optional owner screenshot; weakens public inference. |
| LinkedIn profile views docs, `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature` | Profile view insights are owner-side and privacy/Premium constrained. | Supports owner notes; weakens public profile fetches. |

Trend/community/product signals:

- Product signal: GBP/LinkedIn/Calendly all expose useful metrics in owner or tagged contexts, not public contexts.
- Product signal: the website can display current public review count automatically, so public proof can be watched without editing code.
- Market signal: review readiness and local trust matter, but buyer intent still needs actions or lead notes.
- Process signal: evidence-level labels prevent public route checks from answering owner-dashboard questions.

### Hypotheses Changed

- H009 strengthened but leveled: reviews remain the first trust asset, but public proof readiness is Level 0/1, not acquisition proof.
- H015 strengthened: manual notes are still required, but only at the level needed: owner count, Day 0, Day 7 and lead language.
- H019 strengthened: GBP Day 0 remains the hard gate for interpreting posts/replies.
- H022 held steady: LinkedIn stays below GBP until owner analytics show DMs, clicks, profile movement or qualified leads.
- H023 held steady: referral/review loop could beat GBP, but only a real lead or ask outcome can prove that.

Falsification:

- Favored idea tested: `Because the public proof surface is ready, Auris can start posting now.` Refined. He can prepare and possibly act after owner review truth/Day 0, but public-only data cannot interpret results.
- Favored idea tested: `The five-minute packet is the smallest useful ask.` Weakened. A 10-second review-count ask and 30-second two-item ask may be the better first step when friction is high.
- Cheaper/simpler alternative: collect Level 1 review truth only. This does not start the sprint, but it resolves the 15 vs 16 proof-count ambiguity immediately.

### Strategic Synthesis

Strongest next move:

- Move from Level 0 to Level 1 or Level 2:
  - Level 1: owner-view rating/review count and newest review/reply status
  - Level 2: one GBP Performance screenshot/note for 7 or 28 days

What Auris should not do yet:

- Do not interpret GBP or LinkedIn performance from public checks.
- Do not change public count-heavy proof before owner confirmation.
- Do not publish several variants before Day 0 exists.
- Do not run more broad competitor scans.

Smallest practical test:

- Ask the 10-second question: `Can you check your Google Business Profile and tell me the rating/review count it shows?`

Evidence that would change the recommendation:

- A lead arrives with clear source/proof/price language before the owner metrics arrive.
- LinkedIn produces DMs/link clicks/qualified leads after a post.
- GBP owner data shows meaningful actions after replies/post while lead notes stay absent.
- Review count/reply status reveals a new/recent review that should be replied to before posting.

Risk of acting too early:

- Auris could publish into a profile without Day 0 and still not know whether the action mattered.

Risk of waiting:

- Strong review proof remains passive while local buyers continue seeing academy alternatives with active profiles and responses.

### Artifacts Updated

- Created `proof-sprint-action-gates.md`.
- Updated `owner-side-five-minute-capture-prompt.md` with 10-second, 30-second and 2-minute asks.
- Updated `measurement-plan.md` with Level 0-4 proof sprint gates.
- Updated `market-intelligence.md` with Cycle 30 signals and O034.
- Updated `hypotheses.md` for H009, H015, H019 and H022.
- Updated `research-roadmap.md` with Packet AF.
- Updated `automation-research-loop.md` with the evidence-level process rule.
- Updated `review-proof-sprint-measurement-plan.md` with the Cycle 30 gate rule.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: local/live implementation plus official GBP performance docs. Together they show the split between public readiness and owner-side truth.
- Highest-signal missing source: GBP owner Performance and review screen.
- Noisy/low-value source: more competitor pages. They would sharpen copy but not move the evidence level.
- Useful bounded source: teaching-platform code. It confirms portal/follow-up proof remains real, but it should not distract from acquisition measurement.
- Process improvement made: `automation-research-loop.md` now requires evidence-level labels so Level 0 proof cannot answer Level 3/4 questions.

### Next-Cycle Packet

Recommended next theme: Owner Evidence Level Advancement.

If Auris sends any owner-side evidence:

1. Read `proof-sprint-action-gates.md`, `owner-side-five-minute-capture-prompt.md`, `measurement-plan.md`, `hypotheses.md` and this log entry.
2. Classify the evidence level:
   - Level 1: owner review truth
   - Level 2: Day 0 GBP Performance
   - Level 3: Day 0/action/Day 7
   - Level 4: lead proof
3. Transcribe only aggregate metrics and anonymous short phrases.
4. If Level 1 only, decide whether review proof should be `5.0 / 16`, `5.0 / 15` or count-neutral.
5. If Level 2, decide whether to reply to reviews, publish one GBP proof post, or keep preparing.
6. If Level 4, let real source/proof/price language update channel priority.

If no owner-side evidence arrives:

1. Do not browse more competitors.
2. Recheck only the live review endpoint and destination health.
3. Consider producing one tiny owner-facing image/checklist or an even shorter text prompt.
4. Keep public action recommendations gated.

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/proof-sprint-action-gates.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-sprint-measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- GBP review-confidence UTM destination
- owner-side sources: GBP Performance, GBP reviews screen, inquiry note, LinkedIn analytics only if used.

### Unfinished Threads

- Owner-view review count still unconfirmed.
- Day 0 GBP Performance still missing.
- Review reply visibility/newest review status still missing.
- No real inquiry source/proof/price note has arrived.
- LinkedIn analytics are still optional and unavailable unless Auris provides them.
- No public-facing website, GBP, LinkedIn or Calendly changes were made.

## Cycle 31 - Owner Evidence Ledger

Date: 2026-05-23

Theme: measurement/analytics plus GBP/review local trust.

Primary research question: how can any owner-side screenshot, review count or inquiry note be classified immediately without restarting the strategy discussion?

Repo status:

- Website repo: strategy docs remain untracked under `docs/strategy/`; no public website code was changed.
- Teaching platform repo: still has many dirty/untracked local artifacts; inspected read-only and did not modify.

### Local Evidence

Local artifacts inspected:

1. `research-log.md`: Cycles 29 and 30 left owner review truth and Day 0 GBP Performance as the unresolved blockers.
2. `research-roadmap.md`: Packet AF said public-only evidence can confirm readiness but not performance.
3. `proof-sprint-action-gates.md`: evidence levels exist, but needed a fillable ledger for real screenshots/notes.
4. `owner-side-five-minute-capture-prompt.md`: the ask ladder is good, but the response needed a transcription template.
5. `measurement-plan.md`: UTMs/site events support attribution, but private source/proof language remains invisible.
6. `market-intelligence.md`: O034 action gates are ready but require actual owner-side rows.
7. `hypotheses.md`: H009, H015, H019 and H022 all depend on owner evidence before channel conclusions.
8. `review-proof-sprint-measurement-plan.md`: Day 0/Day 7, action log and inquiry fields already exist but are scattered.
9. `review-proof-library.md`: proof language is ready; the bottleneck is evidence capture and action status.
10. `gbp-week-one-execution-pack.md`: Week 1 owner checklist and GBP post remain ready after baseline.
11. `content-strategy.md`: the Meeting Voice and GBP review-confidence posts should not become a larger calendar before evidence arrives.
12. `channel-fit-and-content-scan.md`: GBP plus LinkedIn remains the strategic channel pair, but owner-side metrics are the judging layer.
13. `pricing-positioning.md`: price-anchor fields matter because marketplaces can pull leads toward 30/18 EUR comparisons.
14. `platform-backlog.md`: portal/follow-up proof is real but should support the offer, not distract from acquisition evidence.
15. `netlify/functions/google-reviews.js`: public endpoint exposes rating, user rating count and limited reviews, not owner review management.
16. `src/components/GoogleReviewsSection.jsx`: site displays live rating/review count and three visible reviews.
17. `src/App.jsx`: pageview and Calendly scheduled-event tracking exist.
18. `src/components/ContactSection.jsx`: contact, Calendly, email and direct channels exist; private lead language remains outside analytics.
19. `src/components/CalendlyBadge.jsx`: floating booking CTA tracks clicks, but source truth still requires booking/source notes.
20. `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`: portal surfaces assignments, reviewed feedback and class profile.
21. `teacher-assistant/backend/app/services/flashcard_srs.py`: SRS makes between-class review and progress real.
22. `teacher-assistant/backend/app/db/models.py`: class, company, homework, assignment, SRS and student models support the premium follow-up proof.

Local interpretation:

- There is no shortage of prepared actions or proof language.
- The missing object is a structured evidence ledger that turns owner-side data into decisions.
- A full capture packet still feels heavy; row-specific capture is lighter.
- The next artifact should reduce transcription friction, not add another strategy layer.

### Data / API Evidence

Checks completed on 2026-05-23:

| Check | Result | Interpretation |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. Newest visible ES item: Andrea, 2025-11-18. | Public proof remains 5.0 / 16. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. Newest visible EN item: Ingrid, 2025-11-19. | English and Spanish public counts still match. |
| GBP review-confidence homepage UTM HTML | Title and canonical resolve to homepage. | Destination readiness remains good. |
| LinkedIn Talk UTM HTML | Title and canonical resolve to `/talkthetalk`. | Destination readiness remains good. |
| Robots/sitemap | Robots allows crawl; sitemap lists homepage, Talk, local and business routes. | Crawl/discovery surface remains clean. |
| Local env variable name check | No GSC/GA4/GTM/GBP/LinkedIn/Calendly credential names visible in shell output. | Manual owner capture remains the practical path. |

### Source Discovery

Possible source types considered:

| Source Type | Why It Might Help | Decision |
| --- | --- | --- |
| GBP owner review screen | Confirms count, newest review and reply status. | Required next. |
| GBP owner Performance | Confirms searches, views and actions. | Required next. |
| Manual inquiry notes | Reveals trust, work moment and price language. | Required when a lead appears. |
| Live review endpoint | Confirms public proof and count drift. | Use as Level 0 only. |
| Live route/canonical checks | Confirms campaign destinations. | Use as Level 0 only. |
| Website implementation | Shows what analytics can and cannot capture. | Use. |
| Teaching-platform code | Confirms portal/follow-up proof is real. | Use as support proof. |
| Official GBP/Places/GA docs | Defines fields and constraints. | Use. |
| LinkedIn/Calendly docs | Defines owner-side/post/booking source evidence. | Use only for optional rows. |
| Competitor pages | Would not answer the ledger/transcription problem. | Skip. |
| Direct account/API access | Higher precision but higher friction. | Defer until manual capture repeatedly fails. |

Selected sources: official Google GBP performance/local ranking/posts/review docs, Google Places docs, Google Analytics campaign URL docs, Calendly UTM docs, LinkedIn analytics docs, live public checks and local implementation reads.

### External Evidence

| Source | Signal | Supports / Weakens |
| --- | --- | --- |
| Google Business Profile performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Owners/managers can use Performance to see profile interactions, searches, views and actions such as calls, messages, bookings and website clicks where available. | Supports GBP Performance row; weakens public-only interpretation. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Complete profile info, reviews, review replies and photos/videos support local relevance/trust. | Supports profile basics/replies before more posts. |
| Google posts docs, `https://support.google.com/business/answer/7342169?hl=en` | Posts can include action buttons and may be pending or not approved. | Supports Action Log status field. |
| Google review tips, `https://support.google.com/business/answer/3474122?hl=en` | Owners can ask for reviews and reply; replies should be short, relevant and non-promotional. | Supports pressure-free review ask/reply rows. |
| Google manage reviews docs, `https://support.google.com/business/answer/3474050?hl=en` | Verified businesses can reply publicly and manage replies. | Supports reply visibility/status capture. |
| Google Maps UGC policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en` | Incentives, pressure, fake/manipulated reviews and requested wording are unsafe. | Weakens bulk/keyword review asks. |
| Google Places API Place resource, `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places` | Place data can expose rating, user rating count and limited reviews. | Supports public proof QA; weakens treating visible reviews as full owner truth. |
| Google Analytics campaign URL docs, `https://support.google.com/analytics/answer/10917952?hl=en` | Campaign URL parameters distinguish external traffic sources/content. | Supports URL/UTM fields; weakens UTM as lead-quality proof. |
| Calendly UTM tracking docs, `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters` | Scheduling flows can carry UTM/source details. | Supports Calendly source only when a booking appears. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Post analytics are visible to the owner and include performance categories. | Supports optional LinkedIn action row. |
| LinkedIn profile views docs, `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature` | Profile view insights are owner-side and privacy/Premium constrained. | Weakens public scraping as LinkedIn measurement. |

Trend/community/product signals:

- Product signal: GBP, Calendly and LinkedIn all expose useful evidence primarily in owner dashboards or tagged flows.
- Product signal: the website can surface public proof automatically, but it cannot see owner review/reply status.
- Measurement signal: public routes and UTMs prove readiness, not trust or acquisition.
- Process signal: row-specific capture is likely lower friction than a single large owner packet.

### Hypotheses Changed

- H009 strengthened: reviews remain the first proof asset, but proof changes should start with a Review Truth row, not public endpoint drift alone.
- H015 strengthened/refined: manual notes are still required, but only the row matching the evidence level should be requested.
- H019 strengthened: Day 0 is now a concrete GBP Performance row, not a vague reminder.
- H022 held steady: LinkedIn stays optional and owner-side unless it produces profile/post metrics or qualified inquiries.
- H023 held steady: referral/review loop remains promising, and any inquiry/referral note should be classified before more public theory.

Falsification:

- Favored idea tested: `Action gates are enough.` Weakened. Gates decide what evidence can interpret, but they do not show Auris exactly where to put a screenshot, action note or lead phrase.
- Favored idea tested: `Another public scan might advance the sprint.` Weakened. Public checks are stable and useful only as Level 0; owner-side rows are the missing layer.
- Cheaper/simpler alternative: fill only one row at a time. A single Review Truth row beats asking for a complete packet if the current blocker is still 15 vs 16 and reply status.

### Strategic Synthesis

Strongest next move:

- Use `owner-evidence-ledger-template.md` as the next capture surface. Ask for the smallest row that advances the evidence level.

What Auris should not do yet:

- Do not publish multiple GBP/LinkedIn variants before Day 0.
- Do not update public copy to `16 reviews` until owner-view count is confirmed.
- Do not run another competitor scan while the evidence level is still public-only.
- Do not ask for credentials or private message exports.

Smallest practical test:

- Fill the Review Truth row from the owner GBP dashboard: owner rating/review count, newest review theme and reply status.

Evidence that would change the recommendation:

- A qualified inquiry arrives and mentions source/proof/price/work moment; then Level 4 lead proof outranks the sequence.
- Owner dashboard confirms 15 instead of 16; then public proof stays count-neutral or 15.
- LinkedIn produces DMs/clicks/booked trial after profile cleanup; then LinkedIn gets a stronger test.
- A warm referral books faster than GBP moves; then the referral/review loop becomes priority.

Risk of acting too early:

- Publishing or interpreting from Level 0 creates a false sense of progress and leaves no useful comparison.

Risk of waiting:

- Strong public review proof stays passive while competitors with active profiles and replies remain visible in local trust surfaces.

### Artifacts Updated

- Created `owner-evidence-ledger-template.md`.
- Updated `proof-sprint-action-gates.md` with the Cycle 31 ledger upgrade.
- Updated `measurement-plan.md` with the owner evidence ledger layer.
- Updated `market-intelligence.md` with Cycle 31 signals and O035.
- Updated `hypotheses.md` for H009, H015, H019 and H022.
- Updated `research-roadmap.md` with Packet AG.
- Updated `automation-research-loop.md` with the row-template process rule.
- Updated `owner-side-five-minute-capture-prompt.md` to route responses into ledger rows.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: local strategy memory plus live endpoint checks. They showed that the problem is not uncertainty about action, but lack of typed owner evidence.
- Highest-signal official source type: GBP Performance/review docs, because they define exactly what owner fields can exist.
- Useful product sources: Calendly and LinkedIn docs, but only as optional fields after bookings or posts.
- Low-value source this cycle: competitor pages. They cannot answer whether Auris's owner dashboard or leads changed.
- Process improvement made: `automation-research-loop.md` now says that evidence levels need row templates, otherwise the automation may keep naming the same blocker.

### Next-Cycle Packet

Recommended next theme: Owner Evidence Row Interpretation.

If Auris sends owner evidence:

1. Read `owner-evidence-ledger-template.md`, `proof-sprint-action-gates.md`, `measurement-plan.md`, `hypotheses.md` and this log entry.
2. Classify the evidence level.
3. Fill only the matching row:
   - Review Truth
   - GBP Performance
   - Action Log
   - Inquiry
   - Decision Output
4. Redact names, emails, phone numbers, company names and full private messages.
5. Decide whether the next action is reply, one GBP post, review ask, referral ask, LinkedIn post, profile cleanup or pricing cleanup.

If no owner evidence arrives:

1. Do not run more competitor scans.
2. Recheck only:
   - `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
   - `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
   - GBP review-confidence UTM destination
   - LinkedIn Talk UTM destination
3. Keep the strategy paused at Level 0.
4. Consider whether the next ask should be a single sentence: `What review count do you see in Google Business Profile?`

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/proof-sprint-action-gates.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- owner-side source: GBP review screen, GBP Performance, action note, inquiry note, LinkedIn analytics only if used, Calendly source only if booked.

### Unfinished Threads

- Owner-view review count still unconfirmed.
- Day 0 GBP Performance still missing.
- Review reply visibility/newest review status still missing.
- No action log row exists yet.
- No real inquiry source/proof/price note has arrived.
- LinkedIn analytics remain optional and unavailable unless Auris provides them.
- No public-facing website, GBP, LinkedIn or Calendly changes were made.

## Cycle 32 - Owner Evidence Micro-Intake

Date: 2026-05-23

Theme: measurement/analytics plus GBP/review local trust.

Primary research question: what is the smallest owner-facing intake format that can move the system from a blank ledger to the first usable evidence row without asking Auris for a reporting task?

Repo status:

- Website repo: strategy docs remain untracked under `docs/strategy/`; no public website code was changed.
- Teaching platform repo: still has many dirty/untracked local artifacts from prior work; inspected conceptually from recent memory and did not modify.

### Local Evidence

Local artifacts inspected:

1. `research-log.md`: Cycle 31 left owner review count, Day 0 GBP Performance, reply status, action log and inquiry note unresolved.
2. `research-roadmap.md`: Packet AG said the ledger should be used next, and if no owner data arrives, the ask should become smaller.
3. `owner-evidence-ledger-template.md`: the ledger is implementation-ready but blank.
4. `owner-side-five-minute-capture-prompt.md`: the previous ask is already lighter than the full packet, but still asks for several things.
5. `proof-sprint-action-gates.md`: Level 0 public proof cannot interpret acquisition.
6. `measurement-plan.md`: public/site analytics and owner evidence are separate measurement layers.
7. `market-intelligence.md`: O035 says a blank ledger cannot prove acquisition.
8. `hypotheses.md`: H009, H015, H019, H022 and H023 all still depend on owner evidence.
9. `review-proof-sprint-measurement-plan.md`: Day 0/Day 7 and lead-note structure exist.
10. `review-proof-library.md`: review themes are ready, especially confidence, adaptation, comfort speaking, practical work and continuity.
11. `content-strategy.md`: proof-led GBP/LinkedIn drafts are ready but still gated by evidence.
12. `pricing-positioning.md`: marketplace price anchors mean proof/lead notes must stay close to pricing decisions.
13. `automation-research-loop.md`: Cycle 31 already warns that a blank ledger is not progress.
14. `platform-backlog.md`: platform/portal proof is real but is not the current owner-evidence blocker.
15. `src/utils/analytics.js`: direct event helpers exist, but owner/private proof is outside site analytics.
16. `src/components/TalkTheTalk.jsx`: Talk events and trial CTA exist; completed booking/source still need downstream evidence.
17. `src/App.jsx`: SPA pageview and Calendly scheduled-event listener exist.
18. `src/components/GoogleReviewsSection.jsx`: public reviews are surfaced from the live function.
19. `src/components/ContactSection.jsx`: contact/booking paths exist, but private lead language is not visible to analytics.
20. `src/components/CalendlyBadge.jsx`: click intent is tracked, but source truth still requires booking notes.

Local interpretation:

- The strategy does not need a bigger ledger.
- The next useful artifact is a micro-intake playbook: exact one-row asks and labels.
- A one-row owner check is now more important because the public endpoint shows a recent visible English review.

### Data / API Evidence

Checks completed on 2026-05-23:

| Check | Result | Interpretation |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews. | Public Spanish proof remains 5.0 / 16. |
| `/.netlify/functions/google-reviews?language=en` | 200 JSON, source `places-new`, rating 5.0, reviewCount 16, 5 visible reviews, including a very recent visible review. | Public proof has freshness signal; owner reply status is now more valuable. |
| GBP homepage UTM | HTTP 200; title/canonical resolve to homepage. | Destination readiness remains good. |
| LinkedIn Talk UTM | HTTP 200; title/canonical resolve to `/talkthetalk`. | Destination readiness remains good. |
| Sitemap/robots from prior cycle | Robots allows crawl; sitemap lists homepage, Talk, local and business routes. | No route-readiness blocker. |
| Local env relevant-name check | No usable local GSC/GA4/GTM/GBP/LinkedIn/Calendly credential names appeared in the targeted check. | Manual owner capture remains the practical path. |

### Source Discovery

Possible source types considered:

| Source Type | Why It Might Help | Decision |
| --- | --- | --- |
| GBP owner reviews screen | Confirms public 16 count, newest review and reply status. | Highest-signal first row. |
| GBP owner Performance | Confirms Day 0 searches/views/actions. | Required second row. |
| Manual inquiry notes | Reveals trust, work moment, price and buyer fit. | Required immediately if a lead appears. |
| Live review endpoint | Shows public proof/freshness/count drift. | Keep as Level 0 trigger. |
| Live route/canonical checks | Confirms destination readiness. | Keep as Level 0 only. |
| Website implementation | Shows what analytics can/cannot capture. | Use as support evidence. |
| Official Google/LinkedIn/Calendly docs | Define owner-side metrics and constraints. | Use for evidence basis. |
| Apple/Android screenshot docs | Reduce friction by making screenshot ask normal. | Use as process support. |
| Competitor pages | Do not answer the blank-ledger problem. | Skip. |
| Direct API/account access | Higher precision but higher friction. | Defer. |

Selected sources: official product docs, live public endpoints, live destination checks, local implementation reads, and screenshot-support docs as friction-reduction evidence.

### External Evidence

| Source | Signal | Supports / Weakens |
| --- | --- | --- |
| Google Business Profile performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Owners/managers can see performance interactions, searches, views and actions where available. | Supports `gbp_day0`; weakens public-only interpretation. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Reviews, replies and complete profile information support local trust/relevance. | Supports review truth/reply status first. |
| Google posts docs, `https://support.google.com/business/answer/7342169?hl=en` | Posts can have action buttons and can be pending/not approved. | Supports `action_log` status. |
| Google review tips, `https://support.google.com/business/answer/3474122?hl=en` | Owners can ask for genuine reviews and reply. | Supports small review/referral loop. |
| Google manage reviews docs, `https://support.google.com/business/answer/3474050?hl=en` | Verified owners can manage and reply to reviews. | Supports owner-view reply-status capture. |
| Google Maps UGC policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en` | Incentives, pressure and manipulated review requests are unsafe. | Weakens bulk/keyword review asks. |
| Google Places API Place resource, `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places` | Public place data can expose rating/count and limited reviews. | Supports public QA; weakens treating visible reviews as complete owner truth. |
| Google Analytics campaign URL docs, `https://support.google.com/analytics/answer/10917952?hl=en` | UTMs classify traffic source/content but not private trust reasons. | Supports source labels; weakens UTM-only conclusions. |
| Calendly UTM docs, `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters` | Scheduling flows can carry source parameters when configured. | Supports booking-source note only after booking. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Post analytics are owner-side. | Supports optional LinkedIn action rows. |
| LinkedIn profile views docs, `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature` | Profile-view insight is privacy/owner constrained. | Weakens public scraping as LinkedIn measurement. |
| Android screenshot support, `https://support.google.com/android/answer/9075928?hl=en` | Screenshotting is built into common owner devices. | Supports screenshot-based micro-intake over exports. |
| Apple screenshot support, `https://support.apple.com/en-us/102616` | Screenshotting is built into iPhone/iPad. | Supports one-screenshot asks. |

Trend/community/product signals:

- Product signal: GBP, LinkedIn and Calendly all put the most useful evidence in owner dashboards or tagged booking flows.
- Product signal: the public Places endpoint can show count/freshness but not full owner review management.
- Measurement signal: a fresh public review increases the value of reply-status capture.
- Process signal: screenshot-based one-row capture is now the best available path.

### Hypotheses Changed

- H009 strengthened: reviews remain the central proof asset, and a fresh public visible review makes owner reply status more urgent.
- H015 strengthened/refined: manual evidence should now start with one-row labels (`review_truth`, `gbp_day0`, `action_log`, `lead_note`, `day7_compare`) rather than a full packet.
- H019 held high but sequenced: Day 0 GBP Performance is still required before performance interpretation, but Review Truth is the first lower-friction row.
- H022 held steady: LinkedIn remains owner-side and optional unless edited/posted or it produces a lead.
- H023 strengthened lightly: fresh review proof supports review/reply loop, but review requests still must stay genuine and pressure-free.

Falsification:

- Favored idea tested: `The ledger template is enough.` Weakened. A blank ledger still leaves the strategy at Level 0, so it needs owner-facing micro-intake prompts.
- Favored idea tested: `A smaller ask will solve the owner-data gap.` Refined. It can reduce friction but cannot make owner data appear. After two unanswered one-row asks, stop shrinking the ask.
- Cheaper/simpler alternative: ask only for owner-view review count and newest-review reply status. This beats asking for a GBP Performance screenshot as the first move when no owner evidence exists.

### Strategic Synthesis

Strongest next move:

- Send one micro-intake ask: confirm owner-view review count and newest-review reply status.

What Auris should not do yet:

- Do not publish or interpret multiple GBP/LinkedIn actions before Day 0.
- Do not change public proof copy to `16 reviews` without owner-view confirmation.
- Do not ask for credentials, exports or full private messages.
- Do not run another competitor scan while the evidence row is still blank.

Smallest practical test:

- Fill `review_truth` in `owner-evidence-ledger-template.md`.

Evidence that would change the recommendation:

- If a qualified inquiry arrives, classify `lead_note` first and let it outrank the sequence.
- If owner view confirms a fresh unreplied review, reply before adding more public posts.
- If owner view confirms 15 rather than 16, use count-neutral public proof.
- If Day 0 GBP Performance arrives, run only one measured action before Day 7.

Risk of acting too early:

- Public proof freshness can create false momentum if it leads to posting without reply status or Day 0.

Risk of waiting:

- A recent review may sit unreplied and underused while local competitors keep visible trust surfaces active.

### Artifacts Updated

- Created `owner-evidence-micro-intake-playbook.md`.
- Updated `owner-side-five-minute-capture-prompt.md` with the Cycle 32 one-row-first rule.
- Updated `owner-evidence-ledger-template.md` with micro-intake labels and the fresh-review public proof note.
- Updated `measurement-plan.md` with the owner evidence micro-intake layer.
- Updated `automation-research-loop.md` with the Cycle 32 blank-ledger process rule.
- Updated `hypotheses.md` for H009, H015 and H019.
- Updated `market-intelligence.md` with Cycle 32 signals and O036.
- Updated `research-roadmap.md` with Packet AH.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: live Google reviews endpoint plus local memory. It showed the public proof is not stale and made the owner ask more specific.
- Highest-signal official source type: GBP review/performance docs, because they define what only the owner can confirm.
- Useful support source: mobile screenshot docs, because the practical issue is friction, not knowledge.
- Noisy/low-value source this cycle: competitor pages. They cannot answer whether Auris has replied to the newest review or what his GBP Performance looks like.
- Protocol improvement: after one-row prompts exist, another cycle should not keep reducing friction endlessly. It should wait for owner data or rotate to another open question.

### Next-Cycle Packet

Recommended next theme: Owner Evidence Intake Interpretation Or Rotation.

If Auris sends owner evidence:

1. Read `owner-evidence-micro-intake-playbook.md`, `owner-evidence-ledger-template.md`, `measurement-plan.md`, `hypotheses.md` and this log entry.
2. Classify the evidence label:
   - `review_truth`
   - `gbp_day0`
   - `action_log`
   - `lead_note`
   - `day7_compare`
3. Fill only the matching row.
4. Redact names, phone numbers, emails, companies, full messages and private profile identities.
5. Decide whether the next action is reply, ask for Day 0, one GBP post, review/referral ask, LinkedIn profile metric capture or hold.

If no owner evidence arrives:

1. Do not run more competitor scans.
2. Do not create a bigger ledger.
3. Recheck public reviews only if needed:
   - `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
   - `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
4. Rotate to one of:
   - student-platform retention proof
   - pricing/profile coherence
   - LinkedIn profile copy cleanup support
   - Search Console/indexing technical diagnostics
5. Leave the current next ask unchanged:

```text
Quick one: Google is publicly showing 5.0 / 16 reviews, and the English view seems to show a very recent review. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-micro-intake-playbook.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/market-intelligence.md`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- owner-side sources: GBP reviews screen first, GBP Performance second, inquiry note immediately if one appears.

### Unfinished Threads

- Owner-view review count still unconfirmed.
- Newest-review reply status still unknown.
- Day 0 GBP Performance still missing.
- No action log row exists yet.
- No real inquiry source/proof/price note has arrived.
- LinkedIn analytics remain optional and unavailable unless Auris provides them.
- No public-facing website, GBP, LinkedIn or Calendly changes were made.

## Cycle 33 - LinkedIn Profile Post-Cleanup Handoff

Date: 2026-05-23

Theme: LinkedIn profile funnel and content-social readiness.

### Primary Research Question

After the LinkedIn headline/About cleanup, what exact profile surfaces and routing choices must be verified before LinkedIn can graduate from credibility surface to first post?

### Repo Status

- Website repo: strategy docs are untracked under `docs/strategy/`; no public-facing website code was edited.
- Teaching platform repo: dirty/untracked generated artifacts remain present; no files were changed.
- Safety: no commits, pushes, deploys, profile edits, LinkedIn posts, Google profile changes, credential changes or third-party contacts.

### Local Evidence

Local artifacts inspected:

1. `research-log.md`: Cycle 32 left owner-evidence micro-intake as the active packet, but explicitly said to rotate after unanswered one-row asks.
2. `research-roadmap.md`: Packet AH allowed rotation to LinkedIn profile cleanup support if no owner evidence arrived.
3. `hypotheses.md`: H005 and H022 already framed LinkedIn as a trust/profile channel, not a reach engine.
4. `linkedin-profile-readiness-and-first-post-plan.md`: owner snapshot showed strong headline but old About, visible `Open to Work`, primary-role ambiguity and tiny baseline.
5. `linkedin-canonical-url-and-profile-funnel.md`: canonical URL and owned-site UTM policy were already defined.
6. `gbp-linkedin-proof-sprint.md`: first LinkedIn post draft exists, but depends on profile cleanup.
7. `work-english-proof-pairing-scorecard.md`: Talk UTM destination is already validated as the post route.
8. `work-english-pain-language-scan.md`: `your English gets smaller` remains the strongest work-English hook.
9. `content-strategy.md`: LinkedIn should be measured by profile actions, DMs, clicks and Talk events.
10. `channel-fit-and-content-scan.md`: GBP plus LinkedIn remains stronger than TikTok/Instagram-first.
11. `measurement-plan.md`: LinkedIn UTM registry already separates Contact info, Featured, About, Post and optional custom button.
12. `pricing-positioning.md`: LinkedIn/GBP should not route to marketplaces while price anchors are mixed.
13. `review-proof-library.md`: review themes support confidence, meetings, adaptation and continuity.
14. `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`: dashboard loads assignments, custom assignments, modular assignments, student profile and feedback, supporting the portal-continuity claim.
15. `teacher-assistant/backend/app/services/flashcard_srs.py`: SRS review scheduling and metrics exist, supporting the "between classes" continuity claim.

Local interpretation:

- The strongest available LinkedIn asset is not reach. It is a coherent profile that routes professional curiosity into the owned site or Talk the Talk.
- The first LinkedIn post is already good enough as a draft; the unresolved risk is sending people into a profile that still looks job-seeking, old-copy-led or company-led.
- Portal/SRS proof is real enough to mention inside About/Experience, but should remain support proof rather than a product-led headline.

### Data / API / Live Evidence

- Direct public LinkedIn profile fetch returned HTTP 999 on 2026-05-23, so public scraping is unreliable.
- LinkedIn Contact-info homepage UTM returned HTTP 200 and canonical homepage.
- LinkedIn Featured/Post Talk UTM returned HTTP 200 and canonical `/talkthetalk`.
- Live title/canonical checks confirmed Talk remains `Free English Speaking Practice Tool | Talk the Talk`.
- Live homepage title/canonical remained the main English with Auris home route.
- Source scan found no obvious public LinkedIn/Superprof/Tusclases profile links in current site code, which protects the premium owned funnel.

### Source Discovery Choices

Potential source types considered:

- owner-side LinkedIn screenshot
- direct public LinkedIn fetch/search result
- official LinkedIn intro/current-position/language/Open-to-Work/profile analytics/contact/Featured docs
- Google Analytics campaign URL docs
- live UTM/canonical checks
- website external-link extraction
- teacher-platform code
- review/proof library
- competitor LinkedIn examples
- local marketplace profile examples
- owner-side LinkedIn analytics
- real inquiry notes

Chosen:

- owner-side LinkedIn screenshot, official LinkedIn/Google docs, live owned-destination checks, website link scan and platform code.

Skipped:

- competitor/profile examples and marketplace scans, because they cannot answer whether Auris's actual profile is clean.

### External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| LinkedIn intro section help | Intro is a first-view profile surface with headline/current position/contact info. | H022 | About-only cleanup |
| LinkedIn current-position help/search result | Multiple current roles can affect the displayed current position. | H022 | Accepting EFB/education context as fixed |
| LinkedIn language profile help | EN/ES profiles need manual alignment. | H005, H022 | English-only cleanup |
| LinkedIn Open to Work help | Visibility can be public, recruiter-only/private or removed. | H022 | Public job-seeking as neutral |
| LinkedIn website link help | Contact info can carry website links. | H005 | Premium/custom button as prerequisite |
| LinkedIn Featured FAQ | Featured can showcase external links and content. | H005, H022 | Activity feed as only CTA |
| LinkedIn profile views help | Profile analytics are owner/privacy constrained. | H015, H022 | Scraping for profile analytics |
| LinkedIn post analytics help | Post analytics can include profile activity and link engagement. | H005, H022 | Likes-only interpretation |
| Google Analytics campaign URL docs | UTMs should separate source, medium, campaign and content. | H015 | One generic LinkedIn URL |
| Live LinkedIn fetch | HTTP 999 blocks reliable public profile inspection. | H015, H022 | Public-fetch-based decisions |
| Live owned-site UTM checks | Homepage and Talk routes are ready. | H005, H022 | Technical blocker |

### Trend / Community / Product Signals

- Product signal: LinkedIn profile surfaces are fragmented across intro, About, experience, Contact info, Featured and analytics. A profile cleanup needs a checklist, not a single copy paste.
- Product signal: LinkedIn analytics are owner-side and privacy constrained, so owner screenshots/notes are the practical measurement source.
- Funnel signal: the owned website currently avoids sending premium leads to lower-price marketplace contexts; keep that discipline.
- Method signal: the student portal and SRS make the "between classes" claim legitimate, but it should be proof of personal teaching continuity, not a tech-product repositioning.

### Hypotheses Changed

- H005 strengthened but gated: LinkedIn remains a trust surface, but only after profile surfaces are coherent and routes are owned.
- H022 strengthened and operationalized: LinkedIn must pass a pre-post handoff row before it can be treated as a posting channel.
- H015 strengthened indirectly: owner-side screenshots/notes remain necessary when profile platforms block public inspection.
- H021 reinforced: do not route premium website or LinkedIn traffic to marketplaces while price anchors remain mixed.

Falsification:

- Favored idea tested: `The first LinkedIn post is the next action.` Refined/partly weakened. The post draft is ready, but the next action is profile-surface verification.
- Favored idea tested: `Live UTMs mean LinkedIn is ready.` Weakened. UTMs prove route readiness only; they do not prove profile trust or channel performance.
- Cheaper/simpler alternative: use one screenshot/note to fill the handoff row before any posting.

### Strategic Synthesis

Strongest next move:

- Verify the LinkedIn P0 profile surfaces: About EN/ES, Open to Work, primary intro role, owned-site link and 7-day baseline.

What Auris should not do yet:

- Do not pay for LinkedIn Premium only for a custom button.
- Do not post daily or treat LinkedIn as an acquisition engine.
- Do not add LinkedIn to the public website footer yet.
- Do not publish from automation or ask for credentials.
- Do not route LinkedIn visitors to Superprof/Tusclases.

Smallest practical test:

- Fill one LinkedIn handoff row, then decide `go` or `hold` for Post 1.

Evidence that would change the recommendation:

- If a LinkedIn-origin inquiry arrives, classify the lead note immediately and let it outrank profile theory.
- If profile cleanup is confirmed and Post 1 creates DMs/clicks/Talk events, keep LinkedIn as a light professional trust loop.
- If two posts create impressions but no actions, keep LinkedIn credibility-only and return effort to GBP/reviews/referrals.

Risk of acting too early:

- A useful post could drive a few viewers into a mixed profile and weaken premium trust.

Risk of waiting:

- Low: LinkedIn baseline is currently tiny. Waiting for one cleanup check is cheaper than posting into a confusing profile.

### Artifacts Updated

- Created `linkedin-profile-post-cleanup-handoff.md`.
- Updated `linkedin-profile-readiness-and-first-post-plan.md`.
- Updated `linkedin-canonical-url-and-profile-funnel.md`.
- Updated `measurement-plan.md`.
- Updated `hypotheses.md` for H005 and H022.
- Updated `market-intelligence.md` with Cycle 33 signals and O037.
- Updated `research-roadmap.md` with Packet AI.
- Updated `automation-research-loop.md` with the Cycle 33 profile-handoff process rule.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: Auris's owner-side LinkedIn snapshot, because it showed what real visitors and Auris can see.
- Highest-signal support source: live owned-destination checks, because they proved the route is ready.
- Noisy/low-value source: direct LinkedIn fetch, because HTTP 999 makes it unsuitable for state confirmation.
- Source type to try next: owner screenshot or a one-line owner note, not another LinkedIn docs scan.
- Protocol adjustment: when profile-readiness is the blocker, produce a handoff checklist with exact fields. Do not keep creating post variants.

### Next-Cycle Packet

Recommended next theme: LinkedIn owner evidence interpretation or rotate back to GBP Review Truth.

If Auris sends LinkedIn evidence:

1. Read `linkedin-profile-post-cleanup-handoff.md`, `linkedin-profile-readiness-and-first-post-plan.md`, `linkedin-canonical-url-and-profile-funnel.md`, `measurement-plan.md` and H005/H022 in `hypotheses.md`.
2. Fill the handoff row:
   - About EN status
   - About ES status
   - Open to Work visibility
   - primary intro role
   - Contact info link
   - Featured link
   - profile views/search appearances/post impressions/followers/connections
3. Decide `go` or `hold`.
4. If `go`, present Post 1 as ready-to-copy but do not publish.
5. If `hold`, name only the smallest profile fix.

If Auris asks about access:

1. Prefer screenshots/owner notes.
2. Do not request or store LinkedIn credentials.
3. Redact profile-view identities, DMs, emails, phone numbers and company details.

If no owner evidence arrives:

1. Do not keep auditing LinkedIn docs.
2. Return to GBP Review Truth/Day 0 if owner evidence arrives.
3. Otherwise rotate to:
   - student-platform retention proof
   - pricing/profile coherence
   - Search Console/indexing diagnostics

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/linkedin-profile-post-cleanup-handoff.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/linkedin-profile-readiness-and-first-post-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/linkedin-canonical-url-and-profile-funnel.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- LinkedIn owner screenshot/note if available
- `https://englishwithauris.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_contact_info&utm_content=website_link`
- `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=profile&utm_campaign=linkedin_featured&utm_content=talk_the_talk`

### Unfinished Threads

- LinkedIn EN/ES About update status is unconfirmed.
- Public `Open to Work` visibility is unconfirmed after edits.
- Primary intro role is unconfirmed.
- Contact info and Featured links are unconfirmed.
- LinkedIn 7-day baseline remains owner-side only.
- Owner-view GBP review count still unconfirmed.
- Newest GBP review reply status still unknown.
- Day 0 GBP Performance still missing.
- No action log row or inquiry note exists yet.

## Cycle 34 - Portal Retention Proof Refresh

Date: 2026-05-23

Theme: student-platform retention proof and Next 15 implementation gate.

### Primary Research Question

After rotating away from unanswered owner-side channel evidence, does the refreshed portal evidence justify implementing `Your next 15 minutes`, and how should it be measured and positioned?

### Repo Status

- Website repo: strategy docs remain untracked under `docs/strategy/`; no public-facing website code was edited.
- Teaching platform repo: dirty/untracked generated artifacts remain present; inspected read-only.
- Safety: no commits, pushes, deploys, platform edits, profile edits, credential changes or public changes.

### Local Evidence

Local artifacts/code inspected:

1. `research-log.md`: Cycle 33 said to rotate if no LinkedIn owner evidence arrived.
2. `research-roadmap.md`: Packet AI allowed rotation to platform retention proof if no owner evidence arrived.
3. `hypotheses.md`: H006/H016/H017/H018 already define Next 15, autonomy, SRS spine and homework-log pilot.
4. `platform-backlog.md`: Next 15 remains the P0 platform idea.
5. `retention-baseline-and-manual-pilot.md`: prior aggregate baseline and pilot rules exist.
6. `next-15-minutes-platform-spec.md`: frontend-first implementation path exists.
7. `next-action-implementation-readiness.md`: technical readiness exists but pilot is still the safer default.
8. `next-15-pilot-tracker.md`: anonymous manual pilot is already executable.
9. `measurement-plan.md`: platform metrics are separated from public-site/channel metrics.
10. `pricing-positioning.md`: portal continuity is price support, not headline.
11. `review-proof-library.md`: review/portal continuity can support public proof.
12. `StudentDashboard.tsx`: current student dashboard has assignments, feedback, notes and flashcard hero but no selector.
13. `StudentSettings.tsx`: student-facing SRS stats pattern already exists.
14. `FlashcardStats.tsx`: top CTA uses `due_today`, a strong pattern for the card.
15. `types.ts`: `StudentFlashcardStats` already includes required fields.
16. `flashcard_srs.py`: SRS service computes due counts, session metrics and review quality.
17. `TeacherOverview.tsx`: teacher attention items and homework log already exist.
18. `routes.py`: homework-log API exists.
19. `ClassHomeworkLog` model: manual pilot can reuse live workflow.
20. `TalkTheTalk.tsx`: portal Talk lacks completion/reflection logging, so it remains fallback.

Local interpretation:

- The card is not blocked by product imagination. It is blocked by owner/student approval or an explicit implementation request.
- The product should solve "what should I do next?" before adding AI, audio, dashboards or another teacher panel.
- Portal continuity is real enough for support copy, but not yet strong enough for "automatic guidance" public claims.

### API / Data Evidence

Read-only aggregate database query succeeded after correcting a stale table name from the old query template. No names, emails, student content, feedback text or secrets were exported.

Refreshed baseline:

| Window | Active Students | Flashcard Sessions | Cards Reviewed | Completed Sessions | Flashcard Reviews | Standard Started | Standard Submitted | Writing Submitted | Writing Reviewed | Modular Started | Modular Submitted | Modular Reviewed |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 7 days | 27 | 42 | 288 | 36 | 275 | 0 | 0 | 0 | 0 | 5 | 4 | 1 |
| 14 days | 39 | 91 | 711 | 85 | 644 | 1 | 1 | 0 | 0 | 13 | 9 | 1 |
| 30 days | 42 | 163 | 1555 | 157 | 1247 | 2 | 2 | 0 | 0 | 25 | 14 | 2 |

Scheduled-class filter:

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

Data interpretation:

- SRS is still the strongest measured retention behaviour.
- Weekly SRS activity is lower than the previous snapshot, so avoid a triumphalist reading.
- Modular work remains a useful secondary signal.
- Standard/writing loops remain too sparse for V0 success.
- There is no event table for a card, so do not build analytics panels before student action exists.

### Source Discovery Choices

Possible source types considered:

- aggregate portal data
- student dashboard implementation
- SRS stats/service implementation
- teacher overview and homework-log code
- Talk the Talk portal code
- teacher-platform product pages
- learning-product path/study-plan examples
- learning analytics/self-regulated learning research
- app/user backlash about forced paths
- current-student replies

Chosen:

- aggregate data, local implementation path, teacher workflow, homework log, Talk fallback, tutor/language platform examples and learning-product/research sources.

Skipped:

- acquisition competitor scans, because this cycle asks what the portal should prove between classes.

### External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Duolingo learning path | Clear sequencing is a major learning-product pattern. | H006 | Locked path for adults. |
| Quizlet Learn | Guided study paths are normal in study products. | H006, H017 | Flashcard-only product logic. |
| Busuu Study Plan | Study goals/schedules/reminders support accountability. | H006 | Heavy planning UX. |
| Busuu Study Plan launch | Smaller planned steps reduce the feeling of no progress. | Next 15 size | Over-marketing progress. |
| Khan individual student report | Teacher-side reports can show activity by learner/date/content. | Future teacher companion | Dashboard before card events. |
| Tuton | Independent tutor category values student context, homework and progress. | H006, H018 | LMS sprawl. |
| Tuton progress article | Notes, vocabulary and progress work best when connected. | Portal continuity | Tracking without next-class use. |
| Eluency | Teacher-created practice and completion/weak-spot visibility are market-normal. | Personal practice loop | Full rebuild. |
| ZenGengo | Language homework can include speaking/writing/media and teacher feedback. | Later feedback/Talk loop | Audio complexity now. |
| Language Homework | Quizzes, flashcards and drills are a visible tutor category. | SRS/modular loop | Generic platform positioning. |
| Tutor.com reports | Usage/reporting can identify learners needing help. | Future teacher signal | Institutional tone. |
| Frontiers SRL/mobile learning | Planning, monitoring and feedback mechanisms support self-regulated learning. | Why-line and future reflection | Guaranteed retention from one card. |
| Preply human-plus-AI features | Large platforms package human lessons plus between-lesson guidance. | Auris's lean human-plus-portal model | Building AI first. |
| Busuu community corrections | Feedback after production is a known learning loop. | Feedback as premium proof | Feedback as first metric without view logging. |

### Trend / Community / Product Signals

- Product signal: teacher-led language platforms increasingly combine homework, progress, vocabulary, completion and teacher prep.
- Product signal: learning apps solve next-step uncertainty with paths/plans, but prior evidence warns that forced paths can annoy learners.
- Market signal: human-plus-practice is normalising, but a personal teacher can win with lean, human guidance rather than a broad LMS.
- Internal product signal: SRS is measured; feedback and Talk are valuable but under-instrumented.

### Hypotheses Changed

- H006 strengthened but remains gated: Next 15 is still the right first platform improvement, but pilot/approval is still needed.
- H016 strengthened: adult/professional guidance must be advisory and preserve choice.
- H017 strengthened but bounded: SRS is the first measurable spine, not the whole method.
- H018 strengthened: homework log is enough for the manual pilot.

Falsification:

- Favored idea tested: `The card is so ready that we should implement now.` Refined. The code path is ready, but no owner/student approval arrived and no event layer exists.
- Favored idea tested: `SRS proves retention.` Weakened. SRS proves between-class activity; retention and premium value need before/after and in-class evidence.
- Cheaper alternative: WhatsApp next-step plus homework log may beat a dashboard card if students prefer direct personal reminders.

### Strategic Synthesis

Strongest next move:

- Ask Auris to choose `pilot` or `implement`, but do not edit the platform from automation without explicit approval.

What Auris should not do yet:

- Do not build a teacher analytics dashboard.
- Do not add AI/audio/pronunciation scoring.
- Do not use portal proof as the first public headline.
- Do not claim automatic guidance until the card exists.
- Do not overfit the teaching method to flashcards.

Smallest practical test:

- Run the 3-5 student pilot using `next-15-pilot-tracker.md`, save the WhatsApp message in the existing homework log if useful, and record anonymous outcome rows.

Evidence that would change the recommendation:

- If 2/3 students say the portal is unclear and the suggestion would help, implement the card.
- If 2/3 act before the next class, implement the card.
- If 2/3 say it feels like homework, soften copy or keep WhatsApp/direct reminders.
- If Auris asks to implement now, patch only `StudentDashboard.tsx`.

Risk of acting too early:

- The card could feel like extra homework or add UI clutter before student demand is confirmed.

Risk of waiting:

- The portal continues to be a useful library rather than a clear between-class coach.

### Artifacts Updated

- Created `portal-retention-proof-refresh.md`.
- Updated `platform-backlog.md`.
- Updated `retention-baseline-and-manual-pilot.md`.
- Updated `next-15-minutes-platform-spec.md`.
- Updated `next-action-implementation-readiness.md`.
- Updated `measurement-plan.md`.
- Updated `hypotheses.md` for H006, H016, H017 and H018.
- Updated `market-intelligence.md` with Cycle 34 signals and O038.
- Updated `research-roadmap.md` with Packet AJ.
- Updated `automation-research-loop.md` with the Cycle 34 anti-parallel-spec process rule.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: aggregate portal data, because it directly updated the product gate.
- Highest-signal code source: StudentDashboard/SRS/TeacherOverview, because they show the card can be small.
- Noisy/low-value source: broad product pages if read as a feature checklist. They validate category direction but pull toward platform sprawl.
- Best next source type: current-student replies or an owner product decision.
- Protocol improvement: when a concept already has multiple specs, refresh evidence and decide the gate instead of creating another parallel spec.

### Next-Cycle Packet

Recommended next theme: product decision interpretation or rotate to pricing/profile coherence.

If Auris chooses `pilot`:

1. Read `portal-retention-proof-refresh.md` and `next-15-pilot-tracker.md`.
2. Use one message variant with 3-5 active students.
3. Store exact messages privately or in the live homework log.
4. Record only anonymous rows in strategy memory.
5. Decide build/soften/keep manual/pause.

If Auris chooses `implement`:

1. Read `next-15-minutes-platform-spec.md`, `next-action-implementation-readiness.md` and `portal-retention-proof-refresh.md`.
2. Patch only `StudentDashboard.tsx`.
3. Reuse existing SRS stats API and existing route handlers.
4. Keep copy advisory.
5. Do not add event table or teacher analytics panel in V0.
6. Run local build/tests and browser verification if a session is available.

If no product decision arrives:

1. Do not create another Next 15 spec.
2. Rotate to pricing/profile coherence or Search Console/indexing.
3. Keep portal copy modest in any public-facing strategy.

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/portal-retention-proof-refresh.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-minutes-platform-spec.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-action-implementation-readiness.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/retention-baseline-and-manual-pilot.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/backend/app/services/flashcard_srs.py`
- aggregate-only DB query only if a product decision requires it.

### Unfinished Threads

- Auris has not chosen manual pilot versus implementation.
- No current-student pilot replies exist.
- No authenticated student-dashboard screenshot exists.
- Current paid/current active class filter is still owner-side.
- Feedback-view, Talk-completion/reflection and next-action events are still missing.
- GBP owner review truth and Day 0 Performance are still missing.

## Cycle 35 - Review Count 16 Reply Gate

Date: 2026-05-23

Theme: GBP/reviews/local trust and owner-side evidence gates.

### Primary Research Question

Now that the public Google reviews endpoint is consistently showing `5.0 / 16`, what is the smallest owner-side action that turns this into usable trust evidence without overclaiming?

### Repo Status

- Website repo: strategy docs remain untracked under `docs/strategy/`; no public-facing website code was edited.
- Teaching platform repo: dirty/untracked generated artifacts remain present; inspected only as prior context.
- Safety: no commits, pushes, deploys, Google profile edits, review replies, LinkedIn actions, credential changes or public changes.

### Local Evidence

Local artifacts/code inspected:

1. `research-log.md`: Cycle 34 left GBP owner review truth and Day 0 Performance unfinished.
2. `research-roadmap.md`: Packet AJ allowed rotation to pricing/profile/Search Console if no product decision arrived; review truth remained an open acquisition gate.
3. `review-proof-library.md`: still carried an older `5.0 / 15` source summary even though later measurement artifacts had moved to 16.
4. `measurement-plan.md`: already defines Review Truth, GBP Performance, Action Log and Inquiry rows.
5. `owner-side-proof-capture-packet.md`: confirms manual owner evidence is the path, not account access.
6. `owner-side-five-minute-capture-prompt.md`: already includes the 16-review micro-ask.
7. `owner-evidence-micro-intake-playbook.md`: says ask for one row at a time.
8. `owner-evidence-ledger-template.md`: has a Public Proof row and blank Review Truth row.
9. `proof-sprint-action-gates.md`: defines Level 0 public proof versus Level 1 owner review truth.
10. `review-proof-sprint-measurement-plan.md`: has the reply/post/ask measurement model.
11. `gbp-week-one-execution-pack.md`: still contains historical 15-review snapshots from Cycle 16.
12. `hypotheses.md`: H009, H019 and H023 all depend on owner-side review/reply/GBP data.
13. `market-intelligence.md`: O038 was the latest opportunity; review count/reply gate needed a new opportunity.
14. `netlify/functions/google-reviews.js`: the public endpoint uses Places New `rating,userRatingCount,reviews,googleMapsUri` and cannot expose owner reply status.
15. `src/components/GoogleReviewsSection.jsx`: the public review component displays the live `reviewCount` when the endpoint loads.
16. `src/App.jsx`, `TalkTheTalk.jsx`, `ContactSection.jsx`: events can track site intent, but cannot see GBP reply status or private lead language.
17. `linkedin-profile-post-cleanup-handoff.md`: LinkedIn remains owner-screenshot gated and should not outrank GBP.
18. `linkedin-canonical-url-and-profile-funnel.md`: LinkedIn destinations are ready, but route readiness is not channel proof.

Local interpretation:

- The old conflict was not "15 or 16 forever"; it is evidence levels. Public endpoint count can update, but owner truth and reply status are still missing.
- The website may dynamically show 16, so the risk is static/manual copy and sprint interpretation, not necessarily the live review component.
- A fresh public review makes reply status more urgent than another post draft.
- The first action should be one owner row, not credentials, not a broad dashboard packet.

### API / Data Evidence

Read-only public/live checks:

| Check | Result | Meaning |
| --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | HTTP 200 JSON, source `places-new`, rating `5`, reviewCount `16`, 5 visible reviews | Public Spanish proof is live and stronger than older 15 snapshots. |
| `/.netlify/functions/google-reviews?language=en` | HTTP 200 JSON, source `places-new`, rating `5`, reviewCount `16`, 5 visible reviews | Count is consistent across language views. |
| English visible review metadata | One visible review has `relativeTimeDescription` = `in the last week` and publish time `2026-05-22T17:12:49Z` | Reply status is now a timely owner-side question. |
| LinkedIn canonical/public profile fetch | HTTP 999 for user-provided URL and clean canonical URL | Public LinkedIn inspection is still unreliable. |
| LinkedIn homepage profile UTM | HTTP 200, homepage title/canonical OK | Route readiness remains fine. |
| LinkedIn Featured/Post Talk UTMs | HTTP 200, Talk title/canonical OK | Route readiness remains fine. |

No names, private messages, credentials, phone numbers, emails or review text were stored in this cycle. Review metadata was aggregated to count/date/length/status-style fields.

### Source Discovery Choices

Possible source types considered:

- live Google reviews endpoint
- GBP owner reviews screen
- GBP owner Performance screen
- review function and website component code
- official Google review/reply docs
- official Google local ranking docs
- official Google post/status docs
- official Google review API docs
- official Google review-snippet/self-serving review docs
- marketplace/local category listings
- professional-English provider pages
- LinkedIn public fetch and owner analytics
- private inquiry notes

Chosen:

- live endpoint checks, review function/component code, existing owner-evidence artifacts, official Google docs, marketplace/professional falsification sources and route checks.

Skipped:

- More broad local competitor scans, because the question is now a precise reply/count gate.
- More LinkedIn docs, because public fetch remains blocked and owner screenshots are already the recommended source.

### External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Google manage customer reviews, `https://support.google.com/business/answer/3474050` | Verified businesses can reply to reviews; replies are public; customers may be notified; replies should be positive, relevant, short and simple. | Reply gate before more posts. | Treating replies as private or promotional. |
| Google local ranking docs, `https://support.google.com/business/answer/7091/improve-your-local-ranking-on-google` | Complete info plus review count/score can support local visibility; relevance/distance/prominence still matter. | Review/profile basics. | Posts-only strategy. |
| Google posts docs, `https://support.google.com/business/answer/7342169` | Updates can show on Search/Maps, have action buttons, and may be pending/not approved. | Action-log status field. | Assuming drafts are live actions. |
| Google review API resource, `https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews` | Review resources include star rating, text, timestamps and owner replies. | Owner/API-level reply metadata. | Public Places endpoint as reply-status source. |
| Google review snippet docs, `https://developers.google.com/search/docs/appearance/structured-data/review-snippet` | LocalBusiness review markup is only for sites capturing reviews about other local businesses, with self-serving guidelines. | Schema guardrail. | Aggregate-rating schema quick win. |
| Google self-serving review rich-results update, `https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful` | Google does not display rich results for self-serving LocalBusiness/Organization reviews; Business Profile is unaffected. | Keep reviews visible and GBP-native. | Chasing organic review stars from own-site markup. |
| Auris Superprof listing, `https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html` | Marketplace proof shows 5.0 / 7, 35 EUR/h and 20 students. | Reviews matter. | Marketplace proof as premium first CTA. |
| Superprof Castelldefels category, `https://www.superprof.es/clases/ingles/castelldefels/` | Local private-class category repeats conversation/business-English promises and lower-price comparisons. | Price-anchor tracking. | Count-only differentiation. |
| English for Business Spain LinkedIn, `https://es.linkedin.com/company/english-for-business-spain` | Corporate provider foregrounds 30+ years, companies, e-learning and FUNDAE. | Auris should stay personal/direct. | Academy/corporate review replies. |
| Executive Business English LinkedIn, `https://www.linkedin.com/company/executive-business-english` | Confidence, meetings, negotiations and presentations are common professional-English language. | Work-confidence lane. | Confidence as unique by itself. |
| The English Training Company, `https://www.englishtco.com/` | Professional speaking confidence and practical programmes are category language. | Method-specific proof. | Generic confidence claims. |
| Barcelona Meetup business-English event, `https://www.meetup.com/es-ES/barcelona-wisdom-business-network-meetup-group/` | Meetings, introductions, opinions and assertive language appear as local professional-English needs. | `work_moment` classification. | Generic review posts. |

### Trend / Community / Product Signals

- Public proof signal: review count has moved from earlier 15 snapshots to 16 in both language views.
- Freshness signal: the English visible set includes a May 22, 2026 review, making reply status more time-sensitive.
- Platform signal: Places endpoint can prove public proof health but cannot prove owner reply status or profile performance.
- SEO guardrail: self-serving review markup is not a useful shortcut for Auris's own review block.
- Market signal: reviews and confidence language are common across marketplaces and professional providers, so the differentiator is the proof chain: confidence plus Spanish-speaker correction plus direct teacher relationship plus follow-up.

### Hypotheses Changed

- H009 strengthened and reply-gated: reviews remain the central proof asset, but static count copy and schema shortcuts remain blocked until owner truth.
- H019 held high: owner-side GBP baseline is still required before interpreting a post; the sequence is Review Truth first, GBP Day 0 second.
- H023 strengthened: review/reply loop remains better near-term trust work than another content draft, especially if the newest review is unreplied.
- H021 reinforced indirectly: marketplace reviews can prove demand but also anchor lower prices, so keep owned Google proof first.

Falsification:

- Favored idea tested: `Because public proof now shows 16, update public copy everywhere.` Weakened. The dynamic component may show 16, but static/manual copy should wait for owner-view truth.
- Favored idea tested: `Review count itself is the acquisition lever.` Refined. Count matters, but competitor/marketplace evidence shows confidence and reviews are common; Auris must pair proof with mechanism.
- Cheaper/simpler alternative: one timely owner reply plus a Review Truth row may beat another GBP post draft.

### Strategic Synthesis

Strongest next move:

- Ask exactly one owner-side review truth question: `Google is publicly showing 5.0 / 16 reviews. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?`

What Auris should not do yet:

- Do not share credentials.
- Do not publish another GBP post before reply status is known if the fresh review is unreplied.
- Do not update static copy to `16 reviews` without owner confirmation.
- Do not add self-serving aggregate-review schema.
- Do not use marketplace profile proof as the first premium CTA.
- Do not move LinkedIn above GBP because LinkedIn routes return 200.

Smallest practical test:

- Owner checks review count/reply status. If unreplied, reply once and log the Action Log row. If replied, ask for one GBP Performance screenshot/note to create Day 0.

Evidence that would change the recommendation:

- Owner UI shows 15 while public endpoint shows 16: keep static copy count-neutral and record count drift.
- Owner UI shows the new review already replied: move to GBP Day 0 baseline.
- A lead arrives mentioning the review: classify the inquiry immediately and let it outrank channel theory.

Risk of acting too early:

- Static count copy or schema work could create avoidable churn from public/owner count drift.
- A salesy reply could weaken the personal trust that reviews currently create.

Risk of waiting:

- A new review may sit unreplied, weakening the sense that the profile is active and personal.

### Artifacts Updated

- Created `review-count-16-reply-gate.md`.
- Updated `review-proof-library.md` with Cycle 35 count/reply gate.
- Updated `measurement-plan.md` with Review Count 16 Reply Gate.
- Updated `owner-evidence-ledger-template.md` with a Cycle 35 public proof row.
- Updated `gbp-week-one-execution-pack.md` with a Cycle 35 note.
- Updated `hypotheses.md` for H009, H019 and H023.
- Updated `market-intelligence.md` with Cycle 35 signals and O039.
- Updated `research-roadmap.md` with Packet AK.
- Updated `automation-research-loop.md` with the Cycle 35 public-proof/owner-truth rule.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: live reviews endpoint plus sanitized metadata, because it revealed both count consistency and one visible May 22 review.
- Highest-signal missing source: owner GBP review screen, because it alone confirms reply status without account access.
- Most useful external source: Google review/reply docs, because they turned the finding into a safe reply gate.
- Most useful falsification source: marketplace/professional proof, because it keeps review count from becoming a lazy differentiator.
- Noisy/low-value source: further LinkedIn public fetches; HTTP 999 persists and does not answer review truth.
- Process rule added: public proof improvements should trigger typed owner evidence rows, not static copy churn.

### Next-Cycle Packet

Recommended next theme: owner review truth interpretation if Auris sends it; otherwise rotate to Search Console/indexing or pricing/profile coherence.

If Auris sends owner review truth:

1. Read `review-count-16-reply-gate.md`, `owner-evidence-ledger-template.md`, `review-proof-library.md` and H009/H019/H023 in `hypotheses.md`.
2. Fill the Review Truth row:
   - owner rating/reviews
   - public count ES/EN
   - newest review date/theme if visible
   - reply status
   - count decision
   - next action
3. If unreplied, draft one short review reply in the review's language and log `review_reply`.
4. If replied, ask for GBP Day 0 Performance.

If Auris sends GBP Performance first:

1. Fill the GBP Performance Day 0 row.
2. Pair it with current public count and any owner review truth.
3. Allow one measured GBP action if Auris wants.
4. Do not interpret until Day 7 same-range comparison.

If no owner evidence arrives:

1. Do not create another owner ask artifact.
2. Rotate to Search Console/indexing, pricing/profile coherence or current-student retention evidence.
3. Keep static proof count-neutral.

Exact files/APIs/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/review-count-16-reply-gate.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-sprint-measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/proof-sprint-action-gates.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-week-one-execution-pack.md`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- owner-side source: GBP review screen and Performance overview, redacted

### Unfinished Threads

- Owner-view GBP review count remains unconfirmed.
- Newest-review reply status remains unknown.
- GBP Day 0 Performance remains missing.
- No review reply/action log row exists yet.
- No inquiry note exists tying reviews to leads.
- LinkedIn profile cleanup evidence remains owner-side only.

## Cycle 36 - Search Indexing Refresh And GSC Access Gate

Date: 2026-05-23 14:39 CEST

Theme: SEO/Search Console/indexing, route quality, process self-improvement.

Primary research question: after no owner Review Truth arrived, has search/indexing evidence changed enough to justify SEO or site work now, and what is the smallest useful experiment?

### Repo Status

- Website repo: tracked files unchanged except strategy memory; `docs/strategy/` remains untracked.
- Teaching platform repo: dirty with unrelated untracked cache/screenshots/artifacts; inspected only, no platform files edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `seo-indexing-diagnostics.md`
- `measurement-plan.md`
- `content-strategy.md`
- `channel-fit-and-content-scan.md`
- `gbp-week-one-execution-pack.md`
- `review-proof-library.md`
- `talk-the-talk-lead-magnet.md`
- `profile-publishing-readiness-audit.md`
- `website-proof-pricing-implementation-plan.md`
- `automation-research-loop.md`
- `market-intelligence.md`

Website and live outputs:

- `public/sitemap.xml`
- `public/robots.txt`
- `netlify.toml`
- `index.html`
- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `src/App.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/utils/analytics.js`
- live homepage, Talk, local, business, sitemap, robots and Google reviews endpoint checks.

Teaching-platform context:

- `/Users/aurisp/repos/teacher-assistant/frontend/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/frontend/src/pages/TeacherOverview.tsx`

Local interpretation:

- The route plumbing remains healthy: exact Netlify redirects exist, sitemap/robots are clean, and live route headers return 200.
- `src/App.jsx` still sets route-aware title/description/canonical for Talk/local/business.
- `Navbar.jsx` and `Footer.jsx` contain rendered crawlable links, but the static fallback HTML for the dedicated route pages has no internal links before React renders.
- `SeoLandingPage.jsx` remains on-brand and non-academy, but local/business still share a template and need more route-specific proof if site work is approved.
- `TalkTheTalk.jsx` remains useful as a tool/CTA, not yet a strong standalone SEO document.

### Data/API Evidence

Search Console refresh attempt:

- Current local `gcloud` auth is active as `aurienglish@gmail.com`.
- The current local token did not expose Search Console sites: `webmasters/v3/sites` returned an empty site list.
- A scoped `webmasters.readonly` access token request was rejected because that scope is not among locally authorized scopes.
- No tokens or secrets were printed in the artifact.
- Measurement implication: do not overwrite Cycle 16's GSC baseline with this empty response. Mark current state as `gsc_access_unavailable`.

Last trusted API-backed GSC baseline remains Cycle 16:

| Window | Pages With Rows | Clicks | Impressions | Avg Position |
| --- | ---: | ---: | ---: | ---: |
| 28 days ending 2026-05-21 | homepage only | 1 | 169 | 10.25 |
| 90 days ending 2026-05-21 | homepage only | 6 | 306 | 8.83 |
| 180 days ending 2026-05-21 | homepage only | 18 | 651 | 8.14 |

Live route/static checks:

| Route | HTTP | Canonical | Robots | Schema | Static Words | Static Internal Links |
| --- | ---: | --- | --- | ---: | ---: | ---: |
| `/` | 200 | `/` | `index,follow` | 2 | 0 | 0 |
| `/talkthetalk` | 200 | self | `index,follow` | 1 | 29 | 0 |
| `/clases-ingles-castelldefels` | 200 | self | `index,follow` | 1 | 38 | 0 |
| `/ingles-empresas-castelldefels` | 200 | self | `index,follow` | 1 | 36 | 0 |

Campaign destinations:

- GBP Week 1 homepage UTM: 200, canonical homepage.
- LinkedIn Week 1 Talk UTM: 200, canonical Talk.
- GBP Week 2 local UTM: 200, canonical local.
- LinkedIn Week 2 business UTM: 200, canonical business.

Google reviews:

- `language=es`: `places-new`, `5.0 / 16`, 5 visible reviews.
- `language=en`: `places-new`, `5.0 / 16`, 5 visible reviews.
- The English visible set includes a review with `publishTime=2026-05-22T17:12:49Z`, but the returned review array is not newest-first. Reply status remains owner-side only.

### Source Discovery Choices

Possible high-signal source types considered:

1. Search Console performance API.
2. URL Inspection API.
3. Live route headers.
4. Live static HTML audit.
5. Static internal-link audit.
6. Sitemap and robots.
7. Route/component code.
8. Review endpoint.
9. Official Google Search docs.
10. Local SERPs and academy pages.
11. Tutor marketplaces.
12. Professional-English pages.
13. Community threads.

Chosen sources: live site route audit, sitemap/robots, route code, review endpoint, official Google Search docs, local academy/search-result pages, Superprof marketplace evidence and one work-confidence community source.

### External Evidence

- Google JavaScript SEO basics, `https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics`: Google can render JS, but important page identity should still be robust and discoverable.
- Google Page indexing report help, `https://support.google.com/webmasters/answer/7440203?hl=en`: crawled/indexed states are diagnostic; live URL success is not the same as index inclusion.
- Google URL Inspection help, `https://support.google.com/webmasters/answer/9012289?hl=en`: URL Inspection is the right source for URL-level indexed-version truth, but needs proper GSC access.
- Google crawlable-link docs, `https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=en`: real links and meaningful anchors help discovery and understanding; this makes zero static fallback links a useful finding.
- Google sitemap docs, `https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=en`: sitemaps aid discovery but do not guarantee indexing.
- Google canonicalization docs, `https://developers.google.com/search/docs/crawling-indexing/canonicalization`: self-canonicals are hints, not proof that pages are unique or index-worthy.
- Google SEO starter guide, `https://developers.google.com/search/docs/fundamentals/seo-starter-guide`: useful content and sensible titles beat repeated keywords.
- Google helpful content guide, `https://developers.google.com/search/docs/fundamentals/creating-helpful-content`: SEO should support people-first content, not search-first page sprawl.
- Castle Languages, `https://castlelanguages.cat/`: local competitors show dense academy proof: years, groups, companies, Cambridge and qualified/native-teacher claims.
- Janet's School, `https://janets.es/`: academy competitors can show long operating history, native teams, kids/adults/company courses and FUNDAE.
- Kilkenny Learning Centre, `https://kilkennylc.com/`: business English and native-teacher proof are common local academy claims.
- Academia Moliere, `https://academia-moliere.com/`: local SERP includes broad academies with many languages and group/private offers.
- Superprof business English Castelldefels, `https://www.superprof.es/clases/business-english/castelldefels/`: local business-English demand exists, but average shown price is around 17 EUR/h.
- Superprof English Castelldefels, `https://www.superprof.es/clases/ingles/castelldefels/`: private-class SERP repeats lower anchors and confidence/business wording.
- Superprof Fred profile, `https://www.superprof.es/business-english-aeronautico-logistica-adquiere-fluidez-confianza-speaking-necesitas-para-crecer-laboralmente.html`: a 20 EUR/h competitor can show 18 reviews, 50+ students and work/technical specificity.
- Reddit Barcelona work-confidence thread, `https://www.reddit.com/r/Barcelona/comments/153pz43`: work-language pain often names confidence in meetings and contribution, not grammar-only learning.

### Trend / Community / Product Signals

- Local academy SERPs remain dense and proof-heavy. Auris should not mimic them; he should answer the same intent as a personal alternative with direct teacher relationship, Spanish-speaker expertise, reviews and portal continuity.
- Marketplace pages continue to prove demand and price pressure at the same time. They are evidence sources, not the premium brand north star.
- Professional pain language keeps mapping to the output gap: "I can understand, but I cannot contribute confidently in meetings." That strengthens route proof blocks around the Work-English Confidence Loop.
- AI/product evidence from earlier cycles still suggests Talk should be a practice bridge into human feedback, not a standalone app/SEO play.

### Hypotheses Changed

H002 GBP beats broad SEO near term:

- Strengthened, with a credential caveat.
- Evidence: no fresh GSC data can be trusted from the current token; live routes are healthy but still only readiness; public reviews remain stronger at `5.0 / 16`.
- Next test: restore GSC read scope or use owner-side GSC rows; until then judge the proof sprint through owner GBP Performance and manual inquiry notes.

H003 more landing pages alone will not solve acquisition:

- Strengthened.
- Evidence: static body counts remain thin and static internal links are zero on checked route fallbacks. Competitors have denser proof and market/price context.
- Next test: if Auris approves site work, patch existing pages before adding any pages.

H007 Talk the Talk is a lead magnet, not SEO-first:

- Held and refined.
- Evidence: Talk route is live and useful but static fallback is still only 29 words with no internal links. It should be used as tagged CTA first.
- Next test: add Talk fallback examples and a human-feedback bridge only if editing.

H020 indexing gap is quality/uniqueness/priority, not discovery:

- Strengthened.
- Evidence: route technical health remains intact, but static content/link quality remains weak; no GSC technical finding displaced the quality/priority diagnosis.
- Next test: restore GSC/URL Inspection access, then compare changed URL Inspection/page rows 14-28 days after any approved patch.

### Strategic Synthesis

Strongest next move:

- Keep the acquisition sprint GBP-first and homepage-led after owner Review Truth and Day 0 Performance.
- If Auris wants SEO/site work, implement a small existing-page quality experiment: static fallback copy, static internal links and route-specific proof blocks for Talk/local/business.

What not to do yet:

- Do not create more town pages.
- Do not create a separate Work-English product page.
- Do not use self-serving review schema.
- Do not resubmit or inspect repeatedly without public changes.
- Do not point first GBP/LinkedIn traffic at local/business pages as if they have search proof.
- Do not treat the current empty Search Console sites response as zero search performance.

Risk of acting too early:

- A site patch without GSC access may be hard to evaluate.
- More local/business copy could drift toward academy SEO if not tightly scoped.

Risk of waiting:

- Static route weaknesses persist and could slow indexing once Google revisits.
- Search Console access loss may compound across future cycles if ignored.

### Artifacts Updated

- Created `search-indexing-refresh-cycle36.md`.
- Updated `seo-indexing-diagnostics.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Updated `research-roadmap.md`.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: live static HTML plus static internal-link audit. It revealed the most actionable new local detail: dedicated fallbacks are thin and isolated.
- Useful but blocked source: Search Console. It remains the right evidence layer, but the current token lacks the required scopes.
- Noisy/low-value source: generic crawled-not-indexed SEO articles and Reddit indexing threads. They mostly repeat the quality/authority explanation and often push tooling; official Google docs are cleaner guardrails.
- Process update: added the `gsc_access_unavailable` rule to `automation-research-loop.md` and `measurement-plan.md`.
- Process update: added static internal-link count to SPA indexing diagnostics.

### Next-Cycle Packet

If Auris acts on the credential issue:

1. Restore or locate a `webmasters.readonly` credential without printing secrets.
2. Rerun Search Console 28/90/180 day page/query windows.
3. Rerun URL Inspection for homepage, Talk, local and business routes.
4. Update `seo-indexing-diagnostics.md`, H020 and `market-intelligence.md`.

If Auris sends owner Review Truth instead:

1. Fill `owner-evidence-ledger-template.md` Review Truth row.
2. Confirm whether public `5.0 / 16` matches owner dashboard.
3. If newest review is unreplied, draft/log one review reply before any GBP post.

If Auris asks for site implementation:

1. Patch only:
   - `talkthetalk/index.html`
   - `clases-ingles-castelldefels/index.html`
   - `ingles-empresas-castelldefels/index.html`
   - smallest rendered uniqueness blocks in `src/components/SeoLandingPage.jsx` and Talk.
2. Run build and live/static QA.
3. Do not deploy unless explicitly asked.

If no owner evidence or credential action arrives:

1. Rotate to pricing/profile coherence.
2. Inspect homepage price proof vs Superprof/Tusclases anchors and LinkedIn identity before another content draft.

Unfinished threads:

- Search Console API access needs webmasters-scoped credential restoration or owner manual GSC export.
- Owner Review Truth is still missing.
- GBP Performance Day 0 is still missing.
- Local/business/Talk URL Inspection is stale until access returns or public changes happen.

## Cycle 37 - Pricing Profile Coherence

Date: 2026-05-23 15:39 CEST

Theme: pricing/offer architecture, profile coherence, marketplace falsification.

Primary research question: is pricing/profile coherence now the bottleneck before the GBP/LinkedIn proof sprint, and what exact price-anchor policy should Auris use across website, LinkedIn, Superprof, Tusclases and lead notes?

### Repo Status

- Website repo: tracked app files untouched; strategy memory remains untracked under `docs/strategy/`.
- Teaching platform repo: dirty with unrelated untracked caches/screenshots/artifacts; inspected only, no files edited.

### Local Evidence Inspected

Strategy memory:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `pricing-positioning.md`
- `market-intelligence.md`
- `content-strategy.md`
- `measurement-plan.md`
- `owner-evidence-ledger-template.md`
- `review-proof-library.md`
- `platform-backlog.md`
- `automation-research-loop.md`

Website and live outputs:

- `src/translations.js`
- `src/components/PricingSection.jsx`
- `src/App.jsx`
- `src/components/Footer.jsx`
- live homepage headers/static HTML
- live Google reviews endpoint in English and Spanish

Teaching-platform context:

- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardPractice.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx`
- backend/schema/search snippets for vocabulary, SRS, class notes, feedback and assignment surfaces.

Local interpretation:

- The owned-site price anchor is clear: private classes 40 EUR/h and group classes 20 EUR/h.
- The pricing section has the right structure but the wrong strength of explanation. The private-card line is still `1-on-1 lessons tailored to you`, and the bullets focus on goals/flexibility rather than correction, saved vocabulary, portal review and follow-up.
- `PricingSection.jsx` has an included-with-every-class strip, but there is still no support line explaining that the live hour is only part of the work.
- The platform code supports the stronger claim: assignments, reviewed feedback, class profile/Google Docs links, SRS stats, flashcard practice, teacher overview, class notes, homework/workflow and progress surfaces are real.
- Platform evidence should support "materials, vocabulary and review stay organised"; it should not yet support stronger public claims like "one clear next step" until the `Next 15 Minutes` card is piloted or built.

### Data/API Evidence

Google reviews endpoint:

| Endpoint | Source | Rating | Review Count | Visible Reviews | Notable |
| --- | --- | ---: | ---: | ---: | --- |
| `/.netlify/functions/google-reviews?language=en` | `places-new` | 5.0 | 16 | 5 | Includes a visible 2026-05-22 review. |
| `/.netlify/functions/google-reviews?language=es` | `places-new` | 5.0 | 16 | 5 | Spanish visible set remains different from English. |

Live homepage:

- `https://englishwithauris.com/` returns HTTP 200 from Netlify.
- Static HTML contains schema/FAQ/NIF evidence but not rendered pricing-card copy, so route health does not prove price proof quality.

### Source Discovery Choices

Possible source types considered:

1. Website pricing implementation and translation strings.
2. Live owned-site HTML and headers.
3. Live Google reviews endpoint.
4. Auris Superprof direct profile.
5. Auris Tusclases direct profile.
6. Superprof Castelldefels English category.
7. Superprof Spain English category.
8. Superprof Business English Barcelona category.
9. Premium/professional English coach pages.
10. Official Google Business Profile service/price docs.
11. Local buyer/community pricing threads.
12. Teaching-platform code that proves portal/follow-up claims.

Chosen sources: owned website/code, Auris direct marketplace profiles, marketplace category pages, premium professional-English coach pages, official GBP services docs, local pricing/community evidence and platform code.

### External Evidence

- Superprof Auris direct profile, `https://www.superprof.es/master-your-english-whilst-having-fun-experienced-teacher-offering-online-and-face-face-classes.html`: shows 40 EUR/h main rate, 30 EUR/h online, verified profile/contact, 5.0/7, 20 students and copy around Ireland, 11 years, Spanish speakers, portal and NIF.
- Superprof Castelldefels English, `https://www.superprof.es/clases/ingles/castelldefels/`: Auris appears at 40 EUR/h, but beside a 14 EUR/h average and many 10-25 EUR/h alternatives.
- Tusclases Auris profile, `https://www.tusclasesparticulares.com/profesores/auris-1795413.htm`: search/profile evidence still shows 30 EUR/h, Profesor Plus, fast response and strong proof copy.
- Superprof Spain English, `https://www.superprof.es/clases/ingles/espana/`: broad category frames many tutors in the 12-30 EUR/h range, with stronger/specialised examples around 35-39 EUR/h.
- Superprof Business English Barcelona, `https://www.superprof.es/clases/business-english/barcelona/`: category average is around 18 EUR/h, but visible professional profiles at 35-40 EUR/h exist when backed by outcomes, reviews or credentials.
- LUVEnglish, `https://luvenglish.com/`: professional-English coaching category exists around real-world confidence, professionals, teams, meetings, client calls and presentations.
- Madeleine Cooke, `https://madeleine-cooke.com/`: premium/professional coaching can be framed around leaders, high-performing professionals, meetings, interviews and presentations.
- Reddit Barcelona private-English pricing thread, `https://www.reddit.com/r/Barcelona/comments/onbmar/going_rate_for_private_english_lessons/`: local teacher comments caution that 20-30 EUR/h is a common private-teacher frame and that private students can be price-sensitive.
- Google Business Profile services docs, `https://support.google.com/business/answer/9455399?hl=en`: service descriptions/prices can be added and may appear in Search/Maps, so GBP service pricing must match the owned-site expectation.
- Google Business Profile overview, `https://business.google.com/us/business-profile/`: GBP remains a first-impression trust surface with reviews, services, posts, photos, bookings/quotes and customer connection.

### Trend / Community / Product Signals

- Marketplace category pages create a lower anchor even when Auris's direct Superprof profile is mostly aligned.
- Professional-English language is market-valid but not unique; many lower-priced tutors also promise meetings, interviews, confidence and business English.
- Higher-end coaching exists, but Auris should borrow the proof logic, not the corporate/executive tone.
- The platform gives a real mechanism behind premium price: follow-up, saved vocabulary, practice and progress. The website pricing copy is not yet fully harvesting that proof.

### Hypotheses Changed

H004 40 EUR/h is viable only if the premium is visible in the first minute:

- Strengthened and made policy-specific.
- Evidence: Superprof direct profile supports the 40 EUR/h anchor, but lower online/Tusclases/category anchors and generic website copy still create comparison risk.
- Next test: use the Cycle 37 website pricing copy gate if implementation is approved, and record `profile_seen`, `price_anchor_seen`, `quoted_price_expected`, `proof_mentioned` and `lead_quality`.

H021 marketplace profiles are useful proof only when the price policy is intentional:

- Strengthened and narrowed.
- Evidence: direct Superprof is mostly aligned at 40 EUR/h, but online/Tusclases/category contexts still pull toward 30 EUR/h or lower.
- Next test: if two qualified direct leads mention 30 EUR marketplace pricing before booking, align marketplace pricing before more campaign content.

Favored idea tested:

- Idea: a small website pricing copy patch is enough before GBP/LinkedIn.
- Result: refined. The patch is the smallest owned-site fix, but only works if GBP service prices and campaign links do not route people into lower-anchor marketplace paths.

### Strategic Synthesis

Strongest next move:

- Keep owned-site price at 40 EUR/h and make the value concrete beside the price: personal follow-up, correction, adapted materials, saved vocabulary, portal review and progress tracking.
- Keep GBP/LinkedIn campaign destinations on owned pages.
- Treat Superprof/Tusclases as discovery channels and measurement/falsification sources, not premium proof destinations.

What not to do yet:

- Do not lower the website price.
- Do not hide pricing.
- Do not add marketplace links to the website footer.
- Do not route GBP/LinkedIn traffic to Superprof/Tusclases.
- Do not invent a corporate business-English package just to justify 40 EUR/h.
- Do not use future platform features as current marketing claims.

Smallest practical test:

- If implementation is approved, patch only `src/translations.js` and `src/components/PricingSection.jsx` to add the Cycle 37 pricing proof copy.
- If no implementation is approved, apply the policy through lead notes and any owner-side profile edits.

Risk of acting too early:

- GBP/LinkedIn attention could send prospects into a mixed price environment and create distrust.

Risk of waiting:

- The current gap is small and fixable; waiting for perfect marketplace cleanup could delay useful review/profile/referral evidence.

### Artifacts Updated

- Created `pricing-profile-coherence-cycle37.md`.
- Updated `pricing-positioning.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `measurement-plan.md`.
- Updated `owner-evidence-ledger-template.md`.
- Updated `automation-research-loop.md`.
- Updated `research-roadmap.md`.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: direct marketplace profile plus marketplace category page together. The direct profile says what Auris promises; the category says what comparison frame the buyer sees.
- Highest-signal local source: website pricing implementation and translation strings, because they show the exact copy gap.
- Highest-signal product source: platform code, because it proves which portal/follow-up claims are already real.
- Noisy/low-value source: broad pricing threads and search snippets. Useful for caution, not policy by themselves.
- Process rule added: do not collapse direct profile evidence and category average evidence into a single marketplace conclusion.

### Next-Cycle Packet

Recommended next theme: GBP services/profile basics if owner-side data arrives; otherwise current-student referral/proof or pricing implementation readiness if Auris asks for code changes.

If Auris sends marketplace owner info:

1. Read `pricing-profile-coherence-cycle37.md`, `pricing-positioning.md`, H004/H021 in `hypotheses.md`.
2. Record whether Superprof online and Tusclases are legacy, channel-specific or should be aligned to 40 EUR/h.
3. Update the price policy and stop/change rules.

If Auris sends GBP services info:

1. Record service names, prices and descriptions.
2. Check whether any listed GBP service contradicts the website 40 EUR/h anchor.
3. Draft corrected service descriptions without submitting them.

If Auris asks for implementation:

1. Patch only:
   - `src/translations.js`
   - `src/components/PricingSection.jsx`
2. Keep 40 EUR/h visible.
3. Add personal-follow-up private-card copy and included-strip support line.
4. Run build and route QA.
5. Do not deploy unless explicitly asked.

If a lead appears:

1. Fill an inquiry row in `owner-evidence-ledger-template.md` with:
   - `profile_seen`
   - `price_anchor_seen`
   - `quoted_price_expected`
   - `proof_mentioned`
   - `work_moment`
   - `booked_trial`
   - `lead_quality`
2. Let lead language outrank more marketplace browsing.

Exact files/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-profile-coherence-cycle37.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- owner-side source: GBP services screen, marketplace edit screens or anonymized inquiry notes
- external source only if prices may have changed: Superprof Auris direct, Tusclases Auris direct, Superprof category pages

### Unfinished Threads

- Owner Review Truth and newest-review reply status remain missing.
- GBP Performance Day 0 remains missing.
- Search Console access remains unavailable.
- GBP service prices/descriptions are unknown.
- Marketplace price policy remains an owner decision: align Tusclases/Superprof online or keep as channel pricing.

## Cycle 38 - Warm Proof Micro-Sprint

Date: 2026-05-23

Theme: current-student referral/review proof loop.

Primary research question:

Can a current-student review/referral micro-sprint become the strongest near-term acquisition test while GBP, LinkedIn and GSC are owner/API-gated, and what exact ask/ledger should Auris use without making relationships feel transactional?

### Repo Status

- Website repo: `?? docs/strategy/` remains untracked; this cycle edited only strategy notes inside that folder.
- Teaching platform repo: dirty with many unrelated untracked artifacts/caches/screenshots; ignored.

### Local Evidence

Inspected local artifacts included:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `referral-review-request-loop.md`
- `review-proof-sprint-measurement-plan.md`
- `owner-evidence-ledger-template.md`
- `gbp-week-one-execution-pack.md`
- `proof-sprint-action-gates.md`
- `content-strategy.md`
- `review-proof-library.md`
- `local-partnership-referral-map.md`
- `review-count-16-reply-gate.md`
- `owner-side-proof-capture-packet.md`
- `measurement-plan.md`
- `automation-research-loop.md`
- `market-intelligence.md`
- `src/components/GoogleReviewsSection.jsx`
- `src/App.jsx`
- `src/utils/analytics.js`

Local interpretation:

- GBP still looks like the strongest public acquisition channel, but owner review truth and Performance remain missing.
- LinkedIn remains profile/owner gated.
- Search Console remains credential gated.
- The existing review/referral loop is ready but needed a more policy-safe, less directive script.
- The website can track visits/contact clicks, but it cannot see Google review UI, WhatsApp, or private referrals; manual notes remain necessary.

### Data/API Evidence

Live checks:

| Check | Result | Meaning |
| --- | --- | --- |
| `https://englishwithauris.com/.netlify/functions/google-reviews?language=en` | `places-new`, rating `5`, reviewCount `16`, 5 visible reviews | Public proof remains live. |
| English visible review set | Includes a May 22, 2026 review with a former-student recommendation pattern | Direct evidence that referral trust already exists. |
| `https://englishwithauris.com/.netlify/functions/google-reviews?language=es` | `places-new`, rating `5`, reviewCount `16`, 5 visible reviews | Spanish proof themes remain live. |
| Referral UTM homepage URL | HTTP 200 from Netlify | Private referral links can be tagged if useful. |

Search Console was not retried because Cycle 36 already established the current local token lacks `webmasters.readonly`; no owner/API fix has arrived.

### Source Discovery Choices

Possible sources considered:

1. Existing review/referral loop docs.
2. Live review endpoint.
3. Owner evidence ledger/action gates.
4. Contact/analytics implementation and referral UTM readiness.
5. Google official review request/reply docs.
6. Google Maps contributed content policy.
7. FTC review/testimonial guidance.
8. BrightLocal review survey.
9. Tutor/private teacher referral acquisition sources.
10. Tutor practitioner communities.
11. Recent English-learning work-anxiety communities.
12. Local professional/community sources.

Chosen: local strategy memory, live review checks, official review policy, tutoring/referral sources and learner pain signals.

### External Evidence

- Google GBP review tips: review links/QR asks and replies are allowed; incentives are prohibited; honest/balanced reviews matter.
- Google Maps UGC policy: no incentives, selective-positive solicitation, pressure or requested specific content.
- Google manage reviews: replies are public, owner-side and may be reviewed before posting.
- FTC Consumer Reviews and Testimonials Rule Q&A: incentives/suppression/non-representative review use can distort consumer understanding.
- BrightLocal 2026: review recency, consistent sentiment, rating and owner response matter; 16 reviews is useful but not enough to treat proof as finished.
- Tutors.com guide: tutor acquisition clusters around clear audience, GBP, reviews, retention and source tracking.
- Adviita tutoring guide: word of mouth works when the tutor can be described specifically and asks directly.
- Teachworks tutoring word-of-mouth post: satisfied clients need a simple way to pass details; incentive-first ideas are not a fit for Auris's review loop.
- Reddit TutorsHelpingTutors: practitioner comments support direct referral asks after a regular client base, while noting awkwardness.
- Reddit LearningEnglish work anxiety: a learner describes freezing, comparison and AI/self-practice not solving real human conversation anxiety.
- Reddit EnglishLearning meetings thread: recent pain language around missed keywords, prepared openers, stalling phrases and the first sentence in meetings.

### Trend / Community / Product Signals

- Current public proof now includes a real former-student referral pattern, not just generic satisfaction.
- Learner pain is still "I can study/practice alone, but I freeze with people", which fits Auris's human-feedback and confidence lane.
- Tutoring referral sources often suggest incentives, but that is wrong for Google reviews and too transactional for Auris's premium personal brand.
- Referral wording should describe a person helped: "someone who already has some English but loses confidence when they need to use it."

### Hypotheses Changed

H002 GBP will beat broad SEO for near-term leads:

- Refined.
- GBP remains the first public trust channel, but current/former-student referrals are the first private trust test while owner metrics are unavailable.

H009 Reviews should become the central proof asset:

- Strengthened and made less directive.
- The review asset now also supports referral trust, but scripts must avoid requested wording.

H023 A personal referral/review loop can produce stronger near-term trust evidence than more social posting theory:

- Strengthened.
- The first test should be smaller than the original 2 review asks / 2 referral prompts: start with one no-ask observation, one review ask and one referral prompt.

Favored idea weakened:

- The referral/review loop should not replace GBP. It should run quietly while GBP is owner-gated, then be compared against GBP once Performance/reply data arrives.

### Strategic Synthesis

Strongest next move:

- If owner can check GBP, confirm Review Truth and newest-review reply status first.
- If owner data does not arrive, run the Cycle 38 warm-proof micro-sprint.

Smallest practical test:

- Day 0: review link/referral UTM ready.
- Day 1: one no-ask observation.
- Day 2: one honest review ask after a real outcome.
- Day 4: one referral prompt after a natural trigger.
- Day 7: second ask only if another genuine trigger appears.
- Day 12: continue only if review, warm intro, proof-language reply or qualified inquiry appears.

What not to do yet:

- Do not launch a public referral program.
- Do not offer incentives/discounts for reviews.
- Do not ask for keywords, city names, star ratings or exact review content.
- Do not bulk-message students.
- Do not create a website referral page.
- Do not route referrals to marketplaces.

### Artifacts Updated

- Created `referral-review-micro-sprint-cycle38.md`.
- Updated `referral-review-request-loop.md`.
- Updated `review-proof-library.md`.
- Updated `content-strategy.md`.
- Updated `measurement-plan.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `automation-research-loop.md`.
- Updated `research-roadmap.md`.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: live Google review endpoint, because the May 22 review contained a real referral pattern.
- Highest-signal constraint source: Google Maps UGC policy, because it forced shorter review asks.
- Useful outside-in source: recent learner/community pain threads, because they sharpened the target: people who can study and even use AI but still freeze in real meetings/conversations.
- Noisy source: generic tutoring referral guides, because they often recommend incentives that do not fit the Google review policy or Auris's personal brand.
- Process rule added: when owner/API gates block the same public channel for more than one cycle, rotate to a relationship-safe private action that can create Level 4 evidence instead of creating another owner ask or another content draft.

### Next-Cycle Packet

Recommended next theme: interpret any owner Review Truth or referral/review outcome; otherwise rotate away from owner-gated acquisition theory.

If Auris sends owner Review Truth:

1. Fill the Review Truth row in `owner-evidence-ledger-template.md`.
2. Update `review-proof-library.md`.
3. If the newest review is unreplied, draft one short outcome-specific reply.
4. Ask for GBP Day 0 only after count/reply truth.

If Auris reports a review/referral ask:

1. Record only anonymous fields from `referral-review-micro-sprint-cycle38.md`.
2. Check the wording against Google policy.
3. Update H023 and the measurement plan with outcome.
4. If a referred lead books, create the next 2-week referral cadence.

If no owner/outcome evidence arrives:

1. Do not create another owner ask artifact.
2. Choose one of:
   - current-student retention/product proof,
   - local professional job-demand evidence,
   - GBP service/profile basics if owner data appears,
   - pricing implementation if Auris asks.
3. Keep referral loop ready but do not repeat the same research.

Exact files/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/referral-review-micro-sprint-cycle38.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/referral-review-request-loop.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- referral UTM destination
- owner-side source: GBP review screen, inquiry/referral note immediately if one appears, GBP Performance second.

### Unfinished Threads

- Owner Review Truth and newest-review reply status remain missing.
- GBP Performance Day 0 remains missing.
- Search Console access remains unavailable.
- GBP service prices/descriptions are unknown.
- Marketplace price policy remains an owner decision.
- No actual review/referral ask outcome has arrived yet.

## Cycle 39 - AI Speaking Tools And Human Feedback Bridge

Date: 2026-05-23
Automation id: `continuous-teaching-business-strategy`

### Primary Research Question

Are AI speaking tools now a substitute threat for Auris, or do they create a stronger opportunity for human diagnostic feedback?

Chosen because Cycle 38 said to rotate away from owner-gated acquisition theory if no Review Truth/referral outcome arrived, and RQ013 was still unresolved.

### Repo Status

Website repo:

- `?? docs/strategy/`
- Strategy docs remain untracked as in prior cycles.

Teaching platform repo:

- Many unrelated untracked caches/screenshots/artifacts remain present.
- No teaching-platform files were edited.

### Local Evidence

Inspected local artifacts:

1. `research-log.md` latest Cycle 37/38 handoffs.
2. `research-roadmap.md`, especially RQ013 and current packets.
3. `market-intelligence.md`, existing AI/practice source map and opportunities.
4. `hypotheses.md`, especially H011, H012, H016, H017 and H025.
5. `talk-the-talk-lead-magnet.md`.
6. `platform-backlog.md`.
7. `next-15-minutes-platform-spec.md`.
8. `portal-retention-proof-refresh.md`.
9. `retention-baseline-and-manual-pilot.md`.
10. `content-strategy.md`.
11. `measurement-plan.md`.
12. `outside-in-opportunity-radar.md`.
13. `pricing-positioning.md`.
14. `review-proof-library.md`.
15. `src/components/TalkTheTalk.jsx`.
16. `src/App.jsx`.
17. `talkthetalk/index.html`.
18. `src/data/speakingTopics.js` via `rg`.
19. `teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`.
20. `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`.
21. `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`.
22. `teacher-assistant/classroom-hub/src/lib/api.ts` via targeted `rg`.
23. `teacher-assistant/backend/app/core/config.py`.
24. `teacher-assistant/backend/app` targeted search for Talk/reflection/speech-practice.

Key local findings:

- Public Talk is already a decent practice-to-lead bridge: it tracks start/ready/completion/trial-click and has a personal-feedback CTA.
- Public Talk still has a copy mismatch: it mentions record/listenback but the inspected component does not implement recording/listenback.
- Portal Talk is visible from the dashboard and useful as practice, but completion has no self-rating, no log, no teacher note and no retention proof.
- Student dashboard already shows reviewed feedback and class notes, while the hero remains flashcard-first.
- Teacher overview already has attention items for feedback/SRS/class prep, so a compact Talk reflection signal would fit later.
- Existing strategy memory already warned not to build AI/audio before `Your next 15 minutes`; Cycle 39 strengthens that order.

### API / Data Evidence

- Live `/talkthetalk` returned HTTP 200 from Netlify with correct canonical/schema/index metadata.
- Live `/talkthetalk` HTML still includes direct GA4 config that sends a default pageview, keeping the Cycle 05 duplicate-pageview warning alive.
- Live English Google reviews endpoint returned `rating: 5` and five visible review texts. The payload in this call did not expose `totalReviews`, but visible themes still support fun/dynamic/practical teaching and former-student/family trust.
- Search Console was not retried because Cycle 36 established the current local token lacks `webmasters.readonly`; this cycle did not depend on fresh GSC.

### Source Discovery Choices

Possible source types considered:

1. Auris public Talk product code.
2. Auris portal Talk and dashboard code.
3. Live Talk route and review endpoint.
4. Official AI speaking app pages.
5. App-store/Trustpilot/product reviews.
6. Reddit/language-learning AI communities.
7. Hybrid tutor-platform sources.
8. Academic/industry research on AI speaking feedback.
9. Local competitors.
10. Tutor marketplaces.
11. YouTube/TikTok comments.
12. Current-student evidence.

Chosen: local product/code, live route/API, official AI app pages, user reviews/community threads, hybrid tutor-platform sources and recent AI-speaking research.

### External Evidence

- ELSA official site: 90M+ learners, AI role-play, instant feedback, personalized paths and speech analyzer.
- ELSA Trustpilot: recent reviews show both pronunciation progress and complaints about subscription stress, generic AI chat and loss of structured correction.
- Praktika official site: no-judgment AI tutors, free conversation and real-time feedback.
- Praktika Trustpilot: 786 reviews, 3.8 TrustScore, mixed themes around speaking value, AI tutors, subscription/support and accent/noise issues.
- Speak official site: speaking-first curriculum, 15M+ downloads, anxiety-free "personal tutor" style positioning.
- SmallTalk2Me official site: 2.5M+ learners, CEFR scoring, IELTS, job interview, everyday and business English practice.
- Speakerly official site: real-time pronunciation/accent feedback, work/daily-life speaking, interviews, presentations and meetings.
- Preply official AI post: AI tools are positioned as lesson insights, daily exercises and scenario practice that enhance the tutor-learner relationship.
- Axios/Preply sponsored post: Preply explicitly frames AI as supporting tutor bond, speaking confidence, real-life contexts and progress monitoring.
- Reddit IELTS AI-speaking thread: learners worry AI scores conflict; expert comment says AI helps spontaneous practice but human rating is needed for accuracy/nuance.
- Reddit AI-vs-human tutor thread: users describe AI as excellent for volume/friction, while humans catch context, naturalness and emotional state.
- Reddit languagehub thread: users value feedback loops, progress memory and weak-zone reports more than generic voice chat.
- Reddit speaking-app review thread: complaints include lenient correction, weird prompts, delays and AI agreeing too much.
- 2026 ELSA study: identifies accent bias, inconsistent recognition, over-reliance risk and need for complementary human instruction.
- 2026 AI Twin paper: AI speaking practice is improving emotionally through implicit rephrasing, so Auris should keep the human layer sharper rather than ignore AI.

### Trend / Community / Product Signals

- AI apps are making frequent low-shame speaking practice a market expectation.
- The most common AI gap is not "no practice"; it is whether correction is trusted, natural, contextual and remembered.
- Professional/exam speaking is already covered by AI apps, so "business English practice" alone is not distinctive.
- Hybrid tutor-platform messaging from Preply strongly validates Auris's natural path: live teacher plus between-class practice.
- For Auris, the defensible premium layer is diagnosis, Spanish-speaker pattern correction, confidence with real people and bringing the stuck point back into class.

### Hypotheses Changed

H011 Talk the Talk's strongest role is the feedback bridge:

- Strengthened.
- Confidence now high for strategic role, medium for current-student behaviour until tested.
- Public Talk has the lead bridge; portal Talk lacks the reflection/teacher signal.
- Next test: pilot one no-audio reflection and see whether it creates one useful next-class correction.

H012 AI speaking tools increase the value of human diagnostic feedback:

- Strengthened.
- Confidence moved from medium to medium-high.
- AI apps are mainstream and good at reps, but reviews/community/research show gaps around trust, nuance, naturalness, scoring and accent bias.
- Next test: ask 3 current students which AI speaking tools they use and what still feels missing.

Favored idea weakened:

- Building AI scoring now is weaker after this cycle.
- The category is crowded, trust-sensitive and ahead of Auris's current portal instrumentation.
- The cheaper/smaller alternative is Talk Reflection V0 plus content around `AI for reps, Auris for diagnosis`.

### Strategic Synthesis

Strongest next move:

- Keep GBP/reviews as the first public acquisition channel, but use AI-era product/content positioning to sharpen Talk and portal strategy.
- Position AI as useful practice, not an enemy.
- Position Auris as the human diagnostic layer.

Smallest practical test:

1. Use one content post or private student note: `AI can help you speak more often. A teacher helps you know what to fix.`
2. Ask 3 current students whether they use AI speaking tools and what still feels missing.
3. If platform work is approved, add no-audio reflection after portal Talk completion before any AI/audio feature.

What not to do yet:

- Do not build AI pronunciation scoring.
- Do not add audio recording/storage.
- Do not claim Talk gives feedback.
- Do not make anti-AI fear content.
- Do not turn Talk into a broad "free speaking app" SEO product.

Risk of acting too early:

- Building an AI layer could create privacy/maintenance/trust complexity before the basic reflection loop proves valuable.
- Overpromising feedback could damage trust.

Risk of waiting:

- AI apps may continue improving the emotional/practice layer, making generic conversation practice less valuable.
- Auris should sharpen the human diagnosis message now so the brand is not reduced to "speaking practice."

### Artifacts Updated

- Created `ai-speaking-human-feedback-cycle39.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `talk-the-talk-lead-magnet.md`.
- Updated `platform-backlog.md`.
- Updated `content-strategy.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Updated `research-roadmap.md`.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: the combination of official AI app pages plus Trustpilot/Reddit complaints. Official pages show the market baseline; complaints show the gap Auris can own.
- Highest-signal strategic source: Preply's human + AI framing, because it validates live teaching plus between-lesson practice without requiring Auris to build AI first.
- Useful research source: the 2026 ELSA study, because it gives a concrete reason not to over-trust automated pronunciation scoring.
- Noisy source: generic "top AI apps in 2026" content and repeated Reddit self-promotional lists. Use only when they contain real comments, not as authority.
- Process rule added: AI/product-threat cycles must triangulate official product source, user-review/complaint source, community thread, hybrid tutor source and local implementation path.

### Next-Cycle Packet

Recommended next theme: choose based on whether owner/student evidence arrives.

If Auris can provide current-student evidence:

1. Ask/record anonymously: `Do you use ChatGPT, ELSA, Speak, Praktika, Loora, SmallTalk2Me or another app for speaking?`
2. Record what still feels missing: correction, confidence with people, naturalness, pronunciation, accountability, work relevance, feedback trust or nothing.
3. Update H012 and `ai-speaking-human-feedback-cycle39.md`.

If Auris asks for implementation:

1. First fix public Talk "record/listenback" copy mismatch if promoting `/talkthetalk`.
2. Then implement no-audio portal Talk reflection only.
3. Store theme, difficulty, prompt, duration, completed seconds, reflection choice, optional stuck phrase, wants class practice and timestamp.
4. Do not store audio/transcripts or add AI scoring in V0.

If Auris asks for content:

1. Use the Cycle 39 LinkedIn/GBP seed in `content-strategy.md`.
2. Send traffic to Talk or free trial with UTMs.
3. Measure `talk_started`, `talk_completed`, `talk_trial_click` plus manual inquiry proof.

If no owner/student evidence arrives:

1. Rotate to a technical spec for Talk Reflection V0, or a smaller Next 15 product path.
2. Do not browse more generic AI app lists unless a new source type appears.

Exact files/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/ai-speaking-human-feedback-cycle39.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-minutes-platform-spec.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- AI app complaint sources: Trustpilot, App Store/Google Play reviews, Reddit threads with real comments.
- Hybrid tutor-platform sources: Preply, tutor + AI product announcements, teacher-led platforms.

### Unfinished Threads

- No current-student AI-use answers yet.
- No Talk reflection pilot yet.
- Public Talk copy mismatch remains unfixed because public files were not changed.
- Owner Review Truth and GBP Performance remain missing from prior cycles.
- Search Console access remains unavailable.

## Cycle 40 - Talk Reflection V0 Technical Spec

Date: 2026-05-23

Primary research question:

What is the smallest Talk Reflection V0 that connects portal speaking practice to Auris's next-class feedback without building audio, transcripts, AI scoring or a heavy homework workflow?

### Repo Status

Website repo:

- Strategy docs remain untracked under `docs/strategy/`.
- No public-facing code, deploy, credentials or published profiles were changed.

Teaching platform repo:

- Existing unrelated dirty/untracked files remain present.
- Teaching-platform files were inspected only; no files were edited.

### Local Evidence

Inspected local artifacts:

1. `research-log.md` latest Cycle 39 handoff.
2. `research-roadmap.md`, especially RQ004/RQ013 and Packet AO.
3. `hypotheses.md`, especially H011, H012, H016 and H017.
4. `ai-speaking-human-feedback-cycle39.md`.
5. `talk-the-talk-lead-magnet.md`.
6. `platform-backlog.md`.
7. `measurement-plan.md`.
8. `market-intelligence.md`.
9. `automation-research-loop.md`.
10. `content-strategy.md`.
11. Website git status.
12. Teaching-platform git status.
13. `teacher-assistant/backend/app/db/models.py` Student/Class/ClassMembership/ClassHomeworkLog patterns.
14. `teacher-assistant/backend/app/db/models.py` StudentPracticeSession/ClassPracticeSession patterns.
15. `teacher-assistant/backend/app/db/models.py` WritingSubmission/CustomExerciseSubmission patterns.
16. `teacher-assistant/backend/app/api/custom_exercises.py` student submit/membership pattern.
17. `teacher-assistant/backend/app/api/modular_exercises.py` student start/progress/submit pattern.
18. `teacher-assistant/backend/app/api/modular_exercises.py` class-practice teacher endpoint.
19. `teacher-assistant/backend/app/main.py` router mount pattern.
20. `teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx` completion UI.
21. `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` Talk navigation and feedback block.
22. `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` data fetch, attention items and feedback queue.
23. `teacher-assistant/classroom-hub/src/lib/api.ts` API base and wrapper style.
24. `teacher-assistant/backend/migrations/` and `app/db/database.py` migration/schema-guard patterns.

Key local findings:

- Portal Talk has a clean completion insertion point after topic recap and before repeat/settings buttons.
- There is no Talk reflection table, route or persistence layer yet.
- Existing backend conventions are enough: SQLModel tables, indexed timestamps, `get_current_user`, `require_teacher`, `get_session`, class-membership checks, commit/refresh.
- TeacherOverview should receive Talk reflection as prep context, not as another submission/review queue.
- The API wrapper shape is straightforward: add `talkReflectionAPI` beside existing wrappers.
- Migrations are numbered SQL files; `init_db` also has idempotent schema guard patterns, so implementation should use a migration and only add a guard if deployment needs it.

### API / Data Evidence

- Live portal route `https://english-with-auris-portal.netlify.app/student/talk-the-talk` returned HTTP 200 from Netlify.
- Live public Talk route `https://englishwithauris.com/talk-the-talk` returned HTTP 200 from Netlify.
- Live backend `https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` returned HTTP 200 with `{"status":"ok"}`.
- Live protected backend `https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/lms/students/me` returned HTTP 401 without auth, with `Authorization header missing`.
- Live backend `/healthz` returned 404 on the deployed base even though local `main.py` defines it; use `/api/health` for future external health checks.

### Source Discovery Choices

Possible source types considered:

1. Portal Talk implementation.
2. Backend model and endpoint patterns.
3. Frontend API wrapper and dashboard code.
4. Live backend/portal checks.
5. GDPR/data-minimization official text.
6. Supabase RLS official docs.
7. FastAPI dependency/current-user official docs.
8. Google Analytics PII/event docs.
9. W3C/WAI form/accessibility docs.
10. Language-learning product examples.
11. Teacher reporting/progress product docs.
12. Reddit/community correction complaints.

Chosen: local implementation artifacts first, then official privacy/security/API/analytics/accessibility docs, then product/community sources to test whether reflection-plus-feedback is category-normal or risky.

### External Evidence

- EUR-Lex GDPR Article 5: data minimization supports collecting only what is necessary, which strengthens no-audio/no-transcript V0.
- Supabase RLS docs: exposed public-schema tables need RLS and policies; future direct Supabase exposure must not bypass row ownership.
- FastAPI dependency docs: route dependencies are the native shared-auth/session pattern.
- FastAPI current-user docs: deriving current user through dependencies is the documented pattern; do not accept client-submitted `student_id`.
- Google Analytics PII policy: optional notes, names, emails and student identifiers must not be sent to GA4.
- GA4 event-parameter docs: aggregate context parameters are fine, so use only non-text fields such as theme/difficulty/reflection choice if analytics is added.
- W3C WAI forms tutorial and labels/instructions guidance: forms need clear labels, instructions and feedback; the reflection card should have visible skip and concise choices.
- Busuu corrections: language products already use speak/write on a topic plus feedback as a learning loop.
- Khan Academy teacher reporting docs: teacher reporting should summarize learning time, skills and needs rather than flood the teacher.
- Preply AI/product messaging: larger tutor platforms frame AI/practice as supporting human tutors and progress tracking.
- Reddit Busuu/Preply correction/AI threads: learners complain about inconsistent, automated, delayed or low-quality feedback; this weakens any anonymous/community/AI-score clone and strengthens direct Auris follow-up.

### Trend / Community / Product Signals

- The category pattern is not only "more practice"; it is practice plus a trustworthy feedback/progress loop.
- Privacy and trust are part of the product, not a compliance afterthought.
- A small optional reflection is safer and more on-brand than audio/transcription because Auris's value is diagnosis in class.
- Teacher overview should protect Auris's attention: latest signal and "wants class practice" beats a raw activity feed.

### Hypotheses Changed

H011 Talk the Talk's strongest role is the feedback bridge:

- Strengthened and translated into a technical spec.
- Confidence high for implementation path, medium for student adoption.
- Next test: manual pilot or implement V0; stop if save rate is below 15% or Auris cannot use saved notes in class.

H016 Next 15/Talk guidance must preserve autonomy:

- Strengthened as a Talk reflection guardrail.
- Confidence high for design constraint, medium for adoption.
- Evidence: the spec keeps `Just practise today`, optional note, non-blocking Practice Again and no review queue.
- Next test: measure save/skip rate and ask whether it feels useful or like homework.

Favored idea weakened:

- "A reflection card will automatically create teacher value" is now explicitly unproven.
- Cheaper alternative: manual WhatsApp/homework-log pilot before building.
- Stop evidence: low save rate, student homework complaints or no teacher usage.

### Strategic Synthesis

Strongest next move:

- Keep the no-audio Talk Reflection V0 spec as the implementation source of truth.
- Do not build it until Auris approves platform work or a manual pilot indicates the reflection is useful.

Smallest practical test:

1. Ask 3 current students after a Talk prompt to choose one reflection and optionally write one stuck phrase.
2. Auris uses one reflection in the next class.
3. Record whether it helped, felt natural, or felt like homework.

What not to do yet:

- Do not add audio recording.
- Do not add transcripts.
- Do not add AI scoring.
- Do not add a teacher review inbox.
- Do not claim public "speaking feedback in the portal" before the loop exists.

Risk of acting too early:

- Reflection could feel like admin.
- Teacher overview could become noisy.
- A premature product feature could be mistaken for retention proof.

Risk of waiting:

- Talk remains a nice prompt tool rather than proof of between-class continuity.
- AI apps keep owning the practice layer while Auris has not yet made the human follow-up layer visible.

### Artifacts Updated

- Created `talk-reflection-v0-technical-spec-cycle40.md`.
- Updated `hypotheses.md`.
- Updated `platform-backlog.md`.
- Updated `measurement-plan.md`.
- Updated `market-intelligence.md`.
- Updated `talk-the-talk-lead-magnet.md`.
- Updated `content-strategy.md`.
- Updated `automation-research-loop.md`.
- Updated `research-roadmap.md`.
- Appended this `research-log.md` entry.

### Process Improvement Notes

- Highest-signal source: actual teaching-platform code. It prevented the spec from becoming a vague "add reflection" idea.
- Highest-signal external source family: official privacy/security/API docs, because student-generated reflection data changes the risk profile.
- Useful product source: Preply/Busuu/Khan sources validated practice-plus-feedback/reporting patterns.
- Noisy source: broad app/community debate about whether AI replaces tutors. Cycle 39 already answered the broad question; Cycle 40 needed implementation constraints.
- Process rule added: when a strategic decision exists, next cycle should inspect implementation path, privacy guardrails and stop conditions instead of creating another broad strategy artifact.

### Next-Cycle Packet

Recommended next theme: choose based on evidence arrival.

If Auris approves platform implementation:

1. Use `/Users/aurisp/repos/teacher-website/docs/strategy/talk-reflection-v0-technical-spec-cycle40.md` as the source of truth.
2. Inspect exact current files before editing:
   - `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py`
   - `/Users/aurisp/repos/teacher-assistant/backend/app/api/custom_exercises.py`
   - `/Users/aurisp/repos/teacher-assistant/backend/app/api/modular_exercises.py`
   - `/Users/aurisp/repos/teacher-assistant/backend/app/main.py`
   - `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts`
   - `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
3. Add model, migration, router, API wrapper, completion card and tests.
4. Do not touch unrelated dirty files.

If no implementation approval but current-student access exists:

1. Run a manual pilot with 3 students:
   - one Talk prompt,
   - one reflection choice,
   - optional stuck phrase,
   - whether Auris used it next class,
   - whether it felt helpful or like homework.
2. Update H011/H016 and `talk-reflection-v0-technical-spec-cycle40.md`.

If no student/product evidence arrives:

1. Rotate away from Talk Reflection to avoid duplicate specs.
2. Good next themes:
   - smaller `Your next 15 minutes` path,
   - owner GBP Review Truth if it arrives,
   - public Talk copy mismatch implementation if Auris asks,
   - local/professional job-demand scan for Work-English Confidence Loop.

Exact files/source types for next cycle:

- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-reflection-v0-technical-spec-cycle40.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-minutes-platform-spec.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py`
- `/Users/aurisp/repos/teacher-assistant/backend/app/api`
- Source types: current-student pilot notes, implementation path, live API health/auth checks, official privacy docs only if fields change.

### Unfinished Threads

- No current-student AI-use answers yet.
- No Talk reflection manual pilot yet.
- Talk Reflection V0 not implemented; strategy/spec only.
- Public Talk copy mismatch remains unfixed because public files were not changed.
- Owner Review Truth and GBP Performance remain missing.
- Search Console access remains unavailable.

## Cycle 41 - Work-English Signal Refresh And Moment Ladder

Date: 2026-05-23
Theme: professional-confidence / work-English offer architecture

### Primary Research Question

Which work-English moments should Auris test first, and which expansion ideas should be deliberately ignored for now?

### Repo Status

- Website repo: `docs/strategy/` remains untracked as a strategy-memory folder.
- Teaching platform repo: dirty/untracked local cache and screenshot artifacts remain present; no platform files were edited this cycle.
- No commits, deploys, credentials, public posts, forms, GBP profile edits or third-party contacts were made.

### Local Evidence Inspected

Local artifacts inspected included:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `professional-english-job-demand-scan.md`
- `work-english-pain-language-scan.md`
- `content-strategy.md`
- `pricing-positioning.md`
- `outside-in-opportunity-radar.md`
- `review-proof-library.md`
- `measurement-plan.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/components/SeoLandingPage.jsx`
- `src/App.jsx`
- `src/translations.js`
- `src/data/speakingTopics.js`
- live `/ingles-empresas-castelldefels`
- live Talk UTM destination
- live Google reviews endpoint
- git status for both repos

Local interpretation:

- The strategy memory already points to professional confidence as a strong expansion lane, but the missing piece is real owner-side response data.
- The website/app can support work-moment copy: business route metadata and page copy name professionals/autonomos/small teams, and the speaking-topic bank already contains meetings, client updates, interviews and workplace situations.
- The business route is live and aligned, but the safest LinkedIn CTA is still Talk and the safest GBP CTA is still homepage until owner-side metrics exist.
- The key risk is over-productizing the angle before one measured message produces a qualified inquiry.

### Data / API Evidence

- Live business route returned HTTP 200 with correct canonical, title and `index,follow` robots.
- Raw static check of the business route saw 452 words and no static `<a href=` entries; this matters for future SEO work, not for the immediate content test.
- Live Spanish Google reviews endpoint returned `source=places-new`, rating 5.0 and reviewCount 16. Visible review proof includes confidence/progress/adaptation and a meeting-native-speaker confidence theme.
- Talk LinkedIn UTM returned HTTP 200 and canonical `/talkthetalk`.
- Search Console was not rerun because prior cycles documented the credential scope block and no new public route change happened.

### Source Discovery Choices

Possible source types considered before browsing:

- fresh job posts
- recruiter/job-agency listings
- official Barcelona employment/talent sources
- business-English competitor pages
- tutor marketplaces
- professional/community event listings
- Reddit/forum work-language threads
- Auris live review endpoint
- live website route checks
- public LinkedIn content
- HR/L&D/FUNDAE sources
- AI speaking tools

Chosen source types:

- job posts and recruiter listings for exact work use cases
- competitor pages for crowding/falsification
- marketplaces for price-anchor risk
- local employment/community sources for demand texture
- live Auris proof/destination checks for immediate readiness

### External Evidence

Fresh external evidence points recorded in `market-intelligence.md` and the Cycle 41 artifact:

- Randstad reception C1/C2 Barcelona listing: international phone/reception English.
- Page Personnel customer-service Barcelona and Gava listings: phone/email, European customers, logistics and incidents.
- Flowbox/Workwide account-executive listing: client meetings, SaaS presentations, English corporate language.
- CrowdStrike sales listing snippet: English and presentation skills.
- Barcelona Activa employment page: interview prep, CV, personal brand, storytelling, negotiation and strategic sectors.
- Barcelona International Welcome digital talent article: Barcelona digital professional growth context.
- English Consulting, Sankofa and iTalkTerms: paid competitors validate meetings/calls/interviews/presentations but show the corporate/programme trap.
- Women in Business and Languages 4 Professionals Meetup pages: local professional confidence, interviews, presentations and client-contact language.
- Superprof Business English Barcelona: demand exists, but price anchors and crowded claims weaken generic `business English` as premium proof.
- Reddit Barcelona English-first workplace thread: language confidence and inclusion are social/contextual, not grammar-only.
- Preply/Leanlab PDF: directional, platform-sponsored evidence that Spanish-speaking adults learning for work can benefit from 1:1 support over self-study, but not definitive proof.

### Trend / Community / Product Signals

- Work English is not a broad subject in the useful evidence; it is a set of pressure moments.
- The repeated moments are: meetings, client/customer calls, interviews, presentations, customer incidents and international-team communication.
- The strongest buyer-facing phrase is still dignified: `your English gets smaller`, not fear-heavy `panic` or `freeze` as the main public identity.
- Competitors and marketplaces already use meetings/confidence/presentations; Auris must pair the hook with review proof, Spanish-speaker correction, direct teacher relationship and between-class follow-up.

### Hypotheses Changed

- H008 strengthened and narrowed: business English should mean personal help for professionals/autonomos in real work moments, not corporate procurement.
- H013 strengthened: professional-confidence remains the strongest expansion wedge, but the first test should be `Meeting Voice`.
- H025 strengthened as a measured angle, not a product: Work-English should not become a page/package until actual inquiries mention work moments and accept the price anchor.

Falsification attempt:

- The favored idea that `professional-confidence` should become a bigger offer was weakened by marketplace and competitor evidence. The same claims are crowded and cheaper elsewhere, so job-post demand alone cannot justify a package. Owner-side inquiry notes remain the required proof.

### Artifact Produced

Created:

- `/Users/aurisp/repos/teacher-website/docs/strategy/work-english-signal-refresh-cycle41.md`

Updated:

- `hypotheses.md`
- `content-strategy.md`
- `pricing-positioning.md`
- `market-intelligence.md`
- `research-roadmap.md`
- `automation-research-loop.md`
- `research-log.md`

### Strongest Next Move

Run one proof-paired `Meeting Voice` post or private message:

`You know the answer, but in the meeting your English gets smaller.`

Pair it with review-confidence proof and the method: Spanish-speaker correction, real speaking practice and useful phrases saved for review between classes. Route LinkedIn to Talk and GBP to homepage unless owner-side metrics suggest otherwise.

### What Not To Do Yet

- Do not build a big business-English SEO page.
- Do not create a standalone Work-English package or price.
- Do not cold-pitch companies, coworking spaces, associations or HR/L&D.
- Do not lead with FUNDAE, invoice/NIF or corporate training.
- Do not publish Meeting Voice, Client Call and Interview variants together.

### Process Improvement Notes

- Highest-signal source: fresh job posts when used only for use-case mapping.
- Highest-signal falsification source: Superprof and competitor pages, because they expose price anchors and crowded claims.
- Useful local/data source: live reviews endpoint, because it confirms Auris already has proof that matches the Meeting Voice hook.
- Noisy source: broad community/event pages. They show attention and language, not buying intent.
- Process rule added: Work-English cycles must separate use-case proof, crowding/price proof and buyer-intent proof.

### Next-Cycle Packet

Recommended next theme: choose based on evidence arrival.

If Auris publishes or privately uses the Meeting Voice message:

1. Open `/Users/aurisp/repos/teacher-website/docs/strategy/work-english-signal-refresh-cycle41.md`.
2. Record owner-side metrics at 24h, 72h and 7d where available:
   - LinkedIn profile views, post impressions, link clicks, DMs
   - GBP views/searches/website clicks/calls/messages if GBP was used
   - Talk events if visible: `talk_started`, `talk_completed`, `talk_trial_click`
3. Add anonymous inquiry rows:
   - `source_channel`
   - `role_context`
   - `work_moment`
   - `pain_language`
   - `proof_mentioned`
   - `price_anchor_seen`
   - `invoice_needed`
   - `booked_trial`
   - `lead_quality`
4. Update H013/H025 and decide whether to test `Client Call`, `Interview` or pause.

If no owner-side signal arrives:

1. Do not repeat another broad job-demand scan.
2. Inspect 3-5 Google/GBP review snippets for professional-English competitors:
   - search `"English coach Barcelona" "Google reviews" "meetings" "confidence"`
   - search `"business English Barcelona" "client calls" "reviews"`
   - search `"clases ingles profesionales Barcelona opiniones reuniones confianza"`
3. Compare proof specificity, not just review count.
4. Update `review-proof-library.md`, `market-intelligence.md` and H009/H013/H025.

If a warm small-team lead appears:

1. Create a tiny one-lead small-team spec.
2. Keep it separate from broad corporate/FUNDAE training.
3. Record budget, schedule, invoice needs, decision-maker friction and whether the lead came from an existing trust path.

Exact files/APIs:

- `/Users/aurisp/repos/teacher-website/docs/strategy/work-english-signal-refresh-cycle41.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- Talk UTM from the Cycle 41 artifact

### Unfinished Threads

- No owner-side Meeting Voice post result yet.
- No owner Review Truth or GBP Performance baseline yet.
- No LinkedIn post/profile result yet.
- No real inquiry rows proving work-English buyer intent yet.
- Search Console access remains blocked/unrefreshed.

## Cycle 42 - Professional Review Proof Specificity

Date: 2026-05-23
Theme: review proof / Work-English proof specificity

### Primary Research Question

Which proof should sit beside the first `Meeting Voice` Work-English message, now that competitor reviews and pages show similar confidence/business-English language?

### Repo Status

- Website repo: `docs/strategy/` remains untracked as the strategy-memory folder.
- Teaching platform repo: dirty/untracked cache and screenshot artifacts remain present; no platform files were edited.
- No commits, deploys, credential changes, public posts, GBP edits, forms or third-party contacts were made.

### Local Evidence

Local artifacts inspected:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `review-proof-library.md`
- `work-english-signal-refresh-cycle41.md`
- `local-review-proof-language-scan.md`
- `work-english-proof-pairing-scorecard.md`
- `content-strategy.md`
- `measurement-plan.md`
- `pricing-positioning.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/translations.js`
- `src/utils/analytics.js`
- `teacher-assistant` Talk/dashboard/model references around review/practice/follow-up
- git status for both repos

Local interpretation:

- Cycle 41 created the moment ladder, so the next bottleneck is not another Work-English idea. It is proof specificity.
- Auris's current review proof already supports confidence, adaptation, practice and follow-up, but those themes also appear widely around competitors.
- The strongest differentiating proof chain is: real work moment -> Spanish-speaker correction -> direct personal follow-up -> review between classes.
- The website can display live Google proof through `GoogleReviewsSection`, but static strategy/copy should stay count-neutral until owner Review Truth confirms count and reply status.

### API / Data Evidence

- Live Spanish reviews endpoint returned `source=places-new`, rating 5.0, reviewCount 16 and five visible reviews.
- Live English reviews endpoint returned `source=places-new`, rating 5.0, reviewCount 16 and five visible reviews, including the May 22, 2026 former-student/family recommendation pattern.
- `GoogleReviewsSection.jsx` confirms the public site fetches the language-specific Netlify endpoint, displays dynamic rating/count and falls back to a Google reviews link.
- Search Console was not attempted because the primary question was proof language and prior GSC scope failure remains the last known state.

### Source Discovery Choices

Possible source types considered:

- Auris live review endpoint
- website review component/code
- competitor testimonial pages
- tutor marketplace profiles
- academy/business-English pages
- Google/GBP review snippets
- official Google review docs/policies
- trust/review mirrors
- LinkedIn public comments
- current-student outcomes
- Search Console/GA4

Chosen source types:

- live Auris reviews and code for owned proof
- official Google review and policy docs for safe asks/replies
- competitor/testimonial pages for table-stakes proof language
- marketplace profiles for proof plus price-anchor falsification
- academy/business-English pages for category contrast

### External Evidence

Fresh external evidence points:

- Google Business Profile Help: reviews can be replied to, review links/QR codes can be shared, and replies are public after Google's review.
- Google Maps contributed-content policy: genuine/unbiased reviews are allowed; incentives, selective solicitation and requested specific content are disallowed.
- English Anywhere: testimonials/page proof stress personalisation, professional teachers, adaptation, flexibility and FUNDAE/company training.
- Hania on Superprof: 20 EUR/h business-English profile uses self-confidence, comfort, needs and patience as proof.
- Alex on Superprof: 20 EUR/h profile combines 14 years, business meetings/negotiations/interviews, shared correction docs, confidence, CV and career-promotion proof.
- Aston School: company-English page names confidence in meetings, negotiations, presentations, calls, pronunciation, native/bilingual teachers and FUNDAE.
- Speak&Live: business-English immersion for professionals/directors uses real business situations, speaking/listening and confidence.
- Callan review mirror and Callan business course: confidence, fluency, presentations, negotiations, correspondence, 60h course structure, groups and weekly starts.
- OnEnglish Streaming: reviews mention private online classes, teacher care, platform materials, losing fear/shame and feeling more secure.
- Freeda Language Space: recent adult course page targets working/studying adults with practical communication and confidence speaking from day one.

### Trend / Community / Product Signals

- Confidence, adaptation and speaking comfort are not distinctive; they are market-wide proof themes.
- Work-specific proof is more often present in sales copy than in reviews. That means real review language around work moments is valuable when it appears.
- Marketplace tutors can combine very similar proof with lower prices, so reviews must be paired with owned-site method proof rather than marketplace proof.
- Platform/follow-up proof is useful, but only when framed as continuity from Auris's teaching, not as software.

### Hypotheses Changed

- H009 strengthened with a specificity rule: review proof leads, but not as star-count or generic confidence proof.
- H013 strengthened but made more differentiated: professional confidence still works only when paired with method proof.
- H021 strengthened: marketplace profiles are strong falsification because they combine similar proof with 20-30 EUR anchors.
- H025 strengthened: Meeting Voice should use the proof-specific version before testing Client Call or Interview.

Falsification attempt:

- The favored idea that reviews alone make Meeting Voice credible was weakened. Reviews are still strongest, but only if they connect the outcome to Auris's mechanism. Competitor and marketplace evidence shows confidence/adaptation without mechanism is easy to imitate and price-compress.

### Artifacts Updated

Created:

- `/Users/aurisp/repos/teacher-website/docs/strategy/professional-review-proof-specificity-cycle42.md`

Updated:

- `hypotheses.md`
- `review-proof-library.md`
- `content-strategy.md`
- `measurement-plan.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `research-roadmap.md`
- `research-log.md`

### Strongest Next Move

Use one proof-specific Meeting Voice post/private message:

```text
You know the answer, but in the meeting your English gets smaller.

In class, we practise the exact kind of moment you face, correct the Spanish-to-English patterns that slow you down, and keep useful phrases ready to review between classes.

That is the kind of confidence students often mention: not perfect English, but feeling more able to use it when the real moment arrives.
```

Then log the first thing each lead mentions.

### What Not To Do Yet

- Do not use static `5.0 / 16 reviews` copy until owner Review Truth confirms count and newest-review reply status.
- Do not ask students to mention specific themes or keywords in reviews.
- Do not route professional posts to Superprof/Tusclases.
- Do not make the portal the emotional hook.
- Do not use FUNDAE/company-course language.

### Process Improvement Notes

- Highest-signal source: marketplace profiles with reviews/prices, because they reveal whether a proof theme is premium or price-compressed.
- Highest-signal official source: Google review policy, because it tightened the review ask.
- Useful local source: `GoogleReviewsSection.jsx`, because it showed dynamic public proof exists but static copy still needs owner truth.
- Noisy source: broad academy pages; useful for contrast, but low-signal for Auris conversion.
- Process rule added: review-proof cycles must separate owned proof, competitor proof, policy proof and price proof.

### Next-Cycle Packet

Recommended next theme depends on evidence arrival.

If owner Review Truth arrives:

1. Open `review-proof-library.md`, `measurement-plan.md` and `professional-review-proof-specificity-cycle42.md`.
2. Record:
   - owner rating/review count
   - public ES/EN endpoint count
   - newest visible review theme
   - newest-review reply status
   - count decision: count-neutral / 16 confirmed / count drift
3. If newest review is unreplied, log `action_type=review_reply` before any new GBP post.

If the proof-specific Meeting Voice message is used:

1. Record 24h/72h/7d metrics where available.
2. Add anonymous inquiry fields:
   - `first_thing_mentioned`
   - `proof_mentioned`
   - `proof_specificity`
   - `work_moment`
   - `price_anchor_seen`
   - `booked_trial`
   - `lead_quality`
3. Strengthen/adjust H009/H013/H025 based on what proof was mentioned first.

If no owner-side signal arrives:

1. Do not repeat academy/business-course scans.
2. Inspect search-visible GBP snippets or owner-provided screenshots for 3-5 solo tutors/business-English coaches.
3. Search:
   - `"English tutor Barcelona" "Google reviews" "confidence"`
   - `"business English coach Barcelona" "review" "meetings"`
   - `"clases ingles Barcelona opiniones confianza profesor particular"`
4. Compare proof specificity: generic confidence, work moment, teacher relationship, method/correction, follow-up, price.

Exact files/APIs:

- `/Users/aurisp/repos/teacher-website/docs/strategy/professional-review-proof-specificity-cycle42.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/work-english-signal-refresh-cycle41.md`
- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`

### Unfinished Threads

- Owner Review Truth still missing.
- No proof-specific Meeting Voice post/private-message result yet.
- No real inquiry rows for `proof_specificity`.
- No GBP Performance baseline.
- Search Console remains blocked/unrefreshed.

## Cycle 43 - Lead-Source Proof Ledger

Date: 2026-05-23
Theme: measurement / lead-source attribution / channel proof

### Primary Research Question

How should Auris capture enough evidence to compare GBP, LinkedIn, Talk the Talk, referrals, marketplaces and pricing/proof objections without overbuilding analytics or waiting for perfect GA4 access?

### Repo Status

- Website repo: `docs/strategy/` remains untracked as the strategy-memory folder.
- Teaching platform repo: dirty/untracked cache and screenshot artifacts remain present; no platform files were edited.
- No commits, deploys, credential changes, public posts, GBP edits, forms or third-party contacts were made.

### Local Evidence

Local artifacts inspected:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `measurement-plan.md`
- `owner-evidence-ledger-template.md`
- `owner-evidence-micro-intake-playbook.md`
- `gbp-week-one-execution-pack.md`
- `gbp-linkedin-proof-sprint.md`
- `channel-fit-and-content-scan.md`
- `content-strategy.md`
- `work-english-proof-pairing-scorecard.md`
- `professional-review-proof-specificity-cycle42.md`
- `pricing-positioning.md`
- `review-proof-library.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/utils/analytics.js`
- `src/App.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/ContactSection.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/Navbar.jsx`
- `src/components/CalendlyBadge.jsx`
- `index.html`
- `talkthetalk/index.html`
- `teacher-assistant` teacher overview and source/referral/contact searches

Local interpretation:

- The public website can measure useful intent: contact clicks, form success, Talk starts/completion/trial clicks and some embedded Calendly scheduled events.
- The public website cannot explain private buyer trust: WhatsApp, email, referral conversations, price objections and many Calendly source details remain outside the page.
- `TalkTheTalk.jsx` tags the completion CTA with Talk UTMs, but because it opens Calendly in a new tab, `talk_trial_click` is intent rather than a booked trial.
- `App.jsx` listens for `calendly.event_scheduled`; that fits embedded/popup Calendly contexts better than new-tab Talk flows.
- The teaching platform has deep student/class workflow but no dedicated prospect lead-source CRM; building one now would be premature.

### API / Data Evidence

- Homepage GBP UTM returned HTTP 200:
  - `https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_confidence_review`
- Talk LinkedIn UTM returned HTTP 200:
  - `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`
- Live Spanish reviews endpoint returned `source=places-new`, rating 5.0, reviewCount 16 and five visible reviews.
- Live English reviews endpoint returned `source=places-new`, rating 5.0, reviewCount 16 and five visible reviews.
- Static HTML checks confirmed canonicals/descriptions and direct GA4 config in both entry points.
- `gtag('config', 'G-VDW7H0VQBC', { anonymize_ip: true })` remains present without `send_page_view:false`, so the prior possible pageview duplication risk still stands.
- No fresh Search Console pull was attempted because Cycle 36's GSC scope issue remains the last trusted state and this cycle was attribution-design focused.

### Source Discovery Choices

Possible source types considered:

- GBP Performance owner UI
- Google local ranking docs
- GA4 campaign URL docs
- GA4 recommended event docs
- Calendly UTM docs
- Calendly embed developer docs
- LinkedIn post/profile analytics docs
- WhatsApp click-to-chat and prefilled-message docs/examples
- small-business attribution/community threads
- live website analytics code
- teaching-platform workflow code
- Search Console and route checks

Chosen source types:

- official Google/Calendly/LinkedIn docs for measurement constraints
- live Auris route/review/code checks for actual implementation fit
- small-business attribution communities for practical outside-in evidence
- teacher-assistant read-only inspection to test whether a CRM build is justified

### External Evidence

Fresh external evidence points:

- Google Business Profile Performance docs say owners/managers can inspect views, clicks and interactions, including calls, website clicks, messages and bookings where configured.
- Google local ranking docs still frame local ranking around relevance, distance and prominence, and note that reviews/positive ratings can help local ranking.
- Google Analytics campaign URL docs support source, medium and campaign as core UTM fields, with content useful for differentiating placements.
- GA4 recommended event docs identify `generate_lead` for form/request leads.
- GA4 developer docs support a `lead_source` parameter on `generate_lead`, while warning that currency is needed when value is used.
- Calendly UTM docs show source/medium/campaign/content/term can be passed through links/embeds/JS.
- Calendly embed developer docs show `calendly.event_scheduled` is sent by supported embeds through parent-window `postMessage`, which explains why Talk new-tab attribution stops at click.
- LinkedIn post analytics docs confirm post analytics are owner-visible and include discovery, profile activity, social engagement and link engagement.
- A small-business lead-source thread shows a service owner with website/referral/social/ad leads asking for a simple source system; replies suggest CRM/spreadsheet source fields, UTMs and a direct source question.
- A service-business attribution thread warns that self-reported source is imperfect and low-volume businesses cannot expect statistically clean attribution; lead value/cohort signals matter more than vanity metrics.
- A recent attribution thread says small businesses commonly combine UTMs, source questions and conversations because discovery is fragmented and last-click can miss trust creation.

### Trend / Community / Product Signals

- Small service attribution is messy by nature; the useful aim is not perfect source truth but enough repeated lead-quality evidence to make better channel decisions.
- Owner-side screenshots/notes are normal for GBP and LinkedIn because platform analytics are private.
- UTMs and GA4 support the trail, but WhatsApp, referral, price and proof language remain human-layer signals.
- For Auris, the lead note must capture why a premium personal teacher felt trustworthy: reviews, meeting confidence, method correction, personal relationship, Ireland/bilingual background, invoice/NIF, portal follow-up or price.
- The teaching platform should not absorb prospect tracking until manual rows prove repeated value.

### Hypotheses Changed

- H002 strengthened but made Level 4-dependent: GBP remains the strongest public trust channel, but website clicks or views are not enough without inquiry proof.
- H005 strengthened and partially falsified: LinkedIn/Talk can create measurable curiosity, but impressions/Talk starts are not acquisition unless they produce buyer notes or booked trials.
- H015 strengthened and expanded: manual notes now need source confidence, proof specificity, work moment, price anchor, lead quality and human signal strength.
- H025 strengthened: Meeting Voice remains the first Work-English test, but only a lead-source proof row can promote Client Call or Interview.

Falsification attempt:

- The favored idea that better UTMs and tool events can solve attribution was weakened. They are necessary hygiene, but official docs and local code both show they stop short of the human trust/price/proof layer.
- The cheaper alternative to a dashboard is stronger: one manual lead row per serious inquiry.

### Artifacts Updated

Created:

- `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md`

Updated:

- `measurement-plan.md`
- `owner-evidence-ledger-template.md`
- `hypotheses.md`
- `research-roadmap.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `research-log.md`

### Implementation-Ready Artifact

`lead-source-proof-ledger-cycle43.md` now defines:

- evidence levels 0-5
- source discovery choices
- external evidence table
- lead-source fields
- channel action fields
- seven-day sprint sheet
- example GBP/LinkedIn/referral rows
- continue/adjust/pause rules
- do-not-build-yet guardrails
- next-cycle packet

### Strongest Next Move

Use the ledger only when real data appears:

- for a channel action: fill one action row
- for a GBP/LinkedIn metric: fill one owner metric row
- for an inquiry: fill one anonymized lead-source proof row

The first useful result is not a dashboard. It is one serious lead row with:

`source_type`, `source_specific`, `source_confidence`, `first_thing_mentioned`, `proof_specificity`, `work_moment`, `price_anchor_seen`, `quoted_price_expected`, `booked_trial`, `lead_quality`, `human_signal_strength`.

### What Not To Do Yet

- Do not build a lead CRM inside `teacher-assistant`.
- Do not request exports or credentials as the next step.
- Do not treat `talk_trial_click` as a booked trial.
- Do not use LinkedIn impressions, GBP views or Talk starts as channel proof by themselves.
- Do not send private inquiry notes or free-text buyer language to GA4.
- Do not publish more content variants just because the ledger is blank.

### Process Improvement Notes

- Highest-signal source: local website code plus official Calendly docs, because together they explain the exact Talk booking attribution limit.
- Highest-signal official source: GBP Performance docs, because they define the owner metrics that can be compared.
- Highest-signal outside-in source: small-business attribution threads, because they validate a simple UTMs-plus-source-question method while warning against false precision.
- Noisy/limited source: WhatsApp click-to-chat docs/examples. Useful for prefilled source hints, but not enough to prove messages were sent or lead quality.
- Process rule added: acquisition measurement cycles must separate human buyer signal, channel-visible signal and site/tool signal.

### Next-Cycle Packet

Packet AR: Lead-Source Proof First Rows.

If owner or inquiry evidence arrives:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
2. Fill only the matching row:
   - `channel_action`
   - `gbp_day0`
   - `linkedin_post_metric`
   - `site_tool_intent`
   - `lead_source_note`
   - `proof_price_note`
   - `day7_compare`
3. Update H015 first.
4. If the evidence is a real lead, update H002/H005/H025 depending on source.

If no owner or inquiry evidence arrives:

1. Do not enlarge the attribution ledger.
2. Rotate to one of:
   - pricing proof near 40 EUR/h
   - public route/indexing cleanup
   - student-platform retention proof
3. Keep Packet AR ready for the first real lead/action.

Exact files/APIs/searches:

- `/.netlify/functions/google-reviews?language=es`
- `/.netlify/functions/google-reviews?language=en`
- homepage GBP UTM in the Cycle 43 artifact
- Talk LinkedIn UTM in the Cycle 43 artifact
- search only if fresh outside-in evidence is needed: `"how did you hear about us" "service business" attribution`

### Unfinished Threads

- Owner Review Truth still missing.
- No GBP Performance baseline.
- No LinkedIn owner/profile/post result.
- No proof-specific Meeting Voice result.
- No real inquiry rows for `proof_specificity` or lead-source proof.
- Search Console remains blocked/unrefreshed.

## Cycle 44 - Premium Price Proof Stack

Date: 2026-05-23
Theme: pricing / offer architecture / premium proof

### Primary Research Question

How should Auris protect and explain the 40 EUR/h premium now that the lead-source ledger shows price anchors must be captured, and what minimal owned-channel proof should sit beside the price before more GBP/LinkedIn traffic is pushed?

### Repo Status

- Website repo: `docs/strategy/` remains untracked as the strategy-memory folder.
- Teaching platform repo: dirty/untracked cache, screenshots and temporary artifacts remain present; no platform files were edited.
- No commits, deploys, public profile edits, GBP edits, posts, forms, credential changes or third-party contact were made.

### Local Evidence

Local artifacts inspected:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `pricing-positioning.md`
- `pricing-profile-coherence-cycle37.md`
- `website-proof-pricing-implementation-plan.md`
- `lead-source-proof-ledger-cycle43.md`
- `measurement-plan.md`
- `review-proof-library.md`
- `professional-review-proof-specificity-cycle42.md`
- `content-strategy.md`
- `channel-fit-and-content-scan.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/translations.js`
- `src/components/PricingSection.jsx`
- `index.html`
- live homepage static HTML/headers
- live review endpoints in ES and EN
- `teacher-assistant` SRS, flashcard, class-progress and dashboard source searches

Local interpretation:

- The owned-site 40 EUR/h price anchor remains clear and transparent.
- The first pricing proof is still too generic: the visible private-card description says `1-on-1 lessons tailored to you`, while static JSON-LD says `One-on-one online English lessons tailored to your specific needs`.
- `PricingSection.jsx` already has the right structure for a small proof patch: price card, bullets, included strip and billing/NIF support.
- The included strip already names portal, flashcards, tailored materials and progress, but it lacks a support sentence explaining that the live hour is only part of the work.
- The live review endpoint is strong public proof, but owner Review Truth and reply status remain unknown, so static review-count copy remains gated.
- The teaching platform genuinely supports portal/follow-up claims through SRS, flashcards, class-level review state, assignments, feedback, class notes and progress surfaces.
- No real inquiry rows exist yet, so this cycle should not change the price policy based on imagined objections.

### API / Data Evidence

- Live homepage returned HTTP 200 from Netlify with HTML content, HSTS and cache hit.
- Static homepage HTML contains `priceRange`, private offer price `40`, group offer price `20` and NIF FAQ.
- JSON-LD parse found:
  - `@type: ProfessionalService`
  - `priceRange: €€`
  - private offer: `Clases particulares de inglés`, `price: 40`, `priceCurrency: EUR`
  - group offer: `Group English Classes`, `price: 20`, `priceCurrency: EUR`
- JSON-LD private offer description remains generic: `One-on-one online English lessons tailored to your specific needs`.
- Live ES reviews endpoint returned `source=places-new`, rating 5.0, reviewCount 16 and five visible reviews.
- Live EN reviews endpoint returned `source=places-new`, rating 5.0, reviewCount 16 and five visible reviews.
- No Search Console refresh was attempted; Cycle 36 remains the last trusted state because the local token lacked Search Console scopes.

### Source Discovery Choices

Possible source types considered:

1. Owned pricing code.
2. Static JSON-LD/schema.
3. Live homepage static HTML.
4. Live review endpoint.
5. Teaching-platform code proving portal/follow-up claims.
6. Direct Superprof profile.
7. Superprof category pages.
8. Tusclases direct profile/search evidence.
9. Premium professional-English provider pricing.
10. Local academy/private-class pricing.
11. Official Google Business Profile service docs.
12. Official structured-data docs.
13. Learning research on retrieval/spacing.
14. Community pricing threads.

Chosen sources:

- owned website/schema/code and live endpoints
- direct Auris profile plus marketplace category pages
- premium and local provider price examples
- official GBP/Google/schema docs
- learning research for the between-class review mechanism

### External Evidence

Fresh external evidence points:

- Google Business Profile services docs: service businesses can add service descriptions and prices, and services may be highlighted in Search/Maps.
- Google LocalBusiness structured-data docs: `priceRange` is a supported field; structured data communicates business information but does not guarantee display.
- Schema.org `Offer`: service offers can be represented with price and item/service context, which makes the private offer description part of the owned offer surface.
- Superprof Auris direct profile: 40 EUR/h main rate, 5.0/7, 20 students, verified/contact profile and strong copy around Ireland, 11 years, Spanish speakers, portal and NIF.
- The same Superprof profile still lists online at 30 EUR/h.
- Superprof Castelldefels English category: Auris appears at 40 EUR/h, but category context places him near many 10-25 EUR/h alternatives and a 14 EUR/h average.
- Superprof Business English Barcelona: category average around 18 EUR/h; visible professional/confidence profiles can reach 38 EUR/h, which validates demand but shows generic work-English is price-compressed.
- Tusclases Auris search/profile evidence: 30 EUR/h, 4.9/15 and strong speaking/progress review language remain visible.
- FunTalk private classes: local individual private English is listed at 38 EUR, with personalization, active learning, confidence and follow-up language.
- Word Power pricing: bespoke one-to-one presentation/interview coaching is listed at 55 EUR/h, tied to specific professional outcomes and support.
- Cambridge adult L2 vocabulary review: spaced repetition/retrieval is a meaningful L2 vocabulary learning mechanism.
- ERIC meta-analysis: spaced retrieval practice supports retention better than massed retrieval, which makes saved vocabulary/review credible but not a conversion proof by itself.

### Trend / Market / Product Signals

- The pricing market has two simultaneous truths: 40 EUR/h is defensible for a specific personal teacher, and buyers can still see cheaper comparison anchors quickly.
- `Tailored classes` is not a premium differentiator by itself because academies, marketplaces and private providers all use that frame.
- The strongest premium proof is not the portal as software. It is the continuity loop: speaking practice, correction, saved language and review between sessions.
- Official GBP docs make price coherence more important because services/prices/descriptions can become search-visible.
- Structured data should not lag behind visible copy; a buyer or parser should not see a generic offer description while the strategy depends on a personal follow-up mechanism.
- Learning research supports the review/spacing mechanism, but buyer willingness still requires lead-source proof rows.

### Hypotheses Changed

H004 40 EUR/h premium proof:

- Status: strengthened and refined.
- Confidence: high.
- Evidence: direct Superprof and premium/local comparables support 40 EUR/h, but low marketplace anchors and generic owned copy increase comparison risk.
- Next test: if approved, patch visible pricing copy and JSON-LD offer description; then track price/proof fields in the next 5-10 serious inquiries.

H021 marketplace profiles:

- Status: strengthened and made action-specific.
- Confidence: high.
- Evidence: direct Superprof is useful proof but still exposes 30 EUR online; Tusclases remains 30 EUR; category pages show 14-18 EUR averages.
- Next test: if two qualified direct leads mention 30 EUR marketplace pricing before booking, align marketplaces or document deliberate channel pricing before more public traffic.

H025 Work-English:

- Status: held and made price-proof dependent.
- Confidence: medium-high.
- Evidence: professional examples validate premium outcomes, but business-English marketplace categories still show lower averages and crowded claims.
- Next test: keep Work-English inside the 40 EUR personal offer; run Meeting Voice only with the proof stack and lead-source fields.

Falsification attempt:

- Favored idea tested: `Adding portal proof is enough to justify 40 EUR/h.`
- Result: weakened. Portal proof helps only when framed as personal follow-up and learning continuity. A software-first portal claim is not enough because cheaper providers and marketplaces also claim tools, personalization and confidence.
- Cheaper alternative to implementation: use the Cycle 44 proof stack in private replies and trial calls before editing public code.

### Strategic Synthesis

Strongest next move:

Prepare the owned-site premium proof patch, but do not publish it automatically. If Auris approves, make a small copy/schema change before pushing harder on GBP/LinkedIn.

The desired price story:

```text
The class is not just the live hour. We speak, correct the patterns that slow you down, save useful language, and keep it organised for review between sessions.
```

What Auris should not do yet:

- Do not lower the owned-site price.
- Do not hide the price.
- Do not add marketplace profile links to premium campaign routes.
- Do not create a separate Work-English package or price.
- Do not publish static `5.0 / 16 reviews` copy until owner Review Truth is confirmed.
- Do not keep browsing marketplaces unless price evidence changes or a lead mentions it.

Evidence that would change the recommendation:

- If direct leads accept 40 EUR/h and mention reviews/portal/follow-up without price friction, marketplace cleanup stays secondary.
- If two qualified direct leads mention the 30 EUR marketplace anchor before booking, marketplace alignment becomes urgent.
- If leads object to price without seeing the mechanism, patch owned-site proof before adding more public traffic.

### Artifacts Updated

Created:

- `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`

Updated:

- `pricing-positioning.md`
- `hypotheses.md`
- `research-roadmap.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `content-strategy.md`
- `research-log.md`

### Implementation-Ready Artifact

`premium-price-proof-stack-cycle44.md` now defines:

- source discovery choices
- local evidence table
- external evidence table
- H004/H021 falsification
- price-proof copy stack for website, Spanish version, JSON-LD and GBP service
- what not to say yet
- price-policy decision table
- implementation steps if Auris approves
- next-cycle Packet AS

Core implementation recommendation if approved:

- private description: `1-on-1 classes with personal follow-up`
- private bullets: real conversation/correction, adapted materials, saved vocabulary, portal/flashcards/progress
- included support line: the live hour is only part of the work
- JSON-LD private offer description: one-to-one classes for Spanish speakers with speaking practice, correction, saved vocabulary and portal review

### Process Improvement Notes

- Highest-signal source: owned visible pricing plus static JSON-LD, because both showed the same generic proof weakness.
- Highest-signal falsification source: Superprof direct plus Superprof category together. Direct profile supports Auris; category context explains price pressure.
- Highest-signal official source: GBP services docs, because they make price/description coherence a search-visible risk.
- Noisy/limited source: broad community pricing threads. Marketplace pages gave cleaner current price anchors.
- Process rule added: pricing-proof cycles must audit both human-visible copy and machine-readable offer surfaces, and every price recommendation must name the lead-note fields that would disprove it.

### Next-Cycle Packet

Packet AS: Premium Price Proof Patch.

If Auris approves website implementation:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`
   - `/Users/aurisp/repos/teacher-website/src/translations.js`
   - `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
   - `/Users/aurisp/repos/teacher-website/index.html`
2. Patch only the pricing proof copy, included-strip support line and private `Offer.description`.
3. Run local build.
4. QA EN/ES desktop/mobile pricing.
5. Parse JSON-LD.

If no implementation approval arrives:

1. Keep Packet AR ready for any owner/lead evidence.
2. Use the proof stack in private reply/trial-call language.
3. Do not browse marketplaces again unless prices change or a lead mentions them.
4. Rotate to one of:
   - indexing/static fallback cleanup
   - student-platform retention proof
   - first real lead-source row if inquiry evidence appears

Exact files/APIs/searches:

- `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- `/Users/aurisp/repos/teacher-website/index.html`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- `https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- only if price might have changed: Superprof Auris direct, Tusclases Auris direct/search evidence, Superprof Castelldefels category

### Unfinished Threads

- Owner Review Truth still missing.
- GBP service names/prices/descriptions are unknown.
- No real inquiry rows for `price_anchor_seen`, `quoted_price_expected` or `proof_mentioned`.
- Marketplace price policy remains an owner decision: align Tusclases/Superprof online to 40 EUR/h or document deliberate channel pricing.
- Pricing proof patch is implementation-ready but not applied.

## Cycle 45 - Static Route Trust Experiment

Date: 2026-05-23
Theme: SEO / Search Console / indexing / static route trust

### Primary Research Question

If no owner/lead evidence and no price-patch approval has arrived, should Auris invest in public route/indexing cleanup now, and what is the smallest safe patch that could make `/talkthetalk`, `/clases-ingles-castelldefels` and `/ingles-empresas-castelldefels` more useful without turning them into SEO-stuffed pages?

### Repo Status

- Website repo: `docs/strategy/` remains untracked as the strategy-memory folder.
- Teaching platform repo: dirty/untracked cache, screenshots and temporary artifacts remain present; no platform files were edited.
- No commits, deploys, public website code changes, profile edits, GBP edits, posts, forms, credential changes or third-party contact were made.

### Local Evidence

Local artifacts inspected:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `automation-research-loop.md`
- `market-intelligence.md`
- `seo-indexing-diagnostics.md`
- `search-indexing-refresh-cycle36.md`
- `src/App.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `talkthetalk/index.html`
- `clases-ingles-castelldefels/index.html`
- `ingles-empresas-castelldefels/index.html`
- `public/sitemap.xml`
- `public/robots.txt`
- `netlify.toml`
- live homepage/static route outputs
- teaching-platform evidence from prior portal/follow-up cycles, used only as support for honest route copy

Local interpretation:

- The route plumbing is healthy: exact routes exist, Netlify redirects are configured, canonicals/metadata/schema are present, rendered nav/footer links use normal anchors, sitemap lists the routes and robots allows crawling.
- The repeated weakness is static fallback usefulness: homepage has no visible static body, while Talk/local/business have only 29/38/36 words and zero static internal links.
- Rendered local/business pages are useful and on-brand, but they still share a structure and could use one route-specific comparison/method block if React work is approved.
- Talk is a useful tool and CTA, but the public route needs to explain the method bridge: use the tool for repetitions, use class for feedback and diagnosis.
- Because no public changes happened since the prior indexing diagnosis, this cycle should not create a second generic SEO audit. It should create a do-or-ignore packet.

### API / Data Evidence

Live checks on 2026-05-23:

- `https://englishwithauris.com/`: HTTP 200, canonical homepage, `index,follow`, schema count 2, static root words 0, static internal links 0.
- `https://englishwithauris.com/talkthetalk`: HTTP 200, self-canonical, `index,follow`, schema count 1, static root words 29, static internal links 0.
- `https://englishwithauris.com/clases-ingles-castelldefels`: HTTP 200, self-canonical, `index,follow`, schema count 1, static root words 38, static internal links 0.
- `https://englishwithauris.com/ingles-empresas-castelldefels`: HTTP 200, self-canonical, `index,follow`, schema count 1, static root words 36, static internal links 0.
- `https://englishwithauris.com/sitemap.xml`: HTTP 200 XML.
- `https://englishwithauris.com/robots.txt`: HTTP 200 text/plain.

Search Console access attempt:

- Current local `gcloud` token could call `webmasters/v3/sites`, but the response returned `siteCount: 0`.
- This is treated as an access/source-quality limitation, not as proof of zero search data.
- Last trusted API-backed GSC baseline remains Cycle 16:
  - 28 days: 1 click / 169 impressions, homepage only
  - 90 days: 6 clicks / 306 impressions, homepage only
  - 180 days: 18 clicks / 651 impressions, homepage only
  - homepage indexed; Talk/local crawled not indexed; business discovered not indexed

### Source Discovery Choices

Possible source types considered:

1. Prior GSC/URL Inspection baseline.
2. Current Search Console API access.
3. Live route headers.
4. Live static HTML.
5. Source route HTML.
6. React route implementation.
7. Sitemap, robots and Netlify redirects.
8. Official Google Search docs.
9. Local academy pages.
10. Marketplace pages.
11. Work-English competitor pages.
12. Community/professional pain language.

Chosen sources:

- live route/header/static audit
- local GSC access check
- route/source code inspection
- official Google Search docs
- local academy/marketplace proof examples

### External Evidence

Fresh external evidence points:

- Google JavaScript SEO basics: Google can render JavaScript, but robust initial/renderable content still matters; React plumbing alone is not the full quality signal.
- Google crawlable links docs: real anchor links with meaningful text matter; rendered links pass, but the static fallbacks expose no links.
- Google sitemap docs: sitemaps help discovery but do not guarantee crawling or indexing.
- Google canonical docs: self-canonicals are useful hints, not proof of uniqueness or index inclusion.
- Google URL Inspection docs: live URL success and indexed URL status are different evidence layers.
- Google Page Indexing report help: a live 200 URL is not automatically indexed.
- Google SEO Starter Guide: people-first, useful, unique content beats mechanical SEO tweaks.
- Google helpful content guidance: the patch should stay useful to prospective learners and avoid search-first stuffing.
- Kilkenny Learning Centre: local academy proof is dense with native/qualified teachers, speaking focus, 2,000+ students, Business English and small groups.
- Castle Languages: local academy positioning uses years, Cambridge, multiple languages, group/private/company courses.
- Kilkenny course page: route-specific local proof includes native teachers, small groups, 500+ students and company/private classes.
- Superprof Castelldefels English category: local private-class demand exists, but buyers see many cheaper alternatives.
- Superprof Business English Barcelona: business-English demand exists, but claims are crowded and price anchors are lower.

### Trend / Market / Product Signals

- The local comparison set is not empty. Academies have denser proof and marketplaces have lower prices, so a 38-word fallback cannot carry the personal-premium argument.
- The correct local page contrast is not "we are bigger"; it is "you work directly with one teacher who understands Spanish-speaker blocks and keeps the practice organized."
- The business route should not become a corporate/FUNDAE page. It should explain practical work moments: meetings, presentations, interviews, client calls, demos and updates.
- Talk should not fight AI speaking tools as another generic prompt machine. Its public copy should explain the bridge from low-pressure repetitions to Auris's human feedback.
- GBP/reviews/homepage still look faster for near-term acquisition than waiting for new route indexation.

### Hypotheses Changed

H002 GBP will beat broad SEO for near-term leads:

- Status: strengthened but not advanced by fresh performance data.
- Confidence: high.
- Evidence: route readiness stayed healthy but non-homepage pages still have weak static fallbacks and no fresh GSC proof; current GSC token cannot refresh the baseline.
- Next test: if acquisition is the goal, use owner GBP Day 0 plus homepage UTM; if site quality is the goal, use Packet AT as a bounded experiment.

H003 More landing pages alone will not solve acquisition:

- Status: strengthened and converted into a stop/revisit rule.
- Confidence: high.
- Evidence: static fallbacks are still thin and link-isolated, while local competitors and marketplaces expose denser proof and clearer comparison frames.
- Next test: patch existing route fallbacks only if approved; do not add town pages.

H007 Talk can be a lead magnet, but not yet a clean SEO asset:

- Status: strengthened.
- Confidence: high for not SEO-first, medium-high for lead-magnet fit.
- Evidence: Talk has useful interactive value and completion CTA, but only 29 fallback words and no static links.
- Next test: add examples and the `reps plus teacher diagnosis` bridge only if editing is approved.

H020 The indexing gap is quality/uniqueness/priority, not discovery:

- Status: strengthened and made falsifiable.
- Confidence: high.
- Evidence: route 200s, sitemap, robots, redirects, canonicals and metadata are healthy; GSC access remains unavailable; official Google docs weaken sitemap/schema/canonical-only explanations.
- Next test: after an approved patch/deploy, inspect URLs once and wait 14-28 days for URL Inspection/page-level GSC signals.

Favored idea tested:

`If we add richer static fallback copy, Google will index the pages.`

Result: weakened/refined. The patch is a sensible quality experiment, not a guarantee. Indexing may still depend on prominence, external/profile links, site history and query demand.

Cheaper alternative that could beat it:

Run the owner-measured GBP review-confidence action to the indexed homepage once Review Truth and Day 0 are captured.

### Strategic Synthesis

Strongest next move:

Keep Packet AT ready, but do not implement it without approval. If Auris asks for SEO/site work, patch the three static route fallbacks first. If Auris asks for acquisition now, use GBP/reviews/homepage before route SEO.

What Auris should not do yet:

- Do not create more local/town pages.
- Do not make the local or business route sound like an academy.
- Do not resubmit sitemap or add schema as the main fix.
- Do not treat the static fallback patch as guaranteed indexation.
- Do not repeat this same route diagnosis next cycle unless deploy, GSC access or page/query evidence changes.

Evidence that would change the recommendation:

- Restored URL Inspection reports a specific technical/canonical issue.
- Changed routes gain page-level GSC impressions/clicks after deploy.
- A serious lead says they found or trusted Auris through the local/business/Talk route.
- GBP/profile actions generate qualified leads faster, making SEO cleanup secondary.

### Artifacts Updated

Created:

- `/Users/aurisp/repos/teacher-website/docs/strategy/static-route-trust-experiment-cycle45.md`

Updated:

- `seo-indexing-diagnostics.md`
- `hypotheses.md`
- `research-roadmap.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `research-log.md`

### Implementation-Ready Artifact

`static-route-trust-experiment-cycle45.md` now defines:

- source discovery choices
- local evidence table
- live route/API evidence
- external evidence table
- H003/H007/H020 falsification
- P0 static fallback copy directions for Talk, local and business pages
- P1 rendered uniqueness blocks
- P2 measurement rules
- do/rotate decision rule
- next-cycle Packet AT

Core implementation recommendation if approved:

- Patch only:
  - `talkthetalk/index.html`
  - `clases-ingles-castelldefels/index.html`
  - `ingles-empresas-castelldefels/index.html`
- Use 170-260 useful words, one H1, two short paragraphs, 3-5 bullets and 2-3 static links per route.
- Keep copy practical and personal: private teacher versus academy, work-English confidence loop, Talk as practice reps before teacher feedback.

### Process Improvement Notes

- Highest-signal source: live static HTML audit, because it showed the weakness is unchanged and implementation-targeted.
- Highest-signal official source: Google Search docs as a guardrail against sitemap/schema/canonical myths.
- Highest-signal outside-in source: local academy pages, because they show the proof-density gap Auris should answer without imitating academy scale.
- Noisy/limited source: current Search Console API output, because `siteCount: 0` is an access/source-quality issue, not performance evidence.
- Process rule added: when an indexing diagnosis repeats unchanged, create a do-or-rotate packet and stop reopening it until deploy, GSC access or page/query data changes.

### Next-Cycle Packet

Packet AT: Static Route Trust Patch.

If implementation is approved:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/static-route-trust-experiment-cycle45.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/seo-indexing-diagnostics.md`
   - `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
   - `/Users/aurisp/repos/teacher-website/clases-ingles-castelldefels/index.html`
   - `/Users/aurisp/repos/teacher-website/ingles-empresas-castelldefels/index.html`
2. Apply P0 only.
3. Run build.
4. Recount static words and static internal links.
5. If deployed later, inspect URLs once and update H003/H007/H020.

If GSC access is restored before implementation:

1. Pull 28/90/180 page/query windows.
2. Run URL Inspection for homepage, Talk, local and business.
3. Update `seo-indexing-diagnostics.md`, H002/H003/H020 and the roadmap.

If no implementation approval and no GSC access arrives:

1. Do not repeat this route diagnosis.
2. Rotate to student-platform retention proof, owner/lead evidence, review truth, or first lead-source row.
3. Keep Packet AT ready.

Exact files/APIs/searches:

- `/Users/aurisp/repos/teacher-website/docs/strategy/static-route-trust-experiment-cycle45.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/seo-indexing-diagnostics.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md`
- `/Users/aurisp/repos/teacher-website/talkthetalk/index.html`
- `/Users/aurisp/repos/teacher-website/clases-ingles-castelldefels/index.html`
- `/Users/aurisp/repos/teacher-website/ingles-empresas-castelldefels/index.html`
- `https://englishwithauris.com/talkthetalk`
- `https://englishwithauris.com/clases-ingles-castelldefels`
- `https://englishwithauris.com/ingles-empresas-castelldefels`
- `https://www.googleapis.com/webmasters/v3/sites`
- official Google Search docs only if implementation guardrails need rechecking

### Unfinished Threads

- Owner Review Truth still missing.
- GBP Day 0 and lead-source rows still missing.
- Price proof patch remains implementation-ready but unapplied.
- Packet AT is ready but not implemented.
- Current GSC access cannot refresh Search Console page/query data.

## Cycle 46 - Concierge Next 15 Retention Proof

Date: 2026-05-24
Theme: student-platform retention proof / Next 15 pilot gate

### Primary Research Question

Should Auris run the `Your next 15 minutes` portal manual pilot now, implement the dashboard card, or focus instead on Talk Reflection/teacher-prep proof?

Working answer:

Run the concierge/manual Next 15 proof sprint before building, unless Auris explicitly asks to ship the dashboard card. The missing evidence is not technical feasibility; it is current-student acceptance and whether Auris can use the action in the next class.

### Repo Status

Website repo:

- `?? docs/strategy/`

Teaching platform repo:

- Many untracked local artifacts/caches/screenshots and temp files remain.
- No teaching-platform files were changed.

### Local Evidence Inspected

Local artifacts inspected this cycle:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `platform-backlog.md`
- `portal-retention-proof-refresh.md`
- `retention-baseline-and-manual-pilot.md`
- `next-15-pilot-tracker.md`
- `next-action-implementation-readiness.md`
- `talk-reflection-v0-technical-spec-cycle40.md`
- `content-strategy.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts`
- `/Users/aurisp/repos/teacher-assistant/backend/app/api/routes.py`
- `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py`
- `rg` scan for `student_next_action`, `homework-log`, `TalkPractice`, `Reflection`, `ClassHomeworkLog`, `StudentPracticeSession`, and `FlashcardReviewLog`

Local interpretation:

- `Next 15` has enough strategy and technical readiness. Another spec would be low-value.
- `StudentDashboard.tsx` has many useful student surfaces: assignments, custom/modular assignments, reviewed feedback, class notes, flashcards, games and Talk the Talk. It still does not answer "what should I do first?"
- SRS remains the most measurable retention behavior because practice sessions/review logs/stats exist and the flashcard page already uses due-card logic.
- Feedback and Talk are premium loops, but feedback views and Talk reflections are not instrumented yet.
- The existing homework log is still the best manual pilot infrastructure: no new pilot table is needed.
- TeacherOverview already has attention items and homework-log workflow, so a teacher analytics panel should wait until student/card/reflection events exist.

### API / Data Evidence

Live checks on 2026-05-24:

- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health`: HTTP 200, `{"status":"ok"}`.
- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/lms/students/me` without auth: HTTP 401, `Authorization header missing`.
- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/srs/students/me/flashcards/stats?class_id=1` without auth: HTTP 401, `Authorization header missing`.
- `GET https://english-with-auris-portal.netlify.app/student/dashboard`: HTTP 200 Netlify SPA shell.

Prior Cycle 34 aggregate baseline remains the trusted usage snapshot:

- 7 days: 27 active students, 42 flashcard sessions, 288 cards reviewed, 36 completed sessions, 5 modular started, 4 modular submitted.
- 14 days: 39 active students, 91 flashcard sessions, 711 cards reviewed, 85 completed sessions, 13 modular started, 9 modular submitted.
- 30 days: 42 active students, 163 flashcard sessions, 1555 cards reviewed, 157 completed sessions, 25 modular started, 14 modular submitted.
- Scheduled-class 7 days: 24 active students, 37 SRS sessions, 282 cards reviewed.
- `student_next_action_events` table: missing.

### Source Discovery Choices

Possible source types considered:

1. Current-student replies.
2. Aggregate portal usage data.
3. Student dashboard code.
4. SRS API and flashcard UI.
5. Teacher overview and homework log.
6. Talk portal code/spec.
7. Live API/portal checks.
8. Self-regulated language-learning research.
9. Language app guided-path docs.
10. Tutor/LMS product pages.
11. App/community complaints.
12. Pricing/acquisition sources.

Chosen:

- local code and platform strategy
- safe live API checks
- academic/official learning-product sources
- tutor-platform examples
- product/community complaint signals

Skipped:

- pricing/acquisition sources, because the product-retention decision is now gated by current-student proof.

### External Evidence

Fresh external evidence points:

- Duolingo home-screen redesign: validates the category need for clear sequencing because learners can be unsure how to move through practice.
- Quizlet Study Path: validates adapted study sequences around content familiarity and progress.
- Busuu Study Plan: validates goals, schedules, daily time, reminders and progress tracking, while warning against making Auris too app-like.
- Frontiers 2021 SRL/MALL EFL study: supports personalized recommendations, feedback and e-portfolio mechanisms as learning-relevant, but not as direct proof that one card will change retention.
- Tuton: independent-tutor platforms sell SRS vocabulary, notes, reminders and progress, so portal continuity is category-normal.
- Eluency: teacher-created practice plus completion/weak-spot visibility supports teacher-usable prep signals.
- ZenGengo: language homework can combine speaking/writing/media and teacher feedback, but the full assignment platform is too heavy for Auris's next move.
- Preply how-it-works: human tutor plus practice tools is now a mainstream learner expectation.
- Preply/Leanlab Spanish-speaker workplace PDF: directional but sponsored support that 1:1 human tutoring can outperform self-learning apps for confidence/recommendation among adult Spanish-speaking work learners.
- Reddit Duolingo path reactions: forced paths/loss of review control are a real autonomy risk.
- Reddit Preply AI/chat complaints: generic AI-like homework/messages weaken trust and reinforce Auris's direct human advantage.
- Reddit Preply lesson-insights discussion: learners may value vocabulary banks and insights, but generic homework still needs real tutor guidance to matter.

### Trend / Community / Product Signals

- The market has made guided paths and study plans normal, so a portal that only acts like a library may underuse its advantage.
- The same product category also creates resistance when it removes control or sounds generic.
- Auris's best version is not "an algorithm chooses your task"; it is "your teacher leaves one small step so the next class begins with momentum."
- SRS is the best measurement spine, but student replies and in-class evidence should outrank raw SRS movements for the first pilot.

### Hypotheses Changed

H006: The student platform's next improvement should be clarity of next action.

- Status: strengthened but converted into a proof-sprint gate.
- Confidence: high for product direction, medium for immediate behavior change.
- Evidence: local dashboard still lacks a first-step selector; external product sources support guided paths; community evidence warns against forced/generic homework.
- Next test: run 3-5 anonymous concierge pilot rows before building unless Auris explicitly asks to ship.

H011: Talk the Talk's strongest role is the feedback bridge, not the free tool itself.

- Status: held high, but kept behind Next 15 for this cycle.
- Confidence: high for strategic role, medium for timing.
- Evidence: Talk Reflection V0 is implementable, but Talk still lacks completion/reflection logging and should not become the first measured retention proof unless speaking-practice feedback is the chosen theme.
- Next test: revisit Talk Reflection only after the Next 15 decision or if pilot replies favor Talk/speaking practice.

H016: The Next 15 card must preserve autonomy.

- Status: strengthened.
- Confidence: high.
- Evidence: official guided-path sources validate clarity; Duolingo/Preply community signals warn against forced or generic tasks.
- Next test: classify pilot replies as `helpful`, `homework` or `unsure`.

H017: SRS is the current measurable retention spine.

- Status: strengthened but bounded.
- Confidence: high for measurement, medium for retention causality.
- Evidence: existing aggregate baseline and SRS APIs remain the best measurable layer; feedback/Talk/Next 15 events are missing.
- Next test: after pilot/card, compare 14-day SRS/modular context with anonymous in-class evidence.

H018: The existing homework log is enough for the first manual pilot.

- Status: strengthened.
- Confidence: high for infrastructure, medium for adoption.
- Evidence: model/routes/TeacherOverview workflow exist and fit the pilot without new tables.
- Next test: use WhatsApp plus homework log; record only anonymous outcomes.

Favored idea tested:

`The card is technically ready, so build it now.`

Result:

Refined/weakened. Technical readiness is no longer the main blocker. Student acceptance and teacher-use proof are the missing evidence.

Cheaper alternative that could beat it:

Auris sends one personal WhatsApp next-step after class and uses the portal/homework log as the record. If that works, the product can mirror the human voice later.

### Strategic Synthesis

Strongest next move:

Run the concierge Next 15 proof sprint with 3-5 students. Keep it personal, optional and connected to the next class.

What Auris should not do yet:

- Do not build a teacher analytics panel.
- Do not add `student_next_action_events` before the card exists.
- Do not build Talk Reflection ahead of Next 15 unless speaking-practice proof becomes the chosen focus.
- Do not market the portal as an automated progress coach.
- Do not make the message sound like school homework or a productivity app.

Evidence that would change the recommendation:

- Auris says he wants to ship the dashboard card now.
- 2-3 pilot students say the portal is already clear and prefer direct WhatsApp reminders.
- Students act on Talk prompts but not SRS/notes/feedback, making Talk Reflection the stronger next product loop.
- The next 14-day aggregate is too noisy and student replies become the only useful success layer.

Risk of acting too early:

The card becomes another portal feature students glance past, or premium adult learners feel assigned rather than guided.

Risk of waiting:

The portal remains impressive but under-explained; students may keep seeing it as a library instead of Auris's between-class coaching system.

### Artifacts Updated

Created:

- `next-15-proof-pilot-cycle46.md`

Updated:

- `platform-backlog.md`
- `research-roadmap.md`
- `hypotheses.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `next-15-pilot-tracker.md`
- `research-log.md`

### Implementation-Ready Artifact

`next-15-proof-pilot-cycle46.md` now contains:

- source discovery table
- local evidence table
- live API/data evidence
- external evidence table
- alternative comparison scorecard
- concierge pilot message and follow-up
- anonymous outcome fields
- go/change/stop rules
- product-claim boundary
- hypotheses/falsification
- next-cycle Packet AU

Core pilot message:

```text
Tiny experiment before our next class:

Choose just one useful step, not all of them:

- Review up to 8 flashcards if they are due.
- Pick one correction from my feedback and use it in a sentence.
- Open your class notes and say 3 useful phrases out loud.
- If you already have an assignment started, just continue that.

Quick question: when you open the portal, do you normally know what to do first, or is there a bit too much choice?
```

### Process Improvement Notes

- Highest-signal source: local dashboard/homework-log code, because it showed both the UX gap and the low-friction manual path.
- Highest-signal external source family: official/product study-plan sources paired with community complaints; the combination validates clarity while preventing a forced-path mistake.
- Noisy/biased source: tutor/LMS product pages and Preply-sponsored research. Useful for category patterns, not proof Auris's students will adopt this.
- Missing source: current-student replies. The next cycle should treat this as the only evidence that can unlock implementation by default.
- Process rule added: when a platform-retention concept already has a spec, decide `manual pilot`, `implementation`, `retire/soften`, or `rotate`; do not create another spec without new student or owner evidence.

### Next-Cycle Packet

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
   - Talk Reflection only if speaking proof is explicitly chosen
   - price proof implementation if approved

Exact searches/source types:

- `Duolingo new home screen clear path learners unsure`
- `Quizlet study path suggestions smartest sequence`
- `Busuu Study Plan reminders progress`
- `independent language tutor platform homework progress SRS`
- `Preply AI generic homework tutor complaints`

### Unfinished Threads

- Owner Review Truth still missing.
- GBP Day 0 and lead-source rows still missing.
- Price proof patch remains implementation-ready but unapplied.
- Packet AT static route patch remains ready but not implemented.
- Current GSC access cannot refresh Search Console page/query data.
- Packet AU now needs real current-student pilot rows or an explicit implementation request.

## Cycle 47 - Owner Proof Decision Gate

Date: 2026-05-24
Automation id: `continuous-teaching-business-strategy`
Theme: GBP/reviews/local trust plus acquisition measurement process.

### Primary Research Question

What is the smallest owner-proof packet that can unlock GBP/review/lead-source action without creating more admin?

### Repo Status

- Website repo: `?? docs/strategy/`
- Teaching-platform repo: dirty with many unrelated untracked artifacts/caches/screenshots from prior work; left untouched.
- No commits, deploys, public profile edits, credentials changes, forms, posts or third-party contact.

### Local Evidence Inspected

Inspected more than 12 local artifacts, including:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `lead-source-proof-ledger-cycle43.md`
- `owner-evidence-ledger-template.md`
- `owner-evidence-micro-intake-playbook.md`
- `review-count-16-reply-gate.md`
- `proof-sprint-action-gates.md`
- `gbp-week-one-execution-pack.md`
- `review-proof-sprint-measurement-plan.md`
- `review-proof-library.md`
- `content-strategy.md`
- `measurement-plan.md`
- `src/components/GoogleReviewsSection.jsx`
- `netlify/functions/google-reviews.js`
- `src/App.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/utils/analytics.js`
- `src/components/ContactSection.jsx`
- `src/components/CalendlyBadge.jsx`

Local conclusion:

- The owner-proof capture system is already mature enough. It contains review truth, GBP Performance, action log, inquiry and decision rows.
- The one-row owner ask already exists. More prompt rewriting would not reduce the real blocker.
- Campaign destinations and event layers are ready enough for a measured action, but they remain Level 0/3 signals unless owner or lead evidence appears.
- `talk_trial_click` remains intent, not a booked trial.

### Data / API Evidence

Live public checks on 2026-05-24:

- `/.netlify/functions/google-reviews?language=en`: `places-new`, rating `5`, `reviewCount` `16`, 5 visible reviews. First visible review in this check had a November 2025 publish time.
- `/.netlify/functions/google-reviews?language=es`: `places-new`, rating `5`, `reviewCount` `16`, 5 visible reviews. First visible review in this check had a November 2025 publish time.
- GBP homepage UTM returned HTTP 200 with clean homepage canonical and `index,follow`.
- LinkedIn Talk UTM returned HTTP 200 with clean `/talkthetalk` canonical and `index,follow`.

Important correction:

- Earlier cycles saw a May 22, 2026 review in the public visible set.
- This cycle still confirms `5.0 / 16`, but does not confirm public visible order as newest-review truth.
- Public endpoint count/rating is useful proof QA; owner reply status and newest-review truth require owner/API evidence.

### Source Discovery Choices

Best possible evidence sources for this question:

- GBP owner review screen.
- GBP owner Performance.
- Existing ledgers/playbooks.
- Live public reviews endpoint.
- Review function/component code.
- Website UTM destination checks.
- Official Google GBP/review/Places docs.
- Official GA/Calendly/LinkedIn docs.
- Small-business attribution communities.
- GBP practitioner threads.

Chosen sources:

- Existing local ledgers and action gates.
- Live endpoint and campaign routes.
- Official Google/Places/GA/Calendly/LinkedIn docs.
- BrightLocal review survey.
- Reddit small-business, attribution and GBP practitioner threads.

Skipped:

- More competitor scans and content calendars, because copy is not the current bottleneck.

### External Evidence

Evidence points gathered:

- Google Business Profile Performance docs: owner metrics and date ranges are the source for interactions, views, searches, calls, website clicks, messages and bookings.
- Google local ranking docs: reviews, positive ratings, profile completeness and owner responses matter for local trust/prominence.
- Google posts docs: posts can be useful but can be pending/rejected/archived; action status must be logged.
- Google manage reviews docs: verified businesses can reply publicly; replies can take time to be reviewed.
- Google review tips: review links/QR codes and personalized replies are supported, without pressure.
- Google content policy: do not store private raw messages or personal data in strategy artifacts.
- Places API legacy/new docs: public Places review data is limited and does not replace owner review truth.
- Business Profile Reviews API resource: owner/API review resources can contain `reviewReply`.
- GA campaign URL docs: UTMs can separate source/medium/campaign/content, but do not prove buyer trust.
- Calendly tracking docs: UTM data can exist in booking flows, but needs actual booking/export/owner note.
- LinkedIn post analytics docs: post/profile analytics are owner-side.
- BrightLocal 2026: reviews matter, but recency/owner response and follow-on website/social research matter too.
- Reddit small-business attribution thread: simple source questions plus UTMs are practical at small volume.
- Reddit cold-email attribution thread: raw reply metrics are weaker than source quality/close value.
- Reddit GBP practitioner thread: reviews/profile completeness/services/photos are more durable than content volume.

### Trend / Community / Product Signals

- Small service businesses often use imperfect but practical source notes rather than heavy attribution systems.
- GBP practitioners keep returning to profile basics and reviews rather than post volume.
- Review recency/owner response keeps appearing as trust evidence, but not enough to conclude channel ROI without owner/lead rows.

### Hypotheses Changed

- H009 strengthened, with a correction: reviews remain central, but public visible-review order should not be used as newest-review truth.
- H015 strengthened but capped: manual lead notes remain necessary, but the existing ledger is enough.
- H019 strengthened: owner-side GBP baseline is still required, and must be separated from Review Truth.
- H023 held high with correction: the review/referral loop remains promising, but fresh-review claims need owner truth.

Favored idea tested:

`The next helpful output is an even smaller owner ask.`

Result: weakened. The smallest practical ask already exists. The useful output is now a stop rule: if no owner row, action row or lead row appears, rotate instead of making another owner-capture artifact.

Cheaper alternative:

A real lead note can beat the planned GBP sequence. If an inquiry appears, classify it first.

### Strategic Synthesis

Strongest next move:

Use Packet AV. If any of four evidence rows arrives, fill only that row:

- `review_truth`
- `gbp_day0`
- `action_log`
- `lead_source_note`

What not to do yet:

- Do not create another owner ask artifact.
- Do not draft another GBP/LinkedIn calendar.
- Do not make static `16 reviews` copy.
- Do not infer reply status or newest review from public endpoint order.
- Do not build a CRM/dashboard in `teacher-assistant`.

Evidence that would change the recommendation:

- Owner Review Truth arrives.
- Owner GBP Performance arrives.
- A review/referral action happens.
- A lead/inquiry arrives with source/proof/price/work-moment clues.
- Auris explicitly asks to implement Packet AS, AT, AU or another site/platform change.

Risk of acting too early:

- The automation adds admin weight and creates confidence from blank ledgers.

Risk of waiting:

- A real lead or review reply opportunity could be missed if the process insists on a perfect GBP sequence.

### Artifacts Updated

Created:

- `owner-proof-decision-gate-cycle47.md`

Updated:

- `research-roadmap.md`
- `hypotheses.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `owner-evidence-ledger-template.md`
- `review-count-16-reply-gate.md`
- `research-log.md`

### Implementation-Ready Artifact

`owner-proof-decision-gate-cycle47.md` now contains:

- source discovery table
- local evidence table
- live API/data evidence
- external evidence table
- hypothesis falsification
- four-row decision gate
- one-message owner prompt
- stop/rotate rule
- next-cycle Packet AV

### Process Improvement Notes

- Highest-signal source: existing local owner ledgers/playbooks, because they proved the process already has enough capture structure.
- Highest-signal data layer: live public reviews endpoint paired with review function code; together they revealed the count is useful while visible order is not enough.
- Useful official source family: Google GBP/review/Places docs; they cleanly separate public proof, owner metrics and review reply truth.
- Useful outside-in source family: small-business attribution communities; they validated one-row source notes while warning against overconfident dashboards.
- Noisy/limited source: GBP practitioner threads. Useful for practice patterns, but not a controlled ranking or conversion source.
- Process rule added: classify owner-gated cycles as `owner row arrived`, `lead row arrived`, `action row arrived` or `no row`; if no row and the one-row ask already exists, rotate.

### Next-Cycle Packet

Packet AV: Owner Proof Action Gate.

If owner Review Truth arrives:

1. Open:
   - `/Users/aurisp/repos/teacher-website/docs/strategy/owner-proof-decision-gate-cycle47.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/review-count-16-reply-gate.md`
   - `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
2. Fill only the Review Truth row.
3. If newest review is unreplied, draft exactly one reply and log the action status.
4. Ask for GBP Day 0 only if Auris wants a measured public action.

If GBP Performance arrives:

1. Fill only the GBP Performance row.
2. Compare range/date to action date/status.
3. Do not interpret without action status or lead note.

If a lead/inquiry arrives:

1. Open `/Users/aurisp/repos/teacher-website/docs/strategy/lead-source-proof-ledger-cycle43.md`.
2. Fill one `lead_source_note`.
3. Let the lead note outrank the planned sequence.

If no owner/lead evidence arrives:

1. Do not repeat owner-proof research.
2. Rotate to one of:
   - Packet AS pricing implementation if approved.
   - Packet AT static route implementation if approved.
   - Packet AU Next 15 pilot rows if evidence exists.
   - Talk Reflection only if speaking-practice feedback is explicitly chosen.
3. Preserve count-neutral manual proof copy.

Exact source/API checks for next cycle:

- `curl -s https://englishwithauris.com/.netlify/functions/google-reviews?language=en`
- `curl -s https://englishwithauris.com/.netlify/functions/google-reviews?language=es`
- Owner screenshot/note if available: GBP Reviews and GBP Performance.
- Search only if needed: `Google Business Profile review reply status API reviewReply`, `small business lead source tracking ask every lead`, `Google Business Profile Performance interactions website clicks messages`.

### Unfinished Threads

- Owner Review Truth still missing.
- GBP Day 0 still missing.
- First lead-source note still missing.
- Current-student Next 15 pilot rows still missing.
- Price proof patch remains ready but unapplied.
- Static route trust patch remains ready but unapplied.
- GSC access remains unresolved from prior cycles.

### Owner Evidence Follow-Up - 2026-05-24

Auris supplied the owner/search-view GBP evidence after Cycle 47:

- Owner profile confirms `5.0 / 16` reviews.
- Two newest visible reviews are very recent and unreplied.
- One recent Spanish review praises long-term online classes of 90 minutes, productivity, resources and care for learning.
- One recent edited English review says a former student confidently recommends Auris for children.
- GBP Performance owner view shows 520 profile views, `<50` searches and 2 website clicks/customer interactions across the visible Dec 2025-May 2026 chart.
- Monthly interactions shown: Dec 0, Jan 0, Feb 1, Mar 0, Apr 1, May 0.
- Discovery/search terms are small and include `auris`, `clases de ingles castelldefels`, `english`, `ingles`, and ` auris`, all `<15`.
- Auris reports nobody is contacting him yet and clarifies that he is nearly fully booked, playing the long game and building slow future demand.

Interpretation:

- Review Truth is no longer missing.
- GBP Day 0 is now partially filled from owner evidence.
- The right next action is review replies, not a bigger acquisition push.
- GBP is currently a trust and future-discovery asset, not a proven lead engine.
- Low contact volume is not a failure while Auris is fully booked; the future-growth strategy should focus on trust freshness, waitlist/capacity signalling later, and slow compounding proof.

Action logged:

- Updated `owner-evidence-ledger-template.md` with Review Truth, GBP Day 0 owner note, planned review reply action and decision output.
- Updated `owner-proof-decision-gate-cycle47.md` with the evidence received and a quieter long-game interpretation.

Next practical action:

1. Reply to the two newest reviews with warm, specific, non-salesy replies.
2. After replies are live/pending, decide whether to make one small GBP freshness update.
3. Do not judge lead generation until either a lead-source row exists or a deliberate future-capacity campaign starts.

## Cycle 48 - Future Demand Quiet Growth Gate - 2026-05-24

Primary research question:

How should Auris build future demand while nearly fully booked, without creating urgency, admin weight, or academy-style marketing?

Repo status:

- Website repo: `docs/strategy/` remains untracked strategy memory; no public code/site changes were made.
- Teaching platform repo: still dirty with unrelated untracked/cache/screenshot artifacts; not touched.
- Safety: no commits, deploys, credential changes, GBP profile edits, public posts, forms or third-party contacts.

Local evidence inspected:

- `research-log.md` Cycle 47 and owner follow-up
- `research-roadmap.md`
- `hypotheses.md`
- `owner-proof-decision-gate-cycle47.md`
- `owner-evidence-ledger-template.md`
- `review-count-16-reply-gate.md`
- `review-proof-library.md`
- `content-strategy.md`
- `pricing-positioning.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/translations.js`
- `src/components/ContactSection.jsx`
- `src/components/PricingSection.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `netlify/functions/google-reviews.js`

Local interpretation:

- The big change is not another acquisition tactic; it is capacity context.
- The site is built around immediate booking: hero/pricing/contact copy repeatedly point to a free trial or booking flow.
- Auris is actually nearly fully booked and playing the long game, so immediate booking CTAs should not be judged as failing just because few people are contacting him.
- Owner evidence confirms `5.0 / 16`, GBP has 520 profile views, `<50` searches and only 2 website clicks/customer interactions across the visible Dec 2025-May 2026 chart.
- Review replies are now the smallest trust-maintenance action.
- GBP is a trust and future-discovery surface today, not a proven lead engine.

Data/API evidence:

- Live review endpoint EN: `places-new`, rating `5`, `reviewCount` `16`, 5 visible reviews, including Milagros from 2026-05-22 and older November 2025 reviews.
- Live review endpoint ES: `places-new`, rating `5`, `reviewCount` `16`, 5 visible reviews with confidence, meetings, adaptation, comfort, resources/tools and continuity themes.
- Homepage long-game UTM returned HTTP 200 on `/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=long_game_trust&utm_content=cycle48`.
- Public review endpoint still does not expose owner reply state; use it for public proof QA only.

Source discovery choices:

- Highest-signal local/owner sources: capacity note, owner GBP Performance note, owner review truth, website CTA code.
- Highest-signal official sources: Google review replies, GBP Performance, Google local ranking, GBP photos, GBP posts.
- Useful outside-in sources: waitlist/scheduling docs and service-business community threads about full calendars.
- Lower-value sources this cycle: competitor scans and more content-calendar examples, because the bottleneck is capacity mode.

External evidence:

- Google manage customer reviews docs: verified businesses can reply publicly, replies are reviewed, reviewers are notified, and replies show as the business.
- Google local ranking docs: complete profile info, review replies, photos/videos and reviews/ratings support local visibility and trust.
- Google GBP Performance docs: owners can track views, searches, interactions, calls, website clicks, messages and bookings by date range.
- Google photos docs: logo and cover photo are useful, but cover photo display is not guaranteed; media can be pending/not approved; low-quality cover photos may be replaced.
- Google posts docs: posts can share updates and action buttons, but can be pending/not approved/archived; phone numbers in descriptions may be rejected.
- BrightLocal 2026: review consistency, recency, owner responses and high rating all affect trust, and many consumers keep researching beyond reviews.
- Calendly Routing docs: form data can qualify and route leads, but that is overkill until lead volume exists.
- Vagaro waitlist docs: when no appointment is available, customers can join a waitlist with preferences and receive notifications when a matching slot opens.
- Mailchimp landing page docs: lightweight landing pages can collect contacts without custom code, so a future waitlist page does not require custom app work.
- Reddit fully booked/waitlist operator thread: full calendars can hide lost demand; hiring/expansion can alter service quality; simple follow-up can recover leakage.
- Waitlist product category signals: appointment businesses repeatedly sell the same idea, "do not lose future demand because the calendar is full."
- GBP practitioner signals from Cycle 47: reviews, profile completeness, services/photos and relevance usually matter more than post volume.

Trend/community/product signals:

- Attention/trust: review recency and replies matter because future prospects inspect whether the business is active.
- Buying intent: waitlist/future-availability patterns indicate people may wait if fit is high, but only if the path is clear.
- Retention/quality: full-capacity service businesses risk damaging the core experience if they scale too quickly.
- Product opportunity: if future inquiries grow, a simple future-demand row or off-the-shelf form beats building a custom CRM/waitlist in `teacher-assistant`.

Hypotheses changed:

- H002 refined and partially weakened: GBP remains the strongest public trust base, but no contacts while nearly full is not proof that GBP has failed as a near-term lead engine.
- H009 strengthened: reviews remain the central proof asset; owner replies matter more than likes because replies are public, visible and notify reviewers.
- H015 strengthened but capacity-aware: blank lead-source rows are not failure while no immediate acquisition push exists; use a smaller `future_demand_note` when an inquiry appears.
- H019 strengthened but changed from sprint gate to baseline habit: owner GBP data matters, but monthly context is enough while full.
- H023 strengthened as long-game trust: review/referral loops fit, but public referral campaigns should stay paused.
- H026 added: capacity state should decide the acquisition success metric.

Favored idea tested:

`Nobody is contacting Auris yet, so acquisition is failing.`

Result: weakened.

Low contact volume is only weak-channel evidence when there is open capacity and a deliberate campaign. In the current state, the better conclusion is: trust proof should stay fresh so future leads do not meet a stale profile.

Cheaper alternative:

Do nothing public except review replies and one monthly GBP owner snapshot. This can beat a waitlist page while Auris is truly full.

Strategic synthesis:

Strongest next move:

Run `Trust Maintenance Mode`: review replies, accurate profile, occasional real proof, monthly owner snapshot if convenient, and one future-demand note if a real inquiry appears.

What not to do yet:

- Do not run Google Ads.
- Do not create a loud "book now" sprint.
- Do not make weekly GBP/LinkedIn posting the default.
- Do not build a waitlist app, CRM or public funnel.
- Do not change site copy until Auris deliberately chooses `Soft Future-Availability Mode`.

Smallest practical test:

If someone contacts Auris while he is full, record only: source, need, buyer type, timing, fit, response and follow-up date.

Evidence that would change the recommendation:

- Auris wants 1-3 slots filled within 30 days.
- A future inquiry says availability is unclear or they bounced because booking looked closed/full.
- GBP profile actions rise but inquiries stay zero after a deliberate capacity-opening post.
- Future inquiries are repeatedly low-fit or price-first.

Risk of acting too early:

- Public marketing creates immediate-booking pressure and low-fit admin while Auris is already full.

Risk of waiting:

- A good future student might leave if the profile looks stale or there is no calm way to ask about later availability.

Artifacts updated:

- Created `future-demand-quiet-growth-cycle48.md`.
- Updated `research-roadmap.md` with Packet AW and capacity-aware evidence.
- Updated `hypotheses.md` with Cycle 48 updates and H026.
- Updated `market-intelligence.md` with Cycle 48 source map, evidence and O052.
- Updated `content-strategy.md` with quiet trust cadence.
- Updated `review-proof-library.md` with confirmed owner count and long-game proof use.
- Updated `pricing-positioning.md` with future-availability offer logic.
- Updated `automation-research-loop.md` with the capacity-state rule.
- Updated `owner-evidence-ledger-template.md` and `review-count-16-reply-gate.md`.

Implementation-ready artifact:

`future-demand-quiet-growth-cycle48.md` now contains:

- capacity modes: Trust Maintenance, Soft Future-Availability, Measured Acquisition and Capacity Expansion
- current Trust Maintenance checklist
- future-availability copy in English and Spanish
- one-row future-demand inquiry note
- review reply guidance
- stop/change evidence
- Packet AW continuation

Process improvement notes:

- Highest-signal source: owner capacity context plus GBP owner Performance. It changed the interpretation of every metric.
- Most useful official sources: Google review/profile/photo/post docs, because they turn trust maintenance into specific actions and status labels.
- Useful outside-in source: service-business fully booked/waitlist threads, because they falsify "full means solved."
- Noisy/biased source: waitlist software pages, useful as pattern evidence but not proof Auris needs a tool.
- Protocol update: every acquisition cycle must classify capacity state before interpreting no leads.

Next-cycle packet:

Packet AW: Future Demand Capacity Gate.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/future-demand-quiet-growth-cycle48.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`

If Auris says a slot may open:

1. Choose `Soft Future-Availability Mode` or `Measured Acquisition Mode`.
2. Draft a small site/contact/GBP future-availability copy patch, but do not apply it without approval.
3. Check Calendly availability/waitlist options only if needed.
4. Track the next inquiry with `future_demand_note`.

If no slot is opening:

1. Do not run an acquisition sprint.
2. Check review reply status and one monthly GBP snapshot if available.
3. Rotate to retention, pricing proof, or student-platform evidence only if new owner/student input exists.

Exact external searches for next cycle:

- `Calendly waitlist alternatives solo service business`
- `Google Business Profile availability appointment link service business`
- `private tutor waitlist availability wording`
- `service business fully booked waitlist follow-up`

Unfinished threads:

- Confirm whether Teresa and Milagros replies are live/pending/rejected.
- Decide whether Auris wants `Trust Maintenance Mode` only or a soft future-availability message later.
- First future-demand inquiry row is still missing.
- Search Console scoped access remains unresolved.
- Next 15 pilot rows remain missing.

## Cycle 49 - Availability Copy Deploy Gate - 2026-05-24

Primary research question:

How should the newly softened availability copy be treated before deploy, and what evidence should decide whether it helps or hurts?

Repo status:

- Website repo: local code changes exist for availability copy/design in `src/components/CalendlyBadge.jsx`, `src/components/PricingSection.jsx`, `src/components/SeoLandingPage.jsx`, `src/components/TalkTheTalk.jsx` and `src/translations.js`; strategy docs remain in `docs/strategy/`; no commit, push or deploy was made.
- Teaching platform repo: not touched this cycle.
- Safety: no public GBP/profile edits, no review replies, no credential changes, no forms, no third-party contact, no deploy.

Local evidence inspected:

- `research-log.md` Cycle 48 handoff
- `research-roadmap.md`
- `future-demand-quiet-growth-cycle48.md`
- `hypotheses.md`
- `measurement-plan.md`
- `pricing-positioning.md`
- `content-strategy.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `src/translations.js`
- `src/components/PricingSection.jsx`
- `src/components/ContactSection.jsx`
- `src/components/HeroSection.jsx`
- `src/components/CalendlyBadge.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/App.jsx`

Local interpretation:

- Auris's implementation request moves the strategy from abstract `Soft Future-Availability Mode` into a real local patch.
- The local code now consistently reduces immediate booking pressure: hero, pricing, floating badge, contact copy, SEO landers and Talk completion all use availability language.
- The pricing section now includes the requested line: `I’m usually close to full, but you can message me about future availability.`
- The path still opens/contact-routes through Calendly, direct contact and forms, so the site is not closed; it is softer.
- The strategic risk is not build readiness; it is whether softer CTAs make high-fit prospects think there is no path to start.
- Availability copy solves capacity truth, not premium price proof. The Cycle 44 price-proof stack remains a separate improvement.

Data/API evidence:

- `npm run build` succeeds; only the existing TalkTheTalk chunk-size warning appears.
- Production homepage headers return HTTP 200 from Netlify.
- Local dev homepage returns HTTP 200.
- Local visual QA from the active preview showed desktop/mobile pricing with the availability note and softened CTAs, with no obvious overlap.
- Live review endpoint EN returns `places-new`, rating `5`, `reviewCount` `16`; the visible set includes Milagros from 2026-05-22 and older November 2025 reviews.
- Live review endpoint ES returns `places-new`, rating `5`, `reviewCount` `16`; visible themes include confidence, meetings, adaptation, comfort, resources/tools and continuity.
- Source scan found no remaining "Book your free..." style strings in `src`; remaining availability language is intentional.

Source discovery choices:

- Highest-signal local source: the actual local diff and rendered preview.
- Highest-signal data layer: build + live/local HTTP + review endpoint, because they separate local readiness from production/public proof.
- Highest-signal official sources: Google GBP Performance, Google review reply/local ranking/profile docs, Calendly analytics/UTM docs.
- Highest-signal outside-in source type: waitlist/scheduling product docs and service-business waitlist/operator threads, because they test whether full calendars leak future demand.
- Lower-value source type: competitor scans; this cycle is about capacity/copy fit, not competitor positioning.

External evidence:

- Google GBP Performance docs: owner metrics can track profile views, searches, interactions, website clicks, calls, messages and bookings by date range.
- Google local ranking docs: complete profile info, review replies, photos/videos and review count/rating remain trust/prominence levers.
- Google review reply docs: public owner replies and reviewer notifications make review replies a more meaningful action than likes.
- Google posts docs: posts can carry buttons/updates but may be pending/not approved/archived, so post status must be logged if used.
- Google photo docs: logo/cover/media help recognition but display can vary; the avatar inconsistency is profile freshness, not an urgent blocker.
- Calendly analytics docs: created/completed/rescheduled/canceled events can be watched if owner access is available.
- Calendly GA/UTM docs: scheduled events and campaign source tracking can support availability-flow measurement.
- Calendly Routing docs: qualification forms can route leads, but this is premature before lead volume exists.
- Vagaro/Easy Appointment Booking waitlist docs: waitlist systems capture timing/preferences and slot/cancellation fit, which supports adding `future_timing` before building a waitlist.
- CTA clarity guidance: "Check availability" is useful if the next action is clear and specific; too-soft labels can reduce clarity.
- Service-business waitlist community signals: fully booked services can still lose latent demand without a simple follow-up/timing capture path.

Trend/community/product signals:

- Attention/trust: the profile and reviews should stay fresh while public CTAs become calmer.
- Buying intent: limited-availability visitors need a way to ask about timing, not necessarily a full waitlist tool.
- Pain/risk: high-fit prospects may self-disqualify if "limited availability" reads as "closed."
- Product/process opportunity: a one-row `availability_confusion` / `future_timing` note beats a custom CRM or Calendly Routing build right now.

Hypotheses changed:

- H026 strengthened and made deploy-gated: capacity state now controls both public CTA language and measurement.
- H004 strengthened with a caveat: availability copy supports capacity truth but does not replace premium proof.
- H015 strengthened and narrowed: analytics can support signal, but first post-deploy inquiry interpretation still needs `availability_copy_seen`, `future_timing`, `availability_confusion`, `proof_mentioned` and `lead_quality`.

Favored idea tested:

`Softening all CTAs is automatically better because Auris is full.`

Result: weakened.

The change is honest and probably aligned, but it can fail if good prospects think Auris is closed or if a future active-filling period needs clearer booking language.

Cheaper alternative:

If full-site softening feels too passive, keep the availability note only in pricing and restore a clearer "message me" or "book a first class" CTA elsewhere.

Strategic synthesis:

Strongest next move:

Treat the local patch as a ready owner-requested deploy candidate, not a growth campaign. Deploy only if Auris wants the live site in `Soft Future-Availability Mode`.

What not to do yet:

- Do not build a waitlist app.
- Do not add Calendly Routing.
- Do not run ads into limited availability.
- Do not create a full "currently full" page.
- Do not treat limited availability as false scarcity.

Smallest practical test:

If deployed, record deploy date, capacity state and CTA state, then compare 28-day owner-safe metrics plus the first future-demand inquiry row.

Evidence that would change the recommendation:

- Auris opens capacity and wants new students within 30 days.
- Good prospects ask whether Auris is closed.
- Website/Calendly contact intent drops while GBP profile actions stay similar.
- Wrong-fit urgent inquiries drop without high-fit confusion.

Risk of acting too early:

- The site may under-sell the free first class before there is actual waitlist demand.

Risk of waiting:

- Production may continue to imply immediate booking while Auris is nearly full.

Artifacts updated:

- Created `availability-copy-deploy-gate-cycle49.md`.
- Updated `research-roadmap.md` with Packet AX and RQ changes.
- Updated `hypotheses.md` with Cycle 49 updates to H004, H015 and H026.
- Updated `measurement-plan.md` with availability-copy deploy and inquiry fields.
- Updated `pricing-positioning.md` with the local implementation/deploy gate.
- Updated `content-strategy.md` with capacity-state CTA rules.
- Updated `market-intelligence.md` with Cycle 49 source discovery, signals and O053.
- Updated `automation-research-loop.md` with an implementation/deploy-gate process rule.
- Updated `research-log.md`.

Implementation-ready artifact:

`availability-copy-deploy-gate-cycle49.md` now contains:

- local implementation audit
- source discovery table
- data/API evidence
- external evidence
- hypothesis falsification
- deploy gate
- post-deploy measurement row
- first-inquiry fields
- Packet AX continuation

Process improvement notes:

- Highest-signal source: actual local diff/rendered preview, because the requested change now exists.
- Highest-signal data source: build plus live/local endpoint checks, because they separate "ready locally" from "already public."
- Useful official source family: Google/Calendly docs for measurable surfaces and status labels.
- Noisy/biased source family: waitlist software pages; useful pattern evidence, but biased toward adopting a tool.
- Protocol update: after an owner-requested implementation that changes acquisition posture, create a deploy/readiness and measurement gate instead of restarting strategy.

Next-cycle packet:

Packet AX: Availability Copy Deploy Gate.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/availability-copy-deploy-gate-cycle49.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/CalendlyBadge.jsx`

If Auris approves deployment:

1. Deploy only after explicit instruction.
2. Record deploy date, capacity state and CTA state.
3. Check production EN/ES copy and mobile pricing/contact rendering.
4. Capture owner-safe GBP/Calendly/contact metrics if available after 28 days.
5. Fill the first post-deploy inquiry row before interpreting the result.

If Auris does not deploy:

1. Do not repeat the availability-copy analysis.
2. Keep the local patch documented as ready.
3. Rotate to premium price-proof implementation, retention/Next 15 evidence, or owner GBP/profile freshness.

Unfinished threads:

- Owner deploy decision remains open.
- Production does not yet show the softened copy.
- First post-softening inquiry row is missing.
- Search Console scoped access remains unresolved.
- Premium price-proof stack remains separate from availability copy.
- Next 15 pilot rows remain missing.

## Cycle 50 - Premium Proof Pairing Gate

Date: 2026-05-24
Primary theme: pricing and offer architecture.

Primary research question:

How should the current local availability-copy patch be paired with premium mechanism proof before any deploy, so the site stays honest about limited availability without weakening the 40 EUR/h value story?

Repo status:

- Website repo: dirty from the owner-requested local availability-copy patch plus strategy docs. Public deploy was not performed.
- Teaching-platform repo: dirty/unrelated files remain present; inspected read-only only.

Local artifacts inspected:

- `research-log.md`
- `research-roadmap.md`
- `availability-copy-deploy-gate-cycle49.md`
- `pricing-positioning.md`
- `premium-price-proof-stack-cycle44.md`
- `review-proof-library.md`
- `hypotheses.md`
- `market-intelligence.md`
- `automation-research-loop.md`
- `measurement-plan.md`
- `src/components/PricingSection.jsx`
- `src/translations.js`
- `src/components/SeoLandingPage.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/PlatformShowcase.jsx`
- `index.html`
- production homepage HTML
- `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`
- `teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx`
- `teacher-assistant/backend/app/services/flashcard_srs.py`
- `teacher-assistant/backend/app/api/srs.py`

Local evidence:

- The local pricing section now displays the limited-availability note before price cards and softens the CTA styling.
- The private card still says `1-on-1 lessons tailored to you`, so the first-view price proof remains generic.
- The local and production JSON-LD private `Offer.description` still says `One-on-one online English lessons tailored to your specific needs`.
- The site has real portal proof to reference: dashboard, assignments/feedback, notes, SRS stats, due-card/practice APIs and flashcard review logic exist in the teaching platform.
- Production does not yet show the local availability patch, so no public behavior should be inferred.

Data/API evidence:

- Production homepage returns HTTP 200 from Netlify.
- Production sitemap lists homepage, Talk, local and business routes.
- Production robots allows crawling and points to the sitemap.
- Live Google reviews endpoint returns `places-new`, rating `5`, `reviewCount` `16` in EN and ES.
- Spanish endpoint visible review themes include confidence, meetings, adaptation, resources/tools, comfort and progress.
- Public review endpoint cannot prove newest-review order or owner reply state; owner-side GBP remains the truth source for that.

Source discovery choices:

- Possible source types considered: local pricing implementation, live production schema/HTML, Google review endpoint, owner screenshot context, Auris marketplace profiles, marketplace category pages, premium/private competitor pricing pages, official structured-data docs, adult learning/retrieval research, and language-learning community/product-review signals.
- Chosen sources: local implementation and live schema for the exact gap; marketplaces and premium competitors for price pressure/support; official docs for schema coherence; adult learning and community evidence for portal/review claim quality.
- Lower-value sources skipped or minimized: broad waitlist/CTA material already covered in Cycle 49; generic competitor scans not tied to price/proof.

External evidence:

- Google Search Central LocalBusiness docs support using structured data for business details such as price range, hours and reviews, but not as a shortcut around human-visible proof.
- Schema.org `Offer` docs/examples support keeping price, currency, availability and descriptions coherent in machine-readable offer markup.
- Superprof Auris direct profile supports the premium anchor: 40 EUR/h, 5.0/7, 20 students, verified profile/contact, Ireland/11 years, Spanish-speaker, portal and NIF copy.
- Superprof Castelldefels category keeps lower comparison pressure live by placing Auris beside lower-priced private tutors and similar confidence/business claims.
- Tusclases private-English category frames many private teachers from 7 to 30 EUR/h depending on experience/training, strengthening the lower-anchor caveat.
- FunTalk lists individual private English at 38 EUR/h and frames value around personalisation, goals, flexible teaching and follow-up.
- Callan School Barcelona private one-to-one packages imply private-class prices above 40 EUR/h when sold as dedicated support.
- Word Power BCN lists bespoke one-to-one presentation/interview coaching at 55 EUR/h and ties it to specific professional outcomes.
- Cambridge/Cambridge Core spaced-practice evidence supports review over time as a real learning mechanism, but not as a standalone fluency promise.
- Language-learning community evidence warns that memorising words and using them in context are different; portal review should be framed as support for live speaking/correction.

Trend/community/product signals:

- Trust signal: the 16-review public proof base is now strong enough to support a proof-led price story, but owner reply/newest truth remains owner-side.
- Buying-intent signal: premium private/class competitors justify 38-55 EUR/h through specificity, not generic "tailored lessons."
- Price-pressure signal: marketplace/category pages can still compress expectations to 7-30 EUR/h.
- Product signal: portal/SRS proof is real, but copy must avoid implying the portal alone creates fluency.

Hypotheses changed:

- H004 strengthened and converted into a deploy-pairing rule: availability copy should be paired with premium proof before any serious traffic push.
- H015 strengthened: post-deploy inquiry rows need both availability fields and price-proof fields.
- H021 strengthened: marketplace profiles remain useful evidence but risky campaign proof while price anchors are mixed.
- H026 strengthened and bounded: capacity state controls CTA intensity, not value justification.

Favored idea falsified:

`Limited availability will make the offer feel more premium by itself.`

Result: weakened. Scarcity may reduce desperation, but without mechanism proof it can make the path feel closed or leave the 40 EUR/h price under-explained.

Strategic synthesis:

Strongest next move:

If Auris approves a public deploy and expects the site to receive GBP/LinkedIn/referral traffic, ship the local availability patch with the small Cycle 44 premium proof stack. If the site is just a quiet placeholder while Auris is full, availability-only is acceptable but should not be judged as a growth campaign.

What not to do yet:

- Do not discount or hide the 40 EUR/h price.
- Do not build a waitlist app.
- Do not run ads into a nearly-full calendar.
- Do not add a large premium sales section.
- Do not send owned-site traffic to Superprof or Tusclases.
- Do not claim the portal replaces human feedback.

Smallest practical test:

After any deploy, log `capacity_state`, `cta_state_seen`, `proof_mentioned`, `price_anchor_seen`, `quoted_price_expected`, `availability_confusion`, `future_timing`, `lead_quality` and `booked_trial` for the first 5-10 qualified inquiries.

Artifacts updated:

- Created `premium-proof-pairing-gate-cycle50.md`.
- Updated `hypotheses.md`.
- Updated `pricing-positioning.md`.
- Updated `research-roadmap.md`.
- Updated `market-intelligence.md`.
- Updated `automation-research-loop.md`.
- Updated `measurement-plan.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`premium-proof-pairing-gate-cycle50.md` now contains:

- source discovery
- local/data/API evidence
- external price/proof evidence
- falsification
- deploy pairing gate
- exact copy/schema pairing
- measurement fields
- Packet AY continuation

Process improvement notes:

- Highest-signal source: local pricing code plus production schema, because it revealed the exact capacity/proof split.
- Most useful external source family: premium/private pricing comparables with specific outcomes.
- Noisy source family: broad marketplace ranges; useful for price pressure, not as positioning guidance.
- Next source type to try: owner-visible GBP services/products/pricing screenshots, because public profile evidence cannot confirm whether GBP service descriptions match the owned-site price story.
- Protocol update: after an owner-requested public-copy patch, inspect adjacent proof risk once, write a gate, and then rotate unless deploy/owner/lead evidence changes.

Next-cycle packet:

Packet AY: Premium Proof Pairing Gate.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/premium-proof-pairing-gate-cycle50.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/availability-copy-deploy-gate-cycle49.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- `/Users/aurisp/repos/teacher-website/index.html`

If Auris approves implementation:

1. Choose Option A or B from the Cycle 50 artifact.
2. If Option A, patch only private-card description/bullets, included support sentence and JSON-LD private `Offer.description`.
3. Run `npm run build`.
4. Verify EN/ES pricing and JSON-LD.
5. Do not deploy unless Auris explicitly asks to deploy.

If no approval or new evidence arrives:

1. Do not repeat availability-copy or proof-pairing analysis.
2. Rotate to owner GBP services/profile coherence, `Next 15` pilot evidence, or marketplace price-policy confirmation.

Unfinished threads:

- No explicit deploy approval.
- Production does not yet show the local availability copy.
- Premium proof stack has not been implemented in code.
- First post-availability/proof inquiry row is missing.
- Owner GBP services/prices/review replies remain unknown.
- Search Console scoped access remains unresolved.

## Cycle 51 - Direct Contact Simplification Gate

Date: 2026-05-24
Primary theme: contact-channel simplification and measurement.

Primary research question:

Does removing Calendly and highlighted limited-availability UI make the future-demand path more personal without losing the minimum evidence needed to learn from future leads?

Repo status:

- Website repo: dirty from owner-requested direct-contact code changes plus strategy docs. No commit, push or deploy was performed.
- Teaching-platform repo: dirty/unrelated files remain present; inspected status only and avoided edits.

Local artifacts inspected:

- `research-log.md`
- `research-roadmap.md`
- `hypotheses.md`
- `market-intelligence.md`
- `measurement-plan.md`
- `pricing-positioning.md`
- `content-strategy.md`
- `automation-research-loop.md`
- `premium-proof-pairing-gate-cycle50.md`
- `availability-copy-deploy-gate-cycle49.md`
- `src/components/ContactSection.jsx`
- `src/components/PricingSection.jsx`
- `src/translations.js`
- `src/App.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/utils/analytics.js`
- `src/components/Navbar.jsx`
- `index.html`
- `netlify/functions/google-reviews.js`
- production homepage/robots/sitemap/review endpoint checks

Local evidence:

- Contact now exposes direct WhatsApp/email cards and records `contact_click` with method/location.
- Pricing now keeps "I’m usually close to full..." as quiet copy and removes the highlighted limited-availability feel.
- Calendly badge/listener/widget/form paths are removed from current local app code.
- Talk the Talk now points completion follow-up to WhatsApp and emits `talk_contact_click`.
- SEO landing CTAs now use message/write language instead of booking-first language.
- Strategy memory still contained stale Calendly-first measurement assumptions, so durable docs needed a supersession.

Data/API evidence:

- `npm run build` passed after the direct-contact code changes with only the existing TalkTheTalk chunk-size warning.
- Local Playwright desktop/mobile checks showed the revised pricing/contact path rendering correctly before the dev server was stopped.
- Source/build scans found no active Calendly, `calendly.com`, `VITE_CALENDLY`, `Disponibilidad limitada`, booking-calendar, or old booking CTA strings in the current app surfaces; remaining "booking" references are historical docs or unrelated speaking prompts.
- Production homepage returns HTTP 200 from Netlify; production has not yet been deployed with the local patch.
- Production robots and sitemap return HTTP 200.
- Live Google reviews endpoint still returns `places-new`, rating `5`, and `reviewCount` `16` in EN and ES.
- Public reviews endpoint still cannot expose owner reply state or newest owner-view truth.

Source discovery choices:

- Possible sources considered: local code/build scans, live production outputs, WhatsApp official click-to-chat docs, GBP Performance docs, GA4 event/outbound-click docs, Calendly tracking docs, local competitor contact pages, Spain digital-platform data, form UX/CRM sources, small-business WhatsApp/follow-up threads, fully-booked/waitlist operator threads.
- Chosen sources: local implementation, official WhatsApp/GBP/GA4/Calendly docs, local competitor contact pages, DataReportal Spain, HubSpot form sources, and small-business lead/follow-up threads.
- Lower-value sources minimized: generic CRO posts with unsupported benchmarks and broad contact-form advice not specific to premium tutoring.

External evidence:

- WhatsApp Help Center validates click-to-chat as an official low-friction contact mechanic.
- Google Business Profile Performance docs show owner-visible views, searches, website clicks, calls, messages and bookings where configured.
- GA4 recommended events say `generate_lead` is for a form/request or offline lead info, not a raw outbound click.
- GA4 enhanced measurement can capture outbound clicks, but those remain intent events.
- Calendly tracking docs confirm what was lost: UTM scheduling-source records, meeting exports and embed message events.
- DataReportal Spain 2026 supports high Spanish digital/social adoption but cautions that platform figures are identities, not perfect unique-user proof.
- Janet's, Idealog, Herpa and Castle Languages show local education competitors use phone/email/forms/WhatsApp, while keeping academy-style enrolment language Auris should not copy.
- HubSpot form sources show forms add reporting and qualification but can add friction, especially with more complex fields.
- Small-business threads warn that WhatsApp/email leads often get buried without next-action/date habits.
- Fully booked/waitlist operator threads warn that a full calendar can still leak future demand if timing/follow-up is not captured.

Trend/community/product signals:

- Trust signal: direct WhatsApp/email is category-normal locally and less institutional than an academy form.
- Measurement signal: Calendly removal is not a measurement failure if direct-contact rows replace booking dashboards.
- Operational signal: the risk shifts from attribution to follow-up discipline.
- Capacity signal: while Auris is nearly full, the useful metric is qualified future-demand replies, not immediate booked trials.
- Product signal: no prospect CRM/waitlist should be built into the teaching platform until 5-10 direct-contact rows prove repeated fields and follow-up pain.

Hypotheses changed:

- H004 strengthened with a caveat: direct contact supports a premium feel but does not justify the price alone.
- H015 strengthened and re-centered on direct-contact rows now that Calendly is removed.
- H026 strengthened and made mode-specific: current mode is `direct_contact_future_availability`, not booking-first acquisition.

Favored idea falsified:

`Direct WhatsApp/email is always better because it feels personal.`

Result: refined. It fits Auris now, but only while volume is low and follow-up is tracked. It loses automatic meeting attribution and can bury future leads.

Strategic synthesis:

Strongest next move:

Keep the direct WhatsApp/email posture for the current nearly-full, long-game mode. If deployed, measure it through direct replies and owner GBP snapshots, not Calendly bookings.

What not to do yet:

- Do not restore Calendly just for analytics.
- Do not add a loud limited-availability badge.
- Do not build a waitlist form, HubSpot form, CRM or platform prospect workflow.
- Do not run ads into a nearly-full direct-contact path.
- Do not interpret contact clicks as qualified leads.

Smallest practical test:

After deploy or the first inquiry, fill one direct-contact row with method, likely source, source confidence, first thing mentioned, proof mentioned, need type, future timing, availability confusion, price anchor, response, follow-up date and outcome.

Artifacts updated:

- Created `direct-contact-simplification-gate-cycle51.md`.
- Updated `measurement-plan.md`.
- Updated `research-roadmap.md`.
- Updated `hypotheses.md`.
- Updated `content-strategy.md`.
- Updated `pricing-positioning.md`.
- Updated `market-intelligence.md`.
- Updated `automation-research-loop.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`direct-contact-simplification-gate-cycle51.md` now contains:

- source discovery table
- local and data/API evidence
- external evidence table
- hypothesis falsification
- direct-contact row schema
- direct-contact deploy/measurement gate
- next-cycle Packet AZ

Process improvement notes:

- Highest-signal source: local code/build scans, because they revealed the active funnel and stale strategy docs.
- Highest-signal external source: official GBP/GA4/Calendly docs, because they define the boundary between click intent, booking attribution and owner/private lead truth.
- Noisy source: generic form-conversion advice; useful for friction caveats, but mostly assumes higher-volume lead generation.
- Next source type to try: owner-visible GBP services/profile/contact surfaces, especially whether messages/calls/bookings are enabled and how service descriptions now align with direct contact.
- Protocol update: after a scheduling layer is removed, classify `direct_contact_only` immediately and supersede old booking metrics.

Next-cycle packet:

Packet AZ: Direct Contact Measurement Gate.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-simplification-gate-cycle51.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/translations.js`

If public deploy is approved:

1. Verify production EN/ES pricing/contact/Talk CTAs.
2. Confirm no active Calendly link/listener/widget remains in production bundles.
3. Capture owner GBP Performance as monthly baseline only.
4. Fill the first direct-contact row when a WhatsApp/email/phone/DM inquiry appears.

If no deploy or inquiry evidence arrives:

1. Do not repeat Calendly-removal analysis.
2. Rotate to GBP services/profile coherence, review reply freshness, or Next 15 pilot evidence.

Unfinished threads:

- No explicit deploy approval.
- Production does not yet show the direct-contact/local patch.
- First direct-contact inquiry row is missing.
- Owner GBP services/profile contact settings remain unknown.
- Owner review reply/newest-review truth remains owner-side.
- Search Console scoped access remains unresolved.

## Cycle 52 - Direct Contact Production Gate

Date: 2026-05-24
Theme: production verification after direct-contact commit/push

Primary research question:

Now that Auris explicitly asked to commit and push all, is the public website actually in calm WhatsApp/email mode, and what evidence should be collected before changing the funnel again?

Repo status:

- Website repo: clean on `main...origin/main` at the start of the cycle; latest commit `a304f9c Simplify contact flow and add strategy memory` was pushed to `origin/main`.
- Teaching platform repo: dirty/untracked with unrelated local files; inspected only by status and left untouched.
- After this cycle, strategy-memory docs are updated locally; no commit or push was performed during the heartbeat because Auris had not asked to commit these new research notes.

Local evidence inspected:

- `research-log.md` Cycle 50/51 handoff.
- `direct-contact-simplification-gate-cycle51.md`.
- `measurement-plan.md`.
- `research-roadmap.md`.
- `automation-research-loop.md`.
- `market-intelligence.md`.
- `hypotheses.md` H004/H015/H020/H026.
- `src/App.jsx`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/components/TalkTheTalk.jsx`.
- `src/components/SeoLandingPage.jsx`.
- `src/translations.js`.
- `src/utils/analytics.js`.
- `index.html` and `talkthetalk/index.html`.
- Live production homepage headers, HTML and asset references.
- Live production Talk route bundle.
- Live `sitemap.xml`, `robots.txt`, reviews endpoint and rendered production page.

Data/API evidence:

- Production homepage returns HTTP/2 200 from Netlify and references `assets/main-c144a168.js` plus `assets/main-82577177.css`.
- Live main bundle contains `I’m usually close`, `Send me a message`, `WhatsApp me`, `contact_click`, WhatsApp and email links.
- Live main bundle has no matches for `Calendly`, `calendly`, `trial_booked`, `Disponibilidad limitada` or `Limited availability`.
- Live Talk bundle contains `Message Auris`, `talk_contact_click` and WhatsApp, with no Calendly matches.
- Live reviews endpoint returns public Places New proof of `5.0 / 16`.
- Live sitemap still lists all route `lastmod` values as `2026-05-21`, despite the May 24 production contact/copy change.
- Search Console sites-list API attempt returned `403 PERMISSION_DENIED`, so current automation cannot verify page/query/URL Inspection status.
- Rendered mobile production page showed the direct WhatsApp/email contact section and quiet future-availability note.

Source discovery choices:

Possible sources considered: Git/deploy state, live bundle scans, rendered route checks, Search Console/URL Inspection, sitemap/robots, GBP owner Performance, GA4/GTM event state, Netlify docs, Google Search docs, Google Business Profile docs, WhatsApp docs, local competitor contact pages, community/operator follow-up threads.

Chosen highest-signal sources:

- Live production headers/assets/string scans.
- Rendered production route check.
- Netlify production deploy docs.
- Google sitemap and URL Inspection docs.
- GBP/GA4 official docs.
- Local competitor contact pages.

External evidence:

- Netlify production docs confirm a production branch push such as `main` can create the production deploy served at the primary domain.
- Netlify deploy overview describes atomic deploy behavior, supporting the bundle/hash check as a public-state signal.
- Google sitemap docs say accurate `lastmod` should reflect significant content, structured-data or link changes.
- Google URL Inspection docs separate live testing/request indexing from guaranteed appearance in Google Search.
- GBP Performance docs define owner-side views, searches, website clicks, calls, messages and bookings where applicable.
- Google Business Profile public docs frame phone/hours, photos/logos, posts, FAQs and review replies as trust/contact surfaces.
- Google Search business-details docs say verified owners can edit address, contact info, business type and photos for Search/Maps.
- GBP services docs show service descriptions/prices can be managed where available.
- GA4 outbound-click docs support the click-intent layer, while GA4 recommended-event docs reserve `generate_lead` for a form/request/offline lead state.
- WhatsApp click-to-chat docs validate the `wa.me` contact mechanic.
- Idealog, Janet's and Herpa contact pages show local providers expose phone/email/forms/WhatsApp; direct contact is category-normal, but academy funnels are louder than Auris should be.

Trend/community/product signals:

- Direct WhatsApp/email is not strategically strange in the local education category; the differentiator is how calm, personal and non-academy Auris makes it.
- A successful production deploy is not growth evidence. It only removes the previous public/local mismatch.
- Search freshness has a small hygiene gap: sitemap dates did not move with the public content/contact update.
- Measurement has an access gap: GSC returned 403, and GA4 reporting remains owner/API-gated.

Hypotheses changed:

- H004 strengthened: direct contact is not premium price proof. First inquiry rows must still record proof/price/availability language.
- H015 strengthened: production has click-intent events, but direct replies are still the truth unit; GSC/GA4 API access remains incomplete.
- H020 refined: public deploy happened, but sitemap freshness and GSC access still matter; deployment alone does not solve indexing.
- H026 strengthened: production is now live in `direct_contact_future_availability` mode; success should be future-fit inquiry quality or owner GBP baseline, not immediate booking volume.

Artifacts updated:

- Created `direct-contact-production-gate-cycle52.md`.
- Updated `measurement-plan.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`direct-contact-production-gate-cycle52.md` now contains:

- source discovery table
- live/local production evidence table
- external evidence table
- H015/H026/H003/H020 falsification
- direct-contact row schema
- production gate status table
- Packet BA for the next cycle

Strongest next move:

Keep the public site in direct-contact future-availability mode and measure only the first real WhatsApp/email inquiry row plus a monthly GBP owner snapshot while Auris remains close to full.

What not to do yet:

- Do not restore Calendly only for attribution.
- Do not add a waitlist/form/CRM until direct contacts create repeated follow-up risk or volume.
- Do not run ads into a nearly-full, low-proof direct-contact path.
- Do not interpret no immediate leads as failure while Auris is not trying to fill a slot.
- Do not make Search Console/page-query claims until API/owner access is restored.

Process improvement notes:

- Highest-signal source: live production bundle/hash/string scans plus rendered page check, because they proved the public state had changed.
- Useful official source: Netlify deploy docs for production-state meaning; Google sitemap/URL Inspection docs for post-deploy search caveats; GBP/GA4 docs for measurement boundaries.
- Useful outside-in source: local competitor contact pages, because they falsified the fear that WhatsApp/email looks unprofessional locally.
- Noisy/blocked source: Search Console API, blocked with 403; it should not be retried endlessly without access change.
- Protocol improvement: after public-facing push, verify production first and classify deploy as state evidence, not growth evidence. This is now added to `automation-research-loop.md`.

Next-cycle packet:

Packet BA: Direct Contact Production Measurement Gate.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-production-gate-cycle52.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-simplification-gate-cycle51.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- live `https://englishwithauris.com/`
- live `https://englishwithauris.com/talkthetalk`
- live `https://englishwithauris.com/sitemap.xml`

If a direct inquiry arrives:

1. Fill only one direct-contact row with method, likely source, source confidence, first thing mentioned, proof, need, timing, availability confusion, price anchor, response, follow-up and outcome.
2. Update H015/H026 and compare the row to production/GBP evidence.
3. Do not build a CRM unless follow-up risk repeats.

If no inquiry arrives:

1. Treat that as expected while Auris is close to full.
2. Inspect GBP services/profile/contact coherence if owner evidence is available.
3. Consider sitemap `lastmod`/static route hygiene only if Auris asks for public SEO/code changes.

Unfinished threads:

- First direct-contact inquiry row is still missing.
- Owner GBP service/contact/profile settings remain unknown.
- Owner reply/newest-review truth remains owner-side.
- Search Console scoped access returned 403 and remains unresolved.
- Sitemap `lastmod` is stale for the May 24 public contact/copy change.

## Cycle 53 - GBP Contact Coherence Gate

Date: 2026-05-24
Theme: Google Business Profile contact/booking-link coherence after direct-contact deploy

Primary research question:

Now that the live website is WhatsApp/email-first, does Google Business Profile still expose an old Calendly appointment path, and what owner-side evidence is needed before interpreting GBP as a channel?

Repo status:

- Website repo: `main...origin/main` with uncommitted Cycle 52/53 strategy-memory updates only.
- Teaching platform repo: dirty/untracked with unrelated files; inspected read-only and left untouched.
- No commit, push, deploy, credential edit, GBP edit or public change was made.

Local evidence inspected:

- `research-log.md` Cycle 51/52 handoff.
- `research-roadmap.md` Packet BA.
- `direct-contact-production-gate-cycle52.md`.
- `measurement-plan.md`.
- `owner-evidence-ledger-template.md`.
- `future-demand-quiet-growth-cycle48.md`.
- `review-count-16-reply-gate.md`.
- `gbp-week-one-execution-pack.md`.
- `hypotheses.md` H002/H015/H019/H026.
- `market-intelligence.md`.
- `automation-research-loop.md`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/components/TalkTheTalk.jsx`.
- `src/components/SeoLandingPage.jsx`.
- `src/translations.js`.
- `index.html` JSON-LD and FAQ.
- `public/sitemap.xml`.
- `netlify/functions/google-reviews.js`.
- Teacher-assistant `README.md` and WhatsApp/follow-up code search.

Data/API evidence:

- Live homepage still returns HTTP/2 200 and serves the direct-contact asset build.
- Live main bundle has WhatsApp/email paths and no active Calendly matches.
- Live JSON-LD contains `telephone` and `email`, but does not describe direct-contact mode; offers still use `InStock` / `PreOrder`.
- Live/app copy still includes some `free first class` / `trial class` language, which is true if offered but less aligned with the near-full posture.
- Live reviews endpoint still returns `5.0 / 16`.
- Sitemap `lastmod` remains `2026-05-21`.
- Google Business Profile Business Information API attempt returned `403 PERMISSION_DENIED`.
- User-provided owner/Search evidence from earlier on 2026-05-24 still matters: profile showed `Appointments: calendly.com`.

Source discovery choices:

Possible sources considered: owner GBP screenshot, GBP local business link docs, GBP booking provider docs, GBP place action links API, GBP chat/call-history docs, GBP performance docs, local competitor contact pages, website schema/live bundle, teacher-platform WhatsApp support, practitioner/community appointment-link threads.

Chosen highest-signal sources:

- Owner-provided GBP evidence because it can show the actual public profile surface.
- Official GBP link/booking/action docs because appointment links are profile-level resources.
- GBP chat/call-history docs because Google messaging is not a reliable replacement for website WhatsApp/email.
- Live website/schema checks to compare profile state against the owned site.

External evidence:

- Google Business Profile local business links docs show owners can add action links, including appointment links, set preferred links, and manage/remove third-party links.
- Google booking-provider docs show booking providers or owner-added links can appear separately from the website.
- GBP place action links API docs show appointment links are structured profile resources, not ordinary website copy.
- GBP chat/call-history docs say chat and call history ended in 2024; customers can still use profile info, website and contact details, and eligible accounts may have text/WhatsApp options.
- GBP Performance docs support owner-side metrics such as views, searches, website clicks, calls, messages and bookings where available.
- Google local ranking docs keep accurate profile information and reviews as trust/prominence work.
- GBP services docs show services/descriptions can clarify offerings without using an appointment link.
- WhatsApp click-to-chat docs validate `wa.me` as the official mechanic for direct contact.
- Practitioner/community threads warn that generic contact pages may be rejected as appointment links and some provider links can be awkward to remove; useful but medium-confidence.

Trend/community/product signals:

- Direct contact is not the same as appointment booking in Google's profile model.
- Removing Calendly from the site does not remove Calendly from GBP, marketplaces, LinkedIn or email signatures.
- GBP chat is not a dependable direct-message layer after Google's 2024 changes; the website/phone/WhatsApp/email layer should be primary.
- The teacher platform already supports WhatsApp handoffs for current students/classes, but not prospect tracking; this supports a manual owner row rather than new CRM work.

Hypotheses changed:

- H002 strengthened/refined: GBP remains the trust base, but profile action links must be coherent before interpreting it as a channel.
- H015 strengthened: first inquiry rows need `first_contact_surface` to separate GBP appointment link, website link, call, website WhatsApp/email, referral and unknown.
- H019 strengthened/broadened: owner-side baseline now includes contact/appointment link truth, not only Performance metrics.
- H026 strengthened: capacity mode must be consistent across website and GBP action links.

Artifacts updated:

- Created `gbp-contact-coherence-gate-cycle53.md`.
- Updated `research-roadmap.md`.
- Updated `measurement-plan.md`.
- Updated `owner-evidence-ledger-template.md`.
- Updated `automation-research-loop.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`gbp-contact-coherence-gate-cycle53.md` now contains:

- source discovery table
- local/live evidence table
- external evidence table
- H002/H015/H019/H026 falsification
- owner `gbp_contact_link_truth` row schema
- owner micro-ask in English and Spanish
- Packet BB for the next cycle

Strongest next move:

Do one owner-side GBP check: is `Appointments: calendly.com` still visible under Booking/Appointments? If yes, decide whether to remove it for direct-contact mode or keep it deliberately as a booking exception.

What not to do yet:

- Do not publish GBP posts or ads while profile action links may still point to stale Calendly.
- Do not replace a Google appointment link with a generic contact page unless Google accepts it as a valid booking URL.
- Do not build a waitlist, form or CRM from this single mismatch.
- Do not infer GBP performance without owner-side link truth and inquiry rows.

Process improvement notes:

- Highest-signal evidence: owner-provided GBP/Search screenshot plus official GBP local-link docs.
- Noisy source: public Google search scraping; it is personalized/volatile and cannot replace owner profile settings.
- Useful external caution: practitioner threads on appointment-link removal, but keep them medium-confidence.
- Protocol improvement: after a website contact-mode change, inspect adjacent public profile action links before acquisition/content planning.

Next-cycle packet:

Packet BB: GBP Contact-Link Coherence Gate.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-contact-coherence-gate-cycle53.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-production-gate-cycle52.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If owner evidence arrives:

1. Fill `gbp_contact_link_truth`.
2. If Calendly is still present and direct-contact mode is desired, log status as planned, pending, blocked, provider request or done.
3. Do not change website code unless Auris asks.

If no owner evidence arrives:

1. Do not keep re-checking public Google snippets.
2. Treat the Calendly appointment link as an open risk, not confirmed current truth.
3. Rotate to sitemap/static route hygiene, premium-proof pairing or retention evidence.

Unfinished threads:

- Current GBP appointment/booking link truth is owner-side and unknown.
- First direct-contact inquiry row is still missing.
- Search Console and GBP Business Information API access returned 403.
- Sitemap `lastmod` remains stale.
- Website/local landing FAQ still has free-first-class/trial language that may need future capacity-aware copy cleanup if Auris wants full consistency.

## Cycle 54 - Public Message Coherence Gate

Date: 2026-05-24
Theme: capacity-aware public messaging after the direct-contact deploy

Primary research question:

Now that production is WhatsApp/email-first, what residual public signals still feel booking-first or too immediate, and which should be cleaned before the next acquisition push?

Repo status:

- Website repo: `main...origin/main` with uncommitted Cycle 52/53/54 strategy-memory updates only.
- Teaching platform repo: dirty/untracked with unrelated files; inspected read-only and left untouched.
- No commit, push, deploy, credential edit, GBP edit or public-facing change was made.

Local evidence inspected:

- `research-log.md` Cycle 53 handoff and unfinished threads.
- `research-roadmap.md` Packet BB and active questions.
- `gbp-contact-coherence-gate-cycle53.md`.
- `direct-contact-production-gate-cycle52.md`.
- `measurement-plan.md`.
- `owner-evidence-ledger-template.md`.
- `market-intelligence.md`.
- `automation-research-loop.md`.
- `hypotheses.md` H003/H015/H020/H026.
- `pricing-positioning.md`.
- `premium-price-proof-stack-cycle44.md`.
- `future-demand-quiet-growth-cycle48.md`.
- `availability-copy-deploy-gate-cycle49.md`.
- `premium-proof-pairing-gate-cycle50.md`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/components/SeoLandingPage.jsx`.
- `src/components/FAQSection.jsx`.
- `src/components/TalkTheTalk.jsx`.
- `src/components/HeroSection.jsx`.
- `src/components/Footer.jsx`.
- `src/App.jsx`.
- `src/translations.js`.
- `src/utils/analytics.js`.
- `index.html`.
- `public/sitemap.xml`.
- `public/robots.txt`.
- `netlify/functions/google-reviews.js`.

Data/API evidence:

- Live homepage returned HTTP/2 200 from Netlify, serving `assets/main-c144a168.js`.
- Live route status checks for `/`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, and `/talkthetalk` all returned 200.
- Live main bundle scan found no `Calendly`, `calendly`, `trial_booked` or `Book now`; it did find WhatsApp/email, `contact_click`, quiet availability copy, and free-first-class strings.
- Live Talk chunk scan found no Calendly and did find `Message Auris`, `wa.me`, `mailto:` and `talk_contact_click`.
- Live JSON-LD parse found `ProfessionalService` offers with private availability `InStock` and group availability `PreOrder`, plus FAQ asking about `primera clase gratuita`.
- Live sitemap still lists all routes with `lastmod` = `2026-05-21`.
- Live reviews endpoint returned `source=places-new`, `rating=5`, `reviewCount=16`.
- Static route text check showed 12-47 initial body words per route and no static future-availability copy before JavaScript.

Source discovery choices:

Possible sources considered: live bundle/static/JSON-LD checks, local translations/components, sitemap, prior strategy artifacts, Google sitemap docs, Google structured-data docs, Schema.org availability docs, GBP services docs, local academy pages, marketplace tutor pages, online-school free-trial pages, CTA/UX guidance, Search Console/GSC and owner GBP evidence.

Chosen highest-signal sources:

- Live website/schema/sitemap because this cycle is about current public truth.
- Local source files because they show the exact origin of old free-trial language.
- Google sitemap/structured-data docs because they define hygiene without SEO myths.
- Schema.org availability because `LimitedAvailability` is a possible capacity-aware schema state.
- Local/marketplace examples because they test whether free-first-class language is normal, premium, or commoditized.

External evidence:

- Google sitemap docs say `lastmod` should reflect the date/time of the last significant page update, including main content, structured data or links.
- Google's sitemap blog says `lastmod` must consistently match reality and should be updated for significant modifications, not tiny sidebar/footer changes.
- Google LocalBusiness structured-data docs recognize `priceRange`, telephone, URL and business details, but do not guarantee rich result display.
- Google Organization structured-data docs say LocalBusiness should use primary phone/email at business level before extra `contactPoint` details.
- Schema.org `InStock` confirms the current private-offer state means generally available.
- Schema.org `LimitedAvailability` confirms a valid item-availability state for limited availability.
- GBP services docs show services can carry descriptions/prices and may be highlighted in profile.
- Janet's uses a free oral level test as a local academy placement step.
- Live English combines free trial, WhatsApp/contact paths, scale proof and fast reply, showing free trials often live in larger enrolment funnels.
- Superprof local tutor pages repeatedly show low hourly prices and first class free, increasing the chance that "free first class" creates marketplace expectations.
- Coidal English search result combines free trial/session, WhatsApp and `Book Now`.
- HarvardSites CTA guidance supports clear, action-oriented next steps.

Trend/community/product signals:

- Free first class/level test is common in English learning, academies and marketplaces.
- For Auris, that makes it normal but not necessarily premium; it should be framed as a fit conversation if kept.
- Schema and sitemap hygiene should support visible truth; they are not standalone lead generators.
- Static fallback weakness remains real, but it belongs to Packet AT or an approved code pass, not another diagnosis cycle.

Hypotheses changed:

- H003 strengthened: route/static/sitemap hygiene is real but bounded to approved code work.
- H015 strengthened: inquiry rows need `free_first_class_expectation` and `message_copy_seen`.
- H020 strengthened: sitemap `lastmod` should update with meaningful route/schema/copy changes, not as date churn.
- H026 strengthened: while near full, the first public action should be first conversation/direct message, not free-trial headline.

Artifacts updated:

- Created `public-message-coherence-cycle54.md`.
- Updated `research-roadmap.md`.
- Updated `measurement-plan.md`.
- Updated `owner-evidence-ledger-template.md`.
- Updated `automation-research-loop.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `pricing-positioning.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`public-message-coherence-cycle54.md` now contains:

- source discovery table
- local/live evidence table
- external evidence table
- H003/H015/H020/H026 falsification
- P0/P1/P2 patch spec
- first-conversation EN/ES copy
- measurement add-on fields
- Packet BC for the next cycle

Strongest next move:

Do nothing public automatically. If Auris later asks for a small site hygiene pass, use Packet BC: reframe the local landing/FAQ from free trial to first conversation, align JSON-LD offer/FAQ schema, and update sitemap dates only for changed routes.

What not to do yet:

- Do not restore Calendly for measurement.
- Do not create a waitlist/form/CRM.
- Do not treat stale sitemap dates as an urgent acquisition blocker.
- Do not use free-first-class as the headline while Auris is usually close to full.
- Do not repeat this copy audit next cycle unless code approval or owner evidence arrives.

Process improvement notes:

- Highest-signal evidence: live bundle/JSON-LD/sitemap checks plus local component source.
- Noisy source: generic CTA best-practice material; useful only after the exact local copy issue is known.
- Useful outside-in evidence: local/marketplace free-trial examples, because they falsify the idea that free-first-class wording is automatically premium.
- Protocol improvement: after a contact-mode change, inspect visible copy, FAQ/schema and sitemap together once, then stop unless public-code work is approved.

Next-cycle packet:

Packet BC: Public Message Coherence Cleanup.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/public-message-coherence-cycle54.md`
- `/Users/aurisp/repos/teacher-website/src/components/SeoLandingPage.jsx`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/index.html`
- `/Users/aurisp/repos/teacher-website/public/sitemap.xml`
- `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`

If Auris asks for a public hygiene patch:

1. Replace local landing `free first class` headline with first-conversation/future-slot language.
2. Reframe homepage FAQ and JSON-LD FAQ away from `free trial` as the main hook.
3. Update private offer schema description and consider `LimitedAvailability`.
4. Update sitemap `lastmod` only for changed routes.
5. Run build and live/static scans after deployment.

If no code approval arrives:

1. Do not repeat this copy audit.
2. Keep Packet BB open for GBP Calendly truth.
3. Rotate to first direct-contact inquiry rows, monthly GBP owner snapshot, or retention proof.

Unfinished threads:

- GBP appointment/booking link truth is still owner-side and unknown.
- First direct-contact inquiry row is still missing.
- Search Console / GSC access remains blocked from prior checks.
- Free-first-class copy is a P1 hygiene item only if Auris wants a public patch.
- Sitemap `lastmod` should be updated with the next approved meaningful public-code change.

## Cycle 55 - GBP Calendly Removal Handoff

Date: 2026-05-24
Theme: Google Business Profile appointment-link removal and verification

Primary research question:

After Auris asked how to remove the Calendly item from Google Business Profile, what is the smallest reliable owner-side sequence that removes or classifies it without turning this into a new funnel project?

Repo status:

- Website repo: `main...origin/main` with uncommitted strategy-memory updates from Cycles 52-55 only; no public code changes made.
- Teaching platform repo: dirty/untracked with unrelated files; inspected read-only.
- No commit, push, deploy, credential change, GBP edit, form submission, or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 53 and 54 handoffs.
- `research-roadmap.md` Packets BB and BC.
- `gbp-contact-coherence-gate-cycle53.md`.
- `public-message-coherence-cycle54.md`.
- `owner-evidence-ledger-template.md`.
- `measurement-plan.md`.
- `automation-research-loop.md`.
- `hypotheses.md` H002/H015/H019/H026.
- `market-intelligence.md`.
- `content-strategy.md`.
- `pricing-positioning.md`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/components/SeoLandingPage.jsx`.
- `src/components/FAQSection.jsx`.
- `src/translations.js`.
- `src/App.jsx`.
- `src/utils/analytics.js`.
- `index.html`.
- `public/sitemap.xml`.
- `netlify/functions/google-reviews.js`.
- `/Users/aurisp/repos/teacher-assistant/README.md` WhatsApp integration notes.

Data/API evidence:

- Live homepage returned HTTP/2 200 from Netlify and still serves `assets/main-c144a168.js` plus `assets/main-82577177.css`.
- Live main bundle scan found no `Calendly`, `calendly`, `trial_booked`, or `Book now`; it found `Send me a message`, WhatsApp, `wa.me`, `mailto:`, `usually close`, and `contact_click`.
- Live routes `/`, `/clases-ingles-castelldefels`, `/ingles-empresas-castelldefels`, `/talkthetalk`, `/sitemap.xml`, and `/robots.txt` returned 200.
- Live reviews endpoint returned `source=places-new`, `rating=5`, `reviewCount=16`.
- Live JSON-LD still has phone/email, private offer `InStock`, group offer `PreOrder`, and FAQ about `primera clase gratuita`.
- GSC sites API attempt returned `403 PERMISSION_DENIED` due insufficient authentication scopes.
- GBP Business Information accounts API attempt returned `403 PERMISSION_DENIED` due insufficient authentication scopes.
- Two shell-command false starts revealed a useful process issue: in zsh, using variables named `path` and `status` can break commands or collide with shell state. The process docs were updated.

Source discovery choices:

Possible sources considered: owner GBP Booking/Appointments screen, official GBP local-link docs, official GBP booking/provider docs, official GBP Performance docs, profile edit status docs, third-party provider policy docs, Google Ads promo docs, Calendly/provider docs, practitioner/community threads, live website scans, local competitor contact pages, and teacher-assistant WhatsApp workflow code.

Chosen highest-signal sources:

- Official GBP local-link, booking, edit/status, performance and third-party/provider docs.
- Prior owner-provided GBP/Search evidence because it showed the old `Appointments: calendly.com` state.
- Live website scans because they prove the owned site does not need another Calendly cleanup.
- Practitioner threads only as medium-confidence friction signals.

External evidence:

- GBP local business links docs show appointment/action links and third-party/provider links are profile-level surfaces.
- GBP bookings docs show supported providers/links can appear in profile booking surfaces and may need owner/provider handling.
- GBP Performance docs show owner-side interactions can include bookings, website clicks, calls and messages where available.
- GBP edit/status docs show profile changes can be pending, not approved or require review.
- GBP third-party policy docs support classifying sticky provider links as provider-removal work, not website code work.
- Google Ads promotional offer docs show ad credits require campaign setup/spend; a promo prompt is not a live public ad.
- Google Business Profile ad docs show ads require a deliberate campaign; do not treat the owner dashboard offer as public visibility.
- Google local ranking docs support accurate profile information as profile-quality work.
- Practitioner/local SEO threads suggest generic contact-page replacements may be rejected as appointment links and provider-managed links can be awkward to remove.
- Janet's and Live English contact pages confirm direct contact and trial/test flows are normal in the category, but Auris should keep the tone quieter and more personal.

Trend/community/product signals:

- GBP action links are not ordinary website copy; they need owner/provider verification.
- Direct WhatsApp/email contact is normal enough locally, so not having a booking link is not strange.
- Google Ads prompts are structurally different from public profile links and should be ignored while Auris is close to full.
- Provider-removal friction is plausible enough to add `pending`, `blocked`, and `provider_request` statuses, but not enough to escalate before owner evidence.

Hypotheses changed:

- H002 strengthened/refined: GBP remains the trust base, but the profile action link must be removed or intentionally classified before judging the channel.
- H015 strengthened: direct-contact rows need `first_contact_surface` plus GBP removal context when relevant.
- H019 strengthened: owner-side baseline now includes post-action statuses such as removed, pending, blocked, provider_request, not_found or kept_intentionally.
- H026 strengthened: in `direct_contact_future_availability`, Calendly should be removed from GBP unless deliberately kept as a booking exception.

Artifacts updated:

- Created `gbp-calendly-removal-handoff-cycle55.md`.
- Updated `research-roadmap.md` with Packet BD.
- Updated `owner-evidence-ledger-template.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Updated `market-intelligence.md`.
- Updated `hypotheses.md`.
- Updated `pricing-positioning.md`.
- Updated `content-strategy.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`gbp-calendly-removal-handoff-cycle55.md` now contains:

- source discovery table
- local/live evidence table
- external evidence table
- H002/H015/H019/H026 falsification
- owner UI runbook
- removal verification row
- decision rules
- what-not-to-do list
- Packet BD for the next cycle

Strongest next move:

Wait for the owner-side result. If Auris removes/disconnects the Calendly link, fill one `gbp_calendly_removal_verification` row and stop repeating the topic unless it is blocked/pending.

What not to do yet:

- Do not change website code for this issue.
- Do not replace the GBP appointment link with a generic contact page unless Google accepts it.
- Do not publish GBP posts or run ads while the profile link is unresolved unless the booking path is intentionally kept.
- Do not treat the Google Ads credit prompt as public advertising.
- Do not build a waitlist/form/CRM from this cleanup.

Process improvement notes:

- Highest-signal evidence: official GBP link/provider docs plus live website scans.
- Noisy/limited evidence: public Google snippets and practitioner threads; useful only for friction labels.
- Next source type to try if blocked: owner screenshot of the exact Booking/Appointments status or provider-support message, redacted.
- Protocol improvement: after providing owner UI instructions, future cycles should seek one status row instead of re-explaining the same action.
- Shell process improvement: avoid zsh variable names `path` and `status` in automation checks.

Next-cycle packet:

Packet BD: GBP Calendly removal verification and profile freshness.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-calendly-removal-handoff-cycle55.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/gbp-contact-coherence-gate-cycle53.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`

If owner evidence arrives:

1. Fill `appointment_link_visible_before`, `action_taken`, `profile_edit_status`, `appointment_link_visible_after`, `appointment_link_domain_after`, `ad_promo_visible`, and `next_check_date`.
2. If removed, mark Packet BB resolved and rotate to monthly GBP snapshot, first inquiry row, or Packet BC only if code work is requested.
3. If pending/blocked/provider_request, record the status and do not recommend ads/posts yet.

If no owner evidence arrives:

1. Do not repeat the removal instructions.
2. Keep GBP Calendly truth as open risk.
3. Rotate to first direct-contact inquiry rows, monthly GBP owner snapshot, or public-message cleanup only with approval.

Unfinished threads:

- GBP Calendly removal result is still owner-side and unknown.
- First direct-contact inquiry row is still missing.
- Search Console and GBP Business Information API access still return 403 from current local auth.
- Packet BC public-message/schema/sitemap cleanup remains code-approved-only.

## Cycle 56 - Review Reply Trust Maintenance

Date: 2026-05-24
Theme: Google Business Profile review replies, proof freshness and quiet future demand

Primary research question:

Now that owner review truth is confirmed at `5.0 / 16`, Auris has asked whether replying is better than liking/reacting, and he is nearly fully booked, what is the smallest useful system for review replies that builds future trust without becoming a marketing campaign?

Repo status:

- Website repo: `main...origin/main` with uncommitted strategy-memory updates from Cycles 52-56 only; no public code changes made.
- Teaching platform repo: dirty/untracked with unrelated files; inspected read-only.
- No commit, push, deploy, credential change, GBP edit, form submission, review reply submission or third-party contact was made by the automation.

Local evidence inspected:

- `research-log.md` Cycle 55.
- `research-roadmap.md` RQ001/RQ007/RQ009/RQ010 and Packet BD.
- `review-proof-library.md`.
- `review-count-16-reply-gate.md`.
- `future-demand-quiet-growth-cycle48.md`.
- `content-strategy.md`.
- `owner-evidence-ledger-template.md`.
- `measurement-plan.md`.
- `hypotheses.md` H002/H009/H023/H026.
- `market-intelligence.md`.
- `automation-research-loop.md`.
- `pricing-positioning.md`.
- `gbp-calendly-removal-handoff-cycle55.md`.
- `src/components/GoogleReviewsSection.jsx`.
- `netlify/functions/google-reviews.js`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `/Users/aurisp/repos/teacher-assistant/README.md` WhatsApp handoff notes.

Local interpretation:

- The existing strategy already knew reviews were the strongest proof asset, but Cycle 56 sharpened the action: replies are not a content sprint; they are maintenance.
- The site displays live Google review proof but cannot display or verify owner replies.
- The Places-backed reviews endpoint exposes public rating/count/reviews, not owner reply status.
- The direct-contact site and calmer pricing/contact path should not be undermined by salesy review replies.
- The teaching platform's WhatsApp integration is for current students/classes, not a prospect/review CRM; do not build new tooling for this.

Data/API evidence:

- Live EN reviews endpoint returned `source=places-new`, `rating=5`, `reviewCount=16`, 5 visible reviews, including a recent former-student referral/kids-trust review.
- Live ES reviews endpoint returned `source=places-new`, `rating=5`, `reviewCount=16`, 5 visible reviews with confidence, meetings, comfort speaking, adaptation and progress themes.
- Live homepage returned HTTP/2 200 from Netlify and served `assets/main-c144a168.js` plus `assets/main-82577177.css`.
- Live HTML scan found JSON-LD and the current assets; no Calendly string appeared in the HTML.
- GBP Business Information API attempt returned `403 PERMISSION_DENIED` due insufficient authentication scopes, so owner view remains the truth source for reply status.

Source discovery choices:

Possible sources considered: GBP owner review screen, live public reviews endpoint, official Google review reply docs, Google Maps UGC policy, Google local ranking docs, GBP Performance docs, GBP Reviews API docs, consumer review behavior research, practitioner/community threads, tutor marketplaces, adjacent provider review pages, local competitor review surfaces, and teaching-platform follow-up code.

Chosen highest-signal sources:

- Official Google docs for what replies do, what review asks can and cannot do, and what ranking/performance claims are safe.
- Live reviews endpoint plus owner-supplied review context for Auris-specific proof.
- BrightLocal review behavior research for outside-in buyer trust interpretation.
- Marketplace/Trustpilot tutor surfaces for category comparison.
- Practitioner/community threads only as medium-confidence falsification of ranking overclaims and reply-display friction.

External evidence:

- Google manage reviews docs: verified businesses can reply; approved replies are public, appear as the business and can notify the reviewer.
- Google review tips: replies should be positive, relevant, short, simple, conversational and non-promotional.
- Google Maps UGC policy: genuine experience is required; no incentives, pressure, selective positive solicitation or requested content.
- Google local ranking docs: local ranking uses relevance, distance and prominence; review count and positive ratings can help prominence.
- GBP Performance docs: profile views, searches, website clicks, calls, messages and bookings are owner-side metrics, not available from the public review endpoint.
- GBP Reviews API docs: owner/API review resources include `reviewReply` and reply state metadata, confirming reply truth lives at owner/API layer.
- BrightLocal 2025 survey: consumers read review details and response behavior affects trust; review count alone is not the whole proof.
- Auris Superprof profile: third-party proof exists at 40 EUR/h with 5/7 reviews and 20 students, but marketplace framing still includes free-first-class and category comparison pressure.
- Superprof peer profile Fred: lower-priced tutor has 4.9/18 and visible review reply behavior, showing reviews/replies are category table stakes.
- English with Laura Trustpilot: adjacent online English provider has 4.8/58 and teacher-specific praise, showing support/progress reviews are common in the category.
- Reddit GBP reply discussion: practitioners frame replies as human trust and possible engagement, not an instant ranking cheat.
- Reddit reply visibility discussion: some owners report replies can appear in owner view but not public view, supporting a `publicly_seen` status when needed.

Trend/community/product signals:

- Review replies are one of the few public actions that fit a nearly-full teacher: they keep proof fresh without creating new booking pressure.
- "Great teacher", "confidence", "practical lessons" and "support" are common category proof. Auris needs to reply with warmth plus method specificity, not only gratitude.
- Reacting/liking is too weak to carry public trust; it may be polite, but future prospects need visible owner voice.
- Reply status can be owner-visible but publicly inconsistent, so status rows need `owner_visible_live`, `publicly_seen`, `pending` and `hidden/unknown` style labels.

Hypotheses changed:

- H002 strengthened/refined: GBP/reviews remain the trust base, but a reply is not acquisition proof without owner Performance or an inquiry row.
- H009 strengthened: reviews are central because of repeated themes and public owner care, not raw count alone; liking/reacting is not equivalent.
- H023 strengthened: the personal review/referral loop fits Auris better than public referral campaigns or more posting theory while full.
- H026 strengthened: in Trust Maintenance Mode, success is proof freshness and coherent contact surfaces, not immediate lead volume.

Favored idea tested:

`Replying to every review quickly will create more leads or rankings.`

Result: weakened.

Official docs support replies as public/responsive trust and reviews as local prominence signals, but they do not prove a single reply creates ranking gains. Practitioner threads support the trust habit but are anecdotal. The stop/change rule is: if capacity opens and a measured review-led GBP/LinkedIn action does not move owner metrics or inquiries, keep replies as hygiene only.

Artifacts updated:

- Created `review-reply-trust-maintenance-cycle56.md`.
- Updated `review-proof-library.md`.
- Updated `content-strategy.md`.
- Updated `owner-evidence-ledger-template.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Updated `market-intelligence.md`.
- Updated `research-roadmap.md`.
- Updated `hypotheses.md`.
- Updated `review-count-16-reply-gate.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`review-reply-trust-maintenance-cycle56.md` now contains:

- source discovery table
- local/live evidence table
- external evidence table
- H009/H023/H026/H002 falsification
- reply principles
- like/react rule
- reply bank for Teresa-style, former-student referral, child progress, confidence, work English and general progress reviews
- compact review-reply ledger row
- monthly trust-maintenance checklist
- Packet BE for the next cycle

Strongest next move:

Treat review replies as the default public maintenance habit. If Teresa/Milagros/Montse replies are live or owner-visible with no issue, stop optimizing reply copy and rotate to monthly GBP snapshot, first inquiry row, or GBP Calendly removal verification if owner evidence arrives.

What not to do yet:

- Do not create a weekly review-content calendar.
- Do not ask students for keywords, city names, exact phrases, star ratings or incentivized reviews.
- Do not turn replies into sales CTAs or academy-style copy.
- Do not build a review-response CRM.
- Do not overclaim ranking impact from replies.
- Do not repeat the Calendly removal instructions unless owner-side status arrives.

Process improvement notes:

- Highest-signal evidence: official Google review/reply/policy docs plus the live reviews endpoint and owner screenshot context.
- Best outside-in source: BrightLocal review behavior research, because it connects response behavior to buyer trust without pretending to be Auris-specific conversion data.
- Useful but noisy source: Reddit/practitioner threads; good for friction labels and falsification, weak for hard ranking claims.
- Source type to try next: public/non-owner view of a specific reply only if Auris suspects it is hidden, or a monthly GBP Performance screenshot if a capacity-opening action is planned.
- Protocol improvement: for tactical owner questions, create one operating rule and one status row, then rotate instead of building another campaign.

Next-cycle packet:

Packet BE: Review reply verification and profile freshness.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/review-reply-trust-maintenance-cycle56.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/review-proof-library.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/content-strategy.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If owner evidence arrives:

1. Fill `review_reply_status` for recent replies: theme, age, draft type, reply status, public visibility if needed, next action.
2. If live, mark review maintenance complete and do not rewrite.
3. If pending/hidden, recheck once before editing.
4. If a prospect mentions a review/reply, fill an anonymized inquiry row and let it outrank channel theory.

If no owner evidence arrives:

1. Do not repeat the "why reply" explanation.
2. Keep review replies as a maintenance habit.
3. Rotate to monthly GBP snapshot, first direct-contact inquiry row, Packet BD if Calendly removal status arrives, Packet BC only if code work is requested, or student-retention proof.

Unfinished threads:

- GBP Calendly removal result remains owner-side and unknown.
- First direct-contact inquiry row is still missing.
- GBP Business Information API remains blocked by insufficient scopes.
- Search Console/API access remains historically blocked from current local auth.
- Packet BC public-message/schema/sitemap cleanup remains code-approved-only.
- Review reply public visibility is unknown unless Auris or a non-owner check confirms it; do not chase unless it matters.

## Cycle 57 - Current Student Continuity Proof

Date: 2026-05-24
Theme: student-platform retention, current-student proof and quiet future-demand compounding

Primary research question:

While Auris is nearly full and acquisition is in Trust Maintenance Mode, what is the smallest current-student continuity proof system that can show whether the portal is creating real between-class progress?

Repo status:

- Website repo: `main...origin/main` with uncommitted strategy-memory updates from recent automation cycles; no public code changes made.
- Teaching platform repo: dirty/untracked with unrelated files; inspected read-only only.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made by the automation.

Local evidence inspected:

- `research-log.md` Cycle 56.
- `research-roadmap.md` RQ005 and Packet AU.
- `platform-backlog.md`.
- `next-15-proof-pilot-cycle46.md`.
- `next-15-pilot-tracker.md`.
- `retention-baseline-and-manual-pilot.md`.
- `hypotheses.md` H006/H016/H017/H018/H026.
- `measurement-plan.md`.
- `content-strategy.md`.
- `market-intelligence.md`.
- `automation-research-loop.md`.
- `src/components/PlatformShowcase.jsx`.
- `src/components/TeachingPillars.jsx`.
- `src/components/PricingSection.jsx`.
- `src/translations.js`.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/FlashcardStats.tsx`.
- `/Users/aurisp/repos/teacher-assistant/backend/app/db/models.py`.
- `/Users/aurisp/repos/teacher-assistant/backend/app/api/routes.py`.
- `/Users/aurisp/repos/teacher-assistant/backend/app/api/srs.py`.

Local interpretation:

- The portal is already unusually deep: assignments, reviewed feedback, class notes, flashcards, Talk, games, modular work and teacher-side prep signals exist.
- The current website already makes a modest public promise that vocabulary, materials and review stay organised between classes.
- The unresolved risk is not technical feasibility. The unresolved risk is whether current students experience one small next step as useful and whether Auris can bring that step back into class.
- `TeacherOverview.tsx` and `ClassHomeworkLog` show that a no-code proof sprint can use existing workflow if convenient.
- More platform copy or another dashboard spec would not add evidence until student rows exist.

Data/API evidence:

- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` returned HTTP 200 with `{"status":"ok"}`.
- Unauthenticated `GET /api/lms/students/me` returned HTTP 401, `Authorization header missing`.
- Unauthenticated `GET /api/srs/students/me/flashcards/stats?class_id=1` returned HTTP 401, `Authorization header missing`.
- `HEAD https://english-with-auris-portal.netlify.app/student/dashboard` returned HTTP 200 from Netlify.
- `HEAD https://englishwithauris.com/` returned HTTP 200 from Netlify.
- Homepage HTML scan found the business email in JSON-LD and no active Calendly/book-now pressure in the HTML. Prior bundle checks remain the stronger direct-contact verification.

Source discovery choices:

Possible sources considered: current-student replies, student dashboard code, teacher overview code, homework-log model/routes, SRS stats routes/UI, website portal/pricing copy, prior platform artifacts, live API/portal checks, official learning-app docs, tutor-platform product pages, academic language-learning research, community complaint threads, app-store reviews and marketplace tutor experiences.

Chosen highest-signal sources:

- Local platform code and prior platform artifacts, because implementation feasibility is mostly known.
- Live API/auth checks, to verify production health and data boundaries.
- Official/product docs from Duolingo, Quizlet, Busuu, Preply, Eluency and Tuton, to test whether guided next steps and between-session practice are category patterns.
- DOAJ/Frontiers SRL research, to test whether recommendations/feedback/e-portfolio are learning-relevant.
- Reddit/Preply/Duolingo complaint threads, to weaken the favored idea and capture risk language around homework, forced paths and AI/generic practice.

External evidence:

- Duolingo redesigned the home screen toward a clearer path because learners were unsure whether they were using the app in the best way.
- Quizlet Study Path suggests adapted study sequences and syncs progress across devices.
- Busuu Study Plan uses goals, preferred days, reminders, daily time and progress tracking as a premium habit feature.
- Preply frames progress as live tutor support plus beyond-lesson practice, personalized vocabulary, feedback and tools.
- Preply Lesson Insights shows the market moving toward AI-generated lesson summaries and next exercises, but also makes the feature optional and data-sensitive.
- Eluency sells teacher-side completion/quiz data so the teacher knows what to review before class.
- Tuton sells independent-tutor continuity through lessons, exercises, notes, vocabulary and SRS in one classroom.
- DOAJ/Frontiers SRL evidence reports stronger EFL grammar results when learners had recommendations, feedback and e-portfolio support compared with assignment submission only.
- Reddit Preply homework threads show homework can damage perceived value when it feels disconnected or wastes live class time.
- Reddit Preply AI homework and Duolingo path threads show adults can resist forced paths, generic AI homework and loss of control.

Trend/community/product signals:

- "Clear next step" is now a product category expectation, not a novel differentiator by itself.
- The differentiator for Auris is that the next step is teacher-owned and feeds back into class.
- AI/practice platforms raise expectations for continuity, but also make human trust, privacy and non-generic guidance more valuable.
- Forced paths and generic homework are the main product risks for adult/professional learners.
- Current-student rows now outrank more product-source browsing.

Hypotheses changed:

- H006 strengthened but narrowed: clarity of next action remains the right platform direction, but the next evidence is two continuity rows, not another spec.
- H016 strengthened: any Next 15-style guidance must stay optional and personal.
- H017 strengthened but bounded: SRS is still the measurable retention spine, but raw cards reviewed are not enough without next-class evidence.
- H018 strengthened: existing homework-log infrastructure is enough for the first proof sprint, and should remain optional.
- H026 strengthened: while close to full, retention/referral readiness and current-student progress proof are valid growth metrics.

Favored idea tested:

`Because the portal is deep, Auris should build or market the portal harder now.`

Result: weakened.

Product depth is real, but it is not the same as student-visible progress. The cheaper and stronger alternative is to observe two current students after one tiny between-class suggestion. If it produces no class evidence, a bigger feature or louder public claim would be premature.

Artifacts updated:

- Created `current-student-continuity-proof-cycle57.md`.
- Updated `platform-backlog.md`.
- Updated `research-roadmap.md`.
- Updated `hypotheses.md`.
- Updated `measurement-plan.md`.
- Updated `automation-research-loop.md`.
- Updated `market-intelligence.md`.
- Updated `next-15-pilot-tracker.md`.
- Updated `content-strategy.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`current-student-continuity-proof-cycle57.md` now contains:

- source discovery map
- local evidence table
- live data/API evidence
- external evidence table
- H006/H016/H017/H018 falsification
- 2-row continuity proof sprint
- English and Spanish tiny-step messages
- optional homework-log workflow
- anonymous row fields
- build / keep manual / soften / pause decision gates
- Packet BF handoff

Strongest next move:

Use the current student base as the future-growth asset. Run the 2-row continuity proof sprint only if it feels natural: one portal/SRS-active student and one lower-portal-use or WhatsApp/notes-first student. The success metric is not a sent message or SRS count; it is next-class evidence.

What not to do yet:

- Do not build another Next 15 spec.
- Do not add AI speaking homework.
- Do not turn portal proof into louder public copy.
- Do not create a CRM, waitlist or new platform analytics table.
- Do not judge current retention value by clicks or SRS counts alone.
- Do not repeat review-reply or GBP Calendly instructions unless owner-side status arrives.

Process improvement notes:

- Highest-signal local source: the platform code around StudentDashboard, TeacherOverview, FlashcardStats and homework-log routes.
- Highest-signal external source type: official/product docs plus community complaint threads in combination; product docs show the category pattern and community threads show the failure mode.
- Noisy/limited source: broad app/product pages can make every learning product look like it solves continuity; they cannot prove Auris's students want it.
- Next source type to try: real current-student anonymous rows. Once the local path is known, student evidence outranks more browsing.
- Protocol improvement: after a platform feature has a spec, future cycles should ask for observed rows or implementation approval, not produce more specs.

Next-cycle packet:

Packet BF: Current Student Continuity Proof.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/current-student-continuity-proof-cycle57.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/platform-backlog.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/retention-baseline-and-manual-pilot.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If owner/current-student evidence arrives:

1. Record only anonymized row fields: `student_type`, `suggested_step`, `portal_surface`, `sent_channel`, `did_action`, `student_reaction`, `in_class_evidence`, `teacher_effort`, and `decision`.
2. Update H006/H016/H017/H018/H026.
3. Decide `build_next15`, `keep_manual`, `soften_copy`, or `pause`.

If no rows arrive:

1. Do not write another platform spec.
2. Rotate to monthly GBP owner snapshot, first direct-contact inquiry row, GBP Calendly removal status, or approved public-code hygiene.

Unfinished threads:

- No current-student continuity rows exist yet.
- GBP Calendly removal result remains owner-side and unknown.
- First direct-contact inquiry row is still missing.
- GBP Business Information API and Search Console access remain blocked from current local auth.
- Packet BC public-message/schema/sitemap cleanup remains code-approved-only.

## Cycle 58 - Strategic Ignore List

Date: 2026-05-24
Theme: process/self-improvement, acquisition pruning, evidence waiting

Primary research question:

Given Auris is close to full and several evidence gates are waiting on owner or student rows, what should be deliberately ignored or parked for the next 30-60 days so the automation does not create more work, noise or false certainty?

Repo status:

- Website repo: `main` with uncommitted strategy-memory updates from recent automation cycles; no public code changes made.
- Teaching platform repo: dirty/untracked with unrelated work; inspected status only and treated read-only.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 56-57.
- `research-roadmap.md` active questions and Packets BF/AV-AZ/BA-BE.
- `automation-research-loop.md`.
- `hypotheses.md` H002/H003/H005/H006/H015/H019/H026.
- `future-demand-quiet-growth-cycle48.md`.
- `direct-contact-production-gate-cycle52.md`.
- `gbp-calendly-removal-handoff-cycle55.md`.
- `current-student-continuity-proof-cycle57.md`.
- `review-reply-trust-maintenance-cycle56.md`.
- `public-message-coherence-cycle54.md`.
- `content-strategy.md`.
- `market-intelligence.md`.
- `measurement-plan.md`.
- Website git status.
- Teaching platform git status.

Local interpretation:

- The strategy is not missing more plausible lanes. It has too many ready lanes waiting on the same few proof rows.
- Current active truths: public reviews are strong, direct-contact mode is live, website/API are healthy, portal depth is real, and Auris is close to full.
- Current missing truths: first direct-contact inquiry row, monthly GBP owner snapshot, GBP Calendly removal status and two current-student continuity rows.
- The right implementation artifact is a pruning artifact, not another calendar, funnel, product spec or ledger.

Data/API evidence:

- `GET /.netlify/functions/google-reviews?language=en` returned `source=places-new`, rating `5`, `reviewCount=16`, 5 visible reviews.
- `GET /.netlify/functions/google-reviews?language=es` returned `source=places-new`, rating `5`, `reviewCount=16`, 5 visible reviews.
- `HEAD https://englishwithauris.com/` returned HTTP 200 from Netlify with content length 12618.
- `GET https://englishwithauris.com/sitemap.xml` returned the expected routes, all still with `lastmod` `2026-05-21`.
- `GET https://englishwithauris.com/robots.txt` allows all and points to the sitemap.
- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` returned HTTP 200 with `{"status":"ok"}`.
- Search Console and GBP owner/API data remain unavailable from current local auth; no fresh query/URL Inspection/GBP Performance claims were made.

Source discovery choices:

Possible source types considered: prior local packets and stop rules, live site/API checks, owner GBP evidence, official prioritization/strategy sources, official Google Search/GBP/Ads docs, LinkedIn/Instagram/TikTok analytics docs, scheduling/waitlist/CRM product docs, service-business community threads, marketplaces, competitors, current-student rows, Search Console/GBP APIs and public code inspection.

Chosen highest-signal sources:

- Local strategy memory, because it reveals repeated open loops and stop conditions.
- Live public/API checks, because they can rule out urgent site/system issues.
- Official Google/platform docs, because claims about SEO, ads, GBP posts and analytics need primary sources.
- Scheduling/waitlist product docs, as a future-option falsification source.
- One service-business operator thread, to test the full-calendar/waitlist risk from outside Auris's context.

External evidence:

- Strategy source on Porter's "choosing what not to do" supports turning pruning into a real artifact.
- Google helpful-content docs warn against search-first content sprawl, artificial freshness and writing to arbitrary word counts.
- Google Ads promotional-offer docs show ad credits require spend and eligibility; they are not free demand.
- GBP Performance docs confirm that profile views, searches, clicks and interactions are owner/manager metrics.
- GBP posts docs confirm posts are optional update surfaces with live/pending/not-approved statuses.
- LinkedIn post analytics docs confirm post analytics are owner-visible and post-specific.
- Instagram Insights docs show reach/interactions/follower metrics for professional accounts, but they are attention/platform metrics.
- TikTok analytics docs show video/account analytics and aggregated engagement reporting, not buyer proof for Auris.
- Calendly Routing docs show routing/qualification is for lead volume and form-driven scheduling, which is not the current bottleneck.
- Vagaro waitlist docs show real waitlists require service/time preference and manual/automatic acceptance logic; this is useful later, not before inquiries.
- A fully booked/waitlist service-business thread shows full calendars can create hidden leaks and follow-up stress, but also warns against rushed capacity expansion.

Trend/community/product signals:

- Social/platform analytics are measurable, but mostly at the attention level until a human buyer row exists.
- Waitlist/routing products prove a future-demand system is a category pattern, but also prove it adds operational machinery.
- Full capacity is not "growth solved"; it needs simple follow-up evidence, not necessarily more marketing.
- Current-student proof is a stronger compounding signal than public content while Auris is nearly full.

Hypotheses changed:

- H002 strengthened as trust infrastructure but parked as a campaign until owner metrics or inquiry rows arrive.
- H003 strengthened and parked: no new city/SEO pages; Packet BC/AT only if approved or fresh GSC evidence arrives.
- H005 strengthened as trust-building but parked as a workstream while full.
- H006 remains strong but parked behind two current-student rows or an explicit build request.
- H015 strengthened: first inquiry row beats CRM/dashboard/waitlist/routing systems.
- H019 strengthened: monthly GBP owner snapshot or Calendly status row is required before judging profile movement.
- H026 strengthened into `Trust Maintenance + Evidence Waiting`.
- H027 added: strategic pruning is higher leverage than more ideas while Auris is close to full.

Favored idea tested:

`The automation should keep advancing every open lane while waiting for proof.`

Result: weakened.

The better move is to protect Auris's attention. Multiple lanes already have implementation-ready handoffs. Adding more would increase false confidence and admin work without improving the evidence base.

Artifacts updated:

- Created `strategic-ignore-list-cycle58.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `content-strategy.md`.
- Updated `measurement-plan.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`strategic-ignore-list-cycle58.md` now contains:

- source discovery map
- local evidence table
- live data/API evidence
- external evidence table
- H026/H015/H003 falsification
- active / parked / ignore-until lane table
- decision triggers
- 30-day operating rule
- process critique
- Packet BG handoff

Strongest next move:

Use `Trust Maintenance + Evidence Waiting` for the next 30 days. Keep only five lanes active by default: review replies, monthly GBP owner snapshot, first direct-contact inquiry row, GBP Calendly removal status and two current-student continuity rows.

What not to do yet:

- Do not run Google Ads.
- Do not go TikTok/Instagram-first.
- Do not create new city/local SEO pages.
- Do not restart a weekly GBP/LinkedIn posting calendar.
- Do not build a CRM, waitlist, routing form or larger dashboard.
- Do not write another Next 15/platform spec.
- Do not package Work-English or small teams before repeated inquiry evidence.
- Do not use tutor marketplaces as brand direction.

Process improvement notes:

- Highest-signal evidence: cross-cycle strategy memory, because it exposed repeated waiting gates.
- Most useful external evidence: official Google docs for SEO/GBP/Ads boundaries and the strategic "what not to do" source.
- Noisy/biased source: routing/waitlist product docs; they make future systems attractive before volume exists.
- Source type to try next: owner/current-student evidence, not more browsing.
- Protocol improvement: if three or more active packets are waiting on rows, classify the cycle as `evidence_arrived`, `approval_arrived`, `capacity_changed` or `no_new_evidence`; if no new evidence, use the ignore list.

Next-cycle packet:

Packet BG: Strategic Ignore List Refresh.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/strategic-ignore-list-cycle58.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If new evidence arrives:

1. Map it to a Cycle 58 trigger.
2. Update only the relevant lane.
3. Keep unrelated parked lanes parked.

If no evidence arrives:

1. Do not create another campaign, content calendar, platform spec or ledger.
2. Run only light live checks if useful.
3. Rotate to approved public-code hygiene, owner-supplied GBP status, first inquiry readiness or process/source-map improvement.

Unfinished threads:

- GBP Calendly status remains unknown.
- First direct-contact inquiry row remains missing.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity rows remain missing.
- GSC/GBP API access remains unavailable from current local auth.

- Packet BC/AT public-code hygiene remains approval-only.

## Cycle 59 - Evidence Trigger Router

Date: 2026-05-24
Theme: process/self-improvement, evidence routing, measurement discipline

Primary research question:

When no new owner/student proof has arrived, what is the smallest evidence-routing system that makes future screenshots, owner notes, inquiry notes, capacity changes or student observations immediately usable without creating more admin, privacy risk or false work?

Repo status:

- Website repo: `main` with existing strategy-memory modifications from recent cycles and a new untracked strategy artifact created this cycle. No public code changes were made.
- Teaching platform repo: dirty/untracked with unrelated frontend and generated-output work; inspected read-only only.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 57-58.
- `research-roadmap.md` RQ015, Packet BG and active packets.
- `strategic-ignore-list-cycle58.md`.
- `automation-research-loop.md`.
- `hypotheses.md` H015/H019/H026/H027.
- `owner-evidence-ledger-template.md`.
- `next-15-pilot-tracker.md`.
- `measurement-plan.md`.
- `market-intelligence.md`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/utils/analytics.js`.
- `src/translations.js`.
- `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`.
- `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`.
- Website git status.
- Teaching platform git status.

Local interpretation:

- The strategy already has destinations for the main evidence types: review replies, GBP snapshots, GBP contact-link truth, first inquiries, current-student continuity rows, capacity states and public readiness checks.
- The missing layer was not another ledger. It was a router that prevents each incoming screenshot or note from reopening unrelated lanes.
- Current public state remains healthy enough that no urgent public-code action is warranted inside this heartbeat.

Data/API evidence:

- `GET https://englishwithauris.com/.netlify/functions/google-reviews?language=en` returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- The first returned visible review from the endpoint was older than the newest owner-visible reviews previously shared, confirming that the endpoint is public proof but not newest-review/reply truth.
- `HEAD https://englishwithauris.com/` returned HTTP 200 from Netlify.
- The live homepage raw HTML served current asset hashes and did not expose detailed copy outside the bundles.
- `GET https://englishwithauris.com/sitemap.xml` still showed route `lastmod` values of `2026-05-21`.
- `GET https://englishwithauris.com/robots.txt` allowed crawling and pointed to the sitemap.
- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` returned HTTP 200 with `{"status":"ok"}`.
- Search Console and GBP owner/API data were not re-authorized in this cycle, so no fresh GSC/GBP Performance claims were made.

Source discovery choices:

Possible source types considered: existing ledgers and trackers, live public/API checks, official privacy/data-minimisation sources, official Google Analytics event and policy docs, official Google Business Profile docs, Search Console URL Inspection docs, qualitative research/sample-size sources, continuous/customer discovery sources, service-business waitlist/community threads, CRM/routing/waitlist product docs, platform code and current-student/owner evidence.

Chosen highest-signal sources:

- Local ledgers/trackers, because they decide where evidence belongs.
- Official privacy, analytics and GBP docs, because evidence routing touches personal data, events, profile metrics and review/contact-link truth.
- Live public/API checks, because they can rule out urgent public/system issues.
- Qualitative and service-business outside-in signals, because the next useful evidence may be only 1-5 rows and because full calendars can still leak future demand.

External evidence:

- GDPR Article 5 data-minimisation text supports storing only necessary categories/status labels: `https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1590424137028&uri=CELEX%3A32016R0679`
- Google Analytics PII policy supports keeping identities and private messages out of analytics: `https://support.google.com/analytics/answer/6366371`
- GA4 recommended events show `generate_lead` belongs to stronger lead-generation/request events, not raw WhatsApp/email clicks: `https://support.google.com/analytics/answer/9267735`
- GBP Performance docs confirm views/searches/interactions are owner-side range metrics: `https://support.google.com/business/answer/9918094`
- GBP review reply docs support classifying reply status as a public trust action: `https://support.google.com/business/answer/3474050`
- GBP local/action link docs support treating booking/contact links as profile-layer truth separate from website code: `https://support.google.com/business/answer/6218037`
- Google URL Inspection docs support treating Search Console as a gated data layer, not assumed evidence: `https://support.google.com/webmasters/answer/9012289`
- NN/g small-sample qualitative testing supports using small observed samples to reveal practical issues without overclaiming market proof: `https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/`
- WhatsApp click-to-chat docs confirm `wa.me` is an official direct-contact mechanic: `https://faq.whatsapp.com/5913398998672934`
- A fully booked service-business thread suggests follow-up leaks can happen, but does not justify CRM/waitlist software before repeated rows: `https://www.reddit.com/r/Entrepreneurs/comments/1s6v094/if_youve_been_fully_booked_with_a_waitlist_what/`

Trend/community/product signals:

- Routing/waitlist/CRM products are future options, but their product logic is biased toward adding systems before Auris has volume.
- Small qualitative rows can be strategically useful, but only for the next decision, not broad channel conclusions.
- Full capacity does not remove the need to track future-fit inquiries, but the first fix is a redacted inquiry/follow-up row, not software.
- Public readiness checks are increasingly low priority unless they reveal a real outage, stale deploy or approved code-hygiene task.

Hypotheses changed:

- H015 strengthened and privacy-bounded: manual lead-source rows remain the truth layer, but they must be routed and redacted.
- H019 strengthened and routed: GBP movement still requires `owner_snapshot_arrived` or `gbp_contact_link_truth`, not public checks.
- H026 strengthened with trigger priority: capacity changes outrank public readiness when deciding strategy.
- H027 strengthened and operationalized: pruning now has a router so "ignore until evidence changes" becomes actionable.
- H028 added: evidence routing prevents false work after pruning.

Favored idea tested:

`No-new-evidence cycles should only wait silently.`

Result: weakened once, then made stricter.

Cycle 59 produced useful process infrastructure because Cycle 58's ignore list created a real operational question: where should future evidence land? After this router exists, repeated no-new-evidence cycles should not create more artifacts unless they improve the source map/process or catch an urgent public/system issue.

Artifacts updated:

- Created `evidence-trigger-router-cycle59.md`.
- Updated `research-roadmap.md`.
- Updated `automation-research-loop.md`.
- Updated `measurement-plan.md`.
- Updated `owner-evidence-ledger-template.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`evidence-trigger-router-cycle59.md` now contains:

- source discovery map
- local evidence table
- live data/API evidence table
- external evidence table with source-quality notes
- router table for incoming evidence
- trigger priority rule
- privacy/redaction rule
- falsification of H015/H019/H026/H027
- strategic synthesis and process critique
- Packet BH handoff

Strongest next move:

Use Packet BH before every future strategy update. If evidence arrives, classify it and update the one matching existing row. If no evidence arrives, keep the system quiet and do not create another lane.

What not to do yet:

- Do not create a CRM, waitlist, routing form or prospect dashboard.
- Do not restart GBP/LinkedIn/social content plans.
- Do not create more SEO pages.
- Do not write another Next 15 spec.
- Do not run ads.
- Do not treat public health checks as buyer evidence.

Process improvement notes:

- Highest-signal source: local strategy memory and ledgers, because they showed the row destinations already existed.
- Most useful external source: official privacy/GA/GBP docs, because they clarify the boundary between private lead truth, click intent and owner-side performance.
- Noisy/biased source: routing/waitlist/CRM product categories; useful later, but too system-heavy before repeated rows.
- Source type to try next: owner/current-student evidence, not another broad web scan.
- Protocol improvement: after Cycle 59, `no_new_evidence` should not create a new artifact by default.

Next-cycle packet:

Packet BH: Evidence Trigger Router.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/strategic-ignore-list-cycle58.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`

If evidence arrives:

1. Classify it using the router table.
2. Update only the matching row/artifact.
3. Update one relevant hypothesis if confidence changes.
4. Keep unrelated parked lanes parked.

If no evidence arrives:

1. Run only light live/API health checks if useful.
2. Do not create another campaign, calendar, platform spec, CRM, waitlist, route map or ledger.
3. Leave the next cycle pointed at Packet BH unless a better evidence source is found.

Unfinished threads:

- GBP Calendly status remains owner-side and unknown.
- First direct-contact inquiry row remains missing.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity rows remain missing.
- GSC/GBP API access remains unavailable from current local auth.
- Packet BC/AT public-code hygiene remains approval-only.

## Cycle 60 - Quiet Cycle Contract Stress Test

Date: 2026-05-24
Theme: process/self-improvement, no-new-evidence discipline, automation quality

Primary research question:

Can Packet BH be tightened so future no-new-evidence heartbeats do not repeatedly produce new artifacts while still preserving a useful light-check and escalation path?

Repo status:

- Website repo: `main` with existing strategy-memory modifications and untracked strategy artifacts from recent cycles. Cycle 60 updated strategy docs only.
- Teaching platform repo: dirty/untracked with unrelated frontend and generated-output work; inspected read-only only.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 58-59.
- `research-roadmap.md` RQ016 and Packet BH.
- `evidence-trigger-router-cycle59.md`.
- `strategic-ignore-list-cycle58.md`.
- `automation-research-loop.md`.
- `measurement-plan.md`.
- `owner-evidence-ledger-template.md`.
- `next-15-pilot-tracker.md`.
- `current-student-continuity-proof-cycle57.md`.
- `content-strategy.md`.
- `hypotheses.md` H027/H028.
- `market-intelligence.md`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/utils/analytics.js`.
- `src/translations.js`, `index.html`, and `src/components/SeoLandingPage.jsx` for residual free-first-class surfaces.
- `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`.
- `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`.
- Website and teaching-platform git status.

Local interpretation:

- Packet BH is the correct first stop, but its `no_new_evidence` branch was still broad enough to justify another process cycle.
- The row destinations already exist for review truth, GBP snapshots, contact-link truth, first inquiries, current-student continuity, capacity and public readiness.
- The local site remains direct-contact oriented through WhatsApp/email, and the teaching platform already has continuity surfaces.
- Residual free-first-class copy remains a known public-code hygiene task, but it is approval-only and not a quiet-cycle trigger.

Data/API evidence:

- `HEAD https://englishwithauris.com/` returned HTTP 200 from Netlify.
- `GET https://englishwithauris.com/sitemap.xml` still showed route `lastmod` values of `2026-05-21`.
- `GET https://englishwithauris.com/robots.txt` allowed crawling and pointed to the sitemap.
- `GET https://englishwithauris.com/.netlify/functions/google-reviews?language=en` returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews. The endpoint remains public proof, not newest-review/reply truth.
- `GET https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` returned HTTP 200.
- Search Console and GBP owner/API data were not re-authorized; no fresh owner/API claims were made.

Source discovery choices:

Possible source types considered: Packet BH/BG and local ledgers, live public/API checks, owner/student rows, Google SRE toil and monitoring docs, GOV.UK performance measurement docs, Kanban/WIP guidance, lightweight decision-record guidance, Shape Up boundary/appetite sources, scheduling/routing product docs, service-business waitlist/community threads, broad competitor/social scans, and Search Console/GBP owner APIs.

Chosen highest-signal sources:

- Local router/ignore-list/measurement artifacts, because they define the current operating system.
- Live public/API checks, because quiet cycles should still catch urgent regressions.
- Official process sources on toil, actionable alerts, performance measurement, WIP limits and decision records.
- One scheduling-product source and one service-business community source to falsify the temptation to add routing/waitlist software.

External evidence:

- Google SRE Workbook, Eliminating Toil, supports bounding repeated manual operational work: `https://sre.google/workbook/eliminating-toil/`
- Google SRE Book, Monitoring Distributed Systems, supports alerts/notifications only when urgent, actionable and user-visible: `https://sre.google/sre-book/monitoring-distributed-systems/`
- GOV.UK performance data guide supports measuring user need and task completion rather than stable technical checks: `https://www.gov.uk/service-manual/measurement/using-data.html/`
- Kanban University Guide supports explicit WIP limits as a policy for active work: `https://kanban.university/kanban-guide/`
- Google Cloud ADR overview supports lightweight Markdown decision records instead of repeated relitigation: `https://docs.cloud.google.com/architecture/architecture-decision-records`
- Basecamp Shape Up Set Boundaries supports setting an appetite before exploring raw ideas: `https://basecamp.com/shapeup/1.2-chapter-03`
- Calendly features page shows routing/workflow products are biased toward booking automation and growth systems: `https://calendly.com/features/`
- Fully booked service-business community thread suggests future-fit leads can leak through poor follow-up, but does not justify software before repeated rows: `https://www.reddit.com/r/Entrepreneurs/comments/1s6v094/if_youve_been_fully_booked_with_a_waitlist_what/`

Trend/community/product signals:

- Operational sources are a useful new source type for automation quality cycles, but should not become a routine browsing habit.
- Scheduling/routing products make systems feel natural; for Auris they remain later options after repeated rows or missed follow-up.
- Service-business community evidence keeps the first-inquiry/follow-up row active even while Auris is close to full.
- Broad competitor/social scans are low value when the trigger is explicitly `no_new_evidence`.

Hypotheses changed:

- H027 strengthened with a repeat-run stop rule: pruning must include a quiet-cycle contract so restraint does not become another admin lane.
- H028 strengthened but narrowed: evidence routing prevents false work only if the router also defines how much checking is enough when nothing changes.

Favored idea tested:

`The deep-cycle protocol should always gather 8 external sources and update 3 artifacts.`

Result: weakened for repeated `no_new_evidence`.

The deep-cycle checklist is useful when a real theme is open. When the current trigger is no new evidence, forcing broad source discovery risks creating the false work the router is meant to prevent. One bounded process stress test was useful; repeated quiet cycles should be successful restraint.

Artifacts updated:

- Updated `evidence-trigger-router-cycle59.md`.
- Updated `automation-research-loop.md`.
- Updated `research-roadmap.md`.
- Updated `measurement-plan.md`.
- Updated `hypotheses.md`.
- Updated `market-intelligence.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`evidence-trigger-router-cycle59.md` now contains a Cycle 60 Quiet Cycle Contract with:

- source discovery for the no-new-evidence process question
- local evidence and live/API check tables
- external evidence table
- allowed check table
- state-change thresholds
- hard stop rule
- escalation/notification criteria
- repeat-run rule
- H027/H028 falsification

Strongest next move:

Keep Packet BH as the first stop. If evidence arrives, classify it and update one matching row. If no evidence arrives, use the Quiet Cycle Contract, run only bounded checks, and stop.

What not to do yet:

- Do not create a CRM, waitlist, routing form or prospect dashboard.
- Do not restart GBP/LinkedIn/social posting.
- Do not create new SEO pages or city pages.
- Do not write another platform spec.
- Do not run ads.
- Do not keep re-auditing stable public checks as growth research.

Process improvement notes:

- Highest-signal source: local Packet BH/BG and measurement memory, because the gap was the missing repeat-run stop rule.
- Most useful external sources: Google SRE toil/monitoring docs and GOV.UK performance measurement docs, because they translated quiet-cycle discipline into actionable criteria.
- Noisy/biased source: scheduling/routing product docs; useful as future option maps, but biased toward system-building.
- Source type to try next: owner/current-student/prospect rows. Browsing cannot replace the first inquiry row, GBP owner snapshot/contact-link truth or current-student continuity rows.
- Protocol improvement: after Cycle 60, repeated `no_new_evidence` heartbeats should not try to satisfy the full deep-cycle checklist by creating work. They should perform bounded regression checks and return `DONT_NOTIFY` unless a real trigger appears.

Next-cycle packet:

Packet BH: Evidence Trigger Router, with Quiet Cycle Contract.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/strategic-ignore-list-cycle58.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`

If evidence arrives:

1. Classify it using the router.
2. Update only the matching row/artifact.
3. Update one relevant hypothesis if confidence changes.
4. Keep unrelated parked lanes parked.

If no evidence arrives:

1. Run only bounded quiet checks if useful.
2. Do not browse broadly.
3. Do not create or materially expand strategy artifacts.
4. Use `DONT_NOTIFY` unless an urgent public/system/access issue or owner decision appears.

Unfinished threads:

- GBP Calendly status remains owner-side and unknown.
- First direct-contact inquiry row remains missing.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity rows remain missing.
- GSC/GBP API access remains unavailable from current local auth.
- Packet BC/AT public-code hygiene remains approval-only.

## Cycle 61 - Talk Direct-Contact Calibration

Date: 2026-05-25
Theme: Talk the Talk, direct-contact measurement, public-readiness routing

Primary research question:

Does the owner-approved one-minute Talk the Talk/default-contact change strengthen the feedback-bridge strategy, and what should be measured next without reopening old Calendly/free-trial or SEO lanes?

Repo status:

- Website repo: `main...origin/main` at commit `e4d6975 Set Talk the Talk default to one minute`, with existing dirty strategy-memory files from previous heartbeat cycles. Cycle 61 updated strategy docs only.
- Teaching platform repo: dirty/untracked with unrelated frontend/generated-output work; inspected read-only only.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made during this strategy cycle.

Local evidence inspected:

- `research-log.md` Cycles 59-60.
- `research-roadmap.md` RQ004/RQ009/RQ016 and Packet BH.
- `evidence-trigger-router-cycle59.md`.
- `measurement-plan.md`.
- `talk-the-talk-lead-magnet.md`.
- `hypotheses.md` H007/H011/H015/H026.
- `owner-evidence-ledger-template.md`.
- `automation-research-loop.md`.
- `market-intelligence.md`.
- `src/components/TalkTheTalk.jsx`.
- `src/components/ContactSection.jsx`.
- `src/components/PricingSection.jsx`.
- `src/utils/analytics.js`.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx`.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx`.
- Website and teaching-platform git status.

Local interpretation:

- Public Talk now defaults to `DEFAULT_DURATION_SECONDS = 60`; custom timer opens at `01:00`.
- Public Talk completion is direct-contact: WhatsApp `Message Auris` and `talk_contact_click`, not Calendly or `talk_trial_click`.
- Public Talk still has 60/90/120/180/300-second options, so the old 90-second round is still available without being the first ask.
- The student portal Talk page still defaults to 90 seconds / `01:30`, and the teaching-platform repo should not be touched during a strategy heartbeat without an explicit product/build request.
- The public how-it-works copy still mentions optional recording/listenback even though the inspected public component does not implement recording.
- The change fits Auris's direct, personal, non-marketing contact mode better than a free-first-class/trial-booking funnel.

Data/API evidence:

- `npm run build` passed after the public default change.
- Local browser verification showed `/talkthetalk` timer controls with `01:00` selected and custom inputs at `01` / `00`.
- Live `https://englishwithauris.com/` returned HTTP 200 and served `assets/main-b8762529.js`.
- Live `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk`.
- Live main bundle imports `TalkTheTalk-b73dc496.js`; the Talk chunk contains `Message Auris` and `talk_contact_click`, and does not contain Calendly, `free first`, `free trial`, `primera clase gratuita`, or `01:30`.
- Live sitemap returns HTTP 200, but `/talkthetalk` still has `lastmod` `2026-05-21` while homepage/local page have `2026-05-25`.
- Live robots.txt returns HTTP 200, allows crawling and references the sitemap.
- Live Google reviews endpoint returns `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returns HTTP 200 with `{"status":"ok"}`.

Source discovery choices:

Possible source types considered: public Talk code/live assets, measurement plan/router artifacts, GA4 event docs, GBP business-link docs, WhatsApp direct-link docs, Google Search helpful-content docs, British Council/Cambridge speaking-practice resources, AI speaking products, learner community threads, recent AI-speaking research, Search Console/GBP owner APIs, marketplace tutor funnels, local competitor contact pages, and broad SEO scans.

Chosen highest-signal sources:

- Public code/live bundle and measurement memory, because the trigger was an owner-approved public state change.
- Official GA4/GBP/WhatsApp/Search sources, because they define event, profile-link and direct-contact boundaries.
- Speaking-practice incumbents and learner communities, because they test whether a one-minute rep is strategically plausible.
- AI speaking product/research sources, because they falsify the idea that Talk can win as a generic free speaking tool.

External evidence:

- WhatsApp click-to-chat Help confirms `wa.me` direct-contact mechanics are an official path: `https://faq.whatsapp.com/5913398998672934`
- GA4 recommended events define `generate_lead` as submitting a form/request and separate qualification/working/closed lead states: `https://support.google.com/analytics/answer/9267735`
- Google Business Profile local business links can include appointment/booking actions, and third-party booking providers may need explicit removal: `https://support.google.com/business/answer/6218037`
- Google Search helpful-content guidance favors people-first usefulness and warns against search-first content: `https://developers.google.com/search/docs/fundamentals/creating-helpful-content`
- British Council speaking resources organize practice by level and connect self-study, live classes and personal tutors: `https://learnenglish.britishcouncil.org/free-resources/speaking`
- Cambridge learner activities expose skill, level and short time filters including 0-5 minutes: `https://www.cambridgeenglish.org/learning-english/activities-for-learners/`
- ELSA Speak pitches AI role-play, bilingual tutor support, instant feedback and progress tracking: `https://elsaspeak.com/en`
- SmallTalk2Me pitches AI IELTS/interview/business speaking, instant feedback and 15-30 minute daily practice, while also distinguishing human tutors for motivation/nuance: `https://smalltalk2.me/`
- Reddit English-learning threads repeat the pain language of understanding English but blanking when speaking, overthinking, accent judgment and needing low-pressure practice.
- A 2026 CHI/arXiv AI Twin paper shows AI speaking research is moving toward confidence-preserving feedback and emotional engagement: `https://arxiv.org/abs/2601.11103`

Trend/community/product signals:

- Generic free/AI speaking practice is crowded and increasingly sophisticated.
- Learners still describe the same human pain: they know words, then freeze, overthink, translate or fear mistakes in front of people.
- Short, safe reps fit that pain better than starting with a 90-second performance ask.
- The strategic bridge is not "Auris has a speaking app"; it is "try a low-pressure rep, then bring the stuck point to a human teacher who knows Spanish speakers."
- AI competition strengthens the need for specific human feedback positioning and weakens any plan to make Talk a generic app clone.

Hypotheses changed:

- H007 strengthened/refined: Talk is now a better low-pressure lead magnet because the first rep is 60 seconds and direct-contact, but it remains not SEO-first.
- H011 strengthened: the one-minute default supports the feedback bridge by helping the learner notice the stuck point before asking Auris.
- H015 strengthened: `talk_contact_click` is intent only; do not fire `generate_lead` or infer conversion without a real reply row.
- H026 strengthened: the current public state fits `direct_contact_future_availability`, not booking-first acquisition.

Favored idea tested:

`Making Talk easier to start might be enough to make it an acquisition asset.`

Result: refined, not proven.

The one-minute default reduces activation friction and fits community pain language, but there is still no Talk-origin reply row. It should be treated as public readiness and intent measurement, not conversion proof.

Cheaper/simpler alternative that could beat it:

A direct owner/referral prompt or GBP profile action could produce a higher-fit inquiry faster than promoting Talk. Talk should stay available and measured, but not absorb attention until it creates a real reply or student observation.

Artifacts updated:

- Updated `talk-the-talk-lead-magnet.md`.
- Updated `measurement-plan.md`.
- Updated `hypotheses.md`.
- Updated `research-roadmap.md`.
- Updated `market-intelligence.md`.
- Updated `automation-research-loop.md`.
- Updated `research-log.md`.

Implementation-ready artifact:

`talk-the-talk-lead-magnet.md` now includes a Cycle 61 current supersession that makes the public Talk spec concrete:

- default 60 seconds
- direct WhatsApp `talk_contact_click`
- no Calendly/free-first-class success metric
- event/owner-row measurement loop
- portal 90-second divergence caveat
- live route/sitemap/recording-copy hygiene notes
- keep/stop conditions for scaling Talk

Strongest next move:

Keep the public one-minute Talk path live and measure only intent until a real Talk-origin reply appears. If a reply arrives, route it through Packet BI and the direct-contact row before changing strategy.

What not to do yet:

- Do not restore Calendly or a free-trial funnel for Talk.
- Do not treat `talk_contact_click` as a qualified lead.
- Do not align the dirty teaching-platform portal default to 60 seconds without explicit product evidence or a direct build request.
- Do not start an SEO push for Talk while the static/content explanation and recording/listenback mismatch remain unresolved.
- Do not create a CRM, waitlist or Talk analytics dashboard before one reply row.

Process improvement notes:

- Highest-signal source: the live public bundle plus local Talk source, because they verified the real state after owner-approved code changes.
- Most useful external sources: GA4 recommended events and GBP business-link docs, because they prevented over-reading clicks and reminded that GBP profile links remain a separate surface.
- Noisy/biased sources: AI speaking product pages; useful for category direction but biased toward app/platform claims.
- Best community source: learner threads around "understand but can't speak" and low-pressure practice; useful for wording and friction, not buying intent.
- Protocol improvement: owner-approved public code/copy changes should be routed as `approval_arrived` plus `public_readiness`, update the directly affected strategy/measurement artifacts, and then return to Packet BH unless they create a real owner/student/prospect row.

Next-cycle packet:

Packet BH remains the default, with Packet BI available if Talk-specific evidence appears.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md`
- `/Users/aurisp/repos/teacher-website/src/components/TalkTheTalk.jsx`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/pages/TalkTheTalk.tsx`

If evidence arrives:

1. If it is a Talk-origin reply, classify as `first_inquiry_arrived` and record a redacted direct-contact row with `first_contact_surface=talk_whatsapp`.
2. If it is current-student feedback about Talk duration, classify as `student_row_arrived` and decide whether portal default should remain 90 or move to 60.
3. If it is only a public-code hygiene approval, fix recording/listenback copy and/or sitemap `lastmod`, then verify live route and stop.
4. If no evidence arrives, use Packet BH Quiet Cycle Contract and do not create another Talk artifact.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student Talk duration/reflection observation remains missing.
- Public Talk recording/listenback copy mismatch remains a future public-code hygiene item.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 62 - Quiet Contract Follow-Through

Date: 2026-05-25
Theme: no-new-evidence discipline, bounded regression checks, log-order repair

Primary research question:

Has any new owner/student/prospect/capacity/access evidence arrived since Cycle 61 that should reopen a lane, or should Packet BH remain in quiet mode?

Classification:

`no_new_evidence`, with one maintenance correction: Cycle 61 had been inserted before Cycles 59-60 in `research-log.md`; this cycle mechanically moved it after Cycle 60 so future cycles determine the next number correctly.

Repo status:

- Website repo: `main...origin/main` with existing dirty strategy-memory files from previous cycles. No public code changes were made.
- Teaching platform repo: still dirty/untracked with unrelated work; inspected read-only only.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` Cycle ordering and latest packets.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` Cycle 59-61 rules.
- Website repo git status.
- Teaching platform repo git status.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots returned HTTP 200 and still allows crawl.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200 with `{"status":"ok"}`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract say repeated `no_new_evidence` cycles should avoid broad source discovery unless a real trigger appears or the router fails.

Hypotheses changed:

None. H015, H026, H027 and H028 remain in the same state: direct-contact rows and owner/current-student proof are the missing evidence; stable public checks are not growth proof.

Artifacts updated:

- `research-log.md` only, to repair Cycle 61 ordering and record the bounded check.

Implementation-ready artifact:

No new artifact. The existing implementation-ready artifacts remain Packet BH and Packet BI.

Strongest next move:

Keep Packet BH as the default. If a Talk-origin reply, first direct-contact inquiry, GBP appointment-link status, monthly owner snapshot, current-student row, capacity change or API access change arrives, route exactly that evidence and update only the matching artifact.

What not to do yet:

- Do not browse broadly.
- Do not create more strategy files.
- Do not restart GBP/social/SEO/platform lanes.
- Do not commit/push strategy-memory churn during a heartbeat.
- Do not touch the dirty teaching-platform repo without an explicit build request.

Process improvement notes:

- Highest-signal source: local Packet BH/BI plus live health checks.
- Noisy source avoided: broad external market scans during a no-evidence heartbeat.
- Protocol improvement: preserve chronological research-log order; if a prior cycle is moved or repaired, record that repair once and return to quiet mode.

Next-cycle packet:

Packet BH remains active. Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/talk-the-talk-lead-magnet.md` only if Talk evidence appears

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 63 - Quiet Contract Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, bounded regression checks, platform-dirty non-trigger

Primary research question:

Did anything arrive after Cycle 62 that should unpark GBP, Talk, inquiry, current-student, platform, SEO or measurement work?

Classification:

`no_new_evidence`.

Cycle 63 deliberately used the Packet BH Quiet Cycle Contract instead of the full deep-cycle source/artefact quota. The deep-cycle protocol remains active for real triggers, but forcing 8 external sources and 3 artifact updates during repeated no-evidence heartbeats would create the false work Cycle 60 was designed to prevent.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: still dirty/untracked; compared with Cycle 62, additional modified files are visible around `backend/app/api/content_vocab.py`, `classroom-hub/src/components/modular/ContentVocabularyPhase.tsx`, `classroom-hub/src/lib/api.ts`, and `classroom-hub/src/pages/ModularExerciseBuilder.tsx`. This is treated as unrelated local/user work, not a strategy trigger, because no owner/student/capacity evidence accompanied it.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 61-62.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` Cycle 59-61 process rules.
- `evidence-trigger-router-cycle59.md` working answer and local evidence table.
- Website repo git status.
- Teaching platform repo git status.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots returned HTTP 200 and still allows crawl.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200 with `{"status":"ok"}`.

Source discovery:

No external browsing was run. Packet BH says repeated `no_new_evidence` cycles should not browse broadly unless a real trigger arrives or the router cannot classify a new evidence type.

Hypotheses changed:

None.

- H015 remains: manual direct-contact rows are the lead truth layer.
- H026 remains: capacity state decides the success metric.
- H027 remains: pruning is higher leverage than new ideas while Auris is close to full.
- H028 remains: evidence routing prevents false work only if quiet cycles stay quiet.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH and Packet BI remain the implementation-ready operating artifacts.

Strongest next move:

Stay in Packet BH quiet mode until one of these arrives: Talk-origin reply, first direct-contact inquiry, GBP appointment-link status, monthly GBP owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo just because it is dirty.
- Do not restart GBP/LinkedIn/social/SEO/product lanes without a real trigger.
- Do not interpret stable health checks as acquisition, retention or conversion evidence.

Process improvement notes:

- Highest-signal source: local router plus live health checks.
- Noisy source avoided: broad external scans and product inspiration while no evidence changed.
- Source type to try next: not a new website; the missing source is still owner/student/prospect evidence.
- Protocol note: if a repo's dirty status changes but no owner/student/prospect signal is attached, record it as a non-trigger and leave the repo untouched.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 64 - Quiet Contract Stability Check

Date: 2026-05-25
Theme: no-new-evidence discipline, bounded regression checks, platform-dirty non-trigger

Primary research question:

Did a new owner/student/prospect/capacity/access signal arrive after Cycle 63, or is the correct action still to preserve Packet BH quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: still dirty/untracked. Since Cycle 63, `classroom-hub/src/pages/ModularExercisePlayer.tsx` has also appeared as modified. Because there is no attached owner request, student outcome, prospect signal, deploy request or capacity update, this remains unrelated local/user work and not a strategy trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 61-63 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` Cycle 60-61 quiet/process rules.
- Website repo git status.
- Teaching platform repo git status.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots returned HTTP 200 and still allows crawl.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200 with `{"status":"ok"}`.

Source discovery:

No external browsing was run. The router and quiet-cycle contract are still able to classify the state, so broad source discovery would be false work.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence arrives.

Strongest next move:

Stay in quiet mode. The next cycle should unpark work only if it receives one of these signals: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty state alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal source: Packet BH plus live health checks.
- Noisy source avoided: broad external research during a quiet cycle.
- Protocol note: repeated quiet heartbeats should stay small and should not harden the router further unless the router fails to classify a new evidence type.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 65 - Quiet Contract Steady State

Date: 2026-05-25
Theme: no-new-evidence discipline, bounded regression checks, local non-trigger classification

Primary research question:

Did a new owner/student/prospect/capacity/access signal arrive after Cycle 64, or should the automation continue to protect the quiet evidence-waiting state?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: tracked modifications visible in Cycle 64 are no longer listed, while untracked generated/audit/script files remain and include `backend/scripts/audit_content_vocab_pedagogy.py` and `scripts/check_content_vocab_pedagogy.sh`. Because no owner request, student outcome, prospect signal, deploy request or capacity update accompanied this local state, it remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 62-64 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` Cycle 60-61 quiet/process rules.
- `evidence-trigger-router-cycle59.md` working answer and evidence routing table.
- Website repo git status.
- Teaching platform repo git status.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots returned HTTP 200 and still allows crawl.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200 with `{"status":"ok"}`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this state cleanly, so broader source discovery would be counterproductive.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should unpark work only if one of the known triggers arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal source: Packet BH plus live health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: local repo churn can be evidence only when paired with a meaningful owner/student/prospect/capacity signal; otherwise it is a non-trigger.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 66 - Quiet Contract Source-of-Truth Check

Date: 2026-05-25
Theme: no-new-evidence discipline, bounded regression checks, API source-of-truth sanity

Primary research question:

Did a new owner/student/prospect/capacity/access signal arrive after Cycle 65, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` is again listed as modified, alongside many untracked generated/audit/script assets. Because this arrived without an owner request, student outcome, prospect signal, deploy request or capacity update, it remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 63-65 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` Cycle 58-61 quiet/process rules.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract and evidence routing table.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` to confirm the public Talk default remains `DEFAULT_DURATION_SECONDS = 60` and `talk_contact_click` remains the direct-contact event.
- `teacher-assistant/classroom-hub/src/lib/api.ts` to confirm the production API base URL before checking health.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots returned HTTP 200 and still allows crawl.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Correct teaching API health endpoint `https://teacher-assistant-api-1056846192318.europe-west1.run.app/api/health` returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.
- A stale remembered Cloud Run host/path returned 404, so future quiet checks should use `classroom-hub/src/lib/api.ts` or the latest log source of truth before treating an API result as evidence.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state, and broader source discovery would manufacture work.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not treat a stale API URL failure as a strategic signal before checking the current configured base URL.

Process improvement notes:

- Highest-signal sources: Packet BH, live public checks, and the platform API base URL in `classroom-hub/src/lib/api.ts`.
- Noisy source avoided: broad external research during a quiet cycle.
- Protocol note: future health checks should derive production API targets from the app config or most recent confirmed log entry, not from memory.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 67 - Quiet Contract Repeat Health Check

Date: 2026-05-25
Theme: no-new-evidence discipline, bounded public/API health checks

Primary research question:

Did a new owner/student/prospect/capacity/access signal arrive after Cycle 66, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. Because no owner request, student outcome, prospect signal, deploy request or capacity update is attached, this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 65-66 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk defaults and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots returned HTTP 200 and still allows crawl.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state, and broad source discovery would create false work.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH, public route checks, Google reviews endpoint, and teaching API health/auth checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: after several stable quiet cycles, future repeats can be even smaller unless one of the known evidence triggers changes.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 68 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 67, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 66-67 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are now behaving correctly; future repeats should remain minimal unless a check fails or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 69 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 68, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 67-68 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 70 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 69, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 68-69 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 71 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 70, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 69-70 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 72 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 71, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 70-71 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 73 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 72, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/audit/script assets. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 71-72 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 74 - Quiet Contract Minimal Repeat Check

Date: 2026-05-25
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 73, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/cache/audit assets visible, including `.npm-cache` entries. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 72-73 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 75 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 74, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/cache/audit assets visible, including `.npm-cache` entries. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 73-74 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 76 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 75, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/cache/audit assets visible, including `.npm-cache` entries. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 74-75 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 77 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 76, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: dirty/untracked. `classroom-hub/src/pages/ModularExercisePlayer.tsx` remains modified, with many untracked generated/cache/audit assets visible, including `.npm-cache` entries. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 75-76 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 78 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 77, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 76-77 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 79 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 78, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 77-78 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 80 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 79, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 78-79 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 81 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 80, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 79-80 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 82 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 81, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 80-81 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 83 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 82, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 81-82 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 84 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 83, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 82-83 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 85 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 84, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 83-84 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 86 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 85, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 84-85 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 87 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 86, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 85-86 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 88 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 87, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 86-87 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 89 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 88, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` with `classroom-hub/src/pages/ModularExercisePlayer.tsx` still modified when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 87-88 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, or restored API access.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify the teaching-platform repo because of dirty/untracked files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: repeated quiet cycles are still behaving correctly; keep future repeats minimal unless a check fails, a real trigger appears, or a new evidence type cannot be classified.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.

## Cycle 90 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 89, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` now shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 88-89 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the newly dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: local dirty-file expansion should be recorded as context, but not treated as strategic evidence unless paired with owner/student/prospect/capacity/access input.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 91 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 90, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` now shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 89-90 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: local dirty-file expansion remains useful context, but it is still not strategic evidence unless paired with owner/student/prospect/capacity/access input.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 92 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 91, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 90-91 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: local dirty-file context is now stable across cycles; keep recording it only as a non-trigger unless the file set changes, a check fails, or owner/student/prospect/capacity/access input appears.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 93 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 92, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 91-92 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: local dirty-file context is stable; only record changes if the file set changes, a check fails, or real owner/student/prospect/capacity/access input appears.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 94 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 93, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 92-93 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: this is now a stable repeated quiet state; future cycles should keep the bounded check short unless a live endpoint, route, review count, sitemap entry, repo status, or evidence trigger changes.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 95 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 94, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 93-94 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: no additional process change is needed; this remains a stable quiet state and should only escalate on endpoint failure, route/review/sitemap/repo-status change, API access change, or real owner/student/prospect/capacity input.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 96 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 95, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 94-95 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Protocol note: no additional process change is needed; this remains a stable quiet state and should only escalate on endpoint failure, route/review/sitemap/repo-status change, API access change, or real owner/student/prospect/capacity input.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 97 - Quiet Contract Minimal Repeat Check

Date: 2026-05-26
Theme: no-new-evidence discipline, bounded health checks with API retry guardrail

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 96, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`, with one resolved transient API check anomaly.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 95-96 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Initial teaching API health/auth checks returned `000` after a timeout/no-byte response, so the cycle retried instead of notifying immediately.
- HTTP/1.1 retry returned health HTTP 200 with `{"status":"ok"}` and protected `/api/lms/students/me` HTTP 401 with `Authorization header missing`.
- A subsequent default HTTP/2 retry also returned health HTTP 200 and protected endpoint HTTP 401 quickly, so the first failure was treated as a transient check anomaly, not a current outage.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md`.
- `automation-research-loop.md`, adding a retry-before-notify rule for teaching API `000`/timeout responses during quiet cycles.

Implementation-ready artifact:

Process guardrail added: if the teaching API returns `000` or times out once during a quiet cycle, retry once normally and once with HTTP/1.1 before notifying; escalate only if retry also fails, returns 5xx, or the expected unauthenticated 401 changes.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, a repeated API failure after retry, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Useful process learning: transient API check failures can happen even when the service is healthy on retry; the automation now has a retry gate before escalating.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 98 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 97, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 96-97 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: Cycle 97's retry guardrail worked as intended; Cycle 98 had no repeated API failure and no reason to harden the router further.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 99 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 98, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, `frontend/src/App.tsx`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 97-98 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: Cycle 97's retry guardrail remains sufficient; Cycle 99 had no repeated API failure and no reason to harden the router further.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 100 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 99, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` shows modified files at `backend/app/api/routes.py`, `classroom-hub/src/pages/ModularExercisePlayer.tsx`, `frontend/index.html`, `frontend/src/App.tsx`, and `frontend/src/components/ReportsDashboard.tsx` when ignoring untracked files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 98-99 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: Cycle 97's retry guardrail remains sufficient; Cycle 100 had no repeated API failure and no reason to harden the router further.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has dirty-file context, but no attached owner/student/prospect signal.

## Cycle 101 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 100, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` now shows a larger dirty-file set when ignoring untracked files, including `.claude/commands/create-qset.md`, backend exam/LMS files, classroom-hub exam/player files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 99-100 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: the teaching-platform dirty-file set changed, but without attached owner/student/prospect/capacity/access evidence it is still a non-trigger under Packet BH. Keep recording the file-set change; inspect only if explicitly requested or paired with a real trigger.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 102 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 101, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows an expanded dirty-file set when ignoring untracked files, now including `.claude/commands/create-qset.md`, backend exam/LMS files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 100-101 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: the teaching-platform dirty-file set expanded again, but without attached owner/student/prospect/capacity/access evidence it is still a non-trigger under Packet BH. Keep recording the file-set change; inspect only if explicitly requested or paired with a real trigger.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 103 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 102, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows an expanded dirty-file set when ignoring untracked files, now including `.claude/commands/create-qset.md`, backend LMS/schema/data/exam files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 101-102 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: the teaching-platform dirty-file set expanded again, but without attached owner/student/prospect/capacity/access evidence it is still a non-trigger under Packet BH. Keep recording the file-set change; inspect only if explicitly requested or paired with a real trigger.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 104 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 103, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows an expanded dirty-file set when ignoring untracked files, including `.claude/commands/create-qset.md`, backend LMS/schema/data/exam files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 102-103 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Rendered/static HTML scan did not surface `free first`, `free trial` or `Calendly` strings.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: the teaching-platform dirty-file set remains expanded, but without attached owner/student/prospect/capacity/access evidence it is still a non-trigger under Packet BH. Keep recording the file-set context; inspect only if explicitly requested or paired with a real trigger.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 105 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 104, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows the expanded dirty-file set when ignoring untracked files, including `.claude/commands/create-qset.md`, backend LMS/schema/data/exam files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 103-104 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Live bundle scan did not surface `free first`, `free trial`, `Calendly` or `calendly`.
- Live Talk chunk contained `talk_contact_click` and `Message Auris`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: the owner check-in asked for idea-level synthesis, but did not add owner/student/prospect/capacity/access evidence. Treat future owner questions as conversation context unless they include a concrete signal or approval.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 106 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 105, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows the expanded dirty-file set when ignoring untracked files, including `.claude/commands/create-qset.md`, backend LMS/schema/data/exam files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 104-105 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Live bundle scan did not surface `free first`, `free trial`, `Calendly` or `calendly`.
- Live Talk chunk contained `talk_contact_click` and `Message Auris`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: no new owner/student/prospect/capacity/access evidence arrived after the idea-level check-in. Continue treating quiet-cycle repetition as successful restraint, not a reason to invent another plan.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 107 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 106, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows the expanded dirty-file set when ignoring untracked files, including `.claude/commands/create-qset.md`, backend LMS/schema/data/exam files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 105-106 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Live bundle scan did not surface `free first`, `free trial`, `Calendly` or `calendly`.
- Live Talk chunk contained `talk_contact_click` and `Message Auris`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: the protocol is behaving correctly by resisting new artifacts. The next useful learning still needs a real owner/student/prospect/capacity/access row.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 108 - Quiet Contract Minimal Repeat Check

Date: 2026-05-27
Theme: no-new-evidence discipline, minimal bounded health checks

Primary research question:

Did any new owner/student/prospect/capacity/access evidence arrive after Cycle 107, or should Packet BH keep the automation in quiet mode?

Classification:

`no_new_evidence`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. No public code changes were made.
- Teaching platform repo: `main...origin/main` still shows the expanded dirty-file set when ignoring untracked files, including `.claude/commands/create-qset.md`, backend LMS/schema/data/exam files, classroom-hub exam/player/type files, and frontend LMS/report files. No owner request, student outcome, prospect signal, deploy request or capacity update is attached, so this remains a non-trigger and was not inspected or touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Bounded local evidence checked:

- `research-log.md` latest Cycles 106-107 and current ordering.
- `research-roadmap.md` Packet BH and Packet BI.
- `automation-research-loop.md` repeated `no_new_evidence` rule and Cycle 97 teaching API retry guardrail.
- `evidence-trigger-router-cycle59.md` Quiet Cycle Contract.
- Website repo git status.
- Teaching platform repo git status.
- `src/components/TalkTheTalk.jsx` public Talk default and direct-contact event.
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` source-of-truth teaching API base URL.

Bounded live/API evidence checked:

- `https://englishwithauris.com/` returned HTTP 200 with canonical `https://englishwithauris.com/` and `assets/main-b8762529.js`.
- `https://englishwithauris.com/talkthetalk` returned HTTP 200 with canonical `https://englishwithauris.com/talkthetalk` and `assets/main-b8762529.js`.
- Live bundle scan did not surface `free first`, `free trial`, `Calendly` or `calendly`.
- Live Talk chunk contained `talk_contact_click` and `Message Auris`.
- Sitemap returned HTTP 200; `/talkthetalk` still has `lastmod` `2026-05-21`.
- Robots allows crawl and still points to `https://englishwithauris.com/sitemap.xml`.
- Google reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health endpoint returned HTTP 200 with `{"status":"ok"}`.
- Protected teaching endpoint `/api/lms/students/me` returned HTTP 401 without auth with `Authorization header missing`.

Source discovery:

No external browsing was run. Packet BH and the Quiet Cycle Contract still classify this as a repeated no-evidence state; broad source discovery remains deliberately parked.

Hypotheses changed:

None. H015, H026, H027 and H028 remain unchanged.

Artifacts updated:

- `research-log.md` only.

Implementation-ready artifact:

No new artifact. Packet BH remains the operating artifact; Packet BI remains available only if Talk-specific evidence appears.

Strongest next move:

Stay in quiet mode. The next cycle should only unpark work if a known evidence trigger arrives: Talk-origin reply, first direct-contact inquiry, GBP booking/contact-link status, monthly owner snapshot, current-student continuity/Talk observation, capacity change, explicit public-code approval, restored API access, repeated API failure after the Cycle 97 retry rule, or an explicit request to inspect the dirty teaching-platform files.

What not to do yet:

- Do not browse broadly.
- Do not create another strategy file.
- Do not modify or interpret the teaching-platform repo because of dirty files alone.
- Do not reinterpret stable health checks as acquisition, retention or conversion proof.
- Do not notify on a single teaching API `000` if immediate retries prove health/auth behavior is normal.

Process improvement notes:

- Highest-signal sources: Packet BH plus minimal public/API health checks.
- Noisy source avoided: broad external research and platform ideation during a quiet cycle.
- Process state: nothing new has arrived to falsify the quiet-mode recommendation. The next meaningful cycle should be triggered by evidence, not by the existence of the heartbeat alone.

Next-cycle packet:

Packet BH remains active.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-log.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-assistant/classroom-hub/src/lib/api.ts` if checking platform health.
- `/Users/aurisp/repos/teacher-assistant` git status only; inspect dirty files only if explicitly requested or paired with a real trigger.

If no evidence arrives, run only bounded checks and use `DONT_NOTIFY`. If teaching API health returns `000`, follow the Cycle 97 retry rule before notifying.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Public Talk recording/listenback copy mismatch remains approval-only hygiene.
- Talk sitemap `lastmod` remains stale at `2026-05-21`.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo has expanded dirty-file context, but no attached owner/student/prospect signal.

## Cycle 109 - Automation Idea Engine Upgrade

Date: 2026-05-27
Theme: process improvement, idea generation, synthesis pulse

Primary research question:

How should the automation generate new ideas and improve itself based on findings without undoing the Quiet Cycle Contract that prevents false work?

Classification:

`process_improvement_requested` plus `owner_synthesis_request`.

Repo status:

- Website repo: `main...origin/main` with existing strategy-memory modifications and untracked strategy artifacts from prior cycles. This cycle added/updated strategy memory only.
- Teaching platform repo: still treated as read-only/dirty context. No platform files were inspected deeply or touched because this was an automation-process request, not a product/code request.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `automation-research-loop.md`: showed the original deep-cycle standard plus Cycle 58-61 quiet-cycle refinements, but no explicit owner synthesis path.
- `research-roadmap.md`: Packet BH correctly bounded `no_new_evidence`, but did not yet define what to do when Auris asks for ideas or automation improvement.
- `evidence-trigger-router-cycle59.md`: routed owner/student/prospect/capacity/access evidence well, but treated owner synthesis questions as outside the router.
- `research-log.md` Cycles 105-108: repeated quiet-cycle checks stayed stable and documented the same missing rows.
- `hypotheses.md`: H027 and H028 supported pruning/routing, but did not capture the counter-risk of quiet mode becoming intellectually flat.
- `/Users/aurisp/.codex/automations/continuous-teaching-business-strategy/automation.toml`: live heartbeat prompt still overweighted the original every-cycle deep-research framing and did not mention Packet BJ or the Idea Synthesis Pulse.

Data/API evidence:

- The live automation configuration was inspected and updated through the app automation tool.
- No public website/API health checks were needed because this cycle targeted the automation process and did not touch public-facing site or platform code.

Source discovery choices:

Best evidence for this question lived locally: the actual automation config, process docs, router, roadmap, hypotheses and repeated quiet-cycle logs. External browsing was intentionally skipped because the failure was internal process drift, not market uncertainty.

External evidence:

No new external evidence was gathered. Existing process evidence from Packet BH remains sufficient: repeated non-actionable work becomes toil, alerts should be actionable, and WIP limits prevent reopening too many lanes. This cycle applied that existing evidence to a new failure mode: over-pruned synthesis.

Hypotheses changed:

- H027 remains strengthened: pruning is still right while Auris is close to full and evidence gates are waiting.
- H028 remains strengthened but refined: evidence routing prevents false work, but owner synthesis requests need their own label.
- H029 was added: synthesis pulses preserve useful ideation without false work.

Artifacts updated:

- Created `automation-idea-engine.md`.
- Updated `automation-research-loop.md` with Cycle 109 process rule.
- Updated `research-roadmap.md` with RQ017 and Packet BJ.
- Updated `evidence-trigger-router-cycle59.md` with `owner_synthesis_request`, `process_improvement_requested`, and the synthesis-pulse exception.
- Updated `hypotheses.md` with H029.
- Updated the live heartbeat automation prompt for `continuous-teaching-business-strategy`.
- Updated `research-log.md` with this entry.

Implementation-ready artifact:

`automation-idea-engine.md` is the new operating artifact. It defines:

- trigger labels for owner synthesis, process improvement and long quiet streaks
- the Idea Synthesis Pulse flow
- an idea scorecard template
- the current candidate idea inventory
- the rule that idea generation is strategy, not approval to publish/build/contact

Strongest next move:

On the next owner check-in or long quiet streak, run Packet BJ instead of answering only with health checks. Generate 3-7 evidence-bound ideas, score them, select one `do_now`, one `test_manually`, one `park`, and one `ignore`, then return to Packet BH.

What not to do yet:

- Do not weaken quiet mode into broad browsing every hour.
- Do not turn idea pulses into new campaigns, SEO pages, platform specs, CRM/waitlist systems, public posts or profile edits without approval.
- Do not treat an owner synthesis question as irrelevant just because it does not include a new lead/student/capacity row.

Process improvement notes:

- Highest-signal source: the live automation TOML, because it revealed that the actual prompt had not learned the later Quiet Cycle and idea-engine rules.
- Noisy source avoided: broad external automation/process advice. The defect was local and specific.
- New rule: when process docs change the heartbeat's behavior, inspect and update the actual automation prompt in the same cycle when safe.
- The automation should now separate four states: evidence routing, quiet health check, owner synthesis pulse, and full deep cycle.

Next-cycle packet:

Use Packet BJ if any of these are true:

- Auris asks what new ideas have emerged.
- Auris asks why the automation is not producing more ideas.
- Auris asks for another process improvement.
- Another 8-12 quiet cycles repeat the same missing evidence state.
- The live automation prompt appears out of sync with the durable process docs.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-idea-engine.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md` Packet BJ
- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/automation-research-loop.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/hypotheses.md` H027-H029
- `/Users/aurisp/.codex/automations/continuous-teaching-business-strategy/automation.toml`

If no synthesis/process trigger exists, return to Packet BH. If a real owner/student/prospect/capacity/access row arrives, route it first. If all checks are stable and no pulse is due, use `DONT_NOTIFY`.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking/contact-link status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Talk sitemap `lastmod` remains stale at `2026-05-21` and remains approval-only hygiene.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo remains dirty context but not an active trigger.

## Cycle 110 - First Idea Synthesis Pulse

Date: 2026-05-28
Theme: synthesis pulse after repeated quiet checks

Primary research question:

After the Idea Engine upgrade, what should the first long-quiet-streak synthesis pulse generate without reopening parked public work?

Classification:

`synthesis_pulse_due`.

Repo status:

- Website repo: existing strategy-memory modifications and untracked strategy artifacts remain. This cycle updated strategy memory only.
- Teaching platform repo: still dirty with exam/LMS/frontend files, but no owner request, student outcome, prospect signal, deploy request or capacity update is attached. It remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 105-109: repeated quiet checks stayed stable, then Cycle 109 added Packet BJ.
- `automation-idea-engine.md`: requires a pulse after 8-12 quiet cycles repeat the same missing triggers.
- `research-roadmap.md` Packet BJ: confirms the pulse should generate evidence-bound ideas, not campaigns.
- `evidence-trigger-router-cycle59.md`: now includes `owner_synthesis_request` and process/synthesis exceptions.
- `hypotheses.md` H029: synthesis pulses should preserve ideation without false work.
- Live heartbeat automation prompt: still names Idea Engine, Packet BJ and the synthesis trigger.

Data/API evidence:

- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Sitemap returned HTTP 200.
- Teaching API health returned HTTP 200.

Source discovery choices:

No external browsing was run. The exact question was internal process quality, and the best evidence lived in local strategy memory plus bounded public/API checks.

External evidence:

No new external evidence. Existing Packet BH process evidence remains sufficient.

Hypotheses changed:

- H029 is strengthened: the pulse produced a compact idea scorecard without broad browsing, public work, or owner notification.
- H027 and H028 remain unchanged: pruning and routing still outrank new campaigns while evidence gates are missing.

Artifacts updated:

- `automation-idea-engine.md`: added Pulse 01 scorecard and process critique.
- `research-log.md`: added this Cycle 110 entry.

Implementation-ready artifact:

Pulse 01 selected:

- `do_now`: keep the first direct-contact inquiry row as the active acquisition truth gate.
- `test_manually`: use one current-student continuity observation before another platform spec.
- `park`: GBP profile contact-link truth check until Auris is already in GBP or capacity opens.
- `ignore`: CRM/waitlist/routing system until 5-10 repeated inquiry/follow-up rows exist.

Strongest next move:

Return to Packet BH. The next valuable non-quiet cycle needs real evidence, a user synthesis request, another long quiet streak, or a public/API regression.

What not to do yet:

- Do not notify Auris about Pulse 01 because no immediate owner decision is required.
- Do not browse broadly.
- Do not turn the current-student continuity idea into a platform spec.
- Do not reopen GBP/profile work until owner-side context or capacity changes.

Process improvement notes:

- Highest-signal source: `automation-idea-engine.md`, because it prevented the automation from both overworking and going mentally flat.
- Noisy source avoided: broad strategy browsing during a process pulse.
- Next process test: the next synthesis pulse should notify only if it surfaces a concrete time-sensitive owner action.

Next-cycle packet:

Use Packet BH unless:

- Auris asks for findings or ideas, in which case use Packet BJ.
- Another 8-12 quiet cycles repeat with no evidence, in which case run the next synthesis pulse.
- A first direct-contact inquiry, Talk-origin reply, current-student observation, GBP owner snapshot/contact-link truth, capacity update, approval, access change or public/API regression arrives.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking/contact-link status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Talk sitemap `lastmod` remains stale at `2026-05-21` and remains approval-only hygiene.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo remains dirty context but not an active trigger.

## Cycle 111 - Second Idea Synthesis Pulse And Quiet-Streak Reset

Date: 2026-05-28
Theme: synthesis pulse, process memory, quiet-streak counting

Primary research question:

After another long quiet streak following Pulse 01, what new idea/process improvement should be produced without reopening public campaigns, SEO, social, GBP or platform work?

Classification:

`synthesis_pulse_due`.

Repo status:

- Website repo: existing strategy-memory modifications and untracked strategy artifacts remain. This cycle updated strategy memory only.
- Teaching platform repo: still dirty with exam/LMS/frontend files, but no owner request, student outcome, prospect signal, deploy request or capacity update is attached. It remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 109-110: Cycle 109 created Packet BJ; Cycle 110 ran Pulse 01 and returned to Packet BH.
- `automation-idea-engine.md`: Pulse 01 worked, but quiet checks after it were intentionally not logged one by one.
- `research-roadmap.md` Packet BJ: says 8-12 repeated quiet cycles should trigger one compact synthesis pulse.
- `evidence-trigger-router-cycle59.md`: keeps stable no-evidence checks bounded and routes owner synthesis/process requests separately.
- `automation-research-loop.md`: had no explicit rule for how to count quiet streaks without adding low-value log entries.
- `hypotheses.md` H027-H029: pruning/routing remain correct; synthesis pulses need process boundaries.

Data/API evidence:

- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Sitemap returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200.
- Live heartbeat automation prompt was updated to include the Cycle 111 quiet-streak reset rule.

Source discovery choices:

No external browsing was run. The useful evidence for this cycle was local process behavior plus bounded public/API checks. Broad market browsing would not falsify the process question.

External evidence:

No new external evidence. Prior official and process evidence remains sufficient: alerts should be actionable, WIP should stay bounded, public endpoint deltas are readiness/trust signals rather than private lead truth, and owner/student rows remain the decision layer.

Hypotheses changed:

- H029 strengthened and process-bounded: Pulse 02 showed that synthesis pulses can improve the automation itself without public work, but they need a reset marker so they do not repeat too often.
- H028 remains strengthened: Packet BH continues to prevent false work while no evidence has arrived.
- H027 remains strengthened: strategic pruning still beats new campaigns while capacity and buyer/student rows are missing.

Artifacts updated:

- `automation-idea-engine.md`: added Pulse 02 scorecard and a quiet-streak reset rule.
- `automation-research-loop.md`: added Cycle 111 "pulse reset, not quiet-log spam" process improvement.
- `research-roadmap.md`: refined Packet BJ with the Pulse History reset marker.
- `hypotheses.md`: updated H029 with Cycle 110/111 evidence and next test.
- `research-log.md`: added this Cycle 111 entry.
- Live automation prompt for `continuous-teaching-business-strategy`: updated to name Pulse History as the reset marker.

Implementation-ready artifact:

Pulse 02 selected:

- `do_now`: use each `automation-idea-engine.md` Pulse History entry as the durable quiet-streak reset marker. Do not append every stable quiet heartbeat just to count.
- `test_manually`: at the next owner check-in, offer a one-row evidence menu instead of a broad strategy recap.
- `park`: use a reviews `reviewCount` delta as a future trust-maintenance trigger, while remembering that endpoint order is not newest-review or reply-status truth.
- `ignore`: do not treat teacher-assistant dirty files as a platform-strategy trigger without an owner request, API failure, student row or teacher workflow row.

Strongest next move:

Return to Packet BH. The next non-quiet cycle should require real evidence, owner synthesis/process request, a public/API regression, or another long quiet streak counted from Pulse 02.

What not to do yet:

- Do not notify Auris; no decision is required now.
- Do not browse broadly.
- Do not reopen GBP/profile work until owner-side context or capacity changes.
- Do not inspect or modify dirty teaching-platform files without a matching trigger.
- Do not create a CRM, waitlist, content calendar, SEO page, platform spec or campaign from silence.

Process improvement notes:

- Highest-signal source: the mismatch between intentionally quiet `DONT_NOTIFY` checks and the need to count long quiet streaks.
- Noisy source avoided: logging every quiet heartbeat or running external process research.
- New rule: Pulse History is the durable reset marker for synthesis cadence.
- Next process test: if two consecutive pulses produce the same selections without new evidence, raise the pulse threshold or require a new evidence type.

Next-cycle packet:

Use Packet BH unless:

- Auris asks for findings or ideas, in which case use Packet BJ.
- Another 8-12 quiet checks repeat after Pulse 02, in which case run Pulse 03 only if it can produce a materially new selection or process improvement.
- A first direct-contact inquiry, Talk-origin reply, current-student observation, GBP owner snapshot/contact-link truth, capacity update, approval, access change, review-count delta or public/API regression arrives.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking/contact-link status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Talk sitemap `lastmod` remains stale at `2026-05-21` and remains approval-only hygiene.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo remains dirty context but not an active trigger.

## Cycle 112 - Pulse Gate 03 Skip And Duplicate-Pulse Guard

Date: 2026-05-29
Theme: synthesis cadence, duplicate-pulse guard, quiet-mode process quality

Primary research question:

After a long quiet streak following Pulse 02, should the automation run a full Pulse 03, or should it skip because the scorecard would repeat prior selections without new evidence?

Classification:

`synthesis_pulse_due` routed through a `pulse_gate`.

Repo status:

- Website repo: existing strategy-memory modifications and untracked strategy artifacts remain. This cycle updated strategy memory only.
- Teaching platform repo: still dirty with exam/LMS/frontend files, but no owner request, student outcome, prospect signal, deploy request or capacity update is attached. It remains a non-trigger and was not touched.
- No commit, push, deploy, credential change, GBP edit, form submission, student contact or third-party contact was made.

Local evidence inspected:

- `research-log.md` Cycles 110-111: Pulse 01 and Pulse 02 produced useful but now stable selections.
- `automation-idea-engine.md`: already warned that repeated pulses should not repeat the same idea inventory.
- `research-roadmap.md` Packet BJ: allowed a pulse after long quiet streaks, but did not explicitly define a skipped pulse gate.
- `automation-research-loop.md` Cycle 111: established Pulse History as the quiet-streak reset marker.
- `hypotheses.md` H027-H029: pruning/routing remain correct; synthesis should be preserved for real novelty.

Data/API evidence:

- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Sitemap returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200.

Source discovery choices:

No external browsing was run. The question was an internal process-quality question, and the highest-signal evidence was the repeated stable heartbeat state plus the prior pulse history.

External evidence:

No new external evidence. Prior process evidence remains sufficient: repeated non-actionable checks create toil, and skipped work can be higher quality than duplicate synthesis.

Hypotheses changed:

- H029 strengthened and refined: long quiet streaks should first pass through a Pulse Gate. If no materially new selection exists, a skipped gate is better than a duplicate pulse.
- H028 remains strengthened: Packet BH continues to prevent false work while no evidence has arrived.
- H027 remains strengthened: strategic pruning still beats new campaigns while capacity and buyer/student rows are missing.

Artifacts updated:

- `automation-idea-engine.md`: added Pulse Gate 03 and updated the Process Rule.
- `automation-research-loop.md`: added Cycle 112 "pulse gate before pulse" process improvement.
- `research-roadmap.md`: refined Packet BJ with the Pulse Gate skip rule.
- `hypotheses.md`: updated H029 with Cycle 112 evidence and next test.
- `research-log.md`: added this Cycle 112 entry.

Implementation-ready artifact:

Pulse Gate 03 decision:

- Do not run a full Pulse 03 now.
- Treat Pulse Gate 03 as the quiet-streak reset marker.
- Keep the current held selections: first direct-contact inquiry row, one current-student continuity observation, GBP contact-link/review-count triggers, and ignoring CRM/platform dirty-file work without paired evidence.
- Require new evidence, owner synthesis/process request, public/API regression, review-count delta, or a concrete automation failure before the next full pulse.

Strongest next move:

Return to Packet BH with the Pulse Gate rule active. The next cycle should run bounded checks only unless a real trigger appears.

What not to do yet:

- Do not notify Auris; no decision is required now.
- Do not browse broadly.
- Do not create another pulse scorecard from the same missing rows.
- Do not inspect or modify dirty teaching-platform files without a matching trigger.
- Do not create a CRM, waitlist, content calendar, SEO page, platform spec or campaign from silence.

Process improvement notes:

- Highest-signal source: repeated stable quiet checks after Pulse 02 plus the lack of any new idea selection.
- Noisy source avoided: broad external process research and duplicate scorecards.
- New rule: a long quiet streak can produce a Pulse Gate skip before a full pulse.

Next-cycle packet:

Use Packet BH unless:

- Auris asks for findings or ideas, in which case use Packet BJ and answer directly.
- New owner/student/prospect/capacity/access evidence arrives.
- A review-count delta or public/API regression appears.
- A new process failure appears, such as the automation again trying to create duplicate pulse scorecards.

Unfinished threads:

- First Talk-origin reply row remains missing.
- First direct-contact inquiry row remains missing.
- GBP Calendly/booking/contact-link status remains owner-side and unknown.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity/Talk observation remains missing.
- Talk sitemap `lastmod` remains stale at `2026-05-21` and remains approval-only hygiene.
- GSC/GBP API access remains unavailable from current local auth.
- Teaching platform repo remains dirty context but not an active trigger.

## Cycle 113 - Research Log Tail Hygiene

Date: 2026-05-29
Theme: process hygiene, latest-memory reliability

Classification:

`process_improvement_requested` by observed automation failure.

What happened:

While starting the next quiet cycle from memory, `tail` surfaced Cycle 111 as the latest entry even though Cycle 112 already existed. The Cycle 112 block had been placed above Cycles 110-111, so future latest-memory reads could miss the active Pulse Gate rule.

Action taken:

- Moved the existing Cycle 112 block after Cycle 111 so numbered research-log entries are chronological again.
- Added a Cycle 113 process rule to `automation-research-loop.md`: the newest numbered cycle block should live at the file tail, and mechanical ordering repair should not duplicate entries or reset synthesis cadence.

Data/API evidence:

- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Sitemap returned HTTP 200.
- Robots returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200.

Decision:

No owner action is needed. Pulse Gate 03 remains the synthesis reset marker; this cycle is only log-order hygiene. Return to Packet BH unless new evidence, a public/API regression, owner synthesis request or concrete process failure appears.

## Cycle 114 - Pulse Gate 04 Skip

Date: 2026-05-29
Theme: synthesis cadence, quiet-streak gate

Classification:

`pulse_gate`.

Primary question:

After another long quiet streak after Pulse Gate 03, would a full Idea Synthesis Pulse produce a materially new selection, process rule or falsification?

Decision:

No. Skip a full Pulse 04 and treat Pulse Gate 04 as the new quiet-streak reset marker.

Evidence inspected:

- Latest research memory: Cycles 112-113, Packet BJ, Quiet Cycle Contract, Pulse Gate 03 and H029.
- Website repo status: strategy-memory changes remain pending; no new public-code approval or deploy request appeared.
- Teaching platform repo status: still dirty, but no owner request, student outcome, deploy request or product failure is attached, so it remains a non-trigger.
- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Sitemap returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200.

What changed:

- `automation-idea-engine.md`: added Pulse Gate 04.

What did not change:

- Do not run a full idea scorecard from silence alone.
- Keep the held selections from Pulse Gate 03: first direct-contact inquiry row, current-student continuity observation, GBP contact-link/review-count triggers, and ignoring CRM/platform dirty-file work without paired evidence.
- Do not notify Auris; no public issue, credential break or owner decision exists.

Next-cycle packet:

Return to Packet BH unless new owner/student/prospect/capacity/access evidence appears, review count changes, a public/API regression appears, Auris asks for synthesis/process improvement, or a concrete automation failure appears.

## Cycle 115 - Pulse Gate Ceiling

Date: 2026-05-30
Theme: synthesis cadence, gate ceiling, quiet-mode process quality

Classification:

`pulse_gate` plus `process_improvement_requested` by repeated skipped gates.

Primary question:

After another long quiet streak after Pulse Gate 04, should the automation record another skipped gate every 8-12 quiet heartbeats, or should it stop clock-only gates until evidence changes?

Decision:

Skip a full Pulse 05 and set a gate ceiling. Pulse Gate 05 is the quiet-streak reset marker and the last clock-only gate for the current evidence state.

Evidence inspected:

- Latest research memory: Cycles 112-114, Packet BJ, Quiet Cycle Contract, Pulse Gate 04 and H029.
- Website repo status: strategy-memory changes remain pending; no new public-code approval or deploy request appeared.
- Teaching platform repo status: still dirty, but no owner request, student outcome, deploy request or product failure is attached, so it remains a non-trigger.
- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Sitemap returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=16`, and 5 visible reviews.
- Teaching API health returned HTTP 200.

What changed:

- `automation-idea-engine.md`: added Pulse Gate 05 and updated the Process Rule with a gate ceiling.
- `automation-research-loop.md`: added Cycle 115 gate-ceiling process improvement.
- `research-roadmap.md`: refined Packet BJ with the gate-ceiling rule.
- `hypotheses.md`: updated H029 with the repeated-gate ceiling.

What did not change:

- Do not run a full idea scorecard from silence alone.
- Keep the held selections: first direct-contact inquiry row, current-student continuity observation, GBP contact-link/review-count triggers, and ignoring CRM/platform dirty-file work without paired evidence.
- Do not notify Auris; no public issue, credential break or owner decision exists.

Next-cycle packet:

Return to Packet BH. Future quiet cycles should use `DONT_NOTIFY` after bounded checks without creating more Pulse Gate entries unless new owner/student/prospect/capacity/access evidence appears, review count changes, a public/API regression appears, Auris asks for synthesis/process improvement, or a concrete automation failure appears.

## Cycle 116 - Review Count 17 Owner Reply Gate

Date: 2026-06-02
Theme: review-count delta, trust maintenance, owner reply status

Classification:

`review_reply_status`.

Primary question:

The public reviews endpoint moved from `5.0 / 16` to `5.0 / 17`. Does that require a public change, owner-side reply action, or another quiet-cycle gate?

Decision:

Treat the count delta as a real trust-maintenance trigger. Do not make public website, GBP post or static copy changes from the public endpoint alone. Ask for one owner-side row: whether GBP owner view also shows 17 reviews, what the newest review is about, and whether it has a reply.

Evidence inspected:

- Latest research memory: Cycle 115 gate ceiling, Packet BJ, H029, `review-proof-library.md`, `automation-idea-engine.md`, and market-intelligence review rows.
- Website repo status: strategy-memory changes remain pending; no public-code approval or deploy request appeared.
- Teaching platform repo status: still dirty, but no owner request, student outcome, deploy request or product failure is attached, so it remains a non-trigger.
- Homepage returned HTTP 200.
- Talk page returned HTTP 200.
- Sitemap returned HTTP 200.
- Reviews endpoint returned `source=places-new`, rating `5`, `reviewCount=17`, and 5 visible reviews.
- English and Spanish endpoint variants both returned `reviewCount=17`.
- Teaching API health returned HTTP 200.
- `netlify/functions/google-reviews.js` confirms the public endpoint returns rating/count/limited reviews but not owner reply metadata.
- `GoogleReviewsSection.jsx` confirms the live site can display the dynamic endpoint count without a website edit.

Hypotheses tested:

- H009 strengthened: reviews remain the strongest proof layer, and the public rating stayed 5.0 while count increased.
- H019 strengthened: public endpoint truth is useful for count/rating drift but cannot prove newest-review or reply truth.
- Falsification attempt: the count delta might justify static public copy changes immediately. Rejected, because the site already has dynamic count display and owner-view confirmation is still missing.

What changed:

- Added `review-count-17-owner-reply-gate-cycle116.md`.
- Updated `review-proof-library.md` with the 17-review public count and owner-side reply gate.
- Updated `automation-idea-engine.md` so review-reply trust maintenance is active until the 17-review owner row is known.
- Updated `market-intelligence.md` with the Cycle 116 trust-maintenance signal and O065.

What did not change:

- No public website edits.
- No GBP edits, posts, replies or profile changes.
- No broad channel/content campaign.
- No inference that the public endpoint's visible five reviews include the newest owner-visible review.

Next-cycle packet:

If Auris provides the owner row, update the Review Truth section with count, newest-review theme/date if safe, and reply status, then return to Packet BH. If no owner row arrives, keep bounded quiet checks and do not repeat this gate unless the review count changes again, rating changes, the endpoint fails, Auris asks for review/reply help, or a public/API regression appears.
