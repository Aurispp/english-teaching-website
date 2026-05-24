# Pricing and Offer Positioning

Created: 2026-05-21 Cycle 03
Last updated: 2026-05-24 Cycle 51

## Current Price

- Website: private classes 40 EUR/h; group classes 20 EUR/h.
- Public marketplace evidence from Cycle 10: Superprof now shows 40 EUR/h as the main rate and 30 EUR/h online; Tusclases still shows 30 EUR/h in public search/profile snippets.

## Market Context

Broad private-tutor market:

- Zaask: private English classes 15-40 EUR/h, average 20 EUR/h; home classes 20-50 EUR/h.
- Superprof Barcelona: many tutors from 10 EUR/h; average often cited around 15-25 EUR/h; premium examples include 40 EUR/h.
- Superprof Spain: typical range 12-30 EUR/h.

Premium/private/commercial comparables:

- FunTalk Barcelona: individual private English 38 EUR/h; 2-person classes 21 EUR/person.
- Language Services Barcelona: in-company/business/private style classes from 26 EUR/h.
- IberEnglish: business English 48.50 EUR/h for 2026/27.
- Bravo Academy: business English from 6.60 EUR/h, likely group/academy pricing rather than direct private premium.

## Pricing Diagnosis

40 EUR/h is not a mass-market tutor price. It is a premium price.

That can work if the buyer understands they are not buying "one hour of English conversation." They are buying:

- a direct relationship with Auris
- 11+ years teaching Spanish speakers
- bilingual/Ireland-raised perspective
- practical correction while speaking
- adult/professional confidence outcomes
- personalized materials
- class vocabulary and notes turned into review
- portal access, flashcards, and progress tracking
- invoice with NIF where relevant

The weak framing is:

> 1-on-1 lessons tailored to you

That is true, but not distinctive enough to carry 40 EUR/h.

The stronger framing is:

> One-to-one English classes with a personal follow-up system: real speaking practice, useful correction, tailored materials, and review between classes so the language comes back next time.

## Channel Pricing Risk

If the site says 40 EUR/h and marketplaces say 30 EUR/h, leads who compare may feel uncertainty.

Options:

1. Align all public prices.
   - Cleaner and more premium.
   - Risk: fewer marketplace leads.

2. Keep marketplace price as an acquisition/channel price.
   - Works if intentional.
   - Should be documented internally.
   - Avoid making the website feel overpriced by adding proof of what is included.

3. Move website wording away from rigid hourly price.
   - Example: "Private classes from 40 EUR/h" or "Private classes: 40 EUR/h, includes portal and follow-up."
   - Keeps transparency while framing value.

Recommendation: do not hide price. Keep transparency, but make the inclusions more concrete immediately next to the price.

## Suggested Website Proof Block

Title:

`What is included in the class`

Copy:

`The live hour is only part of the work. I prepare the class around your goals, correct the patterns that block your speaking, and keep vocabulary, materials, and review organised in your student portal between sessions.`

Bullets:

- `Speaking practice and correction with Auris`
- `Materials adapted to your goals and level`
- `Vocabulary from class saved for review`
- `Personal flashcards and progress tracking`
- `Optional invoice with NIF for professionals or companies`

## Suggested Pricing Card Edits

Current:

- `1-on-1 lessons tailored to you`
- `Focused on your specific goals`
- `Flexible scheduling`
- `Continuous feedback and progress tracking`
- `Full access to the student portal`

Stronger:

- `1-on-1 classes with personal follow-up`
- `Real conversation, correction and pronunciation work`
- `Materials adapted to your goals`
- `Vocabulary from class saved into review`
- `Portal access, flashcards and progress tracking`

Spanish:

- `Clases 1-a-1 con seguimiento personal`
- `Conversación real, corrección y pronunciación`
- `Materiales adaptados a tus objetivos`
- `Vocabulario de clase guardado para repasar`
- `Portal, tarjetas y seguimiento de progreso`

## Offer Experiments

Experiment A: Premium proof near pricing

- Add "what is included" copy near price.
- Measure trial-class clicks and WhatsApp clicks.

Experiment B: Professional package

- Offer language: `English for work: meetings, presentations and client calls`.
- Keep hourly price transparent but emphasize invoice and specific work contexts.

Experiment C: Trial-class conversion

- On booking confirmation or after trial, send a one-page "how classes work" note explaining the portal/follow-up loop.

## Open Questions

- Should marketplace prices be aligned to 40 EUR/h?
- Does 40 EUR/h apply to all private students or only new students?
- Are groups actually available enough to advertise strongly, or should they be presented as "when a suitable group exists"?
- Should business/professional classes have a separate rate or package?

## Cycle 49 Availability Copy And Pricing

Auris asked to soften the pricing/contact design away from immediate booking pressure and add this line:

`I’m usually close to full, but you can message me about future availability.`

Local implementation status:

- The line now exists in `src/translations.js` under `pricing.availability.note`.
- Pricing CTAs now say "Ask about availability" / "Consultar disponibilidad."
- The pricing card emphasis is softer: no loud gradient "most popular" treatment.
- The floating badge, hero CTA, contact tab and SEO landing CTAs now use availability language.
- `npm run build` passes with only the existing TalkTheTalk chunk-size warning.
- The change is local only until Auris chooses to deploy.

Strategic interpretation:

- This is a capacity-truth change, not a price-proof change.
- It protects the premium brand from sounding desperate or over-available while Auris is nearly full.
- It should not replace the Cycle 44 premium proof stack. The price still needs visible mechanism proof if Auris later drives more traffic.

Deploy gate:

- Deploy if Auris wants the public site to signal `Soft Future-Availability Mode`.
- Hold if Auris wants to fill open slots within 30 days.
- Revisit if good prospects interpret the site as "closed" rather than "message me about timing."

Manual evidence to collect after deploy:

| Field | Why |
| --- | --- |
| `availability_confusion` | Detects whether softer copy made the path unclear. |
| `future_timing` | Shows whether prospects can wait or need immediate lessons. |
| `proof_mentioned` | Separates trust-led future demand from price-first browsing. |
| `price_anchor_seen` | Keeps marketplace price pressure visible. |
| `lead_quality` | Prevents optimizing for more low-fit inquiries. |

## Cycle 50 Premium Proof Pairing Gate

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/premium-proof-pairing-gate-cycle50.md`

Cycle 50 tested what the availability patch does not solve.

Finding:

- The local site now tells the truth about limited availability.
- The private pricing card still says `1-on-1 lessons tailored to you`.
- The JSON-LD private offer still says `One-on-one online English lessons tailored to your specific needs`.
- Superprof direct supports the 40 EUR/h anchor, but marketplace/category contexts still expose lower price anchors.
- Local/premium comparables around 38-55 EUR/h justify higher pricing through specific support and outcomes, not generic personalisation.

Decision:

Limited availability should not be used as the premium justification. It is capacity truth. The premium justification is the personal follow-up mechanism:

- real conversation with Auris
- useful correction while speaking
- Spanish-speaker patterns named and worked on
- class vocabulary saved for review
- materials and progress kept organised in the portal
- invoice/NIF available when relevant

Deploy pairing rule:

| If | Then |
| --- | --- |
| Auris wants only a quiet capacity-truth update while full | Deploy the availability patch only if explicitly approved; do not judge it as a growth campaign. |
| Auris will use the site for GBP/LinkedIn/referral traffic | Pair the availability patch with the Cycle 44 premium proof stack. |
| Two qualified direct leads mention lower marketplace prices before booking | Align public marketplace pricing or document deliberate channel pricing before more traffic. |
| Good prospects ask whether Auris is closed | Keep honesty but make the contact path clearer. |

Exact pairing copy:

- Private card description: `1-on-1 classes with personal follow-up`
- Included support sentence: `The live hour is only part of the work. I keep your materials, vocabulary and review organised between classes so the language comes back next time.`
- JSON-LD private offer description: `One-to-one English classes for Spanish speakers with live speaking practice, useful correction, saved class vocabulary and portal review between lessons.`

Measurement fields after any deploy:

- `capacity_state`
- `cta_state_seen`
- `proof_mentioned`
- `price_anchor_seen`
- `quoted_price_expected`
- `availability_confusion`
- `future_timing`
- `lead_quality`
- `booked_trial`

## Cycle 51 Direct Contact Pricing Posture

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/direct-contact-simplification-gate-cycle51.md`

Auris removed the Calendly path and the highlighted limited-availability styling. This changes the pricing surface from "book/check availability" to "message me and I will be honest about fit/timing."

Decision:

- Keep the line `I’m usually close to full, but you can message me about future availability.` as quiet supporting copy.
- Do not highlight `Disponibilidad limitada` / `Limited availability` as a badge or selling device.
- Keep 40 EUR/h transparent.
- Keep pricing CTAs pointed to direct WhatsApp/email contact unless Auris enters a deliberate `measured_acquisition` state.
- Do not use lack of Calendly bookings as a price signal. The current outcome is a direct reply, not an automatic scheduled event.

Pricing interpretation:

Direct contact supports premium positioning because it feels personal and selective, but it does not justify the price alone. The price still needs the same mechanism proof:

- real speaking practice with Auris
- correction while speaking
- Spanish-speaker patterns
- materials and vocabulary saved for review
- portal continuity
- invoice/NIF where relevant

Stop/change rule:

- If two qualified prospects ask for instant scheduling, add a lightweight scheduling option only for that mode.
- If two qualified prospects think Auris is closed, keep the honesty but make the direct contact line clearer.
- If two qualified prospects mention lower marketplace prices before committing, revisit marketplace price alignment before driving more traffic.

## Cycle 09 Marketplace Alignment Finding

Marketplace evidence now makes the public price mismatch more concrete:

- Superprof Auris profile: Cycle 10 recheck shows 40 EUR/h main rate, 30 EUR/h online, 5.0 rating, 7 reviews, 20 students, verified profile/contact, first class free.
- Tusclases Auris profile/listing: 30 EUR/h, 4.9 rating, 15 ratings, verified, first class free.
- Website private price: 40 EUR/h.

This does not automatically mean the website price is wrong. Premium profiles do exist:

- A Superprof business-English profile at 40 EUR/h justifies the rate with tech-sector experience, interviews, meetings, presentations and professional presence.
- A Superprof Barcelona professional-communication profile at 35 EUR/h has 74 reviews, company/professional proof and a specific promise around clarity/confidence.
- A Tusclases Barcelona profile at 40 EUR/h uses 20+ years, US experience, diplomas and personalisation.

Diagnosis:

- 40 EUR/h is defensible if the buyer sees the personal system and outcome quickly.
- 30 EUR/h marketplace pricing can be intentional acquisition/channel pricing, but it should not be accidental.
- If a lead compares channels, unexplained price mismatch may create doubt before the trial.

Recommendation before public sprint:

1. Decide whether marketplace 30 EUR/h is legacy, channel-specific, or should be aligned.
2. If keeping 30 EUR/h on marketplaces, document internally that marketplace leads may be price-sensitive and should be qualified differently.
3. Keep GBP/LinkedIn links pointed to the website, not marketplaces, for premium positioning.
4. Add "what the hour includes" proof near the website price before pushing paid/premium traffic harder.

## Cycle 10 Owner-Profile Price Decision

The price problem is more nuanced than "the website says 40 and every marketplace says 30":

- Website private classes: 40 EUR/h.
- Superprof Auris: 40 EUR/h main rate, 30 EUR/h online rate.
- Tusclases Auris: 30 EUR/h in public snippets/profile evidence.

This strengthens the case for keeping the website price at 40 EUR/h. It also keeps the need for an intentional channel-pricing policy:

| Decision | When It Makes Sense | Risk |
| --- | --- | --- |
| Align all public prices to 40 EUR/h | Auris wants premium-only positioning and fewer price-sensitive inquiries. | Marketplace lead volume may drop. |
| Keep Tusclases/online at 30 EUR/h as a channel price | Auris wants to keep a lower-friction marketplace route. | Leads may compare channels and question the difference. |
| Lower website to 30 EUR/h | Almost never for current strategy. | Undercuts portal, follow-up and premium personal positioning. |

Current recommendation:

1. Keep website private classes at 40 EUR/h.
2. Do not send GBP/LinkedIn leads to marketplace pages.
3. If editing public profiles soon, align Tusclases and Superprof online pricing unless Auris deliberately wants a marketplace/channel price.
4. Add a tighter "included with the class" proof line next to the website price before expanding public posts.

## Cycle 11 Website Proof Patch Decision

Cycle 11 tested the smallest public-site change that would make 40 EUR/h feel concrete without changing Auris's warm non-academy message.

Decision: use portal proof near price and keep review proof immediately after pricing.

If Auris asks for implementation:

1. Keep 40 EUR/h visible.
2. Change the private-card description from generic tailored classes to personal follow-up.
3. Replace the generic private-card bullets with speaking, correction, adapted materials, class vocabulary saved for review, and portal/progress tracking.
4. Add a one-sentence support line under `Included with every class`: the live hour is only part of the work; materials, vocabulary and review stay organised between classes.
5. Do not insert a large testimonial block inside the price card. The Google review section already follows pricing and should stay as the outcome proof.

Recommended copy:

- EN description: `1-on-1 classes with personal follow-up`
- EN support line: `The live hour is only part of the work. I keep your materials, vocabulary and review organised between classes so the language comes back next time.`
- ES description: `Clases 1-a-1 con seguimiento personal`
- ES support line: `La hora en directo es solo una parte. Mantengo tus materiales, vocabulario y repaso organizados entre clases para que el ingles vuelva a aparecer la siguiente vez.`

Why this is enough for a first patch:

- The existing rendered pricing section already has the right structure.
- External premium examples at 35-55 EUR/h justify price through specific outcomes and support, not generic personalization.
- The student platform genuinely supports the claim with assignments, feedback, class notes, flashcards, games, Talk the Talk and progress surfaces.

Measurement:

- Watch trial/WhatsApp/contact clicks where available.
- Keep manual notes on price objections and lead quality.

## Cycle 18 Profile-Price Gate

Cycle 18 rechecked public profile price evidence before the GBP/LinkedIn sprint.

Updated evidence:

- Website direct private price remains 40 EUR/h.
- Direct Superprof page now supports the premium story better than earlier evidence: verified profile, 5.0/7, 20 students, 40 EUR/h, Ireland/11 years/portal/NIF copy.
- Superprof search/list contexts can still show lower or stale anchors, including 35 EUR/h or 30 EUR/h depending on the result.
- Tusclases still shows 30 EUR/h in public profile/listing evidence, with 4.9/15 and strong story/proof.
- Local marketplace lists around Castelldefels still place Auris beside many 10-30 EUR/h alternatives.

Decision:

1. Keep website private classes at 40 EUR/h.
2. Do not add Superprof/Tusclases links to the website footer or homepage while public price anchors are mixed.
3. Treat Superprof/Tusclases as discovery/proof surfaces, not premium campaign destinations.
4. If Auris edits marketplace profiles, align public prices to 40 EUR/h unless he deliberately wants a separate marketplace/channel price.
5. If lower marketplace pricing stays, document it as a channel policy and expect comparison questions.

Manual lead-source field to add:

| Field | Why |
| --- | --- |
| `Did lead mention Superprof/Tusclases?` | Detects whether public profile comparison is influencing premium leads. |
| `Price anchor seen` | Separates a 40 EUR direct lead from a 30 EUR marketplace comparison lead. |
| `Price objection words` | Reveals whether mismatch creates distrust or normal negotiation. |
| `Buyer type` | Helps decide whether lower-price marketplace leads are useful or distracting. |

Stop/change rule:

- If two or more qualified direct leads mention a 30 EUR marketplace price before booking, marketplace price alignment becomes a fix-before-more-content task.
- If marketplace-sourced leads book at 40 EUR/h without friction, keep marketplace cleanup as a lower-priority owner task.
- Ask new inquiries where they found Auris, especially if they mention Tusclases/Superprof.

## Cycle 23 Work-English Offer Pricing Finding

The job-demand scan strengthens the case for professional-English positioning, but it does not yet justify a separate rate, package page or corporate offer.

Current decision:

1. Keep the website private-class price at 40 EUR/h.
2. Treat `Work-English Confidence Loop` as a sharper use-case angle inside personal private classes.
3. Mention invoice/NIF where relevant for professionals and autonomos.
4. Do not price by company/FUNDAE/corporate training logic yet.
5. Do not create a lower-priced work-English teaser that competes with the premium private offer.

Why:

- Job listings prove that English is required in client calls, meetings, proposals, presentations, customer support, interviews and international-team work.
- They do not prove that those workers will pay 40 EUR/h privately without personal proof.
- Auris's strongest premium support remains direct diagnosis, Spanish-speaker pattern correction, real conversation, reviews, Ireland-raised bilingual background, portal follow-up and invoice option.

Possible future package only after signal:

| Package Idea | When It Becomes Worth Testing | Risk |
| --- | --- | --- |
| Work-English Confidence Loop, 4 sessions | At least 2 professional inquiries mention meetings/interviews/client calls and accept the 40 EUR/h anchor. | Could make Auris sound like a programme instead of a personal teacher. |
| Interview + career-story sprint | Repeated leads mention job change, promotion or interview pressure. | Could pull too far from ongoing teaching/retention. |
| Small-team conversation support | A warm existing student/referral brings a small team with a specific need and clear budget. | Could drift into corporate admin and procurement. |

Manual lead-source fields for professional inquiries:

- `role_context`
- `work_moment`
- `buyer_type`
- `price_anchor_seen`
- `invoice_needed`
- `booked_trial`

## Cycle 37 Price-Profile Coherence Decision

Artifact:

`/Users/aurisp/repos/teacher-website/docs/strategy/pricing-profile-coherence-cycle37.md`

Cycle 37 refreshed the public profile/pricing evidence before the GBP/LinkedIn sprint.

Updated evidence:

- Website private classes remain 40 EUR/h; group classes remain 20 EUR/h.
- Superprof direct profile is aligned on the main rate: 40 EUR/h, 5.0/7 opinions, verified profile/contact, 20 students and strong copy around Ireland, 11 years, Spanish speakers, portal and NIF.
- Superprof still lists online at 30 EUR/h, which can create a lower anchor if a lead compares channels.
- Superprof Castelldefels category places Auris beside a 14 EUR/h average and many 10-25 EUR/h alternatives.
- Tusclases remains the main visible mismatch at 30 EUR/h.
- Superprof Business English Barcelona proves that 35-40 EUR/h exists in professional contexts, but the category average is still around 18 EUR/h and generic work-English promises are common.
- The website pricing card still uses weak generic wording: `1-on-1 lessons tailored to you`.

Decision:

1. Keep the website private-class anchor at 40 EUR/h.
2. Do not hide price and do not lower the website price to match marketplaces.
3. Do not send GBP/LinkedIn leads to Superprof or Tusclases.
4. Treat marketplaces as discovery channels, price-pressure evidence and occasional proof, not premium campaign destinations.
5. If editing marketplaces, align Tusclases and Superprof online to 40 EUR/h unless Auris intentionally wants a lower channel price.
6. If lower marketplace pricing stays, document it as channel pricing and track whether direct leads mention it.

Website copy gate before public scaling:

- Private description should become `1-on-1 classes with personal follow-up`.
- The private-card bullets should name real conversation, correction, adapted materials, class vocabulary saved for review, and portal/flashcard/progress tracking.
- Add a short support line under `Included with every class` explaining that the live hour is only part of the work.

GBP service price rule:

- If GBP services show prices, they should use the owned-site 40 EUR/h anchor and a description of the personal follow-up system.
- Do not list a lower GBP service price unless that offer is genuinely available to GBP leads.

Sprint measurement rule:

Add or keep these fields for every inquiry:

| Field | Why |
| --- | --- |
| `profile_seen` | Separates website/GBP/LinkedIn trust from marketplace discovery. |
| `price_anchor_seen` | Captures whether the lead saw 40, 35, 30, 18, none or unknown first. |
| `quoted_price_expected` | Reveals whether price mismatch created a hidden expectation. |
| `proof_mentioned` | Shows whether reviews, portal, Spanish-speaker patterns, Ireland background or price made the offer credible. |
| `lead_quality` | Prevents cheap attention from looking like good demand. |

Stop/change rule:

- If two qualified direct leads mention 30 EUR marketplace pricing before booking, marketplace price alignment becomes a fix-before-more-content task.
- If marketplace-origin leads book at 40 EUR/h or become good students without friction, marketplace cleanup can remain secondary.

## Cycle 41 Work-English Packaging Gate

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/work-english-signal-refresh-cycle41.md`

Decision:

- Keep Work-English inside the existing 40 EUR/h personal private-class offer.
- Do not create a separate business-English price, block, package page or company offer yet.
- Mention invoice/NIF as a practical support detail for professionals/autonomos, not as the headline.
- Keep marketplaces as price-pressure evidence, not destinations for GBP/LinkedIn professional posts.

Why:

- Fresh 2026 role evidence strengthens the need for English in meetings, client/customer calls, interviews and presentations.
- Fresh competitor evidence shows the same moment list is already crowded.
- Superprof Business English Barcelona shows demand, but also an 18 EUR/h average and many 15-35 EUR/h alternatives.
- Job posts prove work need, not private willingness to pay Auris directly.

Package gate:

| Package Idea | Only Test If | Keep Paused If |
| --- | --- | --- |
| 4-session `Meeting Voice` sprint | Two professional inquiries mention meetings and accept 40 EUR/h without price confusion. | Leads ask for generic business English, lower marketplace prices or certificates. |
| Interview/career-story sprint | Two inquiries mention job interviews, promotions or career move pressure. | Interest is only content attention with no trial/booked signal. |
| Client-call confidence sprint | Two inquiries mention sales, customer success, support, incidents or client updates. | Leads are low-budget customer-service roles and price-first. |
| Small-team private group | A warm existing student/referral brings a specific team, budget and schedule. | Cold company outreach or FUNDAE/procurement is needed. |

Inquiry fields to keep:

- `role_context`
- `work_moment`
- `buyer_type`
- `price_anchor_seen`
- `quoted_price_expected`
- `invoice_needed`
- `proof_mentioned`
- `booked_trial`
- `lead_quality`

## Cycle 44 Premium Price Proof Stack

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/premium-price-proof-stack-cycle44.md`

Cycle 44 refreshed the price-proof question after the lead-source ledger made `price_anchor_seen` and `quoted_price_expected` mandatory inquiry fields.

Updated evidence:

- Owned-site 40 EUR/h remains defensible, but the first price proof is still too generic.
- The rendered private-card description still says `1-on-1 lessons tailored to you`.
- The static JSON-LD private `Offer` also says `One-on-one online English lessons tailored to your specific needs`.
- Live Google review endpoints still return public `5.0 / 16`, but owner Review Truth and reply state remain unknown.
- Superprof direct profile supports the 40 EUR/h story with 5.0/7, 20 students, Ireland/11 years, Spanish-speaker, platform and NIF copy.
- The same Superprof profile still lists online at 30 EUR/h, and Superprof category contexts show 14-18 EUR/h averages.
- Tusclases remains the clearest lower Auris anchor at 30 EUR/h.
- Local/premium comparables show 38-55 EUR/h can be justified when the offer names concrete outcomes and support.

Decision:

1. Keep owned-site private classes at 40 EUR/h.
2. Do not lower or hide the price.
3. Do not route GBP/LinkedIn/premium traffic to Superprof or Tusclases while public anchors are mixed.
4. Before a bigger GBP/LinkedIn push, replace generic price proof with the personal follow-up mechanism.
5. Treat marketplace browsing as complete for now unless prices change or a lead mentions a lower anchor.

Implementation-ready copy gate:

| Surface | Current Weakness | Recommended Proof |
| --- | --- | --- |
| Private card description | `tailored to you` is true but generic. | `1-on-1 classes with personal follow-up` |
| Private card bullets | Goals/scheduling/portal are broad. | Real conversation, correction, adapted materials, saved vocabulary, portal review. |
| Included strip | Items exist without a support sentence. | The live hour is only part of the work; materials/vocabulary/review continue between classes. |
| JSON-LD private Offer | Generic description duplicates the weak visible copy. | Name Spanish speakers, speaking practice, correction, saved vocabulary and portal review. |
| GBP service description | Unknown owner-side state. | If GBP services show prices, use 40 EUR/h and the same follow-up description. |

Stop/change rule:

- One qualified lead mentioning a 30 EUR marketplace anchor is a note, not a crisis.
- Two qualified direct leads mentioning 30 EUR before booking means marketplace price alignment becomes a fix-before-more-traffic task.
- If leads accept 40 EUR/h and mention reviews, portal, correction or follow-up, keep marketplace cleanup secondary.

Manual lead-source fields remain mandatory:

- `profile_seen`
- `price_anchor_seen`
- `quoted_price_expected`
- `proof_mentioned`
- `lead_quality`
- `booked_trial`

## Cycle 48 Capacity And Future Availability

Related artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/future-demand-quiet-growth-cycle48.md`

Auris is nearly fully booked. That changes the offer problem:

- The risk is not "too few calls this week."
- The risk is either creating demand he cannot serve, or letting future high-fit students disappear because there is no calm future-availability path.

Current recommendation:

- Keep the 40 EUR/h owned-site price.
- Do not discount to create demand while nearly full.
- Do not hide price.
- Do not launch a louder booking campaign.
- If capacity gets tighter, use future-availability wording rather than scarcity hype.

Future-availability offer copy, if Auris chooses to reduce immediate-booking pressure:

```text
I am usually close to full, but you can still message me about future availability. If I cannot help immediately, I will tell you clearly and we can see whether a future slot fits.
```

Spanish:

```text
Normalmente tengo la agenda bastante llena, pero puedes escribirme para futuras plazas. Si no puedo ayudarte ahora, te lo dire con claridad y podemos ver si encaja una plaza mas adelante.
```

Pricing implication:

- If future demand grows while capacity stays tight, test price/fit before adding delivery complexity.
- If inquiries are high-fit and can wait, a waitlist/future-availability note is better than extra content.
- If inquiries are low-fit or price-first, qualification copy should come before more lead generation.
