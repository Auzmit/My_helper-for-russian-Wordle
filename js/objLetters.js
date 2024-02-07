const objLetters = {
  70: 'А',
  188: 'Б',
  68: 'В',
  85: 'Г',
  76: 'Д',
  84: 'Е',
  192: 'Е',
  186: 'Ж',
  80: 'З',
  66: 'И',
  81: 'Й',
  82: 'К',
  75: 'Л',
  86: 'М',
  89: 'Н',
  74: 'О',
  71: 'П',
  72: 'Р',
  67: 'С',
  78: 'Т',
  69: 'У',
  65: 'Ф',
  219: 'Х',
  87: 'Ц',
  88: 'Ч',
  73: 'Ш',
  79: 'Щ',
  221: 'Ъ',
  83: 'Ы',
  77: 'Ь',
  222: 'Э',
  190: 'Ю',
  90: 'Я',
};

// eslint-disable-next-line import/no-mutable-exports
// let symbols = '0123456789 -=;,.[{}] \\ /`§<> !@#$%^&*() + "№?';
// symbols += "'";

// export { objLetters, symbols };
export default objLetters;

// console.log(objLetters[82]);

// const inputs = document
//   .querySelectorAll('.input_right-letter, .input_wrong-objLetters, #input_no-objLetters');

// inputs.forEach((input) => {
//   input.addEventListener('keydown', (e) => {
//     const numKeyCode = e.keyCode;
//     if (numKeyCode in objLetters) {
//       if (e.target.className === 'input_right-letter') {
//         e.target.value = objLetters[numKeyCode];
//       } else {
//         if (e.target.value.length !== 0) {
//           e.target.value += ' ';
//         }
//         e.target.value += objLetters[numKeyCode];
//       }
//       console.log(111, e.target.value.length);
//     }

//     if (e.key === 'Backspace') {
//       e.target.value = e.target.value.slice(0, -1);
//     }

//     // Change the width when the value changes
//     if (e.target.className !== 'input_right-letter') {
//       // e.target.style.width = `${e.target.value.length + 1.5}ch`;
//       e.target.style.width = `${e.target.value.length + 2}ch`;
//     }
//   });
// });
