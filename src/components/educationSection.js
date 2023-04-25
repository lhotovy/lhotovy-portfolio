import { education } from "../data/education";
import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const EducationSection = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
        <div id="experience" className="m-auto w-11/12 md:w-10/12 min-h-full">
            <h2 className="pt-20 text-2xl md:text-4xl text-center text-zinc-600 dark:text-slate-300">Education</h2>
            <div className="container md:max-w-6xl px-2 mx-auto">
                <div className="py-8">
                    <div className="py-4 overflow-x-auto">
                        <div className="w-full overflow-hidden rounded-lg shadow dark:bg-slate-300" >
                            <div className="w-full leading-normal rounded-lg border-gray-200">
                                <div className="flex bg-white ">
                                    <div className="inline-flex items-center w-1/2 pl-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                        School
                                    </div>
                                    <div className="md:inline-flex hidden items-center w-1/3 pl-4 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                        Study Program
                                    </div>
                                    <div className="md:inline-flex w-1/2 md:w-1/6 pr-5 pl-2 py-3 text-sm font-normal text-end text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                        Between
                                    </div>
                                    <div className="md:inline-flex hidden w-1/2 md:w-1/6 pr-5 pl-2 py-3 text-sm font-normal text-end text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                        Grade
                                    </div>
                                  </div>
                                <div>
                                    {education.map((item) =>
                                        <Accordion open={open === item.id}>
                                            <div>  
                                                <AccordionHeader className="p-0 m-0 w-full dark:bg-slate-300" onClick={() => handleOpen(item.id)}>
                                                <div className="h-22 min-w-full flex bg-white">
                                                    <div className="md:w-1/2 w-2/3 md:inline-flex hidden py-5 text-sm md:text-base bg-white border-b dark:bg-slate-300">
                                                        <div className="flex items-center h-full text-start">
                                                            <div classname="h-full visibility:hidden">
                                                                <img alt="profil" src={item.logo} className="mx-auto pl-4 object-contain h-16 w-16 hidden md:inline" />
                                                            </div>
                                                            <div >
                                                                <p className="text-gray-700 whitespace-no-wrap pl-5">
                                                                    {item.school}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2 md:w-1/3 inline-flex text-start items-center pl-4 py-5 text-sm md:text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                                        <p className="text-gray-700 whitespace-no-wrap">
                                                            {item.studyProgram}
                                                        </p>
                                                    </div>
                                                    <div className="w-1/2 md:w-1/6 pr-6 md:pl-2 text-right md:text-start inline-flex items-center py-5 text-sm md:text-base bg-white border-b border-gray-200 dark:bg-slate-300"> 
                                                        <p className="text-gray-700 whitespace-no-wrap w-full">
                                                                {item.between}
                                                        </p>
                                                    </div>
                                                    <div className="w-1/3 md:w-1/6 pr-6 md:pl-2 md:inline-flex hidden  text-right md:text-start inline-flex items-center py-5 text-sm md:text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                                    <p className="text-gray-700 whitespace-no-wrap w-full">
                                                                {item.grade}
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionHeader>
                                                <AccordionBody className="bg-slate-100 p-8 w-full dark:bg-slate-200">
                                                    {item.bio}
                                                </AccordionBody>
                                            </div>
                                        </Accordion>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};