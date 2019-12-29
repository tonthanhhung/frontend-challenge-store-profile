import React, { useEffect, useState } from "react";
import StoreDetail from "../StoreDetail/StoreDetail";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import BoxInfo from "../BoxInfo/BoxInfo";
import InputWithEnability from "../InputWithEnability/InputWithEnability";
import Button from "../Button/Button";
import StoreEditorModal from "../StoreEditorModal/StoreEditorModal";
import { useToast } from "../Toast/Toast";
import { connect, ConnectedProps } from "react-redux";
import { getStore, putStore } from "../../redux/store";
import { RootState } from "../../redux";

const connector = connect(
  (state: RootState) => ({
    currentStore: state.currentStore
  }),
  {
    getStore,
    putStore
  }
);

type Props = ConnectedProps<typeof connector> & {};

const StoreDetailPage: React.FC<Props> = ({
  currentStore,
  getStore,
  putStore
}) => {
  const [storeEditorModalOpen, setStoreEditorModalOpen] = useState(false);
  const { add: addToast } = useToast();
  useEffect(() => {
    getStore(1);
  }, []);

  function onStoreUpdate(store: Store) {
    if (store) {
      putStore({
        store,
        meta: {
          onSuccess: () => {
            setStoreEditorModalOpen(false);
          },
          onError: (error: string) => {
            addToast(error);
          }
        }
      });
    }
  }

  return (
    <div className="flex flex-col flex-1 ">
      <div className="bg-gray-100 px-4 md:px-10 py-10 flex-1">
        <p className="text-xl font-normal text-green-600 py-2">
          Store Information
        </p>
        <span className="w-10 h-px inline-block bg-green-600 border-t-2 border-green-600" />
        <div className="flex pt-5 justify-center md:justify-start items-start flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-4/12 sm:pr-2 mb-4 sm:mb-0">
            {currentStore && (
              <StoreDetail
                store={currentStore}
                onEditProfileClick={() => setStoreEditorModalOpen(true)}
              />
            )}
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-8/12 sm:pl-2 mb-4 sm:mb-0">
            <BoxInfo>
              <SectionHeadline>Delivery default message</SectionHeadline>
              <div>
                <InputWithEnability
                  onChange={() => {}}
                  value='Paul Rand once said, "The public is more familiar with bad fucking design than good design"'
                />
                <InputWithEnability onChange={() => {}} value="" />
                <InputWithEnability onChange={() => {}} value="" />
                <Button>Update</Button>
              </div>
            </BoxInfo>
          </div>
        </div>
      </div>
      {currentStore && (
        <StoreEditorModal
          open={storeEditorModalOpen}
          defaultStore={currentStore}
          onStoreUpdate={onStoreUpdate}
          onModalClose={() => setStoreEditorModalOpen(false)}
        />
      )}
    </div>
  );
};

export default connector(StoreDetailPage);
