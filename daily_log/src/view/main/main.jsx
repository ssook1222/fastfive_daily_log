import React, {useCallback, useEffect, useState} from "react";
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
                <h1 id="main-title">패스트파이브 근처 식당 PICK</h1>
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