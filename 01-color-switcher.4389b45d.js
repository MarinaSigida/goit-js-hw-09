!function(){var t,n={mainBody:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function e(){n.mainBody.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}n.startBtn.addEventListener("click",(function(){t||(t=setInterval(e,1e3),n.startBtn.setAttribute("disabled",!0))})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.removeAttribute("disabled"),t=null}))}();
//# sourceMappingURL=01-color-switcher.4389b45d.js.map