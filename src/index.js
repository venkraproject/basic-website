import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import './index.css'
import About from "./pages/About";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
);