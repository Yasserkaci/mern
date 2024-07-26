import React, { useEffect, useState } from "react";
import WourkoutDetailes from "../components/WourkoutDetailes";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("http://localhost:8080/api/workouts/");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
      console.log(workouts);
    };
    fetchAPI();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WourkoutDetailes key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;
