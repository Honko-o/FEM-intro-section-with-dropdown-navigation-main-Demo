let dropdownTriggerLink = document.querySelectorAll(".dropdown-trigger");
let iconMenu = document.querySelector(".menu-icon");
let iconMenuClose = document.querySelector(".close-menu");
let sideNav = document.querySelector("nav");
let dropdownToggle = function (e) {
    console.log(e.currentTarget);
        // Arrow Toggling 
        e.currentTarget.children[0].classList.toggle("hidden");
        e.currentTarget.children[1].classList.toggle("hidden");
        // Show and Hide Dropdown
        e.currentTarget.nextElementSibling.classList.toggle("collapse");
}
let removeDropdownsAndSideNav = function (e) {
        let featuresDropdown = document.querySelectorAll(".features__dropdown");
        let companyDropdown = document.querySelectorAll(".company__dropdown");
        let currentElement = e.target;
        while (currentElement !== document.body) {
            // console.log(currentElement);
            if (currentElement.classList.contains("dropdown-trigger") || currentElement.classList.contains("features__dropdown") || currentElement.classList.contains("company__dropdown") || currentElement.tagName === "NAV") {
                return;
            } else {
                // sideNav.style.display = "none"; 
                currentElement = currentElement.parentElement;
            }
        }
        featuresDropdown[0].classList.add("collapse");
        companyDropdown[0].classList.add("collapse");

}

dropdownTriggerLink.forEach(el => el.addEventListener("click", dropdownToggle));
document.addEventListener("click", removeDropdownsAndSideNav);

// Side Menu 
iconMenu.addEventListener("click", e => {
    let sideNav = document.querySelector("nav");
    iconMenu.classList.toggle("show-xs");
    iconMenu.classList.toggle("hidden");
    iconMenuClose.classList.toggle("hidden");
    iconMenuClose.classList.toggle("show-xs");

    if (e.currentTarget.classList.contains("hidden")) {
        iconMenuClose.style.position = "relative";
        iconMenuClose.style.zIndex = 9999;
        iconMenu.style.position = "relative";
        iconMenu.style.zIndex = "auto";
    }
    sideNav.classList.remove("hidden");
});
iconMenuClose.addEventListener("click", e => {
    iconMenuClose.classList.toggle("show-xs");
    iconMenuClose.classList.toggle("hidden");
    iconMenu.classList.toggle("hidden");
    iconMenu.classList.toggle("show-xs");

    if (e.currentTarget.classList.contains("hidden")) {
        iconMenu.style.position = "relative";
        iconMenu.style.zIndex = 9999;
        iconMenuClose.style.position = "relative";
        iconMenuClose.style.zIndex = "auto";
    }
    sideNav.classList.add("hidden");
});