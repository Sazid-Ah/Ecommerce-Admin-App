import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import "../../../assets/style.css";

const EditAddons = () => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [update, setupdate] = useState("");
  const { id } = useParams();

  const apiBaseUrl = "http://localhost:8080/api"; // Modify the base URL as needed

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `${apiBaseUrl}/addons/getDataById/${id}`
        );
        const data = response.data.data;
        setName(data.name); // Set the name state with the fetched data
        setupdate(data.status); // Set the name state with the fetched data
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [apiBaseUrl, id]);

  const HandleChange = (e) => {
    setName(e.target.value);
    // setupdate(e.target.value);
  };

  const HandleChangeStatus = (e) => {
    setupdate(e.target.value === "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${apiBaseUrl}/addons/updateById/${id}`,
        { name, status: update }
      );

      if (response.status === 200) {
        // Update successful, perform any necessary actions
        setStatus(true); // Set status to true to show the success message
      } else {
        // Handle unsuccessful response
        setStatus(false); // Set status to false to show the error message
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="col-12">
          <Card className="service_provider_form">
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-tag-fill me-2"></i>
              Edit Addon
            </CardTitle>
            <CardBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="name">
                      Name<em>*</em>
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      // onChange={(e) => setName(e.target.value)}
                      onChange={HandleChange}
                      placeholder="name"
                      value={name}
                      defaultValue={name || ""}
                    />
                  </FormGroup>
                  <Card className="service_provider_form">
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                      <i className="bi bi-circle-fill me-2"> </i>
                      <Label for="name" className="mb-0">
                        Status<em>*</em>
                      </Label>
                    </CardTitle>
                    <CardBody>
                      <Row>
                        <Col>
                          <FormGroup>
                            <div className="radio-category">
                              <FormGroup check>
                                <Label check>
                                  <input
                                    // {...register("category_status", {
                                    //   required: true,
                                    //   minLength: 1,
                                    //   value: provideData.category_status,
                                    // })}
                                    type="radio"
                                    onChange={HandleChangeStatus}
                                    className="form-check-input"
                                    value="true"
                                    name="status"
                                    checked={update === true}
                                    defaultValue={update || ""}
                                  />
                                  Enable
                                </Label>
                              </FormGroup>
                              <FormGroup check>
                                <Label check>
                                  <input
                                    // {...register("category_status", {
                                    //   required: true,
                                    //   minLength: 1,
                                    //   value: provideData.category_status,
                                    // })}
                                    onChange={HandleChangeStatus}
                                    type="radio"
                                    className="form-check-input"
                                    value="false"
                                    checked={update === false}
                                    defaultValue={update || ""}
                                    name="status"
                                  />
                                  Disable
                                </Label>
                              </FormGroup>
                            </div>
                            {/* {errors.category_status && (
                          <p className="text-error">Please check atleast one</p>
                        )} */}
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="justify-content-end d-flex">
                  <Button className="add-btn">
                    <Link className="add-btn color-white" to="/addons">
                      Back
                    </Link>
                  </Button>
                  &nbsp; &nbsp; &nbsp;
                  <Button className="add-btn " id="add_btn" type="submit">
                    Update Addon
                  </Button>
                  {status && (
                    <div className="message_api">
                      Addon Updated Successfully
                    </div>
                  )}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
export default EditAddons;
