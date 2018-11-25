function tutvustus() {
	var nimi = prompt("Palun sisestage oma nimi", "Mari Mets");
	if (nimi != null) {
		document.getElementById("tervitus").innerHTML = "Tere " + nimi + "! Loodame et leiate siit lehelt palju kasulikku!";
	}
}