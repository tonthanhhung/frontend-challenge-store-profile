// Actions
const FETCH = "cities/FETCH";
const FETCH_SUCCESS = "cities/FETCH_SUCCESS";

//Action creator
export const getCities = () => ({
  type: FETCH
});

export const getCitiesSuccess = (payload: any) => ({
  type: FETCH_SUCCESS,
  payload
});

export default function address(state = "DefaultState", action: any) {
  return state;
}
