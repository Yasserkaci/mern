import React, { useEffect, useState, useContext } from "react";
import WourkoutDetailes from "../components/WourkoutDetailes";
import WorkoutForm from "../components/WorkoutForm";
import { useAuthContext } from '../../hooks/useAuthContext'


const Home = () => {
  const {user} = useAuthContext()
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("http://localhost:8080/api/workouts/",{
        headers:{
        'authentication':`Bearer ${user.token}`
      }});
      console.log(response)
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
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
