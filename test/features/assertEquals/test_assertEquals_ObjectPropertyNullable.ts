import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertEquals_ObjectPropertyNullable = _test_assertEquals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.assertEquals(input),
);
