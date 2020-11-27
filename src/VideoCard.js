import React from 'react'
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoThumbnail" src={image} alt=""/>
            <div className="videoInfo">
                <Avatar className="videoAvatar" alt={channel} src={channelImage} />
                <div className="videoText">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>              
            </div>
        </div>
    )
}

export default VideoCard