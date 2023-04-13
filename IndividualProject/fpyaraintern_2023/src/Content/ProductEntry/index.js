import React, { useState } from "react";
import "./productentry.css";
import axios from "axios";
import { ok } from "assert";
const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productSizeUnit: "",
    isHazardous: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle form submission
    if (!formData) {
      alert("All fields are required!");
      return;
    } else {
      const response = await axios.post(
        "http://localhost:3001/product/createProduct",
        {
          formData,
        }
      );
      if (response === ok) {
        alert("Product added successfully");
      }
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          value={formData.productName}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, productName: e.target.value }));
          }}
        />
      </label>
      <br />
      <label>
        Product Size Unit:
        <input
          type="number"
          value={formData.productSizeUnit}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              productSizeUnit: e.target.value,
            }));
          }}
        />
      </label>
      <br />
      <label>
        Is Hazardous:
        <input
          type="checkbox"
          checked={formData.isHazardous}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              isHazardous: e.target.checked,
            }));
          }}
        />
      </label>
      <br />
      <button
        className="submit-product"
        type="submit"
        onClick={() => {
          onSubmit({
            productName: formData.productName,
            productSizeUnit: formData.productSizeUnit,
            isHazardous: formData.isHazardous,
          });
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
