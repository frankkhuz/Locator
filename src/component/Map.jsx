import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issues with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const Map = ({ location }) => {
  const mapRef = useRef(null);
  const { lat, lng, city } = location || {};

  useEffect(() => {
    if (lat && lng && mapRef.current) {
      mapRef.current.setView([lat, lng], 13);
    }
  }, [lat, lng]);

  return (
    <div style={{ border: '2px solid black', height: '30rem', position: 'relative', backgroundColor: 'black', marginTop: '-10.5rem' }}>
      {lat && lng && (
        <MapContainer
          center={[lat, lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]}>
            <Popup>{city}</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
