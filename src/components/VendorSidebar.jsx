import React from "react";
import { Layout, Avatar, Menu } from "antd";
import { useNavigate, useLocation } from "react-router";
import { LuBriefcaseBusiness, LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser, FaStore } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { FaCartShopping } from "react-icons/fa6";
import { RiCoupon3Line } from "react-icons/ri";
const { Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

function VendorSidebar({ collapsed, settingData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { vendorLogout } = useAuth();

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // 🔥 Determine which menu item to highlight
  const getCurrentMenuKey = (path) => {
    if (path.startsWith("/vendor/shop")) return "shops";
    if (path.startsWith("/vendor/profile")) return "profile";
    if (path.startsWith("/vendor/settings")) return "settings";
    if (path === "/vendor" || path === "/vendor/dashboard") return "dashboard";
    return "";
  };

  const currentPath = getCurrentMenuKey(location.pathname);

  const menuItems = [
    {
      key: "dashboard",
      icon: <LuLayoutDashboard style={{ fontSize: "18px" }} />,
      label: "Dashboard",
      onClick: () => navigate("/vendor"),
    },
    {
      key: "shops",
      icon: <FaStore style={{ fontSize: "18px" }} />,
      label: "My Shops",
      onClick: () => navigate("/vendor/shop"),
    },
    {
      key: "orders",
      icon: <FaCartShopping style={{ fontSize: "18px" }} />,
      label: "My Orders",
      onClick: () => navigate("/vendor/order"),
    },
    {
      key: "business",
      icon: <LuBriefcaseBusiness size={18} />,
      label: "Business",
      children: [
        {
          key: "wallet",
          label: "Wallet",
          onClick: () => navigate("/vendor/wallet"),
        },
        {
          key: "wallet_history",
          label: "Wallet History",
          onClick: () => navigate("/vendor/wallet/history"),
        },
      ],
    },
    {
      key: "profile",
      icon: <FaRegUser style={{ fontSize: "18px" }} />,
      label: "Profile",
      onClick: () => navigate("/vendor/profile"),
    },
    {
      type: "divider",
    },
    {
      key: "coupon",
      icon: <RiCoupon3Line size={18} />,
      label: "Coupon",
      onClick: () => navigate("/vendor/coupon"),
    },
    {
      key: "settings",
      icon: <IoSettingsOutline style={{ fontSize: "18px" }} />,
      label: "Settings",
      onClick: () => navigate("/vendor/settings"),
    },
    {
      key: "logout",
      icon: <MdLogout style={{ fontSize: "18px" }} />,
      label: "Logout",
      onClick: () => {
        vendorLogout();
        navigate("/vendor/login");
      },
    },
  ];

  return (
    <Sider
      width={210}
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={siderStyle}
    >
      <div className="flex items-center gap-3 my-3 mx-2 p-3 bg-zinc-600 rounded-md">
        <Avatar
          size={collapsed ? 32 : 64}
          src={<img src="/logo.png" alt="avatar" />}
        />
        {!collapsed && <h3 className="text-white font-semibold">Vendor</h3>}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[currentPath]}
        items={menuItems}
        onClick={(e) => {
          const clickedItem = menuItems.find(
            (item) =>
              item.key === e.key ||
              (item.children || []).some((child) => child.key === e.key)
          );
          if (clickedItem?.onClick) clickedItem.onClick();
        }}
        style={{ fontSize: "15px" }}
      />
    </Sider>
  );
}

export default VendorSidebar;
