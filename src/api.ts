import axios from "axios";

const baseURL = "http://localhost:3000";
const axiosInstant = axios.create({
  baseURL
});
export const getStoreById = (id: number) =>
  axiosInstant.get(`/stores/${id}`).then(({ data }: { data: Store }) => data);

export const updateStore = (store: Store) =>
  axiosInstant.put(`/stores/${store.id}`, store);

export const getCities = () =>
  axiosInstant
    .get("/cities")
    .then(({ data: { LtsItem } }: { data: { LtsItem: City[] } }) =>
      LtsItem.filter(city => city.ID !== 64).sort(
        (a, b) => b.TotalDoanhNghiep - a.TotalDoanhNghiep
      )
    );

export const getDistrict = (city: City) =>
  axiosInstant
    .get(`/districts?city=${city.ID}`)
    .then(({ data }: { data: District[] }) =>
      data.filter(data => !data.Title.includes(city.Title))
    );
