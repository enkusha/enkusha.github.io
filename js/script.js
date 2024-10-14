/*@copyright Enkugirma2024
*/

"use strict"

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else
{
    $HTML.dataset.theme = isDark ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = ()=>{
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme)


//tab functionality 

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let lastActiveTabBtn = $tabBtn[0]; // Initialize with the first tab button

$tabBtn.forEach(item => {
  item.addEventListener("click", function() {
    // Remove 'active' class from the currently active tab content and button
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    // Select the new tab content based on the clicked button's data attribute
    const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
    
    if ($tabContent) { // Check if the tab content exists
      $tabContent.classList.add("active"); // Activate the new tab content
    }

    this.classList.add("active"); // Activate the clicked tab button

    // Update the last active tab and button
    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

