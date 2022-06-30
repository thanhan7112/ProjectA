import React, { useState } from "react";
import Network from "../Network/Network";
import { BiDollar, BiCircle } from "react-icons/bi";
import { AiOutlineSwap } from "react-icons/ai";
import { Button } from "react-bootstrap";
import TxList from "./TxList";
import ErrorMessage from "./ErrorMessage";
import { ethers } from "ethers";
import { images } from "../../constants";
import "./PayBody.css";

// import Network from '../Network/Network';
import AccountPopup from '../AccountPopup/AccountPopup';
import QRCode from "qrcode.react";
const PayBody = () => {
  const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      setError(err.message);
    }
  };
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };
  const [buttonText, setButtonText] = useState(true);
  const [ButtonSend, setButtonSend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  console.log(ButtonSend);
  return (
    <div className="homebody">
      <div className="homebody__header">
        <div className="homebody__head-logo">
          <img src={images.DynamicIcon} alt="dynamicicon" />
        </div>
        <p className="homebody__header-title">Pay</p>
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
          <a><img src={images.ProfilePic} alt='profile' onClick={() => setIsOpen(true)} /></a>
                        <AccountPopup open= {isOpen} onClose={() => setIsOpen(false)}>
                            <AccountPopup/>
                        </AccountPopup>
          </div>
        </div>
      </div>
      <div className="paybody__content">
        <div className="PayAndReceive">
          <div className="PagePayHead">
            <div
              className="Send"
              onClick={() => {
                setButtonSend(() => ({
                  ButtonSend: true,
                }));
              }}
            >
              <div className="TextSend">
                <p>Send</p>
              </div>
            </div>
            <div
              className="Receive"
              onClick={() => {
                setButtonSend(() => ({
                  ButtonSend: false,
                }));
              }}
            >
              <div className="TextReceive">
                <p>Receive</p>
              </div>
            </div>
          </div>
          {ButtonSend.ButtonSend == true ? (
            <div className="PageForm">
              <div className="IconO">
                <div className="DolarO">
                  <div className="iconDolar">
                    <BiDollar />
                  </div>
                  <div className="O">
                    <BiCircle style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="ButtonSwapText">
                  <button
                    className="buttonIcon"
                    onClick={() => {
                      setButtonText((prevState) => ({
                        buttonText: !prevState.buttonText,
                      }));
                    }}
                  >
                    <div className="Swap">
                      <AiOutlineSwap
                        style={{
                          width: "100%",
                          height: "100%",
                          color: "white",
                        }}
                      />
                    </div>
                  </button>

                  <div className="SwapText">
                    {buttonText.buttonText !== true ? (
                      <p style={{ paddingLeft: "5px" }}>ETH</p>
                    ) : (
                      <p>USDC</p>
                    )}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="FormPay">
                <form onSubmit={handleSubmit}>
                  <div className="PayWithMain">
                    <div className="TextPayWith">
                      <p>Pay With</p>
                      <select class="select">
                        {buttonText.buttonText !== true ? (
                          <option>ETH</option>
                        ) : (
                          <option>USDC</option>
                        )}
                        {buttonText.buttonText !== true ? (
                          <option>USDC</option>
                        ) : (
                          <option>ETH</option>
                        )}
                      </select>
                    </div>
                    <div className="TextTo">
                      <p>To</p>
                      <input
                        className="input"
                        type="text"
                        name="addr"
                        placeholder="@Address"
                      />
                    </div>
                    <div className="Amount">
                      <p>Amount</p>
                      <input
                        className="input"
                        name="ether"
                        type="text"
                        placeholder="Amount"
                      />
                    </div>
                    <div className="TextNote">
                      <p>Note</p>
                      <input className="input" placeholder="Leave a message" />
                    </div>
                  </div>

                  <Button className="button" type="submit">
                    <h3>Continue</h3>
                  </Button>
                  <div className="BalanceAdd">
                    <h3 className="BalanceText">ETH Balance</h3>
                    <h3 className="Balance">{/* <h3>{data.Balance}</h3> */}</h3>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="PageForm">
              <div className="QRCODE">
                <div className="IconQR">
                  <QRCode
                    id="qr"
                    style={{ width: "100%", height: "100%" }}
                    fgColor="#743ad5"
                    bgColor={"#000000"}
                    value="Nguyen Thanh An"
                    level={"M"}
                    includeMargin={true}
                    onClick={() => alert("Nguyen Thanh An")}
                  />
                </div>
              </div>
              <div className="FormPay">
                <form onSubmit={handleSubmit}>
                  <div className="PayReceiveMain">
                    <div className="TextToAsset">
                      <p>Asset</p>
                      <select class="select">
                        <option>ETH</option>
                        <option>USDC</option>
                        <option>USDC</option>
                        <option>ETH</option>
                      </select>
                    </div>
                  </div>

                  <Button className="button" type="submit">
                    <h3>Continue</h3>
                  </Button>
                  <div className="BalanceAdd">
                    <h3 className="BalanceText">ETH Balance</h3>
                    <h3 className="Balance">{/* <h3>{data.Balance}</h3> */}</h3>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="Recent">
          <div className="TitleRecent">Recent Activity</div>
          <div className="TextRecent"> </div>
          <div className="TextRecent"> </div>
          <div className="TextRecentBottom"> </div>
        </div>
      </div>
      <div className="Message" style={{ marginTop: "6rem" }}>
        <ErrorMessage message={error} />
      </div>
      <div className="Message">
        <TxList txs={txs} />
      </div>
    </div>
  );
};

export default PayBody;
