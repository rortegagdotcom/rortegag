const success = 'El mensaje se ha envido correctamente';

const error = 'Hubo un error al enviar el mensaje';

function send () {
    document.getElementById('send').setAttribute('disabled', '');
    document.getElementById('send').innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando'
    emailjs.send('service_3l08dxf','template_0ysu99a',{
        from_name: document.querySelector('#your-name').value,
        to_name: document.querySelector('#your-email').value,
        message: document.querySelector('#your-message').value,
        email_to: 'raulortegagallego48@hotmail.es',
    }).then(response => {
        console.log('Success', response.status);
        var msg = document.getElementById('msg').innerHTML = success;
        var msgDiv = document.getElementById('status');
        msgDiv.className += ' show';
        document.getElementById('send').removeAttribute('disabled');
        document.getElementById('send').innerHTML = 'Enviar';
    },(error) => {
        console.log(error);
        var msg = document.getElementById('msg').innerHTML = error;
        var msgDiv = document.getElementById('status');
        msgDiv.className += ' show';
        document.getElementById('send').removeAttribute('disabled');
        document.getElementById('send').innerHTML = 'Enviar'
    })
}
document.querySelector('#send').addEventListener('click', send);