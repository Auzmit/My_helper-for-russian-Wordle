// const render = (resultState, arrWords) => {
export default (resultState, arrWords) => {
  // console.log(resultState);
  const inputsRP = document.querySelectorAll('.div_arrRightPlace input');
  const inputsWP = document.querySelectorAll('.div_arrWrongPlace input');
  const inputNP = document.querySelector('.div_strNoPlace input');
  // console.log(inputsWP);
  for (let i = 0; i < 5; i += 1) {
    inputsRP[i].value = resultState.arrRightPlace[i];
    inputsWP[i].value = resultState.arrWrongPlace[i];
    inputsWP[i].style.width = `${inputsWP[i].value.length + 2}ch`;
  }

  // inputNP.textContent = resultState.strNoPlace;
  inputNP.value = resultState.strNoPlace;
  inputNP.style.width = `${inputNP.value.length + 2}ch`;
  // console.log(inputNP.textContent);

  const divResultWords = document.querySelector('#resultWords');
  divResultWords.innerHTML = '';

  const divWordsQuantity = document.createElement('div');
  divWordsQuantity.textContent = `подходящих слов: ${arrWords.length}`;
  divWordsQuantity.classList.add('divWordsQuantity');
  // console.log(divWordsQuantity.textContent);
  // console.log(divWordsQuantity);
  divResultWords.append(divWordsQuantity);

  // const divWord = document.createElement('div');
  // // divWord.textContent = 1;
  // //   divWord.textContent = word;
  // divResultWords.append(divWord);

  arrWords.forEach((word) => {
    const divWord = document.createElement('div');
    divWord.textContent = word;
    // divWord.style.display = 'inline-block';
    divWord.classList.add('divWord');
    divResultWords.append(divWord);
    // divResultWords.textContent = `${result.length}\n${result}`;
  });
};

// export default render;
