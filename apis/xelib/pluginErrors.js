/* global xelib */

/**
 * Starts a background thread which checks for errors in `id`.
 * @param {Number} id
 */
xelib.CheckForErrors = function (id) {}

/**
 * Returns true if the error thread started by `CheckForErrors` is done.
 * @returns {Boolean}
 */
xelib.GetErrorThreadDone = function () {return false}
