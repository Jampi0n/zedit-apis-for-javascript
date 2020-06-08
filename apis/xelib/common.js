/* global xelib */

/**
 * Returns true if the `Keywords` array on `record` has an element matching `value`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasKeyword = function (record, value) {return false}

/**
 * Finds the first item in the `Keywords` array on `record` matching `value`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetKeyword = function (record, value) {return 0}

/**
 * Adds an item to the `Keywords` array on `record`, setting `` to `value`.  Returns a handle to the added Keyword element.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.AddKeyword = function (record, value) {return 0}

/**
 * Removes the first item in the `Keywords` array on `record` matching `value`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveKeyword = function (record, value) {}

/**
 * Returns true if the `FormIDs` array on `record` has an element matching `value`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasFormID = function (record, value) {return false}

/**
 * Finds the first item in the `FormIDs` array on `record` matching `value`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetFormID = function (record, value) {return 0}

/**
 * Adds an item to the `FormIDs` array on `record`, setting `` to `value`.  Returns a handle to the added Form I D element.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.AddFormID = function (record, value) {return 0}

/**
 * Removes the first item in the `FormIDs` array on `record` matching `value`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveFormID = function (record, value) {}

/**
 * Returns true if the `Music Tracks` array on `record` has an element matching `value`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasMusicTrack = function (record, value) {return false}

/**
 * Finds the first item in the `Music Tracks` array on `record` matching `value`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetMusicTrack = function (record, value) {return 0}

/**
 * Adds an item to the `Music Tracks` array on `record`, setting `` to `value`.  Returns a handle to the added Music Track element.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.AddMusicTrack = function (record, value) {return 0}

/**
 * Removes the first item in the `Music Tracks` array on `record` matching `value`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveMusicTrack = function (record, value) {}

/**
 * Returns true if the `Footstep Sets` array on `record` has an element matching `value`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasFootstep = function (record, value) {return false}

/**
 * Finds the first item in the `Footstep Sets` array on `record` matching `value`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetFootstep = function (record, value) {return 0}

/**
 * Adds an item to the `Footstep Sets` array on `record`, setting `` to `value`.  Returns a handle to the added Footstep element.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.AddFootstep = function (record, value) {return 0}

/**
 * Removes the first item in the `Footstep Sets` array on `record` matching `value`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveFootstep = function (record, value) {}

/**
 * Returns true if the `Additional Races` array on `record` has an element matching `value`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasAdditionalRace = function (record, value) {return false}

/**
 * Finds the first item in the `Additional Races` array on `record` matching `value`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetAdditionalRace = function (record, value) {return 0}

/**
 * Adds an `value` the `Additional Races` array on `record`.  Returns a handle to the added Additional Race element.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.AddAdditionalRace = function (record, value) {return 0}

/**
 * Removes the first item in the `Additional Races` array on `record` matching `value`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveAdditionalRace = function (record, value) {}

/**
 * Returns true if the `Perks` array on `record` has an element matching `value` at path `Perk`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasPerk = function (record, value) {return false}

/**
 * Finds the first item in the `Perks` array on `record` matching `value` at path `Perk`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetPerk = function (record, value) {return 0}

/**
 * Adds an item to the `Perk` array on `record`, setting `Perk` to `value` and `rank` if provided.  Returns a handle to the added Perk element.
 * @param {Number} record
 * @param {String} value
 * @param {String} rank Optional.
 * @returns {Number}
 */
xelib.AddPerk = function (record, value, rank) {return 0}

/**
 * Removes the first item in the `Perks` array on `record` matching `value` at `Perk`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemovePerk = function (record, value) {}

/**
 * Returns true if the `Effects` array on `record` has an element matching `value` at `EFID - Base Effect`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasEffect = function (record, value) {return false}

/**
 * Finds the first item in the `Effects` array on `record` matching `value` at `EFID - Base Effect`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetEffect = function (record, value) {return 0}

/**
 * Adds an item to the `Effects` array on `record`, setting `EFID - Base Effect` to `value`, `EFIT\Magnitude` to `value2`, `EFIT\Area` to `value3`, and `EFIT\Duration` to `value4`.  Returns a handle to the added Effect element.
 * @param {Number} record
 * @param {String} value
 * @param {String} value2
 * @param {String} value3
 * @param {String} value4
 * @returns {Number}
 */
xelib.AddEffect = function (record, value, value2, value3, value4) {return 0}

/**
 * Removes the first item in the `Effects` array on `record` matching `value` at `EFID - Base Effect`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveEffect = function (record, value) {}

/**
 * Returns true if the `Items` array on `record` has an element matching `value` at `CNTO\Item`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasItem = function (record, value) {return false}

/**
 * Finds the first item in the `Items` array on `record` matching `value` at `CNTO\Item`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetItem = function (record, value) {return 0}

/**
 * Adds an item to the `Items` array on `record`, setting `CNTO\Item` to `value` and `CNTO\Count` to `value2`.  Returns a handle to the added Item element.
 * @param {Number} record
 * @param {String} value
 * @param {String} value2
 * @returns {Number}
 */
xelib.AddItem = function (record, value, value2) {return 0}

/**
 * Removes the first item in the `Items` array on `record` matching `value` at `CNTO\Item`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveItem = function (record, value) {}

/**
 * Returns true if the `Leveled List Entries` array on `record` has an element matching `value` at `LVLO\Reference`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasLeveledEntry = function (record, value) {return false}

/**
 * Finds the first item in the `Leveled List Entries` array on `record` matching `value` at `LVLO\Reference`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetLeveledEntry = function (record, value) {return 0}

/**
 * Adds an item to the `Leveled List Entries` array on `record`, setting `LVLO\Reference` to `value`, `LVLO\Level` to `value2`, and `LVLO\Count` to `value3`.  Returns a handle to the added Leveled Entry element.
 * @param {Number} record
 * @param {String} value
 * @param {String} value2
 * @param {String} value3
 * @returns {Number}
 */
xelib.AddLeveledEntry = function (record, value, value2, value3) {return 0}

/**
 * Removes the first item in the `Leveled List Entries` array on `record` matching `value` at `LVLO\Reference`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveLeveledEntry = function (record, value) {}

/**
 * Returns true if the `VMAD\Scripts` array on `record` has an element matching `value` at `scriptName`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasScript = function (record, value) {return false}

/**
 * Finds the first item in the `VMAD\Scripts` array on `record` matching `value` at `scriptName`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetScript = function (record, value) {return 0}

/**
 * Adds an item to the `VMAD\Scripts` array on `record`, setting `scriptName` to `value` and `Flags` to `value2`.  Returns a handle to the added Script element.
 * @param {Number} record
 * @param {String} value
 * @param {String} value2
 * @returns {Number}
 */
xelib.AddScript = function (record, value, value2) {return 0}

/**
 * Removes the first item in the `VMAD\Scripts` array on `record` matching `value` at `scriptName`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveScript = function (record, value) {}

/**
 * Returns true if the `Properties` array on `scriptElement` has an element matching `value` at `propertyName`.
 * @param {Number} scriptElement
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasScriptProperty = function (scriptElement, value) {return false}

/**
 * Finds the first item in the `Properties` array on `scriptElement` matching `value` at `propertyName`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} scriptElement
 * @param {String} value
 * @returns {Number}
 */
xelib.GetScriptProperty = function (scriptElement, value) {return 0}

/**
 * Adds an item to the `Properties` array on `scriptElement`, setting `propertyName` to `value`, `Type` to `value2`, and `Flags` to `value3`.  Returns a handle to the added Script Property element.
 * @param {Number} scriptElement
 * @param {String} value
 * @param {String} value2
 * @param {String} value3
 * @returns {Number}
 */
xelib.AddScriptProperty = function (
  scriptElement, value, value2, value3) {return 0}

/**
 * Removes the first item in the `Properties` array on `scriptElement` matching `value` at `propertyName`.
 * @param {Number} scriptElement
 * @param {String} value
 */
xelib.RemoveScriptProperty = function (scriptElement, value) {}

/**
 * Returns true if the `Conditions` array on `record` has an element matching `value` at `CTDA\Function`.
 * @param {Number} record
 * @param {String} value
 * @returns {Boolean}
 */
xelib.HasCondition = function (record, value) {return false}

/**
 * Finds the first item in the `Conditions` array on `record` matching `value` at `CTDA\Function`.  Returns a handle to the element if found, else returns `0`.
 * @param {Number} record
 * @param {String} value
 * @returns {Number}
 */
xelib.GetCondition = function (record, value) {return 0}

/**
 * Adds an item to the `Conditions` array on `record`, setting `CTDA\Function` to `value`, `CTDA\Type` to `value2`, `CTDA\Comparison Value` to `value3`, and `CTDA\Parameter #1` to `value4`.  Returns a handle to the added Condition element.
 * @param {Number} record
 * @param {String} value
 * @param {String} value2
 * @param {String} value3
 * @param {String} value4
 * @returns {Number}
 */
xelib.AddCondition = function (record, value, value2, value3, value4) {return 0}

/**
 * Removes the first item in the `Conditions` array on `record` matching `value` at `CTDA\Function`.
 * @param {Number} record
 * @param {String} value
 */
xelib.RemoveCondition = function (record, value) {}

/**
 * Returns the value at `DATA\Value` on `record`.
 * @param {Number} record
 * @returns {Number}
 */
xelib.GetGoldValue = function (record) {return 0}

/**
 * Sets the value at `DATA\Value` on `record` to `value`.
 * @param {Number} record
 * @param {Number} value
 */
xelib.SetGoldValue = function (record, value) {}

/**
 * Returns the value at `DATA\Weight` on `record`.
 * @param {Number} record
 * @returns {Number}
 */
xelib.GetWeight = function (record) {return 0}

/**
 * Sets the value at `DATA\Weight` on `record` to `value`.
 * @param {Number} record
 * @param {Number} value
 */
xelib.SetWeight = function (record, value) {}

/**
 * Returns the value at `DATA\Damage` on `record`.
 * @param {Number} record
 * @returns {Number}
 */
xelib.GetDamage = function (record) {return 0}

/**
 * Sets the value at `DATA\Damage` on `record` to `value`.
 * @param {Number} record
 * @param {Number} value
 */
xelib.SetDamage = function (record, value) {}

/**
 * Returns the value at `DNAM` on `record`.
 * @param {Number} record
 * @returns {Number}
 */
xelib.GetArmorRating = function (record) {return 0}

/**
 * Sets the value at `DNAM` on `record` to `value`.
 * @param {Number} record
 * @param {Number} value
 */
xelib.SetArmorRating = function (record, value) {}

/**
 * Returns the value of `[BODT|BOD2]\Armor Type` on `record`.
 * @param {Number} record
 * @returns {String}
 */
xelib.GetArmorType = function (record) {return ''}

/**
 * Sets the value of `[BODT|BOD2]\Armor Type` on `record` to `armorType`.
 * @param {Number} record
 * @param {String} armorType
 */
xelib.SetArmorType = function (record, armorType) {}

/**
 * Returns the state of flag Female at `ACBS\Flags` on `record`.
 * @param {Number} record
 * @returns {Boolean}
 */
xelib.GetIsFemale = function (record) {return false}

/**
 * Sets flag Female at `ACBS\Flags` on `record` to `state`.
 * @param {Number} record
 * @param {Boolean} state
 */
xelib.SetIsFemale = function (record, state) {}

/**
 * Returns the state of flag Essential at `ACBS\Flags` on `record`.
 * @param {Number} record
 * @returns {Boolean}
 */
xelib.GetIsEssential = function (record) {return false}

/**
 * Sets flag Essential at `ACBS\Flags` on `record` to `state`.
 * @param {Number} record
 * @param {Boolean} state
 */
xelib.SetIsEssential = function (record, state) {}

/**
 * Returns the state of flag Unique at `ACBS\Flags` on `record`.
 * @param {Number} record
 * @returns {Boolean}
 */
xelib.GetIsUnique = function (record) {return false}

/**
 * Sets flag Unique at `ACBS\Flags` on `record` to `state`.
 * @param {Number} record
 * @param {Boolean} state
 */
xelib.SetIsUnique = function (record, state) {}
