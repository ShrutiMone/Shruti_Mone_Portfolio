import email from '../assets/email.svg';
import download from '../assets/download.svg';
import github1 from '../assets/github1.svg';
import resume from '../assets/Shruti_Mone_Resume.pdf'

function Contact() {
    return (
        <section id='contact' className='pt-6 pb-3'>
        <div className="w-full flex items-center justify-center">
            <div className="w-3/4 bg-[#6e1a24]/80 backdrop-blur-sm py-2 pl-10 my-3 rounded-lg flex flex-col">
                <div className="text-center font-corinthia text-4xl sm:text-6xl text-white mb-6 pt-1">
                    Contact details
                </div>
                <div className="flex flex-col sm:flex-row items-left sm:items-center justify-around pb-4">
                    {/* Contact 2 - GitHub */}
                    <div className="flex items-center space-x-4">
                        <img src={github1} alt="github" className="w-8 h-8" />
                        <h2 className="text-white">ShrutiMone</h2>
                    </div>
                    
                    {/* Contact 1 - Email */}
                    <div className="flex items-center space-x-4 ">
                        <img src={email} alt="email" className="w-8 h-8" />
                        <h2 className="text-white">moneshruti10@gmail.com</h2>
                    </div>

                    {/* Contact 3 - Resume Download */}
                    <a href={resume} download={false}>
                        <div className="flex items-center space-x-4 cursor-pointer">
                            <img src={download} alt="resume" className="w-8 h-8" />
                            <h2 className="text-white">Resume</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Contact;
