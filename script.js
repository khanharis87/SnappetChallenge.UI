/* When the user clicks on the button,
	toggle between hiding and showing the dropdown content */
function toggleDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function selectGrade() {
	const dropDownClass = document.getElementsByClassName('dropbtn')[0]
	console.log(event.target.id,'id')
	switch (event.target.id) {
		case 'math_grade_5':
			dropDownClass.innerHTML = 'Math grade 5'
			break

		case 'math_grade_4':
			dropDownClass.innerHTML = 'Math grade 4'
			break

		case 'math_grade_3':
			dropDownClass.innerHTML = 'Math grade 3'
			break
	}
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}