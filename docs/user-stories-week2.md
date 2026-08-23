# User stories — Week 2 mock user round

Twelve stories drawn from the ADHD executive-function traits in
`docs/healthcare-context.md` and the Must/Should/Nice priorities in the project
proposal. Each is written to be *testable* — the acceptance criteria are what the
QA Lead turns into test cases, and what a mock user can confirm or reject in a
session.

Format: `As a <role>, I want <capability>, so that <outcome>.`

Roles: **Patient** (adult with ADHD), **Caregiver** (partner, family member, or
support person).

---

### US-01 — One next action · Must · Time blindness, task initiation
**As a** patient, **I want** the app to show me exactly one thing to do next,
**so that** I do not have to decide what to do first when I am already overwhelmed.

Acceptance:
- Exactly one primary action is visually dominant on the home screen.
- Remaining items are present but visually subordinate.
- When nothing is due, a calm confirmed-empty state appears rather than a blank area.
- The primary action is the first focusable element after the orientation bar.

---

### US-02 — Time anchoring · Must · Time blindness
**As a** patient, **I want** to see the current day and time and how long until my
next item, **so that** I can orient myself without doing arithmetic.

Acceptance:
- Current day and time are visible on every patient screen.
- Upcoming items show relative time ("in 20 minutes"), not only clock time.
- Dates are written in full words ("Tuesday, August 25"); no `8/25` format anywhere.

---

### US-03 — Name the first physical step · Must · Task initiation
**As a** patient, **I want** a multi-step task to tell me its first physical
action, **so that** I can start without deciding where to begin.

Acceptance:
- Any task with more than one step displays "Step 1 of N" with the first step stated as a concrete action.
- Progress persists if the app is closed and reopened.
- No step requires information shown only on a previous screen.

---

### US-04 — Medication status at a glance · Must · Working memory, patient safety
**As a** patient, **I want** to see whether I already took a dose and at what
time, **so that** I do not take it twice.

Acceptance:
- Status (taken / due / overdue / skipped) and the *time taken* are visible in the list without opening a detail view.
- Status is carried by text and icon, never by color alone.
- "Not yet acknowledged" is visually distinct from "skipped" — the two are never collapsed.

---

### US-05 — Undo instead of confirm · Must · Cognitive load, patient safety
**As a** patient, **I want** to undo a medication action for a few seconds after
it, **so that** a mistap does not become a wrong record and I am not slowed by a
confirmation box every time.

Acceptance:
- Every dose action offers a 10-second undo.
- The undo is keyboard reachable and announced through an ARIA live region.
- No confirmation dialog blocks the routine "I took it" path.

---

### US-06 — Reminders I control · Must · Attention, autonomy
**As a** patient, **I want** to control reminder timing, frequency, and snooze,
**so that** reminders help me instead of becoming noise I learn to dismiss.

Acceptance:
- Lead time and repeat count are configurable; reminders can be disabled entirely.
- A hard cap on repeats prevents nagging.
- An expired reminder never forfeits the action — the item stays actionable.

---

### US-07 — Help in the same place every time · Must · WCAG 2.2 SC 3.2.6
**As a** patient, **I want** the "call my caregiver" action in the same place on
every screen, **so that** I can reach help without searching when I am stressed.

Acceptance:
- Reachable within one interaction from every patient screen.
- Occupies the same relative position on every screen.
- Target is at least 44 × 44 px.

---

### US-08 — Sign-in with no memory test · Must · WCAG 2.2 SC 3.3.8, 3.3.7
**As a** patient, **I want** to sign in without solving a puzzle or retyping
information, **so that** getting into the app is never the reason I skip a dose.

Acceptance:
- No cognitive function test (memory puzzle, transcription challenge) in the sign-in path.
- Information already provided is never requested a second time in the same process.
- The role choice persists and is not asked again on later sign-ins.

---

### US-09 — Refill a controlled prescription · Should · Domain reality
**As a** patient, **I want** the app to walk me through the monthly refill as
separate steps and remind me before I run out, **so that** I do not lose days of
treatment to a missed refill.

Acceptance:
- The refill task is broken into discrete steps with the pharmacy number inline.
- A reminder fires a configurable number of days before the supply runs out.
- The app states plainly that controlled medications cannot be auto-refilled.

---

### US-10 — Caregiver sees status without asking · Should · Caregiver burden
**As a** caregiver, **I want** a low-noise view of what has been done and what
needs attention, **so that** I can help without constantly checking in.

Acceptance:
- Completed, missed, and upcoming items are distinguished without patient self-report.
- Overdue and missed items appear in an ARIA alert region.
- The dashboard loads to "what needs attention", not a full activity dump.

---

### US-11 — Symmetric visibility · Should · Autonomy, ethics
**As a** patient, **I want** to see exactly what my caregiver can see about me,
**so that** support does not become surveillance I did not agree to.

Acceptance:
- A patient-accessible screen lists every data point visible to the caregiver.
- Any change to caregiver visibility is surfaced to the patient.
- The patient can see who their caregiver is and how to change it.

---

### US-12 — The day works offline · Must · Reliability
**As a** patient, **I want** today's medications and appointments available with
no connection, **so that** losing signal never means losing the plan.

Acceptance:
- The current day's items render with the network disconnected.
- The interface plainly states when data was last synchronized.
- The app passes installability checks as a PWA.

---

## What to ask the mock user to falsify

Do not ask "do you like it?" Ask them to try to break these assumptions:

1. Is one-action-at-a-time genuinely calming, or does hiding the rest cause anxiety about what is being hidden?
2. Is a 10-second undo long enough, or does it expire before the mistake is noticed?
3. Does the caregiver dashboard feel supportive or surveilling? Where exactly is the line?
4. Which is worse — a reminder that nags, or one that gives up too early?
5. Is "Step 1 of 3" motivating, or does seeing three steps trigger avoidance?
