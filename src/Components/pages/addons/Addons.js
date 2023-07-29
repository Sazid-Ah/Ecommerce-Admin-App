import axios from "axios";
import { MDBDataTable } from "mdbreact";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Addons = () => {
  const history = useHistory();
  const [BlockId, setBlockId] = useState("");
  const [stardata, setData] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(
    "https://ayushimart.in/adminpanel/assets/admin/img/400x400/img2.jpg"
  );

  function handleChange(e) {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setBlockId(option);
  }

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);

    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const [status, setStatus] = useState(false);

  let apiBaseUrl = window.location.hostname;
  if (apiBaseUrl === "localhost") {
    apiBaseUrl = "http://localhost:8080/api";
  } else {
    apiBaseUrl = "http://localhost:8080/api";
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const requestData = {
      name: data.name,
      price: data.price, // Include if needed
      // image: selectedFiles[0], // Include if needed
    };

    try {
      const response = await axios.post(
        apiBaseUrl + "/addons/create",
        requestData
      );
      if (response.status === 200) {
        // alert("Added Successfully");
        alert("Addon Inserted successfully!");
        history.push("/Addons");
        window.location.reload();
        // Handle successful response
      } else {
        setStatus((current) => !current);
        // Handle error response
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }

    setStatus(true);
  };

  // const [data, setData] = useState([]);

  useEffect(async () => {
    let apiBaseUrl = window.location.hostname;
    if (apiBaseUrl == "http://localhost:8080") {
      apiBaseUrl = "http://localhost:8080";
    } else {
      apiBaseUrl = "http://localhost:8080";
    }
    await fetch(apiBaseUrl + "/api/addons/getList", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const Data = res.data;

        const columnStyle = {
          width: "30%", // Adjust the width percentage as per your requirement
        };

        const data = {
          columns: [
            {
              label: "#",
              field: "id",
              sort: "asc",
              width: 150,
            },

            {
              label: "NAME",
              field: "name",
              sort: "asc",
              width: 150,
            },
            {
              label: "PRICE",
              field: "price",
              sort: "asc",
              width: 150,
            },
            {
              label: "VENDOR",
              field: "vendor",
              sort: "asc",
              width: 150,
            },
            {
              label: "STATUS",
              field: "status",
              sort: "asc",
              style: columnStyle,
            },
            // {
            //   label: "VENDOR COUNT",
            //   field: "vendor_count",
            //   sort: "asc",
            //   width: 150,
            // },
            {
              label: "ACTION",
              field: "action",
              sort: "asc",
            },
          ],
          rows: Object.keys(Data).map((key) => ({
            id: parseInt(key) + 1,
            name: Data[key].name,
            price: Data[key].price,
            vendor: "Ayushi123",
            status: Data[key].status,
            action: (
              <Link
                className="badge edit bg-secondary"
                to={"/addons/edit/" + Data[key]._id}
              >
                Update
              </Link>
            ),

            status:
              Data[key].status == true ? (
                <span className="manage badge bg-success">Enable</span>
              ) : (
                <span className="manage badge bg-danger">Disable</span>
              ),
          })),
        };
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className="mx-2 my-3"> Add New Addons</h3>
        <div className="card">
          <div className="card">
            <div className="container">
              <div className="card-title">Add New Addons</div>
            </div>
          </div>
          <div className="card">
            <div className="container my-3">
              <div>
                <ul className="nav nav-tabs mb-4 mx-5">
                  <li>
                    <a href="" className="">
                      ENGLISH (EN)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="card">
              <div className="container">
                <div className="form">
                  <p className="">Name(EN)</p>

                  <input
                    className="form-control"
                    placeholder="Addons name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    {...register("name", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.flat_number && (
                    <p className="text-error">Please check the Name</p>
                  )}
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form">
                        <p className="">Vendor</p>
                        <select className="form-control">
                          <option selected disabled className="bg-dark">
                            ----Select Vendor---
                          </option>
                          <option>Ayushi123</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form">
                        <p className="">Price</p>

                        <input
                          className="form-control"
                          placeholder="001"
                          name="price"
                          onChange={handleChange}
                          type="text"
                          {...register("price", {
                            required: true,
                            maxLength: 20,
                          })}
                        />
                        {errors.flat_number && (
                          <p className="text-error">Please check the Name</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <br />
                      <lable>Status*</lable>
                      <div>
                        <span>Enable</span>&nbsp;&nbsp;
                        <input
                          type="radio"
                          name="true"
                          class="form-check-input"
                        ></input>
                        <span className="mx-2">Disable</span>&nbsp;
                        <input
                          type="radio"
                          name="true"
                          class="form-check-input"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <label htmlFor="">Logo* ( Ratio 1:1)</label>
                <br />
                <input
                  type="file"
                  name="image"
                  id="customFileEg1"
                  class="custom-file-input form-control "
                  onChange={handleFileChange}
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                  required=""
                /> */}
                {/* <div>
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
                </div> */}
                {/* <div className="container">
                  <div className="row">
                    <div class="col">
                      <label htmlFor="">Logo* ( Ratio 1:1)</label>
                      <br />
                      <input className="form-control" type="file" />
                    </div>
                    <div class="col">2 of 2</div>
                  </div>
                </div> */}
                {/* <div className="form">
                  <p className="">Main Category</p>
                  <select
                    className="form-control"
                    {...register("master_categoryId", {
                      required: true,
                    })}
                    onChange={handleChange}
                  >
                    <option value="" id="1">
                      --Select Master Category--
                    </option>
                    {provideData1.map((data) => (
                      <option key={data._id} value={data._id} id={data._id}>
                        {data.master_category_name}
                      </option>
                    ))}
                  </select>
                  {errors.master_category_name && (
                    <p className="text-error">
                      Please check the master_category_name
                    </p>
                  )}
                </div> */}

                <button className="btn btn-primary my-4">Add</button>
              </div>
            </div>
            <div>
              <div className="container">
                {/* test */}
                <MDBDataTable
                  className="table_class view_category"
                  striped
                  hover
                  // scrollX
                  responsive
                  data={stardata}
                  paginationLabel={["PREV", "NEXT"]}
                />
                {/* test */}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Addons;
