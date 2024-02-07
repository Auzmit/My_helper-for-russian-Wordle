import arrowsControl from './arrowsControl.js';
import objLetters from './objLetters.js';
import check from './check.js';
import render from './render.js';

window.addEventListener('load', () => {
  console.log('page is fully loaded');
  document.querySelector('.input_right-letter').focus();
});

const state = {
  arrRightPlace: ['', '', '', '', ''],
  arrWrongPlace: ['', '', '', '', ''],
  strNoPlace: '',
};

const inputsLetters = document
  .querySelectorAll('.input_right-letter, .input_wrong-letters, #input_no-letters');

inputsLetters.forEach((input) => {
  input.addEventListener('keydown', (e) => {
    arrowsControl(e);
    const idNumber = e.target.id.slice(-1);
    if (e.keyCode in objLetters) {
      if (input.className === 'input_right-letter') {
        state.arrRightPlace[idNumber - 1] = objLetters[e.keyCode];
      } else if (input.className === 'input_wrong-letters') {
        if (state.arrWrongPlace[idNumber - 1].length !== 0) {
          state.arrWrongPlace[idNumber - 1] += ' ';
        }
        state.arrWrongPlace[idNumber - 1] += objLetters[e.keyCode];
      } else if (input.id === 'input_no-letters') {
        if (state.strNoPlace.length !== 0) {
          state.strNoPlace += ' ';
        }
        state.strNoPlace += objLetters[e.keyCode];
      }
    }

    if (e.key === 'Backspace') {
      if (input.className === 'input_right-letter') {
        state.arrRightPlace[idNumber - 1] = '';
      } else if (input.className === 'input_wrong-letters') {
        state.arrWrongPlace[idNumber - 1] = state.arrWrongPlace[idNumber - 1].slice(0, -2);
      } else if (input.id === 'input_no-letters') {
        state.strNoPlace = state.strNoPlace.slice(0, -2);
      }
    }

    if (e.key === 'Delete') {
      if (input.className === 'input_right-letter') {
        state.arrRightPlace[idNumber - 1] = '';
      } else if (input.className === 'input_wrong-letters') {
        state.arrWrongPlace[idNumber - 1] = '';
      } else if (input.id === 'input_no-letters') {
        state.strNoPlace = '';
      }
    }

    const arrWords = check(state.arrRightPlace, state.arrWrongPlace, state.strNoPlace);
    render(state, arrWords);

    input.addEventListener('input', () => {
      render(state, arrWords);
    });
  });
});
