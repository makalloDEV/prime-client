import "../Slider.css"
import AuthButton from "./AuthButton"

function SliderHeader() {
    return (
        <div className="slider-header">
            <div className="slider-header-left">
                <p className="slider-header-text-style">PRIME</p>
            </div>
            <div className="slider-header-right">
                <div className="slider-header-right-buttons">
                <AuthButton backColor="white" textColor="black">SIGN IN</AuthButton>
                <AuthButton backColor="black" textColor="white">SIGN ON</AuthButton>
                <AuthButton backColor="transparent" textColor="white">FOR ARTIST</AuthButton>
                </div>
            </div>
        </div>
    )
}

export default SliderHeader