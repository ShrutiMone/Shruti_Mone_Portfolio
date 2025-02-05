import Skillsrow from "./Skillsrow";

function Skills(){
    return(
        <section id="skills">
        <div className="flex flex-col items-center py-6 gap-4">
            <div className="font-corinthia text-6xl text-white">
                Skills
            </div>

            <Skillsrow/>
        </div>
        </section>
    );
}

export default Skills;