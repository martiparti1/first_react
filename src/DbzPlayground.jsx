import CharacterCard from "./components/dbz/CharacterCard"
import UniversalButton from "./components/dbz/Button.jsx"
import { useEffect, useState } from "react"
import { getRandomChars, parseKi } from "./util/lib.js";
import arrow_right from './assets/arrow_right.svg'
import { useNavigate } from "react-router-dom";
import { Popup } from "./util/lib.jsx";

export default function DbzPlayground() {
    const [chars, setChars] = useState([]);
    const navigate = useNavigate();

    
    const fetchChars = async () => {
        const data = await getRandomChars(2);
        setChars(data);
    };

    function handleFight(chars){
        if(parseKi(chars[0].ki) > parseKi(chars[1].ki)) alert(`${chars[0].name} wins!`)
        else if (parseKi(chars[0].ki) < parseKi(chars[1].ki)) alert(`${chars[1].name} wins!`)
        else alert("its a tie!")

    }
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-radial from-orange-300 to-orange-400">


            <img className= {'w-15 self-start cursor-pointer rotate-180  absolute top-5 left-5'} src={arrow_right} onClick={()=> navigate('../')}/>

            {<Popup visible={true}/>}
            <div className="flex flex-col-reverse md:flex-col justify-center items-center">

                <div className="flex flex-col md:flex-row gap-0 md:gap-10 mt-[5vh] md:mt-0">
                    <UniversalButton bg_color={"bg-green-500"} text={'Randomize'} onClick={fetchChars} />
                    <UniversalButton bg_color={"bg-cyan-500"} text={'Fight'} onClick={()=>handleFight(chars)}/>
                    <UniversalButton bg_color={"bg-red-500"} text={'DELETE'} onClick={()=> setChars([])} />
                </div>

                <div className="flex flex-row gap-5 md:gap-15">
                    { chars && chars[0] && (<CharacterCard character={chars[0]}/>) }
                    { chars && chars[1] && (<CharacterCard character={chars[1]}/>) }
                </div>

            </div>
        </div>
    );
}
