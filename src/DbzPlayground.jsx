import CharacterCard from "./components/dbz/CharacterCard";
import UniversalButton from "./components/dbz/Button.jsx"

export default function DbzPlayground(){
    return(
        <>
        <div className="flex flex-col-reverse md:flex-col justify-center items-center min-h-screen bg-radial from-orange-300 to-orange-400">

            <div className = 'flex flex-col md:flex-row  gap-0 md:gap-10 mt-[5vh] md:mt-0'>
                <UniversalButton bg_color={"bg-green-500"} text={'Randomize'}/>

                <UniversalButton bg_color={"bg-cyan-500"} text={'Fight'}/>
            </div>


            <div className= "flex flex-row gap-5 md:gap-15 ">
                <CharacterCard/>
                <CharacterCard/>
            </div>


        </div>
        </>
    );
}