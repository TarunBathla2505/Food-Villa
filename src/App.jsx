import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import AboutUs from "./components/Header/aboutUs/AboutUs";
import Contact from "./components/Header/contact/Contact";
import BodyComponent from "./components/body/BodyComponent";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
