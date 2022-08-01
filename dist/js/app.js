
var app = {
  particle : function() {
    particlesJS.load('hero', 'dist/js/particles.json');
  },

  scrollAnimate: function() {
    AOS.init();
  },

  init : function() {
    this.particle();
    this.scrollAnimate();
  }
};

app.init();



