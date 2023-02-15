const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

linkHome.oneclick = function (event) {
  event.preventDefault();
  root.textContent = "Welcome to Home";
  history.pushState(null, "", event.target.href);
  };

linkAbout.oneclick = function (event) {
  event.preventDefault();
  root.textContent = "Welcome to About";
  history.pushState(null, "", event.target.href);
};
