// import CartiImage from "../../assets/img/slider/carti.jpg"
import './Slider.css';
import SliderBottom from './components/SliderBottom';
import SliderHeader from './components/SliderHeader';
import { useState } from 'react';

function Slider() {
	const [dataFromChild, setDataFromChild] = useState<string>('');

	const handleDataFromChild = (data: string) => {
		setDataFromChild(data);
	};

	return (
		<div className="slider">
			<div className={`slider-slide ${dataFromChild}`}>
				<SliderHeader />
				<SliderBottom onDataChange={handleDataFromChild} />
			</div>
		</div>
	);
}

export default Slider;
