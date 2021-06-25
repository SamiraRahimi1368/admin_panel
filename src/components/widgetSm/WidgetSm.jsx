import React from 'react';
import "./WidgetSm.css";
import {VisibilityRounded } from '@material-ui/icons';

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://picsum.photos/200/300" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">

<VisibilityRounded className="widgetSmIcon"/>
Display
          </button>
          </li>

          <li className="widgetSmListItem">
          <img src="https://picsum.photos/200/300" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
<VisibilityRounded className="widgetSmIcon"/>
Display
          </button>
          </li>
          <li className="widgetSmListItem">
          <img src="https://picsum.photos/200/300" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
<VisibilityRounded className="widgetSmIcon"/>
Display
          </button>
          </li>
          <li className="widgetSmListItem">
          <img src="https://picsum.photos/200/300" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
<VisibilityRounded className="widgetSmIcon"/>
Display
          </button>
          </li>
          <li className="widgetSmListItem">
          <img src="https://picsum.photos/200/300" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
<VisibilityRounded className="widgetSmIcon"/>
Display
          </button>
          </li>

      </ul>
    </div>
  )
}

export default WidgetSm
