import React from "react";

interface Props {}

const PageSideBar: React.FC<Props> = props => {
  const dashboardGroup: DisplayGroupMenu = {
    groupName: "Dashboard",
    items: ["Overview", "Order", "Supplier List", "Statistic"]
  };
  const marketPlaceGroup: DisplayGroupMenu = {
    groupName: "Market Place",
    items: ["Market"]
  };
  const generalSettingGroup: DisplayGroupMenu = {
    groupName: "General Setting",
    items: ["Company Info", "Store Info", "User Management"]
  };
  return (
    <div className="border-r bg-white flex flex-col w-0 lg:w-48 lg:w-56">
      <div className="__profileBriefInfo flex p-4 border-b">
        <img
          alt="profile-image"
          src="https://i.imgur.com/BoxSKsJ.png"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col ml-5">
          <span className="__store-name text-black uppercase font-semibold text-sm">
            Kamereo
          </span>
          <span className="__address text-xs text-gray-500">
            135 Hai Ba Trung
          </span>
          <a
            href="#"
            className="__changeStoreLink text-xs uppercase mt-4 text-blue-700"
          >
            change store
          </a>
        </div>
      </div>
      <div className="flex text-red-500 uppercase p-4 border-b">
        <div className="w-10 text-center text-lg">♥</div>
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
      <h3 className="font-semibold text-sm capitalize mb-8">
        {menuGroup.groupName}
      </h3>
      {menuGroup.items.map(menuItem => (
        <div
          key={menuItem}
          className="__navItem flex text-gray-500 text-sm mb-8 cursor-pointer hover:text-gray-700"
        >
          <div className="__icon text-center mr-4">🚀</div>
          {menuItem}
        </div>
      ))}
    </div>
  );
};

export default PageSideBar;
