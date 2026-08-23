# Healthcare context for CareConnect

Written for a team with software depth and no healthcare-industry background.
The goal is not to make anyone a clinician. It is to make our design decisions
defensible — so that when the instructor or a mock user asks "why did you build
it that way?", the answer cites something better than intuition.

Everything below is public, free, and citable in our Assignment 2 requirements
document.

---

## 1. The user group: ADHD

Our constraint is patients with ADHD and their caregivers. The design
consequences come from four well-documented executive-function traits.

| Trait | What it looks like | What we build |
|---|---|---|
| Time blindness | Poor sense of elapsed and remaining time | Always-visible current time, "in 20 minutes" phrasing, visible countdowns |
| Task initiation | Knowing what to do, not starting | Name the first physical step explicitly; one primary action per screen |
| Working memory | Losing the thread mid-task | Never require carrying information between screens; save-and-resume |
| Follow-through | Half-finished multi-step tasks | Step N of M progress, resumable state, no penalty for stopping |

Sources to cite:

- **CDC — ADHD** (`cdc.gov/adhd`). Plain-language, citable prevalence and
  symptom descriptions. Good for persona grounding.
- **CHADD** (`chadd.org`) — the largest ADHD patient advocacy organization.
  Their material on adult ADHD, medication management, and the caregiver
  relationship is written from the patient's side, which is what our personas need.
- **ADDA** (`add.org`) — adult-ADHD focused, useful because most caregiver
  literature assumes a child with ADHD and a parent, which is not our only case.
- **AAP clinical practice guideline for ADHD** — the pediatric standard of care.
  Relevant if any persona is a minor with a parent caregiver.
- **Barkley's executive-function model of ADHD** — the theoretical basis for
  treating ADHD as an executive-function disorder rather than an attention
  deficit. This is the citation that justifies our whole design lean.

### The single most important accessibility document for us

**W3C — "Making Content Usable for People with Cognitive and Learning
Disabilities" (COGA)**: `w3.org/TR/coga-usable/`

WCAG 2.2 AA is our conformance target, but WCAG is thin on cognitive
accessibility. COGA is where the actual guidance lives — objectives on helping
users understand, focus, and avoid mistakes. Several WCAG 2.2 success criteria we
rely on (3.2.6 Consistent Help, 3.3.7 Redundant Entry, 3.3.8 Accessible
Authentication) exist *because* of COGA. Citing COGA alongside WCAG is what makes
our "ADHD-friendly lean" a standards-based decision instead of a preference.

---

## 2. Clinical safety: how medication UIs hurt people

This is the domain knowledge that most distinguishes a student healthcare app
from a credible one. Medication errors are a leading source of preventable harm,
and interface design is a recognized contributing cause.

Design rules that follow, and why:

- **Never abbreviate a dose.** "U" for units and "µg" for micrograms are on the
  **ISMP List of Error-Prone Abbreviations** precisely because they get misread.
  Write "40 mg — 1 capsule".
- **Tall Man lettering** for look-alike drug names (`predniSONE` vs
  `predniSOLONE`). An ISMP and FDA convention. Relevant to us because ADHD
  medications have confusable formulations — immediate release versus extended
  release of the same molecule.
- **Never let a reminder expire into a missed dose silently.** An unacknowledged
  reminder is an unknown state, not a "no". Our UI must distinguish *taken*,
  *skipped*, *due*, and *unknown* — collapsing them loses safety information.
- **Undo, not confirm, for routine actions.** Confirmation dialogs train people
  to click through. A 10-second undo (which we already build) is safer and lower
  cognitive load.
- **Double-dose prevention.** The most common home medication error is taking a
  dose twice because you cannot remember the first. This is exactly the ADHD
  working-memory failure. Showing the *time taken*, not just a checkmark, is a
  patient-safety feature.

Sources: **ISMP** (`ismp.org`) for error-prone abbreviations and confused drug
name lists; **AHRQ Patient Safety Network** (`psnet.ahrq.gov`) for medication
error and health-IT safety literature; **ONC SAFER Guides** for health-IT safety
practices.

Also relevant: **controlled substances**. Most ADHD stimulants are Schedule II in
the US, which means no automatic refills and a new prescription each month. That
is a real, recurring, high-friction task for our exact user group — and it is
why the refill flow is in our seed data as a three-step task. This kind of
detail is what makes a mock user believe the app.

---

## 3. Health literacy and plain language

Our ADHD lean and health-literacy best practice point the same direction, which
is convenient — the same changes serve both.

- **CDC Clear Communication Index** — a scored checklist for health materials.
  Usable directly as a rubric on our microcopy.
- **AHRQ Health Literacy Universal Precautions Toolkit** — the operating
  assumption that you should design for low health literacy for *everyone*,
  because you cannot tell who needs it. Directly parallel to universal design.
- **plainlanguage.gov** — the federal plain-language standard. Concrete rules:
  common words, short sentences, active voice, "you".
- **Nielsen Norman Group** on healthcare UX — already on the course tool list.

Practical rules we already follow and should keep citing: full-word dates
("Tuesday, August 25", never "8/25", which is ambiguous internationally and
harder to parse); errors that state what is wrong *and* how to fix it; no
clinical jargon in patient-facing text.

---

## 4. Regulatory posture: HIPAA, Section 508, VPAT

We are not building a HIPAA-covered system, and we should say so explicitly
rather than imply compliance we do not have. But designing *as if* is what makes
the project credible.

**HIPAA** (`hhs.gov/hipaa`) has two parts that matter to us:

- The **Privacy Rule** defines PHI and the 18 identifiers. This is what our
  "no real health data" rule in `SECURITY.md` is derived from.
- The **Security Rule** requires administrative, physical, and technical
  safeguards. The technical ones map cleanly onto engineering decisions we can
  actually demonstrate: access control, audit controls, integrity controls,
  authentication, and transmission security.

**NIST SP 800-66r2**, "Implementing the HIPAA Security Rule", is the free
document that translates the legal text into concrete security controls. It is
the right citation for a "simulated compliance" appendix.

Worth knowing: a personal health app that a patient chooses for themselves is
generally *not* covered by HIPAA at all — the FTC Health Breach Notification Rule
applies instead. CareConnect as described would most likely fall in that
category. Saying this correctly in our documentation demonstrates real domain
understanding.

**Section 508** (`section508.gov`) is the federal accessibility standard, and it
incorporates WCAG 2.0 AA by reference. It is also where the **VPAT** comes from —
the Voluntary Product Accessibility Template, which is our Assignment 9
deliverable. Get the current VPAT template from the ITI
(`itic.org/policy/accessibility/vpat`) rather than writing one from scratch.

**42 CFR Part 2** is worth one sentence of awareness: substance-use-disorder
records get protection stricter than HIPAA. It matters here because stimulant
treatment records can intersect with it, and because a caregiver-visibility
feature is exactly where consent boundaries get complicated.

---

## 5. Interoperability: FHIR and US Core

Modeling our data on real standards costs little now and makes the data model
defensible.

- **HL7 FHIR R4** (`hl7.org/fhir/R4/`) is the current interoperability standard.
- **US Core Implementation Guide** (`hl7.org/fhir/us/core/`) profiles FHIR for
  US realities and is what ONC certification requires.
- **USCDI** is the required minimum data set — the floor for what a health app
  should be able to represent.

The resources that map to our features:

| Our feature | FHIR resource |
|---|---|
| Medication list | `MedicationRequest`, `MedicationStatement` |
| "Taken / skipped / due" | `MedicationAdministration` |
| Appointments | `Appointment`, `Encounter` |
| Patient profile | `Patient` |
| Caregiver relationship | `RelatedPerson`, `CareTeam` |
| Daily tasks | `Task`, `CarePlan` |

Note that FHIR already distinguishes *requested*, *stated*, and *administered*
medication — the same taken/skipped/due/unknown distinction the safety section
argues for. That is a good sign our model is right.

- **Synthea** (`synthetichealth.github.io/synthea/`) generates synthetic FHIR
  patient records. Use it for realistic test data with zero PHI risk.
- **SMART on FHIR** (`smarthealthit.org`) is the app-authorization layer, and
  their sandbox lets you develop against a real FHIR server with fake patients.

We do not have to *implement* FHIR. Naming our fields after FHIR fields, and
saying in the requirements document that the model follows US Core, is most of
the benefit.

---

## 6. The caregiver half

Half our users are caregivers, and caregiver research is a distinct literature.

- **AARP / National Alliance for Caregiving, "Caregiving in the US"** — the
  standing demographic study. Cite it for who caregivers actually are.
- **Family Caregiver Alliance** (`caregiver.org`) — practical material on
  caregiver burden.

The design tension to name explicitly in our requirements document: **caregiver
visibility versus patient autonomy**. Adults with ADHD are adults. A dashboard
showing everything a person did and did not do is surveillance if the patient
did not choose it. Our proposal already handles this well — "the patient can see
exactly what the caregiver can see" — and that acceptance criterion is worth
calling out as an ethical design decision, not an afterthought.
