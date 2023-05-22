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
    interface BedrockData {
        bannerPatterns: BannerPattern[];
        biomeDefinitions: any;
        biomeIdMap: BiomeIdMap;
        blockIdToItemIdMap: BlockIdToItemIdMap;
        blockStateMetaMap: BlockStateMetaMapEntry[]
        canonicalBlockStates: any;
        commandArgTypes: CommandArgTypes;
        creativeitems: CreativeItem[];
        entityIdentifiers: any;
        entityIdMap: EntityIdMap;
        itemTags: ItemTags;
        levelSoundIdMap: LevelSoundIdMap;
        particleIdMap: ParticleIdMap;
        r12ToCurrentBlockMap: any;
        r16ToCurrentItemMap: R16ToCurrentItemMap;
        recipes: typeof Recipes;
        requiredItemList: RequiredItemList;
    }

    export = BedrockData;
}
