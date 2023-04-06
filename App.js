import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import Account from './pages/Account'

export default function App(){
  return(
    <div>
        <BrowserRouter>
        <Routes>
        <Route index element= {<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/account" element={<Account />}/>
         
        </Routes>
        </BrowserRouter>
    </div>
  )
}
