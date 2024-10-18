import RouterView from "./router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    axios.defaults.withCredentials = true;
    return (
        <Provider store={store}>
            <Router>
                <RouterView />
            </Router>
        </Provider>
    );
}

export default App;
