$(function () {
    $('#hots .ontime .owl-carousel').owlCarousel({
        rtl: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        dots: false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    })
    $('#hots .offers .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 1,
                dots: true,
            },
            1000: {
                items: 1,
                dots: true,

            }
        },

    })


    function startProgressBar() {
        $(".slide-progress").css({
            width: "100%",
            transition: "width 5000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }

//    Count Down


    function countDown() {
        let today = new Date();
        let vDate = new Date(today.getFullYear(), 11, 16);
        const t = vDate.getTime() - today.getTime()

        const day = Math.floor(t / (1000 * 60 * 60 * 24));
        const hour = Math.floor(((t) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minute = Math.floor(((t) % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor(((t) % (1000 * 60)) / (1000));
        console.log(day);

        $('.year').text(today.getFullYear());
        $('.day').text(day);
        $('.hour').text(hour);
        $('.min').text(minute);
        $('.sec').text(sec);


        if (t <= 0) {
            clearTimeout(counter)
            document.querySelector('timers').innerText = 'Expired'
        }
    }

    setInterval(countDown, 1000)

})