import html from "../assets/html-icon.svg"
import css from "../assets/css3-icon.svg"
import reactIcon from "../assets/react-icon.svg"
import tailwind from "../assets/tailwindcss-icon.svg"
import python from "../assets/python-icon.svg"
import rails from "../assets/rails-icon.svg"
import javascript from "../assets/javascript-icon.svg"
// import progress from "../assets/progress.svg"
import ramen from "../assets/ramen.png"
import cat from "../assets/cat.svg"
import counter from "../assets/counter-proj.png"
import classNames from 'classnames';


const Projects = () => {
    // eslint-disable-next-line
    const iconClasses = 'bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]';

    const projects = [
        {
            name: "TRJ1 COUNTER App", 
            description: "This app takes COUNTER 5 TR_J1 reports and subscription costs for a journal package and calculates the cost per use and journal usage distribution for the time periods covered by the TR-J1 reports.", 
            link: "", 
            github: "https://github.com/cdeljunco/COUNTER_viz", 
            image: counter,
            techStack: ["Python"]
        },
        {
            name: "Instant Ramen Report", 
            description: "This webpage explores the complex impact of instant ramen on global food systems and society as a whole, weighing its benefits and drawbacks and encouraging thoughtful consumption.", 
            link: "https://instant-ramen-global.web.app/", 
            github: "https://github.com/RicardoZamora01/instant-ramen-globalization",
            image: ramen, 
            techStack: ["React", "Tailwind", "DaisyUI"]
        }
    ]
    return (
        <div className="relative h-fit " id="project-container">
            <div className='spacer-top upper-layer absolute top-0'></div>
            <div className="flex-col dynamic-pt px-8" id="project-content">
                <h1 className="text-primary text-4xl mb-8">Projects</h1>
                <div className="flex flex-col gap-0 md:flex-row md:gap-12 items-center">
                    <h2 className="text-2xl mb-6 min-w-fit">Tech Stack</h2>
                    <ul className="flex flex-wrap md:flex-nowrap justify-between min-w-[80%]">
                        <li>
                            <img src={python} alt="python logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        <li>
                            <img src={reactIcon} alt="react logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        <li>
                            <img src={html} alt="html logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        <li>
                            <img src={css} alt="css logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        <li>
                            <img src={javascript} alt="javascript logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        <li>
                            <img src={tailwind} alt="tailwind logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        <li>
                            <img src={rails} alt="rails logo" 
                            className={classNames(iconClasses)}/>
                        </li>
                        {/* <li>
                            <img src={python} alt="python logo" className="border-violet-500 bg-slate-100 border-4 rounded-full"/>
                        </li> */}
                    </ul>
                </div>
                <section className="grid md:grid-cols-2 content-center align-middle gap-12 p-10">
                    {projects.map((project) => {
                    return (
                        <div className="md:my-10 border-4 hover:shadow-2xl rounded-lg border-violet-700 overflow-hidden flex flex-col content-center justify-between max-h-fit min-w-full max-w-2xl">
                            {project.link === "" ? (
                                <div>
                                    <img 
                                        src={project.image === "" ? cat : project.image} 
                                        alt={project.name}
                                        className="md:max-h-96 object-contain rounded-sm"
                                    /> 
                                    <h1 className="text-xl my-4 mx-2 font-bold">{project.name}</h1>
                                    <p className="my-4 mx-2">{project.description}</p>
                                </div>
                                ) : (
                                <div>
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                    <img 
                                        src={project.image === "" ? cat : project.image} 
                                        alt={project.name}
                                        className="md:max-h-96 object-contain rounded-sm"
                                    />
                                    </a>
                                    <h1 className="text-xl mt-4 mx-2 font-bold">{project.name}</h1>
                                    <p className="mt-4 mx-2">{project.description}</p>
                                    <div className="flex flex-wrap justify-start items-center gap-2 my-2 mx-2">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="bg-gray-300 px-2 py-1 rounded-lg">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}

export default Projects;