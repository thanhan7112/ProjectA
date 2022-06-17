import { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { FaEthereum } from "react-icons/fa";
import "../Main.css";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import { useParams } from "react-router-dom";
import { AiOutlineDingtalk, AiOutlineCopy } from "react-icons/ai";
import Button from "react-bootstrap/esm/Button";
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

export default function Metamask() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const { itemId } = useParams();
  const [Items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/items/" + itemId)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //Get Address from metamask
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };
  //

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

  return (
    <div className="main">
      <div className="DetailPet">
        <div className="TitlePet">
          <div className="NameVicon">
            <div className="iconPet">
              <AiOutlineDingtalk
                style={{
                  marginLeft: "3%",
                  fontSize: "28px",
                }}
              />
            </div>
            <h3 style={{ paddingTop: "0.2%" }}>{Items.ItemName}</h3>
          </div>
          <div className="NameVicon">
            <div className="iconPet">
              <FaEthereum
                style={{
                  marginTop: "5%",
                  marginLeft: "15%",
                  fontSize: "18px",
                }}
              />
            </div>
            <h3>{Items.ItemPrice}</h3>
          </div>
          <div className="NameVicon">
            <div className="iconPet">
              <AiOutlineCopy style={{
                  marginTop: "5%",
                  marginLeft: "15%",
                  fontSize: "18px",
                }}/>
            </div>
            <h3>{Items.ItemDetail}</h3>
          </div>
        </div>
        <div className="ImgPet">
          <img alt="" src={Items.itemSaleImg}></img>
        </div>
      </div>
      <form className="FormPay" onSubmit={handleSubmit}>
        <div className="credit-card w-full sm:w-auto shadow-lg rounded-xl ">
          <Button
            onClick={btnhandler}
            variant="primary"
            style={{ marginTop: "2%", marginLeft: "2%" }}
          >
            Connect to wallet
          </Button>
          <main className="mt-4 p-4">
            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  value={data.address}
                  name="addr"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Recipient Address"
                />
              </div>
              <div className="my-3">
                <input
                  name="ether"
                  type="text"
                  value={Items.ItemPrice}
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Amount in ETH"
                />
              </div>
            </div>
          </main>
          <footer className="p-4">
            <button
              type="submit"
              className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            >
              Pay now
            </button>
            <ErrorMessage message={error} />
            <TxList txs={txs} />
          </footer>
        </div>
      </form>
    </div>
  );
}
