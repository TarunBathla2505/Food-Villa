import TitleComponent from "./title/TitleComponent";

import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="flex justify-between bg-black text-white">
      <TitleComponent />
      <div className="flex items-center">
        <ul className="flex">
          <li className="pr-5 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-5 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="pr-5 hover:font-bold">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="pr-5 hover:font-bold">
            <Link to="">Cart</Link>
          </li>
          <li className="pr-5 hover:font-bold">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
        
      </div>
      {loggedIn ? (
          <button
            className="pr-3 w-35 hover:font-bold"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="pr-3 w-35 hover:font-bold"
            onClick={() => setLoggedIn(true)}
          >
            Login
          </button>
        )}
    </div>
  );
};

export default HeaderComponent;
