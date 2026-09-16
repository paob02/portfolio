export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  /** Longer body copy shown on the case study page, between the summary and the prototype embed. */
  details: string;
  role: string;
  year: string;
  tags: string[];
  /** Which section of the work page this case study is grouped under. */
  category: "Graphic design" | "UX/UI design";
  coverImage: string;
  coverImageAlt: string;
  featured: boolean;
  /** Optional — a figma.com share URL, rendered as an interactive embed on the case study page. */
  figmaEmbedUrl?: string;
  /** Optional — images shown under `details`, before the Figma embed (each at its natural aspect ratio). */
  galleryImages?: { src: string; alt: string; width: number; height: number }[];
  /** Optional — stack gallery images full-width instead of the default 2-column grid. */
  stackedGallery?: boolean;
  /** Optional — a link to a PDF document, shown under `details` before the Figma embed. Linked rather than
   *  embedded since PDFs (e.g. a full thesis) can be far too large to show inline. */
  pdfUrl?: string;
  pdfLabel?: string;
  /** Optional — an alternative to `galleryImages`/`pdfUrl` for case studies where the assets should be
   *  shown in labeled groups (e.g. several images of the same logo applied to different items). */
  galleryGroups?: {
    label: string;
    images?: { src: string; alt: string; width: number; height: number }[];
    pdfs?: { url: string; label: string }[];
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "HCI-project",
    title: "Human Computer Interaction Project",
    summary: "This was a group project for the course Human Computer Interaction at Chalmers University of Technology.",
    details: "The aim for this project was to create an application to help students plan their workouts into their busy school schedule.",
    role: "Software Engineer Student",
    year: "2023",
    tags: ["Research", "UI Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/HCI-project/cover.jpg",
    coverImageAlt: "",
    featured: true,
    figmaEmbedUrl:
      "https://www.figma.com/proto/AHZudzP5BvFu7O070Bpnj3/Human-computer-interaction?node-id=0-1&t=VEybAodxQdnncHZT-1",
  },
  {
    slug: "multiplay",
    title: "MultiPlay",
    summary: "This was a group project for the course Interaction Design Methodologies at Chalmers University of Technology.",
    details: "The aim of this project was to undergo an ethnographic study of an area in Gotheburg, define a problem in that are that stops the people who live there to interact with each other, and then solve that problem. My groups are was Tynnered and the focus problem we defines was that the teenagers in Tynnered didn't have a place to hang out with each other. How we solved that problem can be viewed on the project poster below.",
    role: "Software Engineer Student",
    year: "2024",
    tags: ["UX Design", "UI Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/multiplay/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/oWir1rGhjblCkqGwscodtC/MultiPlay?node-id=0-1&t=MiOV0kZRa3twXCSs-1",
    galleryImages: [
      {
        src: "/images/case-studies/multiplay/MultiPlay.png",
        alt: "MultiPlay project poster, describing the research into teenage social spaces in Tynnered, the design process, and the final rotating game-table concept.",
        width: 1190,
        height: 1684,
      },
    ],
  },
  {
    slug: "booking-system",
    title: "Booking System",
    summary: "This was an individual examination for the course Graphical Interfaces at Chalmers University of Technology.",
    details: "The aim of this course examination was to create a booking system for teachers and students to book rooms or equipment at campus. My version below is the tachers point of view as it contains everything a student should be able to do and more as they have higher access in the system, such as booking lecture halls or accepting student booking requests. ",
    role: "Software Engineer Student",
    year: "2024",
    tags: ["UX Design", "UI Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/booking-system/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/CrbQ1o6xFYKqWnfv8uiW1v/Booking-system?node-id=0-1&t=wapc3Sp8VCHrfmgl-1",
  },
  {
    slug: "workbook",
    title: "Augmented Reality for Online Shopping",
    summary: "This is a workbook for an individual project for the course Emerging Trends and Critical Topics in Interaction Design at Chalmers University of Technology.",
    details: "The aim was to explore different trends and then pick one to explore further. In the end you were supposed to define problems within the trend and come up with possible solutions. I choose the increase in online shopping. The results of my research can be seen in the slides below",
    role: "Software Engineer Student",
    year: "2025",
    tags: ["UX Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/workbook/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/0EdxaUa0qydW8sqnjeelCN/Workbook?node-id=0-1&t=KGPVtvqouD2KZqQR-1",
  },
  {
    slug: "imat-skiss",
    title: "Food Store Website",
    summary: "This was a group project for the course Design and Construction of Grafical Interfaces at Chalmers University of Technology.",
    details: "This was the first time I worked in Figma and it was the first course where we learned about UI design during my bachelor studies.",
    role: "Software Engineer Student",
    year: "2023",
    tags: ["UX Design", "UI Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/imat-skiss/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl:
      "https://www.figma.com/proto/Wyq3egIP1iEMa3dGDrAY65/iMat-Skiss?node-id=0-1&t=RwG8SIjo3IyXRmms-1",
  },
  {
    slug: "presentation",
    title: "The Offline Troll",
    summary: "This was an individual project for the course Concept Driven Interaction Design at Chalmers University of Technology.",
    details: "This was a very open ended project where we were allowed to choose our own topic as long as it fit into the cocept-driven meathods we learned about and choosed to use.",
    role: "Software Engineer Student",
    year: "2025",
    tags: ["UX Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/presentation/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl: "https://www.figma.com/deck/EpMCsSqzruLbqKfwFQkmXB",
  },
  {
    slug: "masterthesis",
    title: "Master's Thesis",
    summary: "This is my Master's Thesis from Chalmers University of Technology.",
    details: "The name of this thesis is 'From Touch to Understanding: Tangible Design for Teaching Science' and was conducted at Onsala Space Observatory where we were supposed to develop an interactive installation at their visitor centre to teach adolescents about scientific scales. After 5 months of research, prototyping, user testing and multiple iterations we created a prototype that fullfilled our defined design goals. In a team of two, me and my classmate were in charge of designing an interactive installation that thought children, age 10-15, about scientific scales. As we were only two people, my role entailed every aspect of a design project. From ideating initial ideas, researching children's behaviours and learning processes, sketching, creating Figma prototypes, User testing in collaboration with the children, conducting user observations during study visits to the space observatory and building physical prototypes with Arduino code. The project was extended to a summer job as research assistants where I was in charge of designing the UI and coding a functional program based on our final version from our thesis and 3D modeling blueprints of its physical design. Below you can see the thesis pdf, images from the final cersion of the installation and the Wizard-of-OZ version of the game we created for the thesis.",
    role: "Software Engineer Student",
    year: "2026",
    tags: ["Tangible Interaction", "UX Design", "UI Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/masterthesis/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl: "https://www.figma.com/proto/HL6Jk7IUy8VUMOzrySopNb/Karta?node-id=0-1&t=YAPF55GVUeYXxXrI-1",
    pdfUrl: "/images/case-studies/masterthesis/Master_Thesis_Scientific_Scales_2026.pdf",
    pdfLabel: "Read the full thesis (PDF)",
    galleryImages: [
      {
        src: "/images/case-studies/masterthesis/FinalVersionOSO.jpg",
        alt: "The finished interactive installation at Onsala Space Observatory: a wooden console with buttons and a touchscreen showing a quiz about the scale of scientific objects.",
        width: 4032,
        height: 3024,
      },
      {
        src: "/images/case-studies/masterthesis/MammaSpelar.jpg",
        alt: "Visitors testing the installation, pressing buttons on the console while a question is shown on the screen.",
        width: 3024,
        height: 4032,
      },
      {
        src: "/images/case-studies/masterthesis/Modeller.jpg",
        alt: "Small 3D-printed models used in the installation, each representing a different object on the scale of size, from DNA to a black hole.",
        width: 4032,
        height: 3024,
      },
      {
        src: "/images/case-studies/masterthesis/3Dcad.png",
        alt: "3D CAD blueprint of the installation's console housing.",
        width: 1730,
        height: 1040,
      },
    ],
  },
  {
    slug: "tunnel",
    title: "Tunnel to Success",
    summary: "This was a group project for the course Interaction Design Project at Chalmers University of Technology.",
    details: "The project was in collaboation with the sports museum in Gothenburg and they wanted us students to create interactive installations for their muesum that we thouhgt would attract and entertain visitors. My groups focus was on the 100 year anaversary of the womens olympiad that that was held in Gothenburg in 1926. Our installation was an immersive tunnel that would show users how it was to be a woman insports a hundred years ago.",
    role: "Software Engineer Student",
    year: "2025",
    tags: ["UX Design"],
    category: "UX/UI design",
    coverImage: "/images/case-studies/tunnel/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl: "",
    galleryImages: [
      {
        src: "/images/case-studies/tunnel/TunnelToSuccess.png",
        alt: "Tunnel to Success project poster, an interactive sports museum installation created for the 100th anniversary of the 1926 Women's Olympiad in Gothenburg.",
        width: 632,
        height: 1705,
      },
    ],
  },
  {
    slug: "happyhydrate",
    title: "Graphic Design for Electrolyte Drink Packaging",
    summary: "This is a graphic design project for the packaging of an electrolyte drink from the company Happy Hydrate.",
    details: "The design was created in Adobe Illustrator.",
    role: "Freelance",
    year: "2024",
    tags: ["Graphic design", "Illustration"],
    category: "Graphic design",
    coverImage: "/images/case-studies/happyhydrate/cover.jpg",
    coverImageAlt: "",
    featured: false,
    figmaEmbedUrl: "",
    pdfUrl: "",
    pdfLabel: "",
    stackedGallery: true,
    galleryImages: [
      {
        src: "/images/case-studies/graphicdesign/HappyHydrateLemonLime.png",
        alt: "Happy Hydrate lemon-lime flavor packaging design.",
        width: 4032,
        height: 3024,
      },
      {
        src: "/images/case-studies/graphicdesign/HappyHydrateMixedBerries.png",
        alt: "Happy Hydrate mixed berries flavor packaging design.",
        width: 4032,
        height: 3024,
      },
    ],
  },
  {
    slug: "nollkit",
    title: "Head of PR - NollKIT",
    summary:
      "NollKIT is a non-profit comitte at Chalmers University of Technology where I participated ina year of part-time voluntary work.",
    details:
      "During my studies I participated in the IT department's reception committee. Collaborated with a team of seven to plan, budget, and execute a month-long reception for 140 new IT students, featuring daily events. Gained experience in teamwork, structured planning, graphical design, filming and video editing. Below, the logos and branding I designed is presented.",
    role: "Voluntary work",
    year: "2022",
    tags: ["Graphic design", "Illustration"],
    category: "Graphic design",
    coverImage: "/images/case-studies/graphicdesign/Logo_Final_09CCDA.png",
    coverImageAlt: "The final NollKIT logo.",
    featured: false,
    galleryGroups: [
      {
        label: "Logo",
        images: [
          {
            src: "/images/case-studies/graphicdesign/Logo_Final_09CCDA.png",
            alt: "The final NollKIT logo.",
            width: 3300,
            height: 2400,
          },
          {
            src: "/images/case-studies/graphicdesign/logoAxeln.png",
            alt: "The NollKIT logo applied to a jacket sleeve.",
            width: 223,
            height: 218,
          },
        ],
      },
      {
        label: "Märke",
        images: [
          {
            src: "/images/case-studies/graphicdesign/Marke22.png",
            alt: "The NollKIT 2022 badge design.",
            width: 2000,
            height: 2000,
          },
          {
            src: "/images/case-studies/graphicdesign/markesput.png",
            alt: "The NollKIT badge embroidered onto fabric.",
            width: 482,
            height: 708,
          },
          {
            src: "/images/case-studies/graphicdesign/marketyg.png",
            alt: "The NollKIT badge design printed on fabric.",
            width: 627,
            height: 602,
          },
        ],
      },
      {
        label: "Nollan",
        images: [
          {
            src: "/images/case-studies/graphicdesign/Nollan1.png",
            alt: "The Nollan mascot character design, version 1.",
            width: 390,
            height: 394,
          },
          {
            src: "/images/case-studies/graphicdesign/Nollan2.png",
            alt: "The Nollan mascot character design, version 2.",
            width: 262,
            height: 229,
          },
        ],
        pdfs: [
          { url: "/images/case-studies/graphicdesign/NollanPrint2.pdf", label: "Nollan print design (PDF)" },
          { url: "/images/case-studies/graphicdesign/NollanSpecifikation.pdf", label: "Nollan specification (PDF)" },
        ],
      },
      {
        label: "Phadder",
        pdfs: [
          { url: "/images/case-studies/graphicdesign/PhadderPrint.pdf", label: "Phadder print design (PDF)" },
          { url: "/images/case-studies/graphicdesign/PhadderSpecifikation.pdf", label: "Phadder specification (PDF)" },
        ],
      },
      {
        label: "Tröja",
        images: [
          {
            src: "/images/case-studies/graphicdesign/trojaaxeln.png",
            alt: "The NollKIT branding applied to a shirt sleeve.",
            width: 252,
            height: 234,
          },
        ],
      },
    ],
  },
];

function byYearDescending(a: CaseStudy, b: CaseStudy) {
  return Number(b.year) - Number(a.year);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

/** All case studies, newest year first. */
export function getSortedCaseStudies() {
  return [...caseStudies].sort(byYearDescending);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((caseStudy) => caseStudy.featured).sort(byYearDescending);
}
