import culture from "../assets/mx.jpg";

const About = () => {
    return (
        <div className="relative dynamic-py flex items-center justify-center px-4 sm:px-10 min-h-fit" id="about-container">
            <div className='spacer-top upper-layer absolute top-0'></div>
            <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-12 rounded-2xl box-border border-2 border-violet-700 min-w-fit">
                <div className="m-10">
                    <img className="max-w-cust md:max-w-sm rounded-full shadow-2xl" src={culture} alt="mexican culture" />
                </div>
                <div className="min-w-[40%] p-5 md:p-2 mx-2 md:mx-10 max-w-xl">
                    <p className="max-w-2xl text-primary text-3xl mb-5">About Me</p>
                    <p className="whitespace-normal">
                        I strive to foster curiosity in any environment and continuously seek 
                        inspiration from myself and my team. I believe in fostering curiosity 
                        and pushing myself to be inspired by both myself and my team. I have 
                        aspirations to develop professionally, work for an organization that 
                        values innovation, and make technology more accessible in order to 
                        improve the world. I am committed to growing my skills in full-stack 
                        software engineering and contributing to meaningful change.
                        <br /><br />
                        Collaborative team environments fuel my passion, and I thrive on 
                        utilizing agile methodologies to drive innovative initiatives that 
                        bring about tangible impact. As a lifelong learner, I understand the 
                        importance of self-challenge as well as seeking support from others 
                        when needed. I strongly believe in nurturing curiosity within myself 
                        and my team, constantly pushing the boundaries of our potential.
                    </p>
                </div>
            </div>
            <div className='spacer-bottom bottom-layer absolute bottom-0'></div>
        </div>
    );
}

export default About;