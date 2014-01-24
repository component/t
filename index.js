
/**
 * Current language.
 */

var _lang = 'en';

/**
 * Expose `t`.
 */

exports = module.exports = t;

/**
 * Translate the given `str` with substitions
 * provided in `obj` using language `lang`.
 *
 * @param {String} str
 * @param {Object} [obj]
 * @param {String} [lang]
 * @return {String}
 * @api public
 */

function t(str, obj, lang){
  if ('string' == typeof obj) {
    lang = obj;
    obj = {};
  } else {
    obj = obj || {};
  }
  lang = lang || _lang;
  if (t[lang]) str = t[lang][str] || str;
  return str.replace(/\{([^{}}]+)\}/g, function(_, name){
    var value = get(name, obj);
    return typeof value !== 'undefined' ? value : _;
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
  if (0 == arguments.length) return _lang;
  _lang = code;
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

