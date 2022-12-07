import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicTree = _test_validateStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => TSON.validateStringify(input),
    DynamicTree.SPOILERS,
);