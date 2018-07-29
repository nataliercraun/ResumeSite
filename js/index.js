
// Pull in personal summary from off of the left-side of the page 
function about() {

	var summary = document.getElementById('summary'); 
	var social = document.getElementById('social-media'); 

	// Get all navbar buttons 
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (abtBtn.innerHTML != 'Close') {
		console.log('here'); 
		social.style.marginTop = '300px'; 
		summary.style.left = '200px'; 

		// Button stuff 
		abtBtn.innerHTML = 'Close';
		abtBtn.style.color = '#618685';
		abtBtn.style.border = 'solid #618685 2px';  
		abtBtn.style.borderRadius = '25px';
		projBtn.style.pointerEvents = 'none';
		resBtn.style.pointerEvents = 'none';
	} else {

		social.style.marginTop = '25px'; 
		summary.style.left = '-10000px'; 
		// Button stuff 
		abtBtn.innerHTML = 'About';
		abtBtn.style.color = 'black';
		abtBtn.style.border = '';  
		abtBtn.style.borderRadius = '';

		projBtn.style.pointerEvents = '';
		resBtn.style.pointerEvents = '';
	}
	
}

function resume() {
	
}


// Pull down projects info and move nav bar to accomodate 
function projects() {
	var about = document.getElementsByClassName("aboutCard");

	// Get all navbar buttons 
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (projBtn.innerHTML != 'Close') {
		for (var i = 0; i < about.length; i++) {
			about[i].style.marginTop = '10px';
			about[i].style.visibility = 'visible'; 
		}

		// Update navbar buttons 
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

		// Update navbar buttons 
		projBtn.innerHTML = 'Projects';
		projBtn.style.color = 'black';
		projBtn.style.border = '';  
		projBtn.style.borderRadius = '';
		abtBtn.style.pointerEvents = '';
		resBtn.style.pointerEvents = '';
	}
}









