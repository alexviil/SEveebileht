function tutvustus() {
	var nimi = prompt("Palun sisestage oma nimi", "Mari Mets");
	if (nimi != "" && nimi !=null) {
		document.getElementById("tervitus").innerHTML = "Tere " + nimi + "! Loodame et leiate siit lehelt palju kasulikku!";
	}
}

function peida(id) {
	var x = document.getElementById(id)
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
