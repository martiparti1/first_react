import { useEffect } from "react";

export function RedirectComponent({link}){
    useEffect(()=>{
        window.location.href = link;
    }, []);
    return null;
}