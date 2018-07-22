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

  // Events
  
  addBtn.onclick = () => {

    taskTxt = taskInput.value;
    console.log(`Se agrego una tarea ${taskTxt}`);

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

    // Show all tasks
    allBtn.onclick = () => {
      console.log("all");
      lState.currentFilter = lState.filters['all'];
      render(lState);
      for(let i = 0; i<lState.taskList.length; i++){
        console.log(lState.taskList[i][0]);
        // Create element to show task from array
        task.textContent  = lState.taskList[i][0];
        console.log(task.textContent);
        tasks.appendChild(task);
      }
    };

  };
/*
  // Show all tasks
  allBtn.onclick = () => {
    console.log("all");
    lState.currentFilter = lState.filters['all'];
    render(lState);
    for(let i = 0; i<lState.taskList.length; i++){
      console.log(lState.taskList[i]);
      // Create element to show task
      let task = document.createElement('li');
      task.textContent  = lState.taskList[i][0];
      tasks.appendChild(task);
    }
  };

*/
  // Show all selected tasks
  completedBtn.onclick = () => {
    console.log("completed");
    lState.currentFilter = lState.filters['completed'];
    render(lState);
    tasks.appendChild(document.getElementsByClassName('selected'));
  };

  // Show all non selected tasks
  activeBtn.onclick = () => {
    console.log("active");
    lState.currentFilter = lState.filters['active'];
    render(lState);
    for(let i = 0; i<lState.taskList.length; i++){
      if (lState.taskList[i]){
        tasks.appendChild();
      }
    }
    
  };


}
render(state);


