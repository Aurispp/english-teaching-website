# Continuous Strategy Automation Loop

Created: 2026-05-21
Updated: 2026-05-24 Cycle 51
Automation id: `continuous-teaching-business-strategy`
Cadence: hourly active thread heartbeat.

## Purpose

Run a compounding research-and-strategy program for English with Auris across growth, content, SEO, Google Business Profile, pricing, positioning, reviews, market trends, community signals, expansion opportunities, and the teaching platform.

The loop must also improve itself. If a cycle discovers better sources, better questions, better evidence standards, or a better way to structure future research, it should update the process notes, roadmap, or source map so later cycles become sharper.

This is not a status-check automation. Each cycle should behave like the next chapter in an investigation: read what was already learned, pick up an unfinished thread, gather new evidence, test assumptions, and leave the next cycle with sharper questions.

## Core Thesis

English with Auris should not try to look like a local academy. The stronger lane is a premium personal teacher for Spanish speakers who want to speak with more confidence in real adult/professional situations, backed by visible reviews and a learning platform that makes practice continue between classes.

## Workspaces

- Website repo: `/Users/aurisp/repos/teacher-website/`
- Teaching platform repo: `/Users/aurisp/repos/teacher-assistant/`
- Strategy memory folder: `/Users/aurisp/repos/teacher-website/docs/strategy/`

## Safety Boundaries

- Do not commit, push, deploy, edit credentials, contact third parties, submit forms, modify Google profiles, or make public-facing changes unless Auris explicitly asks.
- Treat `teacher-assistant` as read-mostly when dirty. Inspect freely, but avoid touching existing files unless directly requested.
- Strategy notes may be created or updated inside `docs/strategy/`.
- Use local/API credentials read-only where possible. Never print secrets.

## Memory System

The automation should treat these files as shared memory:

- `research-log.md`: chronological cycle record.
- `hypotheses.md`: living truth map with confidence and next tests.
- `research-roadmap.md`: active question queue and next-cycle handoffs.
- `content-strategy.md`: content/social/GBP strategy and reusable briefs.
- `platform-backlog.md`: student portal and teacher workflow strategy.
- `pricing-positioning.md`: offer, pricing, and channel logic.
- `review-proof-library.md`: public-proof themes and review usage.
- `market-intelligence.md`: outside-in trends, community signals, competitor moves, opportunities, and open market questions.
- Theme-specific files, such as `talk-the-talk-lead-magnet.md`.

If a useful memory file is missing, create it with a clear purpose and maintain it.

## Deep Cycle Standard

Do not use elapsed clock time as the measure of quality. A cycle is deep only if it completes the work package below.

Minimum completion conditions:

1. One primary research question is chosen from `research-roadmap.md`, prior unfinished threads, or a clear strategic gap.
2. At least 12 local artifacts are inspected across notes, website, live site outputs, and/or teaching platform code.
3. At least one data/API layer is checked or explicitly attempted.
4. At least 8 external evidence points are gathered when network is available, including primary/official sources where relevant and at least 2 outside-in trend/community/social signals when the theme is not purely technical.
5. At least 2 existing hypotheses are tested, with one attempt to weaken or disprove a favored idea.
6. At least 3 durable artifacts are updated, not only the research log.
7. A concrete implementation-ready artifact is produced or materially improved.
8. The research process is briefly critiqued: what worked, what source was weak, what source should be added next, and whether the protocol/roadmap/source map needs updating.
9. A next-cycle packet is left with exact files, APIs, searches, and hypotheses for the next run.

If a run is interrupted or constrained, it must write what was not completed and the next cycle should resume that work instead of restarting.

Cycle 38 process rule:

- If an owner/API gate blocks the same channel for more than one cycle, do not keep shrinking owner asks or creating more public-content drafts. Rotate once to a relationship-safe private action that can create Level 4 evidence, such as a review/referral action row, an anonymized inquiry note, a current-student pilot result, or a lead-source/price-anchor note.
- This rotation must still respect the brand: personal, non-transactional, no incentives, no pressure, no public changes without approval.

Cycle 39 process rule:

- For AI/product-threat questions, do not rely only on app homepages or hype articles. Always triangulate at least one official product source, one user-review/complaint source, one community thread, one hybrid/human-tutor source, and one local implementation path.
- Add app-store/Trustpilot-style complaint mining as a preferred source type because negative reviews reveal the gaps a personal teacher can own: trust, scoring, naturalness, subscriptions, nuance, accent bias and follow-up.

Cycle 41 process rule:

- For Work-English/professional-confidence cycles, separate three evidence types:
  - job posts prove use cases
  - competitors/marketplaces prove crowding and price anchors
  - owner-side inquiry notes prove buyer intent
- Do not let fresh job-demand evidence justify a new package or page by itself.
- A useful Work-English cycle must end in either a moment ladder, a lead ledger, or a stop/change rule. Another broad list of meetings/interviews/client calls is not enough.
- If no owner-side result arrives after one moment test, inspect review snippets or inquiry evidence before doing another job-post scan.

Cycle 42 process rule:

- For review-proof cycles, separate:
  - owned proof: Auris reviews and owner GBP truth
  - competitor proof: which themes are table stakes
  - policy proof: what can be asked/replied safely
  - price proof: whether proof appears next to lower anchors
- Do not ask students to include specific themes, keywords, city names or service names in reviews. Use only honest, non-directive asks.
- If a proof theme is common in competitors, the next artifact must connect it to Auris's mechanism or stop using it as differentiating proof.
- Marketplace review profiles are high-signal falsification sources but low-safety campaign destinations while price anchors are mixed.

Cycle 43 process rule:

- For acquisition measurement cycles, separate:
  - human buyer signal: anonymized source/proof/price/work-moment lead notes
  - channel-visible signal: GBP Performance, LinkedIn analytics, Calendly source fields
  - site/tool signal: UTM sessions, Talk/contact/form/Calendly intent events
- Human buyer signal outranks raw clicks and impressions when deciding channel priority.
- `talk_trial_click` is lead intent, not a booked trial.
- Do not build a prospect CRM or dashboard in the teaching platform until 5-10 manual rows show repeated fields.
- If a lead-source ledger already exists and no owner/lead evidence arrives, do not make a larger ledger. Rotate to another strategic question.

Cycle 46 process rule:

- For platform-retention concepts that already have a spec, do not create another spec by default.
- First decide one of four states: `manual pilot`, `implementation`, `retire/soften`, or `rotate`.
- If the missing evidence is student acceptance, current-student replies outrank more product pages, research papers or code inspection.
- If a manual pilot can use an existing workflow, use it before inventing a new table or dashboard.
- For `Your next 15 minutes`, the next evidence is anonymous pilot rows; if no pilot rows and no implementation request exist, rotate rather than re-opening the same feature idea.

Cycle 47 process rule:

- For owner-gated acquisition cycles, first classify the state as `owner row arrived`, `lead row arrived`, `action row arrived` or `no row`.
- If a one-row owner ask, ledger and action gate already exist, do not create another owner-capture artifact.
- If no row exists, rotate to another theme or implementation-ready packet. A blank ledger is not progress.
- Public review endpoints can validate count/rating proof and route readiness, but they cannot confirm owner reply status or reliably prove newest-review order.
- In owner-gated cycles, the implementation-ready artifact should be a decision gate or stop rule, not more fields.

Cycle 50 process rule:

- After an owner-requested public-copy patch changes acquisition posture, the next cycle should inspect the adjacent proof risk instead of repeating the same deploy/readiness gate.
- Separate `capacity truth` from `value proof`. Limited availability can make the site more honest, but it should not be treated as proof that a premium price is justified.
- If a local public-copy patch exists but is not deployed, write a pairing/stop rule and then rotate unless one of these changes: explicit deployment approval, public deploy happened, owner profile evidence arrived, or an inquiry row arrived.
- For price-proof cycles, inspect both human-visible pricing copy and machine-readable offer/schema descriptions. They should tell the same story, but schema is a coherence layer, not a ranking shortcut.

Cycle 51 process rule:

- When Auris removes a scheduling layer, immediately classify the measurement mode before doing more channel analysis.
- Current mode after Calendly removal: `direct_contact_only` / `direct_contact_future_availability`.
- Do not keep treating Calendly source fields, embedded events, booking widgets or scheduled-event dashboards as active proof unless Calendly is restored.
- In direct-contact mode, separate:
  - click intent: `contact_click`, `talk_contact_click`, GBP website/call/message actions
  - private lead truth: WhatsApp/email/phone/DM reply content and outcome
  - follow-up risk: next action/date so future leads do not disappear in inboxes
- If no direct-contact row exists, do not build a larger CRM, waitlist or form. Rotate to GBP profile/service coherence, review freshness, or student-retention evidence.

## Cycle Flow

### 0. Orient

- Read the latest entries in `research-log.md`.
- Read `research-roadmap.md`, `hypotheses.md`, and any artifact relevant to the chosen theme.
- Determine the next cycle number from the research log.
- Check git status for both repos.
- Identify what the previous cycle said was unfinished.
- Choose one primary theme, not a random mix.

Theme rotation pool:

- SEO/Search Console and indexing.
- Google Business Profile, reviews, and local trust.
- Pricing and offer architecture.
- Content/social strategy.
- Competitor positioning.
- Student-platform UX.
- Teacher workflow.
- Onboarding and retention.
- Talk the Talk lead magnet.
- Business-English offer.
- Measurement and analytics.
- Trend/community intelligence.
- Expansion strategy.

### 1. Local Excavation

Use `rg`, `sed`, `git`, `curl`, and targeted file reads. Inspect at least 12 relevant local artifacts. Good cycles usually include:

- 3-4 strategy docs.
- 3-4 website files or live outputs.
- 3-4 teaching-platform files or UX/code regions.
- 1-2 data/config outputs such as sitemap, robots, metadata, analytics events, API helpers, or previous snapshots.

Summarize what the local evidence supports, weakens, or leaves unclear. Prefer file references and exact page/route names.

### 2. Data/API Pass

Use available local credentials safely and read-only where useful.

Possible checks:

- Search Console query/page data for 28, 90, and 180 day windows.
- URL inspection for key pages.
- Sitemap status.
- GTM/tag read-only state.
- GA4/key-event visibility if accessible.
- Live Google reviews endpoint.
- Live website metadata, headers, schema, and crawlability.

If a data check fails, record the failure and why, then continue with another evidence layer.

### 3. External Market And Trend Intelligence Pass

Gather at least 8 external evidence points when network is available. Do not only browse official docs or direct competitors. Look for demand, pain, objections, social language, and emerging opportunities.

Do not start with a fixed source list and stop there. Start by asking: "Where would the most useful evidence for this question live?" Then discover sources. Useful sources may include search results, forums, social platforms, comments, marketplaces, app reviews, job posts, event listings, course reviews, local directories, podcasts, newsletters, YouTube videos, Google Business Profiles, public LinkedIn posts, product review sites, official docs, academic/industry reports, or competitor funnels.

Prioritize:

- Official Google/Search/GBP docs for search/local claims.
- Direct competitor pages in Castelldefels, Gava, Barcelona, and online private English.
- Tutor marketplaces and price comparables.
- Social/content examples in English-for-Spanish-speakers.
- Reddit/community/forum threads where learners discuss speaking anxiety, tutors, AI tools, bad classes, motivation, exams, professional English, or Spanish-speaker problems.
- LinkedIn/public professional content around business English, meetings, interviews, presentations, HR/L&D, Barcelona professionals, freelancers/autonomos, and small teams.
- YouTube/TikTok/Instagram creator examples and comments when accessible.
- Adult/professional learning research.
- Business-English providers and pricing.
- Comparable learning tools or student-retention products.
- AI language-learning tools and complaints/comparisons involving human feedback.

For every source, capture the claim it supports or weakens. Avoid long copied text.

When using Reddit or social/community evidence:

- Capture the pattern, not just one anecdote.
- Distinguish attention signals from buying intent.
- Note the exact language of pain when useful.
- Mark confidence lower unless repeated across multiple sources.
- Add durable signals to `market-intelligence.md`.

When a cycle discovers a useful new source type, add it to `market-intelligence.md` Source Map or `research-roadmap.md` packets so future cycles reuse it.

### 4. Falsification

Pick at least 2 existing hypotheses from `hypotheses.md`.

For each:

- State whether this cycle strengthens, weakens, refines, or disproves it.
- Cite local/API/external evidence.
- Update confidence.
- Define the next practical test.

Also ask:

- What idea do we want to be true but might be false?
- What evidence would make us stop doing this?
- What cheaper or simpler alternative could beat this plan?

### 5. Synthesis

Write the strategic interpretation:

- What is the strongest next move?
- What should Auris not do yet?
- What is the smallest practical test?
- What evidence would change the recommendation?
- What is the risk of acting too early?
- What is the risk of waiting?

Keep Auris's positioning central: personal teacher, Ireland-raised bilingual background, 11+ years with Spanish speakers, practical conversation, confidence, adults/professionals, premium pricing, private/small groups, invoice with NIF, and the student portal.

Also keep asking expansion questions:

- Is there a niche Auris should lean into more strongly?
- Which market signals point beyond local SEO?
- What trend could be turned into a low-risk test this week?
- What would make this a better business, not just a nicer website?

### 6. Artifact Production

Update at least 3 artifacts per cycle.

Depending on theme, produce or refine:

- Content briefs with hooks, scripts, captions, CTA, platform, evidence, and measurement.
- GBP post/reply/photo/service plans.
- Pricing/offer architecture and channel-pricing logic.
- SEO experiment plans and indexing diagnostics.
- Landing-page proof blocks and copy recommendations.
- Review-proof libraries grouped by outcome.
- Student-platform specs with decision rules, UX copy, data needs, and success metrics.
- Teacher-workflow specs.
- Measurement dashboards or experiment logs.
- Competitor maps and positioning tables.
- Trend radars, community-signal ledgers, opportunity maps, and expansion strategy notes.

The artifact should be useful if Auris later says "implement this."

### 6.5 Process Self-Improvement

Before finishing, critique the cycle's research method:

- Which source gave the highest-signal evidence?
- Which source was noisy, biased, or low-value?
- What source type should the next cycle try?
- Did the current protocol push the research in the wrong direction?
- Should `automation-research-loop.md`, `research-roadmap.md`, or `market-intelligence.md` be updated?

If the answer is yes, update the relevant strategy/process artifact. The process should become better at finding insight over time.

### 7. Research Log Entry

Append a dated entry to `research-log.md` with:

- Cycle number and theme.
- Repo status.
- Primary research question.
- Local evidence inspected.
- API/data evidence.
- External evidence.
- Hypotheses changed.
- Artifacts updated.
- Strongest next move.
- What not to do yet.
- Next-cycle packet.
- Process improvement notes.

### 8. Final Heartbeat Response

Use `DONT_NOTIFY` unless Auris must act now.

Notify only for:

- A credential/API break that blocks future cycles.
- A public site issue that is clearly urgent.
- A decision that requires Auris's judgment before continuing.

## Depth Guardrails

If the cycle feels shallow, continue by doing one of these:

- Compare the idea against 3 direct alternatives.
- Do an outside-in scan: Reddit, LinkedIn/public professional content, creator examples, competitor content, marketplaces, and learner forums.
- Run source discovery first: list 8-12 possible source types for the question, then pick the 3-5 most likely to reveal buying pain or strategy insight.
- Inspect the relevant implementation path in code.
- Pull a longer Search Console window and page/query split.
- Review competitors for the same claim.
- Build a concrete spec/table/calendar/checklist.
- Update the roadmap with precise next actions.

## Cycle 21 Process Improvement

When owner-side publishing metrics are missing for two cycles in a row, do not keep polishing the same channel theory.

Switch to an evidence layer that can still move the business:

- relationship-sourced proof
- review/referral requests
- private lead-source notes
- local partnership/source discovery
- owner-side screenshots only when the owner provides them

Review/referral cycles need an extra safety check:

- separate review requests from referral asks
- avoid incentives for Google reviews
- avoid requested wording/keywords
- avoid positive-only solicitation
- store no private student names in strategy docs

The process rule is: if a channel cannot be measured from automation, create a manual ledger and a small real-world test before doing more abstract research.

## Cycle 22 Process Improvement

Partnership/referral cycles must separate source attractiveness from activation readiness.

New rule:

- Map before outreach.
- Do not contact organisations, coworking spaces, associations, event organisers, students or third parties from automation.
- Treat local business/community sources as evidence locations first, not targets.
- Score each source on fit, buying intent, ease, brand risk and next test.
- Keep Auris's personal-teacher positioning central; avoid drifting into academy, FUNDAE, corporate procurement or discount partnership language.
- Before recommending activation, require at least one owner-side signal: a student referral outcome, a warm introduction, an observed event where English work pain appears naturally, or a job-demand scan that names specific communication contexts.

Source-quality lesson:

- Official municipal/business/community pages are high-signal for mapping where people gather, but weak for proving buyer intent.
- Event listings are useful for observation, but noisy as lead evidence.
- Macro English reports are context only; pair them with job posts, community language or owner-side lead notes.

## Cycle 23 Process Improvement

Job-demand cycles must not confuse employer requirements with private-student buying intent.

New rule:

- Record the exact work moment from each job/source: meeting, client call, interview, presentation, proposal, customer incident, email, international team or promotion.
- Record the role context and buying-power proxy separately: sales, customer success, hospitality/MICE, tech, admin, autonomo, job seeker, small team or company.
- Classify each source as proving one of: use case, pain language, local demand, trust, willingness to pay or retention.
- Treat job boards and public job snippets as high-signal for use cases, but low/medium for willingness to pay.
- Before recommending a standalone offer page, require owner-side evidence: professional inquiry, booked trial, referral language, review theme or GBP/LinkedIn response.

Source-quality lesson:

- Direct job snippets were more useful than macro language reports because they named the actual communication tasks.
- Official employability sources were useful as local context, not proof of premium private demand.
- Community threads were useful for the pressure/confidence language, but need to be paired with lead notes before shaping pricing.

## Cycle 24 Process Improvement

Pain-language cycles must preserve dignity.

New rule:

- Separate `raw pain language` from `public brand language`.
- Community threads and testimonials can use intense words like freeze, panic or block; Auris's public copy should usually translate that into warmer professional language.
- For premium adults/professionals, test softer pressure phrases first: `your English gets smaller`, `the moment is too fast`, `you know more than you can access`, or `you sound less clear than you are`.
- Record whether a source proves pain, buying intent, price tolerance, or only content language.
- Do not let competitor coach pages make Auris sound like a performance coach or corporate trainer; use them to identify buyer language, then translate into personal teacher language.

Source-quality lesson:

- Research sources are high-signal for validating anxiety/WTC claims, but they do not choose the sales copy.
- Competitor testimonials are high-signal for paid pain and transformation language.
- Marketplace profiles are high-signal for price-anchor pressure.
- Corporate platforms are trend signals only; they are not tone models for English with Auris.

## Cycle 10 Process Learning

Profile-readiness cycles should not treat "public posting" as only a content problem. Before recommending a post cadence, run a four-layer comparison:

1. Destination safety: indexed/crawlable enough, live 200, correct UTM.
2. Proof safety: reviews, photos, services, owner replies, visible price and next action.
3. Comparison safety: what a buyer sees on Superprof/Tusclases/LinkedIn if they search Auris.
4. Measurement safety: what can be read automatically versus what must be logged manually.

Cycle 10 also corrected a stale assumption from Cycle 09: Superprof now shows Auris at 40 EUR/h main price and 30 EUR/h online, so the marketplace-price issue is narrower than first recorded. Future cycles must re-open high-impact profile URLs before repeating a pricing conclusion.

Useful source types to keep:

- Official GBP docs for what can actually be edited/measured.
- Bilingual review endpoint checks, because `language=es` and `language=en` can expose different review texts.
- Marketplace pages as price/proof comparables, but not as the brand north star.
- Local academy review pages for trust-pattern comparison.

Noisy source types to delay:

- Short-form handle discovery without confirmed handles.
- Broad LinkedIn examples unless tied to Auris's profile baseline or a specific post test.

## Cycle 11 Process Learning

Pricing-proof cycles should include a rendered UI audit, not only source-code inspection. The source copy already looked reasonable, but the live pricing section showed the first private-card scan still felt generic before the included strip and reviews did the heavier proof work.

When recommending a public claim about the platform:

1. Inspect the website surface where the claim appears.
2. Inspect the platform code that makes the claim true.
3. Check whether the claim is specific enough to justify price.
4. Separate pricing proof from pricing persuasion: strengthen concrete inclusions first, and avoid stuffing testimonials into the price card.

Useful source types to keep for pricing cycles:

- Rendered homepage snapshots and accessibility text.
- Premium one-to-one or business-English pricing pages.
- Marketplace local averages as falsification pressure.

## Cycle 12 Process Learning

Product cycles must separate three questions that can otherwise blur together:

1. Does the data exist?
2. Does the student see a clear next action?
3. Does Auris use the resulting signal in the next class?

For the platform, code inspection is highest-signal when it follows the actual user path:

- Student first screen.
- One route deeper where a good pattern may already exist.
- Backend/API support for the recommendation.
- Teacher prep surface where the student action should return.

Cycle 12 also showed that product-review sources are useful for motivation and expectation signals, but weak for deciding Auris's exact implementation. App reviews can tell us that learners value feedback, low-shame speaking practice and clear progress; they cannot prove that Auris should build AI or audio first.

New rule for future platform cycles:

- Before proposing a new feature, check whether an existing route already has the useful UX pattern one level deeper.
- Prefer deterministic teacher-shaped guidance before AI-shaped automation.
- Do not add teacher panels until there is a real student event or signal to display.
- Always include a current-student validation prompt, because retention strategy cannot be proven from public market evidence alone.

## Cycle 13 Process Learning

Implementation-readiness cycles should include a "student autonomy" check. A clear path can be helpful, but public product evidence shows a forced path can feel controlling, especially for returning or adult learners who know what they want to review.

New product-cycle rule:

- For recommendation features, define the primary action and at least two secondary escape routes.
- Test whether the recommendation is helpful or homework-like before expanding.
- Prefer "one useful suggestion" copy over command language.
- Separate technical readiness from student-readiness confidence.

Evidence hierarchy for future platform implementation cycles:

1. Existing UI path and route handlers.
2. Existing data/API path.
3. Browser/authenticated first-screen proof.
4. Aggregate usage baseline.
5. Current-student validation.
6. External product/research evidence.

External app evidence should be used to sharpen constraints, not to copy consumer-app mechanics wholesale.

## Cycle 14 Process Learning

Data cycles need two separate safety checks:

1. Do not print or copy credential-bearing lines from local files. Use key-only presence checks, sanitized environment loading, and read-only transactions.
2. Export aggregate counts only. Do not put student names, emails, answer text, feedback text, assignment titles, or private notes in strategy memory.

For product-retention cycles, treat "we can measure it" and "it is strategically important" as separate questions.

Cycle 14 showed the current measurable spine is SRS, not writing feedback, because recent database activity is heavily flashcard-weighted. That should influence the first card metric, but not shrink the whole teaching method to flashcards.

New product-data rule:

- Baseline the behaviour that already exists before adding a new card or dashboard.
- If a desired premium loop is not measurable, define the smallest event needed rather than building a broad analytics panel.
- Prefer a read-only aggregate query plus manual student validation over speculative dashboards.
- If local search reveals secret-looking strings, stop using line-printing search for that category and record only a hygiene note.

## Cycle 15 Process Learning

When an unapproved implementation decision repeats across cycles, create the real-world execution packet and then move on unless Auris answers.

The automation should avoid circling the same "should we build it?" question every hour. Once a manual pilot tracker exists:

- If Auris provides pilot results, score and interpret them.
- If Auris approves implementation, patch the app.
- If neither happens, switch the next cycle to a different open strategic theme.

Product research should also check whether the system already has a low-friction manual workflow before proposing new instrumentation. Cycle 15 found that the existing homework log can run the pilot without a new table or UI.

New source-quality note:

- Teacher-tool competitor pages are useful when they reveal workflow primitives: assignment, completion, weak spot, next lesson.
- They are noisy when they push "all-in-one" school-style scope that would make Auris feel less personal.
- Dashboard research should be used as a brake on analytics sprawl: visible data is not automatically useful action.
- Adult learning research when the claim involves review, memory or practice between classes.

Noisy source types to treat carefully:

- Single community comments about willingness to pay. They can reveal language, but they do not prove local conversion.

## Cycle 16 Process Learning

When a strategy packet is ready but owner-side metrics are unavailable, convert the next cycle into a baseline-and-execution gate instead of producing more drafts.

For GBP/acquisition cycles:

- Check Search Console and URL Inspection first, but do not mistake clean discovery plumbing for channel readiness.
- If sitemap submission is clean and pages are still not indexed, focus on uniqueness/proof and channel tests rather than resubmitting the sitemap repeatedly.
- Treat Google Business Profile as owner-side by default: the automation can prepare posts, check sources and build ledgers, but it should not modify the profile or publish.
- Record the exact profile metrics Auris must capture manually: views, searches, website clicks, calls, messages, bookings and top search terms.
- Prefer one high-signal GBP post with a baseline over a multi-channel calendar with no measurement.

Source-quality update:

- Google official GBP docs are mandatory for GBP recommendations, because they prevent bad tactical advice around phone numbers in post text, service-field stuffing and ranking myths.
- Local academy pages are high-signal for differentiation, but they bias toward scale, children, Cambridge and groups.
- Solo/professional English coach pages are useful for professional-confidence framing, but they prove the lane is crowded, not that Auris already has distribution.
- Community anxiety threads are useful for pain language; they do not prove local buying intent unless connected to GBP/LinkedIn/manual lead notes.

Avoid:

- Generic advice like "post more on social."
- Repeating old conclusions without new evidence.
- Creating more pages as a reflex.
- Treating platform features as good just because they are clever.
- Treating SEO impressions as buying intent without checking the query.
- Stopping at "make more content" without identifying the audience, pain, channel, hook, offer, and measurement.
- Letting the research orbit only the existing site/app instead of asking what the market is doing.

## Cycle 17 Process Learning

For indexing cycles, separate these questions before recommending action:

1. Can Google discover the route?
2. Can Google crawl the route?
3. Can Google render the route?
4. Is the initial/static HTML useful enough if rendering is delayed?
5. Is the rendered page unique and proof-rich enough to deserve indexation?
6. Does the page have enough internal/profile/off-page prominence to be prioritized?

Do not rerun Search Console and URL Inspection every hour when no public change happened. Use fresh prior results, then add a different evidence layer: live static HTML, rendered-route implementation, competitor proof density, and source-quality comparison.

New indexing diagnostic rule:

- If a page is crawled but not indexed and the sitemap/robots/routes are clean, stop treating discovery as the main problem.
- Check static fallback body content, route-specific usefulness, duplication/template similarity, internal link prominence, and real proof.
- Produce a patch plan before more page creation.
- Do not suggest city-page multiplication until one existing local page earns impressions or indexing.

Source-quality update:

- Official Google Search docs are high-signal for constraints, but they do not tell the exact reason a specific URL is excluded.
- Live static HTML checks are high-signal for SPA robustness.
- Competitor page comparison is useful when it reveals proof density and buyer expectations; it is dangerous when it tempts Auris into academy-style breadth.
- Marketplace pages are useful for demand and price-anchor falsification, but not as premium positioning models.

## Cycle 18 Process Learning

For profile/price/content-readiness cycles, separate public proof from public destination.

Marketplace profiles can contain excellent proof, but that does not mean they should be linked from the premium website or used as campaign destinations. Ask:

1. Does this profile support the current offer?
2. Does the visible price match the direct website price?
3. Could search/list snippets show a different anchor than the direct profile?
4. Does linking to it increase trust, or does it invite comparison shopping?
5. Is the profile an acquisition surface, a proof source, or a brand destination?

New process rule:

- If a profile has mixed price evidence, use it as research/proof memory but do not recommend adding it to the website until the price policy is deliberate.
- Do not let profile cleanup delay GBP if GBP already has a usable review proof asset and the owner can record baseline metrics.
- Gate LinkedIn differently from GBP: GBP is a local trust surface; LinkedIn is also an identity surface. If the personal profile headline/about are unclear, profile alignment comes before posting.
- When search snippets conflict with direct pages, record both. A buyer may see the snippet before the page.
- Add manual lead-source fields for `price anchor seen` and `marketplace mentioned` before drawing conclusions about channel quality.

## Cycle 19 Process Learning

For social/profile cycles, treat an owner-side profile snapshot as data, not merely user chat.

When Auris provides a profile view:

1. Capture the baseline metrics exactly: profile views, post impressions, search appearances, followers/connections.
2. Separate profile identity from content readiness. A good post can fail if the profile landing page is mixed.
3. Inspect visible trust conflicts: job-seeking status, old About copy, current role display, activity recency, featured links and profile language versions.
4. Use official platform docs only for editable-surface constraints; do not let generic "profile tips" replace owner-side evidence.
5. After a profile cleanup, the next useful evidence is a tagged post plus 24h/72h/7d metrics, not more theory.

New rule:

- Do not recommend publishing a LinkedIn acquisition post while the profile About section, primary role or public status contradicts the offer. Use profile cleanup as the first implementation step.

## Cycle 20 Process Learning

Canonical profile URLs are not the same as channel proof.

When Auris supplies a public profile URL:

1. Register the exact URL and a clean canonical/ledger version.
2. Decide direction of trust flow: should the owned site link out to the profile, or should the profile link into owned assets first?
3. Check whether public search snippets lag behind owner-side edits.
4. Separate profile placements with UTMs: contact info, Featured, About, custom button and organic post.
5. Do not use old LinkedIn Creator Mode/link advice without checking current official docs.

New rule:

- Do not add social/profile links to the website as default trust badges. First classify the profile as `proof source`, `acquisition surface`, or `brand destination`, then decide whether linking out helps or weakens the premium funnel.

## Cycle 07 Process Improvement

For channel/content cycles, classify every source by what it actually proves:

- Attention: people may watch, like, save, or comment.
- Trust: people may believe Auris is credible, warm, safe, and premium.
- Buying intent: people may inquire, book, compare prices, or choose a teacher.
- Retention: current students may practise more between classes.

Do not let an attention source, such as a viral creator example, answer a buying-intent question. Pair creator scans with at least one trust source, one price/proof source, and one local/professional intent source.

When direct social platforms are inaccessible or noisy, use second-order but still relevant evidence: public LinkedIn pages, local directories with social links, marketplace profiles/reviews, official platform docs, and live website/API baselines. Record the access limitation instead of pretending the scan was complete.

## Cycle 08 Process Improvement

When a cycle produces content/channel recommendations, it must also produce the measurement surface that will prove or falsify them.

For each proposed channel test, include:

- The exact destination URL and UTM structure.
- The visible platform metric to check, such as GBP website clicks or LinkedIn profile views.
- The owned-site event that should move, such as `talk_started`, `talk_completed`, `talk_trial_click`, contact click or form submit.
- The manual lead-source note to capture when analytics cannot follow the full booking path.
- A stop/change rule, not only a continuation rule.

For GBP cycles specifically, source discovery should include official docs for performance metrics, posts, photos, reviews and content policy before creating drafts. This prevents accidental bad advice such as phone numbers inside post descriptions or treating posts as a direct ranking hack.

## Cycle 09 Process Improvement

Before a cycle recommends publishing public content, run profile-readiness QA:

- Are the destination URLs live, indexable enough, and appropriate for the channel?
- Does the public profile someone sees before/after clicking match the promise in the post?
- Are visible marketplace prices or old profile claims likely to create doubt?
- Is the social profile discoverable and aligned, or is the post only a credibility experiment?
- What can be measured automatically, and what must be captured manually?

If owner-only surfaces are unavailable, do not pretend they were audited. Record the limitation and leave a precise owner-side packet for the next run.

## Cycle 25 Process Improvement

For proof-pairing cycles, separate three layers before recommending copy:

- Category proof: what competitors, academies, marketplaces and coaches already claim.
- Auris proof: what Auris can credibly prove through reviews, background, method, platform and direct teaching.
- Destination proof: what the clicked page/profile/API endpoint can actually show today.

Competitor pages can validate that buyers understand a promise, but they should not set Auris's tone. If competitors use broad corporate language, the cycle should translate the useful signal into Auris's personal, practical, premium voice rather than copying the structure.

When a post hook is ready, require a proof line and a measurement line before calling it implementation-ready:

- Proof line: what makes the promise believable?
- Measurement line: what will tell us whether the proof worked?

## Cycle 26 Process Improvement

For review-language cycles, separate three review signals before making recommendations:

- Review-content proof: what students actually say changed.
- Review-count proof: how many reviews and how fresh/visible they are.
- Review-policy constraint: what can be asked or replied to without pressure, incentives, selective solicitation or requested wording.

New rule:

- Direct review language is higher signal than competitor marketing copy for trust strategy.
- Competitor reviews can validate category-normal proof, but if they use the same words as Auris, the cycle must add a mechanism or stop calling the language distinctive.
- Review requests should be tied to real student outcomes and measured in a private ledger; strategy docs should store anonymous themes, not student names or private details.
- When review proof is strong but owner-side metrics are missing, the next cycle should interpret review/reply/ask results before creating another content calendar.

## Cycle 27 Process Improvement

When a cycle reaches `ready to sprint`, the next automation should prioritize result instrumentation over additional ideation.

For acquisition micro-sprints:

1. Name the public action.
2. Name the owner-side metric that proves whether anything happened.
3. Name the manual field that explains why the lead trusted the message.
4. Name the stop/change rule before recommending another post.

New rule:

- If owner-side action is the blocker, do not compensate by browsing more competitor pages. Produce a compact owner ledger, then wait for owner-side data or inspect an owner-provided screenshot/manual note.
- For review sprints, record Day 0 and Day 7 owner-side metrics. Without those, the cycle may still prepare copy but must not claim the channel is working.
- Add low marketplace anchors such as `18 EUR/h` to price-anchor fields when category pages show them; price pressure is often visible before individual tutor pages are clicked.

## Cycle 28 Process Improvement

When owner-side evidence is missing, produce a capture packet before more market exploration.

New rule:

- If the next best evidence lives in owner dashboards or private messages, convert the research question into a privacy-safe owner packet.
- Define the minimum viable packet before asking for anything: baseline metric, action log, lead-note fields, comparison metric and interpretation rule.
- Treat screenshots as structured data: transcribe only aggregates and anonymous short phrases.
- Do not let lack of API access become a reason to restart competitor scans.
- Do not recommend direct account access unless the manual packet repeatedly fails or the decision truly needs precise historical data.

Source-quality update:

- Official product docs are high-signal for which owner metrics exist and what constraints apply.
- Public competitor pages are low-signal once the open question is whether Auris's own sprint moved leads.
- Product/owner analytics docs should be paired with an implementation-ready ledger, otherwise the cycle only names metrics without making them collectible.

## Cycle 29 Process Improvement

When a capture packet is correct but too large, compress it before researching more.

New rule:

- If the previous cycle already identified owner-side evidence as the blocker, the next cycle should produce a one-message owner prompt before doing more market scans.
- Start with the smallest packet that creates Day 0: current review count/rating, one owner-side Performance screenshot/note, and any inquiry source/proof note.
- Use the owner dashboard as source of truth when public APIs disagree, lag or expose only limited data.
- Do not turn optional surfaces into requirements. LinkedIn, Calendly and WhatsApp notes are only required when those channels produced an action.
- If the live public endpoint changes a count, classify it as `needs owner confirmation`, not as automatic public copy guidance.

Source-quality update:

- Live public endpoints are high-signal for proof QA, but not complete owner-side truth.
- Official product docs are useful only when they reduce the ask to a collectable field.
- Direct public fetches of profile platforms can be low-value or blocked; prefer owner screenshots when the platform is private, rate-limited or login-heavy.

## Cycle 30 Process Improvement

When public proof is ready but owner-side evidence is missing, use evidence levels.

New rule:

- Classify each cycle's evidence before recommending action:
  - Level 0: public endpoint/route readiness
  - Level 1: owner review truth
  - Level 2: Day 0 owner baseline
  - Level 3: Day 0/action/Day 7 comparison
  - Level 4: lead proof and price/trust language
- Do not let Level 0 evidence answer Level 3 or Level 4 questions.
- If a cycle cannot move beyond Level 0, it should reduce owner-capture friction or verify destination health, not produce more public content variants.
- If a real lead note arrives before dashboard data, classify it immediately; actual buyer language can outrank perfect measurement sequence.

Source-quality update:

- Live route checks are high-signal for readiness and low-signal for acquisition.
- Owner screenshots are high-signal when they are date/range-specific.
- The next best source type after repeated owner-data gaps is not competitor pages; it is a simpler owner ask or a single anonymized lead note.

## Cycle 31 Process Improvement

When evidence levels are defined but owner data is still missing, create row templates.

New rule:

- Evidence levels say what can be interpreted; ledger rows say exactly what to transcribe.
- If owner evidence arrives, fill only the matching row instead of asking for the whole packet.
- If no owner evidence arrives, do not make the ledger larger. Recheck public health, then make the next ask smaller.
- Do not treat a blank ledger as progress. It becomes useful only when at least one Review Truth, GBP Performance, Action Log or Inquiry row is filled.
- If a real inquiry note arrives first, skip the sequence and fill the Inquiry row plus Decision Output row.

Source-quality update:

- Official product docs are useful when they define fields for a ledger row.
- Public endpoints and canonical checks should be stored as Public Proof rows only.
- Owner-side evidence should be captured as typed rows: Review Truth, GBP Performance, Action Log, Inquiry and Decision Output.

## Cycle 32 Process Improvement

When a ledger exists but remains blank, create micro-intake prompts, not more ledger structure.

New rule:

- Ask for one row at a time: review truth, GBP Day 0, action status, lead note or Day 7 compare.
- If public data shows a fresh review or count drift, use it only to make the owner ask more specific.
- A fresh public review does not remove the need for owner-view reply status.
- If no one-row answer arrives after two cycles, stop shrinking the ask. Wait for owner-side data or rotate to another theme.
- Do not let the automation spend another cycle proving that owner dashboards contain owner-only evidence unless a new source or owner screenshot appears.

Source-quality update:

- Official product docs are useful when they justify why the evidence is owner-side.
- Official mobile screenshot docs are useful only as a friction-reduction source, not market evidence.
- Public proof freshness is a trigger for a better one-row ask, not a reason to publish or interpret performance.

## Cycle 33 Process Improvement

When a profile channel is blocked by mixed owner-side surfaces, create a handoff checklist instead of more content drafts.

New rule:

- A LinkedIn post draft is not publish-ready if the profile it sends people to still has unresolved surfaces: old About copy, public job-seeking, unclear primary role, missing owned-site link or missing baseline.
- Direct public fetches of LinkedIn can be blocked or misleading. Record fetch failures as source-quality evidence, then use owner screenshots or notes.
- Official platform docs are useful only when they become a concrete owner field: About EN/ES, Open to Work visibility, primary intro role, Contact info link, Featured link, profile views, search appearances or post impressions.
- Route health proves readiness only. It does not prove credibility, profile trust or acquisition.
- After a clean profile handoff exists, do not keep auditing LinkedIn docs unless LinkedIn changes its UI or Auris provides a new screenshot.

Source-quality update:

- Owner screenshots are the highest-signal source for profile surfaces and analytics.
- Live UTM/canonical checks are high-signal for destination readiness and low-signal for channel performance.
- Competitor/profile examples are low-value when the current bottleneck is Auris's own profile state.
- Platform code is useful as support proof only when a profile claim mentions between-class continuity.

## Cycle 34 Process Improvement

When a platform idea already has multiple specs, refresh the evidence and decide the gate instead of creating another version.

New rule:

- If a product concept already has a spec, readiness note, pilot tracker and baseline, the next cycle should not create another parallel spec.
- Refresh aggregate data only when it changes the decision: implement, pilot, hold, or reposition.
- A measurable behaviour like SRS can be the first baseline without becoming the whole teaching method.
- Do not turn a retention baseline into a public marketing claim until current-paid-student filtering or real student feedback supports it.
- Missing event tables should block analytics dashboards, not small UX improvements.

Source-quality update:

- Aggregate product data is high-signal for implementation priority and low-signal for buyer acquisition.
- Teacher-platform product pages validate category patterns but tend to pull toward all-in-one LMS sprawl.
- Current-student replies are the highest-signal source for whether guidance feels helpful or like homework.
- Use existing workflow bridges, such as the homework log, before inventing new validation infrastructure.

## Cycle 35 Process Improvement

When public proof improves but owner truth is still missing, do not turn the improvement into static copy, schema work or another content draft.

New rule:

- Public endpoint changes are Public Proof rows, not acquisition proof.
- If a count changes from 15 to 16, the next evidence type is owner Review Truth: owner count plus newest-review reply status.
- If the public proof can already display dynamically, avoid static copy churn until owner truth confirms it.
- Review replies beat new GBP posts when a fresh review may be unreplied.
- Official Search/GBP docs should become guardrails: reply rules, post status, local ranking factors and self-serving review schema limits.
- Do not add self-serving `LocalBusiness` review markup as an SEO shortcut for Auris's own Google reviews.
- If the same one-row owner ask has been made clearly, stop inventing smaller asks; rotate to a different theme until owner evidence arrives.

Source-quality update:

- Live Places/review endpoints are high-signal for public proof health and low-signal for reply status.
- Owner GBP review screens are the highest-signal source for reply status.
- Review function/component code is useful for deciding whether public copy needs a code change or can stay dynamic.
- Marketplace review counts are useful falsification because they show review volume does not remove price pressure.
- LinkedIn public fetch remains low-value while it returns HTTP 999; keep LinkedIn owner-screenshot based.

## Cycle 36 Process Improvement

When a core API credential stops exposing the expected property, do not quietly turn the failed response into business evidence.

New rule:

- Separate `access failure` from `zero data`.
- If Search Console `sites` returns empty, first verify token scope before concluding the site has no data.
- If the token lacks `webmasters` or `webmasters.readonly`, preserve the last trusted GSC baseline and mark the current cycle as `gsc_access_unavailable`.
- Use live route/header/static audits only for readiness while GSC is unavailable.
- Notify Auris only if the missing credential blocks future cycles or a requested decision depends on fresh Search Console evidence.
- Add static internal-link count to SPA indexing diagnostics; word count alone misses whether route fallbacks are isolated.

Source-quality update:

- A scoped credential check is a source-quality test, not market evidence.
- Empty API output from an under-scoped token is low-signal.
- Live static anchors are high-signal for SPA fallback robustness.
- Official docs are most useful when they become implementation constraints: useful content, crawlable links, sitemap as discovery only, canonical as hint, URL Inspection as indexed-source truth.

## Cycle 37 Process Improvement

When price evidence is mixed, distinguish the surface from the source category.

New rule:

- A direct profile page and a marketplace category page answer different questions.
- Direct profile evidence answers: "What does Auris publicly promise?"
- Category evidence answers: "What comparison frame does the buyer see nearby?"
- Do not collapse them into one average marketplace price.
- If a direct profile is aligned but the category/online/profile variant is not, the finding is a channel-pricing policy issue, not proof that the website price is wrong.
- Before a GBP/LinkedIn sprint, check whether GBP service prices, owned-site pricing, LinkedIn CTAs and marketplace profile prices create the same expectation.
- Track `profile_seen`, `price_anchor_seen` and `quoted_price_expected`; without those fields, price objections cannot be interpreted.

Source-quality update:

- Direct marketplace profiles are high-signal for Auris's current public promise.
- Marketplace category pages are high-signal for comparison pressure and low-signal for what Auris should charge.
- Professional coach pages are useful for validating a premium category, but low-signal for local conversion unless paired with inquiry notes.
- Reddit/local pricing threads are useful caution signals, not pricing policy by themselves.
- Teaching-platform code is valid support proof only for claims the product actually delivers today; do not turn future features like `Next 15 Minutes` into current marketing proof.

## Cycle 40 Process Improvement

When a previous cycle already made a strategic product decision, the next cycle should make the implementation path concrete and falsifiable.

New rule:

- Do not create another broad strategy note when the open question is now technical shape.
- Inspect the actual repo patterns before writing a product spec: model conventions, auth dependencies, route mounts, API wrappers, dashboard insertion points and deployment health.
- For student-generated data, run a privacy/source pass before specifying fields.
- Separate product DB evidence from public analytics. Optional student notes belong in the app, not GA4.
- For small learner-input features, always specify a visible skip path, failure state and stop condition.
- If a feature can be manually piloted through existing class follow-up, name that cheaper alternative before recommending a build.

Source-quality update:

- Local backend/frontend code is highest-signal for implementation scope.
- Official privacy/security/API docs are required for student-owned data.
- Language-product examples validate category patterns but do not prove Auris's students will adopt the feature.
- Community complaints are useful for falsification, especially around forced or low-quality correction loops.

## Cycle 44 Process Improvement

Pricing-proof cycles must audit both human-visible and machine-readable offer surfaces.

New rule:

- Check rendered/source pricing copy and static JSON-LD `Offer` descriptions in the same cycle.
- Treat GBP service prices/descriptions as a public offer surface if owner evidence exists.
- Separate direct profile evidence from category comparison evidence.
- Direct profile evidence answers: "What does Auris publicly promise?"
- Category evidence answers: "What cheaper anchors sit beside him?"
- Do not reopen marketplace scans every cycle unless a price may have changed or a lead mentions a lower anchor.
- Every price recommendation must include the lead-note fields that would disprove it: `price_anchor_seen`, `quoted_price_expected`, `proof_mentioned`, `booked_trial` and `lead_quality`.
- Teaching-platform code can support portal/follow-up proof only for features live today; do not use future product specs as current marketing claims.

Source-quality update:

- Official GBP and structured-data docs are high-signal for consistency requirements, not proof of ranking or conversion.
- Marketplace categories are high-signal for price pressure and low-signal for what Auris should charge.
- Premium competitor pricing is useful only when paired with the specific proof that justifies the rate.
- Learning research can justify review/spacing mechanisms, but it cannot prove buyers will pay.

## Cycle 45 Process Improvement

When an indexing diagnosis repeats unchanged, turn it into a do-or-rotate packet.

New rule:

- If live routes, sitemap, robots, redirects, canonicals and metadata are healthy across multiple cycles, stop rechecking the same layer unless a public deploy, GSC access change, crawl status change, or new page/query row appears.
- Static SPA fallback audits should include both body word count and static internal-link count.
- A static fallback patch is a quality experiment, not a guaranteed indexing fix.
- Every SEO implementation packet must name the waiting window and the evidence that would falsify it. For Auris's route pages, use URL Inspection and 14-28 days of page-level GSC rows after deploy.
- If GSC `sites` returns empty, classify it as an access/source-quality issue until token scope or owner evidence proves otherwise.
- If no approval or new data arrives, rotate to owner/lead evidence, review proof, pricing proof, or student-platform retention rather than re-diagnosing the same routes.

Source-quality update:

- Live route/header/static audits are high-signal for readiness and low-signal for acquisition.
- Official Google Search docs are strongest when they constrain the patch away from myths: sitemap as discovery only, canonical as a hint, JavaScript rendering as possible but not a reason for thin initial HTML, and URL Inspection as the page-level truth source.
- Local competitor pages are useful for proof-density comparison, but they should inform Auris's personal contrast, not pull him into academy-style copy.
- Marketplace pages are useful falsification for proof/price pressure, not brand positioning.

## Cycle 48 Process Improvement

When the owner clarifies capacity, make capacity state a first-class interpretation layer before judging acquisition.

New rule:

- Before declaring a channel weak because leads are low, classify capacity state:
  - `full`
  - `limited`
  - `opening_soon`
  - `actively_filling`
- If capacity is `full` or nearly full, success metrics shift from lead volume to:
  - review reply freshness
  - profile accuracy
  - trust proof freshness
  - monthly owner GBP snapshot
  - future-demand inquiry quality if anyone contacts
- If capacity is `opening_soon` or `actively_filling`, then use Day 0/Day 7 or Day 28 owner metrics plus lead-source rows.
- Do not recommend Google Ads, content volume, SEO page sprawl or a waitlist app until capacity mode supports it.
- Do not treat a blank lead ledger as failure while Auris is not trying to fill immediate slots.

Source-quality update:

- Owner capacity context can outrank channel theory.
- Waitlist software/product pages are pattern evidence, not adoption proof.
- Service-business community threads are useful for falsifying "fully booked is solved," but they are not direct evidence for an English teacher unless paired with Auris's capacity/inquiry rows.
- Website CTA scans are high-signal when public booking flows may not match actual availability.

## Cycle 49 Process Improvement

When Auris asks for a public-site implementation that changes acquisition posture, the next research cycle should create a deploy/readiness gate, not another broad strategy pass.

New rule:

- Classify the implementation state:
  - `local_only`
  - `owner_approved_for_deploy`
  - `deployed`
  - `measured`
- If the patch is `local_only`, verify build/rendering and document what would prove it helped or hurt.
- If the patch is capacity-related, record capacity state and CTA state together.
- Do not treat a softer CTA as automatically lower-risk. Test whether it creates confusion, especially "I thought you were closed."
- Keep deploy decisions owner-gated. The automation may document strategy and local readiness, but should not publish public changes unless Auris explicitly asks.
- When a local patch already exists, inspect the actual diff before writing new copy suggestions.

Source-quality update:

- Local diffs and rendered previews are highest-signal for implementation-readiness cycles.
- Official docs are useful for measurement surfaces and status labels, not for proving conversion.
- Waitlist/scheduling product pages validate patterns but are biased toward software adoption.
- The first inquiry after deploy is more important than another generic CTA best-practice source.

## Research Style

Be skeptical and practical. Distinguish what is generally true from what is true for Auris.

Always ask:

- What would make someone choose Auris at a premium price?
- What proof reduces risk for a new student?
- What would make current students practise more between classes?
- What can be tested in one week?
- What should not be built yet?
