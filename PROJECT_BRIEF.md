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

- **A layered timeline:** The initial view should be a scannable index of dated milestone titles, including roles and projects. One step out reveals broad life chapters; zooming in reveals activities and story details. This keeps important names visible without forcing visitors into dense descriptions. A literal map-like zoom interaction is still an idea to explore, not a decided implementation.
- **Project stories:** Explain selected work through its context, Melih's contribution, decisions, technical challenges, outcomes, and learning rather than repeating résumé bullets.
- **A fuller sense of the person:** Include interests and personal context with restraint, connecting them to curiosity and perspective where it feels genuine without turning every hobby into a work skill.
- **A navigable record:** Keep relevant facts accessible in clearly divided sections and deeper detail. Initial discovery should use good information architecture, not a site-wide search engine.

## Experience Direction

The first impression should be clear and professional for recruiters, with a distinct note of curiosity and playfulness. The homepage should behave like a concise portfolio; deeper pages can become more interactive and carry subtle influences from strategy games and exploration. The visual language may evolve with depth, but clarity and consistent navigation take priority over novelty.

Design mobile-first, using a 390 CSS-pixel-wide iPhone-class viewport as an initial reference rather than a fixed canvas. Ensure layouts adapt to narrower and wider phones, then scale up thoughtfully for desktop. Keep the top level brief. Put detail behind intentional links, expandable layers, or dedicated pages so visitors choose how deep to go. Make contact and CV access easy to find. Exact calls to action and the visual treatment remain open decisions.

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

1. Which locations and company types should the site target first?
2. How should the three engineering directions and supporting strengths be balanced in the recruiter-facing narrative?
3. Should the timeline hierarchy use literal zoom, or a simpler interaction that preserves the same overview and detail levels? An HTML prototype will inform this.
4. How should contact, CV access, and project stories be prioritized on the homepage?
5. What visual direction and content-update workflow should guide implementation?

## Technical Direction

- **Framework:** Astro with TypeScript, producing a static site with reusable components. A Node-based build workflow is acceptable.
- **Content:** Markdown for project stories and longer text; structured data (JSON or YAML) for dated timeline entries and their relationships, kept in the repository. No CMS or backend.
- **Hosting:** GitHub Pages, deployed with GitHub Actions.
- **Prototype:** Build a static HTML/CSS/JavaScript prototype at the 390px mobile width to test timeline scannability and zoom levels before implementation. Its markup and styles should be easy to port into Astro components.
- **Not decided:** Literal zoom versus a simpler interaction, and the visual design.

## Next Steps

1. Verify the selected profile links and create a professional forwarding email alias before launch.
2. Prototype the agreed timeline hierarchy and mobile-first homepage; decide whether literal zoom interaction improves scannability and accessibility.
3. Implement the finalized first-release priorities in [MOSCOW.md](MOSCOW.md), using verified content from the [inventory](CONTENT_INVENTORY.md).