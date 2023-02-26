import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectLiteralProperty = _test_isStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: ObjectLiteralProperty.ISomething): string | null => {
            const is = (
                input: any,
            ): input is ObjectLiteralProperty.ISomething => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" ===
                        typeof input["something-interesting-do-you-want?"] &&
                    "string" === typeof input["or-something-crazy-do-you-want?"]
                );
            };
            const stringify = (
                input: ObjectLiteralProperty.ISomething,
            ): string => {
                const $string = (typia.isStringify as any).string;
                return `{"something-interesting-do-you-want?":${$string(
                    input["something-interesting-do-you-want?"],
                )},"or-something-crazy-do-you-want?":${$string(
                    input["or-something-crazy-do-you-want?"],
                )}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ObjectLiteralProperty.SPOILERS,
);