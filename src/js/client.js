const state = {
  turn: ['X', 'O'],
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

  // Table elements
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

  // Moves counter
  let counter = 0;

  // Verifies if someone already won
  let hasWon = false;

  // Free space indicators
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

  // Won or lost
  let won = () => {
    // O
    if (o1 == true && o2 == true && o3 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td1.classList.add('won');
      td2.classList.add('won');
      td3.classList.add('won');
    }
    if (o4 == true && o5 == true && o6 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td4.classList.add('won');
      td5.classList.add('won');
      td6.classList.add('won');
    }
    if (o7 == true && o8 == true && o9 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td7.classList.add('won');
      td8.classList.add('won');
      td9.classList.add('won');
    }

    if (o1 == true && o4 == true && o7 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td1.classList.add('won');
      td4.classList.add('won');
      td7.classList.add('won');
    }
    if (o2 == true && o5 == true && o8 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td2.classList.add('won');
      td5.classList.add('won');
      td8.classList.add('won');
    }
    if (o3 == true && o6 == true && o9 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td3.classList.add('won');
      td6.classList.add('won');
      td9.classList.add('won');
    }

    if (o1 == true && o5 == true && o9 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td1.classList.add('won');
      td5.classList.add('won');
      td9.classList.add('won');
    }
    if (o7 == true && o5 == true && o3 == true){
      message.innerHTML = "O HA GANADO";
      hasWon = true;
      console.log("O ha ganado");
      console.log(hasWon);
      td7.classList.add('won');
      td5.classList.add('won');
      td3.classList.add('won');
    }


    // X
    if (x1 == true && x2 == true && x3 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td1.classList.add('won');
      td2.classList.add('won');
      td3.classList.add('won');
    }
    if (x4 == true && x5 == true && x6 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td4.classList.add('won');
      td5.classList.add('won');
      td6.classList.add('won');
    }
    if (x7 == true && x8 == true && x9 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td7.classList.add('won');
      td8.classList.add('won');
      td9.classList.add('won');
    }

    if (x1 == true && x4 == true && x7 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td1.classList.add('won');
      td4.classList.add('won');
      td7.classList.add('won');
    }
    if (x2 == true && x5 == true && x8 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td2.classList.add('won');
      td5.classList.add('won');
      td8.classList.add('won');
    }
    if (x3 == true && x6 == true && x9 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td3.classList.add('won');
      td6.classList.add('won');
      td9.classList.add('won');
    }

    if (x1 == true && x5 == true && x9 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td1.classList.add('won');
      td5.classList.add('won');
      td9.classList.add('won');
    }
    if (x7 == true && x5 == true && x3 == true){
      message.innerHTML = "X HA GANADO";
      hasWon = true;
      console.log("X ha ganado");
      console.log(hasWon);
      td7.classList.add('won');
      td5.classList.add('won');
      td3.classList.add('won');
    }
    if (counter == 9){
      message.innerHTML = "EMPATE";
      console.log("empate");
      hasWon = true;}
  }

  // Events
  button.onclick = () => {
    render(lState);
    console.log('reinicio');

  };

  td1.onclick = () => {
    console.log(turn);
    if(hasWon == false && x1 == false && o1 == false){
      if(turn == "X"){
        td1.classList.add('onX');    
        turn = "O";
        x1 = true;
        counter++;
      }
      else{
        td1.classList.add('onO');    
        turn = "X";
        o1 = true;
        counter++;
      }
      won();
      console.log(counter);
    } 
  }; 
  
  td2.onclick = () => {
    console.log(turn);
    if(hasWon == false && x2 == false && o2 == false){
      if(turn == "X"){
        td2.classList.add('onX');    
        turn = "O";
        x2 = true;
        counter++;
      }
      else{
        td2.classList.add('onO');    
        turn = "X";
        o2 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td3.onclick = () => {
    console.log(turn);
    if(hasWon == false && x3 == false && o3 == false){
      if(turn == "X"){
        td3.classList.add('onX');    
        turn = "O";
        x3 = true;
        counter++;
      }
      else{
        td3.classList.add('onO');    
        turn = "X";
        o3 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td4.onclick = () => {
    console.log(turn);
    if(hasWon == false && x4 == false && o4 == false){
      if(turn == "X"){
        td4.classList.add('onX');    
        turn = "O";
        x4 = true;
        counter++;
      }
      else{
        td4.classList.add('onO');    
        turn = "X";
        o4 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td5.onclick = () => {
    console.log(turn);
    if(hasWon == false && x5 == false && o5 == false){
      if(turn == "X"){
        td5.classList.add('onX');    
        turn = "O";
        x5 = true;
        counter++;
      }
      else{
        td5.classList.add('onO');    
        turn = "X";
        o5 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td6.onclick = () => {
    console.log(turn);
    if(hasWon == false && x6 == false && o6 == false){
      if(turn == "X"){
        td6.classList.add('onX');    
        turn = "O";
        x6 = true;
        counter++;
      }
      else{
        td6.classList.add('onO');    
        turn = "X";
        o6 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td7.onclick = () => {
    console.log(turn);
    if(hasWon == false && x7 == false && o7 == false){
      if(turn == "X"){
        td7.classList.add('onX');    
        turn = "O";
        x7 = true;
        counter++;
      }
      else{
        td7.classList.add('onO');    
        turn = "X";
        o7 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td8.onclick = () => {
    console.log(turn);
    if(hasWon == false && x8 == false && o8 == false){
      if(turn == "X"){
        td8.classList.add('onX');    
        turn = "O";
        x8 = true;
        counter++;
      }
      else{
        td8.classList.add('onO');    
        turn = "X";
        o8 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
  
  td9.onclick = () => {
    console.log(turn);
    if(hasWon == false && x9 == false && o9 == false){
      if(turn == "X"){
        td9.classList.add('onX');    
        turn = "O";
        x9 = true;
        counter++;
      }
      else{
        td9.classList.add('onO');    
        turn = "X";
        o9 = true;
        counter++;
      }
      won();
      console.log(counter);
    }  
  };
}
render(state);


