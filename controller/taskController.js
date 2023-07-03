import Task from "../models/tasksModel.js";

// create new task
export const createTask = async (req, res) => {
  const task = new Task({
    input: req.body.input,
    state: req.body.state,
    level: req.body.level,
    user: req.body.user
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// get all tasks
export const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get single task
export const getSingleTask = async (req, res) => {
  res.json(res.task);
};

// update task
export const updateTask = async (req, res) => {
  if (req.body.input != null) {
    res.task.input = req.body.input;
  }
  if (req.body.state != null) {
    res.task.state = req.body.state;
  }
  if (req.body.level != null) {
    res.task.level = req.body.level;
  }
  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete task
export const deleteTask = async (req, res) => {
  try {
    await res.task.deleteOne();
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
