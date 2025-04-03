import CharacterCard from "./components/dbz/CharacterCard";

export default function DbzPlayground(){
    return(
        <>
        <div className="flex flex-col justify-center items-center min-h-screen bg-radial from-orange-300 to-orange-400">

            <div className = 'flex flex-row gap-10'>
                <button className="min-w-[10vw] min-h-[5vh] bg-green-500 rounded-sm mb-[5vh] cursor-pointer text-white text-bold hover:shadow-lg shadow-black-500 active:scale-95 transition-all duration-200">?Randomize?</button>

                <button className="min-w-[10vw] min-h-[5vh] bg-cyan-500 rounded-sm mb-[5vh] cursor-pointer text-white text-bold hover:shadow-lg shadow-black-500 active:scale-95 transition-all duration-200">FIGHT</button>

            </div>


            <div className= "flex md:flex-row sm:flex-col flex-col gap-40">
                <CharacterCard/>
                <CharacterCard/>
            </div>


        </div>
        </>
    );
}