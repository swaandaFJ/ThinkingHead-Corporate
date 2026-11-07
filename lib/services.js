// The eight service pillars, loaded from Ben's "Services Section Copy" (9 October 2026).
// The Services page, the Home page cards and the enquiry pop-up all read from this one list.
//
//   promise       one line under the service title (Services page)
//   summary       short card text (Home page cards)
//   problem       opening paragraph, with evidence (Services page)
//   solution      "How ThinkingHead solves it" paragraph (Services page)
//   deliverables  "What we deliver": 8 items, each { title, text }
//   steps         "How we work": 4 steps
//   outcome       the closing "You get:" line
//
// To edit wording, change the text below. **Double asterisks** make a phrase bold.
// (Step numbers are added by the page, and full stops at the end of steps are dropped for consistency.)
// NOTE: the outcome line for service 08 was marked "proposed" in the source document.

export const SERVICES = [
  {
    "id": "research-strategy-advisory",
    "name": "Research, Strategy & Advisory",
    "promise": "Know before you commit.",
    "summary": "Deep, sourced research turned into strategy your board can act on, so investments, programmes and partnerships are built on evidence rather than instinct.",
    "problem": "Most expensive mistakes begin as unchecked assumptions: a market that was smaller than expected, a regulation nobody read, a competitor nobody noticed, a funder whose priorities had already moved. In Nigeria the cost of a wrong turn is amplified by currency swings, policy shifts and tight capital. Generic reports and borrowed templates do not help, because they describe the world in general rather than your market, your regulators and your customers.",
    "solution": "We profile the problem before proposing an answer. Our analysts map the market, the competition, the regulatory landscape and the people affected, test what has already worked in Africa and elsewhere, and trace every claim to a verifiable source. We then turn the findings into a strategy with priorities, phases, owners, budgets and measures, written plainly enough for a board, a funder or a regulator to act on. You can defend every recommendation, because you can see the evidence behind it.",
    "deliverables": [
      {
        "title": "Market and competitor intelligence",
        "text": "market sizing, competitor mapping, pricing and customer research for your sector."
      },
      {
        "title": "Feasibility studies and business cases",
        "text": "honest assessments of whether an idea will pay, before capital is committed."
      },
      {
        "title": "Corporate, growth and go-to-market strategy",
        "text": "where to play, how to win, and in what order."
      },
      {
        "title": "Policy, regulatory and stakeholder analysis",
        "text": "what the rules (NDPA, CBN, NITDA, sector regulators) mean for you, and who must be on side."
      },
      {
        "title": "Partnership, fundraising and investor readiness",
        "text": "funder mapping, case for support, investment memos and pitch narratives."
      },
      {
        "title": "Proposals, concept notes and requirements",
        "text": "BRDs, PRDs and tender responses that win and can be built."
      },
      {
        "title": "Investment and due-diligence advisory",
        "text": "independent reviews of ventures, vendors and acquisitions."
      },
      {
        "title": "Monitoring, evaluation and impact frameworks",
        "text": "the measures that prove a strategy is working."
      }
    ],
    "steps": [
      "Frame the decision",
      "Research and verify",
      "Shape options and recommend",
      "Turn the strategy into a roadmap with owners and measures"
    ],
    "outcome": "Decisions backed by evidence, not opinions."
  },
  {
    "id": "digital-transformation",
    "name": "Digital Transformation",
    "promise": "Change that sticks, not software that sits.",
    "summary": "We redesign how your organisation works, build or configure the systems to support it, and stay until your people are using them. That is the part most transformations skip.",
    "problem": "About 70% of corporate transformations fail, and BCG reports that this rate has not improved in decades. The cause is rarely the technology. It is the gap between what leaders intend and what staff actually experience. In Nigerian organisations the pattern is familiar: an expensive system is bought, data is half-migrated, staff keep a parallel spreadsheet “just in case”, and two years later the paper files are back. Meanwhile competitors who digitised properly are serving customers faster at lower cost.",
    "solution": "We start with the work, not the software. We map how your organisation actually operates today, measure where paper, duplication and disconnected tools are costing you time and money, and redesign the process before choosing any technology. We then deliver in phases, highest-value problems first: digitising records, building or configuring the right systems, migrating clean data, and integrating everything so information is entered once. Finally, we stay through adoption, training people, appointing internal champions and tracking usage, until the new way of working is simply how work gets done.",
    "deliverables": [
      {
        "title": "Digital maturity assessment",
        "text": "an honest baseline of your processes, systems, data and skills."
      },
      {
        "title": "Process mapping and redesign",
        "text": "removing steps that add no value before automating anything."
      },
      {
        "title": "Transformation roadmap and business case",
        "text": "phased priorities with costs, savings and owners."
      },
      {
        "title": "Records and process digitisation",
        "text": "paper files, forms and registers turned into searchable, secure digital records."
      },
      {
        "title": "System selection, build and configuration",
        "text": "the right mix of custom software and proven platforms."
      },
      {
        "title": "Integration and data migration",
        "text": "one source of truth instead of five disconnected tools."
      },
      {
        "title": "Change management and adoption",
        "text": "training, champions, communication and usage tracking."
      },
      {
        "title": "Post-launch support and continuous improvement",
        "text": "fixes, enhancements and quarterly reviews."
      }
    ],
    "steps": [
      "Assess and baseline",
      "Redesign and prioritise",
      "Build and migrate in phases",
      "Adopt, measure and improve"
    ],
    "outcome": "Organisations that use the technology — not reports that describe it."
  },
  {
    "id": "ai-strategy-transformation",
    "name": "AI Strategy & Transformation",
    "promise": "From AI experiments to AI that does the work.",
    "summary": "AI strategy, AI agents and automation built on your data, governed to Nigerian standards, and backed by hands-on training, including prompt engineering, so your people get real results.",
    "problem": "AI is everywhere, but value is rare. McKinsey’s 2025 survey found 88% of organisations use AI, yet only about 6% attribute 5% or more of their earnings to it. BCG found just 5% of companies are seeing real returns, while 60% report little or no benefit. The next wave, agentic AI, raises both the prize and the risk. Gartner expects agentic AI in a third of enterprise software by 2028, but also predicts that over 40% of agentic projects will be cancelled by 2027 because of rising costs, unclear value or weak risk controls. Ungoverned “shadow AI” is already adding an average of US$670,000 to the cost of a data breach.",
    "solution": "We treat AI as a business change, not a gadget. We start by finding the use cases where AI will measurably save time, cut cost or improve decisions in your operations, and we are honest about where it will not. McKinsey’s research shows the organisations that win are nearly three times as likely to have redesigned their workflows, so we redesign the work first. Then we build: AI assistants and knowledge search grounded in your own documents, and **AI agents** that complete multi-step tasks such as triaging requests, drafting responses, reconciling records and updating systems, each with clear limits, audit trails and a human approving the actions that matter. Every deployment is governed to the Nigeria Data Protection Act, including the impact assessment GAID 2025 requires for AI systems. Finally, we train your people to use AI well. Controlled studies show AI can raise output quality by over 40% on suitable tasks, but makes results worse when used blindly outside them. Good **prompt engineering** and judgement are what separate the two.",
    "deliverables": [
      {
        "title": "AI readiness and opportunity assessment",
        "text": "data, process and skills readiness, with a ranked list of use cases by value and risk."
      },
      {
        "title": "AI strategy and roadmap",
        "text": "where to start, what to build or buy, what it will cost and how value will be measured."
      },
      {
        "title": "Agentic AI and workflow automation",
        "text": "AI agents that plan and carry out multi-step tasks across your systems, with guardrails, human approval and full audit logs."
      },
      {
        "title": "AI assistants and knowledge search",
        "text": "chat and search over your policies, records and documents, with answers cited to the source."
      },
      {
        "title": "Document intelligence",
        "text": "automatic reading, classification and extraction from invoices, forms, contracts and scanned records."
      },
      {
        "title": "Predictive analytics and decision support",
        "text": "forecasting, risk scoring and early-warning dashboards."
      },
      {
        "title": "AI governance, security and compliance",
        "text": "AI policies, access controls, data-protection impact assessments and model risk reviews."
      },
      {
        "title": "AI and prompt-engineering training",
        "text": "role-based workshops for leaders and staff on prompt engineering, safe use, verifying outputs and building simple assistants and automations."
      }
    ],
    "steps": [
      "Discover high-value use cases",
      "Redesign the workflow and govern the risk",
      "Pilot, measure and scale",
      "Train, monitor and improve"
    ],
    "outcome": "AI that earns its keep — measured in outcomes, not demos."
  },
  {
    "id": "product-discovery-development",
    "name": "Product Discovery & Development",
    "promise": "Build the right product, then build it right.",
    "summary": "We validate your idea with real users before heavy investment, then design and build it in short, visible releases, from first prototype to a product ready to grow.",
    "problem": "Most new products fail for a simple reason: nobody needed them in the form they were built. CB Insights’ analysis of failed startups found “no market need” was the most common cause, cited by 42%. The way products are built matters too. Standish Group data shows small, iterative projects succeed far more often than large, all-at-once builds, and agile projects succeed about three times as often as traditional waterfall ones. Founders and institutions in Nigeria often lose a year and most of their budget building features users never asked for.",
    "solution": "We separate discovery from delivery. In discovery, we interview the people who will use and pay for the product, study the market and competitors, define the problem precisely, and test the riskiest assumptions with clickable prototypes before a line of production code is written. In delivery, we turn what we learned into clear specifications and build in two-week releases you can see and test, starting with a minimum viable product that solves the core problem well. Product analytics are built in from day one, so every next decision is based on what users actually do, not what anyone assumes.",
    "deliverables": [
      {
        "title": "Discovery sprints",
        "text": "user interviews, market scan and problem definition in two to four weeks."
      },
      {
        "title": "Assumption testing and validation",
        "text": "prototypes and pilots that prove demand before major spend."
      },
      {
        "title": "Product strategy and specifications",
        "text": "product vision, roadmap, PRDs, BRDs and software requirements."
      },
      {
        "title": "UX/UI design",
        "text": "user journeys, wireframes, design systems and clickable prototypes designed for local realities such as low bandwidth and mobile-first users."
      },
      {
        "title": "MVP design and build",
        "text": "the smallest product that delivers real value to real users."
      },
      {
        "title": "Web and mobile application development",
        "text": "secure, scalable apps for Android, iOS and the web."
      },
      {
        "title": "Payments and integrations",
        "text": "local payment gateways, SMS, USSD, WhatsApp and third-party APIs."
      },
      {
        "title": "Launch, analytics and iteration",
        "text": "go-live support, usage dashboards and a data-driven improvement backlog."
      }
    ],
    "steps": [
      "Discover and validate",
      "Specify and design",
      "Build the MVP in short releases",
      "Launch, learn and scale"
    ],
    "outcome": "To market faster, with something users actually want."
  },
  {
    "id": "custom-software-business-systems",
    "name": "Custom Software & Business Systems",
    "promise": "Systems built around how you actually work.",
    "summary": "Secure, integrated business systems designed for Nigerian realities, from school and payroll platforms to enterprise systems, engineered to keep working as you grow.",
    "problem": "Nigeria’s nearly 40 million MSMEs contribute almost half of GDP and employ over 84% of the workforce. Yet PwC’s 2024 survey found only 14% use specialised business software and 19% use cloud services. Most run on WhatsApp, spreadsheets and paper. Larger institutions face the opposite problem: imported software that does not fit local approval chains, payroll and tax rules, payment channels, intermittent power or patchy connectivity. Staff then work around it, and the investment is wasted.",
    "solution": "We engineer software around your operations instead of forcing your operations around software. We map your processes, rules and reports, then design and build systems that capture data once, enforce your approval rules, connect to the payment, banking and messaging channels your customers already use, and keep working offline where connectivity is unreliable. Security and data protection are built in from the start: role-based access, encryption, audit trails and NDPA-aligned data handling. Where a mature platform already solves part of the problem well, such as email, video, payments or cloud storage, we integrate and configure it rather than rebuild it, so your budget goes where custom work adds real value.",
    "deliverables": [
      {
        "title": "Enterprise and business management systems",
        "text": "operations, inventory, procurement and finance in one platform."
      },
      {
        "title": "School and institution management systems",
        "text": "admissions, fees, results, attendance, timetables and parent portals."
      },
      {
        "title": "Payroll, HR and finance systems",
        "text": "payroll with Nigerian tax and pension rules, leave, appraisal and expense control."
      },
      {
        "title": "Payment collection and reconciliation",
        "text": "automated collection, matching and reporting across banks and gateways."
      },
      {
        "title": "Membership, church and association management",
        "text": "records, dues, giving and communications."
      },
      {
        "title": "Customer and staff portals, dashboards and reporting",
        "text": "real-time visibility for decision-makers."
      },
      {
        "title": "Systems integration and APIs",
        "text": "connecting your systems to banks, payment providers, government platforms and each other."
      },
      {
        "title": "Hosting, security hardening, maintenance and support",
        "text": "service-level-backed support so systems keep running."
      }
    ],
    "steps": [
      "Map processes and requirements",
      "Design architecture and user experience",
      "Build, test and migrate data",
      "Deploy, train and support"
    ],
    "outcome": "Software that does what your organisation does — and keeps working."
  },
  {
    "id": "business-process-automation",
    "name": "Business Process Automation",
    "promise": "Let systems do the repetitive work, so your people can do the important work.",
    "summary": "We find the manual, repetitive work in your organisation and automate it, covering approvals, data entry, reconciliation, reporting and attendance, with a full audit trail.",
    "problem": "In most organisations, skilled people spend hours every week re-typing the same data, chasing signatures, reconciling bank statements against spreadsheets and compiling the same month-end reports. That is slow, error-prone and expensive, and it hides fraud and leakage. McKinsey estimates that today’s technologies, including generative AI, could automate activities that take up 60–70% of employees’ time. The organisations that capture that time are the ones that redesign their processes first.",
    "solution": "We start with a process audit: we walk through how work really flows, measure where time and money leak, and remove steps that add no value. Then we automate what remains. Digital forms capture data once at the source, workflows route approvals to the right person with reminders and escalation, transactions are matched and reconciled automatically, and reports and dashboards update themselves. Where the work involves reading documents or making routine judgements, we add AI. Where people must be physically verified, we integrate biometric attendance and access control. Every action is logged, so you gain control as well as speed.",
    "deliverables": [
      {
        "title": "Process audit and redesign",
        "text": "time-and-cost mapping of how work really flows, with quick wins identified."
      },
      {
        "title": "Digital forms and approval workflows",
        "text": "routing, reminders, escalation and e-signatures replace paper and chasing."
      },
      {
        "title": "Automated reconciliation",
        "text": "bank, payment-gateway and ledger matching with exception alerts."
      },
      {
        "title": "Automated reporting and dashboards",
        "text": "management, board and regulatory reports generated on schedule."
      },
      {
        "title": "AI-assisted document processing",
        "text": "invoices, receipts and forms read and entered automatically."
      },
      {
        "title": "Biometric attendance and access control",
        "text": "time-and-attendance linked to payroll, and secure entry to sensitive areas."
      },
      {
        "title": "Records digitisation and management",
        "text": "scanning, indexing and secure retrieval of historical files."
      },
      {
        "title": "Notifications and customer communication",
        "text": "automatic SMS, email and WhatsApp updates triggered by events."
      }
    ],
    "steps": [
      "Audit and measure the process",
      "Simplify and redesign",
      "Automate and integrate",
      "Monitor savings and improve"
    ],
    "outcome": "Hours back, costs down, reporting that writes itself."
  },
  {
    "id": "technology-consulting-rd",
    "name": "Technology Consulting & R&D",
    "promise": "An independent technology partner on your side of the table.",
    "summary": "Independent advice on architecture, vendors, security and data protection, the ICT infrastructure to run it, and an R&D team to prototype what does not exist yet.",
    "problem": "Technology decisions are now board-level risks. A wrong platform locks you in for years; a weak vendor contract leaves you without support; a security gap becomes a crisis. The global average cost of a data breach reached US$4.44 million in 2025, according to IBM. In Nigeria, enforcement is real: the Data Protection Commission fined MultiChoice ₦766 million in 2025, has concluded 246 investigations and has issued compliance notices to over 1,300 organisations in banking, insurance, pensions and gaming. Yet many organisations rely on the vendor selling them the product for advice, or on one overstretched IT officer.",
    "solution": "We work for you, not for a vendor. We audit your current systems, infrastructure and security, then set a technology direction and architecture that fits your strategy and budget. We run fair vendor selections, review contracts and service levels, and stay on as your fractional CTO when you need senior technology leadership without a full-time hire. We build NDPA-aligned data-protection frameworks, policies and impact assessments, and we design and deploy the ICT infrastructure your systems depend on: networks, access control, biometric systems and smart classrooms. When the answer does not exist yet, our R&D team builds a prototype or proof of concept so you can test it before you commit.",
    "deliverables": [
      {
        "title": "IT and systems audit",
        "text": "the true state of your systems, security, data and infrastructure."
      },
      {
        "title": "Technology strategy, architecture and roadmap",
        "text": "what to keep, replace, build or buy, and in what order."
      },
      {
        "title": "Vendor selection and procurement advisory",
        "text": "requirements, evaluation, negotiation and contract review."
      },
      {
        "title": "Cybersecurity review and hardening",
        "text": "risk assessment, access control and incident readiness."
      },
      {
        "title": "Data protection and NDPA compliance",
        "text": "policies, records of processing, DPIAs and support for your DPO and audit filing."
      },
      {
        "title": "ICT infrastructure design and deployment",
        "text": "networking, Wi-Fi, servers, CCTV, access control, biometric attendance and smart-board integration."
      },
      {
        "title": "Research and development",
        "text": "prototypes and proofs of concept for new products and emerging technologies."
      },
      {
        "title": "Fractional CTO and technology advisory",
        "text": "senior technology leadership on retainer."
      }
    ],
    "steps": [
      "Audit and assess",
      "Advise and architect",
      "Prototype or procure",
      "Implement, govern and review"
    ],
    "outcome": "A technology direction you trust — and the partner to execute it."
  },
  {
    "id": "digital-capacity-capability",
    "name": "Digital Capacity & Capability",
    "promise": "Technology is only as strong as the people using it.",
    "summary": "Practical, role-based training in digital tools, data, AI and prompt engineering, plus the guides, champions and governance that keep capability inside your organisation.",
    "problem": "The World Economic Forum’s Future of Jobs Report 2025 found that 39% of workers’ core skills will change by 2030, that 59 in every 100 workers will need training, and that 63% of employers see skills gaps as the main barrier to transformation. AI and big data are the fastest-growing skills, followed by cybersecurity and technology literacy. In Nigeria, the federal 3MTT programme is training three million technical talents, but organisations still have to turn general skills into confident use of their own systems. Without that, expensive systems go underused, AI is used carelessly, and knowledge leaves when the consultant or one key staff member does.",
    "solution": "We train for the job, not the certificate. We first assess skills across roles, then design practical programmes built around your own systems, data and daily tasks: leaders learn to make technology decisions and govern AI; managers learn to read dashboards and run digital workflows; frontline staff learn the tools they use every day. Our AI training goes beyond awareness to hands-on prompt engineering, verifying AI outputs, safe handling of confidential data and building simple assistants and automations. We leave behind user guides, standard operating procedures and trained internal champions, so capability stays in your organisation after we leave.",
    "deliverables": [
      {
        "title": "Digital skills assessment",
        "text": "a role-by-role map of current skills against what your strategy requires."
      },
      {
        "title": "Digital tools and productivity training",
        "text": "office suites, collaboration tools, cloud storage and your own systems."
      },
      {
        "title": "Data literacy and dashboard training",
        "text": "reading, questioning and acting on data."
      },
      {
        "title": "AI literacy and prompt-engineering workshops",
        "text": "writing effective prompts, checking outputs, avoiding misuse and applying AI to real tasks."
      },
      {
        "title": "Responsible AI and data-protection training",
        "text": "NDPA duties, confidentiality and safe AI use for every staff member."
      },
      {
        "title": "Leadership and board technology briefings",
        "text": "AI, cybersecurity and digital strategy for decision-makers."
      },
      {
        "title": "User guides, SOPs and digital-champion programmes",
        "text": "documentation and internal experts who sustain adoption."
      },
      {
        "title": "Train-the-trainer programmes",
        "text": "building your own internal training capacity."
      }
    ],
    "steps": [
      "Assess skills by role",
      "Design a programme around your systems",
      "Train hands-on, in person or online",
      "Certify champions and measure adoption"
    ],
    "outcome": "Teams that run the systems themselves — confidently, long after go-live."
  }
];
