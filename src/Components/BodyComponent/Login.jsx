import React from "react";
import { NavLink } from "react-router-dom";
import { Form } from "reactstrap";

function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2023/06/23/18/29/bird-8083971_1280.jpg"})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container-fluid  d-flex justify-content-center pt-5">
        <div className="card  mt-5 w-25">
          <div className=" d-flex justify-content-center">
            <h1 className="mt-5">Login</h1>
          </div>
          <Form>
            <div className="row">
              <div className="p-5">
                <div>
                  <label htmlFor="">E-mail</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      border: "none",
                      outline: "none",
                      borderBottom: "1px solid #ccc",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="text"
                    style={{
                      border: "none",
                      outline: "none",
                      borderBottom: "1px solid #ccc",
                    }}
                    className=" form-control"
                  />
                </div>
                <br />
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  <label>
                    <input type="Checkbox" /> Remember me
                  </label>

                  <NavLink to="*">Forgot Password ?</NavLink>
                </div>
                <br />
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
