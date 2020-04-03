export default function getDistanceFromLatLonInKm(position1, position2) {
   const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
   };
   const R = 6371;
   const dLat = deg2rad(position2.lat - position1.lat);
   const dLng = deg2rad(position2.lng - position1.lng);

   const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(position1.lat)) *
         Math.cos(deg2rad(position1.lat)) *
         Math.sin(dLng / 2) *
         Math.sin(dLng / 2);

   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

   return (R * c * 1000).toFixed().toString();
}

// var distancia = (getDistanceFromLatLonInKm(
//    {lat: -23.522490, lng: -46.736600},
//    {lat: -23.4446654, lng: -46.5319316}
// ));
