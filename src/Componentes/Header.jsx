import React from "react";
import "./Header.css"

function Header(){
    return(
        <div>
           <header>
            <a className="logo" href="/">Prime Flix</a>
            <a className="favoritos" href="/favoritos">Meus filmes favoritos</a>
           </header>
        </div>
    )
}
export default Header;