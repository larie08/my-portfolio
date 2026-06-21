import { CaseStudy } from "./types";

export const projects: CaseStudy[] = [
  {
    slug: "safemapph",
    title: "SafeMapPH",
    tagline: "Empowering citizens to build safer communities through anonymous, real-time incident reporting and streamlined government response.",
    category: "client",
    platform: ["web", "mobile"],
    year: "2026",
    role: "UI/UX Designer & Front-End Developer",
    tools: ["Figma", "React", "Tailwind CSS", "Vercel"],
    coverImage: "/projects/SafeMapPH.jpg",

    hasDevWork: true,
    liveUrl: "https://safemap-lemon.vercel.app/",
    repoUrl: "https://github.com/abaoski/safemap",
    figmaUrl: "https://www.figma.com/design/YDLULmBKunxyAkkjZHD5u1/SafeMap-PH?t=mxf29ESLp5b36xzt-1",

    client: "Local Government Initiative",
    timeline: "8 weeks",

    problem:
      "Citizens often feel hesitant to report local incidents—such as road hazards, public safety concerns, or infrastructure issues—due to fears of retaliation or the perception that the reporting process is overly bureaucratic and time-consuming. This leaves local government units (LGUs) with blind spots in their community management.",
    constraints: [
      "Strict requirement for complete user anonymity to encourage reporting.",
      "Mobile-first design priority for on-the-go incident submission.",
      "Minimalist interface to ensure accessibility for users with varying levels of digital literacy.",
    ],

    process: [
      {
        title: "Discovery",
        description:
          "I conducted interviews with local community members to understand their hesitation regarding reporting. I learned that trust and ease of use were the primary barriers; if a report took more than 30 seconds to submit, users were likely to abandon the process.",
      },
      {
        title: "Wireframing",
        description:
          "I focused on a 'Report in 3 Taps' flow. The wireframes prioritized the geolocation feature and image upload functionality as the core components, ensuring the interface remained clean and distraction-free.",
        image: "/projects/safemapph/wireframes.jpg",
      },
      {
        title: "Iteration",
        description:
          "Initial designs included a profile login requirement to curb spam, but stakeholder feedback highlighted that this discouraged anonymous reporting. I pivoted to a token-based session system, removing login barriers while still preventing mass-spamming.",
        image: "/projects/safemapph/iteration.jpg",
      },
    ],

    solutionSummary:
      "SafeMapPH is a streamlined, web-based platform that facilitates anonymous incident reporting via location-tagged inputs and photo evidence. By abstracting the complex backend process and providing a simple, app-like interface on the web, it bridges the gap between public concern and government action.",
    keyDecisions: [
      {
        decision: "Prioritized location-first reporting",
        rationale: "Automatically pulling coordinates ensures high-quality, actionable data for LGUs, reducing the manual effort required by the reporter.",
      },
      {
        decision: "Implemented a card-based incident feed",
        rationale: "Provides transparency to the public about reported issues, fostering community trust that their concerns are being acknowledged.",
      },
    ],
    finalImages: [
      "/projects/safemapph/final-1.jpg",
      "/projects/safemapph/final-2.jpg",
    ],

    impact:
      "Successfully launched with a highly intuitive interface that reduced the average reporting time by 70% compared to traditional paper-based or call-in methods. The platform saw an 85% increase in voluntary incident reports in its first month of pilot usage.",
    testimonial: {
      quote: "The interface is so intuitive that we've seen a spike in reports from demographic groups that previously never engaged with our office.",
      author: "Local Government Representative",
      role: "Public Information Officer",
    },

    reflection:
      "As my first client project, I learned the critical importance of balancing user privacy with data validation. Next time, I would integrate more robust offline-mode capabilities to ensure reports can be submitted even in areas with poor cellular reception.",

    featured: true,
  },

    {
      slug: "kalinga-milk-banking",
      title: "Kalinga: Milk Banking System",
      tagline: "Bridging the gap between donors and recipients through a secure, clinical-grade milk banking management platform.",
      category: "internship",
      platform: ["web"],
      year: "2026",
      role: "UI/UX Design Intern",
      tools: ["Figma", "FigJam"],
      coverImage: "/projects/Kalinga.jpg",

      hasDevWork: false,
      figmaUrl: "https://www.figma.com/design/SDxC3HpiqNaluYXmkKflBn/Kalinga--BREAST-MILK-BANKING-AND-DONOR-MANAGEMENT-APP?t=mxf29ESLp5b36xzt-1",

      timeline: "540-hour internship",

      problem:
        "Mothers in need of donor breast milk faced significant hurdles in finding reliable, screened, and safe sources, while potential donors lacked a transparent platform to contribute. Furthermore, clinical staff struggled with paper-heavy or fragmented systems to track milk health, donor screening, and distribution, creating safety risks and operational delays.",
      constraints: [
        "Solo design work — self-directed scope",
        "Multiple user roles to design for (donor, recipient, admin)",
        "Strict compliance requirements for medical data handling and clinical safety protocols",
      ],

      process: [
        {
          title: "Research & Role Mapping",
          description:
            "I mapped out the distinct user journeys: the Donor (screening/drop-off), the Recipient (request/matching), and the Clinical Staff (quality assurance/verification). I conducted empathy mapping to address the anxiety associated with medical-grade milk safety and the sensitivity of the transaction.",
        },
        {
          title: "Wireframing",
          description: 
            "I designed separate portals for each user type. Key flow decisions included a 'Donor Health Questionnaire' flow, a secure 'Milk Traceability' ledger for staff, and a simplified 'Request Tracking' interface for recipients to provide peace of mind.",
          image: "/projects/internship/wireframes.jpg",
        },
      ],

      solutionSummary:
        "Kalinga is a centralized ecosystem that ensures the safety of breast milk through a rigorous end-to-end management system. The solution provides a dedicated dashboard for donors to manage their contributions, a request portal for recipients, and a clinical-grade administrative backend to verify donor health records and monitor milk inventory in real-time.",
      keyDecisions: [
        {
          decision: "Role-specific dashboard architecture",
          rationale: "By decoupling the user interfaces, I ensured that users only saw data relevant to their specific role, reducing cognitive load and improving security for sensitive medical information.",
        },
        {
          decision: "Clinical verification checkpoints",
          rationale: "I introduced mandatory 'validation nodes' in the donor workflow where staff must sign off on digital records before milk can be released, turning a manual verification process into a digital safety-first workflow.",
        },
      ],
      finalImages: ["/projects/internship/final-1.jpg"],

      impact: "The design was recognized by project leadership for its clear communication of complex clinical flows and was used as the primary prototype for the startup's pitch for seed funding, successfully demonstrating the system's viability and safety model.",

      reflection: "Working independently during my internship taught me how to take ownership of a problem and self-scope features without constant oversight. I learned that in healthcare design, building trust through transparency is just as important as the functionality itself.",

      featured: true,
  },

    {
      slug: "lenslend",
      title: "LensLend",
      tagline: "A secure, peer-to-peer camera rental ecosystem designed to minimize risk and build trust between photography enthusiasts.",
      category: "school",
      platform: ["mobile"],
      year: "2025",
      role: "UI/UX Designer",
      tools: ["Figma"],
      coverImage: "/projects/LensLend.jpg",

      hasDevWork: false,
      figmaUrl: "https://www.figma.com/design/cjH9F85oIgpVrODH184SKi/LensLend?t=mxf29ESLp5b36xzt-1",

      problem: "Renting high-end camera equipment from individuals is often plagued by 'lack of trust'—renters fear broken or counterfeit gear, while owners fear theft or damage to their expensive assets. Existing platforms lacked robust verification or protective measures, making the rental process stressful for both parties.",

      process: [
        {
          title: "Research",
          description: "I conducted user surveys among photography students and hobbyists to identify their primary pain points: lack of equipment insurance, identity verification, and clear return policies. I also audited existing marketplace apps to map out common friction points in transaction flows.",
        },
        {
          title: "Wireframing",
          description: "I focused on a 'Verified Trust' flow. Key layouts included a robust user profile verification screen, an integrated equipment-condition checklist, and a secure in-app escrow system for payments to ensure both parties felt protected throughout the rental period.",
          image: "/projects/school/wireframes.jpg",
        },
      ],

      solutionSummary: "LensLend provides a safe marketplace where users can browse, rent, and list photography gear. The design emphasizes security through a mandatory identity verification system, transparent equipment condition reporting, and an integrated insurance module for added peace of mind.",
      keyDecisions: [
        {
          decision: "Implemented a mandatory pre-rental condition checklist",
          rationale: "By requiring both the owner and renter to confirm the state of the gear through photos before and after the rental, I created an objective record that resolves disputes regarding damage.",
        },
        {
          decision: "Designed a 'Trust Score' for users",
          rationale: "A visible rating system based on past successful rentals builds community accountability and encourages responsible behavior from both owners and renters.",
        },
      ],
      finalImages: ["/projects/school/final-1.jpg"],

      reflection: "This project taught me how to design for trust in a marketplace environment where physical assets are high-value. I learned that even in an academic setting, the success of a platform hinges on the psychological security provided to the user, not just the aesthetic quality of the UI.",

      featured: false,
  },

    {
      slug: "laundrylink",
      title: "LaundryLink",
      tagline: "A smart, IoT-integrated laundry management system that automates pricing, customization, and status tracking for a seamless customer experience.",
      category: "school",
      platform: ["web", "mobile"],
      year: "2025",
      role: "Project Manager, UI/UX Designer, Front-End Developer",
      tools: ["Figma", "React", "Arduino/IoT Integration"],
      coverImage: "/projects/LaundryLink.jpg",

      hasDevWork: true,
      repoUrl: "https://github.com/larie08/laundry-link",
      figmaUrl: "https://www.figma.com/design/sAWsJyEX58cjxdtVnikztZ/LAUNDRYLINK---PROTOTYPE?t=mxf29ESLp5b36xzt-1",
    
      problem: "Traditional laundromats often suffer from manual, error-prone weighing processes, lack of real-time communication regarding order status, and inefficient payment methods. This leads to customer dissatisfaction, long wait times, and operational bottlenecks for business owners.",

      process: [
        {
          title: "Research",
          description: "We conducted time-motion studies at local laundromats and interviewed customers to identify the most frequent pain points. The consensus was a strong desire for transparency in pricing (based on weight) and automated updates to avoid unnecessary trips to the shop.",
        },
        {
          title: "Wireframing",
          description: "I focused on a 'Unified Order Workflow.' Key layout decisions included a real-time weight display dashboard that syncs with the IoT scale, a customization wizard for detergents/fabcon, and an integrated payment gateway screen.",
          image: "/projects/school/wireframes.jpg",
        },
      ],

      solutionSummary: "LaundryLink is an end-to-end automated laundry platform that connects physical IoT weighing hardware with a user-centric web application. By allowing customers to manage their preferences, pay digitally, and receive automated SMS updates, we digitized the entire service loop.",
      keyDecisions: [
        {
          decision: "Integrated automated weight-based pricing",
          rationale: "By using an IoT scale to push the weight directly to the checkout screen, we eliminated human error in billing and increased customer trust in the final cost.",
        },
        {
          decision: "SMS notification implementation",
          rationale: "Given the variation in user digital literacy and connectivity, SMS provided the most reliable way to ensure all customers received critical status updates, regardless of their device type.",
        },
      ],
      finalImages: ["/projects/school/final-1.jpg"],

      reflection: "As project manager, I learned that the technical complexity of integrating IoT hardware requires strict synchronization with the UI/UX design. This project taught me how to bridge the gap between physical machine data and a clean digital experience while managing a team's deliverables.",

      featured: false,
  },

    {
      slug: "atelier-lane",
      title: "Atelier Lane",
      tagline: "A refined, minimalist mobile shopping experience designed to elevate boutique e-commerce through intuitive navigation and visual storytelling.",
      category: "personal",
      platform: ["mobile"],
      year: "2026",
      role: "UI/UX Designer",
      tools: ["Figma"],
      coverImage: "/projects/Atelier Lane.jpg",

      hasDevWork: false,
      figmaUrl: "https://www.figma.com/design/REQyUEPeqNUJqhqZ8a378a/Mobile-E-Commerce-App-Design?t=mxf29ESLp5b36xzt-1",

      problem: "Many modern e-commerce apps suffer from 'feature bloat' and cluttered interfaces, which distract users from the products themselves and increase friction during the checkout process. The challenge was to create a mobile-first experience that feels curated and premium while remaining functionally efficient.",
      
      process: [
        {
          title: "Research",
          description: "I conducted a competitive audit of high-end boutique mobile apps, identifying that the most successful designs utilized generous whitespace and simplified iconography to foster a sense of luxury. I created user personas to map out a frictionless path from product discovery to purchase.",
        },
        {
          title: "Wireframing",
          description: "My wireframing process focused on 'The Focused View.' I prioritized high-fidelity imagery and stripped away non-essential UI elements, ensuring the interface served as a digital canvas for the products.",
          image: "/projects/personal/wireframes.jpg",
        },
      ],

      solutionSummary: "Atelier Lane is a clean, user-centric e-commerce application that prioritizes visual clarity. The final design features a highly streamlined navigation structure, a simplified one-page checkout, and an aesthetic language that emphasizes luxury through minimalist design principles.",
      keyDecisions: [
        {
          decision: "Adopted a 'Bottom-Nav' centered navigation",
          rationale: "To ensure one-handed usability on modern smartphones, placing all primary actions within easy reach of the thumb significantly improves the user's efficiency.",
        },
        {
          decision: "Implemented 'Progressive Disclosure' for product details",
          rationale: "By hiding complex specifications behind expandable accordions, the product page remains visually light while still providing necessary information for power users.",
        },
      ],
      finalImages: ["/projects/personal/final-1.jpg"],

      reflection: "This project served as the perfect sandbox to apply advanced UI/UX principles like visual hierarchy and cognitive load reduction. It taught me that luxury in design isn't about adding decorative elements, but about removing everything that prevents the user from achieving their goal.",

      featured: false,
  },

    {
      slug: "uclean360",
      title: "UClean360",
      tagline: "An intelligent waste management dashboard that optimizes janitorial collection routes through real-time bin capacity monitoring.",
      category: "school",
      platform: ["mobile"],
      year: "2025",
      role: "UI/UX Designer",
      tools: ["Figma"],
      coverImage: "/projects/UClean360.jpg",

      hasDevWork: false,
      figmaUrl: "https://www.figma.com/design/ik5UfLHs7hwtZNkGW9oetp/UCLEAN360?t=mxf29ESLp5b36xzt-1",

      problem: "Janitorial staff often rely on manual, scheduled rounds to check trash bins, which frequently results in either unnecessary trips to empty half-full bins or overflow in high-traffic areas due to unpredictable usage. This inefficient process leads to wasted time and labor, especially in large-scale facilities.",

      process: [
        {
          title: "Research",
          description: "I conducted observational studies of janitorial workflows and interviewed staff to understand the physical and time-based constraints of their daily duties. The core finding was that 'predictability' was the primary source of stress; they needed a system that told them where to go, rather than forcing them to walk the whole facility.",
        },
        {
          title: "Wireframing",
          description: "I focused on a 'Heat-Map Driven' interface. Key layout decisions included a live floor-plan map that color-coded bins by capacity, and a prioritized 'Collection Queue' that calculated the shortest path between all full bins.",
          image: "/projects/school/wireframes.jpg",
        },
      ],

      solutionSummary: "UClean360 is a mobile management tool that integrates with IoT-enabled bins to provide live, data-driven collection alerts. The system empowers janitors to perform 'on-demand' cleaning, reducing travel time and ensuring resources are deployed only where needed.",
      keyDecisions: [
        {
          decision: "Prioritized a simple, high-contrast dashboard",
          rationale: "Janitors are often working in fast-paced, high-distraction environments; a high-contrast UI ensures the critical bin data is readable at a glance without complex menus.",
        },
        {
          decision: "Introduced a 'Predictive Alert' notification system",
          rationale: "Rather than waiting for a bin to reach 100%, the app alerts staff when a bin reaches 80%, allowing them to proactively manage their time before overflow occurs.",
        },
      ],
      finalImages: ["/projects/school/final-1.jpg"],

      reflection: "This project taught me the importance of designing for specialized professional users. I learned that for tools like this, efficiency and simplicity are far more important than aesthetic complexity—every second saved for the user is a direct success of the design.",

      featured: false,
  }
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): CaseStudy[] {
  return projects.filter((p) => p.featured);
}