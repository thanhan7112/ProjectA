import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import "./Swap.css";
import { images } from "../../constants";
import "../HomeBody/HomeBody";
import Network from "../Network/Network";
import AccountPopup from "../AccountPopup/AccountPopup";
import CrossChain from "./CrossChain";
// const Swap = ({ index, src, text }) => (
function SwapBody({ index, src, text }) {
  const [Swap, setSwap] = useState(true)
  console.log(Swap)
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const handleClose = () => {
    setPop(false);
  };
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Swap</p>
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

      <div className="Swapbody__content">
        <div className="Swaps">
          <div className="Swap_Chain">
            <div className="Same_Chain" onClick={() => {
                      setSwap(() => ({
                        Swap:true,
                      }));
                    }}>
              <p>Same Chain</p>
            </div>
            <div className="Cross_Chain" onClick={() => {
                      setSwap(() => ({
                        Swap:false,
                      }));
                    }}>
              <p>Cross Chain</p>
            </div>
          </div>
          {Swap.Swap == true ? <div> <div className="Swap_Body">
            <div className="HeaderSwap">
              <div className="header_swap">Swap</div>
              <AiFillSetting className="icon" />
            </div>

            <div className="Swap_USDC">
              <div className="wrapper_USDC">
                <div className="num_USDC">
                  <p>0.00</p>
                </div>
                <div className="limit">
                  <p>Max</p>
                </div>
              </div>
              <div className="USDC" onClick={handleClickOpen}>
                <img src={images.USDC_Icon} alt="rectangle141" />
                <p>USDC</p>
                <img src={images.DropdownIcon} alt="dropdown" />
              </div>
            </div>
            <div className="Swap_AVAX">
              <div className="wrapper_AVAX">
                <div className="num_AVAX">
                  <p>0.00</p>
                </div>
              </div>
              <div className="AVAX">
                <img src={images.AVAXIcon} alt="rectangle237" />
                <p>AVAX</p>
                <img src={images.DropdownIcon} alt="dropdown" />
              </div>
            </div>
            <div className="Begin_Swap">
              <p>Begin Swap</p>
            </div>
            <div className="arrow2">
              <img src={images.Rectangle146} alt="rectangle146" />
            </div>
            <div className="footer">
              <div className="sec">
                <p className="s"></p>
                <p className="text_footer">Finality</p>
              </div>
              <div className="percent">
                <p className="pt">0.50%</p>
                <p className="free">Free</p>
              </div>
            </div>
          </div>

          {popup ? (
            <div className="table-model">
              <div className="table">
                <div className="table-header">
                  <p>Select Token</p>
                  <div className="close__btn" onClick={handleClose}>
                    X
                  </div>
                </div>
                <div className="table-list">
                  <div className="table-list_item">
                    <div className="table-list_item-content">
                      <div className="table-list_item-content-box1">
                        <img src={images.USDC_Icon} alt="" />
                        <p>USD Coin</p>
                      </div>
                      <div className="table-list_item-content-box">
                        <span>USDC</span>
                      </div>
                    </div>
                    <div className="table-list_item-content">
                      <div className="table-list_item-content-box1">
                        <img src={images.BUSD_Icon} alt="" />
                        <p>Binance USD</p>
                      </div>
                      <div className="table-list_item-content-box">
                        <span>BUSD</span>
                      </div>
                    </div>
                    <div className="table-list_item-content">
                      <div className="table-list_item-content-box1">
                        <img src={images.USDT_Icon} alt="" />
                        <p>Tether</p>
                      </div>
                      <div className="table-list_item-content-box">
                        <span>USDT</span>
                      </div>
                    </div>
                    <div className="table-list_item-content">
                      <div className="table-list_item-content-box1">
                        <img src={images.BTC_Icon} alt="" />
                        <p>Bitcoin</p>
                      </div>
                      <div className="table-list_item-content-box">
                        <span>BTC</span>
                      </div>
                    </div>
                    <div className="table-list_item-content">
                      <div className="table-list_item-content-box1">
                        <img src={images.ETH_Icon} alt="" />
                        <p>Ethereum</p>
                      </div>
                      <div className="table-list_item-content-box">
                        <span>ETH</span>
                      </div>
                    </div>
                    <div className="table-list_item-content">
                      <div className="table-list_item-content-box1">
                        <img src={images.BNB_Icon} alt="" />
                        <p>Binance Coin</p>
                      </div>
                      <div className="table-list_item-content-box">
                        <span>BNB</span>
                      </div>
                    </div>
                    <p className="table-footer">Scroll to load more</p>
                  </div>
                </div>
              </div>
            </div>
            
          ) : (
            ""
          )}
          </div> : <CrossChain/>}
          {/* <CrossChain/> */}
          
        </div>
      </div>
    </div>
  );
}
// );

export default SwapBody;
