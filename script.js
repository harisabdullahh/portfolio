document.addEventListener("DOMContentLoaded", function() {
    const ourWorkLink = document.querySelector('a[href="#second"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const homeLink = document.querySelector('a[href="#home"]')

    const ourWorkLink2 = document.querySelector('a[href="#second2"]');
    const aboutLink2 = document.querySelector('a[href="#about2"]');
    const homeLink2 = document.querySelector('a[href="#home2"]')

    const secondSection = document.getElementById("second");
    const thirdSection = document.getElementById("third");
    const homeSection = document.getElementById("home")

    ourWorkLink.addEventListener("click", function(event) {
        event.preventDefault();

        secondSection.scrollIntoView({ behavior: "smooth" });
    });

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        thirdSection.scrollIntoView({ behavior: "smooth" });
    });

    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); 

        homeSection.scrollIntoView({ behavior: "smooth" });
    });

    ourWorkLink2.addEventListener("click", function(event) {
        event.preventDefault();

        secondSection.scrollIntoView({ behavior: "smooth" });
    });

    aboutLink2.addEventListener("click", function(event) {
        event.preventDefault(); 

        thirdSection.scrollIntoView({ behavior: "smooth" });
    });

    homeLink2.addEventListener("click", function(event) {
        event.preventDefault(); 

        homeSection.scrollIntoView({ behavior: "smooth" });
    });
});