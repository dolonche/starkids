import './animatescroll';
$(document).ready(() => {
	$(document).click((e) => {
		if (e.target.dataset.popup === "form") {
			if (!$('.overlay')[0].classList.contains('overlay--open')) {
				$('.overlay')[0].classList.toggle('overlay--open');
			}
			$('.popup-form')[0].classList.toggle('popup-form--open');
			$('.popup-descr')[0].classList.remove('popup-descr--open');
			$('body')[0].classList.toggle('page-body--overlay');
		}
		if (e.target.dataset.popup === "descr") {
			$('.overlay')[0].classList.toggle('overlay--open');
			$('.popup-descr')[0].classList.toggle('popup-descr--open');
			$('body')[0].classList.toggle('page-body--overlay');
			if (e.target.parentNode.classList.contains('animators__grid-item')) {

			}
			if (e.target.parentNode.classList.contains('show-program__grid-item')) {
				let programItem = e.target.parentNode;
				let programItemTitle = programItem.querySelector('.show-program__grid-item-title');
				let programItemDescr = programItem.querySelector('.show-program__grid-item-hidden');
				$('.popup-descr')[0].querySelector('.popup-descr__title').textContent = programItemTitle.textContent;
				$('.popup-descr')[0].querySelector('.popup-descr__content').innerHTML = programItemDescr.innerHTML;
			}
		}
		if (e.target.classList.contains('popup-form__close') || e.target.classList.contains('overlay--open') || e.target.classList.contains('popup-descr__close') || e.target.classList.contains('popup-success__close')) {
			$('.overlay')[0].classList.remove('overlay--open');
			$('.popup-form')[0].classList.remove('popup-form--open');
			$('.popup-descr')[0].classList.remove('popup-descr--open');
			$('.popup-success')[0].classList.remove('popup-success--open');
			$('body')[0].classList.remove('page-body--overlay');
		}
		if (e.target.dataset.block === "full") {
			e.target.parentNode.classList.toggle(`${e.target.parentNode.classList[0]}--open`);
		}
		if (e.target.classList.contains('button--card') && e.target.parentNode.classList.contains('animators__grid-item')) {
			$('.overlay')[0].classList.toggle('overlay--open');
			$('.popup-descr')[0].classList.toggle('popup-descr--open');
			let animatorItem = e.target.parentNode;
			let animatorItemTitle = animatorItem.querySelector('.animators__grid-item-title');
			let animatorItemDescr = animatorItem.querySelector('.animators__grid-item-hidden');
			$('.popup-descr')[0].querySelector('.popup-descr__title').textContent = animatorItemTitle.textContent;
			$('.popup-descr')[0].querySelector('.popup-descr__content').innerHTML = animatorItemDescr.innerHTML;

		}
	});
});