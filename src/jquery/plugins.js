/** @format */

$(() => {
  // !Start A VanillaTilt Plugins
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    scale: 1.1,
  });

  // ! An Animation For Porfolio
  function toggleParticles() {
    if ($(window).width() > 1199) {
      // Initialize particles if screen width is greater than 1199px
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 400,
            },
          },
          color: {
            value: $("body").hasClass("dark") ? "#ffffff" : "#615c5c",
          },
          shape: {
            type: "edge",
            polygon: {
              sides: 4,
            },
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    } else {
      // Clear particles when screen width is 1199px or less
      const particlesContainer = $("#particles-js");
      if (particlesContainer.children().length > 0) {
        particlesContainer.empty(); // Clear the container
      }
    }
  }

  // Call the toggleParticles function initially
  toggleParticles();

  // Add a resize event listener to toggle particles dynamically
  $(window).on("resize", function () {
    toggleParticles();
  });

  //! Initialize Isotope once the images are loaded
  var portfolioIsotope;
  $(".protfolio-container").imagesLoaded(function () {
    portfolioIsotope = $(".protfolio-container").isotope({
      itemSelector: ".data",
      layoutMode: "fitRows",
    });
  });

  //! Button filter functionality
  $(".portfolioe .buttons button").on("click", function () {
    $(".portfolioe .buttons button").removeClass("active");
    $(this).addClass("active");

    const filterValue = $(this).data("filter");
    portfolioIsotope.isotope({ filter: filterValue });
  });

  // ! Make a PopUp for Latest News Photos
  $(".img").on("click", function () {
    let $overlay = $("<div></div>", {
      class: "popup-overlay",
    });

    let $popup = $("<div></div>", {
      class: "popUp",
    });

    let $popupImg = $("<img>", {
      src: $(this.children).attr("src"),
    });

    $popup.append($popupImg);
    $("body").append($overlay).append($popup);

    $overlay.on("click", function () {
      $popup.remove();
      $overlay.remove();
    });
  });

  //! Trigger file input when the custom button is clicked
  $("#customButton").on("click", function () {
    $("#attachment").click();
  });

  //! Update the file name when a file is selected
  $("#attachment").on("change", function () {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    $("#file-chosen").text(fileName);
  });

  //! Attach click event to all <li> elements inside .links
  $(".links li a").on("click", function () {
    // Remove 'active' class from all <li> elements
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  //! Initialize theme based on local storage
  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      enableDarkTheme();
      $("#website-control-toggle").prop("checked", true); // Set checkbox state
    } else {
      enableLightTheme();
      $("#website-control-toggle").prop("checked", false); // Set checkbox state
    }
  }

  initializeTheme();

  //! Toggle theme on checkbox change
  $("#website-control-toggle").on("change", function () {
    if ($(this).is(":checked")) {
      enableDarkTheme();
    } else {
      enableLightTheme();
    }
  });

  //! Function to enable dark theme
  function enableDarkTheme() {
    $("body").addClass("dark").removeClass("light");
    localStorage.setItem("theme", "dark");
    toggleParticles();
  }

  //! Function to enable light theme
  function enableLightTheme() {
    $("body").addClass("light").removeClass("dark");
    localStorage.setItem("theme", "light");
    toggleParticles();
  }

  const $svg = $("#loader");
  const startShape = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const endShape = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  //! Timeline for animations
  const tl = gsap.timeline();

  //! Animation for text fading out
  tl.to(".loader-container .loaded", {
    delay: 2,
    y: -50,
    opacity: 0,
    duration: 0.2,
  });

  // Animate the SVG morphing from start shape to end shape
  tl.to($svg[0], {
    duration: 0.8,
    attr: { d: startShape },
    ease: "power1.easeIn",
  }).to($svg[0], {
    duration: 0.8,
    attr: { d: endShape },
    ease: "power1.easeOut",
  });

  // Move and hide the preloader
  tl.to(".preloader", {
    y: -1000,
    duration: 1,
  }).to(".preloader", {
    zIndex: -1,
    display: "none",
  });
});

$(".animateText").textition({
  speed: 1.2,
  animation: "ease-out",
  map: { x: 200, y: 100, z: 0 },
  autoplay: true,
  interval: 4,
});

// ! Countdown Timer
const currDate = new Date();
let $year = $("span#year");
let myComingBday = currDate.getFullYear() - 2003;
let myComingBdayLastChar = myComingBday.toString().slice(-1); // Last character
let countDownDate = new Date(`Dec 3, ${currDate.getFullYear()} 00:00:01`);

const timer = setInterval(() => {
  let now = new Date();
  let dateDiff = countDownDate.getTime() - now.getTime();

  if (dateDiff <= 0) {
    myComingBday++;
    countDownDate = new Date(`Dec 3, ${now.getFullYear() + 1} 00:00:01`);
  }

  $year.text(myComingBday - 1);
}, 1000);
