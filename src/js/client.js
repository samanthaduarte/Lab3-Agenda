const state = {
  turn: ['X', 'O'],
  currentSquare: 0,
};

const render = lState => {

  
  const agenda = document.createElement('div');
  agenda.className = 'agenda';

  const topBar = document.createElement('div');
  topBar.className = 'topBar';
  const taskList = document.createElement('div');
  taskList.className = 'tasklist';
  const input = document.createElement('div');
  input.className = 'input';

  const allBtn = document.createElement('button');
  allBtn.className = 'button';
  allBtn.innerHTML = 'All';
  const completedBtn = document.createElement('button');
  completedBtn.className = 'button';
  completedBtn.innerHTML = 'Completed';
  const activeBtn = document.createElement('button');
  activeBtn.className = 'button';
  activeBtn.innerHTML = 'Active';

  const text = document.createElement('input');
  text.className = 'text';
  text.innerHTML = 'Add a task here';
  const addBtn = document.createElement('button');
  addBtn.className = 'addbutton';
  addBtn.innerHTML = 'Add';

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }
// ul con varios li y adentro de ellos hay un button
  // Main rendering

  root.appendChild(agenda);
  agenda.appendChild(topBar);
  agenda.appendChild(taskList);
  agenda.appendChild(input);

  topBar.appendChild(allBtn);
  topBar.appendChild(completedBtn);
  topBar.appendChild(activeBtn);

  //taskList.appendChild(task);

  input.appendChild(text);
  input.appendChild(addBtn);


  // Events
  /*
  button.onclick = () => {
    render(lState);
  };
  */

}
render(state);


