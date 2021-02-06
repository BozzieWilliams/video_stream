import React, { useState, useEffect } from "react";
import "./Nav.css";
export default function Nav() {
  const [show, setShow] = useState(false);
  const navBarTansit = () =>
    window.scrollY > 100 ? setShow(true) : setShow(false);
  useEffect(() => {
    window.addEventListener("scroll", navBarTansit);
    return () => window.removeEventListener("scroll", navBarTansit);
  }, []);

  return (
    <div className={`nav ${show && "nav_background"}`}>
      <div className='nav_content'>
        <img
          className='nav_logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt='logo'
        />
        <img
          className='nav_avator'
          src='https://www.vhv.rs/dpng/d/550-5508649_person-image-placeholder-clipart-png-download-no-profile.png'
          alt='avator'
        />
      </div>
    </div>
  );
}
