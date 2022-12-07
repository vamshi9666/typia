import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectNullable = _test_assertParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => TSON.assertParse<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);