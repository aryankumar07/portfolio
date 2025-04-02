import { MailCheck, PhoneCall, Cake, MapPinHouse, Twitter, Github, Linkedin, LucideIcon, Gamepad, TabletSmartphone, Code, BrainCog } from 'lucide-react'
import Example from '../blog/example.mdx'
import Example2 from '../blog/example2.mdx'
import Regex from '../blog/regex.mdx'
import { ComponentType } from 'react';

type FiltersMap = {
  [key: string]: string; // Index signature
};

export interface ProfileTag {
  id: string,
  icon: LucideIcon,
  title: string,
  content: string,
  link?: string,
}

export interface gameCard {
  name: string,
  game: string,
  image: string,
  quote: string
}


export interface CardDetail {
  id: string,
  icon: LucideIcon,
  heading: string,
  description: string,
}

export interface Project {
  id: string
  title: string,
  category: string,
  images: string[],
  description: string,
  date: string,
  techstack: string[],
  github: string,
  live: string,
}


export const Profiletags: ProfileTag[] = [
  {
    id: "123131",
    icon: MailCheck,
    title: "EMAIL",
    content: "aryan.pageme",
    link: 'mailto:aryan.pageme@gmail.com'
  },
  {
    id: " 354634643",
    icon: PhoneCall,
    title: "PHONE",
    content: "+91-9779989368"
  },
  {
    id: "3252546",
    icon: Cake,
    title: "BIRTHDAY",
    content: "31-12-2002"
  },
  {
    id: "234411",
    icon: MapPinHouse,
    title: "LOCATION",
    content: "Ludhiana"
  }
]

export const SocialHandles = [
  {
    url: "https://github.com/aryankumar07",
    icon: Github
  },
  {
    url: "https://x.com/Monkey_d_aryan",
    icon: Twitter
  },
  {
    url: "https://www.linkedin.com/in/aryan-kumar-45b2a0236/",
    icon: Linkedin
  }
]

export const headers = ["About Me", "Resume", "Projects", "Blog"]
export const filters = ["WEB", "CLI", "CONFIG", "APP"]

export const filtersMap: FiltersMap = {
  WEB: "Web Development",
  CLI: "Command Line",
  CONFIG: "Config Files",
  APP: "App Development",
  CPP: "C++ Development",
};
export const CardsDetail: CardDetail[] = [
  {
    id: "1241414",
    icon: Code,
    heading: "Web Development",
    description: "High-quality full-stack websites developed to professional standards.",
  },
  {
    id: "978798",
    icon: TabletSmartphone,
    heading: "Mobile Applications",
    description: "Professional development services for both iOS and cross-platform applications.",
  },
  {
    id: "57656",
    icon: BrainCog,
    heading: "Problem Solving",
    description: "Proficient in problem-solving skills and building C++ applications.",
  },
  {
    id: "10014",
    icon: Gamepad,
    heading: "Gaming at Night",
    description: "Passionate about gaming, particularly enjoying titles like Elden Ring.",
  },
];

export const Facts: gameCard[] = [
  {
    name: "John Marston",
    game: "Red Dead Redemption 2",
    image: "/john.png",
    quote: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair."
  },
  {
    name: "Kratos",
    game: "God of war",
    image: "/kratos.png",
    quote: "Death can have me when it earns me."
  },
  {
    name: "Max Payne",
    game: "Max Payne",
    image: "/maxpayne.png",
    quote: "Nothing is a cliché when it's happening to you."
  },

  {
    name: "Maleina",
    game: "Elden Ring",
    image: "/malenia.png",
    quote: "You will witness true horror.",
  }
]

export const Projects: Project[] = [ // current Project no : 9
  {
    id: '9',
    title: 'NOTE CLI',
    category: 'Command Line',
    images: ['/note_cli.png', '/note_cli1.png', '/note_cli2.png', '/note_cli3.png'],
    description: 'As developers, we spend a significant amount of time working in our terminals, juggling multiple tasks, and managing project workflows. While there are many task management tools available, most of them are either online-dependent, overly complex, or require switching contexts away from the terminal. Note CLI aims to solve this problem by providing a lightweight, offline-friendly, and easy-to-use command-line interface (CLI) tool for managing project tasks efficiently With Note CLI, you can create, update, delete, and organize tasks directly from your terminal, ensuring that your workflow remains uninterrupted. Whether youre working on a personal project, collaborating with a team, or just need a quick way to jot down ideas, Note CLI is designed to be your go-to task management companion',
    date: 'January 2025',
    techstack: ["Node", "Javscript"],
    github: 'https://github.com/aryankumar07/note_cli',
    live: 'https://www.npmjs.com/package/@tarnished_aryan/note'
  },
  {
    id: "1",
    title: "Genius",
    category: "Web Development",
    images: ['/genius_1.png', '/genius_2.png', '/genius_3.png'],
    description: "Genius Ten is an innovative SaaS platform that uses OpenAI and Replicate APIs to provide powerful tools for code generation, conversational AI, image creation, and video production, catering to developers, content creators, and businesses. With features designed to streamline workflows and enhance productivity, users can generate high-quality code, engage with an AI-powered chat assistant, create stunning visuals, and produce professional-grade videos effortlessly. The platform integrates Stripe for secure payment processing, offering premium features and priority access to advanced AI resources for paid subscribers, making Genius Ten the ultimate solution for creative and technical needs.",
    date: "October 2024",
    techstack: ["NextJs", "OPenAi", "ReactJS", "Postgress", "Prisma", "ShadcnUI"],
    github: "https://github.com/aryankumar07/genius",
    live: "https://genius-ten-navy.vercel.app",
  },
  {
    id: "7",
    title: "Aryan's Lair",
    category: "Web Development",
    images: ['/port_1.png', '/port_2.png', '/port_3.png'],
    description: "I have developed a personal portfolio website using React, incorporating various dependencies to enhance functionality and design. The project utilizes framer-motion for animations, react-icons for scalable vector icons, react-router-dom for client-side routing, and tailwindcss for efficient styling. These tools collectively contribute to a dynamic and responsive user experience. The source code is available on my GitHub repository",
    date: "October 2024",
    techstack: ["NextJs", "OPenAi", "ReactJS", "Postgress", "Prisma", "ShadcnUI"],
    github: "https://github.com/aryankumar07/genius",
    live: "https://portfolio-aryans-projects-0efed95e.vercel.app",
  },
  {
    id: "8",
    title: "Blogs App",
    category: "Web Development",
    images: ['/blog.png'],
    description: "This web application is designed for writers, thinkers, and creators to effortlessly publish their ideas. With a clean interface using Clerk and imagekit.io for seamless authentication and image storing using webhooks foor string user in mu Mongodb databse with server writen in expres and frontend in ReactJs",
    date: "January 2025",
    techstack: ["ReactJS", "Express", "MongoDB", "Node"],
    github: "https://github.com/aryankumar07/blog",
    live: "https://blogs-v1-app.vercel.app"
  },
  {
    id: "11",
    title: "Etsy",
    category: "App Development",
    images: ['etsy_1.png'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    date: "August 2024",
    techstack: ["Flutter", "Dart"],
    github: "https://github.com/aryankumar07/cartopia",
    live: ""
  },
  {
    id: "2",
    title: "Grace",
    category: "Web Development",
    images: ['/grace_1.png', '/grace_2.png', '/grace_3.png', '/grace_4.png'],
    description: "Designed and developed a full-stack web application using Next.js within a MERN (MongoDB, Express.js, React, Node.js) stack, integrating NextAuth for secure and efficient authentication. Implemented server-side rendering (SSR) to optimize page load speeds and improve SEO, delivering a responsive and high-performance user experience. Built reusable, modular components to reduce development time and improve code maintainability, addressing common hydration errors in server-rendered pages and achieving a 30% reduction in code redundancy. Applied responsive design principles using Tailwind CSS to ensure seamless performance across multiple devices and screen sizes, resulting in a scalable, high-performance application with enhanced user experience and streamlined development processes.",
    date: "August 2024",
    techstack: ["NextJs", "Tailwinf", "ReactJS", "MongoDb", "Prisma"],
    github: "https://github.com/aryankumar07/grace",
    live: "",
  },
  {
    id: "5",
    title: "Dotfiles",
    category: "Config Files",
    images: ['neovim.png', 'mc.gif'],
    description: "Created and maintained a dotfiles repository to streamline and personalize the development environment across multiple machines. Organized configuration files for various tools, including shell environments, text editors, and version control systems, to ensure consistency and efficiency in workflows. Implemented automation scripts to simplify the setup process, reducing setup time and enhancing productivity. This repository serves as a centralized and version-controlled solution for managing and sharing development environment preferences, ensuring a seamless experience across different systems. Also Include the .zshrc files for macos users",
    date: "August 2024",
    techstack: ["Lua", "Neovim", "Linux"],
    github: "https://github.com/aryankumar07/dotfiles",
    live: ""
  },
  {
    id: "10",
    title: "CheckInEase",
    category: "App Development",
    images: ['airbnb_1.png', 'airbnb.gif', 'airbnb_2.png', 'airbnb_3.png', 'airbnb_4.png'],
    description: "I have developed a Flutter application that showcases a modern and responsive user interface, highlighting my expertise in crafting visually appealing and user-friendly designs. This app serves as a comprehensive portfolio, featuring sections such as Home, Trips Favourite and bookings. This project demonstrates my ability to build cross-platform applications with seamless performance and aesthetic appeal. The source code is available on my GitHub repository",
    date: "August 2025",
    techstack: ["Flutter", "Dart"],
    github: "https://github.com/aryankumar07/checkInEase_frontend",
    live: ""
  },
  {
    id: "4",
    title: "Client-Server-Model",
    category: "C++ Development",
    images: ['nothing.png', '4KT.gif'],
    description: "I have developed a client-server model in C++ to demonstrate my understanding of network programming and inter-process communication. This project includes two primary components: a server application (server.cpp) that listens for incoming client connections and manages data exchange, and a client application (client.cpp) that connects to the server to send and receive data. This implementation showcases my proficiency in socket programming, concurrency handling, and the fundamentals of networked application development. The project is available on my GitHub repository",
    date: "August 2024",
    techstack: ["c++", "Sockets"],
    github: "https://github.com/aryankumar07/Client-server_model",
    live: ""
  },
  {
    id: "12",
    title: "HonestPoll",
    category: "App Development",
    images: ['hp_1.png', 'hp_2.png'],
    description: "Developed a cross-platform voting application using Flutter and Dart, delivering a seamless user experience on both iOS and Android devices. Integrated Node.js for the backend to manage user authentication and voting logic, with MongoDB for efficient database management of voting data and user information. Ensured the security of user votes and privacy using JWT (JSON Web Tokens) and persisted user state with local storage for a consistent experience. Leveraged various Flutter packages and dependencies to enhance application performance, resulting in a smooth and responsive user experience across platforms.",
    date: "August 2024",
    techstack: ["Flutter", "Dart", "Express", "Node"],
    github: "https://github.com/aryankumar07/honestpol",
    live: ""
  },
  {
    id: "3",
    title: "Moving Containers",
    category: "Web Development",
    images: ['mc.png', 'mc.gif'],
    description: "Developed an interactive React application showcasing dynamic container movement and animations, designed to demonstrate proficiency in front-end development and React's state management capabilities. Implemented smooth transitions and responsive design principles to ensure a seamless user experience across various devices and screen sizes. Utilized React hooks and components to create reusable and modular code, enhancing maintainability and scalability. This project highlights expertise in building engaging and interactive web applications with a focus on performance and user interaction.",
    date: "December 2024",
    techstack: ["Tailwind", "ReactJS", "CSS"],
    github: "https://github.com/aryankumar07/reactStuff/tree/main/moving_containers",
    live: ""
  },

]


export interface Iblog {
  id: string,
  title: string,
  image: string,
  body: ComponentType
}



export const Blogs: Iblog[] = [
  {
    id: "1234",
    title: 'Regex',
    image: 'regex.png',
    body: Regex
  }
]






