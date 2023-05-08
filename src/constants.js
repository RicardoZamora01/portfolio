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