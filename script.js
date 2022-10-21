
function hover(element) {
  element.setAttribute('src', 'img/invjoin.png');
  console.log("join true");
}
function unhover(element) {
  if element.id == "join" {
    element.setAttribute('src', 'img/joinbutton.png');
  }
}
							