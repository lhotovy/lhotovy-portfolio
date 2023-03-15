import Popup from 'reactjs-popup';

export const Pop = (props) => {
    
    return (
       <Popup modal open={props.open}>
            {close => (
                <div className="modal border-solid-slate-200 w-1/2 bg-slate-200 rounded-3xl m-auto text-s">
                    <div className="border-solid-slate-200">
                        <button className="close cursor-pointer absolute right-30 top-0 bg-slate-500 text-white rounded-2xl block border-solid text-xl h-12 w-12" onClick={close}>
                        &times;
                        </button>
                        <div className="header px-8 pt-6 w-full text-xl text-center"> Modal Title </div>
                        <div className="content p-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};
