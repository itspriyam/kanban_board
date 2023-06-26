import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <i class="bi bi-search searchIcon"></i>
            <input className='inputBox' type='text' placeholder='Search for anything'></input>
            <i class="bi bi-calendar4-week iconHead"></i>
            <i class="bi bi-chat-square-quote iconHead"></i>
            <i class="bi bi-bell iconHead"></i>
            <div className='person'>
                <p>Anima Agrawal <br/> <span className='stateInfo'>U.P, India</span></p>
            </div>
            <img className='proImg' src='https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/1244/2019/11/smile-girl-red-sweater.png' alt='profileImg'></img>
            <span className='arrow'></span>
        </div >
    );
};

export default Header