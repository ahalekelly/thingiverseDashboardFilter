// ==UserScript==
// @name         Thingiverse Dashboard Filter
// @description  Keep likes and collections from clogging your Thingiverse feed
// @author       Adrian Kelly
// @namespace    https://github.com/ahalekelly/thingiverseDashboardFilter
// @downloadURL  https://github.com/ahalekelly/thingiverseDashboardFilter/raw/master/thingiverseDashboardFilter.user.js
// @match        https://www.thingiverse.com/dashboard
// @run-at       document-idle
// @grant        none
// ==/UserScript==
'use strict';

document.querySelector(".results-container").addEventListener("DOMNodeInserted", filter)

filter()

function filter() {
  for (const msg of document.querySelectorAll("span.subscription_msg")) {
    var text = msg.innerHTML
    if (text.includes('</a> added <a') || text.includes(' liked <a')) {
      console.log(text)
      msg.parentNode.parentNode.parentNode.style.display = 'none'
    }
  }
}
