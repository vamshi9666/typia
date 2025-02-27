import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_assertStringify_ObjectInternal = _test_assertStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): ObjectInternal => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectInternal => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<ObjectInternal>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ObjectInternal): string => {
                const $string = (typia.assertStringify as any).string;
                return `{"id":${$string(input.id)},"name":${$string(
                    input.name,
                )}}`;
            };
            return stringify(assert(input));
        })(input),
    ObjectInternal.SPOILERS,
);
