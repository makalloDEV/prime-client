import '../Slider.css';
import { useState, MouseEventHandler } from 'react';

interface SliderBottomProps {
	onDataChange: (arg0: string) => void;
}

interface ArtistData {
	[key: string]: string;
}

function SliderBottom({ onDataChange }: SliderBottomProps) {
	const [isActive1, setIsActive1] = useState<string>('active');
	const [isActive2, setIsActive2] = useState<string>('');
	const [isActive3, setIsActive3] = useState<string>('');

	const [artist, setArtist] = useState<string>('carti');

	const artists: ArtistData = {
		carti: 'PLAYBOI CARTI',
		west: 'KANYE WEST',
		travis: 'TRAVIS SCOTT',
	};

	const setIsActiveHandle1: () => void = () => {
		setArtist('carti');
		onDataChange('carti');
		setIsActive1('active');
		setIsActive2('');
		setIsActive3('');
	};

	const setIsActiveHandle2: () => void = () => {
		setArtist('west');
		onDataChange('west');
		setIsActive1('');
		setIsActive2('active');
		setIsActive3('');
	};

	const setIsActiveHandle3: () => void = () => {
		setArtist('travis');
		onDataChange('travis');
		setIsActive1('');
		setIsActive2('');
		setIsActive3('active');
	};

	return (
		<div className="slider-bottom">
			<div className="slider-bottom-content">
				<div className="slider-bottom-text">
					<p
						className="nunito-regular"
						style={{ fontSize: `16pt` }}
					>
						{artists[`${artist}`]}
					</p>
					<p
						className="nunito-regular"
						style={{ marginTop: `-10px` }}
					>
						PRIME ARTIST
					</p>
				</div>
				<div
					className="switch-buttons"
					style={{ display: `flex`, justifyContent: `center`, marginBottom: `30px` }}
				>
					<button
						className={isActive1}
						onClick={setIsActiveHandle1}
					></button>
					<button
						className={isActive2}
						style={{ marginInline: `20px` }}
						onClick={setIsActiveHandle2}
					></button>
					<button
						className={isActive3}
						onClick={setIsActiveHandle3}
					></button>
				</div>
			</div>
		</div>
	);
}

export default SliderBottom;
