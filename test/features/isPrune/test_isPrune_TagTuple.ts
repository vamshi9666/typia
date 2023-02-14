import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagTuple = _test_isPrune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.isPrune(input),
    TagTuple.SPOILERS,
);