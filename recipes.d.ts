import { PotionContainerChange } from './recipes/potion_container_change';
import { PotionType } from './recipes/potion_type';
import { Shaped } from './recipes/shaped';
import { Shapeless } from './recipes/shapeless';
import { Smelting } from './recipes/smelting';
import { Smithing } from './recipes/smithing';
import { SmithingTrim } from './recipes/smithing_trim';
import { SpecialHardcodedUuid } from './recipes/special_hardcoded';

declare module "recipes" {
    interface Recipes {
        potionContainerChange: PotionContainerChange[];
        potionType: PotionType[],
        shapedChemistry: Shaped[],
        shapedCrafting: Shaped[],
        shalessChemistry: Shapeless[],
        shapelessCrafting: Shapeless[],
        shapelessShulkerBox: Shapeless[],
        smelting: Smelting[],
        smithing: Smithing[],
        smithingTrim: SmithingTrim[],
        specialHardcoded: SpecialHardcodedUuid[],
    }
    export = Recipes;
}
