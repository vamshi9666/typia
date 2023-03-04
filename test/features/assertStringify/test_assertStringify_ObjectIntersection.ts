import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertStringify_ObjectIntersection = _test_assertStringify(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.assertStringify(input),
    ObjectIntersection.SPOILERS,
);