import React from 'react';
import   './topbar.css'

import { NotificationsNone as NotificationsNoneIcon,Language,Settings} from '@material-ui/icons';
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">lammadamin</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        
                    </div>
                    <img src = "https://www.lifewire.com/thmb/LdUxE_d7gayEvXZ714s8mnl4OwY=/1301x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
