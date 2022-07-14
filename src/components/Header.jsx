import React from "react";
import "../Style/header_style.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();

  return (
    <header>
      <div className="contents">
        <div className="list" onClick={() => navigate("/")}>
          home
        </div>
        <div className="list" onClick={() => navigate("/list")}>
          list
        </div>
        <div className="list" onClick={() => navigate("/upload")}>
          upload
        </div>
        <div className="list" onClick={() => navigate("/signup")}>
          sign up
        </div>
      </div>
    </header>
  );
};

export default Header;
