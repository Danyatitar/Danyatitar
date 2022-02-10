const sizes = document.querySelectorAll(".size_black");
for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function () {
    for (let j = 0; j < sizes.length; j++) {
      if (sizes[j].classList.contains("active")) {
        sizes[j].classList.remove("active");
      }
    }
    sizes[i].classList.add("active");
  });
}
/*   
    }*/
