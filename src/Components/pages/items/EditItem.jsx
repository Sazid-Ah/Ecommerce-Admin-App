import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Label, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";

function EditItem() {
  const { id } = useParams();
  const [price, setPrice] = useState(0);
  // const [totalstock, SetTotal] = useState(0);
  const [gstRate, setGSTRate] = useState(0);
  const [inclusiveGST, setInclusiveGST] = useState(0);
  const [exclusiveGST, setExclusiveGST] = useState(0);
  const totalAmountInclu = price - inclusiveGST;
  const totalAmountExlcu = parseFloat(price) + parseFloat(exclusiveGST);

  const handlePriceChange = (e) => {
    const inputPrice = parseFloat(e.target.value);
    setPrice(inputPrice);
  };

  const handleGSTRateChange = (e) => {
    const inputRate = parseFloat(e.target.value);
    setGSTRate(inputRate);
  };

  const calculateInclusiveGST = () => {
    const exclusivePrice = price / (1 + gstRate / 100);
    const gstAmount = price - exclusivePrice;
    setInclusiveGST(gstAmount.toFixed(2));
  };

  const calculateExclusiveGST = () => {
    const gstAmount = (price * gstRate) / 100;
    const inclusivePrice = price + gstAmount;
    setExclusiveGST(gstAmount.toFixed(2));
  };

  let apiBaseUrl = window.location.hostname;
  if (apiBaseUrl === "localhost") {
    apiBaseUrl = "http://localhost:8080/api";
  } else {
    apiBaseUrl = "http://localhost:8080/api";
  }
  const history = useHistory();
  const ImageApiBaseUrl = "http://localhost:8080";
  const [name, setname] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [discountType, setdiscountType] = useState("");
  const [discountprice, setdiscountprice] = useState();
  const [BrandId, setBrandId] = useState({});
  const [subId, setsubdId] = useState({});
  const [catId, setcatId] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [brandData, brandsetData] = useState([]);
  const [subdata, susetdata] = useState([]);
  const [masterdata, setmasterdata] = useState([]);
  const [status, setstatus] = useState(false);
  const [image, setimage] = useState("");

  // const [editorData, setEditorData] = useState("");

  const [formData, setFormData] = useState({
    master_category_name: "",
    description: "",
    price: "",
    userId: "",
    master_categoryId: "",
    vendor_id: "",
    brandId: "",
    categoryId: "",
    sub_categoryId: "",
    attributeId: "",
    discount_type: "",
    discount: "",
    gst: "",
    // gst_rate: "",
    // gst_excluded_price: "",
    unitId: "",
    name: "",
    total_stock: "",
    thumbnail: "",
    status: "",
  });

  console.log("formData");
  console.log(formData);

  // ----- attribute -----3
  const [selectedAttribute, setSelectedAttribute] = useState({
    _id: "",
    name: "",
  });
  const [value, setValue] = useState("");
  const [variationsArray, setVariationsArray] = useState([]);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleAttributeChange = (event) => {
    const { value } = event.target;
    // setSelectedAttribute(value);
    setValue("");
    setVariationsArray([]);

    const selectedId = event.target.value;
    const selectedName =
      event.target.options[event.target.selectedIndex].dataset.name;

    setSelectedAttribute({ _id: selectedId, name: selectedName });
  };

  // Function to handle changes in the price input
  const handleChangeprice = (index, value) => {
    const updatedVariations = [...variationsArray];
    if (updatedVariations[index]) {
      updatedVariations[index].price = parseFloat(value); // Convert the price to a number if needed
      setVariationsArray(updatedVariations);
    }
  };

  // Function to handle changes in the stock input
  const handleStockChange = (index, value) => {
    const updatedVariations = [...variationsArray];
    if (updatedVariations[index]) {
      updatedVariations[index].stock = parseInt(value, 10); // Convert the stock to an integer if needed
      setVariationsArray(updatedVariations);
    }
  };

  const handleInputChangeAt = (event) => {
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

  const handleAddVariation = (event) => {
    if (event.key === "Enter" && value.trim() !== "") {
      const newVariation = {
        variant: value,
        price: "",
        stock: "",
        attributeName: selectedAttribute.name,
      };
      setVariationsArray([...variationsArray, newVariation]);
      setValue("");
      event.preventDefault();
    }
  };

  const [totalstock, SetTotal] = useState(0);
  const [unitId, setunitId] = useState("");
  const [unit, setunit] = useState([]);

  // const variationsArray = [...]; // Your variations array here

  useEffect(() => {
    // Calculate the total and set it to the state
    let totalStock = 0;
    variationsArray.forEach((data) => {
      const stockValue = parseFloat(data.stock);
      if (!isNaN(stockValue)) {
        totalStock += stockValue;
      }
    });
    SetTotal(totalStock);
  }, [variationsArray]);

  // ----- end ------
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "price") {
      setPrice(parseFloat(value));
    }

    if (name === "gst_rate") {
      setGSTRate(parseFloat(value));
    }
  };

  const [attributeId, setattributeId] = useState("");

  const HandleChangeattribute = (event) => {
    setattributeId(event.target.value);
  };

  const handlechangeUnit = (event) => {
    setunitId(event.target.value);
  };

  const handlechangediscount = (event) => {
    setdiscountprice(event.target.value);
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);

    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const HandleChangeStatus = (e) => {
    setstatus(e.target.value === "true");
  };

  useEffect(() => {
    async function fetchData() {
      let apiBaseUrl = window.location.hostname;
      if (apiBaseUrl === "localhost") {
        apiBaseUrl = "http://localhost:8080/api";
      } else {
        apiBaseUrl = "http://localhost:8080/api";
      }
      await fetch(apiBaseUrl + "/category/getList", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          const provideData1 = res.data;
          setData(provideData1);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let apiBaseUrl = window.location.hostname;
      if (apiBaseUrl === "localhost") {
        apiBaseUrl = "http://localhost:8080/api";
      } else {
        apiBaseUrl = "http://localhost:8080/api";
      }
      await fetch(apiBaseUrl + "/brand/getList", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          const provideData1 = res.data;
          brandsetData(provideData1);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let apiBaseUrl = window.location.hostname;
      if (apiBaseUrl === "localhost") {
        apiBaseUrl = "http://localhost:8080/api";
      } else {
        apiBaseUrl = "http://localhost:8080/api";
      }
      await fetch(apiBaseUrl + "/sub-category/getList", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          const provideData1 = res.data;
          susetdata(provideData1);
        });
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      let apiBaseUrl = window.location.hostname;
      if (apiBaseUrl === "localhost") {
        apiBaseUrl = "http://localhost:8080/api";
      } else {
        apiBaseUrl = "http://localhost:8080/api";
      }
      await fetch(apiBaseUrl + "/master-category/getList", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          const provideData1 = res.data;
          setmasterdata(provideData1);
        });
    }
    fetchData();
  }, []);
  // ----- get list of unit -----
  useEffect(() => {
    async function fetchData() {
      let apiBaseUrl = window.location.hostname;
      if (apiBaseUrl === "localhost") {
        apiBaseUrl = "http://localhost:8080/api";
      } else {
        apiBaseUrl = "http://localhost:8080/api";
      }
      await fetch(apiBaseUrl + "/unit/getList", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          const provideData1 = res.data;
          setunit(provideData1);
        });
    }
    fetchData();
  }, []);
  //  ----- get attribute --------
  const [Attribute, setAttribute] = useState([]);
  const [attdata, setadddata] = useState("");
  const [newArray, setNewArray] = useState([]);

  const handleChnagename = (event) => {
    // setadddata(event.target.value);
    const newValue = event.target.value;

    // Split the input value by commas to create an array
    const newArray = newValue.split(",");
    // setInputValue(newValue);
    setadddata(newValue);
    setNewArray(newArray);
  };

  useEffect(() => {
    async function fetchData() {
      let apiBaseUrl = window.location.hostname;
      if (apiBaseUrl === "localhost") {
        apiBaseUrl = "http://localhost:8080/api";
      } else {
        apiBaseUrl = "http://localhost:8080/api";
      }
      await fetch(apiBaseUrl + "/attribute/getList", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          const provideData1 = res.data;
          setAttribute(provideData1);
        });
    }
    fetchData();
  }, []);

  const gstrate = [
    {
      rate: 0,
      name: "0%",
    },
    {
      rate: 5,
      name: "5%",
    },
    {
      rate: 12,
      name: "12%",
    },
    {
      rate: 18,
      name: "18%",
    },
    {
      rate: 28,
      name: "28%",
    },
  ];

  //    ---- start get single ----

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/item/getDataById/${id}`
        );
        const data = response.data.data;

        setFormData(data);
        // console.log(JSON.stringify(data));
        setname(data.name); // Set the name state with the fetched data
        setPrice(data.price); // Set the name state with the fetched data
        setimage(data.image_url); // Set the name state with the fetched data
        SetTotal(data.total_stock); // Set the name state with the fetched data
        setstatus(data.status); // Set the name state with the fetched data
        // setunitId(data.unit[0].name); // Set the name state with the fetched data
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [apiBaseUrl, id]);

  console.log("status");
  console.log(status);

  // useEffect(() => {
  //   // Concatenate the base URL and image to form the complete image URL
  //   setstatus(ImageApiBaseUrl + image);
  // }, [image, ImageApiBaseUrl]);

  //    ---- end get single ----

  useEffect(() => {
    // Concatenate the base URL and image to form the complete image URL
    setSelectedImage(ImageApiBaseUrl + image);
  }, [image, ImageApiBaseUrl]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedVariations = variationsArray.map((variation) => ({
      variant: variation.variant,
      price: variation.price,
      stock: variation.stock,
    }));

    const formDataWithFiles = new FormData();

    selectedFiles.forEach((file) => {
      formDataWithFiles.append("images", file);
    });

    formDataWithFiles.append("name", formData.name);
    // formDataWithFiles.append("userId", formData.userId);
    formDataWithFiles.append("master_categoryId", formData.master_categoryId);

    formattedVariations.forEach((variation, index) => {
      formDataWithFiles.append(
        `variations[${index}][variant]`,
        variation.variant
      );
      formDataWithFiles.append(`variations[${index}][price]`, variation.price);
      formDataWithFiles.append(`variations[${index}][stock]`, variation.stock);
    });

    formDataWithFiles.append("price", price);
    formDataWithFiles.append("discount_type", discountType);
    formDataWithFiles.append("discount", discountprice);
    formDataWithFiles.append("gst", formData.gst);
    formDataWithFiles.append("gst_rate", formData.gst_rate);
    formDataWithFiles.append("gst_excluded_price", formData.gst_excluded_price);
    formDataWithFiles.append("unitId", formData.unitId);
    formDataWithFiles.append("brandId", formData.brandId);
    formDataWithFiles.append("categoryId", formData.categoryId);
    formDataWithFiles.append("sub_categoryId", formData.sub_categoryId);
    formDataWithFiles.append("attributeId", formData.attributeId);
    formDataWithFiles.append("total_stock", totalstock);
    formDataWithFiles.append("status", status);
    formDataWithFiles.append("description", formData.description);

    try {
      const response = await fetch(`${apiBaseUrl}/item/updateById/${id}`, {
        method: "PUT",
        body: formDataWithFiles,
        // headers: {
        //   "Content-Type": "multipart/form-data", // Add this header
        // },
      });
      // Handle response from the server
      if (response.status === 200) {
        console.log("Uploaded successfully!");
        setSuccessMessage("");
        // Reset the form and state
        setSelectedFiles([]);
        setFormData({ master_category_name: "", description: "" });
        alert("Uploaded successfully!");
        history.push("/list");
        // window.location.reload();
        setSuccessMessage("Uploaded successfully!");
      } else {
        setErrorMessage("Error uploading images. Please try again.");
        console.error("Error uploading images:", response.statusText);
      }
    } catch (error) {
      setErrorMessage("Error uploading images. Please try again.");
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="py-5 px-4">
      <h2 className="mb-5">
        <i class="fa fa-edit"></i> Edit Item
      </h2>
      <span
        style={{
          color: "blue",
        }}
      >
        English(EN)
      </span>
      <hr />
      <Form onSubmit={handleSubmit}>
        <div
          className="mt-4"
          style={{
            boxShadow: "0px 0px 5px 0px #000",
            padding: "40px 20px",
            borderRadius: "5px",
          }}
        >
          <div className="mytext mb-5">
            <label>Name(EN)</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              //   value={name}
              defaultValue={formData.name || ""}
              required
              // value={formData.name}
              placeholder="New Items"
            />
          </div>
          <div>
            <label>Short Description (EN)</label>
            <br />
            <textarea
              className="form-control"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
              defaultValue={formData.description || ""}
              cols="30"
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 mt-4">
              <label>Master Category</label>
              <br />
              {/* <input type="text" className="form-control" placeholder="Select System Module" /> */}
              <select
                className="form-control"
                required
                name="master_categoryId" //
                value={formData.master_categoryId}
                defaultValue={formData.master_categoryId || ""}
                // Set the value from the formData state
                onChange={handleInputChange}
              >
                <option value="">--Select--</option>
                {masterdata.map((data) => (
                  <option key={data._id} value={data._id} id={data._id}>
                    {data.master_category_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6 mt-4">
              <label>Vendor</label>
              <br />
              {/* <input type="text" className="form-control" placeholder="Select System Module" /> */}
              <select className="form-control">
                <option>--Select--</option>
                <option>Ayushi123</option>
                {/* <option>FOOD</option> */}
                {/* <option>HOME</option> */}
              </select>
            </div>
            <div className="col-4 mt-4">
              <label>Price</label>
              <br />
              <input
                type="text"
                name="price"
                onChange={handlePriceChange}
                value={price}
                // value={formData.master_categoryId}
                defaultValue={price || ""}
                className="form-control"
                placeholder="0"
                required
              />
            </div>
            <div className="col-4 mt-4">
              <label>Discount Type</label>
              <br />
              <select className="form-control">
                <option>--Select--</option>
                <option>Percent</option>
                <option>Amount</option>
              </select>
            </div>
            <div className="col-4 mt-4">
              <label>Discount</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="discount"
                onChange={handlechangediscount}
                value={discountprice}
                placeholder="0"
              />
            </div>
            <div className="col-4 mt-4">
              <label>GST</label>
              <br />
              <div className="form-control">
                <input
                  type="radio"
                  id="inclusiveRadio"
                  name="Inclusive"
                  onClick={calculateInclusiveGST}
                />
                <label for="inclusiveRadio">Inclusive</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  id="exclusiveRadio"
                  name="Inclusive"
                  onClick={calculateExclusiveGST}
                />
                <label for="exclusiveRadio">Exclusive</label>
              </div>
            </div>
            <div className="col-4 mt-4">
              <label>GST Rate</label>
              <select
                className="form-control"
                value={gstRate}
                name="gstRate"
                onChange={handleGSTRateChange}
              >
                <option>--Select gst rate--</option>
                {gstrate.map((data) => (
                  <option key={data.rate} value={data.rate} id={data.rate}>
                    {data.name}
                  </option>
                ))}
              </select>
              {/* <select
                className="form-control"
                name="master_categoryId" // Add name attribute
                value={formData.master_categoryId} // Set the value from the formData state
                onChange={handleInputChange}
              >
                <option>--Select--</option>
                {masterdata.map((data) => (
                  <option key={data._id} value={data._id} id={data._id}>
                    {data.master_category_name}
                  </option>
                ))}
              </select> */}
              {/* <input
                type="number"
                value={gstRate}
                className="form-control"
                name="gstRate"
                placeholder="0%"
                onChange={handleGSTRateChange}
              /> */}
            </div>
            <div className="col-4 mt-4">
              <div className="row">
                <div className="col-md-6">
                  <label>GST Excluded Price</label>
                  <input
                    type="Number"
                    className="form-control"
                    // name="gst_excluded_price"
                    value={totalAmountInclu}
                    // onChange={handleInputChange}
                    // value={formData.gst_excluded_price}
                    placeholder="0"
                  />
                </div>
                <div className="col-md-6">
                  <label>GST Included Price</label>

                  <input
                    type="Number"
                    className="form-control"
                    // name="gst_excluded_price"
                    value={totalAmountExlcu}
                    // totalAmountInclu ? totalAmountInclu :
                    // onChange={handleInputChange}
                    // value={formData.gst_excluded_price}
                    placeholder="0"
                  />
                </div>
              </div>

              <br />
            </div>
            <div className="col-6 mt-4">
              <label>Unit</label>
              <br />
              <select
                value={formData.unitId}
                defaultValue={formData.unitId || ""}
                className="form-control"
                name="unitId"
                required
                onChange={handleInputChange}
              >
                <option value="">--Select--</option>
                {unit.map((data) => (
                  <option key={data._id} id={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6 mt-4">
              <label>Brand</label>
              <br />
              <select
                className="form-control"
                name="brandId"
                // value={BrandId} // Set the value from the formData state
                // onChange={handlechangeBrandId}
                onChange={handleInputChange}
                value={formData.brandId}
                defaultValue={formData.brandId || ""}
                required
              >
                {/* brandData */}
                <option value="">--Select--</option>
                {brandData.map((data) => (
                  <option value={data._id} key={data._id} id={data._id}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6 mt-4">
              <label>
                {" "}
                Category
                <span className="required" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <br />
              <select
                className="form-control"
                required
                name="categoryId"
                onChange={handleInputChange}
                value={formData.categoryId}
                defaultValue={formData.categoryId || ""}
              >
                <option value="">--Select--</option>
                {data.map((data) => (
                  <option key={data._id} value={data._id} id={data._id}>
                    {data.category_name}
                    {/* {data.category_name} 
                    (
                        {data.master_category.master_category_name}) */}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6 mt-4">
              <label>
                {" "}
                Sub Category
                <span className="required" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <br />
              <select
                className="form-control"
                name="sub_categoryId" // Add name attribute
                onChange={handleInputChange}
                value={formData.sub_categoryId}
                defaultValue={formData.sub_categoryId || ""}
                required
              >
                <option value="">--Select--</option>
                {subdata.map((data) => (
                  <option key={data._id} value={data._id} id={data._id}>
                    {data.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="col-12 my-4"
              style={{
                boxShadow: "0px 0px 5px 0px #000",
                padding: "40px 20px",
                borderRadius: "5px",
              }}
            >
              {/* <label>Attribute</label>
              <br />
              <select
                className="form-control"
                value={attributeId}
                onChange={HandleChangeattribute}
              >
                <option>--Select---</option>
                {Attribute.map((data) => (
                  <option key={data._id} id={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
              </select> */}
              {/*------- start attribute ----
              
                */}

              <div className="row">
                <div className="col md-12">
                  {/* <label htmlFor="attribute">Select Attribute:</label>
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
                    Add other attribute options here
                  </select> */}
                  <label>Attribute</label>
                  <br />
                  <select
                    className="form-control"
                    // onChange={handleInputChange}
                    // value={formData.attributeId}
                    // defaultValue={formData.attributeId || ""}
                    value={selectedAttribute._id}
                    onChange={handleAttributeChange}
                  >
                    <option selected>--Select---</option>
                    {Attribute.map((data) => (
                      <option
                        key={data._id}
                        id={data._id}
                        value={data._id}
                        data-name={data.name}
                      >
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">
                  {selectedAttribute.name && (
                    <input
                      type="text"
                      className="form-control w-50"
                      value={selectedAttribute.name}
                    />
                  )}
                </div>
                <div className="col-md-4">
                  {selectedAttribute.name && (
                    <div>
                      <input
                        type="text"
                        onChange={handleChangeValue}
                        onKeyPress={handleAddVariation}
                        value={value}
                        className="form-control"
                        placeholder="Choose your Variations"
                      />
                      {/* <button
                        onClick={handleAddVariation}
                        className="btn btn-primary mt-2"
                      >
                        Add Variation
                      </button> */}
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
                      onChange={handleInputChangeAt}
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
                          onChange={(event) =>
                            handleChangeprice(index, event.target.value)
                          }
                          // onChange={(event) =>
                          //   handleChangeprice(
                          //     (index, event.target.value)
                          //   )
                          // }
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
                          onChange={(event) =>
                            handleStockChange(index, event.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/*------- close attribute ----
              
                */}

              {/* <select
                className="form-control"
                value={attributeId}
                onChange={HandleChangeattribute}
              >
                <option>--Select---</option>
                {Attribute.map((data) => (
                  <option key={data._id} id={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
              </select> */}
              {/* <div className="row">
                <div className="col-md-4">
                  {selectedAttribute && (
                    <input
                      className="form-control w-25 mx-5"
                      value={selectedAttribute}
                    />
                  )}
                </div>
                <div className="col-md-4">
                  {selectedAttribute && (
                    <input
                      type="text"
                      value={attdata}
                      className="form-control"
                      onChange={handleChnagename}
                      // value={inputvalue}
                      placeholder="Choose your value."
                    />
                  )}
                </div>
                <div className="col-md-4"></div>
              </div> */}

              {/* Add other attribute-specific input fields here */}
              {/* <div className="row">
                <div className="col-md-4">
                  {selectedAttribute && (
                    <div>
                      <label htmlFor="variant">Variant:</label>
                      <br />
                      <input
                        type="text"
                        id="variant"
                        name="variant"
                        className="form-control w-25"
                        value={newArray}
                        onChange={handleInputChangeAt}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  {selectedAttribute === "color" && (
                    <div className="d-flex">
                      <label htmlFor="price">Price:</label>
                      <br />
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={Atprice}
                        className="form-control"
                        onChange={handleInputChangeAt}
                      />
                      <br />
                      <label htmlFor="stock">Stock:</label>
                      <br />
                      <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={stock}
                        className="form-control"
                        onChange={handleInputChangeAt}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  {selectedAttribute === "size" && (
                    <div className="d-flex">
                      <label htmlFor="price">Price:</label>
                      <br />
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={Atprice}
                        className="form-control"
                        onChange={handleInputChangeAt}
                      />
                      <br />
                      <label htmlFor="stock">Stock:</label>
                      <br />
                      <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={stock}
                        onChange={handleInputChangeAt}
                        className="form-control"
                      />
                    </div>
                  )}
                </div>
              </div> */}

              {/* Display variant and stock labels based on user input */}
              {/* {variant && <label>Variant: {selectedAttribute}</label>} */}
              {/* {Atprice && <label>Price: ${Atprice}</label>} */}
              {/* {stock && <label>Stock: {stock}</label>} */}
            </div>
            <div className="col-6 mt-4">
              <label>Total stock</label>
              <br />
              <input
                type="text"
                name="total_stock"
                // onChange={handleInputChange}
                value={totalstock}
                defaultValue={totalstock || ""}
                className="form-control"
              />
            </div>
            <div className="container">
              <br />
              <div className="card p-2">
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="name">
                        Status<em>*</em>
                      </Label>
                      <div className="radio-category d-flex">
                        <FormGroup check>
                          <Label check>
                            <input
                              onChange={HandleChangeStatus}
                              type="radio"
                              className="form-check-input"
                              name="status"
                              value="true"
                              checked={status === true}
                              // defaultValue={status || ""}
                            />
                            Enable
                          </Label>
                        </FormGroup>
                        &nbsp; &nbsp;
                        <FormGroup check>
                          <Label check>
                            <input
                              onChange={HandleChangeStatus}
                              value="false"
                              // checked={status === false}
                              checked={status === false}
                              // defaultValue={status || ""}
                              type="radio"
                              className="form-check-input"
                              name="status"
                            />
                            Disable
                          </Label>
                        </FormGroup>
                      </div>
                      {/* {errors.flat_status && (
                <p className="text-error">Please check atleast one</p>
              )} */}
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
            {/* <div className="col-6 mt-4">
              <label>
                {" "}
                Addon
                <span className="required" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <br />
              <select className="form-control">
                <option></option>
                <option>DEMO</option>
                <option>FOOD</option>
                <option>HOME</option>
              </select>
            </div> */}
            {/* <div className="col-6 mt-4">
              <label>
                {" "}
                Available time starts
                <span className="required" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <br />
              <select className="form-control">
                <option></option>
                <option>DEMO</option>
                <option>FOOD</option>
                <option>HOME</option>
              </select>
            </div>
            <div className="col-6 mt-4">
              <label>
                {" "}
                Available time ends
                <span className="required" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <br />
              <select className="form-control">
                <option></option>
                <option>DEMO</option>
                <option>FOOD</option>
                <option>HOME</option>
              </select>
            </div> */}

            <div className="col-12">
              <div class="form-group pt-4">
                <label class="text-dark">Item Thumbnail</label>
                <small
                  //  style="color: red"
                  style={{ color: "red" }}
                >
                  * ( Ratio 1:1 )
                </small>
                <br />
                <div class="custom-file">
                  <input
                    type="file"
                    name="image"
                    id="customFileEg1"
                    class="custom-file-input form-control "
                    onChange={handleFileChange}
                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    required=""
                  />
                  {/* <span>
                {" "}
                <label
                  class="custom-file-label form-control"
                  for="customFileEg1"
                >
                  Choose File
                </label>{" "}
              </span> */}
                </div>

                <center
                  // style="display: none"
                  id="image-viewer-section"
                  class="pt-2"
                >
                  <img
                    style={{
                      height: "200px",
                      border: "1px solid",
                      borderRadius: "10px",
                    }}
                    id="viewer"
                    src={selectedImage}
                    alt="banner image"
                  />
                </center>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}

export default EditItem;
