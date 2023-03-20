import { education } from "../data/education";
import Popup from 'reactjs-popup';

export const EducationSection = () => {
     return (
        <div id="education" className="pt-36 min-h-screen m-auto w-10/12 ">
            <h2 className="text-4xl  text-center text-zinc-600 dark:text-slate-300">Education</h2>
            <div className="container max-w-6xl px-4 mx-auto sm:px-8">
                <div className="py-8 min-w-full">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300 ">
                                            School
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                            Study program
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                            Between
                                        </th>
                                        <th scope="col" className="px-7 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                            Grade
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 dark:bg-slate-300">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {education.map((item) => 
                                    <tr className="h-27">
                                            <td className="px-5 py-5 text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                                    <div className="flex items-center h-full">
                                                        <div classname="flex-shrink-0 h-full">
                                                            <img alt="profil" src={item.logo} className="mx-auto object-contain rounded-full h-10 w-16"/>
                                                        </div>
                                                        <div classname="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap ml-8">
                                                                {item.school}
                                                            </p>
                                                        </div>
                                                    </div>
                                            </td>
                                                <td className="px-5 py-5 text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {item.studyProgram}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {item.between}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-base bg-white border-b border-gray-200 dark:bg-slate-300">
                                            <span className="relative inline-block px-3 py-1  leading-tight text-gray-900">
                                                <span aria-hidden="true" className="absolute inset-0 bg-white dark:bg-slate-300 opacity-50">
                                                </span>
                                                <span className="relative">
                                                    {item.grade}
                                                </span>
                                            </span>
                                        </td>
                                        <td className="px-5 py-5 text-base bg-white border-b border-gray-200 dark:bg-slate-300 text-cyan-600 dark:text-yellow-900">
                                            <Popup modal trigger={<button className="button">More info</button>}>
                                                {close => (
                                                    <div className="modal border-solid-slate-200 w-2/3 bg-slate-200 rounded-3xl m-auto text-s">
                                                        <div className="border-solid-slate-200">
                                                            <button className="close cursor-pointer absolute right-30 top-0 bg-slate-500 text-white rounded-2xl block border-solid text-xl h-12 w-12" onClick={close}>
                                                            &times;
                                                            </button>
                                                            <div className="header px-8 pt-6 w-full text-xl text-center">{item.bio_head}</div>
                                                            <div className="content p-8">
                                                            {item.bio}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
};
