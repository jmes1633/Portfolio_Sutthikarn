document.addEventListener("DOMContentLoaded", function () {

    const aboutLink = document.querySelector("nav a[href='#about']");
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        const targetElement = document.querySelector("#about");
        targetElement.scrollIntoView({ behavior: "smooth" });
    });

    const scrollBtn = document.querySelector("#scrollBtn");
    scrollBtn.addEventListener("click", function () {
        const newsSection = document.querySelector("#news-section");
        newsSection.scrollIntoView({ behavior: "smooth" });
    });

    const aboutSkillsBtn = document.querySelector("#aboutSkillsBtn");
    aboutSkillsBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const skillsSection = document.querySelector("#skills-section");
        skillsSection.scrollIntoView({ behavior: "smooth" });
    });

    const assignmentLink = document.querySelector("nav a[href='#assignment-section']");
    assignmentLink.addEventListener("click", function (event) {
        event.preventDefault();
        const assignmentSection = document.querySelector("#assignment-section");
        assignmentSection.scrollIntoView({ behavior: "smooth" });
    });

    const contactUsBtn = document.querySelector("#contactUsBtn");
    contactUsBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const footerSection = document.querySelector("#footer-section");
        footerSection.scrollIntoView({ behavior: "smooth" });
    });

});