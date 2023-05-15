// import logo from "../assets/rz-bird-logo.png";
import logo from "../assets/bird_logo.svg";
import linkedin from "../assets/linkedin-64.svg";
import github from "../assets/github-64.svg";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content gap-4 sm:gap-2 px-16">
            <div className="justify-self-center md:justify-self-start items-center grid-flow-col">
                <img src={logo} alt="rz bird logo" className="w-12"/>
                <p>Copyright © 2023 - All right reserved</p>
            </div> 
            <div className="grid-flow-col gap-4 justify-self-center md:justify-self-end">
                <a href={"https://www.linkedin.com/in/zamora-ricardo/"} target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linked in logo" className="w-12"/>
                </a>
                <a href={"https://github.com/RicardoZamora01"} target="_blank" rel="noreferrer">
                    <img src={github} alt="github logo" className="w-12"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;

