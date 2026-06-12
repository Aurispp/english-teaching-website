# Hypothesis Tracker

Last updated: 2026-06-02 Cycle 116

## H001: The core positioning should be "personal alternative to academies."

- Status: strengthened.
- Confidence: high.
- Evidence: local competitors dominate academy-style claims: years open, native-teacher teams, Cambridge, children, groups, official centers. Cycle 11 strengthened this by comparing local/private-class proof: academies sell scale and structure, while Auris's stronger proof is direct relationship, Spanish-speaker insight, reviews, and platform continuity.
- Next test: if editing the site, strengthen personal follow-up near pricing first; later add a subtle academy-vs-private-teacher FAQ/section and monitor CTR/indexing.

## H002: Google Business Profile will beat broad SEO for near-term leads.

- Status: strengthened but gated by owner-side profile readiness.
- Confidence: high.
- Evidence: Search Console remains tiny and homepage-only in Cycle 10: 28 days = 1 click / 169 impressions, 90 days = 6 clicks / 306 impressions, 180 days = 18 clicks / 651 impressions. URL Inspection says the homepage is indexed, `/talkthetalk` and `/clases-ingles-castelldefels` are crawled but not indexed, and `/ingles-empresas-castelldefels` is now discovered but not indexed. Live Google reviews remain the strongest public proof at 5.0/15.
- Next test: publish only the Week 1 review-led GBP post after confirming GBP photos/replies/services, use the homepage UTM, and track GBP actions plus manual source notes.

Cycle 16 update:

- Status: strengthened.
- Confidence: high.
- Evidence: fresh Search Console still shows only the homepage with rows: 28 days = 1 click / 169 impressions, 90 days = 6 clicks / 306 impressions, 180 days = 18 clicks / 651 impressions. Sitemap API shows the sitemap submitted/downloaded on 2026-05-21 with 0 warnings and 0 errors, so discovery plumbing is not the blocker. URL Inspection still has the homepage indexed, Talk/local pages crawled but not indexed, and the business page discovered but not crawled/indexed. Live Google reviews remain 5.0/15.
- Next test: use `gbp-week-one-execution-pack.md` to record the owner-side GBP baseline, then publish only the review/confidence Week 1 GBP update from the owner UI.

Cycle 36 update:

- Status: strengthened, with a credential caveat.
- Confidence: high.
- Evidence: Search Console could not be refreshed because the current local Google token lacks `webmasters.readonly` scope and returns no Search Console sites. Live route checks still show all campaign destinations returning 200 with correct canonicals, while the review endpoint remains `5.0 / 16`. No new evidence has moved local/business/Talk pages ahead of the indexed homepage as campaign destinations.
- What this strengthens: GBP/reviews/homepage remain the near-term acquisition path.
- What this weakens: waiting for SEO refreshes when GSC access is unavailable or treating healthy route checks as acquisition evidence.
- Next test: restore GSC read scope or use owner-side GSC rows; until then, judge the proof sprint by owner GBP Performance and manual inquiry notes.

Cycle 38 update:

- Status: strengthened, with a private-channel refinement.
- Confidence: high for GBP over broad SEO, medium-high that referrals can beat LinkedIn while owner metrics are missing.
- Evidence: GBP owner Performance and review truth remain gated, while the live reviews endpoint still returns `5.0 / 16` and includes a fresh former-student referral pattern. The referral UTM destination returns 200, but GA4 cannot see private WhatsApp or review UI outcomes.
- What this strengthens: GBP remains the first public trust channel, but current/former-student referrals are the first private trust test while GBP is owner-gated.
- What this weakens: waiting for GSC or LinkedIn before learning anything from current student trust.
- Next test: if no owner GBP data arrives, run the Cycle 38 warm-proof sprint and compare any qualified referral against GBP/LinkedIn once metrics arrive.

Cycle 43 update:

- Status: strengthened but made Level 4-dependent.
- Confidence: high for GBP as the first public trust channel; medium until an inquiry row exists.
- Evidence: official GBP Performance docs support owner-side views, clicks, calls, messages and bookings, and Google local ranking docs keep reviews/prominence relevant. Cycle 43 route checks show the GBP homepage UTM is live, but live route health and GBP metrics still cannot reveal whether the buyer noticed reviews, method proof, price or work moment.
- What this strengthens: run GBP only with Day 0/Day 7 plus lead-source proof rows.
- What this weakens: treating website clicks or views as enough to choose GBP over LinkedIn/referrals.
- Next test: use `lead-source-proof-ledger-cycle43.md` to classify the first GBP-origin inquiry by `source_confidence`, `proof_specificity`, `work_moment`, `price_anchor_seen`, `booked_trial`, `lead_quality` and `human_signal_strength`.

Cycle 45 update:

- Status: strengthened but not advanced by fresh performance data.
- Confidence: high.
- Evidence: live route checks still show 200/canonical/index-follow for homepage, Talk, local and business, but the current Search Console API token returns `siteCount: 0` and cannot replace the Cycle 16 homepage-only baseline. Static route readiness has not become acquisition proof.
- What this strengthens: GBP/reviews/homepage remain the best near-term public route while route pages mature.
- What this weakens: treating a static fallback patch as a faster lead engine than the already indexed homepage plus review proof.
- Next test: if Auris wants acquisition now, capture owner GBP Day 0 and use the homepage UTM; if Auris wants SEO/site work, apply Packet AT as a bounded quality experiment.

Cycle 48 update:

- Status: refined and partially weakened as a near-term lead claim.
- Confidence: high that GBP/reviews are the best public trust base; medium-low that they should be judged as a near-term lead engine while Auris is nearly full.
- Evidence: owner evidence now confirms `5.0 / 16`, 520 profile views, `<50` searches and 2 website clicks/customer interactions across the visible Dec 2025-May 2026 chart. Auris also clarified nobody is contacting him yet and that he is almost fully booked, building slowly for future leads. Official GBP Performance docs support tracking owner-side views/searches/interactions by date range; Google local docs still support profile completeness, reviews, replies and photos as trust/prominence signals.
- What this strengthens: GBP is the right trust-maintenance base while broad SEO and static routes remain weak.
- What this weakens: interpreting no contacts as channel failure before capacity mode and action status are known.
- Next test: classify the next month as `Trust Maintenance Mode` unless a slot is opening. Track review reply status plus one monthly GBP snapshot; only judge acquisition after a deliberate capacity-opening action and at least one inquiry row.

Cycle 53 update:

- Status: strengthened as a trust/profile channel, refined around contact-link coherence.
- Confidence: high for GBP as the trust base; medium-low for near-term lead engine while full.
- Evidence: the live website is now direct-contact, but prior owner/Search evidence showed `Appointments: calendly.com` on the Google profile. Official GBP docs treat booking/appointment links as profile-level action links, so website changes do not automatically update that surface.
- What this strengthens: before any GBP post/ad/sprint, the profile should show a coherent path to contact Auris.
- What this weakens: judging GBP by leads or clicks while the profile may be pointing to an old booking path.
- Next test: fill `gbp_contact_link_truth`: whether an appointment link is visible, domain, action taken, status and reason.

Cycle 55 update:

- Status: strengthened and made removal-verification specific.
- Confidence: high for GBP as the trust base; medium-low for near-term lead engine while full.
- Evidence: live site remains direct-contact and official GBP docs show booking/appointment links are owner/profile-layer links. The next proof is not another public scrape; it is whether the owner UI status is removed, pending, blocked, provider-request, not found or intentionally kept.
- What this strengthens: GBP should be cleaned or intentionally classified before any post/ad interpretation.
- What this weakens: treating the Google Ads promo box or old Calendly link as evidence of demand.
- Next test: use Packet BD and fill one GBP Calendly removal verification row.

Cycle 56 update:

- Status: strengthened as a trust base, not a reply-driven lead engine.
- Confidence: high for GBP/reviews as trust infrastructure; medium-low for near-term leads while full.
- Evidence: live reviews endpoint still returns `5.0 / 16`, Google official docs make review replies public and reviewer-visible, and owner context says Auris is nearly full. Community/practitioner evidence supports replies as human trust and possibly engagement, but not as a guaranteed ranking button.
- What this strengthens: review replies are a useful low-pressure GBP maintenance action.
- What this weakens: interpreting a completed reply as acquisition progress without owner Performance or an inquiry row.
- Next test: use Packet BE to record reply status only if useful, then rotate to monthly GBP snapshot or first direct-contact inquiry row.

Cycle 58 update:

- Status: strengthened as trust infrastructure and explicitly parked as an acquisition sprint.
- Confidence: high for GBP/reviews as the right local trust base; low for any new GBP post/ad conclusion without owner metrics or inquiry rows.
- Evidence: live reviews endpoint still returns `5.0 / 16`, live site/API checks are healthy, and official GBP Performance docs confirm that profile views/searches/interactions are owner-side metrics. The remaining GBP items are owner evidence: monthly snapshot and Calendly removal status.
- What this strengthens: keep GBP in trust-maintenance mode.
- What this weakens: another GBP post calendar or Google Ads prompt while Auris is close to full.
- Next test: monthly owner snapshot or first direct-contact inquiry row; no new GBP campaign until capacity changes.

Cycle 116 update:

- Status: strengthened as a trust-maintenance trigger, not an acquisition sprint.
- Confidence: high for public proof, medium until owner-side reply truth arrives.
- Evidence: the live public reviews endpoint now returns `5.0 / 17` in both English and Spanish variants while homepage, Talk, sitemap and teaching API remain healthy. The public count changed, but owner-side newest-review and reply status are still gated.
- What this strengthens: GBP/reviews remain the right local trust base and should be maintained with timely, human replies.
- What this weakens: treating the new count as a reason for a GBP post/calendar, static copy edit, or acquisition interpretation.
- Next test: one owner Review Truth row for `17`, newest-review theme/date if safe, and reply status.

## H003: More landing pages alone will not solve acquisition.

- Status: strengthened.
- Confidence: high.
- Evidence: `/clases-ingles-castelldefels` is crawled but not indexed; `/ingles-empresas-castelldefels` unknown; homepage holds all current impressions.
- Next test: improve uniqueness and internal proof on the local page before adding more URLs.

Cycle 17 update:

- Status: strengthened and made implementation-specific.
- Confidence: high.
- Evidence: sitemap/robots/redirects are correct, all routes return 200, and the local page is already crawled but still not indexed. Live/static checks show the route fallbacks are thin: homepage 0 static body words, Talk 29, local 38, business 36. Google's official SEO guidance emphasizes useful, unique, people-first content and crawlable links, while local competitors have broader proof and more route-specific trust. This weakens the idea that adding more URLs is the answer.
- Next test: if Auris approves site work, make the P0/P1 uniqueness/static fallback patch in `seo-indexing-diagnostics.md`, then wait for URL Inspection/page-level GSC changes before adding any new local pages.

Cycle 36 update:

- Status: strengthened.
- Confidence: high.
- Evidence: live static counts remain thin, and Cycle 36 adds a sharper finding: the dedicated static fallbacks have zero internal links before React renders. Local SERP evidence still shows academies and marketplaces with denser proof, review volume, services, and price anchors.
- What this strengthens: if site work happens, improve the existing Talk/local/business routes before adding URLs.
- What this weakens: town-page sprawl, sitemap resubmission and schema fixes as the next SEO move.
- Next test: add useful fallback copy plus static internal links only if Auris approves implementation, then inspect changed URLs once after deploy.

Cycle 45 update:

- Status: strengthened and converted into a stop/revisit rule.
- Confidence: high.
- Evidence: the same route weakness remains: Talk/local/business static fallbacks are only 29/38/36 words with zero static internal links, while sitemap, robots, redirects, canonicals and metadata are healthy. Local academy and marketplace examples show denser proof and clearer route-specific value.
- What this strengthens: improve existing routes before adding pages, but only if site work is approved.
- What this weakens: another broad indexing diagnostic without public changes, fresh GSC access or route-level impressions.
- Next test: apply Packet AT P0 if approved; otherwise rotate away from indexing until a deploy, GSC restoration or page-level query rows change the evidence.

Cycle 54 update:

- Status: strengthened with a post-deploy hygiene caveat.
- Confidence: high.
- Evidence: production now has a meaningful contact/copy deploy, but the sitemap still shows `2026-05-21` for every route and static fallbacks remain thin. Google docs support accurate `lastmod` for significant content/schema/link changes, while the route plumbing still returns 200.
- What this strengthens: sitemap/static cleanup belongs in an approved code pass, not another diagnosis cycle.
- What this weakens: treating stale `lastmod` as an urgent acquisition blocker.
- Next test: if code work is approved, use Packet BC for message/schema/sitemap cleanup or Packet AT for the larger static fallback experiment.

Cycle 58 update:

- Status: strengthened and parked.
- Confidence: high.
- Evidence: Google helpful-content guidance warns against lots of search-first content and artificial freshness. Cycle 58 live checks still show healthy crawlability with stale `2026-05-21` sitemap dates, which is hygiene rather than proof of lost leads.
- What this strengthens: no new city/local SEO pages and no repeated indexing diagnosis without approval, deploy or fresh GSC data.
- What this weakens: using spare automation cycles to create more landing-page ideas.
- Next test: only run Packet BC/AT if Auris approves code work or GSC access/page-query evidence changes.

## H004: 40 EUR/h is viable only if the premium is visible in the first minute.

- Status: strengthened and tied to product proof.
- Confidence: high.
- Evidence: Cycle 11 added rendered homepage proof and premium/local pricing comparables. Cycle 12 strengthens the product side: the platform already has assignments, feedback, notes, SRS and Talk the Talk, but the first premium proof should become "you have one clear next step between classes." External evidence from Preply's human-plus-AI direction and mobile learning/SRL research supports guided between-class practice as valuable.
- Next test: if Auris asks for platform work, implement the `Next 15 Minutes` card before bigger portal claims. If Auris asks for website work, use the Cycle 11 pricing proof patch but avoid promising automated practice habits until the card ships.

Cycle 18 update:

- Status: strengthened and narrowed to profile-price coherence.
- Confidence: high.
- Evidence: direct Superprof now shows a largely aligned 40 EUR/h profile with stronger proof copy, but Tusclases remains publicly visible at 30 EUR/h and Superprof/search snippets can still show lower or stale anchors. Local marketplace lists continue to show many 10-30 EUR/h alternatives. Premium/professional examples justify higher prices through specific outcomes, structure, feedback, credentials and proof, not through the generic claim of personalised classes.
- Next test: keep website at 40 EUR/h, avoid adding marketplace links to the website, and add `price anchor seen` to the manual lead-source ledger during the first GBP/LinkedIn sprint.

Cycle 37 update:

- Status: strengthened and made policy-specific.
- Confidence: high.
- Evidence: fresh public evidence shows the Superprof direct profile at 40 EUR/h with 5.0/7, verified contact, 20 students and stronger Ireland/11 years/portal/NIF copy, so the premium anchor is defensible. The weakness is coherence: Superprof online still shows 30 EUR/h, Tusclases remains 30 EUR/h, marketplace category averages sit around 14-18 EUR/h, and the website private card still says the generic `1-on-1 lessons tailored to you`.
- What this strengthens: 40 EUR/h should remain the owned-site anchor, but it needs visible inclusion proof in the first pricing view.
- What this weakens: lowering the website price, hiding the price, or assuming a good Superprof direct profile has solved marketplace comparison.
- Next test: use the Cycle 37 website pricing copy gate if implementation is approved, and track `profile_seen`, `price_anchor_seen`, `quoted_price_expected`, `proof_mentioned` and `lead_quality` in every inquiry.

Cycle 44 update:

- Status: strengthened, with a schema/copy refinement.
- Confidence: high.
- Evidence: live homepage JSON-LD still exposes the 40 EUR/h private offer with the generic description `One-on-one online English lessons tailored to your specific needs`, and the rendered pricing copy still says `1-on-1 lessons tailored to you`. Fresh external checks confirm both sides of the pricing tension: Superprof direct supports Auris at 40 EUR/h with strong proof, while Superprof online/Tusclases/category contexts still create 30, 18 and 14 EUR anchors. FunTalk and Word Power show 38-55 EUR private/professional pricing can be credible when tied to specific support.
- What this strengthens: 40 EUR/h should stay, but the first pricing view and JSON-LD offer description should name the mechanism: real speaking, correction, Spanish-speaker patterns, saved vocabulary, portal review and progress.
- What this weakens: relying on `tailored to you` or `portal access` as sufficient premium proof.
- Next test: if implementation is approved, apply the Cycle 44 premium proof stack to `src/translations.js`, `src/components/PricingSection.jsx` and `index.html`; then track `price_anchor_seen`, `quoted_price_expected`, `proof_mentioned`, `booked_trial` and `lead_quality`.

Cycle 49 update:

- Status: strengthened, with an availability-copy caveat.
- Confidence: high.
- Evidence: the local pricing/contact patch now adds limited-availability language and softer CTAs, and `npm run build` passes. This aligns the site with Auris's nearly-full capacity, but it does not add new premium mechanism proof. External CTA guidance supports clear action wording, while waitlist/scheduling patterns show that availability copy should capture timing and fit, not just reduce urgency.
- What this strengthens: 40 EUR/h can remain visible while the CTA becomes calmer, but the premium proof stack is still a separate needed layer if Auris later drives traffic.
- What this weakens: assuming "limited availability" itself justifies the premium or improves conversion.
- Next test: if the patch is deployed, track whether inquiries mention availability, price, reviews, portal/follow-up or confusion. If price objections rise, revisit the Cycle 44 premium proof stack before changing price.

Cycle 50 update:

- Status: strengthened and converted into a deploy-pairing rule.
- Confidence: high.
- Evidence: local code now places limited-availability copy before the pricing cards, but the private card and JSON-LD offer still use generic `tailored to you` / one-on-one descriptions. Fresh external checks keep both sides of the tension live: Superprof direct supports Auris at 40 EUR/h with 5.0/7, 20 students and stronger Ireland/portal/NIF copy, while category/marketplace contexts still create lower anchors. FunTalk, Callan and Word Power show 38-55 EUR private/professional offers can be credible when tied to specific support and outcomes. Teaching-platform code confirms the portal/SRS proof is real.
- What this strengthens: the availability patch should be paired with the Cycle 44 premium proof stack before any real traffic push.
- What this weakens: relying on scarcity/limited availability as a value justification.
- Next test: if Auris approves deployment, choose Option A from `premium-proof-pairing-gate-cycle50.md`: deploy the availability patch with the private-card proof, included support sentence and JSON-LD `Offer.description` update. If availability-only ships, track `proof_mentioned`, `price_anchor_seen`, `quoted_price_expected` and `availability_confusion` before changing price.

Cycle 51 update:

- Status: strengthened with a direct-contact caveat.
- Confidence: high.
- Evidence: the current local site removes Calendly and highlighted scarcity, leaving a quieter availability line plus WhatsApp/email contact. This makes the path warmer, but it does not explain the 40 EUR/h value by itself.
- What this strengthens: premium proof still needs to come from method, reviews, personal follow-up, Spanish-speaker diagnosis and portal continuity.
- What this weakens: treating direct contact, "close to full", or lower booking pressure as price proof.
- Next test: after any deploy, record whether direct inquiries mention proof, price anchors and availability confusion before changing price or adding scheduling back.

Cycle 52 update:

- Status: strengthened with production evidence.
- Confidence: high.
- Evidence: commit `a304f9c` is live on production; the live bundle contains quiet availability/contact strings and no Calendly/highlighted-scarcity strings. This proves the calmer contact path is public, but the private-class value proof still remains separate from the contact mode.
- What this strengthens: direct contact is a tone/fit improvement, not proof of 40 EUR/h by itself.
- What this weakens: assuming a successful deploy or fewer booking prompts will resolve price-proof risk.
- Next test: in the first direct-contact row, record whether the prospect mentions reviews, portal/follow-up, Spanish-speaker help, price, availability or marketplace anchors.

## H005: Social should be used as trust-building, not mass-funnel entertainment.

- Status: strengthened and refined into a measurement sprint.
- Confidence: high for trust-building, medium for exact channel mix.
- Evidence: SEO volume is low; personal teaching style is a key differentiator; Talk the Talk gives posts a low-friction action; direct `gtag.js` can measure Talk engagement and contact clicks. Cycle 07 weakened the idea that Instagram/TikTok should be the primary channel. Cycle 08 added LinkedIn/business-English examples showing professional-confidence themes around meetings, overload, clarity, presentations and client communication; GBP official docs show posts/photos/replies/performance metrics fit local trust. The falsification attempt still matters: LinkedIn may produce profile views but no qualified leads if Auris has little existing audience.
- Next test: run the 2-week `GBP + LinkedIn + short-form reuse` plan and judge it by profile/website clicks, `talk_started`, `talk_completed`, `talk_trial_click`, WhatsApp/Calendly source notes, and lead quality.

Cycle 20 update:

- Status: strengthened and made placement-specific.
- Confidence: high for LinkedIn as trust surface; medium-low for near-term lead volume until profile actions appear.
- Evidence: Auris supplied the canonical LinkedIn profile URL; official LinkedIn docs show Contact info, Featured, public URL and custom-button surfaces each behave differently; public search still shows older LinkedIn context while owner-side profile has newer headline. Live UTM checks for LinkedIn Contact, Featured, About and Post destinations all return 200. This means LinkedIn should send visitors to owned pages with separated UTMs before the website sends visitors back to LinkedIn.
- Next test: after profile cleanup, add Contact info/Featured links, publish one tagged post, then judge profile views, link clicks, DMs and Talk events against the 7-day baseline.

Cycle 33 update:

- Status: strengthened but gated.
- Confidence: high for LinkedIn as trust surface; medium-low for LinkedIn as near-term lead engine.
- Evidence: Cycle 33 found that the LinkedIn destinations are technically ready, but the meaningful profile state remains owner-side. The 2026-05-22 owner snapshot showed a strong headline and small baseline, but also old About copy, visible `Open to Work` and a primary-role ambiguity. Direct profile fetch again returned HTTP 999, so public scraping cannot confirm cleanup. The new handoff artifact now requires About EN/ES, Open to Work, primary intro role, owned-site links and 7-day metrics before Post 1 is interpreted.
- What this strengthens: social should build trust through profile coherence and useful route-to-owned actions.
- What this weakens: treating a good LinkedIn post draft as enough, or using destination health as proof of channel strength.
- Next test: fill the LinkedIn handoff row, then publish one tagged meeting-confidence post only if P0 passes.

Cycle 43 update:

- Status: strengthened but made human-signal gated.
- Confidence: high that social/Talk can create trust and measurable curiosity; medium-low that it creates near-term direct leads without owner/profile evidence.
- Evidence: LinkedIn docs confirm post analytics are owner-visible and include discovery/profile/link engagement, while the live Talk LinkedIn UTM returns 200 and the Talk component tracks starts, completion and trial clicks. The falsification is that these are still curiosity/intent signals unless a lead mentions the proof or books.
- What this strengthens: keep LinkedIn/Talk as a measured trust test, not a scale channel.
- What this weakens: declaring social success from impressions, reactions or `talk_started` alone.
- Next test: only continue LinkedIn/Talk after either a Level 4 lead note or repeated Level 3 intent plus one plausible source/proof note.

Cycle 58 update:

- Status: strengthened as trust-building but parked as a workstream.
- Confidence: high for proof reuse; low-medium for acquisition while Auris is close to full.
- Evidence: LinkedIn, Instagram and TikTok docs all place meaningful metrics behind owner/platform analytics and mostly measure attention/reach/engagement. No lead row currently points to social.
- What this strengthens: use social only for light proof reuse when a real class/review/capacity moment exists.
- What this weakens: TikTok/Instagram-first or weekly LinkedIn/GBP posting as default work.
- Next test: unpark only if capacity opens, owner analytics are captured, or a high-fit lead mentions social.

## H006: The student platform's next improvement should be "clarity of next action."

- Status: strengthened and refined.
- Confidence: high.
- Evidence: app has many features; student dashboard, flashcards, modular exercises, games, feedback, docs. Cycle 12 inspected dashboard, SRS APIs, `FlashcardStats`, `TalkTheTalk`, `TeacherOverview` and backend services. Cycle 13 turned the concept into an implementation checklist and refined the rule order after falsification: urgent assignments should beat feedback, and the recommendation should preserve autonomy with secondary options. External evidence from Duolingo, Quizlet and Busuu supports clear guided paths, while Memrise/Duolingo user reactions warn against forced paths.
- Next test: run a 3-student manual pilot or implement the small frontend card if Auris asks. Track click/completion before adding AI/audio.

Cycle 14 update:

- Status: strengthened, but selector priority changed.
- Confidence: high.
- Evidence: read-only aggregate data shows real SRS usage in the last 7 days: 31 active students, 59 flashcard sessions, 330 cards reviewed, and 53 completed sessions. Modular work has some current usage, while standard/writing submissions are sparse. This strengthens the need for a next-action card but weakens a feedback-first metric until feedback views are tracked.
- Next test: pilot or build the card with due flashcards above recent feedback, then compare the next 14 days against the baseline in `retention-baseline-and-manual-pilot.md`.

Cycle 34 update:

- Status: strengthened but still gated by owner/student approval.
- Confidence: high for product direction, medium for immediate behaviour change.
- Evidence: refreshed read-only aggregate data still shows SRS as the strongest live between-class behaviour: 30-day 163 sessions, 1555 cards reviewed and 157 completed sessions. The 7-day scheduled-class filter shows 24 active students, 37 SRS sessions, 282 cards reviewed and 32 completed sessions. No `student_next_action_events` table exists, and no pilot replies have arrived.
- What this strengthens: a small SRS/modular-aware `Your next 15 minutes` card remains the best first platform improvement.
- What this weakens: building a teacher analytics panel, making public "clear next step" claims before the card ships, or treating feedback/Talk as measured loops before instrumentation.
- Next test: run the manual pilot from `next-15-pilot-tracker.md`, or if Auris explicitly asks to implement, patch only `StudentDashboard.tsx` and compare the next 14 days to the Cycle 34 baseline.

Cycle 46 update:

- Status: strengthened but converted into a proof-sprint gate.
- Confidence: high for product direction, medium for immediate behavior change.
- Evidence: `StudentDashboard.tsx` still has many useful surfaces but no first-step selector; `FlashcardStats.tsx` and SRS APIs can support due-card logic; the homework log can support a manual WhatsApp-style pilot. External sources from Duolingo, Quizlet, Busuu, Tuton, Eluency and ZenGengo validate guided next-step/product-continuity patterns, while community complaints weaken forced or generic homework paths.
- What this strengthens: `Your next 15 minutes` remains the right first platform-retention concept.
- What this weakens: building because the spec is ready. Current-student acceptance and teacher-use proof are now the missing evidence.
- Next test: use `next-15-proof-pilot-cycle46.md` and run 3-5 anonymous concierge pilot rows. Build only if 2 of 3 students show need/behavior, or Auris explicitly asks to ship the low-risk card.

Cycle 57 update:

- Status: strengthened but narrowed to a 2-row continuity proof gate.
- Confidence: high for product direction, medium for immediate behavior change.
- Evidence: the platform still has the core ingredients: student feedback, class notes, assignments, SRS stats, Talk the Talk and teacher homework logs. Live checks show the API and portal are reachable while student/SRS data stays protected. External sources from Duolingo, Quizlet, Busuu, Preply, Eluency and Tuton keep validating guided between-session continuity, while Reddit/Preply signals warn against heavy, generic or AI-assigned homework.
- What this strengthens: clarity of next action is still the best platform-retention direction.
- What this weakens: another spec or public copy upgrade before current students produce one real continuity moment.
- Next test: use `current-student-continuity-proof-cycle57.md` and capture two anonymous rows: one portal/SRS-active student and one notes-first/WhatsApp-first/busy/lower-portal-use student. Decide `build_next15`, `keep_manual`, `soften_copy`, or `pause`.

Cycle 58 update:

- Status: still strengthened but parked.
- Confidence: high for product direction; medium for current-student acceptance.
- Evidence: Cycle 58 found no new student rows, and the strategic ignore list confirms the local path is specified enough. The next useful evidence is behavior/reaction in the next class.
- What this strengthens: wait for current-student proof rather than building or marketing the portal harder.
- What this weakens: using research cycles to produce another platform spec.
- Next test: Packet BF rows only, or explicit build request from Auris.

## H007: Talk the Talk can be a lead magnet, but not yet a clean SEO asset.

- Status: strengthened and refined.
- Confidence: medium-high.
- Evidence: Search Console says `/talkthetalk` is `Crawled - currently not indexed`, last crawled 2026-03-01, with no query rows in the last 30 or 180 days. Static metadata/schema are good and live HTML returns 200/index-follow, so the issue is not basic crawl blocking. The React route still renders the homepage under a fixed tool overlay, which makes it less clean as a standalone SEO document. Cycle 05 found the event funnel is mostly implemented, but booking attribution from the Talk completion CTA stops at `talk_trial_click`.
- Next test: make `/talkthetalk` a cleaner standalone tool route, fix the recording/listenback copy mismatch, clean up pageview measurement, and promote it from GBP/social for 4 weeks before treating SEO traffic as the success metric.

Cycle 17 update:

- Status: strengthened.
- Confidence: high for "not SEO-first", medium-high for lead magnet.
- Evidence: live `/talkthetalk` has good metadata and WebApplication schema but only 29 static body words. The portal Talk implementation shows the tool is real and useful for practice, but the public route does not yet explain the method, who it is for, example prompts, or the human-feedback bridge strongly enough for search. External evidence still supports work/speaking-confidence pain, but not Talk as an organic-search asset.
- Next test: treat Talk as a GBP/LinkedIn/social action first. If editing the page, add a standalone explanation, 3 prompt examples, and the "apps/reps vs teacher diagnosis" bridge before judging SEO.

Cycle 36 update:

- Status: held and made more implementation-specific.
- Confidence: high for not SEO-first, medium-high for lead-magnet fit.
- Evidence: live Talk still returns 200 with good metadata and schema, but the static fallback has only 29 words and no internal links. The route remains better as a low-friction action from GBP/LinkedIn than as an organic-search asset.
- What this strengthens: Talk needs a practice-bridge explanation and examples before SEO expectations.
- What this weakens: ranking for broad "free English speaking practice" or sending all social traffic to Talk without measuring `talk_started`, `talk_completed` and `talk_trial_click`.
- Next test: if editing Talk, add fallback examples and the "practice reps plus teacher feedback" bridge; otherwise use Talk only as a tagged post CTA.

Cycle 45 update:

- Status: strengthened.
- Confidence: high for not SEO-first, medium-high for lead-magnet fit.
- Evidence: `/talkthetalk` still has 29 fallback words, no static internal links and a useful interactive tool that explains less than it does. The completion CTA already points toward personal feedback, so the missing public layer is the method bridge: reps alone are not the premium value.
- What this strengthens: Talk should be promoted as a low-pressure practice action from GBP/LinkedIn/referrals, not as an organic SEO asset yet.
- What this weakens: expecting a free tool route to index or convert without explaining who it is for, example prompts and why Auris feedback matters.
- Next test: if editing Talk, add the Packet AT fallback text and optional rendered block `Use the tool for reps; use class for diagnosis`; judge by `talk_started`, `talk_completed`, `talk_trial_click` and any real lead-source row.

Cycle 61 update:

- Status: strengthened and updated for the direct-contact public state.
- Confidence: high for not SEO-first, medium-high for low-pressure lead-magnet fit.
- Evidence: public Talk now defaults to 60 seconds, keeps 90 seconds as an option, removes the Calendly/free-first-class path, and ends with WhatsApp `talk_contact_click`. Live `/talkthetalk` returns 200 with correct canonical, no Calendly strings and no `free first` / `free trial` strings in the current Talk chunk. The sitemap still lists `/talkthetalk` with `lastmod` `2026-05-21`, and the recording/listenback copy mismatch remains.
- What this strengthens: Talk is better as a one-minute confidence rep from GBP/LinkedIn/referrals than as a free SEO page or booking-first funnel.
- What this weakens: judging the tool by `trial_booked`, or promoting it hard before the feature-copy mismatch is fixed.
- Next test: judge by `talk_started`, `talk_completed`, `talk_contact_click` and one redacted reply row that mentions Talk, speaking confidence, a prompt, or wanting Auris's feedback.

## H008: Business English should focus on professionals/autonomos/small teams, not corporate procurement.

- Status: strengthened and reframed.
- Confidence: medium-high.
- Evidence: competitors push formal company training and FUNDAE. Marketplace tutors also use the same "professional English, meetings, interviews, confidence" promise at lower prices, so that claim alone is not distinctive. Cycle 06 external evidence supports real professional demand in Spain/Catalonia and in work contexts like meetings, presentations, sales, engineering, tech and consulting. Auris's advantage is the blend: direct teacher relationship, Spanish-speaker insight, Ireland-raised bilingual background, concrete reviews, invoice-capable work, and portal continuity.
- Next test: package a "Work-English Confidence Loop" around meetings, presentations, interviews and client calls, but keep it personal and practical rather than corporate-academy/FUNDAE language.

Cycle 41 update:

- Status: strengthened and narrowed away from corporate language.
- Confidence: high for personal professional moments, medium for small-team/company training.
- Evidence: fresh 2026 job posts around Barcelona/Gava still name phone/email customer communication, client meetings, presentations and English as a corporate working language. Competitor pages from English Consulting, Sankofa and iTalkTerms validate the same moments, but also show how fast the language becomes corporate/programme/FUNDAE. Superprof Business English Barcelona shows demand and crowded price anchors at an 18 EUR/h average.
- What this strengthens: professional/autonomo English should be sold as personal help for real work moments: meetings, client calls, interviews and presentations.
- What this weakens: leading with `Business English for companies`, FUNDAE, HR/L&D, or a team-training offer before a warm small-team lead exists.
- Next test: if a professional inquiry arrives, classify `buyer_type`, `role_context`, `work_moment`, `invoice_needed`, `price_anchor_seen` and `booked_trial` before changing packages or prices.

## H009: Reviews should become the central proof asset.

- Status: strengthened and expanded by bilingual endpoint evidence.
- Confidence: high.
- Evidence: live Google reviews 5.0/15, Superprof 5.0/7, Tusclases 4.9/15. Cycle 10 found that the live reviews endpoint returns different visible review sets for `language=es` and `language=en`, increasing the usable proof themes. Cycle 11 refined placement: reviews should stay immediately after pricing as outcome proof, while portal/follow-up proof belongs inside the pricing section.
- Next test: if implementing the price patch, keep reviews after pricing and do not crowd the price card. Then reply to visible GBP reviews and publish the Week 1 review-led GBP post from `profile-publishing-readiness-audit.md` / `owner-profile-alignment-plan.md`.

Cycle 21 update:

- Status: strengthened but constrained by policy.
- Confidence: high.
- Evidence: live Google reviews endpoint still returns 5.0/15 with 5 visible reviews in ES and 5 in EN. Google official docs allow asking customers for reviews through a link/QR code and replying publicly, while Google Maps policy warns against incentives, pressure, selective positive solicitation and requested wording. BrightLocal 2026 says reviews often push consumers to further research such as a website/social profile rather than closing alone.
- What this strengthens: review proof is still central, but it should be gathered as honest specific feedback after real experience, not by asking only the happiest students.
- Next test: run the two-week review/referral micro-sprint in `referral-review-request-loop.md`; track asks, replies, review themes and any referred leads without names in strategy docs.

Cycle 25 update:

- Status: strengthened and made proof-pairing specific.
- Confidence: high.
- Evidence: live review endpoints still return 5.0/15 for both Spanish and English visible-review sets; the review library already contains confidence, meetings, adaptation and continuity themes; competitor scans show that academies and coaches use similar work-English promises but often rely on reviews/testimonials to make them believable.
- What this strengthens: the first Work-English `Meeting Voice` post should pair the hook with review-confidence proof, not just a generic promise.
- What this weakens: leading with invoice/NIF, portal features, or `native teacher` style claims as the first proof.
- Next test: if the first post is used, log whether any inquiry mentions reviews, confidence, meetings or portal follow-up as the reason they trusted the message.

Cycle 26 update:

- Status: strengthened and sharpened by local review-language scan.
- Confidence: high.
- Evidence: Auris's live review endpoints still show 5.0/15 and visible review themes around confidence, adaptation, enjoyable practice and continuity. Local/professional review scans for Idix, Callan, Yolk, English for Business, Superprof tutors and My Language Coach also show confidence and adaptation as recurring proof language.
- What this strengthens: reviews remain the central proof asset, especially when replies and posts name real outcomes in plain language.
- What this weakens: using `confidence` alone as differentiation. Competitors also earn or claim that language; Auris needs the mechanism beside it: Spanish-speaker correction, real speaking practice and review between classes.
- Next test: reply to existing GBP reviews with short outcome-specific replies, then track whether new inquiries mention `reviews`, `confidence`, `correction`, `follow_up` or `work_situation`.

Cycle 28 update:

- Status: strengthened but made dependent on owner-side capture.
- Confidence: high.
- Evidence: the live review endpoint still returns 5.0/15, and BrightLocal 2026 reinforces that reviews, review recency and owner responses affect local trust. However, Google Business Profile performance/review docs show that profile actions, reply status and review responses are owner-side. Reviews cannot become an acquisition lever unless Auris records the before/after effect.
- What this strengthens: reviews should remain the central proof asset for the next sprint.
- What this weakens: treating the review asset as self-executing. Public reviews are visible, but the strategy needs Day 0/Day 7 owner metrics and anonymous lead notes.
- Next test: use `owner-side-proof-capture-packet.md` to capture Day 0/Day 7 GBP metrics, action log and lead proof notes.

Cycle 29 update:

- Status: strengthened and given a review-count truth gate.
- Confidence: high.
- Evidence: on 2026-05-23, both Spanish and English live review endpoints returned 5.0 / 16, while earlier cycles recorded 5.0 / 15. The public proof asset appears stronger, but the change also exposes a measurement risk: public API count drift should not automatically rewrite public copy.
- What this strengthens: reviews remain the first proof asset to verify and use.
- What this weakens: count-heavy proof copy without owner-dashboard confirmation.
- Next test: use the five-minute owner prompt to confirm GBP owner-view rating/review count and newest review/reply visibility before any public wording changes.

Cycle 30 update:

- Status: strengthened but split into evidence levels.
- Confidence: high.
- Evidence: the live public reviews endpoint still returns 5.0 / 16 in Spanish and English, and the website review component can display the live `reviewCount`. This strengthens proof readiness, but it is still only Level 0/1 evidence until owner-view count and reply status are confirmed.
- What this strengthens: review proof should be the first public trust layer.
- What this weakens: interpreting public proof readiness as acquisition performance.
- Next test: move from public-only evidence to owner-view review truth, then Day 0 GBP Performance.

Cycle 31 update:

- Status: strengthened and tied to a ledger row.
- Confidence: high.
- Evidence: live Spanish and English review endpoints still return 5.0 / 16, but the new owner evidence ledger separates public count from owner-view review truth, newest review theme and reply status.
- What this strengthens: reviews remain the first proof asset, but review proof should be captured as `Review Truth` before copy or sprint interpretation changes.
- What this weakens: updating public proof copy just because the public endpoint count is stable.
- Next test: fill the Review Truth row in `owner-evidence-ledger-template.md`.

Cycle 38 update:

- Status: strengthened and made less directive.
- Confidence: high.
- Evidence: live review endpoints still show `5.0 / 16`, and the English visible set includes a May 22, 2026 review with a former-student-to-family recommendation pattern. Google review docs and Maps policy allow genuine review requests but disallow incentives, pressure, selective-positive solicitation and requested specific content. BrightLocal 2026 also reinforces that review recency and owner response matter.
- What this strengthens: reviews remain the core proof asset and can also reveal referral trust.
- What this weakens: long review prompts that ask students to mention specific themes, and any static `16 reviews` copy before owner truth.
- Next test: use the shorter Cycle 38 review ask, then record only `trigger_outcome`, `felt_natural`, `response`, `result`, `proof_mentioned` and `lead_quality`.

Cycle 42 update:

- Status: strengthened, with a specificity rule.
- Confidence: high for review proof, medium for acquisition until owner-side result arrives.
- Evidence: `professional-review-proof-specificity-cycle42.md` compared Auris's live `5.0 / 16` review endpoint, the website review component, Google review policy docs, competitor testimonial pages and marketplace tutor profiles. Confidence/adaptation appears everywhere, including lower-price marketplace profiles, so reviews are strongest when they connect the outcome to Auris's method.
- What this strengthens: use review proof in the first Meeting Voice message.
- What this weakens: relying on count, star rating, `confidence` or `personalised classes` alone.
- Next test: log `proof_specificity` for inquiries: `generic_review`, `meeting_confidence`, `method_correction`, `portal_follow_up`, `price`, `unknown`.

Cycle 32 update:

- Status: strengthened and made time-sensitive.
- Confidence: high.
- Evidence: the English public review endpoint still returns 5.0 / 16 and now surfaces a very recent visible review, while owner-view count and reply status remain unknown. Public freshness strengthens the review proof asset but does not prove reply visibility or owner truth.
- What this strengthens: the next review action should be a one-row Review Truth check, especially newest-review reply status.
- What this weakens: delaying the first owner check until a full GBP Performance packet is available.
- Next test: ask the micro-intake question from `owner-evidence-micro-intake-playbook.md` and fill `review_truth`.

Cycle 27 update:

- Status: strengthened, but made measurement-dependent.
- Confidence: high for proof value, medium-high for acquisition until owner-side sprint data arrives.
- Evidence: fresh professional/solo coach sources (LUVEnglish, Madeleine Cooke, Meg Language Coach, Confident Business English, Sankofa and Eddy English Coach) repeat confidence, real situations, tailored support, safe practice and professional outcomes. This confirms that Auris's review themes are market-relevant but not unique.
- What this strengthens: reviews should lead the next GBP/referral test.
- What this weakens: treating a review-count badge or the word `confidence` as enough proof.
- Next test: use `review-proof-sprint-measurement-plan.md` to record review replies, one GBP post, review/referral asks and the exact proof mentioned by any lead.

Cycle 35 update:

- Status: strengthened and made reply-gated.
- Confidence: high for proof value, medium-high for acquisition until owner-side sprint data arrives.
- Evidence: live public review endpoints again returned `5.0 / 16` in both Spanish and English, with the English visible set including a May 22, 2026 review, and the website review component can display the live count. Official Google docs support public owner replies and review-count/rating relevance, but Google Search docs warn against using self-serving LocalBusiness review markup as a rich-result shortcut. Marketplace/professional sources show review/confidence proof is valuable but not unique.
- What this strengthens: reviews remain the first proof asset, and the newest-review reply check is the lowest-friction owner-side row.
- What this weakens: updating static public copy or schema just because the public endpoint shows 16.
- Next test: use `review-count-16-reply-gate.md` to confirm owner-view count and newest-review reply status, then fill the Review Truth row.

Cycle 47 update:

- Status: strengthened, with a public-endpoint correction.
- Confidence: high for proof value, medium-high for acquisition until owner-side data.
- Evidence: live ES/EN endpoint checks on 2026-05-24 still return `5.0 / 16`, but the first visible reviews in this check were from November 2025 rather than the previously seen May 22, 2026 review. The review function uses Places New fields for rating, count, reviews and Google Maps URL; public data still does not expose owner replies.
- What this strengthens: reviews remain the central public proof asset, and dynamic count display is fine.
- What this weakens: using public visible-review ordering as newest-review truth, reply-status proof, or a reason to make another review-count artifact.
- Next test: use Packet AV only when owner Review Truth arrives; otherwise keep proof copy count-neutral and rotate.

Cycle 48 update:

- Status: strengthened and capacity-reframed.
- Confidence: high.
- Evidence: owner view confirmed `5.0 / 16`; Auris replied to a recent review during this cycle; live endpoints still return `5.0 / 16`; official Google docs say replies are public, reviewed, and the reviewer is notified; BrightLocal 2026 says recency and owner responses are trust factors. The Teresa review adds a durable proof theme: long-term online 90-minute classes, resources, care and classes that feel productive.
- What this strengthens: reviews are the first trust-maintenance action, especially owner replies.
- What this weakens: replacing replies with only likes/reactions, or launching a bigger content push before review freshness is handled.
- Next test: log review reply status as `live`, `pending`, or `unknown`; do not create more proof copy until capacity mode changes.

Cycle 56 update:

- Status: strengthened with reply-quality rules.
- Confidence: high.
- Evidence: Google says approved replies are public and appear as the business; Google reply tips favor short, relevant, conversational and non-promotional replies; the public Places endpoint still confirms `5.0 / 16` but cannot expose owner reply state. BrightLocal review research and tutor marketplace surfaces show students read details and teacher-specific proof is common.
- What this strengthens: reviews are central because of repeated themes and visible owner care, not because of a static count badge.
- What this weakens: liking/reacting as an equivalent action, keyword-stuffed replies, or turning every reply into a sales CTA.
- Next test: maintain `review_reply_status` only when there is a recent/strategic review; stop optimizing once the reply is live.

Cycle 116 update:

- Status: strengthened and reactivated by public count drift.
- Confidence: high for proof value, medium until owner-side newest/reply truth arrives.
- Evidence: `review-count-17-owner-reply-gate-cycle116.md` confirms the public endpoint moved from `5.0 / 16` to `5.0 / 17`, with both English and Spanish variants agreeing. The website review component can display the dynamic count, while the Places endpoint still returns only limited public reviews and no owner reply state.
- What this strengthens: reviews are still the central proof asset, but the useful action is reply maintenance, not count-badge promotion.
- What this weakens: changing static public copy or inferring newest-review status from the public endpoint's visible review order.
- Next test: owner confirms whether GBP owner view also shows 17 and whether the newest review is replied to.

## H010: Content around Spanish-speaker confidence beats generic grammar tips.

- Status: strengthened.
- Confidence: high.
- Evidence: Search/social evidence shows Spanish-speaker confidence and blocking themes are culturally resonant. Auris's own reviews repeatedly mention confidence and comfort speaking. Cycle 06 community sources surfaced the output gap: learners understand English or can speak alone, then freeze, simplify too much, or lose natural structures with real people. Cycle 07 added creator/market evidence: Amigos Ingleses/Cambridge reinforce practical real communication for Spanish speakers; marketplace and business-English pages repeat confidence, meetings, pronunciation and presentations; recent pronunciation feedback threads show exact Spanish-speaker clarity issues such as vowels, word stress and final consonants.
- Next test: publish the first 2 weeks of output-gap/professional-confidence posts and compare to any pure grammar/correction posts by qualified actions, not likes alone.

Cycle 24 update:

- Status: strengthened and language-refined.
- Confidence: high.
- Evidence: Reddit/career threads, Spanish adult anxiety research, coach testimonials and professional-English competitor pages all repeat the pattern: learners may understand/read/write or even hold a certificate, but live speaking under pressure is where confidence drops. Research also supports the role of anxiety, willingness to communicate, feedback and accent-related negative evaluation.
- What this strengthens: Spanish-speaker confidence/output-gap content should stay central.
- What this weakens: generic grammar tips or certificate-only hooks as the first content test.
- Refinement: use `your English gets smaller` or `you know what you want to say, but the moment is too fast` as the public hook; use `freeze/block` more sparingly because it can feel too exposed for premium professionals.
- Next test: publish/use the `Meeting Voice` message from `work-english-pain-language-scan.md` and compare against future interview/client-call variants by DMs, clicks and inquiry quality.

## H011: Talk the Talk's strongest role is the feedback bridge, not the free tool itself.

- Status: refined: useful fallback now, feedback bridge later.
- Confidence: medium-high.
- Evidence: The public tool already has a natural completion CTA around personal feedback, and the student portal has the same practice surface without a lead CTA. Cycle 12 inspected the portal completion flow: it ends with "Great job!", topic recap and practice buttons, but no self-rating, teacher note or completion record. AI speaking apps like ELSA/Praktika normalize low-shame speaking practice, while Busuu and Preply show feedback between lessons as the durable value.
- Next test: keep Talk as the fallback action in `Next 15 Minutes`. Only after that, add no-audio reflection and teacher-facing note: where did the student get stuck, and do they want to practise it in class?

Cycle 39 update:

- Status: strengthened and made AI-era specific.
- Confidence: high for strategic role, medium for current-student behaviour until tested.
- Evidence: public Talk already measures start/ready/completion/trial-click and ends with a personal-feedback CTA; portal Talk is visible but ends without logging/reflection; current AI speaking apps now promise instant feedback, AI role-play, scenario practice and low-shame repetition. User-review/community evidence repeatedly shows the missing value is not "another prompt" but trusted diagnosis, naturalness, nuance, progress memory and what to do with mistakes.
- What this strengthens: Talk should become `practice -> reflection -> Auris follows up`, not an AI-app clone or generic free tool.
- What this weakens: promoting Talk heavily while the record/listenback copy mismatch remains, or treating Talk completions as retention proof before reflection exists.
- Next test: pilot one no-audio portal reflection after a Talk prompt and judge whether Auris can use it for one next-class correction in under 30 seconds.

Cycle 40 update:

- Status: strengthened and translated into a technical spec.
- Confidence: high for implementation path, medium for student adoption.
- Evidence: `talk-reflection-v0-technical-spec-cycle40.md` inspected portal Talk, StudentDashboard, TeacherOverview, backend models, SRS/modular/custom-exercise endpoint patterns, live portal/API health and external privacy/product sources. The platform already has the pieces needed for a minimal bridge: authenticated student routes, class membership checks, SQLModel timestamp/index patterns, teacher overview attention surfaces and API wrappers. The missing piece is only a small `talk_practice_reflections` table and route, not an AI/audio system.
- What this strengthens: implement no-audio reflection as an optional completion-card save and teacher prep signal.
- What this weakens: adding audio/transcripts, a formal review queue or AI scoring before a reflection pilot proves teacher value.
- Next test: manual pilot or implement V0; stop if reflection save is below 15% or if Auris cannot use saved notes in class.

Cycle 46 update:

- Status: held high, but kept behind Next 15 for this cycle.
- Confidence: high for strategic role, medium for timing.
- Evidence: Talk Reflection remains implementation-ready from Cycle 40, but current portal-retention evidence shows the broader dashboard still lacks a first-step selector and SRS/modular activity is the only measured behavior. Talk still has no completion/reflection logging, so it should not become the first measured retention proof unless Auris explicitly chooses speaking-practice feedback as the next product focus.
- What this strengthens: Talk is a premium feedback bridge later, not a reason to postpone the simpler concierge Next 15 proof sprint.
- What this weakens: adding Talk Reflection before confirming whether students need one general next step.
- Next test: run Talk Reflection only after the Next 15 decision, or if pilot replies show students choose Talk/speaking practice over cards, notes, feedback and assignments.

Cycle 61 update:

- Status: strengthened for public acquisition; unchanged for portal build timing.
- Confidence: high for strategic role, medium for current-student timing.
- Evidence: moving the public default from 90 to 60 seconds makes the first rep less intimidating, but the portal version still defaults to 90 seconds and still has no reflection/save/teacher signal. External AI speaking tools increasingly offer instant feedback, role play and progress tracking, while community language-learning signals keep repeating the human problem: speaking anxiety, overthinking and needing low-pressure reps.
- What this strengthens: Talk's public job is to create the moment where a learner notices "I can practise, but I want human feedback."
- What this weakens: building AI scoring or treating a longer timer as proof of better learning.
- Next test: if a current student mentions Talk or speaking practice, decide whether to align portal default to 60 seconds or keep 90 seconds for enrolled-student stamina.

## H012: AI speaking tools increase the value of human diagnostic feedback rather than replacing Auris outright.

- Status: strengthened for positioning, weakened as a first product build.
- Confidence: medium.
- Evidence: Preply's 2025 product direction explicitly combines human tutors with between-lesson AI practice, and its Spanish-speaker study reports high confidence/progress after tutor-led lessons. ELSA and Praktika evidence shows learners value instant practice and feedback, but accuracy, AI-quality, subscription and support concerns remain visible. Cycle 12 therefore strengthens the market thesis but weakens "build AI now" as the first step.
- Next test: create content around the split: apps help with reps, a teacher helps diagnose what matters. Product-side, add deterministic guidance and no-audio reflection before AI scoring.

Cycle 39 update:

- Status: strengthened and sharpened into a product rule.
- Confidence: medium-high.
- Evidence: ELSA, Praktika, Speak, SmallTalk2Me and Speakerly show AI speaking practice is mainstream and covers pronunciation, role-play, interviews, business English and instant feedback. Trustpilot and Reddit sources also show recurring distrust around scoring, rigid paths, lenient correction, odd prompts, delays, subscriptions and support. Preply's 2025 AI direction validates the hybrid lane: AI supports between-lesson practice while tutors remain the relationship and diagnosis layer. A 2026 ELSA study found accent-bias and over-reliance risks and explicitly framed AI pronunciation practice as complementary to human instruction.
- What this strengthens: AI increases the baseline expectation for frequent practice, so Auris should sell diagnosis, Spanish-speaker correction, natural phrasing, emotional confidence and follow-up.
- What this weakens: building AI scoring/voice avatars before the portal has no-audio reflection and student action events.
- Next test: ask 3 current students whether they use ChatGPT, ELSA, Speak, Praktika, Loora or another app for speaking, and record what still feels missing.

## H013: The best expansion lane is professional confidence for Spanish-speaking adults, not formal academy-style business training.

- Status: strengthened and channel-refined.
- Confidence: medium-high.
- Evidence: Professional demand sources point to meetings, presentations, sales, tech, engineering, consulting, and Catalonia; LinkedIn/business-English examples frame language as communication behavior, leadership, and clarity. Cycle 07 added local competitor evidence: Janet's LinkedIn goes hard on FUNDAE/company training, while solo/self-employed business-English pages can still use LinkedIn for executive presence, meetings and presentations. Marketplaces show the same work-English promise at lower prices, so Auris should not rely on `business English` as a generic label.
- Next test: run two LinkedIn posts and one GBP post around meetings/presentations/client calls, always paired with Auris proof: 11+ years with Spanish speakers, bilingual/Ireland-raised background, reviews, portal continuity, direct teacher relationship.

Cycle 22 update:

- Status: strengthened and source-mapped.
- Confidence: medium-high.
- Evidence: local/professional ecosystems around Castelldefels, Gava, Viladecans and Barcelona are real: La Guaita, ON Startup, AEPEG, PIMEC, Cambra, Barcelona Activa, coworking and entrepreneur event sources all point to freelancers, SMEs, founders, autonomos and professionals. This supports professional confidence as an expansion lane, but does not prove cold outreach or institutional partnerships.
- Next test: compare current-student referral outcomes against one focused job-demand scan before creating a business-English one-pager or attending a local professional event.

Cycle 23 update:

- Status: strengthened and narrowed.
- Confidence: high for the communication-context wedge, medium for paid acquisition until owner-side lead data arrives.
- Evidence: job-demand sources around Barcelona show English being required for very specific work moments: client calls, customer emails, proposals, presentations, meetings, negotiation, incident resolution, interviews and international-team communication. Barcelona Activa also frames English as employability/promotion support, while platform code shows Auris can already support between-class work-English follow-up.
- What this strengthens: the best professional lane is `Work-English Confidence Loop`, not broad `Business English`.
- What this weakens: creating a large SEO page, cold corporate outreach, or selling generic company training before there is lead evidence.
- Next test: publish or privately use one Work-English hook and record whether inquiries mention `meeting`, `interview`, `client call`, `presentation`, `customer support`, `promotion` or `salary/career move`.

Cycle 24 update:

- Status: strengthened, but differentiation pressure increased.
- Confidence: high for the pain/offer fit, medium for acquisition.
- Evidence: professional coach pages and marketplaces confirm the same work situations and confidence language are already common: meetings, interviews, presentations, client calls, clarity and confidence. A premium Superprof profile shows high-price positioning is possible, while Barcelona marketplace examples show similar promises around lower price anchors.
- What this strengthens: Auris should use the professional-confidence lane.
- What this weakens: believing `business English for meetings` is distinctive by itself.
- Next test: pair every Work-English hook with at least one Auris-specific proof element: Spanish-speaker patterns, Ireland-raised bilingual background, direct teacher relationship, reviews, portal follow-up or invoice/NIF.

Cycle 25 update:

- Status: strengthened and operationalized.
- Confidence: high for the proof stack, medium for acquisition.
- Evidence: Cycle 25 found that professional competitors and academies already claim meetings, presentations, confidence, platforms, native teachers and tailored support. Auris's strongest first differentiation is not another broader course claim; it is `reviewed confidence + Spanish-speaker diagnosis + follow-up between classes`.
- What this strengthens: the professional-confidence lane should be tested through one proof-paired message.
- What this weakens: building a standalone business-English page or package before a measured proof-paired post/referral test.
- Next test: use the proof-paired `Meeting Voice` draft from `work-english-proof-pairing-scorecard.md` and classify any response by `work_moment`, `proof_mentioned`, `price_anchor_seen`, `booked_trial`, and `lead_quality`.

Cycle 26 update:

- Status: strengthened but more crowded.
- Confidence: high for the pain/proof fit, medium for acquisition.
- Evidence: local review proof shows the same professional-confidence language appears in academies, private tutors, marketplaces and professional training pages: real work situations, confidence speaking, tailored classes, prepared materials and follow-up. This validates the lane but raises the bar for specificity.
- What this strengthens: Auris should keep the professional-confidence lane as an acquisition test.
- What this weakens: any message that only says `English for meetings`, `tailored business English` or `confidence at work` without student-proof and method-proof.
- Next test: run the review-confidence GBP post or the proof-paired LinkedIn message, but keep the proof stack visible within the first few lines.

Cycle 41 update:

- Status: strengthened, with a stricter first-moment order.
- Confidence: high for the communication-context wedge, medium for acquisition until owner-side results arrive.
- Evidence: Cycle 41 refreshed job, competitor, marketplace, Meetup/community and live Auris proof sources. The strongest repeated work moments are meetings, client/customer calls, interviews and presentations. Auris's live Spanish review evidence includes confidence in meetings, and the website/app already support these scenarios through the business route and speaking topics.
- What this strengthens: `Meeting Voice` should be the first Work-English test, followed by `Client Call` or `Interview` only if the first test gets attention without action or lead notes point that way.
- What this weakens: continuing to scan broad professional-English sources without publishing/logging one proof-paired message.
- Next test: use one Meeting Voice post/private prompt and classify responses by `work_moment`, `proof_mentioned`, `price_anchor_seen`, `booked_trial` and `lead_quality`.

Cycle 42 update:

- Status: strengthened, but differentiation pressure increased.
- Confidence: high for the message wedge, medium for acquisition.
- Evidence: competitor review/proof surfaces show the same professional-confidence vocabulary is common: confidence, adaptation, speaking time, meetings, interviews, follow-up docs/platforms and native/bilingual teachers. The best Auris-specific proof is the chain `reviewed confidence -> Spanish-speaker correction -> direct personal follow-up`, not any one ingredient alone.
- What this strengthens: professional confidence remains the wedge.
- What this weakens: `Meeting Voice` copy without a method proof line.
- Next test: use the proof-specific version from `professional-review-proof-specificity-cycle42.md` and track what proof the lead mentions first.

## H014: The first social/content sprint should be GBP plus LinkedIn anchored, with Instagram/TikTok as reuse.

- Status: strengthened but reduced to a smaller first publish test.
- Confidence: medium-high for GBP; medium for LinkedIn lead creation.
- Evidence: Cycle 07 Search Console shows organic search remains tiny and homepage-only; live reviews and GBP are strong; official GBP docs support services/photos/review replies/performance checks; LinkedIn/business-English examples fit professional confidence. Cycle 10 keeps the sprint small: first fix owner-side proof and profile consistency, then publish one GBP post and one LinkedIn post. Marketplace price risk is narrower than Cycle 09 suggested, but Tusclases/online-price comparison can still confuse leads.
- Next test: publish the Week 1 pair in `owner-profile-alignment-plan.md` after profile checks. Strengthen if GBP/LinkedIn create qualified clicks/messages/Talk completions. Weaken if LinkedIn produces no profile actions or if inquiries mention price mismatch/confusion.

Cycle 16 update:

- Status: strengthened and made GBP-first.
- Confidence: high for GBP, medium for LinkedIn.
- Evidence: official GBP docs confirm posts, services, photos, review replies and profile performance metrics are real owner-side levers. Fresh GSC keeps SEO small; `/ingles-empresas-castelldefels` is still only discovered, so LinkedIn should route to Talk/homepage before the business page. Local competitor scans keep showing academy scale and review strength, while business-English coach pages show the professional-confidence angle is crowded but viable.
- Next test: run GBP Post 1 first with baseline. Publish LinkedIn Post 1 only after the profile headline/about are aligned or Auris is comfortable using the personal profile.

Cycle 18 update:

- Status: refined into `GBP first, LinkedIn after profile alignment`.
- Confidence: high for GBP, medium for LinkedIn acquisition, medium-high for LinkedIn credibility.
- Evidence: the GBP homepage UTM returns 200, live reviews remain 5.0/15, and the homepage is still the safest indexed destination. Auris's LinkedIn public result is discoverable, but direct profile access is limited and the result ties him to English for Business Spain. English for Business Spain itself presents as a corporate training provider, which could blur the personal non-academy positioning if the personal profile is not clear. Professional-English examples show LinkedIn-compatible themes around meetings, presentations, clarity and confidence.
- Next test: publish the Week 1 GBP post after owner-side GBP baseline; publish the LinkedIn meeting-confidence post only after Auris confirms the personal profile headline/about match English with Auris.

Cycle 19 update:

- Status: strengthened but still gated.
- Confidence: high for GBP, medium for LinkedIn acquisition, medium-high for LinkedIn credibility.
- Evidence: Auris supplied an owner-side LinkedIn snapshot. The headline is now aligned, but the About section is still the older broader version, `En busca de empleo` is visible, current intro/experience still foregrounds English for Business Spain/education more than English with Auris, and the last-7-day baseline is tiny: 2 profile views, 3 post impressions, 0 search appearances. This means LinkedIn should remain in the sprint, but first as a profile-cleanup and credibility test.
- Next test: replace About in English and Spanish, remove or restrict Open to Work if premium private-class positioning matters more than job search, choose English with Auris as primary current position if possible, then publish LinkedIn Post 1 with Talk UTM and record 24h/72h/7d metrics.

Cycle 20 update:

- Status: strengthened but still gated.
- Confidence: high for GBP, medium for LinkedIn acquisition, medium-high for LinkedIn credibility.
- Evidence: the canonical LinkedIn URL is now known, and official LinkedIn docs confirm free Contact-info website links plus Featured links are practical profile surfaces, while the prominent custom button is Premium/select. Direct LinkedIn profile fetches return HTTP 999, so owner-side screenshots and public search snippets remain the practical evidence layer. Live Talk/homepage UTMs return 200 and preserve final URLs.
- Next test: use LinkedIn as a clean profile-to-owned-site funnel after cleanup, not as a website proof link first.

Cycle 21 update:

- Status: refined.
- Confidence: high for GBP/reviews, medium for LinkedIn, medium-high for referrals as near-term trust channel.
- Evidence: no new owner-side LinkedIn or GBP baseline arrived, so continuing to polish LinkedIn theory would be low-value. Live website output has no referral/review request surface; live reviews remain strong; external review and word-of-mouth sources suggest trust-heavy service businesses should make referrals easy but personal.
- Next test: keep GBP Post 1 ready, but use the review/referral micro-sprint as the next quiet evidence layer while waiting for owner-side GBP/LinkedIn metrics.

## H015: Manual lead-source notes are required before channel conclusions are trustworthy.

- Status: new.
- Confidence: high.
- Evidence: GTM exists but has 0 tags/triggers/variables; direct `gtag.js` tracks site events but the Talk completion CTA opens Calendly in a new tab, so completed booking attribution is incomplete. GBP performance metrics are available in the Business Profile UI/export but were not accessible through the current API pass. Without manual source notes, a channel could look weak or strong for the wrong reason.
- Next test: use the Cycle 08 lead-source ledger for every inquiry during the first two-week sprint, then compare manual notes to Search Console/GBP/GA4-visible events.

Cycle 09 update:

- Status: strengthened.
- Confidence: high.
- Evidence: GA4 Admin/Data attempts still failed due insufficient scopes; GTM remains empty; GBP performance data is not available through current API access; URL Inspection and GSC can measure search/indexing but not campaign conversions.
- Next test: before Post 1, create the manual ledger row and ask every lead, "Where did you find me?"

Cycle 10 update:

- Status: strengthened.
- Confidence: high.
- Evidence: Search Console and URL Inspection still work; GBP account/business-info and GA4 Admin attempts still return permission denied with current token scopes. UTM destinations return 200, so the campaign can be run, but not truthfully judged without owner-side GBP/LinkedIn numbers and manual inquiry notes.
- Next test: record owner-side GBP baseline manually before Post 1, then update the lead-source ledger for every inquiry.

Cycle 11 update:

- Status: strengthened.
- Confidence: high.
- Evidence: the pricing proof patch has measurable risk but no complete automated attribution path. Existing site events may show contact/trial intent, but price objections, marketplace comparisons and lead quality still require manual notes.
- Next test: for any pricing-site edit, note date/time of implementation and track the next 10 inquiries by source, price objection, buyer type and final booking outcome.

Cycle 12 update:

- Status: strengthened.
- Confidence: high.
- Evidence: platform API checks confirmed the live backend is reachable but protected endpoints need auth, so automated product usage measurement still needs either authenticated QA or explicit in-app event logging. The Next 15 card can improve UX before measurement is perfect, but conclusions about retention require manual/current-student validation plus click/completion events.
- Next test: before judging the platform change, record a baseline week for flashcard sessions, feedback views and assignment completions where available; if not available, start with manual student check-ins and a small event ledger.

Cycle 13 update:

- Status: strengthened and made implementation-specific.
- Confidence: high for manual notes, medium for automated product events.
- Evidence: local SQLite files are empty, browser access reaches login only, and protected endpoints require auth. Existing DB models can later count flashcard sessions, attempts and submissions, but feedback views, card clicks and Talk completions need explicit events.
- Next test: if implemented, log only `shown/clicked/dismissed` first; derive completion from existing tables where possible before adding new completion fields.

Cycle 14 update:

- Status: strengthened.
- Confidence: high for aggregate product baseline; medium for attribution.
- Evidence: read-only aggregate database queries succeeded and produced a safe 7/14/30-day baseline without exporting student identity or content. The baseline is strong for SRS and usable for modular work, but it still cannot attribute action to a future card without explicit `shown/clicked/dismissed` events.
- Next test: if the card ships, add one tiny card-event ledger after the frontend value is accepted. Until then, use aggregate SRS/modular counts plus manual student replies.

Cycle 20 update:

- Status: strengthened.
- Confidence: high.
- Evidence: LinkedIn profile placements need separate interpretation: Contact info, Featured, About link, custom button and organic post can all point to the same owned page but mean different visitor intent. Google Analytics UTM docs support consistent `utm_source`, `utm_medium`, `utm_campaign` and `utm_content`, but the automation still cannot read LinkedIn owner analytics directly.
- Next test: record the placement (`contact_info`, `featured`, `about`, `post`, `custom_button`) in manual notes for every LinkedIn-origin inquiry.

Cycle 21 update:

- Status: strengthened and expanded to referrals/reviews.
- Confidence: high.
- Evidence: word-of-mouth is hard to attribute digitally; live analytics can show site/review endpoints but not private referral conversations. External practitioner sources converge on self-reported attribution and specific source fields as the practical solution.
- Next test: add `ask_type`, `trigger_outcome`, `referred_need`, `price_anchor_seen`, and `booked_trial` to the private manual ledger for review/referral-origin inquiries.

Cycle 25 update:

- Status: strengthened and expanded to proof attribution.
- Confidence: high.
- Evidence: the first work-English post now has several plausible trust triggers: review confidence, portal follow-up, Spanish-speaker correction, Ireland-raised background and practical work situations. Analytics may show a click but not which proof made the buyer trust the message.
- Next test: add `proof_mentioned` to manual notes for Work-English inquiries, with values such as `reviews`, `portal`, `spanish_speaker_patterns`, `ireland_background`, `invoice_nif`, `price`, or `unknown`.

Cycle 28 update:

- Status: strengthened and operationalized into a capture packet.
- Confidence: high.
- Evidence: this cycle falsified the tempting idea that UTM/GA4 alone can judge the review proof sprint. Google Analytics can show tagged traffic, but Google review replies, GBP post status, WhatsApp inquiries, Calendly source details, LinkedIn owner analytics and private referrals sit outside ordinary site analytics. Calendly and LinkedIn docs also show useful owner-side metrics that are not public.
- What this strengthens: manual notes are the primary truth layer for proof, price anchor and lead quality.
- What this weakens: granting direct account/API access as a prerequisite. A screenshot plus private ledger is enough for the first sprint.
- Next test: collect the minimum viable packet from `owner-side-proof-capture-packet.md`: Day 0, action log, inquiry notes, Day 7 and anonymized outcomes.

Cycle 29 update:

- Status: strengthened and compressed.
- Confidence: high.
- Evidence: the large owner packet may be too much to capture before action, while live route/API checks show only one immediate uncertainty that owner-side data can settle: review count/reply state plus a Day 0 GBP baseline. LinkedIn remains inaccessible publicly with HTTP 999, and WhatsApp/Calendly lead language remains private.
- What this strengthens: the first manual note should be tiny enough to happen.
- What this weakens: comprehensive ledgers as the opening ask.
- Next test: ask for only owner-view review count/rating, one GBP Performance screenshot/note, and any last-7-day inquiry source/proof note.

Cycle 30 update:

- Status: strengthened into a gate model.
- Confidence: high.
- Evidence: website events can track contact/form/Talk/Calendly intent, but ContactSection, CalendlyBadge and WhatsApp flows still cannot reveal private lead language or whether reviews caused trust. The new action-gate artifact defines Level 0 to Level 4 evidence so public-only data does not get overinterpreted.
- What this strengthens: manual lead notes are necessary only once there is a lead; until then, owner review count and GBP Performance are the minimal gates.
- What this weakens: asking for a full ledger before any action has happened.
- Next test: collect Level 1 and Level 2 evidence before interpreting any public action.

Cycle 31 update:

- Status: strengthened but made lighter by row type.
- Confidence: high.
- Evidence: the ledger template now splits manual evidence into public proof, review truth, GBP Performance, action log, inquiry and decision rows. That reduces the risk that `manual ledger` sounds like one large admin task.
- What this strengthens: manual notes are still required for channel conclusions, but only the row matching the evidence level should be requested.
- What this weakens: asking Auris for a comprehensive reporting packet before there is a lead or action.
- Next test: if only review count arrives, fill only Review Truth; if an inquiry arrives, fill only Inquiry plus Decision Output.

Cycle 32 update:

- Status: strengthened and bounded.
- Confidence: high.
- Evidence: `owner-evidence-micro-intake-playbook.md` reduces manual capture to one-row asks with labels: `review_truth`, `gbp_day0`, `action_log`, `lead_note` and `day7_compare`.
- What this strengthens: manual notes remain the truth layer, but the first ask should be one sentence, not a five-minute packet.
- What this weakens: infinite prompt compression. If a one-row ask gets no response after two cycles, the blocker is no longer the wording.
- Next test: send only the Review Truth micro-ask; if a lead appears first, classify only the Inquiry row.

Cycle 43 update:

- Status: strengthened and expanded from source notes to lead-source proof.
- Confidence: high.
- Evidence: official Google/Calendly/LinkedIn docs show useful metrics exist, but they live in owner dashboards, tagged booking flows or parent-page embed events. The live website can tag routes and track contact/Talk intent, but WhatsApp, referrals, new-tab Calendly and real buyer objections remain private. Small-business attribution threads independently support the practical mix of UTMs plus a simple source/proof question.
- What this strengthens: the manual row must include `source_confidence`, `proof_specificity`, `work_moment`, `price_anchor_seen`, `lead_quality` and `human_signal_strength`.
- What this weakens: a larger dashboard or teaching-platform CRM before there are 5-10 manual rows.
- Next test: every serious inquiry gets one anonymized row in `lead-source-proof-ledger-cycle43.md`; compare Level 4/5 rows before changing channel priority.

Cycle 47 update:

- Status: strengthened but capped.
- Confidence: high.
- Evidence: existing ledgers already define the needed source/proof/price fields; live GBP and LinkedIn campaign destinations are healthy; Google Analytics, Calendly and LinkedIn docs confirm tagged/owner-side data can exist later; small-business attribution sources support a simple source question with confidence labels. No owner/lead row exists yet.
- What this strengthens: manual notes remain the truth layer for lead quality, proof mentioned, price anchor and work moment.
- What this weakens: building a bigger ledger, CRM, dashboard, or another owner prompt while the first row is still blank.
- Next test: fill one existing `lead_source_note` if an inquiry arrives; otherwise rotate.

Cycle 48 update:

- Status: strengthened but made capacity-aware.
- Confidence: high.
- Evidence: no inquiry rows exist yet, but owner context says this is not surprising because Auris is almost fully booked and not currently running a deliberate acquisition push. The website still contains immediate booking CTAs, so future inquiries could come in without a clear capacity expectation.
- What this strengthens: manual notes are still necessary, but only once there is a real inquiry or waitlist/future-availability contact.
- What this weakens: treating a blank lead ledger as a failure while the business is not trying to fill immediate capacity.
- Next test: if someone contacts Auris while full, fill a smaller `future_demand_note`: source, need, buyer type, timing, fit, response, follow-up date.

Cycle 49 update:

- Status: strengthened and narrowed to availability-copy interpretation.
- Confidence: high.
- Evidence: site analytics can count contact clicks, tab selections, form success and some Calendly scheduled events, but they cannot reveal whether a prospect understood "future availability" as "maybe later," "currently closed," or "book now." Calendly analytics/UTM docs can support scheduling/source checks, but buyer fit and confusion still require a short manual row.
- What this strengthens: manual notes should include `availability_copy_seen`, `capacity_state_at_inquiry`, `future_timing`, `availability_confusion`, `proof_mentioned` and `lead_quality` if the patch goes live.
- What this weakens: using a drop or rise in clicks alone as proof that softer CTAs helped.
- Next test: fill the first post-deploy availability inquiry row before changing channel priority or CTA language again.

Cycle 50 update:

- Status: strengthened and expanded to price-proof interpretation.
- Confidence: high.
- Evidence: the local availability patch changes CTA tone, but live analytics and GBP data still cannot reveal whether a prospect trusted the 40 EUR/h mechanism, saw a marketplace price anchor, or thought Auris was unavailable. Public review endpoint evidence can validate count/rating, but not the buyer's reason for trust.
- What this strengthens: the first post-deploy inquiry row needs both availability fields and premium-proof fields.
- What this weakens: interpreting contact clicks, profile views or Calendly intent as sufficient proof that the new pricing surface worked.
- Next test: after any availability/proof deploy, add `proof_mentioned`, `price_anchor_seen`, `quoted_price_expected`, `availability_confusion`, `future_timing`, `lead_quality` and `booked_trial` to the first 5-10 qualified inquiries.

Cycle 51 update:

- Status: strengthened and re-centered on direct-contact rows.
- Confidence: high.
- Evidence: Calendly has been removed from the local website, so automatic scheduled-event and Calendly UTM records are no longer the current measurement path. The site can still record `contact_click` and `talk_contact_click`, but WhatsApp/email replies, buyer language, timing and fit remain private. External small-business lead-tracking threads reinforce that direct conversations can get buried unless each serious lead has a next action/date.
- What this strengthens: the minimum truth unit is now one direct-contact row, not a booking dashboard.
- What this weakens: using contact clicks, outbound clicks or GBP profile interactions as channel conclusions without a real reply.
- Next test: fill the first direct-contact row with method, likely source, source confidence, first thing mentioned, proof mentioned, need type, future timing, availability confusion, price anchor, response, follow-up and outcome.

Cycle 52 update:

- Status: strengthened with production verification and an API caveat.
- Confidence: high.
- Evidence: production now contains `contact_click` and `talk_contact_click`, but live verification also showed Search Console API access returning `403 PERMISSION_DENIED`; GA4 reporting access still is not available. Official GA4 docs separate outbound clicks from real lead/request events, and the live WhatsApp/email paths cannot reveal sent-message content.
- What this strengthens: click-intent and owner-profile metrics are supporting evidence only; the first serious WhatsApp/email reply row is still the truth unit.
- What this weakens: treating the pushed site as automatically measurable through dashboards.
- Next test: fill the first direct-contact row; if API access is restored, compare event counts only as a secondary layer.

Cycle 53 update:

- Status: strengthened with a profile-surface refinement.
- Confidence: high.
- Evidence: the site can track `contact_click` and `talk_contact_click`, but GBP may still expose a separate appointment link. GBP Performance may show website clicks, calls, messages or bookings, but not the buyer's source/proof/timing without an owner note.
- What this strengthens: direct-contact rows should include `first_contact_surface` so old Calendly, GBP website, phone, website WhatsApp and email are not blended together.
- What this weakens: treating "GBP interaction" as one clean source category.
- Next test: add `first_contact_surface` to the first inquiry row.

Cycle 54 update:

- Status: strengthened with a copy-expectation field.
- Confidence: high.
- Evidence: live/source checks show direct-contact mode is public, but FAQ/schema/local landing surfaces still mention free first/trial class. Click data cannot tell whether a prospect expected a free class, immediate booking, or future availability.
- What this strengthens: the first inquiry row should include `free_first_class_expectation` and `message_copy_seen`.
- What this weakens: assuming softer contact copy is enough to know the visitor's expectation.
- Next test: if any inquiry arrives, record whether they mention free class, future slot, price, reviews, portal/follow-up or marketplace.

Cycle 55 update:

- Status: strengthened with a GBP profile-action layer.
- Confidence: high.
- Evidence: `contact_click` and `talk_contact_click` still only measure site intent, while the owner GBP profile may have a separate Booking/Appointments action. GSC and GBP API attempts returned 403, so owner verification is the only current truth layer.
- What this strengthens: inquiry rows need `first_contact_surface` and, when relevant, the GBP removal status that shaped available actions.
- What this weakens: blending `GBP` into one source category without knowing whether the user saw booking, website, call, or contact.
- Next test: after Calendly removal, classify the first inquiry by `first_contact_surface`, `appointment_link_visible_after`, and `source_confidence`.

Cycle 59 update:

- Status: strengthened and privacy-bounded.
- Confidence: high.
- Evidence: the evidence trigger router separates raw clicks, owner snapshots, public readiness and private inquiry truth. Official GA policy and GDPR data-minimisation guidance reinforce that the manual row should store only categories/status labels and anonymized short phrases, not private messages or identities.
- What this strengthens: manual lead-source rows are still the truth layer, but they need routing and redaction before analysis.
- What this weakens: adding a CRM, form, waitlist or analytics event before the first real inquiry row.
- Next test: classify the first incoming inquiry with `first_inquiry_arrived` and fill only the minimum redacted fields.

Cycle 61 update:

- Status: strengthened with Talk-specific intent/lead separation.
- Confidence: high.
- Evidence: GA4 recommended events define stronger lead events around submitted requests, qualification, working leads and converted leads, while current public Talk only records a WhatsApp click. The live Talk chunk contains `talk_contact_click` and no booking/free-trial path; that click is useful intent but not a qualified lead.
- What this strengthens: `talk_contact_click` should stay a custom intent event, paired with a manual reply row before any channel conclusion.
- What this weakens: firing `generate_lead` from a Talk CTA click or claiming Talk converted before a message arrives.
- Next test: if a Talk-origin reply arrives, fill `first_contact_surface=talk_whatsapp`, `first_thing_mentioned`, `future_timing`, `proof_mentioned`, `availability_confusion`, `free_first_class_expectation`, `response`, `follow_up`, and `outcome`.

## H016: The Next 15 card must preserve autonomy, not force a locked path.

- Status: new.
- Confidence: medium-high.
- Evidence: Duolingo, Quizlet and Busuu support guided next actions, but app-store/community reactions to Duolingo/Memrise show users can resent forced sequencing when they want to review or choose their own work. Auris's positioning is personal and adult/professional, so the portal should guide rather than command.
- Next test: copy must include `You can still choose something else`, and the card should expose two secondary routes. Ask 3 students whether it feels helpful or like homework.

Cycle 14 update:

- Status: strengthened.
- Confidence: high for copy/UX constraint, medium for actual student reaction.
- Evidence: tutor-platform and learning-app evidence supports one clear next action, but aggregate platform data shows different behaviours have different maturity. A forced path would overstate what the system knows. The card should say one useful suggestion and keep alternate routes visible.
- Next test: use the manual pilot in `retention-baseline-and-manual-pilot.md`; if 2/3 students call it homework, soften the copy before implementation.

Cycle 34 update:

- Status: strengthened.
- Confidence: high for UX constraint, medium for student reaction.
- Evidence: product/source refresh still supports clearer paths and study plans, but Auris's refreshed data shows uneven feature maturity and no next-action event table. That means the portal should suggest one useful step while leaving existing routes visible.
- What this strengthens: `One useful step now. You can still choose something else.`
- What this weakens: locked path, streaks/XP, or hiding class notes/feedback behind a single algorithmic recommendation.
- Next test: if the manual pilot produces 2+ homework-risk signals, keep the guidance in WhatsApp/homework log rather than implementing a prominent card.

Cycle 40 update:

- Status: strengthened as a Talk reflection guardrail.
- Confidence: high for design constraint, medium for adoption.
- Evidence: the technical spec deliberately keeps `Just practise today` visible, treats the note as optional, keeps Practice Again unblocked, and avoids a teacher review queue. W3C form guidance also supports clear labels/instructions, while community signals around corrections/AI warn that forced or untrusted feedback loops create friction.
- What this strengthens: Talk reflection should be a small invitation after practice, not another assignment.
- What this weakens: mandatory reflection, streak pressure or hiding free speaking behind a form.
- Next test: measure skip/save rate and ask 3 students whether the prompt felt useful or like homework.

Cycle 46 update:

- Status: strengthened and made central to the concierge pilot.
- Confidence: high for design constraint, medium for student reaction.
- Evidence: Duolingo/Busuu/Quizlet official product sources validate guided study paths, but Reddit product/community signals around Duolingo and Preply show that learners resent forced paths, generic AI homework and suggestions that do not feel genuinely teacher-owned.
- What this strengthens: the pilot and any future card should say `choose just one useful step` and keep alternative routes visible.
- What this weakens: a single locked recommendation, streak/badge pressure, or AI-ish copy that sounds detached from Auris.
- Next test: classify pilot replies as `helpful`, `homework` or `unsure`; if 2 students say homework, keep the concept manual or soften it before building.

Cycle 57 update:

- Status: strengthened.
- Confidence: high for design constraint, medium for student reaction.
- Evidence: Cycle 57 found the same pattern from stronger source triangulation: guided paths and study plans are a category norm, but community signals around Duolingo paths, Preply homework and AI speaking homework show adult learners push back when guidance feels forced, disconnected or not teacher-owned.
- What this strengthens: the next-step language should be optional and personal: `choose one thing, not all of them`.
- What this weakens: locked paths, streak pressure, generic AI homework, or hiding the student's normal routes behind a single recommendation.
- Next test: classify both continuity rows by `student_reaction`: helpful / homework / neutral / ignored. If either student calls it homework, soften before implementation.

## H017: SRS is the current measurable retention spine.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 14 read-only aggregates show flashcards dominate current between-class activity: 161 sessions and 1524 cards reviewed in 30 days, compared with 27 modular starts, 2 standard attempts and zero writing submissions. This does not mean flashcards are the whole method; it means they are the safest first measurable retention baseline.
- Next test: if the Next 15 card ships, judge first impact by SRS session/card volume and modular completion, while treating feedback as a qualitative premium signal until feedback views can be logged.

Cycle 15 update:

- Status: strengthened and filtered.
- Confidence: high for internal measurement, medium for business-retention claims.
- Evidence: filtering to scheduled non-guest classes still gives strong 7-day SRS activity: 28 active scheduled-class students, 53 sessions, 324 cards reviewed and 48 completed sessions. This reduces the concern that the SRS baseline is mostly historical/free accounts, but does not eliminate the need for a current-paid-student filter.
- Next test: if the card ships, compare scheduled-class SRS over 14 days and annotate whether those classes are current paid students.

Cycle 34 update:

- Status: strengthened but bounded by rolling-window volatility.
- Confidence: high for internal measurement, medium for business-retention claims.
- Evidence: refreshed 30-day SRS activity is still strong at 163 sessions and 1555 cards reviewed, but the 7-day scheduled-class snapshot dropped to 37 sessions and 282 cards reviewed. This proves SRS remains measurable but also warns that week-to-week activity varies.
- What this strengthens: SRS should be the first baseline for a Next 15 card.
- What this weakens: claiming the portal creates consistent retention before a before/after test.
- Next test: compare 14 days before/after a card or manual pilot; do not treat one weekly dip or rise as proof.

Cycle 46 update:

- Status: strengthened but kept as a supporting metric, not causal proof.
- Confidence: high for measurement, medium for retention causality.
- Evidence: live unauthenticated SRS stats correctly return 401, and prior authenticated aggregate snapshots remain the best safe baseline. The dashboard can reuse SRS stats, while feedback views, Talk reflections and Next 15 events still do not exist.
- What this strengthens: use SRS sessions/cards reviewed as before/after context for the pilot or card.
- What this weakens: claiming the portal caused practice without student replies or event data.
- Next test: after a pilot or card, compare 14-day SRS/modular context with anonymous in-class evidence rather than relying on raw counts alone.

Cycle 57 update:

- Status: strengthened but bounded.
- Confidence: high for measurement, medium for retention causality.
- Evidence: `FlashcardStats.tsx` exposes due cards, recall score, total cards and assigned decks; `/api/srs/students/me/flashcards/stats` remains protected in production; prior safe baselines still show SRS as the clearest between-class behavior. But this cycle's falsification keeps SRS from becoming a vanity metric: reviewed cards only matter commercially if Auris can connect them to next-class speech, memory or confidence.
- What this strengthens: SRS is the easiest context metric for the continuity proof.
- What this weakens: public claims that the portal creates progress based on SRS counts alone.
- Next test: record whether a flashcard or vocabulary action creates `used_phrase`, `remembered_word`, `mentioned_portal` or `asked_followup` in the next class.

## H018: The existing homework log is enough for the first manual pilot.

- Status: new.
- Confidence: medium-high.
- Evidence: `ClassHomeworkLog` and `/api/classes/{class_id}/homework-log` already let Auris save exact WhatsApp-style homework messages for a class or selected students; `TeacherOverview.tsx` already exposes this workflow. Read-only aggregate data found 2 active homework-log messages in the last 30 days. This means a new pilot-response table would be premature.
- Next test: use `next-15-pilot-tracker.md`; Auris sends the WhatsApp pilot, saves the message in the existing homework log, and records only anonymous outcome notes in strategy memory.

Cycle 34 update:

- Status: strengthened.
- Confidence: high for manual pilot infrastructure, medium for actual usage.
- Evidence: Cycle 34 confirmed the homework-log API/UI/model still exist and again found 2 active homework-log messages across 2 classes in 30 days. The workflow is available but underused.
- What this strengthens: use the existing homework log before adding a new pilot-response or analytics feature.
- What this weakens: building a bespoke pilot tracker inside the app.
- Next test: if Auris runs the pilot, save the message in the homework log and record only anonymous results in `next-15-pilot-tracker.md`.

Cycle 46 update:

- Status: strengthened.
- Confidence: high for manual pilot infrastructure, medium for actual adoption.
- Evidence: `ClassHomeworkLog`, `GET/POST/DELETE /api/classes/{class_id}/homework-log`, and the TeacherOverview save/delete workflow still exist. The concierge pilot needs message storage and anonymous outcome notes, not a new student-response table.
- What this strengthens: use WhatsApp plus the homework log as the first proof mechanism.
- What this weakens: building `student_next_action_events`, a pilot-response table, or a teacher analytics panel before any student rows exist.
- Next test: if Auris sends the pilot, paste the same message into the homework log only when convenient and record anonymous outcomes in `next-15-pilot-tracker.md`.

Cycle 57 update:

- Status: strengthened and made lower-friction.
- Confidence: high for manual pilot infrastructure, medium for actual adoption.
- Evidence: `TeacherOverview.tsx` still loads and saves recent homework-log messages, and backend routes/model store source, targets and assigned date. Cycle 57 reframes the homework log as optional support, not an obligation; the real proof is next-class evidence.
- What this strengthens: use the existing homework log if it helps Auris remember what he sent.
- What this weakens: creating a new platform analytics table, a student-response form, or a teacher workflow before two manual rows exist.
- Next test: if the row is run, record only anonymized outcomes in strategy memory and keep private messages outside the repo.

Cycle 58 update:

- Status: strengthened and compressed into a first-row rule.
- Confidence: high.
- Evidence: live review/site/API checks can show readiness, but not why a person contacts Auris, which proof mattered, whether price was expected, or whether availability confused them. Official GBP, LinkedIn, Instagram and TikTok docs keep the most useful channel metrics owner/platform-side; Calendly/waitlist products solve later qualification volume, not current proof.
- What this strengthens: the next acquisition evidence should be one anonymized direct-contact inquiry row, not another dashboard, CRM or larger ledger.
- What this weakens: treating click-intent, profile views or social views as buyer truth.
- Next test: first inquiry row only. Build tracking software only after 5-10 rows show repeated fields or missed follow-up.

## H019: GBP owner-side baseline is required before judging posts.

- Status: new.
- Confidence: high.
- Evidence: Search Console can measure website search performance and URL Inspection, and GTM exact paths show the known container/workspace but no listed tags/triggers/variables. GBP performance metrics are not available through the current API layer, while Google's Business Profile performance docs say owners/managers can see views, searches, website clicks, calls, messages and bookings where configured. Without a baseline, a GBP post could create actions that the automation cannot attribute.
- Next test: before GBP Post 1, Auris records views, searches, website clicks, calls, messages, bookings if shown, and top search terms. Add those to the lead-source ledger in `gbp-week-one-execution-pack.md`.

Cycle 27 update:

- Status: strengthened and narrowed to review-proof sprint baseline.
- Confidence: high.
- Evidence: the live GBP review-confidence UTM destination works, but the automation still cannot see owner-side profile views/searches/calls/messages/bookings. Website events can show some downstream actions, but review replies, review asks and WhatsApp/referral responses live outside GA4/Search Console.
- What this strengthens: the review proof sprint must start with owner-side GBP baseline and a private action ledger.
- Next test: capture Day 0 and Day 7 GBP metrics from `review-proof-sprint-measurement-plan.md`.

Cycle 28 update:

- Status: strengthened and made easier to execute.
- Confidence: high.
- Evidence: Google Business Profile docs identify the exact owner-side metrics to capture: interactions, searches, views, direction requests, calls, website clicks, messages and bookings where configured. The Performance API exists, but direct API access can require quota/access setup; the live site and UTM destinations are already reachable.
- What this strengthens: owner-side GBP baseline remains mandatory before judging a GBP post.
- What this weakens: waiting for API access before running a small sprint.
- Next test: capture Day 0/Day 7 GBP metrics in the `owner-side-proof-capture-packet.md` table and compare them before recommending another post.

Cycle 29 update:

- Status: strengthened with a smaller Day 0 gate.
- Confidence: high.
- Evidence: the homepage GBP UTM still returns 200, Talk UTM returns 200, sitemap/robots are fine, current Calendly `aurienglish` booking links return 200, and the public review endpoint now returns 16 reviews. The missing evidence is not route readiness; it is owner-side profile performance and confirmation of the review count.
- What this strengthens: Day 0 baseline is still required.
- What this weakens: another public/live audit as a substitute for owner metrics.
- Next test: collect one GBP Performance screenshot/note plus owner-view rating/review count before publishing or interpreting the GBP proof post.

Cycle 30 update:

- Status: strengthened and operationalized through action gates.
- Confidence: high.
- Evidence: live routes remain ready, and the public proof surface looks stronger, but the action-gate model says public-only evidence can decide destination readiness only. It cannot decide whether a GBP post/reply moved searches, website clicks, calls, messages or bookings.
- What this strengthens: owner-side Day 0 remains the hard gate before interpretation.
- What this weakens: publishing because the public route check is green.
- Next test: after Day 0 exists, reply/post once, then compare same-range Day 7 metrics.

Cycle 31 update:

- Status: strengthened and converted into a Day 0/Day 7 table.
- Confidence: high.
- Evidence: the live GBP UTM/canonical checks are still clean, but the ledger now requires `Snapshot Type`, `Range`, `Views`, `Searches`, `Website Clicks`, `Calls`, `Messages`, `Bookings` and `Top Search Terms` before a GBP action is interpreted.
- What this strengthens: Day 0 is not a vague principle; it is a concrete row.
- What this weakens: relying on memory or post-publication impressions without same-range comparison.
- Next test: capture a Day 0 GBP Performance row, then one Action Log row if Auris replies/posts.

Cycle 32 update:

- Status: held high but moved behind Review Truth as the first micro-ask.
- Confidence: high.
- Evidence: Day 0 GBP Performance is still required before judging GBP movement, but the newest public-review signal makes review count/reply status the lowest-friction first owner row.
- What this strengthens: Day 0 is still the gate for performance interpretation.
- What this weakens: asking for a Performance screenshot before settling the simpler owner review truth if no owner evidence exists.
- Next test: after `review_truth`, ask for one `gbp_day0` screenshot/note.

Cycle 35 update:

- Status: held high and made sequence-specific.
- Confidence: high.
- Evidence: Cycle 35 confirmed the public review endpoint and campaign destinations are still live, while LinkedIn public fetch remains blocked with HTTP 999. Public proof can support preparation, but owner-side GBP Performance is still required before judging profile movement. The lower-friction first step is still Review Truth because the count/reply status can be answered in one line.
- What this strengthens: sequence the asks as `review_truth` first, `gbp_day0` second, action log third.
- What this weakens: another live-route audit as a substitute for owner metrics.
- Next test: after owner count/reply status, ask for one GBP Performance screenshot/note using the same 7-day or 28-day range that will be compared later.

Cycle 47 update:

- Status: strengthened and split from Review Truth.
- Confidence: high.
- Evidence: GBP Performance docs still define the owner-side metrics needed for Day 0/Day 7; live homepage and Talk campaign URLs are 200 with clean canonicals, but that is Level 0 readiness only. The public reviews endpoint cannot reveal interactions, reply approval state or newest-review truth.
- What this strengthens: Day 0 is required before judging profile movement.
- What this weakens: another live route audit or endpoint check as a substitute for owner data.
- Next test: if owner sends Performance, fill only `gbp_day0`; if owner sends count/reply status, fill only `review_truth`.

Cycle 53 update:

- Status: strengthened and broadened from performance baseline to profile-link truth.
- Confidence: high.
- Evidence: current Google Business Information API access returned `403 PERMISSION_DENIED`, and official GBP docs show appointment/action links are owner/profile-layer resources. The automation cannot prove from the website whether GBP still shows Calendly.
- What this strengthens: owner-side baseline now includes `gbp_contact_link_truth` before interpreting profile actions.
- What this weakens: relying on public website scans as a substitute for profile action-link truth.
- Next test: owner checks Booking/Appointments and records visible link/domain/status.

Cycle 55 update:

- Status: strengthened and made operational.
- Confidence: high.
- Evidence: fresh GSC and GBP Business Information API checks still returned `403 PERMISSION_DENIED`. Official GBP local-link/booking docs and prior owner evidence make owner UI verification the only reliable source.
- What this strengthens: owner-side baseline now includes status after action: `removed`, `pending`, `blocked`, `provider_request`, `not_found`, or `kept_intentionally`.
- What this weakens: retrying the same API or public scrape without an access/status change.
- Next test: fill Packet BD; if blocked, record provider/support path instead of changing website code.

Cycle 48 update:

- Status: strengthened but changed from sprint gate to baseline habit.
- Confidence: high.
- Evidence: owner Performance row now exists in partial form: 520 views, `<50` searches, 2 website clicks/customer interactions, search terms including `auris` and `clases de ingles castelldefels`, and low monthly interactions. Google Performance docs confirm owners can inspect interactions, searches, views, calls, website clicks, messages and bookings by date range.
- What this strengthens: owner-side GBP data is the right baseline, but while full it should be monthly context, not a Day 7 sprint obsession.
- What this weakens: running a measured GBP post before a capacity-opening trigger.
- Next test: take one same-range owner snapshot after review replies or at month end; compare only if a real action and capacity-opening goal exist.

Cycle 58 update:

- Status: strengthened, with the broad Day 0 requirement narrowed to monthly snapshot or status row.
- Confidence: high.
- Evidence: GBP Performance docs confirm owner-side views/searches/interactions are the measurement layer, while Cycle 58 public checks only confirm public proof and route health. GBP Calendly removal status also remains owner-side.
- What this strengthens: do not judge GBP posts, profile interactions or action-link cleanup without owner rows.
- What this weakens: repeated public Google scraping or more profile theories.
- Next test: one monthly GBP Performance snapshot, or one Calendly removal status row if owner evidence arrives.

Cycle 59 update:

- Status: strengthened and routed.
- Confidence: high.
- Evidence: the Cycle 59 router confirms public checks can prove profile/site readiness, but GBP movement still requires owner-side `owner_snapshot_arrived` or `gbp_contact_link_truth` rows. The live reviews endpoint remained healthy but did not prove newest-review order or reply truth.
- What this strengthens: GBP evidence should land in the existing owner ledger before any post/ad/content interpretation.
- What this weakens: repeating public review/sitemap/header checks as a substitute for owner Performance screenshots.
- Next test: use the router to classify either the next monthly GBP screenshot or the GBP Calendly removal status.

Cycle 116 update:

- Status: strengthened and applied to review truth.
- Confidence: high.
- Evidence: public count/rating moved to `5.0 / 17`, but `netlify/functions/google-reviews.js` confirms the public endpoint returns rating, count, limited reviews and Google URI, not owner reply metadata. That means public count drift can route the lane, but owner view still decides newest-review and reply status.
- What this strengthens: `review_reply_status` should be a one-row owner check when count changes.
- What this weakens: treating public endpoint ordering, public visible-review count, or a healthy website route as owner GBP truth.
- Next test: fill the 17-review owner row; if unavailable, return to bounded Packet BH checks until the count/rating changes again or owner evidence arrives.

## H020: The current indexing gap is quality/uniqueness/priority, not discovery.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 17 found sitemap, robots, exact route redirects, route 200s, canonicals, metadata and rendered internal links are all present. Cycle 16 URL Inspection shows Google has crawled Talk/local and discovered business. The strongest weakness is not discovery but route usefulness signals: thin static fallback content, templated local/business structure, limited route-specific proof, and low off-page/profile prominence compared with the indexed homepage and local academy competitors.
- Next test: only after approved public changes, inspect changed URLs once and monitor weekly page-level GSC rows. Strengthen this hypothesis if a uniqueness/static fallback patch improves crawl/index status or page impressions. Weaken it if Google reports a specific technical/canonical issue or if the pages remain unindexed despite stronger content and profile links.

Cycle 36 update:

- Status: strengthened and refined.
- Confidence: high.
- Evidence: live route checks still show 200/canonical/index-follow for all four public routes, sitemap and robots remain reachable, and campaign UTMs preserve expected canonicals. The new weakness is static isolation: homepage has 0 static body words, Talk/local/business have 29/38/36 words, and all checked static fallbacks have 0 internal links. Search Console access could not be refreshed because the local token lacks GSC scopes, so no technical GSC problem has displaced the quality/priority explanation.
- What this strengthens: the P0 implementation should add useful fallback copy and static internal links, not more routes.
- What this weakens: interpreting "index,follow", sitemap presence, or a self-canonical as enough.
- Next test: restore GSC/URL Inspection access, then after any approved page patch compare URL Inspection state and page-level GSC rows 14-28 days later.

Cycle 45 update:

- Status: strengthened and made falsifiable.
- Confidence: high.
- Evidence: Cycle 45 repeated the live route/header/static audit and found the same result: route plumbing is healthy, GSC access is still not usable from the current token, and the visible weakness remains static fallback depth plus route-specific proof. Official Google docs support the interpretation that 200 status, sitemap, self-canonical and rendered JavaScript do not guarantee indexing.
- What this strengthens: the next SEO action is a bounded existing-page quality experiment, not discovery repair.
- What this weakens: continuing to spend cycles on sitemap/canonical/schema diagnostics while no public change or fresh GSC data exists.
- Next test: implement Packet AT only if approved, then inspect each changed URL once and wait 14-28 days for URL Inspection/page-level GSC signals. If no approval or GSC access arrives, rotate themes.

Cycle 52 update:

- Status: refined after a real public deploy.
- Confidence: high for "not solved by deploy alone"; medium for current page/query status because GSC API returned 403.
- Evidence: production now serves the direct-contact build, but `sitemap.xml` still has `2026-05-21` lastmod values after a May 24 content/contact change. Google's sitemap docs say `lastmod` should be accurate for significant changes, while URL Inspection docs say live tests/request indexing do not guarantee search appearance.
- What this strengthens: post-deploy SEO hygiene should include accurate sitemap freshness and one URL Inspection pass once access works.
- What this weakens: treating production deployment as the indexing fix.
- Next test: if Auris approves a public SEO/code pass, update sitemap `lastmod` with meaningful route changes and inspect the changed URLs once after deployment.

Cycle 54 update:

- Status: strengthened and kept bounded.
- Confidence: high for hygiene; medium for search impact without GSC access.
- Evidence: Google sitemap docs and blog both support updating `lastmod` only for significant page changes. The May 24 contact-mode deploy changed visible copy and schema-adjacent meaning, but no Search Console access exists to judge search impact.
- What this strengthens: update sitemap dates in the next approved public patch, especially if FAQ/schema/local landing copy changes.
- What this weakens: resubmitting or date-churning sitemaps as a standalone growth tactic.
- Next test: update dates only alongside real route changes, then inspect changed URLs once if GSC access returns.

## H021: Marketplace profiles are useful proof only when the price policy is intentional.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 18 found that Superprof is now mostly aligned on the direct profile at 40 EUR/h and has useful proof, but search/list contexts still show mixed or stale lower anchors. Tusclases remains visible at 30 EUR/h with strong proof and 4.9/15 rating evidence. The live homepage currently does not link to LinkedIn/Superprof/Tusclases, which prevents the premium site from actively sending buyers into a lower-price comparison environment.
- What this strengthens: marketplace profiles are valuable as high-intent discovery and third-party proof, but they should not become the premium website's trust badges while prices are mixed.
- What this weakens: adding every public profile link to the footer as an automatic trust improvement.
- Next test: during the first GBP/LinkedIn sprint, record whether each lead saw Superprof/Tusclases and what price anchor they mention. If comparison friction appears, either align marketplace prices or keep them deliberately separate as channel pricing.

Cycle 25 update:

- Status: strengthened.
- Confidence: high for not using marketplaces as first proof, medium-high for exact price policy.
- Evidence: external marketplace and professional-tutor examples repeat the same meetings/interviews/confidence promises at lower or mixed anchors, while the strongest Auris-owned proof is Google reviews plus direct portal/method continuity.
- What this strengthens: the first Work-English post should not point to marketplace profiles or use marketplace proof as the visible credibility layer.
- Next test: keep `price_anchor_seen` in the ledger and add `proof_mentioned` to see whether leads trust the Google/review/portal proof without needing marketplace validation.

Cycle 26 update:

- Status: strengthened.
- Confidence: high.
- Evidence: Superprof examples in the local review-language scan show strong professional-confidence promises, high review volume and outside-class feedback at lower visible anchors such as 35 EUR/h. Marketplace reviews are useful for learning buyer language, but they can make the buyer compare on price before they understand Auris's premium difference.
- What this strengthens: do not use marketplaces as the first visible proof in GBP/LinkedIn or on the premium site.
- What this weakens: treating marketplace review count as neutral social proof.
- Next test: if a lead mentions Superprof, Tusclases or another tutor before contacting Auris, record the source and visible price anchor before changing offer copy.

Cycle 27 update:

- Status: strengthened.
- Confidence: high.
- Evidence: the fresh Superprof Barcelona business-English page shows many high-rating teachers, 220+ reviews in aggregate and an 18 EUR/h average, while using confidence/professional promises. That means review volume and confidence language can coexist with much lower price anchors.
- What this strengthens: keep marketplace pages as research/falsification sources, not first campaign destinations.
- Next test: add `18` as a possible `price_anchor_seen` value during the review proof sprint.

Cycle 37 update:

- Status: strengthened and narrowed.
- Confidence: high.
- Evidence: Superprof direct profile is now mostly aligned with the website on the main price, but the same profile still lists online at 30 EUR/h and Tusclases remains a 30 EUR/h public anchor. Superprof Castelldefels and Business English Barcelona category pages make the price-pressure frame explicit through 14-18 EUR/h averages while showing that 35-40 EUR/h can work only with stronger specificity and proof.
- What this strengthens: marketplaces can stay useful as discovery and proof surfaces, but GBP/LinkedIn should route only to owned pages until price policy is deliberate.
- What this weakens: treating marketplace cleanup as optional if direct leads begin comparing prices.
- Next test: if two qualified direct leads mention 30 EUR marketplace pricing before booking, align marketplace pricing before publishing more campaign content.

Cycle 42 update:

- Status: strengthened.
- Confidence: high.
- Evidence: Hania and Alex Superprof profiles combine business-English/confidence/adaptation proof with 20 EUR/h anchors. Alex is especially strong falsification evidence because the profile names business meetings, negotiations, interviews, shared correction docs and career progress, while still sitting far below the owned-site 40 EUR/h anchor.
- What this strengthens: do not use marketplace profiles as campaign proof for professional-English posts.
- What this weakens: assuming that `follow-up docs`, `14 years`, `business meetings` or `confidence` automatically justify premium price.
- Next test: keep `price_anchor_seen` and add `proof_specificity`; if direct leads compare with 20-30 EUR profiles, strengthen owned-site proof before more public Work-English content.

Cycle 44 update:

- Status: strengthened and made action-specific.
- Confidence: high.
- Evidence: direct Superprof remains useful third-party proof for Auris, but the same profile still lists online at 30 EUR/h and the Castelldefels/category pages frame buyers around much lower averages. Tusclases remains a 30 EUR Auris anchor. Official GBP service docs also make this more important because GBP services can expose price and description directly in Search/Maps.
- What this strengthens: marketplaces are evidence and occasional discovery surfaces, not the owned premium funnel.
- What this weakens: treating marketplace price cleanup as optional if public traffic increases.
- Next test: if two qualified direct leads mention marketplace 30 EUR pricing before booking, align Tusclases/Superprof online to 40 EUR or explicitly document lower marketplace channel pricing before publishing more GBP/LinkedIn content.

Cycle 50 update:

- Status: strengthened.
- Confidence: high.
- Evidence: Superprof direct profile currently supports the 40 EUR/h anchor, but Superprof category and Tusclases-style market pages still place English tutors in a much lower comparison frame. This means the owned-site pricing proof should not depend on marketplace visitors understanding the difference unaided.
- What this strengthens: keep the website as the premium source of truth and avoid sending GBP/LinkedIn visitors to marketplace profiles.
- What this weakens: assuming a mostly aligned Superprof direct profile has solved price-policy risk.
- Next test: keep the two-lead stop rule. If two qualified direct leads mention lower marketplace pricing before booking, align public marketplace prices or document a deliberate lower marketplace channel before more traffic is sent to the site.

## H022: LinkedIn must work as a personal landing page before it can work as a posting channel.

- Status: new.
- Confidence: high.
- Evidence: Cycle 19's owner-side snapshot shows a strong new headline but mixed profile signals below it: old About copy, public job-seeking status, English for Business Spain foregrounded in experience/intro, low recent activity and 0 search appearances. Official LinkedIn docs confirm that the intro section, current position, language profile and Open to Work visibility are editable profile surfaces, not background details. LinkedIn/freelancer positioning evidence supports treating the profile as a landing page with audience, problem, outcome, proof and CTA before posting volume.
- What this strengthens: profile cleanup should happen before LinkedIn Post 1.
- What this weakens: trying to compensate for a mixed profile by posting more often.
- Next test: complete P0 profile cleanup from `linkedin-profile-readiness-and-first-post-plan.md`, then publish one meeting-confidence post and judge profile views, link clicks, DMs, Talk starts/completions and qualified inquiries after 7 days.

Cycle 20 update:

- Status: strengthened and operationalized.
- Confidence: high.
- Evidence: the clean LinkedIn profile URL is now registered. LinkedIn docs confirm Contact info can hold website links and Featured can hold external links, while the public-profile/search-result layer may still lag behind owner edits. Live site checks show no existing website-to-LinkedIn/social/marketplace links, which currently protects the owned premium funnel. Therefore the immediate task is not "add LinkedIn everywhere"; it is "make LinkedIn route clearly to English with Auris."
- Next test: add owned-site/Talk links to LinkedIn after cleanup, then publish one tagged post. Add a website LinkedIn link only after the profile has proved useful as trust proof.

Cycle 29 update:

- Status: unchanged but owner-side dependent.
- Confidence: high.
- Evidence: the supplied LinkedIn URL still cannot be reliably read by direct public fetch because LinkedIn returns HTTP 999. That makes owner screenshots and Auris's notes more reliable than public scraping for profile views, search appearances, post impressions and link clicks.
- What this strengthens: LinkedIn should be measured as an owner-side profile funnel, not inferred publicly.
- What this weakens: using public fetches as evidence that profile cleanup worked.
- Next test: if LinkedIn was edited or posted, capture only profile views, search appearances, post impressions/link clicks and any DMs/inquiries from the last 7 days.

Cycle 30 update:

- Status: held steady and kept below GBP.
- Confidence: high.
- Evidence: the LinkedIn destination URL to Talk is live, but the profile itself remains owner-side for meaningful analytics. The current gate model treats LinkedIn metrics as optional unless LinkedIn was edited or posted.
- What this strengthens: LinkedIn is credibility/profile evidence first.
- What this weakens: moving LinkedIn above GBP because the Talk URL works.
- Next test: if LinkedIn is used, collect profile views, search appearances, post impressions, link clicks, DMs and qualified inquiries after 7 days.

Cycle 31 update:

- Status: held steady and made optional in the ledger.
- Confidence: high.
- Evidence: the ledger treats LinkedIn as an action log/inquiry source only after a profile edit, post, link click, DM or qualified inquiry. Public LinkedIn scraping remains unreliable and unnecessary for the current gate.
- What this strengthens: LinkedIn should support credibility and owned-site routing, not outrank GBP without owner-side proof.
- What this weakens: using LinkedIn destination health as proof of LinkedIn acquisition.
- Next test: fill LinkedIn fields only if Auris edited the profile, posted or received a LinkedIn-origin inquiry.

Cycle 33 update:

- Status: strengthened and operationalized into a pre-post checklist.
- Confidence: high.
- Evidence: `linkedin-profile-post-cleanup-handoff.md` now defines the exact LinkedIn owner row: About EN/ES, Open to Work visibility, primary intro role, Contact info link, Featured link, profile views/search appearances/post impressions and notes. Live homepage/Talk UTMs are ready, but direct LinkedIn fetch returns HTTP 999 and cannot confirm the profile. Platform code confirms portal/SRS continuity is real enough to mention as method proof, but not as the main LinkedIn acquisition claim.
- What this strengthens: LinkedIn must first work as a personal landing page with a clear route to owned assets.
- What this weakens: posting while the profile still looks job-seeking, company-led or old-copy-led.
- Next test: use the handoff row to decide `go` or `hold` for Post 1. Continue LinkedIn only if it creates profile actions, owned-site clicks, DMs, Talk events or qualified inquiry notes.

## H023: A personal referral/review loop can produce stronger near-term trust evidence than more social posting theory.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 21 found that Auris has strong but not fresh-enough visible review proof: 5.0/15 on Google with bilingual visible review themes. Google and FTC constraints make bulk/incentivized review generation risky, but a small honest ask after real student outcomes is allowed and aligned with Auris's personal-teacher positioning. BrightLocal 2026 suggests reviews often move people into further research, while service-provider community evidence suggests referrals work best when the offer is easy to repeat and the thank-you stays non-transactional.
- What this strengthens: referrals/reviews should be treated as a practical acquisition channel, not only social proof for the website.
- What this weakens: adding more LinkedIn/GBP content drafts while no owner-side metrics or publishing confirmation exists.
- Stop/change evidence: if the first 4 asks produce discomfort, no replies, filtered reviews, or low-fit referrals, pause and redesign the ask.
- Next test: run 2 review requests and 2 referral prompts over two weeks using `referral-review-request-loop.md`; compare against GBP/LinkedIn signals once owner metrics arrive.

Cycle 22 update:

- Status: strengthened and bounded.
- Confidence: medium-high.
- Evidence: the local source map found many plausible professional/community referral sources, but the strongest first lane is still current/former student referrals because trust is already present. External organisations and events have weaker buying-intent evidence and higher brand risk.
- What this strengthens: personal referrals should stay the first relationship-sourced test.
- What this weakens: jumping straight to coworking, SME association or chamber outreach before proving the referral sentence and ledger.
- Next test: run or interpret the Cycle 21 micro-sprint before activating any external source map.

Cycle 27 update:

- Status: strengthened and operationalized.
- Confidence: high for the loop as a trust test, medium-high for acquisition.
- Evidence: Google official review docs support replies and pressure-free review links, while policy evidence rules out incentives, requested wording and selective-positive solicitation. Fresh professional coach testimonials show that specific outcome stories are more persuasive than broad claims.
- What this strengthens: run the small review/referral loop before more public content.
- What this weakens: a bulk review campaign or public referral programme.
- Next test: record 1-2 review asks only after genuine student outcomes, using anonymous fields from `review-proof-sprint-measurement-plan.md`.

Cycle 28 update:

- Status: strengthened with a privacy boundary.
- Confidence: high for trust testing, medium-high for acquisition.
- Evidence: Google review docs and policy confirm that genuine review asks are allowed but must not use incentives, pressure, selective positive solicitation or requested wording. The new owner-side packet turns this into a tiny private action log, so the loop can be tested without storing private student messages.
- What this strengthens: referrals/reviews are still the best near-term trust test while GBP and LinkedIn owner metrics are unavailable to automation.
- What this weakens: making the referral loop public or programmatic before the first private asks are interpreted.
- Next test: log any review/referral ask with `ask_type`, `trigger_outcome`, `response`, `result` and anonymous proof language.

Cycle 32 update:

- Status: strengthened lightly, still owner-gated.
- Confidence: high for review/reply as trust work, medium-high for acquisition.
- Evidence: the public English reviews endpoint now surfaces a very recent visible review, but owner-view reply status is unknown. This strengthens the review/reply loop while preserving the privacy and policy boundary.
- What this strengthens: review replies should be logged as an `action_log` row before more public review-led posts.
- What this weakens: treating public review freshness as enough to start a bigger review campaign.
- Next test: if owner UI confirms the newest review is unreplied, reply and log status; if a review/referral ask happens, store only anonymous outcome fields.

Cycle 35 update:

- Status: strengthened and narrowed to timely reply plus private ask.
- Confidence: high for review/reply as trust work, medium-high for acquisition.
- Evidence: public `5.0 / 16` remains live and the English visible set includes a May 22, 2026 review. Google review docs support short public replies and pressure-free review links, and external competitor/marketplace proof shows review volume alone is not enough. Auris's advantage is the personal response plus specific proof chain: confidence, Spanish-speaker correction, direct teacher relationship and follow-up.
- What this strengthens: reply to the newest review if owner UI shows it is unreplied, then log the action.
- What this weakens: bulk review asks, public referral programmes, or static `16 reviews` copy before owner truth.
- Next test: if a review/referral ask happens, record only `trigger_outcome`, `response`, `result`, `proof_mentioned` and `lead_quality`.

Cycle 38 update:

- Status: strengthened and turned into a minimal warm-proof sprint.
- Confidence: high for trust testing, medium-high for acquisition.
- Evidence: the public review endpoint contains a fresh referral proof pattern, tutoring/referral sources support direct but specific word-of-mouth asks, and recent learner community threads show the target pain: people can study and use AI/self-practice but freeze or struggle in real workplace conversation.
- What this strengthens: run one no-ask observation, one review ask and one referral prompt before expanding to the original 2-and-2 plan.
- What this weakens: making the loop public, incentive-based, bulk-sent or over-scripted.
- Stop/change evidence: any discomfort, complaint, filtered review, no-response pattern or low-fit/price-first referrals should pause the sprint.
- Next test: use `/Users/aurisp/repos/teacher-website/docs/strategy/referral-review-micro-sprint-cycle38.md` and record anonymous action rows only.

Cycle 47 update:

- Status: held high, with a public-freshness correction.
- Confidence: high for trust testing, medium-high for acquisition.
- Evidence: official Google docs still support genuine review links and public replies, BrightLocal 2026 supports recency/owner-response importance, and the live endpoint remains `5.0 / 16`. However, the 2026-05-24 endpoint check did not surface the previously seen May 22 review first, so public endpoint ordering cannot prove newest-review status.
- What this strengthens: a single timely owner-confirmed reply, review/referral action row, or lead note may beat another GBP draft.
- What this weakens: claiming a fresh unreplied review from public endpoint alone, sending bulk asks, or using static `16 reviews` copy without owner truth.
- Next test: if a review/referral action happens, log only action/result; if a lead appears, classify it first.

Cycle 48 update:

- Status: strengthened as long-game trust, not immediate acquisition.
- Confidence: high for trust testing, medium for future lead volume.
- Evidence: the owner-visible count is confirmed at 16, a recent Teresa review gives a high-quality long-term learner proof theme, and Auris's reply created a visible owner-response action. The former-student recommendation pattern remains important, but the current capacity state argues for slow trust compounding rather than a public referral push.
- What this strengthens: replies and private, natural referrals are still better fit than content volume.
- What this weakens: public referral programs or review campaigns while nearly full.
- Next test: if a future lead says they came from a student/review, classify fit and timing before expanding the loop.

Cycle 56 update:

- Status: strengthened and narrowed to personal trust maintenance.
- Confidence: high for trust, medium for future lead volume.
- Evidence: the recent former-student referral review remains a high-quality trust signal, and Cycle 56 external tutor/community evidence reinforces that reviews are often a main trust layer for tutors while marketplace volume itself is noisy.
- What this strengthens: a warm public reply plus natural private referrals fit Auris better than a public referral campaign.
- What this weakens: asking students for specific review wording, review velocity tactics, or a broad social push while full.
- Next test: if a referral or review-led inquiry arrives, record only anonymized source, first thing mentioned, timing, fit and proof theme.

## H024: Local professional-community referrals are promising, but should stay mapped before outreach.

- Status: new.
- Confidence: medium.
- Evidence: Cycle 22 found plausible source types around Castelldefels, Gava, Viladecans and Barcelona: La Guaita, ON Startup, Coworking Gava, AEPEG, PIMEC, Cambra, Barcelona Activa, entrepreneur/freelance events and public-speaking communities. Live site checks show the business route supports professional/NIF language but there is no public partnership/referral surface, which is appropriate for now.
- What this strengthens: local professional confidence referrals could become an expansion lane after the review/referral loop has real signal.
- What this weakens: cold outreach, discount partnerships, generic language exchanges, or a public partnership page as the next move.
- Stop/change evidence: if these sources are mostly free-practice seekers, institutional provider contexts, or 10-20 EUR/h price-anchor leads, keep the channel dormant.
- Next test: after owner-side review/referral outcomes, run a focused job-demand scan for Barcelona/Baix Llobregat roles and, if still promising, observe one high-fit local/professional event without pitching.

Cycle 23 update:

- Status: refined after job-demand scan.
- Confidence: medium.
- Evidence: job-demand evidence strengthens the work-English use cases likely to appear in professional communities, especially meetings, client calls, presentations, customer incidents and interviews. It still does not prove that coworking spaces, associations or business centres should be contacted now.
- What this strengthens: if a future community/referral conversation happens, the positioning should name concrete work moments rather than "English classes for companies."
- What this weakens: treating local professional-community sources as a lead list.
- Next test: only observe or activate a local source after either owner-side referrals mention work-English needs or one Work-English post creates a meaningful inquiry.

## H025: The Work-English Confidence Loop should be tested as a content/referral angle before becoming a standalone product.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 23 found strong job-demand evidence for work-English situations, but the evidence comes mostly from employers and job listings. That proves use cases, not yet buyer willingness to pay Auris directly. The safest version is to use the angle inside Auris's existing private-class, referral, GBP and LinkedIn surfaces while tracking lead quality.
- What this strengthens: a small implementation-ready offer language test around meetings, interviews, client calls and presentations.
- What this weakens: creating a separate package page, corporate offer or SEO campaign before owner-side signal.
- Stop/change evidence: if the first 3-5 relevant inquiries prefer certificates, group discounts, low marketplace pricing or free public courses, pause the professional package idea and keep it as occasional content.
- Next test: use the hook in `professional-english-job-demand-scan.md`, route LinkedIn to Talk or GBP to homepage, and log `role_context`, `work_moment`, `price_anchor_seen`, `booked_trial` and `lead_quality`.

Cycle 24 update:

- Status: strengthened as a message ladder, not as a product.
- Confidence: medium-high.
- Evidence: the pain-language scan validates four testable work moments: meeting voice, interview, client call and clarity-not-accent. It also finds strong price and differentiation pressure from coaches, academies and marketplaces.
- What this strengthens: run one public/private Work-English message now.
- What this weakens: making a separate package/page before a real lead signal.
- Next test: publish/use only the `Meeting Voice` variant first. If it gets attention but no action, test `Interview` or `Client Call` before building assets.

Cycle 25 update:

- Status: strengthened and ready as a proof-paired test.
- Confidence: medium-high.
- Evidence: Cycle 25 compared proof options and found the safest first pairing is Google review confidence plus portal follow-up, with Spanish-speaker correction as the method proof. External competitors validate the situation but also show that `business English for meetings` is crowded.
- What this strengthens: the first Work-English test is now implementation-ready without becoming a product.
- What this weakens: publishing the hook without proof, or publishing several variants at once.
- Next test: run only the proof-paired `Meeting Voice` version; if it produces attention without qualified action, keep the proof stack and switch the situation to `Interview` or `Client Call`.

Cycle 26 update:

- Status: strengthened and narrowed to a proof sprint.
- Confidence: medium-high.
- Evidence: Cycle 26 found that buyers/students repeatedly mention confidence, adaptation and real situations in local reviews, while professional pages and marketplaces make the same category promises. The Work-English angle is still valid, but the next action should be a review-language proof sprint rather than more offer architecture.
- What this strengthens: the first public/private test should be one proof-led message with review confidence, real-situation practice and follow-up.
- What this weakens: building a named Work-English product, a business-English SEO page, or a multi-post campaign before one measured proof sprint.
- Stop/change evidence: if 3-5 relevant contacts do not mention confidence, reviews, work situations, correction or follow-up, pause the Work-English ladder and re-open pricing/referral evidence.
- Next test: use the GBP review-confidence post or the `Meeting Voice` LinkedIn post, then classify responses by `proof_mentioned`, `work_moment`, `price_anchor_seen`, `booked_trial` and `lead_quality`.

Cycle 27 update:

- Status: strengthened as a measured sprint, not a product.
- Confidence: medium-high.
- Evidence: fresh professional pages validate the same Work-English moments (meetings, negotiations, presentations, interviews and senior-manager confidence), while marketplace evidence increases price pressure. The Work-English angle should stay inside the review proof sprint instead of becoming a larger offer.
- What this strengthens: run one review-confidence GBP post first, then use LinkedIn Meeting Voice only if owner-side profile/post readiness is clear.
- What this weakens: moving from message test to package/page without proof attribution.
- Next test: continue only if sprint responses include `work_moment`, `proof_mentioned` or booked-trial signal.

Cycle 28 update:

- Status: held steady and subordinated to the owner-side capture packet.
- Confidence: medium-high.
- Evidence: the portal code scan confirms between-class follow-up is real, and the lead-note schema now captures work moments. But no owner-side lead data arrived showing that Work-English language is producing bookings.
- What this strengthens: use `work_moment` as a classification field inside the review/GBP sprint.
- What this weakens: making Work-English the next public offer before a lead mentions meetings, interviews, client calls or presentations.
- Next test: if a sprint inquiry mentions a work moment and books a trial, reopen the Work-English proof-pairing scorecard; otherwise keep it as a message angle.

Cycle 41 update:

- Status: strengthened as a measured angle, not a product.
- Confidence: medium-high.
- Evidence: `work-english-signal-refresh-cycle41.md` found fresh support for the moment list, but also stronger falsification pressure: competitors already promise real workplace situations, Superprof frames hundreds of business-English tutors at lower price anchors, and job posts prove use cases rather than direct private buying intent.
- What this strengthens: keep `Work-English Confidence Loop` as an internal test label and publish/use one proof-paired `Meeting Voice` message.
- What this weakens: naming a standalone package, adding a business-English SEO page, or publishing a multi-post series before a lead mentions a work moment and accepts the 40 EUR/h anchor.
- Stop/change evidence: 3-5 relevant inquiries ask mainly for certificates, low-cost group lessons or marketplace prices; or two qualified direct leads mention a 30 EUR marketplace anchor before booking.
- Next test: use the Cycle 41 moment ledger and only promote `Client Call` or `Interview` after the first measured Meeting Voice attempt.

Cycle 42 update:

- Status: strengthened and made proof-specific.
- Confidence: medium-high.
- Evidence: the review-proof scan strengthens the first test but narrows the proof line. Competitors and marketplaces already claim confidence, meetings, adaptation and follow-up, so the test must connect the review outcome to Auris's mechanism: exact work-moment practice, Spanish-to-English correction and between-class review.
- What this strengthens: run one proof-specific Meeting Voice test.
- What this weakens: running the same hook with only a generic review/confidence sentence.
- Next test: use `proof_specificity` plus `work_moment` in inquiry notes before deciding whether to test Client Call or Interview.

Cycle 43 update:

- Status: strengthened as the first measured Work-English angle, not as a content volume plan.
- Confidence: medium-high.
- Evidence: Cycle 43 confirmed the measurement path: Meeting Voice success is not impressions or Talk starts. It requires a buyer to repeat the moment/proof, accept the price context or book a trial. Calendly/GA4/Talk events can support the story, but they cannot identify the proof that created trust.
- What this strengthens: Meeting Voice remains the first Work-English test, but only a Level 4/5 lead can promote Client Call or Interview.
- What this weakens: publishing more Work-English variants before one lead-source proof row.
- Next test: classify the first relevant lead by `proof_specificity`, `work_moment`, `price_anchor_seen`, `booked_trial`, `lead_quality` and `human_signal_strength`; pause the ladder if attention does not become qualified inquiry.

Cycle 44 update:

- Status: held, with price-proof dependency sharpened.
- Confidence: medium-high.
- Evidence: business/professional price comparables support premium one-to-one coaching only when the outcome is specific, while Superprof Business English Barcelona still shows an 18 EUR/h average and many similar confidence/work claims. The owned-site private offer can carry professional moments, but the price card must first explain the personal follow-up system.
- What this strengthens: Work-English should remain a use-case angle inside the existing 40 EUR/h personal private-class offer.
- What this weakens: a separate Work-English product, package, page or price before the generic pricing proof is fixed and one lead-source proof row exists.
- Next test: run Meeting Voice only after or alongside the premium proof stack, and classify whether the lead mentioned `work_moment`, `proof_mentioned` and `price_anchor_seen`.

## H026: Capacity state should decide the acquisition success metric.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 48 added the key owner context missing from earlier acquisition cycles: Auris is nearly fully booked, nobody is contacting him yet, and he is playing the long game for future leads. Local code shows the site is still optimized for immediate trial bookings, while owner GBP Performance shows trust/discovery activity but very low interactions. External service-business waitlist signals warn that fully booked can hide future-demand leaks, while official Google docs support low-effort trust freshness through reviews, profile info, photos and owner metrics.
- What this strengthens: acquisition channels should be evaluated differently in `Trust Maintenance Mode`, `Soft Future-Availability Mode`, `Measured Acquisition Mode` and `Capacity Expansion Mode`.
- What this weakens: judging GBP/LinkedIn/SEO by lead volume without first asking whether Auris wants leads now.
- Stop/change evidence: if Auris has open capacity and wants leads within 30 days, switch from trust maintenance to measured acquisition and judge profile actions/inquiries. If no capacity is expected for 8+ weeks, do not optimize for more immediate inquiries.
- Next test: use Packet AW. Before every channel recommendation, record capacity state: full, limited, opening soon, or actively filling.

Cycle 49 update:

- Status: strengthened and made deploy-gated.
- Confidence: high.
- Evidence: Auris asked for softer public copy and a less "book now" design; the local code now implements that capacity state across hero, pricing, contact, floating badge, SEO landers and Talk completion. Build and local visual checks pass. External Google/Calendly evidence shows owner metrics can be watched after deployment, while waitlist product patterns warn that future availability should capture timing and fit.
- What this strengthens: capacity state now controls both public CTA language and post-deploy measurement.
- What this weakens: treating the availability patch as a universal improvement independent of whether Auris is full, limited, opening soon or actively filling.
- Stop/change evidence: if Auris opens slots within 30 days, restore clearer booking language or run a measured acquisition mode. If good prospects ask whether Auris is closed, keep the honesty but make the contact path clearer.
- Next test: Packet AX. If deployed, record deploy date, capacity state, CTA state, owner GBP/Calendly/contact metrics and the first `availability_confusion` row.

Cycle 50 update:

- Status: strengthened and bounded.
- Confidence: high.
- Evidence: the pricing-proof scan shows capacity state should control CTA intensity, but not value proof. Limited-availability wording is honest while Auris is close to full; it becomes risky if it is asked to explain why the private class is 40 EUR/h.
- What this strengthens: classify the site as `Soft Future-Availability Mode` only if the local patch is deployed, and pair it with proof if any public acquisition resumes.
- What this weakens: treating "full" as a marketing asset rather than an operational state.
- Stop/change evidence: if good prospects think Auris is closed, make the contact path clearer; if price objections rise after availability-only deployment, patch proof before lowering or hiding price.
- Next test: use `premium-proof-pairing-gate-cycle50.md` before any deploy decision, then track `capacity_state`, `cta_state_seen`, `proof_mentioned`, `availability_confusion` and `lead_quality`.

Cycle 51 update:

- Status: strengthened and made contact-mode specific.
- Confidence: high.
- Evidence: Auris confirmed he is nearly fully booked and wants to build slowly for the future. The owner-requested code change now removes Calendly, removes highlighted limited-availability styling, and routes prospects to WhatsApp/email. Local competitor pages show direct contact is normal in the category, but academies use it inside broader enrolment funnels.
- What this strengthens: current mode should be `direct_contact_future_availability`, not booking-first acquisition.
- What this weakens: loud scarcity badges, "book now" language, or restoring Calendly simply because it is easier to measure.
- Stop/change evidence: if Auris opens a slot and wants a student within 30 days, switch to `measured_acquisition`; if direct conversations get lost, add a lightweight follow-up tracker before adding a public form.
- Next test: after deploy or first inquiry, classify `capacity_state`, `contact_method`, `future_timing`, `availability_confusion`, `lead_quality` and `next_follow_up_date`.

Cycle 52 update:

- Status: strengthened and moved from local candidate to live public state.
- Confidence: high.
- Evidence: production now serves direct-contact mode: live assets contain quiet future-availability language and WhatsApp/email CTAs, Talk completion routes to WhatsApp, and no active Calendly or highlighted scarcity strings remain. Local competitor contact pages show direct phone/email/form/WhatsApp paths are normal, but Auris's path should stay quieter and more personal than academy enrolment funnels.
- What this strengthens: while Auris is close to full, the success metric is future-fit private contact quality, not booking volume.
- What this weakens: judging zero immediate leads as failure, or restoring scheduling only because it was easier to attribute.
- Stop/change evidence: if a high-fit prospect thinks Auris is closed, clarify the contact copy; if a slot opens within 30 days, switch to measured acquisition; if conversations are missed, add a small follow-up tracker before adding a form.
- Next test: capture the first direct-contact row or one monthly GBP owner snapshot; do not add a waitlist/CRM until repeated rows prove the need.

Cycle 53 update:

- Status: strengthened.
- Confidence: high.
- Evidence: if GBP still shows `calendly.com` while the site says WhatsApp/email and Auris is close to full, the profile is partly in booking-first mode and partly in future-availability mode.
- What this strengthens: capacity mode must be consistent across website and profile action links, not only homepage copy.
- What this weakens: leaving old appointment links live by accident.
- Stop/change evidence: if Auris intentionally wants Calendly as a back-pocket exception, log it and keep it; if he wants direct-contact mode everywhere, remove/disconnect the GBP appointment link.
- Next test: fill `gbp_contact_link_truth`, then wait for one real inquiry or monthly owner snapshot.

Cycle 54 update:

- Status: strengthened with copy hierarchy.
- Confidence: high.
- Evidence: the booking-pressure strings are gone, but `free first class` remains in local landing/FAQ/schema. External local and marketplace examples show free level tests and free first classes are common, but often tied to academy or marketplace enrolment funnels.
- What this strengthens: while Auris is close to full, the first public action should be `message me / first conversation`, not a free-trial headline.
- What this weakens: treating `free first class` as always wrong. If Auris still offers it, keep it as a fit-check detail rather than the main CTA.
- Stop/change evidence: if Auris wants to fill a slot soon, clearer first-class/trial language can return; if he remains nearly full, reframe to future slot/first conversation.
- Next test: Packet BC if Auris asks for public hygiene work; otherwise wait for `free_first_class_expectation` in the first inquiry row.

Cycle 55 update:

- Status: strengthened with profile-level contact mode.
- Confidence: high.
- Evidence: Calendly may be useful in a future `measured_acquisition` mode, but while Auris is close to full and the site says direct contact, a GBP booking link creates mixed public intent. A Google Ads prompt is also misaligned with current capacity.
- What this strengthens: remove/disconnect Calendly from GBP unless it is intentionally kept as a booking exception.
- What this weakens: restoring booking or running ads for measurement while full.
- Stop/change evidence: if Auris opens a slot and wants bookings within 30 days, a booking link can return deliberately with UTM/source tracking.
- Next test: record whether the GBP link is gone, pending, blocked or intentionally kept.

Cycle 56 update:

- Status: strengthened with review-reply success metric.
- Confidence: high.
- Evidence: while Auris is nearly full, a review reply is a low-pressure trust action that keeps the profile human without inviting a large immediate lead flow. Official Google docs and BrightLocal research support reply visibility and trust, but GBP Performance and inquiry rows remain required for acquisition conclusions.
- What this strengthens: in Trust Maintenance Mode, success means fresh, coherent proof and a clear future-contact path.
- What this weakens: judging zero leads as failure after maintenance replies, or creating a content calendar before capacity changes.
- Stop/change evidence: if Auris opens capacity or replies generate no public visibility, switch from maintenance to either measured acquisition or reply-status troubleshooting.
- Next test: use Packet BE until replies are live/settled, then rotate to monthly snapshot or first inquiry.

Cycle 57 update:

- Status: strengthened with a retention/proof metric.
- Confidence: high.
- Evidence: Auris is close to full, so the best compounding work may happen inside current student experience rather than public acquisition. The site already uses calmer direct-contact/future-availability posture, and the platform already has continuity surfaces. Cycle 57's external sources support between-session guidance as valuable, but the stop rule is clear: do not optimize for more immediate leads or bigger platform claims until a current-student proof row or first inquiry row changes the evidence.
- What this strengthens: in Trust Maintenance Mode, retention, referral readiness and current-student progress proof are valid success metrics.
- What this weakens: treating no new leads as failure, or using spare automation cycles to generate more public content while the current student proof loop is untested.
- Stop/change evidence: if a slot opens within 30 days, return to measured acquisition; if current-student continuity rows show progress, consider a low-risk Next 15 build or quiet proof copy later; if rows show homework friction, keep the portal guidance personal/manual.
- Next test: Packet BF, then monthly GBP snapshot or first direct-contact inquiry row if owner-side data appears.

Cycle 58 update:

- Status: strengthened into a pruning rule.
- Confidence: high.
- Evidence: Cycle 58 shows the site, reviews endpoint and teaching API are healthy; the open loops are mostly owner/student rows. Official docs confirm that ads, posts, social analytics, routing and waitlist tools all create work or metrics that are premature while capacity is tight.
- What this strengthens: the default mode is now `Trust Maintenance + Evidence Waiting`.
- What this weakens: using automation cycles to create more content, SEO, social, CRM or platform ideas just because no inquiry has arrived.
- Stop/change evidence: capacity opens within 30 days, first inquiry row appears, GBP status arrives, current-student rows arrive, code approval arrives, or GSC/GBP API access changes.
- Next test: Packet BG strategic ignore list refresh.

Cycle 59 update:

- Status: strengthened with trigger priority.
- Confidence: high.
- Evidence: the router makes `capacity_changed` the top priority trigger because the same signals mean different things when Auris is full, softly open, actively filling, or expanding. Public readiness checks remain lower priority than capacity, inquiry and student behavior.
- What this strengthens: capacity mode must be classified before reopening content, SEO, GBP or platform lanes.
- What this weakens: treating healthy site/review/API checks as a reason to start acquisition while no capacity trigger has changed.
- Stop/change evidence: a slot opens, Auris wants leads within 30 days, or repeated future-fit inquiries are being missed.
- Next test: if Auris gives any capacity update, route it as `capacity_changed` before any channel recommendation.

Cycle 61 update:

- Status: strengthened by public-contact consistency.
- Confidence: high.
- Evidence: the public site now carries direct contact, calm availability, no highlighted scarcity, no free-first-class wording and a one-minute Talk default. This matches `direct_contact_future_availability` better than the older Calendly/trial funnel. The only live mismatch found is minor technical/message hygiene: Talk sitemap `lastmod` is stale and the recording/listenback copy remains.
- What this strengthens: while close to full, the right success metric is high-fit future-contact quality, not booking volume.
- What this weakens: restoring Calendly or louder availability language purely for attribution.
- Stop/change evidence: if Auris opens capacity within 30 days, switch back to measured acquisition; if high-fit prospects think the site is closed, clarify contact copy without turning it into scarcity marketing.
- Next test: first direct-contact row or owner GBP snapshot; keep Talk edits limited to feature-copy/sitemap hygiene unless a reply row changes priorities.

## H027: Strategic pruning is higher leverage than more ideas while Auris is close to full.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycles 48-57 created mature gates across capacity, direct contact, GBP Calendly status, review replies and current-student continuity. Cycle 58 live checks found no urgent public/site/API issue, and external official sources show that ads, posts, social analytics, routing forms and waitlists only become useful after capacity or lead volume justifies them.
- What this strengthens: the automation should treat "ignore until evidence changes" as an implementation-ready outcome, not as a shallow cycle.
- What this weakens: broadening into more acquisition channels, public copy drafts or product specs while the missing proof rows are unchanged.
- Stop/change evidence: any of the named triggers in `strategic-ignore-list-cycle58.md` arrives, especially capacity opening, a first inquiry row, two current-student rows, GBP owner status or explicit code/build approval.
- Next test: in the next cycle, first classify `evidence_arrived`, `approval_arrived`, `capacity_changed` or `no_new_evidence`. If `no_new_evidence`, keep parked lanes parked and avoid creating a new strategy lane.

Cycle 59 update:

- Status: strengthened and operationalized.
- Confidence: high.
- Evidence: Cycle 59 shows that after pruning, the next missing process is routing. Without a router, any screenshot or owner note could reopen unrelated lanes. With the router, "ignore until evidence changes" becomes actionable instead of passive.
- What this strengthens: pruning is now paired with a concrete intake system.
- What this weakens: another broad source scan or strategy artifact after `no_new_evidence`.
- Stop/change evidence: if the next real evidence item cannot be routed cleanly, update the router rather than widening the strategy.
- Next test: use Packet BH on the next owner/student/prospect/capacity/access signal.

Cycle 60 update:

- Status: strengthened with a repeat-run stop rule.
- Confidence: high.
- Evidence: Cycle 60 found no public/site/API state change and no owner/student/prospect row, while process sources on toil, actionable monitoring, WIP limits and performance measurement support bounding repeated stable checks.
- What this strengthens: pruning must include a quiet-cycle contract so restraint does not become its own admin lane.
- What this weakens: treating the deep-cycle checklist as a reason to create artifacts when the trigger is explicitly `no_new_evidence`.
- Stop/change evidence: capacity changes, first inquiry row, current-student rows, GBP owner/contact-link evidence, access restoration, or a real public/system regression.
- Next test: the next `no_new_evidence` heartbeat should run only bounded checks and avoid new durable artifacts.

## H028: Evidence routing prevents false work after pruning.

- Status: new.
- Confidence: medium-high.
- Evidence: Cycle 58 created a useful ignore list, but it left a practical question: where should new evidence go when it appears? Cycle 59 maps each incoming proof type to an existing row, including review reply status, owner snapshot, GBP contact-link truth, first inquiry, current-student row, capacity change, access change, channel-visible signal and public readiness.
- What this strengthens: the automation can stay proactive without inventing more work.
- What this weakens: assuming `no_new_evidence` cycles should always create a new process artifact.
- Stop/change evidence: if 3 consecutive evidence items do not fit the router, the labels are incomplete; if the next cycle creates a new campaign despite `no_new_evidence`, the process rule failed.
- Next test: classify the next piece of owner/student/prospect evidence using `evidence-trigger-router-cycle59.md` and update only one existing destination.

Cycle 60 update:

- Status: strengthened but narrowed.
- Confidence: high.
- Evidence: Packet BH routed the quiet cycle away from campaigns, content, SEO and platform work. The only weakness was that the `no_new_evidence` branch did not yet define how much checking is enough, so Cycle 60 added a Quiet Cycle Contract inside the existing router.
- What this strengthens: a router can prevent false work only if it also contains a stop rule for stable, repeated quiet cycles.
- What this weakens: repeatedly improving the router after each quiet heartbeat.
- Stop/change evidence: a future evidence item cannot be classified, or a quiet cycle creates broad new work despite stable checks.
- Next test: if no new evidence appears, the next run should `DONT_NOTIFY`; if evidence appears, update exactly one matching row.

## H029: Synthesis pulses preserve useful ideation without false work.

- Status: strengthened and process-bounded.
- Confidence: medium-high.
- Evidence: Cycles 100-108 show the Quiet Cycle Contract successfully prevented false campaigns, platform specs and broad browsing while public checks stayed stable and owner/student/prospect rows remained missing. Auris's later check-in exposed the counter-risk: the automation can become too quiet and fail to synthesize accumulated findings into new options when explicitly asked. Cycle 110 produced a first compact scorecard without owner notification or public work. Cycle 111 added the reset-marker rule so long quiet streaks can trigger synthesis without filling `research-log.md` with low-value quiet entries. Cycle 112 added a Pulse Gate skip because the next full pulse would have repeated Pulse 01/02 without new evidence. Cycle 115 added a gate ceiling because repeated skipped gates can become their own low-value artifact.
- What this strengthens: quiet cycles and idea generation need separate modes. `no_new_evidence` should stay bounded, owner requests should trigger synthesis, long quiet streaks should trigger either a compact Idea Synthesis Pulse or a Pulse Gate skip if no materially new selection exists, and repeated skipped gates should stop until a real trigger appears.
- What this weakens: treating every owner check-in without a new data row as irrelevant conversation context.
- Stop/change evidence: if synthesis pulses repeatedly create public-work recommendations without new evidence, lower confidence and tighten the scorecard; if Auris reports that the pulses surface useful decisions without admin load, strengthen confidence.
- Next test: the next owner synthesis/process request should use Packet BJ, generate an evidence-bound scorecard, update one process rule if needed, and leave the next cycle pointed back to Packet BH. Quiet cycles after the latest gate ceiling should `DONT_NOTIFY` without creating more gate entries unless new evidence, review-count delta, public/API regression, owner synthesis/process request or concrete automation failure appears.
