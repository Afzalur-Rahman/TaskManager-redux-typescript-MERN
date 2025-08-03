import Task from "../models/Task";
import { Request, Response } from "express";

export const getTask = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

//post new task
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = await Task.create({ title });
  res.status(201).json(task);
};

// put update

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.completed = !task.completed;
  const updated = await task.save();
  res.json(updated);
};

// delete task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
