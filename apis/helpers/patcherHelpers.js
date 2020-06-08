/* global xelib */

/**
 * Helper function which allows you to load records from the files your patcher is targeting.
 * @param {String} search Records to search for.  See xelib.GetRecords for more information.
 * @param {Boolean} includeOverrides Pass true to load both master and override records.  Default false.
 * @returns {Array}
 */
xelib.loadRecords = function (search, includeOverrides = false) {return []}

/**
 * Helper function for copying records to your patch plugin without using a process block.  Useful for copying globals and other individual records.  It's recommended to prefer process blocks over this function.
 * @param {Number} rec Record to copy.
 * @param {Boolean} asNew Whether or not to copy the record to the patch file as a new record.  Default false.
 * @returns {Number}
 */
xelib.copyToPatch = function (rec, asNew = false) {return 0}

/**
 * Contains the settings of all patchers, with each patcher's settings in a property corresponding to their id.  Use this if you need to change your patcher's behavior when a user is using another patcher.
 */
xelib.allSettings = function () {}

/**
 * Call this function to print a message to the progress modal's log.
 * @param {String} message
 */
xelib.logMessage = function (message) {}

/**
 * Uses record consistency caching to make certain the input record `rec` stays at the same Form ID when the patch gets regenerated.  This function should be used on all records created by UPF patchers, excluding overrides.  The `id` should be a unique string value for the record.  It is recommended to use a unique prefix for `id` to avoid collisions with other patchers.  The record's editor ID will be set to `id` if the record has an Editor ID field.
 * @param {Number} rec
 * @param {String} id
 * @returns {Number}
 */
xelib.cacheRecord = function (rec, id) {return 0}

/**
 * Only available when `customProgress` is set in your patcher's execute block.  Adds `amount` to the progress bar.
 * @param {Number} amount
 */
xelib.addProgress = function (amount) {}
