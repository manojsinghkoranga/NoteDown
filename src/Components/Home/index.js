import React, { useState, useEffect } from "react";
import { Frown } from "react-feather";
import ModalDiv from "../Modal/index.js";
import Nav from "../Navbar/index.js";
import SingleNote from "../SingleNotes/index.js";
import "./Styles.css";
const Home = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
  }, []);

  const refresher = () => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
  };

  return (
    <>
      <Nav
        showModal={showModal}
        setShowModal={setShowModal}
        data={data}
        setData={setData}
        refresher={refresher}
      />
  
      {showModal && (
        <ModalDiv
          showModal={showModal}
          setShowModal={setShowModal}
          refresher={refresher}
        />
      )}

      {/* notes */}
      <div className="row justify-content-between mx-0 p-5">
        {!data.length ? (
          <h1 className="text-center display-1 fw-light text-seconday my-5">
            <Frown size={100} /> No Notes. Create new one.
          </h1>
        ) : (
          data.map((item, i) => (
            <SingleNote key={item.id} item={item} refresher={refresher} />
          ))
        )}
      </div>
    </>
  );
};
export default Home;