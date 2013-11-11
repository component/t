
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
  })

  it('should utilize language definitions', function(){
    t.es = { 'Hello': 'Hola' };
    t.lang().should.equal('en');
    t('Hello', 'es').should.equal('Hola');
  })

  it('should replace tokens and utilize language definitions', function(){
    t.es = { 'Hello {name}': 'Hola {name}' };
    t.lang().should.equal('en');
    t('Hello {name}', { name: 'Tobi' }, 'es').should.equal('Hola Tobi');
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