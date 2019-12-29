import * as React from "react";
import StoreDetailPage from "./StoreDetailPage/StoreDetailPage";
import PageHeader from "./PageHeader/PageHeader";
import PageSideBar from "./PageSideBar/PageSideBar";
import { withToastProvider } from "./Toast/Toast";

const App: React.FC<{}> = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <PageHeader />
      <div className="flex flex-1">
        <PageSideBar />
        <StoreDetailPage />
      </div>
    </div>
  );
};

export default withToastProvider(App);
