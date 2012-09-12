
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
})