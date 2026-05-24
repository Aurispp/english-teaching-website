# Channel Fit And Content Scan

Created: 2026-05-21 Cycle 07

Purpose: turn the broad "post more" idea into a ranked channel plan for Auris, based on local evidence, Search Console, reviews, competitor positioning, creator examples, marketplaces, and channel risk.

## Primary Question

Which real content/channel pattern should Auris test first, given his warm personal style, premium price, non-academy positioning, and limited time?

Short answer: do not go TikTok-first. Run a 2-week GBP plus LinkedIn plus one short-form reuse ladder around the Work-English Confidence Loop. Use Instagram/TikTok as a lightweight format test, not the center of the growth strategy. Keep marketplaces as proof and high-intent fallback, but do not let their pricing norms define the brand.

## Source Discovery

Before browsing, the likely evidence locations were:

| Source Type | Why It Might Matter | Signal Quality This Cycle | Keep/Retry |
| --- | --- | --- | --- |
| Search Console and live metadata | Shows whether search can already support channel decisions. | High for baseline, low for social/channel attribution | Keep every acquisition cycle. |
| Live Google reviews endpoint | Shows the proof language that should be recycled into GBP/social. | High | Keep. |
| GTM/tag state | Shows whether channel tests can be measured without new tracking work. | Medium | Keep for measurement cycles. |
| Local academy websites and directories | Shows what Auris should not imitate and where local buyers see alternatives. | High | Keep. |
| Local academy LinkedIn/social profiles | Shows professional positioning and social proof. | Medium-high for LinkedIn, low for Instagram/Facebook accessibility | Retry with manual browser if needed. |
| English-for-Spanish-speakers creators | Shows formats and hooks that fit the audience. | Medium | Keep, but avoid copying influencer scale. |
| Tutor marketplaces | Shows buyer language, price anchors, and review-proof norms. | High for price/proof, medium for channel strategy | Keep. |
| Public LinkedIn/business-English pages | Shows professional content framing. | Medium-high | Keep. |
| Google official GBP/Search docs | Defines what posts/structured data can and cannot do. | High for constraints | Keep for GBP/SEO claims. |
| Reddit/social operator threads | Shows channel pitfalls and raw pain language. | Medium | Keep, but triangulate. |

## Local Readiness

Artifacts inspected this cycle:

- `docs/strategy/research-log.md`
- `docs/strategy/research-roadmap.md`
- `docs/strategy/hypotheses.md`
- `docs/strategy/content-strategy.md`
- `docs/strategy/market-intelligence.md`
- `docs/strategy/outside-in-opportunity-radar.md`
- `docs/strategy/automation-research-loop.md`
- `docs/strategy/platform-backlog.md`
- `docs/strategy/pricing-positioning.md`
- `docs/strategy/review-proof-library.md`
- `src/components/Navbar.jsx`
- `src/components/HeroSection.jsx`
- `src/components/ContactSection.jsx`
- `src/components/SeoLandingPage.jsx`
- `src/components/TalkTheTalk.jsx`
- `src/utils/analytics.js`
- `src/App.jsx`
- `src/components/Footer.jsx`
- `src/components/GoogleReviewsSection.jsx`
- `src/components/PlatformShowcase.jsx`
- `classroom-hub/src/pages/TalkTheTalk.tsx`
- `classroom-hub/src/pages/StudentDashboard.tsx`
- `classroom-hub/src/pages/TeacherOverview.tsx`

Findings:

- The website has strong owned assets for the test: Talk the Talk, local/business pages, WhatsApp, Calendly, email, Google reviews, and student portal proof.
- No obvious public social profile links are surfaced in the current website code. That means social can be tested, but the site does not yet behave like a social profile hub.
- UTM support already exists in the local landing Talk link and Talk completion Calendly URL, and events exist for `talk_started`, `talk_completed`, `talk_trial_click`, contact clicks, form submits, and booking events.
- The public Talk CTA can measure click intent but not completed booking attribution from the new-tab Calendly flow.
- The portal has the same Talk the Talk surface but lacks a self-rating or teacher-facing "this student got stuck here" bridge. This makes content and retention connected but not yet closed-loop.

## Data/API Evidence

Search Console final data through 2026-05-19:

- Last 28 days: homepage only, 1 click, 180 impressions, CTR 0.56%, average position 10.14.
- Last 90 days: homepage only, 6 clicks, 308 impressions, CTR 1.95%, average position 8.80.
- Last 180 days: homepage only, 18 clicks, 659 impressions, CTR 2.73%, average position 8.13.
- Last 180 days by query: local/academy/brand queries dominate. Examples: `academias de ingles castelldefels` 92 impressions, average position 16.73; `auris` 66 impressions, average position 10.50; `academia ingles castelldefels` 20 impressions, average position 7.20.
- Filters for `private`, `empresas`, and `business` returned no rows in the 180-day Search Console window. `clases` and `particulares` exist but are tiny.

GTM read-only state:

- Container `6350675658 / 249863951 / workspace 0`: 0 tags, 0 triggers, 0 variables.
- This confirms the current measurable channel path is direct `gtag.js`, not GTM.

Live checks:

- `/`, `/talkthetalk`, `/clases-ingles-castelldefels`, and `/ingles-empresas-castelldefels` return HTTP 200.
- Static metadata/canonical/schema are present on all four checked pages.
- Live Google reviews endpoint returned 5.0 rating, 15 reviews, and review text with recurring confidence, meetings, adaptation, tools, and comfort-speaking language.

Interpretation:

- Organic search is not big enough yet to choose the channel alone.
- GBP/local trust is the nearest measurable acquisition layer because reviews already prove the offer.
- Social should be judged by qualified actions: profile clicks, website clicks, Talk starts/completions, trial clicks, WhatsApp messages, and lead-source notes.

## External Evidence Ledger

| Source | Signal | Supports | Weakens | Implication |
| --- | --- | --- | --- | --- |
| Kilkenny Castelldefels, https://kilkennylc.com/ | Local competitor claims 2,000+ students, native teachers, adults, companies, Business English, and private classes. | H001, H013 | Trying to look like a large academy | Auris should answer the same intent with personal specificity, not scale. |
| Castle Languages, https://castlelanguages.cat/ | Local competitor uses 14+ years, native qualified teachers, Cambridge, company courses, groups and private classes. | H001 | Generic "native teacher" positioning | Auris needs the personal teacher plus portal plus Spanish-speaker proof angle. |
| Janet's LinkedIn, https://es.linkedin.com/company/janets-school | Local competitor has 583 followers and frames business training with FUNDAE, teams, flexible online/presential classes, meetings and international communication. | H008, H013 | Formal corporate procurement for Auris | LinkedIn is viable for business/professional proof, but Auris should stay personal/small-team. |
| Janet's directory profile, https://www.todosbiz.es/janets-school-of-english-936-64-03-33 | Directory shows 4.9 rating, 100+ reviews and public Facebook/Instagram/LinkedIn presence. | H002, H009 | Ignoring GBP/directory proof | Local trust is already social-proof heavy. |
| Superprof Business English Castelldefels, https://www.superprof.es/clases/business-english/castelldefels/ | Business English tutors average 17 EUR/h; examples include work/travel/business goals and 10-30 EUR/h. | H004, H005 | Marketplace-first pricing | Marketplaces are useful for intent but dangerous as the main premium anchor. |
| Tusclases Castelldefels, https://www.tusclasesparticulares.com/profesores-ingles/castelldefels.aspx | Local listings emphasize native teachers, free first class, practical oral work and prices around 12-21 EUR/h on visible snippets. | H004 | Generic private-class claims | Site/social must show why 40 EUR/h is not generic tutoring. |
| Preply Business English, https://preply.com/en/online/tutors-business-english | Marketplace frames business English around meetings, emails, presentations, negotiations, pronunciation, industry terms, reviews and flexible scheduling. Average price shown around $17/h. | H008, H013 | "Business English" alone as differentiation | The work-English lane is real, but needs personal diagnosis and proof. |
| Preply tutor example, https://preply.com/en/tutor/3252594 | Tutor in Spain uses bilingual empathy, personalized lessons, pronunciation/fluency/interview confidence and student reviews. | H013 | Auris as only bilingual option | Bilingual empathy is valued but not unique, so Auris must combine it with reviews, portal, and 11+ years. |
| Amigos Ingleses, https://www.amigosingleses.com/ | Large Spanish-speaker creator brand leads with real English, pronunciation, speaking, training, fun and confidence. | H010 | Dry professional-only content | Spanish-speaker formats can be warm and practical. Auris can borrow format, not scale. |
| Cambridge on Amigos Ingleses, https://www.cambridgeenglish.org/es/news/view/amigos-ingleses-cambridge-english/ | Cambridge describes their success around practical, fun, step-by-step, real communication for Spanish speakers and digital channels/podcast. | H010 | Grammar-only content | "Practical, real communication" is a proven content frame. |
| Google GBP posts docs, https://support.google.com/business/answer/7342169 | GBP posts can include text, photo/video and action buttons; posts older than 6 months are archived unless dated. | H002 | Passive GBP profile | Weekly updates with action buttons are reasonable. |
| Google LocalBusiness docs, https://developers.google.com/search/docs/appearance/structured-data/local-business | LocalBusiness structured data helps describe local business info; Google stresses crawlability, validation, and working URLs. | H002, H003 | Review-rich-result shortcuts | Keep structured data clean, but do not expect review stars from first-party review markup. |
| Google review snippet docs, https://developers.google.com/search/docs/appearance/structured-data/review-snippet | Self-serving LocalBusiness/Organization review markup is ineligible for star review features. | H009 | Adding review schema as shortcut | Use reviews visibly for humans and GBP, not spammy aggregate-rating markup. |
| Executive Business English LinkedIn, https://www.linkedin.com/company/executive-business-english | One-person/self-employed business-English brand frames public speaking, executive presence, meetings, negotiations and global professionals. | H013 | "Only academies can do LinkedIn" | A solo premium professional-English brand can make sense on LinkedIn. |
| Let's Speak Leadership Meetup, https://www.meetup.com/es-es/letstalkbusinessbarcelona/ | Barcelona professional events around trust, empathy, assertiveness and leadership show adjacent demand for communication skills in English-speaking/professional contexts. | H013 | Language as isolated grammar | Professional English can connect to communication confidence, but should stay concrete. |
| Reddit / Preply tutor thread, https://www.reddit.com/r/Preply/comments/1s3i7el/preply_has_given_up_on_me/ | Tutors debate price compression on marketplaces; one comment says cheap prices can attract less serious students, and outside-platform business-English rates can be much higher. | H004, H005 | Marketplace-first growth | Keep marketplace presence as proof/overflow, not brand center. |
| Reddit / Preply trial conversion thread, https://www.reddit.com/r/Preply/comments/1sdym23/i_have_been_a_spanish_tutor_for_less_than_a_month/ | Student comments suggest trial lessons convert when the learner feels comfortable, conversational and not shamed by tests. | H005, H010 | Hard-sell or test-heavy first touch | First content and trial should reduce fear, not show off difficulty. |
| Reddit / social media targeting thread, https://www.reddit.com/r/socialmedia/comments/1rxzsiw/our_languagelearning_content_keeps_reaching_native_speakers/ | Language content can be served to the wrong audience when hashtags/on-screen language send mixed signals. | H005 | TikTok-first confidence | Short-form tests need clear audience signals: Spanish-speaking adults learning English, not broad English content. |
| Reddit / EnglishLearning pronunciation feedback, https://www.reddit.com/r/EnglishLearning/comments/1s8exrw/hello_to_everyone_i_have_just_uploaded_a_youtube/ | Recent feedback to a Spanish speaker highlights vowels, word stress, and subtle final consonant differences like `tried to` vs `try to`. | H010 | Broad confidence without correction | Pronunciation clarity clips can be specific and useful without accent-shaming. |
| TikTok pronunciation ideology paper, https://www.sciencedirect.com/science/article/pii/S0346251X25003070 | TikTok pronunciation teaching can emphasize native-like norms and directive speech more than credentials or expertise. | H005, H010 | Native-accent bait | Auris should talk about clarity and confidence, not erasing accent. |

## Channel Fit Matrix

| Channel | Buyer Intent | Fit For Auris | Effort | Measurement | Main Risk | Recommendation |
| --- | ---: | ---: | ---: | --- | --- | --- |
| Google Business Profile | High local trust | 5/5 | Low-medium | Website clicks, calls, direction/profile actions, UTM links, manual lead notes | Profile can look stale if unmanaged | Make this the weekly proof anchor. |
| LinkedIn | Medium-high professional trust | 4/5 | Medium | Post engagement, profile views, link clicks, direct messages, manual source notes | Slow reach without consistent personal posting | Use once weekly for work-English confidence. |
| Instagram Reels/TikTok | Medium attention, uncertain buyer quality | 3/5 | Medium | Saves, profile clicks, Talk starts, WhatsApp/source notes | Wrong audience, vanity reach, accent-shame traps | Test by reusing the same weekly idea, not as core strategy yet. |
| YouTube Shorts | Medium evergreen discovery | 2.5/5 | Medium-high | Views, subscribers, link clicks | More editing burden, slower lead path | Park until reels prove format. |
| Marketplaces | High transactional intent, low price anchor | 3/5 | Low-medium | Profile views, inquiries, trial conversions | Price compression and weaker brand control | Keep optimized, but do not build strategy around it. |
| Reddit/forums | Low direct selling, high pain language | 2/5 as channel, 4/5 as research | Low | Research insights only | Selling would feel wrong and inefficient | Use for research, not promotion. |
| Local directories/community listings | Medium local trust | 3/5 | Low | Referral traffic/manual source notes | Hard to control and often outdated | Ensure consistency later; not first content sprint. |

## Decision

Best 2-week test: `GBP + LinkedIn + short-form reuse`.

Weekly ladder:

1. Write one professional/confidence idea.
2. Publish it as a GBP update with a photo/screenshot and Talk/booking CTA.
3. Adapt it into one LinkedIn post for professionals/autonomos.
4. Cut the same idea into one 30-45 second reel/TikTok.
5. Send traffic to one source-tagged Talk prompt or to WhatsApp/booking.

This keeps the workload small, measures buyer intent, and tests whether social can support premium trust without needing Auris to become a full-time creator.

## Twelve Implementation-Ready Content Examples

| Buyer Intent | Channel | Hook | Body / Script | CTA | Measurement |
| --- | --- | --- | --- | --- | --- |
| Work confidence | LinkedIn | `You understand the meeting, but your answer gets smaller.` | Explain output gap: comprehension and speaking under pressure are different. Give a 90-second prompt: explain a problem and what you need. | Try Talk the Talk or book for feedback. | `utm_content=meeting_answer_gets_smaller` |
| Local private classes | GBP | `Private English classes that do not feel like a rotating academy.` | Warm post: direct teacher, 11+ years, Spanish-speaker blocks, online/local when it fits. | Book a free first class. | GBP website clicks, bookings |
| Pronunciation clarity | Reels/TikTok | `You do not need a native accent. You need this sound to be clear.` | One Spanish-speaker trap: final `-ed` or vowel/stress. Show before/after and one repeat sentence. | Save and try it out loud. | Saves, profile clicks |
| AI plus human feedback | LinkedIn | `AI can give you repetitions. A teacher helps you know what to fix.` | Do not attack AI. Explain practice vs diagnosis, Spanish-influenced phrases, confidence and follow-up. | Try a prompt, bring the hard part to class. | Link clicks, comments |
| Review proof | GBP | `A student told me the biggest change was confidence in meetings.` | Paraphrase review theme without overquoting. Tie to practical speaking and review between classes. | Book if meetings are your pain point. | GBP clicks, WhatsApp notes |
| Marketplace contrast | LinkedIn | `A class is not just one hour of conversation.` | Explain what premium includes: prep, correction, vocabulary saved, portal, follow-up. | Ask about private classes. | Profile clicks, leads |
| Trial trust | GBP/LinkedIn | `The first class is not an exam.` | Explain relaxed first class: level, goals, speaking comfort, what gets in the way. | Book the free trial. | Trial bookings |
| Talk prompt | GBP | `This week's 90-second speaking prompt: explain a work problem.` | Give 3 phrases: `The issue is...`, `What I need is...`, `The next step is...` | Try the prompt. | `talk_started`, `talk_completed` |
| Local professional | LinkedIn | `English for work is often not grammar. It is confidence at the exact moment you need to answer.` | Examples: calls, presentations, interviews, client updates. Keep it concrete. | Message/book if that is familiar. | DMs, source notes |
| Portal proof | Reels/TikTok | `What happens to vocabulary after class? It should not disappear.` | Show portal screenshot/blurred example: words become flashcards/review. | Book if you want follow-up between classes. | Saves, profile clicks |
| Spanish-speaker block | Reels/TikTok | `If you translate "me cuesta..." directly, your English gets heavy.` | Show one natural alternative and micro-practice sentence. | Try saying it twice. | Saves/profile clicks |
| Small team | LinkedIn | `Small teams do not need a big academy to practise English for meetings.` | Position personal/small-team sessions, invoice with NIF, practical meeting simulations. | Ask about a first call. | Business inquiries |

## Two-Week Posting Plan

| Day | Channel | Post | CTA | UTM |
| --- | --- | --- | --- | --- |
| Mon W1 | LinkedIn | `You understand the meeting, but your answer gets smaller.` | Talk prompt | `utm_source=linkedin&utm_medium=organic&utm_campaign=talk_prompt_week_01&utm_content=meeting_answer_gets_smaller` |
| Wed W1 | Reels/TikTok | One phrase set for explaining a work problem. | Save/try prompt | `utm_source=instagram` or `tiktok`, `utm_content=work_problem_phrases` |
| Fri W1 | GBP | Review-led post about confidence in meetings. | Book trial or Talk prompt | `utm_source=google_business_profile&utm_medium=organic&utm_campaign=talk_prompt_week_01&utm_content=meeting_confidence_review` |
| Mon W2 | LinkedIn | `AI can help you practise. A teacher helps you know what to fix.` | Talk prompt/trial | `utm_source=linkedin&utm_medium=organic&utm_campaign=talk_prompt_week_02&utm_content=ai_practice_human_feedback` |
| Wed W2 | Reels/TikTok | Pronunciation clarity clip: final `-ed` or word stress. | Save/bring to class | `utm_source=instagram` or `tiktok`, `utm_content=clarity_final_ed` |
| Fri W2 | GBP | Private classes as personal alternative to academies. | Book free class | `utm_source=google_business_profile&utm_medium=organic&utm_campaign=local_proof_week_02&utm_content=personal_alternative` |

Minimum notes to keep manually:

- Post date.
- Channel.
- Hook.
- Link/UTM used.
- Profile clicks or website clicks.
- Talk starts/completions/trial clicks if visible.
- Any WhatsApp/Calendly lead-source clue.
- Whether the lead sounded local, professional, exam-focused, price-shopping, or current-student referral.

## Falsification Notes

Favored idea tested: "Auris should push Instagram/TikTok hard because language content spreads."

Result: weakened as a primary channel. Creator examples show Spanish-speaker English content can spread, but Search Console, local reviews, competitor profiles, marketplace pricing and LinkedIn business-English evidence all point to trust and buyer quality as the main bottleneck. Instagram/TikTok remain useful as a format test and warmth signal, but the first campaign should be anchored by GBP and LinkedIn.

What would change this:

- A real Auris reel gets local/professional inquiries or high-quality profile clicks.
- Instagram/TikTok viewers complete Talk prompts and click the trial CTA.
- Existing students say short clips help them practise between classes.

## What Not To Do Yet

- Do not build a daily content machine.
- Do not chase generic English-teacher trends unless they connect to Spanish-speaker confidence or work situations.
- Do not copy academy LinkedIn/FUNDAE language.
- Do not make TikTok virality the success metric.
- Do not add review schema shortcuts for Google stars; use review proof for humans and GBP.
- Do not move YouTube Shorts ahead of a small IG/TikTok format test.

## Strongest Next Move

Run the two-week posting plan above and pair it with a simple lead-source ledger. If one channel produces a qualified inquiry or meaningful Talk completion/trial-click pattern, extend that channel for four more weeks. If nothing moves, the next best move is not "post more"; it is GBP proof optimization plus a local/review page improvement.
