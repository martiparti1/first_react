import { useState } from 'react'
import MyButton from './transform.jsx'
import Card from './Card.jsx'
import Tag from './Tag.jsx'

export default function Playground(){
    return (
        <>
           <Card/>
           <MyButton/>
           <Tag input = 'vtori test'/>
        </>
      );    
}