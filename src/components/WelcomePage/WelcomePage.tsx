import Slider from "./Slider/Slider";
import MainContent from "./MainContent/MainContent";
import { useState } from "react";
import { Data } from "../../types";

function WelcomePage() {
  const [dataFromChild, setDataFromChild] = useState<string>("carti");

  const onDataChangeHandle = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <>
      <Slider onDataChange={onDataChangeHandle}></Slider>
      <MainContent artist={dataFromChild as keyof Data} />
    </>
  );
}

export default WelcomePage;
