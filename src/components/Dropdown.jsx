import { useState } from 'react';
import arrow_right from '../assets/arrow_right.svg'

export default function Dropdown({onSelect, selectedName, dummyData}){

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState)
    }

    const handleClick = (name) => {
        onSelect(name);
        toggleDropdown();
    }


    return(
        <>
            <div className="flex flex-col">
                <button className = "flex flex-row justify-between bg-gray-200 hover:bg-gray-300 rounded-[5%] p-1 w-[150px] max-w-[200px]" onClick={toggleDropdown}>
                    {selectedName}
                    <img className= {`w-5 ${isOpen ? 'rotate-270' : 'rotate-90'}`} src={arrow_right}/>
                </button>


                {dummyData.map(entry => (
                    <div key={entry.id} data-country ={entry.country} className={`${isOpen ? 'inline' : 'hidden'} w-[150px] max-w-[200px] max-h-[50px] bg-gray-200 hover:bg-gray-300`} onClick={()=>handleClick(entry.name)}> {entry.name} </div>
                ))}
            </div>
        </>
    );    
}