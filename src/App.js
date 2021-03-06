import styles from "./App.module.css";

import { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  function addGoalHandler(enteredText) {
    setCourseGoals((prevGoals) => {
      const newGoal = { text: enteredText, id: Math.random().toString() };
      return [newGoal, ...prevGoals];
    });
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== goalId)
    );
  }

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteGoal={deleteGoalHandler} />
    );
  }

  return (
    <div>
      <section id={styles["goal-form"]}>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id={styles["goals"]}>
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteGoal={deleteGoalHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
}

export default App;
