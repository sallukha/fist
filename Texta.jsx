import { useState } from "react";
import React from "react";
import "../App.css";
function Texta() {
  const handleUClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here");
  return (
    <div className="container-fluid d-flex justify-content-center my-5">
      <div className="form-floating">
        <h1 style={{color:"blue"}}>TEXT ANALYZER</h1>
        <textarea
          className="form-control"
          onChange={handleOnchange}
          value={text}
          style={{ height: "250px", width: "1000px", borderRadius: "50px" }}
        ></textarea>
        <label for="floatingTextarea2"></label>
        <div className="container my-3">
          <button
            type="button"
            class="btn btn-success "
            style={{ borderRadius: "20px" }}
            onClick={handleUClick}
          >
            convert to uppercase
          </button>
          <button
            type="button"
            style={{ borderRadius: "20px" }}
            class="btn btn-success mx-2 "
            onClick={handleLoClick}
          >
            convert to lowecase
          </button>
          <button
            type="button"
            style={{ borderRadius: "20px" }}
            class="btn btn-success mx-2 "
            onClick={handleClClick}
          >
            clear text
          </button>
          <div className="container">

            <h1 style={{color:"blue"}}> Text summry</h1>
            <p>{text.split(' ').length} words  and, {text.length} characters</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Texta;
