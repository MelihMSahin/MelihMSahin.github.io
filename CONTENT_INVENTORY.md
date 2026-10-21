# Content Inventory

**Status:** Draft; revised with Melih's feedback. Not approved copy.  
**Updated:** 2026-10-21

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

**Preferred timeline hierarchy:** The initial view should be one level in from the broad overview: show scannable milestone titles and dates, including roles and projects. Zoom out once to group these into major life chapters (moving to the UK, university and graduation, early engineering career). Zoom in for activity and story details. Avoid hiding the names of important roles or projects until a visitor zooms in. Whether this is implemented as a literal zoomable map remains open.

- **2016:** Moved from Turkey to the UK.
- **2017-2022:** The Kingston Academy; A levels and GCSEs per the long CV.
- **2022-2025:** BSc Computer Science and Mathematics, Queen Mary University of London; First Class with Honours (81.0%).
- **2022 and 2023:** GMTK game development competitions (“Reverse Escort Mission”, “Roll of the Dice”). Links and team/contribution details to confirm later.
- **2023-2025:** Course representative; lab demonstrator roles; Mathematics Society events organiser.
- **2024:** Globant Software Engineer Intern; PetMinder project; Big Data and final-year projects.
- **2025:** Student Ambassador; Onsite Manager at Balans International Ltd.
- **2026:** Developer at Sprift (February-August); Graduate Software Engineer at Deloitte (September-present), with no role details for now as it is too recent.

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
- **Deloitte:** Resolved: no details for now; timeline shows only title and start.
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
- **Timeline hierarchy (preferred):** Open on a scannable index of milestone titles and dates; zoom out once for major life chapters and zoom in for activity and story details. Keep key role and project names visible in the initial view.

## Still Open

1. Create the public forwarding email alias.
2. Verify profile links are current before featuring them.