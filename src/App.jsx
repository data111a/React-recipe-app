import { BrowserRouter } from 'react-router-dom'
import { HeaderBar } from './Components/HeaderBar'

import Pages from './Pages/Pages'

function App(){
  return(
    <div className='app'>
      <BrowserRouter>  
        <HeaderBar />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
