import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";

const options = {
  items: 3, // Change the number of items to display on the carousel on desktop
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};

const OwlCarouselComponent = () => {

    useEffect(() => {
        // Load jQuery script dynamically
        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        document.body.appendChild(jQueryScript);
    
        // Wait for jQuery to be ready before initializing the carousel
        jQueryScript.onload = () => {
          // Initialize the Owl Carousel
          window.jQuery('.owl-carousel').owlCarousel(options);
        };
      }, []);


  return (
    <OwlCarousel options={options}>
      <div className="item">
        <img
          src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"
          alt="Image 1"
        />
      </div>
      <div className="item">
        <img
          src="https://media.istockphoto.com/id/1402801804/photo/closeup-nature-view-of-palms-and-monstera-and-fern-leaf-background.webp?b=1&s=612x612&w=0&k=20&c=cvXa4CkqbIdOXxYkgAMxz-iFN3aBRibY7HMskePBRaE="
          alt="Image 2"
        />
      </div>
      <div className="item">
        <img
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
          alt="Image 3"
        />
      </div>
      {/* Add more items with images as needed */}
    </OwlCarousel>
  );
};

export default OwlCarouselComponent;
// const OwlCarouselComponent = () => {
//   useEffect(() => {
//     // Import the required Owl Carousel CSS file

//     // Dynamically load the Owl Carousel script
//     const owlCarouselScript = document.createElement("script");
//     owlCarouselScript.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
//     document.body.appendChild(owlCarouselScript);

//     // Wait for the script to load
//     owlCarouselScript.onload = () => {
//       // Initialize the Owl Carousel
//       const owl = window.jQuery(".owl-carousel");
//       owl.owlCarousel({
//         items: 3, // Change the number of items to display on the carousel on desktop
//         loop: true,
//         margin: 10,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true,
//       });
//     };
//   }, []);

//   return (
//     <div className="owl-carousel owl-theme">
//       <div className="item">
//         <img
//           src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"
//           alt="Image 1"
//         />
//       </div>
//       <div className="item">
//         <img
//           src="https://media.istockphoto.com/id/1402801804/photo/closeup-nature-view-of-palms-and-monstera-and-fern-leaf-background.webp?b=1&s=612x612&w=0&k=20&c=cvXa4CkqbIdOXxYkgAMxz-iFN3aBRibY7HMskePBRaE="
//           alt="Image 2"
//         />
//       </div>
//       <div className="item">
//         <img
//           src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
//           alt="Image 3"
//         />
//       </div>
//       {/* Add more items with images as needed */}
//     </div>
//   );
// };

// export default OwlCarouselComponent;
