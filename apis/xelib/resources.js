/* global xelib */

xelib.archiveTypes = {
  baNone: 0,
  baTES3: 1,
  baFO3: 2,
  baSSE: 3,
  baFO4: 4,
  baFO4dds: 5,
}

/**
 * Extracts container `name` to `destination`, replacing existing files if `replace` is true.  Returns true if the container is extracted successfully.
 * @param {String} name
 * @param {String} destination
 * @param {Boolean} replace
 * @returns {Boolean}
 */
xelib.ExtractContainer = function (name, destination, replace) {return false}

/**
 * Extracts file `source` from container `name` to `destination`.  Returns true if the file is extracted successfully.
 * @param {String} name
 * @param {String} source
 * @param {String} destination
 * @returns {Boolean}
 */
xelib.ExtractFile = function (name, source, destination) {return false}

/**
 * Returns an array of the file paths in container `name` in `folder`.
 * @param {String} name
 * @param {String} folder
 * @returns {Array}
 */
xelib.GetContainerFiles = function (name, folder) {return []}

/**
 * Returns the name of the container where the winning version of the file `path` is stored.
 * @param {String} path
 * @returns {String}
 */
xelib.GetFileContainer = function (path) {return ''}

/**
 * Returns an array of the names of the currently loaded containers.
 * @returns {Array}
 */
xelib.GetLoadedContainers = function () {return []}

/**
 * Loads the container at `filePath`.  Returns true if the container is loaded succesfully.
 * @param {String} filePath
 * @returns {Boolean}
 */
xelib.LoadContainer = function (filePath) {return false}

/**
 * Creates a new archive `name` in `folder` containing files at the `filePaths` relative to `folder`.  Uses archive type `archiveType`.  Compresses the archive if `compress` is true and packs data if `share` is true.  Pass a hexadecimal integer as a string to `af` or `ff` to set custom archive flags or file flags, respectively.  See the `archiveTypes` enumeration for a list of allowed archive types.
 * @param {String} name
 * @param {String} folder
 * @param {String} filePaths
 * @param {Number} archiveType
 * @param {Boolean} compress
 * @param {Boolean} share
 * @param {String} af
 * @param {String} ff
 */
xelib.BuildArchive = function (
  name, folder, filePaths, archiveType, compress, share, af, ff) {}

/**
 * Return the pixel image data for the texture resource `resourceName`.
 * @param {String} resourceName
 * @returns {Object}
 */
xelib.GetTextureData = function (resourceName) {return null}
