import typia from "../../../src";
import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_InstanceUnion = _test_assert(
    "InstanceUnion",
    InstanceUnion.generate,
    (input) => typia.assert(input),
);