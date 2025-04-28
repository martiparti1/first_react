import { useEffect, useState } from "react";
import close_x from "../assets/close-x.svg"

export function RedirectComponent({link}){
    useEffect(()=>{
        window.location.href = link;
    }, []);
    return null;
}

export function Popup({text, visible, onClose}){

    const [showPopup, setshowPopup] = useState(visible);
    const [currentAlert, setAlert] = useState("");

    useEffect( () => {
        setshowPopup(visible);   
    },[visible])

    useEffect( () => {
        setAlert(text);
    }, [text])

    const handleClose = () => {
        setshowPopup(false);
        if(onClose) onClose();
    }

    return(

        <>
            {showPopup && (
                <>
                    <div className="bg-gray-700 opacity-75 min-h-screen fixed top-0 left-0 w-full h-full z-10"></div>

                    <div className="flex flex-col bg-white w-[50vw] h-[500px] rounded-[1rem] z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                
                        <button onClick={()=>handleClose()} className="self-end cursor-pointer max-w-[100px]">
                                <img src={close_x} alt="close_btn" />
                        </button>

                        <p className="self-center mt-[8vh] text-[96px] font-bold text-orange-400 font-outline-gray-big">
                            {currentAlert}
                        </p>
        
                    </div>
                </>           
        )}
        </>
    );
}