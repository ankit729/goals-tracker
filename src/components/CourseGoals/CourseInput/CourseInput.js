import "./CourseInput.css";
import Button from "../../UI/Button/Button";

import { useState } from "react";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  function inputChangeHandler(event) {
    setEnteredValue(event.target.value);
    setIsValid(event.target.value.trim().length > 0);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={inputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
