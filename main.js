// DOM ELEMENTS
const menuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

const closeMenuBtn = document.getElementById('closeBtn');
const mobileOverlay = document.getElementById('mobileOverlay');


// Default
mobileMenu.classList.add('toggleClass');
closeMenuBtn.classList.add('toggleClass');
mobileOverlay.classList.add('toggleClass');

menuBtn.addEventListener('click', function(e){
    e.preventDefault();
    mobileMenu.classList.remove('toggleClass');
    menuBtn.style.display='none';
    closeMenuBtn.classList.remove('toggleClass');
    mobileOverlay.classList.remove('toggleClass');
   
    
});

closeMenuBtn.addEventListener('click', function(e){
    e.preventDefault();
    mobileMenu.classList.add('toggleClass');
    menuBtn.style.display='block';
    closeMenuBtn.classList.add('toggleClass');
    mobileOverlay.classList.add('toggleClass');
})

