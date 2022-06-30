import React, { useState } from "react";
import Network from "../Network/Network";
import './Vault.css'
import { images } from "../../constants";
import AccountPopup from '../AccountPopup/AccountPopup';
const VaultBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Vault</p>
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
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h2>Stable</h2>
            <span>.Sort by API</span>
          </div>
          <div className="header-button">
            <a href="#">
              <button className="btn-header active">Lend</button>
            </a>
            <a href="#">
              <button className="btn-header">Borrow</button>
            </a>
          </div>
        </div>
        <div className="content-grid">
          <div className="box-usdc">
            <a href="#popup1" class="btnnn">
              <div className="usdc-item">
                <img
                  style={{ height: "100px" }}
                  src={images.USDC_Icon}
                  alt="balance"
                ></img>

                <div className="hactitle">
                  <div className="title-left">
                    <span>Vaults</span>
                    <h3>USDC</h3>
                    <br />
                    <span>Balance</span>
                    <div>
                      <p className="title-right-p">_</p>
                    </div>
                  </div>
                  <div className="title-right">
                    <span>APY</span>
                    <h3>7.42%</h3>
                    <br />
                    <span>Earning</span>
                    <div>
                      <p className="title-left-p">_</p>
                    </div>
                  </div>
                </div>

                <div id="popup1" class="popup">
                  <a href="/Vault" class="close">
                    &times;
                  </a>
                  <div className="TitleFunHead">
                    <h2>USDC</h2>
                    <h5>USDC Vault</h5>
                    <h5>USDC Vault</h5>
                  </div>
                  <div className="boxinBox">
                    <div className="listBox">
                      <h2>10000</h2>
                    </div>
                    <div className="listBoxBottomBu">
                      <button
                        type="submit"
                        class="button btn btn-primary"
                        style={{ width: "80%", marginRight: "1rem" }}
                      >
                        <h3>Continue</h3>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" class="close-popup"></a>
                {/* <div className="dynamic-icon">
                <img className="icon-dynamic" src={images.DynamicIcon}></img>
              </div> */}
              </div>
            </a>
          </div>

          <div className="box-usdc">
            <a href="#popup1" class="btnnn">
              <div className="usdc-item">
                <img
                  style={{ height: "100px" }}
                  src={images.USDT_Icon}
                  alt="balance"
                ></img>
                <div className="hactitle">
                  <div className="title-left">
                    <span>Vaults</span>
                    <h3>USDT</h3>
                    <br />
                    <span>Balance</span>
                    <div>
                      <p className="title-right-p">_</p>
                    </div>
                  </div>
                  <div className="title-right">
                    <span>APY</span>
                    <h3>9.58%</h3>
                    <br />
                    <span>Earning</span>
                    <div>
                      <p className="title-left-p">_</p>
                    </div>
                  </div>
                </div>
                {/* <div className="dynamic-icon">
                <img className="icon-dynamic" src={images.DynamicIcon}></img>
              </div> */}
              </div>
              <div id="popup1" class="popup">
                <a href="/Vault" class="close">
                  &times;
                </a>
                <div className="TitleFunHead">
                  <h2>USDT</h2>
                </div>
                <div className="boxinBox">
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Bank account</h2>
                      <h5>Connect new</h5>
                    </div>
                    <div className="ButtonlistBox">
                      <button type="submit" className="buttons">
                        Current
                      </button>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Debit / Credit</h2>
                      <h5>Add card</h5>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Wire transfer</h2>
                      <h5>More info</h5>
                    </div>
                  </div>
                  <div className="listBoxBottom">
                    <div className="TextListBox">
                      <h2>Crypto</h2>
                      <h5>...</h5>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="box-usdc">
            <a href="#popup1" class="btnnn">
              <div className="usdc-item">
                <img
                  style={{ height: "100px" }}
                  src={images.BUSD_Icon}
                  alt="balance"
                ></img>
                <div className="hactitle">
                  <div className="title-left">
                    <span>Vaults</span>
                    <h3>BUSD</h3>
                    <br />
                    <span>Balance</span>
                    <div>
                      <p className="title-right-p">_</p>
                    </div>
                  </div>
                  <div className="title-right">
                    <span>APY</span>
                    <h3>3.77%</h3>
                    <br />
                    <span>Earning</span>
                    <div>
                      <p className="title-left-p">_</p>
                    </div>
                  </div>
                </div>
                {/* <div className="dynamic-icon">
                  <img className="icon-dynamic" src={images.DynamicIcon}></img>
                </div> */}
              </div>
              <div id="popup1" class="popup">
                <a href="/Vault" class="close">
                  &times;
                </a>
                <div className="TitleFunHead">
                  <h2>Funding Source</h2>
                </div>
                <div className="boxinBox">
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Bank account</h2>
                      <h5>Connect new</h5>
                    </div>
                    <div className="ButtonlistBox">
                      <button type="submit" className="buttons">
                        Current
                      </button>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Debit / Credit</h2>
                      <h5>Add card</h5>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Wire transfer</h2>
                      <h5>More info</h5>
                    </div>
                  </div>
                  <div className="listBoxBottom">
                    <div className="TextListBox">
                      <h2>Crypto</h2>
                      <h5>...</h5>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="content-grid">
          <div className="box-usdc">
            <a href="#popup1" class="btnnn">
              <div className="usdc-item">
                <img
                  style={{ height: "100px" }}
                  src={images.BTC_Icon}
                  alt="balance"
                ></img>

                <div className="hactitle">
                  <div className="title-left">
                    <span>Vaults</span>
                    <h3>BTC</h3>
                    <br />
                    <span>Balance</span>
                    <div>
                      <p className="title-right-p">_</p>
                    </div>
                  </div>
                  <div className="title-right">
                    <span>APY</span>
                    <h3>3.64%</h3>
                    <br />
                    <span>Earning</span>
                    <div>
                      <p className="title-left-p">_</p>
                    </div>
                  </div>
                </div>

                <div id="popup1" class="popup">
                  <a href="/Vault" class="close">
                    &times;
                  </a>
                  <div className="TitleFunHead">
                    <h2>Funding Source</h2>
                  </div>
                  <div className="boxinBox">
                    <div className="listBox">
                      <div className="TextListBox">
                        <h2>Bank account</h2>
                        <h5>Connect new</h5>
                      </div>
                      <div className="ButtonlistBox">
                        <button type="submit" className="buttons">
                          Current
                        </button>
                      </div>
                    </div>
                    <div className="listBox">
                      <div className="TextListBox">
                        <h2>Debit / Credit</h2>
                        <h5>Add card</h5>
                      </div>
                    </div>
                    <div className="listBox">
                      <div className="TextListBox">
                        <h2>Wire transfer</h2>
                        <h5>More info</h5>
                      </div>
                    </div>
                    <div className="listBoxBottom">
                      <div className="TextListBox">
                        <h2>Crypto</h2>
                        <h5>...</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" class="close-popup"></a>
                {/* <div className="dynamic-icon">
                <img className="icon-dynamic" src={images.DynamicIcon}></img>
              </div> */}
              </div>
            </a>
          </div>

          <div className="box-usdc">
            <a href="#popup1" class="btnnn">
              <div className="usdc-item">
                <img
                  style={{ height: "100px" }}
                  src={images.ETH_Icon}
                  alt="balance"
                ></img>
                <div className="hactitle">
                  <div className="title-left">
                    <span>Vaults</span>
                    <h3>ETH</h3>
                    <br />
                    <span>Balance</span>
                    <div>
                      <p className="title-right-p">_</p>
                    </div>
                  </div>
                  <div className="title-right">
                    <span>APY</span>
                    <h3>4.82%</h3>
                    <br />
                    <span>Earning</span>
                    <div>
                      <p className="title-left-p">_</p>
                    </div>
                  </div>
                </div>
                {/* <div className="dynamic-icon">
                <img className="icon-dynamic" src={images.DynamicIcon}></img>
              </div> */}
              </div>
              <div id="popup1" class="popup">
                <a href="/Vault" class="close">
                  &times;
                </a>
                <div className="TitleFunHead">
                  <h2>Funding Source</h2>
                </div>
                <div className="boxinBox">
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Bank account</h2>
                      <h5>Connect new</h5>
                    </div>
                    <div className="ButtonlistBox">
                      <button type="submit" className="buttons">
                        Current
                      </button>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Debit / Credit</h2>
                      <h5>Add card</h5>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Wire transfer</h2>
                      <h5>More info</h5>
                    </div>
                  </div>
                  <div className="listBoxBottom">
                    <div className="TextListBox">
                      <h2>Crypto</h2>
                      <h5>...</h5>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="box-usdc">
            <a href="#popup1" class="btnnn">
              <div className="usdc-item">
                <img
                  style={{ height: "100px" }}
                  src={images.BNB_Icon}
                  alt="balance"
                ></img>
                <div className="hactitle">
                  <div className="title-left">
                    <span>Vaults</span>
                    <h3>BNB</h3>
                    <br />
                    <span>Balance</span>
                    <div>
                      <p className="title-right-p">_</p>
                    </div>
                  </div>
                  <div className="title-right">
                    <span>APY</span>
                    <h3>5.19%</h3>
                    <br />
                    <span>Earning</span>
                    <div>
                      <p className="title-left-p">_</p>
                    </div>
                  </div>
                </div>
                {/* <div className="dynamic-icon">
                  <img className="icon-dynamic" src={images.DynamicIcon}></img>
                </div> */}
              </div>
              <div id="popup1" class="popup">
                <a href="/Vault" class="close">
                  &times;
                </a>
                <div className="TitleFunHead">
                  <h2>Funding Source</h2>
                </div>
                <div className="boxinBox">
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Bank account</h2>
                      <h5>Connect new</h5>
                    </div>
                    <div className="ButtonlistBox">
                      <button type="submit" className="buttons">
                        Current
                      </button>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Debit / Credit</h2>
                      <h5>Add card</h5>
                    </div>
                  </div>
                  <div className="listBox">
                    <div className="TextListBox">
                      <h2>Wire transfer</h2>
                      <h5>More info</h5>
                    </div>
                  </div>
                  <div className="listBoxBottom">
                    <div className="TextListBox">
                      <h2>Crypto</h2>
                      <h5>...</h5>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default VaultBody;
