import React from 'react';
import './LeftBar.css';
import LeftBarRow from './LeftBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function LeftBar() {
    return (
        <div className="leftbar">
            <LeftBarRow selected Icon={HomeIcon} title="Home"/>
            <LeftBarRow Icon={WhatshotIcon} title="Trending"/>
            <LeftBarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr />
            <LeftBarRow Icon={VideoLibraryIcon} title="Library"/>
            <LeftBarRow Icon={HistoryIcon} title="History"/>
            <LeftBarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <LeftBarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <LeftBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <LeftBarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>

        </div>
    )
}

export default LeftBar
