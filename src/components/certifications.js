import { certifications } from "../data/skillList";

export const Certifications = () => {
    return (
        <div className="pt-8 block md:inline-flex w-1/3 flex-col justify-center">
            {certifications.map((certification) =>
                <div className="flex items-left justify-start text-xl pb-8 h-4">
                    <div classname="flex-shrink-0 h-full">
                        <i className="fa-solid fa-check text-green-800 dark:text-green-500" />
                    </div>
                    <div classname="ml-3">
                        <a href={certification.link} target="_blank" rel="noreferrer">
                            <p className="text-gray-900 whitespace-no-wrap ml-8 hover:text-blue-700 dark:hover:text-blue-500 dark:text-slate-300">{certification.name}</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )  
}
