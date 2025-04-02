import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Playground from './components/Playground.jsx'
import Redirect from './util/lib.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Playground/>}/>
        {['/','test'].map(path => (<Route key = {path} path={path} element={<Playground/>}/>))}
        <Route path = '/youtube' element={<Redirect link= "https://youtube.com"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
