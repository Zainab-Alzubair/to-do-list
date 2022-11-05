/* eslint-disable import/no-cycle */
import { removeTask, updateStorage } from './localStorage.js';
import { disableButtons, newTaskInput } from '../index.js';

export const tasksDiv = document.querySelector('#tasks');
const clearTasks = document.querySelector('.clear-btn');
let deleteTasks; let editTasks;
let count;
let updateNote = '';

// Function to Display The Tasks
export const displayTasks = () => {
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = 'inline-block';
  } else {
    tasksDiv.style.display = 'none';
  }
  // Clear the tasks
  tasksDiv.innerHTML = '';
  // Fetch All The Keys in local storage
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();

  tasks.forEach((key) => {
    // Get all values
    const value = localStorage.getItem(key);

    const taskInnerDiv = document.createElement('div');
    taskInnerDiv.classList.add('task');
    taskInnerDiv.setAttribute('id', key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split('_')[1]}</span>`;
    // localstorage would store boolean as string so we parse it to boolean back
    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    if (!JSON.parse(value)) {
      editButton.style.visibility = 'visible';
    } else {
      editButton.style.visibility = 'hidden';
      taskInnerDiv.classList.add('completed');
    }
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += '<button class="delete"><i class="fa-solid fa-trash"></i></button>';
    tasksDiv.appendChild(taskInnerDiv);
  });
  // tasks completed
  tasks = document.querySelectorAll('.task');
  tasks.forEach((element) => {
    element.onclick = () => {
      // local storage update
      if (element.classList.contains('completed')) {
        updateStorage(element.id.split('_')[0], element.innerText, false);
      } else {
        updateStorage(element.id.split('_')[0], element.innerText, true);
      }
    };
  });
  // Edit Tasks
  editTasks = document.getElementsByClassName('edit');
  Array.from(editTasks).forEach((element) => {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
      // disable other edit buttons when one task is being edited
      disableButtons(true);
      // update input value and remove div
      const parent = element.parentElement;
      newTaskInput.value = parent.querySelector('#taskname').innerText;
      // set updateNote to the task that is being edited
      updateNote = parent.id;
      // remove task
      parent.remove();
    });
  });
  // Delete Tasks
  deleteTasks = document.getElementsByClassName('delete');
  Array.from(deleteTasks).forEach((element) => {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
      // Delete from local storage and remove div
      const parent = element.parentElement;
      removeTask(parent.id);
      parent.remove();
      count -= 1;
    });
  });
};
// clear all checked tasks
clearTasks.addEventListener('click', (e) => {
  count = Object.keys(localStorage).length;
  e.stopPropagation();
  const tasks1 = document.querySelectorAll('.task');
  tasks1.forEach((element) => {
    // local storage update
    if (element.classList.contains('completed')) {
      removeTask(element.id);
      element.remove();
      count -= 1;
    }
  });
});

// Function on window load
window.onload = () => {
  updateNote = '';
  count = Object.keys(localStorage).length;
  displayTasks();
};
// Function To Add New Task
document.querySelector('#push').addEventListener('click', () => {
  // Enable the edit button
  disableButtons(false);
  if (newTaskInput.value.length === 0) {
    alert('Please Enter A Task');
  } else {
    // Store locally and display from local storage
    if (updateNote === '') {
      // new task
      updateStorage(count, newTaskInput.value, false);
    } else {
      // update task
      const existingCount = updateNote.split('_')[0];
      removeTask(updateNote);
      updateStorage(existingCount, newTaskInput.value, false);
      updateNote = '';
    }
    count += 1;
    newTaskInput.value = '';
  }
});
