import Catalogue from '../catalogue/Categories'
import Contact from '../../components/contact/Contact'
import {BsChevronDown} from "react-icons/bs"
import Bowser from 'bowser'

import "./home.css";

import img from "../../assets/full-logo.png"
import VID from "../../assets/main.mp4"

const Home = (props) => {

    const bowser = Bowser.getParser(window.navigator.userAgent);

    let video_section = {
        WebKit: <img className="header_banner-container" src={VID} alt="venkra banner"/>,
        Gecko: <video className="header_banner-container" src={VID} autoPlay loop muted/>,
        Blink: <video className="header_banner-container" src={VID} autoPlay loop muted/>
    }

    return (
        <div className="Home" key="home">
            <section id="banner">
                {video_section[bowser.getEngineName()]}
                <div className="header-content">
                    <div className="container-header_logo">
                        <img src={img} alt=""/> 
                    </div>
                    <div className="header-scroll_down">
                        <div className="header-scroll_down-text">SCROLL DOWN</div> <br/> <div className="header-scroll_down-arrow"><BsChevronDown/></div>
                    </div>
                </div>
            </section>
            <div className="contact-center">
                Catalogo
            </div>
            <Catalogue categories={props.categories}/>
            <Contact />
        </div>
    );
};

export default Home;
