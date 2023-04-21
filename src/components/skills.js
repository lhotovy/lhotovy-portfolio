import { skillList, certifications } from "../data/skillList"

export const Skills = () => {
  return (
    <div className="min-h-full block md:flex">
        <div className="md:flex-wrap block md:inline-flex items-center justify-center gap-8 text-center sm:flex w-1/2 m-auto pt-8">
            {skillList.map((item) => 

            <div className=" bg-white rounded-lg drop-shadow-xl w-1/2 md:w-1/3 lg:w-1/6 dark:bg-gray-800">
                <div className="flex-shrink-0">
                    <div className="flex mt-2 items-center justify-center w-8 md:w-16 h-8 md:h-16 mx-auto drop-shadow-xl text-white bg-slate-200 rounded-md">
                        <img src={item.logo} alt="toolImage" className="w-10 h-10 bg-none"/>
                    </div>
                    <div className="px-2">  
                        <p className="py-4 font-semibold text-gray-700 sm:text-lg dark:text-white">
                            {item.skill}
                        </p>
                    </div>
                </div>
            </div>
          
    )}
        </div>
        <div className="pt-16 block md:inline-flex w-1/4 flex-col m-auto ml-8">
            {certifications.map((certification) => 
                <div className="flex items-left text-center justify-start text-xl pb-8 h-4">
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
