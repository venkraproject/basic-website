import { Outlet } from "react-router-dom";
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Wa from './components/wa/Wa'

export default function App() {
    return (
        <div key='App'>
            <Nav />
            <Outlet />
            <Wa />
            <Footer />
        </div>
    );
}