import React from "react";
import mattyLogo from "../../assets/images/img-matty-logo.png";
import "../../assets/css/Header.css"

const HeaderUi = () => {
  return (
    <header className="header">
      <h1 className="logo"><img src={mattyLogo} alt="matty" /></h1>
    </header>
  )        
} 

export default HeaderUi;