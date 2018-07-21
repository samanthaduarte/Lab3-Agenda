const state = {
  taskList: [],
  filters: ['all', 'completed','active'],
  currentFilter: 'all',
  loading: true,
};

const render = lState => {

  const topBar = document.createElement('div');
  topBar.className = 'topbar';
  const tasks = document.createElement('ul');
  tasks.className = 'tasks';
  const bottomBar = document.createElement('div');
  bottomBar.className = 'bottombar';

  const allBtn = document.createElement('button');
  allBtn.className = 'button';
  allBtn.innerHTML = 'All';
  const completedBtn = document.createElement('button');
  completedBtn.className = 'button';
  completedBtn.innerHTML = 'Completed';
  const activeBtn = document.createElement('button');
  activeBtn.className = 'button';
  activeBtn.innerHTML = 'Active';

  const taskInput = document.createElement('input');
  taskInput.className = 'taskinput';
  taskInput.setAttribute("type", "text");
  taskInput.textContent = 'Add new task';
  const taskTxt = document.getElementsByClassName("taskinput").value;
  const addBtn = document.createElement('button');
  addBtn.className = 'addbutton';
  addBtn.innerHTML = 'Add';

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }
  // Main rendering
  root.appendChild(topBar);
  root.appendChild(tasks);
  root.appendChild(bottomBar);

  topBar.appendChild(allBtn);
  topBar.appendChild(completedBtn);
  topBar.appendChild(activeBtn);

  //tasks.appendChild(task);

  bottomBar.appendChild(taskInput);
  bottomBar.appendChild(addBtn);


  // Events
  
  addBtn.onclick = () => {
    console.log(taskTxt);
    lState.taskList.push(taskTxt);
    console.log(lState.taskList);
    const task = document.createElement('li');
    task.textContent  = `Tarea:  ${taskTxt}`;
    tasks.appendChild(task);
  };
  allBtn.onclick = () => {
    console.log("all");
    lState.currentFilter = lState.filters['all'];
  };
  completedBtn.onclick = () => {
    console.log("completed");
    lState.currentFilter = lState.filters['completed'];
  };
  activeBtn.onclick = () => {
    console.log("active");
    lState.currentFilter = lState.filters['active'];
  };
  

}
render(state);


