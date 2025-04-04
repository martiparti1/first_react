export default function UniversalButton({bg_color , text}){
    return(
        <button className={`min-w-[80vw] md:min-w-[15vw] min-h-[5vh] mb-[2vh] md:mb-[4vh] ${bg_color} rounded-sm cursor-pointer text-white text-bold hover:shadow-md shadow-black active:scale-95 transition-all duration-200 px-[1vw] text-[30px]`}>{text}</button>
    );
}