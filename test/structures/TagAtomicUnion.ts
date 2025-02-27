import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type TagAtomicUnion = TagAtomicUnion.Type[];
export namespace TagAtomicUnion {
    export interface Type {
        /**
         * @minimum 3
         * @minLength 3
         * @maxLength 7
         */
        value: number | string;
    }
    export function generate(): TagAtomicUnion {
        const output: TagAtomicUnion = [];
        for (const value of [3, 7])
            output.push({ value: TestRandomGenerator.string(value) });
        output.push({ value: 3 });
        return output;
    }
    export const SPOILERS: Spoiler<TagAtomicUnion>[] = [
        (input) => {
            input[0].value = "12";
            return ["$input[0].value"];
        },
        (input) => {
            input[1].value = "12345678";
            return ["$input[1].value"];
        },
        (input) => {
            input[2].value = 2;
            return ["$input[2].value"];
        },
    ];
}
