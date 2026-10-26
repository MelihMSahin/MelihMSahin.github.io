# Design Decisions

**Project:** Melih Sahin personal portfolio  
**Status:** Living decision register  
**Owner / approver:** Mehmet Melih Sahin  
**Updated:** 2026-10-22

This register is the source of truth for the status, rationale, scope, and history of material design decisions. Normative design rules belong in the relevant approved specification; product scope and requirements remain in [PROJECT_BRIEF.md](PROJECT_BRIEF.md) and [MOSCOW.md](MOSCOW.md); content evidence and publication rules remain in [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md). The process and record rules are in [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md).

`Committed` means the owner approved the specific choice and scope recorded here. A prototype or recommendation is not approval. Do not infer a value or behavior that is not explicitly stated in a committed record.

## Status Summary

| ID | Title | Category | Status |
| --- | --- | --- | --- |
| DS-REQ-001 | Audience, positioning scope, and evidence boundaries | Constraint | Committed |
| DS-REQ-002 | First-release content and timeline requirements | Constraint | Committed |
| DS-REQ-003 | Responsive and accessibility requirements | Constraint | Committed |
| DS-REQ-004 | Privacy and public-content requirements | Constraint | Committed |
| DS-POS-001 | ML/AI systems engineering leads recruiter-facing positioning | Decision | Superseded |
| DS-POS-002 | Evidence-first systems-design / applied AI-ML positioning | Decision | Committed |
| DS-RESP-001 | Mobile-first with purposeful desktop composition | Decision | Committed |
| DS-VIS-001 | Bold, graphic, game-inspired high-level direction | Decision | Committed |
| DS-TL-001 | Overworld as a candidate timeline metaphor | Experiment | Under test |
| DS-IA-001 | First-screen message frame | Decision | Committed |
| DS-IA-004 | First-screen evidence and supporting-strength hierarchy | Decision | Committed |
| DS-IA-005 | Primary and secondary homepage actions | Decision | Committed |
| DS-IA-006 | Selected work follows the first screen | Decision | Committed |
| DS-IA-002 | Homepage section order | Decision | Committed |
| DS-IA-003 | Initial target markets and employer context | Decision | Committed |
| DS-TL-002 | Timeline structure and navigation model | Decision | Open |
| DS-TL-003 | Timeline chronology and orientation | Decision | Open |
| DS-TL-004 | Milestone preview and full-story flow | Decision | Under test |
| DS-TL-005 | One chronological home with contextual cross-links | Decision | Committed |
| DS-TL-006 | Plain-language timeline chapter labels | Decision | Committed |
| DS-RWD-001 | Desktop composition and use of available space | Decision | Open |
| DS-VIS-002 | Game influence by experience depth | Decision | Committed |
| DS-VIS-003 | Palette, typography, and graphic/illustration system | Decision | Open |
| DS-VIS-004 | Literal atlas versus abstract graphic exploration language | Experiment | Under test |
| DS-MEDIA-001 | Project and timeline imagery strategy | Decision | Open |

## Committed Requirements and Decisions

### DS-REQ-001 — Audience, Positioning Scope, and Evidence Boundaries

- **Category / status:** Constraint / `Committed`
- **Requirement:** The primary audience is engineering recruiters and hiring teams. Represent system design, ML/AI systems engineering, and reliability/platform engineering. Describe reliability/platform engineering as a growing interest, not established impact or expertise.
- **Evidence boundary:** Distinguish Melih's contribution from team outcomes. Do not claim that he caused Sprift's downtime decrease or that the Globant prototype saved time or was used in production.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), “Purpose and Audiences”, “Positioning”; [MOSCOW.md](MOSCOW.md), Must Have and Won't Have; [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), story candidates and source conflicts.
- **Scope:** Site-wide positioning, content hierarchy, visual emphasis, and all public descriptions of engineering work.
- **Change rule:** A source-level change to audience or scope must be resolved in the source document first; factual claim changes must also be checked against the content evidence.

### DS-REQ-002 — First-Release Content and Timeline Requirements

- **Category / status:** Constraint / `Committed`
- **Requirement:** The first release includes a concise, scannable homepage; clear CV and professional-contact paths; selected verified engineering examples; and an initial timeline view that exposes the seven agreed milestones and dates. Supporting activities must not crowd the initial scan.
- **Timeline milestones:** Moved to the UK; Kingston Academy; Queen Mary degree; Globant internship; final-year project; Sprift unified API; current Deloitte role (title and start date only).
- **Scope:** First-release content inventory, homepage, project stories, and timeline overview and deeper levels.
- **Source:** [MOSCOW.md](MOSCOW.md), Must Have and Completion Check; [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), timeline content.
- **Change rule:** The finalized MoSCoW document governs first-release inclusion. Do not silently remove, rename, or bury a Must-have milestone through a design choice.

### DS-REQ-003 — Responsive and Accessibility Requirements

- **Category / status:** Constraint / `Committed`
- **Requirement:** Design mobile-first, using a 390 CSS-pixel phone viewport as a reference while supporting other phone sizes and desktop. Keep navigation and content readable and keyboard-accessible. Target WCAG 2.2 AA, including keyboard access, touch use, readable contrast, reduced-motion behavior, and non-visual access.
- **Scope:** Every page, component, content state, and interaction.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction and Success Criteria; [MOSCOW.md](MOSCOW.md), Must Have.
- **Change rule:** Accessibility failures block design sign-off; they are not waived as design exceptions. Any change to the target or product requirement must be made explicitly in its authoritative source.

### DS-REQ-004 — Privacy and Public-Content Requirements

- **Category / status:** Constraint / `Committed`
- **Requirement:** Treat the site and approved inventory content as public. Never publish the personal email address, phone number, or home address. Use a professional forwarding email alias for public contact once available. Verify current profile links before featuring them.
- **Scope:** Visible content, contact links, downloadable files, metadata, source assets, and outbound links.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Content and Editorial Rules; [MOSCOW.md](MOSCOW.md), Must Have; [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), Skills and Links to Verify.

### DS-POS-001 — ML/AI Systems Engineering Leads Recruiter-Facing Positioning

- **Category / status:** Decision / `Superseded`
- **Prior decision:** On 2026-10-22, the owner selected ML/AI systems engineering as the lead emphasis, with system design complementary and reliability/platform engineering framed as a growing interest.
- **Scope:** Relative emphasis in recruiter-facing positioning only; exact headline, project order, homepage layout, and visual treatment were not decided.
- **Why superseded:** The owner clarified target-role priorities, provided recent Firebrand/CompanyLens systems-design evidence, and clarified that AI tools assisted work at Sprift but no AI solutions were built there.
- **Replacement:** [DS-POS-002](#ds-pos-002).
- **Change history:** 2026-10-22 — committed, reopened for review after new evidence, then superseded when the owner approved DS-POS-002.

<a id="ds-pos-002"></a>
### DS-POS-002 — Evidence-First Systems-Design / Applied AI-ML Positioning

- **Category / status:** Decision / `Committed`
- **Decision:** Lead the portfolio's recruiter-facing positioning with the owner's recent software/backend and systems-design experience. Present applied AI/ML as a clear direction of interest, supported by the Globant prototype and academic final-year project, rather than as an established professional specialization. Continue to represent reliability/platform engineering as a growing interest.
- **Rationale:** This joins the owner's two highest-priority career directions without overstating the professional AI/ML evidence. It uses recent systems-design experience as the lead proof while keeping AI/ML ambitions and project work visible.
- **Owner's role priorities:** (1) systems design engineering and applied AI/ML, with the owner initially unsure whether separately or as a combined path; (2) platform/cloud engineering; (3) data engineering; (4) full-stack engineering; (5) backend/API engineering.
- **Evidence and limits:**
  - **Recent systems-design evidence:** In the five-person Firebrand CompanyLens MVP team, the owner reports backend ownership; Must/Should requirements prioritization; a proposal for a backend-centered star-style architecture; and separate API paths for exact-match IDs versus names to improve separation of concerns and validation. The project was built and presented over five days; do not imply production use, adoption, or measured outcomes. See [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), “Firebrand: CompanyLens MVP for Deloitte”.
  - **External assessment:** Firebrand project manager Nick O'Rourke publicly described the owner's systems-architecture aptitude and technical leadership on [LinkedIn](https://www.linkedin.com/in/nick-o-rourke-37a487405). This is qualitative testimonial evidence, not a measured project result or proof of senior-level expertise.
  - **AI/ML evidence:** The 2024 Globant internship produced a functional multi-agent prototype, and the final-year project implemented and evaluated reinforcement-learning agents with partial results. The final-year project did not produce a strategy usable against humans. These support genuine interest and project experience, not established professional AI/ML specialization.
  - **Current-role boundary:** The owner used AI tools to assist engineering work at Sprift but did not build AI solutions there. Tool use alone must not be presented as AI/ML engineering experience.
- **Scope:** Relative emphasis in recruiter-facing positioning. Exact headline/copy, homepage ordering, project prominence, CTA priority, detailed audience, visual treatment, and role-specific page variants remain undecided.
- **Dependencies:** DS-IA-001 and DS-IA-002 build on this positioning; DS-IA-003 can further refine audience context.
- **Source:** Owner role priorities, evidence clarifications, and approval on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Positioning and Decisions to Resolve; [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), Firebrand, Globant, final-year project, and Sprift stories.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.
- **Review trigger:** Revisit if target roles or evidence materially change, or the owner requests a different positioning.

### DS-RESP-001 — Mobile-First with Purposeful Desktop Composition

- **Category / status:** Decision / `Committed`
- **Decision:** Design for phone first, then compose a purposeful desktop experience. Do not simply stretch or enlarge the phone layout.
- **Rationale:** Preserves the mobile-first requirement while ensuring desktop uses available space intentionally.
- **Scope:** Responsive page composition; exact breakpoints, columns, and desktop components remain open.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction; [MOSCOW.md](MOSCOW.md), Must Have; [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md), Design Principles.

### DS-VIS-001 — Bold, Graphic, Game-Inspired High-Level Direction

- **Category / status:** Decision / `Committed`
- **Decision:** Use a bold, graphic, game-inspired high-level visual direction.
- **Rationale:** Adds a distinct note of curiosity and playfulness to a recruiter-focused portfolio while differentiating it from a CV or LinkedIn profile.
- **Scope:** High-level identity only. This does not approve a palette, typeface, game reference, map aesthetic, illustration style, layout, or interaction.
- **Source:** [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), Decisions; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction; [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md), Current Decision State.

## Under-Test Concept

### DS-TL-001 — Overworld as a Candidate Timeline Metaphor

- **Category / status:** Experiment / `Under test`
- **Concept to prototype:** A scan-first hybrid: begin with a chronological overview containing all seven required milestone titles and dates in the same overview layer; on mobile, the overview may continue below the first viewport. Do not require a separate action to reveal required milestones. Offer an optional illustrated overworld layer for exploring broad life chapters, with deeper milestone stories beyond that. In the overworld concept, broad chapters may be lands, milestones structures, and deeper stories/activities rooms. The 2016 move to the UK may be an introductory marker.
- **Chapter grouping to prototype:** Use three plain-language chronological life stages: **Early Foundations** (UK move and Kingston Academy), **University** (Queen Mary and dated university-period work such as Globant and the final-year project), and **Professional Work** (Sprift and Deloitte/Firebrand). Use cross-links between related projects or themes that span stages. Keep each dated milestone anchored to its actual period; test whether cross-links help visitors without duplicating the timeline.
- **Leading transition to prototype:** An explicit, descriptive “Explore life chapters” link opens the chapter/overworld view, with a clear “Back to milestones” route. This is a meaningful navigation step, not a generic button-based level switch.
- **Recency and future growth:** The preceding selected-work section remains a source of recency emphasis. Also compare an older-to-newer vertical overview with a recent-to-older mobile overview to test whether leading with recent milestones improves mobile scanning and accommodates additional entries. In every candidate, keep all seven required milestones in the same initial overview layer; supporting milestones may be nested when needed for scannability, as allowed by [MOSCOW.md](MOSCOW.md), Should Have.
- **Conditional chronology constraint:** If a timeline prototype is horizontal, dates progress left to right (older to newer). This does not require the final design to be horizontal.
- **Responsive orientation candidate:** Compare vertical chronology on mobile with horizontal left-to-right chronology on desktop against a consistent vertical layout at both sizes. This responsive adaptation is a prototype candidate, not an approved final orientation.
- **Question:** Does the optional overworld add useful context and personality after a clear chronological scan, and if so, does a spatial map or illustrated chapter index make the chapter hierarchy clearer than a conventional chapter-based timeline?
- **Evidence so far:** The concept is preferred as a direction to prototype in [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Technical Direction. No approved map layout or interaction model is established here.
- **Comparison:** Compare (1) a scan-first overview with a spatial, selectable illustrated overworld chapter view; (2) the same scan-first overview with an illustrated but non-spatial chapter index; and (3) a simpler chapter-based timeline. Use identical content and tasks. Keep an accessible labeled list/path for spatial content and do not require map gestures.
- **Orientation comparison:** Evaluate the adaptive orientation candidate (vertical on mobile, horizontal left-to-right on desktop) against a vertical overview on both mobile and desktop, keeping the same milestone content, labels, and interaction tasks. A horizontal candidate must preserve readable labels and must not require sideways page scrolling or gestures.
- **Vertical chronology comparison:** Test older-to-newer top-to-bottom against newer-to-older top-to-bottom as a separate variable from orientation. Keep every horizontal chronology older-to-newer from left to right.
- **Mobile recency comparison:** Compare a recent-to-older vertical overview with an older-to-newer overview. In both, all seven Must-have milestones remain in the same overview layer; scroll is acceptable, but a separate reveal action is not part of this candidate. Future supporting entries may be nested if they do not remain scannable.
- **Milestone navigation to compare:** In the spatial candidate, compare entering a named chapter/land before selecting one of its labeled milestone structures with direct selection of a milestone from the chapter view. In both candidates, provide the visible keyboard-accessible milestone list so meaning and access do not depend on map position.
- **Cross-period content rule:** Each dated project or role has one chronological home. Related chapters/stories may link to that milestone; do not duplicate the same dated milestone in multiple places in the timeline.
- **Evaluation:** Check whether visitors can find the seven milestone titles/dates, understand the chapter-to-milestone-to-story relationship, enter and leave a deeper story without losing orientation, and complete the same tasks with keyboard and without map gestures. Review at the agreed phone and desktop sizes; record observations before choosing a model.
- **Constraints:** Do not repeat the previously rejected constellation. Do not use button-based level switching that feels like a dropdown. Avoid requiring free panning or pinch zoom; all meaningful content needs a keyboard-accessible, non-spatial route.
- **Scope:** Experiment and prototype only. The named chapter-view transition is the leading candidate to test; no map geometry, chronology orientation, milestone selection control, final transition, or visual asset is committed.
- **Next useful test:** Build a small representative flow with the seven Must-have milestones and test it against the simpler chapter-based alternative using the same phone/desktop tasks.

#### Observations

- **Method:** Ran the shared prototype tasks in headless Chromium at 390 × 900 and 1440 × 900 CSS pixels for all three variants. The run checked milestone titles, dates, chapter labels, keyboard navigation, preview focus and return, chapter/back routes, reduced-motion behavior, and horizontal overflow.
- **Common results:** Each variant showed the same seven milestone titles, dates, and chapter assignments in its initial overview, with no reveal step. The seven items fit without horizontal overflow at both tested widths. Keyboard preview opened with focus on its heading; Escape returned focus to its opener. All tab-reachable controls in the overview and chapter views had a visible focus outline. The named chapter link and “Back to milestones” route worked by keyboard. Sample text, link, border, and focus color pairs exceeded the applicable contrast thresholds. Reduced motion did not remove content or interaction.
- **Spatial comparison:** The map offered a chapter-first route, while its separate keyboard-accessible milestone list offered direct selection. Both routes worked without gestures, and the direct list remained usable with the map hidden. Entering a chapter first adds a navigation step; the list avoids requiring the map. The illustrated index and simple timeline also completed the shared tasks.
- **What this did not show:** These were automated prototype checks, not participant usability sessions. They do not establish that the overworld improves chapter comprehension, adds meaningful personality, or is preferred over the illustrated index or simple timeline. They also do not establish full WCAG conformance, screen-reader usability, or a final design choice. Evidence about whether the overworld adds value remains inconclusive.
- **Owner input:** The owner selected the named chapter-view transition as the leading prototype candidate and confirmed on 2026-10-22 that the preceding selected-work section is sufficient to foreground recent work; this is not final approval of the timeline model.
- **Owner input:** The owner chose to compare spatial map navigation against an illustrated chapter index on 2026-10-22; no option is approved as the final model.
- **Owner input:** The owner chose to compare chapter-first navigation against direct milestone selection in the spatial candidate on 2026-10-22.
- **Owner input:** The owner chose chronological life stages with cross-links as the leading chapter organization to prototype on 2026-10-22; exact chapter names, memberships, and link treatments remain open.
- **Owner input:** The owner selected the three candidate prototype chapters—Early Foundations, University, and Professional Work—on 2026-10-22. These labels and memberships are for testing, not final committed chapter names.
- **Owner input:** The owner chose to test vertical mobile / horizontal left-to-right desktop orientation against a consistently vertical layout on 2026-10-22; neither orientation is final approval.
- **Owner input:** The owner chose to test both vertical chronology directions on 2026-10-22. This comparison does not alter the left-to-right older-to-newer constraint for horizontal timelines.
- **Label rule:** Use plain-language chapter labels in prototypes; game-inspired language may be expressed through visual treatment rather than obscure labels.
- **Change rule:** Promote only a specific, tested model to a committed decision after the owner approves the review gate.

## Information Architecture and Visual Decisions

<a id="ds-ia-001"></a>
### DS-IA-001 — First-Screen Message Frame

- **Category / status:** Decision / `Committed`
- **Decision:** Use one integrated first-screen headline that identifies Melih as a software engineer and connects his demonstrated backend/systems-design experience to applied AI/ML as a direction of interest.
- **Rationale:** Establishes a credible current professional identity before presenting the longer-term direction, while remaining consistent with DS-POS-002.
- **Career-stage wording:** Identify as a “software engineer” without adding “early-career” or “new graduate” to the first-screen identity. Let the dated roles and project context establish experience stage without making junior status the headline.
- **Headline structure:** Express identity, demonstrated experience, and direction together in one integrated headline, rather than separating “Software Engineer” into its own headline and placing the experience/direction in a supporting sentence.
- **Leading copy candidate (not final):** “Software engineer with backend and systems-design experience, exploring applied AI/ML.” This is the owner's preferred evidence-first direction among working drafts; exact wording remains open.
- **Constraints:** Keep all three engineering directions represented; frame reliability/platform as a growing interest; support every claim with verified content.
- **Scope:** Message hierarchy and headline structure only. Exact wording, supporting proof, homepage layout, and visual treatment remain open.
- **Dependencies:** DS-POS-002.
- **Source:** Owner selections on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Positioning and Experience Direction; owner preference among copy candidates.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

<a id="ds-ia-004"></a>
### DS-IA-004 — First-Screen Evidence and Supporting-Strength Hierarchy

- **Category / status:** Decision / `Committed`
- **Decision:** Use Firebrand/CompanyLens as the primary first-screen proof of recent backend and systems-design contribution. Keep applied AI/ML visible as a direction of interest, with the Globant and final-year projects available one level deeper rather than giving them equal first-screen prominence. Use a short, verbatim, attributed excerpt from Nick O’Rourke’s testimonial near the first-screen proof, with the fuller testimonial and project context inside the CompanyLens story.
- **Rationale:** Firebrand is recent professional evidence directly relevant to the systems-design direction; the AI/ML work remains important but is older and/or academic. This hierarchy supports the identity-first framing without implying professional AI/ML work at Sprift.
- **Approved hero excerpt:** “...has an excellent understanding of systems architecture.” Attribute to Nick O’Rourke, project manager. Retain the full testimonial and context in the CompanyLens story.
- **Testimonial constraints:** Preserve any excerpt verbatim and with clear attribution; choose a fragment only if it retains the original meaning in context. The testimonial is qualitative corroboration, not measured outcome, production evidence, or proof of seniority.
- **Other constraints:** Distinguish individual contribution from team outcomes; do not imply production deployment or measured impact for Firebrand, nor professional AI/ML solution development at Sprift.
- **Scope:** Relative prominence of first-screen proof points and testimonial depth. Exact excerpt selection, visual treatment, detailed story format, and overall homepage section ordering remain separate or open.
- **Dependencies:** DS-POS-002; DS-IA-001.
- **Source:** Owner selections on 2026-10-22; [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), Firebrand, Sprift, Globant, and final-year project stories.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

<a id="ds-ia-002"></a>
### DS-IA-002 — Homepage Section Order

- **Category / status:** Decision / `Committed`
- **Decision:** Order the major homepage sections as: first-screen identity, direction, proof point and actions; curated selected work; timeline overview; restrained personal profile.
- **Constraints:** Concise recruiter-first homepage; CV and contact must be easy to find; deeper content remains optional; personal profile stays proportionate.
- **Scope:** High-level sequence only. Detailed section content, timeline interaction, exact page length, and visual layout remain open; action prominence is tracked separately in DS-IA-005.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction and Decisions to Resolve; [MOSCOW.md](MOSCOW.md), Must Have and Should Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

<a id="ds-ia-005"></a>
### DS-IA-005 — Primary and Secondary Homepage Actions

- **Category / status:** Decision / `Committed`
- **Decision:** Give selected work and the current CV co-primary emphasis on the first screen. Keep the professional contact route straightforward to find without competing as a primary action.
- **Rationale:** Recruiters can choose the familiar CV route or inspect the portfolio's added evidence and project stories; contact remains an explicit, direct path.
- **Constraints:** Keep clear, direct paths to the current CV and professional contact; do not expose personal contact details. Selected work should be easy to discover.
- **Scope:** Relative action priority only. Exact wording, style, position, and navigation pattern remain open.
- **Dependencies:** DS-POS-002; DS-IA-001; DS-IA-004.
- **Source:** Owner selection on 2026-10-22; [MOSCOW.md](MOSCOW.md), Must Have; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

### DS-IA-006 — Selected Work Follows the First Screen

- **Category / status:** Decision / `Committed`
- **Decision:** Place a curated selected-work section immediately after the first-screen content.
- **Rationale:** Gives recruiters the next step into the portfolio's verified evidence and project stories after the positioning and primary proof.
- **Scope:** High-level homepage section order only. The number, layout, and exact content of story cards remain open; the remaining section order is tracked in DS-IA-002.
- **Dependencies:** DS-POS-002; DS-IA-001; DS-IA-004.
- **Source:** Owner selection on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Vision and Success Criteria; [MOSCOW.md](MOSCOW.md), Must Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

### DS-IA-003 — Initial Target Markets and Employer Context

- **Category / status:** Decision / `Committed`
- **Decision:** Prioritize UK employers first, North America second, and Europe outside the UK third, while remaining open to a compelling opportunity in any location. Focus on large, established-name employers, especially major technology companies (including FAANG) and major financial firms. The owner's application threshold is organizations they consider at or above Deloitte's established-employer benchmark.
- **Rationale:** This reflects the owner's stated role and employer priorities while leaving room for exceptional opportunities outside the preferred markets.
- **Scope:** Internal audience and content-targeting guidance only. Do not publish the application threshold or imply that the site excludes other recruiters or opportunities. Target role priorities remain in DS-POS-002.
- **Source:** Owner selection on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Purpose and Audiences; [MOSCOW.md](MOSCOW.md), Must Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Decisions to Resolve.
- **Next action:** Confirm target locations and company context before finalizing location-specific language or outbound links.

### DS-TL-002 — Timeline Structure and Navigation Model

- **Category / status:** Decision / `Open`
- **Question:** After the comparative test in DS-TL-001, which timeline structure and navigation model should be committed? How do visitors move between overview, chapter, milestone, and story?
- **Constraints:** Required milestones and dates must remain scannable; meaningful content must have an accessible non-spatial, non-gesture route; avoid a complex visualization that usability evidence does not support.
- **Scope:** Timeline hierarchy, orientation controls, selection, navigation, and non-gesture alternatives.
- **Dependencies:** DS-TL-001; DS-REQ-002; DS-REQ-003.
- **Source:** [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Value Beyond a CV and Technical Direction; [MOSCOW.md](MOSCOW.md), Must Have and Won't Have.
- **Current candidate:** Compare three forms described in DS-TL-001: spatial overworld, non-spatial illustrated chapter index, and simpler chapter-based timeline. Lead with chronological life-stage grouping plus project/theme cross-links; within the spatial option, compare chapter-first and direct milestone selection. The named “Explore life chapters” transition and clear return path are the leading entry/exit candidate; none is final approval.
- **Next action:** Use equivalent content and task evidence from all three forms to decide whether the overworld layer adds enough value and whether spatial navigation helps or hinders.

### DS-TL-003 — Timeline Chronology and Orientation

- **Category / status:** Decision / `Open`
- **Question:** What chronology direction and orientation best communicate life chapters and dated milestones? How does the beginning relate to the most recent role?
- **Owner constraint:** If the timeline is horizontal, chronology must run left to right (older to newer). A horizontal layout itself is not required.
- **Recency baseline and test:** The selected-work section remains a recency cue. The owner requested testing a recent-to-older mobile overview against older-to-newer order to assess mobile scanability and future growth. This reopens the prior no-separate-recency-emphasis direction for testing; it does not approve the new order. All seven Must-have milestones remain in the same initial overview layer, even if some fall below the phone's first viewport.
- **Scope:** Timeline overview and every deeper level; must remain understandable on phone and desktop and without spatial interpretation. Physical orientation remains open, except that any horizontal chronology must run left to right.
- **Dependencies:** DS-TL-002.
- **Prototype candidate:** Compare vertical on mobile with horizontal older-to-newer on desktop against vertical on both sizes. Preserve the same milestone sequence and content; the horizontal candidate must not require sideways page scrolling or gestures.
- **Chronology test:** Compare older-to-newer top-to-bottom with newer-to-older top-to-bottom in vertical candidates as a separate variable. Horizontal chronology remains older-to-newer left-to-right.
- **Required-milestone exposure:** Every vertical order keeps the seven Must-have milestones within the initial timeline overview; the mobile overview may scroll, but a separate action must not be required to reveal any of them. Supporting entries can be nested when they do not remain scannable.
- **Owner input:** On 2026-10-22, the owner selected the adaptive-versus-vertical comparison, requested both vertical chronology directions be tested, and chose a recent-first vertical candidate for comparison. These are test choices, not final commitments.
- **Next action:** Once the overview and chapter model are prototyped, compare these arrangements against the scanability and interaction tasks in DS-TL-001.

### DS-TL-004 — Milestone Preview and Full-Story Flow

- **Category / status:** Decision / `Under test`
- **Question:** Does a contextual overlay preview followed by a dedicated full-story page provide a useful, accessible balance between quick scanning and substantial case-study detail?
- **Leading candidate:** Selecting a milestone opens a preview panel over the timeline while the rest of the timeline is dimmed. The panel contains a concise summary and a clear link to a dedicated story page for greater depth and relevant imagery. The story page may use a more focused composition while remaining part of the same design system.
- **Rationale:** The overlay gives a quick look without immediately taking the visitor away from timeline context; the dedicated page allows detailed situation, contribution, decisions, outcomes/learning, and project imagery without making the preview unwieldy.
- **Accessibility and interaction constraints:** Treat the dimmed timeline as unavailable while the preview is active; provide an accessible dialog name, sensible focus entry and return, keyboard operation and dismissal, and a clear close control. Do not rely on clicking the dimmed background as the only close method. Exact semantics, close behavior, sizing, and responsive presentation require prototype and accessibility review.
- **Scope:** Candidate interaction flow only. Panel content limits, phone-vs-desktop treatment, transition animation, exact story-page layout, imagery selection, and visual differentiation remain open.
- **Dependencies:** DS-TL-001; DS-TL-002; DS-REQ-003.
- **Source:** Owner proposal and approval to test on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Value Beyond a CV; [MOSCOW.md](MOSCOW.md), Must Have.
- **Next useful test:** Prototype the overlay-to-story route using Firebrand/CompanyLens; test selecting, previewing, opening the full story, returning, closing via keyboard, and restoring focus across phone and desktop.
- **Owner input:** The owner approved this as the leading prototype candidate on 2026-10-22; it is not final design approval.

### DS-TL-005 — One Chronological Home with Contextual Cross-Links

- **Category / status:** Decision / `Committed`
- **Decision:** Give each dated project or role one chronological home in the timeline. Link to it from related chapters, stories, or themes where useful; do not duplicate the same dated milestone across timeline chapters.
- **Rationale:** Preserves chronological clarity and avoids duplicate events while allowing relationships between university work, internships, and professional projects to remain discoverable.
- **Scope:** Timeline content relationships and milestone placement. The appearance and interaction of cross-links remain open.
- **Source:** Owner selection on 2026-10-22; examples and candidate relationships in [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md), including Globant during university and Firebrand through Deloitte.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

#### Observations

The shared-data check found all seven required titles, dates, and chapter assignments, with the Firebrand/CompanyLens story nested under Deloitte rather than listed as a second milestone. The inventory does not flag any of these seven dates for verification and explicitly resolves Sprift's end date to August 2026. The neutral stylesheet's text, muted text, link, focus, and border colors measure at least 4.54:1 against white. This check did not establish a timeline layout, preview interaction, task success, or WCAG conformance. No browser is available in the environment, and these shared assets do not include a rendered page, so 390px and desktop rendering and keyboard interaction remain untested.

### DS-TL-006 — Plain-Language Timeline Chapter Labels

- **Category / status:** Decision / `Committed`
- **Decision:** Use clear, literal language for chapter labels rather than replacing life-stage names with fictional game-world terminology. Express the game's influence through the visual and interaction language, not by making recruiters decode chapter names.
- **Rationale:** Preserves immediate comprehension and scannability while retaining room for a distinctive illustrated direction.
- **Scope:** User-facing timeline chapter labels. Exact labels and the names of individual visual landmarks remain open; labels must accurately describe their content.
- **Source:** Owner selection on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction and Value Beyond a CV.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

### DS-RWD-001 — Desktop Composition and Use of Available Space

- **Category / status:** Decision / `Open`
- **Question:** How should desktop use its additional width while preserving a clear focal point and the same content hierarchy?
- **Options to evaluate:** Persistent detail panel, contextual navigation, deliberately wider timeline/map composition, or another evidence-supported treatment.
- **Scope:** Desktop and intermediate responsive compositions; exact breakpoints remain open until tested against content.
- **Dependencies:** DS-RESP-001; DS-TL-002; DS-TL-004.
- **Next action:** Decide after the timeline navigation and detail treatment are prototyped at phone and desktop widths.

### DS-VIS-002 — Game Influence by Experience Depth

- **Category / status:** Decision / `Committed`
- **Decision:** Use a depth gradient in visual expression: retain a professional editorial foundation throughout; use restrained graphic/game-inspired cues on the recruiter-first homepage; allow stronger exploration motifs in the timeline and deeper stories. Keep the same underlying design system, hierarchy, and clarity at every depth; visitors should not need game knowledge.
- **Rationale:** Provides a clear professional first impression with a distinct note of personality, while rewarding visitors who explore deeper with more expressive interaction and visual cues.
- **Scope:** High-level distribution of game-inspired expression only. It does not prescribe a literal map, game genre, palette, typography, iconography, illustration style, or component values.
- **Source:** Owner selection on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction; [MOSCOW.md](MOSCOW.md), Could Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

### DS-VIS-003 — Palette, Typography, and Graphic/Illustration System

- **Category / status:** Decision / `Open`
- **Question:** Which color roles, type system, graphic motifs, map/region language, and icon/illustration approach form a coherent and accessible visual system?
- **Constraints:** Must support the committed high-level direction without reducing clarity, readability, contrast, or professional credibility.
- **Scope:** Global foundations and their page/component-specific usage. No values are approved by this record.
- **Dependencies:** DS-VIS-002; DS-VIS-004; a selected structural model under DS-TL-002.
- **Next action:** Define concrete tokens and visual rules only after the timeline structure and concept-board comparison have been reviewed.

### DS-VIS-004 — Literal Atlas versus Abstract Graphic Exploration Language

- **Category / status:** Experiment / `Under test`
- **Question:** Does a literal illustrated atlas/overworld or an abstract editorial graphic system better express the committed depth gradient while keeping the portfolio clear and consistent?
- **Options to compare:**
  1. **Literal atlas/overworld:** Illustrated lands, terrain, or places express life chapters and exploration.
  2. **Abstract editorial graphics:** Paths, markers, labels, and progression cues express exploration without depicting a literal game world.
- **Evaluation:** Compare concept boards or low-fidelity representative compositions against the same homepage, selected-work, timeline, and story content. Review recruiter clarity, personality, consistency across depth, accessibility, and whether the concept still works if the timeline uses a non-spatial index.
- **Scope:** Concept exploration only. This does not decide exact game genre, artwork, assets, palette, typography, or final timeline interaction.
- **Dependencies:** DS-VIS-001; DS-VIS-002; DS-TL-001.
- **Owner input:** The owner chose to compare both directions on 2026-10-22.
- **Next useful test:** Create paired visual direction boards after the timeline structure has a stable enough content hierarchy to represent.

### DS-MEDIA-001 — Project and Timeline Imagery Strategy

- **Category / status:** Decision / `Open`
- **Question:** Which content benefits from project screenshots, custom illustrations, photographs, or no imagery? How should assets be sourced and described?
- **Constraints:** Media must support, not obscure or substitute for, evidence of actual work; use permitted assets and appropriate text alternatives.
- **Scope:** Homepage, timeline landmarks, project stories, and responsive media behavior.
- **Dependencies:** DS-VIS-002; DS-VIS-003.
- **Next action:** Inventory available, publishable project assets and identify where imagery would help visitors inspect real work.

## Adding and Updating Records

Use the record fields and lifecycle in [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md), with stable IDs and links to requirements, evidence, specifications, prototypes, and validation. Add an item to the status summary when creating it. When a decision changes, preserve the old record as `Superseded`, link its replacement, and update affected authoritative artifacts in the same change. Do not copy detailed token values or component rules into this register.

Unless a record says otherwise, the project owner is its decision owner and approver. Open records remain unapproved; their next actions are discovery or discussion steps, not implied decisions.
