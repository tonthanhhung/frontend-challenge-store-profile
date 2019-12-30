import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import StoreDetailPage from "./StoreDetailPage";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import storeReducer from "../../redux/store";
import { withToastProvider } from "../Toast/Toast";

describe("StoreDetailPage Test Suite", () => {
  it("Store modal could be open", () => {
    const StoreDetailPageWithToast = withToastProvider(StoreDetailPage);
    const { getByTestId } = renderWithRedux(<StoreDetailPageWithToast />);
    const editProfileBtn = getByTestId("editProfileBtn");
    fireEvent.click(editProfileBtn);
    expect(getByTestId("storeEditorModal")).toBeInTheDocument();
  });
});

function renderWithRedux(ui: JSX.Element) {
  const currentStore: Store = {
    id: 1,
    logoUrl: "https://i.imgur.com/GhUL13Z.png",
    name: "K.O.I 1234",
    address: "​521 Hồ Tùng Mậu",
    district: "Huyện Đông Anh",
    city: "Hà Nội",
    phone: "0707 989 2345 213123",
    redInvoice: {
      name: "K.O.I 22 The International Company",
      address: "9682 Wakehurst Avenue Arlington Heights",
      district: "Huyện Đông Anh",
      city: "Hà Nội",
      taxCode: "P77744944"
    }
  };
  const rootReducer = combineReducers({ currentStore: storeReducer });
  const store = createStore(rootReducer, { currentStore });
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
