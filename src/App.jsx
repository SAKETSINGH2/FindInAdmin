import React from "react";
import AdminLayout from "./layout/adminLayout";
import { Route, Routes } from "react-router";
// landing page
import LandingPage from "./pages/web/Home/Home";

// admin
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Banner from "./pages/admin/Banner/Banner";
import Category from "./pages/admin/Category/Category";
import SubCategory from "./pages/admin/SubCategory/SubCategory";
import Vendor from "./pages/admin/Vendor/Vendor";
import VendorDetails from "./pages/admin/Vendor/components/VendorDetails";
import VendorProducts from "./pages/admin/Vendor/components/VendorProducts";
import Shop from "./pages/admin/Shop/Shop";
import User from "./pages/admin/User/User";
import Settings from "./pages/admin/Settings/Settings";
import FoodProduct from "./pages/admin/Food-Product/FoodProduct";
import GroceryProduct from "./pages/admin/Grocery-Product/GroceryProduct";
import Login from "./pages/admin/Auth/Login";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import ProductDetails from "./pages/admin/Products/ProductDetails";
import PaymentRequest from "./pages/admin/Payment-Request/PaymentRequest";
import Profile from "./pages/admin/Settings/components/Profile";
import Charges from "./pages/admin/Settings/components/Charges";
import TermConditions from "./pages/admin/Settings/components/Term&Conditions";
import PrivacyPolicyPage from "./pages/admin/Settings/components/PrivacyPolicyPage";
import RefundPolicy from "./pages/admin/Settings/components/RefundPolicy";
import Order from "./pages/admin/Order/Order";
import OrderDetails from "./pages/admin/Order/components/OrderDetails";
import OrderDetailsPage from "./pages/admin/Order/components/OrderDetailsPage";
import ClothingDashboard from "./pages/admin/clothing/Dashboard/Dashboard";
import ClothingCategory from "./pages/admin/clothing/Category/Category";
import ClothingOrder from "./pages/admin/clothing/Order/Order";
import ClothingProduct from "./pages/admin/clothing/Product/Product";
import MechanicDashboard from "./pages/admin/mechanic/Dashboard/Dashboard";
import MechanicCategory from "./pages/admin/mechanic/Category/Category";
import MechanicOrder from "./pages/admin/mechanic/Order/Order";
import MechanicProduct from "./pages/admin/mechanic/Product/Product";
import ServiceDashboard from "./pages/admin/service/Dashboard/Dashboard";
import ServiceCategory from "./pages/admin/service/Category/Category";
import ServiceOrder from "./pages/admin/service/Order/Order";
import ServiceProduct from "./pages/admin/service/Product/Product";
import MainDashboard from "./pages/admin/MainDashboard";

// vendor
import Cms from "./pages/web/Cms/Cms";
import VendorPrivateRoute from "./components/VendorPrivateRoute";
import VendorLayout from "./layout/vendorLayout";
import VendorLogin from "./pages/vendor/auth/Login";
import VendorRegister from "./pages/vendor/auth/Register";
import VendorDashboard from "./pages/vendor/Dashboard/Dashboard";
import VendorShop from "./pages/vendor/Shop/Shop";
import VendorSettings from "./pages/vendor/Settings/Settings";
import VendorProfile from "./pages/vendor/Profile/Profile";
import VendorAddShop from "./pages/vendor/Shop/components/AddShop";
import AddProduct from "./pages/vendor/Shop/AddProduct";
import AllProduct from "./pages/vendor/Shop/AllProduct";
import ProductDetailsForVendor from "./pages/vendor/Products/ProductDetails";
import VendorOrder from "./pages/vendor/Order/Order";
import Wallet from "./pages/vendor/wallet/Wallet";
import ShopWalletHistory from "./pages/vendor/wallet/ShopWalletHistory";
import WalletHistory from "./pages/vendor/wallet/WalletHistory";
import Coupon from "./pages/admin/Coupon/Coupon";
import Driver from "./pages/admin/Driver/Driver";
import CouponVendor from "./pages/vendor/Coupon/CouponVenor";
import ProductFlags from "./pages/admin/ProductFlags/ProductFlags";
import Explore from "./pages/admin/Explore/Explore";
import ExploreSection from "./pages/admin/ExploreSection/ExploreSection";
import Store199 from "./pages/admin/Store199/Store199";
import ExploreSectionTable from "./pages/admin/Explore/components/ExploreSectionTable";
import Services from "./pages/admin/services/Services";

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<LandingPage />} /> */}

        {/* this is for findin */}
        <Route index element={<Login />} />
        <Route path="/cms/:page" element={<Cms />} />

        {/* admin route */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >
          <Route index element={<MainDashboard />} />
          <Route path="dashboard" element={<Dashboard service="food" />} />
          <Route path="banner" element={<Banner />} />
          <Route path="product" element={<FoodProduct service="food" />} />
          <Route path="category" element={<Category service="food" />} />
          <Route path="sub-category" element={<SubCategory />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="driver" element={<Driver />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="vendor/:id" element={<VendorDetails />} />
          <Route path="vendor/shops/:id" element={<VendorProducts />} />
          <Route path="products/:produtSlug" element={<ProductDetails />} />
          <Route path="product-flags" element={<ProductFlags />} />
          <Route path="store199" element={<Store199 />} />
          <Route path="shop" element={<Shop />} />
          <Route path="order" element={<Order service="food" />} />
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="request/vendor" element={<PaymentRequest />} />
          <Route path="request/driver" element={<PaymentRequest />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/:exploreId" element={<ExploreSectionTable />} />
          <Route path="explore-section" element={<ExploreSection />} />
          <Route path="user" element={<User />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/profile" element={<Profile />} />
          <Route path="settings/charges" element={<Charges />} />
          <Route
            path="terms-and-conditions/:type"
            element={<TermConditions />}
          />
          <Route path="privacy-policy/:type" element={<PrivacyPolicyPage />} />
          <Route path="refund-policy/:type" element={<RefundPolicy />} />
          <Route path="clothing">
            <Route
              path="dashboard"
              element={<Dashboard service="clothing" />}
            />
            <Route path="banner" element={<Banner service="clothing" />} />
            <Route
              path="product"
              element={<FoodProduct service="clothing" />}
            />
            <Route path="category" element={<Category service="clothing" />} />
            <Route
              path="sub-category"
              element={<SubCategory service="clothing" />}
            />
            <Route path="coupon" element={<Coupon service="clothing" />} />
            <Route path="driver" element={<Driver service="clothing" />} />
            <Route path="vendor" element={<Vendor service="clothing" />} />
            <Route
              path="vendor/:id"
              element={<VendorDetails service="clothing" />}
            />
            <Route
              path="vendor/shops/:id"
              element={<VendorProducts service="clothing" />}
            />
            <Route
              path="products/:produtSlug"
              element={<ProductDetails service="clothing" />}
            />
            <Route
              path="product-flags"
              element={<ProductFlags service="clothing" />}
            />
            <Route path="store199" element={<Store199 service="clothing" />} />
            <Route path="shop" element={<Shop service="clothing" />} />
            <Route path="order" element={<Order service="clothing" />} />
            <Route
              path="order/:id"
              element={<OrderDetailsPage service="clothing" />}
            />
            <Route
              path="request/vendor"
              element={<PaymentRequest service="clothing" />}
            />
            <Route
              path="request/driver"
              element={<PaymentRequest service="clothing" />}
            />
            <Route path="explore" element={<Explore service="clothing" />} />
            <Route
              path="explore/:exploreId"
              element={<ExploreSectionTable service="clothing" />}
            />
            <Route
              path="explore-section"
              element={<ExploreSection service="clothing" />}
            />
            <Route path="user" element={<User service="clothing" />} />
            <Route path="settings" element={<Settings service="clothing" />} />
            <Route
              path="settings/profile"
              element={<Profile service="clothing" />}
            />
            <Route
              path="settings/charges"
              element={<Charges service="clothing" />}
            />
            <Route
              path="terms-and-conditions/:type"
              element={<TermConditions service="clothing" />}
            />
            <Route
              path="privacy-policy/:type"
              element={<PrivacyPolicyPage service="clothing" />}
            />
            <Route
              path="refund-policy/:type"
              element={<RefundPolicy service="clothing" />}
            />
          </Route>
          <Route path="mechanic">
            <Route
              path="dashboard"
              element={<Dashboard service="mechanic" />}
            />
            <Route path="banner" element={<Banner service="mechanic" />} />
            <Route
              path="product"
              element={<FoodProduct service="mechanic" />}
            />
            <Route path="category" element={<Category service="mechanic" />} />
            <Route
              path="sub-category"
              element={<SubCategory service="mechanic" />}
            />
            <Route path="coupon" element={<Coupon service="mechanic" />} />
            <Route path="driver" element={<Driver service="mechanic" />} />
            <Route path="vendor" element={<Vendor service="mechanic" />} />
            <Route
              path="vendor/:id"
              element={<VendorDetails service="mechanic" />}
            />
            <Route
              path="vendor/shops/:id"
              element={<VendorProducts service="mechanic" />}
            />
            <Route
              path="products/:produtSlug"
              element={<ProductDetails service="mechanic" />}
            />
            <Route
              path="product-flags"
              element={<ProductFlags service="mechanic" />}
            />
            <Route path="store199" element={<Store199 service="mechanic" />} />
            <Route path="shop" element={<Shop service="mechanic" />} />
            <Route path="order" element={<Order service="mechanic" />} />
            <Route
              path="order/:id"
              element={<OrderDetailsPage service="mechanic" />}
            />
            <Route
              path="request/vendor"
              element={<PaymentRequest service="mechanic" />}
            />
            <Route
              path="request/driver"
              element={<PaymentRequest service="mechanic" />}
            />
            <Route path="explore" element={<Explore service="mechanic" />} />
            <Route
              path="explore/:exploreId"
              element={<ExploreSectionTable service="mechanic" />}
            />
            <Route
              path="explore-section"
              element={<ExploreSection service="mechanic" />}
            />
            <Route path="user" element={<User service="mechanic" />} />
            <Route path="settings" element={<Settings service="mechanic" />} />
            <Route
              path="settings/profile"
              element={<Profile service="mechanic" />}
            />
            <Route
              path="settings/charges"
              element={<Charges service="mechanic" />}
            />
            <Route
              path="terms-and-conditions/:type"
              element={<TermConditions service="mechanic" />}
            />
            <Route
              path="privacy-policy/:type"
              element={<PrivacyPolicyPage service="mechanic" />}
            />
            <Route
              path="refund-policy/:type"
              element={<RefundPolicy service="mechanic" />}
            />
          </Route>
          <Route path="service">
            <Route path="dashboard" element={<Dashboard service="service" />} />
            <Route path="banner" element={<Banner service="service" />} />
            <Route path="product" element={<FoodProduct service="service" />} />
            <Route path="category" element={<Category service="service" />} />
            <Route
              path="sub-category"
              element={<SubCategory service="service" />}
            />
            <Route path="coupon" element={<Coupon service="service" />} />
            <Route path="driver" element={<Driver service="service" />} />
            <Route path="vendor" element={<Vendor service="service" />} />
            <Route
              path="vendor/:id"
              element={<VendorDetails service="service" />}
            />
            <Route
              path="vendor/shops/:id"
              element={<VendorProducts service="service" />}
            />
            <Route
              path="products/:produtSlug"
              element={<ProductDetails service="service" />}
            />
            <Route
              path="product-flags"
              element={<ProductFlags service="service" />}
            />
            <Route path="store199" element={<Store199 service="service" />} />
            <Route path="shop" element={<Shop service="service" />} />
            <Route path="order" element={<Order service="service" />} />
            <Route
              path="order/:id"
              element={<OrderDetailsPage service="service" />}
            />
            <Route
              path="request/vendor"
              element={<PaymentRequest service="service" />}
            />
            <Route
              path="request/driver"
              element={<PaymentRequest service="service" />}
            />
            <Route path="explore" element={<Explore service="service" />} />
            <Route
              path="explore/:exploreId"
              element={<ExploreSectionTable service="service" />}
            />
            <Route
              path="explore-section"
              element={<ExploreSection service="service" />}
            />
            <Route path="user" element={<User service="service" />} />
            <Route path="settings" element={<Settings service="service" />} />
            <Route
              path="settings/profile"
              element={<Profile service="service" />}
            />
            <Route
              path="settings/charges"
              element={<Charges service="service" />}
            />
            <Route
              path="terms-and-conditions/:type"
              element={<TermConditions service="service" />}
            />
            <Route
              path="privacy-policy/:type"
              element={<PrivacyPolicyPage service="service" />}
            />
            <Route
              path="refund-policy/:type"
              element={<RefundPolicy service="service" />}
            />
          </Route>
        </Route>

        {/* vendor route */}
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/addShop" element={<VendorAddShop />} />
        <Route
          path="/vendor"
          element={
            <VendorPrivateRoute>
              <VendorLayout />
            </VendorPrivateRoute>
          }
        >
          <Route index element={<VendorDashboard />} />
          <Route path="shop" element={<VendorShop />} />
          <Route path="shop/add/:shopId" element={<AddProduct />} />
          <Route path="shop/:shopId" element={<AllProduct />} />
          <Route
            path="shop/:shopId/product/:productId"
            element={<ProductDetailsForVendor />}
          />
          <Route path="order" element={<VendorOrder />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="wallet/:shopId" element={<ShopWalletHistory />} />
          <Route path="wallet/history" element={<WalletHistory />} />
          <Route path="profile" element={<VendorProfile />} />
          <Route path="settings" element={<VendorSettings />} />
          <Route path="coupon" element={<CouponVendor />} />
        </Route>
        {/* <Route path="*" element={<LandingPage />} /> */}

        {/* this is for findin */}
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
