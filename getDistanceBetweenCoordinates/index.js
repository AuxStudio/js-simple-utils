import convertDegreesToRadians from "./convertDegreesToRadians";

// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula (https://stackoverflow.com/users/1921/chuck)
const getDistanceBetweenCoordinates = (setA, setB) => {
  const R = 6371; // Radius of the earth in km
  const dLat = convertDegreesToRadians(setB.lat - setA.lat);
  const dLon = convertDegreesToRadians(setB.lng - setA.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(convertDegreesToRadians(setA.lat)) *
      Math.cos(convertDegreesToRadians(setB.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km

  return d;
};

export default getDistanceBetweenCoordinates;
