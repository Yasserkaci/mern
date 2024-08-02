import React from 'react'

const WourkoutDetailes = ({workout}) => {
  const clickHandler = async ()=>{
    const response = await fetch("http://localhost:8080/api/workouts/" + workout._id, {
      method:"DELETE"
    })
    location.reload()
  }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>load (kg) : </strong>{workout.load}</p>
        <p><strong>reps : </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span className="material-symbols-outlined icon-bin" onClick={clickHandler}></span>
    </div>
  )
}

export default WourkoutDetailes