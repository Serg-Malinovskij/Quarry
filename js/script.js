"use strict"

// menu-burger
const iconBurger = document.querySelector('.menu__icon');  // получаем в константу иконку меню-бургер
const headerMenu = document.querySelector('.header__menu');  // получаем в константу весь блок с меню
const menuItems = document.querySelectorAll('.menu__item');  // получаем в константу все пункты меню

const header = document.querySelector('.header');
console.log(iconBurger);
iconBurger.addEventListener('click', function (e) {
  iconBurger.classList.toggle('menu-open');
  headerMenu.classList.toggle('_open');
  header.classList.toggle('mobile');
  document.body.classList.toggle('_lock');
}
);
//  проходим циклом forEach по пунктам меню и назначаемм каждому по клику обработчик, который срабатывает при открытом мобильном меню
//  обработчик закрывает мобильное меню и возвращает иконку бургера-меню в начальное "закрытое" положение
menuItems.forEach(function(item){
  item.addEventListener('click', function (e){
    if (headerMenu.closest('._open')) {
      headerMenu.classList.remove('_open');
      iconBurger.classList.remove('menu-open');
      document.body.classList.remove('_lock');
    }
  })
})

// споллер на основе свойств грид контейнера:

//document.addEventListener('click', collapseFunction);
function collapseFunction(event) {
  if (!event.target.closest('.spoller-btn')) return
  const attr = event.currentTarget.getAttribute('data-collapse'); // получаем значение дата атрибута кнопки
  const collapsedBody = document.getElementById(attr); // получаем связанный с кнопкой блок с id=data-collapsed
  collapsedBody.classList.toggle('open');
  event.currentTarget.classList.toggle('active'); 
}
const buttons = document.querySelectorAll('.spoller-btn');
buttons.forEach((item)=>{
  item.addEventListener('click', collapseFunction)
})


// ТАБЫ tabs (контакты)
const tabs = document.querySelectorAll('.tabs__item'); // получаем в константу все табы-вкладки на странице
const contents = document.querySelectorAll('.tab-content');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabs.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс open у предыдущего активного блока:
    contents.forEach(function (item) {
      item.classList.remove('open');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс open (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contents[index].classList.add('open');
  });
})




// назначаем обработчик на весь document
// document.addEventListener('click', function(e){
//   // если мы кликнули не на блок меню, то забираем у меню user-header класс .open и оно закрывается
// if(!e.target.closest('.user-header')){
//   user_menu.classList.remove('open');
// }
// })