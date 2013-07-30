
/**
 * Current language.
 */

var lang = 'en';

/**
 * Expose `t`.
 */

exports = module.exports = t;

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
  if (t[lang]) str = t[lang][str] || str;
  return str.replace(/\{([^}]+)\}/g, function(_, name){
    return get(name, obj) || _;
  });
}

/**
 * Get / set language `code`.
 *
 * @param {String} code
 * @return {String}
 * @api public
 */

exports.lang = function(code){
  if (0 == arguments.length) return lang;
  lang = code;
};

/**
 * Get Object's path value
 *
 * @param {String} path
 * @param {Object} obj
 * @return {Mixed}
 * @api private
 */

function get (path, obj) {
  return new Function('_', 'return _.' + path)(obj);
}