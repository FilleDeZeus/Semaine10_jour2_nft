import React from 'react'
import './public/css/footer.css'

export const Footer = ({_footphoto, _footname}) => {
  return (
    <footer>
        <div id="profil" style={{backgroundImage: `url(${_footphoto})`}}></div>
        <p>Creation of </p><a href="">{_footname}</a>
    </footer>
  )
}

