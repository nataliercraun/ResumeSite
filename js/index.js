function about() {

	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 

	if (abtBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}
		abtBtn.innerHTML = 'Close';
		abtBtn.style.color = '#618685';
		abtBtn.style.border = 'solid #618685 2px';  
		abtBtn.style.borderRadius = '25px';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}
		abtBtn.innerHTML = 'About';
		abtBtn.style.color = 'black';
		abtBtn.style.border = '';  
		abtBtn.style.borderRadius = '';
	}
}