import React from 'react';
import "./Home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/charts/Chart';
import {userData} from "../../dummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
function Home() {
  return (
    <div className="Home"> 
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
    <WidgetSm/>
      <WidgetLg/>
      
    </div>
    </div>
  )
}

export default Home
