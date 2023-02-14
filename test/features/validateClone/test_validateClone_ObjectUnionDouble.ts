import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectUnionDouble = _test_validateClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validateClone(input),
    ObjectUnionDouble.SPOILERS,
);