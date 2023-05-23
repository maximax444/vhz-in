function heroSlider() {
	const slider = tns({
		container: '.hero__slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		controls: false,
		autoplayButtonOutput: false,
		nav: false,
		autoplayHoverPause: true
	});

	const $sliderControls = document.querySelector('.hero__slider-controls'),
		$totalSlidesCount = $sliderControls.querySelector('.hero__slider-total-slides-count'),
		$currentSlideNum = $sliderControls.querySelector('.hero__slider-current-slide-num'),
		$sliderBtns = $sliderControls.querySelectorAll('.hero__slider-btn');

	const sliderInfo = slider.getInfo();

	$totalSlidesCount.innerText = sliderInfo.slideCount < 10 ? '0' + sliderInfo.slideCount : sliderInfo.slideCount;
	$currentSlideNum.innerText = sliderInfo.displayIndex < 10 ? '0' + sliderInfo.displayIndex : sliderInfo.displayIndex;

	slider.events.on('indexChanged', (info, eventName) => {
		$currentSlideNum.innerText = info.displayIndex < 10 ? '0' + info.displayIndex : info.displayIndex;
	});

	$sliderBtns[0].addEventListener('click', () => slider.goTo('prev'));
	$sliderBtns[1].addEventListener('click', () => slider.goTo('next'));

	$sliderControls.addEventListener('mouseenter', () => slider.pause());
	$sliderControls.addEventListener('mouseleave', () => slider.play());
}

function ourProjectsSlider() {
	const slider = tns({
		container: '.our-projects__slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		controls: false,
		autoplayButtonOutput: false,
		nav: false,
		autoplayHoverPause: true
	});

	const $sliderControls = document.querySelector('.our-projects__slider-controls'),
		$totalSlidesCount = $sliderControls.querySelector('.our-projects__slider-total-slides-count'),
		$currentSlideNum = $sliderControls.querySelector('.our-projects__slider-current-slide-num'),
		$sliderBtns = $sliderControls.querySelectorAll('.our-projects__slider-btn');

	const sliderInfo = slider.getInfo();

	$totalSlidesCount.innerText = sliderInfo.slideCount < 10 ? '0' + sliderInfo.slideCount : sliderInfo.slideCount;
	$currentSlideNum.innerText = sliderInfo.displayIndex < 10 ? '0' + sliderInfo.displayIndex : sliderInfo.displayIndex;

	slider.events.on('indexChanged', (info, eventName) => {
		$currentSlideNum.innerText = info.displayIndex < 10 ? '0' + info.displayIndex : info.displayIndex;
	});

	$sliderBtns[0].addEventListener('click', () => slider.goTo('prev'));
	$sliderBtns[1].addEventListener('click', () => slider.goTo('next'));

	$sliderControls.addEventListener('mouseenter', () => slider.pause());
	$sliderControls.addEventListener('mouseleave', () => slider.play());
}

function newsSlider() {
	const slider = tns({
		container: '.news__slider',
		items: 1,
		slideBy: 1,
		autoplay: true,
		controls: false,
		autoplayButtonOutput: false,
		nav: false,
		autoplayHoverPause: true,
		responsive: {
			993: {
				items: 3
			}
		}
	});

	const $allSliderControls = document.querySelectorAll('.news__slider-controls');

	const sliderInfo = slider.getInfo();

	$allSliderControls.forEach(($sliderControls) => {
		const $currentSlideNum = $sliderControls.querySelector('.news__slider-current-slide-num'),
			$sliderBtns = $sliderControls.querySelectorAll('.news__slider-btn'),
			$totalSlidesCount = $sliderControls.querySelector('.news__slider-total-slides-count');

		$totalSlidesCount.innerText = sliderInfo.slideCount < 10 ? '0' + sliderInfo.slideCount : sliderInfo.slideCount;
		$currentSlideNum.innerText = sliderInfo.displayIndex < 10 ? '0' + sliderInfo.displayIndex : sliderInfo.displayIndex;

		slider.events.on('indexChanged', (info, eventName) => {
			$currentSlideNum.innerText = info.displayIndex < 10 ? '0' + info.displayIndex : info.displayIndex;
		});

		$sliderBtns[0].addEventListener('click', () => slider.goTo('prev'));
		$sliderBtns[1].addEventListener('click', () => slider.goTo('next'));

		$sliderControls.addEventListener('mouseenter', () => slider.pause());
		$sliderControls.addEventListener('mouseleave', () => slider.play());
	});
}

function ourPartnersSlider() {
	const slider = tns({
		container: '.our-partners__slider',
		items: 2,
		slideBy: 1,
		autoplay: true,
		controls: false,
		autoplayButtonOutput: false,
		nav: false,
		autoplayHoverPause: true,
		responsive: {
			1201: {
				items: 4
			},
			993: {
				items: 3
			},
			769: {
				items: 4
			},
			577: {
				items: 3
			}
		}
	});

	const $sliderControls = document.querySelector('.our-partners__slider-controls'),
		$totalSlidesCount = $sliderControls.querySelector('.our-partners__slider-total-slides-count'),
		$currentSlideNum = $sliderControls.querySelector('.our-partners__slider-current-slide-num'),
		$sliderBtns = $sliderControls.querySelectorAll('.our-partners__slider-btn');

	const sliderInfo = slider.getInfo();

	$totalSlidesCount.innerText = sliderInfo.slideCount < 10 ? '0' + sliderInfo.slideCount : sliderInfo.slideCount;
	$currentSlideNum.innerText = sliderInfo.displayIndex < 10 ? '0' + sliderInfo.displayIndex : sliderInfo.displayIndex;

	slider.events.on('indexChanged', (info, eventName) => {
		$currentSlideNum.innerText = info.displayIndex < 10 ? '0' + info.displayIndex : info.displayIndex;
	});

	$sliderBtns[0].addEventListener('click', () => slider.goTo('prev'));
	$sliderBtns[1].addEventListener('click', () => slider.goTo('next'));

	$sliderControls.addEventListener('mouseenter', () => slider.pause());
	$sliderControls.addEventListener('mouseleave', () => slider.play());
}

function mobileMenu() {
	const $hamnburger = document.querySelector('.hamburger');
	const $menu = document.querySelector('.mobile-menu');
	const $menuCross = document.querySelector('.mobile-menu__cross');
	const $backBtn = document.querySelector('.mobile-menu__back-btn');
	const $submenuBtns = document.querySelectorAll('.mobile-menu__submenu-btn');
	const stack = [];

	$hamnburger.addEventListener('click', () => $menu.classList.add('mobile-menu_active'));
	$menuCross.addEventListener('click', () => $menu.classList.remove('mobile-menu_active'));
	$submenuBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.stopPropagation();

			const submenu = btn.querySelector('.mobile-menu__submenu');
			submenu.classList.add('mobile-menu__submenu_active');
			stack.push(submenu);

			if (!$backBtn.style.visibility) $backBtn.style.visibility = 'visible';
		})
	});
	$backBtn.addEventListener('click', () => {
		const submenu = stack.pop();
		submenu.classList.remove('mobile-menu__submenu_active');

		if (!stack.length) $backBtn.style = '';
	});
}


ourPartnersSlider();
heroSlider();
ourProjectsSlider();
newsSlider();
mobileMenu();


