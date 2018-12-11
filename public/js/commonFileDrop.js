var draghint = document.getElementById('draghint');
window.addEventListener('drop', function(event) {
      event.preventDefault();
      draghint.classList.remove('hover');
      for (var i=0; i< event.dataTransfer.files.length; i++) {
        var file = event.dataTransfer.files[i];
        var c = document.createElement('canvas');
        c.id='v64'+i;
        $('#v64').append(c);
        window.parseFile(file, c.id, false);
      }
      return false;
  });
  
  window.addEventListener('dragover', function(event) {
      event.preventDefault();
      draghint.classList.add('hover');
      return false;
  });
window.addEventListener('dragleave', function(event) {
  event.preventDefault();
  draghint.classList.remove('hover');
  return false;
});
window.addEventListener('focus', function() {
  return draghint.classList.remove('hover');
});
