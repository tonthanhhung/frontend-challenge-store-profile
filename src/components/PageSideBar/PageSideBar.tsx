import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux";
import utils from "../../common/utils";
import {
  FaBuilding,
  FaChartLine,
  FaDollyFlatbed,
  FaFileInvoiceDollar,
  FaHeart,
  FaStoreAlt,
  FaTachometerAlt,
  FaUser,
  FaUtensils
} from "react-icons/fa";

const connector = connect(
  ({ currentStore }: RootState) => ({
    currentStore
  }),
  {}
);

type Props = ConnectedProps<typeof connector>;
const PageSideBar: React.FC<Props> = ({ currentStore }) => {
  const dashboardGroup: DisplayGroupMenu = {
    groupName: "Dashboard",
    items: [
      { name: "Overview", icon: <FaTachometerAlt /> },
      { name: "Order", icon: <FaFileInvoiceDollar /> },
      { name: "Supplier List", icon: <FaDollyFlatbed /> },
      { name: "Statistic", icon: <FaChartLine /> }
    ]
  };
  const marketPlaceGroup: DisplayGroupMenu = {
    groupName: "Market Place",
    items: [{ name: "Market", icon: <FaStoreAlt /> }]
  };
  const generalSettingGroup: DisplayGroupMenu = {
    groupName: "General Setting",
    items: [
      { name: "Company Info", icon: <FaBuilding /> },
      { name: "Store Info", icon: <FaUtensils /> },
      { name: "User Management", icon: <FaUser /> }
    ]
  };
  return (
    <div className="border-r bg-white flex flex-col hidden md:flex md:w-48 lg:w-56 xl:w-64 ">
      <div className="__profileBriefInfo flex p-4 border-b">
        <img
          src={currentStore && currentStore.logoUrl}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col ml-5">
          <span className="__store-name text-black uppercase font-semibold text-sm">
            {currentStore && currentStore.name}
          </span>
          <span className="__address text-xs text-gray-500">
            {currentStore && utils.getFullAddress({ ...currentStore })}
          </span>
          <a
            href="#"
            className="__changeStoreLink text-xs uppercase mt-4 text-blue-700"
          >
            change store
          </a>
        </div>
      </div>
      <div className="flex text-tomato-500 uppercase p-4 border-b items-center cursor-pointer">
        <FaHeart className="text-lg ml-2 mr-3" />
        favorite items
      </div>
      <MenuGroup menuGroup={dashboardGroup} />
      <MenuGroup menuGroup={marketPlaceGroup} />
      <MenuGroup menuGroup={generalSettingGroup} />
    </div>
  );
};

const MenuGroup = ({ menuGroup }: { menuGroup: DisplayGroupMenu }) => {
  return (
    <div className="flex flex-col pt-4 px-6">
      <h3 className="font-semibold text-sm capitalize mb-6">
        {menuGroup.groupName}
      </h3>
      {menuGroup.items.map(menuItem => (
        <div
          key={menuItem.name}
          className="__navItem flex text-gray-500 text-sm mb-6 cursor-pointer hover:text-gray-700 items-center"
        >
          <div className="__icon text-center mr-4">{menuItem.icon}</div>
          {menuItem.name}
        </div>
      ))}
    </div>
  );
};

export default connector(PageSideBar);
