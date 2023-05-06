import html from "../assets/html-icon.svg"
import css from "../assets/css3-icon.svg"
import reactIcon from "../assets/react-icon.svg"
import tailwind from "../assets/tailwindcss-icon.svg"
import python from "../assets/python-icon.svg"
import rails from "../assets/rails-icon.svg"
import javascript from "../assets/javascript-icon.svg"

const Projects = () => {
    // eslint-disable-next-line
    const projects = [
        {
            name: "TRJ1 COUNTER App", 
            description: "This app takes COUNTER 5 TR_J1 reports and subscription costs for a journal package and calculates the cost per use and journal usage distribution for the time periods covered by the TR-J1 reports.", 
            link: "", 
            github: "https://github.com/cdeljunco/COUNTER_viz", 
            techStack: ["Python"]
        },
        {
            name: "Instant Ramen Report", 
            description: "This webpage explores the complex impact of instant ramen on global food systems and society as a whole, weighing its benefits and drawbacks and encouraging thoughtful consumption.", 
            link: "https://instant-ramen-global.web.app/", 
            github: "https://github.com/RicardoZamora01/instant-ramen-globalization", 
            techStack: ["React", "Tailwind", "DaisyUI"]
        }
    ]
    return (
        <div className="relative h-screen " id="project-container">
            <div className='spacer-top upper-layer absolute top-0'></div>
            <div className="flex-col dynamic-pt px-8" id="project-content">
                <h1 className="text-primary text-4xl mb-8">Projects</h1>
                <div className="flex flex-col gap-0 md:flex-row md:gap-12 items-center">
                    <h2 className="text-2xl mb-6 min-w-fit">Tech Stack</h2>
                    <ul className="flex flex-wrap md:flex-nowrap justify-between min-w-[80%]">
                        <li>
                            <img src={python} alt="python logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        <li>
                            <img src={reactIcon} alt="react logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        <li>
                            <img src={html} alt="html logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        <li>
                            <img src={css} alt="css logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        <li>
                            <img src={javascript} alt="javascript logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        <li>
                            <img src={tailwind} alt="tailwind logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        <li>
                            <img src={rails} alt="rails logo" 
                            className="bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]"/>
                        </li>
                        {/* <li>
                            <img src={python} alt="python logo" className="border-violet-500 bg-slate-100 border-4 rounded-full"/>
                        </li> */}
                    </ul>
                </div>
                <p>caca</p>
            </div>
        </div>
    );
}

export default Projects;