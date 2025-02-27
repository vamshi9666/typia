import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_assertClone_ToJsonArray = _test_assertClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ]
        > => {
            const assert = (
                input: any,
            ): [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ] => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ] => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
                                value: input,
                            })) &&
                        (input.length === 4 ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
                                value: input,
                            })) &&
                        (("object" === typeof input[0] && null !== input[0]) ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected:
                                    "Resolve<ToJsonArray.IArray<boolean>>",
                                value: input[0],
                            })) &&
                        $ao0(input[0], _path + "[0]", true) &&
                        (("object" === typeof input[1] && null !== input[1]) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "Resolve<ToJsonArray.IArray<number>>",
                                value: input[1],
                            })) &&
                        $ao1(input[1], _path + "[1]", true) &&
                        (("object" === typeof input[2] && null !== input[2]) ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: "Resolve<ToJsonArray.IArray<string>>",
                                value: input[2],
                            })) &&
                        $ao2(input[2], _path + "[2]", true) &&
                        (("object" === typeof input[3] && null !== input[3]) ||
                            $guard(true, {
                                path: _path + "[3]",
                                expected:
                                    "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
                                value: input[3],
                            })) &&
                        $ao3(input[3], _path + "[3]", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ],
            ): typia.Primitive<
                [
                    ToJsonArray.IArray<boolean>,
                    ToJsonArray.IArray<number>,
                    ToJsonArray.IArray<string>,
                    ToJsonArray.IArray<ToJsonArray.IObject>,
                ]
            > => {
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                });
                return Array.isArray(input) &&
                    input.length === 4 &&
                    true &&
                    true &&
                    true &&
                    true
                    ? ([
                          "object" === typeof input[0] &&
                          null !== input[0] &&
                          "function" === typeof input[0].toJSON
                              ? Array.isArray(input[0].toJSON())
                                  ? input[0]
                                        .toJSON()
                                        .map((elem: any) => elem as any)
                                  : (input[0].toJSON() as any)
                              : (input[0] as any),
                          "object" === typeof input[1] &&
                          null !== input[1] &&
                          "function" === typeof input[1].toJSON
                              ? Array.isArray(input[1].toJSON())
                                  ? input[1]
                                        .toJSON()
                                        .map((elem: any) => elem as any)
                                  : (input[1].toJSON() as any)
                              : (input[1] as any),
                          "object" === typeof input[2] &&
                          null !== input[2] &&
                          "function" === typeof input[2].toJSON
                              ? Array.isArray(input[2].toJSON())
                                  ? input[2]
                                        .toJSON()
                                        .map((elem: any) => elem as any)
                                  : (input[2].toJSON() as any)
                              : (input[2] as any),
                          "object" === typeof input[3] &&
                          null !== input[3] &&
                          "function" === typeof input[3].toJSON
                              ? Array.isArray(input[3].toJSON())
                                  ? input[3]
                                        .toJSON()
                                        .map((elem: any) =>
                                            "object" === typeof elem &&
                                            null !== elem
                                                ? $co0(elem)
                                                : (elem as any),
                                        )
                                  : (input[3].toJSON() as any)
                              : (input[3] as any),
                      ] as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
);
