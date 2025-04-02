import CharacterCard from "./components/dbz/CharacterCard";

export default function DbzPlayground(){
    return(
        <>
        <div className="flex flex-col justify-center items-center min-h-screen bg-radial from-orange-300 to-orange-400">
            <div className= "flex flex-row md:flew-col gap-20 overflow-x-auto">
                <CharacterCard/>
                <CharacterCard/>
            </div>
        </div>
        </>
    );
}