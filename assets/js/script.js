$(document).ready(function () {
    $(".dropdown-btn").click(function (event) {
        event.stopPropagation(); // Prevent closing when clicking inside
        let dropdown = $(this).closest(".dropdown");

        // Close all other dropdowns first
        $(".dropdown").not(dropdown).addClass("hide");

        // Toggle only the clicked dropdown
        dropdown.toggleClass("hide");
    });

    // Close dropdown when clicking outside (with delay to prevent instant close)
    $(document).click(function () {
        setTimeout(function () {
            $(".dropdown").addClass("hide");
        }, 100);
    });

    // Prevent closing when clicking inside the dropdown menu
    $(".dropdown").click(function (event) {
        event.stopPropagation();
    });

    $(".menu-btn").click(function () {
        if ($(window).width() < 992) {
            $(".navbar-collapse").toggleClass("shown");
            $(".menu-open-icon").toggleClass("hidden");
            $(".menu-close-icon").toggleClass("hidden");
        }
    });
    let review_dots = $('.review-dots');
    $(".reviews").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3000ms (3 seconds)
        arrows: false,
        dots: true,
        draggable: true,
        appendDots: review_dots,
        responsive: [
            {
                breakpoint: 1200, // lg screens and below
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992, // md screens and below
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    let hero_dots = $('.hero-dots');
    $(".hero-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        draggable: true,
        appendDots: hero_dots,
    });

    $(".vid-play").on("click", function () {
        let video = $(".video")[0]; // Get the video element
        $(".vid-thumb").hide(); // Hide the thumbnail
        video.play(); // Start playing the video
    });

    /* Image Reveal Animation */
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

    // Title animations
    let des_anim_item_one = document.querySelectorAll(".title-anime");
    des_anim_item_one.forEach((des_anim_item) => {
        let data_duration = des_anim_item.getAttribute("data-duration") || 0.80;
        let data_delay = des_anim_item.getAttribute("data-delay") || 0.2;
        let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
        let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
        let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
        let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.06;
        let split_word = new SplitText(des_anim_item, { type: "chars, words" });
        let gsapConfig = {
            duration: data_duration,
            delay: data_delay,
            x: translateX_value || 20,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
        };
        if (onscroll_value == 1) {
            gsapConfig.scrollTrigger = {
                trigger: des_anim_item,
                start: 'top 90%'
            };
        }
        gsap.from(split_word.words, gsapConfig);
    });
    let des_anim_item = document.querySelectorAll(".title-anime");
    des_anim_item.forEach((des_anim_item) => {
        let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.04;
        let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
        let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
        let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
        let data_delay = des_anim_item.getAttribute("data-delay") || 0.1;
        let data_duration = des_anim_item.getAttribute("data-duration") || 0.75;
        let split_word = new SplitText(des_anim_item, { type: "chars, words" });
        let gsapConfig = {
            duration: data_duration,
            delay: data_delay,
            x: translateX_value || 20,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
        };
        if (onscroll_value == 1) {
            gsapConfig.scrollTrigger = {
                trigger: des_anim_item,
                start: 'top 90%'
            };
        }
        gsap.from(split_word.words, gsapConfig);
    });
});
