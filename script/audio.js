/*$(function () {
    $('audio').on('play', function () {
        $('audio').addClass('stoped').removeClass('playing');
        $(this).removeClass('stoped').addClass('playing');
        $('.stoped').each(function () {
            $(this).trigger('pause');
            $(this)[0].currentTime = 0;
        })
    })
})*/

document.getElementById('myPlayer1').volume = 0.3;
document.getElementById('myPlayer2').volume = 0.3;
document.getElementById('myPlayer3').volume = 0.3;
document.getElementById('myPlayer4').volume = 0.3;
document.getElementById('myPlayer5').volume = 0.3;
document.getElementById('myPlayer6').volume = 0.3;
var a=document.getElementsByTagName("audio");
 
function other_pause(b){
    for(i=0;i<a.length;i++){
        if(!(i==b)){a[i].pause()}
    }
}

document.getElementById('myPlayer1').addEventListener('ended', function(){
    document.getElementById('myPlayer2').play();
}, false);

document.getElementById('myPlayer2').addEventListener('ended', function(){
    document.getElementById('myPlayer3').play();
}, false);

document.getElementById('myPlayer3').addEventListener('ended', function(){
    document.getElementById('myPlayer4').play();
}, false);

document.getElementById('myPlayer4').addEventListener('ended', function(){
    document.getElementById('myPlayer5').play();
}, false);

document.getElementById('myPlayer5').addEventListener('ended', function(){
    document.getElementById('myPlayer6').play();
}, false);

document.getElementById('myPlayer6').addEventListener('ended', function(){
    document.getElementById('myPlayer1').play();
}, false);