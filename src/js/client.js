const state = {
  squares: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  currentSquare: 0,
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'Totito';
 
/*
  const semaforo = document.createElement('div');
  semaforo.className = 'semaforo';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nextBtn';
  nextBtn.innerHTML = 'Next';

  
  td.onClick = 'nextMove(this)'
*/
  const table = document.createElement('table');
  table.border = 0;

  const turn = 'x';

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

  
  const x1 = 0;
  const x2 = 0;
  const x3 = 0;
  const x4 = 0;
  const x5 = 0;
  const x6 = 0;
  const x7 = 0;
  const x8 = 0;
  const x9 = 0;
  const o1 = 0;
  const o2 = 0;
  const o3 = 0;
  const o4 = 0;
  const o5 = 0;
  const o6 = 0;
  const o7 = 0;
  const o8 = 0;
  const o9 = 0;

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Main rendering
/*
  root.appendChild(title);
  root.appendChild(semaforo);
  root.appendChild(nextBtn);
*/ 
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


  /*
  const lightElements = lState.lights.map(
    (lightColor, i) => {
      const lightElement = document.createElement('div');
      lightElement.className = `light ${lightColor}`;

      if (i === lState.currentLight) {
        lightElement.classList.add('on');
      }

      return lightElement;
    }
  );

  lightElements.forEach(
    lightElement => semaforo.appendChild(lightElement)
  );
*/
  // Events
  button.onclick = () => {
    /*lState.currentSquare = (lState.currentSquare + 1) % lState.squares.length;
    render(lState);*/
    console.log('reinicio');

  };
  td1.onclick = () => {
    /*lState.currentSquare = (lState.currentSquare + 1) % lState.squares.length;
    render(lState);*/
    console.log('casilla');
    td1.classList.add('onX');
    turn = 'o';

  };
}

render(state);