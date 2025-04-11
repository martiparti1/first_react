export default function CharacterCard({ character }) {

    const char_text = [
        character?.name,
        character?.ki
    ];
    return (
        <div className="min-w-[45vw] max-w-[45vw] min-h-[50vh]  md:min-w-[20vw] md:max-w-[20vw] md:min-h-[70vh] bg-white rounded-[3%] flex flex-col justify-center">

    {character?.image && (
        <img src={character?.image} alt="char icon" className="w-[30vw] h-[40vh] max-h-[40vh] object-contain self-center" />
    )}

    <p className="ml-[1vw] font-bold text-orange-500 text-[40px] break-words">{character?.name}</p>

    <p className="break-words">{character?.ki}</p>

</div>

    );
}