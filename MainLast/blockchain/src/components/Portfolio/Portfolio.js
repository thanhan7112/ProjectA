import React from 'react';

import {images} from '../../constants';

import './Portfolio.css';

const Portfolio = () => (
    <div className='portfolio'>
        <div className='portfolio__head'>
            <p className='portfolio__head-title'>Portfolio</p>
            <ul className='portfolio__head-timelist'>
                <li className='portfolio__head-timeitem'>1H</li>
                <li className='portfolio__head-timeitem'>1D</li>
                <li className='portfolio__head-timeitem'>1M</li>
                <li className='portfolio__head-timeitem'>1Y</li>
                <li className='portfolio__head-timeitem'>ALL</li>
            </ul>
        </div>

        <div className='portfolio__price'>
            <p className=''>$342,543.93</p>
            <p>
                +$12,693.60 <span>Last 30 days</span>
            </p>
        </div>

        <div className='graph'>
            <div className='graph__gridbase'>
                <img src={images.GridBase} alt='gridbase' />
                <div className='graph__path'>
                    <img
                        className='graph__path-0'
                        src={images.Path0}
                        alt='path0'
                    />
                    <img
                        className='graph__path-1'
                        src={images.Path1}
                        alt='path1'
                    />
                    <img
                        className='graph__path-2'
                        src={images.Path2}
                        alt='path2'
                    />
                    <img
                        className='graph__path-3'
                        src={images.Path3}
                        alt='path3'
                    />
                </div>
            </div>
        </div>

        <div className='portfolio__bottom'>
            <ul className='portfolio__bottom-listtime'>
                <li className='portfolio__bottom-listtime_item'>10:59PM</li>
                <li className='portfolio__bottom-listtime_item'>11:59PM</li>
                <li className='portfolio__bottom-listtime_item'>12:59AM</li>
                <li className='portfolio__bottom-listtime_item'>1:59AM</li>
                <li className='portfolio__bottom-listtime_item'>2:59AM</li>
                <li className='portfolio__bottom-listtime_item'>3:59AM</li>
                <li className='portfolio__bottom-listtime_item'>4:59AM</li>
                <li className='portfolio__bottom-listtime_item'>5:59AM</li>
                <li className='portfolio__bottom-listtime_item'>6:59AM</li>
                <li className='portfolio__bottom-listtime_item'>7:59AM</li>
            </ul>
        </div>
    </div>
);

export default Portfolio;
