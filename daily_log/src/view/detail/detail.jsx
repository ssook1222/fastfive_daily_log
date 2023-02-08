import React from "react";

//import Bar
import NavBar from "../../components/bar";
import Footer from '../../components/footer'

//import useLocation
import {useLocation} from 'react-router-dom';

//Card UI
import {Card, CardActionArea, CardContent, Pagination, Typography} from "@mui/material";

//import CSS
import "./detail.css";

function Detail() {
    //데이터 가져옴.
    console.log(useLocation().state.data)
    return(
        <div className="box">
            <NavBar></NavBar>
            <div>
                <Card className="detail-list">
                    <h2>{useLocation().state.data.name}</h2>
                    <hr />
                    <p>{useLocation().state.data.opinion}</p>
                </Card>
            </div>

            <Footer></Footer>
        </div>

    )
}

export default Detail;