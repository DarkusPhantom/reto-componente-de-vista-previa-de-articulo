(function () {

	//Var Globales
	let share = document.querySelector('.share');
	
	//EventListener
	share.addEventListener('click', ()=>{
		if (share.querySelector('.tooltip-content')) {
			share.removeChild(share.querySelector('.tooltip-content'));
		} else {
			//Creando container
			let container = createTag('div', 'container');

			//Creando el tooltip-text
			let tooltipText = createTag('span', 'tooltip-text');
			tooltipText.innerText = 'share';
			container.appendChild(tooltipText);

			//Creando el icono de Facebook
			let iconFB = createTag('img', 'tooltip-icon');
			iconFB.setAttribute('src', 'images/icon-facebook.svg');
			container.appendChild(iconFB);

			//Creando el icono de Twitter
			let iconTW = createTag('img', 'tooltip-icon');
			iconTW.setAttribute('src', 'images/icon-twitter.svg');
			container.appendChild(iconTW);

			//Creando el icono de Pinterest
			let iconPinterest = createTag('img', 'tooltip-icon');
			iconPinterest.setAttribute('src', 'images/icon-pinterest.svg');
			container.appendChild(iconPinterest);

			//Creando el tooltip-content
			let tooltipContent = createTag('div', 'tooltip-content');
			tooltipContent.appendChild(container);

			//Insertando el share
			share.appendChild(tooltipContent);
		}
	});

	function createTag(tag, attr_class) {
		let element;
		element = document.createElement(tag);
		element.classList.add(attr_class);
		return element;
	}



}());