
window.addEventListener('DOMContentLoaded', function(){

	if(document.querySelector('.partners__slider')){
		const forSwiper = new Swiper('.partners__slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,	
	// Скорость
	speed: 400,
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	// Navigation arrows
	navigation: {
		nextEl: '.partners__button-next',
		prevEl: '.partners__button-prev',
	},
// Управление колесом мыши
mousewheel: {
	// Чувствительность колеса мыши
	sensitivity: 2,
	// Класс объекта на котором
	// будет срабатывать прокрутка мышью.
	//eventsTarget: ".image-slider"
},

	clikable: true,
	//setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	// slidesPerView: 5,
	// spaceBetween: 10,
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		767: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 10,
		},
	},
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});

	}



})







