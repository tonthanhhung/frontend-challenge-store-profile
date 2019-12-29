const getFullAddress = ({ address, district, city }: AddressInfo) => {
  return `${address}, ${district}, ${city}`;
};
const utils = {
  getFullAddress
};
export default utils;
