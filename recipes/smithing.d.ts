export interface Smithing {
    addition: SmithingItem;
    block: string;
    input: SmithingItem;
    output: SmithingOutput;
    template: SmithingItem;
}
export interface SmithingItem {
    meta: number;
    name: string;
}
export interface SmithingOutput {
    name: string;
}
