import "./Input.css";

const Input = (props) => {
  return (
    <div className="Input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required={props.required}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        autoComplete="off"
        readOnly={props.readOnly}
        min={props.min}
        max={props.max}
      />
    </div>
  );
};

export default Input;
