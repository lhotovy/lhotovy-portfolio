import { experience } from "../data/experience";

const tableData = experience.map((item) => 
    <tr className="h-27">
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center h-full">
                    <div classname="flex-shrink-0 h-full">
                        <img alt="profil" src={item.logo} className="mx-auto object-contain rounded-full h-10 w-16"/>
                    </div>
                    <div classname="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap ml-8">
                            {item.employer}
                        </p>
                    </div>
                </div>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
                {item.position}
            </p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
                {item.between}
            </p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 text-cyan-500">
            <button className="">Click for more info</button>
        </td>
    </tr>
);

export const JobSection = () => {
  return (
    <div id="experience" className="m-auto w-4/6 mb-28">
        <h2 className="p-5 text-4xl ml-32 text-zinc-600">Work Experience</h2>
        <div className="container max-w-6xl px-4 mx-auto sm:px-8">
            <div className="py-8">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Employer
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Position
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Between
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
