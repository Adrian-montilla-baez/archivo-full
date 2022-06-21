window.addEventListener('scroll', function (){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const box = document.querySelectorAll(".acordion-box");
box.forEach(box => {
    box.addEventListener("click", () => {
       box.classList.toggle("acordion-active");
    });
});

$('button').click(function(){
    $('.alert').removeClass("hide");
    $('.alert').addClass("show");
    $('.alert').addClass("showAlert");
    setTimeout(function(){
    $('.alert').addClass("hide");
    $('.alert').removeClass("show");
    },5000);
});

$('.close-btn').click(function(){
    $('.alert').addClass("hide");
    $('.alert').removeClass("show");
});

function popupToggle(){
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}