import { Col, Row } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

const ViewOrders = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   let apiBaseUrl = window.location.hostname;
  //   if (apiBaseUrl == "localhost") {
  //     apiBaseUrl = "https://api.pexeek.com/api";
  //   } else {
  //     apiBaseUrl = "https://api.pexeek.com/api";
  //   }
  //   const url = apiBaseUrl + "/order/edit_order";

  //   const settings = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     // body: JSON.stringify({
  //     //   b_c_id: "62c0018ac393a0bf4a2c82f9",
  //     //   f_new_status: "1",
  //     // }),
  //   };
  //   async function fetchData() {
  //     await fetch(url, settings)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((res) => {
  //         //console.log(res);
  //         var customer_data = res.data;
  //         const data = {
  //           // columns: [
  //           //   {
  //           //     label: "#",
  //           //     field: "id",
  //           //     short: "asc",
  //           //     width: 150,
  //           //   },
  //           //   {
  //           //     label: "First Name",
  //           //     field: "billing_first_name",
  //           //     sort: "asc",
  //           //     width: 100,
  //           //   },
  //           //   {
  //           //     label: "Last Name",
  //           //     field: "billing_last_name",
  //           //     sort: "asc",
  //           //     width: 100,
  //           //   },
  //           //   {
  //           //     label: "State",
  //           //     field: "billing_state",
  //           //     sort: "asc",
  //           //     width: 100,
  //           //   },

  //           //   // {
  //           //   //   label: "Customer ID",
  //           //   //   field: "customerid",
  //           //   //   sort: "asc",
  //           //   //   width: 100,
  //           //   // },
  //           //   // {
  //           //   //   label: "Status",
  //           //   //   field: "status",
  //           //   //   sort: "asc",
  //           //   //   width: 100,
  //           //   // },
  //           //   // {
  //           //   //   label: "Actions",
  //           //   //   field: "edit",
  //           //   //   width: 100,
  //           //   // },
  //           //   {
  //           //     label: "View",
  //           //     field: "bookingservice",
  //           //     width: 100,
  //           //   },
  //           // ],
  //           rows: Object.keys(customer_data).map((key) => ({
  //             id: parseInt(key) + 1,
  //             billing_first_name: customer_data[key].order.billing_first_name,
  //             billing_last_name: customer_data[key].order.billing_last_name,
  //             billing_state: customer_data[key].order.billing_state,
  //             amount:
  //               customer_data[key].b_amount > 0
  //                 ? parseInt(customer_data[key].b_amount)
  //                     .toFixed(2)
  //                     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "/-"
  //                 : "-",

  //             customerid: (
  //               <Link
  //                 // className="badge edit bg-secondary"
  //                 to={"/customer"}
  //               >
  //                 {customer_data[key].customer_id}
  //               </Link>
  //             ),
  //             // status:
  //             //   customer_data[key].b_status > 0 ? (
  //             //     <span className="manage badge bg-success">Enable</span>
  //             //   ) : (
  //             //     <span className="manage badge bg-danger">Disable</span>
  //             //   ),
  //             // status:(<span className="btn btn-success btn-status-{customer_data[key].status} btn-sm">Success</span>),
  //             // edit: (
  //             //   <Link
  //             //     className="badge edit bg-secondary"
  //             //     to={"/vieworders" + customer_data[key]._id}
  //             //   >
  //             //     Update
  //             //   </Link>
  //             // ),
  //             bookingservice: (
  //               <Link
  //                 className="badge edit bg-secondary"
  //                 to={"/vieworders" + customer_data[key].order._id}
  //               >
  //                 View Orders
  //               </Link>
  //             ),
  //           })),
  //         };
  //         setData(data);
  //       });
  //   }
  //   fetchData();
  // }, []);
  return (
    <div>
      <h1>fjbgffnj</h1>
    </div>
  );
};

export default ViewOrders;
