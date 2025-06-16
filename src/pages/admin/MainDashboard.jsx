import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../context/ServiceContext";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FaUtensils, FaTshirt, FaTools, FaHome } from "react-icons/fa";
import { LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { IoImagesOutline, IoStorefront } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { RiEBike2Fill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";

const services = [
  {
    name: "Food",
    key: "food",
    icon: <FaUtensils className="text-5xl text-pink-500 drop-shadow" />,
  },
  {
    name: "Clothing",
    key: "clothing",
    icon: <FaTshirt className="text-5xl text-blue-400 drop-shadow" />,
  },
  {
    name: "Mechanic",
    key: "mechanic",
    icon: <FaTools className="text-5xl text-yellow-500 drop-shadow" />,
  },
  {
    name: "Home Service",
    key: "service",
    icon: <FaHome className="text-5xl text-green-500 drop-shadow" />,
  },
];

const serviceRoutes = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <LuLayoutDashboard className="text-xl text-indigo-500" />,
  },
  {
    key: "banner",
    label: "Banner",
    icon: <IoImagesOutline className="text-xl text-pink-400" />,
  },
  {
    key: "category",
    label: "Category",
    icon: <TbCategory2 className="text-xl text-orange-400" />,
  },
  {
    key: "sub-category",
    label: "Sub Category",
    icon: <MdOutlineCategory className="text-xl text-orange-300" />,
  },
  {
    key: "product",
    label: "Product",
    icon: <FaUtensils className="text-xl text-pink-500" />,
  },
  {
    key: "product-flags",
    label: "Product Flag",
    icon: <FaUtensils className="text-xl text-pink-300" />,
  },
  {
    key: "vendor",
    label: "Vendor",
    icon: <LuUsers className="text-xl text-blue-400" />,
  },
  {
    key: "shop",
    label: "Shop",
    icon: <IoStorefront className="text-xl text-green-400" />,
  },
  {
    key: "order",
    label: "Order",
    icon: <GiTakeMyMoney className="text-xl text-yellow-500" />,
  },
  {
    key: "coupon",
    label: "Coupon",
    icon: <RiCoupon3Line className="text-xl text-purple-400" />,
  },
  {
    key: "driver",
    label: "Driver",
    icon: <RiEBike2Fill className="text-xl text-gray-500" />,
  },
  {
    key: "explore",
    label: "Explore",
    icon: <LuLayoutDashboard className="text-xl text-indigo-400" />,
  },
  {
    key: "explore-section",
    label: "Explore Section",
    icon: <LuLayoutDashboard className="text-xl text-indigo-300" />,
  },
  {
    key: "request-vendor",
    label: "Vendor Request",
    icon: <LuUsers className="text-xl text-blue-300" />,
  },
  {
    key: "request-driver",
    label: "Driver Request",
    icon: <RiEBike2Fill className="text-xl text-gray-400" />,
  },
];

const MainDashboard = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const { setServiceType } = useService();

  useEffect(() => {
    if (selectedService) {
      setServiceType(selectedService);
    }
  }, [selectedService, setServiceType]);

  const handleServiceClick = (service) => {
    setSelectedService(service.key);
  };

  const handleRouteClick = (serviceKey, routeKey) => {
    if (serviceKey === "food") {
      if (routeKey === "dashboard") navigate("/admin/dashboard");
      else navigate(`/admin/${routeKey}`);
    } else {
      navigate(`/admin/${serviceKey}/${routeKey}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-12 px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center tracking-tight drop-shadow">
          {selectedService
            ? `Select a ${
                services.find((s) => s.key === selectedService).name
              } Service`
            : "Select a Service to Manage"}
        </h2>
        {!selectedService ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                onClick={() => handleServiceClick(service)}
                className="cursor-pointer bg-white/70 backdrop-blur-md shadow-xl rounded-3xl flex flex-col items-center justify-center py-12 px-6 border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-200 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-blue-100/40 opacity-80 group-hover:opacity-100 transition-all duration-200 z-0 rounded-3xl" />
                <div className="z-10 relative mb-4">{service.icon}</div>
                <h3 className="z-10 relative text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-all">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-2">
            {serviceRoutes.map((route) => (
              <div
                key={route.key}
                onClick={() => handleRouteClick(selectedService, route.key)}
                className="cursor-pointer bg-white/80 backdrop-blur-md shadow-lg rounded-2xl flex flex-col items-center justify-center py-8 px-4 border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-200 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-purple-100/40 opacity-80 group-hover:opacity-100 transition-all duration-200 z-0 rounded-2xl" />
                <div className="z-10 relative mb-2">{route.icon}</div>
                <h3 className="z-10 relative text-lg font-semibold text-gray-700 group-hover:text-purple-600 transition-all">
                  {route.label}
                </h3>
              </div>
            ))}
            <div
              onClick={() => setSelectedService(null)}
              className="cursor-pointer bg-gray-100/90 shadow-inner rounded-2xl flex flex-col items-center justify-center py-8 px-4 border border-gray-300 hover:scale-105 hover:bg-gray-200 transition-all duration-200 group"
            >
              <HiOutlineArrowLeft className="text-2xl text-gray-500 mb-1" />
              <h3 className="text-lg font-semibold text-gray-700">Back</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDashboard;
