import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import Services from '../Views/Services'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route index path='/services' element={<Services />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
