import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let apiBaseUrl = window.location.hostname;
    if (apiBaseUrl === "localhost") {
      // apiBaseUrl = "http://localhost:3105";
      apiBaseUrl = "https://api.pexeek.com/api";
    } else {
      apiBaseUrl = "https://api.pexeek.com/api";
    }
    const url = apiBaseUrl + "/product/get_all_products";
    const settings = {
      method: "GET",
    };
    async function fetchData() {
      await fetch(url, settings)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          var blog_data = res.data;
          setData(blog_data);
        });
    }
    fetchData();
  }, []);
  return (
    // <>
    //   <div className="row-box">
    //     <Row>
    //       {data.map((data_each) => (
    //         <Col md={3}>
    //           <div className="blog-boxes">
    //             <div class="blog_image">
    //               <img
    //                 src={"https://api.pexeek.com" + data_each.image_url}
    //                 // src={"http://localhost:3105"+data_each.image_url}
    //                 alt={data_each.blog_title}
    //                 // height={300}
    //                 // width={300}
    //               />
    //             </div>
    //             <div className="blog-content">
    //               <h4>{data_each.image_price}</h4>
    //               <h3> {data_each.image_title}</h3>
    //               <p>{data_each.image_description}</p>
    //             </div>
    //             <div className="blog-button">
    //               <div className="list-btn btn_2 btn_cut">
    //                 {/* <Link to={"/blog-details/" + data_each.blog_title}>
    //                   <svg>
    //                     <rect
    //                       x="0"
    //                       y="0"
    //                       fill="none"
    //                       width="100%"
    //                       height="100%"
    //                     />
    //                   </svg>
    //                   Read full Article
    //                 </Link> */}
    //                 <div>
    //                   <button>Update</button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </Col>
    //       ))}
    //     </Row>
    //   </div>
    // </>

    <>
      {/* {
      !Loading ? */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry>
          {Object.keys(data).map((key) =>
            data[key].is_home_image == true ? (
              <div className="grid-item">
                <Link to={"/detail/" + data[key]._id}>
                  <img
                    src={"https://api.pexeek.com" + data[key].image_url}
                    alt="image"
                    width={400}
                    height={400}
                  />
                </Link>
              </div>
            ) : (
              ""
            )
          )}
        </Masonry>
      </ResponsiveMasonry>
      {/* : 'Loading...' 
    } */}
    </>
  );
};

export default Products;
