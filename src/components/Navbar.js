import { useState } from "react";
import logo from "../assets/bird_logo.svg";
import menu from "../assets/menu-icon.svg";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (idName) => {
        const element = document.getElementById(idName);
        element.scrollIntoView({behavior: 'smooth'});
        setIsDropdownOpen(false); // close the dropdown after clicking a link
    }

    const handleDropdownClick = () => {
      setIsDropdownOpen(!isDropdownOpen); // toggle the dropdown on button click
    }

    return (
        
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={logo} alt="logo" className=" max-w-[6rem] aspect-square p-2"/>
            </div>
            <div className="flex max-w-max sm:flex-none">
                <ul className="menu menu-horizontal px-1 hidden sm:flex">
                    <li key="Home"><button onClick={() => handleClick("home")}>Home</button></li>
                    <li key="About"><button onClick={() => handleClick("about-container")}>About</button></li>
                    <li key="Projects"><button onClick={() => handleClick("project-container")}>Projects</button></li>
                    <li key="Contact"><button onClick={() => handleClick("contact-container")}>Contact</button></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end sm:hidden">
                <label tabIndex={0} className="btn px-0 m-0 bg-transparent border-transparent hover:bg-transparent hover:border-transparent" onClick={handleDropdownClick}>
                    <img src={menu} alt="menu icon" />
                </label>
                {isDropdownOpen && (
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleClick("home")}>Home</button></li>
                        <li><button onClick={() => handleClick("about-container")}>About</button></li>
                        <li><button onClick={() => handleClick("project-container")}>Projects</button></li>
                        <li><button onClick={() => handleClick("contact-container")}>Contact</button></li>
                    </ul>
                )}
            </div>
        </div>
    )
};

export default Navbar