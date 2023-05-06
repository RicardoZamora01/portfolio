import logo from "../assets/rz-bird-logo.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={logo} alt="logo" className=" max-w-[6rem] aspect-square p-2"/>
            </div>
            <div className="flex max-w-max sm:flex-none">
                <ul className="menu menu-horizontal px-1 hidden sm:flex">
                    <li><a href="#/">Home</a></li>
                    <li><a href ="#/">About</a></li>
                    <li><a href="#/">Projects</a></li>
                    <li><a href ="#/">Contact</a></li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-1 w-6 h-6 visible sm:invisible">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </div>
        </div>
    )
};

export default Navbar