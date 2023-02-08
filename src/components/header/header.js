import React from 'react'
import './public/css/header.css'

export const Header = ({_headphoto}) => {

    function Cliquer() {
        if(document.getElementById("icone").style.background === "none" ){
          document.getElementById("icone").style.background="hsla(178, 100%, 50%, 0.32)";
        } else {
          document.getElementById("icone").style.background= "none";
        }
          
      }
    
      return (
        <header>
            <div id="image" style={{backgroundImage: `url(${_headphoto})`}}>
                <button href="" id="icone" onClick={Cliquer}><div id="el_icone" ></div></button>
            </div>
        </header>
      )
    }

