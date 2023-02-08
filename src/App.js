import './App.css';
import {Header} from './components/header/header';
import {Section} from './components/section/section';
import {Footer} from './components/footer/footer';
import headerphoto from './components/header/public/img/image-equilibrium.jpg'
import footerphoto from './components/footer/public/img/image-avatar.png'
import secphotob from './components/section/public/img/icon-clock.svg'
import secphoto from './components/section/public/img/icon-ethereum.svg'
import React from 'react'

export const App = () => {
  let footername= 'Jules Wyvern'

  return (
    <div className="App">
      <Header _headphoto={headerphoto}/>
      <Section sectionprice ={0.041} sectionphoto ={secphoto} sectionphotob = {secphotob} sectioncurrenct = {'ETH'} sectiondays = {3}/>
      <Footer _footphoto = {footerphoto} _footname = {footername}/>
    </div>
  
  )
}


export default App;