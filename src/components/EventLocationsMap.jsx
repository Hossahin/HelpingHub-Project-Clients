import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon issue in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 64 District Coordinates (Lat, Lng)
const districts = [
  { name: "Bagerhat", lat: 22.6516, lng: 89.7859 },
  { name: "Bandarban", lat: 22.1953, lng: 92.2184 },
  { name: "Barguna", lat: 22.1592, lng: 90.1266 },
  { name: "Barisal", lat: 22.7010, lng: 90.3535 },
  { name: "Bhola", lat: 22.6859, lng: 90.6483 },
  { name: "Bogra", lat: 24.8481, lng: 89.3720 },
  { name: "Brahmanbaria", lat: 23.9571, lng: 91.1119 },
  { name: "Chandpur", lat: 23.2333, lng: 90.6667 },
  { name: "Chapai Nawabganj", lat: 24.5965, lng: 88.2776 },
  { name: "Chattogram", lat: 22.3569, lng: 91.7832 },
  { name: "Chuadanga", lat: 23.6400, lng: 88.8413 },
  { name: "Cox’s Bazar", lat: 21.4272, lng: 92.0058 },
  { name: "Cumilla", lat: 23.4576, lng: 91.1809 },
  { name: "Dhaka", lat: 23.8103, lng: 90.4125 },
  { name: "Dinajpur", lat: 25.6276, lng: 88.6332 },
  { name: "Faridpur", lat: 23.6070, lng: 89.8429 },
  { name: "Feni", lat: 23.0159, lng: 91.3976 },
  { name: "Gaibandha", lat: 25.3288, lng: 89.5283 },
  { name: "Gazipur", lat: 24.0023, lng: 90.4266 },
  { name: "Gopalganj", lat: 23.0056, lng: 89.8266 },
  { name: "Habiganj", lat: 24.3745, lng: 91.4155 },
  { name: "Jamalpur", lat: 24.9375, lng: 89.9370 },
  { name: "Jashore", lat: 23.1664, lng: 89.2081 },
  { name: "Jhalokathi", lat: 22.6406, lng: 90.1987 },
  { name: "Jhenaidah", lat: 23.5448, lng: 89.1539 },
  { name: "Joypurhat", lat: 25.0947, lng: 89.0938 },
  { name: "Khagrachari", lat: 23.1193, lng: 91.9847 },
  { name: "Khulna", lat: 22.8456, lng: 89.5403 },
  { name: "Kishoreganj", lat: 24.4449, lng: 90.7766 },
  { name: "Kurigram", lat: 25.8072, lng: 89.6295 },
  { name: "Kushtia", lat: 23.9013, lng: 89.1209 },
  { name: "Lakshmipur", lat: 22.9446, lng: 90.8300 },
  { name: "Lalmonirhat", lat: 25.9923, lng: 89.2847 },
  { name: "Madaripur", lat: 23.1641, lng: 90.1890 },
  { name: "Magura", lat: 23.4873, lng: 89.4197 },
  { name: "Manikganj", lat: 23.8644, lng: 90.0047 },
  { name: "Meherpur", lat: 23.7622, lng: 88.6318 },
  { name: "Moulvibazar", lat: 24.4829, lng: 91.7774 },
  { name: "Munshiganj", lat: 23.5422, lng: 90.5305 },
  { name: "Mymensingh", lat: 24.7471, lng: 90.4203 },
  { name: "Naogaon", lat: 24.8030, lng: 88.9318 },
  { name: "Narail", lat: 23.1725, lng: 89.5126 },
  { name: "Narayanganj", lat: 23.6238, lng: 90.5000 },
  { name: "Narsingdi", lat: 23.9322, lng: 90.7150 },
  { name: "Natore", lat: 24.4206, lng: 89.0003 },
  { name: "Netrokona", lat: 24.8709, lng: 90.7279 },
  { name: "Nilphamari", lat: 25.9310, lng: 88.8560 },
  { name: "Noakhali", lat: 22.8696, lng: 91.0990 },
  { name: "Pabna", lat: 24.0064, lng: 89.2372 },
  { name: "Panchagarh", lat: 26.3411, lng: 88.5542 },
  { name: "Patuakhali", lat: 22.3596, lng: 90.3296 },
  { name: "Pirojpur", lat: 22.5841, lng: 89.9720 },
  { name: "Rajbari", lat: 23.7573, lng: 89.6440 },
  { name: "Rajshahi", lat: 24.3636, lng: 88.6241 },
  { name: "Rangamati", lat: 22.7324, lng: 92.2985 },
  { name: "Rangpur", lat: 25.7439, lng: 89.2752 },
  { name: "Satkhira", lat: 22.7185, lng: 89.0706 },
  { name: "Shariatpur", lat: 23.2423, lng: 90.4348 },
  { name: "Sherpur", lat: 25.0205, lng: 90.0153 },
  { name: "Sirajganj", lat: 24.4575, lng: 89.7085 },
  { name: "Sunamganj", lat: 25.0658, lng: 91.3950 },
  { name: "Sylhet", lat: 24.8949, lng: 91.8687 },
  { name: "Tangail", lat: 24.2513, lng: 89.9167 },
  { name: "Thakurgaon", lat: 26.0336, lng: 88.4698 },
];

const EventLocationsMap = () => {
  return (
    <section className="py-12 px-4  mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Map of Event Locations
      </h2>

      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        style={{ height: "500px", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {districts.map((district, i) => (
          <Marker key={i} position={[district.lat, district.lng]}>
            <Popup>
              <strong>{district.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default EventLocationsMap;

