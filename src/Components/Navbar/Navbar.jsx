import React from 'react';
import Logo from '../../Utils/logo.png';
import '../../'
import SearchIcon from '../../Utils/Vector.png';
import ProfileImg from '../../Utils/Profile-pic.png';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { MdOutlineArrowForward } from 'react-icons/md';

function Navbar() {
    return (
        <div className='navbar'>
            <div>
                <img src={Logo} alt="logo-company" />
                <span>Sales Machine</span>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Search" name="search" />
                <img src={SearchIcon} />
            </div>

            <div className='profile'>
                <img src={ProfileImg} alt="logo-company" />
                <MdOutlineCompareArrows />
                <MdOutlineArrowForward />
            </div>
        </div >)
        ;
}

export default Navbar;

