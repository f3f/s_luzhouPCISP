$(document).ready(function(){
    $("#userName").focus();
    /* 点击登录按钮 */
    $('.wrap-login').on('click',function () {
        login();
    });
    $('input').on('keyup',function (event) {
       if(event.keyCode===13){
          login();
       }
    });
    function login() {
        var userName = $($('.wrap-main input').get(0)).val().trim();
        var passWord = $($('.wrap-main input').get(1)).val().trim();
        if(!userName){
            $('.error').html('用户名不能为空!');
            return;
        }else if(!passWord){
            $('.error').html('密码不能为空!');
            return;
        }

        window.location.href = '../publicService/publicService.html';
    }
});
