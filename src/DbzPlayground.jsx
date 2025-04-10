import CharacterCard from "./components/dbz/CharacterCard"
import UniversalButton from "./components/dbz/Button.jsx"
import { useEffect, useState } from "react"
import { getRandomChars, parseKi } from "./util/lib.js";

export default function DbzPlayground() {
    const [chars, setChars] = useState([]);

    
    const fetchChars = async () => {
        const data = await getRandomChars(2);
        setChars(data);
    };
    

    function handleFight(chars){
        let char1_ki = parseKi(chars[0].ki);
        let char2_ki = parseKi(chars[1].ki);

        if(parseKi(chars[0].ki) > parseKi(chars[1].ki)) alert(`${chars[0].name} wins!`)
        else if (parseKi(chars[0].ki) < parseKi(chars[1].ki)) alert(`${chars[1].name} wins!`)
        else alert("its a tie!")

    }
    
    return (
        <div className="flex flex-col-reverse md:flex-col justify-center items-center min-h-screen bg-radial from-orange-300 to-orange-400">
            <div className="flex flex-col md:flex-row gap-0 md:gap-10 mt-[5vh] md:mt-0">
                <UniversalButton bg_color={"bg-green-500"} text={'Randomize'} onClick={()=>fetchChars()} />
                <UniversalButton bg_color={"bg-cyan-500"} text={'Fight'} onClick={()=>handleFight(chars)}/>
            </div>

            <div className="flex flex-row gap-5 md:gap-15">
                <CharacterCard character={chars[0]}/>
                <CharacterCard character={chars[1]}/>
            </div>
        </div>
    );
}
