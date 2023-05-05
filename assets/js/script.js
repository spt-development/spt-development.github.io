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

// Fix anchor tag links on iPhone
window.onload = function () {
  if (window.location.hash) {
    document.querySelector(window.location.hash).scrollIntoView();
  }
};
