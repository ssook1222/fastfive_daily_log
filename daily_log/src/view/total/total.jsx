import React, {useEffect} from "react";
import {useState} from "react";

//import Bar
import NavBar from "../../components/bar";
import Footer from '../../components/footer'

//import MUI
import {Button, Card, CardActionArea, CardContent, Tabs, Typography} from "@mui/material";
import Chip from '@mui/material/Chip';
import Grid2 from '@mui/material/Unstable_Grid2';

//import css
import './total.css'

//import data
import koreanData from '../../data/totalKoreanData.json'
import japaneseData from '../../data/totalJapaneseData.json'
import ItalyData from '../../data/totalItalyData.json'
import vietnamData from '../../data/totalVietnamData.json'
import totalData from '../../data/totalData.json'
import data from "../../data/topData.json";
import {Link} from "react-router-dom";

import * as PropTypes from "prop-types";

import TabTest from "./tab"

function TotalView() {

    // const [choice, setChoice] = useState("전체");
    //
    // const [page, setPage] = useState(1);
    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(6);
    //
    // //total
    // const pageNumber = [];
    // for (let i = 1; i <= Math.ceil(data.list?.length / 6); i++) {
    //     pageNumber.push(i);
    // }
    //
    // //kr
    // const pageNumber_kr = [];
    // for (let i = 1; i <= Math.ceil(koreanData.list?.length / 6); i++) {
    //     pageNumber_kr.push(i);
    // }
    //
    // //jp
    // const pageNumber_jp = [];
    // for (let i = 1; i <= Math.ceil(japaneseData.list?.length / 6); i++) {
    //     pageNumber_jp.push(i);
    // }
    //
    // //italy
    // const pageNumber_italy = [];
    // for (let i = 1; i <= Math.ceil(ItalyData.list?.length / 6); i++) {
    //     pageNumber_italy.push(i);
    // }
    //
    // //vt
    // const pageNumber_vt = [];
    // for (let i = 1; i <= Math.ceil(vietnamData.list?.length / 6); i++) {
    //     pageNumber_vt.push(i);
    // }
    //
    // useEffect(() => {
    //     setStart((page - 1) * 6);
    //     setEnd(page * 6);
    // }, [page]);
    //
    // const handleClick = (e) => {
    //     const userChoice = e.currentTarget.id;
    //     setChoice(userChoice);
    // };

    return (
        <div className="total-background">
            <div className="total-layout">
                <NavBar></NavBar>
                <h1 id="total-title">회사 근처 식당</h1>
                <h3 id="sub-title">광화문역과 시청역 중심 식당들만 있습니다.</h3>

                <TabTest></TabTest>


                <Footer></Footer>
            </div>
        </div>
    );
}

export default TotalView;