import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import ReactSearchBox from "react-search-box";

import './start.css'
import data from '../../data/totalData.json'

import {useState} from "react";
import {Button} from "@mui/material";

export default function CustomizedInputBase() {

  const [search, setSearch] = useState('');

  const onChange = (value) => {
      if(value === "덕수궁 부대찌개" || value === "조조칼국수"){
          console.log(value)
          setSearch(value)
      }
  }

  return (
    <div style={{display:"flex", alignItems: "center", height:"100%", flexWrap: "wrap", justifyContent: "center"}}>
        <h1 style={{ position: "fixed", marginTop:"-100px"}} id="main-title" >식당-일지</h1>
        <Paper
          component="form"
          style={{marginRight:"auto", marginLeft:"auto", marginTop:"150px", position: "fixed", backgroundColor:'none'}}

          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%" }}
        >
        <div style={{margin:"auto", display:"block", width:"100%"}}>
              <ReactSearchBox
                  placeholder=" 음식점을 입력해주세요."
                  data={data.list}
                  callback={record => console.log(record)}
                  onFocus={() => {
                    console.log('This function is called when is focussed')
                  }}
                  onChange={onChange}
                  fuseConfigs={{
                      threshold: 0.05,
                  }}
                  leftIcon={'🔎'}
                  value=""
              />
              <Button style={{display:"inline-block"}}>Search</Button>
          </div>
        </Paper>

        <div style={{width: "100%", textAlign: 'center', marginTop: "300px",position:"fixed"}}>
            <a href="./top" style={{width: "30%", textDecorationLine: 'none', display: 'inline-block' }}>
                    <h3 className="link-it" style={{color: "gray", fontSize: '15px'}}>추천 음식점 </h3>
            </a>
            | <div style={{display: 'inline-block'}}></div>
            <a href="./total" style={{width: "30%", textDecorationLine: 'none', display: 'inline-block'}}>
                    <h3 className="link-it" style={{color: "gray", fontSize: '15px'}}>전체 음식점 보기</h3>
            </a>
        </div>

    </div>
  );
}