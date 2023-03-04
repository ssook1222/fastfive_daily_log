import React, {useEffect} from "react";
import {useState} from "react";

//import Bar
import NavBar from "../../components/bar";
import Footer from '../../components/footer'

//import MUI
import {Button, Card, CardActionArea, CardContent, Typography} from "@mui/material";
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

function TotalView() {

    const [choice, setChoice] = useState("전체");

    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(6);
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(data.list?.length / 6); i++) {
        pageNumber.push(i);
    }
    useEffect(() => {
        setStart((page - 1) * 6);
        setEnd(page * 6);
    }, [page]);

    const handleClick = (e) => {
        const userChoice = e.currentTarget.id;
        setChoice(userChoice);
    };

    return (
        <div className="total-background">
            <div className="total-layout">
                <NavBar></NavBar>
                <h1 id="total-title">패스트파이브 근처 식당</h1>
                <Card id="total-back-card">
                    <CardContent>
                        <div className={"user-choice"}>
                            <Chip id="전체" name="전체" label="전체" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}} />
                            <Chip id="한식" name="한식" label="한식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}} />
                            <Chip id="양식" name="양식" label="양식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                            <Chip id="일식" name="일식" label="일식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                            <Chip id="중식" name="중식" label="중식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                            <Chip id="베트남식" name="베트남식" label="베트남식" variant="outlined" onClick={handleClick} style={{marginRight : "10px"}}/>
                        </div>
                        <hr  style={{marginBottom:"20px"}}/>
                        {/*사용자 선택 안 했을 때 && 전체 눌렀을 때 */}
                        {choice==="전체" &&
                        <>
                            <Grid2 container spacing={3} id="main-item-list">
                                <>{totalData.list?.slice(start, end).map((contents) =>(
                                  <Grid2 item xs={11} sm={4} md={4}>
                                           <Link to="/detail" state={{data : contents}}>
                                                <Card className="main_list" style={{display:'inline-block', width:'95%'
                                                                                    , marginLeft: "10px" , height:'100%'}}>
                                                    <img className="list_image" src={contents.url}/>
                                                    <h2 className="list_card_title">{contents.name}</h2>
                                                    <p className="my_opinion">{contents.opinion}</p>
                                                </Card>
                                           </Link>
                                  </Grid2>
                                    ))}
                                </>
                            </Grid2>
                            <nav style={{ listStyleType: "none", display: "flex" }}>
                                    <div className={"list"} style={{ listStyleType: "none", display: "flex" }}>
                                    {pageNumber.map((num) => (
                                      <li key={num} onClick={() => setPage(num)}>
                                        <Button style={{marginRight:"20px"}} className={"page_but"} variant={"outlined"} size={"medium"}>{num}</Button>
                                      </li>
                                    ))}
                                    </div>
                            </nav>
                        </>
                        }
                        {/*한식 선택 했을 때 */}
                        {choice==="한식" &&
                        <>
                            <Grid2 container spacing={3} id="main-item-list">
                                <>{koreanData.list?.slice(start, end).map((contents) =>(
                                  <Grid2 item xs={11} sm={4} md={4}>
                                           <Link to="/detail" state={{data : contents}}>
                                                <Card className="main_list" style={{display:'inline-block', width:'95%'
                                                                                    , marginLeft: "10px" , height:'100%'}}>
                                                    <img className="list_image" src={contents.url}/>
                                                    <h2 className="list_card_title">{contents.name}</h2>
                                                    <p className="my_opinion">{contents.opinion}</p>
                                                </Card>
                                           </Link>
                                  </Grid2>
                                    ))}
                                </>
                            </Grid2>
                            <nav style={{ listStyleType: "none", display: "flex" }}>
                                    <div className={"list"} style={{ listStyleType: "none", display: "flex" }}>
                                    {pageNumber.map((num) => (
                                      <li key={num} onClick={() => setPage(num)}>
                                        <Button style={{marginRight:"20px"}} className={"page_but"} variant={"outlined"} size={"medium"}>{num}</Button>
                                      </li>
                                    ))}
                                    </div>
                            </nav>
                        </>
                        }
                        {/*일식 선택 했을 때 */}
                        {choice==="일식" &&
                        <>
                            <Grid2 container spacing={3} id="main-item-list">
                                <>{japaneseData.list?.slice(start, end).map((contents) =>(
                                  <Grid2 item xs={11} sm={4} md={4}>
                                           <Link to="/detail" state={{data : contents}}>
                                                <Card className="main_list" style={{display:'inline-block', width:'95%'
                                                                                    , marginLeft: "10px" , height:'100%'}}>
                                                    <img className="list_image" src={contents.url}/>
                                                    <h2 className="list_card_title">{contents.name}</h2>
                                                    <p className="my_opinion">{contents.opinion}</p>
                                                </Card>
                                           </Link>
                                  </Grid2>
                                    ))}
                                </>
                            </Grid2>
                            <nav style={{ listStyleType: "none", display: "flex" }}>
                                    <div className={"list"} style={{ listStyleType: "none", display: "flex" }}>
                                    {pageNumber.map((num) => (
                                      <li key={num} onClick={() => setPage(num)}>
                                        <Button style={{marginRight:"20px"}} className={"page_but"} variant={"outlined"} size={"medium"}>{num}</Button>
                                      </li>
                                    ))}
                                    </div>
                            </nav>
                        </>
                        }
                        {/*양식 선택 했을 때 */}
                        {choice==="양식" &&
                        <>
                            <Grid2 container spacing={3} id="main-item-list">
                                <>{ItalyData.list?.slice(start, end).map((contents) =>(
                                  <Grid2 item xs={11} sm={4} md={4}>
                                           <Link to="/detail" state={{data : contents}}>
                                                <Card className="main_list" style={{display:'inline-block', width:'95%'
                                                                                    , marginLeft: "10px" , height:'100%'}}>
                                                    <img className="list_image" src={contents.url}/>
                                                    <h2 className="list_card_title">{contents.name}</h2>
                                                    <p className="my_opinion">{contents.opinion}</p>
                                                </Card>
                                           </Link>
                                  </Grid2>
                                    ))}
                                </>
                            </Grid2>
                            <nav style={{ listStyleType: "none", display: "flex" }}>
                                    <div className={"list"} style={{ listStyleType: "none", display: "flex" }}>
                                    {pageNumber.map((num) => (
                                      <li key={num} onClick={() => setPage(num)}>
                                        <Button style={{marginRight:"20px"}} className={"page_but"} variant={"outlined"} size={"medium"}>{num}</Button>
                                      </li>
                                    ))}
                                    </div>
                            </nav>
                        </>
                        }
                        {/*중식 선택했을 때*/}
                        {choice==="중식" &&
                        <p style={{height:"400px", textAlign:"center"}}>제가 중식을 안 좋아합니다... 그래서 안 갔어요...</p>
                        }
                        {/*베트남식 선택했을 때*/}
                        {choice==="베트남식" &&
                        <>
                            <Grid2 container spacing={3} id="main-item-list">
                                <>{vietnamData.list?.slice(start, end).map((contents) =>(
                                  <Grid2 item xs={11} sm={4} md={4}>
                                           <Link to="/detail" state={{data : contents}}>
                                                <Card className="main_list" style={{display:'inline-block', width:'95%'
                                                                                    , marginLeft: "10px" , height:'100%'}}>
                                                    <img className="list_image" src={contents.url}/>
                                                    <h2 className="list_card_title">{contents.name}</h2>
                                                    <p className="my_opinion">{contents.opinion}</p>
                                                </Card>
                                           </Link>
                                  </Grid2>
                                    ))}
                                </>
                            </Grid2>
                            <nav style={{ listStyleType: "none", display: "flex" }}>
                                    <div className={"list"} style={{ listStyleType: "none", display: "flex" }}>
                                    {pageNumber.map((num) => (
                                      <li key={num} onClick={() => setPage(num)}>
                                        <Button style={{marginRight:"20px"}} className={"page_but"} variant={"outlined"} size={"medium"}>{num}</Button>
                                      </li>
                                    ))}
                                    </div>
                            </nav>
                        </>
                        }

                    </CardContent>
                </Card>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default TotalView;