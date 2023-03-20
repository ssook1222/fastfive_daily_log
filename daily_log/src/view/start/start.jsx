import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";

import { blueGrey } from '@mui/material/colors';

export default function CustomizedInputBase() {

  return (
    <div style={{display:"flex", alignItems: "center", height:"100%", flexWrap: "wrap", justifyContent: "center"}}>
        <h1 id="main-title">식당-일지</h1>
        <Paper
          component="form"
          style={{marginRight:"auto", marginLeft:"auto", marginTop:"-700px", marginBottom:"-500px"}}
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="음식점을 검색하세요."
            inputProps={{ 'aria-label': '음식점을 검색하세요.' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Button style={{width:"45%", textAlign:"center", marginTop:"-3%", background: "white", border: "1px solid grey"}}
                    variant="outlined" component="label" >
                <h3 style={{color: "gray"}}>추천 음식점</h3>
        </Button>
        <Button style={{width:"45%", textAlign:"center", marginTop:"-3%", marginLeft: "1%", background: "white", border: "1px solid grey"}}
                    variant="outlined" component="label">
                <h3 style={{color: "gray"}}>전체 음식점 보기</h3>
        </Button>
    </div>
  );
}