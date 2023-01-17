import starLogo from "../../assets/shared/logo.svg";

import {GiHamburgerMenu as HamburgerIcon} from "react-icons/gi";

export const Menu = () => {
    return (
        <nav className={"flex flex-row justify-between"}>
            <a>
                <img src={starLogo} alt={"star logo"} className={"max-w-[40px]"}/>
            </a>

            <HamburgerIcon size={30} className={"text-light-blue"}/>
        </nav>
    )
}