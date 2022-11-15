$(function () {
    $('select').niceSelect();
    $('.overlay').hide();
//    navigation dropdown active

    $('.account-title').on('mouseenter', function (e) {
        $(this).find('> ul').stop().fadeIn()
    })
    $('.account-title').on('mouseleave', function (e) {
        $(this).find('> ul').stop().fadeOut()
    })
    $('nav .dropdown-menu').css('width', $('nav').width() - 50 + 'px')

    $('.has-mega').on('mouseenter', function (e) {
        $(this).find('>.dropdown-menu').stop().slideDown();
        $(this).find('span.fa').addClass('fa-rotate-180');
        $('.overlay').stop().fadeIn();
    })
    $('.has-mega').on('mouseleave', function (e) {
        $(this).find('>.dropdown-menu').stop().slideUp();
        $(this).find('span.fa').removeClass('fa-rotate-180');
        $('.overlay').stop().fadeOut();

    })
    $('.shop-card').on('mouseenter', function (e) {
        $(this).find('>.dropdown-menu').stop().slideDown();
        $(this).find('span.fa').addClass('fa-rotate-180');

    })
    $('.shop-card').on('mouseleave', function (e) {
        $(this).find('>.dropdown-menu').stop().slideUp();
        $(this).find('span.fa').removeClass('fa-rotate-180');

    })
    $('.has-dropdown').on('mouseenter', function (e) {
        $(this).find('>.dropdown-menu').stop().slideDown();
        $(this).find('span.fa-chevron-down').addClass('fa-rotate-180');
        $('.overlay').stop().fadeIn();

    })
    $('.has-dropdown').on('mouseleave', function (e) {
        $(this).find('>.dropdown-menu').stop().slideUp();
        $(this).find('span.fa').removeClass('fa-rotate-180');
        $('.overlay').stop().fadeOut();

    })

//    mobile navigation
    $('#mobile').hcOffcanvasNav({
        disableAt: 1024,
        customToggle: $('#nav-icon'),
        navTitle: 'All Categories',
        levelTitles: true,
        levelTitleAsBack: true,
        position: 'right',
        rtl: true,
        levelOpen: 'expand',
    });



})
