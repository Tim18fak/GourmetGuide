import React from 'react'
import Cookie from 'universal-cookie'
import { FaSignOutAlt } from 'react-icons/fa';
const cookies = new Cookie();



const Logout = () => {
    const logout = () => {
        cookies.remove('userId');
        cookies.remove('fullName');
        cookies.remove('username');
        cookies.remove('phonenumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('pass');

        window.location.reload();
    };
  return (
    <div>
      <h4 onClick={logout}><span><FaSignOutAlt /></span>&nbsp;Logout</h4>
    </div>
  )
}

export default Logout
