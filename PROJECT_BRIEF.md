# Project Brief

**Status:** Discovery baseline; open decisions are called out below.  
**Owner:** Mehmet Melih Sahin  
**Last updated:** 2026-10-13

## Vision

Create a recruiter-ready software engineering portfolio that introduces Melih clearly and credibly, then rewards deeper exploration with selected project stories and a layered timeline of his work and life. It should be more personal and navigable than a CV or LinkedIn profile, while remaining focused rather than becoming a wall of biography.

## Purpose and Audiences

The primary audience is engineering recruiters and hiring teams at ambitious technology companies. The site should help them quickly understand Melih's technical strengths, the kinds of problems he wants to work on, and how to contact him or review his CV.

Secondary audiences are technical peers who want to explore his projects and approach, and Melih himself, who wants a structured record of experiences and milestones over time.

## Positioning

Present Melih as a technically strong, curious engineer who learns through practice and takes ownership. His preferred directions are system design, ML/AI systems engineering, and reliability/platform engineering. The site should communicate these interests without claiming expertise that the available evidence does not support.

The site should demonstrate technical depth, learning ability, delivery, thoughtful use of AI, and collaboration. Their relative priority still needs to be decided so the message does not become a list of equally weighted traits.

## Value Beyond a CV or LinkedIn

- **A layered timeline:** Start with a scannable chronological index of dated milestone titles, including roles and projects, with all seven Must-have milestones visible in the same overview layer. The approved high-level direction adds a spatial illustrated overworld for exploring broad life chapters, with deeper milestone stories beyond that. The exact hierarchy, map layout, controls, and zoom/pan behavior remain undecided; do not require gestures or a separate reveal action for required milestones.
- **Project stories:** Explain selected work through its context, Melih's contribution, decisions, technical challenges, outcomes, and learning rather than repeating résumé bullets.
- **A fuller sense of the person:** Include interests and personal context with restraint, connecting them to curiosity and perspective where it feels genuine without turning every hobby into a work skill.
- **A navigable record:** Keep relevant facts accessible in clearly divided sections and deeper detail. Initial discovery should use good information architecture, not a site-wide search engine.

## Experience Direction

The first impression should be clear and professional for recruiters, with a distinct note of curiosity and playfulness. The homepage should behave like a concise portfolio; deeper pages can become more interactive and carry subtle influences from strategy games and exploration. The visual language may evolve with depth, but clarity and consistent navigation take priority over novelty.

Design mobile-first, using a 390 CSS-pixel-wide iPhone-class viewport as an initial reference rather than a fixed canvas. Ensure layouts adapt to narrower and wider phones, then scale up thoughtfully for desktop. Keep the top level brief. Put detail behind intentional links, expandable layers, or dedicated pages so visitors choose how deep to go. Make contact and CV access easy to find. The approved high-level homepage sequence is first-screen message/proof, selected work, timeline overview, then restrained personal context; selected work and CV are co-primary actions, with contact easy to find. The first-screen message uses one integrated headline to combine professional identity, demonstrated experience, and direction; exact wording remains open. See the [design decision register](DESIGN_DECISIONS.md) for scope and open questions. Action placement and visual treatment remain open.

## Content and Editorial Rules

- Use `LinkedInProfile.pdf` as the authoritative source for facts that overlap with the long-form CV; use the CV for additional relevant detail.
- Reconcile conflicting or potentially outdated facts before publication. The source priority does not remove the need to verify current dates, roles, links, and contact information.
- Feature a small set of projects and experiences rather than reproducing every résumé entry at the same prominence. Preserve useful supporting facts in the deeper record.
- Keep personal interests present but proportionate to the professional purpose.
- The content and personal context in the inventory are approved for public use. Keep the personal email, phone number, and home address private; use a professional forwarding email alias for public contact once it is created. The site is a public portfolio, not a private archive.

## Initial Scope

The first release should include a concise homepage, selected project or experience deep dives, a navigable timeline with more than one level of detail, clear contact and CV paths, and enough section structure to house the relevant facts without crowding individual pages.

Do not begin with a LinkedIn clone, a complete CV transcribed onto one page, a complex map visualization, user accounts, or an elaborate archive search system. A static, GitHub Pages-compatible site is a sensible implementation starting point for this repository, subject to confirming the preferred content-editing workflow.

## Success Criteria

- A recruiter can identify Melih's engineering direction and strongest evidence, then reach his CV or contact information without hunting.
- The homepage remains concise while deeper material is available through clear, predictable navigation.
- The timeline's initial view makes key milestone titles and dates scannable; visitors can zoom out to see broad chapters or zoom in for more detail.
- Project content explains contribution and reasoning, not only technologies used.
- Personal content adds recognizable human context without diluting the professional message.
- The experience is designed and verified mobile-first, remains readable and keyboard-accessible across phone sizes, and scales well to desktop.

## Decisions to Resolve

1. What exact first-screen copy should express the committed positioning? See [DS-POS-002](DESIGN_DECISIONS.md#ds-pos-002), [DS-IA-001](DESIGN_DECISIONS.md#ds-ia-001), and [DS-IA-004](DESIGN_DECISIONS.md#ds-ia-004) for the approved hierarchy and proof point; exact wording remains open.
2. How should the approved scan-first timeline and spatial overworld be detailed and validated? Resolve the remaining hierarchy, navigation, chronology, responsive, and accessibility choices; see [DS-TL-001](DESIGN_DECISIONS.md#ds-tl-001), [DS-TL-002](DESIGN_DECISIONS.md#ds-tl-002), and related records.
3. What detailed visual foundations and content-update workflow should guide implementation?

## Technical Direction

- **Framework:** Astro with TypeScript, producing a static site with reusable components. A Node-based build workflow is acceptable.
- **Content:** Markdown for project stories and longer text; structured data (JSON or YAML) for dated timeline entries and their relationships, kept in the repository. No CMS or backend.
- **Hosting:** GitHub Pages, deployed with GitHub Actions.
- **Existing prototypes:** The static HTML/CSS/JavaScript prototypes compared timeline structure, chronology, and orientation at a 390px mobile reference width and representative desktop size. The approved overview is vertical and older-to-newer on phones, and horizontal, older-to-newer from left to right on desktop. It must not require sideways page scrolling or gestures. All seven Must-have milestones stay in the same initial overview layer; scrolling is acceptable on phones, but no separate reveal action is allowed. Supporting entries may be nested if they do not remain scannable. Automated browser checks do not establish usability. Build prototypes only within an owner-approved round of the decision loop in [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md).
- **Prototype feedback:** Button-based level switching felt like extending a dropdown. The constellation concept was rejected. The owner approved the spatial overworld as the timeline's high-level chapter-exploration direction; map shape, spacing, label placement, and interaction remain open.
- **Overworld direction:** Broad life chapters are explored through a spatial illustrated view after the chronological overview. The owner approved this high-level direction, not a specific map layout or interaction model. Chapters-as-lands, milestones-as-structures, and detail-as-rooms remain concepts to refine; the role of the move to the UK is also open.
- **Visual direction:** A bold, graphic game-inspired style and a literal illustrated atlas language for the overworld are approved at concept level. Exact region shapes, illustration style, landmarks, palette, and assets remain open for iteration; see the [design decision register](DESIGN_DECISIONS.md).
- **Layout principle:** Design the phone layout first, then compose a deliberate desktop layout (for example a persistent detail panel and a deeper level of detail) rather than stretching the mobile column.
- **Not decided:** Whether the map uses free panning, zoom, tap-to-enter lands or structures, or another accessible interaction. Details may be shown in a panel or inside a structure; test these options.

## Next Steps

1. Verify the selected profile links and create a professional forwarding email alias before launch.
2. Resolve remaining hierarchy, navigation, responsive, and accessibility decisions for the approved direction through rounds of the decision loop in [DESIGN_STRATEGY.md](DESIGN_STRATEGY.md); prototypes are built only within owner-approved rounds.
3. Implement the finalized first-release priorities in [MOSCOW.md](MOSCOW.md), using verified content from the [inventory](CONTENT_INVENTORY.md).