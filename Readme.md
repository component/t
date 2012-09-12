
# t

  tiny translation helper.

## Installation

    $ component install component/t

## API

### t(string, [object])

  Return a translatable `string`, with optional
  substitutions keyed in `object`.

```js
var t = require('t');

t('Hello');
// => "Hello"

t('Hello {name}', { name: 'Tobi' });
// => "Hello Tobi"
```

### t.lang()

  Get the current language code, for example "en".

### t.lang(code)

  Set language `code`.

### t.CODE = object

  Define translations, for example:

```js
t.es = {
  'Hello {name}': 'Hola {name}'
};

t('Hello {name}', { name: 'Tobi' });
// => "Hello Tobi"

t.lang('es');
t('Hello {name}', { name: 'Tobi' }).should.equal('Hola Tobi');
// => "Hola Tobi"
```

# License

  MIT

