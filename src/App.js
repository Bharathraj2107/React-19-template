// import lib - import library from 'source'
import React from 'react'
import  { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Menu from './Component/Menu'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Update from './Pages/Update'
import NotFound from './Pages/NotFound'
import { ToastContainer} from 'react-toastify'

// component body
function App() {
    return (
       <BrowserRouter>
       <Menu/>
       <ToastContainer position={'bottom-center'} autoClose={3000}/>
       <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Create`} element={<Create />} />
        <Route path={`/edit/:userId`} element={<Update />} />
        <Route path={`/*`} element={<NotFound />} />
        </Routes>
       </BrowserRouter>
    )
}


// export component
export default App