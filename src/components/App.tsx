import * as React from "react";
import StoreDetailPage from "./StoreDetailPage/StoreDetailPage";
import PageHeader from "./PageHeader/PageHeader";
import PageSideBar from "./PageSideBar/PageSideBar";
import { withToastProvider } from "./Toast/Toast";
import { connect } from "react-redux";

interface Props {
  address: string;
}
const App:React.FC<Props> = ({ address }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      {address}
      <PageHeader />
      <div className="flex">
        <PageSideBar />
        <StoreDetailPage />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    address: state.address
  };
};

export default connect(mapStateToProps, {})(withToastProvider(App));
