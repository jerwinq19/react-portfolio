import { useState, useEffect } from "react";
import "../style/PanelBar.css";
import PanelBar from "../Presentational/PanelBar";
import Desktop from "../Presentational/Desktop";
import Application from "../Presentational/Application";
import AboutMe from "./AboutMe";
import ContactMe from "./Contact";
import Project from "./Project";
import ChatPNG from "../img/chat.png"
import AboutPNG from "../img/personal-information.png"
import ProjectPNG from "../img/projects.png"

const Home = () => {

    const [Time, SetTime] = useState("")
    const [isOpen, setOpen] = useState(false)
    const [Component, setComponent] = useState(null)

    useEffect(() => {
        const Interval = setInterval(() => {
            SetTime(new Date().toLocaleTimeString())
        },1000)

        return () => clearInterval(Interval)
    }, [])
    
    return(
        <div className="flex flex-col min-h-screen">

            <Desktop>
                <Application 
                    name={"About me.jsx"} 
                    image={AboutPNG} 
                    onclick={() => {
                        setComponent(<AboutMe exit={() => setOpen(false)}/>)
                        setOpen(!isOpen)
                    }} 
                />
                <Application 
                    name={"Contact me.jsx"} 
                    image={ChatPNG} 
                    onclick={() => {
                        setComponent(<ContactMe exit={() => setOpen(false)}/>)
                        setOpen(!isOpen)
                    }} 
                />
                <Application 
                    name={"My Project.jsx"} 
                    image={ProjectPNG} 
                    onclick={() => {
                        setComponent(<Project exit={() => setOpen(false)}/>)
                        setOpen(!isOpen)
                    }} 
                />
            </Desktop>

            {/* Panel Bar */}
            <PanelBar>
                <div className="AppCont px-5 py-3 flex justify-between items-center w-full sm:w-auto">
                    <button>Portfolio ni Jico</button>
                </div>

                <div className="text-white pr-5">
                    {Time}
                </div>
            </PanelBar>

            {/* Open a single component only... */}
            {isOpen ? Component : null}
        </div>
    );
};

export default Home;
