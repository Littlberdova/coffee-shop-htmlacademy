// Инициализируем swiper

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// Карта

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


//Открытие меню

const navMain = document.querySelector('.main-nav__menu');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__menu--closed')) {
    navMain.classList.remove('main-nav__menu--closed');
    navMain.classList.add('main-nav__menu--opened');
  } else {
    navMain.classList.add('main-nav__menu--closed');
    navMain.classList.remove('main-nav__menu--opened');
  }
});

//смена фона в слайдере

swiper.on('transitionEnd', function (e) {
  
  if(this.realIndex==0){
    document.querySelector('.new-tastes__container').style.background = 'rgba(243, 235, 225, 1)';
    document.querySelector('.new-tastes').style.background = 'rgba(243, 235, 225, 1)';
  }

  if(this.realIndex==1){
    document.querySelector('.new-tastes__container').style.background = 'rgba(234, 230, 252, 1)';
    document.querySelector('.new-tastes').style.background = 'rgba(234, 230, 252, 1)';
  }

  if(this.realIndex==2){
    document.querySelector('.new-tastes__container').style.background = 'rgba(229, 230, 232, 1)';
    document.querySelector('.new-tastes').style.background = 'rgba(229, 230, 232, 1)';
  }
});

//Измение цены в фильтре

const rangeSliderInit = () => { 
  const range = document.getElementById('range__bar'); 
  const inputMin = document.getElementById('min'); 
  const inputMax = document.getElementById('max'); 
  const resetButton = document.querySelector('.catalog__filter-reset-button');

  if (!range || !inputMin || !inputMax) return;

  const inputs = [inputMin, inputMax];
  
  noUiSlider.create(range, { 
      start: [0, 900], 
      connect: true, 
      range: { 
        'min': 0,
        'max': 1000
      },
      step: 1, 
    }
  )
  
  range.noUiSlider.on('update', function (values, handle) { 
    inputs[handle].value = parseInt(values[handle]);
  });
  
  inputMin.addEventListener('change', function () { 
    range.noUiSlider.set([this.value, null]);
  });
  
  inputMax.addEventListener('change', function () { 
    range.noUiSlider.set([null, this.value]);
  });

  resetButton.addEventListener('click', function () {
    range.noUiSlider.set([0,900]);
  });
  
}

const init = () => {
  rangeSliderInit() 
}

window.addEventListener('DOMContentLoaded', init) 



