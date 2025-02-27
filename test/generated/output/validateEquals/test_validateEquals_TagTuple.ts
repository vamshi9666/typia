import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagTuple } from "../../../structures/TagTuple";

export const test_validateEquals_TagTuple = _test_validateEquals(
    "TagTuple",
    TagTuple.generate,
    (input) =>
        ((input: any): typia.IValidation<TagTuple> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagTuple => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((Array.isArray(input.tuple) ||
                            $report(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            })) &&
                            (input.tuple.length === 4 ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple",
                                    expected:
                                        "[string, number, Array<string>, Array<number>]",
                                    value: input.tuple,
                                })) &&
                            [
                                ("string" === typeof input.tuple[0] &&
                                    3 <= input.tuple[0].length &&
                                    7 >= input.tuple[0].length) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[0]",
                                        expected: "string",
                                        value: input.tuple[0],
                                    }),
                                ("number" === typeof input.tuple[1] &&
                                    3 <= input.tuple[1] &&
                                    7 >= input.tuple[1]) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[1]",
                                        expected: "number",
                                        value: input.tuple[1],
                                    }),
                                (((Array.isArray(input.tuple[2]) &&
                                    3 <= input.tuple[2].length &&
                                    7 >= input.tuple[2].length) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[2]",
                                        expected: "Array<string>",
                                        value: input.tuple[2],
                                    })) &&
                                    input.tuple[2]
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ("string" === typeof elem &&
                                                    3 <= elem.length &&
                                                    7 >= elem.length) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".tuple[2][" +
                                                        _index1 +
                                                        "]",
                                                    expected: "string",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[2]",
                                        expected: "Array<string>",
                                        value: input.tuple[2],
                                    }),
                                (((Array.isArray(input.tuple[3]) &&
                                    3 <= input.tuple[3].length &&
                                    7 >= input.tuple[3].length) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[3]",
                                        expected: "Array<number>",
                                        value: input.tuple[3],
                                    })) &&
                                    input.tuple[3]
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ("number" === typeof elem &&
                                                    3 <= elem &&
                                                    7 >= elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".tuple[3][" +
                                                        _index2 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[3]",
                                        expected: "Array<number>",
                                        value: input.tuple[3],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (["tuple"].some((prop) => key === prop))
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<TagTuple>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<TagTuple>",
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
        })(input),
);
