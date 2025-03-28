import dog from '../assets/HAHA DOG.jpeg'
import Tag from './Tag.jsx';

export default function Card(){
    return(
        <>

        <div className ="flex flex-col max-w-sm h-auto p-5 m-5 bg-[#F5F5F5] rounded-[3%] opacity-85">
            <img className = " max-w-auto max-h-80"src={dog} alt="" />
            <p className='text-black'>This is the title</p>
            <p>this is the subheading</p>
            <Tag input = 'test'/>
        </div>
        </>
    );
}