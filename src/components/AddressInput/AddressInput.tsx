import React, { useEffect, useState } from "react";
import { getCities, getDistrict } from "../../api";
import Input from "../Input/Input";
import Select from "../Select/Select";

interface Props {
  onChange: (address: AddressInfo) => void;
  address: AddressInfo;
}

const AddressInput: React.FC<Props> = ({ onChange, address }) => {
  const [districts, setDistricts] = useState<District[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  useEffect(() => {
    getCities().then(setCities);
  }, []);
  useEffect(() => {
    const selectedCity = cities.find(c => c.Title === address.city);
    if (selectedCity) {
      getDistrict(selectedCity).then(setDistricts);
    } else {
      setDistricts([]);
    }
  }, [address.city, cities]);

  const onFieldChange = ({ name, value }: NameValuePair) => {
    onChange({ ...address, [name]: value });
  };

  const onCityChange = (p: NameValuePair) => {
    const { value } = p;
    onChange({
      ...address,
      city: value,
      district: ""
    });
  };
  return (
    <div className="flex flex-col md:flex-row justify-between ">
      <Input
        className="mr-2 mb-2 md:mb-0 w-full md:w-5/12"
        placeholder="Address"
        name="address"
        onValueChange={onFieldChange}
        value={address.address}
      />
      <Select
        optional
        placeholder="District"
        value={address.district}
        name="district"
        onValueChange={onFieldChange}
        className="mr-2 mb-2 md:mb-0 w-full md:w-4/12"
      >
        {districts.length ? (
          districts.map(d => <option value={d.Title}>{d.Title}</option>)
        ) : (
          <option value={address.district}>{address.district}</option>
        )}
      </Select>
      <Select
        optional
        placeholder="City"
        value={address.city}
        name="city"
        onValueChange={onCityChange}
        className="md:w-3/12"
      >
        {cities.length ? (
          cities.map(city => <option value={city.Title}>{city.Title}</option>)
        ) : (
          <option value={address.city}>{address.city}</option>
        )}
      </Select>
    </div>
  );
};

export default AddressInput;
