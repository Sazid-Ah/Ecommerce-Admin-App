import React from "react";
import "./ViewOrder.css";
const ViewOrder = () => {
  const order = {
    orderId: 100013,
    paymentStatus: "unpaid",
    vendorName: "Vendor XYZ",
    orderDate: "2023-07-07 12:22",
  };

  //   style={{ }}
  const stylebest = {
    // marignLeft: "0p45x",
    listStyleType: "none",
    // padding-right:40px; // Adjust this value to control the space between the columns
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Orders / Order Details</p>
          </div>

          {/* <ul className="d-flex" >
            <li style={{textDecoration:"none"}}>
              <h5>Order #100013</h5>
            </li>
            <li style={{textDecoration:"none"}}>
              <h5>Order #100013</h5>
            </li>
            <li>
              <h5>Order #100013</h5>
            </li>
            <li>
              <h5>Order #100013</h5>
            </li>
          </ul> */}
          <div className="container">
            <ul className="d-flex gap-2">
              <li style={stylebest}>
                <h5>Order #100013</h5>
              </li>
              <li style={stylebest}>
                <p class="data1">unpaid</p>
              </li>
              <li style={stylebest}>
                {" "}
                <p class="data1">pending</p>
              </li>

              <li style={stylebest}>
                {" "}
                <i class="fa fa-calendar" aria-hidden="true">
                  {" "}
                  07 Jul 2023 12:22
                </i>
              </li>
            </ul>
          </div>

          {/* <div className="row ">
            <div className="col-md-8">
              <div
                className="row "
              >
                <div className="col-md">
                  
                </div>
                <div className="col-md">
                  <p class="data1">unpaid</p>
                </div>
                <div className="col-md">
                  <p class="data1">pending</p>
                </div>
                <div className="col-md">
                  <i class="fa fa-calendar" aria-hidden="true">
                    {" "}
                    07 Jul 2023 12:22
                  </i>
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div> */}
          {/* <div className="row">
            <div className="col-md-12">
              <div className="col">
                
              </div>
              <div className="col">
               
              </div>
              <div className="col">
                
              </div>
              <div className="col">
                
              </div>
            </div>
          </div> */}

          <div className="col-lg-4">
            <p>
              <i class="fa fa-print" aria-hidden="true">
                {" "}
                Print Invoice{" "}
              </i>
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              <i class="fa fa-home" aria-hidden="true">
                {" "}
                Vendor : Ayushi mart
              </i>
            </p>
          </div>
          <div className="col-lg-4">
            <p>Show locations on map</p>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Order Details </h4>
                </div>

                <div className="col-lg-6">
                  <button type="button" class="btn btn-info">
                    <i class="fa fa-pencil" aria-hidden="true"></i>Edit
                  </button>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-lg-4">
                  <p>Order Note :</p>
                </div>

                <div className="col-lg-8">
                  <p>Payment Method : Cash On Delivery</p>
                  <p>
                    Reference Code :{" "}
                    <a href="">
                      <button type="button" class="btn btn-info">
                        Add
                      </button>
                    </a>
                  </p>

                  <p>Order Type : Delivery</p>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
