import "../Slider.css";
import AuthButton from "./AuthButton/AuthButton";
import { NavLink } from "react-router";

function SliderHeader() {
  return (
    <>
      <div className="slider-header">
        <div className="slider-header-left">
          <p className="slider-header-text-style">PRIME</p>
        </div>
        <div className="slider-header-right">
          <div className="slider-header-right-buttons">
            <NavLink to="/login">
              <AuthButton
                name="sign_in_btn"
                backColor="white"
                textColor="black"
              >
                SIGN IN
              </AuthButton>
            </NavLink>
            <NavLink to="/register">
              <AuthButton
                name="sign_on_btn"
                backColor="black"
                textColor="white"
              >
                SIGN ON
              </AuthButton>
            </NavLink>
            <AuthButton
              name="for_artist_btn"
              backColor="transparent"
              textColor="white"
            >
              FOR ARTIST
            </AuthButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderHeader;
