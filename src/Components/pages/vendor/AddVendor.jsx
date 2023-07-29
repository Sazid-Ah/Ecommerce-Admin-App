import React from "react";
import { Button, Form, Label } from "reactstrap";

const AddVendor = () => {
  return (
    <div className="container-fluid">
      <div className="">
        <div className="header">
          <h2 className="my-2">
            <i class="fas fa-solid fa-circle-plus"></i> Add New Vendor
          </h2>
          <div>
            <p className="mx-5">VENDOR INFO</p>
            <hr />
          </div>
        </div>

        <Form className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="mx-5 ">
                <label>Vendor Name</label>
                <br />
                <input className="form-control" />
                <br />
                <label>Vendor Address</label>
                <br />
                <textarea className="form-control" />
                <br />
                <label>VAT/TAX (%)</label>
                <br />
                <input className="form-control" />
                <br />
                <label className="input-label">Approx delivery time</label>
                <div className="input-group">
                  <input placeholder="min:10" className="form-control" />
                  <input placeholder="max:10" className="form-control" />
                  <select
                    name=""
                    className="form-control text-capitalize"
                    id=""
                  >
                    <option value="">Minute</option>
                    <option value="">Hour</option>
                    <option value="">Day</option>
                  </select>
                </div>

                <br />
                <label>Vendor Logo ( Ratio 1:1 )</label>
                <br />
                <input className="form-control" type="file" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-5 d-flex justify-content-center">
                <img
                  className="w-50"
                  src="https://ayushimart.in/adminpanel/assets/admin/img/400x400/img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className="mx-5 my-5">
                <label>Master Category</label>
                <br />
                <div className="custom-select">
                  <select className="form-control" name="" id="">
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                  </select>
                </div>

                <br />
                <label>Zone</label>
                <br />
                <input className="form-control" />
                <br />
                <label>Latitude</label>
                <br />
                <input className="form-control" />
                <br />
                <label className="input-label">Longitude</label>
                <input type="text" className="form-control" />

                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="w-100">
                <iframe
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1489969194486!2d77.61400677494213!3d12.89813918741054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15792a4bc145%3A0x7fcd352d0ecfb49e!2sFicuslot%20Innovation%20Pvt%20Ltd%20%7C%20Website%20designer%20%7C%20Mobile%20App%20Development%20%7C%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1689251943198!5m2!1sen!2sin"
                  width="6000"
                  height="450"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="w-70">
              <label className="mx-5">Name</label>
              <br />
              <input className="form-control w-50 mx-5" type="file" />
            </div>
            <div>
              <div className=" my-4  d-flex justify-content-center">
                <img
                  className="w-25"
                  src="https://ayushimart.in/adminpanel/assets/admin/img/400x400/img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 px-5  my-5">
                <Label>Frist Name</Label>
                <input
                  type="text"
                  placeholder="first name"
                  className="form-control"
                />
              </div>
              <div className="col-md-4 px-5 my-5">
                <Label>Last Name</Label>
                <input
                  className="form-control"
                  placeholder="last name"
                  type="text"
                />
              </div>
              <div className="col-md-4 px-5 my-5">
                <Label>Mobile No.</Label>
                <input
                  className="form-control"
                  placeholder="mobile no."
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <p className="ml-4">Login info</p>
              <hr />
              <div className="col-md-4 px-5  my-5">
                <Label>Email</Label>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                />
              </div>
              <div className="col-md-4 px-5 my-5">
                <Label>Password</Label>
                <input
                  className="form-control"
                  placeholder="password"
                  type="password"
                />
              </div>
              <div className="col-md-4 px-5 my-5">
                <Label>Confirm Password</Label>
                <input
                  className="form-control"
                  placeholder="password"
                  type="password"
                />
              </div>
            </div>
            <Button className="btn bg-primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddVendor;
