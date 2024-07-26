import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const submitHandler = async (e)=>{
    e.preventDefault()

    const workout = {title, reps, load}

    const response = await fetch("http://localhost:8080/api/workouts/",{
        method:"POST",
        body:JSON.stringify(workout),
        headers:{
            "Content-type":"application/json"
        }

    })
    const json = response.json()
    location.reload()
  }

  return (
    <form className="create" onSubmit={submitHandler}>
      <h3>Add a new workout</h3>

      <label>excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>load (in kg):</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>reps:</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add workout</button>
    </form>
  );
};

export default WorkoutForm;
