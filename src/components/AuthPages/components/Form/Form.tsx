interface FormProps {
  formName: string;
  buttonText: string;
  inputs: string[][]; // [["inputLabel", "inputType", "inputPlaceHolder", "inputName"]
}
import "./Form.css";

function Form({ formName, inputs, buttonText }: FormProps) {
  return (
    <div className="form">
      <form action="">
        <div className="form-content">
          <label>{formName}</label>
          {inputs.map((element) => (
            <>
              <label>{element[0]}</label>
              <input
                type={element[1]}
                placeholder={element[2]}
                name={element[3]}
              />
            </>
          ))}
          <button className="submit-button">{buttonText}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
