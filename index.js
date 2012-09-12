
module.exports = function(str, obj){
  obj = obj || {};
  return str.replace(/\{([^}]+)\}/, function(_, name){
    return obj[name] || _;
  });
};