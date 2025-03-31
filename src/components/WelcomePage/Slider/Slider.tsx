// import CartiImage from "../../assets/img/slider/carti.jpg"
import "./Slider.css";
import SliderBottom from "./components/SliderBottom";
import SliderHeader from "./components/SliderHeader";
import { useState, useEffect, useCallback } from "react";

interface SliderProps {
  onDataChange: (arg0: string) => void;
}

function Slider({ onDataChange }: SliderProps) {
  const [dataFromChild, setDataFromChild] = useState<string>("carti");

  const handleDataFromChild = useCallback(
    (data: string) => {
      setDataFromChild(data);
    },
    [setDataFromChild]
  );

  useEffect(() => {
    onDataChange(dataFromChild);
  }, [dataFromChild, onDataChange]);

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
