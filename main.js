window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

$('#contact-form').submit(function(e) {
    var name = document.getElementById('#inputName'),
    email = document.getElementById('#inputEmail'),
    message = document.getElementById('#inputMessge');

    if(!name.value || !email.value || !message.value ) {
        alertify.error('Please check your entries')
    } else {
        $.ajax({
            url:"https://formspree.io/albinagossou@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('Message sent')
    }
})