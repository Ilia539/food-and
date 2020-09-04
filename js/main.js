
//very simple activation
$(window).enllax();


// ......Start Bowl FOOTER.........
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var bowl = document.getElementById('bowl');
var parallaxInstance = new Parallax(bowl);

// ....Start Burger menu...........
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.nav-menu').toggleClass('active');
        // $('body').toggleClass('lock');

    });
});


