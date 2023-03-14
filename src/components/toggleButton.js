export const ToggleButton = () => {
  return (
    <div class="mb-3 mt-4">
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="Blue" className="bg-zinc-600 outline-none focus:outline-none right-4 
            checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"/>
                <label for="Blue" className="block h-6 overflow-hidden bg-white checked:bg-blue-500 rounded-full cursor-pointer text-zinc-800">
                </label>
        </div>
        <span class="font-medium text-zinc-600">
                Dark mode
        </span>
    </div>
  );
};