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

  let create_element = document.querySelector(".wrapper");
  var new2_element = document.createElement('div');
  new2_element.classList = "Humlist";
  new2_element.insertAdjacentHTML('afterbegin', '<div class="Hs_menu"><li><a href="#Home">Home</a></li><li><a href="#Info">Info</a></li><li><a href="#Hobby">Hobby</a></li><li><a href="#Contact">Contact</a></li></div><div class="Hs_links"><li><a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a></li><li><a href="https://github.com/Watanuki0401"><i class="fa-brands fa-github"></i></a></li></div>');

  create_element.appendChild(new2_element);
}

function delbtn() {
  let target = document.querySelector(".HBGBTN");
  if( target === null) return;
  target.remove();
  document.querySelector(".hoge").remove();
  document.querySelector(".Humlist").remove();
}

function hum(){
  let menu = document.querySelector(".Humlist");
  let btn = document.querySelector(".trigger");
  menu.classList.toggle('active');
  btn.classList.toggle('active');
}