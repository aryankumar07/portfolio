import { MailCheck, PhoneCall, Cake, MapPinHouse, Twitter, Github, Linkedin, LucideIcon, Gamepad, TabletSmartphone, Code, BrainCog } from 'lucide-react'

export interface ProfileTag {
    id: string,
    icon: LucideIcon,
    title: string,
    content: string,
}

export interface gameCard {
    name: string,
    image: string,
    quote: string
}


export interface CardDetail {
    id: string,
    icon: LucideIcon,
    heading: string,
    description: string,
}


export const Profiletags: ProfileTag[] = [
    {
        id: "123131",
        icon: MailCheck,
        title: "EMAIL",
        content: "dummy@gmail.com"
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
        content: "https://localhost:3000"
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
        name: "Kratos",
        image: "/kratos.png",
        quote: "Death Can Have Me When It Earns Me"
    },
    {
        name: "Max Payne",
        image: "/maxpayne.png",
        quote: "Nothing is a cliché when it's happening to you"
    },
    {
        name: "John Marston",
        image: "/john.png",
        quote: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair"
    },
    {
        name: "Maleina",
        image: "/malenia.png",
        quote: "You Will Witness True Horror",
    }
]
