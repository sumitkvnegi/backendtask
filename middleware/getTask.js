import Task from '../models/tasksModel.js';

export const getTask = async (req, res, next) => {
    let task;
    try {
      task = await Task.findById(req.params.id);
      if (task == null) {
        return res.status(404).json({ message: "Cannot find user" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.task = task;
    next();
  }