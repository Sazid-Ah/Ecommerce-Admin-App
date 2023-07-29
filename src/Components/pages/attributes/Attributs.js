import axios from "axios";
import { MDBDataTable } from "mdbreact";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Form, FormGroup, Label, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Attributs = () => {
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
  const onSubmit = (data) => {
    axios({
      method: "post", //put
      url: apiBaseUrl + "/attribute/create",

      data: {
        name: data.name,
        status: data.status === "true",
        // block: data.block,
        // community: data.community,
        // flat_status: data.flat_status,
        // block_id:BlockId,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Attribute Inserted successfully!");
          history.push("/attributes");
          window.location.reload();
        } else {
          //console.log(response);
          setStatus((current) => !current);
          history.push("/attributes");
          // history.push("/Addons");
        }
      })
      .catch((error) => {
        //console.log(error);
        alert(error);
      });

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
    await fetch(apiBaseUrl + "/api/attribute/getList", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const communitydata = res.data;

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
            // {
            //   label: "Id",
            //   field: "_id",
            //   sort: "asc",
            //   width: 150,
            // },
            {
              label: "NAME",
              field: "name",
              sort: "asc",
              width: 150,
            },
            // {
            //   label: "LOGO",
            //   field: "image",
            //   // master_category
            //   sort: "asc",
            //   width: 150,
            // },
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
          rows: Object.keys(communitydata).map((key) => ({
            id: parseInt(key) + 1,
            name: communitydata[key].name,
            // image: (
            //   <img
            //     style={{ borderRadius: "5px", overflow: "hidden" }}
            //     width={40}
            //     src={"http://localhost:8080" + communitydata[key].logo_url}
            //     alt="Image"
            //   />
            // ),
            // master_category_name:
            //   communitydata[key].master_category.master_category_name,
            // // _id: communitydata[key]._id,
            status: communitydata[key].status,
            // user_mobile_number: communitydata[key].user_mobile_number

            action: (
              <Link
                className="badge edit bg-secondary"
                to={"/Communities/edit/" + communitydata[key]._id}
              >
                Update
              </Link>
            ),

            status:
              communitydata[key].status == true ? (
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
        <h3 className="mx-2 my-3"> Add New Attributes</h3>
        <div className="card">
          <div className="card">
            <div className="container">
              <div className="card-title">Add New Attributes</div>
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
                    placeholder="Attributes name"
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

                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="name">
                        Status<em>*</em>
                      </Label>
                      <div className="radio-category">
                        <FormGroup check>
                          <Label check>
                            <input
                              {...register("status", {
                                required: true,
                                minLength: 1,
                              })}
                              type="radio"
                              className="form-check-input"
                              value="true"
                            />
                            Enable
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <input
                              {...register("status", {
                                required: true,
                                minLength: 1,
                              })}
                              type="radio"
                              className="form-check-input"
                              value="false"
                            />
                            Disable
                          </Label>
                        </FormGroup>
                      </div>
                      {errors.flat_status && (
                        <p className="text-error">Please check atleast one</p>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                {/* <label htmlFor="">Logo* ( Ratio 1:1)</label> */}
                <br />
                {/* <input
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

export default Attributs;
