let n = 1;
var image = document.getElementById("myImage");

//buat arrow kanan
function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("gambar/5.png")) {
        n = 2;
        image.src = "gambar/13.png";
    } else {
        n = 3;
        image.src = "gambar/21.png";
    }
}	
//buat arrow kiri
function changeImage2() {
    var image = document.getElementById("myImage");
    if (image.src.match("gambar/21.png")) {
        n = 2;
        image.src = "gambar/13.png";
    } else {
        n = 1;
        image.src = "gambar/5.png";
    }
}

//setiap avatar mempunya link beda2
function goToLink() {
  let link = "";
  let petName = document.getElementById("petName").value;
  switch(n) {
    case 1:
      link = `index1.html?name=${petName}&level=1`;
      break;
    case 2:
      link = `index2.html?name=${petName}&level=1`;
      break;
    case 3:
      link = `index3.html?name=${petName}&level=1`;
      break;
  }
  if (link !== 1) {
  window.location.href = link;
  }
}

var widthMakan = 20;
var widthMain = 20;
var widthTidur = 20;
var widthObat = 20;

function makan() {
  var elem = document.getElementById("makan");
  if (widthMakan < 100) {
    widthMakan += 10;
    elem.style.width = widthMakan + "%";
    elem.innerHTML = widthMakan * 1 + "%";
  }
}

function main() {
  var elem = document.getElementById("main");
  if (widthMain < 100) {
    if (widthMakan < 20) { // kondisi progress bar makan di bawah 20%
      widthMain += 5; // bertambah sebanyak 5% ketika main
    } else {
      widthMain += 10;
    }
    elem.style.width = widthMain + "%";
    elem.innerHTML = widthMain * 1 + "%";
  }
}

function tidur() {
  var elemTidur = document.getElementById("tidur");
  var elemMakan = document.getElementById("makan");
  if (widthTidur < 100) {
    widthTidur += 10;
    elemTidur.style.width = widthTidur + "%";
    elemTidur.innerHTML = widthTidur * 1 + "%";
    if (widthMakan > 0) {
      widthMakan -= 10;
      elemMakan.style.width = widthMakan + "%";
      elemMakan.innerHTML = widthMakan * 1 + "%";
    }
  }
}

let intervalId = setInterval(updateProgressBar, 60000);

function updateProgressBar() {
  if (widthMakan > 0 && widthMakan <= 100) {
    widthMakan -= 5;
    document.getElementById("makan").style.width = widthMakan + "%";
    document.getElementById("makan").innerHTML = widthMakan + "%";
  }
  if (widthMain >= 90 && widthObat > 0 && widthObat <= 100) {
    widthObat -= 5;
    document.getElementById("obat").style.width = widthObat + "%";
    document.getElementById("obat").innerHTML = widthObat + "%";
  }
  if (widthTidur > 0 && widthTidur <= 100) {
    widthTidur -= 5;
    document.getElementById("tidur").style.width = widthTidur + "%";
    document.getElementById("tidur").innerHTML = widthTidur + "%";
  }
}


function obat() {
    var elem = document.getElementById("obat");
    if (widthObat < 100) {
        widthObat += 10;
        elem.style.width = widthObat + "%";
        elem.innerHTML = widthObat * 1 + "%";
    }
}

//ganti gambar makan
function imagemakan() {
    var image = document.getElementById("avatar");
    if (image.src.match("gambar/1.png")) {
      image.src = "gambar/2.png";
      setTimeout(function() {
        image.src = "gambar/1.png";
      }, 5000);
    }
    if (image.src.match("gambar/5.png")) {
        image.src = "gambar/6.png";
        setTimeout(function() {
          image.src = "gambar/5.png";
        }, 5000);
      }
      if (image.src.match("gambar/9.png")) {
        image.src = "gambar/10.png";
        setTimeout(function() {
          image.src = "gambar/9.png";
        }, 5000);
      }
}

//ganti gambar obat
function imageobat() {
    var image = document.getElementById("avatar");
    if (image.src.match("gambar/1.png")) {
      image.src = "gambar/3.png";
      setTimeout(function() {
        image.src = "gambar/1.png";
      }, 5000);
    }
    if (image.src.match("gambar/5.png")) {
        image.src = "gambar/7.png";
        setTimeout(function() {
          image.src = "gambar/5.png";
        }, 5000);
    }
    if (image.src.match("gambar/9.png")) {
        image.src = "gambar/11.png";
        setTimeout(function() {
          image.src = "gambar/9.png";
        }, 5000);
    }
}

//change image tidur
function imagetidur() {
    var image = document.getElementById("avatar");
    if (image.src.match("gambar/1.png")) {
      image.src = "gambar/4.png";
      setTimeout(function() {
        image.src = "gambar/1.png";
      }, 5000);
    }
    if (image.src.match("gambar/5.png")) {
        image.src = "gambar/8.png";
        setTimeout(function() {
          image.src = "gambar/5.png";
        }, 5000);
      }
      if (image.src.match("gambar/9.png")) {
        image.src = "gambar/12.png";
        setTimeout(function() {
          image.src = "gambar/9.png";
        }, 5000);
      }
}

let gameHours = 0;
let gameMinutes = 0;
let gameLevel = 1;

//jam game
function updateClock() {
gameMinutes++;
if (gameMinutes >= 60) {
  gameMinutes = 0;
  gameHours++;
  if (gameHours >= 24) {
    gameHours = 0;
  }
}

// Background sesuai jam
let timeString = gameHours.toString().padStart(2, "0") + ":" + gameMinutes.toString().padStart(2, "0");
document.getElementById("game-clock").textContent = timeString;

// Update the background image
let backgroundImage = "";
if (gameHours >= 0 && gameHours <= 6) {
  backgroundImage = "background/malam.gif";
} else if (gameHours >= 6 && gameHours <= 12) {
  backgroundImage = "background/siang2.gif";
} else if (gameHours >= 12 && gameHours <= 18) {
  backgroundImage = "background/siang.gif";
} else {
  backgroundImage = "background/malam.gif";
}
document.body.style.backgroundImage = `url(${backgroundImage})`;

// greeting
let greeting = "";
if (gameHours >= 6 && gameHours <= 10) {
  greeting = "Good Morning";
} else if (gameHours >= 10 && gameHours <= 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Goodnight";
}
document.querySelector(".greeting").textContent = greeting;

// game level
if (gameHours >= 1 && gameLevel < 2) {
  gameLevel = 2;
  document.querySelector(".level").textContent = "Level 2";
  document.querySelector(".avatar").setAttribute("src", "gambar/5.png");
  }
  if (gameHours >= 3 && gameLevel < 4) {
  gameLevel = 3;
  document.querySelector(".level").textContent = "Level 3";
  document.querySelector(".avatar").setAttribute("src", "gambar/9.png");
  }
}
setInterval(updateClock, 1000);

