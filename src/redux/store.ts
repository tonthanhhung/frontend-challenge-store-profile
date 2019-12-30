import { AnyAction } from "redux";

export const storeActionType = {
  FETCH: "store/FETCH",
  FETCH_SUCCESS: "store/FETCH_SUCCESS",
  PUT: "store/PUT"
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
  action: AnyAction
): Store | null {
  switch (action.type) {
    case storeActionType.FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
