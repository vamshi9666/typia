import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_is_TupleRestObject = _test_is(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.is(input),
    TupleRestObject.SPOILERS,
);
