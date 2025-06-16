import { Input, Modal } from "antd";
import React, { useState } from "react";
import OrderTable from "./components/OrderTable";

function Order({ service }) {
  const [searchText, setSearchText] = useState("");
  // Use service from prop or from localStorage (default to 'food')
  const selectedService =
    service || localStorage.getItem("selectedService") || "food";

  return (
    <>
      <div className="lg:px-10 px-5 my-8 md:flex items-center gap-4 justify-between ">
        <Input.Search
          placeholder={`Search by name in ${selectedService}`}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            maxWidth: 300,
            borderRadius: "6px",
          }}
          size="large"
        />
      </div>
      <OrderTable searchText={searchText} service={selectedService} />
    </>
  );
}

export default Order;
