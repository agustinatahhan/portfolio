import './App.css'
import {Route, Routes} from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'
function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> 
    </>
  )
}

export default App
