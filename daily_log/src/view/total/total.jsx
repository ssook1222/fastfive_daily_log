import React from "react";
import {useState} from "react";

//import MUI
import NavBar from "../../components/bar";
import {Card, CardActionArea, CardContent,Typography} from "@mui/material";
import Chip from '@mui/material/Chip';
import Grid2 from '@mui/material/Unstable_Grid2';

//import css
import './total.css'

//import data
import koreanData from '../../totalKoreanData.json'
import japaneseData from '../../totalJapaneseData.json'
import ItalyData from '../../totalItalyData.json'
import vietnamData from '../../totalVietnamData.json'
import totalData from '../../totalData.json'

function TotalView() {

    const [choice, setChoice] = useState();

    const handleClick = (e) => {
        console.log(e.currentTarget.id);
        const userChoice = e.currentTarget.id;
        setChoice(userChoice);
        console.log(userChoice);
    };

    return (
        <div className="total-background">
            <div className="total-layout">
                <NavBar></NavBar>
                <h1 id="total-title">패스트파이브 근처 식당</h1>
                <Card id="total-back-card">
                    <CardContent>
                        <div className={"user-choice"}>
                            <Chip id="한식" name="한식" label="한식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}} />
                            <Chip id="양식" name="양식" label="양식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                            <Chip id="일식" name="일식" label="일식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                            <Chip id="중식" name="중식" label="중식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                            <Chip id="베트남식" name="베트남식" label="베트남식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                        </div>
                        <hr  style={{marginBottom:"20px"}}/>
                        {/*사용자 선택 안 했을 때 */}
                        {choice===undefined &&
                        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {totalData.list.map((contents) =>(
                                    <Grid2 item xs={4} sm={4} md={4}>
                                        <Card className="back_list" style={{display:'inline-block'}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                            <p className="my_opinion">{contents.opinion}</p>
                                        </Card>
                                    </Grid2>
                                ))}
                            </>
                        </Grid2>
                        }
                        {/*한식 선택 했을 때 */}
                        {choice==="한식" &&
                        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {koreanData.list.map((contents) =>(
                                <Grid2 item xs={4} sm={4} md={4}>
                                    <Card className="back_list" style={{display:'inline-block'}}>
                                        <img className="list_image" src={contents.url}></img>
                                        <h2 className="list_card_title">{contents.name}</h2>
                                        <p className="my_opinion">{contents.opinion}</p>
                                    </Card>
                                </Grid2>
                                ))}
                            </>
                        </Grid2>
                        }
                        {/*일식 선택 했을 때 */}
                        {choice==="일식" &&
                        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {japaneseData.list.map((contents) =>(
                                    <Grid2 item xs={4} sm={4} md={4}>
                                        <Card className="back_list" style={{display:'inline-block'}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                            <p className="my_opinion">{contents.opinion}</p>
                                        </Card>
                                    </Grid2>
                                ))}
                            </>
                        </Grid2>
                        }
                        {/*양식 선택 했을 때 */}
                        {choice==="양식" &&
                        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {ItalyData.list.map((contents) =>(
                                    <Grid2 item xs={4} sm={4} md={4}>
                                        <Card className="back_list" style={{display:'inline-block'}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                            <p className="my_opinion">{contents.opinion}</p>
                                        </Card>
                                    </Grid2>
                                ))}
                            </>
                        </Grid2>
                        }
                        {/*중식 선택했을 때*/}
                        {choice==="중식" &&
                        <p style={{height:"400px", textAlign:"center"}}>제가 중식을 안 좋아합니다... 그래서 안 갔어요...</p>
                        }
                        {/*베트남식 선택했을 때*/}
                        {choice==="베트남식" &&
                        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {vietnamData.list.map((contents) =>(
                                    <Grid2 item xs={4} sm={4} md={4}>
                                        <Card className="back_list" style={{display:'inline-block'}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                            <p className="my_opinion">{contents.opinion}</p>
                                        </Card>
                                    </Grid2>
                                ))}
                            </>
                        </Grid2>
                        }

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default TotalView;