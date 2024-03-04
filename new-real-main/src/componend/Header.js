import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Header() {
  return (
    <div  style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
    <div className='contaner-nav'>
   
    <div className=" nav-sochil">
      
        <FaFacebookF className='sochil' />
        <FaXTwitter className='sochil' />
        <FaInstagram className='sochil' />
        <FaLinkedinIn className='sochil' />
      
    </div>

    <div className="nav-contact">
        <a className="contact">
        <FaPhoneFlip className="contact-icon" />
        +966 568616863
        </a>
        <a className="contact">
        <FaPhoneFlip className="contact-icon"  />
        +966 590655944
        </a>
        <a className="contact">
        <MdOutlineMarkEmailRead className="contact-icon"  />
        info@riep-ksa.com
        </a>
    
    </div>
    </div>
     

     
 

  <header className="header" role="banner">

   
     

        <div className="col-11 col-xl-2">
          <a href="index.html" style={{color: "#7003b8;"}} className="mb-0"> الابتكار الحقيقي </a>
        </div>
        <div className="header-section">
              <a href="#home-section" className="nav-link">الرئسيه</a>
              <a href="#work-section" className="nav-link">اعمالنا</a>
              
                <a href="#services-section" className="nav-link">خدماتنا</a>
              
                <a href="#about-section" className="nav-link">عن الشرمه</a>
                
               
              <a href="#contact-section" className="nav-link">تواصل معنا</a>
     
    </div>
  </header>
      </div>
  )
}

export default Header
