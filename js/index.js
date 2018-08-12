
// Pull in personal summary from off of the left-side of the page 
function about() {

	var summary = document.getElementById('summary'); 
	var social = document.getElementById('social-media'); 
	var bit = document.getElementById('bitmoji'); 

	// Get all navbar buttons 
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (abtBtn.innerHTML != 'Close') {

		bit.style.visibility = 'visible'; 
		summary.style.position = 'static'; 
		document.getElementsByClassName('sum_mask')[0].style.height = '0vh'; 
		summary.style.marginBottom = '55px'; 
		
		// Button stuff 
		abtBtn.innerHTML = 'Close';
		abtBtn.style.color = '#618685';
		abtBtn.style.border = 'solid #618685 2px';  
		abtBtn.style.borderRadius = '25px';
		projBtn.style.pointerEvents = 'none';
		resBtn.style.pointerEvents = 'none';

	} else {

		document.getElementsByClassName('sum_mask')[0].style.height = '100%'; 
		summary.style.marginBottom = '0px'; 
		bit.style.visibility = 'hidden'; 

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

	var resume = document.getElementById('resume'); 
	var nav = document.getElementById('link_row'); 
	var social = document.getElementById('social-media'); 

	// Get all navbar buttons 
	var abtBtn = document.getElementById('abtBtn'); 
	var resBtn = document.getElementById('resBtn');
	var projBtn = document.getElementById('projBtn');

	if (resBtn.innerHTML != 'Close') {

		if (window.innerWidth > 705) {
			resume.style.visibility = 'visible'; 
			resume.style.top = '12vh'; 
			resume.style.marginBottom = '75px'; 
			social.style.display = 'none'; 
			
			// Button stuff 
			resBtn.innerHTML = 'Close';
			resBtn.style.color = '#618685';
			resBtn.style.border = 'solid #618685 2px';  
			resBtn.style.borderRadius = '25px';
			projBtn.style.pointerEvents = 'none';
			abtBtn.style.pointerEvents = 'none';
		} else {
			 window.open('NatalieCraun_Resume.pdf');
		}

	} else {

		resume.style.top = '5000px'; 
		resume.style.marginBottom = '0px'; 
		social.style.display = 'block'; 
		resume.style.visibility = 'hidden'; 

		// Button stuff 
		resBtn.innerHTML = 'Resume';
		resBtn.style.color = 'black';
		resBtn.style.border = '';  
		resBtn.style.borderRadius = '';

		projBtn.style.pointerEvents = '';
		abtBtn.style.pointerEvents = '';
	}
	
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









