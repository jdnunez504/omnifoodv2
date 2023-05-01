$(document).ready(function() {
    /* Sticky Navigation Bar */
    var sticky = new Waypoint.Sticky({
        element: $('.navigation')[0],
        offset: '-90%'
    });

    /* Scroll on Hero Buttons Click */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation Scroll */
    // URL updates and the element focus is maintained
// originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

// filter handling for a /dir/ OR /indexordefault.page
    function filterPath(string) {
        return string
            .replace(/^\//, '')
            .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
            .replace(/\/$/, '');
    }

    var locationPath = filterPath(location.pathname);
    $('a[href*="#"]').each(function () {
        var thisPath = filterPath(this.pathname) || locationPath;
        var hash = this.hash;
        if ($("#" + hash.replace(/#/, '')).length) {
            if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
                var $target = $(hash), target = this.hash;
                if (target) {
                    $(this).click(function (event) {
                        event.preventDefault();
                        $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
                            location.hash = target;
                            $target.focus();
                            if ($target.is(":focus")){ //checking if the target was focused
                                return false;
                            }else{
                                $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
                                $target.focus(); //Setting focus
                            };
                        });
                    });
                }
            }
        }
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });
})

