function scrollToBottom() {
  document.body.scrollBottom!=0 || document.documentElement.scrollBottom!=0
  window.scrollBy(0,2000000);
}
function redirect(){
	var url = '';
	if(document.getElementById('more-proj-details-btn') !== null)
		url = "myProj.html";
	else if (document.getElementById('more-details-about-ME-btn') !== null)
		url = "selfIntro.html";
	window.location = url;
}
