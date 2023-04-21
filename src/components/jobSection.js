import { experience } from "../data/experience";
import { useState, Fragment } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export const JobSection = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <div id="experience" className="m-auto w-10/12 min-h-full">
                <h2 className="pt-36 text-4xl text-center text-zinc-600 dark:text-slate-300">Work Experience</h2>
                <div className="container max-w-6xl px-4 mx-auto sm:px-8">
                    <div className="py-8">
                        <div className="px-4 py-4 overflow-x-auto sm:-mx-8 sm:px-8">
                            <div className="w-full overflow-hidden rounded-lg shadow dark:bg-slate-300" >
                                <div className="w-full leading-normal text-2xl rounded-lg border-gray-200">
                                    <div className="flex">
                                        <div className="inline-flex items-center w-1/2 pl-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                            Employer
                                        </div>
                                        <div className="inline-flex items-center w-1/3 pl-4 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                            Position
                                        </div>
                                        <div className="inline-flex items-center w-1/6 pr-5 pl-2 py-3  text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                            Between
                                        </div>
                                      </div>
                                    <div>
                                        {experience.map((item) =>
                                            <Accordion open={open === item.id}>
                                                <div>  
                                                    <AccordionHeader className="py-0 my-0 px-0 mx-0 w-full dark:bg-slate-300" onClick={() => handleOpen(item.id)}>
                                                    <div className="h-22 min-w-full flex">
                                                        <div className="w-1/2 inline-flex py-5 text-sm md:text-base bg-white border-b dark:bg-slate-300">
                                                            <div className="flex items-center h-full text-start">
                                                                <div classname="h-full svisibility:hidden">
                                                                    <img alt="profil" src={item.logo} className="mx-auto pl-4 object-contain h-16 w-16 hidden md:inline" />
                                                                </div>
                                                                <div >
                                                                    <p className="text-gray-700 whitespace-no-wrap pl-5">
                                                                        {item.employer}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-1/3 inline-flex text-start items-center pl-8 py-5 text-sm md:text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                                            <p className="text-gray-700 whitespace-no-wrap">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                        <div className="w-1/5 pl-10 text-start inline-flex items-center py-5 text-sm md:text-base bg-white border-b border-gray-200 dark:bg-slate-300"> 
                                                            <p className="text-gray-700 whitespace-no-wrap w-full">
                                                                    {item.between}
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
        </Fragment>
    );
};