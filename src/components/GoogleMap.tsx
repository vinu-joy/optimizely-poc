"use client";
import { useState } from "react";
import GoogleMapReact from "google-map-react";

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  latitude,
  longitude,
  zoom = 12.5,
}) => {
  const [state] = useState(0);

  const mapOptions = {
    scaleControl: true,
    fullscreenControl: true,
    minZoom: 5,
    maxZoom: 45,
    mapTypeControl: true,
    zoomControl: true,
    scrollwheel: false,
    gestureHandling: "greedy",
  };

  const onMapLoaded = (p: any) => {
    if (!p || !p.maps) return;
    new p.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: p.map,
    });
  };

  return (
    <div className="w-full h-96">
      <GoogleMapReact
        key={state}
        center={{ lat: latitude, lng: longitude }}
        defaultZoom={zoom}
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY! }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onMapLoaded}
        options={mapOptions}
      />
    </div>
  );
};

export default GoogleMap;
