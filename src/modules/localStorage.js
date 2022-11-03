import { displyList } from "./display-list.js";

export const addToLocalStorage = (tasksArr)=> {
  window.localStorage.setItem("tasks",JSON.stringify(tasksArr))
  }
  
export const getFromLocalStorage=()=>{
    let data = window.localStorage.getItem("tasks");
    if (data) {
      let tasks = JSON.parse(data);
      displyList(tasks)
    }
  }