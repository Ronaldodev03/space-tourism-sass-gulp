/* *********************************     PAGE-TRANSITION   *************************************************** */
/* QUITE LA TRANSICION PARA NO PERJUDICAR PERFORMANCE EN LIGHTHOUSE */
/* window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelectorAll("a");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 200);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add("is-active");

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 200);
    });
  }
}; */

/********************************** NARBAR **********************************/

document.querySelector(".burger").addEventListener("click", function () {
  const mobileDiv = document.querySelector(".mobile");

  // Cambia la clase y activa la animación
  mobileDiv.classList.add("mobile-open");

  // Asegúrate de que la clase "mobile-open" esté presente antes de aplicar la animación
  if (mobileDiv.classList.contains("mobile-open")) {
    mobileDiv.style.transition = "right 700ms ease-in-out";
    mobileDiv.style.right = "0%";
  } else {
    mobileDiv.style.right = "-70%";
  }
});

document.querySelector(".close").addEventListener("click", function () {
  var mobileDiv = document.querySelector(".mobile");

  // Remueve la clase y activa la animación para volver a -70%
  mobileDiv.classList.remove("mobile-open");
  mobileDiv.style.transition = "right 700ms ease-in-out";
  mobileDiv.style.right = "-70%";
});
