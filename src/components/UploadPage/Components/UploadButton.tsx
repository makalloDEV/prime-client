import { Link } from "react-router-dom";

interface UploadButtonProps {
  bgColor: string;
  fontColor: string;
}

function UploadButton({ bgColor, fontColor }: UploadButtonProps) {
  return (
    <Link to="../upload">
      <button
        className={`${bgColor} ${fontColor} px-6 py-3 rounded-3xl hover:bg-gray-800 transition-colors text-base font-medium hover:cursor-pointer`}
      >
        Upload now
      </button>
    </Link>
  );
}

export default UploadButton;
