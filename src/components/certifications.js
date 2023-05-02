import { certifications } from "../data/skillList";

export const certifications = () => {
    return (
        <div className="pt-16 block md:inline-flex w-1/2 flex-col m-auto ml-8">
            {certifications.map((certification) =>
                <div className="flex items-left justify-start text-xl pb-8 h-4">
                    <div classname="flex-shrink-0 h-full">
                        <i className="fa-solid fa-check text-green-800 dark:text-blue-200" />
                    </div>
                    <div classname="ml-3">
                        <a href={certification.link} target="_blank" rel="noreferrer">
                            <p className="text-gray-900 whitespace-no-wrap ml-8 hover:text-blue-700 dark:text-slate-300">{certification.name}</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )  
}
