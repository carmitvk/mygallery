function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
    $('#my-email-submit').click(function () {

        var email = document.getElementById('input-email').value;
        var subject = document.getElementById('input-subject').value;
        var body = document.getElementById('msg-body').value.replace(/\n/g,'%0d%0a');
        console.log(email);
        var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
        window.open(url);
    })
}

