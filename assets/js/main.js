/*
	Hyperspace by HTML5 UP — vanilla JS rewrite (no jQuery)
*/

(function () {
	'use strict';

	var body = document.body;
	var sidebar = document.getElementById('sidebar');

	// Remove preload class after page load.
	window.addEventListener('load', function () {
		setTimeout(function () { body.classList.remove('is-preload'); }, 100);
	});

	// Hack: activate non-input submit elements.
	document.addEventListener('click', function (e) {
		if (e.target.classList.contains('submit')) {
			e.stopPropagation();
			e.preventDefault();
			e.target.closest('form').submit();
		}
	});

	// Sidebar navigation with scroll-based active link tracking.
	if (sidebar) {
		var sidebarLinks = Array.from(sidebar.querySelectorAll('a'));

		sidebarLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				var href = link.getAttribute('href');
				if (!href || href.charAt(0) !== '#') return;
				sidebarLinks.forEach(function (l) { l.classList.remove('active'); });
				link.classList.add('active', 'active-locked');
			});

			var href = link.getAttribute('href');
			if (!href || href.charAt(0) !== '#') return;
			var section = document.querySelector(href);
			if (!section) return;

			section.classList.add('inactive');

			new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					entry.target.classList.remove('inactive');

					var locked = sidebar.querySelectorAll('.active-locked');
					if (locked.length === 0) {
						sidebarLinks.forEach(function (l) { l.classList.remove('active'); });
						link.classList.add('active');
					} else if (link.classList.contains('active-locked')) {
						link.classList.remove('active-locked');
					}
				});
			}, { rootMargin: '-20% 0px -20% 0px', threshold: 0 }).observe(section);
		});
	}

	// Smooth scroll for .scrolly elements with sidebar-height offset on medium screens.
	document.querySelectorAll('.scrolly').forEach(function (el) {
		el.addEventListener('click', function (e) {
			var href = el.getAttribute('href');
			if (!href || href.charAt(0) !== '#') return;
			var target = document.querySelector(href);
			if (!target) return;

			e.preventDefault();

			var offset = 0;
			var isMedium = window.matchMedia('(min-width: 481px) and (max-width: 1280px)').matches;
			if (sidebar && isMedium) offset = sidebar.offsetHeight;

			var top = target.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: top, behavior: 'smooth' });
		});
	});

	// Spotlights: set CSS background-image from img src, hide the <img>, fade in on scroll.
	document.querySelectorAll('.spotlights > section').forEach(function (section) {
		section.classList.add('inactive');

		var image = section.querySelector('.image');
		var img = image ? image.querySelector('img') : null;

		if (image && img) {
			image.style.backgroundImage = 'url(' + img.getAttribute('src') + ')';
			var pos = img.getAttribute('data-position');
			if (pos) image.style.backgroundPosition = pos;
			img.style.display = 'none';
		}

		new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) entry.target.classList.remove('inactive');
			});
		}, { rootMargin: '-10% 0px -10% 0px', threshold: 0 }).observe(section);
	});

	// Features grid: fade in on scroll.
	document.querySelectorAll('.features').forEach(function (features) {
		features.classList.add('inactive');

		new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) entry.target.classList.remove('inactive');
			});
		}, { rootMargin: '-20% 0px -20% 0px', threshold: 0 }).observe(features);
	});

})();
