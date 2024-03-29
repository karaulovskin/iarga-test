// Load plugins
import 'jquery'
import 'inputmask/dist/min/jquery.inputmask.bundle.min.js'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

// load modules
import Forms from'./js/forms/forms'
import Utils from'./js/utils/utils'
import SvgUse from'./js/svgUse'
import MobileMenu from'./js/mobile-menu'

// Run components

window.App = {
    debug: false,
    lang: 'ru'
};

// debug detect

if (window.location.href.indexOf('192') !== -1) {
    App.debug = true;
}

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    App.Forms = new Forms();
    App.Utils = new Utils();
    App.SvgUse = new SvgUse();
    App.MobileMenu = new MobileMenu();



    $('.inputmask').inputmask({mask: "+7 (999) 999-99-99", greedy: false});

    // prevent copying
    $('.no-select').on('selectstart', false);

    $(".no-select img").on('mousedown', false);
});