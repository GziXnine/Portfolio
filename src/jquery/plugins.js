/** @format */

$(() => {
  // // ! Animation For All Buttons
  // $(".default-btn, .default-btn-one, .default-btn-two")
  //   .on("mouseenter", function (e) {
  //     var parentOffset = $(this).offset(),
  //       relX = e.pageX - parentOffset.left,
  //       relY = e.pageY - parentOffset.top;
  //     $(this).find("span").css({ top: relY, left: relX });
  //   })
  //   .on("mouseout", function (e) {
  //     var parentOffset = $(this).offset(),
  //       relX = e.pageX - parentOffset.left,
  //       relY = e.pageY - parentOffset.top;
  //     $(this).find("span").css({ top: relY, left: relX });
  //   });

  // // ! For A Portfolio Images
  // var portfolioIsotope = $(".protfolio-container").isotope({
  //   itemSelector: ".data",
  // });
  // $(".portfolio .buttons button").on("click", function () {
  //   $(".portfolio .buttons button").removeClass("active");
  //   $(this).addClass("active");
  //   portfolioIsotope.isotope({
  //     filter: $(this).data("filter"),
  //   });
  // });

  // // !Start A WOW Plugins
  // new WOW().init();

  // // !Preloader Area
  // $(".preloader").addClass("preloader-deactivate");

  // !Start A VanillaTilt Plugins
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    scale: 1.1,
  });

  // // !Global error handler
  // $(window).on("error", () => {
  //   window.location.href = "error.html";
  // });

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
  $(window).resize(function () {
    toggleParticles();
  });

  function toggleContainer() {
    if ($(window).width() < 1200) {
      $(".container").removeClass("container").addClass("container-fluid");
    } else {
      $(".container-fluid")
        .removeClass("container-fluid")
        .addClass("container");
    }
  }

  // Run on load
  toggleContainer();

  // Run on window resize
  $(window).on("resize", function () {
    toggleContainer();
  });

  const sections = [
    "#home",
    "#about",
    "#services",
    "#portfolio",
    "#certificates",
    "#blog",
    "#contact",
  ];

  $(".links ul li").on("click", function () {
    // Get the href attribute of the clicked item's anchor tag
    const targetSection = $(this).find("a").attr("href");

    // Hide all sections
    for (let i = 0; i < sections.length; i++) {
      $(sections[i]).css("display", "none");
    }

    // Show the target section
    $(targetSection).css("display", "block");

    // Update active class for the menu
    $(".links ul li").removeClass("active");
    $(this).addClass("active");

    // Trigger the simulated click for the portfolio section when it's shown
    if (targetSection === "#portfolio") {
      setTimeout(() => {
        const allButton = document.querySelector(".buttons button.all");
        if (allButton) {
          allButton.classList.add("active");
          allButton.click();
        }
      }, 10);
    }
  });

  var portfolioIsotope;

  // Initialize Isotope once the images are loaded
  $(".protfolio-container").imagesLoaded(function () {
    portfolioIsotope = $(".protfolio-container").isotope({
      itemSelector: ".data",
      layoutMode: "fitRows",
    });
  });

  // Button filter functionality
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
});

$(".animateText").textition({
  speed: 1.2,
  animation: "ease-out",
  map: { x: 200, y: 100, z: 0 },
  autoplay: true,
  interval: 4,
});
