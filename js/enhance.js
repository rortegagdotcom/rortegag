if(window.innerWidth < 435) {
    console.log(document.getElementById('home').innerHTML = '<i class="bi bi-house-door-fill fs-2"></i>');
    console.log(document.getElementById('aboutme').innerHTML = '<i class="bi bi-person-fill fs-2"></i>');
    console.log(document.getElementById('blog').innerHTML = '<i class="bi bi-card-heading fs-2"></i>');
    console.log(document.getElementById('contact').innerHTML = '<i class="bi bi-envelope-fill fs-2"></i>');
} else {
    console.log(document.getElementById('home').innerHTML = '<i class="bi bi-house-door-fill"></i>  Inicio</a>');
    console.log(document.getElementById('aboutme').innerHTML = '<i class="bi bi-person-fill"></i>  Sobre mí</a>');
    console.log(document.getElementById('blog').innerHTML = '<i class="bi bi-card-heading"></i>  Blog</a>');
    console.log(document.getElementById('contact').innerHTML = '<i class="bi bi-envelope-fill"></i>  Contacto</a>');
}