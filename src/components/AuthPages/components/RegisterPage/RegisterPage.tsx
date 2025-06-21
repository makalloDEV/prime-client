import Form from "../Form/Form";
import { useState } from "react";
import { AuthService } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const toLogin = useNavigate();

  const setUsernameHandle = (username: string) => {
    setUsername(username);
  };

  const setPasswordHandle = (password: string) => {
    setPassword(password);
  };

  const setConfirmPasswordHandle = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
  };

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (confirmPassword == password) {
        const data = await AuthService.registration({ username, password });
        if (data) {
          toLogin("../login", { relative: "path" });
          toast.success("Account has created successfully!", {
            position: "bottom-left",
            theme: "colored",
            autoClose: 3000,
          });
        }
      } else {
        toast.error("Please, confirm your password again!", {
          position: "bottom-left",
          theme: "colored",
          autoClose: 3000,
        });
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
    [
      "Confirm Password",
      "password",
      "Enter password again...",
      "passwordConfirm",
      setConfirmPasswordHandle,
    ],
  ];

  return (
    <div className="main">
      <div
        className="header"
        style={{ textAlign: "center" }}
      >
        <h1>PRIME</h1>
        <h2>SIGN IN TO PRIME</h2>
      </div>
      <Form
        onSubmit={registrationHandler}
        formName=""
        inputs={inputs}
        buttonText="Sign on"
      />
    </div>
  );
}

export default RegisterPage;
