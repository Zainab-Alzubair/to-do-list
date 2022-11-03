import './style.css';
import { addTaskToArray } from './modules/add-task.js';
import { getFromLocalStorage } from './modules/localStorage.js';

const addInput = document.querySelector('.add-new');
const addBtn = document.querySelector('.add-new-btn');

export let tasksArr =[];

if (localStorage.getItem("tasks")) {
  tasksArr = JSON.parse(localStorage.getItem("tasks"));
}

getFromLocalStorage();


addBtn.addEventListener('click',()=>{
if (addInput.value !== ""){
  addTaskToArray(addInput.value);
  addInput.value = "";
}
})







