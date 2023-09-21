import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import Header from '../Components/Header'

const Router = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>\
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
