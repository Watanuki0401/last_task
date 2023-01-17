window_load();
window.onresize = window_load;

function window_load(){
  if(window.innerWidth <= 700){
    if(document.querySelector(".HBGBTN") === null) hmgbtn();
  } else { 
    delbtn();
  }
}

function hmgbtn(btn) {
  let insert_element = document.querySelector(".header");

  var new_element = document.createElement('div');
  new_element.classList = "HBGBTN"
  new_element.insertAdjacentHTML('afterbegin', '<button class="trigger" onclick="hum();"><span></span><span></span><span></span></button>');

  insert_element.appendChild(new_element);

  var hoge = document.querySelector('.HBGBTN');
  var space = document.createElement('div');
  space.classList = "hoge";
  insert_element.insertBefore(space, hoge);
}

function delbtn() {
  let target = document.querySelector(".HBGBTN");
  if( target === null) return;
  target.remove();
  document.querySelector(".hoge").remove();
}

function hum(){
  let btn = document.querySelector(".trigger");
  btn.classList.toggle('active');
}
