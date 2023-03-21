export const ToggleButton = (props) => {
  return (
    <div className="dark:bg-slate-800">
        <div className="absolute right-16 inline-block pt-8 w-12 align-middle select-none">
            <input onClick={props.onClick} type="checkbox" name="toggle" id="Blue" className="bg-sky-800 z-100 outline-none focus:outline-none right-6 
            checked:right-0 duration-200 ease-in absolute inline-block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"/>
                <label for="Blue" className="block h-6 overflow-hidden border-stone-600 border-4 bg-slate-300 dark:bg-slate-300 checked:bg-blue-500 rounded-full cursor-pointer text-sky-800">
                </label>
        </div>
        <span className="inline-block absolute right-32 pt-6 font-medium text-zinc-600 dark:text-slate-300 mt-2">
                Select theme
        </span>
    </div>
  );
};