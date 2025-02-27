import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagTuple } from "../../../structures/TagTuple";

export const test_assertClone_TagTuple = _test_assertClone(
    "TagTuple",
    TagTuple.generate,
    (input) =>
        ((input: any): typia.Primitive<TagTuple> => {
            const assert = (input: any): TagTuple => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagTuple => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.tuple) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            })) &&
                        (input.tuple.length === 4 ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[string, number, Array<string>, Array<number>]",
                                value: input.tuple,
                            })) &&
                        (("string" === typeof input.tuple[0] &&
                            3 <= input.tuple[0].length &&
                            7 >= input.tuple[0].length) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[0]",
                                expected: "string",
                                value: input.tuple[0],
                            })) &&
                        (("number" === typeof input.tuple[1] &&
                            3 <= input.tuple[1] &&
                            7 >= input.tuple[1]) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[1]",
                                expected: "number",
                                value: input.tuple[1],
                            })) &&
                        ((Array.isArray(input.tuple[2]) &&
                            3 <= input.tuple[2].length &&
                            7 >= input.tuple[2].length) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[2]",
                                expected: "Array<string>",
                                value: input.tuple[2],
                            })) &&
                        input.tuple[2].every(
                            (elem: any, _index1: number) =>
                                ("string" === typeof elem &&
                                    3 <= elem.length &&
                                    7 >= elem.length) ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[2][" + _index1 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        ) &&
                        ((Array.isArray(input.tuple[3]) &&
                            3 <= input.tuple[3].length &&
                            7 >= input.tuple[3].length) ||
                            $guard(_exceptionable, {
                                path: _path + ".tuple[3]",
                                expected: "Array<number>",
                                value: input.tuple[3],
                            })) &&
                        input.tuple[3].every(
                            (elem: any, _index2: number) =>
                                ("number" === typeof elem &&
                                    3 <= elem &&
                                    7 >= elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".tuple[3][" + _index2 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        );
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<TagTuple>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (input: TagTuple): typia.Primitive<TagTuple> => {
                const $co0 = (input: any): any => ({
                    tuple:
                        Array.isArray(input.tuple) &&
                        input.tuple.length === 4 &&
                        "string" === typeof input.tuple[0] &&
                        "number" === typeof input.tuple[1] &&
                        Array.isArray(input.tuple[2]) &&
                        input.tuple[2].every(
                            (elem: any) => "string" === typeof elem,
                        ) &&
                        Array.isArray(input.tuple[3]) &&
                        input.tuple[3].every(
                            (elem: any) => "number" === typeof elem,
                        )
                            ? ([
                                  input.tuple[0] as any,
                                  input.tuple[1] as any,
                                  Array.isArray(input.tuple[2])
                                      ? input.tuple[2].map(
                                            (elem: any) => elem as any,
                                        )
                                      : (input.tuple[2] as any),
                                  Array.isArray(input.tuple[3])
                                      ? input.tuple[3].map(
                                            (elem: any) => elem as any,
                                        )
                                      : (input.tuple[3] as any),
                              ] as any)
                            : (input.tuple as any),
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    TagTuple.SPOILERS,
);
