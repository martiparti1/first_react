import dog from './assets/HAHA DOG.jpeg'

export default function Card(){
    return(
        <>
        <div className="flex flex-col max-w-sm my-10 bg-gray-500 px-3 pt-3 pb-5 rounded-[10%]">
            <img className="justify-self-center max-w-250 h-50% mb-5 rounded-t-[10%]" src={dog} alt="" />
            <p className='self-start my-0 ml-3 text-black font-sans'>Marti Parti</p>
            <p className='self-start my-0 ml-3 text-black font-sans'>hell yeah simulator</p>
        </div>

        <div className ="flex flex-col w-full max-w-sm h-auto max-h-[400px] m-5 bg-[#fafafa] rounded-[5%]">
            <img className = "self-center"src={dog} alt="" />
            <p></p>
            <p></p>
        </div>
        </>
    );
}