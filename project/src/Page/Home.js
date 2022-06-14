import "./Main.css";
import { FaEthereum } from "react-icons/fa";
import { Card } from "react-bootstrap";
import img from '../Image/origin-banner.png'
import Menu from "./Menu";
function Home() {
  return (
    <div className="main">
      <Menu></Menu>
      <div className="HomePoster"> 
      <img className="image" src={img}></img>
        <h2>Axie Infinity: Origin is live in Early Access!</h2>
        <h4>
          The day is here! Axie Infinity: Origin is now available to play via
          Mavis Hub!
        </h4>
        <div className="ClickButton">
          <a target="_blank" href="https://welcome.skymavis.com/download/">
            Download on Mavis Hub
          </a>
        </div>
        
      </div>
      <div className="HomeMainSecond">
        <div className="Header-HomeMainSecond">
          <h3>Header1</h3>
        </div>
        <div className="Detail-HomeMainSecond">
          <h3>Total Item</h3>
        </div>
        <div className="Detail-Volume-HomeMainSecond">
          <h3>Total Volume</h3>
        </div>
      </div>
      <div className="row">
        <Card className="btn-card">
          <Card.Body>
            <center>
              <Card.Footer style={{ color: "white", fontSize: "14px" }}>
                Hash
              </Card.Footer>
              <Card.Title className="text">Name</Card.Title>
              <Card.Title className="text">
                Price<FaEthereum style={{ marginTop: "-4px" }}></FaEthereum>
              </Card.Title>
              <Card.Text className="text" style={{ fontSize: "14px" }}>
                From
              </Card.Text>
              <Card.Footer style={{ color: "white", fontSize: "14px" }}>
                ...
              </Card.Footer>
              <Card.Text className="text" style={{ fontSize: "14px" }}>
                To
              </Card.Text>
              <Card.Footer style={{ color: "white", fontSize: "14px" }}>
                ...
              </Card.Footer>
            </center>
            {/* <Button variant="white" onClick={()=> this.deleteRow(sold.metaId)} >Xac Nhan</Button>  */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
