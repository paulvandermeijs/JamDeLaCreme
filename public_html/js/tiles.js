(function() {
  var elm, i, list, randomColor, template, texts, _i, _j, _len, _ref;

  list = document.getElementById('list');

  template = Handlebars.compile(document.getElementById('listItem').innerHTML);

  randomColor = function() {
    var chars, color;
    chars = '0123456789ABCDEF'.split('');
    color = '#';
    while (color.length < 7) {
      color += chars[Math.round(Math.random() * 15)];
    }
    return color;
  };

  texts = ['Meow!', 'Purrr!'];

  for (i = _i = 0; _i <= 60; i = ++_i) {
    list.innerHTML += template({
      image: (i % 15) + 1,
      color: randomColor(),
      text: texts[Math.floor(Math.random() * texts.length)]
    });
  }

  _ref = list.getElementsByTagName('a');
  for (_j = 0, _len = _ref.length; _j < _len; _j++) {
    elm = _ref[_j];
    elm.addEventListener('ontouchstart', function(e) {
      e.preventDefault();
      return this.classList.toggle('hover');
    });
  }

}).call(this);
