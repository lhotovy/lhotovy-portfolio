import { projectList} from "../data/projectList";
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
        <>
            {projectList.map((project) =>     
                <div class="flex-wrap w-5/6 m-auto items-center justify-center gap-8 text-center sm:flex mt-20">
                    <div class="w-full px-4 py-4 mt-6 tracking-wider bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
                        <h3 class="py-4 text-2xl font-semibold text-gray-800 sm:text-xl dark:text-slate-200">
                            {project.name}
                        </h3>
                        <p class="py-4 text-gray-500 text-md dark:text-slate-200">
                            <span className="font-semibold text-base">Used technologies:</span> <p className="block text-lg">{project.tech}</p>
                        </p>
                        <div className="p-5">
                            <Link to={project.github} target="blank">
                                <i className="fa-brands fa-github text-3xl dark:text-slate-200 text-gray-800  px-4" alt="gitHub" />
                            </Link>
                            <Link to={project.web} target="blank">
                                <i className="fa-solid fa-globe text-3xl dark:text-slate-200 text-gray-800 px-4" alt="website" />
                            </Link>
                        </div>
                    </div>
                </div>           
            )}
        </>
    )
};