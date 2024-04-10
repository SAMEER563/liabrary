"use client";
import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react';

function Map() {
    const mapRef = React.useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
                version: "weekly"
            });

            // Load Google Maps library
            const { google } = await loader.load();

            // Initialize map options
            const position = { lat: 37.7749, lng: -122.4194 };
            const mapOptions = {
                zoom: 17,
                mapId: "MY_NEXTJS_MAPID"
            };

            // Create map instance
            const map = new Map(mapRef.current, mapOptions);

            // Add marker to the map
            new google.maps.Marker({
                position: position,
                map: map,
                title: "My NextJS Map"
            });
        };

        // Call the initialization function
        initMap();
    }, []); // Empty dependency array indicates that this effect runs only once after the component mounts

    return (
        <div style={{ height: '600px' }} ref={mapRef} />
    );
}

export default Map;
