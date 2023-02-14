import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectPropertyNullable = _test_isClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.isClone(input),
    ObjectPropertyNullable.SPOILERS,
);