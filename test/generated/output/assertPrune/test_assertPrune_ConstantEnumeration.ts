import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_assertPrune_ConstantEnumeration = _test_assertPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((input: any): Array<ConstantEnumeration.Enumeration> => {
            const assert = (
                input: any,
            ): Array<ConstantEnumeration.Enumeration> => {
                const $guard = (typia.assertPrune as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ConstantEnumeration.Enumeration> => {
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
            const prune = (
                input: Array<ConstantEnumeration.Enumeration>,
            ): void => {};
            assert(input);
            prune(input);
            return input;
        })(input),
    ConstantEnumeration.SPOILERS,
);
