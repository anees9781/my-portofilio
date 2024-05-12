// about
// Get all tab links and contents
var tablinks = document.querySelectorAll(".title_links");
var tabcontents = document.querySelectorAll(".tab_content");
function opentab(tabname) {
    // Remove "active-link" class from all tab links
    tablinks.forEach(function (link) {
        link.classList.remove("active-link");
    });

    // Remove "active_tab" class from all tab contents
    tabcontents.forEach(function (content) {
        content.classList.remove("active_tab");
    });
    // Add "active-link" class to the clicked tab link
    var clickedTab = document.querySelector("[onclick=\"opentab('" + tabname + "')\"]");
    clickedTab.classList.add("active-link");
    // Add "active_tab" class to the corresponding tab content
    var correspondingTabContent = document.getElementById(tabname);
    correspondingTabContent.classList.add("active_tab");
}
document.addEventListener("DOMContentLoaded", function () {
    // Get menu elements
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    // Add event listener to menu toggle button
    menuToggle.addEventListener('click', function () {
        // Toggle 'active' class on the menu
        menu.classList.toggle('active');
    });
});
// move the bottom from top
const homeButton = document.getElementById("home");

// Add a click event listener
homeButton.addEventListener("click", function (event) {
    // Prevent default behavior (e.g., following the href)
    event.preventDefault();

    // Scroll to the top of the page (or you can implement redirect logic here)
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional: Smooth scrolling effect
    });
});
// side menu
var sidemenu = document.getElementById('sidemenu');
function openMenu() {
    sidemenu.style.right = "0";
}
function closeMenu() {
    sidemenu.style.right = "-200px";
}
// form from gethub
const scriptURL = 'https://script.google.com/macros/s/AKfycbw6FIehf8_q0fE1dxivj0ykNhFw4hLe44cQQJpvoKU41YZ9anSRvBi7mxc-H7oAUhGjbg/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML="Feedback sent successfully"
            setTimeout(function(){
            msg.innerHTML=""

            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})










