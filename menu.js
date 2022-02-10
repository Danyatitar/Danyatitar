const menu = document.querySelectorAll(".menu_content");
const changes = document.querySelectorAll(".change");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < menu.length; j++) {
      if (menu[j].classList.contains("activate")) {
        menu[j].classList.remove("activate");
      }
    }
    menu[i].classList.add("activate");
    for (let j = 0; j < changes.length; j++) {
      if (changes[j].classList.contains("visible")) {
        changes[j].classList.remove("visible");
      }
    }
    changes[i].classList.add("visible");
  });
}
