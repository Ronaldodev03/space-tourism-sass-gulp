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

fetch("./src/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    /* *********************************     TECHNOLOGY    *************************************************** */

    const sliderButtons = document.querySelectorAll(".slider");
    const activeClassSlider = "sliders02__indicators--active";
    const passiveClassSlider = "sliders02__indicators";

    loadDataTechnology(0);

    sliderButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Obtén el índice del botón clicado desde el atributo data-index
        const index = parseInt(this.getAttribute("data-index"));

        // Cambia la clase activa solo para el botón clicado
        sliderButtons.forEach((btn) => {
          btn.classList.remove(activeClassSlider);
          btn.classList.add(passiveClassSlider);
        });
        this.classList.remove(passiveClassSlider);
        this.classList.add(activeClassSlider);

        // Carga los datos correspondientes según el índice
        loadDataTechnology(index);
      });
    });
    function loadDataTechnology(index) {
      // Carga los datos correspondientes desde el JSON
      const technologyName = data.technology[index].name;
      const technologyImg01 = data.technology[index].images.landscape;
      const technologyImg02 = data.technology[index].images.portrait;
      const technologyDescription = data.technology[index].description;
      // Actualiza los elementos en tu página
      const technologyNameElement = document.getElementById("technology-name");
      const technologyImg01Element =
        document.getElementById("technology-img-01");
      const technologyImg02Element =
        document.getElementById("technology-img-02");
      const technologyDescriptionElement = document.getElementById(
        "technology-description"
      );

      technologyNameElement.textContent = technologyName;
      technologyImg01Element.src = technologyImg01;
      technologyImg02Element.src = technologyImg02;
      technologyDescriptionElement.textContent = technologyDescription;
    }
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

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
