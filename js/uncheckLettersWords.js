// let arrUncheckedLetters = [];
// const possibleUncheckedLetters = (arrResultWords) => {
//   arrResultWords.map((word) => {
//     arrUncheckedLetters = arrUncheckedLetters.concat(word.split(''));
//     return word;
//   });
//   arrUncheckedLetters = [...new Set(arrUncheckedLetters)];
//   // console.log(arrUncheckedLetters); //
//   for (let iArrPossMBLs = 0; iArrPossMBLs < arrUncheckedLetters.length; iArrPossMBLs += 1) {
//     const arrCheckedLetters = [...arrRightPlace, ...arrWrongPlace, ...arrNo]
//       .filter((letter) => letter !== '');
//     /* eslint-disable-next-line */
//     if (arrCheckedLetters.some((unnededLetter) => {
//       // console.log(arrUncheckedLetters[iArrPossMBLs], unnededLetter, 1); //
//       return arrUncheckedLetters[iArrPossMBLs] === unnededLetter;
//     })) {
//       arrUncheckedLetters[iArrPossMBLs] = null;
//       // console.log(arrUncheckedLetters); //
//     }
//   }

//   arrUncheckedLetters = arrUncheckedLetters.filter((currLetter) => currLetter !== null);
//   return arrUncheckedLetters;
// };
// // possibleUncheckedLetters(arrWords);
// // console.log(arrUncheckedLetters.length, 'possible unchecked letters: ', arrUncheckedLetters);

//
// // Слова, полностью из непроверенных букв (возможно таких не будет)
// /* eslint-disable-next-line */
// const possibleUncheckedWords = (arrUncheckedLetters) => {
//   let arrUncheckedWords = strWords.split('\r\n');
//   let arrCheckedLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и',
//     'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч',
//     'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
//   arrCheckedLetters =
//   if (arrUncheckedLetters.length > 0) {
//     for (let iArrUncheckWs = 0; iArrUncheckWs < arrUncheckedWords.length; iArrUncheckWs += 1) {
//       /* eslint-disable-next-line */
//       const isLetterInWord = (uncheckedLetter) => {
//         arrUncheckedWords[iArrUncheckWs].indexOf(uncheckedLetter) !== -1;
//       }
//       if (arrNo.some(isLetterInWord)) arrWords[iArrUncheckWs] = null;
//     }
//     arrWords = arrWords.filter((item) => item !== null);
//   }
// };
//

console.log(); //
