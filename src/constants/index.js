import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  dmu,
  rakutenGroup,

  threejs,
  rakutenSecurities,
  SQL,
  java,
  barrierRepair,
  chatgpt,
  nextbasketball,
  tellthepet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "SQL",
    icon: SQL,
  },
];

const experiences = [
  {
    title: "Computing BSc (Hons) (FT)",
    company_name: "De Montfort University - ",
    icon: dmu,
    iconBg: "#383E56",
    date: "Nov 2017 - Jun 2020",
    points: [
      "United Kingdom Leicester",
      "Degree- Upper 2nd",
      "Broaden your prospects with a firm foundation in the practice and theory of core computing principles, with a focus on software development, database design, web technologies and security.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Rakuten Securities Hong Kong",
    icon: rakutenSecurities,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Apr 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Rakuten Group - Fukuoka",
    icon: rakutenGroup,
    iconBg: "#383E56",
    date: "Jan 2022 - ",
    points: [
      "Developing and maintaining web applications using React.js and Java",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Barrier Repair",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: barrierRepair,
    source_code_link: "https://barrier-repair-react.vercel.app/",
  },
  {
    name: "chatgpt api",
    description:
      "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://chat-gpt-next-web-peach-eight-37.vercel.app/",
  },
  {
    name: "Basketball template",
    description:
      "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nextbasketball,
    source_code_link: "https://nextbasketballhk.vercel.app/",
  },
  {
    name: "Tell the pet",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tellthepet,
    source_code_link: "https://next-tellthepet.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
