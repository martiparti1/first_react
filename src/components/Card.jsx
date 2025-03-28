import dog from '../assets/HAHA DOG.jpeg'

export default function Card(){
    return(
        <>

        <div className ="flex flex-col max-w-sm h-auto p-5 m-5 bg-[#fafafa] rounded-[3%]">
            <img className = " max-w-auto max-h-80"src={dog} alt="" />
            <p></p>
            <p></p>
        </div>
        </>
    );
}