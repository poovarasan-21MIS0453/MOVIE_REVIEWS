const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const rateButton = document.querySelector('.rate-button');
const wrapper = document.querySelector('.wrapper');
const cancelButton = document.querySelector('.btn.cancel');

allStar.forEach((item, idx) => {
	item.addEventListener('click', function () {
		let click = 0;
		ratingValue.value = idx + 1;

		allStar.forEach(i => {
			i.classList.replace('bxs-star', 'bx-star');
			i.classList.remove('active');
		});
		for (let i = 0; i < allStar.length; i++) {
			if (i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star');
				allStar[i].classList.add('active');
			} else {
				allStar[i].style.setProperty('--i', click);
				click++;
			}
		}
	});
});

rateButton.addEventListener('click', () => {
	rateButton.style.display = 'none';
	wrapper.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
	wrapper.style.display = 'none';
	rateButton.style.display = 'block';
});
