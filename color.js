const colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    for (let j = 0; j < colors.length; j++) {
      if (colors[j].classList.contains("chosen")) {
        colors[j].classList.remove("chosen");
      }
    }
    colors[i].classList.add("chosen");
    switch (i) {
      case 0:
        document.getElementById("t-shirt").src =
          "./web-ready/tshirts/tshirt_07.png";
        break;
      case 1:
        document.getElementById("t-shirt").src =
          "./web-ready/tshirts/tshirt_08.png";
        break;
      case 2:
        document.getElementById("t-shirt").src =
          "./web-ready/tshirts/tshirt_09.png";
        break;
      case 3:
        document.getElementById("t-shirt").src =
          "./web-ready/tshirts/tshirt_10.png";
        break;
      case 4:
        document.getElementById("t-shirt").src =
          "./web-ready/tshirts/tshirt_11.png";
        break;
    }
  });
}
