import React, { useEffect, useState } from "react";
import { Col, Row, CardTitle, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";

const Item_on_the_way = () => {
  // const history = useNavigate();
  // function addfunc() {
  //   history("/communities/add");
  // }
  const buttonStyle = {
    textDecoration: "none",
  };

  let order_status = "item_on_the_way";
  const [data, setData] = useState([]);
  const [provideData1, setData1] = useState([]);

  useEffect(async () => {
    let apiBaseUrl = window.location.hostname;
    if (apiBaseUrl == "http://localhost:8080") {
      apiBaseUrl = "http://localhost:8080";
    } else {
      apiBaseUrl = "http://localhost:8080";
    }
    // http://localhost:8080/api/order/orders/pending
    await fetch(`${apiBaseUrl}/api/order/orders/${order_status}`, {
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
        // const provideData1 = res.data;
        console.log("communitydata");
        console.log(communitydata);
        setData1(communitydata);

        const data = {
          columns: [
            {
              label: "#",
              field: "id",
              sort: "asc",
              width: 150,
            },
            // {
            //   label: "ORDERS",
            //   field: "orders",
            //   sort: "asc",
            //   width: 150,
            // },
            {
              label: "DATE",
              field: "date",
              sort: "asc",
              width: 150,
            },
            {
              label: "CUSTOMERS",
              field: "customer",
              sort: "asc",
              width: 150,
            },
            {
              label: "PAYMENT STATUS",
              field: "payment_status",
              sort: "asc",
              width: 150,
            },
            {
              label: "ORDER STATUS",
              field: "order_status",
              sort: "asc",
              width: 150,
            },
            {
              label: "ORDER TYPE",
              field: "order_type",
              sort: "asc",
              width: 150,
            },
            {
              label: "TOTAL",
              field: "total",
              sort: "asc",
              width: 150,
            },
            {
              label: "NAME",
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
              label: "ACTION",
              field: "action",
              sort: "asc",
              width: 150,
            },
          ],
          rows: Object.keys(communitydata).map((key) => ({
            id: parseInt(key) + 1,
            orders: communitydata[key]._id,
            date: new Date(communitydata[key].created_at).toLocaleDateString(
              "en-GB"
            ),
            customer: (
              <span className="manage badge bg-primary">
                {communitydata[key].delivery_address[0].contact_person_name}
              </span>
            ),
            master_category_name: communitydata[key].master_category_name,
            _id: communitydata[key]._id,
            status: communitydata[key].status,
            total: communitydata[key].order_amount,
            // payment_status: communitydata[key].payment_status,
            payment_status:
              communitydata[key].payment_status == "delivery" ? (
                <span className="manage badge bg-danger">
                  {communitydata[key].payment_status}
                </span>
              ) : (
                <span className="manage badge bg-danger">
                  {communitydata[key].payment_status}
                </span>
              ),

            order_status:
              communitydata[key].order_status == "pending" ? (
                <span className="manage badge bg-success">
                  {communitydata[key].order_status}
                </span>
              ) : (
                <span className="manage badge bg-success">
                  {communitydata[key].order_status}
                </span>
              ),
            order_type:
              communitydata[key].order_type == "delivery" ? (
                <span className="manage badge bg-success">
                  {communitydata[key].order_type}
                </span>
              ) : (
                <span className="manage badge bg-primary">
                  {communitydata[key].order_type}
                </span>
              ),
            community_address_line_1:
              communitydata[key].community_address_line_1,

            action: (
              <Link
                className="badge edit bg-secondary"
                style={buttonStyle}
                to={"/order/order-details/" + communitydata[key]._id}
              >
                View
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
            <CardTitle className="mt-3" tag="h5">
              Item on the way Items..
            </CardTitle>
          </Col>
          <Col className="text-end">
            {/* <Button className="add_btn_class" onClick={addfunc}>
              Add Community
            </Button> */}
            <select name="" className="p-2" id="">
              <option value="" id="1">
                --Select Master Category--
              </option>
              {/* <option value="">{data.master_category_name}</option> */}
              {provideData1.map((elment) => (
                <option key={elment._id} value={elment._id} id={elment._id}>
                  {elment._id}
                </option>
              ))}
            </select>

            {/* <input
              type="text"
              value={data.master_category_name}
              //   onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search by master category name"
            /> */}
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

export default Item_on_the_way;
