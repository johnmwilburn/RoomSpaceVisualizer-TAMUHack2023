import { useState } from "react";
import "./Header.css"

function Header({headerTitle}){
    return (
        <div className="header">
            <div className="header__title">{headerTitle}</div>
        </div>
    );
}

export default Header;