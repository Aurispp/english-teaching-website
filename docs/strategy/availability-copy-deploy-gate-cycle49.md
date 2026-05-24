# Availability Copy Deploy Gate - Cycle 49

Created: 2026-05-24 Cycle 49

Purpose: turn the newly implemented local "Check availability" pricing/contact change into a deploy-ready decision gate. This keeps the softer copy aligned with Auris's real capacity without accidentally making the site feel closed.

## Primary Question

How should the newly softened availability copy be treated before deploy, and what evidence should decide whether it helps or hurts?

## Working Answer

The local implementation is directionally right for `Soft Future-Availability Mode`: it reduces "book now" pressure while keeping a clear route to contact Auris.

Do not treat the change as automatically safer because Auris is nearly full. It needs a small deploy gate because softer CTAs can create a new problem: prospects may think there is no real path to start.

Best interpretation:

- If Auris wants the public site to match his current limited capacity, the patch is ready to deploy after owner approval.
- If Auris wants to actively fill slots soon, this copy is probably too quiet and should become more direct again.
- If deployed, success is not immediate lead volume. Success is fewer misleading urgent-booking signals, no confusion from high-fit prospects, and at least one future-demand note when somebody asks.

## Source Discovery

Best possible source types for this exact question:

| Source Type | Why It Might Help | Use This Cycle? |
| --- | --- | --- |
| Local diff of the availability-copy patch | Shows exactly what would change publicly. | Used. |
| Rendered local preview | Tests whether the design feels quieter without hiding the next step. | Used from local Playwright/browser checks. |
| Live production headers/review endpoint | Separates local changes from deployed public state and confirms proof still works. | Used. |
| GBP owner Performance docs | Defines which profile interactions can be watched if the page changes later. | Used. |
| Google review/local-ranking docs | Tests whether trust freshness still matters more than urgent booking. | Used. |
| Google photos/posts docs | Checks whether owner profile fixes should outrank another page CTA tweak. | Used lightly. |
| Calendly analytics/GA docs | Checks how "availability" can be measured if the underlying flow still schedules meetings. | Used. |
| Calendly routing docs | Tests whether a future qualification/waitlist form is justified now. | Used lightly. |
| Scheduling/waitlist product docs | Reveals mature patterns for capturing interest when capacity is constrained. | Used. |
| CTA/accessibility guidance | Tests whether "Check availability" is clear enough as a standalone action. | Used lightly. |
| Service-business community threads | Falsifies the idea that fully booked means no future-demand leakage. | Used lightly. |
| Competitor pages | Lower value here; this is a capacity/copy fit question, not a positioning gap. | Skipped. |

Chosen source mix: local implementation, live data checks, official Google/Calendly docs, scheduling/waitlist docs, one CTA clarity source, and service-business outside-in signals.

## Local Implementation Audit

| Artifact | Finding | Deploy Implication |
| --- | --- | --- |
| `src/translations.js` | Hero CTA, pricing CTA, contact tab and contact headings now use availability language in EN/ES. Pricing includes: "I’m usually close to full, but you can message me about future availability." | Core copy matches Auris's capacity reality. |
| `src/components/PricingSection.jsx` | Pricing now has a limited-availability note above the cards, softer card emphasis, and message icons in CTAs. | The visual hierarchy no longer shouts "book now." |
| `src/components/CalendlyBadge.jsx` | Floating badge now says "Check availability" / "Consultar disponibilidad." | Good consistency, but it still opens Calendly, so the user may still book if slots exist. |
| `src/components/SeoLandingPage.jsx` | Local/business landing CTAs are softer. | Prevents campaign pages from overpromising immediate capacity. |
| `src/components/TalkTheTalk.jsx` | Talk completion CTA now says "Check availability" and uses a quieter style. | Good for low-pressure trust; weaker if Talk is later used as an acquisition lead magnet. |
| `src/components/ContactSection.jsx` | Copy now says Availability, but the component still defaults to the Calendly tab and can embed a booking widget. | This is acceptable for `Soft Future-Availability Mode`; if it feels too open, change tab order later rather than adding a waitlist app. |
| `src/components/HeroSection.jsx` | Hero CTA reads from the softened translation and still scrolls to contact. | First-screen promise is now calmer without removing the next step. |
| `src/App.jsx` | Calendly scheduled-event tracking still exists. | Measurement can still capture bookings if the embed event fires. |
| `measurement-plan.md` | Existing plan already tracks `contact_tab_selected`, `booking_type_selected`, `calendly_badge_click`, contact success and Calendly schedule events. | Add capacity-state/future-demand fields before interpreting results. |
| `pricing-positioning.md` | Cycle 48 already approved future-availability offer logic, but the site patch had not existed yet. | Update to mark the local implementation as ready-but-not-deployed. |
| `content-strategy.md` | Cycle 48 moved cadence toward quiet trust maintenance. | The softer CTA is consistent with the content mode. |
| `automation-research-loop.md` | Has a capacity-state rule. | Add a deploy-gate rule for owner-requested implementation cycles. |

## Data / API Evidence

Checks on 2026-05-24:

| Check | Result | Meaning |
| --- | --- | --- |
| Production homepage headers | `https://englishwithauris.com/` returns HTTP 200 from Netlify. | No urgent public outage. |
| Local dev homepage headers | `http://127.0.0.1:5175/` returns HTTP 200. | Local preview is reachable. |
| Build | `npm run build` succeeds; the only warning is the existing TalkTheTalk chunk size warning. | The availability patch is build-safe. |
| Local visual QA | Desktop and mobile pricing snapshots showed the availability note and softened CTAs with no obvious overlap. | Design is ready for owner review. |
| Review endpoint EN | `places-new`, rating `5`, `reviewCount` `16`; visible set includes Milagros from 2026-05-22 and older reviews. | Review proof remains live and dynamic. |
| Review endpoint ES | `places-new`, rating `5`, `reviewCount` `16`; visible set still surfaces confidence, adaptation, meetings, tools and continuity themes. | Trust proof still supports the softer copy. |
| Source scan | No remaining "Book your free..." style strings in `src`; remaining availability language is intentional. | The local code is internally consistent. |

## External Evidence

| Source | Signal | Supports | Weakens |
| --- | --- | --- | --- |
| Google GBP Performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Owners can track profile views, searches, website clicks, calls, messages, bookings and other interactions by date range. | If deployed, compare monthly owner metrics and website clicks instead of guessing. | Treating a copy change as measurable without a baseline. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Complete profile information, review replies, photos/videos, and review count/rating are practical trust/prominence factors. | Trust maintenance stays relevant while Auris is full. | Chasing only page CTA changes. |
| Google review reply docs, `https://support.google.com/business/answer/3474050?hl=en` | Replies are public, reviewed by Google and notify the reviewer. | Review replies remain a higher-signal tiny action than a content sprint. | "Likes" as equivalent to replies. |
| Google posts docs, `https://support.google.com/business/answer/7342169?hl=en` | GBP posts can add updates/buttons but may be pending or not approved. | If a capacity post happens, log status instead of assuming it is live. | Weekly posting as a default while nearly full. |
| Google photo docs, `https://support.google.com/business/answer/6031953?hl=en` | Logo/cover/media can help recognition but display is not guaranteed and media may be pending/not approved. | The avatar/logo issue is worth fixing quietly, not urgent. | Spending the next cycle only on avatar inconsistency. |
| Calendly analytics docs, `https://calendly.com/help/calendly-analytics` | Owners/admins can track created, completed, rescheduled and canceled events for scheduling trends. | If the CTA changes, Calendly owner analytics can show whether meetings still happen. | Relying only on website click events. |
| Calendly GA docs, `https://calendly.com/help/calendly-google-analytics` | Calendly can track invitee events and UTMs, including meeting scheduled events. | Availability paths should keep UTM/source discipline when used in campaigns. | Unattributed Calendly links if this becomes a real campaign. |
| Calendly Routing docs, `https://calendly.com/help/calendly-routing` | Routing forms can qualify and route leads using form data. | A future qualification form is possible if lead volume grows. | Adding routing now; it is built for higher-volume teams. |
| Vagaro waitlist docs, `https://support.vagaro.com/hc/en-us/articles/360012490814-Join-a-Waitlist-for-Services-for-Customers-of-a-Vagaro-Business` | Waitlists capture preferred time ranges and notify people when a matching slot opens. | Future-demand notes should include timing/preference, not just email. | A vague "join my list" without schedule/fit context. |
| HarvardSites CTA guidance, `https://designsystem.harvardsites.harvard.edu/keep-cta-link-text-clear-and-actionable` | CTA labels should be clear, specific and action-oriented so people understand what happens next. | "Check availability" is clearer than a vague "learn more" and more honest than "book now." | Making CTAs so soft that the outcome is unclear. |
| Easy Appointment Booking waitlist docs, `https://intercom.help/easy-appointment-booking/en/articles/14426007-waitlist` | Waitlist systems often replace/accompany the calendar when fully booked and track status through booking. | If Auris becomes full for months, a true waitlist should be a state change, not just copy. | Building this before any future-demand rows exist. |
| Reddit service-business waitlist thread, `https://www.reddit.com/r/Entrepreneurs/comments/1s6v094/if_youve_been_fully_booked_with_a_waitlist_what/` | Operators describe invisible leakage when people almost book, ask for times, or wait without follow-up. | Capture one small future-demand row when somebody asks. | Ignoring future demand because current capacity is full. |

## Falsification

### H026: Capacity state should decide the acquisition success metric.

Cycle 49 result: strengthened and made implementation-specific.

Evidence:

- Auris explicitly requested the softer line and a design change away from "BOOK now."
- The local code now matches `Soft Future-Availability Mode`.
- Official Google/Calendly docs give owner-side metrics that can track whether contact/booking paths still move.
- Waitlist product patterns show that capacity-constrained services need preference/timing capture, not just louder CTAs.

Refinement:

- Capacity state should decide both copy and measurement.
- When copy changes because of capacity, the next cycle should create a deploy/measurement gate rather than reopening broad acquisition theory.

Next practical test:

- If deployed, record deploy date and capacity state, then compare 28-day owner signals and any `future_demand_note`.

### H004: 40 EUR/h is viable only if the premium is visible in the first minute.

Cycle 49 result: strengthened, with a risk.

Evidence:

- Pricing still shows 40 EUR/h, but the new availability note appears before pricing cards.
- Softer CTAs reduce urgency, but they do not add new premium proof.
- Existing review/portal/follow-up proof still needs to carry the price; the availability note alone cannot justify premium pricing.

Refinement:

- The availability note should not replace the price-proof patch. It solves capacity truth, not premium justification.
- If conversion later weakens, the next fix is likely clearer mechanism proof near pricing, not simply returning to "Book now."

Next practical test:

- Track whether inquiries mention availability, price, reviews, portal/follow-up or confusion. If price objections rise, revisit the premium proof stack.

### H015: Manual lead-source notes are required before channel conclusions are trustworthy.

Cycle 49 result: strengthened and narrowed.

Evidence:

- Local analytics can track clicks, contact tabs and some Calendly events, but cannot know whether a prospect understood "future availability."
- Calendly can track scheduling trends/UTMs, but human fit/timing still needs a manual row.

Refinement:

- Add `availability_copy_seen`, `capacity_state`, and `future_timing` to the next inquiry row if the softened copy goes live.

Next practical test:

- For the first inquiry after deploy, record source, need, timing, fit, and whether the person understood availability as "future slot" or "book now."

### Favored Idea We Tried To Weaken

`Softening all CTAs is automatically better because Auris is full.`

Result: weakened.

The change is honest and probably better aligned with current capacity, but it can fail if good prospects read it as "there is no path for me" or if the page loses the warmth of a possible first class. The safer conclusion is: deploy only as an approved capacity-state change, then watch confusion and high-fit inquiry quality.

Stop/change evidence:

- A good prospect says the site made it seem impossible to start.
- Auris opens slots and wants new students within 30 days.
- Website/Calendly contact intent drops after deploy while GBP profile actions stay similar.
- The first 2-3 inquiries ask "are you taking anyone at all?" rather than describing their learning need.

Cheaper/simpler alternative:

- Keep only the pricing availability note and leave hero/contact more direct. This is the fallback if the full-site softening feels too passive.

## Deploy Gate

Do not deploy automatically from the automation. Deploy only if Auris confirms that the live site should enter `Soft Future-Availability Mode`.

Ready-to-deploy if:

- Auris approves the exact EN/ES availability wording.
- `npm run build` passes.
- Desktop/mobile preview remains clean.
- The route still gives a real contact path: Calendly, direct email/WhatsApp and message form.
- No public copy says "book now" in a way that contradicts scarcity.

Hold or revise if:

- Auris expects to fill open slots within 30 days.
- The softened CTAs feel too passive on first screen.
- The contact tab should stop defaulting to Calendly and start with direct contact/form instead.
- Auris wants to keep the public site unchanged while he is fully booked.

## Measurement After Deploy

Record this row once if the patch goes live:

| Deploy Date | Capacity State | Main CTA State | GBP Views | GBP Searches | Website Clicks | Calendly Events | Contact Form Successes | Direct Messages | Future-Demand Notes | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | full / limited / opening_soon / actively_filling | availability / booking / waitlist |  |  |  |  |  |  |  | keep / tighten / revert / switch mode |

Add these fields to the first inquiry after deploy:

| Field | Values |
| --- | --- |
| `availability_copy_seen` | yes / no / unknown |
| `capacity_state_at_inquiry` | full / limited / opening_soon / actively_filling |
| `future_timing` | now / 1-2 months / flexible / unknown |
| `availability_confusion` | none / thought closed / thought instant booking / asked for clarification |
| `proof_mentioned` | reviews / portal / personal teacher / Ireland/bilingual / price / unknown |
| `lead_quality` | high / medium / low |

## Strategic Synthesis

Strongest next move:

Treat the local patch as a ready owner-requested deploy candidate, not as a growth campaign. If Auris says yes, deploy it and measure with a capacity-state row.

What not to do yet:

- Do not build a waitlist app.
- Do not add Calendly Routing.
- Do not run Google Ads into limited availability.
- Do not create a bigger "fully booked" page.
- Do not turn "limited availability" into false scarcity.

Smallest practical test:

Deploy the copy only when Auris wants the live site to be softer, then record one 28-day snapshot and the first future-demand inquiry row.

Evidence that would change the recommendation:

- If capacity opens, switch to clearer booking or a single specific offer.
- If good leads are confused, keep the availability note but restore a clearer "message me" CTA.
- If wrong-fit leads drop and high-fit future notes appear, keep the softer copy.

Risk of acting too early:

- The site may under-sell the free first class before there is actual waitlist demand.

Risk of waiting:

- The current public site may keep inviting immediate booking while Auris is close to full, creating small expectation mismatches.

## Next-Cycle Packet AX

Theme: availability-copy deploy result and first inquiry interpretation.

Start with:

- `/Users/aurisp/repos/teacher-website/docs/strategy/availability-copy-deploy-gate-cycle49.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/measurement-plan.md`
- `/Users/aurisp/repos/teacher-website/docs/strategy/pricing-positioning.md`
- `/Users/aurisp/repos/teacher-website/src/translations.js`
- `/Users/aurisp/repos/teacher-website/src/components/PricingSection.jsx`
- `/Users/aurisp/repos/teacher-website/src/components/ContactSection.jsx`
- live homepage and pricing section after deploy, if deployed

If deployed:

1. Record deploy date, capacity state and exact CTA state.
2. Check production source/rendered copy for EN/ES availability wording.
3. Pull safe public checks: homepage headers, review endpoint EN/ES, visible CTAs.
4. If owner metrics are available, record 28-day GBP views/searches/website clicks and Calendly created/completed events.
5. If any inquiry happened, fill the availability inquiry row before making a channel conclusion.

If not deployed:

1. Do not repeat the availability-copy research.
2. Keep the local patch documented as ready.
3. Rotate to either premium price-proof implementation, retention/Next 15 evidence, or owner GBP/profile freshness.

Unfinished threads:

- Owner deploy decision is still required.
- Production does not yet show the softened copy unless Auris deploys.
- First post-softening inquiry row is missing.
- Search Console scoped access remains unresolved.
- The premium proof stack is still a separate improvement from availability copy.
