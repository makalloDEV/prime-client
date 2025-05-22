import Form from "../Form/Form";
import "../../Auth.css";
import { useState } from "react";
import { AuthService } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";
import { setTokenToLocalStorage } from "@/helpers/localstorage.helper";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/user/user.slice";
import { toast } from "react-toastify";

// [["inputLabel", "inputType", "inputPlaceHolder", "inputName", handler]
function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toMain = useNavigate();
  const dispatch = useAppDispatch();

  const setUsernameHandle = (username: string) => {
    setUsername(username);
  };

  const setPasswordHandle = (password: string) => {
    setPassword(password);
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ username, password });
      if (data) {
        setTokenToLocalStorage("token", data.token);
        dispatch(login(data));
        toMain("../../main", { relative: "path" }); // пока так, потом нужно будет через .env
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString(), {
        position: "bottom-left",
        theme: "colored",
        autoClose: 3000,
      });
    }
  };

  const inputs: any[][] = [
    ["Username", "text", "Enter username...", "username", setUsernameHandle],
    [
      "Password",
      "password",
      "Enter password...",
      "password",
      setPasswordHandle,
    ],
  ];
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>PRIME</h1>
          <h2>SIGN ON PRIME</h2>
        </div>
        <Form
          onSubmit={loginHandler}
          formName=""
          inputs={inputs}
          buttonText="Sign in"
        />
      </div>
    </>
  );
}

export default LoginPage;
