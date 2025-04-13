interface FormProps {
  formName: string;
  buttonText: string;
  inputs: any[][]; // [["inputLabel", "inputType", "inputPlaceHolder", "inputName"]
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
import "./Form.css";

function Form({ formName, inputs, buttonText, onSubmit }: FormProps) {
  return (
    <div className="form">
      <form
        onSubmit={onSubmit}
        action=""
      >
        <div className="form-content">
          <label>{formName}</label>
          {inputs.map((element) => (
            <>
              <label>{element[0]}</label>
              <input
                type={element[1]}
                placeholder={element[2]}
                name={element[3]}
                onChange={(e) => element[4](e.target.value)}
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
