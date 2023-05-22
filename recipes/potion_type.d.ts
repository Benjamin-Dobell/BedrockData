export interface PotionType {
    ingredient: PotionTypeIngredient;
    input: PotionTypeInput;
    output: PotionTypeOutput;
}
export interface PotionTypeIngredient {
    block_states?: string | null;
    name: string;
}
export interface PotionTypeInput {
    name: string;
    meta?: number | null;
}
export interface PotionTypeOutput {
    meta: number;
    name: string;
}
