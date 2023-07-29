import React, { useEffect, useState } from "react";
import { Col, Row, CardTitle, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";

const MasterCategories = () => {
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
    await fetch(apiBaseUrl + "/api/master-category/getList", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const Alldata = res.data;

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
              label: "Name",
              field: "master_category_name",
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
              label: "VENDOR COUNT",
              field: "vendor_count",
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
          rows: Object.keys(Alldata).map((key) => ({
            id: parseInt(key) + 1,
            master_category_name: Alldata[key].master_category_name,
            _id: Alldata[key]._id,
            status: Alldata[key].status,
            // user_mobile_number: Alldata[key].user_mobile_number,
            community_address_line_1: Alldata[key].community_address_line_1,

            action: (
              <Link
                className="badge edit bg-secondary"
                to={"/edit/mastercategory/" + Alldata[key]._id}
              >
                Update
              </Link>
            ),

            status:
              Alldata[key].status == true ? (
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
              Master Categories..
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

export default MasterCategories;
