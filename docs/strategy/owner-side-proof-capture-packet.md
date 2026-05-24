# Owner-Side Proof Capture Packet

Purpose: give Auris a small, privacy-safe packet for capturing the owner-only evidence needed to interpret the review proof sprint. This does not require giving the automation direct access to Google Business Profile, LinkedIn, WhatsApp, Calendly or private student messages.

Date: 2026-05-22

## Working Answer

The review proof sprint should not wait for full account/API access. A compact owner-side packet is enough for the first decision if it captures:

- Day 0 GBP baseline.
- Day 7 GBP comparison.
- Review reply/post/ask action log.
- Anonymous lead notes for every inquiry.
- Optional LinkedIn and Calendly source notes if those surfaces are used.

Without this packet, more competitor research will not answer the real question: did review proof create qualified trust for Auris?

## Primary Question

What is the smallest owner-side evidence packet Auris needs to capture so the GBP/review sprint can be interpreted without direct automation access?

## Source Discovery

Possible source types considered:

| Source Type | Why It Might Help | Use This Cycle? |
| --- | --- | --- |
| GBP owner Performance screen | Highest-signal profile views, searches and actions. | Yes |
| GBP spreadsheet export | Stronger than screenshots if available. | Optional |
| GBP review reply status | Shows whether review replies are approved, edited, delayed or public. | Yes |
| GBP post status/performance | Shows whether the post is live and whether the profile moved. | Yes |
| GA4/UTM campaign traffic | Useful for website sessions/clicks after GBP or LinkedIn. | Yes, but incomplete |
| Calendly UTM/source records | Useful if bookings include source details. | Optional |
| WhatsApp/email inquiry text | Highest-signal buying language, but private. | Yes, anonymized only |
| LinkedIn post analytics | Useful if a post is used; owner-only. | Optional |
| LinkedIn profile analytics | Useful for profile views/search appearances; owner-only and limited. | Optional |
| Search Console | Useful for organic SEO, weak for a 7-day GBP/review sprint. | No |
| More competitor pages | Useful for positioning, weak for sprint interpretation. | No |
| Direct account/API access | High fidelity, but not necessary for first sprint and creates access friction. | No |

Selected evidence types: GBP owner metrics, review/reply status, campaign UTM checks, Calendly/LinkedIn product docs, and private manual lead notes.

## Local Evidence

| Local Artifact | Finding | Implication |
| --- | --- | --- |
| `review-proof-sprint-measurement-plan.md` | Defines Day 0/Day 7 review sprint metrics but still needs a simple capture packet. | This file turns it into an owner checklist. |
| `measurement-plan.md` | GA4/events cannot see review replies, review asks, WhatsApp replies or private referrals. | Manual capture is not optional. |
| `gbp-week-one-execution-pack.md` | Has the GBP post URL and manual ledger row. | The sprint is executable once baseline is captured. |
| `owner-profile-alignment-plan.md` | Already recommends one GBP post and one LinkedIn post routed to owned pages. | Do not expand cadence yet. |
| `review-proof-library.md` | Contains proof themes and reply/ask language. | Copy is ready; measurement is the blocker. |
| `GoogleReviewsSection.jsx` | Public site can show 5.0/15 reviews via Netlify function. | Review proof is visible to website visitors. |
| `netlify/functions/google-reviews.js` | Places API endpoint returns rating, count, visible reviews and Google URL. | Public proof can be checked automatically, but not owner metrics. |
| `src/App.jsx` | Tracks Calendly embedded scheduling via postMessage when available. | Booked-trial tracking is partial. |
| `CalendlyBadge.jsx` | Floating Calendly badge has no explicit campaign UTMs. | Owner Calendly source notes are still useful. |
| `Navbar.jsx` | WhatsApp/call/email clicks are tracked as lead-intent events. | Clicks do not prove lead quality. |
| `TalkTheTalk.jsx` | Trial CTA opens Calendly with Talk-specific intent. | Good for intent, but not complete booking attribution. |
| `StudentDashboard.tsx` and `flashcard_srs.py` | The portal has assignments, reviewed feedback, class continuity and SRS review behavior. | Portal/follow-up proof is real, but should be framed as method support. |

Data/API checks:

- Live homepage returned HTTP 200 from Netlify.
- GBP review-confidence UTM homepage URL returned 200 and preserved the campaign URL.
- Live review endpoint returned rating 5.0, 15 total reviews and 5 visible English reviews.

## External Evidence

| Source | What It Supports | What It Weakens |
| --- | --- | --- |
| Google Business Profile performance docs, https://support.google.com/business/answer/9918094 | Owners can view interactions, searches, views, direction requests, calls, website clicks, messages and bookings where configured; data is owner-side. | Judging GBP from GA4/Search Console alone. |
| Google Business Profile Performance API, https://developers.google.com/my-business/reference/performance/rest | Daily/monthly GBP metrics and search keyword impressions exist via API, but access/quota may require setup. | Assuming automation can always pull GBP metrics. |
| Google GBP posts docs, https://support.google.com/business/answer/7342169 | Updates can include description, photo/video and action button; posts can be pending/not approved; phone numbers in descriptions may be rejected. | Treating a post as automatically public or safe without checking status. |
| Google review tips, https://support.google.com/business/answer/3474122 | Review requests and replies are supported, but replies should be short, relevant and non-promotional; incentives are prohibited. | Long salesy replies or incentive review asks. |
| Google manage reviews docs, https://support.google.com/business/answer/3474050 | Verified businesses can reply publicly; Google reviews replies and approval may take from minutes to much longer; customers can be notified. | Assuming reply publication is instant or private. |
| Google Maps UGC policy, https://support.google.com/contributionpolicy/answer/7400114 | Genuine, unbiased review requests are allowed; incentives, pressure, selective positive solicitation and requested content are unsafe. | Asking for keywords, 5-star wording or only positive reviews. |
| Google Analytics UTM docs, https://support.google.com/analytics/answer/10917952 | External campaign links should carry source, medium and campaign; missing fields can create `(not set)` values. | One generic URL for all profile/post placements. |
| Calendly UTM tracking docs, https://calendly.com/es/help/how-to-track-conversions-with-utm-parameters | Calendly can track where scheduled meetings come from with UTM parameters in scheduling links. | Assuming Calendly source must be guessed if the link is tagged. |
| Calendly GA docs, https://calendly.com/help/calendly-google-analytics | Without UTM tags, GA can show Calendly source as direct; embed/source tracking differs by setup. | Relying on default source attribution. |
| LinkedIn post analytics docs, https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content | Post impressions, profile activity, social engagement and link engagement are owner-visible and post-specific. | Asking automation to infer LinkedIn performance from public views. |
| LinkedIn profile views docs, https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature | Profile view insights are owner-side, partly Premium-limited and subject to privacy settings. | Treating LinkedIn analytics as complete or public. |
| BrightLocal LCRS 2026, https://www.brightlocal.com/research/local-consumer-review-survey/?hsLang=en | Reviews, recency, owner response and further website/social reassurance matter; reviews can move people into more research rather than immediate booking. | Expecting one review post to close leads without follow-up proof. |

## Capture Rules

- Store aggregate metrics, not student names.
- Do not paste private WhatsApp/email messages into strategy docs.
- If a message matters, summarize it in 5-12 anonymous words: `asked about meetings`, `mentioned reviews`, `price compared to Superprof`.
- Do not record phone numbers, emails, student names, company names or screenshots with private data unless redacted.
- Keep review asks pressure-free. Do not request specific wording, keywords or star ratings.
- If a review is filtered, delayed or removed, record only the status and timing.

## Day 0 Capture

Do this before replying/posting/asking if possible.

### Google Business Profile

Capture one screenshot or note for:

- Date and time.
- Performance date range used: last 7 days and/or last 28 days.
- Profile views.
- Searches.
- Website clicks.
- Calls.
- Messages.
- Bookings if shown.
- Direction requests if shown.
- Top search terms if shown.
- Current rating and review count.
- Number of visible owner replies on recent/important reviews.
- Whether the profile has recent photos/services/posts.

Recommended note format:

| Date | Range | Views | Searches | Website Clicks | Calls | Messages | Bookings | Top Search Terms | Rating/Reviews | Existing Replies |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | 7d / 28d |  |  |  |  |  |  |  | 5.0 / 15 |  |

### LinkedIn If Used

Capture only if LinkedIn is part of the sprint:

- Profile views.
- Search appearances.
- Followers/connections.
- Latest post impressions if any.
- Link clicks if visible.
- DMs/inquiries.

### Website/Calendly

Use these campaign destinations:

- GBP review-confidence post: `https://englishwithauris.com/?utm_source=google_business_profile&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_confidence_review`
- LinkedIn Meeting Voice post: `https://englishwithauris.com/talkthetalk?utm_source=linkedin&utm_medium=organic&utm_campaign=proof_sprint_week_01&utm_content=meeting_answer_smaller`

Optional Calendly note:

- Did the booking show a UTM/source?
- Did the student mention where they came from?
- Was the booking direct after WhatsApp/email/profile visit?

## Action Log

Use one row per action. Leave blank fields blank; do not over-document.

| Date | Action | Channel | Asset/Theme | Status | URL/UTM | Private Note |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | review_reply | GBP | confidence / correction / follow-up | approved / pending / edited / blocked | n/a | no names |
| 2026-__-__ | post | GBP | review-confidence | live / pending / not approved | `meeting_confidence_review` |  |
| 2026-__-__ | review_ask | WhatsApp/email/after-class | real outcome | sent / not sent / replied / review_left / awkward | review link | anonymous |
| 2026-__-__ | referral_ask | WhatsApp/email/after-class | who I help | sent / not sent / intro_made / awkward | n/a | anonymous |

## Lead Note

Use this for every inquiry during the sprint, even if the source is uncertain.

| Field | Values |
| --- | --- |
| `date` | yyyy-mm-dd |
| `source_type` | GBP / LinkedIn / website / referral / marketplace / unknown |
| `source_specific` | review_post / review_reply / profile / direct_search / private_referral / calendly / whatsapp / unknown |
| `first_thing_mentioned` | anonymized short phrase |
| `proof_mentioned` | reviews / confidence / spanish_speaker_patterns / portal_follow_up / ireland_background / invoice_nif / price / unknown |
| `work_moment` | meeting / interview / client_call / presentation / conversation / exam / unknown |
| `price_anchor_seen` | 40 / 35 / 30 / 18 / none / unknown |
| `buyer_type` | private_adult / professional / autonomo / small_team / company / parent / unknown |
| `booked_trial` | yes / no / pending |
| `lead_quality` | high / medium / low |
| `next_action` | trial / reply / follow-up / not-fit |

## Day 7 Capture

Repeat the Day 0 GBP capture with the same date range if possible.

Also record:

- Which review replies are visible.
- Whether the GBP post is live, pending or rejected.
- New review count/rating.
- Any new review theme, anonymized.
- Any WhatsApp/email/Calendly inquiry.
- Any LinkedIn profile/post change if LinkedIn was used.

## Interpretation Matrix

| Result | Interpretation | Next Move |
| --- | --- | --- |
| GBP actions up and one qualified lead mentions reviews/confidence/follow-up | Review proof sprint is working enough to continue. | Run one more GBP/review week; do not broaden channel mix yet. |
| GBP views/clicks up but no qualified inquiries | Trust or CTA may be incomplete. | Check profile services/photos/contact route; adjust post CTA or profile proof before posting more. |
| No Day 0 baseline | Sprint cannot be interpreted cleanly. | Capture Day 0 now and restart the 7-day window. |
| Review replies delayed/edited/rejected | Execution friction, not strategy failure. | Simplify replies; avoid promotional language. |
| Review asks feel awkward or reviews are filtered/removed | Trust risk. | Pause asks; only ask after clearer outcomes. |
| Leads mention 18/30 EUR/h marketplace prices first | Premium proof is not carrying price yet. | Strengthen proof beside price; avoid marketplace-first routing. |
| LinkedIn gets impressions/profile views but no DM/click/inquiry | LinkedIn is credibility/visibility for now. | Keep LinkedIn light; prioritize GBP/reviews/referrals. |
| One warm referral creates a qualified lead | Referral loop may beat public content near-term. | Make referral sentence easier to repeat; keep it personal. |

## Direct Alternatives Compared

| Alternative | Upside | Weakness | Decision |
| --- | --- | --- | --- |
| Full GBP/LinkedIn/API access | More automated and precise. | Access friction, permissions, privacy, brittle APIs. | Not required for first sprint. |
| GA4/UTMs only | Easy and already partly implemented. | Misses review replies, WhatsApp, private referrals and proof language. | Use as support only. |
| More competitor/review scanning | Can refine copy. | Does not reveal whether Auris's sprint moved leads. | Pause unless owner-side data changes hypothesis. |
| Manual owner packet | Fast, private, enough to decide next action. | Requires discipline for one week. | Recommended. |

## Minimum Viable Packet

If Auris only captures five things, capture these:

1. Day 0 GBP Performance screenshot/note.
2. The exact review replies/post/asks done.
3. Every inquiry's `source_type`, `proof_mentioned`, `price_anchor_seen` and `booked_trial`.
4. Day 7 GBP Performance screenshot/note.
5. Any new review/referral result, anonymized.

## Cycle 29 Five-Minute Capture Compression

Cycle 29 found that this packet is strategically useful but too large as the first owner ask. Use `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md` first, then return to this larger packet only after Auris has sent the first baseline.

Thirty-second version:

1. current GBP owner-view rating and review count
2. one GBP Performance screenshot or note for the last 7 or 28 days
3. any inquiry in the last 7 days, anonymized by likely source and what the lead mentioned

Five-minute version:

- GBP Performance overview
- GBP reviews screen with current count/newest review/reply visibility
- LinkedIn analytics only if LinkedIn was used
- Calendly source/UTM only if a booking appeared

Live check on 2026-05-23: both Spanish and English public review endpoints now returned 5.0 / 16 with five visible reviews. Earlier cycles used 5.0 / 15 because the endpoint returned 15 then. Treat the GBP owner dashboard as source of truth before changing any public proof copy from `15 reviews` to `16 reviews`.

## What Not To Do Yet

- Do not publish more than one GBP post before Day 0 is captured.
- Do not ask for review keywords or 5-star wording.
- Do not build a new page, package or content calendar from this sprint until one owner-side signal arrives.
- Do not give the automation direct account access just to start. Manual screenshots are enough for the first test.
- Do not treat LinkedIn impressions as lead proof without DMs, clicks, profile-to-site movement or inquiries.

## Next-Cycle Use

If this packet is filled in, the next cycle should:

1. Compare Day 0 vs Day 7 GBP metrics.
2. Classify all inquiry notes by proof and price anchor.
3. Decide whether GBP/reviews, referrals, LinkedIn or profile cleanup earned the next week.
4. Update `measurement-plan.md`, `hypotheses.md`, `market-intelligence.md` and `research-roadmap.md`.

If no packet is filled in, the next cycle should avoid another broad competitor scan and instead produce a one-page owner prompt/checklist or inspect one owner-provided screenshot/manual note.
