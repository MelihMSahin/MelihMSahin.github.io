# Content Inventory

**Status:** Draft for fact-check; candidate content only, not approved copy.  
**Updated:** 2026-10-14

This bounded inventory captures material that could support the first-release Must-haves. It is not a complete public biography. No personal email, phone number, or street address is reproduced here.

## Agreed Direction

The portfolio should present Melih's interest in **system design**, **ML/AI systems engineering**, and **reliability/platform engineering**. The evidence below is a starting point for selecting a small number of strong stories, not a claim that every area is equally demonstrated today.

## STAR Story Candidates

### Globant: Meeting-to-Presentation AI Workflow

**Dates:** June-August 2024  
**Potential fit:** ML/AI systems engineering; system design

- **Situation:** During a discovery phase, a team explored automating the conversion of meeting content into client-facing presentations.
- **Task:** Build and demonstrate a multi-agent proof of concept for that workflow.
- **Action:** The LinkedIn profile says Melih led a three-person team, researched AutoGen and LangChain, designed a multi-agent workflow, extended `python-pptx` for branded output, and built Python/API integrations. The long CV additionally mentions ChatGPT API integration, error handling, and a stakeholder presentation.
- **Result / learning:** Sources describe a prototype that reduced hours of manual preparation to a single-click workflow and informed an early commercial AI-agent product. Confirm the measured or observed time saving, product adoption, and exact individual contribution before making these claims public.
- **Sources:** `LinkedInProfile.pdf`; `Latex CV Long Version/globant.tex`; `Latex CV Long Version/main.tex`.

### Sprift: Property Platform Features and Reports

**Dates:** February-August 2026  
**Potential fit:** system design; reliability/platform engineering

- **Situation:** The LinkedIn profile describes a property-data platform covering more than 30 million UK residential properties and used by property professionals.
- **Task:** Deliver and improve full-stack platform features and property reports.
- **Action:** Build UI and API features in JavaScript and PHP; create interactive and PDF reports; work with AWS serverless services including Lambda and OpenSearch, with MySQL; refactor legacy code and collaborate through code review.
- **Result / learning:** Shipped production features and improved code readability. Specific user, performance, reliability, or technical-debt outcomes are not quantified in the sources; identify one concrete example if available.
- **Sources:** `LinkedInProfile.pdf`; `Latex CV Long Version/main.tex`; `Latex CV Long Version/sprift.tex`.

### Final-Year Project: Handling Randomness in Multi-Agent Scenarios

**Dates:** October 2024-May 2025  
**Potential fit:** ML/AI systems engineering; experimentation and learning

- **Situation:** A research project examined agent behavior in scenarios involving randomness.
- **Task:** Investigate the problem through a dissertation and reinforcement-learning implementation.
- **Action:** Implemented Proximal Policy Optimization with PyTorch and Gymnasium and designed a visual behavior framework.
- **Result / learning:** The long CV reports a 10,000-word dissertation and a First-class project result (70.1%). The research question, evaluation method, comparison baseline, and specific findings need to be summarized from the dissertation before this becomes a detailed story.
- **Sources:** `Latex CV Long Version/education.tex`; `Latex CV Long Version/main.tex`.

### PetMinder: Team Software Engineering Project

**Dates:** January-April 2024  
**Potential fit:** system design; collaboration and delivery

- **Situation:** A seven-person team worked on a pet-care application.
- **Task:** Build the application and translate stakeholder needs into a software design.
- **Action:** Melih contributed to the Node.js backend and took part in domain analysis and design using Visual Paradigm.
- **Result / learning:** The long CV says the project was voted best project of the year and received 82.3%. Confirm what the award/grade represents and which backend or design decisions were specifically his.
- **Sources:** `Latex CV Long Version/education.tex`; `Latex CV Long Version/main.tex`.

### Big Data Analysis with Apache Spark

**Dates:** October-December 2024  
**Potential fit:** reliability/platform engineering; distributed data systems

- **Situation:** Coursework involved large NYC Taxi and Ethereum datasets, each described as containing more than 20 million records.
- **Task:** Analyze the datasets and build distributed data-processing workflows.
- **Action:** Used PySpark, AWS cloud storage, Spark graph analysis, structured streaming, and Matplotlib visualizations.
- **Result / learning:** The long CV reports a 95% module grade. Clarify which pipeline or analysis best demonstrates design choices, scale, and correctness.
- **Sources:** `Latex CV Long Version/education.tex`; `Latex CV Long Version/main.tex`.

## Timeline Candidates

- **2016:** Moved from Turkey to the UK, according to the original README; confirm whether and how this belongs on the public timeline.
- **2017-2022:** The Kingston Academy; A levels and GCSEs listed in the long CV.
- **2021:** Director's Assistant at Balans International Ltd, per the long CV.
- **2022-2025:** BSc Computer Science and Mathematics at Queen Mary University of London; First Class with Honours, 81.0%, per the long CV.
- **2022 and 2023:** Participated in GMTK game development competitions; games named in the long CV are “Reverse Escort Mission” and “Roll of the Dice.” Confirm links and team/contribution details.
- **2023-2025:** Course representative; lab demonstrator roles; Mathematics Society events organiser, per the CV and LinkedIn profile.
- **2024:** Globant Software Engineer Intern; PetMinder project; Big Data and final-year projects.
- **2025:** Student Ambassador and Onsite Manager at Balans International Ltd.
- **2026:** Developer at Sprift (February-August); Graduate Software Engineer at Deloitte (September-present according to the LinkedIn PDF and long CV). Verify current role details and what may be described publicly.

## Personal Context Candidates

The original README and long CV mention mathematics and patterns, board/strategy/video games, game development, high-intensity fitness, digital/pixel art, Turkish origin and connections to Istanbul and Antalya, and Turkish food such as lahmacun. These can provide human context, but the homepage should feature only a small selection. Confirm which details Melih still wants public and whether game development merits a project story of its own.

## Skills and Links to Verify

- Technologies evidenced in the sources include Python, JavaScript, PHP, C#, AWS, Azure, MySQL, PyTorch, Gymnasium, PySpark, Unity, Git, and GitHub. Treat the CV's proficiency labels as unverified and avoid proficiency ratings unless Melih confirms them.
- The LinkedIn PDF lists LinkedIn, GitHub, Kaggle, and TryHackMe profiles. Confirm which are current and worth featuring. The personal-site URL in the long CV may be an older route; verify it before use.
- Confirm the current professional contact method and CV file. Keep personal contact information out of this inventory and do not publish a home address.

## Source Conflicts and Verification

- **Sprift end date:** `LinkedInProfile.pdf` and `Latex CV Long Version/main.tex` say February-August 2026; the standalone `sprift.tex` says February-present. Per the project source rule, use August as the working date and confirm it before publication.
- **Globant outcome:** The LinkedIn profile uses stronger language about a production-ready prototype, single-click workflow, and commercial product; the long CV describes a discovery-phase prototype that informed a product. Confirm the precise status and avoid implying launch or adoption without evidence.
- **Deloitte:** The PDF and long CV list a Graduate Software Engineer role starting September 2026. Confirm current responsibilities and identify a publishable example when appropriate.
- **Reliability evidence:** AWS/serverless work, error handling, refactoring, and distributed pipelines are promising evidence, but the sources do not establish reliability outcomes such as uptime, incident reduction, latency, monitoring, or load-test results. Add specific evidence if available; otherwise describe this as an area of interest and experience, not proven impact.
- **STAR completeness:** For each selected story, confirm Melih's individual responsibility, the key decision(s), and a result or learning that can be supported. Separate team outcomes from individual contribution.

## Decisions Informed by This Inventory

1. Which two or three stories best represent the three preferred engineering directions?
2. What concrete reliability/platform example and outcome can be verified?
3. Which personal details and timeline milestones add value without crowding the recruiter-facing experience?
4. Which profile links and contact route should be public?