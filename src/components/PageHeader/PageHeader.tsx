import React from "react";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";

interface Props {}

const PageHeader: React.FC<Props> = props => {
  return (
    <div className="h-16 bg-white flex justify-between items-center border-b">
      <span className="text-green-500 font-bold p-4">
        <span>X</span> KAMEREO
      </span>
      <div className="ml-auto flex h-full">
        <HeaderMenuItem>Mail</HeaderMenuItem>
        <HeaderMenuItem>Cart</HeaderMenuItem>
        <HeaderMenuItem>Eng</HeaderMenuItem>
        <HeaderMenuItem>
          <div className="flex items-center">
            <img
              alt="user-profile-img"
              src="https://i.pravatar.cc/300"
              className="w-8 h-8 rounded-full m-0 sm:mr-4"
            />
            <div className="flex-col mr-10 hidden sm:flex">
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
