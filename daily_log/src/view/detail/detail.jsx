import React from "react";

//import Bar
import NavBar from "../../components/bar";
import Footer from '../../components/footer'

import {useLocation} from 'react-router-dom';

function Detail() {
    //데이터 가져옴.
    console.log(useLocation().state.data)
    return(
        <div>
            <NavBar></NavBar>
            <Footer></Footer>
        </div>

    )
}

export default Detail;