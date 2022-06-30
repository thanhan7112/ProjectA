import React from 'react';

import './APY.css';

const APY = ({index, src, text}) => (
    
        <div className='APY'>
            <p className='APY__index'>{index}</p>
            <img src={src} alt='SPY-img' />
            <p className='APY__text'>{text}</p>
        </div>
    
);

export default APY;
