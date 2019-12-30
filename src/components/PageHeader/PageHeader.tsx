import React from "react";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import { FaRegEnvelope, FaShoppingCart, FaTimes } from "react-icons/fa";

interface Props {}

const PageHeader: React.FC<Props> = props => {
  return (
    <div className="h-16 bg-white flex justify-between items-center border-b">
      <span className="text-green-500 font-bold p-4 flex items-center">
        <FaTimes className="mr-8 text-2xl" /> KAMEREO
      </span>
      <div className="ml-auto flex h-full">
        <HeaderMenuItem>
          <FaRegEnvelope className="text-2xl" />
        </HeaderMenuItem>
        <HeaderMenuItem>
          <FaShoppingCart className="text-2xl" />
          <span
            className="relative rounded-full bg-green-500 text-white w-4 h-4 flex justify-center items-center text-xs"
            style={{
              top: "-10px",
              right: "5px"
            }}
          >
            4
          </span>
        </HeaderMenuItem>
        <HeaderMenuItem>Eng</HeaderMenuItem>
        <HeaderMenuItem>
          <div className="flex items-center sm:w-24 lg:w-48">
            <img
              alt="user-profile-img"
              src="https://i.pravatar.cc/300"
              className="w-8 h-8 rounded-full m-0 sm:mr-4"
            />
            <div className="flex-col mr-10 hidden sm:flex ">
              <span className="font-semibold leading-none">Taku Tanaka</span>
              <span className="text-xs text-gray-400">Administrator</span>
            </div>
          </div>
        </HeaderMenuItem>
      </div>
    </div>
  );
};

export default PageHeader;
