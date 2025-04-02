import { useState } from 'react';
import arrow_right from '../assets/arrow_right.svg'

export default function Dropdown(){

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Character");
    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState)
    }

    const handleClick = (name) => {
        setSelected(name);
        toggleDropdown();
    }

    const dummyData = [
        {id: 1, name : 'pesho', age : 25, country : 'bulgaria'},
        {id: 2, name : 'john', age : 31, country : 'usa'},
        {id: 3, name : 'lu xiaojun', age : 25, country : 'china'}
    ];
    // const 
    return(
        <>
            <div className="flex flex-col">
                <button className = "flex flex-row justify-between bg-gray-200 hover:bg-gray-300 rounded-[5%] p-1 w-[150px] max-w-[200px]" onClick={toggleDropdown}>
                    {selected}
                    <img className= {`w-5 ${isOpen ? 'rotate-270' : 'rotate-90'}`} src={arrow_right}/>
                </button>


                {dummyData.map(entry => (
                    <div key={entry.id} data-country ={entry.country} className={`${isOpen ? 'inline' : 'hidden'} w-[150px] max-w-[200px] max-h-[50px] bg-gray-200 hover:bg-gray-300`} onClick={()=>handleClick(entry.name)}> {entry.name} </div>
                ))}
            </div>
        </>
    );    
}