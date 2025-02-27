import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_createAssertClone_ArrayAtomicSimple = _test_assertClone(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input: any): typia.Primitive<ArrayAtomicSimple> => {
        const assert = (input: any): ArrayAtomicSimple => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayAtomicSimple => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[Array<boolean>, Array<number>, Array<string>]",
                            value: input,
                        })) &&
                    (input.length === 3 ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[Array<boolean>, Array<number>, Array<string>]",
                            value: input,
                        })) &&
                    (Array.isArray(input[0]) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "Array<boolean>",
                            value: input[0],
                        })) &&
                    input[0].every(
                        (elem: any, _index1: number) =>
                            "boolean" === typeof elem ||
                            $guard(true, {
                                path: _path + "[0][" + _index1 + "]",
                                expected: "boolean",
                                value: elem,
                            }),
                    ) &&
                    (Array.isArray(input[1]) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "Array<number>",
                            value: input[1],
                        })) &&
                    input[1].every(
                        (elem: any, _index2: number) =>
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            $guard(true, {
                                path: _path + "[1][" + _index2 + "]",
                                expected: "number",
                                value: elem,
                            }),
                    ) &&
                    (Array.isArray(input[2]) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "Array<string>",
                            value: input[2],
                        })) &&
                    input[2].every(
                        (elem: any, _index3: number) =>
                            "string" === typeof elem ||
                            $guard(true, {
                                path: _path + "[2][" + _index3 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (
            input: ArrayAtomicSimple,
        ): typia.Primitive<ArrayAtomicSimple> => {
            return Array.isArray(input) &&
                input.length === 3 &&
                Array.isArray(input[0]) &&
                input[0].every((elem: any) => "boolean" === typeof elem) &&
                Array.isArray(input[1]) &&
                input[1].every((elem: any) => "number" === typeof elem) &&
                Array.isArray(input[2]) &&
                input[2].every((elem: any) => "string" === typeof elem)
                ? ([
                      Array.isArray(input[0])
                          ? input[0].map((elem: any) => elem as any)
                          : (input[0] as any),
                      Array.isArray(input[1])
                          ? input[1].map((elem: any) => elem as any)
                          : (input[1] as any),
                      Array.isArray(input[2])
                          ? input[2].map((elem: any) => elem as any)
                          : (input[2] as any),
                  ] as any)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ArrayAtomicSimple.SPOILERS,
);
