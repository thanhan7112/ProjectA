import React from 'react';

import './Notify.css';

const Notify = ({status, action, time}) => (
    <div className='notify'>
        <div className='notify__activity'>
            <p className='notify__activity-status'>{status}</p>
            <p className='notify__activity-action'>{action}</p>
            <p className='notify__activity-time'>{time}</p>
        </div>
    </div>
);

export default Notify;
