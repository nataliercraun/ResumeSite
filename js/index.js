function about() {

	var about = document.getElementsByClassName("aboutCard");
	var bio = document.getElementById("summary"); 
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (abtBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}

		// Bio appears
		bio.style.display = 'flex';

		abtBtn.innerHTML = 'Close';
		abtBtn.style.color = '#618685';
		abtBtn.style.border = 'solid #618685 2px';  
		abtBtn.style.borderRadius = '25px';

		resBtn.style.pointerEvents = 'none';
		projBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}

		// Bio disappears
		bio.style.display = 'none';

		abtBtn.innerHTML = 'About';
		abtBtn.style.color = 'black';
		abtBtn.style.border = '';  
		abtBtn.style.borderRadius = '';

		resBtn.style.pointerEvents = '';
		projBtn.style.pointerEvents = '';
	}
}

function resume() {
	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (resBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
		}

		// Resume comes up from bottom 
		var res = document.getElementById('resume');
		res.style.display = 'flex'; 

		resBtn.innerHTML = 'Close';
		resBtn.style.color = '#618685';
		resBtn.style.border = 'solid #618685 2px';  
		resBtn.style.borderRadius = '25px';

		abtBtn.style.pointerEvents = 'none';
		projBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
		}

		//Resume moves to bottom and is hidden
		var res = document.getElementById('resume');
		res.style.display = 'none'; 
		
		resBtn.innerHTML = 'Resume';
		resBtn.style.color = 'black';
		resBtn.style.border = '';  
		resBtn.style.borderRadius = '';

		abtBtn.style.pointerEvents = '';
		projBtn.style.pointerEvents = '';
	}
}

function projects() {
	var about = document.getElementsByClassName("aboutCard");
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (projBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
			about[i].style.visibility = 'visible'; 
		}
		projBtn.innerHTML = 'Close';
		projBtn.style.color = '#618685';
		projBtn.style.border = 'solid #618685 2px';  
		projBtn.style.borderRadius = '25px';

		abtBtn.style.pointerEvents = 'none';
		resBtn.style.pointerEvents = 'none';
	} else {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '-200px';
			about[i].style.visibility = 'hidden'; 
		}
		projBtn.innerHTML = 'Projects';
		projBtn.style.color = 'black';
		projBtn.style.border = '';  
		projBtn.style.borderRadius = '';

		abtBtn.style.pointerEvents = '';
		resBtn.style.pointerEvents = '';
	}
}