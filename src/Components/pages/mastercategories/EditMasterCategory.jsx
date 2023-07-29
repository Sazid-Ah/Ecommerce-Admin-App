import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
import MakeEditor from "./MakeEditor";
import {
  Col,
  Row,
  CardTitle,
  Button,
  Form,
  Label,
  FormGroup,
} from "reactstrap";
import { MDBDataTable } from "mdbreact";
// import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Ckeditor = require("@ckeditor/ckeditor5-build-classic/build/ckeditor.js");

const EditMasterCategory = () => {
  let ckeditorRef = React.useCallback((node) => {
    if (node) {
      Ckeditor.create(node);
    }
  }, []);

  const apiBaseUrl = "http://localhost:8080/api"; // Modify the base URL as needed
  const ImageApiBaseUrl = "http://localhost:8080"; // Modify the base URL as needed
  const history = useHistory();
  const parms = useParams();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setstatus] = useState({});
  const [name, setname] = useState("");
  const [update, setupdate] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [image1, setimage1] = useState("");
  const { id } = useParams();

  // console.log(selectedImage + "3");
  const [formData, setFormData] = useState({
    master_category_name: "",
    description: "",
    // status: "",
  });

  // ImageApiBaseUrl + selectedImage || selectedImage

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `${apiBaseUrl}/master-category/getDataById/${id}` 
        );
        const data = response.data.data;
        // console.log(JSON.stringify(data));
        setname(data.master_category_name); // Set the name state with the fetched data
        setupdate(data.status); // Set the name state with the fetched data
        setdescription(data.description); // Set the name state with the fetched data
        setimage(data.icon); // Set the name state with the fetched data
        setimage1(data.thumbnail); // Set the name state with the fetched data
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [apiBaseUrl, id]);

  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage2, setSelectedImage2] = useState();
  useEffect(() => {
    // Concatenate the base URL and image to form the complete image URL
    setSelectedImage(ImageApiBaseUrl + image);
  }, [image, ImageApiBaseUrl]);

  useEffect(() => {
    // Concatenate the base URL and image1 to form the complete image URL
    setSelectedImage2(ImageApiBaseUrl + image1);
  }, [image1, ImageApiBaseUrl]);

  const HandleChange = (e) => {
    setname(e.target.value);
  };

  const HandleChangeStatus = (e) => {
    setupdate(e.target.value === "true");
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);

    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleFileChange2 = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    const file = event.target.files[0];
    setSelectedImage2(URL.createObjectURL(file));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeStatus = (event) => {
    const { name, value } = event.target;
    setstatus((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataWithFiles = new FormData();
    selectedFiles.forEach((file) => {
      formDataWithFiles.append("images", file);
    });
    formDataWithFiles.append("master_category_name", name);
    formDataWithFiles.append("description", formData.description);
    formDataWithFiles.append("status", update);
    try {
      const response = await axios.put(
        `${apiBaseUrl}/master-category/updateById/${id}`, // Include the ID in the URL
        formDataWithFiles
      );

      // Handle response from the server
      if (response.status === 200) {
        console.log("uploaded successfully!");
        setSuccessMessage("");
        // Reset the form and state
        setSelectedFiles([]);
        // setFormData({ master_category_name: "", description: "" });
        alert("Updated successfully!");
        history.push("/master-categories");
        // window.location.reload();
        setSuccessMessage("Images uploaded successfully!");
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
    <div className="container-fluid border border-2 p-0">
      <Form onSubmit={handleSubmit} action="">
        <div className="container">
          <h5 className="my-3">MASTER CATEGORY</h5>
          <div className="card">
            <div className="container">
              <div className="card-title p-4">
                <h5>Edit Master Category</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="container my-3">
              <ul class="nav nav-tabs mb-4">
                <li class="nav-item">
                  <a class="nav-link lang_link active" href="#" id="en-link">
                    English(EN)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="container my-5">
              <div className="form">
                <p>Master Category Name (EN)</p>
                <input
                  type="text"
                  name="master_category_name"
                  value={name}
                  defaultValue={name || ""}
                  onChange={HandleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <h5>Description (EN)</h5>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFormData((prevFormData) => ({
                ...prevFormData,
                description: data,
              }));
            }}
          />
        </div>
        <br />
        <div className="container-fluid">
          <div className="card p-3">
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
                          checked={update === true}
                          defaultValue={update || ""}
                          value="true"
                        />
                        Enable
                      </Label>
                    </FormGroup>
                    &nbsp; &nbsp;
                    <FormGroup check>
                      <Label check>
                        <input
                          onChange={HandleChangeStatus}
                          type="radio"
                          className="form-check-input"
                          value="false"
                          name="status"
                          checked={update === false}
                          defaultValue={update || ""}

                          // type="radio"
                          // onChange={HandleChangeStatus}
                          // className="form-check-input"
                          // value="true"
                          // name="status"
                          // checked={update === true}
                          // defaultValue={update || ""}
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
        <div className="container-fluid my-5">
          <div className="card p-4">
            <div className="row ">
              <div className="col-md-6">
                <p>
                  icon size : <span>Ratio(1:1)</span>
                </p>
                <div class="input-group mb-3">
                  <input
                    type="file"
                    name="icon"
                    class="form-control"
                    onChange={handleFileChange}
                    id="inputGroupFile01"
                  />
                </div>

                <center>
                  <img
                    // style="width: 150px; height:150px; border: 1px solid; border-radius: 10px;"
                    id="viewer"
                    src={selectedImage}
                    alt="image"
                    className=" my-3 border border-1 border-dark rounded rounded-2"
                    width={150}
                    height={150}
                  />
                  {/* <img src={selectedImage} alt="wert" /> */}
                </center>
              </div>
              <div className="col-md-6">
                <p>
                  thumbnail size : <span>Ratio(1:1)</span>
                </p>
                <div class="input-group mb-3">
                  <input
                    type="file"
                    name="thumbnail"
                    class="form-control"
                    onChange={handleFileChange2}
                    id="inputGroupFile01"
                  />
                </div>

                <center>
                  <img
                    // style="width: 150px; height:150px; border: 1px solid; border-radius: 10px;"
                    id="viewer"
                    src={selectedImage2}
                    alt="image"
                    className=" my-3 border border-1 border-dark rounded rounded-2"
                    width={200}
                    height={200}
                  />
                </center>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {/* Rest of your JSX */}
          {successMessage ? (
            <div>{successMessage}</div>
          ) : (
            <div>Please upload image.</div>
          )}
          {errorMessage && <div>{errorMessage}</div>}
        </div>
      </Form>
    </div>
  );
};

export default EditMasterCategory;
