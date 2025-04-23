function table() {
	let table = document.getElementById("multiTable");
	x = document.getElementById("firstNum").value;
	y = document.getElementById("secNum").value;
	
	table.innerHTML = "";
	
	if (x<2 || x >10 || y<2 || y>10) {
			alert(	"Please enter another set of values that are between 2 and 10 :)");
			return;
	}

//multiplication
	let html = "<tr><th>*</th>";
	for (let count = 1; count <= y; count++){
		html += `<th>${count}</th>`;
	}
	html += "</tr>";

	for (let count = 1; count <= x; count++){
		html += `<tr><th>${count}</th>`;
		for (let count2 = 1; count2 <= y; count2++){
			html += `<td>${count * count2}</td>`;
		}
		html += "<tr>";
	}
	table.innerHTML = html;
}

