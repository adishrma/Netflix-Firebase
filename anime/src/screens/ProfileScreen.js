import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import { useHistory } from 'react-router-dom';
import {auth} from "../firebase";
const ProfileScreen = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Who's Watching?</h1>
        <div className='profileScreen__info'>
          <img
          onClick={() => history.push("/")}

          src='https://imgs.search.brave.com/fNicW06HadYztr9u9WszwS_IT3_l2BGY21h5xv9VDqA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTg4/d2tkbWpyb3Jja2Vr/aGEuanBn'
          alt=''
          />
          <h2>{user.email}</h2>
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen
