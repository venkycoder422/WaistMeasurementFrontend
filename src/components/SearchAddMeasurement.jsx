import React, { useState } from "react";
import styled from "styled-components";
import measurement from "../assests/images/measurement.jpg";
import icon from "../assests/images/body-measurement.jpg";
import { useNavigate } from "react-router-dom";
export default function SearchAddMeasurement() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("Check");
  const [formData, setFormData] = useState({
    heightCm: "",
    weightKgs: "",
    age: "",
    weistCm: "",
  });
  const handleCheckSizes = () => {
    console.log("Height:", formData.heightCm);
    console.log("Weight:", formData.weightKgs);
    console.log("Age:", formData.age);
    setMode("Add");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SearchAddWrapper>
      <img
        className="icone-image"
        src={icon}
        alt=""
        onClick={() => navigate("/")}
      />
      <form className="card">
        <div className="card-body">
          <div className="form-2 ">
            <h1 className="title text-css">{mode} your sizes</h1>
            <div className="row mb-3 justify-content-center align-items-center">
              <div className="col-md-2 col-sm-12">
                <label className="col-form-label">Enter your height</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  class="form-control"
                  name="heightCm"
                  value={formData.heightCm}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-2 col-sm-12">
                <label className="col-form-label">Enter your weight</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  class="form-control"
                  name="weightKgs"
                  value={formData.weightKgs}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-2 col-sm-12">
                <label className="col-form-label">Enter your age</label>
                <span className="text-danger">*</span>
                <input
                  type="text"
                  className="form-control"
                  value={formData.age}
                  name="age"
                  onChange={handleInputChange}
                />
              </div>
              {mode === "Add" && (
                <div className="col-md-2 col-sm-12">
                  <label className="col-form-label">
                    Enter your Weist Size
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.weistCm}
                    name="weistCm"
                    onChange={handleInputChange}
                  />
                </div>
              )}
              <div className="col-md-2 col-sm-12">
                <button
                  type="button"
                  className="btn btn-primary px-4"
                  style={{ marginTop: "35px" }}
                  onClick={handleCheckSizes}
                >
                  {mode}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 col-sm-6">
          <div className="image-container">
            <img src={measurement} alt="" />
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="contet-conatiner">
            <h4>Height(Cm) - {formData.heightCm}</h4>
            <hr></hr>
            <h4>Weight(Kgs) - {formData.weightKgs}</h4>
            <hr></hr>
            <h4>Age - {formData.age}</h4>
            <hr></hr>
            <h4>Weist(cm) - {formData.weistCm}</h4>
            <hr></hr>
          </div>
        </div>
      </div>
    </SearchAddWrapper>
  );
}

const SearchAddWrapper = styled.div`
  width: 100%;
  height: 100%;
  .icone-image {
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 2px;
    cursor: pointer;
  }
  .text-css {
    text-align: left;
    margin-left: 38px;
  }
  background-color: whiteSmoke !important;
  .image-container {
    height: 400px;
    width: fit-content;
    border: 2px solid black;
    img {
      height: 100%;
    }
  }
`;
