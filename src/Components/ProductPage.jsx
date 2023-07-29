import React, { useState } from "react";

const ProductPage = () => {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [value, setValue] = useState("");
  const [variationsArray, setVariationsArray] = useState([]);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleAttributeChange = (event) => {
    const { value } = event.target;
    setSelectedAttribute(value);
    setValue("");
    setVariationsArray([]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const index = variationsArray.findIndex(
      (variation) => variation.name === name
    );
    if (index !== -1) {
      const updatedVariations = [...variationsArray];
      updatedVariations[index][name] = value;
      setVariationsArray(updatedVariations);
    }
  };

  const handleAddVariation = () => {
    if (value.trim() !== "") {
      const newVariation = {
        variant: value,
        price: "",
        stock: "",
      };
      setVariationsArray([...variationsArray, newVariation]);
      setValue("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col md-12">
          <label htmlFor="attribute">Select Attribute:</label>
          <br />
          <select
            id="attribute"
            value={selectedAttribute}
            className="form-control"
            onChange={handleAttributeChange}
          >
            <option value="">Choose an attribute</option>
            <option value="color">Color</option>
            <option value="size">Size</option>
            {/* Add other attribute options here */}
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-4">
          {selectedAttribute && (
            <input
              type="text"
              className="form-control w-50"
              value={selectedAttribute}
            />
          )}
        </div>
        <div className="col-md-4">
          {selectedAttribute && (
            <div>
              <input
                type="text"
                onChange={handleChangeValue}
                value={value}
                className="form-control"
                placeholder="Choose your Variations"
              />
              <button
                onClick={handleAddVariation}
                className="btn btn-primary mt-2"
              >
                Add Variation
              </button>
            </div>
          )}
        </div>
        <div className="col-md-4"></div>
      </div>

      {variationsArray.map((variation, index) => (
        <div key={index} className="row mt-3">
          <div className="col-md-4">
            <label htmlFor={`variant_${index}`}>Variant:</label>
            <br />
            <input
              type="text"
              id={`variant_${index}`}
              name="variant"
              className="form-control w-50"
              value={variation.variant}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <label className="mt-2" htmlFor={`price_${index}`}>
                  Price:
                </label>
                <input
                  type="number"
                  id={`price_${index}`}
                  name="price"
                  value={variation.price}
                  className="form-control mx-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor={`stock_${index}`} className="mt-2">
                  Stock:
                </label>

                <input
                  type="number"
                  id={`stock_${index}`}
                  name="stock"
                  value={variation.stock}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
