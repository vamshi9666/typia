import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_validateClone_ArrayAtomicAlias = _test_validateClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<
                [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ]
            >
        > => {
            const validate = (
                input: any,
            ): typia.IValidation<
                [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ]
            > => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ] => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Array<boolean>, Array<number>, Array<string>]",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[Array<boolean>, Array<number>, Array<string>]",
                                    value: input,
                                })) &&
                            [
                                ((Array.isArray(input[0]) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "Array<boolean>",
                                        value: input[0],
                                    })) &&
                                    input[0]
                                        .map(
                                            (elem: any, _index1: number) =>
                                                "boolean" === typeof elem ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[0][" +
                                                        _index1 +
                                                        "]",
                                                    expected: "boolean",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "Array<boolean>",
                                        value: input[0],
                                    }),
                                ((Array.isArray(input[1]) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "Array<number>",
                                        value: input[1],
                                    })) &&
                                    input[1]
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[1][" +
                                                        _index2 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "Array<number>",
                                        value: input[1],
                                    }),
                                ((Array.isArray(input[2]) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected: "Array<string>",
                                        value: input[2],
                                    })) &&
                                    input[2]
                                        .map(
                                            (elem: any, _index3: number) =>
                                                "string" === typeof elem ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[2][" +
                                                        _index3 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected: "Array<string>",
                                        value: input[2],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Array<boolean>, Array<number>, Array<string>]",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ],
            ): typia.Primitive<
                [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ]
            > => {
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
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    ArrayAtomicAlias.SPOILERS,
);
