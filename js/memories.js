$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
//loadAudioFile('../music/1.mp3');

$('#musicPlayBtn').click(function (event) {
	var audio = document.getElementById('musicAudio');
	//防止冒泡
	event.stopPropagation();

	if(audio.paused)
	{
		$('#musicPlayBtn').css("background","url(../img/icons8-mute-64.png) no-repeat center bottom");
		$('#musicPlayBtn').css("background-size","cover");
		audio.play();
		return;
	}

	$('.audio_div').css("background","url(../img/icons8-audio-50.png) no-repeat center bottom");
	$('.audio_div').css("background-size","cover");
	audio.pause();
});