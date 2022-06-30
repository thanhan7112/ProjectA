import React from 'react';

import {images} from '../../constants';

import './Network.css';

const Network = () => (
    <div id='network__modal'>
        <div className='network'>
            <div className='network__head'>
                <p className='network__head-title'>Network</p>
                <a href='# ' className='close__btn'>
                    X
                </a>
            </div>

            <div className='network__list'>
                <div className='network__list-item'>
                    <div className='network__list-item_content'>
                        <img src={images.Rectangle287} alt='Rectangle287' />
                        <p>Ethereum</p>
                    </div>
                    <button type='button' className='btn__current'>
                        Current
                    </button>
                </div>
                <div className='network__list-item'>
                    <div className='network__list-item_content'>
                        <img src={images.Binance} alt='Rectangle287' />
                        <p>Avalanche</p>
                    </div>
                    {/* <button type='button' className='btn__current'>Current</button> */}
                </div>
                <div className='network__list-item'>
                    <div className='network__list-item_content'>
                        <img src={images.Polygon} alt='Rectangle287' />
                        <p>Binance</p>
                    </div>
                    {/* <button type='button' className='btn__current'>Current</button> */}
                </div>
                <div className='network__list-item'>
                    <div className='network__list-item_content'>
                        <img src={images.Polygon2} alt='Rectangle287' />
                        <p>Polygon</p>
                    </div>
                    {/* <button type='button' className='btn__current'>Current</button> */}
                </div>
            </div>
        </div>
    </div>
);

export default Network;
