// Actions

export const citiesActionType = {
  FETCH: "cities/FETCH",
  FETCH_SUCCESS: "cities/FETCH_SUCCESS",
  FETCH_ERROR: "cities/FETCH_ERROR"
};

export const getCitiesRequest = () => ({
  type: citiesActionType.FETCH
});

export const getCitiesSuccess = (payload: any) => ({
  type: citiesActionType.FETCH_SUCCESS,
  payload
});

export default function reducer(state: any = null, action: any) {
  switch (action.type) {
    case citiesActionType.FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
