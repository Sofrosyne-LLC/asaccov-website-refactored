/* ------------------------------- navigation ------------------------------- */

// set the navigation to sticky on scroll
document.addEventListener("DOMContentLoaded", () => {
    //select the nav bar and create array of it's classes
    let navElement = document.getElementById("nav-element");
    let navList = navElement.classList;
    let welcomeText = document.getElementById("king");


    // window scroll event set to 70px
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            navList.add("sticky-nav");
            navList.remove("position-sticky")
            // solve welcome text content jumping on position fixed for navbar
            welcomeText.classList.add("margin-topp")

        } else {
            navList.remove("sticky-nav");
            navList.add("position-sticky")
            // solve welcome text content jumping on position fixed for navbar

            welcomeText.classList.remove("margin-topp")
        };

    });

    /* ----------------------------- for mobile menu ---------------------------- */
    $(document).ready( function(){
        // set the mobile menu icon to disply=none
        $("#icon").click(function(){
            $(this).toggleClass("active");
            $(".mobile-menu-overlay").toggleClass("active");
        })
        // hide mobile menu
        $(".X-icon-header span").click( function(){
            $(".mobile-menu-overlay").toggleClass("active");
            $("#icon").toggleClass("active");
        })
        
    })

})


    /* ----------------------------- for All pages Sections---------------------------- */