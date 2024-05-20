/*
Theme Name: Recentcons HTML5 Template
Theme URI: 
Design by: 
Developed by: Flash Coder Studio
Version: 1.0
License: 
Tags: 
*/


(() => {
    "use strict";

    menuBar();

    bgImg();

    banner();

    venoBox();

    isotope();

    latestProjectSlider();

    testimonialSlider();

    animeCounterUp();

    myProgressBar()

    wow();
    
    mySelect();

    productDislpaySlider();

    quantityCount();

    shopDetailsTab();

    cardTable();
    
    htmlFatchFrom();
    
    bottomToTop();

    /*====== Active Plugins ======

        1 Menu Bar

        2 BG Img

        3 Banner

        4 VenoBox

        5 Isotope
        
        6 Latest Project Slider

        7 Testimonial Slider

        8 Anime Counter Up

        9 My Progress Bar

        10 WoW

        11 My Select

        12 Product Dislpay Slider

        13 Quantity Count

        14 Shop Details Tab

        15 Card Table

        16 HTML Fatch From 

        17 Back To Top

    =============================*/

    /*=====================
      1 Menu Bar
  =======================*/
  function menuBar() {
    let copyMenuList = $(".menu-bar .main-menu ul").html();
    let headerHeight = $(".menu-bar").outerHeight();
    
    $(".menu-bar .close-mobile-btn").parents(".menu-right").find(".mobile-menu-btn").after(`<div class="mobile-menu-overlay"></div> <div class="search-overlay"></div>`);

    $(".menu-bar .mobile-menu-btn").on("click", function () {
      $(this).addClass("active");
      $(this).parents(".menu-right").find(".mobile-menu-bar").addClass("active");
      $(this).parents(".menu-right").find(".mobile-menu-overlay").addClass("active");
    });

    $(".menu-bar .close-mobile-btn, .menu-bar .mobile-menu-overlay").on("click", function () {
      $(this).parents(".menu-right").find(".mobile-menu-bar, .mobile-menu-btn, .mobile-menu-overlay").removeClass("active");
      }
    );

    $(".menu-bar .mobile-menu-bar .mobile-content").before(`
      <nav class="mobile-main-manu">
        <ul>${copyMenuList}</ul>
      </nav>
    `);

    $(".menu-bar .mobile-main-manu li:has(ul) > a").on("click", function (e) {
      e.preventDefault();
      const $parent = $(this).parent("li");
      const $siblings = $parent.siblings("li");
      const isActive = $parent.hasClass("active");
      if (isActive) {
        $parent.removeClass("active");
        $parent.find("ul").slideUp();
      } else {
        $parent.addClass("active");
        $siblings.removeClass("active");
        $siblings.children("ul:visible").slideUp();
        $parent.children("ul").slideDown();
      }
    });

    $(".menu-bar .mobile-main-manu .has-dropdown").find(".active").parent().slideDown();

    $(".menu-bar .search-option-open").on("click", function () {
      $(this).parents(".menu-bar-content").find(".menu-right").addClass("active");
    });

    $(".menu-bar .search-close").on("click", function () {
      $(this)
        .parents(".menu-bar-content")
        .find(".menu-right")
        .removeClass("active");
    });

    $(window).scroll(() => {
      if ($(window).scrollTop() > 0) {
        $(".menu-bar").addClass("sticky-header");
        $("main").css({ "margin-top": headerHeight });
      } else {
        $(".menu-bar").removeClass("sticky-header");
        $("main").css({ "margin-top": "auto" });
      }
    });
  }

  /*=====================
      2 BG Img
  =======================*/
  function bgImg() {
    document.addEventListener("DOMContentLoaded", () => {
      const imgElements = document.querySelectorAll("img");
      imgElements.forEach(function (imgElement) {
        const srcValue = imgElement.getAttribute("src");
        const altValue = imgElement.getAttribute("alt");
        imgElement.removeAttribute("src");
        imgElement.setAttribute("data-src", srcValue);
        imgElement.removeAttribute("alt");
        imgElement.setAttribute("data-alt", altValue);
      });
      const lazyLoadElements = document.querySelectorAll(
        "[data-background], img[data-src]"
      );
      const lazyLoadCallback = (entries, observer) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (entry.isIntersecting) {
            if (element.hasAttribute("data-background")) {
              element.style.backgroundImage = `url(${element.getAttribute(
                "data-background"
              )})`;
              element.removeAttribute("data-background");
            } else if (element.hasAttribute("data-src")) {
              element.src = element.getAttribute("data-src");
              element.removeAttribute("data-src");
              element.alt = element.getAttribute("data-alt");
              element.removeAttribute("data-alt");
            }
            observer.unobserve(element);
          }
        });
      };
      const observer = new IntersectionObserver(lazyLoadCallback, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      });
      lazyLoadElements.forEach((element) => {
        observer.observe(element);
      });
    });
  }

  /*========================
      3 Banner
  =======================*/
  function banner(){
    let bannerSlider = new Swiper(".banner.v1 .slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      keyboard: true,
      simulateTouch: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner.v1 .next-btn",
        prevEl: ".banner.v1 .prev-btn",
      },
    });

    let bannerSlider2 = new Swiper(".banner.v2 .slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      keyboard: true,
      simulateTouch: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".banner.v2 .banner-pagination",
        clickable: true,
      },
      on: {
          init: function () {
            $(".slide_progress-bar").removeClass("animate");
            $(".slide_progress-bar").eq(0).addClass("animate");
          },
          slideChangeTransitionStart: function () {
            $(".slide_progress-bar").removeClass("animate");
          },
          slideChangeTransitionEnd: function () {
            $(".slide_progress-bar").eq(0).addClass("animate");
          }
        }
    });

    let bannerSlider3 = new Swiper(".banner.v3 .slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner.v3 .next-btn",
        prevEl: ".banner.v3 .prev-btn",
      },
    });

  }

  /*========================
      4 VenoBox
  =======================*/
  function venoBox() {
    new VenoBox();
  }

  /*========================
      5 Isotope
  =======================*/
  function isotope() {
    // Get projectItems using modern DOM method
    const projectItems = document.querySelector('.project-items');
    if (projectItems) {
      const isotope = new Isotope(projectItems, {
        itemSelector: '.project-items > div',
        layoutMode: 'fitRows'
      });
  
      // Get buttons using modern DOM method
      const projectBtns = document.querySelectorAll(".latest-project .project-btns button");
  
      // Attach click event to each button
      projectBtns.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
  
          // Remove 'active' class from all buttons
          projectBtns.forEach(btn => btn.classList.remove('active'));
  
          // Add 'active' class to the clicked button
          e.currentTarget.classList.add('active');
  
          // Get the filter value from the clicked button's data attribute
          const filterValue = e.currentTarget.getAttribute('data-filter');
  
          // Filter the Isotope items based on the clicked button
          isotope.arrange({ filter: filterValue });
        });
      });
    } 

  }

  /*===========================
      6 Latest Project Slider
  =============================*/
  function latestProjectSlider(){
    let ourTeamSlider = new Swiper(".latest-project.v2 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".prev-btn",
        prevEl: ".next-btn",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  /*===========================
      7 Testimonial Slider
  =============================*/
  function testimonialSlider(){
    let testimonialSlider1 = new Swiper(".testimonial.v1 .slider", {
      slidesPerView: 1,
      spaceBetween: -30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      pagination: {
        el: ".testimonial.v1 .testimonial-count",
        type: "fraction",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      on: {
        init: function () {
          $(".slide_progress-bar").removeClass("animate");
          $(".slide_progress-bar").removeClass("active");
          $(".slide_progress-bar").eq(0).addClass("animate");
          $(".slide_progress-bar").eq(0).addClass("active");
        },
        slideChangeTransitionStart: function () {
          $(".slide_progress-bar").removeClass("animate");
          $(".slide_progress-bar").removeClass("active");
          $(".slide_progress-bar").eq(0).addClass("active");
        },
        slideChangeTransitionEnd: function () {
          $(".slide_progress-bar").eq(0).addClass("animate");
        }
      }
    });

    let testimonialSlider2 = new Swiper(".testimonial.v2 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      navigation: {
        nextEl: ".prev-btn",
        prevEl: ".next-btn",
      },
      pagination: {
        el: ".testimonial.v2 .testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 1,
        }
      },
    });

    let testimonialSlider3 = new Swiper(".testimonial.v3 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      navigation: {
        nextEl: ".prev-btn",
        prevEl: ".next-btn",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
      },
    });
    
  }

  /*========================
      8 Anime Counter Up
  =======================*/
  function animeCounterUp() {
    const $counterElements = $(".counter");

    function animateElement(element) {
      if (!element.dataset.animated) {
        const originalText = element.textContent; // Capture the original text before animation
        anime({
          targets: element,
          innerHTML: [
            parseInt(element.dataset.countMin) || 0,
            parseInt(element.dataset.countMax),
          ],
          round: 1,
          easing: "linear",
          duration: parseInt(element.dataset.countDuration) || 1000,
          delay: parseInt(element.dataset.countDelay) || 500,
          complete: function (anim) {
            // Animation is complete, restore the original text
            element.textContent = originalText;
          },
        });

        element.dataset.animated = true; // Set the animated flag to prevent re-animating
      }
    }

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      $counterElements.each(function () {
        if (isElementInViewport(this)) {
          animateElement(this); // Animate the current counter element if not already animated
        }
      });
    };

    $counterElements.each(function () {
      if (isElementInViewport(this)) {
        animateElement(this); // Animate initially visible counter elements
      }
    });

    $(window).on("scroll", handleScroll);
  }

  /*========================
    9 My Progress Bar
  =======================*/

  function myProgressBar() {
    document.addEventListener("DOMContentLoaded", function () {
      const percentDivs = document.querySelectorAll(".percent");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });
      percentDivs.forEach((percentDiv) => {
        observer.observe(percentDiv);
      });

      function animateCircle(percentDiv) {
        const percent = parseInt(percentDiv.getAttribute("data-percent"), 10);
        const duration =
          parseInt(percentDiv.getAttribute("data-duration")) || 1500;
        const delay = parseInt(percentDiv.getAttribute("data-delay")) || 0;

        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const bgCircle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );

        svg.setAttribute("viewBox", "0 0 215 215");
        svg.setAttribute("width", "100%");

        bgCircle.setAttribute("cx", "108");
        bgCircle.setAttribute("cy", "108");
        bgCircle.setAttribute("r", "100");

        circle.setAttribute("cx", "108");
        circle.setAttribute("cy", "108");
        circle.setAttribute("r", "100");

        svg.appendChild(bgCircle);
        svg.appendChild(circle);
        percentDiv.appendChild(svg);

        anime({
          targets: circle,
          strokeDashoffset: [
            anime.setDashoffset,
            2 * Math.PI * 100 - (2 * Math.PI * 100 * percent) / 100,
          ],
          easing: "easeInOutSine",
          duration: duration,
          delay: delay,
        });

        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        percentDiv.appendChild(numberDiv);

        // Counting animation for numberDiv
        anime({
          targets: numberDiv,
          innerHTML: [0, percent],
          round: 1, // Round the numbers to whole integers
          easing: "easeInOutQuad",
          duration: duration,
          delay: delay, // Adjust the delay to start the numberDiv animation after the circle animation
        });
      }
    });

    const $progressElements = $(".my-progress-bar .progress-vale");

    function animateElement() {
      $progressElements.each(function () {
        anime({
          targets: this,
          width: [
            `${parseInt(this.dataset.progressMinWidth)}%`,
            `${parseInt(this.dataset.progressMaxWidth)}%`,
          ],
          round: 1,
          easing: "linear",
          duration: parseInt(this.dataset.progressDuration) || 1000,
          delay: parseInt(this.dataset.progressDelay) || 500,
        });
      });
    }

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      $progressElements.each(function () {
        if (isElementInViewport(this)) {
          animateElement();
          $(window).off("scroll", handleScroll);
        }
      });
    };

    $(window).on("scroll", handleScroll);
  }

  /*============================
      10 Wow
  ===========================*/
  function wow() {
      wow = new WOW({
        animateClass: "animate__animated",
        offset: 0,
      });
      wow.init();
  }

  /*========================
      11 My Select
  =======================*/
  function mySelect() {
    const $mySelectElements = $("select");

    $mySelectElements.each((index, selectElement) => {
      const $mySelectContainer = $("<div>").addClass("my-select");

      const $selectedOption = $("<button>")
        .addClass("current")
        .attr("type", "button")
        .html(selectElement.options[selectElement.selectedIndex].innerHTML);

      const $optionsList = $("<ul>").addClass("list");

      for (const option of selectElement.options) {
        const $myOption = $("<li>").html(option.innerHTML);
        $myOption.on("click", () => {
          $selectedOption.html(option.innerHTML);
          $optionsList.removeClass("open");
          $selectedOption.removeClass("open");
        });
        $optionsList.append($myOption);
      }

      $selectedOption.on("click", () => {
        $optionsList.toggleClass("open");
        $selectedOption.toggleClass("open");
      });

      $mySelectContainer.append($selectedOption);
      $mySelectContainer.append($optionsList);
      $(selectElement).before($mySelectContainer).hide();

      // Hide options when user clicks outside of select
      $(document).on("click", (event) => {
        if (
          !$mySelectContainer.is(event.target) &&
          $mySelectContainer.has(event.target).length === 0
        ) {
          $optionsList.removeClass("open");
          $selectedOption.removeClass("open");
        }
      });
    });
  }

  /*=================================
      12 Product Dislpay Slider
  ==================================*/
  function productDislpaySlider() {

    let bigBoxImgSlider = new Swiper(".shop-details.v1 .big-box-img .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1000,
      mousewheel: false,
      keyboard: false,
      simulateTouch: false,
    });

    let smallBoxImgSlider = new Swiper(".shop-details.v1 .small-box-img .slider", {
      slidesPerView: 3,
      loop: false,
      spaceBetween: 30,
      speed: 1000,
      thumbs: {
        swiper: bigBoxImgSlider,
      },
      navigation: {
        nextEl: ".shop-details.v1 .small-box-img .next-btn",
        prevEl: ".shop-details.v1 .small-box-img .prev-btn",
      },
      breakpoints: {
        767: {
          direction: 'horizontal',
        },
        1200: {
          direction: 'vertical',
          loop: true,
        },
      },

    });
    
  }

  /*============================
      13 Quantity Count
  =============================*/

  function quantityCount() {
    let buttonPlus = $(".quantity-count .count-plus-btn");
    let buttonMinus = $(".quantity-count .count-down-btn");

    let incrementPlus = buttonPlus.click(function () {
      let n = $(this).parent(".quantity-count").find(".count-numbber");
      n.text(Number(n.text()) + 1);
    });

    let incrementMinus = buttonMinus.click(function () {
      let n = $(this).parent(".quantity-count").find(".count-numbber");
      let amount = Number(n.text());
      if (amount > 1) {
        n.text(Number(n.text()) - 1);
      } else {
        n.text(1);
      }
    });
  }

  /*============================
      14 Shop Details Tab
  =============================*/

  function shopDetailsTab() {
    $(".shop-tab .btn-anime").on("click", function () {
      $('.shop-tab li').removeClass("active");
      $(this).parent("li").addClass("active");
    });
  }

  /*============================
      15 Card Table
  =============================*/

  function cardTable() {
    $(".card-section .remove-item-btn").on("click", function (e) {
      $(this).parent("li").remove();
    });
  }

  /*=====================
      16 HTML Fatch From 
  =======================*/
  function htmlFatchFrom() {
    if ($("form").hasClass("contact-form")) {
      // Get the form.
      const form = document.querySelector(".contact-form");

      // Get the messages div.
      const formMessages = $(".response");

      // Set up an event listener for the contact form.
      form.addEventListener("submit", (event) => {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        const formData = new FormData(form);

        // Perform form field validation here.
        if (!validateFormFields(formData, formMessages)) {
          return;
        }

        // Submit the form using Fetch.
        fetch(form.action, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.text())
          .then((responseText) => {
            // Make sure that the formMessages div has the 'success' class.
            formMessages.removeClass("error");
            formMessages.addClass("success");

            // Set the message text.
            formMessages.text(responseText);
            form.reset();

            // Use Anime.js for animations.
            animateFormMessages(formMessages);
          })
          .catch((error) => {
            // Use Anime.js for error animations.
            animateFormMessages(formMessages, error);

            // Make sure that the formMessages div has the 'error' class.
            formMessages.removeClass("success");
            formMessages.addClass("error");

            formMessages.text(
              `${
                error
                  ? error
                  : "Oops! An error occurred and your message could not be sent."
              }`
            );
          });
      });
    }

    function validateFormFields(formData, formMessages) {
      // You can add your custom form field validation logic here.
      // Check the formData object for the values of the form fields and update the formMessages element with error messages.

      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone"); // Assuming the input field for phone is named "phone."
      const subject = formData.get("subject"); // Assuming the input field for the subject is named "subject."
      const message = formData.get("message"); // Assuming the input field for the message is named "message."

      if (!name || name.trim() === "") {
        animateFormMessages(formMessages, "Please enter your name.", "error");
        return false;
      }

      if (!validateEmail(email)) {
        animateFormMessages(formMessages, "Please enter a valid email address.", "error");
        return false;
      }

      // Phone number validation using a regular expression (10 digits, optional dashes or spaces).
      const phoneRegex = /^(\d{10}|\d{3}[-\s]\d{3}[-\s]\d{4})$/;
      if (!phoneRegex.test(phone)) {
        animateFormMessages(formMessages, "Please enter a valid phone number (e.g., 123-456-7890 or 1234567890).", "error");
        return false;
      }

      if (!subject || subject.trim() === "") {
        animateFormMessages(formMessages, "Please enter a subject.", "error");
        return false;
      }

      if (!message || message.trim() === "") {
        animateFormMessages(formMessages, "Please enter a message.", "error");
        return false;
      }

      // Clear any previous error messages.
      formMessages.empty();
      return true;
    }

    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }

    function animateFormMessages(formMessages, message, messageType = "success") {
      // Use Anime.js for animations.
      const timeline = anime.timeline();
      timeline
        .add({
          targets: formMessages[0],
          opacity: [0, 1],
          translateY: [50, 0],
          easing: "easeInOutQuad",
          duration: 400,
        })
        .add({
          targets: formMessages[0],
          opacity: [1, 0],
          translateY: [0, -50],
          easing: "easeInOutQuad",
          duration: 400,
          delay: messageType === "error" ? 2000 : 6000, // Adjust delay as needed.
          complete: () => {
            formMessages.empty();
            formMessages.removeClass(messageType);
          },
        });

      formMessages.removeClass(messageType === "error" ? "success" : "error");
      formMessages.addClass(messageType);
      formMessages.text(message);
    }
  }

  /*============================
      17 Back To Top
  =============================*/

  function bottomToTop() {
    let scrollTop = $(".scroll-bottom-Top");

    let sectionScrollHight = $("main")
      .find(".banner,.breadcum")
      .first()
      .outerHeight();

    $(window).scroll(function () {
      if ($(window).scrollTop() > sectionScrollHight / 2) {
        scrollTop.addClass("show");
      } else {
        scrollTop.removeClass("show");
      }
    });

    scrollTop.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  }

})();