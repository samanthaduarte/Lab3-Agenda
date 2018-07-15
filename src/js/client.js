const state = {
  squares: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  currentSquare: 0,
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'Totito';
 
  const table = document.createElement('table');
  table.border = 0;

  let turn = "X";

  const message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = `Es el turno de: ${turn}`;

  const button = document.createElement('button');
  button.className = 'button';
  button.innerHTML = 'Reiniciar juego';

  
  const tr1 = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.className = 'square';
  const td2 = document.createElement('td');
  td2.className = 'square';
  const td3 = document.createElement('td');
  td3.className = 'square';

  const td4 = document.createElement('td');
  td4.className = 'square';
  const td5 = document.createElement('td');
  td5.className = 'square';
  const td6 = document.createElement('td');
  td6.className = 'square';

  const td7 = document.createElement('td');
  td7.className = 'square';
  const td8 = document.createElement('td');
  td8.className = 'square';
  const td9 = document.createElement('td');
  td9.className = 'square';

  let counterX = 0;
  let counterO = 0;

  let x1 = false;
  let x2 = false;
  let x3 = false;
  let x4 = false;
  let x5 = false;
  let x6 = false;
  let x7 = false;
  let x8 = false;
  let x9 = false;
  let o1 = false;
  let o2 = false;
  let o3 = false;
  let o4 = false;
  let o5 = false;
  let o6 = false;
  let o7 = false;
  let o8 = false;
  let o9 = false;

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Main rendering

  root.appendChild(title);
  root.appendChild(message);
  
  root.appendChild(table);
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  tr2.appendChild(td4);
  tr2.appendChild(td5);
  tr2.appendChild(td6);
  tr3.appendChild(td7);
  tr3.appendChild(td8);
  tr3.appendChild(td9);

  root.appendChild(button);


  // Events
  button.onclick = () => {
    render(lState);
    console.log('reinicio');


  };

  td1.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x1 == false || o1 == false || o1 == false){
          td1.classList.add('onX');    
          turn = "O";
          x1 = true;
        }
      }else{
        if(o1 == false){
          td1.classList.add('onO');
          turn = "X";
          o1 = true;
        }
      }  
  };
  
  td2.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x2 == false || o2 == false){
          td2.classList.add('onX');    
          turn = "O";
          x2 = true;
        }
      }else{
        if(o2 == false){
          td2.classList.add('onO');
          turn = "X";
          o2 = true;
        }
      }  
  };
  td3.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x3 == false || o3 == false){
          td3.classList.add('onX');    
          turn = "O";
          x3 = true;
        }
      }else{
        if(o3 == false){
          td3.classList.add('onO');
          turn = "X";
          o3 = true;
        }
      }  
  };
  td4.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x4 == false || o4 == false){
          td4.classList.add('onX');    
          turn = "O";
          x4 = true;
        }
      }else{
        if(o4 == false){
          td4.classList.add('onO');
          turn = "X";
          o4 = true;
        }
      }  
  };
  td5.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x5 == false || o5 == false){
          td5.classList.add('onX');    
          turn = "O";
          x5 = true;
        }
      }else{
        if(o5 == false){
          td5.classList.add('onO');
          turn = "X";
          o5 = true;
        }
      }  
  };
  td6.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x6 == false || o6 == false){
          td6.classList.add('onX');    
          turn = "O";
          x6 = true;
        }
      }else{
        if(o6 == false){
          td6.classList.add('onO');
          turn = "X";
          o6 = true;
        }
      }  
  };
  td7.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x7 == false || o7 == false){
          td7.classList.add('onX');    
          turn = "O";
          x7 = true;
        }
      }else{
        if(o7 == false){
          td7.classList.add('onO');
          turn = "X";
          o7 = true;
        }
      }  
  };
  td8.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x8 == false || o8 == false){
          td8.classList.add('onX');    
          turn = "O";
          x8 = true;
        }
      }else{
        if(o8 == false){
          td8.classList.add('onO');
          turn = "X";
          o8 = true;
        }
      }  
  };
  td9.onclick = () => {
    console.log(turn);
    if(turn == "X"){
        if(x9 == false || o9 == false){
          td9.classList.add('onX');    
          turn = "O";
          x9 = true;
        }
      }else{
        if(o9 == false){
          td9.classList.add('onO');
          turn = "X";
          o9 = true;
        }
      }  
    };

  // Won or lost
  if (o1 == true){
    message.innerHTML = "O HA GANADO";
    console.log("O ha ganado");
  }
  
}

render(state);


