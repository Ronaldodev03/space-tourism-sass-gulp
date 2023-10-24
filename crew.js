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
};*/

fetch("./src/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    /* *********************************     DESTINATION    *************************************************** */

    const tabButtons = document.querySelectorAll(".tab-button");
    const activeClass = "tab-underline-indicators--active";

    loadDataDestination(0);

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Obtén el índice del botón clicado desde el atributo data-index
        const index = parseInt(this.getAttribute("data-index"));

        // Cambia la clase activa solo para el botón clicado
        tabButtons.forEach((btn) => btn.classList.remove(activeClass));
        this.classList.add(activeClass);

        // Carga los datos correspondientes según el índice
        loadDataDestination(index);
      });
    });

    function loadDataDestination(index) {
      // Carga los datos correspondientes desde el JSON
      const destinationName = data.destinations[index].name;
      const destinationImg = data.destinations[index].images.png;
      const destinationDescription = data.destinations[index].description;
      const destinationDistance = data.destinations[index].distance;
      const destinationTravel = data.destinations[index].travel;

      // Actualiza los elementos en tu página
      const destinationNameElement =
        document.getElementById("destination-name");
      const destinationImgElement = document.getElementById("destination-img");
      const destinationDescriptionElement = document.getElementById(
        "destination-description"
      );
      const destinationDistanceElement = document.getElementById(
        "destination-distance"
      );
      const destinationTravelElement = document.getElementById(
        "destination-time-travel"
      );

      destinationNameElement.textContent = destinationName;
      destinationImgElement.src = destinationImg;
      destinationDescriptionElement.textContent = destinationDescription;
      destinationDistanceElement.textContent = destinationDistance;
      destinationTravelElement.textContent = destinationTravel;
    }
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

fetch("./src/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    /* *********************************     CREW    *************************************************** */

    const sliderButtons = document.querySelectorAll(".slider");
    const activeClassSlider = "sliders__indicators--active";
    const passiveClassSlider = "sliders__indicators";

    loadDataCrew(0);

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
        loadDataCrew(index);
      });
    });
    function loadDataCrew(index) {
      // Carga los datos correspondientes desde el JSON
      const crewName = data.crew[index].name;
      const crewImg = data.crew[index].images.png;
      const crewBio = data.crew[index].bio;
      const crewRole = data.crew[index].role;

      // Actualiza los elementos en tu página
      const crewNameElement = document.getElementById("crew-name");
      const crewImgElement = document.getElementById("crew-img");
      const crewBioElement = document.getElementById("crew-bio");
      const crewRoleElement = document.getElementById("crew-role");

      crewNameElement.textContent = crewName;
      crewImgElement.src = crewImg;
      crewBioElement.textContent = crewBio;
      crewRoleElement.textContent = crewRole;
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
