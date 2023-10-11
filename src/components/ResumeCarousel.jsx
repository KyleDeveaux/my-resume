import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styling/Carousel.css";
import data from "../data";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function ResumeCarousel() {
  const [ showModal, setShowModal ] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item)
    setShowModal(true);
  }

  const closeModal = (item) => {
    setSelectedItem(item)
    setShowModal(false);
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projectData = data.map((item) => (
    <div className="App" key={item.id}>
      <div className="card">
        <img className="product--image" src={item.image} alt="projects" />
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        <p>
          <button className="openModalBtn"><Link className="openModalBtn" to="project">View Details</Link></button>
        </p>
      </div>
    </div>
  ));
  return (
    <div>
      <Carousel responsive={responsive}>
        {projectData}
      </Carousel>
      {showModal && selectedItem && (
        <Modal
          title={selectedItem.title}
          closeModal={closeModal}
          objective={selectedItem.objective}
          lesson={selectedItem.lesson}
        />
      )}
    </div>
  );
}
export default ResumeCarousel;


  // Use mapping to cycle through each of our data in our data file
  // const projectData = data.map(item => {
  //   return (
  //     <div className="App">
  //       <div className="card">
  //         <img className="product--image" src={item.image} alt="projects" />
  //         <h2>{item.title}</h2>
  //         <p>{item.summary}</p>
  //         <p>
  //           <button onClick={() => openModal(item)}>View Details</button>
  //           {showModal && selectedItem === item && (
  //             <Modal
  //               title={item.title}
  //               closeModal={closeModal}
  //             />
  //           )}
  //         </p>
  //       </div>
  //     </div>
  //   )
  // })
//   return (
//     <div>
//       <Carousel responsive={responsive}>
//         {projectData}
//       </Carousel>
//     </div>
//   );
// }


