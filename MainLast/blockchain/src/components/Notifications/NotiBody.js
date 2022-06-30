import React, { useState } from "react";
import AccountPopup from '../AccountPopup/AccountPopup';
import { images } from "../../constants";
import Network from "../Network/Network";
import "../Pay/PayBody.css";
const NotiBody = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Notifications</p>
        <div className="homebody__list">
          <a href="#overlay" className="homebody__list-item_ethereum">
            <img src={images.Rectangle287} alt="rectangle" />
            <p className="homebody__list-item_ethereum-text">Ethereum</p>
          </a>
          <div id="overlay">
            <Network />
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

          <div className="dash" />
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
    </div>
  );
};

export default NotiBody;
