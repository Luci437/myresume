function mobilecheck() {
	var mobile = document.getElementById('mobile').value;
	var err = document.getElementById('form-error');
	var mlen = mobile.length;

	if(mlen == 10) {
		document.getElementById('mobile').style.border = "none";
		document.getElementById('mobile').style.background = "white";
		err.style.display = "none";
		return true;
	}else {
		document.getElementById('mobile').value = "";
		document.getElementById('mobile').style.border = "1px solid red";
		document.getElementById('mobile').style.background = "#ffe0e0";
		err.style.display = "block";
		err.innerHTML += "* Invalid Mobile Number<br>";
		return false;
	}
}

function percentagecheck() {
	var per = document.getElementById('percentage').value;
	var err = document.getElementById('form-error');

	if(isNaN(per) == false) {
		if(parseInt(per) <= 100) {
		document.getElementById('percentage').style.border = "none";
		document.getElementById('percentage').style.background = "white";
		err.style.display = "none";			
		}else {
		document.getElementById('percentage').style.border = "1px solid red";
		document.getElementById('percentage').style.background = "#ffe0e0";
		err.style.display = "block";
		err.innerHTML += "* Invalid percentage<br>";
		document.getElementById('percentage').value = '';			
	}

	}else {
		document.getElementById('percentage').style.border = "1px solid red";
		document.getElementById('percentage').style.background = "#ffe0e0";
		err.style.display = "block";
		err.innerHTML += "* Invalid percentage<br>";
		document.getElementById('percentage').value = '';
	}
}

function checkdetails() {
	alert("You successfully submitted the form");
}