/* global xelib */

xelib.sortBy = {
  None: 0,
  FormID: 1,
  EditorID: 2,
  Name: 3,
}

/**
 * Initializes XEditLib.  This should be called after the DLL loaded to prepare the library for future function calls.
 */
xelib.Initialize = function () {}

/**
 * Finalizes XEditLib.  This should be called just before the DLL is unloaded to rename saved files, save logs, and free all memory used by the library.
 */
xelib.Finalize = function () {}

/**
 * Gets the value of a global from the library.  Supported globals include:





 - ProgramPath: The path to the folder containing XEditLib.dll.

 - Version: The version of XEditLib.dll.

 - GameName: The short game name associated with the current game mode.

 - AppName: The abbreviated game name associated with the current game mode.

 - LongGameName: The full game name associated with the current game mode.

 - DataPath: The game data path associated with the current game mode.

 - AppDataPath: The game application data path associated with the current game mode.

 - MyGamesPath: The my games folder path associated with the current game mode.

 - GameIniPath: The path to the INI file associated with the current game mode.
 * @param {String} key The name of the global you want to get.
 * @returns {String}
 */
xelib.GetGlobal = function (key) {return ''}

/**
 * Returns a list of name value pairs for all globals.  Entries are separated by `\r\n`, and name value pairs are separated by `=`.
 * @returns {String}
 */
xelib.GetGlobals = function () {return ''}

/**
 * Sets the sort mode to be used by `GetElements` when the `sort` argument is set to true.
 * @param {String} mode The key of the sort mode to use.  See the sortModes enumeration above for more information.
 * @param {Boolean} reverse Whether or not to reverse elements after sorting.  False corresponds to sorting in ascending order, and true corresponds to sorting in descending order.
 */
xelib.SetSortMode = function (mode, reverse) {}

/**
 * Releases the input handle if it is allocated.
 * @param {Number} id The handle to release.
 */
xelib.Release = function (id) {}

/**
 * Releases the input handle if it is allocated.  For use with handles returned by `GetNodes`.
 * @param {Number} id The handle to release.
 */
xelib.ReleaseNodes = function (id) {}

/**
 * Finds other handles to a particular interface.
 * @param {Number} id Handle to an element to find duplicate handles of.
 * @returns {Array}
 */
xelib.GetDuplicateHandles = function (id) {return []}
