import React from 'react'
import './Notification.css'
import HomeBody from '../HomeBody/HomeBody'
import SideBar from '../SideBar/SideBar'
import { images } from '../../constants'
import NotiBody from './NotiBody'

function Notification() {
  return (
    <div className='home'>
        <SideBar/>
        <NotiBody/>
        <div className='notification-box'>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>You deposited 169.5 AVAX in the vault</p>
                    <p className='text-nofication time-notification'>9:24am</p>
                </div>
                <div className='notification-activity-right'>
                    <p className='text-nofication money-notification'>+5,000 USDC</p>
                    <p className='text-nofication money-color-notification'>+$5,000.00</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>You deposited $500 in the USDC vault</p>
                    <p className='text-nofication time-notification'>9:24am</p>
                </div>
                <div className='notification-activity-right'>
                    <p className='text-nofication money-notification'>+5,00 USDC</p>
                    <p className='text-nofication money-color-notification'>+$5,00.00</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Interest earnings</p>
                    <p className='text-nofication'>Received $290.34 from Dynamic</p>
                    <p className='text-nofication time-notification'>6:45am</p>
                </div>
                <div className='notification-activity-right'>
                    <p className='text-nofication money-notification'>+290.34 USDC</p>
                    <p className='text-nofication money-color-notification'>+$290.34</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>You funded your account with $500</p>
                    <p className='text-nofication time-notification'>May 19</p>
                </div>
                <div className='notification-activity-right'>
                    <p className='text-nofication money-notification'>+500 USDC</p>
                    <p className='text-nofication money-color-notification'>+$500.00</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>You deposited $1,000 in the USDC vault</p>
                    <p className='text-nofication time-notification'>May 16</p>
                </div>
                <div className='notification-activity-right'>
                    <p className='text-nofication money-notification'>+1,000 USDC</p>
                    <p className='text-nofication money-color-notification'>+$1,000.00</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>You funded your account with $1,000</p>
                    <p className='text-nofication time-notification'>May 13</p>
                </div>
                <div className='notification-activity-right'>
                    <p className='text-nofication money-notification'>+10,000 USDC</p>
                    <p className='text-nofication money-color-notification'>+$10,000.00</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>Chase Bank 0245 has been connected</p>
                    <p className='text-nofication time-notification'>May 11</p>
                </div>
                <div className='notification-activity-right d-flex'>
                    <img src={images.Linked} alt="" className='icon-notification' />
                    <p className='span-nofication'>Linked</p>
                </div>

            </div>
            <div className="notification-activity">
                <div className='notification-activity-left'>
                    <p className='text-nofication activity-notification'>Account activity</p>
                    <p className='text-nofication'>KYC complete! Deposits enabled.</p>
                    <p className='text-nofication time-notification'>May 11</p>
                </div>
                <div className='notification-activity-right d-flex'>
                    <img src={images.Congrats} alt="" className='icon-notification' />
                    <p className='span-nofication'>Congrats</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Notification