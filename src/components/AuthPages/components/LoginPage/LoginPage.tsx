import Form from "../Form/Form";
import "../../Auth.css";
// [["inputLabel", "inputType", "inputPlaceHolder", "inputName"]
function LoginPage() {
  const inputs: string[][] = [
    ["Username", "text", "Enter username...", "username"],
    ["Password", "password", "Enter password...", "password"],
  ];
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>PRIME</h1>
          <h2>SIGN ON PRIME</h2>
        </div>
        <Form
          formName=""
          inputs={inputs}
          buttonText="Sign in"
        />
      </div>
    </>
  );
}

export default LoginPage;
