(function() {
  var elements, elm, i, list, randomColor, template, texts, _i, _j, _len,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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

  if (__indexOf.call(document.windowElement, 'ontouchstart') >= 0) {
    elements = list.getElementsByTagName('a');
    for (_j = 0, _len = elements.length; _j < _len; _j++) {
      elm = elements[_j];
      elm.addEventListener('click', function(e) {
        var _elm, _k, _len1;
        if (this.classList.contains('hover')) {
          return;
        }
        e.preventDefault();
        for (_k = 0, _len1 = elements.length; _k < _len1; _k++) {
          _elm = elements[_k];
          _elm.classList.remove('hover');
        }
        return this.classList.add('hover');
      });
    }
  }

}).call(this);
