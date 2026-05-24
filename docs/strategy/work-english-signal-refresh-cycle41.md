# Work-English Signal Refresh And Moment Scorecard

Created: 2026-05-23 Cycle 41

Purpose: refresh the professional-English lane after the Talk Reflection spec, test whether current outside-in evidence still supports `Work-English Confidence Loop`, and define the smallest measured test without drifting into academy/corporate-training positioning.

## Primary Question

Which work-English moments should Auris test first, and which expansion ideas should be deliberately ignored for now?

Short answer:

Test `Meeting Voice` first, with client-call/customer-incident and interview/career-story as the next two variants. Keep small-team/company training dormant until a warm lead appears. Do not turn `business English` into a standalone SEO/product package yet.

## Source Discovery

Possible source types considered before browsing:

| Source Type | Why It Might Reveal Signal | Decision |
| --- | --- | --- |
| Fresh Barcelona job posts | Current employers reveal the exact situations where English is required. | Use; highest-signal for use cases, not buyer intent. |
| Recruiter/job-agency listings | Often expose salary, level, sector and work tasks. | Use; good for role context. |
| Official Barcelona employment/talent sources | Show local employability themes and sector movement. | Use lightly as context. |
| Business-English competitor pages | Show what paid alternatives promise and what language is crowded. | Use; strong falsification source. |
| Tutor marketplaces | Reveal demand plus price anchors around "business English". | Use; necessary for premium-risk check. |
| Professional/community event listings | Reveal what people gather around and how they frame the pain. | Use if concrete, not broad networking. |
| Reddit/forum work-language threads | Reveal lived pain language and social context. | Use as medium-confidence pain evidence. |
| Auris live review endpoint | Shows whether Auris already has proof for the same pain. | Use as first-party proof source. |
| Live website route checks | Shows what a visitor/crawler can safely see now. | Use for destination readiness. |
| LinkedIn public profiles/posts | Could reveal professional demand, but public access is unstable. | Defer unless owner-side/profile evidence arrives. |
| HR/L&D/FUNDAE sources | Useful only if small-team procurement is active. | Defer to avoid academy drift. |
| AI speaking tool sources | Useful for practice-vs-human diagnosis, but Cycle 39/40 already covered this. | Defer this cycle. |

Highest-signal mix used:

- Fresh job posts for role contexts.
- Competitor/coaching pages for offer-language crowding.
- Marketplace pages for price-anchor risk.
- Local employment/event/community sources for demand texture.
- Live Auris route/review checks for proof and destination readiness.

## Local Evidence

| Local Artifact | Signal | Interpretation |
| --- | --- | --- |
| `research-log.md` Cycle 40 | Previous cycle told next run to rotate away from Talk Reflection unless implementation evidence arrived. | Rotation was correct. |
| `research-roadmap.md` RQ008/RQ014 and Packet Y/Z/AA | Work-English remains active but should stay as a measured angle. | Continue, but avoid broad repeat scans. |
| `hypotheses.md` H008/H013/H025 | Existing hypotheses already say professional confidence is stronger than formal business training. | This cycle tests rather than invents. |
| `professional-english-job-demand-scan.md` | Prior evidence named meetings, calls, interviews, presentations, customer incidents and international teams. | Baseline strengthened by fresh scan. |
| `work-english-pain-language-scan.md` | `your English gets smaller` remains the best dignified hook. | Keep the hook. |
| `content-strategy.md` | Already has Meeting Voice, Interview and Client Call drafts. | Needs a sequence/scorecard, not more copy variants. |
| `pricing-positioning.md` | Work-English should stay inside 40 EUR/h personal private classes until lead signal appears. | Keep package gate. |
| `outside-in-opportunity-radar.md` | Professional-confidence wedge is already the strongest expansion lane. | Refresh confirms, but narrows. |
| `review-proof-library.md` | Reviews already support confidence, adaptation, meetings and continuity. | Pair any work hook with proof. |
| `measurement-plan.md` and owner ledgers | Lead-source fields already include proof/source and work-moment classification. | Add moment-specific fields if used. |
| Live `/ingles-empresas-castelldefels` | HTTP 200, correct canonical/title/meta, index-follow; static HTML check saw 452 words but no static anchor tags. | Usable as an owned route, but not yet the safest campaign destination. |
| Live Talk UTM | HTTP 200 and canonical `/talkthetalk`. | Still the safest LinkedIn CTA for Meeting Voice. |
| Live reviews endpoint ES | `places-new`, rating 5.0, reviewCount 16; visible Spanish proof includes confidence in meetings with native speakers. | Strong first proof pair, owner truth still missing. |
| `src/components/SeoLandingPage.jsx` | Business route names meetings, presentations, client calls and interviews, with NIF/invoice support. | Public surface is aligned enough; not a build blocker. |
| `src/App.jsx` route metadata | Business page title/description names professionals, autonomos, small teams, online/local and NIF. | Route positioning is not the weakest link. |
| `src/translations.js` and `src/data/speakingTopics.js` | Site/app already contain professional scenarios: meetings, client updates, job interviews, workplace problems. | The method can support the promise. |

## Data / API Evidence

| Check | Result | Strategic Use |
| --- | --- | --- |
| `https://englishwithauris.com/ingles-empresas-castelldefels` | HTTP 200, Netlify, title `Clases de Ingles para Empresas y Profesionales`, canonical to the same route, robots `index,follow`. | The route is live, but not enough to justify making it the main proof-sprint destination. |
| Static HTML check on business route | 452 words in raw HTML, no static `<a href=` entries found by `rg`. | If SEO work is approved later, add better fallback/internal links. Not needed for this content test. |
| `/.netlify/functions/google-reviews?language=es` | Rating 5.0, reviewCount 16, visible review set includes confidence/progress/adaptation language. | Use review themes, but do not publish static `16 reviews` copy without owner truth. |
| Talk LinkedIn UTM | HTTP 200; canonical remains `/talkthetalk`. | Safe low-friction CTA for `Meeting Voice`. |
| Search Console | Not rerun this cycle; prior cycle still has credential scope limitations and no public page change happened. | Do not let GSC block this small proof test. |

## External Evidence

| Source | Signal | Supports | Weakens | Confidence |
| --- | --- | --- | --- | --- |
| Randstad, Recepcionista C1/C2 Barcelona, https://www.randstad.es/candidatos/ofertas-empleo/oferta/recepcionista-con-ingles-c1-c2-y-catalan-2967670/ | Strategic-consulting reception role requires excellent English and professional national/international phone handling. | Phone/first-impression confidence. | Executive-only targeting. | High |
| Page Personnel, Customer Service con Ingles Barcelona, https://www.pagepersonnel.es/job-detail/customer-service-con-ingl%C3%A9s-empresa-en-barcelona/ref/jn-032026-6962550 | B2/C1 English is needed to manage European customers by phone/email, logistics follow-up and incidents. | Client-call/customer-incident practice. | Presentation-only work English. | High |
| Page Personnel, Customer Service con Idiomas Gava, https://www.pagepersonnel.es/job-detail/customer-service-con-idiomas-gav%C3%A0/ref/jn-042026-6999977 | Local Baix/Llobregat-Gava listing frames customer service with languages in an international company context. | Local professional demand near Auris, not only Barcelona centre. | Only high-level corporate training. | Medium-high |
| Workwide/Flowbox Account Executive Barcelona, https://workwide.de/jobs/german-speaking-account-executive-barcelona/asp | Account executive role includes client meetings, presenting SaaS value, English as corporate language and CV/cover letter in English. | Meeting/presentation/client confidence. | Generic grammar/content. | High |
| CrowdStrike partner account executive snippet, https://jobs.accel.com/companies/crowdstrike/jobs/70394336-partner-account-executive-french-speaking-barcelona | Sales role asks for English and strong presentation skills, in-person and virtually. | Presentation/Q&A as a valid second-tier moment. | Pure interview-only positioning. | Medium-high |
| Barcelona Activa employment page, https://treball.barcelonactiva.cat/en/ | Official city employment surface highlights interview preparation, CV, company contact, personal brand, negotiation/storytelling activities and strategic-sector training. | Career-story/interview lane as local employability context. | Business English as only company procurement. | High |
| Barcelona International Welcome digital talent article, https://www.barcelona.cat/internationalwelcome/en/news/digital-talent-generation-increases-by-6-in-barcelona-1538342 | Barcelona had 129,608 digital professionals in the 2025 report and ICT jobs grew faster than the general labour market in 2024. | International-team/tech professionals remain plausible. | Local-only academy framing. | Medium-high |
| Oxford English Consulting, https://www.english-consulting.es/ | Competitor uses meetings, presentations, client calls, interviews, role-play, email rewrites and progress dashboards. | Market validates exact moments. | Auris claiming uniqueness from generic business-English wording. | High |
| Sankofa, https://sankofa.es/ | Barcelona corporate trainer frames the gap as using English clearly in tense negotiations, presentations, meetings and real situations; includes FUNDAE. | Moment-based framing is right. | Auris copying corporate/FUNDAE language. | High |
| iTalkTerms, https://italkterms.com/business-english-coaching-spain/ | Spain-focused coaching names board presentations, negotiations, job interviews, international buyers, calls and sector vocabulary. | Spanish-professional paid lane exists. | Broad "native coach" arms race. | Medium-high |
| Women in Business Meetup Barcelona, https://www.meetup.com/barcelona-wisdom-business-network-meetup-group/ | Local event/group language centers on confidence, assertiveness and professional communication for women in business. | Professional confidence as social/community pain. | Assuming event attention means private-class buying intent. | Medium |
| Languages 4 Professionals Barcelona Meetup, https://www.meetup.com/languages-for-professionals/ | Large group history includes CVs, presentations, English interviews, client contact in English and business topics. | Career/interview/client-contact moments. | Immediate outreach; the group is old/mixed-intent. | Medium |
| Superprof Business English Barcelona, https://www.superprof.es/clases/business-english/barcelona/ | Marketplace shows hundreds of business-English tutors, 18 EUR/h average, and listings around meetings, presentations, interviews and confidence. | Demand exists. | Premium differentiation by `business English` alone; price pressure. | High |
| Reddit Barcelona English-first company thread, https://www.reddit.com/r/cscareerquestionsEU/comments/1sqlubz/joined_an_englishfirst_company_in_barcelona_but/ | Recent Barcelona worker describes English-first workplace dynamics, inclusion, informal language switching and confidence/social communication tension. | Professional language pain is social/contextual, not grammar-only. | Overpromising workplace culture fixes. | Medium |
| Preply/Leanlab Spanish-speaker workplace study PDF, https://avatars.preply.com/inbound/media/20260109/Preply_Efficiency_Research_Platform_Comparison_2025.pdf | Spanish-speaking adults learning for work reported stronger confidence and goal achievement in 1:1 tutoring than a self-learning app in a non-controlled comparison. | Human support for professional goals. | Treating platform-sponsored evidence as definitive. | Medium |

## Work-Moment Scorecard

| Moment | Evidence Strength | Fit For Auris | Acquisition Risk | Decision |
| --- | --- | --- | --- | --- |
| Meeting Voice | High | Very high: reviews, Spanish-speaker patterns, conversation, Talk CTA and portal follow-up all fit. | Crowded language if not proof-paired. | Test first. |
| Client Call / Customer Incident | High | High: role-play, calming language, clarification, follow-up and pronunciation clarity fit personal teaching. | Some roles may have lower private budget. | Test second if Meeting Voice gets attention but no action or if leads mention sales/customer success. |
| Interview / Career Story | High | High: practical, concrete, premium if tied to a real opportunity. | Can become one-off/cram support. | Test second/third if job-change language appears. |
| Presentation / Proposal Q&A | Medium-high | Medium-high: useful for professionals, but can sound corporate fast. | Higher expectation for sector expertise. | Use as supporting content, not first hook. |
| Small Team English | Medium | Medium: invoice/NIF helps, but delivery/admin can drift. | Procurement, scheduling, discounts, FUNDAE comparisons. | Hold until a warm student/referral brings a specific team. |
| Corporate Training / FUNDAE | Medium as market, low as Auris fit now | Low: competitors own this frame better. | Academy drift, bureaucracy, weak personal positioning. | Deliberately ignore. |
| Generic Business English SEO | High competition, unclear buyer intent | Low-medium. | Marketplace/academy price anchors, thin distinction. | Do not expand yet. |
| Exam/Certificate Work English | Medium | Medium if already a student need. | Pulls away from confidence/practical conversation. | Route only if inquiry asks. |

## Offer Boundary

Use public language like:

`Personal English classes for adults and professionals who need to feel clearer in real work moments: meetings, client calls, interviews and presentations.`

Avoid public language like:

- `Corporate Business English Programme`
- `FUNDAE training provider`
- `English for companies at scale`
- `Business English Barcelona` as the main claim
- `Executive English package` before buyer proof

Keep the internal name `Work-English Confidence Loop`, but public copy should sound personal and practical, not productized.

## Implementation-Ready Two-Week Test

This is a manual owner-side test. The automation should not publish it.

| Sequence | Channel | Draft Hook | Proof Pair | Destination | Measure |
| --- | --- | --- | --- | --- | --- |
| 1 | LinkedIn personal profile | `You know the answer, but in the meeting your English gets smaller.` | Confidence/review theme plus Spanish-speaker correction. | Talk UTM: `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller` | profile views, link clicks, DMs, Talk starts/completions/trial clicks. |
| 2 | GBP | `English classes for adults who need to speak more confidently at work.` | Google review confidence + 11+ years with Spanish speakers. | Homepage UTM until owner GBP data exists. | GBP views/searches/clicks/calls/messages. |
| 3 | LinkedIn or private referral | `Client calls are where English gets real very quickly.` | Real-situation role-play + follow-up phrases. | Homepage or direct message. | replies, role context, work moment, booked trial. |
| 4 | Private/current-student referral prompt | `If you know someone who knows English but gets smaller in meetings or client calls, that is exactly the kind of English I help with.` | Personal trust only; no incentive. | Warm intro only if natural. | intro, need context, price anchor, booked trial. |

## Lead Ledger Fields

Add or keep these fields for any professional-English inquiry:

- `source_channel`
- `profile_seen`
- `role_context`
- `work_moment`: meeting, client_call, interview, presentation, customer_incident, small_team, exam, other
- `pain_language`
- `proof_mentioned`: review, confidence, Spanish-speaker correction, Ireland/bilingual, portal/follow-up, invoice/NIF, price, other
- `price_anchor_seen`
- `invoice_needed`
- `quoted_price_expected`
- `booked_trial`
- `lead_quality`

## Falsification

Favored idea tested:

`Professional-confidence is the best expansion lane and the first Work-English test should be Meeting Voice.`

Result:

Strengthened, with a stricter boundary.

What strengthened it:

- Fresh job posts still name English in live communication moments.
- Competitors and events validate that meetings, calls, interviews and presentations are the buying language.
- Auris has review proof that already fits confidence in meetings.
- The site and prompt bank can already support these situations.

What weakened the too-broad version:

- Competitors already use the same moment list.
- Marketplaces make business-English look cheaper, with an 18 EUR/h average in Barcelona.
- Corporate pages own FUNDAE/team training and progress-reporting language better than a solo teacher should.
- Job posts prove work need, but not that those workers will pay Auris privately.

Stop/change evidence:

- 3-5 inquiries mention certificates or low-cost group/marketplace options before work moments.
- Two qualified direct leads mention 30 EUR marketplace pricing before booking.
- The Meeting Voice post gets attention but no DMs/clicks/trials after one measured attempt; then test Interview or Client Call, not more Meeting Voice copy.
- A warm small-team lead asks for company training; then create a separate tiny small-team spec only for that lead.

## Strategic Synthesis

Strongest next move:

Run one proof-paired Meeting Voice post or private message, then log actual responses. The post should not ask people to admire the idea of "business English"; it should ask whether they recognize the moment when their answer gets smaller in a meeting.

What Auris should not do yet:

- Build a big business-English SEO page.
- Create a separate Work-English package or price.
- Cold-pitch companies, coworking spaces or associations.
- Lead with invoice/NIF, FUNDAE, native-teacher scale or corporate training.
- Publish all variants at once.

Risk of acting too early:

The business could start sounding like every academy and marketplace tutor, while creating package/admin complexity before there is buyer proof.

Risk of waiting:

The strongest current wedge stays unused, and the site keeps sitting on proof that already matches adult/professional pain.

Evidence that would change the recommendation:

- Owner-side GBP/LinkedIn/referral data showing a different channel produces higher-quality leads.
- New inquiries repeatedly mention interview prep rather than meetings.
- Price-anchor objections from marketplaces.
- A warm small-team request with clear budget and no procurement friction.

## Next Evidence Needed

1. One actual Meeting Voice post/private test result.
2. Owner-side LinkedIn or GBP metrics if posted.
3. Any anonymized inquiry notes with `role_context`, `work_moment`, `proof_mentioned`, `price_anchor_seen` and `booked_trial`.
4. Owner Review Truth for 5.0 / 16 before static count copy changes.
5. If no owner-side signal arrives, next cycle should inspect actual Google/GBP review snippets for professional-English competitors rather than doing another job-post scan.
