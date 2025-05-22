import "../Slider.css";
import AuthButton from "./AuthButton/AuthButton";
import { Link } from "react-router-dom";

function SliderHeader() {
  return (
    <>
      <div className="slider-header">
        <div className="slider-header-left">
          <p className="slider-header-text-style">PRIME</p>
        </div>
        <div className="slider-header-right">
          <div className="slider-header-right-buttons">
            <Link to="/user/registration">
              <AuthButton
                name="sign_in_btn"
                backColor="white"
                textColor="black"
              >
                SIGN IN
              </AuthButton>
            </Link>
            <Link to="/user/login">
              <AuthButton
                name="sign_on_btn"
                backColor="black"
                textColor="white"
              >
                SIGN ON
              </AuthButton>
            </Link>
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
