import React from "react";
import './main.css';
import NavBar from '../components/bar';

//Card UI
import {Card, CardActionArea, CardContent,Typography} from "@mui/material";

//Grid UI
import Grid2 from '@mui/material/Unstable_Grid2';

//Data Import
import data from '../topData.json'

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
                        <Grid2 container spacing={3} id="main-item-list">
                                <>{data.list.map((contents) =>(
                                    <Grid2 item xs={4} sm={4} md={4}>
                                        <Card className="main_list" style={{display:'inline-block'}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                            <p className="my_opinion">{contents.opinion}</p>
                                        </Card>
                                    </Grid2>
                                ))}
                                </>
                        </Grid2>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default Main_view