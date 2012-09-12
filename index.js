
/**
 * Expose `t`.
 */

module.exports = t;

/**
 * Translate the given `str` with substitions
 * provided in `obj`.
 *
 * @param {String} str
 * @param {Object} obj
 * @return {String}
 * @api public
 */

function t(str, obj){
  obj = obj || {};
  return str.replace(/\{([^}]+)\}/g, function(_, name){
    return obj[name] || _;
  });
}