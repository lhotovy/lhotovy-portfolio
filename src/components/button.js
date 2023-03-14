export const Button = (props) => {
  return (
    <a href={props.address}>
      <button type="button" className="py-2 px-4 bg-slate-200 hover:bg-indigo-700 hover:text-white focus:ring-indigo-500
        focus:ring-offset-indigo-200 text-zinc-600 transition ease-in duration-200 text-center text-base 
        font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-1/2 m-16">
        {props.name}
      </button>
    </a>
  )
}
