import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_createAssertStringify_ConstantAtomicSimple =
    _test_assertStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        (input: any): string => {
            const assert = (input: any): ConstantAtomicSimple => {
                const $guard = (typia.createAssertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantAtomicSimple => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: '[false, true, 2, "three"]',
                                value: input,
                            })) &&
                        (input.length === 4 ||
                            $guard(true, {
                                path: _path + "",
                                expected: '[false, true, 2, "three"]',
                                value: input,
                            })) &&
                        (false === input[0] ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "false",
                                value: input[0],
                            })) &&
                        (true === input[1] ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "true",
                                value: input[1],
                            })) &&
                        (2 === input[2] ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: "2",
                                value: input[2],
                            })) &&
                        ("three" === input[3] ||
                            $guard(true, {
                                path: _path + "[3]",
                                expected: '"three"',
                                value: input[3],
                            }))
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ConstantAtomicSimple): string => {
                const $number = (typia.createAssertStringify as any).number;
                const $string = (typia.createAssertStringify as any).string;
                const $throws = (typia.createAssertStringify as any).throws;
                return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
                    if ("string" === typeof input[3]) return $string(input[3]);
                    if ("string" === typeof input[3])
                        return '"' + input[3] + '"';
                    $throws({
                        expected: '"three"',
                        value: input[3],
                    });
                })()}]`;
            };
            return stringify(assert(input));
        },
        ConstantAtomicSimple.SPOILERS,
    );
