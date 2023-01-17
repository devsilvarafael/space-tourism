import {Menu} from "../components/Menu/Menu.jsx";
export const DefaultLayout = ({ children, background }) => {
    return (
        <div className={`container bg-cover ${background} p-6 flex items-center flex-col`}>
            <header className={"container"}>
                <Menu/>
            </header>
            {children}
        </div>
    )
}