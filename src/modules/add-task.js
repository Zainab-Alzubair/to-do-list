
import { tasksArr } from "../index.js";
import { displyList } from "./display-list.js";
import { addToLocalStorage } from "./localStorage.js";

export const addTaskToArray= (taskText)=>{
  const task = {
    id: Date.now(),
    description: taskText,
    complated: false,
  };
  tasksArr.push(task);
  displyList(tasksArr);
  //add data to local storage from array of tasks
  addToLocalStorage(tasksArr)
  }
