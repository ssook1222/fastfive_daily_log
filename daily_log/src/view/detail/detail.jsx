import React from "react";

//import Bar
import NavBar from "../../components/bar";
import Footer from '../../components/footer'

//import useLocation
import {useLocation} from 'react-router-dom';
import {useEffect, useRef} from 'react'

//Card UI
import {Card} from "@mui/material";

//import CSS
import "./detail.css";

function Detail() {

    const mapElement = useRef(null);
    let lat = useLocation().state.data.lat;
    let lng = useLocation().state.data.lng;

    useEffect(()=>{
        const {naver} = window;
        if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(lat, lng);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 20,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });

    },[]);

    return(
        <div className="box">
            <NavBar></NavBar>
            <div>
                <Card className="detail-list">
                    <h2>{useLocation().state.data.name}</h2>
                    <hr />
                    <div ref={mapElement} style={{ minHeight: '400px' }} />
                    <p>{useLocation().state.data.opinion}</p>
                </Card>
            </div>

            <Footer></Footer>
        </div>

    )
}

export default Detail;