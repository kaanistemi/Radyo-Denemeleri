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
$(document).ready(function(){
    var defaultTab = $(".daysLink-2.active").attr("link-day-2");
    $("#" + defaultTab).addClass("active");

    $(".daysLink-2").click(function(){
        var day = $(this).attr("link-day-2");

        $(".daysLink-2").removeClass("active");
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
