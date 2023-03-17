import { skillList } from "../data/skillList"

export const Skills = () => {
  return (
    <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex w-2/3 m-auto min-h-screen py-64 ">
        {skillList.map((item) => 

        <div class="w-full px-4  bg-white rounded-lg drop-shadow-xl sm:w-1/3 md:w-1/3 lg:w-1/6 dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 mx-auto drop-shadow-xl text-white bg-slate-200 rounded-md">
                    <img src={item.logo} alt="fsd" width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"/>
                </div>
                <h3 class="pt-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                    {item.skill}
                </h3>
                <p class="py-2 text-gray-500 text-md dark:text-gray-300">
                    {item.level}
                </p>
            </div>
        </div>
        )}
    </div>
  )
}
