/* eslint-disable import/no-cycle */
import { displayTasks } from './display-task.js';
// Remove Task from local storage
export const removeTask = (taskValue) => {
  localStorage.removeItem(taskValue);
  displayTasks();
};
// Add tasks to local storage
export const updateStorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
};