import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createAssertClone_ConstantConstEnumeration =
    _test_assertClone(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        (input: any): typia.Primitive<ConstantConstEnumeration> => {
            const assert = (input: any): ConstantConstEnumeration => {
                const $guard = (typia.createAssertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ConstantConstEnumeration => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    'Array<("Four" | "Three" | 0 | 1 | 2)>',
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                0 === elem ||
                                1 === elem ||
                                2 === elem ||
                                "Three" === elem ||
                                "Four" === elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                                    value: elem,
                                }),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ConstantConstEnumeration,
            ): typia.Primitive<ConstantConstEnumeration> => {
                return Array.isArray(input)
                    ? input.map((elem: any) => elem as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        },
        ConstantConstEnumeration.SPOILERS,
    );
