// Vanuse analüüs

let vanus = window.prompt("Palun sisesta oma vanus: ");

if (isNaN(vanus) == true) {
  window.alert("Vanus ei ole number. Proovi uuesti!");
} else if (vanus >= 120 || vanus < 0) {
  window.alert("Sisesta õige vanus.");
} else if (vanus < 7) {
  window.alert("Teie olete veel lasteaias.");
} else if (vanus >= 7 && vanus <= 16) {
  window.alert("Teie oled põhikooli õpilane ja söömise aeg on kell 10.");
} else if (vanus >= 17 && vanus < 20) {
  window.alert("Teie olete gümnaasiumi õpilane ja söömise aeg on kell 11.");
} else {
  window.alert("Teie olete täiskasvanu ja söömise aeg on kell 12.");
}
