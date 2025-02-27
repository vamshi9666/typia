import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createStringify_TagAtomicUnion = _test_stringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createStringify<TagAtomicUnion>(),
);
