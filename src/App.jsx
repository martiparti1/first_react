import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import MyButton from './components/transform.jsx'
import Card from './components/Card.jsx'
import Tag from './components/Tag.jsx'
import Playground from './components/Playground.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Playground/>}/>
        {['/','test'].map(path => (<Route key = {path} path={path} element={<Playground/>}/>))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
