(function () {
	'use strict';

	var form = document.getElementById('contact-form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		var btn = document.getElementById('submit-btn');
		var status = document.getElementById('form-status');

		btn.disabled = true;
		btn.textContent = 'Sending…';
		status.style.display = 'none';

		fetch(form.getAttribute('action'), {
			method: 'POST',
			body: new FormData(form),
			headers: { 'Accept': 'application/json' }
		})
		.then(function (res) {
			if (res.ok) {
				status.textContent = 'Message sent! I will get back to you soon.';
				status.style.color = '#4caf50';
				form.reset();
			} else {
				return res.json().then(function (data) {
					throw new Error(data.errors
						? data.errors.map(function (err) { return err.message; }).join(', ')
						: 'Submission failed.');
				});
			}
		})
		.catch(function (err) {
			status.textContent = 'Oops! ' + err.message;
			status.style.color = '#e74c3c';
		})
		.finally(function () {
			btn.disabled = false;
			btn.textContent = 'Send Message';
			status.style.display = 'block';
		});
	});

})();
