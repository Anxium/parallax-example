(() => {
  window.addEventListener("scroll", () => {
    const top = this.pageYOffset;

    const parallaxItems = document.getElementsByClassName("parallax__item");

    for (const item of parallaxItems) {
      const speed = item.getAttribute("data-speed");
      const yPos = -((top * speed) / 100);
      item.style.transform = `translateY(${yPos}px)`;
    }
  });
})();
