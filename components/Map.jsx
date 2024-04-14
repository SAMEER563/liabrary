"use client";
import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react'

function Map() {

    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
         const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ,
            version: "weekly"
        });

        const {Map} = await loader.importLibrary("Maps");

    // init marker
    const {Marker} = await loader.importLibrary("Marker");
        const position = {
             lat: 37.7749, 
             lng: -122.4194 };
        }
        
        //map options
        const mapOptions = google.maps.MapOptions = {
            center: position,
            zoom: 17,
            mapId: "MY_NEXTJS_MAPID"
        }

        // setup map
        const map = new Map(mapRef.current, mapOptions);
    

        // setup marker
        const marker = new Marker({
            position: position,
            map: map,
            title: "My NextJS Map"
    });
    initMap();
}, []);

    } [];

    return (
    <div style={{height: '600px'}} ref={mapRef} />

    
    )


export default Map