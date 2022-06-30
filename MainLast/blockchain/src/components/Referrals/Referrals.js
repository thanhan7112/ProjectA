import React, { useState } from "react";
// import HomeBody from '../HomeBody/HomeBody'
import SideBar from "../SideBar/SideBar";
import "./Referrals.css";
import { images } from "../../constants";
import AccountPopup from "../AccountPopup/AccountPopup";
function Referrals() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home">
      <SideBar />
      <div className="homebody">
        <div className="homebody__header">
          <p className="homebody__header-title">Referrals</p>
          <div className="homebody__list">
            <div className="homebody__list-item_ethereum">
              <img src={images.Rectangle287} alt="rectangle" />
              <p className="homebody__list-item_ethereum-text">Ethereum</p>
            </div>
            <div className="homebody__list-item_notify">
              <img
                className="img-bell"
                src={images.NotificationsIcon}
                alt="notify"
              />
              <img
                className="img-alert"
                src={images.Notificationalert}
                alt="notifyalert"
              />
            </div>
            <div className="homebody__list-item_avatar">
              <a>
                <img
                  src={images.ProfilePic}
                  alt="profile"
                  onClick={() => setIsOpen(true)}
                />
              </a>
              <AccountPopup open={isOpen} onClose={() => setIsOpen(false)}>
                <AccountPopup />
              </AccountPopup>
            </div>
          </div>
        </div>
        <div className="box-referrals">
        <h1 className="referrals-title">Invite & Earn</h1>
        <p className="referrals-contents">
          After your referred user deposits $100+ in any vault, you both will be
          rewarded with $10 paid in USDC automatically.
        </p>
        <p className="referrals-link">Your link:</p>
        <div className="referrals-link-box"></div>
        <p className="link-box">https://dynamic.fi/join/cameron</p>
        <div className="box-copy-link"></div>
        <p className="coppy-link">Coppy link</p>
        <div className="referrals-line"></div>
        <p className="feferrals-or">or</p>
        <div className="referrals-line-right"></div>
        <img src={images.Intagram} alt="" className="referrals-icon intagram" />
        <img src={images.WhatsApp} alt="" className="referrals-icon whatsapp" />
        <img src={images.Discord} alt="" className="referrals-icon discord" />
        <img src={images.Telegram} alt="" className="referrals-icon telegram" />
        <p className="referrals-earings">Your earnings:</p>
        <div className="referrals-earnings">
          <img
            src={images.referrals_avata_1}
            alt=""
            className="earnings-avata avata-1"
          />
          <p className="earnings-content earnings-content-1">
            @christian deposited $100+ in a vault!
          </p>
          <p className="earnings-monney monney-1">+$10 DYNA</p>
          <div className="earnings-line line-62"></div>

          <img
            src={images.referrals_avata_2}
            alt=""
            className="earnings-avata avata-2"
          />
          <p className="earnings-content earnings-content-2">
            @james deposited $100+ in a vault!
          </p>
          <p className="earnings-monney monney-2">+$10 DYNA</p>
          <div className="earnings-line line-63"></div>

          <img
            src={images.referrals_avata_3}
            alt=""
            className="earnings-avata avata-3"
          />
          <p className="earnings-content earnings-content-3">
            @brandon deposited $100+ in a vault!
          </p>
          <p className="earnings-monney monney-3">+$10 DYNA</p>
        </div>
      </div>
    </div>
      </div>
      
  );
}

export default Referrals;
