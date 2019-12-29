import axios from "axios";

const baseURL = "http://localhost:3000";
const axiosInstant = axios.create({
  baseURL
});

export const apiGetStoreById = (id: number) =>
  axiosInstant.get(`/stores/${id}`).then(({ data }: { data: Store }) => data);

export const apiUpdateStore = (store: Store) =>
  axiosInstant.put(`/stores/${store.id}`, store);

export const apiGetCities = () =>
  axiosInstant
    .get("/cities")
    .then(({ data: { LtsItem } }: { data: { LtsItem: City[] } }) =>
      LtsItem.filter(city => city.ID !== 64).sort(
        (a, b) => b.TotalDoanhNghiep - a.TotalDoanhNghiep
      )
    );

export const apiGetDistrict = (city: City) =>
  axiosInstant
    .get(`/districts?city=${city.ID}`)
    .then(({ data }: { data: District[] }) =>
      data.filter(data => !data.Title.includes(city.Title))
    );

export const apiUploadImg = (file: any) => {
  const requestBody = new FormData();
  requestBody.append("image", file);

  return axiosInstant
    .post("/image-upload", requestBody)
    .then(({ data: link }) => {
      return link;
    });
};
