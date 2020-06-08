/* global xelib */

/**
 * Returns element `id` as a JSON string.
 * @param {Number} id
 * @returns {String}
 */
xelib.ElementToJSON = function (id) {return ''}

/**
 * Returns element `id` as a JavaScript object.
 * @param {Number} id
 * @returns {Number}
 */
xelib.ElementToObject = function (id) {return null}

/**
 * Creates elements by deserializing `json` in the context of `id` at `path`.
 * @param {Number} id
 * @param {String} path
 * @param {String} json
 */
xelib.ElementFromJSON = function (id, path, json) {}

/**
 * Creates elements from `obj` in the context of `id` at `path`.
 * @param {Number} id
 * @param {String} path
 * @param {Number} obj
 */
xelib.ElementFromObject = function (id, path, obj) {}
