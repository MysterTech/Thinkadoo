# Thinkadoo concept-review gate profile

Status: approved by the user in this chat. Scope: four disposable HTML design concepts, not the production frontend. Updated: 28 September 2026.

## Authority and environment

The user requires this profile before the first implementer runs. The referenced ~/.Codex/workflows/two-agent-swe-workflow.md is absent. The portable core was found and read at /Users/thunderstruck/.claude/workflows/two-agent-swe-workflow.md.

The workspace initially contained only empty docs/ and frontend/ directories and .DS_Store. There is no package manifest, existing test suite, Git repository or application. Node v26.8.1 and Python 3.9.6 are installed. All planning and design artifacts belong in docs/. Reserve frontend/ for the selected production implementation.

## Roles and scope

Controller: writes the contract first, runs the local server and browser checks, and assembles the comparison board. Scoped implementers each own a single HTML concept. An independent reviewer checks the concepts against the same contract. Implementers and reviewers do not create commits, start servers, publish, install packages, or connect payments. The core's historical model names are unavailable; use inherited available models.

These are reversible design prototypes. No production service, payment integration, backend, or architecture is being implemented. Behaviour is local and explicitly identified as a preview. Static audits and meaningful browser interaction checks apply; no implementation-mirroring unit tests for appearance.

## Exercised gates

- Subagent and controller command, from project root: `node docs/concepts/verify.mjs`. Executed before recording: exits 1 with the four expected missing-concept findings. The runner validates inline JavaScript syntax, language/viewport/landmarks, anchors, reduced-motion/focus support, and the absence of a live payment SDK. Final result must pass with all four files present. Missing peer files during parallel work are expected and must be reported, never called a pass.
- Controller preview command: `python3 -m http.server 4173 --bind 127.0.0.1`, from project root. Re-exercised this session: sandbox binding failed; approved escalation succeeded, session 92498, process 44169. Do not replace unrelated servers.
- The in-app browser through cua_repl is the UI verification surface. Navigation and accessibility readback have been exercised. A sandboxed curl attempt could not reach the server; curl is not a gate.

## Visual and interaction verification

Check each concept at desktop 1440×1000 and mobile 390×844; additionally check for horizontal overflow at 360px. Check working navigation, kit preview, workshop selection, dialog closing and keyboard focus. Check reduced-motion CSS and expose a user motion toggle where sustained animation exists. Content remains readable without animation. Do not submit any external payment, message or booking.

The source brief is docs/design/website-concepts.md. There is no approved visual mockup: the old concept is rejected. Visual review assesses the written direction, distinctiveness, responsiveness and polish; pixel fidelity to an approved mockup is N/A. Do not mutate concepts during a capture batch. Reload pages to reset their local state. No seed database is involved.

Run directory: /private/tmp/thinkadoo-concepts-review. Capture review screenshots and scoped file diffs there. QA record: docs/qa/concepts-review.md. WIP refs and commits are N/A while the workspace is not a Git repository; do not initialize Git merely for concept exploration. Documentation and prototypes remain local. No deployment is requested.
