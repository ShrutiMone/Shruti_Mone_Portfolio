import Projectrow from "./Projectrow";

function Projects(){
    return(
        <section id="projects" className="flex items-center justify-center">
        {/* <img src={websitebg} alt="background image" className="z-0"></img> */}
        <div className="flex flex-col items-center pt-6 pb-10 gap-4 w-11/12 rounded-lg bg-green-700/80 backdrop-blur-sm">
            <div className="font-corinthia text-6xl text-white">
                Projects
            </div>

            <Projectrow/>
        </div>
        </section>
    );
}

export default Projects;