import React from "react";
import {useLocation} from 'react-router-dom';

import Grid2 from "@mui/material/Unstable_Grid2";
import {Card} from "@mui/material";

import totalData from "../../data/totalData.json"
import koreanData from "../../data/totalKoreanData.json"
import JapanData from "../../data/totalJapaneseData.json"

function OtherList() {
    let name = useLocation().state.data.name;
    let type = useLocation().state.data.type;
    let id = useLocation().state.data.id;

    return (
        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {totalData.list?.map((contents) =>(
                                <Grid2 item xs={4} sm={4} md={4}>
                                    {
                                        contents.id!==id &&
                                        <Card className="back_list" style={{display: 'inline-block'}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                        </Card>
                                    }
                                </Grid2>
                                ))}
                            </>
        </Grid2>

    )
}

export default OtherList;