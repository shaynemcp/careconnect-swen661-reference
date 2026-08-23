# Security Policy — CareConnect (SWEN 661, Team E-Echo)

CareConnect is a course project. Nothing in this repository is a real medical
record, and nothing here is cleared to hold one. That constraint is the
foundation of every rule below.

## The one rule that matters most: no real health data, ever

**Never commit, paste, screenshot, or type real protected health information
(PHI) into this repository, its issues, its pull requests, or any AI tool
pointed at it.** That includes your own.

PHI is broader than most people expect. Under the HIPAA Privacy Rule it covers
18 identifiers, including name, dates more precise than a year, phone numbers,
email addresses, medical record numbers, and photographs — when tied to health
information. A screenshot of a real pharmacy app, pasted into an issue to show a
layout idea, is a PHI disclosure.

What to use instead:

- The synthetic fixtures in `packages/mock-data`.
- [Synthea](https://synthetichealth.github.io/synthea/) if you need volume or
  realistic clinical variety. It generates statistically realistic patient
  records that contain no real person.
- Invented names, `example.com` email addresses, and `(202) 555-01xx` phone
  numbers, which are reserved for fiction.

If real PHI does land in the repo, treat it as an incident: tell the Technical
Lead immediately, do not simply push a follow-up commit that deletes it. Git
history keeps it. The file has to be purged from history and any exposed
credential rotated.

## Reporting a vulnerability

Report privately to the Technical Lead on rotation (see `docs/team-charter.md`),
via Teams DM — not a public issue. For a course project, "privately" is mostly
about practice, but the habit is the point: public issues are how real
vulnerabilities get exploited before they get fixed.

## Secrets

- `.env` is gitignored and must stay that way. `.env.example` is the only
  environment file that is ever committed, and it holds key *names*, never values.
- Anything prefixed `VITE_` is compiled into the browser bundle and is public by
  definition. Never put a secret behind a `VITE_` prefix.
- `ANTHROPIC_API_KEY` is server-side only — it belongs to the Supabase edge
  function and must never reach the client.
- The Supabase anon key is public by design, but it is only safe if Row-Level
  Security is enabled on every table. An anon key against an unprotected table is
  a full database leak.
- GitHub secret scanning and push protection are enabled on this repository. If
  push protection blocks your push, do not bypass it — rotate the key.

## Branch and merge rules

`main` is protected by the `main-protection` ruleset (mirrored in
`.github/ruleset-main.json`):

- No force pushes, no branch deletion, linear history only.
- Pull request required, one approving review, squash merge only.
- Review conversations must be resolved before merge.
- `Lint · Typecheck · Test · Build` and `Accessibility (axe + Lighthouse)` must
  pass, and the branch must be up to date with `main`.

Nobody merges their own unreviewed work, including the Technical Lead.

## Dependencies

- Dependabot alerts and security updates are enabled; updates arrive weekly and
  grouped so they never bury the team's own pull requests.
- `dependency-review` blocks any pull request that introduces a dependency with a
  known moderate-or-higher vulnerability.
- CodeQL runs on every pull request and weekly.
- `package-lock.json` is committed and CI uses `npm ci`. Never commit a
  lockfile-free install, and never hand-edit the lockfile.

## Electron rules (Assignment 8)

Electron is the highest-risk surface in this project, because a misconfigured
Electron app gives web content access to the user's filesystem. These are
non-negotiable in review:

- `contextIsolation: true` and `nodeIntegration: false` on every `BrowserWindow`.
- `sandbox: true` unless there is a written reason not to.
- All main-process capability exposed through a narrow, allowlisted `preload`
  bridge via `contextBridge` — never expose `ipcRenderer` wholesale.
- Validate every IPC argument in the main process. Treat the renderer as hostile.
- A Content Security Policy that forbids inline script and restricts connections
  to known origins.
- Block navigation and new-window requests to external origins
  (`will-navigate`, `setWindowOpenHandler`).
- Load only local content. Never `loadURL` a remote origin into a window that has
  preload privileges.

## Data at rest

Anything cached for the offline PWA requirement, or persisted by the desktop
build, is medication and appointment data. Even synthetic, treat it as
sensitive: no logging of record contents to the console in production builds, no
third-party analytics, and no telemetry that leaves the device.
