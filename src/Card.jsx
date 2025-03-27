import dog from './assets/HAHA DOG.jpeg'

export default function Card(){
    return(
        <div className="flex flex-col justify-center max-w-sm mb-10 bg-gray-500 p-5 rounded-[10%]">
            <img className="max-w-250 h-50% mb-5" src={dog} alt="" />
            <h2 className='m-0 text-pink-200 font-sans'>Marti Parti</h2>
            <p className='m-0 text-pink-200 font-sans'>hell yeah simulator</p>
        </div>
    );
}