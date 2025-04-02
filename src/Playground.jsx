import { useState } from 'react'
import MyButton from './components/transform.jsx'
import Card from './components/Card.jsx'
import Tag from './components/Tag.jsx'
import Dropdown from './components/Dropdown.jsx'

export default function Playground(){

  const [selectedName, setSelectedName] = useState("Character");
  const dummyData = [
    {id: 1, name : 'pesho', age : 25, country : 'bulgaria'},
    {id: 2, name : 'john', age : 31, country : 'usa'},
    {id: 3, name : 'lu xiaojun', age : 25, country : 'china'}
  ];

  return (
      <div className='min-h-screen bg-[#2c2c2c] flex flex-col justify-center items-center'>
          <Card/>
          <MyButton selectedName={selectedName}/>
          <Tag input = 'vtori test'/>
          <Dropdown onSelect={setSelectedName} selectedName={selectedName} dummyData = {dummyData}/>
      </div>
    );    
}