export const displyList= (tasksArr) =>{
  let result = '';
  tasksArr.forEach((task) => {
    result += `<li id="list-items"><div><input type="checkbox" id="" name="" value=""> ${task.description}</div>
    <div>
    <i id="edit-icon" class="fa-solid fa-pen-to-square"></i>
    <i id="trash-icon" class="fa-solid fa-trash-can"></i>
    </div>
    </li> <hr>`;
  });
  document.getElementById('tasks').innerHTML = result;
};
