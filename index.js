
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
  if (!cache[str]) cache[str] = makeFunction(str);
  return cache[str](obj);
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
 * A cache for already generated functions
 */
var cache = {};

/**
 * Generate a reusable function from a string
 *
 * @param {String} str
 * @return {Function}
 * @api private
 */
function makeFunction(str) {
	var split = str.split(/(\{)([^{}}]+)\}/g);
	var tries = [];
	var exprs = [];
	for (var i = 0; i < split.length; i++) {
		var path = split[i];
		if (path === '{') {
			path = split[++i];
			var expr;
			var orig = JSON.stringify(path);
			try {
				new Function('_', 'return _.' + path);
				tries.push('var val' + i + ' = _.' + path);
				expr = 'val' + i;
			} catch (e) {
				expr = '_[' + orig + ']';
			}
			orig = '"{' + orig.substring(1, orig.length - 1) + '}"';
			exprs.push('(val = ' + expr + ', typeof val !== "undefined" ? val : ' + orig + ')');
			continue;
		}
		exprs.push(JSON.stringify(path));
	}
	if (tries.length) {
		tries = 'try { ' + tries.join('; } catch (e) {}\ntry { ') + '; } catch (e) {}';
	}
	return new Function('_', 'var val;\n' + tries + '\nreturn [\n  ' + exprs.join(',\n  ') + '\n].join("");');
}

