# Automation Idea Engine

Created: 2026-05-27 Cycle 109
Purpose: make the recurring research automation generate better evidence-bound ideas and improve its own process without undoing the Quiet Cycle Contract.

## Working Answer

The quiet-cycle rules are still correct: when no owner/student/prospect/capacity/access evidence arrives, the automation should not invent new campaigns or public work.

The missing piece is a synthesis mode. If Auris asks what the automation has found, asks for new ideas, asks for process improvement, or if many quiet cycles repeat with the same missing rows, the automation should run an `Idea Synthesis Pulse`. This is not a broad research cycle and not approval to act. It is a compact strategy pass that turns accumulated findings into ranked ideas, tests each idea against evidence and stop conditions, and improves the automation if the process itself failed.

## Trigger Table

| Trigger | Classification | What To Do | What Not To Do |
| --- | --- | --- | --- |
| Auris asks for findings, new ideas, or "what have you learned?" | `owner_synthesis_request` | Run one Idea Synthesis Pulse from existing strategy memory, then answer in plain language. | Do not reply with only health-check status. |
| Auris asks to improve the automation | `process_improvement_requested` | Update this file, `automation-research-loop.md`, `research-roadmap.md`, and the live automation prompt when useful. | Do not leave the actual automation prompt stale if the docs change. |
| 8-12 consecutive quiet cycles repeat the same missing triggers | `synthesis_pulse_due` | Produce a compact idea scorecard and one process critique. | Do not browse broadly or create many artifacts. |
| New owner/student/prospect/capacity/access evidence arrives | Existing Packet BH trigger | Route the evidence first. Add an idea only if the evidence changes a decision. | Do not use one row to reopen every parked lane. |
| A quiet cycle catches a public/API regression | Existing Packet BH trigger | Fix or escalate that concrete issue. | Do not turn the regression into channel strategy. |

## Idea Synthesis Pulse

Use this sequence:

1. Read the latest 5-10 research-log cycles, Packet BH, Packet BI, current hypotheses, and the theme files connected to the user's question.
2. State the process reason for the pulse: owner request, repeated quiet-cycle streak, new unclassified evidence type, or automation failure.
3. Generate 3-7 candidate ideas from accumulated evidence only.
4. Score each idea with the template below.
5. Pick at most one `do now`, one `test manually`, and one `park`.
6. Name one idea that should be deliberately ignored for now.
7. Update the process if the pulse revealed a failure, such as treating an owner synthesis question as mere `no_new_evidence`.

Do not run broad external browsing during a synthesis pulse unless one targeted source can falsify a specific idea. If browsing is used, capture exactly what it strengthens or weakens.

## Idea Scorecard Template

| Field | Required Answer |
| --- | --- |
| Idea | Concrete action or experiment, not a theme. |
| Evidence basis | Which cycle, artifact, review theme, code path, API check, owner row, student row, or external source supports it. |
| Specific to Auris | Why this fits his personal, bilingual, Ireland-raised, premium, practical-confidence positioning. |
| Upside | Acquisition, retention, trust, pricing power, teacher leverage, or process quality. |
| Cost/risk | Time, admin, privacy, brand drift, public-change risk, platform complexity, or false certainty. |
| Smallest test | The first manual or read-only step. |
| Stop condition | What evidence would make us abandon or park it. |
| Cheaper alternative | A simpler action that could beat it. |
| Status | `do_now`, `test_manually`, `park`, or `ignore`. |

## Current Candidate Ideas

These are not implementation approvals. They are the current idea inventory the automation should refine when a synthesis pulse runs.

| Idea | Evidence Basis | Smallest Test | Status |
| --- | --- | --- | --- |
| Future-fit direct-contact row | Direct-contact mode is live; first inquiry row is still missing. | Record one anonymized future-fit inquiry with source, proof mentioned, need, timing, price anchor, and outcome. | `do_now` if a lead appears. |
| GBP profile contact-link truth check | Website Calendly is gone, but GBP booking/contact status remains owner-side and unknown. | Owner records whether GBP shows booking, website, call, message, or stale Calendly link. | `test_manually`. |
| Talk as a 60-second feedback bridge | Public Talk now uses direct WhatsApp contact and avoids trial/Calendly framing. | If anyone sends a Talk reply, record what they expected and whether feedback could begin naturally. | `test_manually`. |
| Current-student continuity row | Platform already supports feedback, notes, flashcards, assignments and SRS; evidence missing is behavior. | Ask one student to do one tiny optional step and observe next-class evidence. | `test_manually`. |
| Review-reply trust maintenance | Public proof is strongest and the public endpoint moved from 16 to 17 reviews on 2026-06-02; newest-review and reply status remain owner-side. | Ask for one owner Review Truth row, reply warmly to any unreplied newest review, then record owner-visible/public-visible status. | `do_now` until the 17-review owner row is known. |
| Premium mechanism near price | Reviews mention confidence, meetings, adaptation and tools; price proof still needs mechanism clarity. | If public copy is later approved, add one mechanism line near price, not a broad page rewrite. | `park`. |
| CRM/waitlist/routing system | Fully booked risk exists, but lead volume rows are missing. | Wait for 5-10 repeated inquiry/follow-up rows before designing software. | `ignore` for now. |

## Pulse History

### Pulse 01 - 2026-05-28

Trigger: `synthesis_pulse_due` after repeated quiet heartbeats following Cycle 109.

Reason: the live checks stayed stable and no owner/student/prospect/capacity/access row arrived. The pulse should prevent quiet mode from becoming flat while still avoiding false public work.

| Selection | Idea | Evidence Basis | Upside | Risk | Smallest Test | Stop Condition |
| --- | --- | --- | --- | --- | --- | --- |
| `do_now` | Keep the first direct-contact inquiry row as the active acquisition truth gate. | Direct-contact mode is live; reviews endpoint remains strong; no real inquiry row has arrived. | Prevents over-reading clicks, health checks or content plans as buyer proof. | It can feel passive if no leads arrive. | When a lead appears, record source, first proof mentioned, need, timing, price anchor and outcome without private details. | If 3-5 inquiries arrive without useful source/proof fields, simplify the row. |
| `test_manually` | Use one current-student continuity observation before another platform spec. | Platform surfaces exist; missing proof is student behavior between classes. | Tests retention/referral value without public acquisition work. | Could add homework pressure if framed too formally. | In a natural class, suggest one tiny optional step and observe next-class evidence. | If two attempts feel like admin or no behavior changes, keep it manual and stop productizing. |
| `park` | GBP profile contact-link truth check. | Website Calendly is removed; GBP booking/contact status remains owner-side and unknown. | Catches profile-level mismatch if Auris is already in GBP. | Requires owner attention; not urgent while capacity/evidence is unchanged. | Only check when Auris is already editing GBP or capacity opens. | If GBP has no stale booking link, stop revisiting it until profile work resumes. |
| `ignore` | CRM, waitlist or routing system. | No lead volume or follow-up rows exist yet. | Avoids premature admin and academy/funnel drift. | Future-fit leads could be missed if unmanaged. | Wait for 5-10 repeated inquiry/follow-up rows before software design. | If repeated inquiries are lost or delayed, reopen as a simple manual follow-up row first. |

Process critique: the Idea Engine is now doing useful synthesis, but the first pulse should not notify Auris because no immediate owner decision is required. Future pulses should notify only if they surface a concrete time-sensitive action, such as a stale public contact path, capacity decision, broken API/site check, or a repeated lead-loss pattern.

### Pulse 02 - 2026-05-28

Trigger: `synthesis_pulse_due` after another long quiet streak following Pulse 01.

Reason: repeated heartbeat checks stayed stable after Pulse 01: homepage, Talk, sitemap, reviews and teaching API kept passing; no owner/student/prospect/capacity/access row arrived. This pulse should produce one small process improvement and avoid treating silence as a reason to create public work.

| Selection | Idea | Evidence Basis | Auris-Specific Fit | Upside | Cost/Risk | Smallest Test | Stop Condition | Cheaper Alternative |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `do_now` | Use each synthesis pulse as the durable quiet-streak reset marker. | Pulse 01 was followed by repeated stable `DONT_NOTIFY` checks that were intentionally not logged one by one. | Keeps Auris's strategy light and evidence-led instead of turning a personal teaching business into an admin machine. | Improves automation reliability without new owner work. | If overused, pulse history could become its own clutter. | Add the reset rule to process docs and count future quiet streaks from the latest pulse. | If future pulses happen too often or repeat the same ideas, raise the threshold or require a new evidence type. | Log every quiet heartbeat, rejected as needless memory noise. |
| `test_manually` | At the next owner check-in, offer a one-row evidence menu instead of a broad strategy recap. | Missing rows are now stable: first inquiry, Talk-origin reply, current-student continuity, GBP contact-link truth, GBP owner snapshot. | Fits a busy premium solo teacher: one lightweight row beats another campaign plan. | Converts owner attention into the highest-value evidence. | Could feel like a request for homework if surfaced at the wrong moment. | If Auris asks "what should I send?", ask for just one row: first inquiry, one student continuity observation, or GBP contact-link truth. | If Auris wants strategy discussion rather than evidence capture, answer synthesis first and leave the row optional. | Keep waiting for organic evidence. |
| `park` | Review-count delta as a trust-maintenance trigger. | Reviews endpoint remains `places-new`, 5.0, 16 reviews; review proof is strongest but owner-side newest/reply truth is gated. | Reviews repeatedly carry the confidence/adaptation proof that differentiates Auris from academies. | Catches real proof changes without reopening GBP/content work. | Public endpoint order is not newest-review truth. | If `reviewCount` changes, run a bounded review-trust cycle and ask for owner reply status only if needed. | If count remains stable or endpoint ordering stays ambiguous, do not infer newest/reply truth. | Keep the current review count in quiet checks only. |
| `ignore` | Treating teacher-assistant dirty files as a platform-strategy trigger. | The platform repo remains dirty, but no owner request, student outcome, deploy request or product failure is attached. | Prevents clever platform work from distracting from real student behavior and premium teaching proof. | Avoids product churn and privacy/admin risk. | A real platform bug could be missed if paired evidence is ignored. | Only inspect or modify platform code when Auris asks, a public/API check fails, or a student/teacher workflow row arrives. | If API health fails or Auris reports a classroom issue, route as API/product evidence immediately. | Continue API health only in quiet checks. |

Process critique: Pulse 02 exposed a small memory problem: quiet checks are intentionally not all appended to `research-log.md`, so the system needs a durable reset marker. The pulse history now serves that role. Future long-streak synthesis should count from the last Pulse entry, not from every unlogged quiet heartbeat.

### Pulse Gate 03 - 2026-05-29

Trigger: long quiet streak after Pulse 02.

Decision: skip a full Pulse 03 for now.

Reason: the checks after Pulse 02 repeated the same state: homepage, Talk, sitemap, reviews and teaching API stayed healthy; no owner/student/prospect/capacity/access row arrived; review count stayed at 16; and no new process failure appeared. A full scorecard would mostly repeat Pulse 01 and Pulse 02, which would weaken the purpose of the Idea Engine.

What this gate changes:

- A long quiet streak can trigger a `pulse_gate` before it triggers a full pulse.
- If the gate finds no materially new selection, do not create a new pulse scorecard.
- Treat this gate as a reset marker for the next 8-12 quiet checks.
- Run the next full pulse only if there is a new evidence type, owner synthesis/process request, public/API regression, review-count delta, or a genuinely new automation failure.

Current held selections:

- `do_now`: first direct-contact inquiry row remains the active acquisition truth gate.
- `test_manually`: one current-student continuity observation remains the best retention/platform test.
- `park`: GBP contact-link truth and review-count delta remain owner/proof triggers.
- `ignore`: CRM/waitlist/routing systems and dirty platform files remain non-triggers without paired evidence.

### Pulse Gate 04 - 2026-05-29

Trigger: another long quiet streak after Pulse Gate 03.

Decision: skip a full Pulse 04 for now.

Reason: the bounded checks repeated the same state again: homepage, Talk, sitemap, reviews and teaching API stayed healthy; reviews remained 5.0 with 16 reviews; no owner/student/prospect/capacity/access row arrived; and no new process failure appeared. A full scorecard would still repeat Pulse 01, Pulse 02 and Pulse Gate 03.

What this gate changes:

- Treat this gate as the quiet-streak reset marker.
- Keep the same held selections until new evidence changes them.
- Do not run another full pulse from silence alone; require new evidence, owner synthesis/process request, review-count delta, public/API regression, or a concrete automation failure.

### Pulse Gate 05 - 2026-05-30

Trigger: another long quiet streak after Pulse Gate 04.

Decision: skip a full Pulse 05 and stop creating clock-only Pulse Gate entries from silence.

Reason: the same bounded state repeated again: homepage, Talk, sitemap, reviews and teaching API stayed healthy; reviews remained 5.0 with 16 reviews; no owner/student/prospect/capacity/access row arrived; and no new process failure appeared. A new gate would not improve the selection set.

What this gate changes:

- Treat Pulse Gate 05 as the quiet-streak reset marker and the gate ceiling for the current evidence state.
- Do not create another Pulse Gate merely because 8-12 more quiet heartbeats pass.
- Reopen the Idea Engine only for owner synthesis/process request, new owner/student/prospect/capacity/access evidence, review-count delta, public/API regression, or a concrete automation failure.

## Process Rule

Quiet mode prevents false work. The idea engine prevents quiet mode from becoming intellectually flat.

Future automation cycles should ask:

1. Did evidence arrive? Route it with Packet BH.
2. Did Auris ask for ideas, findings, or process improvement? Run an Idea Synthesis Pulse.
3. Has a long quiet streak repeated the same conclusion? Run a compact synthesis pulse, then return to quiet mode.
4. After a synthesis pulse, reset the quiet-streak count from that Pulse History entry. Do not append every quiet heartbeat just to count.
5. If a long quiet streak is due but the next pulse would only repeat the prior selections, record a `Pulse Gate` skip, reset the quiet count from that gate, and require a new evidence type or process failure before a full pulse.
6. If repeated Pulse Gates keep skipping for the same evidence state, stop creating clock-only gates and wait for a real trigger.
7. If none of the above is true, run bounded checks only and use `DONT_NOTIFY`.

## Next Improvement Target

The next process check should verify that future pulses do not repeat the same idea inventory too often. If two consecutive pulses produce no new practical selection, raise the threshold or require a new evidence type before another pulse.
