// ==UserScript==
// @name         Website Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://uplea.com/dl/*
// @match        http://uplea.com/step/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/sohelzerdoumi/gm-download-website/master/main.user.js
// ==/UserScript==

function doUplea() {
  var url = window.location.pathname;
  if(url.split("/")[1] == 'dl') {
       window.location = 'http://uplea.com/step/' + url.split("/")[2] + '/3';
  } else {
        console.log('shutdown');
        $('div#dl_link').show();
        $('div#delay').hide();
        $('#ulCounter').hide();
  }
}

(function() {
    'use strict';

    var host = window.location.hostname;
    switch(host) {
        case 'uplea.com':
        case 'www.uplea.com':
            doUplea();
    }

})();