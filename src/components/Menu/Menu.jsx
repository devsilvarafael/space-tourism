    import starLogo from "../../assets/shared/logo.svg";

    import {GiHamburgerMenu as HamburgerIcon} from "react-icons/gi";
    import {Fragment, useEffect, useState} from "react";
    import {AiOutlineClose as CloseIcon} from "react-icons/ai";

    import {Link, useParams} from "react-router-dom";
    import {menuItems} from "./Items.jsx";
    import useWindowSize from "../../hooks/useWindowSize.js";
    import {Headline} from "../commons/Headline.jsx";
    import {MenuContainer} from "./MenuContainer.jsx";

    export const Menu = () => {
        // State management for menu
        const initialLocalStorage = parseInt(localStorage.getItem("selected"))
        const [selected, setSelected] = useState(initialLocalStorage);
        const [menuIsOpen, setMenuIsOpen] = useState(false);

        // Breakpoints for mobile
        const {width} = useWindowSize();
        const isMobile = width < 810;
        const handleMenuIsOpen = () => {
            setMenuIsOpen(!menuIsOpen)
        }

        const handleChangeSelectedOption = (index) => {
            setSelected(index)

            localStorage.setItem("selected", index);
        }

        return (
            <nav className={"flex flex-row justify-between items-center md:mb-10"}>
                <div className={"mb-8 md:mb-0"}>
                    <a>
                        <img src={starLogo} alt={"star logo"} className={"max-w-[40px] absolute left-4 md:left-10 top-6"}/>
                    </a>


                    <div className={"absolute right-4 top-8 z-40"}>
                        {isMobile && (
                            menuIsOpen ? <CloseIcon   size={30} className={"z-40 text-light-blue"} onClick={handleMenuIsOpen}/> :
                                <HamburgerIcon size={30} className={"z-40 text-light-blue"} onClick={handleMenuIsOpen}/>
                        )}
                    </div>
                </div>



                {menuIsOpen && isMobile ? (
                    <MenuContainer menuIsOpen={menuIsOpen} isMobile={isMobile}>
                        {menuIsOpen && menuItems.map((element, index) => (
                            <li onClick={() => handleChangeSelectedOption(index)} key={index}
                                className={`${selected === index && 'border-r-4 md:border-r-0 md:border-b-2'} 
                                cursor-pointer flex flex-start mb-8 pl-6`}
                            >
                                <Link to={element.path}>
                                    <Headline title={element.item.title} number={element.item.identity} menu />
                                </Link>
                            </li>
                        ))}
                    </MenuContainer>
                ) : !isMobile && (
                    <MenuContainer menuIsOpen={menuIsOpen} isMobile={isMobile}>
                        {menuItems.map((element, index) => (
                            <li onClick={() => handleChangeSelectedOption(index)} key={index}
                                className={`${selected === index && 'border-r-4 md:border-r-0 md:border-b-2'} 
                                cursor-pointer`}
                            >
                                <Link to={element.path}>
                                    <span className={"uppercase tracking-widest"}>{element.item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </MenuContainer>
                )}

            </nav>
        )
    }