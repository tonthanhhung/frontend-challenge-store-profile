import React from "react";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import Button from "../Button/Button";
import BoxInfo from "../BoxInfo/BoxInfo";
import Label from "../Label/Label";
import utils from "../../common/utils.js";

interface Props {
  store: Store;
  onEditProfileClick: () => void;
}

const StoreDetail: React.FC<Props> = ({ store, onEditProfileClick }) => {
  const { name, logoUrl, phone, redInvoice } = store;
  return (
    <BoxInfo>
      <img
        src={logoUrl}
        alt="store-profile-image"
        className="w-full max-w-xs mx-auto  rounded mb-3"
      />
      <SectionHeadline>Store info.</SectionHeadline>
      <Info label="Name" value={name} />
      <Info label="Address" value={utils.getFullAddress(store)} />
      <Info label="Phone #" value={phone} />
      <SectionHeadline>Red invoice info.</SectionHeadline>
      <Info label="Company Name" value={redInvoice.name} />
      <Info label="Address" value={utils.getFullAddress(redInvoice)} />
      <Info label="MST" value={redInvoice.taxCode} />
      <Button onClick={onEditProfileClick}>Edit Profile</Button>
    </BoxInfo>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="text-sm flex flex-wrap mb-3">
    <Label className="w-1/3">{label}:</Label>
    <span className="flex-1">{value}</span>
  </div>
);

export default StoreDetail;
