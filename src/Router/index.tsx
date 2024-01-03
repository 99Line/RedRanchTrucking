import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Views/Home";
import Header from "Components/Header";
import Services from "Views/Services";
import Footer from "Components/Footer";
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
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
