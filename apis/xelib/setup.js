/* global xelib */

xelib.loaderStates = {
  lsInactive: 0,
  lsActive: 1,
  lsDone: 2,
  lsError: 3,
}

xelib.gameModes = {
  gmFNV: 0,
  gmFO3: 1,
  gmTES4: 2,
  gmTES5: 3,
  gmSSE: 4,
  gmFO4: 5,
}

/**
 * Retrieves the path to the game corresponding to `gameMode` from the registry.  Returns an empty string if the game path cannot be found.  See the `gameModes` enumeration for a list of allowed valid game modes.
 * @param {Number} gameMode
 * @returns {String}
 */
xelib.GetGamePath = function (gameMode) {return ''}

/**
 * Sets the game path to be used when loading plugin and resource files to `gamePath`.
 * @param {String} gamePath
 */
xelib.SetGamePath = function (gamePath) {}

/**
 * Retrieves the the language used for `gameMode` from the game INI file.  Returns an empty string if the game INI file cannot be found.  See the `gameModes` enumeration for a list of allowed valid game modes.
 * @param {Number} gameMode
 * @returns {String}
 */
xelib.GetGameLanguage = function (gameMode) {return ''}

/**
 * Sets the language to be used when loading string files to `language`.
 * @param {String} language
 */
xelib.SetLanguage = function (language) {}

/**
 * Sets the game mode to `gameMode`.  See the `gameModes` enumeration for a list of allowed valid game modes.
 * @param {Number} gameMode
 */
xelib.SetGameMode = function (gameMode) {}

/**
 * Returns the user's load order determined from loadorder.txt, plugins.txt, or plugin dates depending on the game and available files.  The load order is returned as a list of filenames separated by `\r\n`.
 * @returns {String}
 */
xelib.GetLoadOrder = function () {return ''}

/**
 * Returns the user's active plugins determined from plugins.txt. Active plugins are returned as a list of filenames separated by `\r\n`.
 * @returns {String}
 */
xelib.GetActivePlugins = function () {return ''}

/**
 * Loads plugin files in `loadOrder`.  If `smartLoad` is set to true, master files required by files in `loadOrder` will be automatically loaded as necessary.  Plugin loading is performed in a background thread, use `GetLoaderStatus` to track the loader and determine when it is done.
 * @param {String} loadOrder List of filenames separated by \r\n to load.
 * @param {Boolean} smartLoad Default true.
 */
xelib.LoadPlugins = function (loadOrder, smartLoad = true) {}

/**
 * Loads the plugin file `filename` at the next available load order position after currently loaded plugins files.  Plugin loading is performed in a background thread, use `GetLoaderStatus` to track the loader and determine when it is done.
 * @param {String} filename
 */
xelib.LoadPlugin = function (filename) {}

/**
 * Loads the header of plugin file `filename` and returns a handle to it.  This plugin should be unloaded with `UnloadPlugin` once you're done with it.  Note: Unlike `LoadPlugin`, this function does not use a background thread.
 * @param {String} filename
 */
xelib.LoadPluginHeader = function (filename) {}

/**
 * Builds referenced by information for the plugin file `id`.  If `id` is 0 reference information will be built for all loaded plugins.
 * @param {Number} id
 * @param {Boolean} sync When false the references will be built asynchronously using the loader.  Use GetLoaderStatus to see when reference building is complete.  Defaults to true.
 */
xelib.BuildReferences = function (id, sync = true) {}

/**
 * Unloads the plugin file `id`.  Only plugins at the end of the active load order which have not have references built can be unloaded.  Plugin headers loaded with `LoadPluginHeader` can also be unloaded.
 * @param {Number} id
 */
xelib.UnloadPlugin = function (id) {}

/**
 * Returns the status of the loader.  See `loaderStates` for more information.
 * @returns {Number}
 */
xelib.GetLoaderStatus = function () {return 0}

/**
 * Returns an array of all loaded filenames.  Excludes hardcoded files if `excludeHardcoded` is true.
 * @param {Boolean} excludeHardcoded Default true.
 * @returns {Array}
 */
xelib.GetLoadedFileNames = function (excludeHardcoded = true) {return []}
