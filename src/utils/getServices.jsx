export const getSidebarItemsByService = (
  serviceType,
  navigate,
  adminLogout
) => {
  const commonItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      onClick: () => navigate("/admin"),
    },
  ];

  const foodItems = [
    {
      key: "banner",
      label: "Banner",
      onClick: () => navigate("/admin/banner"),
    },
    {
      key: "product",
      label: "Product",
      onClick: () => navigate("/admin/product"),
    },
  ];

  const clothingItems = [
    {
      key: "clothing-product",
      label: "Clothing Product",
      onClick: () => navigate("/admin/clothing-product"),
    },
  ];

  const mechanicItems = [
    {
      key: "services",
      label: "Services",
      onClick: () => navigate("/admin/services"),
    },
  ];

  const serviceItems = [
    {
      key: "coupons",
      label: "Coupons",
      onClick: () => navigate("/admin/coupons"),
    },
  ];

  const serviceSidebars = {
    food: foodItems,
    clothing: clothingItems,
    mechanic: mechanicItems,
    service: serviceItems,
  };

  const logoutItem = {
    key: "logout",
    label: "Logout",
    onClick: () => {
      adminLogout();
      navigate("/admin/login");
    },
  };

  return [...commonItems, ...(serviceSidebars[serviceType] || []), logoutItem];
};
