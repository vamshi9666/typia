import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ArrayAny = _test_validateParse(
    "ArrayAny",
    ArrayAny.generate,
    (input) => TSON.validateParse<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
