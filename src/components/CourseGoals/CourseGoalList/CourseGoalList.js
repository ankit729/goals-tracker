import styles from "./CourseGoalList.module.css";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

function CourseGoalList(props) {
  return (
    <ul className={styles["goal-list"]}>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDeleteGoal={props.onDeleteGoal}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;
