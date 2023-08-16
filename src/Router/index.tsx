import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
