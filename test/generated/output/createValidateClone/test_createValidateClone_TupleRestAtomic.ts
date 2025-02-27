import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_createValidateClone_TupleRestAtomic = _test_validateClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input: any): typia.IValidation<typia.Primitive<TupleRestAtomic>> => {
        const validate = (input: any): typia.IValidation<TupleRestAtomic> => {
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TupleRestAtomic => {
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "[boolean, number, ...string]",
                            value: input,
                        })) &&
                        [
                            "boolean" === typeof input[0] ||
                                $report(true, {
                                    path: _path + "[0]",
                                    expected: "boolean",
                                    value: input[0],
                                }),
                            ("number" === typeof input[1] &&
                                Number.isFinite(input[1])) ||
                                $report(true, {
                                    path: _path + "[1]",
                                    expected: "number",
                                    value: input[1],
                                }),
                        ].every((flag: boolean) => flag) &&
                        (((Array.isArray(input.slice(2)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<string>",
                                value: input.slice(2),
                            })) &&
                            input
                                .slice(2)
                                .map(
                                    (elem: any, _index1: number) =>
                                        "string" === typeof elem ||
                                        $report(true, {
                                            path:
                                                _path +
                                                "[" +
                                                (2 + _index1) +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<string>",
                                value: input.slice(2),
                            }))) ||
                    $report(true, {
                        path: _path + "",
                        expected: "[boolean, number, ...string]",
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
            input: TupleRestAtomic,
        ): typia.Primitive<TupleRestAtomic> => {
            return Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Array.isArray(input.slice(2)) &&
                input.slice(2).every((elem: any) => "string" === typeof elem)
                ? ([
                      input[0] as any,
                      input[1] as any,
                      ...(Array.isArray(input.slice(2))
                          ? input.slice(2).map((elem: any) => elem as any)
                          : (input.slice(2) as any)),
                  ] as any)
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    TupleRestAtomic.SPOILERS,
);
