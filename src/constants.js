import counter from "./assets/counter-proj.png"
import ramen from "./assets/ramen.png"


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

export default projects;


// <div className="md:my-10 border-4 hover:shadow-2xl rounded-lg border-violet-700 overflow-hidden flex flex-col content-center justify-between max-h-fit min-w-full max-w-2xl">
//     <label htmlFor="my-modal-4" className="btn">open modal</label>

//     <a href={project.link === "" ? "" : project.link} target="_blank" rel="noreferrer">
//         <img 
//         src={project.image === "" ? cat : project.image} 
//         alt={project.name}
//         className="md:max-h-96 object-contain rounded-sm"
//         /> 
//     </a>
//     <h1 className="text-xl pt-4 px-2 font-bold">{project.name}</h1>
//     <p className="my-4 mx-2">{project.description}</p>
// </div>