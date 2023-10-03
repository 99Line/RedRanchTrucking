import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Views/Home";
import Header from "Components/Header";
import Services from "Views/Services";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route index path="/services" element={<Services />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
