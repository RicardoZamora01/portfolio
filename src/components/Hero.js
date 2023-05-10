import headshot from "../assets/Zamora_Ricardo.png";
import ImageOnHover from "./ImageOnHover";

const Hero = () => {

    const handleClick = () => {
        const element = document.getElementById('about');
        element.scrollIntoView({behavior: 'smooth'});
    }
    
    return ( 
        <div className="hero min-h-screen relative" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")` }} id="Home" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content flex-col md:flex-row z-10">
                <div className="max-w-2xl mr-8">
                    <h1 className="mb-5 text-6xl font-bold">Hi! I'm Ricardo Zamora.</h1>
                    <p className="mb-5">
                        I am a versatile team player and software engineer who is passionate about 
                        leveraging data analysis to have a lasting impact in underrepresented communities. 
                        {/* I thrive in team environments and enjoy using agile methodologies to innovate 
                        initiatives that make a tangible difference. I believe in fostering curiosity 
                        and pushing myself to be inspired by both myself and my team. As a lifelong learner, 
                        I know when to challenge myself and when to seek help from others. 
                        I am excited to be a part of an organization with a strong mission that puts the community first, 
                        and I am committed to growing my skills and contributing to meaningful change.  */}
                    </p>
                    <span className="flex gap-8 my-4 md:my-8 justify-center">
                        <ImageOnHover name={"LinkedIn"} href={"https://www.linkedin.com/in/zamora-ricardo/"}/>
                        <ImageOnHover name={"GitHub"} href={"https://github.com/RicardoZamora01"}/>
                    </span>
                </div>
                <div>
                    <img src={headshot} alt="Headshot of Ricardo" className="max-w-xs md:max-w-sm rounded-xl shadow-2xl mb-4 md:m-0"/>
                </div>
                <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 flex-col  md:absolute bottom-10 animate-bounce cursor-pointer" >
                        <path  strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </div>
            <div className="spacer-bottom bottom-layer absolute bottom-0 z-0"></div>
        </div>
    );
}

export default Hero;