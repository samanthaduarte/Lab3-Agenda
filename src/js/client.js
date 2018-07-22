const state = {
  taskList: [],
  filters: ['all', 'completed','active'],
  currentFilter: 'all',
  loading: true,
};


const request = fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json');
request
    .then(result => result.json())
    .then(resultJson => {
        state.taskList = resultJson;
        console.log(state)
    })
    .then(() => {
        state.loading = false,
            console.log(state)
});

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

  let taskInput = document.createElement('input');
  taskInput.className = 'taskinput';
  taskInput.setAttribute("type", "text");
  let taskTxt;
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
    taskTxt = taskInput.value;
    console.log(`Se agrego una tarea ${taskTxt}`);

    // Add task to array and add nonselected attribute
    let isSelected = false;
    let elementTask = new Array(taskTxt, isSelected);
    lState.taskList.push(elementTask);
    lState.currentFilter
    console.log(lState.taskList);

    // Create element to show task
    let task = document.createElement('li');
    task.textContent  = taskTxt;
    tasks.appendChild(task);

    // Allow task to be selected
    task.onclick = () => {
      // Show task in different color
      task.classList.add('selected');
      // Change isSelected value to true
      isSelected = true;
      console.log(lState.taskList);
    };
  };

  // Show all tasks
  allBtn.onclick = () => {
    console.log("all");
    lState.currentFilter = lState.filters['all'];
  };

  // Show all selected tasks
  completedBtn.onclick = () => {
    console.log("completed");
    lState.currentFilter = lState.filters['completed'];
  };

  // Show all non selected tasks
  activeBtn.onclick = () => {
    console.log("active");
    lState.currentFilter = lState.filters['active'];
  };


}
render(state);


