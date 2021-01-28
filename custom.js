const loginButton = document.getElementById("yesOf");
loginButton.addEventListener("click", function () {
    const loginArea = document.getElementById("lv-project");
    loginArea.style.display = "none";

})
const button = document.getElementById("noNever");
button.addEventListener("click", function () {
    const noNever = document.getElementById("lv-project");
    noNever.style.display = "none";
})

document.getElementById("yesOf").addEventListener("click", function () {
    const loveTitleShow = document.getElementById("proposeSection");
    loveTitleShow.style.display = "block";
})
document.getElementById("noNever").addEventListener("click", function () {
    const loveTitleShow = document.getElementById("noNeverSection");
    loveTitleShow.style.display = "block";
})