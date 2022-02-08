$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    if(userName != "吕迪")
    {
    	alert("咋还不知道自己名字呢");
    	return;
    }
    if(pwd.length < 8)
    {
		alert("密码不得少于8位");
		return;
    }
    if(pwd.length > 8)
    {
		alert("密码不得多于8位");
		return;
    }
    if(userName=="吕迪" &&  pwd=="19910303")
    {
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
			return;
	}

	alert("密码错误!");
	
});
