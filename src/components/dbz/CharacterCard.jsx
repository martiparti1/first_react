import { useEffect, useState } from "react";

export default function CharacterCard(character){
        const [char, setChar] = useState(character);

        useEffect(()=>{
            setChar(character);
        }, [character])
    return(
        <>            
            <div className="min-w-[45vw] min-h-[100vw] md:min-w-[25vw] md:min-h-[70vh] bg-white rounded-[3%]">
                <p>{char.name}</p>
                <p>{char.ki}</p>
                <p>test</p>
                <p>test</p>
            </div>
        </>
    );
}