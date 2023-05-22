'use strict';
const fs = require('fs');

const bannerPatterns = require('./resources/banner_patterns.json');
const biomeIdMap = require('./resources/biome_id_map.json');
const blockIdToItemIdMap = require('./resources/block_id_to_item_id_map.json');
const blockStateMetaMap = require('./resources/block_state_meta_map.json');
const commandArgTypes = require('./resources/command_arg_types.json');
const creativeitems = require('./resources/creativeitems.json');
const entityIdMap = require('./resources/entity_id_map.json');
const itemTags = require('./resources/item_tags.json');
const levelSoundIdMap = require('./resources/level_sound_id_map.json');
const particleIdMap = require('./resources/particle_id_map.json');
const r16ToCurrentItemMap = require('./resources/r16_to_current_item_map.json');
const requiredItemList = require('./resources/required_item_list.json');

const recipes = require('./recipes');

const biomeDefinitions = fs.readFileSync(__dirname + '/resources/biome_definitions.nbt');
const canonicalBlockStates = fs.readFileSync(__dirname + '/resources/canonical_block_states.nbt');
const entityIdentifiers = fs.readFileSync(__dirname + '/resources/entity_identifiers.nbt');
const r12ToCurrentBlockMap = fs.readFileSync(__dirname + '/resources/r12_to_current_block_map.bin');

export {
    bannerPatterns,
    biomeDefinitions,
    biomeIdMap,
    blockIdToItemIdMap,
    blockStateMetaMap,
    canonicalBlockStates,
    commandArgTypes,
    creativeitems,
    entityIdentifiers,
    entityIdMap,
    itemTags,
    levelSoundIdMap,
    particleIdMap,
    r12ToCurrentBlockMap,
    r16ToCurrentItemMap,
    recipes,
    requiredItemList,
};
