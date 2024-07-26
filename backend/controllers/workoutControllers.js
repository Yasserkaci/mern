import Workout from "../models/workoutes.js";
import mongoose from "mongoose";

// get all workoutes

const getWorkoutes = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get one workout

const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: "id is invalid" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(401).json({ error: "workout doesn't exist" });
  }

  res.status(200).json(workout);
};

//make a workout
const creatWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(401).json({ mssg: error });
  }
};

//delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: "id is invalid" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(401).json({ error: "workout doesn't exist" });
  }

  res.status(200).json(workout);
};

//update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(401).json({ error: "id is invalid" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(401).json({ error: "workout doesn't exist" });
  }

  res.status(200).json(workout);
};

//exporting

export { creatWorkout, getWorkoutes, getWorkout, deleteWorkout, updateWorkout };
