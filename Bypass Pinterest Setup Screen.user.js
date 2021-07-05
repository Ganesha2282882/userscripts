// ==UserScript==
// @name        Bypass Pinterest Setup Screen
// @namespace   Violentmonkey Scripts
// @match       *://*.pinterest.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 7/5/2021, 1:19:52 PM
// ==/UserScript==
(() => {
  if (window.location.href != "https://www.pinterest.com/") {false} else {
    window.location.href = "https://www.pinterest.com/search/pins/?q=Pinterest";
  }
})();