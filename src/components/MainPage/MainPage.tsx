import { useAuth } from "@/hooks/useAuth";
import { NavLink } from "react-router";

function MainPage() {
  const isAuth = useAuth();

  let buttonName: string;
  if (isAuth) {
    buttonName = "log out";
    console.log(isAuth);
  } else {
    buttonName = "back";
    console.log(isAuth);
  }

  return (
    <NavLink to={"/"}>
      <button>{buttonName}</button>
    </NavLink>
  );
}

export default MainPage;
