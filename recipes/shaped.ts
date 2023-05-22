export interface Shaped {
    block: string;
    input: ShapedInput;
    output?: (ShapedOutput)[] | null;
    priority: number;
    shape?: (string)[] | null;
}
export interface ShapedInput {
    A: ShapedIngredient;
    B?: ShapedIngredient | null;
    C?: ShapedIngredient | null;
    D?: ShapedIngredient | null;
}
export interface ShapedIngredient {
    block_states?: string | null;
    name: string;
    meta?: number | null;
}
export interface ShapedOutput {
    block_states?: string | null;
    count?: number | null;
    name: string;
    meta?: number | null;
}
