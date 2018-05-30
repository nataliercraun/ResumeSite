function about() {

	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');
	var skillBtn = document.getElementById('skillBtn');

	if (abtBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}
		abtBtn.innerHTML = 'Close';
		abtBtn.style.color = '#618685';
		abtBtn.style.border = 'solid #618685 2px';  
		abtBtn.style.borderRadius = '25px';

		resBtn.style.pointerEvents = 'none';
		projBtn.style.pointerEvents = 'none';
		skillBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}
		abtBtn.innerHTML = 'About';
		abtBtn.style.color = 'black';
		abtBtn.style.border = '';  
		abtBtn.style.borderRadius = '';

		resBtn.style.pointerEvents = '';
		projBtn.style.pointerEvents = '';
		skillBtn.style.pointerEvents = '';
	}
}

function resume() {
	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');
	var skillBtn = document.getElementById('skillBtn');

	if (resBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}
		resBtn.innerHTML = 'Close';
		resBtn.style.color = '#618685';
		resBtn.style.border = 'solid #618685 2px';  
		resBtn.style.borderRadius = '25px';

		abtBtn.style.pointerEvents = 'none';
		projBtn.style.pointerEvents = 'none';
		skillBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}
		resBtn.innerHTML = 'Resume';
		resBtn.style.color = 'black';
		resBtn.style.border = '';  
		resBtn.style.borderRadius = '';

		abtBtn.style.pointerEvents = '';
		projBtn.style.pointerEvents = '';
		skillBtn.style.pointerEvents = '';
	}
}

function projects() {
	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');
	var skillBtn = document.getElementById('skillBtn');

	if (projBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}
		projBtn.innerHTML = 'Close';
		projBtn.style.color = '#618685';
		projBtn.style.border = 'solid #618685 2px';  
		projBtn.style.borderRadius = '25px';

		abtBtn.style.pointerEvents = 'none';
		resBtn.style.pointerEvents = 'none';
		skillBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}
		projBtn.innerHTML = 'Projects';
		projBtn.style.color = 'black';
		projBtn.style.border = '';  
		projBtn.style.borderRadius = '';

		abtBtn.style.pointerEvents = '';
		resBtn.style.pointerEvents = '';
		skillBtn.style.pointerEvents = '';
	}
}

function skills() {
	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');
	var skillBtn = document.getElementById('skillBtn');

	if (skillBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}
		skillBtn.innerHTML = 'Close';
		skillBtn.style.color = '#618685';
		skillBtn.style.border = 'solid #618685 2px';  
		skillBtn.style.borderRadius = '25px';

		abtBtn.style.pointerEvents = 'none';
		projBtn.style.pointerEvents = 'none';
		resBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}
		skillBtn.innerHTML = 'Skills';
		skillBtn.style.color = 'black';
		skillBtn.style.border = '';  
		skillBtn.style.borderRadius = '';

		abtBtn.style.pointerEvents = '';
		projBtn.style.pointerEvents = '';
		resBtn.style.pointerEvents = '';
	}
}