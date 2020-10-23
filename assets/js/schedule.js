$(document).ready(function(){
    var defaultTab = $(".daysLink.active").attr("link-day");
    $("#" + defaultTab).addClass("active");

    $(".daysLink").click(function(){
        var day = $(this).attr("link-day");

        $(".daysLink").removeClass("active");
        $(this).addClass("active");

        $(".scheduleTab").removeClass("active");
        $("#" + day).addClass("active");
        $( "#" + day ).children().addClass("active");
    });
});

// initializing aos animation
$(document).ready(function(){
    AOS.init({
        offset: 200,
        delay: 100,
        duration: 500
    });
});

// MDB Lightbox Init
