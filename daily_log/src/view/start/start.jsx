import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <div style={{display:"flex", alignItems: "center", height:"100%"}}>
        <Paper
          component="form"
          style={{margin:"auto"}}
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%" }}
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
    </div>
  );
}