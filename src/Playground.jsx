import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import MyButton from './components/transform.jsx'
import Card from './components/Card.jsx'
import Tag from './components/Tag.jsx'
import Dropdown from './components/Dropdown.jsx'
import arrow_right from './assets/arrow_right.svg';

export default function Playground(){
  const navigate = useNavigate();
  const [selectedName, setSelectedName] = useState("Character");
  const dummyData = [
    {id: 1, name : 'pesho', age : 25, country : 'bulgaria'},
    {id: 2, name : 'john', age : 31, country : 'usa'},
    {id: 3, name : 'lu xiaojun', age : 25, country : 'china'}
  ];

  return (
      <div className='min-h-screen bg-[#2c2c2c] flex flex-col justify-center items-center'>
        <img className= {'w-15 self-start cursor-pointer absolute top-5 left-5'} src={arrow_right} onClick={()=> navigate('./dbz')}/>
          <Card/>
          <MyButton selectedName={selectedName}/>
          <Tag input = 'vtori test'/>
          <Dropdown onSelect={setSelectedName} selectedName={selectedName} dummyData = {dummyData}/>
          
          <select name="testers" className='bg-white mt-[10px] rounded-2xl'>
            <option value="">test1</option>
            <option value="">test2</option>
            <option value="">test3</option>
          </select>
      </div>
    );    
}