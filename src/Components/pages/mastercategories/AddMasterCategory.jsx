import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Ckeditor = require("@ckeditor/ckeditor5-build-classic/build/ckeditor.js");

const AddMasterCategory = () => {
  let ckeditorRef = React.useCallback((node) => {
    if (node) {
      Ckeditor.create(node);
    }
  }, []);
  const history = useHistory();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(
    "https://ayushimart.in/adminpanel/assets/admin/img/400x400/img2.jpg"
  );
  const [selectedImage2, setSelectedImage2] = useState(
    "https://ayushimart.in/adminpanel/assets/admin/img/400x400/img2.jpg"
  );
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setstatus] = useState({});
  // const [editorData, setEditorData] = useState("");
  // const [formData, setFormData] = useState({
  //   master_category_name: "",
  //   description: "",
  // });
  const [formData, setFormData] = useState({
    master_category_name: "",
    description: "",
    // status: "",
  });

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

    formDataWithFiles.append(
      "master_category_name",
      formData.master_category_name
    );

    // formDataWithFiles.append("description", editorData.description);
    formDataWithFiles.append("status", status.status == "true");
    formDataWithFiles.append("description", formData.description);
    // formData.append('description', editorData);

    try {
      const response = await fetch(
        "http://localhost:8080/api/master-category/create",
        {
          method: "POST",
          body: formDataWithFiles,
        }
      );

      // Handle response from the server
      if (response.ok) {
        console.log("Images uploaded successfully!");
        setSuccessMessage("");
        // Reset the form and state
        setSelectedFiles([]);
        setFormData({ master_category_name: "", description: "" });
        alert("Images uploaded successfully!");
        history.push("/add-master-category");
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
                <h5>Add New Master Category</h5>
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
                  value={formData.master_category_name}
                  onChange={handleInputChange}
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
            data={formData.description}
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
                          onChange={handleInputChangeStatus}
                          type="radio"
                          className="form-check-input"
                          name="status"
                          value="true"
                        />
                        Enable
                      </Label>
                    </FormGroup>
                    &nbsp; &nbsp;
                    <FormGroup check>
                      <Label check>
                        <input
                          onChange={handleInputChangeStatus}
                          type="radio"
                          className="form-check-input"
                          value="false"
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
              <button className="btn btn-primary">Add</button>
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

export default AddMasterCategory;
