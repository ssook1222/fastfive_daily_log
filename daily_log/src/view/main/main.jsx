import React, {useState} from "react";
import './main.css';
import NavBar from '../../components/bar';
import Footer from '../../components/footer'

//Card UI
import {Card, CardActionArea, CardContent, Pagination, Typography} from "@mui/material";

//Grid UI
import Grid2 from '@mui/material/Unstable_Grid2';

//Data Import
import data from '../../data/topData.json'

import Paging from "../../components/paging";
import {Link} from "react-router-dom";


// 참고 : https://clolee.tistory.com/127

function Main_view(){

    const [products, setProducts] = useState([]);  // 리스트에 나타낼 아이템들
    const [count, setCount] = useState(30); // 아이템 총 개수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
    const [postPerPage] = useState(6); // 한 페이지에 보여질 아이템 수
    const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
    const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

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
                                        <Link to="/detail" state={{data : contents}}>
                                            <Card className="main_list" style={{display:'inline-block'}}>
                                                <img className="list_image" src={contents.url}></img>
                                                <h2 className="list_card_title">{contents.name}</h2>
                                                <p className="my_opinion">{contents.opinion}</p>
                                            </Card>
                                        </Link>
                                    </Grid2>
                                ))}
                                </>
                        </Grid2>
                    </CardContent>
                    <Paging page={currentPage} count={count} setPage={setCurrentPage}></Paging>
                </Card>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Main_view