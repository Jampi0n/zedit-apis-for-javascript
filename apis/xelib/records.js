/* global xelib */

xelib.conflictThis = {
  ctUnknown: 0,
  ctIgnored: 1,
  ctNotDefined: 2,
  ctIdenticalToMaster: 3,
  ctOnlyOne: 4,
  ctHiddenByModGroup: 5,
  ctMaster: 6,
  ctConflictBenign: 7,
  ctOverride: 8,
  ctIdenticalToMasterWinsConflict: 9,
  ctConflictWins: 10,
  ctConflictLoses: 11,
}

xelib.conflictAll = {
  caUnknown: 0,
  caOnlyOne: 1,
  caNoConflict: 2,
  caConflictBenign: 3,
  caOverride: 4,
  caConflict: 5,
  caConflictCritical: 6,
}

/**
 * Returns the form ID of the record `id`.
 * @param {Number} id Record to get the form ID of.
 * @param {Boolean} native Pass true to get the native file form ID of the record.  Default false.
 * @param {Boolean} local Pass true to get the 6-digit local form ID of the record.  This formID is only meaningful when used with master records.  Default false.
 * @returns {Number}
 */
xelib.GetFormID = function (id, native = false, local = false) {return 0}

/**
 * Returns the form ID of the record `id` as a hexadecimal string.
 * @param {Number} id Record to get the form ID of.
 * @param {Boolean} native Pass true to get the native file form ID of the record.  Default false.
 * @param {Boolean} local Pass true to get the 6-digit local form ID of the record.  This formID is only meaningful when used with master records.  Default false.
 * @returns {String}
 */
xelib.GetHexFormID = function (id, native = false, local = false) {return ''}

/**
 * Returns the form ID of the record `id` as a hexadecimal string.
 * @param {Number} id
 * @param {Number} newFormID
 * @param {Boolean} native Pass true to set the native file formID of the record.  Default false.
 * @param {Boolean} fixReferences Pass true to change references to the record to point to the new form ID.  Note: This only works on references to the record that have been built. Default true.
 * @returns {String}
 */
xelib.SetFormID = function (
  id, newFormID, native = false, fixReferences = true) {return ''}

/**
 * Returns a handle to the record matching `formID` in `id`.  Pass `0` as `id` and a load order `formID` to perform a lookup by load order form ID.  Pass a file handle as `id` and a file `formID` to perform a lookup by native (file) form ID.
 * @param {Number} id File to get the record from.
 * @param {Number} formID Form ID of the record to lookup.
 * @returns {Number}
 */
xelib.GetRecord = function (id, formID) {return 0}

/**
 * Returns an array of all records matching `search` found in `id`.  Pass `0` for `id` to search all loaded files.
 * @param {Number} id Element to get records from.
 * @param {String} search Comma separated list of record signatures to search for.
 * @param {Boolean} includeOverrides Pass true to include override records.  Default false.
 * @returns {Array}
 */
xelib.GetRecords = function (id, search, includeOverrides = false) {return []}

/**
 * Returns an array of all REFR records referencing base records with signatures in `search` found within `id`.  See the `GetREFRs` options documentation for more information.
 * @param {Number} id Element to get REFRs from.
 * @param {String} search Comma separated list of base record signatures to search for.
 * @param {Number} opts Object with options to use when searching for REFRs.  See the `GetREFRs` options documentation for more information.
 * @returns {Array}
 */
xelib.GetREFRs = function (id, search, opts) {return []}

/**
 * Returns an array of handles corresponding to the overrides of record `id`.
 * @param {Number} id Record to get overrides for.
 * @returns {Array}
 */
xelib.GetOverrides = function (id) {return []}

/**
 * Returns a handle for the master record of `id`.  Returns a new handle to record `id` if it is a master record.
 * @param {Number} id Record to get master for.
 * @returns {Number}
 */
xelib.GetMasterRecord = function (id) {return 0}

/**
 * Returns a handle for the winning override of record `id` in the masters of file `id2`.
 * @param {Number} id Record to get previous override for.
 * @param {Number} id2 File to get previous override for.
 * @returns {Number}
 */
xelib.GetPreviousOverride = function (id, id2) {return 0}

/**
 * Returns a handle for the winning override of record `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetWinningOverride = function (id) {return 0}

/**
 * Returns a handle for the file that record `id` is injected into.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetInjectionTarget = function (id) {return 0}

/**
 * Returns the next record after `id` which matches `search`.  Returns `0` if no match is found.
 * @param {Number} id Element to start the search from.
 * @param {String} search String to search for.
 * @param {Boolean} byEdid Pass true to search record Editor IDs.
 * @param {Boolean} byName Pass true to search record FULL Names.
 * @returns {Number}
 */
xelib.FindNextRecord = function (id, search, byEdid, byName) {return 0}

/**
 * Returns the previous record before `id` which matches `search`.  Returns `0` if no match is found.
 * @param {Number} id Element to start the search from.
 * @param {String} search String to search for.
 * @param {Boolean} byEdid Pass true to search record Editor IDs.
 * @param {Boolean} byName Pass true to search record FULL Names.
 * @returns {Number}
 */
xelib.FindPreviousRecord = function (id, search, byEdid, byName) {return 0}

/**
 * Returns up to `limitTo` records matching `signature` which can be referenced by the file containing `id`.  Excludes results which do not contain `search` in their `LongName`.
 * @param {Number} id Element to target when searching for valid references.
 * @param {String} signature Record signature to search for.
 * @param {String} search String to search for.
 * @param {Number} limitTo Maximum results to find.
 * @returns {Array}
 */
xelib.FindValidReferences = function (
  id, signature, search, limitTo) {return []}

/**
 * Returns an array of the records that reference record `id`.  References must be built with [xelib.BuildReferences](docs://Development/APIs/xelib/Setup) to be returned.
 * @param {Number} id
 * @returns {Array}
 */
xelib.GetReferencedBy = function (id) {return []}

/**
 * Exchanges all references to `oldFormID` with references to `newFormID` on record `id`.
 * @param {Number} id
 * @param {Number} oldFormID
 * @param {Number} newFormID
 */
xelib.ExchangeReferences = function (id, oldFormID, newFormID) {}

/**
 * Returns true if record `id` is a master record.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.IsMaster = function (id) {return false}

/**
 * Returns true if record `id` is an injected record.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.IsInjected = function (id) {return false}

/**
 * Returns true if record `id` is an override record.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.IsOverride = function (id) {return false}

/**
 * Returns true if record `id` is a winning override record.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.IsWinningOverride = function (id) {return false}

/**
 * Returns a handle pointing to a node tree for `rec`.  The handle returned by this function must be freed with `xelib.ReleaseNodes`.  NOTE: Can be slow for very large records like NAVI.
 * @param {Number} rec Record to get nodes for.
 * @returns {Number}
 */
xelib.GetNodes = function (rec) {return 0}

/**
 * Returns the `ConflictAll` and `ConflictThis` values for `element`.  Pass a handle for a node tree retrieved using `GetNodes` for `nodes` if you plan on calling this function for more than one element from the same record.  NOTE: Can be slow for very large records like NAVI.
 * @param {Number} nodes The node tree to get conflict data from.  Pass 0 to build any necessary conflict information.
 * @param {Number} element The element to get conflict data about.
 * @param {Boolean} asString Default false.  If set to true, ConflictAll and ConflictThis values are converted to strings.
 * @returns {Array}
 */
xelib.GetConflictData = function (nodes, element, asString = false) {return []}

/**
 * Returns handles for the element children of `element`.  You must pass a handle for a node tree retrieved using `GetNodes` to `nodes`.  Note that this is different from `xelib.GetElements` in that it returns an array with null handles in it as placeholders for unassigned elements.
 * @param {Number} nodes The node tree to get elements from.
 * @param {Number} element The element to get node element children for.
 * @returns {Array}
 */
xelib.GetNodeElements = function (nodes, element) {return []}
