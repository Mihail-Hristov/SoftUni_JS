function loadRepos() {
	const userName = document.getElementById('username').value;

	let ul = document.getElementById('repos');

	let url = `https://api.github.com/users/${userName}/repos`;

	fetch(url)
		.then((renspone) => renspone.json())
		.then((renspone) => {
			ul.innerHTML = '';
			renspone.forEach(l => {
				let a = createEl('a', l.full_name, l.html_url);
				let li = createEl('li');
				li.appendChild(a);
				ul.appendChild(li);
			})
		})
		.catch((error) => alert(console.log(error)));

	function createEl(type, text, href) {
		let el = document.createElement(type);

		if(href) {
			el.href = href;
		}

		if (text) {
			el.textContent = text;
		}

		return el;
	}
}