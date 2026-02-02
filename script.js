function nextSlide() {
  let name = document.getElementById("name").value;
  if (name === "MSKAN MATEK RAJPUT") return;

  document.getElementById("slide1").classList.add("hidden");
  document.getElementById("slide2").classList.remove("hidden");

  document.getElementById("question").innerText =
    name + ", will you be my Valentine? 💖";
}

function noClick() {
  document.getElementById("error").innerText =
    "❌ Wrong option! System error 😅";

  if (navigator.vibrate) {
    navigator.vibrate(500);
  }
}

function yesClick() {
  document.getElementById("slide2").classList.add("hidden");
  document.getElementById("slide3").classList.remove("hidden");
}
