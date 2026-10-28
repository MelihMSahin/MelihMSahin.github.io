# Content Inventory

**Status:** Draft; revised with Melih's feedback. Not approved copy.  
**Updated:** 2026-10-22

This bounded inventory captures material that could support the first-release Must-haves. It is not a complete public biography. The facts and personal context recorded here are approved for public use. Personal email, phone number, and street address are excluded; Melih plans to create a forwarding email alias for public contact.

## Agreed Direction

The portfolio should present Melih's interest in **system design**, **ML/AI systems engineering**, and **reliability/platform engineering**. The evidence below is a starting point for selecting a small number of strong stories, not a claim that every area is equally demonstrated today.

## STAR Story Candidates

### Globant: Meeting-to-Presentation AI Workflow

**Dates:** June-August 2024  
**Potential fit:** ML/AI systems engineering; system design

- **Situation:** During a discovery phase, a team explored automating the conversion of meeting content into client-facing presentations.
- **Task:** Build and demonstrate a multi-agent proof of concept for that workflow.
- **Action:** The LinkedIn profile says Melih led a three-person team, researched AutoGen and LangChain, designed a multi-agent workflow, extended `python-pptx` for branded output, and built Python/API integrations. The long CV additionally mentions ChatGPT API integration, error handling, and a stakeholder presentation.
- **Result / learning:** Delivered a functional prototype, ready for use, that informed Globant's early commercial AI-agent product. Do not claim time savings (not measured) or production use; the latter need not be mentioned. Confirm individual contribution within the team.
- **Sources:** `LinkedInProfile.pdf`; `Latex CV Long Version/globant.tex`; `Latex CV Long Version/main.tex`.

### Sprift: Unified Property API

**Dates:** February-August 2026  
**Potential fit:** system design; reliability/platform engineering

- **Situation:** Sprift is a property-data platform covering more than 30 million UK residential properties, used by property professionals. Users needed a single, unified API across property types; two separate endpoints already existed.
- **Task:** Provide a unified API for all property types without breaking the existing endpoints or their users.
- **Action:** Built the unified API for all property types, with Swagger documentation and usage guides. Kept both existing endpoints reachable and behaving as before while steering new users to the unified path, which was complex because the unified output format differed. Tested the old workflows, each individual path, and the new workflows, including edge cases and unusual inputs.
- **Result / learning:** Delivered the unified API with documentation and backward compatibility. Learned API documentation, how Swagger works, and how to merge functionality into one endpoint without affecting existing ones. No usage or adoption figures are given; do not claim any.
- **Context only:** Website downtime fell after Melih joined, but his individual impact was modest and causation is unestablished, so do not present it as his result.
- **Sources:** `LinkedInProfile.pdf`; `Latex CV Long Version/main.tex`; `Latex CV Long Version/sprift.tex`.

### Sprift: Front-End Development and Light-Mode Refresh

**Dates:** February-August 2026  
**Potential fit:** front-end engineering; product implementation; maintainable software

- **Situation:** Melih worked as a full-stack engineer at Sprift, including a lot of UI updates. The website needed its visual design changed from dark mode to light mode, and Figma/HTML designs needed to be implemented in the product.
- **Task:** Build and update user interfaces to match the designs while keeping the code modular and maintainable.
- **Action:** Implemented UI using JavaScript, CSS, and HTML; translated Figma and HTML designs into code; applied clean programming principles by modularizing code, removing magic numbers, and reducing technical debt.
- **Result / learning:** Changed the website from dark mode to light mode. Learned how to translate Figma and HTML designs into code and strengthened skills in JavaScript, CSS, HTML, modular code, and reducing technical debt. No user feedback or usability metrics are available, so do not claim measured impact.
- **Source:** Melih's confirmation, 2026-10-21.

### Firebrand: CompanyLens MVP for Deloitte

**Dates:** Online training in the two weeks before the project; project ran 28 September-2 October 2026; **Potential fit:** system design; backend engineering; technical leadership; collaboration and delivery

- **Situation:** As part of Deloitte training delivered through Firebrand, a five-person team built a website MVP for company search and client-onboarding research. The public project repository describes CompanyLens as using an ASP.NET backend, Angular frontend, and SQLite database.
- **Task:** Build the MVP as a team and present it to Deloitte directors.
- **Action:** Melih's main role was the backend. He contributed to requirements prioritization by deciding whether tasks were Must-have or Should-have. He proposed a star-style architecture with the backend as the central hub, avoiding direct coupling between the front end, database, and API. He also proposed separate API paths for distinct input types, such as exact-match IDs versus names, to improve separation of concerns and validation. He took a major part in leading technical discussions and systems design. In the two weeks of online training before the project, the team learned Angular, C#, and Azure fundamentals.
- **Result / learning:** The team presented the MVP to Deloitte directors. Melih reports that the directors responded positively to the project and the team's design discussions and choices. Do not imply a measured outcome, production use, or adoption.
- **Testimonial evidence:** Nick O'Rourke, the project manager who oversaw the team, supplied the following assessment. He is a Technical Trainer and owner of NicoTech Global; during the project he was a Firebrand contractor. His public LinkedIn profile is [linkedin.com/in/nick-o-rourke-37a487405](https://www.linkedin.com/in/nick-o-rourke-37a487405). He previously spent 22 years at DHL, including five years as a Senior Infrastructure Project Manager.

  > Melih is an outstanding talent.Melih reported to me to deliver an MVP for Deloitte through Firebrand.It was obvious to me very early on that Melih is more than a developer, but has an excellent understanding of systems architecture. During the project, I encouraged him to develop these skills, and he excelled; as a result, he was able to become the de facto leader of the project group on a technical lead basis.There is no doubt in my mind that during his early years at Deloitte, he will be exposed to all sorts of interesting projects and will develop into an outstanding Technical Lead/Systems Architect and become an industry leader in the years to come. This young man has so much potential.

- **Testimonial use:** The testimonial is publicly posted on LinkedIn. Keep the full wording here as source evidence. The approved homepage excerpt is “...has an excellent understanding of systems architecture.” Attribute it to Nick O'Rourke, project manager, and keep the fuller testimonial and project context inside the CompanyLens story. Preserve quoted wording verbatim; do not present a summary as a direct quote. This testimonial is qualitative corroboration, not measured outcome or proof of seniority.
- **Sources:** [Firebrand project repository](https://github.com/Joshiling/firebrand-project) for the project description and technologies; Melih's confirmation, 2026-10-22, for dates, team size, training, role, requirements prioritization, architecture/API contributions, presentation, and reported director response; Nick O'Rourke's [public LinkedIn profile](https://www.linkedin.com/in/nick-o-rourke-37a487405) for testimonial attribution and public availability.

### Final-Year Project: Handling Randomness in Multi-Agent Scenarios

**Dates:** October 2024-May 2025 (report dated 6 May 2025)  
**Potential fit:** ML/AI systems engineering; system design

- **Situation:** Exploding Kittens has little published strategy, and too little recorded expert play to train supervised agents. Its high randomness also makes it hard to judge whether a strategy works.
- **Task:** Build a self-teaching multi-agent system for the five-player game and evaluate what the agents learn by graphing their decisions in specific situations. Research questions were which libraries suit this, whether agents can learn the game with five players, and whether they beat random play.
- **Action:**
  - Built a custom PettingZoo environment for the game rather than using the existing Java-based TAG framework.
  - Chose Tianshou with PyTorch, over PyTAG, for its Python codebase and documentation.
  - Designed an actor-critic network with a shared backbone, a separate actor head per decision type, and a single critic.
  - Extended Tianshou's PPO policy for multiple agents and a complex action space, including masked action distributions and multi-agent returns using Generalized Advantage Estimation.
  - Debugged a silent early-reset bug caused by a PettingZoo/Tianshou mismatch, and a gradient-explosion issue that took up to half a day of training to appear, fixed by clipping the change between old and new distributions.
  - Chose to log raw action logits rather than win rates or action counts, which are misleading in this game, and graphed them in TensorBoard.
- **Result / learning:**
  - Environment and network tests were written.
  - Logit graphs showed agents learning to avoid giving away defuse and attack cards when targeted by a favor card.
  - Agents did not learn more specific decisions, such as drawing after seeing the future or when to nope, and produced no strategy usable against humans.
  - The report attributes this mainly to a flattened, overly complex observation space, and proposes redesigning observations, trying a true multi-agent policy, and tuning hyperparameters.
  - Learned about reinforcement learning, library compatibility, and controlling code flow. The CV reports a 10,000-word dissertation and 70.1% (First).
- **Honest framing:** The result is partial. Present it as a rigorous build and evaluation with an honest diagnosis of limits, not a successful strategy-learning system.
- **Decisions:** Use the CV title, “Handling Randomness in Multi-Agent Scenarios”, as it is more approachable; the formal report title is “Proximal Policy Optimization’s Ability to Play the Card Game Exploding Kittens” and can appear in the detail layer. The test coverage figure is omitted. The CV says a “visual behaviour framework” was designed, which corresponds to the logit logging and graphing.
- **Confirmed:** The 10,000-word dissertation length.
- **Repository:** https://github.com/MelihMSahin/pettingzoo_exploding_kittens
- **Sources:** `FYP/main.tex`; `Latex CV Long Version/education.tex`; `Latex CV Long Version/main.tex`.

### PetMinder: Team Software Engineering Project

**Dates:** January-April 2024  
**Potential fit:** system design; collaboration and delivery

- **Situation:** A seven-person team worked on a pet-care application.
- **Task:** Build the application and translate stakeholder needs into a software design.
- **Action:** Melih contributed to the Node.js backend, including login page adjustments and various other changes. As a group, the team produced class, sequence, and use case UML diagrams in Visual Paradigm and a risk assessment covering a range of risks such as illness and communication gaps. Individual authorship of specific diagrams, risks, and design decisions is not recalled, so credit these to the team. The team used conventional software design approaches.
- **Result / learning:** The professor and demonstrator chose it as the best of roughly six teams building PetMinder; 82.3% is a First-class result. No individual learning has been recorded yet.
- **Use:** A supporting, lower-prominence story: it shows team delivery and design practice but lacks specific individual decisions.
- **Sources:** `Latex CV Long Version/education.tex`; `Latex CV Long Version/main.tex`.

### Big Data Analysis with Apache Spark

**Dates:** October-December 2024  
**Potential fit:** reliability/platform engineering; distributed data systems

- **Situation:** Coursework involved large NYC Taxi and Ethereum datasets, each described as containing more than 20 million records.
- **Task:** Analyze the datasets and build distributed data-processing workflows.
- **Action:** Used PySpark, AWS cloud storage, Spark graph analysis, structured streaming, and Matplotlib visualizations.
- **Result / learning:** The long CV reports a 95% module grade.
- **Optional detail:** Nothing is required. If you recall them, I would use one or two of: the main finding from either dataset, a design choice (e.g. how data was partitioned or stored), or how you checked results were correct. Otherwise this stays a brief, lower-prominence entry.
- **Sources:** `Latex CV Long Version/education.tex`; `Latex CV Long Version/main.tex`.

## Timeline (Approved Entries)

**Agreed initial milestones:** Moved to the UK; Kingston Academy; Queen Mary degree; Globant internship; final-year project; Sprift unified API; current Deloitte role (title and start date only). Show milestone titles and dates for easy scanning. The high-level spatial-overworld structure and literal atlas visual language are approved; the responsive chronology is older-to-newer vertically on phones and older-to-newer, left-to-right, horizontally on desktop. See [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) for scope and status. Exact chapter-to-landmark mapping, map geometry, visual details, and spatial navigation remain open; chapter-first is currently a preferred path under test, not a committed interaction. PetMinder, Big Data, GMTK, and university activities may appear in the same view if it remains scannable, or deeper under relevant education and project milestones.

- **2016:** Moved from Turkey to the UK.
- **2017-2022:** The Kingston Academy; A levels and GCSEs per the long CV.
- **2022-2025:** BSc Computer Science and Mathematics, Queen Mary University of London; First Class with Honours (81.0%).
- **2022 and 2023:** GMTK game development competitions (“Reverse Escort Mission”, “Roll of the Dice”). Links and team/contribution details to confirm later.
- **2023-2025:** Course representative; lab demonstrator roles; Mathematics Society events organiser.
- **2024:** Globant Software Engineer Intern; PetMinder project; Big Data and final-year projects.
- **2025:** Student Ambassador; Onsite Manager at Balans International Ltd.
- **2026:** Developer at Sprift (February-August); Graduate Software Engineer at Deloitte (3 September-present). Keep the initial Deloitte milestone to the role title and start date only.
  - **Supporting detail:** Deloitte training included two weeks of online learning in Angular, C#, and Azure fundamentals before the Firebrand project (28 September-2 October). The five-person team built and presented the CompanyLens MVP; Melih's main role was backend, and he helped lead technical discussions and systems design. See the STAR candidate above for the director response and testimonial evidence.

Not included for now: the 2021 Director's Assistant role and Zero To Mastery Academy study (February 2023-January 2024), which are in the sources but were not selected. Say if either should be added.

## Personal Context Candidates

The original README and long CV mention mathematics and patterns, board/strategy/video games, game development, high-intensity fitness, digital/pixel art, Turkish origin and connections to Istanbul and Antalya, and Turkish food such as lahmacun. Melih confirms these details can be public, and the homepage should show some personality to distinguish it from LinkedIn. Feature a small selection on the homepage and keep the rest deeper. Open: whether game development merits a project story of its own.

## Skills and Links to Verify

- Technologies evidenced in the sources include Python, JavaScript, PHP, C#, AWS, Azure, MySQL, PyTorch, Gymnasium, PySpark, Unity, Git, and GitHub. The CV's proficiency labels may be used; specifics to be agreed when the skills section is written.
- The LinkedIn PDF lists LinkedIn, GitHub, Kaggle, and TryHackMe profiles. Confirm which are current and worth featuring. The personal-site URL in the long CV may be an older route; verify it before use.
- Public use of the content and profile links in this inventory is approved. Verify links are current before featuring them. Keep the personal email, phone number, and home address private; use a forwarding email alias for public contact when it is created.

## Source Conflicts and Verification

- **Sprift end date:** Resolved: August 2026 (the standalone `sprift.tex` is outdated).
- **Globant outcome:** Resolved: functional and ready for use, never released or used; claim only that it informed an early commercial AI-agent product. No time-saving claim.
- **Deloitte:** The initial timeline milestone shows only role title and start date (3 September 2026). The deeper timeline detail and Firebrand STAR candidate above cover the confirmed training project; do not add project details to the initial milestone.
- **Reliability evidence:** As a junior, Melih's individual impact was limited, though Sprift downtime fell after he joined. Present reliability/platform engineering as a developing interest backed by relevant experience (serverless AWS, error handling, refactoring, distributed pipelines), not as proven impact.
- **STAR completeness:** For each selected story, separate team outcomes from individual contribution; no STAR story items remain outstanding.

## Decisions

- **Lead stories (decided):**
  - System design: Sprift unified API.
  - ML/AI systems engineering: final-year project (Handling Randomness in Multi-Agent Scenarios).
  - ML/AI systems engineering in industry: Globant AI agent prototype.
- **Reliability/platform engineering (decided):** Present as a growing interest with supporting examples (Sprift backward compatibility, final-year project debugging), not a lead story.
- **Supporting layer (decided):** PetMinder and Big Data Analysis.
- **Public content (decided):** Facts and personal context in this inventory may be public; exclude personal email, phone number, and home address.
- **Timeline content (decided):** The initial view includes seven agreed milestones; keep key role and project names visible for scanning.
- **Overworld structure (approved at high level):** Use a spatial illustrated overworld for broad life chapters, with a literal atlas visual language. Chapter lands, milestone structures, detail rooms, and the role of the move to the UK remain concepts to refine; see [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) for committed scope and open interaction choices.
- **Visual direction (decided):** Bold, graphic game-inspired style with a literal illustrated atlas language for the spatial overworld. Exact palette, illustration style, map geometry, landmarks, and assets remain open.

## Still Open

1. Create the public forwarding email alias.
2. Verify profile links are current before featuring them.