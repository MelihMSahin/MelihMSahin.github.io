# Design Strategy

**Project:** Melih Sahin personal portfolio  
**Status:** Working strategy; visual specifications are not yet approved.  
**Owner:** Mehmet Melih Sahin  
**Updated:** 2026-10-21

## Purpose

This document defines how the site's design will be researched, decided, documented, tested, and handed off. It is the process and governance guide, not the finished visual design. Do not treat prototype colors, dimensions, or layouts as approved specifications.

The goal is a consistent, polished, clean, mobile-first portfolio that gives engineering recruiters a clear first impression and lets interested visitors explore verified work and life details at their own depth. The design should have enough personality to feel like Melih, without obscuring the work or becoming a LinkedIn replica.

## Method

Use the Design Council's **Double Diamond** to organize the work, with human-centered design and iterative prototyping throughout:

1. **Discover:** Understand audiences, their tasks, the available content, and design risks before deciding on a solution.
2. **Define:** Agree on the experience goals, content hierarchy, constraints, and acceptance criteria.
3. **Develop:** Explore and prototype multiple structural and visual solutions. Test them against the same content and tasks.
4. **Deliver:** Refine the chosen direction, document the complete system, test it at target viewports, and approve it before product implementation.

Do not use the Double Diamond as a rigid waterfall. Test early, revisit assumptions when evidence disagrees, and record why decisions change. Existing HTML files are experiments, not production implementation or approved design.

### Reference Guides

Use these references for process, documentation, and quality standards. They inform the method; they do not prescribe the portfolio's visual identity.

- [Design Council: The Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/) — structure discovery, definition, exploration, and delivery.
- [Material Design 3](https://m3.material.io/) — reference for documenting design foundations, components, tokens, and adaptive behavior. Do not copy its visual style by default.
- [GOV.UK Design System](https://design-system.service.gov.uk/) — reference for clear component guidance, content clarity, and accessibility considerations. Do not copy its visual style by default.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — accessibility conformance target: WCAG 2.2 AA, unless a stricter applicable requirement is identified.

## Decision Governance

Every material design decision must be recorded with:

- **Status:** `Committed`, `Under test`, or `Open`.
- **Decision:** What is being chosen, in specific terms.
- **Rationale:** Which user need, requirement, evidence, or trade-off supports it.
- **Scope:** Which pages, components, breakpoints, or states it affects.
- **Review date:** When it was agreed or last reconsidered.

A prototype can demonstrate an idea but does not commit it. Promote a choice to `Committed` only after it meets the review gate for its phase. If evidence causes a committed choice to change, update the design source of truth and note the reason; do not leave contradictory values or obsolete directions in active specifications.

## Existing Direction

### Committed Constraints

- **Primary audience:** Engineering recruiters and hiring teams. They must quickly understand Melih's direction, inspect credible evidence, and find the CV or professional contact path.
- **Positioning:** System design, ML/AI systems engineering, and reliability/platform engineering. Present reliability/platform engineering as a growing interest, not proven impact.
- **Content depth:** The default experience is concise and scannable. Deeper material is intentionally available rather than forced into one long page.
- **Timeline scan:** The initial view includes seven agreed milestones and keeps titles and dates visible. Additional activities can appear in a supporting layer if they do not crowd that view.
- **Responsive approach:** Design for phone first, then compose a purposeful desktop experience. Do not merely enlarge or stretch the mobile column.
- **Accessibility:** Target WCAG 2.2 AA. Keyboard, touch, reduced motion, readable contrast, and non-visual access are design requirements, not post-design fixes.
- **Visual direction:** Bold, graphic, game-inspired is the chosen direction. The palette, typography, illustration language, and exact game influence remain open.

### Concept Under Test

Use an overworld as the timeline's organizing metaphor:

- Broad life chapters are **lands**.
- The 2016 move from Turkey to the UK may be a **starter circle** or other introductory marker rather than a full land.
- Dated milestones are **structures** within lands.
- Deeper stories and activities are **rooms** within structures.

This is a conceptual content hierarchy, not an approved map shape or interaction. The next design work must test whether it is understandable, scannable, and usable before committing to a literal map.

### Open Design Questions

- Is the overworld a navigable map, a chapter index with illustrated regions, or a hybrid of map and conventional page layout?
- How do visitors move between lands, structures, and rooms: scrolling, selection, expanding, panning, zooming, or a combination?
- Does a selected structure open a side panel, an in-world room, a dedicated page, or another treatment?
- What is the chronology direction and orientation? How does the starting point relate to the newest milestones?
- What fills desktop space while preserving a clear focal point? Candidate strategies include a detail panel, contextual navigation, or a deliberately wider map composition.
- How strong should game references be, and which parts should remain editorial and recruiter-focused?
- Which visual assets are needed, and should landmarks be custom illustrations, photographs, screenshots, or a restrained combination?

Do not resolve these questions by adding more features. Prototype the smallest representative flow that can answer each question.

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

## Design Work Plan

Each phase ends with a review gate. Do not proceed to high-fidelity visual specification until the preceding content and interaction decisions are stable enough to test.

### Phase 1: Design Brief and Success Measures

**Work:** Confirm the audience, top tasks, design principles, public/private content boundary, and constraints against `PROJECT_BRIEF.md`, `MOSCOW.md`, and `CONTENT_INVENTORY.md`.

**Deliverables:** This strategy; a concise design brief; measurable criteria for first impression, scanning, deeper exploration, and responsive use.

**Review gate:** Melih agrees on the top recruiter task, the secondary exploratory task, and what a successful first screen must communicate.

### Phase 2: Information Architecture and Story Hierarchy

**Work:** Map the homepage, timeline, project/story pages, about content, CV, and contact. Assign each inventory item a location and depth. Define how lands, structures, and rooms map to actual content.

**Deliverables:** Sitemap; content-to-page matrix; timeline hierarchy; entry/exit paths for the key visitor tasks.

**Review gate:** Every Must-have has a home, no critical fact is inaccessible, and the initial timeline remains concise with the seven agreed milestones visible.

### Phase 3: Interaction Models and Low-Fidelity Layouts

**Work:** Compare a small number of structural alternatives using the same content. At minimum, test the overworld concept against one simpler fallback, such as a chapter-based timeline. Draw phone and desktop layouts for the same key states. Define how to select, enter, leave, and revisit a structure or room.

**Deliverables:** Low-fidelity wireframes or functional HTML prototypes; user flows; interaction/state inventory; short comparison against agreed criteria.

**Review gate:** Choose a model that users can navigate without explanation, that preserves dates and titles at the overview, and that works without free panning or pinch gestures if those gestures prove confusing.

### Phase 4: Visual Foundations

**Work:** Establish a deliberate visual system for the chosen structure: palette, typography, spacing, grid, borders, shapes, map/region language, icon and illustration style, and motion principles.

**Deliverables:** Approved visual direction boards; semantic token table; typography and spacing scales; icon/illustration rules; accessibility review.

**Review gate:** The same design is recognizably consistent across homepage, timeline, and story views; contrast and type remain legible at target sizes; the visual system does not depend on one-off CSS values.

### Phase 5: Responsive Composition and Components

**Work:** Specify each page and reusable component at phone, tablet, and desktop sizes. Define all meaningful states: default, hover, focus, selected, expanded, disabled, and reduced motion where applicable.

**Deliverables:** Responsive page specifications; component inventory; annotated behavior/state details; image and media rules.

**Review gate:** The design uses wide screens intentionally, does not create dead space or cramped phone labels, and every interactive element has a clear keyboard and touch path.

### Phase 6: Validation and Design Sign-Off

**Work:** Test realistic content and tasks at representative viewport sizes. Review accessibility, readability, content overflow, orientation, navigation, and interaction discoverability. Record issues and retest fixes.

**Deliverables:** Test matrix; issue log; final approved prototypes; final design system and implementation handoff.

**Review gate:** All Must-have design criteria pass; open decisions that affect implementation are resolved or explicitly documented as acceptable risks. Only then begin production implementation.

## Source-of-Truth Artifacts

Keep decision-making and implementation values connected without maintaining two competing specifications.

- **`DESIGN_STRATEGY.md` (this file):** Process, principles, governance, phase gates, and known open design questions.
- **`DESIGN_SYSTEM.md` (to create after foundations are approved):** Human-readable specification for approved visual foundations, layout rules, components, responsive behavior, interaction states, imagery, and accessibility rules.
- **Design tokens in the implementation (to create during implementation):** Canonical values consumed by the site, initially CSS custom properties (for example in `src/styles/tokens.css`). `DESIGN_SYSTEM.md` documents token meaning and usage; it must not silently contradict the implemented values. Update the spec and tokens together when a value changes.
- **Approved wireframes/prototypes:** Named, dated artifacts linked from the design system. Label experiments clearly and retain the rationale for the selected option.

No color, font, spacing, breakpoint, image ratio, or component size becomes a project-wide rule until it is documented, reviewed, and assigned a clear scope. Use semantic names such as `--color-surface` or `--space-section`, not unexplained one-off values.

## Design-System Specification Checklist

The future design system should be exhaustive enough to implement without guessing. For each item, record approved values, purpose, scope, and responsive/state behavior.

### Foundations

- **Color:** Brand palette and semantic roles for background, surface, text, muted text, accent, borders, focus, and status. Include exact values, contrast pairings, and where each token may be used.
- **Typography:** Font families and licensed sources, fallbacks, roles, weights, sizes, line heights, and use cases. Define display, heading, body, label, metadata, and long-form reading styles. Do not use viewport-width font scaling.
- **Spacing and sizing:** Named spacing scale; content widths; section spacing; padding; gaps; minimum touch target; and rules for fixed versus fluid dimensions.
- **Grid and breakpoints:** Container rules, columns, gutters, and breakpoint behavior based on where content stops working. Record the tested viewport matrix separately from breakpoint thresholds.
- **Shape and depth:** Border widths, radii, outlines, shadows, and when each is appropriate.
- **Motion:** Duration, easing, purpose, interruption, and reduced-motion behavior.
- **Icons and illustration:** Style, source, size, alignment, stroke/fill, and rules for custom map landmarks.

### Layouts and Components

- Page hierarchy and navigation, including mobile and desktop compositions.
- Homepage content blocks, order, spacing, and call-to-action priority.
- Overworld regions, milestone structures, detail rooms, labels, connections, and location rules.
- Timeline zoom/selection/navigation controls and non-gesture alternatives.
- Story and project layouts, including STAR content order and metadata.
- Buttons, links, tabs, menus, chips, panels, tags, and their interaction states.
- Empty, loading, error, and unavailable-content states where relevant.

### Imagery and Media

- Define aspect ratios per media role (for example project screenshot, portrait, or map illustration); do not force one ratio on unrelated content.
- Specify responsive sizing, crop behavior, focal-point rules, background/foreground treatment, and any art direction by viewport.
- Record file formats, resolution expectations, compression, alt-text rules, captions, and decorative-image handling.
- Use real project imagery or purpose-made visuals when it helps inspect actual work. Do not use decorative imagery to obscure or substitute for project evidence.

### Accessibility and Content Fit

- Target WCAG 2.2 AA; document contrast checks and any exceptions before approval.
- All functionality is available by keyboard; focus is visible and follows a sensible order.
- Meaning is not conveyed by color alone. Interactive map objects have text alternatives and a non-spatial navigation path.
- Controls are comfortably touchable; labels and text do not overlap, clip, or overflow at supported sizes.
- Support zoom, text enlargement, reduced motion, and narrow viewport widths without loss of content or functionality.
- Define plain-language conventions, heading order, link wording, dates, and content limits for labels and summaries.

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
3. Open a milestone, reach its deeper story, and return without losing orientation.
4. Find the CV and professional contact path.
5. Complete the same tasks with keyboard only and with reduced motion enabled.

## Exit Criteria Before Production Implementation

- The sitemap, key user flows, timeline hierarchy, and phone/desktop layouts are approved.
- The visual system documents every global color, type, spacing, sizing, layout, image-ratio, shape, and motion rule needed for the first release.
- All interactive patterns have responsive, keyboard, touch, focus, and reduced-motion behavior documented.
- The selected direction passes the validation matrix and does not rely on unexplained gestures.
- Design decisions are marked `Committed`; remaining `Open` items are explicitly listed with owner and consequence.
- `DESIGN_SYSTEM.md` and the approved prototypes agree; implementation can proceed without inventing design values.
