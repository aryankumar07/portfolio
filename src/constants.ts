import { MailCheck, PhoneCall, Cake, MapPinHouse, Twitter, Github, Linkedin, LucideIcon } from 'lucide-react'

export default interface ProfileTag {
    id: string
    icon: LucideIcon,
    title: string,
    content: string,
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

