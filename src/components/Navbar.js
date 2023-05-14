import logo from "../assets/bird_logo.svg"

const Navbar = () => {
    const handleClick = (idName) => {
        const element = document.getElementById(idName);
        element.scrollIntoView({behavior: 'smooth'});
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-1 w-6 h-6 visible sm:invisible">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
        </div>
    )
};

export default Navbar