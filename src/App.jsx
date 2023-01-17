import {Fragment} from "react";
import Destination from "./pages/Destination.jsx";
import Home from "./pages/Home.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";

function App() {
    return (
        <Fragment>
            <Home />
            <Crew />
            <Destination />
            <Technology />
        </Fragment>
    )
}

export default App;