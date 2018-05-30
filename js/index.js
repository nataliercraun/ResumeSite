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