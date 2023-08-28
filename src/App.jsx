import { BrowserRouter } from 'react-router-dom'
import { HeaderBar } from './Components/HeaderBar'
import Pages from './Pages/Pages'
import {  myContext } from './context/myContext'
import { useContext } from 'react'
import './style/lightapp.css'
import './style/darktheme.css'


function App(){
  const {theme} = useContext(myContext)

  return(
    <div className={`${theme}-app`}>
        <BrowserRouter>  
          <HeaderBar />
          <Pages />
        </BrowserRouter>
    </div>
  )
}

export default App
