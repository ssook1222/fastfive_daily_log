import React from "react";

import OtherList from "./otherList";

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
    let name = useLocation().state.data.name;

    useEffect(()=>{
    const {naver} = window;
    if (!mapElement.current || !naver) return;

    var infowindow = new naver.maps.InfoWindow({
    content: name
    });

    const location = new naver.maps.LatLng(lat, lng);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 25,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    let marker = new naver.maps.Marker({
      position: location,
      map,
    });

    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });

    infowindow.open(map, marker);

    },[]);

    return(
        <div className="box">
            <NavBar></NavBar>
            <div>
                <Card className="detail-list">
                    <h2>{useLocation().state.data.name}</h2>
                    <p>{useLocation().state.data.opinion}</p>
                    <hr />
                    <div ref={mapElement} style={{ minHeight: '400px' }} />
                    <hr />
                    <h3>다른 상위 평가 받은 식당 확인하기</h3>
                    <OtherList></OtherList>
                </Card>
            </div>

            <Footer></Footer>
        </div>

    )
}

export default Detail;