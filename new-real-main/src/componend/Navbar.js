import React from 'react'
import Video from '../asests/WhatsApp Video 2024-02-28 at 22.08.20_a176b078.mp4'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <nav className='navbar'>
        <a>الابتكار الحقيقي</a>
 <Link to="/about">عن الشركه</Link>
       </nav>
      <div className='tltel'>
        <p>الابتكار في صناعة المعارض و المؤتمرات</p>
        <a>تواصل معنا <FaAngleDoubleLeft /></a>
      </div>
       <footer className='foot'>
       <p>فريق من العقول المبدعة الملهمة<br/> ملتزمون بتقديم تجربة استثنائية</p>
       <a>اليك بعض اعمالنا <FaAngleDoubleLeft /></a>
      </footer>
    </div>
   
       </>
  )
}

export default Navbar
