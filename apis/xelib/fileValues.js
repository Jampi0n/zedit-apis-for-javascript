/* global xelib */

/**
 * Returns the Next Object ID of file `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetNextObjectID = function (id) {return 0}

/**
 * Sets the Next Object ID of file `id` to `nextObjectID`.
 * @param {Number} id
 * @param {Number} nextObjectID
 */
xelib.SetNextObjectID = function (id, nextObjectID) {}

/**
 * Returns the file name of file `id`.  This is equivalent to calling `Name(id)`.
 * @param {Number} id
 * @returns {String}
 */
xelib.GetFileName = function (id) {return ''}

/**
 * Returns the author of file `id`.
 * @param {Number} id
 * @returns {String}
 */
xelib.GetFileAuthor = function (id) {return ''}

/**
 * Sets the author of file `id` to `author`.
 * @param {Number} id
 * @param {String} author
 */
xelib.SetFileAuthor = function (id, author) {}

/**
 * Returns the description of file `id`.
 * @param {Number} id
 * @returns {String}
 */
xelib.GetFileDescription = function (id) {return ''}

/**
 * Sets the description of file `id` to `description`.
 * @param {Number} id
 * @param {String} description
 */
xelib.SetFileDescription = function (id, description) {}

/**
 * Returns the state of the ESM flag on file `id`.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.GetIsESM = function (id) {return false}

/**
 * Sets the the state of the ESM flag on file `id` to `state`.
 * @param {Number} id
 * @param {Boolean} state
 */
xelib.SetIsESM = function (id, state) {}
