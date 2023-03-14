export const NavBar = () => {
    const buttons = [["Bio", "bio"], ["Working experience", "experince"], ["Education", "education"]];
    
    const navItems = buttons.map((button) =>
        <a href={button[1]} className="inline-block p-4 border-b-2 text-zinc-600 
        border-transparent rounded-t-lg hover:text-black hover:border-gray-300"><li className="px-6 inline mr-2">{button[0]}</li></a>)
    
    return (
        <div className="navBar text-right flex w-2/3">
            <ul className="flex items-center flex-wrap -mb-px">{navItems}</ul>
        </div>
  );
};
