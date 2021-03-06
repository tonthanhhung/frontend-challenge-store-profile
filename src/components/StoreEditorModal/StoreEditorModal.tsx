import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import AddressInput from "../AddressInput/AddressInput";
import { useToast } from "../Toast/Toast";
import { apiUploadImg } from "../../api";
import { FaPencilAlt } from "react-icons/fa";
import cx from "classnames";

const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
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
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [store, setStore] = useState<Store>(defaultStore);
  const { name, redInvoice, city, district, phone, address, logoUrl } = store;
  const [profileImageUploading, setProfileImageUploading] = useState(false);
  const { add: addToast } = useToast();

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

  const onSaveClick = () => {
    setErrorFields([]);
    if (!phoneRegex.test(store.phone)) {
      addToast("Phone number is invalid");
      setErrorFields(["phone"]);
      return;
    }
    onStoreUpdate(store);
  };

  const onUploadProfileImg = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      setProfileImageUploading(true);
      apiUploadImg(e.currentTarget.files[0])
        .then(logoUrl => {
          setProfileImageUploading(false);
          setStore({
            ...store,
            logoUrl
          });
        })
        .catch(e => {
          console.error("ERROR| Error while uploading profile image, : ", e);
          addToast("Error while uploading profile image");
        });
    }
  };

  const onRemoveProfileImageClick = () => {
    setStore({ ...store, logoUrl: defaultStore.logoUrl });
  };

  return (
    <Modal
      title={
        <>
          <FaPencilAlt className="mr-4 text-lg text-green-600" />
          Edit Store Profile
        </>
      }
      open={open}
    >
      <div className="flex flex-col md:flex-row" data-testid="storeEditorModal">
        <div className="w-full md:w-1/3 inline-block text-left flex flex-col">
          <SectionHeadline>Store Image</SectionHeadline>
          <img
            src={logoUrl}
            className="rounded-lg mb-4 max-w-xs mx-auto w-11/12 sm:w-full object-fill"
          />
          <div className="flex justify-end items-center ">
            <span
              title="Reset to original profile image"
              onClick={onRemoveProfileImageClick}
              className="mr-4 cursor-pointer text-gray-600"
            >
              Remove
            </span>
            <label
              className={cx(
                "fileUploader bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded text-sm text-gray-800 hover:text-gray-800",
                { "pointer-events-none": profileImageUploading }
              )}
            >
              <input
                type="file"
                onChange={onUploadProfileImg}
                disabled={profileImageUploading}
              />
              {profileImageUploading ? "Uploading..." : "Upload Image"}
            </label>
          </div>
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
            <Input
              value={phone}
              name="phone"
              onValueChange={onStoreChange}
              invalid={errorFields.includes("phone")}
            />
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
            <Button default className="w-full" onClick={onSaveClick}>
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
  <div className="my-1">{children}</div>
);

export default StoreEditorModal;
