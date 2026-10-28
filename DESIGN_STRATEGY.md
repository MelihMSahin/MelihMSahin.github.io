# Design Strategy

**Project:** Melih Sahin personal portfolio  
**Status:** Governing framework defined; visual and interaction specifications are not yet approved.
**Owner:** Mehmet Melih Sahin  
**Updated:** 2026-10-28

## Purpose

This document defines how the site's design will be researched, decided, documented, tested, and handed off. It is the process and governance guide, not the finished visual design. Do not treat prototype colors, dimensions, or layouts as approved specifications.

The goal is a consistent, polished, clean, mobile-first portfolio that gives engineering recruiters a clear first impression and lets interested visitors explore verified work and life details at their own depth. The design should have enough personality to feel like Melih, without obscuring the work or becoming a LinkedIn replica.

Every future design choice must be traceable from the user need and requirement it serves, through its owner-approved decision and rationale, to the authoritative specification, validation evidence, and implementation.

## Method

Use the Design Council's **Double Diamond** to organize the work, with human-centered design and iterative prototyping throughout:

1. **Discover:** Understand audiences, their tasks, the available content, and design risks before deciding on a solution.
2. **Define:** Agree on the experience goals, content hierarchy, constraints, and acceptance criteria.
3. **Develop:** Explore and prototype multiple structural and visual solutions. Test them against the same content and tasks.
4. **Deliver:** Refine the chosen direction, document the complete system, test it at target viewports, and approve it before product implementation.

Apply the Double Diamond **recursively**: each phase in the [Design Work Plan](#design-work-plan) is worked as a series of small rounds of the [Decision Loop](#the-decision-loop), each of which discovers, defines, develops, and delivers a few decisions and then feeds what it learned back into the register. Do not use the Double Diamond as a rigid waterfall. Test early, revisit assumptions when evidence disagrees, and record why decisions change. Existing HTML files are experiments, not production implementation or approved design.

### Reference Guides

Use these references for process, documentation, and quality standards. They inform the method; they do not prescribe the portfolio's visual identity.

- [Design Council: The Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/) — structure discovery, definition, exploration, and delivery.
- [Material Design 3](https://m3.material.io/) — reference for documenting design foundations, components, tokens, and adaptive behavior. Do not copy its visual style by default.
- [GOV.UK Design System](https://design-system.service.gov.uk/) — reference for clear component guidance, content clarity, and accessibility considerations. Do not copy its visual style by default.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — accessibility conformance target: WCAG 2.2 AA, unless a stricter applicable requirement is identified.

## Decision Governance

The project owner is the final decision-maker. Research, prototypes, and recommendations support decisions but do not approve them. A choice becomes `Committed` only when the owner explicitly agrees to it after its review gate is met. Until then, it must remain visibly open or under test. Do not imply agreement by treating a prototype, assistant recommendation, or implementation experiment as a specification.

### What Is Being Recorded

Distinguish these records so that a proposal cannot quietly become a rule:

- **Constraint:** An approved requirement or boundary inherited from a project source, such as first-release scope, privacy, or accessibility. Cite its source; change it through that source's own review, not by changing a design decision.
- **Decision:** A choice between viable approaches that affects the experience or its implementation. Record it in the decision register.
- **Assumption / hypothesis:** An unverified belief about a visitor, content, or design. State how it could be checked; do not present it as a fact.
- **Experiment:** A bounded prototype or test of one or more hypotheses. Label it as experimental and record what it can and cannot establish.

### Status Lifecycle

- **`Open`:** No option has been approved. Options and missing evidence may be listed.
- **`Under test`:** One or more options are being evaluated. Record the question, prototype or method, and evidence needed to decide.
- **`Inconclusive`:** A round tested the decision but the evidence was not enough to commit. Record what was learned, what is missing, and the later round (in the same phase) that will retry it.
- **`Deferred to end of phase`:** The owner deliberately parked the decision within the current phase, usually because it depends on, or is best judged alongside, decisions still to be made. Revisit it in the phase's closing round. If it is still unresolved there, it may be handed to development **only with explicit owner confirmation**, recorded with the owner, consequence, and next action; otherwise it blocks the phase exit.
- **`Committed`:** The owner approved a specific choice and its scope. Record the approval and the evidence or rationale supporting it.
- **`Superseded`:** A previously committed choice has been replaced. Preserve its record and link the replacement; do not erase decision history.

An open choice may move directly to `Committed` only when its review gate is satisfied and the owner approves it. A test may inform a decision but cannot approve it. Reopen a committed decision when its assumptions, requirements, evidence, or implementation context materially change.

### Decision Record

The [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) register is the authoritative status record for current commitments, concepts under test, and open decisions. Add each new material decision there before it is treated as committed; migrate any newly discovered interim direction with its source and status. Use one stable record per material choice, with this template:

```text
ID:
Title:
Category: Constraint | Decision | Assumption | Experiment
Status: Open | Under test | Inconclusive | Deferred to end of phase | Committed | Superseded
Phase / round(s):
Parent / child records (child decisions that support or help conclude this one):
Discovered from (round, test, or record that raised it):
Question / decision statement:
Current choice (leave unset until committed):
Preferred direction (owner leaning, uncommitted; clearly labelled when used as a prototype input):
Outcome of latest round (committed / inconclusive and what is missing / deferred and why):
User need and linked requirement(s):
Options considered, including rejected options:
Evidence and its source; limitations or uncertainty:
Rationale and trade-offs:
Scope: pages, content, components, viewport ranges, states, and exclusions
Accessibility, responsive, and content implications:
Dependencies and affected records:
Owner / approver:
Created / last reviewed / approved:
Review trigger or next action:
Links to specification, prototype, and test results:
Change history: what changed, when, and why
```

Use stable IDs (for example, `DS-IA-001` or `DS-VIS-001`) and link decisions to their source requirements and any downstream decisions. Keep detailed normative rules in the relevant specification, not duplicated in the log; the register records the choice, rationale, status, and traceable destination. A decision that applies only to one page or state must say so. Exceptions to a global rule need their own scope and rationale.

### Collaborative Decision Practice

Resolve open design questions collaboratively, one material decision at a time. For each, make the question explicit, identify constraints, compare a small set of plausible options against shared criteria, and explain evidence and trade-offs. Ask for owner input where the choice is subjective or meaningfully affects the experience. Record only agreed choices as committed. If evidence is insufficient, keep the item `Open` or `Under test` and state the next useful step.

When a committed decision changes, create or update the linked record, preserve the prior choice as `Superseded` where applicable, and update every affected authoritative specification in the same change. Search for and resolve contradictions instead of retaining obsolete values as active guidance.

## Current Decision State

The authoritative record of committed requirements, approved decisions, concepts under test, and open questions is [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md). Do not duplicate decision status or rationale here. Current work should proceed from its open records and respect the phase gates below. In particular, the overworld remains a concept under test rather than an approved layout or interaction.

Do not resolve open questions by adding more features. Prototype the smallest representative flow that can answer each question, as part of an owner-approved round of the [Decision Loop](#the-decision-loop).

## Design Principles

1. **Clarity before novelty.** A visitor should understand where they are, what an item represents, and how to continue without learning unfamiliar controls.
2. **Scannable before exhaustive.** Titles, dates, roles, and project names are visible at the appropriate overview level. Long explanations are reserved for intentional depth.
3. **Evidence before claims.** Visual emphasis and content hierarchy must reflect verified evidence. Do not imply production use, measured impact, or individual ownership that sources do not support.
4. **Progressive depth, preserved context.** Let visitors move from an overview to a milestone and then to its story. Keep orientation, backtracking, and the route to other milestones obvious.
5. **Mobile-first, not mobile-only.** Begin with a narrow phone view, then design a composed desktop layout that uses its width deliberately. Each layout may have different arrangements while retaining the same hierarchy and identity.
6. **Personality with purpose.** Use bold graphic language to express curiosity and playfulness, while keeping typography, contrast, and content appropriate for a professional portfolio.
7. **Consistency over one-off decoration.** Reuse named tokens, layout rules, interaction patterns, and components. Exceptions must have a reason.
8. **Accessible by default.** Do not make timeline meaning or navigation depend only on color, pointer gestures, animation, or spatial position.
9. **Honest motion and feedback.** Movement should help users understand navigation or state. Respect reduced-motion settings and provide non-animated alternatives.
10. **Real content drives design.** Validate the layouts with the agreed milestones and story candidates, not lorem ipsum or an artificially empty map.

## The Decision Loop

Decisions are settled by repeating one loop, a **round**, until the register is complete. Every phase below is worked as a series of rounds. Each round is explicitly approved by the owner before prototyping starts.

1. **Select.** Choose 1–3 related, foundational decisions for the round. A decision is eligible when it is `Open`, `Inconclusive`, or `Deferred to end of phase` and its dependencies are `Committed` (or are included in the same round as children). Prefer the decision with the most downstream dependants, then the most independent one. Record the round in the round log in [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md).
2. **Frame.** For each selected decision state the question, binding constraints, shared evaluation criteria and tasks, real content, and what evidence would be enough to decide.
3. **Prototype.** Build one shared prototype set for the round in `prototypes/R<nn>-<slug>/`. Build it from committed decisions, plus owner *preferred directions* where needed (labelled as uncommitted). Vary only the selected decisions across options, and use the smallest representative flow that answers the questions. Label it experimental and record what it cannot establish; automated checks are not usability evidence.
4. **Evaluate.** Compare the options against the shared criteria: task success, scanning and orientation, keyboard and non-spatial route, responsive fit, accessibility, evidence integrity, and personality. Record observations separately from owner preference and from recommendations.
5. **Resolve.** The owner decides for each selected decision:
   - **Committed:** record the choice, scope, and rationale.
   - **Inconclusive:** record what is missing and the later round in the same phase that retries it.
   - **Deferred to end of phase:** record why, and revisit in the phase's closing round. If still unresolved then, hand-off to development needs explicit owner confirmation.
6. **Harvest.** Whatever the outcome, use the feedback and results to find further decisions the project needs: new records, or **child records** that support or help conclude a parent. Also reopen or supersede any committed record whose assumption the evidence challenges. Check coverage against the [design-system checklist](#design-system-specification-checklist) and [MOSCOW.md](MOSCOW.md) so the register stays as comprehensive as possible. Add new records as `Open` with a `Discovered from` reference.
7. **Update and repeat.** In one change, update the register, status summary, dependency links, round log, and any affected authoritative document, then return to step 1 and pick the next most foundational or independent decision.

A phase ends when its exit check (the review gate below) is met and no `Inconclusive` or `Deferred to end of phase` record remains without an owner-confirmed hand-off. Harvest may reopen an earlier phase.

## Design Work Plan

Use the phases to organize work, not as a one-way waterfall. Each phase runs the [Decision Loop](#the-decision-loop) for the decisions that belong to it; its **review gate** is the phase exit check, not an automatic approval. Do not proceed to high-fidelity visual specification until the preceding content and interaction decisions are stable enough to test. If evidence later challenges a premise, reopen the relevant earlier work and record why. Phases whose decisions are already committed in the register need only a short closing round to harvest gaps.

### Phase 1: Design Brief and Success Measures

**Work:** Confirm the audience, top visitor tasks, design principles, public/private content boundary, constraints, and first-release scope against `PROJECT_BRIEF.md`, `MOSCOW.md`, and `CONTENT_INVENTORY.md`. Separate agreed requirements from unresolved product and design questions. Define how each success criterion will be observed before evaluating concepts.

**Deliverables:** This strategy; a concise design brief; a traceable requirement and constraint list; measurable evaluation criteria for first impression, scanning, deeper exploration, contact/CV discovery, responsive use, and accessibility.

**Review gate:** The owner confirms the primary recruiter task, secondary exploratory task, privacy boundary, and first-screen communication goals. Every first-release Must Have has an observable design criterion; no design direction is implied by an untested idea.

### Phase 2: Information Architecture and Story Hierarchy

**Work:** Map the homepage, timeline, project/story pages, personal context, CV, and contact. Assign each approved content item a location, prominence, and depth; distinguish launch content from optional and excluded content. Define the relationships among lands, structures, rooms, stories, and supporting activities without assuming the metaphor must be literal.

**Deliverables:** Sitemap; content-to-page and requirement-to-location matrices; timeline hierarchy; story-selection and content-provenance notes; entry, exit, and return paths for key visitor tasks.

**Review gate:** Every Must Have has a clear home; all seven agreed initial timeline milestones and their dates are scannable; deeper content is reachable without crowding the overview; public claims and private information follow the content rules.

### Phase 3: Interaction Models and Low-Fidelity Layouts

**Work:** Compare a small number of structural alternatives using the same real content and task scenarios. At minimum, test the overworld concept against one simpler fallback, such as a chapter-based timeline. Cover phone and desktop compositions and the important states and transitions. Define how visitors navigate, select, enter, leave, revisit, and recover from a deep link or browser back action where applicable.

**Deliverables:** Clearly labeled low-fidelity wireframes or functional prototypes; user flows; page and interaction/state inventory; responsive sketches; comparison of options against the agreed criteria; a list of hypotheses and test outcomes.

**Review gate:** Visitors can orient themselves and complete the priority tasks without unexplained controls; dates and titles remain available at the overview; a non-spatial, non-gesture route exists for meaningful timeline content. The owner approves the structural model before it is treated as committed.

### Phase 4: Visual Foundations

**Work:** Establish the visual identity and foundations for the chosen structure: palette and semantic color roles, typography, spacing and sizing, grid and containers, shapes and depth, iconography and illustration, imagery, and motion. Define which visual cues express hierarchy, selection, chronology, and interaction. Check font and asset licensing and accessibility implications before approval.

**Deliverables:** Compared and owner-approved visual direction; semantic token proposals; typography, spacing, sizing, and layout scales; asset and illustration guidance; documented contrast pairings and accessibility review. Mark all unapproved values as proposals, not global rules.

**Review gate:** The same design language works across homepage, timeline, and story views; the hierarchy is clear without relying on color alone; contrast and text remain usable at target sizes; assets are appropriate and permitted; global values have semantic names, rationale, and explicit scope.

### Phase 5: Responsive Composition and Components

**Work:** Specify each page and reusable component at narrow phone, reference phone, large phone, tablet, and desktop sizes. Define content reflow, navigation, layout changes, and every applicable state, including default, hover, active, focus-visible, selected, expanded/collapsed, disabled, loading, error, and reduced-motion behavior. Include keyboard, touch, zoom, text enlargement, and orientation behavior.

**Deliverables:** Responsive page specifications; component inventory and usage rules; annotated behavior/state and keyboard details; content and media rules; breakpoint rationale based on observed layout needs rather than named devices.

**Review gate:** Wide screens are composed intentionally; supported narrow screens have no lost or clipped content; every interactive element has a clear keyboard and touch path; state changes and focus remain perceivable; motion preferences are respected.

### Phase 6: Validation and Design Sign-Off

**Work:** Test realistic content and priority tasks at representative viewport sizes using the agreed validation criteria. Review accessibility, readability, content overflow, orientation, navigation, interaction discoverability, media behavior, and consistency across views. Record findings, severity, evidence, owner, and resolution; retest fixes. Do not invent pass thresholds after seeing results.

**Deliverables:** Completed test matrix with methods and results; prioritized issue and exception log; retested approved prototypes; completed decision register; final design-system specification and implementation handoff.

**Review gate:** All Must Have and accessibility criteria pass. A failure blocks sign-off; it cannot be waived as a design exception. If a requirement itself must change, revise its authoritative source explicitly before sign-off. Implementation-blocking choices are committed; remaining non-blocking open choices name their owner, consequence, and next action. The prototypes, register, and specification agree before production implementation begins.

## Source-of-Truth Artifacts

Use one authoritative home for each kind of information. Link sources rather than copy their contents into multiple active specifications.

| Artifact | Authority and contents | Timing |
| --- | --- | --- |
| `README.md` | Repository orientation and links to planning documents; not a detailed source for design values or verified career facts. | Existing |
| `PROJECT_BRIEF.md` | Product vision, audience, positioning, constraints, and product-level decisions/questions. | Existing |
| `MOSCOW.md` | Agreed first-release priorities, launch boundary, and completion check. | Existing |
| `CONTENT_INVENTORY.md` | Candidate/approved public content, factual sources, claim limits, privacy boundary, and content-specific decisions. Follow its status labels; a draft is not approved copy. | Existing |
| `DESIGN_STRATEGY.md` (this file) | Design method, principles, governance, phase sequence, criteria, and artifact responsibilities. It does not approve visual values or replace product/content requirements. | Existing; governing framework |
| `DESIGN_DECISIONS.md` | Authoritative traceable decision register: options, status, rationale, evidence, scope, approval, and change history. Detailed normative specifications live elsewhere. | Existing; update with each material decision |
| Approved prototypes and test records | Dated, labeled evidence for a specific experiment or approved direction; each is linked from relevant decision records. Experiments are never specifications by implication. | As needed during exploration and validation |
| `DESIGN_SYSTEM.md` | Normative, implementation-ready rules for approved foundations, layouts, components, responsive behavior, interactions/states, media, and accessibility. | Create after the structural and visual foundations are approved |
| Implementation tokens | Runtime canonical values consumed by the site, using the repository's chosen implementation pattern. Their documented names and meaning must match `DESIGN_SYSTEM.md`. | During production implementation |

The source documents retain separate responsibilities: use `MOSCOW.md` for what ships first, `PROJECT_BRIEF.md` for why the product exists and whom it serves, and `CONTENT_INVENTORY.md` for content evidence and publication boundaries. Where a launch-priority question is concerned, the finalized MoSCoW scope governs release inclusion; it does not silently rewrite the broader product vision. A conflict in factual content must be resolved against authoritative evidence and documented in the inventory before the design treats it as settled.

No color, font, spacing, breakpoint, image ratio, component size, or interaction behavior becomes a project-wide rule until it is owner-approved, recorded, and assigned an explicit scope. Use semantic names such as `--color-surface` or `--space-section`, not unexplained one-off values. During implementation, update the design-system specification and consumed values together; do not create a second informal token source.

## Design-System Specification Checklist

The future design system must be exhaustive enough to implement without inventing design choices. For each applicable item, record the approved rule/value, purpose, scope, exceptions, responsive behavior, interaction states, accessibility implications, and links to its decision and validation evidence. Mark non-applicable items as such with a reason rather than leaving unexplained gaps.

### Foundations

- **Color:** Brand palette and semantic roles for background, surface, text, muted text, accent, borders, focus, and status. Include exact values, contrast pairings, and where each token may be used.
- **Typography:** Font families and licensed sources, fallbacks, roles, weights, sizes, line heights, and use cases. Define display, heading, body, label, metadata, and long-form reading styles. Do not use viewport-width font scaling.
- **Spacing and sizing:** Named spacing scale; content widths; section spacing; padding; gaps; minimum touch target; and rules for fixed versus fluid dimensions.
- **Grid and breakpoints:** Container rules, columns, gutters, and breakpoint behavior based on where content stops working. Record the tested viewport matrix separately from breakpoint thresholds.
- **Shape and depth:** Border widths, radii, outlines, shadows, and when each is appropriate.
- **Motion:** Duration, easing, purpose, interruption, and reduced-motion behavior.
- **Icons and illustration:** Style, source, size, alignment, stroke/fill, and rules for custom map landmarks.
- **Brand expression:** Approved name/wordmark use, graphic motifs, tone of visual personality, and rules that keep the professional content primary.

### Layouts and Components

- Page hierarchy and navigation, including mobile and desktop compositions.
- Homepage content blocks, order, density, spacing, and call-to-action priority.
- Overworld regions, milestone structures, detail rooms, labels, connections, and location rules.
- Timeline overview and detail levels; chronology and orientation; selection, navigation, zoom or level changes; state persistence; and equivalent non-gesture/non-spatial alternatives.
- Story and project layouts, including STAR content order and metadata.
- Buttons, links, tabs, menus, chips, panels, tags, and other controls: semantics, usage, sizing, hierarchy, and all interaction states.
- Page transitions, browser history/deep links, backtracking, focus restoration, and selected-state behavior where relevant.
- Empty, loading, error, unavailable-content, and long-content states where relevant.
- Content hierarchy and editorial rules: title/summary limits, date and metadata formats, heading structure, link wording, and rules for highlighting verified versus developing experience.

### Imagery and Media

- Define aspect ratios per media role (for example project screenshot, portrait, or map illustration); do not force one ratio on unrelated content.
- Specify responsive sizing, crop behavior, focal-point rules, background/foreground treatment, and any art direction by viewport.
- Record file formats, resolution expectations, compression, alt-text rules, captions, and decorative-image handling.
- Specify responsive source and crop behavior and fallback handling when an asset cannot load.
- Use real project imagery or purpose-made visuals when it helps inspect actual work. Do not use decorative imagery to obscure or substitute for project evidence.

### Accessibility and Content Fit

- Target WCAG 2.2 AA; document contrast checks and failures. Accessibility failures block sign-off and are not design exceptions.
- All functionality is available by keyboard; focus is visible and follows a sensible order.
- Meaning is not conveyed by color alone. Interactive map objects have text alternatives and a non-spatial navigation path.
- Controls are comfortably touchable; labels and text do not overlap, clip, or overflow at supported sizes.
- Support zoom, text enlargement, reduced motion, and narrow viewport widths without loss of content or functionality.
- Define semantic structure and accessible names, announced state changes, focus order/visibility/return, and screen-reader alternatives for spatial or illustrated navigation.
- Define plain-language conventions, heading order, link wording, dates, and content limits for labels and summaries.
- Include manual keyboard and assistive-technology checks alongside automated checks; automated results alone do not establish conformance.

### Cross-Cutting Rules

- **Consistency:** Define when patterns must be reused and how a justified exception is proposed, scoped, and recorded.
- **Content fit:** Validate rules using the longest and most complex real labels, stories, dates, and media—not only ideal short examples.
- **Privacy and evidence:** Ensure visual emphasis, metadata, downloadable files, and outbound links do not expose prohibited personal details or strengthen claims beyond their evidence.
- **Performance and resilience:** Set media-weight and loading expectations appropriate to the static-site experience; specify behavior when fonts, images, or optional enhancements are unavailable.
- **Implementation handoff:** Map each approved design rule to a component, token, content model, or explicit implementation note. Identify any intentional design/implementation constraints and unresolved risks.

## Validation Matrix

These are initial test viewports, not fixed-device breakpoints. Add or adjust sizes when layout evidence requires it.

| Context | Reference viewport | Primary checks |
| --- | --- | --- |
| Narrow phone | 320 CSS px wide | No horizontal overflow; labels wrap or reflow; controls and content remain usable |
| Phone baseline | 390 CSS px wide | First-screen hierarchy; milestone scanning; touch comfort; detail entry |
| Large phone | 430 CSS px wide | Fluid spacing and labels; no awkward scaling or collisions |
| Tablet | 768 CSS px wide | Transition between stacked and composed layouts; map and details remain balanced |
| Small desktop | 1024 CSS px wide | Useful side content; navigation and layout do not feel stretched |
| Wide desktop | 1440 CSS px wide | Intentional whitespace; readable line lengths; no oversized map labels or empty side gutters |

Run task-based checks at each relevant size:

1. Identify Melih's three engineering directions from the first screen.
2. Find each of the seven initial timeline milestones and understand its date.
3. Open a milestone, understand Melih's contribution and learning in its deeper story, then return without losing orientation.
4. Find the CV and professional contact path.
5. Complete the same tasks with keyboard only and with reduced motion enabled.

## Exit Criteria Before Production Implementation

- The sitemap, key user flows, timeline hierarchy, and phone/desktop layouts are approved.
- The visual system documents every global color, type, spacing, sizing, layout, image-ratio, shape, and motion rule needed for the first release.
- All interactive patterns have responsive, keyboard, touch, focus, and reduced-motion behavior documented.
- The selected direction passes the validation matrix and does not rely on unexplained gestures.
- Design decisions are marked `Committed`; remaining `Open` items are explicitly listed with owner and consequence.
- `DESIGN_SYSTEM.md` and the approved prototypes agree; implementation can proceed without inventing design values.
- Every global design rule and every permitted exception can be traced to an approved decision record; experiments are clearly distinguished from specifications.
- The source documents, decision register, approved prototypes, design system, and implementation tokens have no unresolved contradictions.
