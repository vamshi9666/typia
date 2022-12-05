import { Spoiler } from "../internal/Spoiler";

export interface TestStructure<T> {
    name: string;
    generate?(): T;
    SPOILERS?: Spoiler<T>[];
    ADDABLE?: boolean;
    BINARABLE?: boolean;
    JSONABLE?: boolean;
    PRIMITIVE?: boolean;
}
