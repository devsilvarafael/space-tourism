import {Menu} from "../components/Menu/Menu.jsx";
export const DefaultLayout = ({ children, background, space }) => {
    return (
        <div className={`${background} bg-cover p-4 md:p-0 min-h-screen flex flex-col items-center ${space && 'justify-around'}`}>
            <header className={"container fixed top-0 p-6"}>
                <Menu/>
            </header>
            {children}
        </div>
    )
}