# ADR 0003 — Keep the team repository as a fork of the reference implementation

- **Status:** Proposed — for team decision at the Friday meeting
- **Date:** 2026-08-23
- **Deciders:** Shayne McPherson, Abel Tabor, Quinton Coleman
- **Proposed by:** Technical Lead (Weeks 1–2)

## Question

Do we keep working in `shaynemcp/careconnect-swen661-reference`, which is a
fork of the instructor's MIT-licensed reference implementation, or do we create
a standalone repository — optionally under a new `team-e-echo` GitHub
organization — and move there?

This came up because a fork has two default behaviours that a normal repository
does not, and both bit us this week.

## What we found

Forks disable Issues by default. Ours were off, which is why the project board
had nothing to track. That is now fixed — Issues are enabled.

Forks also had no branch protection, though that was not a fork problem. The
repo contained `.github/branch-protection.json`, which reads like protection but
is an inert file GitHub never applies on its own, and it named a status check
(`Web (React + Vite)`) that our CI has never produced. `main` was completely
open until 2026-08-23. A `main-protection` ruleset is now live and enforcing.

With both of those corrected, most of the original argument for moving is gone.

## Options

### A — Stay on the fork (recommended)

**For:**

- **The fork relationship is the attribution.** Our code derives from Dr.
  Minagar's reference implementation. GitHub's fork graph makes that lineage
  explicit, permanent, and impossible to misread. In a course where the
  instructor wrote the upstream, that is an academic-integrity asset, not a
  liability. A standalone repo with a copied history makes the same derivation
  look like something we tried to obscure.
- **Assignment 1 Part 4 is already satisfied.** It asks for a team repository
  with all members as collaborators, a README, `.gitignore` files, and a project
  structure. All three of us have write access today.
- **Everything works now.** Issues, rulesets, required reviews, CodeQL,
  Dependabot, and the project board are all live and enforcing on this repo.
  Migration buys us nothing we do not already have.
- **Reviewing and merging PRs inside a fork is normal.** There is no restriction
  on opening `branch → main` pull requests within our own fork, requiring
  approval, or blocking on CI. We are doing it right now.
- **Zero cost.** Moving in Week 2, with Assignment 2 due Tuesday, spends time we
  do not have on a problem we have already solved.

**Against — two residual risks, both cheaply mitigated:**

1. **The pull request base defaults to upstream.** When you open a PR from the
   GitHub web UI in a fork, the base repository dropdown defaults to
   `aliminagar/careconnect-swen661`, not ours. Merging is impossible there, so
   the failure mode is embarrassment, not damage — but it wastes review time.
   *Mitigation:* check the base repository dropdown every time, or use
   `gh pr create --base main` which targets our repo correctly by default.
2. **One personal account owns everything.** If Shayne's account is locked or he
   drops the course, the team's admin access goes with it.
   *Mitigation:* promote a second team member to admin this week. That removes
   the single point of failure without any migration.

### B — New repository under a `team-e-echo` organization

**For:** clean ownership shared across all three of us; no fork defaults; the
charter's role rotation could extend to real GitHub permissions.

**Against:** loses the visible attribution lineage; costs a migration in the week
Assignment 2 is due; and a **user-owned GitHub Project cannot be transferred to
an organization**, so our board would have to be rebuilt from scratch. GitHub
also has no API for creating an organization, so only Shayne can do it manually.

Worth being honest about one point: the rotation argument is weaker than it
first appears. Admin rights would not actually rotate every two weeks — the
charter rotates *responsibilities*, not repository permissions. Moving to an org
would not make the rotation more real.

## Recommendation

**Option A — stay on the fork**, with both mitigations applied this week:

1. Promote Abel or Quinton to repository admin.
2. Add a line to the pull request template reminding reviewers to confirm the
   base repository is ours.

Revisit only if the fork causes a concrete problem we cannot mitigate.

## Decision

*To be recorded at the Friday meeting per the charter's majority-vote rule.*

- [ ] A — stay on the fork
- [ ] B — move to a `team-e-echo` organization
