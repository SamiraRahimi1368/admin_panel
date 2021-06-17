import React from 'react';
import   './topbar.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">lammadamin</span>
                </div>
                <div className="topright">
                    <div className="topbarIcons">
                        <NotificationsNoneIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
