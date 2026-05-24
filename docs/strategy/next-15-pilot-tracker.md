# Next 15 Pilot Tracker

Created: 2026-05-22 Cycle 15

Purpose: make the manual `Your next 15 minutes` pilot executable without changing the teaching platform. Use anonymous labels in this file; do not write student names, emails, private feedback text, or homework answers here.

Cycle 46 refresh:

- Use this file as the live anonymous tracker if Auris runs the concierge Next 15 proof sprint.
- Do not create another tracker or a platform pilot-response table before there are real rows.
- The key decision is now `build / soften / keep manual / pause`.
- Reference artifact: `/Users/aurisp/repos/teacher-website/docs/strategy/next-15-proof-pilot-cycle46.md`.

## Decision

Auris has not explicitly approved a platform edit yet, so the right next move is the manual pilot, not implementation.

The pilot should test one risky question:

Do current students want one suggested next step, or does it feel like extra homework?

## Pilot Setup

Run with 3-5 active students after class.

Pick a mix:

- One student who uses flashcards.
- One student who mostly uses class notes/WhatsApp.
- One student with assignments or modular work.
- Optional: one professional/adult learner who is busy and premium-relevant.

Do not call it a feature test. Call it a tiny experiment.

## Message Variant A: Light English

```text
Small experiment for this week:

Before our next class, do just one useful thing:

1. If you have flashcards due, review up to 8.
2. If I gave you feedback, choose one correction and use it in a sentence.
3. Open your class notes and say 3 useful phrases out loud.

Quick question: when you open the portal, do you usually know what to do first?
```

Follow-up:

```text
Would a small "Your next 15 minutes" suggestion in the portal help, or would it feel like extra homework?
```

## Message Variant B: More Personal English

```text
Tiny experiment before our next class:

Choose just one thing, not all three:

- Review up to 8 flashcards if they are due.
- Pick one correction from my feedback and use it in a sentence.
- Open your class notes and say 3 useful phrases out loud.

When you open the portal, is it clear what to do first, or is it a bit too much choice?
```

Follow-up:

```text
Would it help if the portal showed one small suggestion called "Your next 15 minutes", with other options still available?
```

## Message Variant C: Spanish

```text
Pequeno experimento antes de nuestra proxima clase:

Elige solo una cosa, no las tres:

- Si tienes flashcards pendientes, repasa hasta 8.
- Si te deje feedback, elige una correccion y usala en una frase.
- Abre tus notas de clase y di 3 frases utiles en voz alta.

Cuando entras en el portal, sabes claramente que hacer primero, o hay demasiadas opciones?
```

Follow-up:

```text
Te ayudaria que el portal mostrara una pequena sugerencia tipo "tus proximos 15 minutos", dejando las otras opciones disponibles?
```

## Logging Sheet

Use anonymous rows. Keep real replies in WhatsApp or private notes, not in this strategy repo.

| Pilot ID | Student Type | Message Variant | Sent Date | Reply: Knows What To Do? | Reply: Helpful Or Homework? | Action Chosen | Did It Before Next Class? | In-Class Evidence | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Student A | flashcards user / busy adult / notes-first / assignment-active | A/B/C | YYYY-MM-DD | yes / no / mixed | helpful / homework / unsure | cards / feedback / notes / assignment / none | yes / no / unknown | used phrase / remembered word / mentioned portal / no sign | go / soften / defer |
| Student B | flashcards user / busy adult / notes-first / assignment-active | A/B/C | YYYY-MM-DD | yes / no / mixed | helpful / homework / unsure | cards / feedback / notes / assignment / none | yes / no / unknown | used phrase / remembered word / mentioned portal / no sign | go / soften / defer |
| Student C | flashcards user / busy adult / notes-first / assignment-active | A/B/C | YYYY-MM-DD | yes / no / mixed | helpful / homework / unsure | cards / feedback / notes / assignment / none | yes / no / unknown | used phrase / remembered word / mentioned portal / no sign | go / soften / defer |
| Student D | optional | A/B/C | YYYY-MM-DD | yes / no / mixed | helpful / homework / unsure | cards / feedback / notes / assignment / none | yes / no / unknown | used phrase / remembered word / mentioned portal / no sign | go / soften / defer |
| Student E | optional | A/B/C | YYYY-MM-DD | yes / no / mixed | helpful / homework / unsure | cards / feedback / notes / assignment / none | yes / no / unknown | used phrase / remembered word / mentioned portal / no sign | go / soften / defer |

## Scoring

Score each response without over-reading politeness.

| Signal | Meaning | Score |
| --- | --- | ---: |
| Student says they do not know what to do first | Clear need | +2 |
| Student says it would help | Product permission | +2 |
| Student says it sounds like homework | Copy risk | -2 |
| Student does one suggested action before class | Behaviour proof | +3 |
| Student uses reviewed word/correction/phrase in class | Learning proof | +3 |
| Student ignores it but says it is helpful | Politeness risk | 0 |
| Student prefers WhatsApp reminders | Keep manual route | -1 |
| Student says portal is already clear | Lower urgency | -1 |

Decision:

- Build: total score 6+ across 3 students, with at least 2 behaviour/need signals.
- Soften: helpful responses but 2+ homework-risk signals.
- Keep manual: WhatsApp/direct reminder beats portal for most students.
- Pause: no one acts before class.

## Use Existing Homework Log

The platform already has a teacher-side WhatsApp homework log:

- `ClassHomeworkLog` model.
- `GET/POST /api/classes/{class_id}/homework-log`.
- `TeacherOverview.tsx` lets Auris paste the exact WhatsApp message, target whole group or selected students, and see saved messages.

This means the pilot does not need a new database table.

Recommended manual workflow:

1. Send the pilot message on WhatsApp.
2. Paste the same message into the class homework log.
3. After the next class, record only anonymous outcome notes in this tracker.

## What Counts As Success

Strongest success:

- Student knew what to do because of the message.
- Student did a small task before class.
- Auris can refer to it naturally in the lesson.

Acceptable success:

- Student says the portal needs a clearer first step and does not object to the idea.

Weak success:

- Student likes the idea but does not act.

Failure:

- Student says it feels like more homework.
- Student ignores the message.
- Auris cannot connect the action back into class.

## Implementation Gate

Implement the frontend card only if one of these is true:

- 2/3 students say the portal is not clear enough and the suggestion would help.
- 2/3 students complete one suggested action before the next class.
- Auris wants to ship the card as a low-risk experiment despite incomplete pilot data.

If implemented, keep V0 narrow:

1. Urgent overdue/due-today assignment.
2. Started modular or standard assignment.
3. Due flashcards.
4. Recent reviewed feedback.
5. Class notes phrase practice.
6. Talk the Talk fallback.

## What Not To Record Here

- Student names.
- Emails.
- Phone numbers.
- Message screenshots.
- Actual homework answers.
- Private teacher feedback.
- Sensitive personal learning notes.
