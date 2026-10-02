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

## Second content-led set — 2 October2026

The user's new request preserves the earlier set and creates four new local concepts under docs/concepts-round2. Same approved roles, environment and safety boundary; source contract is docs/design/2026-10-02-four-new-concepts.md and source snapshot docs/research/2026-10-02-website-content.md. No additional permission gate is introduced.

The checker now accepts explicit file paths. Exercised command: `node docs/concepts/verify.mjs docs/concepts-round2/01-wonder-wheel.html docs/concepts-round2/02-little-big-studio.html docs/concepts-round2/03-storybook.html docs/concepts-round2/04-colour-parade.html`. Result before builders: four expected missing-file findings. Run the same command after all outputs are present. Environment re-exercised: the old listener was absent; sandbox bind failed; approved local server started successfully with the same command, session10801.

Second-set screenshots/diffs: /private/tmp/thinkadoo-round2-review. QA record: docs/qa/2026-10-02-new-concepts-review.md. Existing viewport gates plus product-content coverage, local cart states, Bookbinding preview and missing-data states apply. No source media exists in the new doc; animated illustrated storyboards must be disclosed.

## Motion-led third set — 2 October 2026

The same approved reversible exploration workflow applies to docs/concepts-motion/ and contract docs/design/2026-10-02-motion-concepts.md. Both source documents were freshly retrieved before this pass. Preserve all earlier sets and existing dirty files.

Exercised static gate before builders: `node docs/concepts/verify.mjs docs/concepts-motion/01-unbox.html docs/concepts-motion/02-type-play.html docs/concepts-motion/03-making-world.html docs/concepts-motion/04-print-club.html`. Four expected missing-file findings. Existing 4173 Python listener reused and navigation exercised successfully. The browser surface is Playwright (gstack attempted, unable to start without Bun), with controller-only wheel/hover/drag/readback/screenshots. Same viewport/flow gates apply with additional signature scroll and direct manipulation states. New shared JS syntax gate will be recorded only after first execution.

Run cache /private/tmp/thinkadoo-motion-review; QA record docs/qa/2026-10-02-motion-concepts.md. No mockup is approved; fidelity N/A, judge final craft and contract. Prototype local work remains uncommitted in this pass to preserve pre-existing dirty work and the exploration convention. Scoped diff snapshots are written outside the repo without staging, avoiding interference with user index state. No profile permission re-request: roles, reversibility and external-write boundary are unchanged.

Shared-code gate exercised after creation: `node --check docs/concepts-motion/shared.js` and `git diff --check`, both exit 0. Repeat when shared code changes or at the final gate. Board is checked separately via the same static HTML checker and browser actions.

Later user steering adds sixteen supporting route pages and names Playroom/Paper Theatre as positive taste references. This changes the on-disk contract before implementation. Supporting route infrastructure and cross-concept navigation are controller-owned integration work; existing concept owners remain responsible for their authored home worlds. Gates expand to direct URL, distinct href, active-page, back/forward, mobile fit and reduced-motion checks across all route pages. No deployment or production scope is added.

The content document is subsequently promoted from factual reference to exact customer-copy deck. The controller owns shared copy modules and the route renderer; home concept owners audit their own visible copy against the same on-disk source refresh. Interface labels and unavailable-state disclosures remain authored where the source supplies placeholders or no operational data. This is a contract correction, so it precedes the copy implementation pass.
