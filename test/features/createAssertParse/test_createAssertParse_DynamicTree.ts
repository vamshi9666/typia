import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicTree = _test_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    TSON.createAssertParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);