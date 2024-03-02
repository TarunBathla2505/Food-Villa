import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
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
