import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import AddressInput from "../AddressInput/AddressInput";

interface Props {
  defaultStore: Store;
  onModalClose: () => void;
  onStoreUpdate: (store: Store) => void;
  open: boolean;
}

const StoreEditorModal: React.FC<Props> = ({
  defaultStore,
  onModalClose,
  onStoreUpdate,
  open
}) => {
  const [store, setStore] = useState<Store>(defaultStore);
  const { name, redInvoice, city, district, phone, address, logoUrl } = store;

  useEffect(() => {
    setStore(defaultStore);
  }, [open]);

  const onStoreChange = ({ name, value }: NameValuePair) => {
    setStore({
      ...store,
      [name]: value
    });
  };

  const onStoreAddressChange = (address: AddressInfo) => {
    setStore({
      ...store,
      ...address
    });
  };

  const onRedInvoiceChange = ({ name, value }: NameValuePair) => {
    setStore({
      ...store,
      redInvoice: {
        ...store.redInvoice,
        [name]: value
      }
    });
  };

  const onRedInvoiceAddressChange = (address: AddressInfo) => {
    setStore({
      ...store,
      redInvoice: {
        ...store.redInvoice,
        ...address
      }
    });
  };

  return (
    <Modal title="Edit Store Profile" open={open}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 inline-block text-left flex flex-col">
          <SectionHeadline>Store Image</SectionHeadline>
          <img
            alt="store-profile-img"
            src={logoUrl}
            className="rounded-lg mb-4 max-w-xs mx-auto w-11/12 sm:w-full"
          />
          <Button className="ml-auto">Upload Image</Button>
        </div>
        <div className="w-full md:w-2/3 flex flex-col text-left pl-0 md:pl-6">
          <SectionHeadline>Basic info</SectionHeadline>
          <Row>
            <Label>Store Name</Label>
            <Input
              value={name}
              name="name"
              onValueChange={onStoreChange}
              placeholder="Store Name"
            />
          </Row>
          <Row>
            <Label>Store Address</Label>
            <AddressInput
              address={{
                address,
                district,
                city
              }}
              onChange={onStoreAddressChange}
            />
          </Row>
          <Row>
            <Label>Phone #</Label>
            <Input value={phone} name="phone" onValueChange={onStoreChange} />
          </Row>
          <Row>
            <SectionHeadline>Red Invoice</SectionHeadline>
          </Row>
          <Row>
            <Label>Company Name</Label>
            <Input
              value={redInvoice.name}
              placeholder="Company Name"
              name="name"
              onValueChange={onRedInvoiceChange}
            />
          </Row>
          <Row>
            <Label>Company Address</Label>
            <AddressInput
              address={{
                address: redInvoice.address,
                district: redInvoice.district,
                city: redInvoice.city
              }}
              onChange={onRedInvoiceAddressChange}
            />
          </Row>
          <Row>
            <Label>MST</Label>
            <Input
              value={redInvoice.taxCode}
              name="taxCode"
              onValueChange={onRedInvoiceChange}
            />
          </Row>
          <Row>
            <Button
              default
              className="w-full"
              onClick={() => onStoreUpdate(store)}
            >
              Save
            </Button>
          </Row>
          <Row>
            <Button className="w-full" onClick={onModalClose}>
              Cancel
            </Button>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

const Row: React.FC<{}> = ({ children }) => (
  <div className="mb-2">{children}</div>
);

export default StoreEditorModal;
