import { Col, Row } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

const Artist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let apiBaseUrl = window.location.hostname;
    if (apiBaseUrl == "localhost") {
      apiBaseUrl = "https://api.pexeek.com/api";
    } else {
      apiBaseUrl = "https://api.pexeek.com/api";
    }
    const url = apiBaseUrl + "/auth/get_all_artists";

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   b_c_id: "62c0018ac393a0bf4a2c82f9",
      //   f_new_status: "1",
      // }),
    };
    async function fetchData() {
      await fetch(url, settings)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          //console.log(res);
          var customer_data = res.data;
          const data = {
            columns: [
              {
                label: "#",
                field: "id",
                short: "asc",
                width: 150,
              },
              {
                label: "First Name",
                field: "first_name",
                sort: "asc",
                width: 100,
              },
              {
                label: "Last Name",
                field: "last_name",
                sort: "asc",
                width: 100,
              },
              {
                label: "Artist Email",
                field: "artist_email",
                sort: "asc",
                width: 100,
              },

              {
                label: "Artist Mobile Number",
                field: "artist_mobile_number",
                sort: "asc",
                width: 100,
              },
              {
                label: "Status",
                field: "is_verified",
                sort: "asc",
                width: 100,
              },
              // {
              //   label: "Actions",
              //   field: "edit",
              //   width: 100,
              // },
              // {
              //   label: "View",
              //   field: "bookingservice",
              //   width: 100,
              // },
            ],
            rows: Object.keys(customer_data).map((key) => ({
              id: parseInt(key) + 1,
              first_name: customer_data[key].first_name,
              last_name: customer_data[key].last_name,
              artist_email: customer_data[key].artist_email,
              artist_mobile_number: customer_data[key].artist_mobile_number,
              is_verified: customer_data[key].is_verified,
              amount:
                customer_data[key].b_amount > 0
                  ? parseInt(customer_data[key].b_amount)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "/-"
                  : "-",

              customerid: (
                <Link
                  // className="badge edit bg-secondary"
                  to={"/customer"}
                >
                  {customer_data[key].customer_id}
                </Link>
              ),
              // status:
              //   customer_data[key].b_status > 0 ? (
              //     <span className="manage badge bg-success">Enable</span>
              //   ) : (
              //     <span className="manage badge bg-danger">Disable</span>
              //   ),
              // status:(<span className="btn btn-success btn-status-{customer_data[key].status} btn-sm">Success</span>),
              // edit: (
              //   <Link
              //     className="badge edit bg-secondary"
              //     to={"/vieworders-" + customer_data[key].order.user_id}
              //   >
              //     Update
              //   </Link>
              // ),
              // bookingservice: (
              //   <Link
              //     className="badge edit bg-secondary"
              //     // to={"/vieworders-" + customer_data[key].order.user_id}
              //     to={"/vieworders/" + customer_data[key].order.artist_id}
              //   >
              //     View Orders
              //   </Link>
              // ),
            })),
          };
          setData(data);
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Artist</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the Artists
              </CardSubtitle>
              <MDBDataTable
                className="table_class"
                striped
                hover
                responsive
                data={data}
                paginationLabel={["<", ">"]}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Artist;

// // import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Grid,
//   CardHeader,
//   CardContent,
//   Avatar,
//   Button,
//   CircularProgress,
//   Collapse,
//   CardActionArea,
// } from "@material-ui/core";
// import { DataGrid } from "@mui/x-data-grid";
// import { useStyles } from "./BodyStyles";
// import { PageHeader } from "../Common/CommonComponent";
// import { GetPost } from "../../utils/blogRequest";
// import { Typography } from "@material-ui/core";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import { CardTravelOutlined, Rowing } from "@material-ui/icons";
// // import { Link } from "react-router-dom";
// import { Col, Row } from "reactstrap";
// import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
// import React, { useEffect, useState } from "react";
// import { MDBDataTable } from "mdbreact";
// import { Link } from "react-router-dom";

// export default function Orders() {
//   // const classes = useStyles();
//   // const [fetched, setfetched] = useState(false);
//   // const [posts, setPosts] = useState([]);

//   // //calling getpost api
//   // useEffect(() => {
//   //   if (!fetched) {
//   //     GetPost({ limit: 24 }).then(({ data: { data } }) => {
//   //       setPosts(data);
//   //     });
//   //     setfetched(true);
//   //   }
//   // }, [fetched]);

//   const [data, setData] = useState([]);
//   useEffect(async () => {
//     let apiBaseUrl = window.location.hostname;
//     if (apiBaseUrl == "localhost") {
//       apiBaseUrl = "https://api.pexeek.com/api";
//     } else {
//       apiBaseUrl = "https://api.pexeek.com/api";
//     }
//     const url = apiBaseUrl + "/order/get_all_orders";
//     const settings = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         f_id: "62c0018ac393a0bf4a2c82f9",
//         f_new_status: "1",
//       }),
//     };
//     await fetch(url, settings)
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         const customer_data = res.data;
//         console.log(customer_data[0].order.billing_first_name);
//         customer_data.map(function(ele){
// console.log(ele.order.billing_first_name);
//         });

//         const data = {
//           columns: [
//             {
//               label: "#",
//               field: "id",
//               short: "asc",
//               width: 150,
//             },
//             {
//               label: "First Name",
//               field: "billing_first_name",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "Last Name",
//               field: "billing_last_name",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "Email",
//               field: "email",
//               sort: "asc",
//               width: 200,
//             },
//             // {
//             //   label: "Email",
//             //   field: "email",
//             //   sort: "asc",
//             //   width: 200,
//             // },
//             {
//               label: "Mobile Number",
//               field: "mobile_number",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "House Number",
//               field: "house_number",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "Landmark",
//               field: "landmark",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "City",
//               field: "billing_city",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "State",
//               field: "billing_state",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "Pincode",
//               field: "billing_pincode",
//               sort: "asc",
//               width: 100,
//             },
//             // {
//             //   label: "Country",
//             //   field: "country",
//             //   sort: "asc",
//             //   width: 100,
//             // },
//             // {
//             //   label: "Package Name",
//             //   field: "package_name",
//             //   sort: "asc",
//             //   width: 100,
//             // },
//             {
//               label: "Discount Amount",
//               field: "discount",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "Total Amount",
//               field: "total",
//               sort: "asc",
//               width: 100,
//             },
//             {
//               label: "Date of Orders",
//               field: "order_date",
//               sort: "asc",
//               width: 100,
//             },
//             // {
//             //   label: "Status_of_Orders",
//             //   field: "status_of_Orders",
//             //   sort: "asc",
//             //   width: 100,
//             // },
//             // {
//             //   label: "Update",
//             //   field: "edit",
//             //   width: 100,
//             // },
//           ],

//           rows: Object.keys(customer_data).map((key) => ({
//             id: parseInt(key) + 1,

//             billing_first_name: customer_data[key].order.billing_first_name,
//             email: customer_data[key].order.email,
//             mobile_number: customer_data[key].order.mobile_number,
//             house_number: customer_data[key].order.house_number,
//             landmark: customer_data[key].order.landmark,
//             billing_city: customer_data[key].order.billing_city,
//             billing_state: customer_data[key].order.billing_state,
//             billing_pincode: customer_data[key].order.billing_pincode,
//             country: customer_data[key].order.country,
//             package_name: customer_data[key].order.package_name,
//             discount: customer_data[key].order.discount,
//             total: customer_data[key].order.total,
//             order_date: customer_data[key].order.order_date,
//             status_of_Orders: customer_data[key].order.status_of_Orders,
//             // mobile_number: "[customer services here]",
//             edit: (
//               <Link className="badge edit bg-secondary" to={"/"}>
//                 Update
//               </Link>
//             ),
//           })),
//         };
//         setData(data);
//         // console.log(data);
//       });
//   }, []);
//   return (
//     <div>
//       <Row>
//         <Col lg="12">
//           <Card>
//             <CardBody>
//               <CardTitle tag="h5">Orders Listing</CardTitle>
//               <CardSubtitle className="mb-2 text-muted" tag="h6">
//                 Overview of the Orders
//               </CardSubtitle>
//               <MDBDataTable
//                 className="table_class workerClass"
//                 striped
//                 hover
//                 responsive
//                 data={data}

//                 paginationLabel={["PREV", "NEXT"]}
//                 // style={{ margin: "" }}
//               />
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }
