
module.exports = function(str, obj){
  obj = obj || {};
  return str.replace(/\{([^}]+)\}/g, function(_, name){
    return obj[name] || _;
  });
};