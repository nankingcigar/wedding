/*
 * @Author: Chao Yang 
 * @Date: 2019-02-27 18:13:02 
 * @Last Modified by:   Chao Yang 
 * @Last Modified time: 2019-02-27 18:13:02 
 */
Pace.on('done', function () {
    $('#invited').parent().addClass('displayNone');
    setTimeout(function(){
        $('#invited').parent().removeClass('displayNone');
    }, 100);
});