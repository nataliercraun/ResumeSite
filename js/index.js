function about() {

	var t_margin = document.getElementById('link_row').style.marginTop; 

	if (t_margin == '20%') {
		document.getElementById('link_row').style.marginTop = '0%'; 
		var abtRight = document.getElementsByClassName("aboutRight"); 
		var abtLeft = document.getElementsByClassName("aboutLeft");
		var i; 
		for (i=0; i < abtRight.length; i++) {
			/*abtRight[i].style.display = 'none';*/
			abtRight[i].style.right = '-1000px'; 
		}
		var j;  
		for (j=0; j < abtLeft.length; j++) {
			/*abtLeft[j].style.display = 'none';*/
			abtLeft[j].style.left = '-1000px'; 
		}

		document.getElementById('abtBtn').innerHTML = 'About';
		document.getElementById('abtBtn').style.color = '';
		document.getElementById('abtBtn').style.border = '';  
		document.getElementById('abtBtn').style.borderRadius = '';

		document.getElementById('resBtn').style.pointerEvents = '';
		document.getElementById('projBtn').style.pointerEvents = '';
		document.getElementById('skillBtn').style.pointerEvents = '';

	} else {
		document.getElementById('link_row').style.marginTop = '20%';
		var abtRight = document.getElementsByClassName("aboutRight"); 
		var abtLeft = document.getElementsByClassName("aboutLeft");
		var i; 
		for (i=0; i < abtRight.length; i++) {
			/*abtRight[i].style.display = 'block';*/
			abtRight[i].style.right = '0px'; 
		}
		var j;  
		for (j=0; j < abtLeft.length; j++) {
			/*abtLeft[j].style.display = 'block';*/
			abtLeft[j].style.left = '0px'; 
		}

		document.getElementById('abtBtn').innerHTML = 'Close';
		document.getElementById('abtBtn').style.color = '#618685';
		document.getElementById('abtBtn').style.border = 'solid #618685 2px';  
		document.getElementById('abtBtn').style.borderRadius = '25px'; 

		document.getElementById('resBtn').style.pointerEvents = 'none';
		document.getElementById('projBtn').style.pointerEvents = 'none';
		document.getElementById('skillBtn').style.pointerEvents = 'none';
	}
}

function resume() {

	var t_margin = document.getElementById('link_row').style.marginTop; 

	if (t_margin == '20%') {
		document.getElementById('link_row').style.marginTop = '0%'; 
		document.getElementById('resBtn').innerHTML = 'Resume';
		document.getElementById('resBtn').style.color = '';
		document.getElementById('resBtn').style.border = '';  
		document.getElementById('resBtn').style.borderRadius = '';

		document.getElementById('abtBtn').style.pointerEvents = '';
		document.getElementById('projBtn').style.pointerEvents = '';
		document.getElementById('skillBtn').style.pointerEvents = '';
	} else {
		document.getElementById('link_row').style.marginTop = '20%'; 
		document.getElementById('resBtn').innerHTML = 'Close';
		document.getElementById('resBtn').style.color = '#618685';
		document.getElementById('resBtn').style.border = 'solid #618685 2px';  
		document.getElementById('resBtn').style.borderRadius = '25px'; 

		document.getElementById('abtBtn').style.pointerEvents = 'none';
		document.getElementById('projBtn').style.pointerEvents = 'none';
		document.getElementById('skillBtn').style.pointerEvents = 'none';
	}
}

function projects() {

	var t_margin = document.getElementById('link_row').style.marginTop; 

	if (t_margin == '20%') {
		document.getElementById('link_row').style.marginTop = '0%'; 
		document.getElementById('projBtn').innerHTML = 'Projects';
		document.getElementById('projBtn').style.color = '';
		document.getElementById('projBtn').style.border = '';  
		document.getElementById('projBtn').style.borderRadius = '';

		document.getElementById('resBtn').style.pointerEvents = '';
		document.getElementById('skillBtn').style.pointerEvents = '';
		document.getElementById('abtBtn').style.pointerEvents = '';
	} else {
		document.getElementById('link_row').style.marginTop = '20%'; 
		document.getElementById('projBtn').innerHTML = 'Close';
		document.getElementById('projBtn').style.color = '#618685';
		document.getElementById('projBtn').style.border = 'solid #618685 2px';  
		document.getElementById('projBtn').style.borderRadius = '25px'; 

		document.getElementById('resBtn').style.pointerEvents = 'none';
		document.getElementById('skillBtn').style.pointerEvents = 'none';
		document.getElementById('abtBtn').style.pointerEvents = 'none';
	}
}

function skills() {

	var t_margin = document.getElementById('link_row').style.marginTop; 

	if (t_margin == '20%') {
		document.getElementById('link_row').style.marginTop = '0%'; 
		document.getElementById('skillBtn').innerHTML = 'Skills';
		document.getElementById('skillBtn').style.color = '';
		document.getElementById('skillBtn').style.border = '';  
		document.getElementById('skillBtn').style.borderRadius = '';

		document.getElementById('resBtn').style.pointerEvents = '';
		document.getElementById('projBtn').style.pointerEvents = '';
		document.getElementById('abtBtn').style.pointerEvents = '';
	} else {
		document.getElementById('link_row').style.marginTop = '20%'; 
		document.getElementById('skillBtn').innerHTML = 'Close';
		document.getElementById('skillBtn').style.color = '#618685';
		document.getElementById('skillBtn').style.border = 'solid #618685 2px';  
		document.getElementById('skillBtn').style.borderRadius = '25px';

		document.getElementById('resBtn').style.pointerEvents = 'none';
		document.getElementById('projBtn').style.pointerEvents = 'none';
		document.getElementById('abtBtn').style.pointerEvents = 'none';
	}
}