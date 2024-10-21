import RouterView from "./router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import axios from "axios";
import LocationProvider from "./components/Location/LocationProvider/location_provider";

function App() {
    axios.defaults.withCredentials = true;
    return (
        <Router>
            <LocationProvider />
            <RouterView />
        </Router>
    );
}

export default App;
