document.getElementById('generateBtn').addEventListener('click', function() {
	var qrBox = document.getElementById('qrBox');
	var inputEl = document.getElementById('qrInput');
	var input = inputEl.value;
	qrBox.innerHTML = '';
	if (input.trim() !== '') {
		var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(input);
		var img = document.createElement('img');
		img.src = qrUrl;
		img.alt = 'QR Code';
		qrBox.appendChild(img);
	} else {
		inputEl.classList.add('shake');
		setTimeout(function() {
			inputEl.classList.remove('shake');
		}, 400);
	}
});