import starLogo from "../../assets/shared/logo.svg";

import {GiHamburgerMenu as HamburgerIcon} from "react-icons/gi";
import {Fragment, useState} from "react";
import {AiOutlineClose as CloseIcon} from "react-icons/ai";

import {Link} from "react-router-dom";
import {menuItems} from "./Items.jsx";
import useWindowSize from "../../hooks/useWindowSize.js";
import {Headline} from "../commons/Headline.jsx";

const menuScreenStyle = {
    mobile: {
        aside: "z-30 w-[240px] h-full absolute right-0 backdrop-blur-md backdrop-brightness-90 bg-white/5 top-0 text-white",
        ul: "mt-32 h-[276px] min-w-full flex flex-col justify-center"

    },
    desktop: {
        aside: "bg-gray-800 min-w-[450px] min-h-[96px] absolute right-0 top-0 flex justify-center items-center",
        ul: "flex flex-row text-white justify-between w-[356px]",
    }
}

export const Menu = () => {
    const [selected, setSelected] = useState(0);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const {width} = useWindowSize();

    const isMobile = width < 810;

    const handleMenuIsOpen = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleChangeSelectedOption = (index) => {
        setSelected(index)
    }

    return (
        <nav className={"flex flex-row justify-between md:mb-10"}>
            <a>
                <img src={starLogo} alt={"star logo"} className={"max-w-[40px] absolute left-4 md:left-10 top-6"}/>
            </a>


            {isMobile && (
                menuIsOpen ? <CloseIcon   size={30} className={"z-40 text-light-blue"} onClick={handleMenuIsOpen}/> :
                    <HamburgerIcon size={30} className={"z-40 text-light-blue"} onClick={handleMenuIsOpen}/>
            )}

            <aside className={!isMobile ? menuScreenStyle.desktop.aside : menuIsOpen && menuScreenStyle.mobile.aside}>
                <ul className={!isMobile ? menuScreenStyle.desktop.ul : menuIsOpen && menuScreenStyle.mobile.ul}>
                    {menuItems.map((element, index) => (
                        <li onClick={() => handleChangeSelectedOption(index)} key={index}
                            className={`${selected === index && 'border-r-4 md:border-r-0 md:border-b-2'} 
                            cursor-pointer`}
                        >
                            <Link to={element.path}>
                                {isMobile && (
                                    <span>{element.item.identity}</span>
                                )}
                                <span className={"uppercase tracking-widest"}>{element.item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

        </nav>
    )
}