import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assests/images/body-measurement.jpg";
import fullWeistImg from "../assests/images/image-screen.png";

export default function DiscriptionPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="background-img">
            <img src={fullWeistImg} alt="" />
          </div>
          <div className="content-wrapper">
            <div>
              <img src={icon} alt="" />
            </div>

            <div className="content">
              <h1 className="title">
                Do you want to know your Waist size click on continue
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={() => navigate("/measurements")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .background-img {
      height: 100vh;
      width:100vw;
      filter: brightness(70%);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .content-wrapper {
      position: absolute;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 15%;
      img {
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 2px;
      }
      .content {
        text-align: center;
        color: whitesmoke;
      }
    }
  }
`;
