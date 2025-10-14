// Select all sliders
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slides img');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentIndex = 0;

    // Function to display current slide
    function showSlide(index){
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Initialize first slide
    showSlide(currentIndex);

    // Previous button click
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Next button click
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active'); // show/hide navbar on click
};

// Optional: scroll effect active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
};
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

document.querySelectorAll('.slides img').forEach(img => {
    img.addEventListener('click', () => {
        modal.innerHTML = `<span class="close">&times;</span><img src="${img.src}" class="modal-img">`;
        modal.style.display = 'flex';

        modal.querySelector('.close').onclick = () => {
            modal.style.display = 'none';
        };
    });
});
// index.js
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    emailjs.sendForm('service_iyb026z', 'template_07z3w85', this, '2XB2rXQTafdmWCIrnY')
    .then(() => {
        alert('Message sent successfully!');
        this.reset();
    }, (err) => {
        alert('Failed to send message. Please try again.');
        console.log(err);
    });
});
