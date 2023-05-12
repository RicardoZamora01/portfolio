import mailbox from "../assets/mailbox-icon.svg";
import gmail from "../assets/gmail-icon.svg";

const Contact = () => {
    return ( 
        <div className="relative h-fit" id="contact-container">
            <div className='spacer-top upper-layer absolute top-0'></div>
            <div className="flex flex-col px-8 dynamic-pt">
                <h1 className="text-primary text-4xl mb-4">Contact</h1>
                <h2 className="text-2xl mb-8">I'm always open for a chat!</h2>
                <section className="flex flex-col items-center sm:flex-row gap-6 md:gap-24 pb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                        <img src={mailbox} alt="mailbox icon" />
                        <h1 className="pl-3 text-xl">Oakland, CA</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center">
                        <img src={gmail} alt="gmail icon"/>
                        <a href="mailto:rzamora@wesleyan.edu" className="pl-3 text-xl">rzamora@wesleyan.edu</a>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default Contact;