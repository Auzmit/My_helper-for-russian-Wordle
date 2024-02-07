import constArrWords from '../src/words/arrWords.js';

export default (stateRP, stateWP, stateNP) => {
  const arrRightPlace = [];
  const arrWrongPlace = [];
  const arrNoPlace = stateNP.toLowerCase().replaceAll(' ', '').split('');
  for (let i = 0; i < 5; i += 1) {
    arrRightPlace.push(stateRP[i].toLowerCase().replaceAll(' ', ''));
    arrWrongPlace.push(stateWP[i].toLowerCase().replaceAll(' ', ''));
  }

  let resultWords = Array.from(constArrWords);

  // Проверка resultWords с помощью arrRightPlace
  for (let i = 0; i < resultWords.length; i += 1) {
    for (let iArrRightPlace = 0; iArrRightPlace < arrRightPlace.length; iArrRightPlace += 1) {
      if (resultWords[i] !== null && arrRightPlace[iArrRightPlace] !== '') {
        if (resultWords[i][iArrRightPlace] !== arrRightPlace[iArrRightPlace]) {
          resultWords[i] = null;
        }
      }
    }
  }
  resultWords = resultWords.filter((item) => item !== null);

  // Проверка arrWords с помощью arrWrongPlace
  if (arrWrongPlace.length > 0) {
    for (let i = 0; i < resultWords.length; i += 1) {
      for (let iArrWrongPlace = 0; iArrWrongPlace < arrWrongPlace.length; iArrWrongPlace += 1) {
        if (arrWrongPlace[iArrWrongPlace].trim() !== '' && resultWords[i] !== null) {
          const arrWrongLettersInPlace = arrWrongPlace[iArrWrongPlace].split('');
          // eslint-disable-next-line no-loop-func
          const isItRightLetter = (letter) => ((resultWords[i].indexOf(letter) !== -1)
                                        && (resultWords[i][iArrWrongPlace] !== letter));
          if (!arrWrongLettersInPlace.every(isItRightLetter)) resultWords[i] = null;
        }
      }
    }
    resultWords = resultWords.filter((item) => item !== null);
  }

  // Проверка resultWords с помощью arrNoPlace
  if (arrNoPlace.length > 0) {
    for (let i = 0; i < resultWords.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      const isLetterInWord = (letter) => resultWords[i].indexOf(letter) !== -1;
      if (arrNoPlace.some(isLetterInWord)) resultWords[i] = null;
    }
    resultWords = resultWords.filter((item) => item !== null);
  }

  return resultWords;
};

//  check;
