/*
 * @Author: Chao Yang 
 * @Date: 2019-02-27 18:13:02 
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2019-02-28 17:25:37
 */

$(document).ready(function() {
    Pace.on('done', function () {
        $('#invited').parent().addClass('displayNone');
        setTimeout(function(){
            $('#invited').parent().removeClass('displayNone');
        }, 100);
    });

    $(document).on('click','#mobile-nav', function(e) {
        e.preventDefault()
        $("#nav-menu").toggleClass("open");
    });
    $(document).on('click','#nav-menu li a', function(e) {
        if ($(this).attr("href") !== "#") {
            $("#nav-menu").removeClass("open");
        }
    });
});