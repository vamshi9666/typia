import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_is } from "../internal/_test_is";

export const test_is_TagLength = _test_is(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: any): input is Array<TagLength.Type> => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        })(input),
    TagLength.SPOILERS,
);