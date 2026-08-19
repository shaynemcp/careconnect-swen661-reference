# Project Proposal — CareConnect

**Course:** SWEN 661 9040 — User Interface Implementation (2268)
**Assignment:** 1, Part 3
**Team:** Team E-Echo — Shayne McPherson, Abel Tabor, Quinton Coleman
**Status:** Pending instructor approval before Week 2

> **Canonical source:** the authoritative, team-completed version of this document is the
> Word file on UMGC SharePoint — **[Project Proposal (SharePoint)](https://umuc365-my.sharepoint.com/:w:/g/personal/atabor7_student_umgc_edu/IQA0e50yYJ06RYo_y6m78DNxAWzCyQRVhGF4g59x_GOybRk?e=99dHSb)**.
> Accessible to anyone signed in with a UMGC organization account.
> This Markdown copy is the in-repo mirror; when the two differ, the SharePoint
> document wins. Update this file whenever the Word document changes.

---

## 1. Project overview

**Application name:** CareConnect

**Description.** CareConnect is a cross-platform (mobile, web, and desktop)
care-coordination app built for patients with ADHD and the caregivers who support them. It
turns medications, appointments, and multi-step daily tasks into short, plain-language
steps with visible progress and time-aware reminders, so the patient doesn't have to rely
on memory or executive-function effort to stay on track, while caregivers get a clear,
low-noise view of what's been done and what needs their attention. Built to WCAG 2.2 Level
AA with an explicit ADHD-friendly, cognitive-load-reduction design lean.

**Target audience.** Patients with ADHD, and their caregivers (family members or other
support people who help manage medications, appointments, and daily tasks).

**Primary problem this app solves.** ADHD commonly involves difficulty with time
perception ("time blindness"), task initiation, working memory, and follow-through — which
shows up as missed medications, missed or late appointments, and half-finished multi-step
tasks. Caregivers, in turn, struggle to know what's actually been done versus forgotten
without constant check-ins. CareConnect reduces that load by breaking tasks into short
visible steps, handling the remembering, and giving caregivers visibility without requiring
the patient to self-report constantly.

---

## 2. Assigned constraints

**1. User group:** patients with ADHD, and their caregivers.

**2. Platform coverage:** web, mobile (Android and iOS), and desktop (Windows and macOS).

**3. Accessibility:** WCAG 2.2 Level AA, plus the team's ADHD-friendly /
cognitive-load-reduction design lean from the SWEN 661 kickoff meeting — simple uncluttered
screens, no unnecessary animation or time limits, tasks broken into short numbered steps
with visible progress, plain-language instructions, no reliance on remembering information
from a previous screen, save-and-resume, large labeled buttons, clear error messages, full
keyboard and screen-reader support, no color-only signaling, adequate contrast.

**4. Technical stack:** the course-wide toolchain — Flutter and React Native for mobile,
Electron for desktop, React + Vite for web.

---

## 3. Key features

> **⚠️ GAP — ACTION REQUIRED BEFORE SUBMISSION.** Assignment 1, Part 3 requires a
> **Key Features** section listing **8–12 major features prioritized as Must-Have,
> Should-Have, and Nice-to-Have**. The rubric's *Proficient* band names "8-12 prioritized
> features" explicitly, and this section is **not present in the SharePoint document**.
>
> The list below is a **proposed draft** derived from the description, constraints, and
> success criteria the team already wrote. It is not yet team-approved. Review it, edit it,
> and **paste the agreed version into the SharePoint document** — that is the graded
> artifact, not this file.

Acceptance criteria are included because the rubric's *Highly Proficient* band asks for
"detailed feature descriptions with acceptance criteria."

### Must-Have

**F1 — Stepped task breakdown with visible progress**
Multi-step daily tasks are presented as short numbered steps showing position and progress.
*Acceptance:* one step visible at a time; progress indicator states position ("Step 2 of
5"); no step requires information remembered from a previous screen; save-and-resume works
after leaving mid-task.

**F2 — Medication tracking with visible status**
Each medication shows its state (taken / due / overdue) with a timestamp.
*Acceptance:* status visible in the list without opening a detail view; announced via
`role="status"`; conveyed by text and icon, never color alone.

**F3 — Time-aware reminders**
Reminders anchored to the day's schedule, respecting the no-time-pressure constraint.
*Acceptance:* no countdown that forfeits an action on expiry; reminders restate what and
when in plain language; dismissible without penalty.

**F4 — Appointment schedule in plain language**
Chronological appointments with full-word dates, location, and purpose.
*Acceptance:* no bare numeric dates; strictly chronological ordering; who is attending is
stated when relevant.

**F5 — Caregiver visibility dashboard**
A low-noise view of what has been done and what needs attention.
*Acceptance:* alerts use `role="alert"`; distinguishes done / missed / upcoming without
requiring the patient to self-report; caregiver edits propagate to patient screens.

**F6 — Accessible create/edit forms with clear error messages**
Caregiver management screens for medications, appointments, and tasks.
*Acceptance:* every input has a programmatically associated label; errors are announced,
tied to their field, and describe the fix; delete requires explicit confirmation.

**F7 — WCAG 2.2 Level AA conformance across all screens and platforms**
*Acceptance:* zero axe DevTools violations; Lighthouse accessibility ≥ 95; full keyboard-only
walkthrough; NVDA, VoiceOver, and TalkBack passes; no color-only signaling; adequate contrast.

**F8 — Large labeled buttons and uncluttered screens**
The ADHD-friendly design lean, applied as a build requirement rather than a style note.
*Acceptance:* targets meet WCAG 2.2 SC 2.5.8 (24×24 CSS px minimum; the team standard is
44×44); one primary action per screen; no unnecessary animation; `prefers-reduced-motion`
honored.

### Should-Have

**F9 — Save-and-resume across sessions**
*Acceptance:* an interrupted multi-step task resumes at the same step after the app is
closed and reopened.

**F10 — Activity history for caregivers**
A timestamped log of completed, skipped, and missed items.
*Acceptance:* available as text, not chart-only; no guilt or streak-breaking framing.

**F11 — Offline access to the day's schedule**
*Acceptance:* the day's medications and appointments render with the network offline; the
UI states plainly when data was last synced.

### Nice-to-Have

**F12 — Adherence trends over time**
*Acceptance:* neutral framing; text alternative to any chart.

**F13 — Quick-contact action for the caregiver**
*Acceptance:* reachable within one interaction from every primary screen.

---

## 4. Platform deployment plan

| Platform | Technology | Target | Course phase |
| --- | --- | --- | --- |
| **Mobile** | Flutter | Android and iOS | Assignments 3–4 |
| **Mobile** | React Native | Android and iOS | Assignments 5–6 |
| **Desktop** | Electron | **Windows and macOS** | Assignments 7–9 |
| **Web** | React + Vite | Responsive web application | Assignment 10 |

**Desktop OS note.** Assignment 1's instructions ask teams to choose **one** desktop OS
(Windows, macOS, *or* Linux). This team's assigned platform-coverage constraint specifies
**both Windows and macOS**, so the proposal targets both, and the team accepts the larger
build and QA surface that follows (recorded as a risk in §6). The team's OS mix supports
this directly: two members develop on Windows and one on macOS, so both targets can be
built and accessibility-tested natively. **Confirm this deviation with the instructor when
the proposal is approved** — if a single OS is required, drop to macOS or Windows and move
the other to a future iteration.

**Linux** is not in scope and remains a possible future iteration.

---

## 5. Success criteria

**How success is defined.** A working build that implements every Must-Have feature across
all three platforms with WCAG 2.2 AA conformance verified via axe, WAVE, and Lighthouse
(accessibility score 95+), passes manual keyboard-only and screen-reader
(NVDA / VoiceOver / TalkBack) testing, and is validated with mock user sessions that include
at least one participant simulating the ADHD patient persona. Automated test coverage of
60–75%. Instructor approves the proposal by end of Week 1 with no major rework requested at
the Week 2 refinement checkpoint.

**Metrics and user feedback.**

| Type | Measure |
| --- | --- |
| Automated | Jest / React Testing Library coverage percentage (target 60–75%) |
| Automated | Lighthouse accessibility score (target 95+) |
| Automated | axe DevTools violation count (target zero) |
| Manual | Full keyboard-only walkthrough on every screen |
| Manual | NVDA / VoiceOver / TalkBack screen-reader pass on every screen |
| Manual | Usability feedback from mock user sessions role-playing the ADHD patient and caregiver personas |

---

## 6. Initial risks

**Challenges.**

| # | Risk | Mitigation |
| --- | --- | --- |
| R1 | **Dual desktop OS target (Windows + macOS)** roughly doubles the desktop build and QA surface compared to a single-OS team within the same timeline. | Team OS mix covers both natively (two Windows, one macOS). Isolate platform-specific code behind a thin adapter. Confirm the dual target with the instructor at approval. |
| R2 | **Simultaneous ramp-up on Flutter, React Native, and Electron** risks environment-setup delays. | Close the toolchain gaps in Weeks 1–2 rather than at the assignment that needs them — see [environment-setup.md](environment-setup.md). Freeze the design before Assignment 3 so the second mobile build is a port, not a redesign. |
| R3 | **Designing around an ADHD user group risks oversimplifying real needs** if not grounded in real input. | Base decisions on established guidance (WCAG 2.2 AA and the team's ADHD-friendly design lean) and validate directly with mock user sessions using a persona that reflects real ADHD experience, not assumptions. |

---

## 7. Instructor approval

| Field | Value |
| --- | --- |
| Submitted | *(date)* |
| Instructor decision | ☐ Approved ☐ Approved with changes ☐ Revise and resubmit |
| Dual desktop OS target (Windows + macOS) confirmed? | ☐ Yes ☐ No — single OS required |
| Notes | |
