export interface Smelting {
    block: string;
    input: SmeltingInput;
    output: SmeltingOutput;
}
export interface SmeltingInput {
    meta?: number | null;
    name: string;
    block_states?: string | null;
}
export interface SmeltingOutput {
    name: string;
    block_states?: string | null;
}
