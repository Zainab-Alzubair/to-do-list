import './style.css';

const tasks = [
  {
    index: 0,
    description: 'First task',
    completed: true,
  },
  {
    index: 1,
    description: 'Second task',
    completed: true,
  },
  {
    index: 2,
    description: 'Third task',
    completed: true,
  },
];

const displyList = () => {
  let result = '';
  tasks.forEach((task) => {
    result += `<li><input type="checkbox" id="" name="" value=""> ${task.description}</li> <hr>`;
  });
  document.getElementById('tasks').innerHTML = result;
};

displyList();
