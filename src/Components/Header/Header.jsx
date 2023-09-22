import React from 'react';
import profile from '../../assets/profile.png';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <div>
                    <h2>Knowledge Cafe</h2>
                </div>
                <div>
                    <img src={profile} alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;