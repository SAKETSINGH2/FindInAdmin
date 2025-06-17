import React, { useEffect, useState } from "react";
import { Avatar, Layout, Menu } from "antd";
const { Sider } = Layout;

import { useNavigate, useLocation } from "react-router";

import { LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { SiNextra } from "react-icons/si";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import {
  FaClipboardList,
  FaRegUser,
  FaSitemap,
  FaUserClock,
} from "react-icons/fa";
import {
  IoFastFoodOutline,
  IoImagesOutline,
  IoSettingsOutline,
  IoStorefront,
} from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RiCoupon3Line } from "react-icons/ri";
import { RiEBike2Fill } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
import { useService } from "../context/ServiceContext";

// Service menu definitions
const serviceMenus = {
  food: [
    {
      key: "dashboard",
      icon: <LuLayoutDashboard size={18} />,
      label: "Dashboard",
      onClick: (navigate) => navigate("/admin"),
    },
    {
      key: "banner",
      icon: <IoImagesOutline size={18} />,
      label: "Banner",
      onClick: (navigate) => navigate("/admin/banner"),
    },
    {
      key: "category",
      icon: <TbCategory2 size={18} />,
      label: "Category",
      onClick: (navigate) => navigate("/admin/category"),
    },
    {
      key: "sub-category",
      icon: <MdOutlineCategory size={18} />,
      label: "Sub Category",
      onClick: (navigate) => navigate("/admin/sub-category"),
    },
    {
      key: "product",
      icon: <IoFastFoodOutline size={18} />,
      label: "Product",
      onClick: (navigate) => navigate("/admin/product"),
    },
    {
      key: "product-flags",
      icon: <IoFastFoodOutline size={18} />,
      label: "Product Flag",
      onClick: (navigate) => navigate("/admin/product-flags"),
    },
    {
      key: "vendor",
      icon: <LuUsers size={18} />,
      label: "Vendor",
      onClick: (navigate) => navigate("/admin/vendor"),
    },
    {
      key: "shop",
      icon: <IoStorefront size={18} />,
      label: "Shop",
      onClick: (navigate) => navigate("/admin/shop"),
    },
    {
      key: "order",
      icon: <FaClipboardList size={18} />,
      label: "Order",
      onClick: (navigate) => navigate("/admin/order"),
    },
    {
      key: "coupon",
      icon: <RiCoupon3Line size={18} />,
      label: "Coupon",
      onClick: (navigate) => navigate("/admin/coupon"),
    },
    {
      key: "driver",
      icon: <RiEBike2Fill size={18} />,
      label: "Driver",
      onClick: (navigate) => navigate("/admin/driver"),
    },
    {
      key: "explorea",
      icon: <SiNextra size={18} />,
      label: "Explore",
      children: [
        {
          key: "explore",
          label: "Explore",
          onClick: (navigate) => navigate("/admin/explore"),
        },
        {
          key: "explore-section",
          label: "Explore Section",
          onClick: (navigate) => navigate("/admin/explore-section"),
        },
      ],
    },
    {
      key: "request",
      icon: <GiTakeMyMoney size={18} />,
      label: "Payment Request",
      children: [
        {
          key: "request-vendor",
          label: "Vendor Request",
          onClick: (navigate) => navigate("/admin/request/vendor"),
        },
        {
          key: "request-driver",
          label: "Driver Request",
          onClick: (navigate) => navigate("/admin/request/driver"),
        },
      ],
    },
    {
      key: "user",
      icon: <FaRegUser size={18} />,
      label: "User",
      onClick: (navigate) => navigate("/admin/user"),
    },
    {
      key: "settings",
      icon: <IoSettingsOutline size={18} />,
      label: "Settings",
      children: [
        {
          key: "settings-charges",
          icon: <FaSitemap />,
          label: "Site",
          onClick: (navigate) => navigate("/admin/settings/charges"),
        },
        {
          key: "vendor-cms",
          icon: <FaUserClock size={18} />,
          label: "Vendor CMS",
          children: [
            {
              key: "vendor-terms-and-conditions",
              label: "Terms & Conditions",
              onClick: (navigate) =>
                navigate("/admin/terms-and-conditions/vendor"),
            },
            {
              key: "vendor-privacy-policy",
              label: "Privacy Policy",
              onClick: (navigate) => navigate("/admin/privacy-policy/vendor"),
            },
            {
              key: "vendor-refund-policy",
              label: "Refund Policy",
              onClick: (navigate) => navigate("/admin/refund-policy/vendor"),
            },
          ],
        },
        {
          key: "user-cms",
          icon: <FaUserClock size={18} />,
          label: "User CMS",
          children: [
            {
              key: "user-terms-and-conditions",
              label: "Terms & Conditions",
              onClick: (navigate) =>
                navigate("/admin/terms-and-conditions/user"),
            },
            {
              key: "user-privacy-policy",
              label: "Privacy Policy",
              onClick: (navigate) => navigate("/admin/privacy-policy/user"),
            },
            {
              key: "user-refund-policy",
              label: "Refund Policy",
              onClick: (navigate) => navigate("/admin/refund-policy/user"),
            },
          ],
        },
      ],
    },
  ],
  clothing: [
    {
      key: "dashboard",
      icon: <LuLayoutDashboard size={18} />,
      label: "Dashboard",
      onClick: (navigate) => navigate("/admin/clothing/dashboard"),
    },
    {
      key: "category",
      icon: <TbCategory2 size={18} />,
      label: "Category",
      onClick: (navigate) => navigate("/admin/clothing/category"),
    },
    {
      key: "product",
      icon: <IoFastFoodOutline size={18} />,
      label: "Product",
      onClick: (navigate) => navigate("/admin/clothing/product"),
    },
    {
      key: "order",
      icon: <FaClipboardList size={18} />,
      label: "Order",
      onClick: (navigate) => navigate("/admin/clothing/order"),
    },
  ],
  mechanic: [
    {
      key: "dashboard",
      icon: <LuLayoutDashboard size={18} />,
      label: "Dashboard",
      onClick: (navigate) => navigate("/admin/mechanic/dashboard"),
    },
    {
      key: "category",
      icon: <TbCategory2 size={18} />,
      label: "Category",
      onClick: (navigate) => navigate("/admin/mechanic/category"),
    },
    {
      key: "subCategory",
      icon: <TbCategory2 size={18} />,
      label: "Sub Category",
      onClick: (navigate) => navigate("/admin/mechanic/sub-category"),
    },
    {
      key: "shop",
      icon: <TbCategory2 size={18} />,
      label: "Shop",
      onClick: (navigate) => navigate("/admin/mechanic/shop"),
    },
    // {
    //   key: "order",
    //   icon: <FaClipboardList size={18} />,
    //   label: "Order",
    //   onClick: (navigate) => navigate("/admin/mechanic/order"),
    // },
  ],
  service: [
    {
      key: "dashboard",
      icon: <LuLayoutDashboard size={18} />,
      label: "Dashboard",
      onClick: (navigate) => navigate("/admin/service/dashboard"),
    },
    {
      key: "category",
      icon: <TbCategory2 size={18} />,
      label: "Category",
      onClick: (navigate) => navigate("/admin/service/category"),
    },
    {
      key: "subCategory",
      icon: <TbCategory2 size={18} />,
      label: "Sub Category",
      onClick: (navigate) => navigate("/admin/service/sub-category"),
    },
    {
      key: "shop",
      icon: <TbCategory2 size={18} />,
      label: "Shop",
      onClick: (navigate) => navigate("/admin/service/shop"),
    },
  ],
};

const serviceList = [
  { key: "food", label: "Restaurent", icon: "🍔" },
  // { key: "clothing", label: "Shopping", icon: "👕" },
  { key: "mechanic", label: "Mechanic", icon: "🔧" },
  { key: "service", label: "Home Service", icon: "🏠" },
];

const getServiceMenu = (service, navigate) => {
  // Get the submenu for this service from serviceMenus
  const children = (serviceMenus[service] || []).map((item) => ({
    ...item,
    onClick: () => item.onClick(navigate),
    children: item.children
      ? item.children.map((child) => ({
          ...child,
          onClick: () => child.onClick(navigate),
        }))
      : undefined,
  }));
  return [
    {
      key: service,
      icon: serviceList.find((s) => s.key === service)?.icon,
      label: serviceList.find((s) => s.key === service)?.label,
      children,
    },
  ];
};

const AdminSidebar = ({ collapsed, settingData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { adminLogout } = useAuth();
  const { serviceType } = useService();
  const [selectedService, setSelectedService] = useState(
    localStorage.getItem("selectedService") || "food"
  );
  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("selectedService") || "food";
    setSelectedService(stored);
  }, [location]);

  useEffect(() => {
    if (serviceType) {
      setOpenKeys([serviceType]);
    }
  }, [serviceType, location]);

  // Service dropdowns for all services
  const allServiceDropdowns = serviceList.map(
    (service) => getServiceMenu(service.key, navigate)[0]
  );

  const menuItems = [
    {
      key: "main-dashboard",
      icon: <LuLayoutDashboard size={18} style={{ color: "#1677ff" }} />,
      label: "Main Dashboard",
      onClick: () => navigate("/admin"),
    },
    { type: "divider" },
    ...allServiceDropdowns,
    { type: "divider" },
    {
      key: "user",
      icon: <FaRegUser size={18} />,
      label: "User",
      onClick: () => navigate("/admin/user"),
    },
    {
      key: "settings",
      icon: <IoSettingsOutline size={18} />,
      label: "Settings",
      onClick: () => navigate("/admin/settings"),
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <FaArrowRightToBracket size={18} />,
      label: "Logout",
      onClick: () => {
        adminLogout();
        navigate("/admin/login");
      },
    },
  ];

  return (
    <Sider
      width={240}
      theme="light"
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="shadow-md border-r"
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        overflow: "auto",
      }}
    >
      <div className="flex items-center justify-center py-4">
        <Avatar
          size={collapsed ? 40 : 64}
          src="/logo.png"
          className="transition-all duration-300"
        />
      </div>
      <Menu
        mode="inline"
        theme="light"
        items={menuItems}
        className="text-[15px] font-medium"
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
      />
    </Sider>
  );
};

export default AdminSidebar;
