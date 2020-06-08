/* global xelib */

/**
 * Returns the editor ID of record `id`.  Returns an empty string if the record does not have an editor ID.
 * @param {Number} id
 * @returns {String}
 */
xelib.EditorID = function (id) {return ''}

/**
 * Returns the FULL name of record `id`.  Returns an empty string if the record does not have an FULL name.
 * @param {Number} id
 * @returns {String}
 */
xelib.FullName = function (id) {return ''}

/**
 * Translates record `id` by `vector`.
 * @param {Number} id Handle of a record which is a placed object.
 * @param {Number} vector Object with X, Y, and Z float properties.
 */
xelib.Translate = function (id, vector) {}

/**
 * Rotates record `id` by `vector` degrees.
 * @param {Number} id Handle of a record which is a placed object.
 * @param {Number} vector Object with X, Y, and Z float properties.
 */
xelib.Rotate = function (id, vector) {}

/**
 * Gets the state of record flag `name` on record `id`.
 * @param {Number} id
 * @param {String} name
 * @returns {Boolean}
 */
xelib.GetRecordFlag = function (id, name) {return false}

/**
 * Sets record flag `name` on record `id` to `state`.
 * @param {Number} id
 * @param {String} name
 * @param {Boolean} state
 */
xelib.SetRecordFlag = function (id, name, state) {}
