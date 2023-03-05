import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';

import Grid2 from "@mui/material/Unstable_Grid2";
import {Button, Card} from "@mui/material";

import totalData from "../../data/totalData.json"
import data from "../../data/topData.json";

function OtherList() {

    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);
    const pageNumber = [];
    for (let i = 1; i < Math.ceil(data.list?.length / 3); i++) {
        pageNumber.push(i);
    }
    useEffect(() => {
        setStart((page - 1) * 3);
        setEnd(page * 3);
    }, [page]);

    let id = useLocation().state.data.id;
    const newList = totalData.list.filter((data) => data.id !== id)

    return (
        <Grid2 container spacing={3} id="main-item-list">
                            <>
                                {newList?.slice(start,end).map((contents) =>(
                                <Grid2 item xs={12} sm={4} md={4}>
                                    {
                                        contents.id!==id &&
                                        <Card className="back_list" style={{display: 'inline-block', width:"100%"}}>
                                            <img className="list_image" src={contents.url}></img>
                                            <h2 className="list_card_title">{contents.name}</h2>
                                        </Card>
                                    }
                                </Grid2>
                                ))}
                                <nav style={{ listStyleType: "none", display: "flex", width:"100%", marginBottom:"3%" }}>
                                <div className={"list"} style={{ listStyleType: "none", display: "flex" }}>
                                {pageNumber.map((num) => (
                                  <li key={num} onClick={() => setPage(num)} style={{marginLeft:"auto", marginRight:"auto"}}>
                                    <Button style={{marginRight:"20px"}} className={"page_but"} variant={"outlined"} size={"medium"}>{num}</Button>
                                  </li>
                                ))}
                                </div>
                              </nav>
                            </>
        </Grid2>

    )
}

export default OtherList;