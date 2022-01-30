import "./CourseGoalItem.css";

function CourseGoalItem(props) {
  // const [deleteText, setDeleteText] = useState("");

  function deleteGoalHandler() {
    // setDeleteText("(Deleted!)");
    props.onDeleteGoal(props.id);
  }

  return (
    <li className="goal-item" onClick={deleteGoalHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
