import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    { name: "Food", key: "food", icon: "🍔" },
    { name: "Clothing", key: "clothing", icon: "👕" },
    { name: "Mechanic", key: "mechanic", icon: "🔧" },
    { name: "Home Service", key: "service", icon: "🏠" },
  ];

  const handleSelect = (service) => {
    localStorage.setItem("selectedService", service);
    navigate(`/admin/dashboard`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Select a Service to Manage
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {services.map((service) => (
          <div
            key={service.key}
            onClick={() => handleSelect(service.key)}
            className="cursor-pointer p-8 flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl transition hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
