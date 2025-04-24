let index = 0;
  const slides = document.querySelector(".slides");
  const total = slides.children.length;

  function slideShow() {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(slideShow, 3000); // Change every 3 seconds