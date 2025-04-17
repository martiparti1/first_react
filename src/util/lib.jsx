import { useEffect, useState } from "react";

export function RedirectComponent({link}){
    useEffect(()=>{
        window.location.href = link;
    }, []);
    return null;
}

export function Popup({text, visible}){

    const [showPopup, setshowPopup] = useState(visible);

    return(

        <div>
            {showPopup && (<div className="flex flex-col bg-white w-[500px] h-[300px] rounded-[1rem] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            
                <button onClick={()=>setshowPopup(false)} className="justify-end">
                        X
                </button>

            </div>)}
        </div>
    );
}