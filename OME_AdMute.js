// ==UserScript==
// @name         OME Silence Ad
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  silence OME ad
// @author       You
// @match        https://onlinemeded.org/spa/*
// @icon         none
// @grant        none
// ==/UserScript==


window.setTimeout(main, 3000);

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});

function main() {
    var videoplayer = document.getElementById("acquire_video_jwp").getElementsByTagName("VIDEO");
    videoplayer[0].muted = true;
    console.log("silenced");
};

function onUrlChange() {
  setTimeout(main,3000);
}
