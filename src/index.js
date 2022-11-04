import './style.css';
/* eslint-disable import/no-cycle */
import { displayTasks } from './modules/display-task.js';
// Initial References
export const newTaskInput = document.querySelector('#new-task input');

// Disable Edit Button
export const disableButtons = (bool) => {
  const editButtons = document.getElementsByClassName('edit');
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};
displayTasks();