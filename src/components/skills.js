import { skillList, certifications } from "../data/skillList"

export const Skills = () => {
  return (
    <div className="min-h-screen">
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex w-2/3 m-auto pt-36 ">
            {skillList.map((item) => 

            <div className="w-full px-4 bg-white rounded-lg drop-shadow-xl sm:w-1/3 md:w-1/3 lg:w-1/6 dark:bg-gray-800">
                <div className="flex-shrink-0">
                    <div className="flex mt-2 items-center justify-center w-16 h-16 mx-auto drop-shadow-xl text-white bg-slate-200 rounded-md">
                        <img src={item.logo} alt="toolImage" className="w-10 h-10"/>
                    </div>
                    <h3 className="pt-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        {item.skill}
                    </h3>
                    <p className="py-2 text-gray-500 text-md dark:text-gray-300">
                        {item.level}
                    </p>
                </div>
            </div>
          
    )}
        </div>
        <div className="pt-16">
            {certifications.map((certification) => 
                <div className="flex items-left text-center justify-start text-xl pb-2 m-auto w-1/2">
                    <div classname="flex-shrink-0 h-full">
                        <i className="fa-solid fa-check text-green-800 dark:text-blue-200"/>
                    </div>
                    <div classname="ml-3">
                        <a href={certification.link} target="_blank" rel="noreferrer">
                            <p className="text-gray-900 whitespace-no-wrap ml-8 hover:text-blue-700 dark:text-slate-300">{certification.name}</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
