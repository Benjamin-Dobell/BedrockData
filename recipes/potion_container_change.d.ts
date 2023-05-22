export interface PotionContainerChange {
    ingredient: PotionContainerChangeIngredient;
    input_item_name: string;
    output_item_name: string;
}
export interface PotionContainerChangeIngredient {
    name: string;
}
