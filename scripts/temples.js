const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    const isVisible = navigation.classList.contains("show");

    menuButton.textContent = isVisible ? "X" : "☰";
    menuButton.setAttribute("aria-expanded", isVisible);
});