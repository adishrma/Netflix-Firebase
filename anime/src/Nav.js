import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useHistory } from 'react-router-dom';

function Nav() {
  const history = useHistory();

const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  (window.scrollY > 100) ? handleShow(true) : handleShow(false)
}

useEffect(() => {
window.addEventListener("scroll", transitionNavBar);
return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
      <img
      onClick={() => history.push("/")}
      className='nav__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
      alt='netflix-logo'
      />

      <img 
      onClick={() => history.push("/profile")}

      className='nav__avatar'
      src='https://imgs.search.brave.com/fNicW06HadYztr9u9WszwS_IT3_l2BGY21h5xv9VDqA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTg4/d2tkbWpyb3Jja2Vr/aGEuanBn'
      alt=''
      />

      </div>
      
    </div>
  )
}

export default Nav
