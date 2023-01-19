import starLogo from "../../assets/shared/logo.svg";

import {GiHamburgerMenu as HamburgerIcon} from "react-icons/gi";
import {Fragment, useEffect, useMemo, useState} from "react";
import {AiOutlineClose} from "react-icons/ai";

import {Link} from "react-router-dom";
import {menuItems} from "./Items.jsx";

export const Menu = () => {
    const [selected, setSelected] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const width  = window.outerWidth;

    console.log(width)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

   const handleChangeSelectedOption = (index) => {
        setSelected(index)
   }

    return (
        <nav className={"flex flex-row justify-between"}>
            <a>
                <img src={starLogo} alt={"star logo"} className={"max-w-[40px]"}/>
            </a>


            {width < 765 && openMenu ? (
                <Fragment>
                    <AiOutlineClose size={30} className={"text-light-blue z-40"} onClick={handleOpenMenu}/>
                    <aside
                        className={`z-30 w-[240px] h-full absolute right-0 backdrop-blur-md backdrop-brightness-90 
                        bg-white/5 top-0 text-white`}
                    >
                        <div className={"h-[276px] min-w-full flex flex-col"}>
                            <ul className={"mt-32"}>
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${selected === index ? 'border-r-4' : '' } w-full cursor-pointer  `}
                                        onClick={() => handleChangeSelectedOption(index)}
                                    >
                                        <Link to={item.path}>{item.element}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </Fragment>

            ) : <aside><HamburgerIcon size={30} className={"text-light-blue"} onClick={handleOpenMenu}/></aside>}
        </nav>
    )
}