/* global xelib */

/**
 * Creates a new file `filename` and returns a handle to it.
 * @param {String} filename
 * @returns {Number}
 */
xelib.AddFile = function (filename) {return 0}

/**
 * Resolves the file with load order `loadOrder` and returns a handle to it.  Returns 0 if a matching file is not found.
 * @param {Number} loadOrder
 * @returns {Number}
 */
xelib.FileByLoadOrder = function (loadOrder) {return 0}

/**
 * Resolves the file with name equal to `filename` and returns a handle to it.  Returns 0 if a matching file is not found.
 * @param {String} filename
 * @returns {Number}
 */
xelib.FileByName = function (filename) {return 0}

/**
 * Resolves the file with author equal to `author` and returns a handle to it.  Returns 0 if a matching file is not found.
 * @param {String} author
 * @returns {Number}
 */
xelib.FileByAuthor = function (author) {return 0}

/**
 * Removes all records and groups in file `id`.
 * @param {Number} id
 */
xelib.NukeFile = function (id) {}

/**
 * Renames file `id` to `newFileName`.
 * @param {Number} id
 * @param {String} newFileName
 */
xelib.RenameFile = function (id, newFileName) {}

/**
 * Saves file to `filePath`.  Passing an empty string for `filePath` indicates the file should be saved in the game data folder to `{filename}.esp`.
 * @param {Number} id
 * @param {String} filePath File path to save the file to.  Default empty string.
 */
xelib.SaveFile = function (id, filePath = '') {}

/**
 * Returns the number of records in file `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetRecordCount = function (id) {return 0}

/**
 * Returns the number of override records in file `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetOverrideRecordCount = function (id) {return 0}

/**
 * Returns the MD5 Hash of file `id`.
 * @param {Number} id
 * @returns {String}
 */
xelib.MD5Hash = function (id) {return ''}

/**
 * Returns the CRC Hash of file `id`.
 * @param {Number} id
 * @returns {String}
 */
xelib.CRCHash = function (id) {return ''}

/**
 * Returns the load order of file `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetFileLoadOrder = function (id) {return 0}

/**
 * Returns a handle to the file header of file `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetFileHeader = function (id) {return 0}
