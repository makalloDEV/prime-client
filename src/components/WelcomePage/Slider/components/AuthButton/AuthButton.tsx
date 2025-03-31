import { ReactNode } from "react";

interface AuthButtonProps {
  backColor: string;
  textColor: string;
  name: string;
  children?: ReactNode;
}

function AuthButton({ backColor, textColor, children, name }: AuthButtonProps) {
  return (
    <>
      <button
        className="nunito-regular"
        name={name}
        style={{
          backgroundColor: backColor,
          color: textColor,
          border: `none`,
          borderRadius: `8px`,
          padding: "5px 15px 5px 15px",
          marginRight: `10px`,
          cursor: `pointer`,
        }}
      >
        {children}
      </button>
    </>
  );
}

export default AuthButton;
