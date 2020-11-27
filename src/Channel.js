import React from 'react';
import './Channel.css';
import {Avatar} from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function Channel({image, channel, subs, noOfVideos, description, verified}) {
    return (
        <div className="channel">
            <Avatar className="channelLogo"
            alt={channel} src={image}/>
            <div className="channelText">
                <h4>{channel} {verified && <VerifiedIcon/>}</h4>
                <p>{subs} subscribers • {noOfVideos} Videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Channel
