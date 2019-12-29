import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { citiesActionType, getCitiesSuccess } from "./redux/cities";
import { apiGetCities, apiGetStoreById, apiUpdateStore } from "./api";
import { getStore, getStoreSuccess, storeActionType } from "./redux/store";

function* fetchCities() {
  try {
    const data = yield apiGetCities();
    yield put(getCitiesSuccess(data));
  } catch (error) {
    console.error("ERROR| fetchCities, : ", error);
  }
}

function* fetchStore(action: any) {
  try {
    const data = yield apiGetStoreById(action.id);
    yield put(getStoreSuccess(data));
  } catch (error) {
    console.error("ERROR| fetchStore, : ", error);
  }
}

function* updateStore(action: any) {
  const { store, meta } = action.payload;
  try {
    yield apiUpdateStore(store);
    yield put(getStore(store.id));
    yield call(meta.onSuccess);
  } catch (error) {
    console.error("ERROR| updateStore, : ", error.response.data);
    yield call(meta.onError, error.response.data);
  }
}

function* watchFetchCities() {
  yield takeLatest(citiesActionType.FETCH, fetchCities);
}
function* watchFetchStore() {
  yield takeLatest(storeActionType.FETCH, fetchStore);
}
function* watchUpdateStore() {
  yield takeEvery(storeActionType.PUT, updateStore);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchCities),
    fork(watchFetchStore),
    fork(watchUpdateStore)
  ]);
}
