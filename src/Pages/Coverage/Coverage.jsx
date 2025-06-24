import React, { useState, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
// import districtData from '../data/districts.json';

// Fix Leaflet marker icon paths for React apps
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Component to move map and open popup when district is searched
const FlyToDistrict = ({ location, popupRef }) => {
  const map = useMap();

  if (location) {
    map.flyTo([location.latitude, location.longitude], 10, {
      duration: 1.5
    });

    // Open the popup after flying
    setTimeout(() => {
      if (popupRef.current) {
        popupRef.current.openOn(map);
      }
    }, 1600);
  }

  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const popupRef = useRef(null);
  const districtData = useLoaderData()

  const handleSearch = () => {
    const match = districtData.find((d) =>
      d.district.toLowerCase().includes(search.toLowerCase())
    );
    if (match) {
      setSelectedDistrict(match);
    } else {
      alert('No district matched your search.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const mapCenter = [23.685, 90.3563]; // Center of Bangladesh

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        We are available in 64 districts
      </h1>

      {/* Search Input */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {/* Map */}
      <div className="h-[400px] w-full rounded-lg shadow-lg overflow-hidden">
        <MapContainer center={mapCenter} zoom={7} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {districtData.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
            >
              <Popup
                ref={
                  selectedDistrict?.district === district.district
                    ? popupRef
                    : null
                }
              >
                <div className="text-sm">
                  <h2 className="font-bold">{district.district}</h2>
                  <p><strong>City:</strong> {district.city}</p>
                  <p><strong>Region:</strong> {district.region}</p>
                  <p><strong>Covered:</strong> {district.covered_area.join(', ')}</p>
                  <a
                    href={district.flowchart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Flowchart
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Fly to searched district */}
          {selectedDistrict && (
            <FlyToDistrict location={selectedDistrict} popupRef={popupRef} />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
