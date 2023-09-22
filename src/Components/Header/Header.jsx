import React from 'react';
import profile from '../../assets/profile.png';
const Header = () => {
    return (
        <div>
            <div>
                <h2>Knowledge Cafe</h2>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;