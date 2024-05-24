import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
    const[menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li><AnchorLink className='acnchor-link' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt="" />: <></>}</li>
        <li><AnchorLink className='acnchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About me</p></AnchorLink>{menu==="about"? <img src={underline} alt="" />: <></>}</li>
        <li><AnchorLink className='acnchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt="" />: <></>}</li>
        <li><AnchorLink className='acnchor-link' offset={50} href='#work'><p onClick={()=>setMenu('work')}>Projects</p></AnchorLink>{menu==="work"? <img src={underline} alt="" />: <></>}</li>
        <li><AnchorLink className='acnchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Cotact me</p></AnchorLink>{menu==="contact"? <img src={underline} alt="" />: <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='acnchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar