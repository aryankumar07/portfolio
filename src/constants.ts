import { MailCheck, PhoneCall, Cake, MapPinHouse, Twitter, Github, Linkedin, LucideIcon, Gamepad, TabletSmartphone, Code, BrainCog } from 'lucide-react'

export interface ProfileTag {
    id: string,
    icon: LucideIcon,
    title: string,
    content: string,
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
        content: "aryan.pageme"
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

export const CardsDetail: CardDetail[] = [
    {
        id: "1241414",
        icon: Code,
        heading: "Web Development",
        description: "High Quality Full Stacl Sites Coded at Professional Level",
    },
    {
        id: "978798",
        icon: TabletSmartphone,
        heading: "Mobile Apps",
        description: "Professional Development for Both iOS and Cross Platform",
    },
    {
        id: "57656",
        icon: BrainCog,
        heading: "Problem Solver",
        description: "Efficient in Problem Solving Skills and Building C++ builds",
    },
    {
        id: "10014",
        icon: Gamepad,
        heading: "Gamer At Night",
        description: "Love To Mend that elden Ring",
    },
]

export const Facts: gameCard[] = [
    {
        name: "John Marston",
        game: "Red Dead Redemption 2",
        image: "/john.png",
        quote: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair"
    },
    {
        name: "Kratos",
        game: "GOD OF WAR",
        image: "/kratos.png",
        quote: "Death Can Have Me When It Earns Me"
    },
    {
        name: "Max Payne",
        game: "Max Payne",
        image: "/maxpayne.png",
        quote: "Nothing is a cliché when it's happening to you"
    },

    {
        name: "Maleina",
        game: "Elden Ring",
        image: "/malenia.png",
        quote: "You Will Witness True Horror",
    }
]

export const Projects: Project[] = [
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
        id: "2",
        title: "Grace",
        category: "Web Development",
        images: ['/grace_1.png', '/grace_2.png', '/grace_3.png', '/grace_4.png'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        date: "August 2024",
        techstack: ["NextJs", "Tailwinf", "ReactJS", "MongoDb", "Prisma"],
        github: "https://github.com/aryankumar07/grace",
        live: "",
    },
    {
        id: "5",
        title: "DotFiles",
        category: "Config Files",
        images: ['neovim.png', 'mc.gif'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        date: "August 2024",
        techstack: ["Lua", "Neovim", "Linux"],
        github: "https://github.com/aryankumar07/dotfiles",
        live: ""
    },
    {
        id: "7",
        title: "CheckInEase",
        category: "App Development",
        images: ['airbnb_1.png', 'airbnb.gif', 'airbnb_2.png', 'airbnb_3.png', 'airbnb_4.png'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        date: "August 2024",
        techstack: ["c++", "Sockets"],
        github: "https://github.com/aryankumar07/Client-server_model",
        live: ""
    },
    {
        id: "5",
        title: "HonestPoll",
        category: "App Development",
        images: ['hp_1.png', 'hpp_2.png'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        date: "December 2024",
        techstack: ["Tailwind", "ReactJS", "CSS"],
        github: "https://github.com/aryankumar07/reactStuff/tree/main/moving_containers",
        live: ""
    },
    {
        id: "6",
        title: "Etsy",
        category: "App Development",
        images: ['etsy_1.png'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        date: "August 2024",
        techstack: ["Flutter", "Dart"],
        github: "https://github.com/aryankumar07/cartopia",
        live: ""
    },
]
