import React from "react";

//import Bar
import NavBar from "../../components/bar";
import Footer from '../../components/footer'

//import css
import './total.css'

import Tab from "./tab"

function TotalView() {

    return (
        <div className="total-background">
            <div className="total-layout">
                <NavBar></NavBar>
                <h1 id="total-title">회사 근처 식당</h1>
                <h3 id="sub-title">광화문역과 시청역 중심 식당들만 있습니다.</h3>

                <Tab></Tab>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default TotalView;