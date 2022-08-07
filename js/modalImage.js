const certModalEl = document.getElementById('certModal');

certModalEl.addEventListener('show.bs.modal', function(event) {
  document.getElementById('certImage').src = event.relatedTarget.src;
});