/* global xelib */

xelib.elementTypes = {
  etFile: 0,
  etMainRecord: 1,
  etGroupRecord: 2,
  etSubRecord: 3,
  etSubRecordStruct: 4,
  etSubRecordArray: 5,
  etSubRecordUnion: 6,
  etArray: 7,
  etStruct: 8,
  etValue: 9,
  etFlag: 10,
  etStringListTerminator: 11,
  etUnion: 12,
  etStructChapter: 13,
}

xelib.defTypes = {
  dtRecord: 0,
  dtSubRecord: 1,
  dtSubRecordArray: 2,
  dtSubRecordStruct: 3,
  dtSubRecordUnion: 4,
  dtString: 5,
  dtLString: 6,
  dtLenString: 7,
  dtByteArray: 8,
  dtInteger: 9,
  dtIntegerFormater: 10,
  dtIntegerFormaterUnion: 11,
  dtFlag: 12,
  dtFloat: 13,
  dtArray: 14,
  dtStruct: 15,
  dtUnion: 16,
  dtEmpty: 17,
  dtStructChapter: 18,
}

xelib.smashTypes = {
  stUnknown: 0,
  stRecord: 1,
  stString: 2,
  stInteger: 3,
  stFlag: 4,
  stFloat: 5,
  stStruct: 6,
  stUnsortedArray: 7,
  stUnsortedStructArray: 8,
  stSortedArray: 9,
  stSortedStructArray: 10,
  stByteArray: 11,
  stUnion: 12,
}

xelib.valueTypes = {
  vtUnknown: 0,
  vtBytes: 1,
  vtNumber: 2,
  vtString: 3,
  vtText: 4,
  vtReference: 5,
  vtFlags: 6,
  vtEnum: 7,
  vtColor: 8,
  vtArray: 9,
  vtStruct: 10,
}

/**
 * Returns true if an element exists at the given `path`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Boolean}
 */
xelib.HasElement = function (id, path) {return false}

/**
 * Resolves the element at `path` and returns a handle to it.  Returns 0 if the element is not found.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Number}
 */
xelib.GetElement = function (id, path) {return 0}

/**
 * Traverses `path`, creating any elements that are not found.  Returns a handle to the element at the end of the path.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Number}
 */
xelib.AddElement = function (id, path) {return 0}

/**
 * Traverses `path`, creating any elements that are not found.  Sets the value of the element at the end of the path to `value`, and returns a handle to it.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} value Value to set on added element.
 * @returns {Number}
 */
xelib.AddElementValue = function (id, path, value) {return 0}

/**
 * Removes the element at `path` if it exists.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 */
xelib.RemoveElement = function (id, path) {}

/**
 * Removes the element `id`.  If the element cannot be removed it gets its parent container and attempts to remove it.  This repeats until the container can be removed or the code reaches a main record.
 * @param {Number} id Handle of the element to remove.  Cannot be a file, group, or main record.
 */
xelib.RemoveElementOrParent = function (id) {}

/**
 * Assigns `id2` to `id`.  This is equivalent to drag and drop.
 * @param {Number} id Handle of the element to assign to.  Cannot be a file, group, or main record.
 * @param {Number} id2 Handle of the element to assign.  Cannot be a file, group, or main record.
 */
xelib.SetElement = function (id, id2) {}

/**
 * Returns an array of handles for all of the elements found in the container at `path`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {Boolean} sort Pass true if you want elements to be sorted according to the current SortMode.
 * @returns {Array}
 */
xelib.GetElements = function (id, path, sort) {return []}

/**
 * Returns an array of the names of all elements that can exist at `path`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Array}
 */
xelib.GetDefNames = function (id, path) {return []}

/**
 * Returns an array of the signatures that can be added to `id`.
 * @param {Number} id Handle to the element to get add list for.
 * @returns {Array}
 */
xelib.GetAddList = function (id) {return []}

/**
 * Returns the record referenced by the element at `path`.  Note: this returns the master of the record, ***not*** the winning override.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @returns {Number}
 */
xelib.GetLinksTo = function (id, path) {return 0}

/**
 * Sets the record referenced by the element at `path` to `id2`.
 * @param {Number} id Handle to start path resolution from.
 * @param {Number} id2 Record to set the reference to.
 * @param {String} path Path to resolve.
 */
xelib.SetLinksTo = function (id, id2, path) {}

/**
 * Returns a handle to the container of `id`.  Returns 0 on failure.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetContainer = function (id) {return 0}

/**
 * Returns a handle to the file `id` belongs to.
 * @param {Number} id
 * @returns {Number}
 */
xelib.GetElementFile = function (id) {return 0}

/**
 * Returns the number of element children `id` has.
 * @param {Number} id
 * @returns {Number}
 */
xelib.ElementCount = function (id) {return 0}

/**
 * Returns true if `id` and `id2` refer to the same element.
 * @param {Number} id
 * @param {Number} id2
 * @returns {Boolean}
 */
xelib.ElementEquals = function (id, id2) {return false}

/**
 * Returns true if the value at `path` matches `value`.  When the element at `path` contains a reference, `value` can be a Form ID, Editor ID, or FULL Name.  FULL Names passed to this function must be surrounded by double quotes.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} value Value to match.
 * @returns {Boolean}
 */
xelib.ElementMatches = function (id, path, value) {return false}

/**
 * Returns true if the array at `path` contains an item which matches `value` at `subpath`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} subpath Subpath to resolve in each array item.
 * @param {String} value Array item value to match.
 * @returns {Boolean}
 */
xelib.HasArrayItem = function (id, path, subpath, value) {return false}

/**
 * Returns the first item in the array at `path` which matches `value` at `subpath`.  Returns 0 if no matching element is found.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} subpath Subpath to resolve in each array item.
 * @param {String} value Array item value to match.
 * @returns {Number}
 */
xelib.GetArrayItem = function (id, path, subpath, value) {return 0}

/**
 * Adds an item to the array at `path` and sets `value` at `subpath`.  Returns a handle to the added array item.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} subpath Subpath to set the value at.
 * @param {String} value Array item value to set.
 * @returns {Number}
 */
xelib.AddArrayItem = function (id, path, subpath, value) {return 0}

/**
 * Removes the first item in the array at `path` which matches `value` at `subpath`.
 * @param {Number} id Handle to start path resolution from.
 * @param {String} path Path to resolve.
 * @param {String} subpath Subpath to resolve in each array item.
 * @param {String} value Array item value to match.
 */
xelib.RemoveArrayItem = function (id, path, subpath, value) {}

/**
 * Moves the array item `id` to position `index`.
 * @param {Number} id Handle of the element to move.  The element must be in an unsorted array.
 * @param {Number} index Index to move the element to.
 */
xelib.MoveArrayItem = function (id, index) {}

/**
 * Copies element `id` into `id2`.  Records are copied as overrides if `asNew` is false.  Returns a handle to the copied element.
 * @param {Number} id Handle of the element to copy.
 * @param {Number} id2 Handle of the container to copy the element into.
 * @param {Boolean} asNew False to copy records as overrides.  Default false.
 * @returns {Number}
 */
xelib.CopyElement = function (id, id2, asNew = false) {return 0}

/**
 * Returns true if `id` is allowed to reference `signature`.
 * @param {Number} id Handle of the element to test.  The element must be able to contain a reference.
 * @param {String} signature Signature to test.
 * @returns {Boolean}
 */
xelib.GetSignatureAllowed = function (id, signature) {return false}

/**
 * Returns an array of all signatures `id` is allowed to reference.
 * @param {Number} id Handle of an element which can contain a reference.
 * @returns {Array}
 */
xelib.GetAllowedSignatures = function (id) {return []}

/**
 * Returns true if `id` has been modified during the current session.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.GetIsModified = function (id) {return false}

/**
 * Returns true if `id` has can be edited.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.GetIsEditable = function (id) {return false}

/**
 * Returns true if `id` can be removed.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.GetIsRemoveable = function (id) {return false}

/**
 * Returns true if elements can be added to `id`.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.GetCanAdd = function (id) {return false}

/**
 * Returns the `elementType` of `id`.
 * @param {Number} id
 * @returns {Number}
 */
xelib.ElementType = function (id) {return 0}

/**
 * Returns `id`'s element type.
 * @param {Number} id
 * @returns {Number}
 */
xelib.DefType = function (id) {return 0}

/**
 * Returns `id`'s definition type.
 * @param {Number} id
 * @returns {Number}
 */
xelib.SmashType = function (id) {return 0}

/**
 * Returns `id`'s value type.
 * @param {Number} id
 * @returns {Number}
 */
xelib.ValueType = function (id) {return 0}

/**
 * Returns true if `id` is a sorted array.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.IsSorted = function (id) {return false}

/**
 * Returns true if `id` contains flags.
 * @param {Number} id
 * @returns {Boolean}
 */
xelib.IsFlags = function (id) {return false}
