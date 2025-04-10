export default function CharacterCard({ character }) {

    const char_info = [
        character?.name,
        character?.ki
    ];
    return (
        <div className="min-w-[45vw] min-h-[100vw] md:min-w-[25vw] md:min-h-[70vh] bg-white rounded-[3%] flex flex-col justify-center">
            
            <img src={character?.image} alt="char icon" className="w[20vw] h-[40vh] object-contain self-center" />
            {char_info.map((detail, index)=> (
                <p key={index} className="mt-[15px]">{detail}</p>
            ))}
            
        </div>
    );
}