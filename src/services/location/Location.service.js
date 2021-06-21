import { locations } from "./Location.mock";
import camelize from "camelize";

export const locationRequest = (searchKey) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchKey];

    if (!locationMock) {
      reject("Location not found");
    }
    resolve(locationMock);
  });
};

export const locationTransformData = ({ results }) => {
  const { geometry = {} } = camelize(results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
