import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FaXTwitter,FaInstagram ,FaFacebook} from "react-icons/fa6";
// import {  } from "react-icons/fa6";
// parthi

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <a href="#"><img src={assets.f_img} alt="" /></a>
            <p>...""Tasty Treats, One Click to Your Door!""...
            </p>
            
        </div>
        <div className="footer-content-center">
            <h4>COMPANY</h4>
            <ul>
                {/* <a href="#"><li>Home</li></a> */}
                <a href='#'><li>Home</li></a>
                <a href='/about'><li>About us</li></a>
                <a href='/contact'><li>Contact Us</li></a>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h4>GET IN TOUCH</h4>
            <ul>
                <a href='/contact'><li>+91 - 9876543212</li></a>
                <a href='/contact'><li>contact@bytebuddy.com</li></a>
                <br />
            <h4 style={{marginLeft:'-30px',marginBottom:'15px'}}>SOCIAL LINKS</h4>
                <div className="footer-social-icons">
                <a href="https://www.facebook.com/"><FaFacebook style={{fontSize:'25px'}}/></a>
                <a href="https://www.facebook.com/"><FaXTwitter style={{fontSize:'25px'}}/></a>
                <a href="https://www.instagram.com/accounts/login/"><FaInstagram style={{fontSize:'25px'}} /></a>
            </div>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.Copyright 2024 © Bytebuddy.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
