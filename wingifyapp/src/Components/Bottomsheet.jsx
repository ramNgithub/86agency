import React, { useState } from "react";
import "./BottomSheet.css";

const BottomSheet = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const togglesheetopen=()=>{
    setIsOpen(!isOpen);

  }

  return (
    <div >
      <div className="Main">
        <h1>Bottom Sheet</h1>
        <button onClick={togglesheetopen}>{isOpen ? "Close" : "Open"}</button>
      </div>
      <div className={`bottom-sheet ${isOpen ? "open" : ""}`}>
        <div className="handle" onClick={toggleSheet}></div>
          <div className="content">
            <h2>Bottom Sheet Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo nemo, accusantium unde dolores delectus porro et eos harum facere reprehenderit possimus vero tempore repellendus doloribus iste. Consequuntur, culpa natus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo nemo, accusantium unde dolores delectus porro et eos harum facere reprehenderit possimus vero tempore repellendus doloribus iste. Consequuntur, culpa natus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo nemo, accusantium unde dolores delectus porro et eos harum facere reprehenderit possimus vero tempore repellendus doloribus iste. Consequuntur, culpa natus.</p>

          </div>
      </div>
    </div>
  );
};

export default BottomSheet;
