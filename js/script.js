let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('show');

}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('show');

    if(window.scrollY>60){
        document.querySelector('#scroll-top').classList.add('show');
    }else{
        document.querySelector('#scroll-top').classList.remove('show');
    }

}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload=fadeOut();
