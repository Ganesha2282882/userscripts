// ==UserScript==
// @name        CleanYouTube
// @namespace   Violentmonkey Scripts
// @match       *://*.youtube.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 7/6/2021, 4:48:27 PM
// ==/UserScript==
(() => {
  if (window.location.href.includes("/c")) {false} else if (window.location.href.includes("/watch?v=")) {
    window.location.href = window.location.href.replace("/watch?v=", "/embed/");
  } else if (window.location.href.includes("&t=")) {
    window.location.href = window.location.href.replace("/watch?v=", "/embed/").replace("&t=", "#");
  } else if (window.location.href.includes("/embed/")) {false} else {
    window.location.href = "https://cse.google.com/cse?cx=4f9d2527cf425e06c";
  }
})();