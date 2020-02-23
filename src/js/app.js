import './animatescroll';
$(document).ready(() => {
	$(document).click((e) => {
		console.log(e.target);
		if (e.target.dataset.popup === "form") {
			$('.overlay')[0].classList.toggle('overlay--open');
			$('.popup-form')[0].classList.toggle('popup-form--open');
			$('body')[0].classList.toggle('page-body--overlay');
		}
		if (e.target.classList.contains('popup-form__close') || e.target.classList.contains('overlay--open')) {
			$('.overlay--open')[0].classList.toggle('overlay--open');
			$('.popup-form--open')[0].classList.toggle('popup-form--open');
			$('body')[0].classList.toggle('page-body--overlay');
		}
	});
});