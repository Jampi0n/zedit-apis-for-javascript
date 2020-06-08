/* global xelib */

/**
 * Returns true if group `signature` is present in file `id`.
 * @param {Number} id
 * @param {String} signature
 * @returns {Boolean}
 */
xelib.HasGroup = function (id, signature) {return false}

/**
 * Adds the group `signature` to file `id` if missing and returns a handle to it.
 * @param {Number} id
 * @param {String} signature
 * @returns {Number}
 */
xelib.AddGroup = function (id, signature) {return 0}

/**
 * Returns a handle to the child group of `id`.  Returns `0` if `id` does not have a child group.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetChildGroup = function (id) {return 0}
