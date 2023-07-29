import axios from "axios";
import { MDBDataTable } from "mdbreact";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [BlockId, setBlockId] = useState("");
  const [MastercategoryId, setMasterCategoryId] = useState("");
  const [stardata, setData] = useState([]);

  function handleChange(e) {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    const selectedValue = e.target.value;

    const [subcategoryId, masterCategoryId] = selectedValue.split(":");

    setBlockId(subcategoryId);
    setMasterCategoryId(masterCategoryId);
  }

  const [provideData1, setData1] = useState([]);

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
          setData1(provideData1);
        });
    }
    fetchData();
  }, []);

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
      method: "post",
      url: apiBaseUrl + "/sub-category/create",
      data: {
        category_name: data.category_name,
        status: data.status,
        master_categoryId: MastercategoryId,
        categoryId: BlockId,
      },
    })
      .then((response) => {
        console.log("response");

        if (response.ok) {
          // Handle successful response
        } else {
          setStatus((current) => !current);
          // Handle error response
        }
      })
      .catch((error) => {
        console.log(error);
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
    await fetch(apiBaseUrl + "/api/sub-category/getList", {
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
              label: "SUB CATEGORY NAME",
              field: "category_name",
              sort: "asc",
              width: 150,
            },
            {
              label: "CATEGORY NAME",
              field: "name",
              sort: "asc",
              width: 150,
            },
            {
              label: "MAIN CATEGORY NAME",
              field: "master_category_name",
              // master_category
              sort: "asc",
              width: 150,
            },
            {
              label: "STATUS",
              field: "status",
              sort: "asc",
              width: 150,
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
              width: 150,
            },
          ],
          rows: Object.keys(communitydata).map((key) => ({
            id: parseInt(key) + 1,
            category_name: communitydata[key].category_name,
            name: communitydata[key].category.category_name,
            master_category_name:
              communitydata[key].master_category.master_category_name,
            // _id: communitydata[key]._id,
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
        <h3 className="mx-2 my-3"> Add New Sub Category</h3>
        <div className="card">
          <div className="card">
            <div className="container">
              <div className="card-title">Add New Sub Category</div>
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
                    placeholder="Add new sub category name"
                    name="category_name"
                    type="text"
                    {...register("category_name", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.flat_number && (
                    <p className="text-error">Please check the Name</p>
                  )}
                </div>
                <div className="form">
                  <p className="">Main Category</p>
                  <select
                    className="form-control"
                    {...register("master_categoryId", {
                      required: true,
                    })}
                    onChange={handleChange}
                  >
                    <option
                      value=""
                      id="1"
                      selected
                      disabled
                      className="bg-dark"
                    >
                      --Select Master Category--
                    </option>
                    {provideData1.map((data) => (
                      <option
                        key={data._id}
                        value={`${data._id}:${data.master_category._id}`}
                        id={data._id}
                      >
                        {data.category_name} (
                        {data.master_category.master_category_name})
                      </option>
                    ))}
                  </select>
                  {errors.master_category_name && (
                    <p className="text-error">
                      Please check the master_category_name
                    </p>
                  )}
                </div>

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

export default SubCategory;
