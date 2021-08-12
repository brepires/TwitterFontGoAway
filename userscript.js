// ==UserScript==
// @name         Twitter Font Go Away
// @namespace    https://nyksund.carrd.co/
// @version      1.0
// @description  Get lost, TwitterChirp
// @author       Nyksund
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
        .r-37j5jr {
        font-family: Nunito, "Segoe UI", Helvetica, sans-serif !important;
    }
`)

// The script above uses Nunito, but you can change to any font that is installed to your system.
// This only works with fonts that you have installed on your OS.
