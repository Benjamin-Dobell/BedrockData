import { BannerPattern } from './banner_patterns';
import { BiomeIdMap } from './biome_id_map';
import { BlockIdToItemIdMap } from './block_id_to_item_id_map';
import { BlockStateMetaMapEntry } from './block_state_meta_map';
import { CommandArgTypes } from './command_arg_types';
import { CreativeItem } from './creativeitems';
import { EntityIdMap } from './entity_id_map';
import { ItemTags } from './item_tags';
import { LevelSoundIdMap } from './level_sound_id_map';
import { ParticleIdMap } from './particle_id_map';
import { R16ToCurrentItemMap } from './r16_to_current_item_map';
import Recipes = require("./recipes");
import { RequiredItemList } from './required_item_list';

declare module '@jsprismarine/bedrock-data' {
    export const bannerPatterns: BannerPattern[];
    export const biomeDefinitions: any;
    export const biomeIdMap: BiomeIdMap;
    export const blockIdToItemIdMap: BlockIdToItemIdMap;
    export const blockStateMetaMap: BlockStateMetaMapEntry[]
    export const canonicalBlockStates: any;
    export const commandArgTypes: CommandArgTypes;
    export const creativeitems: CreativeItem[];
    export const entityIdentifiers: any;
    export const entityIdMap: EntityIdMap;
    export const itemTags: ItemTags;
    export const levelSoundIdMap: LevelSoundIdMap;
    export const particleIdMap: ParticleIdMap;
    export const r12ToCurrentBlockMap: any;
    export const r16ToCurrentItemMap: R16ToCurrentItemMap;
    export const recipes: typeof Recipes;
    export const requiredItemList: RequiredItemList;
}
