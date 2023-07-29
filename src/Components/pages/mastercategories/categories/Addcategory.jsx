import React from "react";

const Addcategory = () => {
  return (
    <div>
      <div className="container">
        <h3 className="mx-2">Category</h3>
        <div className="card">
          <div className="container">
            <div className="card-title p-4">Add New category</div>
          </div>
        </div>
        <div className="card">
          <div className="container my-3">
            <div>
              <ul className="nav nav-tabs mb-4 mx-5">
                <li>
                  <a href="" className="">
                    ENGLISH(EN)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <div className="form">
              <p className="">Name(EN)</p>

              <input
                type="text"
                className="form-control"
                placeholder="Add Category"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
