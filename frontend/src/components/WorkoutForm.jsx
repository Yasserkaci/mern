import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyField, setEmptyField] = useState([])
  const {user} = useAuthContext()

  const submitHandler = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };

    const response = await fetch("http://localhost:8080/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-type": "application/json",
        'authentication':`Bearer ${user.token}`
      },
    });
    console.log(response)
    const json = await response.json()
    if (!response.ok) {
        setError(json.error);
        setEmptyField(json.emptyFeilds)
      }
      if (response.ok) {
        setTitle("");
        setLoad("");
        setReps("");
        setError(null);
        setEmptyField([])
        console.log("excrecise created ", response);
        location.reload();
      }
  };

  return (
    <form className="create" onSubmit={submitHandler}>
      <h3>Add a new workout</h3>

      <label>excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyField.includes("title") ? 'error' : ""}
      />
      <label>load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyField.includes("load") ? 'error' : ""}

      />
      <label>reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyField.includes("reps") ? 'error' : ""}

      />

      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
