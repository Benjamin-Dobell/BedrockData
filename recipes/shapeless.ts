export interface Shapeless {
    block: string;
    input?: (ShapelessInput)[] | null;
    output?: (ShapelessOutput)[] | null;
    priority: number;
}
export interface ShapelessInput {
    block_states?: string | null;
    name?: string | null;
    meta?: number | null;
    tag?: string | null;
}
export interface ShapelessOutput {
    meta?: number | null;
    name: string;
    block_states?: string | null;
    count?: number | null;
    nbt?: string | null;
}
