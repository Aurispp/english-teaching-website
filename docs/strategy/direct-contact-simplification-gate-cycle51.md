# Direct Contact Simplification Gate - Cycle 51

Created: 2026-05-24
Theme: contact-channel simplification and measurement after removing Calendly.

## Primary Question

Does removing Calendly and the highlighted limited-availability UI make the future-demand path more personal without losing the minimum evidence needed to learn from future leads?

Short answer: yes, for Auris's current mode. Direct WhatsApp/email fits a nearly-full personal teacher better than a loud booking funnel. The tradeoff is measurement: the site can count contact clicks, but the actual lead quality, timing, trust reason and follow-up outcome now live in private replies.

## Source Discovery

Where the best evidence for this exact question might live:

| Source Type | Why It Might Help | Cycle 51 Use |
| --- | --- | --- |
| Local contact/pricing code | Shows what the site now asks visitors to do. | Highest-signal local evidence. |
| Local build/render checks | Separates a real local implementation from a strategy idea. | Used from the current patch verification. |
| Live production headers/reviews | Confirms production state and proof endpoint health. | Used as data/API layer. |
| Official WhatsApp click-to-chat docs | Validates low-friction `wa.me` links. | Used for direct contact viability. |
| Official GBP Performance docs | Shows owner-side actions available after profile discovery. | Used for owner metric replacement. |
| Official GA4 event docs | Distinguishes click intent from lead generation. | Used for measurement rule. |
| Official Calendly docs | Defines what attribution was intentionally lost. | Used as falsification, not as recommendation. |
| Local competitor contact pages | Shows whether direct contact is normal in the local category. | Used for outside-in contact norms. |
| Spain digital platform data | Tests whether WhatsApp-first is plausible for the audience. | Used as contextual support. |
| Form/contact UX sources | Tests whether removing forms/calendars reduces or increases friction. | Used with caveats. |
| Small-business community threads | Reveals the operational risk of WhatsApp/email leads. | Used as follow-up warning. |
| Waitlist/fully-booked operator threads | Tests the future-availability problem when a service is full. | Used as leakage warning. |

Chosen high-signal sources: local implementation, official WhatsApp/GBP/GA4/Calendly docs, local competitor pages, Spain digital context, and small-business lead-tracking threads.

## Local Evidence

| Artifact | Finding | Strategic Meaning |
| --- | --- | --- |
| `src/components/ContactSection.jsx` | Contact is now two direct cards: WhatsApp and email. `contact_click` records method and location. | The public path is personal and low-friction. |
| `src/components/PricingSection.jsx` | The availability line is quiet under the heading, and CTAs go to `#contact`. | The "close to full" truth is no longer styled as scarcity marketing. |
| `src/translations.js` | EN line exists: `I’m usually close to full, but you can message me about future availability.` ES contact copy is also direct. | Owner-requested capacity tone is implemented locally. |
| `src/App.jsx` | Calendly badge import/render and scheduled-event listener are gone. | `trial_booked` is no longer a current local event path. |
| `src/components/TalkTheTalk.jsx` | Completion CTA now uses a prefilled WhatsApp message and `talk_contact_click`. | Talk is now a feedback/contact bridge, not a booking bridge. |
| `src/components/SeoLandingPage.jsx` | Local/business CTAs say message/write, with business WhatsApp prefill. | SEO landers match the calmer direct-contact mode. |
| `src/utils/analytics.js` | Events are simple `gtag` calls. | Fine for aggregate contact intent; not enough for private lead truth. |
| `src/components/Navbar.jsx` | Still offers call, WhatsApp and email with location-specific contact events. | Direct channels are visible before the contact section. |
| `index.html` | Schema still exposes phone/email and existing offers; no Calendly dependency. | Machine-readable contact basics remain. |
| `netlify/functions/google-reviews.js` | Reviews endpoint reads Places data but not owner replies/newest truth. | Public proof is useful, but owner view still matters. |
| `measurement-plan.md` | Still contained stale Calendly-first assumptions before this cycle. | Durable measurement memory needed correction. |
| `content-strategy.md` | Still mentioned trial bookings and Calendly-led measurement in older sections. | Content rules needed a direct-contact supersession. |
| `research-roadmap.md` | Packet AX still listed `CalendlyBadge.jsx` and Calendly owner metrics. | Next-cycle packets needed a new direct-contact packet. |
| `teacher-assistant` status | Repo remains dirty/unrelated; no prospect CRM workflow was edited. | Do not build tracking into the platform before manual rows exist. |

## Data/API Evidence

- `npm run build` passed after the direct-contact code change with only the existing TalkTheTalk chunk-size warning.
- Local Playwright checks on desktop/mobile showed the revised contact/pricing path rendered correctly before the dev server was stopped.
- Source and build scans found no active `Calendly`, `calendly.com`, `VITE_CALENDLY`, `Disponibilidad limitada`, or booking-calendar strings in the current app surfaces; remaining "booking" text is either historical strategy memory or unrelated speaking prompts.
- Production homepage returns HTTP 200 from Netlify, but production is not yet deployed with the local direct-contact patch.
- Production robots and sitemap return HTTP 200 and remain healthy.
- Live review endpoint still returns `places-new`, rating `5`, and `reviewCount` `16` in EN and ES.
- Public review endpoint does not expose the newest owner-view reviews or reply status; owner-side GBP remains the truth source for review freshness.

## External Evidence

| Source | Signal | Supports | Weakens / Caveat |
| --- | --- | --- | --- |
| WhatsApp Help Center, "How to use click to chat" (`https://faq.whatsapp.com/5913398998672934`) | `wa.me` click-to-chat is an official low-friction contact pattern. | WhatsApp-first contact is technically appropriate. | The page validates contact mechanics, not lead quality. |
| Google Business Profile Performance docs (`https://support.google.com/business/answer/9918094`) | Owners/managers can view interactions, searches, views, calls, website clicks, messages and bookings where configured. | GBP remains measurable owner-side without Calendly. | Bookings require a booking provider; direct WhatsApp/email need manual notes. |
| Google Analytics recommended events (`https://support.google.com/analytics/answer/9267735`) | `generate_lead` is recommended when a user submits a form/request or offline lead info is recorded. | Strong lead measurement can later use recommended event names. | A WhatsApp click alone should not be treated as a generated lead. |
| GA4 enhanced measurement outbound-click docs (`https://support.google.com/analytics/answer/9216061`) | GA4 can count outbound clicks. | Direct WhatsApp/email clicks can be visible as intent. | Clicks do not prove the message was sent or qualified. |
| Calendly tracking docs (`https://calendly.com/help/tracking-and-reporting`) | Calendly can record UTM data and export meeting data; embeds can send message events. | Clarifies what attribution was removed. | That loss is acceptable only if manual lead rows replace it. |
| Calendly UTM docs (`https://calendly.com/help/how-to-track-conversions-with-utm-parameters`) | Scheduling links can carry `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`. | If Calendly returns later, source capture has a clear path. | Not relevant to the current owner-requested direct-contact mode. |
| DataReportal Digital 2026 Spain (`https://datareportal.com/reports/digital-2026-spain`) | Spain has very high internet and social-platform adoption; DataReportal cautions platform figures are identities, not always unique people. | WhatsApp/social contact is culturally plausible for Spain. | Does not prove English-class buyers prefer WhatsApp over email. |
| Janet's contact page (`https://janets.es/contacto/`) | Local academy uses phone/contact form, a level-test CTA, and visible WhatsApp. | Direct contact is category-normal locally. | Academy tone is not Auris's desired tone. |
| Idealog contact page (`https://www.idealog.es/contacto/`) | Shows phone, email and a web form. | Forms/phone/email are common in local schools. | Institutional form copy would feel less personal for Auris. |
| Academia Herpa English page (`https://www.academiaherpa.es/servicio/ingles`) | Contact page shows form, WhatsApp image, phone and email options. | WhatsApp/email alongside forms are normal locally. | Multi-option clutter is not a reason to rebuild Auris's form. |
| Castle Languages (`https://castlelanguages.cat/`) | Contact CTA sits inside an academy proof stack: groups, native teachers, Cambridge, companies, FUNDAE. | Competitors sell institutionality; Auris can stay direct/personal. | Their scale proof should not be copied. |
| HubSpot form-fields article (`https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx`) | More complex fields, especially text areas/drop-downs, can depress conversion. | Avoid rebuilding a qualification-heavy form while full. | HubSpot data is marketing-form oriented, not private tutor specific. |
| HubSpot form analytics docs (`https://knowledge.hubspot.com/forms/analyze-form-submissions-datA`) | Forms provide useful reporting such as views, submissions, conversion and source. | Confirms what a form would add later. | Reporting value alone does not justify form friction now. |
| Reddit small-business lead tracking thread (`https://www.reddit.com/r/smallbusiness/comments/1rrq5bz/how_do_you_currently_track_leads_and_followups/`) | Operators describe leads getting lost without next-action/date habits. | Manual direct-contact rows need follow-up dates. | Community evidence is anecdotal. |
| Reddit WhatsApp leads thread (`https://www.reddit.com/r/IndiaBusiness/comments/1ry8o7f/do_you_guys_actually_track_your_whatsapp_leads_or/`) | WhatsApp leads can get buried; simple sheets with last message, stage and next follow-up are common. | Direct WhatsApp is fine only with a lightweight tracking habit. | India context is not Spain, but the operational problem generalizes. |
| Reddit fully booked/waitlist thread (`https://www.reddit.com/r/Entrepreneurs/comments/1s6v094/if_youve_been_fully_booked_with_a_waitlist_what/`) | Fully booked operators can still lose latent demand; simple follow-up helps. | Future availability should capture timing and follow-up, not only clicks. | Not education-specific. |

## Hypothesis Tests

### H015: Manual lead-source notes are required

Result: strengthened and refined.

Evidence: removing Calendly removes scheduled-event and UTM meeting records. Official GA4/GBP docs still give aggregate click/profile metrics, but private WhatsApp/email replies contain the buyer's need, timing, proof reason and fit. Small-business threads reinforce that direct leads can get lost without next-action/date notes.

Confidence: high.

Next test: for every serious WhatsApp/email inquiry, fill one direct-contact row with source, method, first thing mentioned, proof mentioned, future timing, fit, lead quality, response, next follow-up date and outcome.

### H026: Capacity state should decide the acquisition success metric

Result: strengthened.

Evidence: the code now reflects a quiet future-availability mode, not an immediate booking mode. The user also confirmed he is close to full and building slowly for future leads. Local competitors can push tests/forms/enrolment because they are academies; Auris should not mimic that when the desired signal is future fit.

Confidence: high.

Next test: classify the public site as `direct_contact_future_availability` after deploy. If a slot opens and Auris wants students inside 30 days, switch to `measured_acquisition` and revisit clearer scheduling.

### H004: 40 EUR/h needs visible premium proof

Result: unchanged but reframed.

Evidence: direct contact makes the path warmer, but it does not explain the premium by itself. The strongest proof is still reviews, personal follow-up, Spanish-speaker diagnosis, and portal continuity. The contact path should not become a salesy scarcity badge.

Confidence: high.

Next test: if traffic resumes, pair direct contact with the premium proof stack before judging price resistance.

## Falsification

Favored idea to weaken: "Direct WhatsApp/email is always better because it feels more personal."

Result: refined. Direct contact fits Auris now, but it loses automatic meeting attribution, can bury leads, and can create invisible follow-up work. It is better only while volume is low and Auris maintains a tiny manual row.

Evidence that would make us stop or reverse:

- Two or more qualified prospects ask for instant scheduling because messaging feels slow or uncertain.
- Auris misses follow-ups because WhatsApp/email threads get buried.
- Direct contact creates low-fit admin noise once public traffic increases.
- A slot opens and Auris wants immediate new students within 30 days.

Cheaper/simpler alternative that could beat this:

- A single prefilled WhatsApp link plus one private spreadsheet row beats any rebuilt form, CRM or booking tool while volume is low.

## Implementation-Ready Direct Contact Gate

Current recommendation:

1. Keep Calendly removed from the public website for now.
2. Keep the pricing availability line quiet, not highlighted.
3. Use "message me" / "email me" language, not "book now" language, while Auris is close to full.
4. Treat `contact_click` and `talk_contact_click` as intent only.
5. Treat the real lead as the private reply plus manual row.
6. Do not add a waitlist form, Calendly Routing, HubSpot form, CRM, or teaching-platform prospect workflow until there are 5-10 real direct-contact rows.

Suggested direct-contact row:

| Field | Values / Notes |
| --- | --- |
| `date` | Date of first contact. |
| `contact_method` | `whatsapp`, `email`, `phone`, `linkedin_dm`, `gbp_message`, `referral`, `other`. |
| `likely_source` | GBP, Google search, website, referral, LinkedIn, marketplace, unknown. |
| `source_confidence` | high / medium / low. |
| `first_thing_mentioned` | Reviews, location, price, availability, Talk, work English, teen/exam, referral, other. |
| `proof_mentioned` | reviews, portal, Spanish-speaker fit, Ireland/native-like background, adaptation, confidence, invoice/NIF, none. |
| `need_type` | adult conversation, professional/work, teen/exam, child, small group, company, other. |
| `future_timing` | now, 2-4 weeks, 1-3 months, later/unclear. |
| `fit` | high / medium / low / not enough info. |
| `lead_quality` | qualified_now, qualified_future, waitlist, wrong_fit, price_shopping, unknown. |
| `availability_confusion` | none, thought_closed, thought_instant_booking, asked_clarification, unknown. |
| `price_anchor_seen` | website_40, marketplace_30, lower_category, unknown. |
| `response_sent` | yes/no plus date. |
| `next_follow_up_date` | Only if a real future slot/follow-up exists. |
| `outcome` | waiting, trial_arranged_manually, future_check_in, no_fit, no_reply, became_student. |

## Strategic Synthesis

Strongest next move:

Ship the direct-contact posture only when Auris explicitly wants the public site updated, then judge it with contact replies and owner-side GBP snapshots. The site now fits a long-game, nearly-full teacher better than a booking-first funnel.

What Auris should not do yet:

- Do not restore Calendly just for analytics.
- Do not add a loud "limited availability" badge.
- Do not build a waitlist app or CRM.
- Do not run ads into a direct-contact path while capacity is nearly full.
- Do not interpret WhatsApp/email clicks as leads without replies.

Smallest practical test:

After deploy, log the first 5 direct inquiries with the row above. If none arrive, take one monthly GBP snapshot and review-reply status only; do not manufacture a campaign.

Evidence that would change the recommendation:

- Repeated qualified prospects prefer a scheduling link.
- Direct messages become hard to track.
- Auris opens capacity and wants fast fill.
- GBP messages/website clicks increase without real replies.

Risk of acting too early:

Adding forms/Calendly/CRM now would make a personal, nearly-full teacher look over-engineered and too eager.

Risk of waiting:

If production keeps old "book now" style copy while Auris is full, the site may set the wrong expectation.

## Process Critique

Highest-signal source: local code/build scans, because they revealed the exact new funnel and stale docs.

Highest-signal external source: Google GBP Performance plus GA4/Calendly official docs, because they define what each layer can and cannot measure.

Noisy source: generic conversion-form advice. It is useful for friction caveats, but most of it assumes higher-volume lead-gen, not a premium personal teacher with limited capacity.

Next source type to try: owner-visible GBP services/profile/contact surfaces, especially whether Google offers messages/calls/bookings and how service descriptions look after Calendly removal.

Protocol improvement: when an owner removes a scheduling layer, the automation must immediately classify the measurement mode as `direct_contact_only` and supersede old Calendly metrics instead of continuing to optimize around a deleted funnel.

## Next Packet

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
2. Confirm no Calendly script/link/listener remains in production bundles.
3. Capture GBP owner Performance only as a monthly/direct-contact baseline.
4. Fill the first direct-contact row when an inquiry appears.

If no deploy or inquiry evidence arrives:

1. Do not repeat Calendly-removal analysis.
2. Rotate to owner GBP services/profile coherence, review reply freshness, or Next 15 pilot rows.
