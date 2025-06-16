import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Button, Input, message, Modal, Spin } from "antd";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import CategoryTable from "./components/CategoryTable";
import AddCategoryModel from "./components/AddCategoryModel";
import EditCategoryModel from "./components/EditCategoryModel";
import { deleteCategory, getAllCategory } from "@services/apiCategory";

function Category({ service }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Use service from prop or from localStorage (default to 'food')
  const selectedService =
    service || localStorage.getItem("selectedService") || "food";

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllCategory(selectedService);
      setCategories(data);
    } catch {
      message.error("Failed to load categories.");
    } finally {
      setLoading(false);
    }
  }, [selectedService]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const openModal = (category = null) => {
    setSelectedCategory(category);
    setEditMode(!!category);
    setIsModalOpen(true);
  };

  const closeModal = (refresh = false) => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    if (refresh) fetchCategories();
  };

  const handleDelete = (category) => {
    Modal.confirm({
      title: "Delete Category",
      content: `Are you sure you want to delete "${category.name}"?`,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "No, Cancel",
      onOk: async () => {
        try {
          await deleteCategory(category._id, selectedService);
          message.success("Category deleted successfully!");
          fetchCategories();
        } catch {
          message.error("Failed to delete category.");
        }
      },
    });
  };

  // if (loading) return <Spin size="large" fullscreen />;

  return (
    <>
      <div className="lg:px-10 px-5 my-8 md:flex items-center gap-4 justify-between">
        <Input.Search
          placeholder="Search by name"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: 300, borderRadius: "6px" }}
          size="large"
        />
        <Button
          type="primary"
          icon={<FaPlus />}
          size="large"
          onClick={() => openModal()}
        >
          Add Category
        </Button>
      </div>

      <CategoryTable
        loading={loading}
        searchText={searchText}
        data={categories}
        onEdit={openModal}
        onDelete={handleDelete}
      />

      {editMode ? (
        <EditCategoryModel
          isModalOpen={isModalOpen}
          handleOk={() => closeModal(true)}
          handleCancel={() => closeModal(false)}
          categoryData={selectedCategory}
        />
      ) : (
        <AddCategoryModel
          isModalOpen={isModalOpen}
          handleOk={() => closeModal(true)}
          handleCancel={() => closeModal(false)}
        />
      )}
    </>
  );
}

export default Category;
