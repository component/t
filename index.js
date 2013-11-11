
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
  }
  else {
    obj = obj || {};
  }
  lang = lang || _lang;
  if (t[lang]) str = t[lang][str] || str;
  return str.replace(/\{([^}]+)\}/g, function(_, name){
    return obj[name] || _;
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