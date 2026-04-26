(function () {
	'use strict';

	var filterBtns = document.querySelectorAll('.filter-btn');
	var projectCards = document.querySelectorAll('.features > section[data-category]');

	if (!filterBtns.length) return;

	filterBtns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			var filter = btn.getAttribute('data-filter');

			filterBtns.forEach(function (b) { b.classList.remove('active'); });
			btn.classList.add('active');

			projectCards.forEach(function (card) {
				if (filter === 'all') {
					card.classList.remove('filter-hidden');
				} else {
					var cats = card.getAttribute('data-category').split(' ');
					if (cats.indexOf(filter) !== -1) {
						card.classList.remove('filter-hidden');
					} else {
						card.classList.add('filter-hidden');
					}
				}
			});
		});
	});

})();
