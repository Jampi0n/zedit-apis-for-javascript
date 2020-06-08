/* global xelib */

/**
 * Returns the name of `id`.  Note: This is not the same as XEdit's `Name` function - `LongName` is.
 * @param {Number} id
 * @returns {String}
 */
xelib.Name = function (id) {return ''}

/**
 * Identical to the `Name` function from XEdit scripting.
 * @param {Number} id
 * @returns {String}
 */
xelib.LongName = function (id) {return ''}

/**
 * Returns the name of `id` used for display purposes in ZEdit's user interface.
 * @param {Number} id
 * @returns {String}
 */
xelib.DisplayName = function (id) {return ''}

/**
 * Returns the path to `id`.  All paths returned from this function can be used with `GetElement`.
 * @param {Number} id
 * @returns {String}
 */
xelib.Path = function (id) {return ''}

/**
 * Returns a fully qualified path to `id`.  All paths returned from this function can be used with `GetElement`.
 * @param {Number} id
 * @returns {String}
 */
xelib.LongPath = function (id) {return ''}

/**
 * Returns the path of `id` within a its parent record.  All paths returned from this function can be used with `GetElement`.
 * @param {Number} id
 * @returns {String}
 */
xelib.LocalPath = function (id) {return ''}

/**
 * Returns the signature of `id`.
 * @param {Number} id
 * @returns {String}
 */
xelib.Signature = function (id) {return ''}

/**
 * Returns the sort key of `id`.
 * @param {Number} id
 * @returns {String}
 */
xelib.SortKey = function (id) {return ''}

/**
 * Returns the editor value at `path`.  This is the same value displayed in the record view.  Returns an empty string if `path` does not exist.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {String}
 */
xelib.GetValue = function (id, path) {return ''}

/**
 * Sets the editor value at `path` to `value`.  This is the same value displayed in the record view.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} value Value to apply.
 */
xelib.SetValue = function (id, path, value) {}

/**
 * Returns the native integer value at `path`.  Returns 0 if `path` does not exist.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Number}
 */
xelib.GetIntValue = function (id, path) {return 0}

/**
 * Sets the native integer value at `path` to `value`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {Number} value Value to apply.
 */
xelib.SetIntValue = function (id, path, value) {}

/**
 * Returns the native unsigned integer value at `path`.  Returns 0 if `path` does not exist.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Number}
 */
xelib.GetUIntValue = function (id, path) {return 0}

/**
 * Sets the native unsigned integer value at `path` to `value`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {Number} value Value to apply.
 */
xelib.SetUIntValue = function (id, path, value) {}

/**
 * Returns the native float value at `path`.  Returns 0.0 if `path` does not exist.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Number}
 */
xelib.GetFloatValue = function (id, path) {return 0.0}

/**
 * Sets the native float value at `path` to `value`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {Number} value Value to apply.
 */
xelib.SetFloatValue = function (id, path, value) {}

/**
 * Resolves the flags element at `path`, and sets flag `name` to `state`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} name Flag to set.
 * @param {Boolean} state True to enable the flag, false to disable it.
 */
xelib.SetFlag = function (id, path, name, state) {}

/**
 * Resolves the flags element at `path`, and gets the state of flag `name`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} name Name of the flag to get.
 * @returns {Boolean}
 */
xelib.GetFlag = function (id, path, name) {return false}

/**
 * Resolves the flags element at `path` and returns an array of the names of the enabled flags on it.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Array}
 */
xelib.GetEnabledFlags = function (id, path) {return []}

/**
 * Resolves the flags element at `path` and sets the enabled flags to `flags`.  Note: This disables any active flags that are not in `flags`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {Array} flags Flags to enable.
 */
xelib.SetEnabledFlags = function (id, path, flags) {}

/**
 * Resolves the flags element at `path` and returns an array of the names of all of the flags it supports.  Flag positions in the array indicate the binary bits they corresponds to.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Array}
 */
xelib.GetAllFlags = function (id, path) {return []}

/**
 * Resolves the enumeration element at `path` and returns an array of the options it supports.  Enumeration positions in the array indicate the binary bits they corresponds to.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Array}
 */
xelib.GetEnumOptions = function (id, path) {return []}
