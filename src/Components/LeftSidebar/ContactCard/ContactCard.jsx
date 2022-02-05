import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { MdVerifiedUser } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillCloud } from 'react-icons/ai';
function ContactCard() {
    return (
        <div className='contact-card'>
            <div className='heading'>
                <h1>Jean-Samuel Najnduel</h1>
                <div>
                    <MdModeEditOutline />
                    <MdVerifiedUser />
                </div>
            </div>

            <h4>President</h4>
            <p>Ringover </p>

            <a href="https://www.ringover.com">https://www.ringover.com</a>
            <div className='icons'>
                <hr />
                <div>
                    <AiFillLinkedin />
                    <AiFillCloud /></div>
                <hr />
            </div>
        </div>);
}

export default ContactCard;
