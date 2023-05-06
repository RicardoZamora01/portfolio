import culture from "../assets/mx.jpg"

const About = () => {
    return (
        <div className="relative dynamic-py flex items-center justify-center px-4 sm:px-10 min-h-fit" id="about">
            <div className='spacer-top upper-layer absolute top-0'></div>
            <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-14 rounded-2xl box-border border-2 min-w-fit">
                <div className="m-10">
                    <img className="max-w-xs md:max-w-sm rounded-full shadow-2xl " src={culture} alt="mexican culture" />
                    {/* <p className="text-primary-content max-w-l">Come caca</p> */}
                </div>
                <div className="min-w-[40%] p-5 md:p-2 mx-2 md:mx-10 max-w-xl">
                    <p className="max-w-2xl text-primary text-3xl mb-5">About Me</p>
                    <p className="whitespace-normal"> I've always been a person who put the needs of the community first. 
                                                            I set out to influence and educate communities after broadening my skill set at 
                                                            Wesleyan University. In the past, I've been able to give back to my communities 
                                                            by imparting technical knowledge on data structures, algorithms, and software 
                                                            engineering through technical education and mentoring. I was able to increase 
                                                            my reach through my prior software engineering internship at Handshake by leveraging 
                                                            professional options for college students. I'm hoping to foster curiosity in every 
                                                            environment and push myself to look for inspiration in myself and my team. 
                                                            I have aspirations to develop professionally, work for an organization 
                                                            that values innovation, and make technology more accessible in order to improve 
                                                            the world.
                    </p>
                </div>
            </div>
            <div className='spacer-bottom bottom-layer absolute bottom-0'></div>
        </div>
    );
}

export default About;