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

export const MenuContainer = ({ children, isMobile, menuIsOpen }) => {
    return (
        <aside className={!isMobile ? menuScreenStyle.desktop.aside : menuIsOpen && menuScreenStyle.mobile.aside}>
            <ul className={!isMobile ? menuScreenStyle.desktop.ul : menuIsOpen && menuScreenStyle.mobile.ul}>
                {children}
            </ul>
        </aside>
    )
}