let bgImage = document.getElementById("header");
let text = document.getElementById("text");
let i = 0;
setInterval(bgChange, 5000);

function bgChange() {
  i++;
  if (i > 3) {
    i = 0;
  }
  if (i == 0) {
    bgImage.style.backgroundImage = "url('img/borobudur.jpg')";
    text.innerHTML = "Candi" + "<br>" + "Borobudur";
    bgImage.style.backgroundSize = "cover";
  } else if (i == 1) {
    bgImage.style.backgroundImage = "url('img/garudawisnukencana.jpg')";
    text.innerHTML = "Garuda Wisnu" + "<br>" + "Kencana";
    bgImage.style.backgroundSize = "cover";
  } else if (i == 2) {
    bgImage.style.backgroundImage = "url('img/pantaikuta.jpg')";
    bgImage.style.backgroundSize = "cover";
    text.innerHTML = "Pantai" + "<br>" + "Kuta";
  } else if (i == 3) {
    bgImage.style.backgroundImage = "url('img/rajaampat.jpg')";
    text.innerHTML = "Raja" + "<br>" + "Ampat";
    bgImage.style.backgroundSize = "cover";
  }

  console.log(i);
}

bgChange();
