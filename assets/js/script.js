var com;

if (!com) {
    com = {};
} else if (typeof com !== 'object') {
    throw new Error('com already exists and is not an object');
}

if (!com.spt_development) {
    com.spt_development = {};
} else if (typeof com.spt_development !== 'object') {
    throw new Error('com.spt_development already exists and is not an object');
}

/* https://github.com/osano/cookieconsent */
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#c0c0c0"
    },
    "button": {
      "background": "#876c31",
      "text": "#ffffff"
    }
  },
  "theme": "classic",
  "position": "bottom-right",
  "content": {
    "link": "Discover more",
    "href": "/cookies"
  }
});

window.onload = function () {
  // Fix anchor tag links on iPhone
  if (window.location.hash) {
    document.querySelector(window.location.hash).scrollIntoView();
  }

  // Force images in the carousel to load eagerly, once the page has loaded (this prevents a pause when they are displayed
  // for the first time, but stops them blocking the initial rendering of the page).
  document.querySelectorAll('.carousel-item img[loading="lazy"').forEach(function (i) { i.setAttribute('loading', 'eager'); }); 
};

// Calendly integration
com.spt_development.initCalendlyPopup = function () {
  Calendly.initPopupWidget({url: 'https://calendly.com/spt-development/introduction?hide_gdpr_banner=1'});
}
