import './style.css';
import { DateTime } from './modules/luxon.js';
/* eslint-disable import/no-cycle */
import { displayTasks } from './modules/display-task.js';

const time = document.getElementById('time');
// Initial References
export const newTaskInput = document.querySelector('#new-task input');

const now = DateTime.now();
time.innerHTML = `Date:[${now.day}-${now.month}-${now.year}] | Time:[${now.hour}:${now.minute}:${now.second}]`;
// Disable Edit Button
export const disableButtons = (bool) => {
  const editButtons = document.getElementsByClassName('edit');
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};
displayTasks();