import {Headline} from "../commons/Headline.jsx";

export const menuItems = [
    {
        path: '/',
        element: <Headline number={"00"} title={"Home"} />
    },
    {
        path: '/destination',
        element: <Headline number={"01"} title={"Destination"} />
    },
    {
        path: '/crew',
        element: <Headline number={"02"} title={"Crew"} />
    },
    {
        path: '/technology',
        element: <Headline number={"03"} title={"Technology"} />
    }
]