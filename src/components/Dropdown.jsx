import React, { useState } from 'react';

// finish this

const Dropdown = () =>{
    const [option, setOption] = useState(null);

    const handleChange = (event) =>{
        const selected = options.find(
            option => option.id === parseInt(event.target.value)
        );
        setOption(selected)
    }

    return (
        <div className="dropdown-container">
            <select onChange={handleChange} className = "dropdown-select" defaultValue="">
                {options.map((option) => (
                    <option
                        key={option.id}
                        value={option.id}
                    >{option.name}</option>
                ))}
            </select>
        </div>
    );
}