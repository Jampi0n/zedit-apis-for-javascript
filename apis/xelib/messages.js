/* global xelib */

/**
 * Gets any messages that have been added to XEditLib's internal log since the last time this function was called.
 * @returns {String}
 */
xelib.GetMessages = function () {return ''}

/**
 * Clears all messages from the XEditLib's internal log.
 */
xelib.ClearMessages = function () {}

/**
 * Returns a message corresponding to the last exception that occurred.  Returns an empty string if no exception has occurred since the last time this function was called.
 * @returns {String}
 */
xelib.GetExceptionMessage = function () {return ''}
