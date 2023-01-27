import {Fragment} from "react";
import Destination from "./pages/Destination.jsx";
import Home from "./pages/Home.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {Menu} from "./components/Menu/Menu.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/destination'} element={<Destination />} />
                <Route path={'/crew'} element={<Crew />} />
                <Route path={'/technology'} element={<Technology />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;