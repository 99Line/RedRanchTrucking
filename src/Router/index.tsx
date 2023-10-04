import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Views/Home";
import Header from "Components/Header";
import Services from "Views/Services";
import About from "Views/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route index path="/services" element={<Services />}></Route>
        <Route index path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
