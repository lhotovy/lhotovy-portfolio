import { skillList } from "../data/skillList"
import { Certifications } from "./certifications"

export const Skills = () => {
    return (
        <div className="md:my-auto mx-auto">
            <h2 className="md:pt-20 pt-10 text-2xl block md:text-4xl text-center text-zinc-600 dark:text-slate-300 tracking-wide">What I know</h2>
            <div className="md:flex-wrap flex-block md:inline-flex items-center justify-center  text-center sm:flex w-full mx-auto pt-10 pb-10">
                {skillList.map((item) =>
                    <div className=" bg-white rounded-lg drop-shadow-xl w-28 h-28 m-3 md:w-1/4 lg:w-1/6 dark:bg-gray-800 inline-flex">
                        <div className="flex-shrink-0 w-full h-full">
                            <div className="flex mt-2 items-center justify-center w-12 h-12 mx-auto drop-shadow-xl text-white bg-slate-200 rounded-md">
                                <img src={item.logo} alt="toolImage" className="w-10 h-10 bg-none" />
                            </div>
                            <div className="px-2">
                                <p className="pt-4 font-semibold text-gray-700 sm:text-lg text-sm tracking-wider dark:text-white">
                                    {item.skill}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-center px-6 pb-20">
                <Certifications/>
            </div>            
        </div>
    )
}
