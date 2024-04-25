import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const position = { lat: 61.2176, lng: -149.8997 };

function Maps() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDp0UkMkdwv-Pqg3T6QuTBcFisadgAVRnw">
      <GoogleMap mapContainerStyle={{ height: "200px", width: "350px"}} center={position} zoom={10}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
}

export function Mapa() {
  return (
    
      <Maps/>

  );
}

export default Mapa;
