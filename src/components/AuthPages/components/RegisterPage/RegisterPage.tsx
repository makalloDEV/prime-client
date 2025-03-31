import Form from "../Form/Form";
import "../../Auth.css";

function RegisterPage() {
  const inputs: string[][] = [
    ["Username", "text", "Enter username...", "username"],
    ["Password", "password", "Enter password...", "password"],
    [
      "Confirm Password",
      "password",
      "Enter password again...",
      "passwordConfirm",
    ],
  ];
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>PRIME</h1>
          <h2>SIGN IN TO PRIME</h2>
        </div>
        <Form
          formName=""
          inputs={inputs}
          buttonText="Sign on"
        />
      </div>
    </>
  );
}

export default RegisterPage;
