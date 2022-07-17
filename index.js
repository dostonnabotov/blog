/* =========== BACK TO TOP =========== */
// Reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})