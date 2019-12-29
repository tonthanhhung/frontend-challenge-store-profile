import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { connect, ConnectedProps } from "react-redux";
import { getCitiesRequest } from "../../redux/cities";
import { apiGetDistrict } from "../../api";
import { RootState } from "../../redux";

const connector = connect(
  (state: RootState) => ({
    cities: state.cities
  }),
  { getCitiesRequest }
);
type Props = ConnectedProps<typeof connector> & {
  onChange: (address: AddressInfo) => void;
  address: AddressInfo;
};

const AddressInput: React.FC<Props> = ({
  onChange,
  address,
  getCitiesRequest,
  cities
}) => {
  const [districts, setDistricts] = useState<District[] | null>(null);

  useEffect(() => {
    if (!cities) {
      getCitiesRequest();
    }
  }, []);
  useEffect(() => {
    const selectedCity = cities && cities.find(c => c.Title === address.city);
    if (selectedCity) {
      apiGetDistrict(selectedCity).then(setDistricts);
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
        {districts ? (
          districts.map(d => (
            <option key={d.Title} value={d.Title}>
              {d.Title}
            </option>
          ))
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
        {cities ? (
          cities.map(city => (
            <option key={city.Title} value={city.Title}>
              {city.Title}
            </option>
          ))
        ) : (
          <option value={address.city}>{address.city}</option>
        )}
      </Select>
    </div>
  );
};

export default connector(AddressInput);
