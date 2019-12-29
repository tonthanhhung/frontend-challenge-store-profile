export const storeActionType = {
  FETCH: "store/FETCH",
  FETCH_SUCCESS: "store/FETCH_SUCCESS",
  PUT: "store/PUT",
  PUT_SUCCESS: "store/PUT_SUCCESS",
  PUT_ERROR: "store/PUT_ERROR"
};

export const getStore = (id: number) => ({
  type: storeActionType.FETCH,
  id
});

export const getStoreSuccess = (payload: Store) => {
  return {
    type: storeActionType.FETCH_SUCCESS,
    payload
  };
};

export const putStore = (payload: {
  store: Store;
  meta: {
    onSuccess: () => void;
    onError: (e: string) => void;
  };
}) => ({
  type: storeActionType.PUT,
  payload
});

export default function reducer(
  state: Store | null = null,
  action: any
): Store | null {
  switch (action.type) {
    case storeActionType.FETCH_SUCCESS:
    case storeActionType.PUT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
