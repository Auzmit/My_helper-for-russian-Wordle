export default (e) => {
  if (e.key === 'ArrowUp') {
    if (e.target.className === 'input_wrong-letters') {
      const number = Number(e.target.id.slice(-1));
      document.querySelector(`#input_right-letter-${number}`).focus();
    }
    if (e.target.id === 'input_no-letters') {
      document.querySelector('#input_wrong-letters-1').focus();
    }
  }

  // ↓ ArrowDown 40
  if (e.key === 'ArrowDown') {
    if (e.target.className === 'input_right-letter') {
      const number = Number(e.target.id.slice(-1));
      document.querySelector(`#input_wrong-letters-${number}`).focus();
    }
    if (e.target.className === 'input_wrong-letters') {
      document.querySelector('#input_no-letters').focus();
    }
  }

  // ← ArrowLeft 37
  if (e.key === 'ArrowLeft') {
    if (e.target.className === 'input_right-letter') {
      const number = Number(e.target.id.slice(-1));
      if (number > 1) {
        document.querySelector(`#input_right-letter-${number - 1}`).focus();
      }
    }
    if (e.target.className === 'input_wrong-letters') {
      const number = Number(e.target.id.slice(-1));
      if (number > 1) {
        document.querySelector(`#input_wrong-letters-${number - 1}`).focus();
      }
    }
  }

  // → ArrowRight 39
  if (e.key === 'ArrowRight') {
    if (e.target.className === 'input_right-letter') {
      const number = Number(e.target.id.slice(-1));
      if (number < 5) {
        document.querySelector(`#input_right-letter-${number + 1}`).focus();
      }
    }
    if (e.target.className === 'input_wrong-letters') {
      const number = Number(e.target.id.slice(-1));
      if (number < 5) {
        document.querySelector(`#input_wrong-letters-${number + 1}`).focus();
      }
    }
  }
};
