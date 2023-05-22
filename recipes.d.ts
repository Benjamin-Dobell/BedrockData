import { PotionContainerChange } from './recipes/potion_container_change';
import { PotionType } from './recipes/potion_type';
import { Shaped } from './recipes/shaped';
import { Shapeless } from './recipes/shapeless';
import { Smelting } from './recipes/smelting';
import { Smithing } from './recipes/smithing';
import { SmithingTrim } from './recipes/smithing_trim';
import { SpecialHardcodedUuid } from './recipes/special_hardcoded';

declare module "@jsprismarine/bedrock-data/recipes" {
    export const potionContainerChange: PotionContainerChange[];
    export const potionType: PotionType[];
    export const shapedChemistry: Shaped[];
    export const shapedCrafting: Shaped[];
    export const shalessChemistry: Shapeless[];
    export const shapelessCrafting: Shapeless[];
    export const shapelessShulkerBox: Shapeless[];
    export const smelting: Smelting[];
    export const smithing: Smithing[];
    export const smithingTrim: SmithingTrim[];
    export const specialHardcoded: SpecialHardcodedUuid[];
}
