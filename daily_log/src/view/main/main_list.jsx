import React from 'react';

//Data Import
import data from '../../data/topData.json'
import {Link} from "react-router-dom";
import {Card} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const ComplexList = () => (
  <Grid2 container spacing={3} id="main-item-list">
    {data.list.map(item => (
      // <li key={item.id}>
        <Grid2 item xs={4} sm={4} md={4}>
            <Link to="/detail" state={{data : item}}>
                <Card className="main_list" style={{display:'inline-block'}}>
                    <img className="list_image" src={item.url}></img>
                    <h2 className="list_card_title">{item.name}</h2>
                    <p className="my_opinion">{item.opinion}</p>
                </Card>
            </Link>
        </Grid2>
      // </li>
    ))}
  </Grid2>
);

export default ComplexList;