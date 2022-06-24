for (var i=0; i<10; i++) {
  $('.starsparent').append("<div class=star style=animation-delay:" + (Math.random() * 2) + "s;margin-left:"+ Math.round(Math.random() * 100) + "vw;></div>");
}