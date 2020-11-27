import React from 'react';

import './LeftBarRow.css';

function LeftBarRow({Icon, title}) {
    return (
        <div className={'leftbarrow ${selected && "selected"}'}>
            <Icon className="leftbarIcon"/>
            <h2 className="leftbarTitle">{title}</h2>
        </div>
    )
}

export default LeftBarRow 
