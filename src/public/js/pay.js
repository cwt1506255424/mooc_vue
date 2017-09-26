/**
 * Created by witch on 2017/7/24.
 */
$(function() {


    $(".payways i").toggle(
        function () {
            $(".payways i").removeClass("nocheck");
            $(".payways input").attr("checked","checked");

        },
        function () {
            $(".payways i").addClass("nocheck");
            $(".payways input").removeAttr("checked");
        }
    );

    $(".payways1 i").toggle(
        function () {
            $(".payways1 i").removeClass("nocheck");
            $(".payways1 input").attr("checked","checked");

        },
        function () {
            $(".payways1 i").addClass("nocheck");
            $(".payways1 input").removeAttr("checked");
        }
    );




    $("#rules i").toggle(
        function () {
            $("#rules i").removeClass("nocheck");
            $("#rules input").attr("checked","checked");

        },
        function () {
            $("#rules i").addClass("nocheck");
            $("#rules input").removeAttr("checked");
        }
    );

    $("#foot a").click(
        function () {
            if($("#rules input").attr("checked")=="checked" ){
                alert("即将支付");
            }else {
                alert("请确定用户协议");
            }
        }
    );
})


