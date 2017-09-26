$(function () {

    $(".bac").toggle(
        function () {
            $(".bac i").css("left","0.4rem");
            $("body").css("background","#0f0f0f");
            $(".pattern").css("background","#191919");
            $(".bac i").css("background","#f92c4d");
            $(".bac").css("background","#5d2028");
            $("head").append('<link class="changeBg" rel="stylesheet" href="css/newBg.css"/>')
            localStorage.setItem('bg','0');
        },
        function () {
            $(".bac i").css("left","-0.1rem");
            $("body").css("background","");
            $(".pattern").css("background","");
            $("head link").remove('.changeBg');
            localStorage.setItem('bg','1');
        }
    )
});

