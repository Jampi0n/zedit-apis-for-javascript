/* global xelib */

/**
 * Removes unnecessary masters from file `id`.
 * @param {Number} id
 */
xelib.CleanMasters = function (id) {}

/**
 * Orders the masters in file `id` based on the order in which they are loaded.
 * @param {Number} id
 */
xelib.SortMasters = function (id) {}

/**
 * Adds master `filename` to file `id` if missing.
 * @param {Number} id
 * @param {String} filename
 */
xelib.AddMaster = function (id, filename) {}

/**
 * Adds masters to file `id2` which are required when copying element `id` to it.  Set `asNew` to true when copying `id` as a new record.
 * @param {Number} id Handle of the element to determine required masters for.
 * @param {Number} id2 Handle of the file to add required masters to.
 * @param {Boolean} asNew Default false.
 */
xelib.AddRequiredMasters = function (id, id2, asNew = false) {}

/**
 * Returns an array of handles for the master files of file `id`.
 * @param {Number} id
 * @returns {Array}
 */
xelib.GetMasters = function (id) {return []}

/**
 * Returns an array of the master filenames of the file `id`.
 * @param {Number} id
 * @returns {Array}
 */
xelib.GetMasterNames = function (id) {return []}

/**
 * Adds all files loaded before file `id` as masters to it.
 * @param {Number} id
 */
xelib.AddAllMasters = function (id) {}

/**
 * Returns an array of the filenames of files loaded before file `id` that aren't already masters for it.
 * @param {Number} id
 * @returns {Array}
 */
xelib.GetAvailableMasters = function (id) {return []}
