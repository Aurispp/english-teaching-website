# Evidence Trigger Router - Cycle 59

Created: 2026-05-24 Cycle 59
Updated: 2026-05-27 Cycle 109

Purpose: convert future screenshots, owner notes, student observations, contact notes, capacity changes and access changes into the right existing evidence row without creating more campaigns, dashboards, ledgers or privacy risk.

## Primary Question

When no new owner/student proof has arrived, what is the smallest evidence-routing system that makes future evidence immediately usable without creating more admin?

## Working Answer

The strategy now has enough lanes. The missing layer is a router. Before any future cycle writes a new plan, it should classify the incoming evidence, update the matching existing row, and keep unrelated lanes parked.

This router sits above:

- `owner-evidence-ledger-template.md`
- `next-15-pilot-tracker.md`
- `measurement-plan.md`
- `strategic-ignore-list-cycle58.md`
- `research-roadmap.md`

It does not replace those files. It prevents them from multiplying.

## Source Discovery

Where the best evidence for this question might live:

| Source Type | Likely Value | Use This Cycle |
| --- | --- | --- |
| Existing owner ledgers and trackers | Shows what rows already exist and where new proof should land. | Highest signal. |
| Live site/API checks | Rules out urgent public or platform failures. | Keep light. |
| Official privacy/data minimisation sources | Prevents strategy files from collecting private student/prospect data. | High signal. |
| Official Google Analytics event and policy docs | Separates clicks, lead events and private lead truth. | High signal. |
| Official Google Business Profile docs | Defines owner-visible performance/review/link evidence. | High signal. |
| Search Console URL Inspection docs | Useful only when access returns or a route changed. | Keep as a gated source. |
| Qualitative research/sample-size sources | Supports small manual rows as discovery, not proof of scale. | Medium signal. |
| Continuous/customer discovery sources | Supports routing observed signals into decisions. | Medium signal. |
| Service-business waitlist/community threads | Falsifies the idea that full calendars need an immediate system. | Medium signal. |
| CRM/routing/waitlist product docs | Shows future options but is biased toward adding software. | Defer until repeated rows. |
| Current-student observations | Highest missing signal for retention/platform decisions. | Use when Auris provides rows. |
| Owner GBP/profile screenshots | Highest missing signal for acquisition/profile decisions. | Use when Auris provides rows. |

Chosen sources:

- Local strategy files, because they reveal repeated open loops and row destinations.
- Live public/API checks, because they prove whether there is any urgent public issue.
- Official Google/privacy docs, because the router touches analytics, reviews, profile links and personal data.
- Qualitative/customer discovery sources, because the next useful evidence may be only 1-5 rows.
- Service-business waitlist/community evidence, because "fully booked" can tempt premature systems.

## Local Evidence

| Artifact | What It Supports | What It Weakens |
| --- | --- | --- |
| `research-log.md` Cycles 57-58 | The prior cycles already narrowed the open loops to owner/student evidence. | Restarting channel strategy without new evidence. |
| `research-roadmap.md` RQ015 and Packet BG | The current default is Trust Maintenance + Evidence Waiting. | Creating a new content/calendar/platform lane. |
| `strategic-ignore-list-cycle58.md` | Parked/ignored lanes are already named. | Treating every heartbeat as a reason to add a plan. |
| `automation-research-loop.md` Cycle 58 rule | Cycles should first classify `evidence_arrived`, `approval_arrived`, `capacity_changed` or `no_new_evidence`. | Free-form exploration when the same gates are unchanged. |
| `owner-evidence-ledger-template.md` | Owner rows already exist for review truth, GBP performance, contact-link truth, action logs and inquiries. | A new lead ledger or CRM. |
| `next-15-pilot-tracker.md` | Current-student proof already has a row destination. | Another Next 15 product spec before rows. |
| `measurement-plan.md` | Direct-contact clicks are intent only; private inquiry rows are the truth layer. | Counting clicks, views or replies as leads. |
| `market-intelligence.md` Cycle 58 | Product and platform docs create tempting future systems, but rows are missing. | Routing/waitlist software now. |
| `src/components/ContactSection.jsx` | The site is WhatsApp/email direct-contact. | Calendly-first measurement assumptions. |
| `src/components/PricingSection.jsx` | Availability is now quieter and contact-oriented. | Loud scarcity or "book now" designs. |
| `src/utils/analytics.js` | Events are thin client-side intent events. | Treating analytics as full lead truth. |
| `src/translations.js` | Current copy includes future-availability language and residual free-first-class surfaces. | Perfect message coherence claims. |
| `teacher-assistant/classroom-hub/src/pages/StudentDashboard.tsx` | The portal has feedback, notes, flashcards and assignments. | Building new surfaces before observing which one helps. |
| `teacher-assistant/classroom-hub/src/pages/TeacherOverview.tsx` | Teacher workflow already has recall, SRS and homework-log support. | Building teacher CRM/workflow without rows. |

## Data And API Evidence

| Check | Result | Interpretation |
| --- | --- | --- |
| Live reviews endpoint EN | `source=places-new`, rating `5`, `reviewCount=16`, 5 visible reviews. | Public proof is healthy; newest/reply truth remains owner-side. |
| Live reviews endpoint visible review ordering | First returned review was older than the newest owner-visible reviews. | Endpoint order should not be used as newest-review truth. |
| Homepage headers | HTTP 200 from Netlify; public site available. | No urgent public outage. |
| Live homepage raw HTML scan | Current asset hashes are served; raw HTML only references bundles. | Bundle/source scans are needed for detailed copy. |
| Sitemap | Routes still list `lastmod` `2026-05-21`. | SEO hygiene remains approval-only, not an emergency. |
| Robots | Allows crawling and points to sitemap. | Crawl plumbing is not the blocker. |
| Teaching API health | `/api/health` returned HTTP 200. | Platform is reachable; no platform firefighting trigger. |
| Search Console / GBP owner APIs | Not re-authorized in this cycle. | Use owner rows/screenshots until access changes. |

## External Evidence

| Source | Signal | Supports | Weakens | Source Quality |
| --- | --- | --- | --- | --- |
| GDPR Article 5, data minimisation: `https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1590424137028&uri=CELEX%3A32016R0679` | Personal data should be limited to what is necessary. | Redacted categories, not private message dumps. | Storing names/screenshots in strategy files. | Official / high. |
| Google Analytics PII policy: `https://support.google.com/analytics/answer/6366371` | Analytics should not receive personally identifiable information. | Keep private lead truth outside GA event params. | Sending names/emails/message text into analytics. | Official / high. |
| GA4 recommended events: `https://support.google.com/analytics/answer/9267735` | `generate_lead` is appropriate for stronger lead-generation events. | Raw WhatsApp/email clicks should remain intent, not lead truth. | Firing lead events on every click. | Official / high. |
| GBP Performance docs: `https://support.google.com/business/answer/9918094` | Owners can see profile views, searches and interactions. | Monthly owner snapshot row. | Public scraping as performance proof. | Official / high. |
| GBP review reply docs: `https://support.google.com/business/answer/3474050` | Owners can reply to reviews and replies are profile-visible. | `review_reply_status` as a trust-maintenance row. | Treating a like/react as equivalent public proof. | Official / high. |
| GBP local/action links docs: `https://support.google.com/business/answer/6218037` | Profile links are profile-layer actions, separate from website code. | `gbp_contact_link_truth` row. | Assuming website Calendly removal cleaned GBP. | Official / high. |
| Google URL Inspection docs: `https://support.google.com/webmasters/answer/9012289` | URL Inspection can test indexed/live URL state when access exists. | GSC as gated data, not assumed. | Fresh indexing claims without access. | Official / high. |
| NN/g small-sample qualitative testing: `https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/` | Small observed samples can reveal practical usability problems. | 2 current-student rows can justify a next decision. | Treating tiny rows as market-size proof. | Expert / medium-high. |
| WhatsApp click-to-chat docs: `https://faq.whatsapp.com/5913398998672934` | `wa.me` is a normal official click-to-chat path. | Direct-contact mechanics are sound. | Building a form only because WhatsApp feels informal. | Official / high for mechanics. |
| Fully booked service-business thread: `https://www.reddit.com/r/Entrepreneurs/comments/1s6v094/if_youve_been_fully_booked_with_a_waitlist_what/` | Operators report follow-up and waitlist friction, but not always software as the first fix. | A lightweight row before CRM/waitlist. | Full calendar as "no need to track future demand." | Community / medium. |

## Router

Use this table before creating or updating any other strategy artifact.

| Incoming Evidence | Classify As | Record In | Minimum Fields | Immediate Decision | Do Not Do |
| --- | --- | --- | --- | --- | --- |
| New/recent review screenshot, review-reply screenshot, or "I replied" note | `review_reply_status` / `action_log` | `owner-evidence-ledger-template.md` Action Log or review-reply add-on | theme, age, reply status, public visibility only if relevant, next action | Reply, recheck once, edit only if pending/hidden/rejected, or stop | Do not turn one reply into a campaign or keyword plan. |
| GBP Performance screenshot or owner note | `owner_snapshot_arrived` / `gbp_day0` | `owner-evidence-ledger-template.md` GBP Performance Row | range, views, searches, website clicks, calls, messages, bookings, top terms, rating/reviews | Compare only to same-range future row after a named action | Do not infer lead quality from views/searches. |
| GBP Calendly/booking/contact-link screenshot or note | `gbp_contact_link_truth` / `gbp_calendly_removal_verification` | `owner-evidence-ledger-template.md` GBP Contact Link Truth Row | visible yes/no, domain, action taken, status, reason, next check | Resolve, hold pending/blocked, or mark intentionally kept | Do not edit website copy or restore appointment links by default. |
| First WhatsApp/email/phone/DM/GBP inquiry | `first_inquiry_arrived` / `lead_source_note` | `owner-evidence-ledger-template.md` Inquiry Row and `measurement-plan.md` | source, source confidence, first thing mentioned, need, timing, fit, price anchor, availability confusion, response/follow-up/outcome | Update channel, proof, pricing or contact-path confidence only after the row | Do not build CRM/waitlist/routing from one row. |
| Current-student tiny-step observation | `student_row_arrived` | `next-15-pilot-tracker.md` and, if needed, `current-student-continuity-proof-cycle57.md` | student type, suggested step, surface, did action, reaction, next-class evidence, teacher effort, decision | Build, keep manual, soften copy or pause | Do not store names, messages, homework text or write another feature spec. |
| Auris capacity changes or a slot opens soon | `capacity_changed` | `strategic-ignore-list-cycle58.md`, `research-roadmap.md`, `measurement-plan.md` | full/limited/opening/actively filling, desired slots, timing, target lead type, CTA mode | Choose Trust Maintenance, Soft Future-Availability, Measured Acquisition or Capacity Expansion | Do not reuse trust-maintenance metrics as campaign proof. |
| Code approval or API/GSC/GBP access returns | `approval_arrived` / `api_access_changed` | Relevant packet in `research-roadmap.md`; `measurement-plan.md` for access state | exact scope, files/routes/API, success/failure, result | Run bounded code/API pass | Do not broaden into SEO/social strategy just because access changed. |
| Social analytics screenshot | `channel_visible_signal` | Owner Action Log or `measurement-plan.md` | channel, range, reach/views/clicks/profile visits/DMs, content hook | Treat as attention unless paired with inquiry row | Do not declare acquisition-channel fit from impressions. |
| Public-only live check: endpoint, sitemap, headers, rendered route | `public_readiness` | `research-log.md` and Public Proof Row only if state changed | status, count, asset hash, route/canonical/sitemap state | Confirm readiness or flag approved hygiene | Do not convert public readiness into buyer evidence. |
| Auris asks for findings, new ideas, or automation improvement | `owner_synthesis_request` / `process_improvement_requested` | `automation-idea-engine.md`, `research-roadmap.md`, `automation-research-loop.md`, `research-log.md` | question asked, prior evidence base, candidate ideas, stop conditions, process rule changed, live automation prompt status | Run one Idea Synthesis Pulse and update the process if needed | Do not answer with only health status; do not treat synthesis as approval to publish/build/contact. |
| No new evidence arrived | `no_new_evidence` | `research-log.md` only if a cycle is run | what was checked and what remained missing | Keep existing parked lanes parked | Do not create a new artifact after this router unless the source/process itself improved. |

## Priority Rule

When multiple evidence types arrive, route in this order:

1. `capacity_changed`
2. `first_inquiry_arrived`
3. `student_row_arrived`
4. `owner_snapshot_arrived`
5. `gbp_contact_link_truth`
6. `review_reply_status`
7. `channel_visible_signal`
8. `public_readiness`
9. `owner_synthesis_request` / `process_improvement_requested`
10. `no_new_evidence`

Reason: capacity, buyer truth and current-student behavior change strategy faster than public readiness checks.

## Privacy Rule

Record categories, not identities.

Do not save:

- names, surnames, emails, phone numbers or company names
- full WhatsApp/email/LinkedIn messages
- screenshots containing private student/prospect data
- profile viewer identities
- credentials, cookies or private account URLs

Save:

- aggregate numbers
- status labels
- anonymized short phrases such as `asked about meetings`, `mentioned reviews`, `compared with 30 EUR`, `wanted future availability`
- source labels, route labels and UTM/content labels

## Falsification

### H027: Strategic pruning is higher leverage than more ideas while Auris is close to full

Result: strengthened and refined.

Evidence: Cycle 58 showed the open lanes were waiting on rows. Cycle 59 shows that even pruning needs a routing layer once owner/student evidence starts arriving. The router strengthens H027 by making "do not create new lanes" operational.

Next practical test: when the next screenshot or owner note appears, the next cycle should update only the matching row. If it still creates a broader campaign, H027 has not been operationalized well enough.

### H015: Manual lead-source notes are required before channel conclusions are trustworthy

Result: strengthened and narrowed.

Evidence: official GA docs separate click/event instrumentation from true lead generation, and GDPR/GA policy makes private data minimisation necessary. The first inquiry row is still the truth layer, but the row must be redacted and routed.

Next practical test: when the first lead arrives, record source confidence, first thing mentioned, proof, timing, availability confusion and outcome without saving private message text.

### H019: GBP owner-side baseline is required before judging posts

Result: strengthened.

Evidence: GBP Performance remains owner-side. Public reviews endpoint and public route checks prove readiness, not profile performance. A GBP snapshot should land as owner evidence before any Day 7/Day 28 interpretation.

Next practical test: one monthly owner snapshot or Day 0 screenshot with same-range future comparison only if Auris performs a named action.

### H026: Capacity state should decide the acquisition success metric

Result: strengthened.

Evidence: if capacity opens, the same website/profile signals should be interpreted differently. While Auris is close to full, review replies and profile coherence are maintenance. If he wants leads within 30 days, they become measured acquisition assets.

Next practical test: any "I have a slot" or "I want leads now" note should be routed before content, SEO or GBP recommendations.

### Favored idea tested: no-new-evidence cycles should only wait silently

Result: weakened once, then made stricter.

Cycle 59 produced a useful router because Cycle 58's ignore list created a new operational problem: where should future evidence go? After this router exists, repeated no-new-evidence cycles should not create more artifacts unless they improve the source map/process or catch an urgent public/system issue.

## Strategic Synthesis

Strongest next move:

Use the router before every future strategy update. If evidence arrives, update the exact row. If no evidence arrives, keep the system quiet and do not create another lane.

What Auris should not do yet:

- Do not add a CRM, waitlist, routing form or prospect dashboard.
- Do not restart GBP/LinkedIn/social content plans.
- Do not create more SEO pages.
- Do not build another Next 15 spec.
- Do not run ads.

Smallest practical test:

The next real screenshot or owner/student note is the test. Classify it with this router and update only one existing row.

Evidence that would change the recommendation:

- Capacity opens and Auris wants leads within 30 days.
- First high-fit inquiry mentions a clear source/proof/price/availability issue.
- Two current-student rows show the same portal/tiny-step pattern.
- GBP monthly snapshot shows a clear mismatch between views/searches and actions after profile cleanup.
- API/GSC/GBP access returns and reveals a material issue.

Risk of acting too early:

More admin, more public work, more false certainty, and a brand that starts sounding like an academy or funnel.

Risk of waiting:

Future-fit prospects may appear and disappear without a follow-up note. This is why the inquiry row and capacity-change route stay active.

## Cycle 60 No-New-Evidence Contract

Added: 2026-05-24 Cycle 60

Purpose: make `no_new_evidence` a real operating state, not a prompt to create another artifact.

Primary question:

Can Packet BH be tightened so future no-new-evidence heartbeats do not repeatedly produce new artifacts while still preserving a useful light-check and escalation path?

Working answer:

Yes. After this stress test, `no_new_evidence` should trigger a bounded quiet cycle. A future cycle may run a few light checks, but it should not browse broadly, create a new plan, update multiple strategy files, or reopen parked lanes unless one of the checks reveals a state change.

### Cycle 60 Source Discovery

Where useful evidence for this exact process question might live:

| Source Type | Likely Value | Cycle 60 Use |
| --- | --- | --- |
| Packet BH and Packet BG | Highest-signal local rules for what happens when no evidence arrives. | Use first. |
| Live public/API health checks | Catches urgent public/system issues without inventing strategy. | Keep bounded. |
| Existing owner/student ledgers | Confirms whether a row destination already exists. | Use as destination map only. |
| Google SRE toil and monitoring docs | Good operational analogy: repeated non-actionable checks become toil. | Use as official process evidence. |
| GOV.UK performance measurement docs | Helps separate useful measures from vanity/stable checks. | Use for metric discipline. |
| Kanban/WIP guidance | Supports explicit limits on active work lanes. | Use as process support. |
| Lightweight decision-record guidance | Supports updating one durable rule instead of relitigating decisions. | Use as process support. |
| Shape Up / appetite sources | Supports setting an appetite for process hardening. | Use as process support. |
| Scheduling/routing product docs | Useful falsification: tools make system-building attractive. | Treat as biased product signal. |
| Fully-booked/service-business community threads | Useful outside-in warning that follow-up leaks can happen. | Use only to preserve the first-inquiry row. |
| Fresh owner/student/prospect rows | Highest decision signal, but still missing. | Wait for these before growth recommendations. |
| Broad competitor/social scans | Low value while the trigger is `no_new_evidence`. | Skip by default. |

Chosen sources:

- Local Packet BH/BG and measurement artifacts.
- Light live checks for public/site/platform state.
- Official operating/process docs about toil, alerting, performance data, WIP limits and decision records.
- One scheduling-product source and one service-business community source to falsify the temptation to add CRM/waitlist/routing software.

### Cycle 60 Local Evidence

| Artifact | Signal | Decision |
| --- | --- | --- |
| `evidence-trigger-router-cycle59.md` | Router exists, but the `no_new_evidence` branch says "light checks" without defining the limit. | Add a bounded contract. |
| `strategic-ignore-list-cycle58.md` | Parked/ignored lanes are already named. | Do not create another ignore artifact. |
| `automation-research-loop.md` | Deep-cycle standard still pushes 8 sources and 3 artifacts every cycle. | Add an exception for repeated `no_new_evidence`. |
| `research-roadmap.md` Packet BH | Correctly points back to the router. | Refine with a repeat-run stop rule. |
| `measurement-plan.md` | Already classifies `no_new_evidence` as research-log only. | Add a measurement boundary. |
| `owner-evidence-ledger-template.md` | Owner rows already exist. | No new ledger. |
| `next-15-pilot-tracker.md` | Student rows already exist. | No new platform spec. |
| `current-student-continuity-proof-cycle57.md` | Current-student proof is waiting on observations. | No new retention artifact. |
| `content-strategy.md` | GBP/LinkedIn/social lanes are parked unless capacity or evidence changes. | Do not resume content planning. |
| `ContactSection.jsx` | Website is direct-contact via WhatsApp/email. | No Calendly/contact code work. |
| `PricingSection.jsx` | CTA points to contact, not booking. | No loud scarcity/booking design. |
| `analytics.js` | Click events are intent only. | No analytics reinterpretation. |
| `src/translations.js` / `SeoLandingPage.jsx` / `index.html` | Residual free-first-class wording exists. | Approval-only hygiene; not a no-evidence trigger. |
| `StudentDashboard.tsx` / `TeacherOverview.tsx` | Platform already has continuity surfaces. | Wait for student rows. |

### Cycle 60 Data And API Checks

| Check | Result | Meaning |
| --- | --- | --- |
| Live homepage headers | HTTP 200 from Netlify. | No public outage trigger. |
| Live sitemap | Routes still present with `lastmod` `2026-05-21`. | Known hygiene caveat; not urgent. |
| Live robots | Allows crawling and points to sitemap. | Crawl plumbing is stable. |
| Reviews endpoint | `source=places-new`, rating `5`, `reviewCount=16`, 5 visible reviews. | Public proof is healthy; newest/reply truth remains owner-side. |
| Teaching API health | `/api/health` returned HTTP 200. | No platform firefighting trigger. |
| Search Console / GBP owner data | Not re-authorized. | No fresh owner/API claim; use owner rows when available. |

### Cycle 60 External Evidence

| Source | Signal | Supports | Weakens | Source Quality |
| --- | --- | --- | --- | --- |
| Google SRE Workbook, Eliminating Toil: `https://sre.google/workbook/eliminating-toil/` | Repetitive manual operational work should be identified, bounded and reduced. | Treating repeated no-evidence research as process toil. | Another full research pass with unchanged triggers. | Official / high. |
| Google SRE Book, Monitoring Distributed Systems: `https://sre.google/sre-book/monitoring-distributed-systems/` | Good alerts should be urgent, actionable and user-visible. | `DONT_NOTIFY` and quiet checks when nothing changed. | Notifying or expanding work for stable signals. | Official / high. |
| GOV.UK performance data guide: `https://www.gov.uk/service-manual/measurement/using-data.html/` | Measurement should show whether a service meets user needs and lets people complete the task. | Measuring inquiry rows, owner snapshots and student behavior. | Treating stable headers/sitemaps as growth evidence. | Official / high. |
| Kanban University Guide: `https://kanban.university/kanban-guide/` | Explicit WIP limits are a policy for controlling active work. | Keeping active lanes limited while Auris is close to full. | Reopening every parked lane during quiet cycles. | Method source / medium-high. |
| Google Cloud ADR overview: `https://docs.cloud.google.com/architecture/architecture-decision-records` | Lightweight Markdown records can preserve decision context and avoid repeated debate. | Updating this router once as the durable decision record. | Creating a new artifact for each quiet heartbeat. | Official / high. |
| Basecamp Shape Up, Set Boundaries: `https://basecamp.com/shapeup/1.2-chapter-03` | Set an appetite before exploring raw ideas; "good" depends on constraints. | One bounded process hardening pass, then stop. | Open-ended research because a cycle exists. | Primary method source / medium-high. |
| Calendly features: `https://calendly.com/features/` | Scheduling/routing products frame growth around booking automation, workflows and routing forms. | Keep software as later option after repeated rows. | Adding routing/waitlist software before volume. | Product source / biased but useful. |
| Fully booked service-business thread: `https://www.reddit.com/r/Entrepreneurs/comments/1s6v094/if_youve_been_fully_booked_with_a_waitlist_what/` | Operators worry about missed follow-up and waitlist friction when full. | Preserve the first-inquiry/follow-up row. | Assuming "fully booked" means no future-demand tracking. | Community / medium. |

### Quiet Cycle Contract

When the router classifies a cycle as `no_new_evidence`, use this contract.

| Allowed Check | Maximum Use | State Change That Unparks Work | If Stable |
| --- | --- | --- | --- |
| Public homepage header | Once per quiet cycle, or skip if recently checked. | Non-200, redirect error, deploy mismatch. | No artifact update. |
| Reviews endpoint | Once if review count/reply proof matters. | Review count changes, endpoint fails, public proof mismatch. | Keep owner review truth pending. |
| Sitemap/robots | Only after deploy/code approval or if indexing question reopens. | Missing route, bad robots, real deploy-date mismatch after approved work. | Do not re-open SEO. |
| Teaching API health | Only if platform availability matters this cycle. | Non-200, auth/public-data regression. | Do not re-open platform specs. |
| Git status | Always safe as orientation. | Unexpected public-code edits relevant to the cycle. | Ignore unrelated dirty files. |
| Search Console / GBP API | Only if access changed or owner asks. | Access restored, API reveals material issue. | Do not retry repeatedly. |
| Owner/student/prospect rows | Always highest signal when provided. | Any `capacity_changed`, `first_inquiry_arrived`, `student_row_arrived`, `owner_snapshot_arrived`, `gbp_contact_link_truth`, or `review_reply_status`. | Keep waiting. |

Hard stop rule:

- If no allowed check shows a state change, do not create a new artifact.
- Do not update more than `research-log.md` unless the process rule itself was incomplete.
- After Cycle 60, do not harden this router again for `no_new_evidence` unless a quiet cycle fails, a source type proves misleading, or a new evidence type cannot be classified.

Synthesis pulse exception:

- If Auris asks for findings, new ideas, or automation improvement, do not classify the cycle as plain `no_new_evidence`.
- Use `/Users/aurisp/repos/teacher-website/docs/strategy/automation-idea-engine.md`.
- Generate evidence-bound candidate ideas and one process-improvement decision, then return to Packet BH.
- Do not browse broadly, create a campaign, or update public/profile/product surfaces unless Auris explicitly approves a concrete action.

Escalate only when:

- the live website or teaching API is down or visibly broken
- credentials/access failures block a required future owner/API check and are not already known
- a public-facing issue is urgent, such as wrong price/contact path or broken contact route
- Auris must decide between capacity modes, public-code deployment, profile cleanup or new lead handling

Everything else should be `DONT_NOTIFY`.

### Cycle 60 Falsification

H027, strategic pruning is higher leverage than more ideas while Auris is close to full:

- Result: strengthened.
- Evidence: stable public checks, missing owner/student rows, and external WIP/toil sources all point to limiting active work.
- Refinement: pruning must include a repeat-run stop rule, otherwise the automation can turn pruning itself into work.
- Next test: if the next quiet heartbeat has no trigger, it should use this contract and avoid new durable artifacts.

H028, evidence routing prevents false work after pruning:

- Result: strengthened but stress-tested.
- Evidence: Packet BH prevented new campaign/platform work, but its own `no_new_evidence` branch was loose enough to justify another process artifact.
- Refinement: router improvement is allowed once when the router itself is incomplete; repeated router improvement is not progress.
- Next test: classify the next incoming item. If it routes cleanly, update only one destination; if nothing arrives, stay quiet.

Favored idea tested:

`The deep-cycle protocol should always gather 8 external sources and update 3 artifacts.`

Result: weakened for repeated `no_new_evidence`.

The deep-cycle protocol is useful when a real theme is open. When the trigger is explicitly `no_new_evidence`, forcing broad source discovery can create false work. The safer standard is: one bounded process stress test is useful; repeated quiet cycles should be treated as successful restraint.

### Cycle 60 Strategic Synthesis

Strongest next move:

Keep Packet BH as the first stop, now with the Quiet Cycle Contract. The next meaningful work should come from owner/student/prospect/capacity/access evidence, not another speculative artifact.

What Auris should not do yet:

- Do not create a CRM, waitlist, routing form or prospect dashboard.
- Do not restart GBP/LinkedIn/social posting.
- Do not create new SEO pages or city pages.
- Do not write another platform spec.
- Do not run ads.
- Do not keep re-auditing stable live headers/sitemaps as growth research.

Smallest practical test:

The next heartbeat with no new evidence should run at most the allowed light checks and then stop. The next heartbeat with evidence should update exactly one matching row.

Evidence that would change the recommendation:

- A slot opens or Auris wants to fill a place within 30 days.
- A first inquiry row arrives.
- Two current-student continuity rows arrive.
- A GBP owner snapshot/contact-link truth row arrives.
- A live public or platform check fails.
- GSC/GBP access returns with material data.

Risk of acting too early:

The automation creates an admin system around a business that is already nearly full, and the brand drifts toward funnel/academy behavior.

Risk of waiting:

Future-fit inquiries could be missed. That risk is handled by the first-inquiry/follow-up row, not by pre-building routing software.

## Process Critique

Highest-signal source:

Local strategy memory, because the problem was not missing ideas; it was repeated evidence waiting.

Most useful external source:

Official privacy, GA and GBP docs. They clarify why the router must keep clicks, owner metrics and private lead truth separate.

Noisy source:

Routing/waitlist/CRM product categories. They are useful future patterns, but they make software feel urgent before volume exists.

Source type to try next:

Owner/current-student evidence. Browsing cannot replace the first inquiry row, monthly GBP snapshot, GBP Calendly status or current-student continuity rows.

Process improvement:

Future cycles should start with this router after reading Cycle 58's ignore list. If the classification is `no_new_evidence`, the cycle should either do a light health check and log nothing material, or rotate only to an explicitly approved code/API pass.

## Packet BH: Evidence Trigger Router

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/evidence-trigger-router-cycle59.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/strategic-ignore-list-cycle58.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-pilot-tracker.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/research-roadmap.md`

If evidence arrives:

1. Classify it using the Router table.
2. Update only the matching row/artifact.
3. Update the relevant hypothesis.
4. Keep unrelated parked lanes parked.

If no evidence arrives:

1. Do not create a new artifact or lane by default.
2. Run only light public/API health checks if useful.
3. Record that no owner/student proof arrived.
4. Leave the next cycle pointed at the same router unless a better evidence source is found.

Unfinished threads:

- GBP Calendly status remains owner-side and unknown.
- First direct-contact inquiry row remains missing.
- Monthly GBP owner snapshot remains missing.
- Current-student continuity rows remain missing.
- Search Console/GBP API access remains unavailable from current local auth.
- Public-code hygiene remains approval-only.
