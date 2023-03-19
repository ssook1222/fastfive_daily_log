import React from "react";
import './main.css';
import NavBar from '../../components/bar';
import Footer from '../../components/footer'

//Card UI
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

//Import List
import Paging from "./main_list";


function Main_view(){

    return(
        <div className="main-background">
            <div className="main-layout">
                <NavBar></NavBar>
                <h1 id="main-title">PICK! 회사 근처 맛집</h1>
                <h3 id="sub-title">광화문역과 시청역 중심 식당들만 있습니다.</h3>
                <Card id="main-card">
                    <CardContent>
                        <p id="card-top-guide">
                            재방문 여부에서 '상' 평가만 받은 음식점들입니다.
                        </p>
                        <hr />
                        <Paging></Paging>
                    </CardContent>
                </Card>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Main_view