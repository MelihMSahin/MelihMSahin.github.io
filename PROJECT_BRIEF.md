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

- **A layered timeline:** Start with a small number of high-level chapters, then let visitors reveal broader milestones and, at greater detail, specific activities. A map-like zoom interaction is an idea to explore, not a decided implementation.
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
- The intended archive is public by default, but personal contact should be professional contact only. Do not publish a home address or other sensitive personal information. Review content before publication; this brief does not assume a private, authenticated archive.

## Initial Scope

The first release should include a concise homepage, selected project or experience deep dives, a navigable timeline with more than one level of detail, clear contact and CV paths, and enough section structure to house the relevant facts without crowding individual pages.

Do not begin with a LinkedIn clone, a complete CV transcribed onto one page, a complex map visualization, user accounts, or an elaborate archive search system. A static, GitHub Pages-compatible site is a sensible implementation starting point for this repository, subject to confirming the preferred content-editing workflow.

## Success Criteria

- A recruiter can identify Melih's engineering direction and strongest evidence, then reach his CV or contact information without hunting.
- The homepage remains concise while deeper material is available through clear, predictable navigation.
- The timeline communicates progression at a glance and supports deliberate movement into more detailed milestones.
- Project content explains contribution and reasoning, not only technologies used.
- Personal content adds recognizable human context without diluting the professional message.
- The experience is designed and verified mobile-first, remains readable and keyboard-accessible across phone sizes, and scales well to desktop.

## Decisions to Resolve

1. Which specific roles, locations, and company types should the site target first?
2. Which project or experience best proves fit for AI-era engineering, and what evidence should lead the story?
3. Which strengths should be the top two or three priorities in the recruiter-facing narrative?
4. Should the timeline be a conventional expandable timeline, a spatial/map-like canvas, or another interaction that conveys zooming without sacrificing clarity?
5. How prominent should contact, CV download, and project exploration be relative to one another?
6. What visual references, accessibility requirements, and content-update workflow should guide implementation?

## Next Steps

1. Start with the provisional first-release priorities in [MOSCOW.md](MOSCOW.md). They set boundaries for discovery; they are not yet a final implementation contract.
2. Build a time-boxed content inventory from the LinkedIn PDF and long-form CV. Capture only candidate projects, roles, education, dated milestones, relevant personal context, and links needed to test the Must-haves. Record sources and flag conflicts or stale details for Melih to verify; do not transcribe every fact by default.
3. Use the inventory to select the strongest project evidence and recruiter-facing priorities, and to decide how much timeline depth the content supports. Resolve the remaining positioning, timeline interaction, calls to action, and content-maintenance questions.
4. Revise MoSCoW into the agreed first-release scope with clear completion criteria before implementation. Keep optional visual and interaction ideas out of Must unless discovery shows they are necessary.