// index.js
import { codeforces } from "../../public/assets";
import { codechef } from "../../public/assets";


// { id: 1, name: "React.js", icon:  },
//       { id: 2, name: "tailwind css", icon: "logos:tailwindcss-icon" },
//       { id: 3, name: "node.js", icon:  },
//       { id: 4, name: "express.js", icon:  },
//       { id: 4, name: "mongo db", icon:  },
const reactIcon = "skill-icons:react-dark";
const nodeIcon = "logos:nodejs-icon";
const expressIcon = "skill-icons:expressjs-dark";
const mongoIcon = "skill-icons:mongodb";
const htmlIcon = "material-icon-theme:html";
const cssIcon = "skill-icons:css"
const javascriptIcon = "logos:javascript";
const threeIcon = "skill-icons:threejs-dark";
const tailwindIcon = "skill-icons:tailwindcss-dark";
const gsapIcon = "simple-icons:gsap";
const vueIcon = "logos:vue";
const jsonIcon = "simple-icons:json";
// const pugIcon = "skill-icons:pug-dark";
const restApiIcon = "dashicons:rest-api"
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "I design and build modern web applications with clean architecture, optimized databases, and smooth user experiences. From frontend to backend, I ensure scalability, performance, and reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Authentication, Microservices)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL, Efficient Querying, Scalable Structures)",
      },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Strong problem-solving is the backbone of great software. I apply DSA principles to write efficient, optimized, and scalable code—ensuring performance even at scale.",
    items: [
      {
        title: "Algorithmic Thinking",
        description: "(Greedy, DP, Graphs, Backtracking)",
      },
      {
        title: "Optimized Solutions",
        description: "(Time & Space Complexity Focused)",
      },
      {
        title: "Coding Expertise",
        description: "(LeetCode, GFG, Competitive Programming)",
      },
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "I explore AI/ML to build data-driven applications that can analyze, predict, and learn. From neural networks to natural language processing, I bring intelligence into applications.",
    items: [
      {
        title: "Machine Learning",
        description: "(Neural Networks, Computer Vision, NLP)",
      },
      {
        title: "Deep Learning (Learning)",
        description: "(PyTorch, TensorFlow, Scikit-learn)",
      },
      {
        title: "Generative AI (Learning)",
        description: "(Feature Engineering, Preprocessing, Visualization)",
      },
    ],
  },
  {
    title: "DevOps & Cloud (Upcoming)",
    description:
      "I will expand into DevOps and Cloud to bridge the gap between development and deployment—automating infrastructure, ensuring scalability, and leveraging the cloud.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes - Learning Phase)",
      },
      {
        title: "Cloud Platforms",
        description: "(AWS, Azure, Serverless Architectures - Learning Phase)",
      },
      {
        title: "Infrastructure as Code",
        description: "(Terraform, Ansible - To Explore)",
      },
    ],
  },
];


export const profiles = [
  {
    testimonial:
      "🌟 Solved ~180 problems | 1503 Rating | Regular contest participant. I use LeetCode to sharpen my DSA daily.",
    name: "LeetCode",
    profile_link: "https://leetcode.com/u/samarth3282/",

    image: "https://assets.leetcode.com/static_assets/public/icons/favicon-96x96.png",
  },
  {
    testimonial:
      "⚔️ Rated 'newbie' | Max Rating: 891 | Active in Division 2/3 contests. I enjoy tackling algorithmic challenges here.",
    name: "Codeforces",
    profile_link: "https://codeforces.com/profile/Mercy_dynamo",

    image: codeforces,
  },
  {
    testimonial:
      "🍳 1★ Coder | Rating: 1154 | Regularly Participated in weekly contests | Focused on time-efficient problem solving.",
    name: "CodeChef",
    profile_link: "https://www.codechef.com/users/samarth3282",

    image: codechef,
  },
];

export const projects = [
  {
    id: 1,
    name: "Natours",
    description:
      "A full-stack chat application based on socket.io as a major technology used",
    href: "https://natours-frontend-rhey.onrender.com/",
    githubHref: "https://github.com/samarth3282/natours-frontend",
    image: "/assets/projects/natours.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "rest API", icon: restApiIcon },
      { id: 2, name: "React.js", icon: reactIcon },
      { id: 3, name: "node.js", icon: nodeIcon },
      { id: 4, name: "express.js", icon: expressIcon },
      { id: 5, name: "mongo db", icon: mongoIcon },
      // { id: 3, name: "json-server" },
    ],
  },
  {
    id: 2,
    name: "Vue Jobs",
    description:
      "A Full-Stack application build using Vue.js and json-server",
    href: "http://vuejobsforu.vercel.app/",
    githubHref: "https://github.com/samarth3282/vue-jobs",
    image: "/assets/projects/vue_jobs.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Vue.js", icon: vueIcon },
      { id: 2, name: "Tailwind CSS", icon: tailwindIcon },
      { id: 3, name: "json-server", icon: jsonIcon },
    ],
  },
  {
    id: 3,
    name: "Casa Verde",
    description:
      "An interactive landing page built with GSAP, inspired by Awwwards-winning designs. Showcases a premium mojito bar experience with smooth animations, micro-interactions, and storytelling transitions.",
    href: "https://try-samarths-cocktails.vercel.app/",
    githubHref: "https://github.com/samarth3282/try-samarths-cocktails",
    image: "/assets/projects/gsap_mojito.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React", icon: reactIcon },
      { id: 2, name: "Tailwind CSS", icon: tailwindIcon },
      { id: 3, name: "GSAP", icon: gsapIcon }
    ],
  },
  {
    id: 4,
    name: "3D-Portfolio",
    description:
      "A portfolio that i built during my early days of lerning Three.js",
    href: "https://samarthnimeshkumarpatel-3d.vercel.app/",
    githubHref: "https://github.com/samarth3282/3d-portfolio",
    image: "/assets/projects/3d_portfolio.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js", icon: reactIcon },
      { id: 2, name: "Three.js", icon: threeIcon },
      { id: 3, name: "Tailwind CSS", icon: tailwindIcon },
      // { id: 3, name: "json-server" },
    ],
  },
  {
    id: 5,
    name: "Coffee Project",
    description:
      "A website made in my early days using just html, css, js and animate on scroll library",
    href: "https://coffeeforu.vercel.app/",
    githubHref: "https://github.com/samarth3282/coffee-project1",
    image: "/assets/projects/coffee_project.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "HTML", icon: htmlIcon },
      { id: 2, name: "CSS", icon: cssIcon },
      { id: 3, name: "Javascript", icon: javascriptIcon },
      { id: 4, name: "AOS", icon: "mdi:animation" },
      // { id: 3, name: "json-server" },
    ],
  },
  {
    id: 6,
    name: "WorldWise (Under Dev)",
    description:
      "WorldWise — a travel tracking app that lets users pin locations on an interactive map, add trip details, and manage journeys using React Router and Context API.",
    href: "/underdev",
    githubHref: "/underdev",
    image: "/assets/projects/worldwise.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js", icon: reactIcon },
      { id: 2, name: "CSS", icon: cssIcon },
      // { id: 3, name: "json-server" },
    ],
  },


  {
    id: 7,
    name: "Chat App (Under Dev)",
    description:
      "A full-stack chat application based on socket.io as a major technology used",
    href: "/underdev",
    githubHref: "/underdev",
    image: "/assets/projects/chat_app.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js", icon: reactIcon },
      { id: 2, name: "tailwind css", icon: tailwindIcon },
      { id: 3, name: "node.js", icon: nodeIcon },
      { id: 4, name: "express.js", icon: expressIcon },
      { id: 4, name: "mongo db", icon: mongoIcon },
      // { id: 3, name: "json-server" },
    ],
  },

];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/samarth3282" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/samarthnimeshkumarpatel/" },
  { name: "GitHub", href: "https://github.com/samarth3282" },
];