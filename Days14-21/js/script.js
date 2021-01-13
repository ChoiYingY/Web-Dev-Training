function scrollToBottom(){
  document.body.scrollBottom!=0 || document.documentElement.scrollBottom!=0
  window.scrollBy(0,2000000);
}

function redirect(){
	var url = '';
	if(document.getElementById('more-proj-details-btn') !== null)
		url = "myProj.html";
	else if (document.getElementById('more-details-about-ME-btn') !== null)
		url = "background.html";
	window.location = url;
}

function display(src, p){
	let modal = document.getElementById("modal");
	modal.style.display = "block";
	let modal_img = document.getElementById("modal_img");
	modal_img.src = src;
	let modal_description = document.getElementById("modal_description");
	modal_description.innerHTML = p;
}

function closeModal(){
	let modal = document.getElementById("modal");
	modal.style.display = "none";
}

window.onclick = function(event) {
	var my_modal = document.getElementById('modal');
  if (event.target == my_modal) {
    my_modal.style.display = "none";
  }
}