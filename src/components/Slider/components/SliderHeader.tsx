import '../Slider.css';
import AuthButton from './AuthButton/AuthButton';
import { useState } from 'react';
import Modal from './Modal/Modal';

function SliderHeader() {
	const [modalActive, setModalActive] = useState<boolean>(false);

	return (
		<>
			<div className="slider-header">
				<div className="slider-header-left">
					<p className="slider-header-text-style">PRIME</p>
				</div>
				<div className="slider-header-right">
					<div className="slider-header-right-buttons">
						<AuthButton
							name="sign_in_btn"
							backColor="white"
							textColor="black"
						>
							SIGN IN
						</AuthButton>
						<AuthButton
							name="sign_on_btn"
							backColor="black"
							textColor="white"
						>
							SIGN ON
						</AuthButton>
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
