import { useState } from "react";
import styled from "styled-components";
import measurement from "../assests/images/measurement.jpg";
import icon from "../assests/images/body-measurement.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { BASE_URL } from "../environtments";
import { FadeLoader } from "react-spinners";


export default function SearchAddMeasurement() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("Check");
  const [formData, setFormData] = useState({
    heightCm: "",
    weightKgs: "",
    age: "",
    waistCm: "",
  });
  const [responseData, setResponseData] = useState({
    heightCm: "",
    weightKgs: "",
    age: "",
    waistCm: "",
  });
  const handleCheckSizes = () => {
    if (formData.age && formData.heightCm && formData.weightKgs) {
      fetchData();
    } else {
      NotificationManager.warning(
        "Please fill required feilds.",
        "Warning",
        3000
      );
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostRequest = (e) => {
    if (
      formData.age &&
      formData.heightCm &&
      formData.weightKgs &&
      formData.waistCm
    ) {
      setLoading(!loading);
      postFormData();
    } else {
      NotificationManager.warning(
        "Please fill required feilds.",
        "Warning",
        3000
      );
    }
  };

  const postFormData = async () => {
    try {
      setLoading(!loading);
      setColor("#0783f7");
      const response = await axios.post(
        `${BASE_URL}/male/human/measurement/add`,
        formData
      );
      setResponseData({
        ...responseData,
        heightCm: response.data.heightCm,
        weightKgs: response.data.weightKgs,
        age: response.data.age,
        waistCm: response.data.waistCm,
      });
      setFormData({
        heightCm: "",
        weightKgs: "",
        age: "",
        waistCm: "",
      });
      NotificationManager.success(
        "Your waist size has been successfully added!",
        "Error",
        3000
      );
      setMode("Check");
    } catch (error) {
      NotificationManager.error("Service not response.", "Error", 3000);
    } finally {
      setLoading(loading);
      setColor("#ffffff");
    }
  };

  const fetchData = async () => {
    try {
      setLoading(!loading);
      setColor("#0783f7");
      const response = await axios.get(
        `${BASE_URL}/male/human/getMeasurement?heightCm=${formData.heightCm}&weightKgs=${formData.weightKgs}&age=${formData.age}`
      );
      setResponseData({
        ...responseData,
        heightCm: response.data.heightCm,
        weightKgs: response.data.weightKgs,
        age: response.data.age,
        waistCm: response.data.waistCm,
      });
      setFormData({
        heightCm: "",
        weightKgs: "",
        age: "",
        waistCm: "",
      });
      NotificationManager.success(
        "Your waist size has been successfully identified!",
        "Success",
        3000
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMode("Add");
        setResponseData({});
        NotificationManager.error(
          "Your Waist Size not found. Please add your Waist size.",
          "Error",
          3000
        );
      } else {
        NotificationManager.error(error.message, "Error", 3000);
      }
    } finally {
      setLoading(loading);
      setColor("#ffffff");
    }
  };

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  return (
    <>
      <SearchAddWrapper>
        <SpinnerOverlay>
          <FadeLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading"
            data-testid="loader"
          />
        </SpinnerOverlay>

        <img
          className="icone-image"
          src={icon}
          alt=""
          onClick={() => navigate("/")}
        />
        <form className="card">
          <div className="card-body">
            <div className="form-2 ">
              <h1 className="title text-css">{mode} your size</h1>
              <div className="row mb-3 justify-content-center align-items-center">
                <div className="col-md-2 col-sm-12">
                  <label className="col-form-label">Enter your height (Cm)</label>
                  <span className="text-danger">*</span>
                  <input
                    type="number"
                    className="form-control"
                    name="heightCm"
                    value={formData.heightCm}
                    onChange={handleInputChange}
                    // readOnly={mode === 'Add'}
                  />
                </div>
                <div className="col-md-2 col-sm-12">
                  <label className="col-form-label">Enter your weight (Kgs)</label>
                  <span className="text-danger">*</span>
                  <input
                    type="number"
                    className="form-control"
                    name="weightKgs"
                    value={formData.weightKgs}
                    onChange={handleInputChange}
                    // readOnly={mode === 'Add'}
                  />
                </div>
                <div className="col-md-2 col-sm-12">
                  <label className="col-form-label">Enter your age (Years)</label>
                  <span className="text-danger">*</span>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.age}
                    name="age"
                    onChange={handleInputChange}
                    // readOnly={mode === 'Add'}
                  />
                </div>
                {mode === "Add" && (
                  <div className="col-md-2 col-sm-12">
                    <label className="col-form-label">
                      Enter your Waist Size(Cm)
                    </label>
                    <span className="text-danger">*</span>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.waistCm}
                      name="waistCm"
                      onChange={handleInputChange}
                    />
                  </div>
                )}
                <div className="col-md-2 col-sm-12">
                  {mode === "Add" ? (
                    <button
                      type="button"
                      className="btn btn-primary px-4"
                      style={{ marginTop: "35px" }}
                      onClick={handlePostRequest}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary px-4"
                      style={{ marginTop: "35px" }}
                      onClick={handleCheckSizes}
                    >
                      Check
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
        <FullWidthRow className="row justify-content-center align-items-center">
          <div className="col-md-3 col-sm-6">
            <div className="image-container">
              <img src={measurement} alt="" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="contet-conatiner">
              <h4>Height(Cm) - {responseData.heightCm}</h4>
              <hr></hr>
              <h4>Weight(Kgs) - {responseData.weightKgs}</h4>
              <hr></hr>
              <h4>Age - {responseData.age}</h4>
              <hr></hr>
              <h4>Waist(cm) - {responseData.waistCm}</h4>
              <hr></hr>
            </div>
          </div>
        </FullWidthRow>
      </SearchAddWrapper>
    </>
  );
}

const SearchAddWrapper = styled.div`
  max-width: 100%; 
  height: 100%;
  z-index: 2;
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
    max-width: 100%;
    height: 400px;
    border: 2px solid black;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const SpinnerOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const FullWidthRow = styled.div`
  width: 100vw;
`;
