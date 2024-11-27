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

  $(".links ul li").on("click", function () {
    // Get the href attribute of the clicked item's anchor tag
    const targetSection = $(this).find("a").attr("href");

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

  // Trigger file input when the custom button is clicked
  $("#customButton").on("click", function () {
    $("#file").click();
  });

  // Update the file name when a file is selected
  $("#file").on("change", function () {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    $("#file-chosen").text(fileName);
  });

  // $(".cooking").on("scroll", function () {
  //   const container = $(this); // The scrolling container

  //   $(".block").each(function () {
  //     const blockTop = $(this).position().top; // Position relative to the container
  //     const blockHeight = $(this).outerHeight();

  //     // Check if the block is in the visible range of the container
  //     if (container.scrollTop() > $(this).offset().top) {
  //       const blockID = $(this).attr("id");
  //       console.log("Visible Block:", blockID);

  //       // Remove 'active' class from all navigation links
  //       $(".header a").parent().removeClass("active");

  //       // Add 'active' class to the corresponding navigation link
  //       $(".header li a[data-scroll='" + blockID + "']")
  //         .parent()
  //         .addClass("active");
  //     }
  //   });
  // });

  const $cursor = $("#cursor");
  const $hoverElements = $("a");

  // Update cursor position on mouse move
  $(document).on("mousemove", function (e) {
    if ($cursor.length) {
      gsap.to($cursor, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  // Add hover effects for specified elements
  $hoverElements.on("mouseenter", function () {
    if ($cursor.length) {
      $cursor.addClass("hovered");
      gsap.to($cursor, {
        scale: 2,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  $hoverElements.on("mouseleave", function () {
    if ($cursor.length) {
      $cursor.removeClass("hovered");
      gsap.to($cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
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

(function ($) {
  "use strict";

  $(window).on("load", function () {
    const $svg = $("#loader");
    const startShape = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const endShape = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Timeline for animations
    const tl = gsap.timeline();

    // Animation for text fading out
    tl.to(".loader-container .loaded", {
      delay: 1.2,
      y: -50,
      opacity: 0,
      duration: 0.6,
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
})(jQuery);

/*----------------------------------------------
2. Cursor
----------------------------------------------*/
// (function ($) {
//   "use strict";

//   const $cursor = $("#cursor");
//   const $hoverElements = $("a");

//   // Update cursor position on mouse move
//   $(document).on("mousemove", function (e) {
//     if ($cursor.length) {
//       gsap.to($cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//   });

//   // Add hover effects for specified elements
//   $hoverElements.on("mouseenter", function () {
//     if ($cursor.length) {
//       $cursor.addClass("hovered");
//       gsap.to($cursor, {
//         scale: 2,
//         opacity: 0,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//   });

//   $hoverElements.on("mouseleave", function () {
//     if ($cursor.length) {
//       $cursor.removeClass("hovered");
//       gsap.to($cursor, {
//         scale: 1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     }
//   });
// })(jQuery);

/*----------------------------------------------
3. Smooth Scroll
----------------------------------------------*/
(function ($) {
  "use strict";

  const lenis = new Lenis();

  lenis.on("scroll", function () {
    ScrollTrigger.update();
  });

  gsap.ticker.add(function (time) {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
})(jQuery);
