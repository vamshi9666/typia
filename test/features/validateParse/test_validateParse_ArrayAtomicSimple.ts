import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_validateParse_ArrayAtomicSimple = _test_validateParse(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.validateParse<ArrayAtomicSimple>(input),
    ArrayAtomicSimple.SPOILERS,
);
