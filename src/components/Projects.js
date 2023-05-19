import cat from "../assets/cat.svg";
import classNames from 'classnames';
import githubIcon from "../assets/github-64.svg";
import newPageIcon from "../assets/external-link.svg";
import { projects, icons } from "../constants";


const Projects = () => {
    // eslint-disable-next-line
    const iconClasses = 'bg-slate-100 rounded-full p-1 w-[56px] aspect-square border-2 border-[#004AAD]';

    const listItems = icons.map(icon => {
        return (
            <li>
                <img src={icon.path} alt={icon.alt} className={classNames(iconClasses)}/>
            </li>
        )
    })

    return (
        <div className="relative h-fit " id="project-container">
            <div className='spacer-top upper-layer absolute top-0'></div>
            <div className="flex-col dynamic-py px-4 md:px-2" id="project-content">
                <h1 className="text-primary text-4xl mb-8">Projects</h1>
                <div className="flex flex-col gap-0 md:flex-row md:gap-12 items-center">
                    <h2 className="text-2xl mb-6 min-w-fit">Tech Stack</h2>
                    <ul className="flex flex-wrap md:flex-nowrap justify-between min-w-[80%]">
                        {listItems}
                    </ul>
                </div>
                <section className="grid md:grid-cols-2 content-center align-middle gap-12 py-8 md:p-10">
                    {projects.map((project) => {
                    return (
                        <div className="md:my-10 border-4 hover:shadow-2xl rounded-lg border-violet-700 overflow-hidden flex flex-col content-center justify-between max-h-fit min-w-full max-w-2xl">
                            {project.link === "" ? (
                                <div className="z-10">
                                    <img 
                                        src={project.image === "" ? cat : project.image} 
                                        alt={project.name}
                                        className="md:max-h-96 object-contain rounded-sm"
                                    /> 
                                    <h1 className="text-xl my-4 mx-2 font-bold">{project.name}</h1>
                                    <p className="my-4 mx-2">{project.description}</p>
                                    <div className="flex flex-wrap justify-center items-center gap-2 my-2 mx-2">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="bg-violet-700 px-4 py-2 my-2 rounded-lg">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2 items-center align-middle md:flex-row justify-center my-4">
                                        <a href={project.github} target="_black" rel="noreferrer" className="flex items-center">
                                            <span className="text-2xl mr-2">Code</span>
                                            <img src={githubIcon} alt="github icon" className="w-[2.75rem]"/>
                                        </a>
                                    </div>
                                </div>
                                ) : (
                                <div className="z-10">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <img 
                                            src={project.image === "" ? cat : project.image} 
                                            alt={project.name}
                                            className="md:max-h-96 object-contain rounded-sm"
                                        />
                                    </a>
                                    <h1 className="text-xl mt-4 mx-2 font-bold">{project.name}</h1>
                                    <p className="my-4 mx-2">{project.description}</p>
                                    <div className="flex flex-wrap justify-center items-center gap-3 my-2 mx-2">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="bg-violet-700 px-4 py-2 my-2 rounded-lg">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-8 items-center align-middle md:flex-row justify-center my-4">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center">
                                            <span className="text-2xl mr-2">Code</span>
                                            <img src={githubIcon} alt="github icon" className="w-[2.75rem]"/>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center">
                                            <span className="text-2xl mr-2">Live</span>
                                            <img src={newPageIcon} alt="new page icon" className="w-[2.75rem]" /> 
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        );
                    })}
                </section>
            </div>
            <div className='spacer-bottom bottom-layer absolute bottom-0'></div>
        </div>
    );
}

export default Projects;