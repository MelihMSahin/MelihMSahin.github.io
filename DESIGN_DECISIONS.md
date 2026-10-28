# Design Decisions

**Project:** Melih Sahin personal portfolio  
**Status:** Living decision register  
**Owner / approver:** Mehmet Melih Sahin  
**Updated:** 2026-10-26

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
| DS-TL-002 | Timeline structure and navigation model | Decision | Committed |
| DS-TL-003 | Timeline chronology and orientation | Decision | Committed |
| DS-TL-004 | Milestone preview and full-story flow | Decision | Committed |
| DS-TL-005 | One chronological home with contextual cross-links | Decision | Committed |
| DS-TL-006 | Plain-language timeline chapter labels | Decision | Committed |
| DS-TL-007 | Primary spatial milestone selection path | Decision | Open |
| DS-TL-008 | Overview-to-chapter transition model | Decision | Open |
| DS-TL-009 | Preview panel presentation by viewport | Decision | Open |
| DS-RWD-001 | Desktop composition and use of available space | Decision | Open |
| DS-RWD-002 | Intermediate responsive composition behavior | Decision | Open |
| DS-VIS-002 | Game influence by experience depth | Decision | Committed |
| DS-VIS-003 | Graphic/illustration system detail | Decision | Open |
| DS-VIS-005 | Palette system direction | Decision | Open |
| DS-VIS-006 | Typography system direction | Decision | Open |
| DS-VIS-004 | Literal atlas versus abstract graphic exploration language | Decision | Committed |
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
- **Selected direction:** The owner approved a scan-first chronological overview followed by a spatial illustrated overworld for exploring broad life chapters; see committed [DS-TL-002](#ds-tl-002). This experiment remains `Under test` for detailed hierarchy, navigation, responsive composition, and usability. The approval does not settle map geometry, detailed controls, or the exact visual specification.
- **Concept to prototype:** Begin with a chronological overview containing all seven required milestone titles and dates in the same overview layer; on mobile, the overview may continue below the first viewport. Do not require a separate action to reveal required milestones. Offer the spatial illustrated overworld as an additional chapter-exploration layer, with deeper milestone stories beyond that. In the overworld concept, broad chapters may be lands, milestones structures, and deeper stories/activities rooms. The precise mapping and the role of the 2016 move remain to be decided.
- **Chapter grouping to prototype:** Use three plain-language chronological life stages: **Early Foundations** (UK move and Kingston Academy), **University** (Queen Mary and dated university-period work such as Globant and the final-year project), and **Professional Work** (Sprift and Deloitte/Firebrand). Use cross-links between related projects or themes that span stages. Keep each dated milestone anchored to its actual period; test whether cross-links help visitors without duplicating the timeline.
- **Leading transition to prototype:** An explicit, descriptive “Explore life chapters” link opens the chapter/overworld view, with a clear “Back to milestones” route. This is a meaningful navigation step, not a generic button-based level switch.
- **Recency and future growth:** The approved overview order is recorded in [DS-TL-003](#ds-tl-003): older-to-newer vertically on phones and older-to-newer, left-to-right, horizontally on desktop. Prototype observations comparing the alternatives are retained below; they do not establish human preference. In every layout, keep all seven required milestones in the same initial overview layer; supporting milestones may be nested when needed for scannability, as allowed by [MOSCOW.md](MOSCOW.md), Should Have.
- **Conditional chronology constraint:** Any horizontal timeline runs left to right, older to newer; the approved responsive orientation is recorded in DS-TL-003.
- **Responsive orientation:** The existing prototypes compared vertical chronology on mobile with horizontal left-to-right chronology on desktop against a consistent vertical layout at both sizes. DS-TL-003 records the owner's approved direction; the automated comparison itself did not establish preference.
- **Question:** Within the approved scan-first and spatial-overworld direction, what chapter, milestone, and story hierarchy and navigation patterns are clearest and accessible?
- **Evidence so far:** The owner approved the high-level structure in DS-TL-002 and prefers chapter-first spatial navigation as a candidate, but has not committed that navigation path. No approved map layout or spatial selection control is established here.
- **Completed comparison:** The existing prototypes compared (1) a scan-first overview with a spatial, selectable illustrated overworld chapter view; (2) the same scan-first overview with an illustrated but non-spatial chapter index; and (3) a simpler chapter-based timeline. They used identical content and tasks. The checks verified basic rendering and interaction only; they were not participant usability evidence and did not choose the direction.
- **Orientation comparison:** The existing prototypes compared vertical-on-phone/horizontal-on-desktop against a consistently vertical overview, using the same milestone content and tasks. A horizontal view must preserve readable labels and must not require sideways page scrolling or gestures; the approved orientation is recorded in DS-TL-003.
- **Vertical chronology comparison:** The existing prototypes compared older-to-newer top-to-bottom with newer-to-older top-to-bottom. The owner's approved responsive chronology is recorded in DS-TL-003; all horizontal chronology remains older-to-newer, left-to-right.
- **Mobile recency comparison:** The existing prototypes compared a recent-to-older vertical overview with an older-to-newer overview. All seven Must-have milestones remain in the same overview layer; scrolling is acceptable, but a separate reveal action is not. Supporting entries may be nested if they do not remain scannable.
- **Milestone navigation to compare:** The owner prefers a chapter-first spatial path—enter a named chapter/land, then select one of its labeled milestone structures—as a candidate to keep under test. Direct milestone selection remains the alternative. In either case, provide a visible keyboard-accessible milestone list so meaning and access do not depend on map position.
- **Cross-period content rule:** Each dated project or role has one chronological home. Related chapters/stories may link to that milestone; do not duplicate the same dated milestone in multiple places in the timeline.
- **Evaluation:** Check whether visitors can find the seven milestone titles/dates, understand the chapter-to-milestone-to-story relationship, enter and leave a deeper story without losing orientation, and complete the same tasks with keyboard and without map gestures. Review at the agreed phone and desktop sizes; record observations before choosing a model.
- **Constraints:** Do not repeat the previously rejected constellation. Do not use button-based level switching that feels like a dropdown. Avoid requiring free panning or pinch zoom; all meaningful content needs a keyboard-accessible, non-spatial route.
- **Scope:** Experiment and prototype evidence only. The high-level spatial-overworld direction and responsive chronology are committed in DS-TL-002 and DS-TL-003. Chapter-first spatial navigation is a preferred candidate under test, not a committed selection control or transition. Map geometry, detailed controls, and visual assets remain open.
- **Owner input:** On 2026-10-26, the owner chose chapter-first navigation as the preferred spatial path to keep under test; direct milestone selection remains an alternative. The owner did not approve or commit the path.
- **Next useful review:** Compare chapter-first and direct selection in the existing [scan-overworld prototype](./prototypes/DS-TL-001/scan-overworld/) for hierarchy comprehension, extra-step cost, orientation, and keyboard/non-spatial access. The current automated checks do not answer those usability questions. Build no further prototypes unless the owner asks.

#### Observations

- **Method:** Ran the shared prototype tasks in headless Chromium at 390 × 900 and 1440 × 900 CSS pixels for all three variants. The run checked milestone titles, dates, chapter labels, keyboard navigation, preview focus and return, chapter/back routes, reduced-motion behavior, and horizontal overflow.
- **Common results:** Each variant showed the same seven milestone titles, dates, and chapter assignments in its initial overview, with no reveal step. The seven items fit without horizontal overflow at both tested widths. Keyboard preview opened with focus on its heading; Escape returned focus to its opener. All tab-reachable controls in the overview and chapter views had a visible focus outline. The named chapter link and “Back to milestones” route worked by keyboard. Sample text, link, border, and focus color pairs exceeded the applicable contrast thresholds. Reduced motion did not remove content or interaction.
- **Spatial comparison:** The map offered a chapter-first route, while its separate keyboard-accessible milestone list offered direct selection. Both routes worked without gestures, and the direct list remained usable with the map hidden. Entering a chapter first adds a navigation step; the list avoids requiring the map. The illustrated index and simple timeline also completed the shared tasks.
- **What this did not show:** These were automated prototype checks, not participant usability sessions. They do not establish that the overworld improves chapter comprehension or adds meaningful personality. They also do not establish full WCAG conformance or screen-reader usability. The owner subsequently approved the high-level spatial-overworld direction; the observations themselves did not establish that choice.
- **Owner input:** The owner selected the named chapter-view transition as the leading prototype candidate and confirmed on 2026-10-22 that the preceding selected-work section is sufficient to foreground recent work. The high-level spatial direction was explicitly approved on 2026-10-26 in DS-TL-002; the exact transition remains open.
- **Owner input:** The owner chose to compare spatial map navigation against an illustrated chapter index on 2026-10-22. The spatial direction was explicitly approved on 2026-10-26 in DS-TL-002; this comparison did not establish usability.
- **Owner input:** The owner chose to compare chapter-first navigation against direct milestone selection in the spatial candidate on 2026-10-22, then selected chapter-first as the preferred candidate under test on 2026-10-26. No navigation path is committed.
- **Owner input:** The owner chose chronological life stages with cross-links as the leading chapter organization to prototype on 2026-10-22; exact chapter names, memberships, and link treatments remain open.
- **Owner input:** The owner selected the three candidate prototype chapters—Early Foundations, University, and Professional Work—on 2026-10-22. These labels and memberships are for testing, not final committed chapter names.
- **Owner input:** The owner chose to test vertical mobile / horizontal left-to-right desktop orientation against a consistently vertical layout on 2026-10-22; the adaptive orientation was later committed in DS-TL-003 on 2026-10-26.
- **Owner input:** The owner chose to test both vertical chronology directions on 2026-10-22, initially committed recent-to-older on phones and older-to-newer, left-to-right, on desktop, then changed the approved direction on 2026-10-26 to older-to-newer on both phone and desktop. The adaptive vertical-phone/horizontal-desktop orientation remains committed.
- **Label rule:** Use plain-language chapter labels in prototypes; game-inspired language may be expressed through visual treatment rather than obscure labels.
- **Change rule:** Keep detailed behavior and layout under test until reviewed. The high-level direction is committed in DS-TL-002; owner approval does not imply approval of unrecorded details.

## Information Architecture and Visual Decisions

<a id="ds-ia-001"></a>
### DS-IA-001 — First-Screen Message Frame

- **Category / status:** Decision / `Committed`
- **Decision:** Use one integrated first-screen headline that identifies Melih as a software engineer and connects his demonstrated backend/systems-design experience to applied AI/ML as a direction of interest.
- **Rationale:** Establishes a credible current professional identity before presenting the longer-term direction, while remaining consistent with DS-POS-002.
- **Career-stage wording:** Identify as a “software engineer” without adding “early-career” or “new graduate” to the first-screen identity. Let the dated roles and project context establish experience stage without making junior status the headline.
- **Headline structure:** Express identity, demonstrated experience, and direction together in one integrated headline, rather than separating “Software Engineer” into its own headline and placing the experience/direction in a supporting sentence.
- **Leading copy candidate (not final):** “Software engineer with backend and systems-design experience, exploring applied AI/ML.” This is the owner's preferred evidence-first direction among working drafts; exact wording remains open.
- **Owner input:** On 2026-10-26, the owner reviewed the current wording candidate and deferred committing exact headline text; wording remains open.
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

- **Category / status:** Decision / `Committed`
- **Decision:** Use a scan-first hybrid timeline: the initial chronological overview contains all seven Must-have milestone titles and dates in the same overview layer, followed by an optional spatial illustrated overworld for exploring broad life chapters. The spatial view is an additional route into the timeline hierarchy, not a replacement for the required chronological overview. Provide an accessible, labeled non-spatial route to meaningful milestone content; spatial gestures must not be required.
- **Rationale:** The owner selected the spatial overworld direction to give the timeline a distinctive exploration layer while retaining the direct scan of dated milestones. Existing automated checks established that the candidates rendered and supported basic keyboard interaction, but were not usability evidence; the decision is the owner's approval, not a test result.
- **Constraints:** Keep all seven required milestones and dates in the initial overview without a reveal step. Use one chronological home per dated milestone and contextual cross-links rather than duplicate timeline entries. Any horizontal chronology runs older-to-newer, left-to-right. Preserve keyboard access and a non-spatial route.
- **Scope:** High-level timeline structure only: chronological overview plus spatial chapter-exploration layer. This does not decide chapter-first versus direct milestone selection, map geometry, the exact overview-to-overworld transition, landmarks, controls, zoom/pan, chronology orientation, responsive composition, preview/story behavior, or visual style.
- **Dependencies:** DS-REQ-002; DS-REQ-003. Detailed design choices remain linked to DS-TL-001, DS-TL-003, DS-TL-004, DS-RWD-001, DS-VIS-003, and DS-VIS-004.
- **Source:** Owner's explicit approval on 2026-10-26; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Value Beyond a CV and Technical Direction; [MOSCOW.md](MOSCOW.md), Must Have and Won't Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-26.
- **Next action:** Resolve the remaining timeline choices one at a time. Keep unapproved details open; do not build further prototypes unless the owner asks.

### DS-TL-003 — Timeline Chronology and Orientation

- **Category / status:** Decision / `Committed`
- **Decision:** Use a responsive chronology: on phone, show a vertical timeline ordered older-to-newer; on desktop, show a horizontal timeline ordered older-to-newer from left to right.
- **Rationale:** The owner chose to present the timeline's start before its later milestones at both sizes, while adapting its physical orientation to the viewport. Automated checks found the tested candidates rendered without horizontal overflow, but did not measure human scanability or preference; this direction reflects the owner's explicit approval, not a usability finding.
- **Constraints:** Keep all seven Must-have milestone titles and dates in the same initial overview, with no separate reveal action. Do not require sideways page scrolling or gestures. Any horizontal chronology runs older-to-newer, left-to-right.
- **Scope:** Timeline overview chronology/orientation for phone and desktop. Exact breakpoint, intermediate-width behavior, detailed layout, and any orientation of the spatial chapter-exploration view remain open.
- **Dependencies:** DS-TL-002.
- **Evidence considered:** Existing prototype observations compare vertical chronology on both sizes with vertical-on-phone/horizontal-on-desktop, and compare older-first with recent-first vertical chronology. They report the tested content and behavior, not participant preference. See observations below.
- **Required-milestone exposure:** Every vertical order keeps the seven Must-have milestones within the initial timeline overview; the mobile overview may scroll, but a separate action must not be required to reveal any of them. Supporting entries can be nested when they do not remain scannable.
- **Owner input / change history:** On 2026-10-22, the owner selected the adaptive-versus-vertical comparison, requested both vertical chronology directions be tested, and chose a recent-first vertical candidate for comparison. On 2026-10-26, the owner initially approved recent-first on phones with older-to-newer horizontal desktop chronology, then revised the decision to older-to-newer on both phone and desktop while retaining vertical phone and horizontal desktop orientation.
- **Approved by:** Mehmet Melih Sahin, 2026-10-26.
- **Next action:** Resolve the remaining intermediate-width and detailed responsive-composition behavior under DS-RWD-001; do not treat prototype checks as user preference evidence.

#### Observations

- **Run:** Tested four variants—vertical older-first, vertical recent-first, adaptive older-first, and adaptive recent-first—in headless Chromium at 390 × 900 and 1440 × 900 CSS pixels. The same shared tasks and milestone data were used for each. Additional reflow checks ran at 320, 430, and 1024 pixels.
- **Overview and chronology:** All seven required titles, dates, and chapter labels appeared together in the overview without a reveal action. At 390 pixels, vertical older-first began with the UK move and Kingston Academy; recent-first began with the Deloitte role and Sprift API. At 1440 pixels, both vertical variants kept their selected order. Both adaptive variants became horizontal on desktop and displayed older-to-newer from left to right; the recent-first choice applied to their phone layout. The page had no horizontal overflow at tested widths, and horizontal card labels wrapped within their cards.
- **Scannability and growth:** Phone scrolling was needed to scan the full seven-item overview. Recent-first puts the latest role first, while older-first establishes the beginning of the timeline first; this run did not compare human scan time or preference. Ten supporting entries, including four clearly marked dummy fixtures, were grouped under three collapsed chapter summaries. Their contents expanded by keyboard, leaving all seven required milestones in the overview.
- **Shared tasks and accessibility checks:** Keyboard-only navigation reached each milestone and preview; focus entered the preview heading, Tab reached its close control, and Escape closed it and restored focus to the opener. All tab stops showed visible focus, and each supporting group expanded with Enter. Focus and preview return also survived resizing across the adaptive breakpoint. Reduced motion did not remove content or functionality. At 390 pixels with root text size doubled, all seven milestones remained with no horizontal overflow. Tested text, link, border, focus, and chapter-label color pairs exceeded applicable contrast ratios; the lowest measured pair was the focus ring against the paper background at 5.88:1.
- **What this did not show:** These automated browser checks do not establish that either order or orientation is easier or preferred for visitors, that nested support content is discoverable, or that labels remain comfortable at every size. They do not establish screen-reader usability or full WCAG 2.2 AA conformance. The owner selected the current adaptive older-first arrangement; that approval is not a usability finding.

### DS-TL-004 — Milestone Preview and Full-Story Flow

- **Category / status:** Decision / `Committed`
- **Decision:** Selecting a timeline milestone opens a contextual overlay preview. The preview provides a concise introduction and a clear path to a dedicated full-story page; visitors can return to the timeline without losing their place.
- **Rationale:** The overlay supports a quick look while retaining timeline context, and the dedicated page provides room for the full situation, contribution, decisions, outcomes/learning, and relevant imagery. The owner selected this flow after reviewing the existing prototype; automated checks are not usability evidence.
- **Accessibility and interaction constraints:** Treat the dimmed timeline as unavailable while the preview is active; provide an accessible dialog name, sensible focus entry and return, keyboard operation and dismissal, and a clear close control. Do not rely on clicking the dimmed background as the only close method.
- **Scope:** The overview-to-preview-to-story flow and return route. Panel content limits, phone-vs-desktop presentation, transition animation, exact story-page layout, imagery selection, and visual differentiation remain open.
- **Dependencies:** DS-TL-001; DS-TL-002; DS-REQ-003.
- **Source:** Owner's explicit approval on 2026-10-26; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Value Beyond a CV; [MOSCOW.md](MOSCOW.md), Must Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-26.
- **Next action:** Resolve the remaining presentation and content details through the relevant open decisions. Do not build further prototypes unless the owner asks.

#### Observations

At 390px and 1440px in Chromium, all seven shared titles and dates matched the inventory and neither timeline nor story page overflowed horizontally. Keyboard-only selection opened a dialog with an accessible name and focus on its heading; the native modal kept keyboard focus within the panel, and a click on the dimmed page did not dismiss it. Both the visible close button and Escape closed it and returned focus to the selected milestone. The phone layout measured as a viewport-wide bottom sheet; the desktop layout measured as a right-anchored side panel. The Deloitte preview led to the dedicated CompanyLens story; browser Back returned to the timeline and restored the milestone focus. The story's full Nick O'Rourke testimonial matched the inventory verbatim. Key body, muted, link, and focus colors measured at least 4.5:1 against the page background. With reduced motion emulated at 390px, keyboard opening, Escape dismissal, and focus return passed, with transitions set to 0.01ms. An additional 320px check found no horizontal overflow and confirmed the milestone buttons and wordmark met 44px minimum touch-target dimensions after a flex-shrink adjustment.

These browser checks establish layout and interaction behavior for the tested Chromium viewports, not usability with visitors or WCAG 2.2 AA conformance. Screen-reader output, other browsers, and zoom/text enlargement have not been evaluated. Reduced-motion styling was checked; broader assistive-technology behavior remains untested. The owner approved the high-level flow on 2026-10-26; the browser observations do not establish user preference or approve either panel treatment.

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

### DS-TL-007 — Primary Spatial Milestone Selection Path

- **Category / status:** Decision / `Open`
- **Question:** In the spatial overworld, should the primary path require entering a chapter first before selecting a milestone, or allow direct milestone selection as the primary route?
- **Options to evaluate:** Chapter-first path vs direct milestone-first path, while preserving the accessible non-spatial milestone list in both.
- **Scope:** Primary interaction path inside the spatial chapter view; does not change the committed requirement for a non-spatial route.
- **Dependencies:** DS-TL-001; DS-TL-002; DS-REQ-003.
- **Owner input:** On 2026-10-26, the owner selected chapter-first as the preferred candidate under test, not a committed choice.
- **Next action:** Compare hierarchy comprehension, extra-step cost, and return-orientation clarity in the existing spatial prototype before committing.

### DS-TL-008 — Overview-to-Chapter Transition Model

- **Category / status:** Decision / `Open`
- **Question:** What exact transition pattern should connect the chronological overview to the chapter/overworld view and back?
- **Options to evaluate:** Explicit “Explore life chapters” entry plus explicit return vs alternatives with equivalent clarity and keyboard access.
- **Scope:** Entry/exit controls, labels, and expected back-path behavior between overview and chapter views.
- **Dependencies:** DS-TL-002; DS-TL-007; DS-REQ-003.
- **Owner input:** The named entry/return route is the leading candidate, but not committed.
- **Next action:** Validate the transition labels and backtracking behavior against orientation and keyboard tasks before committing.

### DS-TL-009 — Preview Panel Presentation by Viewport

- **Category / status:** Decision / `Open`
- **Question:** Within the committed preview-to-story flow, what responsive presentation rules should the preview panel use across phone, intermediate, and desktop widths?
- **Options to evaluate:** Bottom-sheet, side-panel, or other presentation thresholds and sizing rules that preserve readability and focus behavior.
- **Scope:** Responsive presentation of the committed preview dialog, not the underlying decision to use preview-to-story flow.
- **Dependencies:** DS-TL-004; DS-RWD-001; DS-RWD-002; DS-REQ-003.
- **Owner input:** The prototype demonstrated phone bottom-sheet and desktop side-panel behavior, but no presentation rule set is approved.
- **Next action:** Define and test viewport thresholds, max widths/heights, and content limits while preserving keyboard and reduced-motion behavior.

### DS-RWD-001 — Desktop Composition and Use of Available Space

- **Category / status:** Decision / `Open`
- **Question:** How should desktop use its additional width while preserving a clear focal point and the same content hierarchy?
- **Options to evaluate:** Persistent detail panel, contextual navigation, deliberately wider timeline/map composition, or another evidence-supported treatment.
- **Scope:** Desktop and intermediate responsive compositions; exact breakpoints remain open until tested against content.
- **Dependencies:** DS-RESP-001; DS-TL-002; DS-TL-004.
- **Owner input:** On 2026-10-26, the owner deferred choosing a desktop composition and deferred scoping a second prototype round until the remaining first-round decisions have been discussed.
- **Next action:** Complete the remaining first-round decisions before scoping or building more prototypes. Then compare desktop compositions using the same atlas content and interaction model.

### DS-RWD-002 — Intermediate Responsive Composition Behavior

- **Category / status:** Decision / `Open`
- **Question:** How should layout and interaction transition between phone and desktop across intermediate widths (for example around 768–1024), including timeline orientation and panel behavior?
- **Options to evaluate:** Fixed breakpoint switch vs staged transitions for map/index density, panel placement, and spacing.
- **Scope:** Tablet and intermediate-width responsive behavior across overview, chapter, and preview states.
- **Dependencies:** DS-RWD-001; DS-TL-003; DS-TL-009; DS-REQ-003.
- **Owner input:** Added to split this concern from desktop-only composition decisions before round-2 scoping.
- **Next action:** Decide alongside DS-RWD-001 when second-round responsive comparisons are scoped.

### DS-VIS-002 — Game Influence by Experience Depth

- **Category / status:** Decision / `Committed`
- **Decision:** Use a depth gradient in visual expression: retain a professional editorial foundation throughout; use restrained graphic/game-inspired cues on the recruiter-first homepage; allow stronger exploration motifs in the timeline and deeper stories. Keep the same underlying design system, hierarchy, and clarity at every depth; visitors should not need game knowledge.
- **Rationale:** Provides a clear professional first impression with a distinct note of personality, while rewarding visitors who explore deeper with more expressive interaction and visual cues.
- **Scope:** High-level distribution of game-inspired expression only. It does not prescribe a literal map, game genre, palette, typography, iconography, illustration style, or component values.
- **Source:** Owner selection on 2026-10-22; [PROJECT_BRIEF.md](PROJECT_BRIEF.md), Experience Direction; [MOSCOW.md](MOSCOW.md), Could Have.
- **Approved by:** Mehmet Melih Sahin, 2026-10-22.

### DS-VIS-003 — Graphic/Illustration System Detail

- **Category / status:** Decision / `Open`
- **Question:** What detailed graphic and illustration rules (map language, landmarks, iconography, strokes/fills, contour density, and labeling conventions) realize the approved atlas direction clearly and accessibly?
- **Constraints:** Must support the committed high-level direction without reducing clarity, readability, contrast, or professional credibility.
- **Scope:** Illustration and graphic-system rules for homepage-to-deep-view continuity; does not select palette tokens or typography families/values.
- **Dependencies:** DS-VIS-002; DS-VIS-004; DS-VIS-005; DS-VIS-006; DS-TL-002.
- **Owner input:** On 2026-10-26, the owner deferred choosing an atlas illustration treatment; this remains open.
- **Next action:** Complete the remaining first-round decisions, then compare illustration treatments and label/landmark rules before specifying final tokens.

### DS-VIS-005 — Palette System Direction

- **Category / status:** Decision / `Open`
- **Question:** Which high-level palette direction best supports recruiter-first readability on the homepage while allowing richer atlas expression deeper in the timeline?
- **Options to evaluate:** Warm light editorial base with richer atlas palette vs more neutral/minimal alternatives.
- **Scope:** Palette direction only; exact semantic token values and contrast pairings remain unspecified.
- **Dependencies:** DS-VIS-002; DS-VIS-004; DS-VIS-003.
- **Owner input:** On 2026-10-26, the owner selected warm-light-plus-richer-atlas as the preferred candidate under test, not committed.
- **Next action:** Keep open until round-2 visual comparisons are scoped; commit only after contrast and hierarchy checks.

### DS-VIS-006 — Typography System Direction

- **Category / status:** Decision / `Open`
- **Question:** What high-level type hierarchy should support professional readability while fitting the atlas direction?
- **Options to evaluate:** Restrained display face plus readable sans-serif body vs single-sans and serif-heading alternatives.
- **Scope:** Type direction and hierarchy only; no specific families, licensing, or exact size/line-height tokens selected yet.
- **Dependencies:** DS-VIS-002; DS-VIS-004; DS-VIS-003.
- **Owner input:** On 2026-10-26, the owner selected display-plus-sans as the preferred candidate under test, not committed.
- **Next action:** Keep open until round-2 visual comparisons are scoped; commit only after readability and accessibility checks.

### DS-VIS-004 — Literal Atlas versus Abstract Graphic Exploration Language

- **Category / status:** Decision / `Committed`
- **Decision:** Use a literal illustrated atlas/overworld visual language—illustrated lands, terrain, and places—for the spatial chapter-exploration view. Maintain the professional editorial foundation on the homepage and apply stronger exploration motifs deeper in the experience, consistent with DS-VIS-002.
- **Rationale:** The owner selected the atlas concept to visually reinforce the committed spatial-overworld structure and create a distinctive exploration layer. The paired boards supported comparison but were not tested with recruiters or visitors; this is the owner's design choice, not a usability finding.
- **Options considered:** Abstract editorial graphics using paths, markers, labels, and progression cues without literal terrain. This remains a useful fallback if literal atlas treatment harms clarity, consistency, or accessibility.
- **Scope:** High-level visual language for the overworld and related deeper exploration views. This does not decide exact game genre, artwork, assets, palette, typography, map geometry, landmark treatment, or detailed timeline interaction.
- **Dependencies:** DS-VIS-001; DS-VIS-002; DS-TL-001.
- **Owner input:** The owner chose to compare both directions on 2026-10-22 and explicitly approved the literal atlas direction on 2026-10-26.
- **Approved by:** Mehmet Melih Sahin, 2026-10-26.
- **Next action:** Develop remaining visual foundations and detailed illustration guidance through DS-VIS-003 and validate accessibility before design sign-off. Do not build further prototypes unless the owner asks.

#### Observations

- **Prototype:** [Atlas concept board](./prototypes/DS-VIS-004/atlas-board/) and [abstract editorial graphics concept board](./prototypes/DS-VIS-004/editorial-board/), each showing the same provisional homepage first screen, selected work, seven-milestone timeline, and CompanyLens story page. Both use neutral, high-contrast styling to keep the comparison on graphic language; neither specifies a final palette, typeface, or illustration treatment.
- **Viewport checks:** Ran both boards' homepage and story page in headless Chromium at 390 × 900 and 1440 × 900 CSS pixels. Neither page had horizontal overflow at either width. The homepage showed all seven milestone entries; the hero used a single column at 390px and two at 1440px, while the timeline composition changed from one column to two. This checks these rendered pages and widths only.
- **Recruiter clarity:** Both boards keep the same provisional headline, attributed proof excerpt, selected-work hierarchy, seven dated milestones, plain-language chapter labels, and direct CompanyLens story path. The atlas's chapter-land metaphor is visually explicit but could invite spatial interpretation; its text list remains the clear content route. The editorial path is less metaphor-dependent. Neither impression was tested with recruiters or visitors.
- **Personality and consistency:** The atlas conveys the more literal exploration personality through landforms and contour lines; the editorial direction uses a more restrained progression language of paths and markers. Both keep the first screen editorial and strengthen their motif in the timeline and story. These are prototype comparisons, not findings about preference or final professional fit.
- **Accessibility and non-spatial use:** Keyboard tab checks at both widths found visible focus on all 10 homepage links and all 8 story-page links in each board; Enter opened the CompanyLens story from the atlas homepage. With reduced motion emulated at both widths, smooth scrolling resolved to `auto` and transitions to `0.01ms`. Each timeline has an ordered text list with milestone titles, dates, and chapter names independent of its illustration, so the atlas does not require spatial navigation and the editorial version remains a non-spatial index. Defined text, link, border, and focus colors measure at least 4.54:1 against white. These checks do not establish WCAG 2.2 AA conformance, screen-reader behavior, touch-target sizing, zoom/reflow, or accessibility in other browsers.
- **What this did not show:** No evidence establishes which board recruiters understand or prefer, whether atlas imagery adds enough value to justify its extra metaphor, or whether the direction remains effective with real visitors and final assets. The owner selected the high-level atlas language, but palette, typeface, artwork, detailed layout, and broader usability and assistive-technology testing remain open.

### DS-MEDIA-001 — Project and Timeline Imagery Strategy

- **Category / status:** Decision / `Open`
- **Question:** Which content benefits from project screenshots, custom illustrations, photographs, or no imagery? How should assets be sourced and described?
- **Constraints:** Media must support, not obscure or substitute for, evidence of actual work; use permitted assets and appropriate text alternatives.
- **Scope:** Homepage, timeline landmarks, project stories, and responsive media behavior.
- **Dependencies:** DS-VIS-002; DS-VIS-003.
- **Owner input:** On 2026-10-26, the owner deferred choosing a media strategy direction and did not select a preferred candidate.
- **Next action:** Keep this decision open while first-round choices are finalized. Then compare evidence-first and richer-atmosphere media mixes using the same story content and accessibility checks.

## Adding and Updating Records

Use the record fields and lifecycle in [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md), with stable IDs and links to requirements, evidence, specifications, prototypes, and validation. Add an item to the status summary when creating it. When a decision changes, preserve the old record as `Superseded`, link its replacement, and update affected authoritative artifacts in the same change. Do not copy detailed token values or component rules into this register.

Unless a record says otherwise, the project owner is its decision owner and approver. Open records remain unapproved; their next actions are discovery or discussion steps, not implied decisions.
