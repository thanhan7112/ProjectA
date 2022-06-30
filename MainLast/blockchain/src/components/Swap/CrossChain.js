
import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
// import "./Swap.css";
import { images } from "../../constants";
import "../HomeBody/HomeBody";
import "./CrossChain.css";
const CrossChain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPop] = useState(false);
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const handleClose=()=>{
        setPop(false)
    }
    const [fromUp, setFromUp] = useState(false);
    const handleClickOpenFrom = () => {
        setFromUp(!fromUp)
    }
    const handleCloseFrom = () => {
        setFromUp(false)
    }
    const [fromUpto, setFromUpto] = useState(false);
    const handleClickOpenFromto = () => {
        setFromUpto(!fromUpto)
    }
    const handleCloseFromto = () => {
        setFromUp(false)
    }
  return (
    <div><div className='Swap_Body2'>
    <div className='header_swap'>Swap</div>
    <AiFillSetting
        className='icon2'
    />
    <div className='Cross_Swap'>
        <div className='select_BUSD'>
            <div className='from_select' onClick={handleClickOpenFrom}>
                <p>From</p>
                <img src={images.Binance_Icon} alt='busd' className='img_busd' />
                <p className='p2'>BUSD</p>
                {/* <img src={images.DropdownIcon} alt='dropdown' className='dropdown' /> */}
            </div>
        </div>
        <div className='Cross_BUSD'>
            <div className='wrapper_BUSD'>
                <div className='num_BUSD'>
                    <p>0.00</p>
                </div>
                <div className='limit'>
                    <p>Max</p>
                </div>
            </div>
            <div className='BUSD' onClick={handleClickOpen}>
                <img src={images.BUSD_Icon} alt='busd' />
                <p>BUSD</p>
                <img src={images.DropdownIcon} alt='dropdown' />
            </div>
        </div>
        {/*  */}
        <div className='select_AVAX'>
            <div className='from_select two' onClick={handleClickOpenFromto}>
                <p>To</p>
                <img src={images.AVAXIcon} alt='avax' className='img_busd' />
                <p className='p2'>Avalanche</p>
                {/* <img src={images.DropdownIcon} alt='dropdown' className='dropdown' /> */}
            </div>
        </div>
        <div className='Swap_AVAX'>
            <div className='wrapper_AVAX'>
                <div className='num_AVAX'>
                    <p>0.00</p>
                </div>
            </div>
            <div className='AVAX' onClick={handleClickOpen}>
                <img src={images.USDCIcon} alt='usdc' />
                <p>USDC</p>
                <img src={images.DropdownIcon} alt='dropdown' />
            </div>
        </div>
        <div className='Begin_Swap'>
            <p>Begin Swap</p>
        </div>
        <div className='arrow'>
            <img src={images.Rectangle146} alt='rectangle146' />
        </div>
    </div>
    <div className='footer2'>
        <div className='sec2'>
            <p className='ss'></p>
            <p className='text_footer'>Finality</p>
        </div>
        <div className='percent2'>
            <p className='pt'>0.50%</p>
            <p className='free'>Free</p>
        </div>
    </div>
</div>
9 h 22
{popup ?
    <div className='table-model'>
        <div className='table'>
            <div className='table-header'>
                <p>Select Token</p>
                <div className='close__btn' onClick={handleClose}>
                    X
                </div>
            </div>
            <div className='table-list'>
                <div className='table-list_item'>
                    <div className='table-list_item-content'>
                        <div className='table-list_item-content-box1'>
                            <img src={images.USDC_Icon} alt="" />
                            <p>USD Coin</p>
                        </div>
                        <div className='table-list_item-content-box'>
                            <span>USDC</span>
                        </div>
                    </div>
                    <div className='table-list_item-content'>
                        <div className='table-list_item-content-box1'>
                            <img src={images.BUSD_Icon} alt="" />
                            <p>Binance USD</p>
                        </div>
                        <div className='table-list_item-content-box'>
                            <span>BUSD</span>
                        </div>
                    </div>
                    <div className='table-list_item-content'>
                        <div className='table-list_item-content-box1'>
                            <img src={images.USDT_Icon} alt="" />
                            <p>Tether</p>
                        </div>
                        <div className='table-list_item-content-box'>
                            <span>USDT</span>
                        </div>
                    </div>
                    <div className='table-list_item-content'>
                        <div className='table-list_item-content-box1'>
                            <img src={images.BTC_Icon} alt="" />
                            <p>Bitcoin</p>
                        </div>
                        <div className='table-list_item-content-box'>
                            <span>BTC</span>
                        </div>
                    </div>
                    <div className='table-list_item-content'>
                        <div className='table-list_item-content-box1'>
                            <img src={images.ETH_Icon} alt="" />
                            <p>Ethereum</p>
                        </div>
                        <div className='table-list_item-content-box'>
                            <span>ETH</span>
                        </div>
                    </div>
                    <div className='table-list_item-content'>
                        <div className='table-list_item-content-box1'>
                            <img src={images.BNB_Icon} alt="" />
                            <p>Binance Coin</p>
                        </div>
                        <div className='table-list_item-content-box'>
                            <span>BNB</span>
                        </div>
                    </div>
                    <p className='table-footer'>Scroll to load more</p>
                </div>
            </div>
        </div>
    </div> : ""}
{fromUp ?
<div className='table_Source'>
    <div className='table_source'>
        <div className='table_hearder_source'>
            <p>Source</p>
            <div className='close__btn' onClick={handleCloseFrom}>
                X
            </div>
        </div>
        <div className='table_body_source'>
            <div className='table_body_source_box'>
                <div className='table-list_item-content_source'>
                    <div className='table-list_item-content_source-box1'>
                        <img src={images.ETH_Icon} alt="" />
                        <p>Ethereum</p>
                    </div>
                    <div className='aline_body'></div>
                </div>
                <div className='table-list_item-content_source'>
                    <div className='table-list_item-content_source-box1'>
                        <img src={images.AVAXIcon} alt="" />
                        <p>Avalanche</p>
                    </div>
                    <div className='aline_body'></div>
                </div>
                <div className='table-list_item-content_source'>
                    <div className='table-list_item-content_source-box1'>
                        <img src={images.Binance_Icon} alt="" />
                        <p>Binance Coin</p>
                        <div className='current_box'>
                            <p>Current</p>
                        </div>
                    </div>
                    <div className='aline_body'></div>
                </div>
                <div className='table-list_item-content_source'>
                    <div className='table-list_item-content_source-box1'>
                        <img src={images.Polygon2} alt="" />
                        <p>Polygon</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>: ""}
{fromUpto ?
<div className='table_Destination'>
    <div className='table_destination'>
        <div className='table_hearder_destination'>
            <p>Destination</p>
            <div className='close__btn' onClick={handleClickOpenFromto}>
                X
            </div>
        </div>
        <div className='table_body_destination'>
            <div className='table_body_destination_box'>
                <div className='table-list_item-content_destination'>
                    <div className='table-list_item-content_destination-box1'>
                        <img src={images.ETH_Icon} alt="" />
                        <p>Ethereum</p>
                    </div>
                    <div className='selected_box'>
                            <p>Selected</p>
                        </div>
                    <div className='aline_body'></div>
                </div>
                <div className='table-list_item-content_destination'>
                    <div className='table-list_item-content_destination-box1'>
                        <img src={images.AVAXIcon} alt="" />
                        <p>Avalanche</p>
                    </div>
                    <div className='aline_body'></div>
                </div>
                <div className='table-list_item-content_destination'>
                    <div className='table-list_item-content_destination-box1'>
                        <img src={images.Binance_Icon} alt="" />
                        <p>Binance Coin</p>
                    </div>
                    <div className='aline_body'></div>
                </div>
                <div className='table-list_item-content_destination'>
                    <div className='table-list_item-content_destination-box1'>
                        <img src={images.Polygon2} alt="" />
                        <p>Polygon</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>: ""}</div>
  )
}

export default CrossChain