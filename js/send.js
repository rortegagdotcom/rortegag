var nameOK = !0,
  emailOK = !0,
  messageOK = !0;
const success = 'El mensaje se ha envido correctamente',
  error = 'Hubo un error al enviar el mensaje';
function send() {
  var e = document.getElementById('your-name').value,
    t = document.getElementById('your-email').value,
    n = document.getElementById('your-message').value;
  if (0 == e.length) {
    var s = 'El nombre está vacío';
    console.log(s),
      (document.getElementById('msg').innerHTML = s),
      (document.getElementById('msg').className += ' text-danger'),
      (document.getElementById('status').className += ' show'),
      document.getElementById('send').removeAttribute('disabled'),
      (document.getElementById('send').innerHTML = 'Enviar');
  } else if (0 == t.length) {
    s = 'El email está vacío';
    console.log(s),
      (document.getElementById('msg').innerHTML = s),
      (document.getElementById('msg').className += ' text-danger'),
      (document.getElementById('status').className += ' show'),
      document.getElementById('send').removeAttribute('disabled'),
      (document.getElementById('send').innerHTML = 'Enviar');
  } else if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      t
    )
  )
    if (0 == n.length) {
      s = 'El mensaje está vacío';
      console.log(s),
        (document.getElementById('msg').innerHTML = s),
        (document.getElementById('msg').className += ' text-danger'),
        (document.getElementById('status').className += ' show'),
        document.getElementById('send').removeAttribute('disabled'),
        (document.getElementById('send').innerHTML = 'Enviar');
    } else
      document.getElementById('send').setAttribute('disabled', ''),
        (document.getElementById('send').innerHTML =
          '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando'),
        emailjs
          .send('service_ladg7ha', 'template_y8zgx8s', {
            from_name: document.querySelector('#your-name').value,
            to_name: document.querySelector('#your-email').value,
            message: document.querySelector('#your-message').value,
            email_to: 'raulortegagallego48@gmail.com',
          })
          .then(
            (e) => {
              console.log('Success', e.status),
                (document.getElementById('msg').innerHTML = success),
                (document.getElementById('msg').className -= 'text-danger'),
                (document.getElementById('msg').className +=
                  ' fs-5 text-center rog-text-default text-success'),
                (document.getElementById('status').className += ' show'),
                document.getElementById('send').removeAttribute('disabled'),
                (document.getElementById('send').innerHTML = 'Enviar');
            },
            (e) => {
              console.log(e),
                (document.getElementById('msg').innerHTML = e),
                (document.getElementById('status').className += ' show'),
                document.getElementById('send').removeAttribute('disabled'),
                (document.getElementById('send').innerHTML = 'Enviar');
            }
          );
  else {
    var s = 'El email no es correcto';
    console.log(s),
      (document.getElementById('msg').innerHTML = s),
      (document.getElementById('msg').className += ' text-danger'),
      (document.getElementById('status').className += ' show'),
      document.getElementById('send').removeAttribute('disabled'),
      (document.getElementById('send').innerHTML = 'Enviar');
  }
}
document.querySelector('#send').addEventListener('click', send);
