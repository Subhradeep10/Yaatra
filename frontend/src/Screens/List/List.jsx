import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./List.css";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listSearch">h1</div>
        <div className="listResult"></div>
      </div>
    </div>
  );
};

export default List;
