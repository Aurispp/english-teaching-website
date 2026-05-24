# Owner Evidence Micro-Intake Playbook

Created: 2026-05-23 Cycle 32

Purpose: turn the owner evidence ledger from a blank template into the first usable row without asking Auris for a reporting task, credentials, exports, or private-message dumps.

## Working Answer

Ask for one row, not a packet.

The current strategy is blocked at Level 0 public proof. The live website, review endpoint and campaign destinations are ready enough to support a measured sprint, but they cannot confirm owner-view review truth, reply status, GBP Performance, LinkedIn analytics, Calendly source details or private lead language.

The smallest useful move is therefore not another scan. It is one owner-facing micro-intake:

- one review truth answer
- one screenshot
- one action status
- or one anonymized lead note

Anything larger risks becoming admin work.

## Current Evidence State

Live public checks on 2026-05-23:

| Surface | Public Result | What It Can Decide | What It Cannot Decide |
| --- | --- | --- | --- |
| Reviews endpoint ES | 5.0 rating, 16 reviews, 5 visible reviews | Public proof is alive | Owner review count, reply status, full review list |
| Reviews endpoint EN | 5.0 rating, 16 reviews, 5 visible reviews, one very recent visible review | Public proof is alive and freshness may have improved | Whether the newest review is visible/replied in owner UI |
| GBP homepage UTM | HTTP 200, homepage canonical | Destination is ready | Whether GBP created actions |
| LinkedIn Talk UTM | HTTP 200, `/talkthetalk` canonical | Destination is ready | Whether LinkedIn created profile views, clicks, DMs or leads |
| Local credential/API check | No usable local owner analytics credential surfaced | Manual capture is still the path | Owner metrics |

Evidence level remains Level 0 until Auris provides one owner-side row.

## Micro-Intake Decision Tree

| Situation | Ask This First | Row Label | Why |
| --- | --- | --- | --- |
| No owner evidence exists | Review truth | `review_truth` | Confirms 15/16, freshness and reply need with the lowest friction. |
| Public endpoint shows a recent review | Review truth plus reply status | `review_truth` | A fresh public review is only useful if owner UI confirms it and Auris can reply. |
| Review truth is confirmed but no Day 0 exists | One GBP Performance screenshot | `gbp_day0` | Creates the baseline before any GBP post/reply is interpreted. |
| Auris has replied, posted, asked for a review or edited LinkedIn | One status note | `action_log` | Prevents treating planned work as live work. |
| Any inquiry appears | Anonymized lead note | `lead_note` | Real lead language outranks the planned sequence. |
| Day 0 plus one action already happened | Same-range Day 7 screenshot | `day7_compare` | Allows a measured continue/adjust/pause decision. |
| No reply to a micro-ask after two cycles | Stop shrinking the ask | `blocked` | The blocker is no longer wording; wait for owner action or rotate theme. |

## Owner-Facing Ask Templates

Use only one at a time.

### English

Review truth, 10 seconds:

```text
Quick one: when you open Google Business Profile, what rating and review count do you see?
```

Review truth with fresh-review check:

```text
Quick one: Google is publicly showing 5.0 / 16 reviews, and the English view seems to show a very recent review. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

GBP Day 0 screenshot:

```text
Could you send one Google Business Profile Performance screenshot for the last 7 or 28 days? Just the overview is enough: views, searches, website clicks, calls, messages or bookings if shown.
```

Action status:

```text
Did the review reply / GBP post / LinkedIn edit go live, stay pending, get edited, or not happen yet?
```

Lead note:

```text
Did anyone contact you this week? Just send source + the first thing they mentioned, anonymized. Example: GBP + mentioned reviews, LinkedIn + asked about meetings, referral + wanted trial.
```

Day 7 comparison:

```text
Can you send the same Google Business Profile Performance view again, using the same 7-day or 28-day range as before?
```

### Spanish

Review truth, 10 seconds:

```text
Una cosa rapida: cuando abres Google Business Profile, que valoracion y numero de resenas te aparece?
```

Review truth with fresh-review check:

```text
Una cosa rapida: publicamente Google esta mostrando 5.0 / 16 resenas, y en la version inglesa parece aparecer una resena muy reciente. En tu Google Business Profile ves 16 resenas, y la resena mas nueva tiene respuesta?
```

GBP Day 0 screenshot:

```text
Me puedes mandar una captura de Performance de Google Business Profile de los ultimos 7 o 28 dias? Con la vista general basta: visualizaciones, busquedas, clics a la web, llamadas, mensajes o reservas si salen.
```

Action status:

```text
La respuesta a la resena / publicacion de GBP / edicion de LinkedIn esta publicada, pendiente, editada, o todavia no se ha hecho?
```

Lead note:

```text
Te ha contactado alguien esta semana? Solo dime fuente + lo primero que menciono, anonimizado. Ejemplo: GBP + menciono resenas, LinkedIn + pregunto por reuniones, referido + queria probar una clase.
```

Day 7 comparison:

```text
Puedes mandar la misma vista de Performance de Google Business Profile otra vez, usando el mismo rango de 7 o 28 dias que antes?
```

## Row Labels And Where They Go

| Row Label | Paste Into | Minimum Usable Evidence |
| --- | --- | --- |
| `review_truth` | Review Truth row in `owner-evidence-ledger-template.md` | owner rating/review count, newest review theme/date if visible, reply status if known |
| `gbp_day0` | GBP Performance row | date, range, visible metrics, rating/review count |
| `action_log` | Action Log row | action type, channel, status, proof theme |
| `lead_note` | Inquiry row | source type, first thing mentioned, proof/work/price signal, booked trial if known |
| `day7_compare` | GBP Performance row | same range as Day 0, same visible metrics |
| `decision_output` | Decision Output row | continue/adjust/pause and next action |

## Redaction Rules

Ask Auris to hide or avoid:

- names, surnames, phone numbers, emails and company names
- full WhatsApp, email, LinkedIn or Calendly messages
- profile viewer identities
- credentials, cookies, account URLs or browser bars that expose private access
- student data inside portal screenshots

Safe to keep:

- aggregate numbers
- status labels
- anonymized short phrases
- channel/source labels
- review themes without private details

## Interpretation Rules

| Evidence Arrives | Interpret As | Next Move |
| --- | --- | --- |
| Only public checks | Level 0 | Do not judge channel performance. |
| Review truth | Level 1 | Confirm count/reply need; then ask for Day 0 or reply if needed. |
| GBP Day 0 | Level 2 | One measured GBP action can start if Auris wants. |
| Action log only | Level 3 support | Do not judge without Day 0/Day 7. |
| Lead note | Level 4 | Classify immediately; it may outrank the planned sequence. |
| No owner reply after two micro-asks | Blocked | Stop reducing the ask; rotate to another theme or wait. |

## What Not To Do Yet

- Do not ask for credentials.
- Do not ask for a dashboard tour.
- Do not ask for all metrics at once if one row would advance the level.
- Do not publish multiple GBP/LinkedIn variants before Day 0.
- Do not change public proof copy to `16 reviews` without owner-view confirmation.
- Do not turn a fresh public review into a public action unless Auris confirms reply status.
- Do not keep inventing smaller asks after the one-row ask is already clear.

## External Evidence Basis

- Google Business Profile performance docs: `https://support.google.com/business/answer/9918094?hl=en`
- Google local ranking docs: `https://support.google.com/business/answer/7091?hl=en`
- Google posts docs: `https://support.google.com/business/answer/7342169?hl=en`
- Google review tips: `https://support.google.com/business/answer/3474122?hl=en`
- Google manage reviews docs: `https://support.google.com/business/answer/3474050?hl=en`
- Google Maps UGC policy: `https://support.google.com/contributionpolicy/answer/7400114?hl=en`
- Google Places API Place resource: `https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places`
- Google Analytics campaign URL docs: `https://support.google.com/analytics/answer/10917952?hl=en`
- Calendly UTM tracking docs: `https://calendly.com/help/how-to-source-track-your-calendly-embed-with-utm-parameters`
- LinkedIn post analytics docs: `https://www.linkedin.com/help/linkedin/answer/a525196/view-post-analytics-for-your-content`
- LinkedIn profile view docs: `https://www.linkedin.com/help/linkedin/answer/a540651/accessing-the-who-viewed-your-profile-feature`
- Android screenshot support: `https://support.google.com/android/answer/9075928?hl=en`
- Apple screenshot support: `https://support.apple.com/en-us/102616`

## Exact Next Ask

Use this before any broader request:

```text
Quick one: Google is publicly showing 5.0 / 16 reviews, and the English view seems to show a very recent review. In your Google Business Profile, do you see 16 reviews, and is the newest review replied to?
```

If Auris answers it, fill `review_truth`. If not, do not make another larger packet. Wait or rotate the next cycle to a different open question.
