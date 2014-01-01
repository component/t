
var t = require('..');

describe('t(str)', function(){
  it('should return the english string', function(){
    t('Hello').should.equal('Hello');
  })

  it('should replace tokens', function(){
    t('Hello {name}', { name: 'Tobi' }).should.equal('Hello Tobi');
    t('Hello {name}').should.equal('Hello {name}');
    t('{name} is {age} year(s) old', { name: 'Tobi', age: 2 })
      .should.equal('Tobi is 2 year(s) old');
    t('{name.first} is from {name.last}\'s family.', { name: { first: 'Tobi', last: 'Goldman' } })
      .should.equal('Tobi is from Goldman\'s family.');
  })

  it('should work with falsy values', function () {
    t('"{string}",{number}', {string: '', number: 0}).should.eql('"",0');
  })
})

describe('t.lang()', function(){
  it('should utilize language definitions', function(){
    t.es = { 'Hello {name}': 'Hola {name}' };
    t.lang('es');
    t.lang().should.equal('es');
    t('Hello {name}', { name: 'Tobi' }).should.equal('Hola Tobi');
  })
})
