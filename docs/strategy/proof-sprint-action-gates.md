# Proof Sprint Action Gates

Purpose: prevent the GBP/review proof sprint from drifting into either over-research or unmeasured posting. This file defines exactly what Auris can do at each evidence level.

Created: 2026-05-23 Cycle 30

## Working Answer

The public proof surface is ready enough, but public data is not enough to judge the sprint.

Current public checks:

- Google reviews endpoint returns 5.0 / 16 in Spanish and English.
- Homepage GBP campaign URL returns the correct homepage canonical.
- Talk the Talk LinkedIn campaign URL returns the correct Talk canonical.
- Sitemap and robots are clean.
- Active Calendly URLs in code return 200.
- Direct LinkedIn fetch remains unreliable because LinkedIn returns HTTP 999.

Therefore the next strategic move is not another competitor scan and not a content calendar. It is this gate:

> No owner baseline, no interpretation.

## Evidence Levels

| Level | Evidence In Hand | What It Can Decide | What It Cannot Decide |
| --- | --- | --- | --- |
| Level 0: Public only | Live review endpoint, route checks, existing docs | Public destination readiness and proof availability | Whether GBP/LinkedIn created actions or leads |
| Level 1: Review truth | Owner-view rating/review count and newest review/reply status | Whether proof baseline is 15 or 16 and whether a reply is needed | Channel movement |
| Level 2: Day 0 baseline | Level 1 plus one GBP Performance screenshot/note | Whether a measured GBP action can start | Whether the action worked |
| Level 3: Action + Day 7 | Day 0, one action, Day 7 same-range metrics | Whether GBP moved profile actions | Why a lead trusted Auris |
| Level 4: Lead proof | Level 3 plus anonymous inquiry notes | Whether to continue GBP, switch to referrals, use LinkedIn, or fix contact/profile proof | Long-term channel economics |

## Action Gates

| If This Is All We Have | Do Now | Do Not Do |
| --- | --- | --- |
| Public only | Keep public recommendations paused; ask for the 30-second owner capture. | Do not publish multiple posts or claim `16 reviews` in public copy. |
| Owner confirms 16 reviews, no performance data | Update private baseline to `5.0 / 16`; reply to newest visible review if needed; ask for GBP Performance. | Do not call the sprint successful. |
| Owner confirms 15 reviews, public API shows 16 | Keep count-neutral proof copy; record public count drift. | Do not treat the API as final truth. |
| GBP Performance screenshot received | Start Day 0; publish or reply only if Auris chooses; compare same range after 7 days. | Do not change channel priority before Day 7. |
| Inquiry note arrives before metrics | Classify the lead first; source/proof/price language may outweigh channel theory. | Do not ignore a real lead because the packet is incomplete. |
| LinkedIn metrics only | Treat LinkedIn as credibility/profile evidence. | Do not move LinkedIn above GBP unless it creates DMs, clicks or qualified inquiries. |
| Calendly booking source appears | Record source/UTM and first thing the lead mentioned. | Do not assume the booking came from the last clicked public page. |

## Owner Ask Ladder

Use the shortest version that gets Day 0.

### 10-Second Ask

```text
Can you check your Google Business Profile and tell me the rating/review count it shows?
```

### 30-Second Ask

```text
Can you send just two things from Google Business Profile?
1. rating/review count
2. one Performance screenshot for last 7 or 28 days
```

### 2-Minute Ask

```text
Can you send:
1. GBP rating/review count
2. one Performance screenshot for last 7 or 28 days
3. whether any inquiry came in this week, anonymized
```

### 5-Minute Ask

Use `/Users/aurisp/repos/teacher-website/docs/strategy/owner-side-five-minute-capture-prompt.md`.

## What Can Be Prepared Without Owner Data

Safe preparation:

- review reply drafts
- one GBP post draft
- UTM destination checks
- lead-note fields
- owner capture prompt
- LinkedIn profile copy
- website/contact route QA

Not safe to interpret:

- whether GBP is working
- whether LinkedIn is working
- whether reviews are producing leads
- whether price proof is strong enough
- whether Talk the Talk is acquisition or only practice engagement

## First Action Order After Day 0

Once Day 0 exists, the lowest-risk order is:

1. Reply to visible reviews with short, outcome-specific replies.
2. Confirm profile basics: services, website link, contact options, photos.
3. Publish one GBP review-confidence post only if Auris wants a public action.
4. Track Day 7 owner metrics using the same date range.
5. Classify every inquiry by proof, price anchor and booked-trial status.

LinkedIn should not outrank GBP until:

- profile cleanup is complete
- the post or profile creates link clicks, DMs or qualified inquiries
- owner-side metrics improve from the current tiny baseline

## Stop / Change Rules

Stop interpreting the sprint if:

- no Day 0 exists
- the action date is unknown
- the profile post/reply status is unknown
- inquiry source is guessed but no lead note exists

Change the strategy if:

- one warm referral creates a qualified booked trial before GBP moves
- leads mention marketplace prices first
- review replies are blocked, edited or delayed enough to slow execution
- LinkedIn produces real DMs or booked trials while GBP stays flat
- inquiries mainly ask for exams, children or low-price groups instead of adult/professional confidence

## Source Discovery Notes

The best evidence for this action-gate question lives in:

| Source Type | Usefulness |
| --- | --- |
| GBP owner Performance | Highest-signal for profile movement. |
| GBP owner review screen | Highest-signal for count and reply status. |
| Live Places endpoint | Good public proof QA, incomplete owner truth. |
| Official GBP docs | Defines owner metrics, post status and review constraints. |
| LinkedIn owner analytics | Useful only after profile/post action. |
| Calendly source/UTM record | Useful only after a booking. |
| Manual inquiry notes | Highest-signal trust and price evidence. |
| More competitor pages | Low value until owner data changes a hypothesis. |

## External Evidence Used

| Source | Signal | Gate Implication |
| --- | --- | --- |
| Google Business Profile performance docs, `https://support.google.com/business/answer/9918094?hl=en` | Owner/manager performance reports can show profile interactions, searches, views and actions such as calls, messages, bookings and website clicks where available. | Level 2 requires owner GBP Performance, not public route checks. |
| Google local ranking docs, `https://support.google.com/business/answer/7091?hl=en` | Complete profile info, review count/score, review replies and photos can affect local relevance/trust. | Profile basics and replies are worth preparing, but not over-interpreting. |
| Google posts docs, `https://support.google.com/business/answer/7342169?hl=en` | Posts can include action buttons and may be pending or not approved; policy and status matter. | An action log must record whether the post is live/pending/rejected. |
| Google review tips, `https://support.google.com/business/answer/3474122?hl=en` | Review links/QR codes and owner replies are supported; replies should stay short, useful and non-promotional. | Reply drafts are safe preparation; review asks must be pressure-free. |
| Google manage reviews docs, `https://support.google.com/business/answer/3474050?hl=en` | Verified businesses can reply publicly and manage replies. | Reply visibility/status is Level 1/3 evidence. |
| Google Maps UGC policy, `https://support.google.com/contributionpolicy/answer/7400114?hl=en` | Fake, incentivized, pressured or manipulated review content is unsafe. | Never ask for keywords, star ratings or selective positive reviews. |
| Google Places API Place resource, `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places` | Place data can expose rating, user rating count and a limited review list. | Public endpoint is useful proof QA, not owner-side truth. |
| Google Analytics campaign docs, `https://support.google.com/analytics/answer/10917952?hl=en` | UTM source/medium/campaign/content can identify external campaign traffic. | Campaign URLs prove destination readiness and later traffic attribution, not lead quality. |
| Calendly UTM tracking docs, `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters` | Calendly can carry UTM fields through scheduling links/embeds. | Booking source should be checked only when a booking appears. |
| LinkedIn post analytics docs, `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content` | Post analytics are owner-side and include engagement/action categories. | LinkedIn remains optional owner-side evidence. |
| LinkedIn profile views docs, `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature` | Profile views are owner-visible and privacy/Premium constrained. | Public profile fetches cannot replace owner notes. |

## Cycle 31 Ledger Upgrade

Artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`

Cycle 30 defined what each evidence level can decide. Cycle 31 adds the fillable ledger so a screenshot or owner note can be transcribed without rethinking the strategy each time.

Use the ledger in this order:

1. Public proof row for endpoint and destination checks.
2. Review truth row for owner-view rating/review count and reply status.
3. GBP Performance row for Day 0 and Day 7 same-range comparison.
4. Action log row for review replies, GBP posts, review asks, referral asks, LinkedIn posts and profile edits.
5. Inquiry row for any lead source/proof/price/work-moment language.
6. Decision output row before changing channel priority.

New rule:

> Evidence levels decide what can be interpreted; ledger rows preserve what was actually seen.

Do not jump from Level 0 public proof to Level 3 channel interpretation. If only public data changes, update the public proof row and ask for Level 1 or Level 2 owner evidence.
