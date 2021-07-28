// ------------------------mainNavigation-----------------------------

const navLink = document.getElementById('nav');

navLink.addEventListener('click', e => {
  for(let i = 0; i< navLink.children.length; i++){
    navLink.children[i].classList.remove('active')
  }
  e.target.classList.add('active')
})

// ------------------------slider-------------------------------------
const slideContainer = document.querySelector('.slide-container');
const slidePups = document.querySelector('.slide-pups')
const state = [
  {id: 1, h1:'Объекты<br> химической промышленности', descript: 'Важнейшим преимуществом компании является способность проектировать и строить «под ключ». При этом данные процессы ведутся одновременно, что позволяет заказчику значительно сократить общий строительный цикл объекта'},
  {id: 2, h1:'Объекты не химической промышленности', descript:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis dicta reprehenderit, quidem, sequi architecto, a odit vel doloribus cupiditate iusto corrupti est aliquam? Voluptatibus nam eaque vitae vel dolore!'},
  {id: 3, h1:'Объекты<br> химической не промышленности', descript:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis dicta reprehenderit, quidem, sequi architecto, a odit vel doloribus cupiditate iusto corrupti est aliquam? Voluptatibus nam eaque vitae vel dolore!'},
  {id: 4, h1:'Объекты не химической не промышленности', descript:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis dicta reprehenderit, quidem, sequi architecto, a odit vel doloribus cupiditate iusto corrupti est aliquam? Voluptatibus nam eaque vitae vel dolore!'},
  {id: 5, h1:'Какие то <br> объекты', descript:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis dicta reprehenderit, quidem, sequi architecto, a odit vel doloribus cupiditate iusto corrupti est aliquam? Voluptatibus nam eaque vitae vel dolore!'},
];

const changeSlide = (el) => {
  for(let i = 0; i< slidePups.children.length; i++){
    slidePups.children[i].classList.remove('active');
  }
  el.target.classList.add('active');
  const numDataset = el.target.dataset.btn;
  const slideContent = state.find(item => item.id == numDataset)
  
  slideContainer.innerHTML = `<span class="slide-title">Наши компетенции</span>
  <div class="slide-h1">${slideContent.h1}</div>
  <div class="slide-description">${slideContent.descript}</div>`
}

slidePups.addEventListener('click', changeSlide);

