import React from 'react'
import './AccountPopup.css'
import { images } from '../../constants'
import { Link } from 'react-router-dom'

export default function AccountPopup({ children, open, onClose }) {
    if (!open) return null
    return (
        <div className='home'>
            <div className="dropdown" >
                <div className="dropdown-rectangle"></div>
                <img src={images.Close} onClick={onClose} alt='' className="img-close" />
                <div className="profile-pic"></div>
                <img src={images.Avata} alt='' className='profile-pic' />
                <div><p className="text-paren">@cameron</p></div>
                <div><p className="text-child">cameron@email.com</p></div>
                <div className='button-rectangle'></div>
                <Link to='/Settingss' className='text-settings'>Settings</Link>
                <a href='#' className='text doc'>Docs</a>
                <div className='line-acc line1'></div>
                <Link to='/Referrals' className='text referrals'>Referrals</Link>
                <div className='line-acc line2'></div>
                <a href='#' className='text help-center'>Help Center</a>
                <div className='line-acc line3'></div>
                <Link to='/Notifications' className='text notifications'>Notifications</Link>
                <div className='line-acc line4'></div>
                <a href='#' className='text sign-out'>Sign out</a>
            </div>
            {children}
        </div>
    )
}

