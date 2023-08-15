import { projectList} from "../data/projectList";
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
        <div className="min-h-screen">
        <h2 className="md:mt-20 mt-12 text-2xl md:text-4xl text-center text-zinc-600 dark:text-slate-300 tracking-wide">My other projects</h2>
        <div className="md:grid md:grid-cols-2 md:w-3/4 w-1/2 mx-auto">            
            {projectList.map((project) =>            
                <div class="flex-wrap w-full m-auto items-center justify-center gap-2 text-center sm:flex mt-20">
                    <div class="w-full px-4 py-4 mt-6 tracking-wider bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 dark:bg-gray-800">
                        <h3 class="py-4 px-3 text-lg sm:text-xl uppercase font-semibold text-gray-800 dark:text-slate-200">
                            {project.name}
                        </h3>
                        <p class="py-4 text-gray-500 text-md dark:text-slate-200">
                            <span className="font-semibold text-base">Used technologies:</span> <p className="block dark:text-yellow-500 text-lg">{project.stack}</p>
                        </p>
                        <div className="p-1 m-4 ">
                            <Link to={project.github} target="blank">
                                <i className="fa-brands fa-github md:text-4xl text-2xl dark:text-slate-200 text-gray-800 px-4" alt="gitHub" />
                            </Link>
                            <Link to={project.web} target="blank">
                                <i className="fa-solid fa-globe md:text-4xl text-2xl dark:text-slate-200 text-gray-800 px-4" alt="website" />
                            </Link>
                        </div>
                    </div>
                </div>          
            )}
        </div>
        </div>
    )
};