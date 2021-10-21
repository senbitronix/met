/* modal for PC -------------------------------------------------------------------------------------*/
// кнопки вызова модального окна
let priceBtn = document.querySelector('.main-buttons__price-btn');
let questionBtn = document.querySelector('.main-buttons__question-btn');

// модальное окно
let bcgModal = document.querySelector('.bcg-modal');
// отдельные поля в модальном окне
let questionField = document.querySelector('.modal__question');

// кнопки в модальном окне
let priceInnerBtn = document.querySelector('.modal__send');
let questionInnerBtn = document.querySelector('.modal__ask');
let btnСlose = document.querySelector('.btn-close');

// Открыть-закрыть окно
let openModal = function () {
  bcgModal.style.display = "block";
  document.body.style.overflow = "hidden"
  /* body.style.overflow = "hidden"; */
}
let closeModal = function () {
  bcgModal.style.display = "none";
  document.body.style.overflow = "auto"
  
  /* body.style.overflow = "auto"; */
}

// События
priceBtn.addEventListener('click', (e) => {
  openModal();
  priceInnerBtn.style.display = "block";
})

questionBtn.addEventListener('click', (e) => {
  openModal();
  questionField.style.display = "block";
  questionInnerBtn.style.display = "block";
})


btnСlose.addEventListener('click', (e) => {
  closeModal();  
  questionField.style.display = "none";
  priceInnerBtn.style.display = "none";
  questionInnerBtn.style.display = "none";
})

document.addEventListener('keydown', (e) => {
  if(e.code == "Escape") {
    closeModal();
    priceInnerBtn.style.display = "none";  
    questionField.style.display = "none";
    questionInnerBtn.style.display = "none";
  }
})

/* closeModal(); */

/* slider for PC --------------------------------------------------------------------------------------------------------*/

let mainPic = document.querySelector('.slider__col2 img');
let slider = document.querySelector('.slider');

slider.addEventListener('click', (e) => {
  if ( e.target.classList.contains("img") ) {
    let itemSrc = e.target.src;
    let mainSrc = mainPic.src;

    
    mainPic.src = itemSrc;
    e.target.src = mainSrc;
  } 
})


/* usage__btn (кнопка "читать все") -------------------------------------------------------------------------------------*/

let usageBtn = document.querySelector('.usage__btn');
let usageMobile = document.querySelector('.usage__mobile')


usageBtn.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.textContent == "читать все") {
    e.target.textContent = "свернуть";
    usageMobile.classList.toggle("usage__mobile_show");    
  } else {
    e.target.textContent = "читать все";
    usageMobile.classList.toggle("usage__mobile_show");
  }
})






