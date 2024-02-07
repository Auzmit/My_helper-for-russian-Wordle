// const strWithDots = fs.readFileSync('./strDotsWords.txt', 'utf-8');
// const arrDotsWords = strWithDots.split('\r').map((item) => item.split('. ')[1]);
// fs.writeFileSync('./strWords.txt', arrDotsWords.join('\r\n'), 'utf-8');
// // const strWords = fs.readFileSync('./test_strWords.txt', 'utf-8');
// const strWords = fs.readFileSync('./strWords.txt', 'utf-8');
// // let arrWords = strWords.split('\r\n');
// // console.log(arrWords);
// // fs.writeFileSync('./arrWords.js', JSON.stringify(arrWords), 'utf-8');
//

// const inputs = document
//   .querySelectorAll('.input_right-letter, .input_wrong-letters, #input_no-letters');
// inputs.forEach((input) => {
//   input.addEventListener('keydown', () => {
//     // console.log(111, readLetters());
//     // const { arrRightPlace, arrWrongPlace, arrNo } = readLetters();
//     const { arrRightPlace, arrWrongPlace, arrNo } = readLetters();
//     console.log(arrRightPlace, arrWrongPlace, arrNo);

//     const result = check(arrRightPlace, arrWrongPlace, arrNo); // .join(', ')
//     console.log(result.length, 'possible words: ', result);
//     const divResultWords = document.querySelector('#resultWords');
//     divResultWords.textContent = `${result.length}\n${result}`;
//     // console.log(arrRightPlace, arrWrongPlace, arrNo);
//     // arrWords = constArrWords;
//   });
// });

// console.log(); //
// console.log(arrWords.length, 'possible words:'); //
// process.stdout.write(JSON.stringify(arrWords)); console.log('\n'); //
