# Owner-Side Five-Minute Capture Prompt

Purpose: compress the larger owner-side proof capture packet into one tiny request Auris can answer without sharing credentials, private messages or full screenshots.

Created: 2026-05-23 Cycle 29

## Working Answer

The full owner-side proof packet is strategically correct, but it is probably too heavy as a first ask. The next proof sprint should start with a five-minute capture:

1. current Google Business Profile review count/rating from owner view
2. one GBP Performance screenshot or note for the last 7 or 28 days
3. whether any inquiries arrived in the last 7 days and where they seemed to come from

This is enough to create a Day 0 baseline. It is not enough to judge the channel yet, but it prevents the sprint from becoming another unmeasured content action.

## Copy/Paste Request

Send this to Auris, or use it as the checklist if Auris is capturing data himself:

```text
Can you send me a quick owner-side proof check?

1. Google Business Profile:
- current rating and review count shown in your owner dashboard
- one screenshot or note from Performance for last 7 days or last 28 days
- website clicks, calls, messages, bookings, searches and views if shown
- top search terms if visible
- newest review date/theme and whether review replies are visible

2. LinkedIn, only if you posted or edited the profile:
- profile views and search appearances from the last 7 days
- latest post impressions/link clicks if there is a post

3. Leads:
- any inquiry in the last 7 days?
- where did it seem to come from: GBP, LinkedIn, website, referral, marketplace, unknown
- did they mention reviews, confidence, work English, price or the free trial?

Please redact names, phone numbers, emails, companies and full private messages. A short anonymous note is enough.
```

## If Even That Is Too Much

Use the smallest version that gets the next gate open.

10-second version:

```text
Can you check your Google Business Profile and tell me the rating/review count it shows?
```

30-second version:

```text
Can you send just two things from Google Business Profile?
1. rating/review count
2. one Performance screenshot for last 7 or 28 days
```

2-minute version:

```text
Can you send:
1. GBP rating/review count
2. one Performance screenshot for last 7 or 28 days
3. whether any inquiry came in this week, anonymized
```

## Thirty-Second Version

If Auris is busy, ask only for these:

| Need | What To Send | Why |
| --- | --- | --- |
| Review truth | Owner-view rating and review count | Confirms whether public proof is 15 or 16 reviews before copy changes. |
| GBP baseline | One Performance screenshot or the main numbers | Creates Day 0 for the proof sprint. |
| Lead reality | Any inquiry source and what they mentioned | Distinguishes trust signal from vanity movement. |

## Five-Minute Version

Capture three screenshots or notes:

1. GBP Performance overview for last 7 days or last 28 days.
2. GBP reviews screen showing current count, newest review and whether replies are visible.
3. LinkedIn analytics only if LinkedIn was used: profile views, search appearances, post impressions and link clicks.

Optional fourth note:

- Calendly booking source or UTM if a trial was booked.

## What To Redact

Do not send or store:

- login credentials
- student names
- phone numbers
- email addresses
- company names
- full WhatsApp or email messages
- private profile viewer identities

Use anonymous fragments only, such as:

- `asked about meetings`
- `mentioned Google reviews`
- `compared price with marketplace`
- `wanted free trial`
- `referred by current student`

## Review Count Confirmation

Live check on 2026-05-23:

| Endpoint | Rating | Review Count | Visible Reviews | Note |
| --- | --- | --- | --- | --- |
| `/.netlify/functions/google-reviews?language=es` | 5.0 | 16 | 5 | Newer public count than earlier cycles. |
| `/.netlify/functions/google-reviews?language=en` | 5.0 | 16 | 5 | Now also reports 16 in the English response. |

Earlier cycles used 5.0 / 15 because that was what the live endpoint returned then. Before changing public proof copy from `15 reviews` to `16 reviews`, use the owner-side GBP dashboard as the source of truth.

## How To Interpret The Capture

| Evidence Received | Interpretation | Next Move |
| --- | --- | --- |
| Review count/rating only | Proof baseline improved, but no channel movement known. | Confirm count, then update proof language only if Auris asks. |
| GBP Performance screenshot only | Good Day 0 baseline. | Do one action, then compare the same range after 7 days. |
| GBP + one inquiry note | Strong enough to choose the next sprint step. | Classify `proof_mentioned`, `price_anchor_seen`, `booked_trial`, `lead_quality`. |
| LinkedIn profile metrics only | Useful for credibility, not yet acquisition. | Keep LinkedIn light unless it creates DMs/clicks/leads. |
| No owner-side data | Strategy remains blocked. | Do not run more competitor scans; ask for the 30-second version. |

## Decision Gate

Before publishing a GBP review-confidence post:

- Required: owner-view review count/rating.
- Required: Day 0 GBP Performance screenshot or note.
- Recommended: whether existing review replies are visible.
- Optional: LinkedIn metrics only if LinkedIn is in use.

If the owner dashboard confirms 16 reviews:

- reply to the newest visible review if not already replied to
- update the sprint baseline to `5.0 / 16`
- still avoid public copy changes unless Auris explicitly wants them

If the owner dashboard still shows 15 reviews:

- treat the API count as unstable public data
- keep copy at `15 reviews` or use non-count language such as `students repeatedly mention confidence`

## Exact Next Sprint Note

Use this table as the first row of the proof sprint ledger:

| Date | Source | Rating/Reviews | Range | Views | Searches | Website Clicks | Calls | Messages | Bookings | Top Search Terms | Inquiries | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-__-__ | GBP owner dashboard | 5.0 / 15 or 16 | 7d or 28d |  |  |  |  |  |  |  |  | Day 0 baseline |

## Cycle 31 Ledger Link

If Auris sends any part of the capture, transcribe it into:

`/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-ledger-template.md`

Use the matching row only:

- review count or review screenshot -> Review Truth row
- GBP Performance screenshot -> GBP Performance row
- review reply, GBP post, review ask, referral ask or LinkedIn post -> Action Log row
- WhatsApp, email, Calendly, DM, referral or marketplace inquiry -> Inquiry row
- decision after the evidence -> Decision Output row

This keeps the first ask small while making the evidence durable.

## Cycle 32 Micro-Intake Rule

New artifact:

`/Users/aurisp/repos/teacher-website/docs/strategy/owner-evidence-micro-intake-playbook.md`

Use the micro-intake playbook before the five-minute prompt if no owner evidence has arrived yet.

The first ask should be one row:

```text
Quick one: Google is publicly showing 5.0 / 16 reviews, and the English view seems to show a very recent review. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

If Auris answers, fill only the Review Truth row in `owner-evidence-ledger-template.md`.

If a lead arrives first, skip the review-count sequence and fill only the Inquiry row.

If there is no response to the one-row ask after two cycles, do not keep making the ask smaller. Wait for owner-side evidence or rotate the next strategy cycle to another theme.

## What Not To Do Yet

- Do not ask Auris for credentials.
- Do not ask for full private messages.
- Do not change public proof copy to `16 reviews` until owner-side count is confirmed.
- Do not publish multiple GBP/LinkedIn variants before the Day 0 baseline exists.
- Do not replace the five-minute prompt with a long dashboard packet unless Auris has already started capturing data.
