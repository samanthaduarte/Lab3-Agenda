const state = {
  taskList: [],
  currentTask: 0,
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
  let tasks = document.createElement('ul');
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

  const addBtn = document.createElement('button');
  addBtn.className = 'addbutton';
  addBtn.innerHTML = 'Add';

  let taskInput = document.createElement('input');
  taskInput.className = 'taskinput';
  taskInput.setAttribute("type", "text");
  let taskTxt;

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
  bottomBar.appendChild(taskInput);
  bottomBar.appendChild(addBtn);
/*
  let manageTasks = () => {

  }
*/

  // Events

  addBtn.onclick = () => {
    render(lState);
    taskTxt = taskInput.value;
    console.log(taskTxt);

    // Delete input box content
    taskInput.value = '';

    // Add task to array and add nonselected value
    let elementTask = new Array(taskTxt, false);
    lState.taskList.push(elementTask);
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
      elementTask[1] = true;
      console.log(lState.taskList);

    };

  };

  // Show all tasks
  allBtn.onclick = () => {
    render(lState);
    console.log("all");
    lState.currentFilter = lState.filters['all'];
    
    for(let i = 0; i<lState.taskList.length; i++){
      // Create element to show task
      let task = document.createElement('li');
      task.textContent  = lState.taskList[i][0];
      tasks.appendChild(task);
    }
  };

  // Show all selected tasks
  completedBtn.onclick = () => {
    render(lState);
    console.log("completed");
    lState.currentFilter = lState.filters['completed'];
    
    for(let i = 0; i<lState.taskList.length; i++){
      if (lState.taskList[i][1] == true){
        // Create element to show task
        let task = document.createElement('li');
        task.textContent  = lState.taskList[i][0];
        // Show task in different color
        task.classList.add('selected');
        tasks.appendChild(task);
      }
    }
  };

  // Show all non selected tasks
  activeBtn.onclick = () => {
    render(lState);
    console.log("active");
    lState.currentFilter = lState.filters['active'];
    
    for(let i = 0; i<lState.taskList.length; i++){
      if (lState.taskList[i][1] == false){
        // Create element to show task
        let task = document.createElement('li');
        task.textContent  = lState.taskList[i][0];

        tasks.appendChild(task);
      }
    }
  };


}
render(state);


