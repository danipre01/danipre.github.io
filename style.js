<script type="text/javascript">
//SLIDESHOW A SCORRIMENTO AUTOMATICO
//by bored - http://ffmagazine.forumfree.it/?t=65226584
var slideJRadio = document.getElementById('slideshow').querySelectorAll('input[type="radio"]');
var eSlide = 1;
var slideJTime;
function setSlideTime(){
slideJTime = window.setInterval(function(){
if(eSlide === slideJRadio.length){
eSlide = 0;
}
slideJRadio[eSlide].checked = true;
eSlide++;
}, 4000);
}
setSlideTime();
document.getElementById('slideshow').onmouseover = function(){
window.clearInterval(slideJTime);
}
document.getElementById('slideshow').onmouseout = setSlideTime;
for(var i = 0; i < slideJRadio.length; i++){
slideJRadio[i].onclick=function(){
eSlide = this.id.match(/[0-9]+/) - 1;
}
}
</script>
