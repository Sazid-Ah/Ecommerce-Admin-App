import React, { useEffect, useState } from "react";
import { Col, Row, CardTitle, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";

const Items = () => {
  // const history = useNavigate();
  // function addfunc() {
  //   history("/communities/add");
  // }
  const [data, setData] = useState([]);

  useEffect(async () => {
    let apiBaseUrl = window.location.hostname;
    if (apiBaseUrl == "http://localhost:8080") {
      apiBaseUrl = "http://localhost:8080";
    } else {
      apiBaseUrl = "http://localhost:8080";
    }
    await fetch(apiBaseUrl + "/api/item/getList", {
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
            {
              label: "IMAGE",
              field: "image",
              sort: "asc",
              width: 150,
            },
            {
              label: "NAME",
              field: "name",
              sort: "asc",
              width: 100,
            },
            {
              label: "CATEGORY",
              field: "category",
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
              width: 150,
            },
            {
              label: "ACTION",
              field: "action",
              sort: "asc",
              width: 150,
            },
          ],
          rows: Object.keys(communitydata).map((key) => ({
            id: parseInt(key) + 1,
            name: communitydata[key].name,
            category: communitydata[key].category.category_name,
            vendor: "Ayushi123",
            image: (
              <img
                style={{ borderRadius: "5px", overflow: "hidden" }}
                width={40}
                src={"http://localhost:8080" + communitydata[key].image_url}
                alt="item Image"
              />
            ),
            status: communitydata[key].status,

            price: communitydata[key].price,
            // user_mobile_number: communitydata[key].user_mobile_number,
            community_address_line_1:
              communitydata[key].community_address_line_1,

            action: (
              <Link
                className="badge edit bg-secondary"
                to={"/item/edit/" + communitydata[key]._id}
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
    <div className="card">
      <div className="card-body">
        <Row className="align-items-center">
          <Col>
            <CardTitle className="my-3" tag="h5">
              Item List
            </CardTitle>
          </Col>
          <Col className="text-end">
            {/* <Button className="add_btn_class" onClick={addfunc}>
              Add Community
            </Button> */}
          </Col>
        </Row>
        <MDBDataTable
          className="table_class view_category"
          striped
          hover
          // scrollX
          responsive
          data={data}
          paginationLabel={["PREV", "NEXT"]}
        />
      </div>
    </div>
  );
};

export default Items;
