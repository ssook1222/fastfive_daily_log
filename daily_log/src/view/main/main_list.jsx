import React, {useEffect, useState} from "react";
import './main_list.css';

import data from '../../data/topData.json'
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import {Button, Card} from "@mui/material";

export const Paging = () => {
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

  return (

     <>
       <Grid2 container spacing={3} id="main-item-list">
              <>{data.list?.slice(start, end).map((contents) =>(
                  <Grid2 item xs={4} sm={4} md={4}>
                           <Link to="/detail" state={{data : contents}}>
                                <Card className="main_list" style={{display:'inline-block'}}>
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
  );
};

export default Paging;